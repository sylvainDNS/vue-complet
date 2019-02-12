<template>
  <div>
    <v-flex>
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </v-flex>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
export default {
  name: 'post',
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
    }
  },
  created() {
    fetch('http://www.madeinblue.com/wp-json/wp/v2/posts')
      .then((resp) => resp.json())
      .then((data) => {
        this.posts = data
      })
  },
}
</script>
