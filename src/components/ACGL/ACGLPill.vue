<template>
  <ul class="pill-list list-unstyled m-0 d-flex">
    <li class="pill-list-item" v-for="item in items" :key="item.uuid">
      <router-link :to="{}">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ACGLPill",
  props: {
    items:{
      type: Array,
      default: null
    },
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
a {
  margin-left: 0.4rem;
  border: 1px solid #000;
  border-radius: 2rem;
  padding: 4px 10px;
  font-size: 14px;
  text-decoration: none;
}
</style>