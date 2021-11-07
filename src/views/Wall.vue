<template>
  <div class="wall">
    <div class="welcome">
      <h1>A wall</h1>
      <p>Here you can write anything!</p>
    </div>
    <PostForm @createPost="createPost($event)" />
    <Posts :posts="posts" />
    <div id="no-posts">
      <p v-if="!posts.length">There're no posts yet!</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.wall {
  .welcome {
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    font-size: 1.5rem;
    color: #ffc145;
  }
  #no-posts {
    color: #ffc145;
    display: flex;
    justify-content: center;
    font-size: 2.4rem;
    margin-top: 12rem;
  }
}
</style>
<script>
import Posts from "@/components/Posts";
import PostForm from "@/components/PostForm";
import axios from "axios";

export default {
  components: {
    Posts,
    PostForm,
  },
  data() {
    return {
      posts: [
        // {username: "Andrey", date: new Date(), message: "Hello"},
        // {username: "Nastya", date: new Date(), message: "How are you?"},
        // {username: "Vadim", date: new Date(), message: "Where am I?"},
      ],
    };
  },
  async mounted() {
    const response = await axios.get(
      "https://rocky-sands-62747.herokuapp.com/posts"
    );
    this.posts = response.data.results;
  },
  methods: {
    async createPost(post) {
      this.posts.unshift(post);
      await axios.post("https://rocky-sands-62747.herokuapp.com/posts", post);
    },
  },
};
</script>
