<template>
  <div>
    <h1>Posts</h1>
    
    <input 
      type="text" 
      placeholder="email" 
      v-model="post.email" 
    />
    <br />
    
    <input 
      type="text" 
      placeholder="title" 
      v-model="post.title" 
    />
    <br />
    
    <input 
      type="text" 
      placeholder="body" 
      v-model="post.body" 
    />
    <br />

    <button @click="addPost">Send</button>
    <br />
    <br />
    <ul>
      <li v-for="(post, i) in posts" :key="i">
        <br />
        {{post.msg || post}}
        
        <button 
          v-if="!post.msg" 
          @click="post.isShow ? post.isShow = false : post.isShow = true" 
        >
          edit
        </button> 
        
        <button 
          v-if="!post.msg" 
          @click="deletePost(i)"
        >
          delete
        </button>
        
        <button 
          v-else 
          @click="deleteMsg(i)"
        >
          X
        </button>

        <EditPost 
          @isshow="post.isShow = false" 
          :post="post" 
        />
      </li>
    </ul>
  </div>
</template>
<script>

import EditPost from "./EditPost.vue"

export default {
  name: "Contacts",
  components: {
    EditPost
  },

  data() {
    return {
      url: "https://jsonplaceholder.typicode.com/",
      post: {
        email: "",
        title: "",
        body: "",
      },
      posts: [],
    };
  },
  methods: {
    addPost() {
      this.$http
        .post(`${this.url}posts`, this.post)
        .then((j) => j.json())
        .then((r) => {
          r.isShow = false
          this.posts.push(r)
        })
        .catch((e) => console.log(e));
    },

    deletePost(i) {
      this.$http
        .delete(`${this.url}posts/${i}`)
        .then((j) => {
          if (j.ok) this.posts.splice(i, 1, {msg:"Your post was successfully deleted"});
        })
        .catch((e) => console.log(e));
    },

    deleteMsg(i){
      this.posts.splice(i, 1)
    }

  },
};
</script>
<style scoped></style>