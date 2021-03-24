<template>
  <span>
    <Mission v-if="icon == 'Mission'" />
    <Values v-if="icon == 'Values'" />
    <Vision v-if="icon == 'Vision'" />
    <Global v-if="icon == 'Global'" />
  </span>
</template>

<script>
import Mission from '@/assets/images/icons/mission.svg'
import Values from '@/assets/images/icons/values.svg'
import Vision from '@/assets/images/icons/vision.svg'
import Global from '@/assets/images/icons/global.svg'

export default {
  props: ['icon'],
  components: { Mission, Values, Vision, Global },
}
</script>

<style>
</style>