<template>
  <view class="list">
    <!--提问详情-->
    <view class="container">
      <view class="toast">
        <u-row customStyle="margin-bottom: 10px">
          <u-col span="10">
            <u--text :text="ques.quesTitle" type="primary" bold size="17"></u--text>
          </u-col>
          <u-col span="2">
            <u-button text="赞" icon="thumb-up-fill"
                      size="mini" @click="likes(ques.id, 1)" type="primary"></u-button>
          </u-col>
        </u-row>
        <u-read-more
            ref="uReadMore"
            :showHeight="showHeight"
            toggle
            @open="moreOpen"
            @close="moreClose"
        >
          <u-parse
              :content="ques.quesDesc"
              @load="load"
              :tag-style="tagStyle"
          ></u-parse>
        </u-read-more>
        <u-row>
          <u-col span="6" textAlign="left">
            <u-row>
              <u-col span="2">
                <u--text text="回复:" type="error" bold size="12"></u--text>
              </u-col>
              <u-col span="2">
                <u-count-to :startVal="1" :endVal="ques.replyNum" fontSize="14" color="#f56c6c"></u-count-to>
              </u-col>
            </u-row>
          </u-col>
          <u-col span="6" textAlign="right">
            {{ $moment(ques.createTime).format("yyyy-MM-DD HH:mm:ss") }}
          </u-col>
        </u-row>
      </view>
      <u-divider text="分割线" :dot="true"></u-divider>
      <u-empty
          customStyle="margin-bottom: 20px"
          height="500"
          mode="list" v-if="quesReplyList.length==0"
      ></u-empty>
      <u-list
          v-else
          height="63vh"
          @scrolltolower="scrolltolowerFun"
      >
        <u-list-item
            v-for="(item, index) in quesReplyList"
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
                  color="#303133"
                  bold
                  size="17"
              ></u--text>
              <u--text
                  margin="0 0 8px 0"
                  :text="item.content"
              ></u--text>
              <view customStyle="justify-content: flex-end;">
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
                    <u-button text="赞他" icon="thumb-down-fill"
                              size="mini" @click="likes(item.id, 3, index)" iconColor="#fff" type="primary"></u-button>
                  </u-col>
                </u-row>
              </view>
            </view>
          </view>
        </u-list-item>
        <u-loadmore status="loadmoreStatus" v-if="loadmoreShow"/>
      </u-list>
      <view class="bottom">
        <u-button text="我来解答" type="primary" @click="popupShow = true"></u-button>
      </view>
    </view>
    <u-popup :show="popupShow" @close="close" @open="open" closeOnClickOverlay>
      <view style="padding: 15px">
        <u--textarea customStyle="margin-bottom: 10px"
                     placeholder="请输入内容"
                     v-model="content"
        ></u--textarea>
        <u-button text="解答" type="primary" @click="quesReply"></u-button>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 吐槽详情
      ques: {},
      // 弹出框展示
      popupShow: false,
      // 内容
      content: '',
      // 吐槽id
      quesId: '',
      // 页码
      current: 1,
      // 页长
      size: 10,
      // 加在更多
      loadmoreStatus: '',
      // 加在更多展示
      loadmoreShow: false,
      // 吐槽回复分页列表
      quesReplyList: [],
      showHeight: 200,
      tagStyle: {
        p: 'color: #606266; line-height: 24px;'
      }
    }
  },
  onLoad(options) {
    // 获取参数
    const {quesId} = options;
    this.quesId = quesId
    this.init(quesId)
  },
  methods: {
    init(quesId) {
      // 问题信息
      this.detail(quesId);
      // 回复列表
      this.replyPage({quesId: this.quesId});
    },
    async detail(quesId) {
      const result = await this.$api.quesDetail(quesId);
      if (result.success) {
        this.ques = result.data;
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
      const result = await this.$api.quesReplyPage(params);
      if (result.success) {
        const {records, total, current, size} = result.data;
        this.quesReplyList = this.quesReplyList.concat(records);
        if (total < size * current) {
          this.loadmoreShow = true
        } else {
          this.current++;
        }
      }
    },
    scrolltolowerFun() {
      this.replyPage({quesId: this.quesId})
    },
    open() {
      this.popupShow = true
      this.content = ''
    },
    close() {
      this.popupShow = false
      this.content = ''
    },
    async quesReply() {
      const param = {
        content: this.content,
        quesId: this.quesId,
      }
      const result = await this.$api.quesReply(param);
      if (result.success) {
        uni.$u.toast("回复成功");
        this.initPageParam()
        await this.replyPage({quesId: this.quesId});
        // 吐槽信息
        await this.detail(this.quesId);
      } else {
        uni.$u.toast(result.message);
      }
    },
    initPageParam() {
      this.current = 1;
      this.size = 10;
      this.popupShow = false
      this.loadmoreShow = false
      this.quesReplyList = []
    },
    moreOpen() {
    },
    moreClose() {
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
          await this.detail(this.quesId);
        }else{
          this.quesReplyList[index].likes = this.quesReplyList[index].likes+1
        }
      }else {
        uni.$u.toast(result.message);
      }
    },
    load() {
      this.$refs.uReadMore.init()
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

