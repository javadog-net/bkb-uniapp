<template>
  <view class="list">
    <!--提问列表-->
    <view class="container">
      <u-sticky>
        <u-row customStyle="padding:0px 0px; 10px">
          <u-search
              v-model="searchValue"
              :show-action="false"
              @change="searchChange"
          ></u-search>
        </u-row>
      </u-sticky>
      <u-empty
          mode="list" v-if="quesList.length==0"
      ></u-empty>
      <u-list
          v-else
          height="80vh"
          @scrolltolower="scrolltolowerFun"
      >
        <u-list-item
            v-for="(item, index) in quesList"
            :key="index"
        >
          <view class="list" @click="toDetail(item)">
            <u-row customStyle="justify-content: space-between;">
              <u-col span="8">
                <u--text :text="item.quesTitle" lines="1" size="18" type="primary"></u--text>
              </u-col>
              <u-col span="4" customStyle="margin-top: 3px">
                <u-row customStyle="justify-content: flex-end;">
                  <u-col span="4">
                    <u--text prefixIcon="edit-pen" iconStyle="font-size: 19px" :text="item.replyNum"></u--text>
                  </u-col>
                  <u-col span="4">
                    <u--text prefixIcon="thumb-up-fill" iconStyle="font-size: 19px" :text="item.likes"></u--text>
                  </u-col>
                </u-row>
              </u-col>
            </u-row>
            <u-row>
              <u--text :text="item.quesDesc" lines="2" size="14" type="info"></u--text>
            </u-row>
            <u-row>
              <u--text :text="$moment(item.createTime).format('yyyy-MM-DD HH:mm:ss')" lines="2" size="12"
                       type="info"></u--text>
            </u-row>
          </view>
        </u-list-item>
        <u-loadmore status="loadmoreStatus" v-if="loadmoreShow"/>
      </u-list>

    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 页码
      current: 1,
      // 页长
      size: 10,
      // 吐槽列表
      quesList: [],
      // 搜索值
      searchValue: '',
      // 加在更多
      loadmoreStatus: '',
      // 加在更多展示
      loadmoreShow: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    onPageScroll(e) {
      this.scrollTop = e.scrollTop;
      console.log("this.scrollTop", this.scrollTop)
    },
    // 分页
    async quesPage(param) {
      if (this.loadmoreShow) {
        return
      }
      // 分页查询
      let params = {
        current: this.current,
        size: this.size,
        ...param
      }
      const result = await this.$api.quesPage(params)
      if (result.success) {
        const {records, total, current, size} = result.data;
        this.quesList = this.quesList.concat(records);
        if (total < size * current) {
          this.loadmoreShow = true
        } else {
          this.current++;
        }
      }
    },
    searchChange() {
      this.initPageParam()
      this.quesPage({quesTitle: this.searchValue})
    },
    scrolltolowerFun() {
      this.quesPage({quesTitle: this.searchValue})
    },
    initPageParam() {
      this.current = 1;
      this.size = 10;
      this.quesList = [];
      this.loadmoreShow = false;
    },
    toDetail(item) {
      const quesId = item.id;
      // 带参数
      uni.$u.route('/pages/ques/detail', {
        quesId
      });
    },
    init() {
      this.quesPage()
    },
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px;

  .list {
    padding: 8px 13px;
    border-bottom: 1px solid #ededed;
  }
}

.u-count-num {
  margin-left: 5px;
}
</style>

