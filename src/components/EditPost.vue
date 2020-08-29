<template>
  <div v-if="post.isShow">
    <h4>edit post</h4>
    <input type="text" placeholder="email" v-model="post.email" />
    <br />
    <input type="text" placeholder="title" v-model="post.title" />
    <br />
    <input type="text" placeholder="body" v-model="post.body" />
    <br />
    <button @click="$emit('isshow')">Save</button>
  </div>
</template>
<script>
export default {
  name: "Home",

  props: {
    post: {
      type: Object,
      required: true,
    }
  },
};
</script>
<style scoped>
</style>