<template>
  <li
    class="location-item"
    :class="{
      expanded: !isColapsed,
    }"
  >
    <div
      @click="setSelected"
      class="location-content"
      :class="{
        expanded: !isColapsed,
        selected: selected === content.name,
      }"
    >
      <h2 class="title">{{ content.name }}</h2>
      <h3 class="subtitle">{{ content.city }}</h3>
      <!-- <p>{{ content.distance }}</p> -->
      <p class="address">
        <span>{{ $t('locations.infos.address') }}:</span>
        {{ content.address }}{{ content.zipcode ? `, ${content.zipcode}` : null
        }}{{ content.city ? `, ${content.city}` : null
        }}{{ content.country ? `, ${content.country}` : null }}
      </p>
      <transition name="apear">
        <div v-if="!isColapsed">
          <p></p>
          <p class="telephone" v-if="content.telephone">
            <span>{{ $t('locations.infos.telephone') }}:</span>
            +{{ content.telephone }}
          </p>
        </div>
      </transition>
      <!-- <a
        @click.prevent="toggleColapsed"
        class="open-info"
        href="#"
        :class="{ close: !isColapsed }"
        :id="`openinfo-to-${sanitizeTitle(content.name)}`"
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
      </a> -->
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
    sanitizeTitle(title) {
      var slug = ''
      // Change to lower case
      var titleLower = title.toLowerCase()
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e')
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a')
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o')
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u')
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd')
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '')
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-')

      return slug
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
  transition: all 0.2s ease-in-out;
  padding: 1rem 1rem;
  position: relative;
  cursor: pointer;
  &:hover {
    h2,
    h3,
    p {
      color: $main-gold;
    }
  }
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
    /* height: 12.8rem; */
    height: min-content;
    border-bottom: 2px solid #e9e9e9;
    /* @media (min-width: $bp-mobile) {
      height: 15.142rem;
    } */
    min-height: 15.142rem;
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
  transition: all 0.2s ease-in-out;
  z-index: 1001;

  &:hover {
    background: $main-gold;
    border-color: $main-gold;
  }
  @media (min-width: $bp-mobile) {
    right: 4.285rem;
    bottom: 1.428rem;
    &.close {
      /* bottom: 0rem; */
    }
  }
  svg {
    transition: transform 0.3s ease-in-out;
  }
  &.close {
    background: white;
    color: $sec-blue-03;
    &:hover {
      color: $main-gold;
      border-color: $main-gold;
    }
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
  text-transform: capitalize;
  @media (min-width: $bp-mobile) {
    font-size: 2.142rem;
    font-size: 1.285rem;
    margin: 0 0 0.571rem 0;
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
  margin: 0.15rem 0 1rem 0;
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