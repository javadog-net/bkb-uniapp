const http = uni.$u.http
const api = {

    /**
     * 授权
     */
    auth(params) {
        return http.get('/auth', {params})
    },

    /**
     * 首页
     */
    indexList() {
        return http.get('/index/list', {})
    },

    /**
     * 用户详情
     */
    userDetail(){
        return http.get('/user', {})
    },

    /**
     * 用户更新
     */
    userUpdate(params) {
        return http.put('/user', params)
    },

    /**
     * 吐槽新增
     */
    roast(params) {
        return http.post('/roast', params)
    },

    /**
     * 吐槽详情
     */
    roastDetail(roastId) {
        return http.get(`/roast/${roastId}`, {})
    },

    /**
     * 吐槽分页列表
     */
    roastPage(params) {
        return http.get('/roast', {params})
    },

    /**
     * 吐槽回复新增
     */
    roastReply(params) {
        return http.post('/roastReply', params)
    },

    /**
     * 吐槽回复分页列表
     */
    roastReplyPage(params) {
        return http.get('/roastReply', {params})
    },

    /**
     * 提问新增
     */
    ques(params) {
        return http.post('/ques', params)
    },

    /**
     * 吐槽详情
     */
    quesDetail(quesId) {
        return http.get(`/ques/${quesId}`, {})
    },

    /**
     * 提问分页列表
     */
    quesPage(params) {
        return http.get('/ques', {params})
    },

    /**
     * 问题回复新增
     */
    quesReply(params) {
        return http.post('/quesReply', params)
    },

    /**
     * 问题回复分页列表
     */
    quesReplyPage(params) {
        return http.get('/quesReply', {params})
    },

    /**
     * 点赞新增
     */
    likes(params) {
        return http.post('/likes', params)
    },

    /**
     * 上传
     */
    upload(filePath) {
        const params = {
            name: 'file',
            filePath: filePath,
            fileType: 'image'
        }
        return http.upload('/upload', params)
    },
}

export default api;
