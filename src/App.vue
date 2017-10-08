<template>
  <div id="app">
    <button @click="basicModalShow">basicModalShow</button>
    <basic-modal></basic-modal>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import BasicModal from './components/BasicModal.vue'
  export default {
    name: 'App',
    components: {
      BasicModal
    },
    methods: {
      ...mapMutations('basicModal', {
        basicModalShow: 'show'
      })
    }
  }
</script>

<style lang="scss">
  @import "./assets/style";
</style>
