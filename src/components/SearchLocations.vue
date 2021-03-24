<template>
  <div class="search-locations">
    <div class="search-wrap">
      <div class="searchbox">
        <input
          v-model="searchField"
          @focus="onFocus"
          @blur="onBlur"
          @change="onSearch"
          class="search-input"
          type="search"
          placeholder="Enter a zip code or a address"
        />
        <button :class="{ focused: isSearcFocused }" class="search-button">
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
        </button>
      </div>
    </div>

    <div class="map" v-show="showMap">
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
              v-for="item in $t('locations.places')"
              :key="item.subTitle"
              :lat-lng="item.latLng"
              @click="centerUpdated(item.latLng)"
            ></l-marker>
          </l-feature-group>

          <l-control position="topright">
            <button @click="locateMe">My location</button>
          </l-control>
        </l-map>
      </ClientOnly>
    </div>

    <transition name="apear">
      <div class="location-alert" v-show="gettingLocation">
        <p>Getting your location</p>
      </div>
    </transition>

    <div class="locations">
      <ul class="locations-list">
        <SearchLocationsCard
          v-for="item in $t('locations.places')"
          :key="item.subTitle"
          :content="item"
          @select="selectItem(item.latLng)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import SearchLocationsCard from '../components/SearchLocationsCard'

import 'leaflet/dist/leaflet.css'

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
  components: {
    SearchLocationsCard,
  },
  data() {
    return {
      searchField: '',
      isSearcFocused: false,
      showMap: true,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 4,
      center: [51.516795342679146, -0.13268908756585465],
      bounds: null,
      location: null,
      gettingLocation: false,
      errorStr: null,
    }
  },
  methods: {
    onSearch() {
      console.log(this.searchField)
    },
    onFocus() {
      this.isSearcFocused = true
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
    selectItem(latlang) {
      this.zoomUpdated(12)
      this.centerUpdated(latlang)
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
        console.log(Lat, Lng)
        this.centerUpdated([Lat, Lng])
        this.zoomUpdated(11)
        this.gettingLocation = false
      } catch (e) {
        this.errorStr = e.message
        console.log(this.errorStr)
        this.gettingLocation = false
      }
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
}
.searchbox {
  border-bottom: 2px solid #757575;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2rem;
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

  &.focused {
    color: #353c50;
  }
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
  background: chartreuse;
  overflow: hidden;
  position: relative;
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