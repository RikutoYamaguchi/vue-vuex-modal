<template>
  <transition name="fade">
    <div class="modal" v-if="isShow">
      <div class="modal__bg"></div>
      <div class="modal__content">
        <button @click="hide">closeModal</button>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'BasicModal',
    computed: {
      ...mapState('basicModal', ['isShow'])
    },
    methods: {
      ...mapMutations('basicModal', ['hide'])
    }
  }
</script>
