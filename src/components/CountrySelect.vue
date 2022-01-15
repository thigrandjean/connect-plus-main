<template>
  <div class="country-select" id="country-select" v-click-outside="hide">
    <div class="flag">
      <flags :country="$store.state.currentCountryFlag" />
    </div>
    <a
      class="current-country"
      @click.prevent="openLangSelect"
      href="#"
      id="lang-select"
    >
      <span>{{ $store.state.currentCountry }}</span>
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L6 6L11 1" stroke-linejoin="round" />
      </svg>
    </a>
    <div
      class="country-select-list"
      :class="{ listOnLeft: listAlign == 'left' }"
      v-if="countriesOpen"
    >
      <a
        class="country-item"
        v-for="country in $store.state.countriesToSelect"
        :key="country.code"
        :id="`country-select-${country}`"
        @click.prevent="selectCountry(country)"
        href="#"
      >
        <div class="flag">
          <flags :country="country.code" />
        </div>
        {{ country.name }}
      </a>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { mapState } from 'vuex'
import Flags from '@/components/Flags.vue'

export default {
  props: ['listAlign'],
  components: { Flags },

  data() {
    return {
      countriesOpen: false,
    }
  },
  created() {
    // detect user locale
    // let locale = navigator.language || navigator.userLanguage
    // // set locale based on user locale
    // this.$i18n.locale = locale.toLowerCase()
    // this.currentLocale = this.$i18n.fallbackLocale
  },
  methods: {
    countryName(country) {
      return this.$store.state.countries.find((obj) => obj.name === country)
        .name
    },
    selectCountry(country) {
      this.hide()
      this.$store.commit('setCurrentCountry', country.name)
      this.$store.commit('setCurrentCountryFlag', country.code)
      this.$store.commit('setCurrentCurrency', country.currency)
      this.$store.commit('setCurrentLink', country.link)
    },
    openLangSelect() {
      this.countriesOpen = !this.countriesOpen
    },
    hide() {
      this.countriesOpen = false
    },
  },

  directives: {
    ClickOutside,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.country-select {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;
  margin-right: 1rem;

  .flag {
    width: 1.75rem;
    // height: 0.928rem;
    // background: grey;
    margin: 0.25rem 0.5rem 0 0;
    svg {
      width: 100%;
    }
  }
  .current-country {
    color: $main-gold;
    text-decoration: none;
    /* text-transform: uppercase; */
    span {
      margin-right: 0.5rem;
    }
    svg path {
      stroke: $main-gold;
    }
  }

  .country-select-list {
    top: 2rem;
    right: 0;

    position: absolute;
    background: $main-blue;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 5px 5px;
    z-index: $layerTop;
    .country-item {
      color: white;
      text-decoration: none;
      padding: 1rem;
      width: 12rem;
      font-size: 1.142rem;
      display: flex;
      align-items: center;
      &:hover {
        background: white;
        color: $sec-blue-01;
      }
    }
    &.listOnLeft {
      right: unset;
      left: 0;
    }
  }
}
</style>