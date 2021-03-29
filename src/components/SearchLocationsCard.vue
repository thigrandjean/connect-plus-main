<template>
  <li class="location-item">
    <div
      class="location-content"
      :class="{
        expanded: !isColapsed,
        selected: selected === content.subTitle,
      }"
    >
      <h2 class="title" @click="setSelected">{{ content.subTitle }}</h2>
      <h3 class="subtitle" @click="setSelected">{{ content.name }}</h3>
      <p class="address" @click="setSelected">
        <span>{{ $t('locations.infos.address') }}:</span>
        {{ content.address
        }}{{ content.address2 ? `, ${content.address2}` : null
        }}{{ content.address3 ? `, ${content.address3}` : null }}
      </p>
      <transition name="apear">
        <p class="hidden-content" v-if="!isColapsed">
          <span>{{ $t('locations.infos.telephone') }}:</span>
          {{ content.telephone }}
        </p>
      </transition>
      <a
        @click.prevent="toggleColapsed"
        class="open-info"
        href="#"
        :class="{ close: !isColapsed }"
      >
        <span>{{ isColapsed ? 'Open info' : 'Close info' }}</span>
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L6 6L11 1" stroke="currentColor" />
        </svg>
      </a>
    </div>
  </li>
</template>

<script>
export default {
  props: ['content', 'selected'],
  data() {
    return {
      isColapsed: true,
    }
  },
  methods: {
    toggleColapsed() {
      this.isColapsed = !this.isColapsed
    },
    setSelected() {
      this.$emit('select')
    },
  },
}
</script>


<style lang="scss" scoped>
@import '~/assets/style/vars.scss';

.location-item {
  position: relative;
  @media (min-width: $bp-mobile) {
    height: 13.285rem;
  }
}
.location-content {
  background: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 10rem;
  transition: height 0.2s ease-in-out;
  padding: 1rem 1rem;
  position: relative;
  @media (min-width: $bp-mobile) {
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    padding: 2.428rem 4.285rem;
    height: 13.285rem;
  }
  &.selected h2,
  &.selected h3,
  &.selected p {
    color: $main-gold;
  }
  &.expanded {
    z-index: 1000;
    height: 12.8rem;
    border-bottom: 2px solid #e9e9e9;
    @media (min-width: $bp-mobile) {
      height: 15.142rem;
    }
  }
}
.open-info {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background: $sec-blue-03;
  width: 126px;
  height: 22px;
  border-radius: 5px;
  color: white;
  font-size: 1.142rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid $sec-blue-03;
  transition: all 0.3s ease-in-out;
  @media (min-width: $bp-mobile) {
    right: 4.285rem;
    bottom: 1.428rem;
  }
  svg {
    transition: transform 0.3s ease-in-out;
  }
  &.close {
    background: white;
    color: $sec-blue-03;
    svg {
      transform: rotate(180deg);
    }
  }
}
h2.title {
  font-weight: 300;
  font-size: 1.285rem;
  color: $main-blue;
  cursor: pointer;
  margin: 0 0 0.75rem 0;
  @media (min-width: $bp-mobile) {
    font-size: 2.142rem;
    margin: 0 0 1rem 0;
  }
}
h3.subtitle {
  font-weight: bold;
  font-size: 1.142rem;
  cursor: pointer;
  margin: 0;
  color: #6b6b6b;
  @media (min-width: $bp-mobile) {
    font-size: 1.285rem;
  }
}
p.address {
  cursor: pointer;
}
p {
  font-size: 1.142rem;
  margin: 0.15rem 0 0.5rem 0;
  color: #6b6b6b;

  span {
    font-weight: bolder;
  }
}
.apear-enter-active,
.apear-leave-active {
  transition: opacity 0.5s;
}
.apear-enter, .apear-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>