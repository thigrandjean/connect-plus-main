<template>
  <Layout>
    <BannerPageTopLocations />
    <SearchLocations nomap />
  </Layout>
</template>


<script>
import BannersPageFooter from '@/components/BannersPageFooter.vue'
import SearchLocations from '@/components/SearchLocations.vue'
import BannerPageTopLocations from '@/components/BannerPageTopLocations.vue'

export default {
  components: { BannersPageFooter, SearchLocations, BannerPageTopLocations },

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

