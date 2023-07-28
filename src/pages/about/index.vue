<template>
    <div class="about">
      <hunter-header active="about" />
  
      <!--S 我们是谁-->
      <div class="about-whoami">
        <div class="about-header-tip about-whoami-title">
          <div class="about-header-tip-title">
            <div class="about-header-tip-cn">关于我们</div>
            <div class="about-header-tip-en">&nbsp;/&nbsp;About</div>
          </div>
  
          <div class="about-header-tip-content">益得工匠</div>
        </div>
  
        <div class="about-whoami-content">
            北京市朝阳区益得工匠职业技能培训学校（以下简称益得工匠）坐落在中国北京人力资源产业园(朝阳园区)，是隶属北京市朝阳区人力资源和社会保障局的职业技能培训学校。
        </div>
  
        <div class="about-whoami-content">
            益得工匠未来将围绕高端智能制造与数字化产业领域开展技术人才培养，主要面向落地一批“顶天立地”无人科技重大项目，突破一批无人科技卡脖子技术提供技术人才保障服务。
        </div>
  
        <div class="about-whoami-content">
            目前已经开展互联网营销师证书、企业人力资源管理师证书等考试培训，未来将根据社会发展趋势开创多元化课程及培训服务。
        </div>
      </div>
      <div class="about-contact">
        <div class="about-header-tip about-contact-title">
          <div class="about-header-tip-title">
            <div class="about-header-tip-cn">联系我们</div>
            <div class="about-header-tip-en">&nbsp;/&nbsp;CONTACT US</div>
          </div>
        </div>
  
        <div class="about-contact-list">
          <div class="about-contact-list-item" v-for="(item, index) in contacts" :key="index">
            <div class="about-contact-list-item-title">{{ item.title }}：</div>
            <div class="about-contact-list-item-content">{{ item.content }}</div>
          </div>
        </div>
      </div>
  
      <bottom />
    </div>
  </template>
  
  <script>
    import hunterHeader from '@/components/header.vue';
    import bottom from '@/components/bottom.vue';
  
    export default {
      name: 'About',
      components: {
        hunterHeader,
        bottom
      },
      data() {
        return {
          contacts: [{
            title: '地　　址',
            content: '北京人力资源产业园(朝阳园区)'
          }, {
            title: '电　　话',
            content: '0755-43213213'
          }, {
            title: '邮　　箱',
            content: '123213@163.com'
          }]
        }
      },
      methods: {},
      computed: {}
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang='scss' scoped>
    .about {
      position: relative;
      background-color: #f5f5f5;
  
      &-header {
        overflow: hidden;
        box-sizing: border-box;
        padding: 80px 0;
        background-color: #000;
  
        // 使命
        &-tip {
          text-align: center;
          font-size: 58px;
          font-weight: 700;
          color: #fff;
  
          &-title {
            position: relative;
            display: flex;
            justify-content: center;
            margin: 20px 0;
          }
  
          &-cn {
            color: #E0CFB2;
          }
  
          &-content {
            text-align: center;
            font-size: 36px;
            line-height: 54px;
          }
        }
  
        &-img {
          height: 600px;
          margin: 100px 0;
          background: no-repeat url("https://pic3.zhuanstatic.com/zhuanzh/93f80361-bd9f-4df8-9079-33313a0ea888.png") center top/contain #000;
        }
      }
  
      // whoami
      &-whoami {
        padding: 80px 20px;
        margin: 0 auto;
        max-width: 1600px;
  
        &-title {
          color: #333;
          margin-bottom: 50px;
        }
  
        &-content {
          text-indent: 2em;
          font-size: 24px;
          line-height: 2em;
          font-weight: 300;
          color: #666;
        }
  
        &-content + &-content {
          margin-top: 1em;
        }
      }
  
      // 价值观
      &-value {
        padding: 150px 0 80px 0;
        margin: 0 auto;
        max-width: 1600px;
  
        &-title {
          color: #333;
          margin-bottom: 50px;
        }
  
        &-list {
          padding: 0 20px;
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
  
          &-item {
            &-title {
              margin-top: 50px;
              font-size: 42px;
            }
  
            &-content {
              font-size: 28px;
              margin-top: 12px;
              font-weight: normal;
              line-height: 2em;
            }
          }
        }
      }
  
      // 联系我们
      &-contact {
        padding: 80px 0;
        margin: 0 auto;
        // background-color:white;
  
        &-title {
          color: #333;
          margin-bottom: 50px;
        }
  
        &-list {
          display: inline-block;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
  
          &-item {
            display: flex;
            align-items: center;
            font-size: 32px;
            line-height: 2em;
            color: #333;
  
            &-title {
              font-weight: 700;
              font-size: 24px;
            }
  
            &-content {
              font-weight: normal;
              font-size: 24px;
            }
          }
        }
      }
    }
  </style>
  