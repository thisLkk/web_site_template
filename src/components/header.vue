<template>
  <div class="header">
    <div class="header-top">
      <div class="header-brand" @click="toHome">
        <div class="header-brand-title">益得工匠</div>
      </div>

      <div class="header-link">
        <ul class="list">
          <li class="list-item" v-for="(item, index) in links" :key="'key_' + index"
              :class="{'list-item-active': item.name == active}" @click="skipToUrl(item)">{{ item.text }}
          </li>
        </ul>
      </div>
    </div>

  <div class="header-content">
    <div class="header-content-text">
      <div class="header-content-text-title">
        <span class="header-content-text-title-h1">北京市朝阳区益得工匠职业技能培训学校</span>
      </div>

      <div class="header-content-text-desc">
        益得工匠未来将围绕高端智能制造与数字化产业领域开展技术人才培养，主要面向落地一批“顶天立地”无人科技重大项目，突破一批无人科技卡脖子技术提供技术人才保障服务。
      </div>
    </div>
  </div>

    <!-- S 弹窗 -->
    <div class="header-popup" v-if="showPopup">
      <div class="header-popup-main">
        <div class="header-popup-content">
          <div class="header-popup-qrcode" :style="{backgroundImage: `url(${popupImgUrl})`}"/>
          <div class="header-popup-tip">{{ popupDesc }}</div>
        </div>

        <div class="header-popup-close" @click="switchShowPopup(false)"/>
      </div>
    </div>
    <!-- E 弹窗 -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    active: {
      type: String,
      default: 'home',
      required: true
    }
  },
  data() {
    return {
      popupImgUrl: '',
      popupDesc: '',
      showPopup: false,
      links: [{
        name: 'home',
        text: '首页',
        type: 'link',
        url: '/'
      }, {
        name: 'news',
        text: '资讯中心',
        type: 'link',
        url: '/news'
      },{
        name: 'rules',
        text: '发展历程',
        type: 'link',
        url: '/course'
      }, {
        name: 'about',
        text: '关于我们',
        type: 'link',
        url: '/about'
      }]
    }
  },
  methods: {
    skipToUrl(item) {
      switch (item.type) {
        case 'link':
          return this.$router.push({ path: `${item.url}` });

        case 'popup':
          this.popupImgUrl = item.imgUrl;
          this.popupDesc = item.desc;
          this.switchShowPopup(true)
          break;

        default:
          break;
      }
    },
    toHome() {
      return this.$router.push({ path: `/` });
    },
    switchShowPopup(is) {
      this.showPopup = !!is;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.header {
  position: relative;
  top: 0;
  margin: 0 auto;
  max-width: 3000px;
  height: 680px;
  background-image: url('https://img2.baidu.com/it/u=2454968193,1085261599&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &-top {
    position: relative;
    top: 0;
  }

  &-brand {
    position: relative;
    left: 60px;
    width: 260px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    background-color: #fbfbfb;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    cursor: pointer;
    z-index: 8;

    &-title {
      font-size: 36px;
      font-weight: bold;
      color: #3D3D3D;
    }
  }

  &-link {
    position: absolute;
    top: 8px;
    left: 400px;
    right: 0;
    text-align: center;
    padding-right: 100px;
    .list {
      display: flex;
      justify-content: flex-end;

      &-item {
        color: white;
        font-size: 18px;
        line-height: 36px;
        font-weight: bold;
        width: 160px;
        height: 36px;
        padding: 6px 12px;
        margin: 0 10px;
        text-align: center;
        cursor: pointer;
      }

      &-item:hover {
        border-bottom: 2px solid white;
      }

      &-item:last-child {
        border-right: 0;
      }

      &-item-active {
        border-bottom: 2px solid #e0cfb2;
        font-size: 20px;
        color: #e0cfb2;
      }

      &-item-active:hover {
        border-bottom: 2px solid #e0cfb2;;
      }
    }
  }
&-content {
  display: flex;
  padding: 100px;

  &-text {
    margin-top: 200px;
    margin-left: 10%;
    color: white;

    &-title {
      font-size: 60px;
      font-weight: bold;

      &-h2 {
        font-size: 32px;
      }
    }

    &-desc {
      margin-top: 30px;
      line-height: 44px;
      font-size: 18px;
      width: 800px;
    }
  }
}
  

  &-popup {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9;

    &-main {
      position: fixed;
      top: 20%;
      left: 50%;
      width: 600px;
      height: 450px;
      border-radius: 50px;
      background-color: #fff;
      transform: translateX(-50%);
    }

    // 二维码
    &-qrcode {
      margin: 100px auto 0;
      width: 200px;
      height: 200px;
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      background: no-repeat center top/cover transparent;
    }

    // 描述
    &-tip {
      margin-top: 20px;
      text-align: center;
    }

    // 关闭
    &-close {
      margin-top: 150px;
      margin-left: 50%;
      width: 80px;
      height: 80px;
      background: no-repeat url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALHRSTlMAztTFwlIGuxDjmYyFHuCzrRS2qGVNPjUbGQzx7OXHcSwnIvj025SSgXhXR92ZLzYAAAGhSURBVEjHnVbZkoJADMw4AyPKqYIipwee+f/v23IXSpcJiuknXromdDpJAwE7rmYLJYRazKrYhjHYu9r3hQ7CMNDC97W7/0i5ybw8JRG0iJJTmcvbW4o1cc476GF3dibWIGUjjxeb/MnLUW4GnkGVwgBSheRjc1zBG6xwDgaWuIa3WOPS5HjwAV6fNccUPiL9X6GFNYxA/apGRGlAqxFBB6lgJJTsvmLcjiVtMW6/ChdGwy1aFQ7wBQ5/WojZN6SZ+LVp5n1D8rLNo0rR97QVvbqn73vhAthybri9mUKHEKu+saUNdyfpF9DgpGMFaPg4ce5wdYwmTScdS2NWG61yrq0aJMtWmPeGv1V7oYFmAZRYUJtIL0AFQLOURp9sRqBAhEBCIkp6UYZiiGQ/SDBEosvzfNSq1dAsjxZiX2AJ0CpvCkFKvstR2a3ylORUc+sM9bNfRHMJG60Rg6fyjWfaiDBsheGzXw1apmGp0Xi1aGSZo8EaQs64sxYLZ4WxliVnLbMOAOfUcI4a53xyDjUnEnDCByfm8AIVP7rxQyIrjv4A7r0jpfjdmvMAAAAASUVORK5CYII=") center top/cover transparent;
      transform: translateX(-50%);
      cursor: pointer;
    }
  }
}
</style>
