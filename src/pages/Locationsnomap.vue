<template>
  <Layout>
    <div class="pages-banner">
      <h1>{{ $t('ourlocations.title') }}</h1>
      <h2>{{ $t('ourlocations.description') }}</h2>

      <div class="image-wrap">
        <g-image
          src="@/assets/images/banner-our-locations.jpg"
          :alt="$t('ourlocations.title')"
        />
      </div>
    </div>

    <SearchLocations nomap />
  </Layout>
</template>


<script>
import BannersPageFooter from '@/components/BannersPageFooter.vue'
import SearchLocations from '@/components/SearchLocations.vue'

export default {
  components: { BannersPageFooter, SearchLocations },

  metaInfo() {
    return {
      title: this.$t('ourlocations.title'),
      meta: [
        { name: 'description', content: this.$t('ourlocations.description') },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.pages-banner {
  height: 10.5rem;
  flex-direction: column;
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
    font-size: 1.428rem;
  }
  h2 {
    color: white;
    margin: 0;
    margin-top: 1rem;
    text-align: center;
    font-weight: normal;
    z-index: 3;
    font-size: 1.142rem;
    font-weight: 300;
  }
}
</style>