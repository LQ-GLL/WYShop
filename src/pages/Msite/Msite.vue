<template>
  <div class="header">
    <div class="search">
      <a class="logo">网易严选</a>
      <input type="text" class="searchRight" placeholder="搜索商品，共19784款好物">
    </div>
    <ul class="headerList">
      <li>推荐</li>
      <li>居家</li>
      <li>鞋包配饰</li>
      <li>服装</li>
      <li>电器</li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    height 80px
    width 100%
    background coral
    .search
      position relative
      width 100%
      /*background blue*/
      .logo
        position absolute
        top 8px
        left 10px
        font:20px '楷体'
        color #666
      .searchRight
        position absolute
        top 7px
        right 12px
        width 260px
        height 24px
        border-radius 3px
        &::-webkit-input-placeholder
          color: black;
          padding-left: 60px;
          font-size: 14px;




</style>
