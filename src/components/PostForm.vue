<template>
  <div class="form-wrapper">
    <form @submit.prevent="createPost()">
      <div class="nickname paragraph">
        <div class="labels">
          <span>Username</span>
        </div>
        <input v-model="username" type="text" required id="username" />
      </div>
      <div class="text paragraph">
        <div class="labels">
          <span>Message</span>
        </div>
        <textarea v-model="message" type="text" required id="message" />
      </div>
      <div id="button-wrapper">
        <input
          :disabled="disabled"
          type="submit"
          class="submit-button"
          value="Submit"
        />
      </div>
    </form>
  </div>
</template>
<style lang="less" scoped>
.form-wrapper {
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: #4c4f69;
  min-width: 200px;
  width: 16.6666%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
  border: none;
  color: #ffc145;
  .paragraph {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  #button-wrapper {
    display: flex;
    justify-content: center;
  }
  .labels {
    font-weight: 600;
    margin-bottom: 0.4rem;
  }
  #username {
    margin-bottom: 1rem;
    outline: none;
    background-color: #35384b;
    color: #ffc145;
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }
  textarea {
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: #35384b;
    border: none;
    color: #ffc145;
    border-radius: 0.2rem;
    outline: none;
    height: 3rem;
    width: 100%;
    box-sizing: border-box;
    height: 5rem;
  }
  form {
    .submit-button {
      padding: 1rem;
      border: none;
      border-radius: 0.8rem;
      background-color: #5b5f97;
      color: #ffc145;
      font-weight: 600;
      font-size: 1rem;
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
  props: {
    disabled: Boolean,
  },
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
