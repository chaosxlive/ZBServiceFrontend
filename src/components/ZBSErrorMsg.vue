<template>
  <span class="error-msg">
    <slot>*</slot>
  </span>
</template>

<script>
export default {
  name: "ZBSErrorMsg",
};
</script>

<style scoped>
.error-msg {
  color: #ff0000;
}
</style>