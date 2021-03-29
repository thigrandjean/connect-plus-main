<template>
  <div class="search-locations">
    <div class="search-wrap">
      <div class="searchbox">
        <input
          id="adress-search"
          v-model="searchField"
          @focus="onFocus"
          @blur="onBlur"
          @input="onSearch"
          class="search-input"
          type="search"
          placeholder="Enter a zip code or a address"
        />
        <div :class="{ focused: isSearcFocused }" class="search-button">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.33332 2.33333C4.5719 2.33333 2.33332 4.57191 2.33332 7.33333C2.33332 10.0948 4.5719 12.3333 7.33332 12.3333C10.0947 12.3333 12.3333 10.0948 12.3333 7.33333C12.3333 4.57191 10.0947 2.33333 7.33332 2.33333ZM0.666656 7.33333C0.666656 3.65144 3.65143 0.666668 7.33332 0.666668C11.0152 0.666668 14 3.65144 14 7.33333C14 11.0152 11.0152 14 7.33332 14C3.65143 14 0.666656 11.0152 0.666656 7.33333Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9107 10.9107C11.2362 10.5853 11.7638 10.5853 12.0892 10.9107L17.0892 15.9107C17.4147 16.2362 17.4147 16.7638 17.0892 17.0893C16.7638 17.4147 16.2362 17.4147 15.9107 17.0893L10.9107 12.0893C10.5853 11.7638 10.5853 11.2362 10.9107 10.9107Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div
        class="search-results"
        v-if="showResults"
        id="address-search-results"
      >
        <ul class="search-results-list">
          <li
            class="search-results-item"
            v-for="(place, index) in searchResult"
            :key="`${index}-${place.properties.osm_id}`"
          >
            <a
              class="search-results-item-link"
              href="#"
              @click.prevent="searchItemClick(place.geometry.coordinates)"
            >
              <div class="address">
                {{
                  place.properties.name ? `${place.properties.name}, ` : null
                }}
                {{
                  place.properties.district
                    ? `${place.properties.district}, `
                    : null
                }}
                {{
                  place.properties.city ? `${place.properties.city}, ` : null
                }}
                {{
                  place.properties.state ? `${place.properties.state}, ` : null
                }}
                {{
                  place.properties.country
                    ? `${place.properties.country}`
                    : null
                }}
              </div>
              <div class="search-results-item-type">
                {{ place.properties.type }}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="map" v-show="!nomap">
      <ClientOnly>
        <l-map
          style="height: 100%; width: 100%"
          :zoom="zoom"
          :center="center"
          @ready="locateMe"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
          @update:bounds="boundsUpdated"
        >
          <l-tile-layer :url="url"></l-tile-layer>

          <l-feature-group ref="group">
            <l-marker
              v-for="item in markers"
              :key="item.subTitle"
              :lat-lng="item.latLng"
              :name="item.name"
              @click="centerUpdated(item.latLng)"
            >
              <l-tooltip>
                <h3 class="tooltip-title">
                  {{ item.subTitle }}
                </h3>
                <small>
                  {{ item.address
                  }}{{ item.address2 ? `, ${item.address2}` : null
                  }}{{ item.address3 ? `, ${item.address3}` : null }}</small
                >
              </l-tooltip>
              <l-icon
                v-if="item.address"
                :icon-size="[45, 52]"
                :icon-anchor="[22, 52]"
                :icon-url="markerIcon"
              />
            </l-marker>
          </l-feature-group>

          <l-control position="topright">
            <button
              class="locate-me-btn"
              aria-label="get my location"
              @click="locateMe"
            >
              <svg
                viewBox="0 0 48 48"
                height="24"
                width="24"
                focusable="false"
                role="img"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                class="StyledIconBase-ea9ulj-0 jZGNBW"
              >
                <title>Location icon</title>
                <path
                  d="M39.01 28.98A17 17 0 1 0 11 31.96l.02.02.02.02H11l10.09 10.7a4 4 0 0 0 5.82 0L37 32h-.04l.02-.02a16.76 16.76 0 0 0 2.03-3zm-15-1.48a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
                ></path>
              </svg>
            </button>
          </l-control>
        </l-map>
      </ClientOnly>
    </div>

    <transition name="apear">
      <div class="location-alert" v-show="gettingLocation" v-if="!nomap">
        <p>Getting your location</p>
      </div>
    </transition>

    <div class="locations">
      <ul class="locations-list">
        <SearchLocationsCard
          v-for="item in $t('locations.places')"
          :key="item.subTitle"
          :selected="selectedPlace"
          :content="item"
          @select="selectItem(item.latLng, item.subTitle)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import SearchLocationsCard from '../components/SearchLocationsCard'

import 'leaflet/dist/leaflet.css'
import '~/assets/style/geosearch.scss'

var Icon
if (process.isClient) {
  Icon = require('leaflet').Icon
  delete Icon.Default.prototype._getIconUrl
  Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  })
}
export default {
  props: { nomap: Boolean },
  components: {
    SearchLocationsCard,
  },
  data() {
    return {
      searchField: '',
      searchResult: [],
      showResults: false,
      isSearcFocused: false,
      showMap: true,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 4,
      center: [51.516795342679146, -0.13268908756585465],
      bounds: null,
      location: null,
      iconSize: [64, 74],
      markerIcon: require('../../src/assets/images/marker-icon.png'),
      staticAnchor: [16, 37],
      gettingLocation: false,
      errorStr: null,
      place: null,
      markers: null,
      selectedPlace: '',
    }
  },
  mounted() {
    this.markers = this.$t('locations.places')
  },

  methods: {
    addMarker(cord) {
      this.removeMarker()
      const markerToAdd = { latLng: cord, subTitle: 'You are here' }
      this.markers.push(markerToAdd)
    },
    removeMarker() {
      var filtered = this.markers.filter(function (el) {
        return el.subTitle != 'You are here'
      })

      this.markers = filtered
    },

    onSearch() {
      console.log(this.searchField)
      if (this.searchField.length < 4) {
        this.searchResult = []
        return
      }
      fetch(`https://photon.komoot.io/api/?q=${this.searchField}&limit=5`)
        .then((response) => response.json())
        .then((data) => {
          this.searchResult = data.features
          console.log(this.searchResult)
        })
    },
    onFocus() {
      this.isSearcFocused = true
      this.showIfHasResults()
    },
    onBlur() {
      this.isSearcFocused = false
    },
    zoomUpdated(zoom) {
      this.zoom = zoom
    },
    centerUpdated(center) {
      this.center = center
    },
    boundsUpdated(bounds) {
      this.bounds = bounds
    },
    searchItemClick(latLng) {
      const lat = latLng[1]
      const lng = latLng[0]
      const cords = [lat, lng]
      this.selectItem(cords)
      this.addMarker([lat, lng])
      this.showResults = false
    },
    showIfHasResults() {
      this.showResults = this.searchResult.length > 1
    },
    selectItem(latlang, itemName) {
      this.zoomUpdated(14)
      this.centerUpdated(latlang)
      this.selectedPlace = itemName
      console.log(`select: ${latlang}`)
    },
    async getLocation() {
      return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
          reject(new Error('Geolocation is not available.'))
        }

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve(pos)
          },
          (err) => {
            reject(err)
          }
        )
      })
    },
    async locateMe() {
      this.gettingLocation = true
      try {
        this.location = await this.getLocation()
        let Lat = this.location.coords.latitude
        let Lng = this.location.coords.longitude
        this.centerUpdated([Lat, Lng])
        this.addMarker([Lat, Lng])
        this.zoomUpdated(11)
        this.gettingLocation = false
      } catch (e) {
        this.errorStr = e.message
        console.log(this.errorStr)
        this.gettingLocation = false
      }
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15]
    },
  },
  watch: {
    searchResult: function () {
      this.showIfHasResults()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/vars.scss';

.search-locations {
}

.search-wrap {
  width: 100%;
  max-width: 585px;
  margin: 0 auto;
  padding: 1.25rem 1rem 1.785rem 1rem;
  box-sizing: border-box;
  position: relative;
}
.searchbox {
  border-bottom: 2px solid #757575;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2rem;
  position: relative;
}

.search-input {
  padding: 0 0 0 0;
  border-radius: 0;
  border: none;
  margin: 0;
  color: #757575;
  font-size: 1.142rem;
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1em;
    width: 1em;
    border-radius: 50em;
    background: url('~@/assets/images/x-close.png') no-repeat 50% 50%;
    background-size: contain;
  }
  &:focus {
    color: #353c50;
    outline: none;
  }
}
.search-button {
  background: none;
  border: none;
  outline: none;
  color: #757575;
  transition: color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &.focused {
    color: #353c50;
  }
}
.search-results {
  padding: 0.5rem 0 0 0;
  border: 2px solid #e9e9e9;
  background: white;
  position: absolute;
  right: 1rem;
  left: 1rem;
  top: 4.25rem;
  z-index: 1010;
}
.search-results-list {
}
.search-results-item-link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  border-bottom: 2px solid #e9e9e9;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #e9e9e9;
    outline: none;
  }
}
.search-results-item-type {
  background: #757575;
  width: auto;
  padding: 0.25rem 0.5rem;
  margin-top: 0.5rem;
  color: white;
  border-radius: 5px;
  font-size: 0.65rem;
  text-transform: uppercase;
}

.locations-list {
  padding: 2px 0;
  background: #e9e9e9;
  display: grid;
  row-gap: 2px;
  &::after {
    content: 'There’re no more addresses to show here.';
    display: flex;
    align-items: center;
    justify-content: center;
    color: #636363;
    min-height: 5rem;
    padding: 3rem;
    box-sizing: border-box;
    text-align: center;
  }
  @media (min-width: $bp-mobile) {
    column-gap: 2px;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.map {
  width: 100%;
  height: 21rem;
  background: $main-gold;
  position: relative;
}
.tooltip-title {
  margin: 0;
}
.locate-me-btn {
  background: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  color: #636363;
}
.location-alert {
  font-size: 1rem;
  text-align: center;
  background: #e9e9e9;
  padding: 0.5rem;
  color: #636363;
  p {
    margin: 0;
    padding: 0;
  }
}
.apear-enter-active,
.apear-leave-active {
  transition: all 0.3s;
}
.apear-enter, .apear-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height: 0;
}
</style>