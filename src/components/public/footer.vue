<template>
  <div class="footer" v-model="selected">
    <router-link to="" class="footer_item" id="footer_item1" @click.native="setIndex(1)">
      <img v-if="selected !=1 " src="../../assets/img/competition.png" alt="">
      <img v-if="selected ===1 " src="../../assets/img/competition--active.png" alt="">
      <p v-if="selected !=1 " class="icon">赛事</p>
      <p v-if="selected ===1 " class="icon_active">赛事</p>
    </router-link>
    <router-link to="" class="footer_item" id="footer_item2" @click.native="setIndex(2)">
      <img v-if="selected !=2 " src="../../assets/img/community.png" alt="">
      <img v-if="selected ===2 " src="../../assets/img/community--active.png" alt="">
      <p v-if="selected !=2 " class="icon">社区</p>
      <p v-if="selected ===2 " class="icon_active">社区</p>
    </router-link>
    <router-link to="" class="footer_item" id="footer_item3" @click.native="setIndex(3)">
      <img v-if="selected !=3 " src="../../assets/img/agenda.png" alt="">
      <img v-if="selected ===3 " src="../../assets/img/agenda--active.png" alt="">
      <p v-if="selected !=3 " class="icon">赛程</p>
      <p v-if="selected ===3 " class="icon_active">赛程</p>
    </router-link>
    <router-link to="" class="footer_item" id="footer_item4" @click.native="setIndex(4)">
      <img v-if="selected !=4 " src="../../assets/img/mine.png" alt="">
      <img v-if="selected ===4 " src="../../assets/img/mine--active.png" alt="">
      <p v-if="selected !=4 " class="icon">我的</p>
      <p v-if="selected ===4 " class="icon_active">我的</p>
    </router-link>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        selected: 1
      }
    },
    methods: {
      setIndex(n){
        this.selected = n
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  a:-webkit-any-link
    text-decoration none
  .footer
    position fixed
    bottom 0
    height 3.26rem
    width 100%
    background-color #fff
    opacity .95
    display flex
    &:before
      content ''
      height 1px
      width 100%
      position fixed
      background-color #d2d2d2
      transform scaleY(.35)
      -webkit-transform scaleY(.35)

  .footer_item
    text-align center
    flex 1
    img
      margin 0 auto
      width 1.46rem
      height 1.46rem
      display block
      margin-bottom .16rem
      margin-top .48rem
    .icon
      margin 0 auto
      font-size 12px
      color #d2d2d2
    .icon_active
      color #3466f6
      font-size 13px
  &.router-link-active
    p
      color #3466f6

</style>
