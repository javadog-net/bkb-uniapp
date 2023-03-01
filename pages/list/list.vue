<template>
  <view class="list">
    <!--红黑榜-->
    <view class="container">
      <u-sticky>
        <u-subsection :list="subsectionList" :current="subsectionCurrent" fontSize="16" @change="tab" mode="subsection"></u-subsection>
        <u-row customStyle="padding:10px 0px;">
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
          <u-row customStyle="padding: 8px 13px; border-bottom: 1px solid #ededed;" @click="toDetail(item)">
            <u-col span="10">
              <u--text :text="item.companyName" lines="1" size="18" type="primary"></u--text>
              <u-row customStyle="margin-top: 5px">
                <u--text :text="item.companyDesc" lines="2" size="14" type="info"></u--text>
              </u-row>
              <u-row customStyle="margin-top: 3px">
                <u-col span="2">
                  <u--text prefixIcon="eye" iconStyle="font-size: 19px" :text="item.views"></u--text>
                </u-col>
                <u-col span="2">
                  <u--text prefixIcon="edit-pen" iconStyle="font-size: 19px" :text="item.comments"></u--text>
                </u-col>
                <u-col span="2">
                  <u--text prefixIcon="heart" iconStyle="font-size: 19px" :text="item.heats"></u--text>
                </u-col>
              </u-row>

            </u-col>
            <u-col span="2">
              <u-row customStyle="justify-content: flex-end">
                <u-tag text="TOP1" type="error" shape="circle" size="mini" v-if="index == 0"></u-tag>
                <u-tag text="TOP2" type="success" shape="circle" size="mini" v-if="index == 1"></u-tag>
                <u-tag text="TOP3" type="warning" shape="circle" size="mini" v-if="index == 2"></u-tag>

<!--                <u-count-to :startVal="1" :endVal="item.heats" fontSize="14"></u-count-to>-->
              </u-row>
            </u-col>
          </u-row>
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
      // tabs-list
      subsectionList: ['企业黑榜', '企业红榜'],
      // 默认选中
      subsectionCurrent: 0,
      // 吐槽列表
      roastList:[],
      // 搜索值
      searchValue:'',
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
    tab(index) {
      this.subsectionCurrent = index
      this.initPageParam()
      this.roastPage({companyName: this.searchValue, companyType: index})
    },
    onPageScroll(e) {
      this.scrollTop = e.scrollTop;
      console.log("this.scrollTop", this.scrollTop)
    },
    // 分页
    async roastPage(param){
      if(this.loadmoreShow){
        return
      }
      // 分页查询
      let params = {
        current: this.current,
        size: this.size,
        ...param
      }
      const result = await this.$api.roastPage(params)
      if(result.success){
        const {records, total, current, size} = result.data;
        this.roastList = this.roastList.concat(records);
        if(total < size*current){
          this.loadmoreShow = true
        }else{
          this.current++;
        }
      }
    },
    searchChange(){
      this.initPageParam()
      this.roastPage({companyName: this.searchValue, companyType: this.subsectionCurrent})
    },
    scrolltolowerFun(){
      this.roastPage({companyName: this.searchValue, companyType: this.subsectionCurrent})
    },
    initPageParam(){
      this.current = 1;
      this.size = 10;
      this.roastList = [];
      this.loadmoreShow = false;
    },
    toDetail(item){
      const roastId = item.id;
      // 带参数
      uni.$u.route('/pages/list/detail', {
        roastId
      });
    },
    init(){
      this.roastPage()
    },
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px;
}
.u-count-num{
  margin-left: 5px;
}
</style>

