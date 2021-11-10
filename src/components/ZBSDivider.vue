<template>
  <div :style="getStyle"></div>
</template>

<script>
export default {
  name: "ZBSDivider",
  props: {
    length: {
      type: String,
      default: "100%"
    },
    dirX: {
      type: Boolean,
      default: true
    },
    borderSize: {
      type: String,
      default: "1px"
    },
    color: {
      type: String,
      default: "#000"
    }
  },
  computed: {
    getStyle() {
      var result = {};

      if (this.dirX) {
        result.width = this.length;
        result.height = '1px';
        result.borderTop = `${this.borderSize} solid ${this.color}`;
      } else {
        result.width = '1px';
        result.height = this.length;
        result.borderLeft = `${this.borderSize} solid ${this.color}`;
      }

      return result;
    }
  }
};
</script>

<style scoped>
</style>
