<template>
  <div class="auth-login-container">
    <h1 class="my-2">登入</h1>
    <form id="login-form" method="post" class="w-75">
      <div class="my-2 d-flex flex-column">
        <ZBSErrorMsg v-for="err in login_form.errors" :key="err">
          <ZBSErrorMsg></ZBSErrorMsg>{{ err }}
        </ZBSErrorMsg>
      </div>
      <div class="my-2 d-flex flex-column">
        <label style="color: #888" for="login_username"> 使用者帳號 </label>
        <Input v-model:value="login_form.username" id="login_username"></Input>
      </div>
      <div class="my-2 d-flex flex-column">
        <label style="color: #888" for="id_password"> 密碼 </label>
        <InputPassword
          v-model:value="login_form.password"
          id="login_password"
        ></InputPassword>
      </div>
      <div class="my-4 d-flex flex-column align-items-center">
        <Button
          type="primary"
          html-type="submit"
          block
          :loading="login_form.isWaiting"
          @click.prevent="loginFormSubmit"
        >
          登入
        </Button>
        <div class="ms-2 mt-3 text-center">
          沒有會員?&nbsp;
          <router-link :to="{ name: 'AuthRegister' }"> 點此註冊 </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ZBSErrorMsg from "@/components/ZBSErrorMsg";
import { BACKEND_URL } from "@/zbs-config";
import { Button, Input, InputPassword } from "ant-design-vue";

export default {
  components: {
    ZBSErrorMsg,
    Button,
    Input,
    InputPassword
  },
  name: "Auth Login",
  data() {
    return {
      login_form: {
        isWaiting: false,
        username: "",
        password: "",
        errors: []
      }
    };
  },
  methods: {
    loginFormSubmit() {
      this.login_form.isWaiting = true;
      this.login_form.errors = [];

      this.$store
        .dispatch("auth_login", {
          app: this,
          url: BACKEND_URL.APIS.AUTHS.LOGIN,
          username: this.login_form.username,
          password: this.login_form.password
        })
        .then(res => {
          this.login_form.isWaiting = false;
          if (res) {
            this.$router.push({ name: "Home" });
          }
          return res;
        });
    }
  },
  beforeCreate(){
    if(this.$store.state.isAuth){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.auth-login-container {
  width: 700px;
  border: 1px solid #000;
  border-radius: 2rem;
  box-shadow: 3px 1px 2px #888;
  padding: 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>