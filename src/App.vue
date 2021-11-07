<template>
  <!-- <router-view /> -->
  <Wall />
</template>
<script>
import Wall from "@/views/Wall";
export default {
  components: {
    Wall,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
