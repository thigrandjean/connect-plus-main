<template>
  <div class="features">
    <div class="features-wrap">
      <slot />

      <div class="cards">
        <div class="card" v-for="item in $t('features.list')" :key="item.title">
          <div class="card-icon">
            <Icons :icon="item.icon" />
          </div>

          <header class="card-header">
            <h3>{{ item.title }}</h3>
          </header>

          <p class="card-txt">{{ item.txt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '@/components/Icons.vue'
export default {
  components: { Icons },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.features {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;
}
.features-wrap {
  background: white;
  width: 100%;
  padding: 1rem 2rem 0 2rem;
  box-sizing: border-box;
  h2 {
    text-align: center;
    padding: 0 2rem;
  }
}

.cards {
  margin-top: 2rem;
  .card {
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 4.285rem 1fr;
    grid-template-areas: 'icon title' 'icon txt';
    grid-template-rows: 2rem 1fr;
    row-gap: 0rem;
    column-gap: 1rem;
    .card-icon {
      grid-area: icon;
      width: 4.285rem;
      height: 4.285rem;
    }
    .card-header {
      grid-area: title;
      h3 {
        margin: 0;
        font-weight: 300;
        font-size: 1.285rem;
        color: $headings;
      }
    }
    .card-txt {
      grid-area: txt;
      color: $main-grey;
      font-size: 1rem;
      text-align: justify;
      line-height: 1.2rem;
      margin-top: 0;
    }
  }
}

@media (min-width: $bp-mobile) {
  .features-wrap {
    max-width: 1330px;
    border-radius: 10px;
    padding: 0 2rem;
    margin: -2rem 0 0 0;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: column;
    column-gap: 4rem;
    row-gap: 1rem;
    margin-top: 4rem;
    .card {
      grid-template-columns: 7.142rem 1fr;
      // gap: 2rem;
      row-gap: 1rem;
      column-gap: 2rem;
      .card-icon {
        width: 7.142rem;
        height: 7.142rem;
      }
      .card-header {
        h3 {
          font-size: 1.714rem;
        }
      }
      .card-txt {
        font-size: 1.285rem;
        line-height: 1.542rem;
      }
    }
  }
}
</style>