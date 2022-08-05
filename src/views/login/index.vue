<template>
  <div class="login-container">
    <div class="form-bagcolor">
      <div class="form-img">
        <img
          src="http://likede2-admin.itheima.net/img/logo.595745bd.png"
          alt=""
        />
      </div>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- admin -->
        <el-form-item prop="pass">
          <el-input v-model="ruleForm.pass" placeholder="admin">
            <i slot="prefix" class="el-input__icon el-icon-mobile-phone" />
          </el-input>
        </el-form-item>
        <!-- password -->
        <el-form-item prop="checkPass">
          <el-input
            ref="paw"
            v-model="ruleForm.checkPass"
            type="password"
            placeholder="请输入密码"
          >
            <i slot="prefix" class="el-input__icon el-icon-lock" />
            <!--闭眼  -->
            <i
              slot="suffix"
              class="iconfont icon-yanjing_bi el-input__icon el-icon-view"
              v-if="isShow"
              @click="isShowFn"
            />
            <!-- 睁眼 -->
            <i
              slot="suffix"
              class="el-input__icon el-icon-view"
              v-else
              @click="isShowFn"
            />
          </el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="verificationCode">
          <el-input
            v-model="ruleForm.verificationCode"
            placeholder="请输入验证码"
            suffix-icon=""
          >
            <i
              slot="prefix"
              class="iconfont icon-anquanzhongxin el-input__icon el-icon-lock"
            />
            <i slot="suffix"><img :src="imgUrl" @click="changeImg" /></i>
          </el-input>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import URL from '@/utils/url'
import { imageCode } from '@/api/user'
import { createNamespacedHelpers } from 'vuex'
const { mapActions: mapUserActions, mapMutations: mapUserMutations } =
  createNamespacedHelpers('user')
export default {
  data() {
    return {
      url: URL,
      isShow: false,
      imgUrl: '',
      clientToken: Number,
      ruleForm: {
        pass: 'admin',
        checkPass: 'admin',
        verificationCode: ''
      },
      rules: {
        pass: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: '4到16位字母,数字,下划线,减号',
            trigger: 'blur'
          }
        ],
        checkPass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        verificationCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.imageCodeFn()
  },
  methods: {
    ...mapUserActions(['getLoginList', 'getclientToken']),
    // 登录
    async submitForm() {
      try {
        await this.$refs.ruleForm.validate()
        await this.getLoginList(this.ruleForm, this.clientToken)
      } catch (error) {
        this.imageCodeFn()
        console.log(error)
      }
    },
    // 图片验证码
    async imageCodeFn() {
      this.clientToken = Math.random()
      this.getclientToken(this.clientToken)
      const res = await imageCode(this.clientToken)
      this.imgUrl = res.request.responseURL
    },
    isShowFn() {
      // console.log(this.$refs["paw"]);
      // this.$refs["paw"].$store.commit("boundCommit", 'text');
      // function boundCommit(type, payload, options) {
      //   return commit.call(store, type, payload, options);
      // }
      // console.log(this.$refs["paw"]._props.showPassword);
      this.isShow = !this.isShow
    },
    changeImg() {
      this.imageCodeFn()
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  position: relative;
  min-height: 100%;
  min-width: 100%;
  background-image: url('http://likede2-admin.itheima.net/img/background.be4fae7d.png');
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  .form-bagcolor {
    width: 518px;
    height: 388px;
    padding: 76px 35px 0;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
}
::v-deep .el-form-item__content {
  margin-left: 0 !important;
}
::v-deep .el-input__inner {
  height: 52px;
}
::v-deep .el-input__inner {
  padding: 12px 5px 12px 40px;
}
::v-deep .el-button--primary {
  width: 100%;
  height: 52px;
  background: linear-gradient(262deg, #2e50e1, #6878f0);
  opacity: 0.91;
  border-color: #6878f0;
  border-radius: 8px;
}
::v-deep .el-input__icon {
  width: 34px;
  padding-top: 5px;
}
::v-deep .el-input__suffix {
  top: 1px;
  right: 1px;
}
.form-img {
  width: 96px;
  height: 96px;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translate(-50%);
  img {
    width: 100%;
  }
}
</style>
