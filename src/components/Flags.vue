<template>
  <span>
    <!-- <Argentina v-if="country==='ar'" /> -->
    <!-- <Bolivia v-if="country==='bo'" /> -->
    <!-- <Brazil v-if="country==='br' || country==='pt-br'" /> -->
    <!-- <Chile v-if="country==='cl'" /> -->
    <!-- <Colombia v-if="country==='co'" /> -->
    <!-- <DominicanRepublicDOP v-if="country==='do'" /> -->
    <!-- <Ecuador v-if="country==='ec'" /> -->
    <!-- <Guatemala v-if="country==='gt'" /> -->
    <!-- <Honduras v-if="country==='hn'" /> -->
    <Italy v-if="country === 'it'" />
    <!-- <Nicaragua v-if="country==='ni'" /> -->
    <!-- <Paraguay v-if="country==='py'" /> -->
    <!-- <Peru v-if="country==='pe'" /> -->
    <!-- <Portugal v-if="country==='pt'" /> -->
    <Spain v-if="country === 'es'" />
    <UnitedKingdom v-if="country === 'uk' || country == 'en'" />
    <!-- <Uruguai v-if="country==='uy'" /> -->
    <!-- <Venezuela v-if="country==='ve'" /> -->
    <!-- <France v-if="country=='fr'" /> -->
    <!-- <Germany v-if="country=='de' || country=='de'" /> -->
    <!-- <Denmark v-if="country=='dk' || country=='da'" /> -->
    <!-- <Netherlands v-if="country=='nl'" /> -->
  </span>
</template>

<script>
import Argentina from '@/assets/images/flags/Argentina.svg'
import Bolivia from '@/assets/images/flags/Bolivia.svg'
import Brazil from '@/assets/images/flags/Brazil.svg'
import Chile from '@/assets/images/flags/Chile.svg'
import Colombia from '@/assets/images/flags/Colombia.svg'
import DominicanRepublicDOP from '@/assets/images/flags/DominicanRepublicDOP.svg'
import Ecuador from '@/assets/images/flags/Ecuador.svg'
import Guatemala from '@/assets/images/flags/Guatemala.svg'
import Honduras from '@/assets/images/flags/Honduras.svg'
import Italy from '@/assets/images/flags/Italy.svg'
import Nicaragua from '@/assets/images/flags/Nicaragua.svg'
import Paraguay from '@/assets/images/flags/Paraguay.svg'
import Peru from '@/assets/images/flags/Peru.svg'
import Portugal from '@/assets/images/flags/Portugal.svg'
import Spain from '@/assets/images/flags/Spain.svg'
import UnitedKingdom from '@/assets/images/flags/UnitedKingdom.svg'
import Uruguai from '@/assets/images/flags/Uruguai.svg'
import Venezuela from '@/assets/images/flags/Venezuela.svg'
import Germany from '@/assets/images/flags/Germany.svg'
import Denmark from '@/assets/images/flags/Denmark.svg'
import Netherlands from '@/assets/images/flags/Netherlands.svg'
import France from '@/assets/images/flags/France.svg'

export default {
  props: ['country'],
  components: {
    Argentina,
    Bolivia,
    Brazil,
    Chile,
    Colombia,
    DominicanRepublicDOP,
    Ecuador,
    Guatemala,
    Honduras,
    Italy,
    Nicaragua,
    Paraguay,
    Peru,
    Portugal,
    Spain,
    UnitedKingdom,
    Uruguai,
    Venezuela,
    France,
    Germany,
    Denmark,
    Netherlands,
  },
}
</script>

<style>
</style>


