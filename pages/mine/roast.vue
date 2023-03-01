<template>
  <view class="list">
    <!--我的吐槽-->
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
          mode="list" v-if="roastList.length==0"
      ></u-empty>
      <u-list
          v-else
          height="80vh"
          @scrolltolower="scrolltolowerFun"
      >
        <u-list-item
            v-for="(item, index) in roastList"
            :key="index"
        >
          <view class="list" @click="toDetail(item)">
            <u-row>
              <u-tag :text="item.companyType?'红榜':'黑榜'" plain size="mini" :type="item.companyType?'error':'info'"></u-tag>
              <u--text :text="item.companyName" lines="1" size="18" type="primary" customStyle="margin-left: 10px"></u--text>
              <u-row>
                <u-col span="2">
                  <u--text prefixIcon="edit-pen" iconStyle="font-size: 19px" :text="item.heats"></u--text>
                </u-col>
              </u-row>
            </u-row>
            <u-row customStyle="margin-top: 10px">
              <u--text :text="item.companyDesc" lines="2" size="14" type="info"></u--text>
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
      roastList: [],
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
    async roastPage(param) {
      if (this.loadmoreShow) {
        return
      }
      // 分页查询
      let params = {
        current: this.current,
        size: this.size,
        mine: 1,
        ...param
      }
      const result = await this.$api.roastPage(params)
      if (result.success) {
        const {records, total, current, size} = result.data;
        this.roastList = this.roastList.concat(records);
        if (total < size * current) {
          this.loadmoreShow = true
        } else {
          this.current++;
        }
      }
    },
    searchChange() {
      this.initPageParam()
      this.roastPage({companyName: this.searchValue})
    },
    scrolltolowerFun() {
      this.roastPage({companyName: this.searchValue})
    },
    initPageParam() {
      this.current = 1;
      this.size = 10;
      this.roastList = [];
      this.loadmoreShow = false;
    },
    toDetail(item) {
      const roastId = item.id;
      // 带参数
      uni.$u.route('/pages/list/detail', {
        roastId
      });
    },
    init() {
      this.roastPage()
    },
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px;
  .list{
    padding: 8px 13px;
    border-bottom: 1px solid #ededed;
  }
}

.u-count-num {
  margin-left: 5px;
}
</style>

