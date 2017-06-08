<template>
  <div>
    <v-header :pageIndex="pageIndex" :routes="routes"></v-header>
    <v-footer></v-footer>
  </div>
</template>

<script>

  import vHeader from '../components/public/head.vue'
  import vFooter from '../components/public/footer.vue'

  export default{
    data(){
      return {
        pageIndex: 1,
        routes: []
      }
    },
    components: {
      vHeader, vFooter
    },
    methods: {},
    mounted(){
      this.routes = this.$store.getters.getRoutes
    }
  }
</script>

<style>

</style>
