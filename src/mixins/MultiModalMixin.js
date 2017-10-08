import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('multiModal', ['hideModal'])
  }
}
