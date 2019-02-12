<template>
  <v-container
    ><span v-html="post.content.rendered"></span>
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
  </v-container>
</template>

<script>
export default {
  name: 'post',
  data() {
    return {
      post: [],
    }
  },
  created() {
    fetch(
      'http://' +
        this.$route.params.wp +
        '/wp-json/wp/v2/posts/' +
        this.$route.params.id
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.post = data
      })
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
}
</script>
