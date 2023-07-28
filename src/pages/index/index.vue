<template>
  <div class="home">
    <web-header active="home" />

    <div class="home-content">
      <list />

      <business />
    </div>

    <bottom/>
  </div>
</template>

<script>
  import WebHeader from '@/components/header.vue'
  import Bottom from '@/components/bottom.vue'
  import List from './widgets/list.vue'
  import Business from './widgets/business.vue'

  export default {
    name: 'Index',
    components: { WebHeader, Bottom, List, Business },
    data() {
      return {}
    },
    computed: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .home {
    overflow: hidden;
    background-color: #f5f5f5;
  }
</style>
