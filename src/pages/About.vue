<template>
  <Layout>
    <div class="about-banner">
      <h1>{{ $t('aboutus.description') }}</h1>

      <div class="image-wrap">
        <g-image
          src="@/assets/images/page-banner-aboutus.jpg"
          :alt="$t('aboutus.description')"
        />
      </div>
    </div>

    <div class="about-content">
      <h2>{{ $t('aboutus.content.title') }}</h2>
      <p>{{ $t('aboutus.content.txt') }}</p>
    </div>

    <HomeFeatures>
      <h2>{{ $t('aboutus.title') }}</h2>
    </HomeFeatures>

    <Separator />

    <Partners expanded="true" />

    <BannersPageFooter model="work" />
  </Layout>
</template>

<script>
import HomeFeatures from '~/components/HomeFeatures.vue'
import Partners from '@/components/Partners.vue'
import BannersPageFooter from '@/components/BannersPageFooter.vue'
import Separator from '@/components/Separator.vue'

export default {
  components: { HomeFeatures, Partners, BannersPageFooter, Separator },
  data() {
    return {
      aboutUs: {
        headline: 'Learn more about our company',
      },
    }
  },

  metaInfo() {
    return {
      title: `${this.$t('aboutus.description')}`,
      meta: [{ name: 'description', content: this.$t('aboutus.description') }],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.about-banner {
  height: 13.928rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;
  h1 {
    color: white;
    margin: 0;
    text-align: center;
    font-weight: normal;
    z-index: 3;
    font-size: 1.714rem;
  }
}

.about-content {
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
  .about-banner {
    height: 20.5rem;
    h1 {
      font-size: 3.428rem;
      max-width: 50rem;
    }
  }
  .about-content {
    max-width: $max-w;
    margin: 3rem auto 6rem auto;
    background: $bg-light;
    display: grid;
    grid-template-columns: 10rem 1fr;
    gap: 2rem;
    align-items: center;
    padding: 2rem 4rem;
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