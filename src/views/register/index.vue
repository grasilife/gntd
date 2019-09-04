<template>
  <div class="contain">
    <div class="loginCenter">
      <div class="title">
        视频监控平台
        <!-- <img class="titleLogin" src="@/assets/video.png" alt /> -->
      </div>
      <div class="loginFromContain">
        <div class="infoImg"></div>
        <div class="formContain">
          <div class="fromTitle">注册</div>
          <div class="formLogin">
            <div class="form">
              <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
                <div class="formList">
                  <FormItem prop="account">
                    <Input
                      type="text"
                      ref="account"
                      v-model="formCustom.account"
                      placeholder="请输入账号"
                    />
                  </FormItem>
                </div>
                <div class="formList">
                  <FormItem prop="email">
                    <Input
                      type="email"
                      ref="email"
                      v-model="formCustom.email"
                      placeholder="请输入邮箱"
                    />
                  </FormItem>
                </div>
                <div class="formList">
                  <FormItem prop="passwd">
                    <Input
                      type="password"
                      ref="passwd"
                      v-model="formCustom.passwd"
                      placeholder="请输入密码"
                    />
                  </FormItem>
                </div>
                <div class="formList">
                  <FormItem prop="verifyPasswd">
                    <Input
                      type="password"
                      ref="verifyPasswd"
                      v-model="formCustom.verifyPasswd"
                      placeholder="请再次输入密码"
                      @keyup.native="checkCapslock"
                      @blur="capsTooltip = false"
                      @keyup.enter.native="handleSubmit('formCustom')"
                    />
                  </FormItem>
                </div>
                <div class="formList1">
                  <FormItem>
                    <Button
                      type="primary"
                      :loading="loading"
                      @click="handleSubmit('formCustom')"
                      long
                      >注册</Button
                    >
                  </FormItem>
                </div>
                <div class="formList1">
                  <div class="text">
                    已经拥有账户?
                  </div>
                  <div class="textA" @click="login">点击登录</div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validatePassCheck = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码长度不正确,最少6位数"));
      } else {
        callback();
      }
    };
    const verifyPasswdCheck = (rule, value, callback) => {
      let passwdValue = this.$refs.passwd.value;
      if (value != passwdValue) {
        callback(new Error("两次输入的密码不一致,请重新输入"));
      } else {
        callback();
      }
    };
    return {
      capsTooltip: false,
      single: false,
      loading: false,
      formCustom: {
        account: "",
        email: "",
        passwd: "",
        verifyPasswd: ""
      },
      ruleCustom: {
        account: [{ required: true, message: "请输入账户", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        passwd: [
          {
            validator: validatePassCheck,
            trigger: "blur"
          }
        ],
        verifyPasswd: [
          {
            validator: verifyPasswdCheck,
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {},
  created() {},
  methods: {
    login() {
      this.$router.push("/login");
    },
    handleLogin() {
      this.$router.push({ path: this.redirect || "/ownData" });
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (
          (shiftKey && (key >= "a" && key <= "z")) ||
          (!shiftKey && (key >= "A" && key <= "Z"))
        ) {
          this.capsTooltip = true;
        } else {
          this.capsTooltip = false;
        }
      }
      if (key === "CapsLock" && this.capsTooltip === true) {
        this.capsTooltip = false;
      }
    },
    handleSubmit(name) {
      var thisp = this;
      console.log(name);
      //   thisp.$router.push("/");
      this.$refs[name].validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("page/login/login", {
              userName: this.formCustom.account,
              userPwd: this.formCustom.passwd,
              vue: this
            })
            .then(function(data) {
              if (data.code == 200) {
                if (data.status == "success") {
                  thisp.loading = false;
                  //   sessionStorage.setItem(
                  //     "userName",
                  //     JSON.stringify(data.content)
                  //   );
                  thisp.$router.push("/home");
                } else {
                  thisp.$Message.error(data.message);
                }
              } else {
                thisp.loading = false;
                thisp.$Message.error(data.message);
              }
            })
            .catch(() => {
              thisp.loading = false;
            });
        } else {
          console.log("错误提交!!");
          return false;
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.formCustom.account === "") {
        this.$refs.account.focus();
      } else if (this.formCustom.email === "") {
        this.$refs.email.focus();
      } else if (this.formCustom.passwd === "") {
        this.$refs.passwd.focus();
      } else {
        this.$refs.verifyPasswd.focus();
      }
    });
  }
};
</script>

<style scoped>
.contain {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(0, 82, 204, 1) 10%,
    rgba(38, 132, 255, 1) 90%
  );
}

.loginCenter {
  width: 800px;
  height: 620px;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
}
.infoImg {
  width: 60%;
  height: 100%;
  transform: scale(1);
  float: left;
  /* background: url("../../assets/video.svg") no-repeat; */
  background-position: 50% 50%;
}
.formContain {
  width: 40%;
  height: 100%;
  float: left;
  background: #fff;
}
.title {
  height: 200px;
  width: 100%;
  float: left;
  font-size: 36px;
  color: #fff;
  line-height: 100px;
  text-align: center;
}
.titleLogin {
  width: 500px;
  height: 50px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.loginFromContain {
  height: 450px;
  width: 100%;
  float: left;
  /* background: linear-gradient(
    0deg,
    rgba(0, 82, 204, 1) 100%,
    rgba(38, 132, 255, 1) 0%
  ); */
  background: linear-gradient(
    0deg,
    rgba(38, 132, 255, 1) 20%,
    rgba(0, 82, 204, 1) 80%
  );
}
.fromTitle {
  width: 100%;
  height: 75px;
  font-size: 24px;
  color: #40a9ff;
  line-height: 75px;
  text-align: center;
  float: left;
}
.formLogin {
  width: 100%;
  height: calc(100% - 130px);
  float: left;
  padding: 0px 30px 30px 30px;
}

.form {
  margin: 20px 0px 0px 0px;
}

.formList {
  height: 60px;
}

.formList1 {
  height: 30px;
  margin-bottom: 10px;
  margin-top: 24px;
}

.formList1 .autoLogin {
  display: inline-block;
  width: 50%;
}

.formList1 .forget {
  display: inline-block;
  width: 50%;
  text-align: right;
  height: 30px;
  line-height: 30px;
}

.formList1 .text {
  width: 50%;
  text-align: right;
  display: inline-block;
  padding-right: 10px;
  height: 30px;
  line-height: 30px;
}
.formList1 .textA {
  width: 50%;
  text-align: left;
  display: inline-block;
  padding-right: 10px;
  height: 30px;
  line-height: 30px;
  color: #40a9ff;
  cursor: pointer;
}
</style>
