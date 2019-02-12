<template>
  <v-container>
    <div v-if="isFetched">
      <span v-html="post.content.rendered"></span>
      <v-fab-transition>
        <v-btn
          v-on:click.native="goBack()"
          color="info"
          dark
          bottom
          left
          fab
          flat
        >
          <v-icon>arrow_back</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
    <div v-else class="text-xs-center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="info"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<script>
import { fetchWp } from '../services/apiService'

export default {
  name: 'post',
  data() {
    return {
      isFetched: false,
      post: [],
    }
  },
  created() {
    fetchWp(this.$route.params.wp, this.$route.params.id)
      .then((data) => (this.post = data))
      .then(() => {
        this.isFetched = true
      })
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
}
</script>
