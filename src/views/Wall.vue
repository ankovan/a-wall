<template>
  <div class="wall">
    <div class="welcome">
      <h1>A wall</h1>
      <p>Here you can write anything!</p>
    </div>
    <PostForm
      :disabled="isLoading && isError"
      @createPost="createPost($event)"
    />
    <div id="error" class="notes" v-show="!isLoading && isError">
      <p>Server is not responding. Try later.</p>
    </div>
    <Posts :posts="posts" />
    <Loading v-show="isLoading" />
    <div id="no-posts" class="notes" v-show="!isLoading && !isError">
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
  .notes {
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
import Loading from "@/components/Loading";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default {
  components: {
    Posts,
    PostForm,
    Loading,
  },
  data() {
    return {
      posts: [
        // {username: "Andrey", date: new Date(), message: "Hello"},
        // {username: "Nastya", date: new Date(), message: "How are you?"},
        // {username: "Vadim", date: new Date(), message: "Where am I?"},
      ],
      isLoading: true,
      isError: false,
    };
  },
  async mounted() {
    try {
      let { data, error } = await supabase
        .from("posts")
        .select(`*`)
        .order("created_at", { ascending: false });
      if (error) {
        throw error;
      }
      this.posts = data;
    } catch (error) {
      this.isError = true;
    }
    this.isLoading = false;
  },
  methods: {
    async createPost(post) {
      this.posts.unshift(post);
      try {
        let { error } = await supabase.from("posts").insert({
          username: post.username,
          message: post.message,
        });
        if (error) {
          throw error;
        }
      } catch (error) {
        this.isError = true;
      }
    },
  },
};
</script>
