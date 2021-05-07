<template>
  <section class="hero">
    <div class="hero-wrap">
      <div class="hero-description">
        <h2>{{ $t('hero.banner.title') }}</h2>
        <p>{{ $t('hero.banner.text') }}</p>
        <p class="msg">{{ $t('hero.banner.msg') }}</p>
      </div>

      <div class="hero-conversor">
        <div class="hero-conversor-wrap">
          <floating-button
            v-if="showFloatingButton"
            :btnType="floatBtnType"
            :link="$t('hero.conversor.link_cta_02')"
          >
            {{ $t('hero.conversor.cta_02') }}
          </floating-button>

          <div class="conversor-banner" :class="{ bgBanner: bannerWithBg }">
            <h1>
              <span
                :class="{ hideOnMobile: showMiniBanner }"
                class="conversor-title-desktop"
                >{{ $t('hero.title') }}</span
              >
              <span
                v-if="showMiniBanner"
                :class="{ showOnMobile: showMiniBanner }"
                class="conversor-title-mobile"
                >{{ $t('hero.banner.title') }}</span
              >
            </h1>
            <h2
              v-if="showMiniBanner"
              class="conversor-subtitle-mobile"
              :class="{ showOnMobile: showMiniBanner }"
            >
              {{ $t('hero.banner.msg') }}
            </h2>
          </div>

          <h2 v-if="showBoxTitle" class="conversor-box-title">
            {{ $t('hero.title') }}
          </h2>

          <div class="form-wrapper">
            <conversor
              :showMsgAfter="conversorShowMsgAfter"
              :showSecondaryButton="conversorShowSecondaryButton"
              :secondarybuttonColor="conversorSecondarybuttonColor"
              :autoCalc="conversorAutoCalc"
              :ctaAsLink="conversorCtaAsLink"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Conversor from './Conversor.vue'
import FloatingButton from './FloatingButton.vue'

export default {
  data() {
    return {
      floatBtnType: 'default',
      showFloatingButton: false,
      conversorShowMsgAfter: false,
      conversorShowSecondaryButton: true,
      conversorAutoCalc: false,
      conversorCtaAsLink: false,
      conversorSecondarybuttonColor: 'default', // default (gold), blue
      showMiniBanner: false,
      bannerWithBg: false,
      showBoxTitle: false,
    }
  },
  components: { Conversor, FloatingButton },
  mounted() {
    window.vm = {}
    vm.SiteHero = this
    // CTA TEST
    if (this.$store.state.testCtaVersion === 'testA') {
      this.apllyTestA()
    }
    if (this.$store.state.testCtaVersion === 'testB') {
      this.apllyTestB()
    }
    if (this.$store.state.testCtaVersion === 'testC') {
      this.apllyTestC()
    }
    if (this.$store.state.testCtaVersion === 'testD') {
      this.apllyTestD()
    }
    // BANNER TEST
    if (this.$store.state.testBannerVersion === 'testA') {
      this.apllyBannerTestA()
    }
    if (this.$store.state.testBannerVersion === 'testB') {
      this.apllyBannerTestB()
    }
  },
  methods: {
    apllyTestA() {
      this.floatBtnType = 'default'
      this.showFloatingButton = true
      this.conversorShowSecondaryButton = false
      this.conversorSecondarybuttonColor = 'default'
      this.conversorShowMsgAfter = true
      this.conversorAutoCalc = false
      this.conversorCtaAsLink = false
    },
    apllyTestB() {
      this.floatBtnType = 'top'
      this.showFloatingButton = true
      this.conversorShowSecondaryButton = false
      this.conversorSecondarybuttonColor = 'default'
      this.conversorShowMsgAfter = false
      this.conversorAutoCalc = false
      this.conversorCtaAsLink = false
    },
    apllyTestC() {
      this.floatBtnType = 'default'
      this.showFloatingButton = false
      this.conversorShowSecondaryButton = false
      this.conversorSecondarybuttonColor = 'default'
      this.conversorShowMsgAfter = false
      this.conversorAutoCalc = true
      this.conversorCtaAsLink = true
    },
    apllyTestD() {
      this.floatBtnType = 'default'
      this.showFloatingButton = false
      this.conversorShowSecondaryButton = true
      this.conversorSecondarybuttonColor = 'blue'
      this.conversorShowMsgAfter = false
      this.conversorAutoCalc = false
      this.conversorCtaAsLink = false
    },
    /// APPLY BANNER TEST
    apllyBannerTestA() {
      this.showMiniBanner = true
      this.bannerWithBg = false
      this.showBoxTitle = false
    },
    apllyBannerTestB() {
      this.showMiniBanner = true
      this.bannerWithBg = true
      this.showBoxTitle = true
    },
    setCtaTestA() {
      this.$store.commit('setCtaTest', 'testA')
      this.apllyTestA()
    },
    setCtaTestB() {
      this.$store.commit('setCtaTest', 'testB')
      this.apllyTestB()
    },
    setCtaTestC() {
      this.$store.commit('setCtaTest', 'testC')
      this.apllyTestC()
    },
    setCtaTestD() {
      this.$store.commit('setCtaTest', 'testD')
      this.apllyTestD()
    },
    /// SET BANNER TEST
    setBannerTestA() {
      this.$store.commit('setBannerTest', 'testA')
      this.apllyBannerTestA()
    },
    setBannerTestB() {
      this.$store.commit('setBannerTest', 'testB')
      this.apllyBannerTestB()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
//  1440 - 873 - 567

h1,
.conversor-box-title {
  font-family: JT Marnie;
  font-style: normal;
  font-weight: 400;
  font-size: 1.714rem;
  margin-bottom: 2rem;
  color: $headings;
}
.conversor-box-title {
  padding: 1rem 2rem 0.5rem 2rem;
  @media (min-width: $bp-mobile) {
    display: none;
  }
}
.hero {
  padding-top: 0;
  padding-bottom: 0;

  display: grid;
  grid-template-columns: 1fr;
  background: $cinza-claro-bg;
  box-sizing: border-box;

  .hero-conversor {
    /* padding: 2rem 2rem 0.5rem 2rem; */
    padding: 0;
    margin-right: 0;
    box-sizing: border-box;
    max-width: 100vw;
  }
  .form-wrapper {
    padding: 0 2rem 0.5rem 2rem;
  }
  .conversor-banner {
    padding: 2rem 2rem 1rem 2rem;
    .conversor-title-mobile,
    .conversor-subtitle-mobile {
      text-align: center;
      font-weight: 300;
    }
    .conversor-subtitle-mobile {
      font-size: 1.142rem;
      margin-top: 1.42rem;
    }
    h1,
    h2 {
      margin: 0;
    }
    &.bgBanner {
      background: $main-blue;
      background-image: url('~@/assets/images/bg-hero-home.jpg');
      background-size: cover;
      background-position: center center;
      height: 8.714rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0;
      box-sizing: border-box;
      .conversor-title-mobile,
      .conversor-subtitle-mobile {
        color: white;
      }
      .conversor-title-mobile {
        font-size: 1.571rem;
      }
      @media (min-width: $bp-mobile) {
        background: none;
        padding: 2rem 2rem 1rem 2rem;
      }
    }
  }
}
.hero-description {
  display: none;
}

.hideOnMobile {
  display: none;
  @media (min-width: $bp-mobile) {
    display: block;
  }
}
.showOnMobile {
  display: block;
  @media (min-width: $bp-mobile) {
    display: none;
  }
}

@media (min-width: $bp-mobile) {
  h1 {
    margin-top: 0;
    font-size: 2.571rem;
  }
  .hero-wrap {
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    padding: 0 3rem;
    box-sizing: border-box;
    h2 {
      margin: 0;
      font-size: 3.428rem;
      color: white;
    }
    p {
      font-size: 1.571rem;
      line-height: 136.8%;
    }
    p.msg {
      text-align: right;
    }
  }

  .hero {
    padding-top: 1.571rem;
    padding-bottom: 1.571rem;
    /* grid-template-columns: auto 1fr; */
    /* gap: 4rem; */
    justify-content: flex-end;
    display: flex;
    background: url('../assets/images/bg-hero-home.jpg');
    background-size: cover;
    background-position: center center;
  }
  .hero-description {
    padding: 2rem 7.785rem 5rem 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;
  }
  .hero-conversor {
    padding: 1rem 2rem;
    /* margin-right: 3rem; */
    display: flex;
    justify-content: center;
    background: #f0f0f0;
    max-width: 30.642;
    border-radius: 10px;
    box-sizing: border-box;
    .hero-conversor-wrap {
      /* max-width: 30.64rem; */
    }
  }
}
</style>
