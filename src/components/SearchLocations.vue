<template>
  <div class="search-locations">
    <div class="search-wrap">
      <div class="searchbox">
        <input
          @focus="onFocus"
          @blur="onBlur"
          class="search-input"
          type="search"
          placeholder="Enter a zip code or a address"
        />
        <button :class="{ focused: isSearcFocused }" class="search-button">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.33332 2.33333C4.5719 2.33333 2.33332 4.57191 2.33332 7.33333C2.33332 10.0948 4.5719 12.3333 7.33332 12.3333C10.0947 12.3333 12.3333 10.0948 12.3333 7.33333C12.3333 4.57191 10.0947 2.33333 7.33332 2.33333ZM0.666656 7.33333C0.666656 3.65144 3.65143 0.666668 7.33332 0.666668C11.0152 0.666668 14 3.65144 14 7.33333C14 11.0152 11.0152 14 7.33332 14C3.65143 14 0.666656 11.0152 0.666656 7.33333Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9107 10.9107C11.2362 10.5853 11.7638 10.5853 12.0892 10.9107L17.0892 15.9107C17.4147 16.2362 17.4147 16.7638 17.0892 17.0893C16.7638 17.4147 16.2362 17.4147 15.9107 17.0893L10.9107 12.0893C10.5853 11.7638 10.5853 11.2362 10.9107 10.9107Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="locations">
      <ul class="locations-list">
        <SearchLocationsCard
          v-for="item in $t('locations.places')"
          :key="item.subTitle"
          :content="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import SearchLocationsCard from '../components/SearchLocationsCard'
export default {
  components: { SearchLocationsCard },
  data() {
    return {
      isSearcFocused: false,
    }
  },
  methods: {
    onFocus() {
      this.isSearcFocused = true
    },
    onBlur() {
      this.isSearcFocused = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/vars.scss';
.search-locations {
}
.search-wrap {
  width: 100%;
  padding: 1.25rem 1rem 1.785rem 1rem;
  box-sizing: border-box;
}
.searchbox {
  display: grid;
  grid-template-columns: 1fr 2rem;
  border-bottom: 2px solid #757575;
  width: 100%;
  box-sizing: border-box;
}

.search-input {
  padding: 0 0 0 0;
  border-radius: 0;
  border: none;
  margin: 0;
  color: #757575;
  font-size: 1.142rem;
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1em;
    width: 1em;
    border-radius: 50em;
    background: url('~@/assets/images/x-close.png') no-repeat 50% 50%;
    background-size: contain;
  }
  &:focus {
    color: #353c50;
    outline: none;
  }
}
.search-button {
  background: none;
  border: none;
  outline: none;
  color: #c;
  transition: color 0.3s ease-in-out;

  &.focused {
    color: #353c50;
  }
}

.locations-list {
  padding: 2px 0;
  background: #e9e9e9;
  display: grid;
  row-gap: 2px;
}
</style>