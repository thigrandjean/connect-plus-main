<template>
  <div class="lang-select" id="lang-select" v-click-outside="hide">
    <div class="flag">
      <flags :country="currentLocale" />
    </div>
    <a
      class="current-lang"
      @click.prevent="openLangSelect"
      href="#"
      id="lang-select"
    >
      <span>{{ currentLocale }}</span>
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
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { mapState } from 'vuex'
import Flags from '@/components/Flags.vue'

export default {
  components: { Flags },

  data() {
    return {
      langOpen: false,
      flag: 'uk',
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales,
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
  },

  directives: {
    ClickOutside,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.lang-select {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;
  .flag {
    width: 1.75rem;
    // height: 0.928rem;
    // background: grey;
    margin: 0.25rem 0.5rem 0 0;
    svg {
      width: 100%;
    }
  }
  .current-lang {
    color: $main-gold;
    text-decoration: none;
    text-transform: uppercase;
    span {
      margin-right: 0.5rem;
    }
    svg path {
      stroke: $main-gold;
    }
  }

  .lang-select-list {
    top: 2rem;
    right: 0;

    position: absolute;
    background: $main-blue;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 5px 5px;
    z-index: 10;
    .lang-item {
      color: white;
      text-decoration: none;
      padding: 1rem;
      width: 10rem;
      font-size: 1.142rem;

      &:hover {
        background: white;
        color: $sec-blue-01;
      }
    }
  }
}
</style>