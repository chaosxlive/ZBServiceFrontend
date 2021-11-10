<template>
  <div class="row mt-4 mb-2 text-center">
    <h1>
      <router-link :to="{ name: 'ACGLAnime' }" class="text-decoration-none"
        >動漫列表</router-link
      >
    </h1>
  </div>
  <div class="row list-items">
    <ACGLBoxItem
      v-for="anime_obj in anime"
      :name="anime_obj.anime_names[0].name"
      :cover_url="anime_obj.cover.link"
      :uuid="anime_obj.uuid"
      :key="anime_obj.uuid"
    ></ACGLBoxItem>
  </div>
</template>

<script>
import { BACKEND_URL } from "@/zbs-config";
import ACGLBoxItem from "@/components/ACGL/ACGLBoxItem.vue";

export default {
  name: "ACGL Anime Index",
  components: {
    ACGLBoxItem
  },
  data() {
    return {
      anime: []
    };
  },
  mounted() {
    this.$http
      .get(BACKEND_URL.APIS.ACGLS.ANIME, {
        params: {
          mode: "list"
        }
      })
      .then(response => {
        console.log(response);
        this.anime = response.data;
      });
  }
};
</script>

<style scoped>
.list-items {
  display: grid;
  gap: 1.6rem 0.5rem;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
}
</style>