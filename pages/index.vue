<template>
  <div class="container">
    <Firstview/>
    <Theindex />
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import Firstview from '~/components/Firstview.vue'
import Theindex from '~/components/Theindex.vue'
export default {
  computed: {
    ...mapGetters({
      index:'index'
    })
  },
  components: {
    Firstview,
    Theindex
  },
  data: function () {
    return {
    }
  },
}
</script>
<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
