<template>
  <div
    class="wrapper"
    :class="{
      isFloatingButtonWrapper: btnType === 'default' || Scrolled,
      hasPassedScrollLimit: Scrolled,
    }"
  >
    <a
      class="floating-action-button"
      :class="{
        isFloatingButton: isFloatingButtonActive,
        floatinActionButton01: btnType === 'default',
        floatinActionButton02: btnType === 'top',
      }"
      id="floating-action-btn"
      :href="link"
      target="_blank"
      rel="noopener"
    >
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFloatingButtonActive: true,
      Scrolled: false,
    }
  },
  props: {
    link: String,
    btnType: { type: String, default: 'fixed' }, // fixed, top
  },
  mounted() {
    this.btnType === 'top' &&
      window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    floatingButtonDisabled() {
      this.isFloatingButtonActive = false
      this.Scrolled = false
    },
    floatingButtonEnabled() {
      this.isFloatingButtonActive = true
      this.Scrolled = true
    },
    handleScroll(e) {
      window.scrollY > 80
        ? this.floatingButtonEnabled()
        : this.floatingButtonDisabled()
    },
  },
  watch: {
    btnType: {
      immediate: true,
      handler(newVal, oldVal) {
        // console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  z-index: $layerTop;
  margin: 1rem 1rem 0 0;
  @media (min-width: $bp-mobile) {
    position: fixed;
    bottom: 0.642rem;
    right: 0;
  }
  @media (max-width: $bp-mobile) {
    &.isFloatingButtonWrapper,
    .hasPassedScrollLimit {
      position: fixed;
      bottom: 0.642rem;
      right: 0;
    }
    &.hasPassedScrollLimit {
      @media (max-width: $bp-mobile) {
        animation: showUp 0.3s ease-in-out;
      }
    }
  }
}
@keyframes showUp {
  0% {
    transform: translateY(3rem);
  }
  100% {
    transform: translateY(0);
  }
}

.floating-action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: $layerFg;
  width: fit-content;
  z-index: 100000;
  height: 40px;
  font-size: 18px;
  border-radius: 30px;
  background: #67759c;
  color: white;
  padding: 0 1.285rem;
  transition: background 0.3s ease-in-out;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 0.5rem;
  &:hover {
    background: #3b475c;
  }
}
</style>