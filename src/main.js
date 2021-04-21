// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import Style from  '~/assets/style/style.scss'
import Vuex from 'vuex'
export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(Vuex);
  head.script.push({ src:"https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit", body:true})

  if (isClient) {
    // console.log('Client');
    Vue.component("l-map", () => import ('vue2-leaflet').then(m => m.LMap));
    Vue.component("l-tile-layer", () => import ('vue2-leaflet').then(m => m.LTileLayer));
    Vue.component("l-marker", () => import ('vue2-leaflet').then(m => m.LMarker));
    Vue.component("l-tooltip", () => import ('vue2-leaflet').then(m => m.LTooltip));
    Vue.component("l-feature-group", () => import ('vue2-leaflet').then(m => m.LFeatureGroup));
    Vue.component("l-control", () => import ('vue2-leaflet').then(m => m.LControl));   
    Vue.component("l-icon", () => import ('vue2-leaflet').then(m => m.LIcon));   
  }

  appOptions.i18n.setLocaleMessage('it', require('./locales/it-it.json'))
  appOptions.i18n.setLocaleMessage('en', require('./locales/en-gb.json'))
  appOptions.i18n.setLocaleMessage('es', require('./locales/es.json'))

  appOptions.store = new Vuex.Store({
    state: {
      isTestB: true,
      currentLang: 'en',
      currentLangFlag: 'uk',
      bannerAbout: {
        headline: 'Learn more about our company',
        cta: 'See more about us',
        url: '/about',
        img: require('~/assets/images/bg-banner-about.jpg')
      },

      countries: [
          
        { name: 'Argentina', code: 'ar', currency: 'ARS', symbol: '$'},
        { name: 'Bolivia', code: 'bo', currency: 'BOB', symbol: 'Bs.'},
        { name: 'Brazil', code: 'br', currency: 'BRL', symbol: 'R$'},
        { name: 'Chile', code: 'cl', currency: 'CLP', symbol: '$'},
        { name: 'Colombia', code: 'co', currency: 'COP', symbol: '$'},
        { name: 'Dominican Republic', code: 'do', currency: 'DOP', symbol: '$'},
        { name: 'Ecuador', code: 'ec', currency: 'USD', symbol: '$'},
        { name: 'Guatemala', code: 'gt', currency: 'GTQ', symbol: 'Q'},
        { name: 'Honduras', code: 'hn', currency: 'HNL', symbol: 'L'},
        { name: 'Italy', code: 'it', currency: 'EUR', symbol: '€'},
        { name: 'Nicaragua', code: 'ni', currency: 'NIO', symbol: 'C$'},
        { name: 'Paraguay', code: 'py', currency: 'PYG', symbol: '₲'},
        { name: 'Peru', code: 'pe', currency: 'PEN', symbol: 'S/.'},
        { name: 'Portugal', code: 'pt', currency: 'EUR', symbol: '€'},
        { name: 'Spain', code: 'es', currency: 'EUR', symbol: '€'},
        { name: 'United Kingdom', code: 'uk', currency: 'GBP', symbol: '£'},
        { name: 'Uruguai', code: 'uy', currency: 'UYU', symbol: '$'},
        { name: 'Venezuela', code: 've', currency: 'VEF', symbol: 'Bs F'},

      ],
      // EUR, COL, BRL, VEN, URU, CHI, PER, PYG, ECU, BOL, PLN

      // currenciesfrom: [

      //   { name: 'EUR', code: 'EUR', symbol: '€'},
      //   { name: 'GBP', code: 'GBP', symbol: '£'} 
      // // ],

      // currencies: [

      //   { name: 'EUR', code: 'EUR', symbol: '€'},
      //   { name: 'GBP', code: 'GBP', symbol: '£'},
      //   { name: 'COL', code: 'COP', symbol: '$'},
      //   { name: 'BRL', code: 'BRL', symbol: 'R$'},
      //   { name: 'VEN', code: 'VEF', symbol: 'Bs.F'},
      //   { name: 'URU', code: 'UYU', symbol: '$'},
      //   { name: 'CHI', code: 'CLP', symbol: '$'},
      //   { name: 'PER', code: 'PEN', symbol: 'S/'},
      //   { name: 'PYG', code: 'PYG', symbol: '₲'},
      //   { name: 'ECU', code: 'USD', symbol: '$'},
      //   { name: 'BOL', code: 'BOB', symbol: 'Bs'},
      //   { name: 'PLN', code: 'PLN', symbol: 'zł.'}
          
      // ],

      allcurrencies: [
        { "symbol": "$", "code": "USD" },
        { "symbol": "CA$", "code": "CAD" },
        { "symbol": "€", "code": "EUR" },
        { "symbol": "AED", "code": "AED" },
        { "symbol": "Af", "code": "AFN" },
        { "symbol": "ALL", "code": "ALL" },
        { "symbol": "AMD", "code": "AMD" },
        { "symbol": "AR$", "code": "ARS" },
        { "symbol": "AU$", "code": "AUD" },
        { "symbol": "man.", "code": "AZN" },
        { "symbol": "KM", "code": "BAM" },
        { "symbol": "Tk", "code": "BDT" },
        { "symbol": "BGN", "code": "BGN" },
        { "symbol": "BD", "code": "BHD" },
        { "symbol": "FBu", "code": "BIF" },
        { "symbol": "BN$", "code": "BND" },
        { "symbol": "Bs", "code": "BOB" },
        { "symbol": "R$", "code": "BRL" },
        { "symbol": "BWP", "code": "BWP" },
        { "symbol": "Br", "code": "BYN" },
        { "symbol": "BZ$", "code": "BZD" },
        { "symbol": "CDF", "code": "CDF" },
        { "symbol": "CHF", "code": "CHF" },
        { "symbol": "CL$", "code": "CLP" },
        { "symbol": "CN¥", "code": "CNY" },
        { "symbol": "CO$", "code": "COP" },
        { "symbol": "₡", "code": "CRC" },
        { "symbol": "CV$", "code": "CVE" },
        { "symbol": "Kč", "code": "CZK" },
        { "symbol": "Fdj", "code": "DJF" },
        { "symbol": "Dkr", "code": "DKK" },
        { "symbol": "RD$", "code": "DOP" },
        { "symbol": "DA", "code": "DZD" },
        { "symbol": "Ekr", "code": "EEK" },
        { "symbol": "EGP", "code": "EGP" },
        { "symbol": "Nfk", "code": "ERN" },
        { "symbol": "Br", "code": "ETB" },
        { "symbol": "£", "code": "GBP" },
        { "symbol": "GEL", "code": "GEL" },
        { "symbol": "GH₵", "code": "GHS" },
        { "symbol": "FG", "code": "GNF" },
        { "symbol": "GTQ", "code": "GTQ" },
        { "symbol": "HK$", "code": "HKD" },
        { "symbol": "HNL", "code": "HNL" },
        { "symbol": "kn", "code": "HRK" },
        { "symbol": "Ft", "code": "HUF" },
        { "symbol": "Rp", "code": "IDR" },
        { "symbol": "₪", "code": "ILS" },
        { "symbol": "Rs", "code": "INR" },
        { "symbol": "IQD", "code": "IQD" },
        { "symbol": "IRR", "code": "IRR" },
        { "symbol": "Ikr", "code": "ISK" },
        { "symbol": "J$", "code": "JMD" },
        { "symbol": "JD", "code": "JOD" },
        { "symbol": "¥", "code": "JPY" },
        { "symbol": "Ksh", "code": "KES" },
        { "symbol": "KHR", "code": "KHR" },
        { "symbol": "CF", "code": "KMF" },
        { "symbol": "₩", "code": "KRW" },
        { "symbol": "KD", "code": "KWD" },
        { "symbol": "KZT", "code": "KZT" },
        { "symbol": "LB£", "code": "LBP" },
        { "symbol": "SLRs", "code": "LKR" },
        { "symbol": "Lt", "code": "LTL" },
        { "symbol": "Ls", "code": "LVL" },
        { "symbol": "LD", "code": "LYD" },
        { "symbol": "MAD", "code": "MAD" },
        { "symbol": "MDL", "code": "MDL" },
        { "symbol": "MGA", "code": "MGA" },
        { "symbol": "MKD", "code": "MKD" },
        { "symbol": "MMK", "code": "MMK" },
        { "symbol": "MOP$", "code": "MOP" },
        { "symbol": "MURs", "code": "MUR" },
        { "symbol": "MX$", "code": "MXN" },
        { "symbol": "RM", "code": "MYR" },
        { "symbol": "MTn", "code": "MZN" },
        { "symbol": "N$", "code": "NAD" },
        { "symbol": "₦", "code": "NGN" },
        { "symbol": "C$", "code": "NIO" },
        { "symbol": "Nkr", "code": "NOK" },
        { "symbol": "NPRs", "code": "NPR" },
        { "symbol": "NZ$", "code": "NZD" },
        { "symbol": "OMR", "code": "OMR" },
        { "symbol": "B/.", "code": "PAB" },
        { "symbol": "S/.", "code": "PEN" },
        { "symbol": "₱", "code": "PHP" },
        { "symbol": "PKRs", "code": "PKR" },
        { "symbol": "zł", "code": "PLN" },
        { "symbol": "₲", "code": "PYG" },
        { "symbol": "QR", "code": "QAR" },
        { "symbol": "RON", "code": "RON" },
        { "symbol": "din.", "code": "RSD" },
        { "symbol": "RUB", "code": "RUB" },
        { "symbol": "RWF", "code": "RWF" },
        { "symbol": "SR", "code": "SAR" },
        { "symbol": "SDG", "code": "SDG" },
        { "symbol": "Skr", "code": "SEK" },
        { "symbol": "S$", "code": "SGD" },
        { "symbol": "Ssh", "code": "SOS" },
        { "symbol": "SY£", "code": "SYP" },
        { "symbol": "฿", "code": "THB" },
        { "symbol": "DT", "code": "TND" },
        { "symbol": "T$", "code": "TOP" },
        { "symbol": "TL", "code": "TRY" },
        { "symbol": "TT$", "code": "TTD" },
        { "symbol": "NT$", "code": "TWD" },
        { "symbol": "TSh", "code": "TZS" },
        { "symbol": "₴", "code": "UAH" },
        { "symbol": "USh", "code": "UGX" },
        { "symbol": "$U", "code": "UYU" },
        { "symbol": "UZS", "code": "UZS" },
        { "symbol": "Bs.F.", "code": "VEF" },
        { "symbol": "₫", "code": "VND" },
        { "symbol": "FCFA", "code": "XAF" },
        { "symbol": "CFA", "code": "XOF" },
        { "symbol": "YR", "code": "YER" },
        { "symbol": "R", "code": "ZAR" },
        { "symbol": "ZK", "code": "ZMK" },
        { "symbol": "ZWL$", "code": "ZWL"  }
      ],

      languages: [
        { name: 'Brazilian Portuguese', flag: 'Brazil', code: 'pt-br' },
        { name: 'Danish', flag: 'Denmark', code: 'da' },
        { name: 'Dutch', flag: 'Netherlands', code: 'nl' },
        { name: 'English', flag: 'United Kingdom', code: 'en' },
        { name: 'French', flag: 'France', code: 'fr' },
        { name: 'German', flag: 'Germany', code: 'de' },
        { name: 'Italian', flag: 'Italy', code: 'it' },
        { name: 'Spanish', flag: 'Spain', code: 'es'},
      ],


      loading: false

    },
    mutations: {
      turnOnTestB(state) {
        state.isTestB = true
      }
    },
    actions: {

    }
  });

}
