<template>
  <view class="list">
    <!--红黑榜详情-->
    <view class="container">
      <view class="toast">
        <u-row customStyle="margin-bottom: 10px">
          <u-col span="10">
            <u--text :text="roast.companyName" type="primary" bold size="17"></u--text>
          </u-col>
          <u-col span="2">
            <u-button :text="roast.companyType==0?'黑他':'粉他'" :icon="roast.companyType==0?'thumb-down-fill':'thumb-up-fill'"
                   size="mini" @click="likes(roast.id, 0)" iconColor="#fff" :color="roast.companyType==0?'#303133':'#fa3534'"></u-button>
          </u-col>
        </u-row>
        <u-row customStyle="margin-bottom: 10px">
          <u-parse :content="roast.companyDesc" :selectable="true"></u-parse>
        </u-row>
        <u-row customStyle="margin-bottom: 10px">

          <u-col span="1">
            <u--text text="浏览" type="success" bold size="12"></u--text>
          </u-col>
          <u-col span="1">
            <u-count-to :startVal="1" :endVal="roast.views" fontSize="14" color="#f56c6c"></u-count-to>
          </u-col>

          <u-col span="1">
            <u--text text="回复" type="primary" bold size="12"></u--text>
          </u-col>
          <u-col span="1">
            <u-count-to :startVal="1" :endVal="roast.comments" fontSize="14" color="#f56c6c"></u-count-to>
          </u-col>

          <u-col span="1">
            <u--text text="点赞" type="warning" bold size="12"></u--text>
          </u-col>
          <u-col span="1">
            <u-count-to :startVal="1" :endVal="roast.likes" fontSize="14" color="#f56c6c"></u-count-to>
          </u-col>

          <u-col span="1">
            <u--text text="热度" type="error" bold size="12"></u--text>
          </u-col>
          <u-col span="1">
            <u-count-to :startVal="1" :endVal="roast.heats" fontSize="14" color="#f56c6c"></u-count-to>
          </u-col>

        </u-row>
        <u-row>
          <u-col span="12" textAlign="right">
            {{ $moment(roast.createTime).format("yyyy-MM-DD HH:mm:ss") }}
          </u-col>
        </u-row>
      </view>
      <u-divider text="分割线" :dot="true"></u-divider>
      <u-empty
          customStyle="margin-bottom: 20px"
          height="500"
          mode="list" v-if="roastReplyList.length==0"
      ></u-empty>
      <u-list
          v-else
          height="63vh"
          @scrolltolower="scrolltolowerFun"
      >
        <u-list-item
            v-for="(item, index) in roastReplyList"
            :key="index"
        >
          <view class="reply">
            <view class="album__avatar">
              <image
                  :src="item.userResponse.avatar"
                  style="width: 32px;height: 32px;"
              ></image>
            </view>
            <view class="reply__content">
              <u--text
                  :text="item.userResponse.nickname"
                  bold
                  color="#303133"
                  size="17"
              ></u--text>
              <u--text
                  margin="0 0 8px 0"
                  :text="item.content"
              ></u--text>
              <view>
                <u-row customStyle="justify-content: space-between;">
                  <u-col span="6" textAlign="left">
                    <u--text
                        :text="$moment(item.createTime).format('yyyy-MM-DD HH:mm:ss')"
                        type="info"
                        bold
                        size="12"
                    ></u--text>
                  </u-col>
                  <u-col span="2" textAlign="right">
                    <u--text
                        :text="'点赞数:' + item.likes"
                        type="info"
                        bold
                        size="12"
                    ></u--text>
                  </u-col>
                  <u-col span="2" textAlign="right">
                    <u-button text="赞他" icon="thumb-up-fill"
                              size="mini" @click="likes(item.id, 2, index)" iconColor="#fff" type="primary"></u-button>
                  </u-col>
                </u-row>
              </view>
            </view>
          </view>
        </u-list-item>
        <u-loadmore status="loadmoreStatus" v-if="loadmoreShow"/>
      </u-list>
      <view class="bottom">
        <u-button text="我也说一句" type="primary" @click="popupShow = true"></u-button>
      </view>
    </view>
    <u-popup :show="popupShow" @close="close" @open="open" closeOnClickOverlay>
      <view style="padding: 15px">
        <u--textarea customStyle="margin-bottom: 10px"
                     placeholder="请输入内容"
                     v-model="content"
        ></u--textarea>
        <u-button text="吐槽" type="primary" @click="roastReply"></u-button>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 吐槽详情
      roast: {},
      // 弹出框展示
      popupShow: false,
      // 内容
      content: '',
      // 吐槽id
      roastId: '',
      // 页码
      current: 1,
      // 页长
      size: 10,
      // 加在更多
      loadmoreStatus: '',
      // 加在更多展示
      loadmoreShow: false,
      // 吐槽回复分页列表
      roastReplyList: []
    }
  },
  onLoad(options) {
    // 获取参数
    const {roastId} = options;
    this.roastId = roastId
    this.init(roastId)
  },
  methods: {
    init(roastId) {
      // 吐槽信息
      this.detail(roastId);
      // 回复列表
      this.replyPage({roastId: this.roastId});
    },
    async detail(roastId) {
      const result = await this.$api.roastDetail(roastId);
      if (result.success) {
        this.roast = result.data;
      } else {
        uni.$u.toast(result.message);
      }
    },
    async replyPage(param) {
      if (this.loadmoreShow) {
        return
      }
      // 分页查询
      let params = {
        current: this.current,
        size: this.size,
        ...param
      }
      const result = await this.$api.roastReplyPage(params);
      if (result.success) {
        const {records, total, current, size} = result.data;
        this.roastReplyList = this.roastReplyList.concat(records);
        if (total < size * current) {
          this.loadmoreShow = true
        } else {
          this.current++;
        }
      }
    },
    scrolltolowerFun() {
      this.replyPage({roastId: this.roastId})
    },
    open() {
      this.popupShow = true
      this.content = ''
    },
    close() {
      this.popupShow = false
      this.content = ''
    },
    async roastReply() {
      const param = {
        content: this.content,
        roastId: this.roastId,
      }
      const result = await this.$api.roastReply(param);
      if (result.success) {
        uni.$u.toast("回复成功");
        this.initPageParam()
        await this.replyPage({roastId: this.roastId});
        // 吐槽信息
        await this.detail(this.roastId);
      } else {
        uni.$u.toast(result.message);
      }
    },
    async likes(id, relationType, index){
      const param = {
        relationId: id,
        relationType: relationType,
      }
      const result = await this.$api.likes(param);
      if (result.success) {
        uni.$u.toast("点赞成功");
        if(relationType==0){
          this.roast.likes = this.roast.likes+1
        }else{
          this.roastReplyList[index].likes = this.roastReplyList[index].likes+1
        }
      }else {
        uni.$u.toast(result.message);
      }
    },
    initPageParam() {
      this.current = 1;
      this.size = 10;
      this.popupShow = false
      this.loadmoreShow = false
      this.roastReplyList = []
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  box-sizing: border-box;

  .toast {
    border-width: 1px;
    border-color: #ddd;
    border-style: dashed;
    background-color: #fafafa;
    padding: 20px 10px;
    border-radius: 3px;
  }

  .reply {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;

    &__avatar {
      background-color: $u-bg-color;
      padding: 5px;
      border-radius: 3px;
    }

    &__content {
      margin-left: 10px;
      flex: 1;
    }

    .reply__content {
      border-bottom: solid 1px #e4e7ed;
      padding-bottom: 5px;
    }

  }
}

.u-textarea {
  margin-bottom: 10px;
}
</style>

