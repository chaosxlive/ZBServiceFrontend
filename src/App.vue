<template>
  <ZBSHeader></ZBSHeader>
  <div class="app-container">
    <router-view />
  </div>
  <ZBSFooter></ZBSFooter>
</template>

<script>
import ZBSHeader from "@/components/layouts/ZBSHeader.vue";
import ZBSFooter from "@/components/layouts/ZBSFooter.vue";

export default {
  name: "Home",
  components: {
    ZBSHeader,
    ZBSFooter
  }
};
</script>

<style>
.app-container{
  min-height: 100vh;
  width: 100%;
}
</style>
