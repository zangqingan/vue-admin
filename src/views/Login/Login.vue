<template>
  <div class="login-container ">
    <ul class="login-type">
      <li
        :class="{ current: item.isActive }"
        v-for="item in loginType"
        :key="item.id"
        @click="changeCurrent(item)"
      >
        {{ item.text }}
      </li>
    </ul>
    <div class="login-card">
      <el-form
        @submit.native.prevent="login"
        :model="ruleForm"
        :rules="rules"
        status-icon
        class="demo-ruleForm"
        ref="ruleForm"
      >
        <el-form-item label="邮箱" prop="username" class="form-item">
          <el-input type="email" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" class="form-item">
          <el-input
            type="password"
            v-model="ruleForm.password"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="checkpass"
          class="form-item"
          v-if="this.modelType === 'register'"
        >
          <el-input
            type="password"
            v-model="ruleForm.checkpass"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="验证码"
          style="display: flex; margin-top:15px"
          class="form-item"
          prop="code"
        >
          <el-row :gutter="24">
            <el-col :span="21">
              <el-input
                type="password"
                v-model="ruleForm.code"
                minlength="6"
                maxlength="6"
              ></el-input>
            </el-col>
            <el-col :span="3">
              <el-button
                type="success"
                native-type="submit"
                style="display: block;margin-left:-10px;"
              >
                获取验证码
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="form-item">
          <el-button
            type="primary"
            native-type="submit"
            style="display: block;width:100%;margin-top:30px;"
          >
            登陆
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入验证模块
import {
  stripscript,
  validateEmail,
  validatePass,
  validateCode
} from "@/utils/validate";
export default {
  name: "login",
  data() {
    // 验证用户名
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱地址"));
      } else if (validateEmail(value)) {
        callback(new Error("请输入正确的邮箱格式"));
      } else {
        callback();
      }
    };
    //验证用户密码
    var validatePassword = (rule, value, callback) => {
      this.ruleForm.password = stripscript(value);
      value = this.ruleForm.password;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (validatePass(value)) {
        callback(new Error("密码是6-20位的数字或字母"));
      } else {
        callback();
      }
    };
    //再次验证密码
    var validatecheckPass = (rule, value, callback) => {
      this.ruleForm.checkpass = stripscript(value);
      value = this.ruleForm.checkpass;
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != this.ruleForm.password) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    // 验证验证码
    var checkCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else if (validateCode(value)) {
        callback(new Error("密码是6位的数字或字母"));
      } else {
        callback();
      }
    };
    return {
      loginType: [
        { text: "登陆", type: "login", isActive: true },
        { text: "注册", type: "register", isActive: false }
      ],
      modelType: "login",
      // 输入框验证
      ruleForm: {
        username: "",
        password: "",
        checkpass: "",
        code: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        checkpass: [{ validator: validatecheckPass, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    changeCurrent(item) {
      //点击切换loginType时添加current类
      this.loginType.forEach(elem => {
        elem.isActive = false;
      });
      item.isActive = !item.isActive;
      // 修改model
      this.modelType = item.type;
    },
    login() {
      alert("hello");
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  height: 100vh;
  background-color: #344a5f;
}
.login-container {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.login-card {
  width: 450px;
  height: 400px;
  padding: 20px;
  background-color: #fff;
  .form-item {
    padding-bottom: 10px;
  }
}
.login-type {
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: #ffdddf;
  width: 300px;
  margin-bottom: -152px;
  background-color: #344a5f;
  cursor: pointer;
  li {
    width: 150px;
    height: 40px;
    line-height: 40px;
  }
  .current {
    background-color: aqua;
    border-radius: 2px;
  }
}
</style>
