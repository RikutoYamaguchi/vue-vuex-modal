<template>
  <div id="app">
    <button @click="basicModalShow">basicModalShow</button>
    <button @click="showModalTypeA">showModalTypeA</button>
    <button @click="showModalTypeB">showModalTypeB</button>
    <basic-modal></basic-modal>
    <multi-modal-view></multi-modal-view>
  </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex'
  import BasicModal from './components/BasicModal.vue'
  import MultiModalView from './components/MultiModalView.vue'
  export default {
    name: 'App',
    components: {
      BasicModal,
      MultiModalView
    },
    methods: {
      ...mapMutations('basicModal', {
        basicModalShow: 'show'
      }),
      ...mapActions('multiModal', ['showModalTypeA', 'showModalTypeB'])
    }
  }
</script>

<style lang="scss">
  @import "./assets/style";
</style>
