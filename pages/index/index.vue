<template>
  <view class="index">
    <!--首页-->
    <view class="container">
      <u-notice-bar :text="noticeText" mode="closable" :url="noticeUrl"></u-notice-bar>
      <u-swiper
          :list="list2"
          keyName="image"
          showTitle
          circular
      ></u-swiper>
      <u-divider text="分割线" :dot="true"></u-divider>
      <view class="red-list list">
        <u-row>
          <u-tag text="企业红榜TOP" plain type="error" size="large"></u-tag>
        </u-row>
        <view class="list-content">
          <u-row customStyle="padding: 10px 0;" justify="space-between" v-for="(item, index) in redList" :key="index"
                 @click="toDetail(1, item.id)">
            <u-col>
              <u-row>
                <u-col span="10">
                  <u--text :text="item.companyName" bold size="14" lines="1"></u--text>
                </u-col>
                <u-col span="2">
                  <u-row>
                    <u-tag text="TOP1" type="error" shape="circle" size="mini" v-if="index == 0"></u-tag>
                    <u-tag text="TOP2" type="success" shape="circle" size="mini" v-if="index == 1"></u-tag>
                    <u-tag text="TOP3" type="primary" shape="circle" size="mini" v-if="index == 2"></u-tag>
                  </u-row>
                </u-col>
              </u-row>
              <u-row>
                <u--text :text="item.companyDesc" size="12" lines="1" type="default"></u--text>
              </u-row>
            </u-col>
          </u-row>
        </view>
      </view>
      <u-divider text="分割线" :dot="true"></u-divider>
      <view class="black-list list">
        <u-row>
          <u-tag text="企业黑榜TOP" plain size="large" color="#000" borderColor="#000"></u-tag>
        </u-row>
        <view class="list-content">
          <u-row customStyle="margin: 15px 0" justify="space-between" v-for="(item, index) in blackList" :key="index"
                 @click="toDetail(1, item.id)">
            <u-col>
              <u-row>
                <u-col span="10">
                  <u--text :text="item.companyName" bold size="14" lines="1"></u--text>
                </u-col>
                <u-col span="2">
                  <u-row>
                    <u-tag text="TOP1" type="error" shape="circle" size="mini" v-if="index == 0"></u-tag>
                    <u-tag text="TOP2" type="success" shape="circle" size="mini" v-if="index == 1"></u-tag>
                    <u-tag text="TOP3" type="primary" shape="circle" size="mini" v-if="index == 2"></u-tag>
                  </u-row>
                </u-col>
              </u-row>
              <u-row>
                <u--text :text="item.companyDesc" size="12" lines="1" type="default"></u--text>
              </u-row>
            </u-col>
          </u-row>
        </view>
      </view>
      <u-divider text="分割线" :dot="true"></u-divider>
      <view class="black-list list">
        <u-row>
          <u-tag text="最新发布" plain size="large"></u-tag>
        </u-row>
        <view class="list-content">
          <u-row customStyle="margin: 15px 0" justify="space-between" v-for="(item, index) in lastList" :key="index"
                 @click="toDetail(1, item.id)">
            <u-col>
              <u-row>
                <u-col span="10">
                  <u--text :text="item.companyName" bold size="14" lines="1"></u--text>
                </u-col>
                <u-col span="2">
                  <u-row>
                    <u-tag text="TOP1" type="error" shape="circle" size="mini" v-if="index == 0"></u-tag>
                    <u-tag text="TOP2" type="success" shape="circle" size="mini" v-if="index == 1"></u-tag>
                    <u-tag text="TOP3" type="primary" shape="circle" size="mini" v-if="index == 2"></u-tag>
                  </u-row>
                </u-col>
              </u-row>
              <u-row>
                <u--text :text="item.companyDesc" size="12" lines="1" type="default"></u--text>
              </u-row>
            </u-col>
          </u-row>
        </view>
      </view>
      <u-divider text="分割线" :dot="true"></u-divider>
      <view class="ques-list list">
        <u-row>
          <u-tag text="问答榜" plain size="large" type="success"></u-tag>
        </u-row>
        <view class="list-content">
          <u-row customStyle="margin: 15px 0" justify="space-between" v-for="(item, index) in quesList" :key="index"
                 @click="toDetail(2, item.id)">
            <u-col>
              <u-row>
                <u-col span="10">
                  <u--text :text="item.quesTitle" bold size="14" lines="1"></u--text>
                </u-col>
                <u-col span="2">
                  <u-row>
                    <u-tag text="回答" type="error" shape="circle" size="mini" v-if="index == 0"></u-tag>
                    <u-count-to :startVal="1" :endVal="item.replyNum" fontSize="14"></u-count-to>
                  </u-row>
                </u-col>
              </u-row>
              <u-row>
                <u--text :text="item.companyDesc" size="12" lines="1" type="default"></u--text>
              </u-row>
            </u-col>
          </u-row>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      noticeText: '避坑宝，吐槽不吐不快!',
      noticeUrl: '/pages/list/list',
      list2: [{
        image: 'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: '昨夜星辰昨夜风，画楼西畔桂堂东',
      }, {
        image: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: '身无彩凤双飞翼，心有灵犀一点通'
      }, {
        image: 'https://images.pexels.com/photos/3454270/pexels-photo-3454270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
      }],
      blackList: [],
      redList: [],
      lastList: [],
      quesList: [],
    }
  },
  methods: {
    init() {
      this.indexList();
    },
    async indexList() {
      const result = await this.$api.indexList();
      if (result.success) {
        const {blackList, redList, lastList, quesList} = result.data;
        this.blackList = blackList
        this.redList = redList
        this.lastList = lastList
        this.quesList = quesList
        this.notice(lastList)
      } else {
        uni.$u.toast(result.message);
      }
    },
    notice(list) {
      if (list) {
        this.noticeText = "最新发布吐槽：" + list[0].companyName;
        this.noticeUrl = `/pages/list/detail?roastId=${list[0].id}`
      }
    },
    toDetail(type, id) {
      if (type == 1) {
        uni.$u.route('/pages/list/detail', {
          roastId: id
        });
      } else {
        uni.$u.route('/pages/ques/detail', {
          quesId: id
        });
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="scss">
.container {
  padding: 10px 20px;
}

.list {
  margin-TOP: 20px;

  .list-content {
    margin-TOP: 15px;
    border-width: 1px;
    border-color: #ddd;
    border-style: dashed;
    background-color: #fafafa;
    padding: 0px 10px;
    border-radius: 8px;
  }
}

.u-count-num {
  margin-left: 10px;
}
</style>
