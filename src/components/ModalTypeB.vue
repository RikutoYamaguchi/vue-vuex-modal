<template>
  <div class="modal">
    <div class="modal__bg"></div>
    <div class="modal__content">
      <p>ModalTypeB</p>
      <button @click="hideModal">closeModal</button>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import MultiModalMixin from '../mixins/MultiModalMixin'
  export default {
    name: 'ModalTypeB',
    mixins: [MultiModalMixin]
  }
</script>
