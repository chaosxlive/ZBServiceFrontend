<template>
  <div class="list-item">
    <router-link
      :to="{ name: 'ACGLAnimeDetail', params: { uuid } }"
      class="p-3 h-100 text-decoration-none"
    >
      <div class="img-box">
        <img class="poster" :src="cover_url" alt="" />
      </div>
      <div class="misc">
        <div class="misc-name ellipsible">{{ name }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ACGLBoxItem",
  props: ["name", "cover_url", "uuid"]
};
</script>

<style scoped>
.list-item {
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 4px 4px #ccc;
  transition: all 0.25s ease-out;
}

.list-item:hover {
  box-shadow: 10px 1px 8px 8px #ccc;
}

.list-item .img-box {
  height: 280px;
  max-height: 280px;
  min-height: 280px;
  display: flex;
  justify-content: center;
}

.list-item .img-box img {
  max-width: 100%;
  max-height: 280px;
}

.list-item .misc {
  margin-top: 0.5rem;
}

.list-item .misc .misc-name {
  max-height: 110px;
  color: #888;
  font-size: 1.2rem;
  text-align: center;
  transition: all 0.25s ease-out;
}

.list-item a:hover {
  background-color: #ffffff33;
}

.list-item a:hover .misc .misc-name {
  color: #111;
}
</style>
