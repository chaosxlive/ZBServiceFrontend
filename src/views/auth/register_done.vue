<template>
  <div class="auth-register-done-container">
    <h1 class="my-2">註冊完成</h1>
    <p>
      您的帳號已註冊完畢，請前往
      <router-link :to="{ name: 'AuthLogin' }">登入頁面</router-link>
      進行登入。
    </p>
  </div>
</template>

<script>
export default {
  name: "Auth RegisterDone",
  methods: {}
};
</script>

<style scoped>
.auth-register-done-container {
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