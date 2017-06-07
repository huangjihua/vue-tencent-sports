<template lang="html">
  <div class="head">
    <div class="head_tunnels">
      <router-link v-for="route in routes[pageIndex-1]" :to="route.url" class="head_tunnel">
        {{route.name}}
      </router-link>
    </div>
    <div v-if="pageIndex === 1" class="head_add">+</div>
  </div>
</template>

<script>
  export default{
    props: ['pageIndex', 'routes'],
    data(){
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .head
    position fixed
    top 0
    z-index 99
    height 3.66rem
    line-height 3.66rem
    background-color #3466f6
    display flex
    width 100%
    .head_add
      text-align center
      flex 2
      color #fff
      font-size 2.66rem
      font-weight 300
    .head_tunnels
      flex 9
      overflow-x scroll
      overflow-y hidden
      text-align center
      white-space nowrap
      .head_tunnel
        display inline
        padding 0 1rem 0 1rem
        font-size 1.66rem
        color #aabefa
        .router-link-active
          color #fff

</style>
