<template>
	<view>
		<button @click="demo">点击</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

			 demo(){
				var that = this;
								uni.login({
									provider: 'weixin',
									success:async function(loginRes) {
                    // 获取用户信息
                    uni.getUserInfo({
                      provider: 'weixin',
                      success:async function (infoRes) {
                        console.log(infoRes);
                        let param = {
                          code: loginRes.code,       //登陆凭证
                          encryptedData: infoRes.encryptedData,  //包括敏感数据在内的完整用户信息的加密数据
                          iv: infoRes.iv,   //加密算法的初始向量，详细见加密数据解密算法
                          appId: uni.getAccountInfoSync().miniProgram.appId //小程序的appId
                        }
                        const result = await that.$api.getUserInfo(param)
                      }
                    });
									}
								});
			}

		}
	}
</script>

<style>

</style>
