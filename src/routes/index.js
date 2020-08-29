import Home from '../components/Home.vue'
import Posts from '../components/Posts.vue'

export const routes = [
    {
        path: "", component: Home, name: "Home"
    },
    {
        path: "/posts", component: Posts, name: "Posts"
    }
]