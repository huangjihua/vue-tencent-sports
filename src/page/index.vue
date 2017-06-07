<template>
  <div>
    <v-header :pageIndex="pageIndex" :routes="routes" ></v-header>
  </div>
</template>

<script>

  import vHeader from '../components/public/head.vue'

  export default{
    data(){
      return {
        pageIndex: 1,
        routes: []
      }
    },
    components: {
      vHeader
    },
    methods: {},
    mounted(){
      this.routes = this.$store.getters.getRoutes
    }
  }
</script>

<style>

</style>
