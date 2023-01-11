<template>
  <div class="post">
    <div class="date">{{ moment(post.created_at, "DD.MM.YYYY hh:mm") }}</div>
    <div class="username">{{ post.username }}</div>
    <div class="text">{{ post.message }}</div>
  </div>
</template>

<style lang="less" scoped>
.post {
  border: solid 2px #4c4f69;
  background-color: #4c4f69;
  border-radius: 0.8rem;
  color: #ffc145;
  margin-bottom: 2rem;
  padding: 1rem;
  line-height: 1.5rem;
  font-size: 1.2rem;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  .date {
    text-align: right;
  }
  .username {
    font-weight: 600;
  }
}
</style>
<script>
import { defineComponent } from "@vue/composition-api";
import moment from "moment";

export default defineComponent({
  props: {
    post: Object,
  },
  methods: {
    moment(date, format) {
      return moment(date).format(format);
    },
  },
});
</script>
