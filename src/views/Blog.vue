<template>
  <div>
    <v-flex>
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </v-flex>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
export default {
  components: {
    PostCard,
  },
  data() {
    return {
      posts: [],
      websites: [
        'www.madeinblue.com',
        'www.go-interim.fr',
        'www.laura-massis.com',
      ],
    }
  },
  created() {
    this.websites.map((site) =>
      fetch('http://' + site + '/wp-json/wp/v2/posts')
        .then((resp) => resp.json())
        .then((data) => {
          this.posts = this.posts.concat(data)
        })
    )
  },
}
</script>
