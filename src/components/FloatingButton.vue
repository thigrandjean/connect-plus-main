<template>
  <div class="wrapper">
    <a
      v-if="isFloating"
      id="floating-action-button"
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
  props: {
    link: String,
    isFloating: { type: Boolean, default: true },
  },
  methods: {
    toggleFloatingButton() {
      console.log('Floating Button Toggled')
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

#floating-action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: fixed; */
  width: fit-content;
  z-index: 100000;
  bottom: 1rem;
  right: 1rem;
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