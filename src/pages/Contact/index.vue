<template>
  <Layout>
    <div class="pages-banner">
      <h1>{{ $t('contactus.title') }}</h1>
      <p>{{ $t('contactus.subtitle') }}</p>
    </div>

    <!-- <ContactUs :content="contentForm" contactpage="true" /> -->
    <ContactUs
      place="contact-us-page"
      :title="$t('contactus.title')"
      :subtitle="$t('contactus.subtitle')"
      hide="true"
    />

    <!-- <Separator /> -->
    <BannerPageTopLocations />
    <SearchLocations nomap />
    <!-- <Locations /> -->
  </Layout>
</template>

<script>
import BannersPageFooter from '@/components/BannersPageFooter.vue'
import ContactUs from '@/components/ContactUs.vue'
import Separator from '@/components/Separator.vue'
import Locations from '@/components/Locations.vue'
import BannerPageTopLocations from '@/components/BannerPageTopLocations.vue'
import SearchLocations from '../../components/SearchLocations.vue'

export default {
  components: {
    BannersPageFooter,
    ContactUs,
    Separator,
    Locations,
    BannerPageTopLocations,
    SearchLocations,
  },

  metaInfo() {
    return {
      title: this.$t('contactus.title'),
      meta: [
        { name: 'description', content: this.$t('contactus.description') },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.pages-banner {
  height: 10.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  background-image: url('../../assets/images/patterns/bg-light-blue.jpg');
  padding-top: 1.5rem;
  h1 {
    color: white;
    margin: 0;
    text-align: center;
    font-weight: normal;
    z-index: 3;
    font-size: 1.714rem;
  }
  p {
    color: white;
  }
}

.pages-content-wrap {
  margin-bottom: 3rem;
}

.pages-content {
  margin: 0 auto 0 auto;
  color: $main-grey;
  padding: 1rem 2rem 0 2rem;
  h2 {
    color: $headings;
    text-align: center;
  }
  p {
    text-align: justify;
  }
}

@media (min-width: $bp-mobile) {
  .pages-banner {
    height: 14.785rem;
    padding-top: 1.5rem;
    h1 {
      font-size: 3.428rem;
    }
    p {
      font-size: 1.714rem;
    }
  }
  .pages-content-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: $max-w;
    margin: 6rem auto 6rem auto;
  }
  .pages-content {
    background: $bg-light;
    padding: 0 4rem;
    box-sizing: border-box;
    h2 {
      text-align: left;
      font-size: 2.571rem;
    }
    p {
      text-align: left;
      font-size: 1.5rem;
    }
  }
}
</style>