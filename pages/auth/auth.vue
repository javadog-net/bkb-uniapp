<template>
    <view class="auth">
      <!--授权页-->
      <u-transition :show="true" mode="fade-up">
      <view class="container">
        <u-row
            justify="center"
            customStyle="margin-bottom: 10px"
        >
          <u-col span="8">
            <view class="logo">
              <u-avatar :src="src" shape="square" size="100"></u-avatar>
            </view>

            <view class="title">
              <u--text text="避坑宝" align="center" bold size="26"></u--text>
            </view>

            <view class="descript">
              <u--text text="一个帮你避坑的小工具" align="center" size="16" type="warning"></u--text>
            </view>

            <view class="auth-btn">
              <u-button text="授权登录" shape="circle" type="success" style="width: 80%" @click="auth"></u-button>
            </view>
          </u-col>
        </u-row>
      </view>
      </u-transition>
      <u-modal :closeOnClickOverlay="true" :show="modalShow" title="用户服务协议" :content='content'   @confirm="modalShow = false"  @close="modalShow = false"></u-modal>
    </view>

</template>

<script>
export default {
  data() {
    return {
      src: '/static/img/bkb_logo.png',
      checkedArray: [],
    };
  },
  mounted() {
    const accessToken = uni.getStorageSync('access_token');
    if(accessToken){
      uni.reLaunch({
        url: '/pages/index/index'
      })
    }
  },
  methods: {
    auth(){
      const _this = this
      const { platform } = uni.$u
      if('mp' != platform){
        uni.$u.toast("请使用微信小程序打开")
        return
      }
      // 授权
      uni.login({
        provider: 'weixin',
        success:async function(loginRes) {
          // 微信code
          const code = loginRes.code
          const param = {
            code
          }
          const result = await _this.$api.auth(param)
          if(result.success){
            // 获取token
            const userInfo = result.data;
            uni.setStorageSync('access_token', userInfo.accessToken);
            uni.setStorageSync('user_info', userInfo);
            uni.$u.toast("授权成功!")
            uni.$u.sleep(700).then(() => {
              uni.reLaunch({
                url: '/pages/index/index'
              })
            })

          }else{
            uni.$u.toast(result.message)
          }

        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.auth{
  height: 100%;
  .container {
    padding: 120px 20px;
    .logo {
      margin: 0 auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .title {
      margin: 40px auto 0;
    }

    .descript{
      margin: 20px auto 0;
    }
    .auth-btn{
      margin-top: 60px;
      width: 100%;
    }
  }
}




</style>
