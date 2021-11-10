<template>
  <div class="acgl-anime-container">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ACGL Anime",
};
</script>

<style scoped>
.acgl-anime-container {
  width: 100%;
  max-width: 1400px;
  padding-top: 1rem;
  padding-bottom: 2rem;
  margin: 1rem auto;
}
</style>