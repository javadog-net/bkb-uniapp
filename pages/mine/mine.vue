<template>
  <view class="mine">
    <!--我的-->
    <u-transition :show="true" mode="fade-left">
    <view class="container">
      <view class="avatar">

        <u-row
            justify="space-between"
            gutter="-20"
        >
          <u-col span="3">
            <u-upload
                :fileList="avatarList"
                @afterRead="afterRead"
                name="file"
                multiple
                :maxCount="1"
                width="150"
                height="150"
            >
              <image :src="user.avatar"
                     mode="widthFix" style="width: 60px;height: 60px;"></image>
            </u-upload>
          </u-col>
          <u-col span="9">
            <u-col span="12">
              <u--text type="primary" :text="user.nickname" bold></u--text>
            </u-col>
          </u-col>
        </u-row>
      </view>
      <view class="main">
        <u-cell-group :border="false">
          <u-cell
              size="large"
              title="我的资料"
              icon="email"
              isLink
              @click="toInfo"
          ></u-cell>
          <u-cell
              size="large"
              title="我的吐槽"
              icon="integral"
              isLink
              @click="toRoast"
          ></u-cell>
          <u-cell
              size="large"
              title="我的提问"
              icon="info-circle"
              isLink
              @click="toQues"
          ></u-cell>
          <u-cell
              size="large"
              title="关于"
              icon="gift"
              isLink
              @click="toAbout"
          ></u-cell>
        </u-cell-group>

        <view class="row">
          <u-button text="退出" type="error" @click="logout"></u-button>
        </view>
      </view>
    </view>
    </u-transition>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 用户
      user: {},
      // 头像列表
      avatarList:[] ,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      this.mineInfo();
    },
    // 个人信息
    async mineInfo() {
      const res = await this.$api.userDetail()
      if(!res.success){
        uni.$u.toast(res.message);
        return
      }
      const data = res.data;
      this.user = data
    },
    // 更新用户信息
    async updateInfo(avatar){
      this.user['avatar'] = avatar
      const result = await this.$api.userUpdate(this.user)
      if(result.success){
        uni.$u.toast("头像更新成功");
      }else{
        uni.$u.toast(result.message);
      }
    },
    // 上传
    async afterRead(file) {
      const result = await this.$api.upload(file.file[0].url)
      if (result.success) {
        const data = result.data
        this.avatar = this.$config.baseUrl + data.url
        // 入库更新用户信息
        this.updateInfo(this.avatar)
      }
    },
    // 个人信息
    toInfo() {
      this.$Router.push({path: '/pages/mine/info'})
    },
    // 我的吐槽
    toRoast(){
      this.$Router.push({path: '/pages/mine/roast'})
    },
    // 我的提问
    toQues(){
      this.$Router.push({path: '/pages/mine/ques'})
    },
    // 关于
    toAbout() {
      const url = "https://blog.javadog.net"
      this.$Router.push({path: '/pages/webview/webview', query: {url: url}})
    },
    // 登出
    logout(){
      uni.clearStorageSync();
      uni.$u.toast('退出成功!')
      uni.$u.sleep(1000).then(() => {
        uni.reLaunch({
          url: '/pages/auth/auth'
        })
      })
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px;

  .main {
    margin-top: 20px;
    border-top: 1px solid #efefef;

    .row {
      margin-top: 10vh;
    }
  }
}
</style>
