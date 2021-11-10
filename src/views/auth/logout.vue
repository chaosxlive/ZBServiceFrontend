<template>
  <h1>正在登出</h1>
</template>

<script>
export default {
  name: "Auth Logout",
  beforeCreate() {
    if (this.$store.state.isAuth) {
      this.$store.dispatch("auth_logout");
    }
    this.$router.go(-1);
  }
};
</script>