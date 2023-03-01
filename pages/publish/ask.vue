<template>
  <view class="info">
    <!--提问-->
    <view class="container">
      <u--form
          labelPosition="left"
          :model="model"
          :rules="rules"
          ref="form1"
          labelWidth="80"
      >
        <u-form-item
            label="问题标题"
            prop="ask.quesTitle"
            borderBottom
            ref="item"
        >
          <u--input
              v-model="model.ask.quesTitle"
              border="none"
              placeholder="请输入问题标题"
          ></u--input>
        </u-form-item>
        <u-form-item
            label="提问"
            prop="ask.companyDesc"
            ref="item3"
        >
          <u--textarea
              placeholder="请开始提问"
              v-model="model.ask.quesDesc"
              maxlength="128"
          ></u--textarea>
        </u-form-item>

      </u--form>

      <u-button
          type="primary"
          text="提交"
          customStyle="margin-top: 50px"
          @click="submit"
      ></u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      model: {
        ask: {
          // 提问标题
          quesTitle:'',
          // 问题描述
          quesDesc: ''
        },
      },
      rules: {
        'ask.quesTitle': {
          type: 'string',
          required: true,
          message: '请填写问题名称',
          trigger: ['blur', 'change']
        },
        'ask.quesDesc': {
          type: 'string',
          required: true,
          message: '请填写问题描述',
          trigger: ['blur', 'change']
        }
      },
    }
  },
  methods: {
    // 提交
    submit() {
      // 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
      this.$refs.form1.validate().then(async res => {
        // 调取接口进行数据更新
        const result = await this.$api.ques(this.model.ask)
        if (result.success) {
          uni.$u.toast("发布成功!");
          uni.reLaunch({
            url: '/pages/ques/ques'
          })
        }else{
          uni.$u.toast(result.message);
        }
      })
    },
    init() {
    }
  },
  mounted() {
    this.init()
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>
