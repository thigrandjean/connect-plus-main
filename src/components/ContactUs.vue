<template>
  <section class="contact" :class="{ notext: hide }">
    <div class="contact-content" v-if="!hide">
      <h2>{{ title }}</h2>
      <p v-html="subtitle"></p>
    </div>

    <form @submit.prevent="formAction" :class="{ contactpage: contactpage }">
      <div class="form-field">
        <label for="name">{{ $t('contactus.fields.name') }}</label>
        <input v-model="name" type="text" name="name" id="name" />
        <div class="form-alert">{{ nameAlert }}</div>

        <label for="email">{{ $t('contactus.fields.email') }}</label>
        <input v-model="email" type="text" name="email" id="email" />
        <div class="form-alert">{{ emailAlert }}</div>
      </div>

      <div class="form-field form-field-2">
        <label for="subject">{{ $t('contactus.fields.subject') }}</label>
        <input v-model="subject" type="text" name="subject" id="subject" />
        <div class="form-alert">{{ subjectAlert }}</div>

        <label for="message">{{ $t('contactus.fields.message') }}</label>
        <textarea id="message" v-model="message" rows="3" />
        <div class="form-alert">{{ messageAlert }}</div>
        <vue-recaptcha
          class="captcha"
          :sitekey="recaptchaSitekey"
          @verify="onVerify"
        />

        <button
          :id="`cta-contact-form-${place}`"
          v-if="!$store.state.loading"
          class="cta cta-main"
        >
          {{ $t('contactus.fields.cta') }}
        </button>
        <div v-if="$store.state.loading" class="loader"></div>

        <div class="server-alert">{{ serverAlert }}</div>
      </div>
    </form>

    <Success @close="closeModal" v-if="msgSent" />
  </section>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'

import Success from '@/components/Success.vue'
import { mapState } from 'vuex'

export default {
  props: ['title', 'subtitle', 'hide', 'contactpage', 'place'],

  components: { Success, VueRecaptcha },

  data() {
    return {
      msgSent: false,
      name: '',
      email: '',
      subject: '',
      message: '',
      nameAlert: '',
      emailAlert: '',
      subjectAlert: '',
      messageAlert: '',
      serverAlert: '',
      formContent: '',
      isNotRobot: false,
      recaptchaSitekey: '6LdBQJAaAAAAAGJYToSkTg_WOezXl-x72x7yaISq',
    }
  },
  methods: {
    closeModal() {
      this.msgSent = false
    },
    formAction() {
      this.nameAlert = ''
      this.emailAlert = ''
      this.subjectAlert = ''
      this.messageAlert = ''
      this.serverAlert = ''

      if (!this.sendForm()) return
      this.msgSent = true
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    },
    onVerify(response) {
      console.log(`Verificação: ${response}`)
      //after verify recaptcha action you have to perform
      this.isNotRobot = true
    },
    validateForm() {
      let validated = true
      if (!this.isNotRobot) {
        this.serverAlert = 'Please, check the captcha'
        validated = false
      }
      if (!this.name) {
        console.log('name')
        this.nameAlert = 'Required Field'
        validated = false
      }
      if (!this.email) {
        console.log('email')
        this.emailAlert = 'Required Field'
        validated = false
      }
      if (this.email.indexOf('@') <= 0) {
        this.emailAlert = 'Invalid E-mail'
        validated = false
      }
      if (
        this.email.charAt(this.email.length - 4) != '.' &&
        this.email.charAt(this.email.length - 3) != '.'
      ) {
        this.emailAlert = 'Invalid E-mail'
        validated = false
      }
      if (!this.subject) {
        console.log('subject')
        this.subjectAlert = 'Required Field'
        validated = false
      }
      if (!this.message) {
        console.log('message')
        this.messageAlert = 'Required Field'
        validated = false
      }

      this.formContent = `name=${this.name}&email=${this.email}&subject=${this.subject}&message=${this.message}`

      return validated
    },
    sendForm() {
      if (!this.validateForm()) return false

      let vm = this
      let xhr = new XMLHttpRequest()
      xhr.open('POST', '../../mail.php')
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.onload = function () {
        if (xhr.status !== 200) {
          setTimeout(() => {
            vm.toggleLoading()
          }, 1000)

          return (vm.serverAlert =
            'Something went wrong. Please, try again later.')
        }

        console.log(xhr.responseText)

        var response = JSON.parse(xhr.responseText)

        console.log(response)

        if (response.codigo == '500') {
          setTimeout(() => {
            vm.toggleLoading()
          }, 1000)
          return (vm.serverAlert = response.mensagem)
        }

        vm.serverAlert = ''

        return vm.sentActions()
      }

      // console.log(this.formContent);
      xhr.send(encodeURI(this.formContent))
      vm.toggleLoading()
      return false
    },
    sentActions() {
      this.msgSent = true
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
      this.$store.state.loading = false
    },
    toggleLoading() {
      this.$store.state.loading = !this.$store.state.loading
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/style/vars.scss';

.contact {
  padding: 2rem 2rem 0 2rem;
  color: $main-grey;

  h2 {
    text-align: center;
    color: $headings;
  }
  p {
    text-align: center;
    font-size: 1rem;
    a {
      display: inline;
    }
  }

  form {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .form-field {
      // margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      position: relative;
    }
    label {
      width: 100%;
      font-weight: 300;
    }
    input {
      height: 2.857rem;
    }
    input,
    textarea {
      padding: 1rem 1rem;
      width: 100%;
      margin-bottom: 0.25rem;
    }
    .form-alert,
    .server-alert {
      margin: 0 0 0.75rem 0;
      text-align: left;
      color: red;
      font-size: 0.8rem;
      width: 100%;
      height: 1rem;
    }
    .server-alert {
      text-align: center;
      margin-top: 0.5rem;
    }
    &.contactpage {
      margin-top: 0;
    }
  }
}
.captcha {
  margin: 0 0 2rem 0;
}
.loader {
  font-size: 10px;
  margin: 0 auto;
  text-indent: -9999em;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: $main-gold;
  background: linear-gradient(
    to right,
    $main-gold 10%,
    rgba(181, 181, 181, 0) 42%
  );
  position: relative;
  animation: load3 0.75s infinite linear;
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: $main-gold;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader:after {
  background: #ffffff;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: $bp-mobile) {
  .contact {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    max-width: $max-w;
    margin: 0 auto 0 auto;
    &.notext {
      grid-template-columns: 1fr;
      max-width: $max-w * 0.6;
    }
    .contact-content {
      h2 {
        text-align: left;
        font-size: 3.428rem;
      }
      p {
        text-align: left;
        font-size: 1.714rem;
        a {
          display: block;
        }
      }
    }
    form {
      display: grid;
      grid-template-columns: 1fr minmax(0, 1fr);
      grid-template-rows: auto;
      gap: 3rem;
      label {
        font-size: 1.428rem;
        margin-bottom: 0.5rem;
      }
      input {
        height: 4.285rem;
      }
      input,
      textarea {
        margin-bottom: 0.25rem;
      }
      .form-alert {
        margin-bottom: 2.25rem;
      }
      .server-alert {
        text-align: right;
      }
      .form-field {
        height: 100%;
      }
      .form-field-2 {
        align-items: flex-end;
      }
      &.contactpage {
        input {
          height: 3.285rem;
          // margin-bottom: 1.5rem;
        }
      }
    }
  }
}
</style>