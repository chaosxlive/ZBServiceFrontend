<template>
  <div class="w-100 m-4 p-2">
    <div class="d-flex justify-content-center align-items-center">
      <Spin :size="size"></Spin>
    </div>
  </div>
</template>

<script>
import { Spin } from "ant-design-vue";

export default {
  name: "ZBSLoading",
  props: {
    size: {
      type: String,
      default: "default"
    },
  },
  components: {
    Spin
  }
};
</script>