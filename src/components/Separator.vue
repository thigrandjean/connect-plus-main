<template>
  <div class="separator"></div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.separator {
  display: none;
}

@media (min-width: $bp-mobile) {
  .separator {
    display: block;
    width: calc(100vw - 6rem);
    height: 1.071rem;
    background: $main-gold;
    margin: 1rem 0 1rem 0;
    border-radius: 0 5rem 5rem 0;
    box-sizing: border-box;
  }
}
</style>