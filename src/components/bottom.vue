<template>
  <div class="bottom">
    <div class="bottom-container">
      <div class="bottom-container-left">
        <div class="bottom-container-text">
          <a target="_blank" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502053244">
            <img class="bottom-container-text_img" src="../assets/icon.png"/>
            <span style="color:#939393;">
              京公网安备 11010502053244号
            </span>
          </a >
        </div>
        <div class="bottom-container-text">北京市朝阳区益得工匠职业技能培训学校</div>
      </div>
      <div class="bottom-container-right">
        <div class="bottom-container-text">
          <a target="_blank" href="https://beian.miit.gov.cn/">
            <span style="color:#939393;">
              京ICP备2023020268号
            </span>
          </a >
        </div>
        <div class="bottom-container-text">&copy;Copyright 2022-至今 www.cyydgj.com All Right Reserved</div>
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
      &_img {
        position: relative;
        top: 3px;
      }
    }
  }
}
</style>
