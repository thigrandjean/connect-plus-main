<template>
  <div class="conversor">
    <p>{{ $t('hero.conversor.select') }}</p>

    <div
      id="country-selector"
      class="country-select"
      @click="openCountryList"
      v-click-outside="hideCountries"
    >
      <div class="current-country">
        <div class="flag">
          <all-flags :country="curentFlag" />
        </div>
        {{ currentCountry }}
      </div>
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L6 6L11 1" stroke-linejoin="round" />
      </svg>
      <div class="country-list" v-if="isCountryListOpen">
        <a
          class="country-item"
          href="#"
          :id="`country-selector-set-${country.code}`"
          v-for="country in $t('countries')"
          :key="country.name"
          @click.prevent="changeCountry(country.name)"
        >
          <div class="flag">
            <all-flags :country="country.code" />
          </div>
          {{ country.name }}
        </a>
      </div>
    </div>

    <form @submit.prevent="convert()">
      <div class="convert-field">
        <label for="moedaA">{{ $t('hero.conversor.value') }}</label
        ><br />
        <span class="current-symbol">{{ currentSimbolA }}</span>
        <money id="moedaA" v-model="moedaAVal" v-bind="money"></money>
        <div class="currency">
          <span>{{ moedaA }}</span>
          <div class="currency-list" v-if="isCurrencyListOpenA">
            <!-- <a href="#" @click.prevent="changeCurrencyA($t('currenciesfrom[0].code'))" > -->
            {{ $t('currenciesfrom[0].code') }}
            <!-- </a> -->
            <!-- <a href="#"
              v-for="(currency, i) in $store.state.currenciesfrom"
              :key="`ma-${i}`"
              @click.prevent="changeCurrencyA(currency.code)"
              >
              {{ currency.code }}
            </a> -->
          </div>
        </div>
      </div>

      <div class="convert-field">
        <label for="moedaB">{{ $t('hero.conversor.receiving') }}</label
        ><br />
        <span class="current-symbol">{{ currentSimbolB }}</span>
        <money id="moedaB" readonly v-model="moedaBVal" v-bind="money"></money>
        <!-- <input readonly type="text" v-model="moedaBVal" name="moedaB" id="moedaB"> -->
        <div
          id="currency-select"
          class="currency"
          @click="openCurrencyListB"
          v-click-outside="hideMoedaB"
        >
          <span>{{ moedaB }}</span>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L6 6L11 1" stroke-linejoin="round" />
          </svg>
          <div class="currency-list" v-if="isCurrencyListOpenB">
            <a
              href="#"
              :id="`currency-select-${currency}`"
              v-for="(currency, i) in currenciesSelectedCountry"
              :key="`mb-${i}`"
              @click.prevent="changeCurrencyB(currency)"
            >
              {{ currency }}
            </a>
          </div>
          <!-- <div class="currency-list" v-if="isCurrencyListOpenB">
            <a href="#"
              v-for="(currency, i) in $store.state.currencies"
              :key="`mb-${i}`"
              @click.prevent="changeCurrencyB(currency.code)"
              >
              {{ currency.code }}
            </a>
          </div> -->
        </div>
      </div>

      <div class="cta-wrap">
        <p class="ps" :class="{ psAfter: showMsgAfter }">
          {{ $t('hero.conversor.ps') }}
        </p>

        <button
          v-if="!ctaAsLink"
          id="cta-currency-exchange"
          class="cta cta-main"
        >
          {{ $t('hero.conversor.cta_01') }}
        </button>

        <a
          v-if="ctaAsLink"
          id="cta-currency-exchange-link"
          class="cta cta-main"
          target="_blank"
          rel="noopener"
          :href="$t('hero.conversor.link_cta_02')"
        >
          {{ $t('hero.conversor.cta_01') }}
        </a>
      </div>
    </form>

    <a
      id="cta-money-transfer"
      v-if="showSecondaryButton"
      class="cta cta-sec"
      :class="`cta-${secondarybuttonColor}`"
      target="_blank"
      rel="noopener"
      :href="$t('hero.conversor.link_cta_02')"
      >{{ $t('hero.conversor.cta_02') }}</a
    >
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import Flags from '@/components/Flags.vue'
import AllFlags from '@/components/AllFlags.vue'
import { Money } from 'v-money'

import { mapState } from 'vuex'

export default {
  props: {
    showSecondaryButton: {
      type: Boolean,
      default: true,
    },
    showMsgAfter: {
      type: Boolean,
      default: false,
    },
    autoCalc: {
      type: Boolean,
      default: false,
    },
    ctaAsLink: {
      type: Boolean,
      default: false,
    },
    secondarybuttonColor: {
      type: String,
      default: 'default',
    },
  },
  components: { Flags, Money, AllFlags },
  data() {
    return {
      moedaA: '',
      moedaB: 'BRL',
      moedaAVal: '0',
      moedaBVal: '0',
      currentCountry: 'Brazil',
      curentFlag: 'br',
      currentSimbolA: '€',
      currentSimbolB: 'R$',
      isCountryListOpen: false,
      isCurrencyListOpenA: false,
      isCurrencyListOpenB: false,
      currenciesSelectedCountry: [],
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: true,
      },
    }
  },
  mounted() {
    this.changeCurrencyA(this.$t('currenciesfrom[0].code'))
  },
  computed: mapState(['testB']),
  methods: {
    convertFromWP(code) {
      // pega o valor digitado
      const valueGbp = parseFloat(this.moedaAVal.replace(/,/g, ''))
      let totalWP = ''

      // pega os dados da api do WP
      fetch('https://connect-plus.co.uk/wp-json/currencies/v1/all')
        .then((resp) => resp.json())
        .then((json) => {
          // console.log(json);
          // procura a moeda escolhida na array do WP
          let curentCurrency = json.filter((x) => x.currency_key === code)

          // Pega o valor da moeda escolhida no WP
          const currencyStringValue = curentCurrency[0].currency_value

          // Transforma o valor em número
          const currencyValue = Number(currencyStringValue.replaceAll(',', ''))

          // Calcula o Valor
          totalWP = valueGbp * currencyValue

          // verifica se a moeda original é euro e transforma de Libra pra Euro
          if (this.moedaA === 'EUR') {
            // pega a cotação do euro
            let getEuro = json.filter((x) => x.currency_key === 'EUR')
            let euroCotation = Number(getEuro[0].currency_value)

            // converte o valor final para euro
            this.moedaBVal = totalWP / euroCotation
          } else {
            this.moedaBVal = totalWP
          }
        })
    },

    convertFromAPI() {
      let value = parseFloat(this.moedaAVal.replace(/,/g, ''))
      let de_para = `${this.moedaA}_${this.moedaB}`
      let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=7a25039ef6eddb710e4a`
      fetch(url)
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          let cotacao = json[de_para]

          this.moedaBVal = (cotacao * value).toFixed(2)
        })
    },
    convert() {
      this.moedaBVal = 0

      // verifica se a moeda está nmo WP
      if (this.moedaB === 'COP') this.convertFromWP('COL')
      else if (this.moedaB === 'BRL') this.convertFromWP('BRL')
      else if (this.moedaB === 'EUR') this.convertFromWP('EUR')
      else if (this.moedaB === 'PLN') this.convertFromWP('PLN')
      else if (this.moedaB === 'PYG') this.convertFromWP('PYG')
      else if (this.moedaB === 'VEF') this.convertFromWP('VEN')
      else if (this.moedaB === 'PEN') this.convertFromWP('PER')
      else if (this.moedaB === 'CLP') this.convertFromWP('CHI')
      else if (this.moedaB === 'UYU') this.convertFromWP('URU')
      else if (this.moedaB === 'UYU') this.convertFromWP('URU')
      else if (this.moedaB === 'BOB') this.convertFromWP('BOL')
      else {
        this.convertFromAPI()
      }
    },
    openCountryList() {
      this.isCountryListOpen = !this.isCountryListOpen
    },
    hideCountries() {
      this.isCountryListOpen = false
    },
    openCurrencyListA() {
      this.isCurrencyListOpenA = !this.isCurrencyListOpenA
    },
    hideMoedaA() {
      this.isCurrencyListOpenA = false
    },
    openCurrencyListB() {
      this.isCurrencyListOpenB = !this.isCurrencyListOpenB
    },
    hideMoedaB() {
      this.isCurrencyListOpenB = false
    },
    changeCountry(country) {
      let selected = this.$t('countries').find((obj) => obj.name === country)
      this.currentCountry = selected.name
      this.currenciesSelectedCountry = selected.currency
      this.moedaB = this.currenciesSelectedCountry[0]

      let symbolChosen = this.$store.state.allcurrencies.find(
        (obj) => obj.code === this.moedaB
      )
      this.currentSimbolB = symbolChosen.symbol

      this.curentFlag = selected.code
      this.convert()
    },
    changeCurrencyA(currency) {
      let selectedA = this.$store.state.allcurrencies.find(
        (obj) => obj.code === currency
      )
      this.moedaA = selectedA.code
      this.currentSimbolA = selectedA.symbol
      this.convert()
    },
    changeCurrencyB(currencyChosen) {
      // let selectedB = this.$store.state.currencies.find(obj => obj.code === currency);
      // this.moedaB = selectedB.code
      // this.currentSimbolB = selectedB.symbol
      let selectedB = this.$store.state.allcurrencies.find(
        (obj) => obj.code === currencyChosen
      )
      this.moedaB = selectedB.code
      this.currentSimbolB = selectedB.symbol

      this.convert()
    },
  },

  watch: {
    moedaAVal: function () {
      this.autoCalc && this.convert()
    },

    autoCalc: {
      immediate: true,
      handler(newVal, oldVal) {
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      },
    },

    '$i18n.locale': function () {
      this.changeCurrencyA(this.$t('currenciesfrom[0].code'))
      if (this.$i18n.locale === 'en') this.changeCountry('Brazil')
      if (this.$i18n.locale === 'it') this.changeCountry('Brasile')
      if (this.$i18n.locale === 'es') this.changeCountry('Brasil')
    },
  },

  directives: {
    ClickOutside,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.conversor {
  position: relative;
  z-index: $layerFg;
  color: $main-grey;
}
.country-select {
  width: 100%;
  height: 2.85rem;

  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  padding: 0 1rem 0 1rem;
  margin: 1rem 0;
  border-radius: 5px;

  font-family: JT Marnie;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: $layerFg;
  .current-country {
    width: 15rem;
    display: flex;
    align-items: center;
  }
  .flag {
    width: 2.357rem;
    margin: 0.25rem 0.5rem 0 0;
    svg {
      width: 100%;
    }
  }
  &:hover {
    cursor: pointer;
  }
}
p {
  color: $main-grey;
  font-size: 1.142rem;
  font-weight: 300;
  &.ps {
    font-size: 0.857rem;
    margin: 0 0 2rem 0;
  }
}
.convert-field {
  display: grid;
  grid-template-columns: auto 1fr 5.5rem;
  grid-template-rows: auto 3.5rem;
  padding: 0;
  height: 6.5rem;
  row-gap: 0.1rem;
  grid-template-areas:
    'label label label'
    'symbol input currency';
  label {
    grid-area: label;
    color: $main-grey;
    font-size: 1.142rem;
    margin: 0.5em 0 0 0;
  }
  input {
    grid-area: input;
    border-radius: 0;
    border-left: none;
    padding-left: 0.5rem;
    width: 100%;
  }
  .current-symbol {
    position: relative;
    grid-area: symbol;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    border-right: none;
    box-sizing: border-box;
    padding: 0 0 0 1rem;
    margin: 0.5rem 0;
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    font-size: 1.142rem;
    white-space: nowrap;
    height: 2.85rem;
  }
  .currency {
    position: relative;
    grid-area: currency;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    border-left: none;
    box-sizing: border-box;
    padding: 0 1rem 0 1rem;
    margin: 0.5rem 0;
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    height: 2.85rem;
    span {
      margin-right: 0.5rem;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
svg path {
  stroke: $main-grey;
}

.country-list,
.currency-list {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  width: 18.285rem;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
  z-index: $layerFg;
  max-height: 19rem;
  overflow-y: scroll;

  a {
    color: $main-grey;
    text-decoration: none;
    display: block;
    padding: 1rem;
    font-size: 1.142rem;
    &:hover {
      background: $cinza-claro;
      // color: white;
    }
  }
}

.country-list {
  .country-item {
    display: flex;
    align-items: center;
  }
}
.currency-list {
  width: 10.428rem;
  max-height: 13.5rem;
}
button,
.cta {
  margin: 0 auto;
}
.cta-wrap {
  margin: 0 auto 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#cta-money-transfer {
  margin-bottom: 1rem;
}
.cta-blue {
  border-color: $sec-blue-02;
  background: $sec-blue-02;
  color: white;
  &:hover {
    background: white;
    color: $sec-blue-02;
  }
}
@media (max-width: $bp-mobile) {
  .cta-wrap {
    .psAfter {
      order: 1;
      margin-top: 1rem;
    }
  }
}
</style>      