<template>
  <div class="auth-register-container">
    <h1 class="my-2">註冊</h1>
    <form id="register-form" method="post" class="w-75">
      <div class="my-2 d-flex flex-column">
        <ZBSErrorMsg v-for="err in register_form.errors" :key="err">
          <ZBSErrorMsg></ZBSErrorMsg>{{ err }}
        </ZBSErrorMsg>
      </div>
      <div class="my-2 d-flex flex-column">
        <label style="color: #888" for="register_username">
          使用者帳號&nbsp;<ZBSErrorMsg></ZBSErrorMsg>
        </label>
        <Input
          v-model:value="register_form.username"
          id="register_username"
        ></Input>
        <ZBSTinyMsg>必填。至多150字元。可使用英數字母及 _</ZBSTinyMsg>
      </div>
      <div class="my-2 d-flex flex-column">
        <label style="color: #888" for="id_email">
          電子郵件&nbsp;<ZBSErrorMsg></ZBSErrorMsg>
        </label>
        <Input v-model:value="register_form.email" id="register_email"></Input>
        <ZBSTinyMsg>必填。請使用正確格式</ZBSTinyMsg>
      </div>
      <div class="my-2 d-flex">
        <div class="me-1 flex-fill">
          <label style="color: #888" for="id_last_name" class="me-2">
            姓氏
          </label>
          <Input
            v-model:value="register_form.last_name"
            id="register_last_name"
          ></Input>
        </div>
        <div class="ms-3 flex-fill">
          <label style="color: #888" for="id_first_name" class="me-2">
            名字
          </label>
          <Input
            v-model:value="register_form.first_name"
            id="register_first_name"
          ></Input>
        </div>
      </div>
      <div class="my-2 d-flex flex-column">
        <label style="color: #888" for="id_password">
          密碼&nbsp;<ZBSErrorMsg></ZBSErrorMsg>
        </label>
        <InputPassword
          v-model:value="register_form.password"
          id="register_password"
        ></InputPassword>
        <ZBSTinyMsg>
          <div>必須填寫至少8個英數字母並至少使用1個非數字字母</div>
          <!-- <div>不可與個人資料過於相似或是使用常見密碼</div> -->
        </ZBSTinyMsg>
      </div>
      <div class="my-2 d-flex flex-column">
        <label style="color: #888" for="id_password_confirm">
          確認密碼&nbsp;<ZBSErrorMsg></ZBSErrorMsg>
        </label>
        <InputPassword
          v-model:value="register_form.password_confirm"
          id="register_password_confirm"
          required="required"
        ></InputPassword>
      </div>
      <div class="mt-4 d-flex flex-column align-items-center">
        <Button
          type="primary"
          block
          :loading="register_form.isWaiting"
          @click.prevent="registerFormSubmit"
        >
          註冊
        </Button>
        <div class="ms-2 mt-3 text-center">
          已經有帳號了?&nbsp;
          <router-link :to="{ name: 'AuthLogin' }"> 點此登入 </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ZBSErrorMsg from "@/components/ZBSErrorMsg";
import ZBSTinyMsg from "@/components/ZBSTinyMsg";
import { BACKEND_URL } from "@/zbs-config";
import { Button, Input, InputPassword } from "ant-design-vue";

export default {
  components: {
    ZBSErrorMsg,
    ZBSTinyMsg,
    Button,
    Input,
    InputPassword
  },
  name: "Auth Register",
  data() {
    return {
      register_form: {
        isWaiting: false,
        username: "",
        email: "",
        last_name: "",
        first_name: "",
        password: "",
        password_confirm: "",
        errors: [],
        validators: {
          name: new RegExp("^[_a-zA-Z0-9]+$"),
          email: new RegExp(
            '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$'
          ),
          password: new RegExp("^(?=.*[a-zA-Z].*)[_a-zA-Z0-9]+$")
        }
      }
    };
  },
  methods: {
    registerFormSubmit() {
      this.register_form.isWaiting = true;
      this.register_form.errors = [];
      if (
        !this.register_form.validators.name.test(this.register_form.username) ||
        this.register_form.username.length > 150
      ) {
        this.register_form.errors.push("使用者帳號格式不符合");
      }

      if (!this.register_form.validators.email.test(this.register_form.email)) {
        this.register_form.errors.push("電子郵件格式不符合");
      }

      if (this.register_form.password !== this.register_form.password_confirm) {
        this.register_form.errors.push("兩次輸入的密碼不一致");
      }

      if (
        !this.register_form.validators.password.test(
          this.register_form.password
        ) ||
        this.register_form.password.length < 8
      ) {
        this.register_form.errors.push("密碼格式不符合");
      }

      if (this.register_form.errors.length > 0) {
        this.register_form.isWaiting = false;
        return false;
      }

      this.$http
        .post(BACKEND_URL.APIS.AUTHS.REGISTER, {
          username: this.register_form.username,
          password: this.register_form.password,
          email: this.register_form.email,
          first_name: this.register_form.first_name,
          last_name: this.register_form.last_name
        })
        .then(
          response => {
            if (response.status == 200) {
              this.$router.push({ name: "AuthRegisterDone" });
            }
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
      this.register_form.isWaiting = false;
    }
  }
};
</script>

<style scoped>
.auth-register-container {
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