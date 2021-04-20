<template>
  <header>
    <div class="header-wrap">
      <div
        class="header-toggle-menu header-item"
        @click="openMenu"
        id="open-menu-mobile"
      >
        <svg
          width="28"
          height="25"
          viewBox="0 0 28 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5H28V0H0V5Z"
            fill="#DBC274"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 25H28V20H0V25Z"
            fill="#DBC274"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 15H28V10H0V15Z"
            fill="#DBC274"
          />
        </svg>
      </div>

      <div class="header-social-icons header-item">
        <SocialIcons place="header" />
      </div>

      <div class="header-logo header-item">
        <g-link
          id="logo-header"
          aria-label="Home page Connect Plus"
          :to="$tp('/')"
          class="header-logo-item"
        >
          <logo-horizontal />
        </g-link>
      </div>

      <div class="header-lang-select header-item">
        <LangSelect />
      </div>

      <nav class="header-menu" :class="{ menuon: menuOpen }">
        <ul class="menu" v-click-outside="closeMenu">
          <li class="close-menu-wrap">
            <a
              id="close-menu"
              href="#"
              @click.prevent="closeMenu"
              class="close-menu"
              aria-label="close menu"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.62501 0.917847L8.00001 7.29285L14.375 0.917847L15.0821 1.62495L8.70712 7.99995L15.0821 14.375L14.375 15.0821L8.00001 8.70706L1.62501 15.0821L0.917908 14.375L7.29291 7.99995L0.917908 1.62495L1.62501 0.917847Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li class="menu-item">
            <g-link id="link-menu-home" :to="$tp('/')">{{
              $t('menu.home')
            }}</g-link>
          </li>
          <li class="menu-item-submenu">
            <a class="open-sub" href="#">
              <span>{{ $t('menu.transfer') }}</span>
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="white"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <ul class="submenu">
              <li class="sub-menu-item">
                <a
                  id="link-menu-send-money"
                  target="_blank"
                  rel="noopener"
                  :href="$t('menu.link_send_money')"
                >
                  <span>{{ $t('menu.send_money') }}</span>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 11L6 6L1 1" stroke-linejoin="round" />
                  </svg>
                </a>
              </li>
              <!-- <li class="sub-menu-item">
                            <a id="link-menu-transfer-status" target="_blank" rel="noopener" :href="$t('menu.link_transfer_status')">
                                <span>{{ $t('menu.transfer_status') }}</span>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L6 6L1 1" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li> -->
              <li class="sub-menu-item">
                <a
                  id="link-menu-track-money"
                  target="_blank"
                  rel="noopener"
                  :href="$t('menu.link_track_money')"
                >
                  <span>{{ $t('menu.track_money') }}</span>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 11L6 6L1 1" stroke-linejoin="round" />
                  </svg>
                </a>
              </li>
            </ul>
          </li>
          <li class="menu-item">
            <g-link id="link-menu-about" :to="$tp('/about')">{{
              $t('menu.about_us')
            }}</g-link>
          </li>
          <li class="menu-item">
            <g-link id="link-menu-howitworks" :to="$tp('/howitworks')">{{
              $t('menu.how_it_works')
            }}</g-link>
          </li>
          <li class="menu-item">
            <g-link id="link-menu-workwithus" :to="$tp('/workwithus')">{{
              $t('menu.work_with_us')
            }}</g-link>
          </li>
          <li class="menu-item">
            <g-link id="link-menu-contact" :to="$tp('/contact')">{{
              $t('menu.contact')
            }}</g-link>
          </li>
          <li class="menu-item">
            <div class="header-menu-social-icons">
              <SocialIcons place="header-mobile" />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import LogoHorizontal from '@/components/LogoHorizontal.vue'
import SocialIcons from '@/components/SocialIcons.vue'
import LangSelect from '@/components/LangSelect.vue'
import { mapState } from 'vuex'
import ClickOutside from 'vue-click-outside'

export default {
  data() {
    return {
      menuOpen: false,
    }
  },

  components: { LogoHorizontal, SocialIcons, LangSelect },

  methods: {
    openMenu() {
      this.menuOpen = true
    },
    closeMenu() {
      this.menuOpen = false
    },
  },
  directives: {
    ClickOutside,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

header {
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: $layerTopAll;
  position: relative;
}
.header-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: $main-blue;
  background-image: url('../assets/images/patterns/bg-med.jpg');
  padding: 1.5rem;
  height: $header-mob-h;
  box-sizing: border-box;
  position: fixed;
  width: 100%;

  .header-item {
    display: flex;
    align-items: center;
  }
  .header-logo {
    display: flex;
    justify-content: center;
  }
  .header-logo-item {
    width: 11.214rem; // width="157" height="31"
  }
  .header-social-icons {
    display: none;
  }
  .header-lang-select {
    justify-content: flex-end;
  }
  .header-menu-social-icons {
    display: block;
  }
  .header-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(black, 0);
    pointer-events: none;
    transition: all 0.3s ease-in-out;
    .menu {
      margin: 0;
      padding: 0 0 0 2.5rem;
      background-color: $main-blue;
      background-image: url('../assets/images/patterns/bg-dark.jpg');
      width: 70%;
      height: 100vh;
      transform: translateX(-100vw);
      transition: all 0.25s ease-in-out;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      li.menu-item {
        margin: 1.5rem 0rem 1.5rem 0;
        display: block;
      }
      li.menu-item-submenu {
        margin: 0;
        ul {
          display: flex;
          flex-flow: column;
          justify-content: center;
        }
      }
      li.sub-menu-item {
        margin: 1.5rem 0 1.5rem 0;
        display: block;
        a {
          span {
            margin-right: 1rem;
          }
          svg path {
            stroke: white;
          }
        }
      }

      .close-menu-wrap {
        position: absolute;
        right: 1.785rem;
        top: 1.785rem;
      }
      .open-sub {
        display: none;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 1.285rem;
        font-weight: 300;
        &:hover {
          font-weight: 400;
        }
      }
    }
    &.menuon {
      pointer-events: all;
      right: 0;
      background: rgba(black, 0.3);
      .menu {
        transform: translateX(0);
      }
    }
  }
}

@media (min-width: $bp-mobile) {
  header {
    background-color: $main-blue;
    background-image: url('../assets/images/patterns/bg-med.jpg');
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: $header-desk-h;
    position: fixed;
  }

  .header-wrap {
    max-width: $max-w;

    .header-toggle-menu {
      display: none;
      height: $header-desk-h;
    }
    .header-social-icons {
      display: flex;
    }
    .header-menu-social-icons {
      display: none;
    }

    .header-logo {
      display: flex;
      justify-content: center;
    }
    .header-logo-item {
      width: 13.785rem;
    }
    .header-menu {
      top: $header-desk-h;
      bottom: unset;
      height: $header-menu-desk-h;
      background-color: $main-blue;
      background-image: url('../assets/images/patterns/bg-med.jpg');
      left: 0;
      right: 0;
      pointer-events: all;
      transition: none;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      border-top: 1px solid #2d3345;

      .menu {
        max-width: $max-w * 0.825;
        margin: 0;
        width: 100%;
        height: $header-menu-desk-h;
        transform: none;
        transition: none;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        box-sizing: border-box;
        transition: none;
        flex-direction: row;
        background: none;

        li.menu-item {
          margin: 0;
          display: block;
          a {
            display: block;
            padding: 1.5rem 0rem 1.5rem 0;
          }
        }
        li.menu-item-submenu {
          // margin: 1.5rem 0rem 1.5rem 0;
          margin: 0;

          a {
            display: block;
            padding: 1.5rem 0rem 1.5rem 0;
          }
          ul {
            display: none;
            background: $main-blue;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 0px 0px 5px 5px;
            li {
              margin: 0;
            }
            a {
              padding: 1rem 0rem 1rem 2rem;
              &:hover {
                background: white;
                color: $main-blue;
                svg path {
                  stroke: $main-blue;
                }
              }
            }
          }
          &:hover {
            ul {
              display: flex;
            }
          }
        }

        .close-menu-wrap {
          display: none;
        }
        .open-sub {
          display: block;
          span {
            margin-right: 0.5rem;
          }
        }
        &.menuon {
          transition: none;
          .menu {
            transition: none;
          }
        }
      }
    }
  }
}
</style>