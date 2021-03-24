<template>
  
  <section class="locations">
      <h2>{{ $t('locations.title') }}</h2>

      <div class="locations-list">

          <div class="locations-item" v-for="place in $t('locations.places')" :key="place.name">
            <h3>{{place.name}}</h3>
            <strong>{{place.subTitle}}</strong>

            <div class="info address">{{ $t('locations.infos.address') }}: {{place.address}}</div>
            <div v-if="place.address2" class="info address">{{place.address2}}</div>
            <div v-if="place.address3" class="info address">{{place.address3}}</div>


            <div class="info telephone">{{ $t('locations.infos.telephone') }}: {{place.telephone}}</div>
            <!-- <div class="info fax" v-if="place.fax">Fax: {{place.fax}}</div>
            <div class="info whatsapp" v-if="place.whatsapp">whatsapp: {{place.whatsapp}}</div> -->
          </div>

      </div>

  </section>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.locations {
    padding: 0 2rem 3rem 2rem;
    h2{
        text-align: center;
        color: $main-blue;
        font-size: 1.5rem;
        font-weight: 300;
    }
    .locations-list {
        color: $main-grey;
        strong {
            font-weight: 400;
            font-size: 1.142rem;
        }
        .locations-item {
            h3 {
                color: $main-blue;
                font-weight: 300;
                margin-bottom: 1rem ;
                font-size: 1.285rem;
            }
            .info {
                font-size: 1rem;
                text-align: justify;
            }
        }
    }
}

@media (min-width: $bp-mobile) {

    .locations {
        max-width: $max-w;
        margin: 0 auto 3rem auto;

        h2{
            margin-top: 4rem;
            font-size: 3.428rem;
            text-align: left;
        }
        .locations-list {
            color: $main-grey;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            align-items: flex-start;

            .locations-item {
                h3 {
                    font-size: 2.142rem;
                    margin-bottom: 2rem;
                    min-height: 2.142rem;
                    display: block;
                }
                .info {
                    font-size: 1.2rem; //1.285rem
                }
            }
        }
    }

}

</style>