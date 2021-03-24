<template>
  <Layout>
    <div class="pages-banner">
      <h1>{{ $t('howitworks.title') }}</h1>

      <div class="image-wrap">
        <g-image
          src="@/assets/images/page-banner-how-we-work.jpg"
          :alt="howItWorks.headline"
        />
      </div>
    </div>

    <div class="pages-content-wrap">
      <div class="pages-content">
        <h2>{{ $t('howitworks.content[0].title') }}</h2>
        <p>{{ $t('howitworks.content[0].txt') }}</p>
      </div>

      <div class="pages-content">
        <h2>{{ $t('howitworks.content[1].title') }}</h2>
        <p>{{ $t('howitworks.content[1].txt') }}</p>
      </div>
    </div>

    <BannersPageFooter model="about" />
  </Layout>
</template>

<script>
import { mapState } from 'vuex'

import BannersPageFooter from '@/components/BannersPageFooter.vue'

export default {
  components: { BannersPageFooter },
  data() {
    return {
      howItWorks: {
        headline: 'How we send your money',
      },
    }
  },

  metaInfo() {
    return {
      title: this.$t('howitworks.title'),
      meta: [{ name: 'description', content: this.$t('howitworks.title') }],
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
  box-sizing: border-box;
  padding: 1rem;
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
    height: 16.785rem;
    h1 {
      font-size: 3.428rem;
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