<template>
  <div class="auth-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Auth"
};
</script>

<style scoped>
.auth-container {
  width: 100%;
  max-width: 1400px;
  padding-top: 1rem;
  padding-bottom: 2rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
}
</style>