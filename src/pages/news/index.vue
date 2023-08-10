<template>
  <div class="rules">
    <hunter-header active="news" />

    <div class="rules-main">
      <div class="rules-content">
        <div class="rules-content-title">资讯中心</div>

        <ul class="rules-content-list">
          <li v-for="(item, index) in list" :key="index" class="rules-content-list-item">
            <div class="rules-content-list-item-title">{{ item.text }}</div>
          </li>
        </ul>
      </div>
    </div>
    <bottom />
  </div>
</template>

<script>
  import hunterHeader from '@/components/header.vue';
  import bottom from '@/components/bottom.vue';

  export default {
    name: 'News',
    components: {
      hunterHeader,
      bottom
    },
    data() {
      return {
        list: [
          {
            text: '新闻内容'
          }
        ]
      }
    },
    created() {
    },
    methods: {
      openUrl(url) {
        window.open(url, '_blank ')
      }
    },
    computed: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .rules {
    background-color: #f5f5f5;

    &-main {
      margin-left: 20%;
      padding: 50px 0;
      display: flex;
      justify-content: center;
    }

    &-content {
      flex-grow: 1;
      margin: 0 auto;
      max-width: 1600px;
      padding: 20px;
      // 标题
      &-title {
        font-weight: bold;
        font-size: 32px;
        font-weight: 700;
        color: #454545;
      }

      // 列表
      &-list {
        margin-top: 80px;
        margin-left: 80px;

        // 项
        &-item {
          display: flex;
          border-bottom: 1px solid #ccc;
          padding-bottom: 50px;

          &:last-child {
            border-bottom: none;
          }

          // 标题
          &-title {
            flex-shrink: 0;
            width: 200px;
            font-size: 20px;
            color: #000;
          }
        }
      }
    }
  }
</style>
