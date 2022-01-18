<template>
  <section class="partners" :class="{ expanded: expanded }">
    <h2>
      <span>{{ $t('partners.title') }}</span>
    </h2>

    <div class="partners-list" v-if="expanded">
      <div
        class="partners-brand"
        v-for="(brand, i) in $t('partners.brands')"
        :key="i"
      >
        <h3>{{ brand.name }}</h3>
        <p>{{ brand.description }}</p>
      </div>
    </div>

    <div class="brands">
      <div
        class="brands-logos"
        v-for="(brand, i) in $t('partners.brands')"
        :key="i"
      >
        <div v-if="brand.logo" class="brands-logo">
          <!-- <g-image :src="setImage(brand.logo)" :alt="`Logo - ${brand.name}`" /> -->
          <img
            width="247"
            :src="setImage(brand.logo)"
            :alt="`Logo - ${brand.name}`"
          />
        </div>
        <div v-else class="brands-logo nologo">
          <!-- <span>{{ brand.nologo }}</span> -->
          <span v-if="$store.state.currentCountry == 'United Kingdom'" v-html="$store.state.regulators.en"></span>
          <span v-if="$store.state.currentCountry == 'Italy'" v-html="$store.state.regulators.it"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['expanded'],
  methods: {
    setImage: function (src) {
      return require('@/assets/images/partners/' + src)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.partners {
  padding: 1rem 0 0 0;
  h2 {
    text-align: center;
    color: $headings;
  }
  .partners-list {
    margin-top: 2rem;
    padding: 0 2rem;
    color: $main-grey;
    .partners-brand {
      margin-bottom: 2rem;
    }
    h3 {
      font-weight: normal;
      font-size: 1.285rem;
      color: $headings;
    }
    p {
      font-size: 1rem;
      line-height: 1.214rem;
    }
  }
  .brands {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    max-width: 500px;
    margin: 0 auto;
    .brands-logo {
      padding: 2rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f3f3f3;
      box-sizing: border-box;
      border-radius: 10px;
      img {
        width: 100%;
      }
    }
    .nologo {
      font-weight: bold;
      text-align: center;
    }
  }
  &.expanded {
    padding: 0 0 0 0;
    margin-top: -1rem;
  }
}

@media (min-width: $bp-mobile) {
  .partners {
    padding: 4rem 0 0 0;
    h2 {
      font-size: 2.571rem;
      margin-bottom: 5rem;
      text-align: center;
      padding: 0 2rem;

      span {
        max-width: $max-w;
        display: block;
        margin: 0 auto;
      }
    }
    .partners-list {
      max-width: $max-w;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      // grid-template-rows: 1fr 1fr;
      grid-auto-flow: column;
      column-gap: 6rem;
      .partners-brand {
        margin: 0;
        padding: 0;
        h3 {
          font-size: 1.714rem;
        }
        p {
          font-size: 1.5rem;
          line-height: 1.714rem;
        }
      }
    }
    .brands {
      grid-template-columns: auto auto;
      max-width: $max-w;
      margin: 5rem auto;
      justify-content: center;
      .brands-logo {
        max-width: 20rem;
        padding: 3rem;
      }
    }

    &.expanded {
      h2 {
        text-align: left;
      }
    }

    &.expanded {
      padding: 4rem 0 0 0;
      margin-top: 0rem;
    }
  }
}
</style>