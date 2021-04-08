<template>
  <Layout>
    <site-hero-full-width />
    <!-- <SiteHero /> -->

    <banner-locations-home />

    <HomeFeatures>
      <h2>{{ $t('features.title') }}</h2>
    </HomeFeatures>

    <BannerAbout />

    <Partners />

    <BannerWorkWithUs />

    <Separator />

    <ContactUs
      place="home"
      :title="$t('contactus.title')"
      :subtitle="$t('contactus.subtitle')"
    />
  </Layout>
</template>

<script>
import SiteHero from '@/components/SiteHero.vue'
import HomeFeatures from '@/components/HomeFeatures.vue'
import BannerAbout from '@/components/BannerAbout.vue'
import Partners from '@/components/Partners.vue'
import BannerWorkWithUs from '@/components/BannerWorkWithUs.vue'
import ContactUs from '@/components/ContactUs.vue'
import Separator from '@/components/Separator.vue'
import BannerLocationsHome from '../components/BannerLocationsHome.vue'
import SiteHeroFullWidth from '../components/SiteHeroFullWidth.vue'

export default {
  components: {
    SiteHero,
    HomeFeatures,
    BannerAbout,
    Partners,
    BannerWorkWithUs,
    ContactUs,
    Separator,
    BannerLocationsHome,
    SiteHeroFullWidth,
  },

  metaInfo() {
    return {
      title: `${this.$t('hero.title')}`,
      meta: [{ name: 'description', content: this.$t('hero.title') }],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.home-links a {
  margin-right: 1rem;
}
</style>
