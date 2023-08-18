<template>
  <div class="business">
    <div class="business-title">
      <div class="business-title-main">涵盖领域</div>
      <div class="business-title-sub">拥有广泛的业务范围,涵盖了多个行业和领域</div>
    </div>
    <div class="business-list">
      <div class="business-list-item" v-for="(item, index) in listImgs" :key="index">
        <div class="business-list-item-image" :style="{backgroundImage: 'url(' + item.img + ')'}">
          <div class="business-list-item-image-title">{{item.title}}</div>
          <div class="business-list-item-image-text">{{item.text}}</div>
        </div>
        <div class="business-list-item-text">
          <div class="business-list-item-text-name">{{item.name}}</div>
          <div class="business-list-item-text-desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listImgs: [{
        img: 'https://pic.rmb.bdstatic.com/047770bd42cdab51f6e7d9b3040f7baf.png',
        title: '动力系统',
        text: '深度讲解，灵活探索',
        name: '动力系统',
        desc: '发动机、传输系统'
      }, {
        img: 'https://img0.baidu.com/it/u=2661097582,748714334&fm=253&fmt=auto&app=138&f=JPEG?w=853&h=500',
        title: '态势感知',
        text: '基础概述，案例分析',
        name: '态势感知',
        desc: '感知、理解、预测'
      }, {
        img: 'https://user-assets.sxlcdn.com/images/757282/FjN-whrEq16wx000-fWXoFLgQlm-.jpg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/quality/90%21/interlace/1/format/jpeg',
        title: '新能源及新材料',
        text: '现状问题，发展前景',
        name: '新能源',
        desc: '趋势、发展、前景'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.business{
  margin: 0 auto;
  padding: 20px 0;
  background-color: white;

  &-title{
    margin: 60px 0 30px;
    text-align: center;
    &-main{
      font-weight: bold;
      font-size: 40px;
      color: #504A4D;
    }
    &-sub{
      font-size: 16px;
      color: #3D3D3D;
    }
  }

  /* 509 * 464*/
  &-list{
    display: flex;
    justify-content: center;
    margin: 0 0 60px;
    &-item{
      width: 355px;
      border-radius: 8px;
      margin: 0 4%;
      background-color: white;
      box-shadow: 0 10px 20px #ddd;
      border: 1px solid #ededed;
      &-image{
        background-size: cover;
        width: 355px;
        height: 282px;
        padding: 20px;
        box-sizing: border-box;
        &-title{
          color: white;
          font-size: 28px;
          font-weight: bold;
        }
        &-text{
          color: white;
          font-size: 18px;
        }
      }
      &-text{
        font-size: 26px;
        line-height: 32px;
        color: #504A4D;
        padding: 16px 24px;
        text-align: center;
        &-name{
          font-weight: bold;
        }
        &-desc{
          font-size: 14px;
        }
      }
    }
  }
  
}
</style>