<template>
  <div class="form-wrapper">
    <form @submit.prevent="createPost()">
      <div class="nickname">
        <input
          v-model="username"
          type="text"
          required
          id="username"
          placeholder="Username"
        />
      </div>
      <div class="text">
        <textarea
          v-model="message"
          type="text"
          required
          id="message"
          placeholder="Enter your message here..."
        />
      </div>
      <input type="submit" class="submit-button" value="Submit" />
    </form>
  </div>
</template>
<style lang="less" scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  input {
    margin-bottom: 1rem;
    outline: none;
    background-color: #fffffb;
    border: none;
    border-radius: 0.2rem;
    padding: 0.2rem;
  }
  textarea {
    margin-bottom: 1rem;
    background-color: #fffffb;
    border: none;
    border-radius: 0.2rem;
    padding: 0.2rem;
    outline: none;
  }
  form {
    .submit-button {
      padding: 1rem;
      border: none;
      border-radius: 0.8rem;
      background-color: #4c4f69;
      color: #ffc145;
      font-weight: 600;
      font-size: 1rem;
      margin-left: 2rem;
      cursor: pointer;
      &:hover {
        background-color: #ffc145;
        color: #4c4f69;
      }
    }
  }
}
</style>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  data() {
    return {
      username: "",
      message: "",
    };
  },
  methods: {
    createPost() {
      this.$emit("createPost", {
        username: this.username,
        message: this.message,
        date: new Date(),
      });
    },
  },
});
</script>
