import {RouterMount,createRouter} from 'uni-simple-router';
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES]
});
const whiteList = ['/pages/auth/auth']

//全局路由前置守卫
router.beforeEach((to, from, next) => {
		const token = uni.getStorageSync("access_token");
		const userInfo = uni.getStorageSync("user_info")
		if(token && userInfo){
		    next()
		}else{
			if (whiteList.indexOf(to.path) !== -1) {
			  next()
			}else{
			  next({ path: '/pages/auth/auth'})
			}
		}
});
// 全局路由后置守卫
router.afterEach((to, from) => {
    console.log('跳转结束')
	console.log('to',to)
	console.log('from',from)
	uni.hideLoading()
})

export {
	router,
	RouterMount
}
