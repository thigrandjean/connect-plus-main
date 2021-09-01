<template>
  <footer>
    <div class="logo">
      <g-link :to="$tp('/home')">
        <g-image
          id="logo-footer"
          src="~/assets/images/logo0-footer.png"
          alt="Connect Plus Logo"
        />
      </g-link>
    </div>

    <nav class="menu">
      <ul>
        <li class="menu-item menu-item-1">
          <a target="_blank" rel="noopener" :href="$t('menu.link_send_money')">
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
        <li class="menu-item menu-item-3">
          <a
            id="link-footer-send-money"
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

        <li class="menu-item menu-item-4">
          <g-link id="link-footer-about" :to="$tp('/about')">{{
            $t('menu.about_us')
          }}</g-link>
        </li>
        <li class="menu-item menu-item-5">
          <g-link id="link-footer-how-it-works" :to="$tp('/howitworks')">{{
            $t('menu.how_it_works')
          }}</g-link>
        </li>
        <li class="menu-item menu-item-6">
          <g-link id="link-footer-work-with-us" :to="$tp('/workwithus')">{{
            $t('menu.work_with_us')
          }}</g-link>
        </li>
        <li class="menu-item menu-item-7">
          <g-link id="link-footer-contect" :to="$tp('/contact')">{{
            $t('menu.contact')
          }}</g-link>
        </li>
        <li class="menu-item menu-item-8">
          <g-link id="link-footer-terms" :to="$tp('/terms')">{{
            $t('menu.terms')
          }}</g-link>
        </li>
        <li class="menu-item menu-item-9">
          <g-link
            id="link-footer-about-anti-money-laundering"
            :to="$tp('/antimoneylaundering')"
            >{{ $t('menu.anti_money_laundering') }}</g-link
          >
        </li>
      </ul>
    </nav>

    <div class="social">
      <SocialIcons place="footer" />
    </div>

    <div class="copyright">
      <p>{{ $t('footer.copy') }}</p>
      <p>{{ $t('footer.license') }}</p>
    </div>
  </footer>
</template>

<script>
import SocialIcons from './SocialIcons.vue'
export default {
  components: { SocialIcons },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
footer {
  background: $main-blue;
  background-image: url('../assets/images/patterns/bg-dark.jpg');
  padding-bottom: 2rem;
  .logo {
    display: none;
  }

  nav {
    padding-top: 1rem;
    a {
      display: flex;
      align-items: center;
      color: $main-grey-02;
      text-decoration: none;
      padding: 0.75rem 1rem 0.75rem 3rem;
      border-bottom: 1px solid white;
      &:hover {
        color: $main-gold;
        svg path {
          stroke: $main-gold;
        }
      }
      span {
        margin-right: 0.5rem;
      }
      svg path {
        stroke: $main-grey-02;
      }
    }
  }
  .social {
    padding: 2rem 0 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    text-align: center;
    color: $copyright;
  }
}

@media (min-width: $bp-mobile) {
  footer {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
      'logo nav icons'
      'copy copy copy';
    grid-template-rows: auto;
    padding-top: 2rem;
    .logo {
      grid-area: logo;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    nav.menu {
      grid-area: nav;
    }

    .social {
      grid-area: icons;
    }

    .copyright {
      grid-area: copy;
      border-top: 1px solid $sec-blue-09;
      margin-top: 2rem;
      padding-top: 1rem;
    }
    nav ul {
      display: grid;
      a {
        border: none;
      }
    }
    .menu-item-1 {
      grid-row: 1;
      grid-column: 1;
    }
    // .menu-item-2 { grid-row: 2; grid-column: 1; }
    .menu-item-3 {
      grid-row: 2;
      grid-column: 1;
    }

    .menu-item-4 {
      grid-row: 1;
      grid-column: 2;
    }
    .menu-item-5 {
      grid-row: 2;
      grid-column: 2;
    }
    .menu-item-6 {
      grid-row: 3;
      grid-column: 2;
    }

    .menu-item-7 {
      grid-row: 1;
      grid-column: 3;
    }
    .menu-item-8 {
      grid-row: 2;
      grid-column: 3;
    }
    .menu-item-9 {
      grid-row: 3;
      grid-column: 3;
    }
  }
}
</style>