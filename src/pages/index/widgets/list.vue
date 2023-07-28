<template>
  <div class="list">
    <div class="list-title">
      <div class="list-title-main">多态领域</div>
      <div class="list-title-sub">用行动实现突破</div>
    </div>
    <div class="list-item" v-for="(item, index) in listImgs" :key="index">
      <div class="list-item-image" :style="{backgroundImage: 'url(' + item.img + ')'}" v-if="index%2 == 0"></div>
      <div class="list-item-text">
        <div class="list-item-text-title">
          <span class="text">{{item.title}}</span>
        </div>
        <div class="list-item-text-desc">{{item.text}}</div>
      </div>
      <div class="list-item-image" :style="{backgroundImage: 'url(' + item.img + ')'}" v-if="index%2 == 1"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listImgs: [{
        img: 'https://p1.itc.cn/q_70/images03/20201224/b98bedc666e04c779627ce4c6d72aacf.jpeg',
        title: '无人科技',
        text: '围绕无人科技的高端人才引进与梯队培养服务以及面向基础性、共用性需求的公共研发与人才培养服务。'
      }, {
        img: 'https://5b0988e595225.cdn.sohucs.com/images/20180103/d2399ed960ea4d7e891510c501f009f6.jpeg',
        title: '智能控制',
        text: '智能控制技术在国内外已有了较大的发展，已进入工程化、实用化的阶段。作为一门新兴的理论技术，它还处在一个发展时期。随着人工智能技术、计算机技术的迅速发展，智能控制必将迎来它的发展新时期。'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.list{
  width: 1400px;
  margin: 0 auto;

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

  &-item{
    display: flex;
    justify-content: center;
    margin: 80px auto;
    &-image{
      width: 650px;
      height: 420px;
      background-size: cover;
      border-radius: 10px;
      overflow: hidden;
    }
    &-text{
      font-size: 20px;
      color: #333;
      width: 650px;
      margin: 0 20px;
      padding: 20px 0;
      &-title{
        margin: 40px;
        padding-top: 50px;
        .text{
          font-weight: bold;
          font-size: 28px;
          color: #504A4D;
          border-bottom: 5px solid #4662d9;
        }
      }
      &-desc{
        font-size: 22px;
        color: #3D3D3D;
        margin: 30px 40px;
      }
    }
  }
}
</style>