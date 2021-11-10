<template>
  <span class="tiny-msg">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "ZBSTinyMsg",
};
</script>

<style scoped>
.tiny-msg {
  font-size: 8px;
}
</style>