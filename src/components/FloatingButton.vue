<template>
  <div
    class="wrapper"
    :class="{
      isFloatingButtonWrapper: !this.$store.state.isTestB || Scrolled,
      hasPassedScrollLimit: Scrolled,
    }"
  >
    <a
      class="floating-action-button"
      :class="{
        isFloatingButton: isFloatingButtonActive,
        floatinActionButton01: !this.$store.state.isTestB,
        floatinActionButton02: this.$store.state.isTestB,
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
      // isOnTestB: null,
      isFloatingButtonActive: true,
      Scrolled: false,
    }
  },
  props: {
    link: String,
  },
  mounted() {
    window.vm = {}
    vm.FloatingButton = this
    this.$store.state.isTestB &&
      window.addEventListener('scroll', this.handleScroll)
  },

  // computed: {
  //   setTest: function () {
  //     this.isTestB && this.setTestB()
  //   },
  // },
  methods: {
    setTestB() {
      this.$store.commit('turnOnTestB')
      window.addEventListener('scroll', this.handleScroll)
    },
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
  // watch: {
  //   '$store.state.isTestB': function () {
  //     !this.$store.state.isTestB
  //       ? (this.isOnTestB = true)
  //       : (this.isOnTestB = false)
  //   },
  // },
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
    bottom: 0.642rem;
    right: 1.142rem;
  }
  @media (max-width: $bp-mobile) {
    &.isFloatingButtonWrapper,
    .hasPassedScrollLimit {
      position: fixed;
      bottom: 0.642rem;
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
  margin-bottom: 0.5rem;
  &:hover {
    background: #3b475c;
  }
}
</style>