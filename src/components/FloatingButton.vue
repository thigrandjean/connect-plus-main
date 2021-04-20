<template>
  <div
    class="wrapper"
    :class="{
      isFloatingButtonWrapper: isFloatingButtonActive,
      hasPassedScrollLimit: Scrolled,
    }"
  >
    <a
      class="floating-action-button"
      :class="{
        isFloatingButton: isFloatingButtonActive,
        floatinActionButton01: !isTestB,
        floatinActionButton02: isTestB,
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
      isTestB: true,
      isFloatingButtonActive: true,
      Scrolled: false,
    }
  },
  props: {
    link: String,
  },
  mounted() {
    vm.FloatingButton = this
    this.isTestB && this.setTestB()
  },
  computed: {
    setTest: function () {
      this.isTestB && this.setTestB()
    },
  },
  methods: {
    setTestB() {
      this.isTestB = true
      this.isFloatingButtonActive = false
      window.addEventListener('scroll', this.handleScroll)
    },
    floatingButtonDisabled() {
      this.isFloatingButtonActive = false
      this.Scrolled = false
    },
    floatingButtonEnabled() {
      this.isFloatingButtonActive = true
      this.Scrolled = this.isTestB
    },
    handleScroll(e) {
      window.scrollY > 80
        ? this.floatingButtonEnabled()
        : this.floatingButtonDisabled()
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
  margin-top: -1rem;
  @media (min-width: $bp-mobile) {
    position: fixed;
    bottom: 2.142rem;
    right: 1.142rem;
  }
  @media (max-width: $bp-mobile) {
    &.isFloatingButtonWrapper,
    .hasPassedScrollLimit {
      position: fixed;
      bottom: 1.142rem;
      right: 1.142rem;
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
  &:hover {
    background: #3b475c;
  }
}
</style>