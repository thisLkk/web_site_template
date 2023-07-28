<template>
  <div class="bottom">
    <div class="bottom-container">
      <div class="bottom-container-left">
        <div class="bottom-container-text">北京益得工匠职业技能培训学校</div>
        <div class="bottom-container-text">
          <a target="_blank" href="http://beian.miit.gov.cn">主体备案号： 京ICP备2021041243号</a>
        </div>
      </div>
      <div class="bottom-container-right">
        <div class="bottom-container-text"></div>
        <div class="bottom-container-text">&copy;Copyright 2022-至今 yidegongjiang.com All Right Reserved</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.bottom{
  background-color: black;
  &-container{
    width: 80%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    color: white;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: center;
    &-left{
      width: 500px;
    }
    &-right{
      width: 500px;
    }
    &-text{
      height: 32px;
      line-height: 32px;
      font-size: 18px;
    }
  }
}
</style>
