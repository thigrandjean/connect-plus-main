<template>
  <div class="selector-wrap">
    <div class="selector-logo">
      <g-image
        src="@/assets/images/logo-connect-plus-vert.png"
        title="Connect Plus - Money Transfer - Logo"
        width="250"
      />
    </div>
    <div class="selector-box">
      <div class="flags-icons">
        <g-image
          src="@/assets/images/select-country-flags.png"
          title="Connect Plus - Money Transfer - Logo"
          width="250"
        />
      </div>
      <h1 class="selector-title">Choose your country and language</h1>

      <div
        id="country-selector"
        class="country-select"
        @click="openCountryList"
        v-click-outside="hideCountries"
      >
        <div class="current-country">
          <div class="flag">
            <all-flags :country="$store.state.currentCountryFlag" />
          </div>
          {{ $store.state.currentCountry }}
        </div>
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L6 6L11 1" stroke-linejoin="round" />
        </svg>
        <div class="country-list" v-if="isCountryListOpen">
          <a
            class="country-item"
            href="#"
            :id="`country-selector-set-${country.code}`"
            v-for="country in $store.state.countriesToSelect"
            :key="country.name"
            @click.prevent="changeCurrency(country.name)"
          >
            <div class="flag">
              <all-flags :country="country.code" />
            </div>
            {{ country.name }}
          </a>
        </div>
      </div>

      <div class="lang-select" id="lang-select" v-click-outside="hide">
        <a
          class="current-lang"
          @click.prevent="openLangSelect"
          href="#"
          id="lang-select"
        >
          <span>{{ langName(currentLocale) }}</span>
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
        <div class="lang-select-list" v-if="langOpen">
          <a
            class="lang-item"
            v-for="locale in availableLocales"
            :key="locale"
            :id="`lang-select-${locale}`"
            @click.prevent="selectLang(locale)"
            href="#"
            >{{ langName(locale) }}</a
          >
        </div>
      </div>

      <a
        id="cta-currency-exchange-link"
        class="cta cta-third"
        :href="`/${currentLocale}/home/`"
      >
        Save options and go
      </a>
    </div>
  </div>
</template>



<script>
import AllFlags from '@/components/AllFlags.vue'
import ClickOutside from 'vue-click-outside'

export default {
  components: {
    AllFlags,
  },

  data() {
    return {
      // currentCountry: '',
      // curentCountryFlag: '',
      isCountryListOpen: false,
      langOpen: false,
      flag: 'uk',
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales,
    }
  },
  mounted() {},
  methods: {
    openCountryList() {
      this.isCountryListOpen = !this.isCountryListOpen
    },
    hideCountries() {
      this.isCountryListOpen = false
    },
    langName(lang) {
      return this.$store.state.languages.find((obj) => obj.code === lang).name
    },
    selectLang(lang) {
      this.hide()
      if (this.$i18n.locale === lang) return

      this.flag = lang
      this.$i18n.locale = lang
      this.currentLocale = this.$i18n.locale
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLocale, true),
      })

      this.$store.state.currentLang = this.$i18n.locale
      this.$store.state.currentLangFlag = this.$i18n.locale
    },
    openLangSelect() {
      this.langOpen = !this.langOpen
    },
    hide() {
      this.langOpen = false
    },
    changeCurrency(country) {
      let selected = this.$store.state.countriesToSelect.find(
        (obj) => obj.name === country
      )

      this.$store.commit('setCurrentCountry', selected.name)
      this.$store.commit('setCurrentCountryFlag', selected.code)
      this.$store.commit('setCurrentCurrency', selected.currency)
      this.$store.commit('setCurrentLink', selected.link)
    },
  },
  directives: {
    ClickOutside,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.selector-wrap {
  background: $main-blue;
  background-image: url(../assets/images/selector-background.jpg);
  background-position: center center;
  background-size: cover;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 2rem 6rem 2rem;
}
.selector-logo {
  width: 10.714rem;
  img {
    width: 100%;
  }
  @media (min-width: $bp-mobile) {
  }
  @media (min-width: 1281px) {
    width: 17rem;
  }
}
.flags-icons {
  width: 9rem;
  img {
    width: 100%;
  }
  @media (min-width: $bp-mobile) {
    width: 14.428rem;
  }
}
.selector-title {
  color: $main-blue;
  font-size: 1.428rem;
  font-weight: normal;
  text-align: center;
  line-height: 24px;
}
.selector-box {
  margin: 1.75rem 0;
  padding: 2rem;
  background: #fafbff;
  box-shadow: 0px 5px 10px rgba(61, 69, 92, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.country-select,
.lang-select {
  width: 100%;
  height: 2.85rem;

  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  padding: 0 1rem 0 1rem;
  margin: 1rem 0;
  border-radius: 5px;

  font-family: JT Marnie;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  /* z-index: $layerFg; */
  cursor: pointer;
  svg path {
    stroke: $main-grey;
  }
  .current-country {
    width: 15rem;
    display: flex;
    align-items: center;
  }
  .current-lang {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flag {
    width: 2.357rem;
    margin: 0.25rem 0.5rem 0 0;
    svg {
      width: 100%;
    }
  }
  &:hover {
    cursor: pointer;
  }
}

.country-list,
.lang-select-list {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 2.85rem;
  right: 0;
  left: 0;
  /* width: 18.285rem; */
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
  z-index: $layerTop;
  max-height: 10rem;
  overflow-y: scroll;

  a {
    color: $main-grey;
    text-decoration: none;
    display: block;
    padding: 1rem;
    font-size: 1.142rem;
    &:hover {
      background: $cinza-claro;
      // color: white;
    }
  }
}

.country-list {
  .country-item {
    display: flex;
    align-items: center;
  }
}

.cta-third:hover {
  border: 2px solid $sec-blue-03;
}
</style>