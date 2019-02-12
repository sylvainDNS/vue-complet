<template>
  <div>
    <v-flex>
      <div v-if="isFetched">
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Rechercher"
          single-line
          hide-details
        ></v-text-field>
        <PostCard v-for="post in filteredPosts" :key="post.id" :post="post" />
      </div>
      <div v-else class="text-xs-center">
        <v-progress-circular
          :size="70"
          :width="7"
          color="info"
          indeterminate
        ></v-progress-circular>
      </div>
    </v-flex>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'

import { fetchWp } from '../services/apiService'

export default {
  components: {
    PostCard,
  },
  data() {
    return {
      search: '',
      posts: [],
      isFetched: false,
      websites: [
        'www.madeinblue.com',
        'www.go-interim.fr',
        'www.laura-massis.com',
      ],
    }
  },
  created() {
    this.websites.map((site, index) =>
      fetchWp(site, '')
        .then((data) => (this.posts = this.posts.concat(data)))
        .then(() => {
          if (index + 1 === this.websites.length) {
            this.isFetched = true
          }
        })
    )
  },
  computed: {
    filteredPosts() {
      return this.posts.filter((post) => {
        return post.title.rendered
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    },
  },
}
</script>
