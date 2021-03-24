<template>
  <section class="work">
    <div class="work-wrap">
      <div class="work-image">
        <g-image
          src="~/assets/images/bg-banner-work.jpg"
          :alt="$t('workwithus.banner.cta')"
        />
      </div>
      <div class="work-content">
        <p>{{ $t('workwithus.banner.text') }}</p>
        <g-link
          id="banner-work-with-us-cta"
          class="cta cta-main"
          :to="$tp('/workwithus')"
          >{{ $t('workwithus.banner.cta') }}</g-link
        >
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped >
@import '@/assets/style/vars.scss';
.work {
  margin-top: 9rem;
  background-color: $main-blue;
  background-image: url('../assets/images/patterns/bg-light.jpg');

  .work-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    .work-image {
      width: 80%;
      position: relative;
      z-index: 2;
      margin-top: -8rem;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
    .work-content {
      width: 100%;
      position: relative;
      z-index: 1;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      padding: 0 1rem 2rem 1rem;
      p {
        text-align: center;
        margin: 2rem auto;
        font-size: 1rem;
        font-weight: 200;
        line-height: 1.214rem;
      }
    }
  }
}

@media (min-width: $bp-mobile) {
  .work {
    padding: 2rem;
    margin-bottom: 8rem;
    .work-wrap {
      flex-direction: row;
      max-width: $max-w;
      margin: 0 auto;
      .work-image {
        margin: -5rem 2rem -5rem 0;
        width: 90%;
      }
      .work-content {
        p {
          font-size: 1.714rem;
          line-height: 2.071rem;
        }
      }
    }
  }
}
</style>