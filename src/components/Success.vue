<template>
  <div class="modal-success">
    <div class="modal-window" v-click-outside="close">
      <div @click="close" class="modal-close">
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.35466 0.772461L1.69735 1.13656L6.99991 6.77054L12.3025 1.13656L12.6452 0.772461L13.3734 1.45783L13.0307 1.82193L7.68654 7.50008L13.0307 13.1782L13.3734 13.5423L12.6452 14.2277L12.3025 13.8636L6.99991 8.22961L1.69735 13.8636L1.35466 14.2277L0.626465 13.5423L0.969147 13.1782L6.31329 7.50008L0.969147 1.82193L0.626465 1.45783L1.35466 0.772461Z"
            fill="#999999"
          />
        </svg>
      </div>
      <div class="modal-icon">
        <svg
          width="74"
          height="74"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 36.8771C0 57.2438 16.5104 73.7542 36.8771 73.7542C57.2438 73.7542 73.7542 57.2438 73.7542 36.8771C73.7542 16.5104 57.2438 0 36.8771 0C16.5104 0 0 16.5104 0 36.8771ZM67.0493 36.8771C67.0493 53.5408 53.5408 67.0493 36.8771 67.0493C20.2135 67.0493 6.70493 53.5408 6.70493 36.8771C6.70493 20.2135 20.2135 6.70493 36.8771 6.70493C53.5408 6.70493 67.0493 20.2135 67.0493 36.8771Z"
            fill="#DBC274"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.3456 41.4212L50.8642 21.9026L56.0794 27.1178L31.3456 51.8517L17.6748 38.1809L22.89 32.9657L31.3456 41.4212Z"
            fill="#DBC274"
          />
        </svg>
      </div>
      <h2 class="modal-title">Message sent sucessfully!</h2>
      <p class="modal-message">
        Thank you for sending us this message! Our team will contact you as soon
        as possible!
      </p>
      <a @click.prevent="close" href="#" class="cta cta-third"
        >Okay, close window</a
      >
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  methods: {
    close() {
      this.$emit('close')
    },
  },
  directives: {
    ClickOutside,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/vars.scss';

.modal-success {
  background: rgba(black, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  .modal-window {
    position: relative;
    padding: 4rem 2rem 3rem 2rem;
    background-color: $main-blue;
    background-image: url('../assets/images/patterns/bg-dark.jpg');
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-sizing: border-box;
    max-width: 34.214rem;
    .modal-close {
      position: absolute;
      top: 2rem;
      right: 2rem;
      cursor: pointer;
    }
  }
  .modal-title {
    color: $main-gold;
    text-align: center;
    font-size: 1.428rem;
    margin-bottom: 2rem;
  }
  .modal-message {
    color: $txt-modal;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 3rem;
  }
}

@media (min-width: $bp-mobile) {
  .modal-success {
    .modal-title {
      font-size: 2.142rem;
      margin-bottom: 1rem;
    }
    .modal-message {
      font-size: 1.142rem;
      margin-bottom: 3rem;
    }
  }
}
</style>