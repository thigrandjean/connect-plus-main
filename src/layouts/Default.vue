<template>
  <div class="layout">
    <SiteHeader />
    <section class="content">
      <slot/>
    </section>
    <SiteFooter />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
export default {
  components: {SiteHeader, SiteFooter}
  
}
</script>
<style lang="scss" scoped>

@import '@/assets/style/vars.scss';

.content {
  padding: $header-mob-h  0 0 0;
}

@media (min-width: $bp-mobile){
  .content {
    padding: $header-desk-h +  $header-menu-desk-h  0 0 0;
  }
}

</style>