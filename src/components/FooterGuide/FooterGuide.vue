<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-home-g"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" :class="{on: $route.path==='/category'}" @click="goto('/category')">
      <span class="item_icon">
        <i class="iconfont icon-changyongfenlei"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" :class="{on: $route.path==='/search'}" @click="goto('/search')">
      <span class="item_icon">
        <i class="iconfont icon-tupian"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide_item" :class="{on: $route.path==='/basket'}" @click="goto('/basket')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche1"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods:{
      goto (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#d9d9d9)
    position fixed
    left 0
    bottom 0
    width 100%
    background-color: #fff
    height 50px
    display flex
    z-index 5
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #7f7f7f
      &.on
        color #b4282d
      span
        font-size 10px
        margin-bottom 2px
        margin-top 2px
        .iconfont
          font-size 20px
</style>
