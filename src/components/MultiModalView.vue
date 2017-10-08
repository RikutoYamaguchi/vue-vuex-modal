<template>
  <transition name="fade">
    <component v-if="isShow" :is="modalName"></component>
  </transition>
</template>

<script>
  import { mapState } from 'vuex'
  import ModalTypeA from './ModalTypeA.vue'
  import ModalTypeB from './ModalTypeB.vue'
  export default {
    name: 'MultiModalView',
    components: {
      ModalTypeA,
      ModalTypeB,
    },
    computed: {
      ...mapState('multiModal', ['modalName']),
      isShow () {
        return this.modalName !== ''
      }
    }
  }
</script>
