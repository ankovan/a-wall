<template>
  <div class="posts">
    <div class="post" v-for="(post, key) in posts" :key="key">
      <Post :post="post" />
    </div>
  </div>
</template>
<style lang="less" scoped></style>
<script>
import Post from "@/components/Post";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    posts: Array,
  },
  components: {
    Post,
  },
});
</script>
