<template>
  <view class="info">
    <!--吐槽-->
    <view class="container">
      <u--form
          labelPosition="left"
          :model="model"
          :rules="rules"
          ref="form1"
          labelWidth="60"
      >
        <u-form-item
            label="公司名"
            prop="company.companyName"
            borderBottom
            ref="item"
        >
          <u--input
              v-model="model.roast.companyName"
              border="none"
              placeholder="请输入昵称"
          ></u--input>
        </u-form-item>
        <u-form-item
            label="类别"
            prop="company.companyType"
            borderBottom
            ref="item1"
        >
          <u-row>
            <u-radio-group v-model="model.roast.companyType">
              <u-radio
                  :customStyle="{marginRight: '16px'}"
                  v-for="(item, index) in companyType"
                  :key="index"
                  :label="item.value"
                  :name="item.key"
              >
              </u-radio>
            </u-radio-group>
            <u-icon name="question-circle-fill" size="24" @click="iconClick"></u-icon>
          </u-row>
        </u-form-item>
        <u-form-item
            label="吐槽"
            prop="company.companyDesc"
            ref="item3"
        >
          <u--textarea
              placeholder="请开始吐槽"
              v-model="model.roast.companyDesc"
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
    <u-notify type="warning" ref="uNotify" message="黑名单-吐槽企业; 红名单-赞美企业"></u-notify>
  </view>
</template>

<script>
export default {
  data() {
    return {
      model: {
        roast: {
          companyName:'',
          companyType: 0,
          companyDesc: '',
        },
      },
      companyType:[
        {
          key: 0,
          value: '黑名单'
        },
        {
          key: 1,
          value: '红名单'
        }
      ],
      rules: {
        'roast.companyName': {
          type: 'string',
          required: true,
          message: '请填写公司名称',
          trigger: ['blur', 'change']
        },
        'roast.companyDesc': {
          type: 'string',
          required: true,
          message: '请填写吐槽内容',
          trigger: ['blur', 'change']
        }
      },
    }
  },
  methods: {
    // 图标点击
    iconClick(){
      this.$refs.uNotify.show({
        type: 'error',
        message: '黑名单-吐槽企业; 红名单-赞美企业',
        duration: 1000 * 3,
      });
    },
    // 提交
    submit() {
      // 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
      this.$refs.form1.validate().then(async res => {
        // 调取接口进行数据更新
        const result = await this.$api.roast(this.model.roast)
        if (result.success) {
          uni.$u.toast("发布成功!");
          uni.reLaunch({
            url: '/pages/list/list'
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
