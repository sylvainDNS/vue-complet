<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline" v-html="post.title.rendered"></div>
          <span v-html="summary"></span>
        </div>
        <v-card-actions
          ><span class="grey--text">Il y a {{ timeSpent }} ({{ date }})</span>
          <v-btn :to="path" class="text-md-right read-more" color="info"
            >Lire plus</v-btn
          >
        </v-card-actions>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import moment from 'moment'
moment.locale('fr')

export default {
  props: {
    post: Object,
  },
  computed: {
    date: function() {
      return moment(this.post.date).format('Do MMMM YYYY')
    },
    path: function() {
      return '/' + this.getDomainRoot(this.post.link) + '/' + this.post.id
    },
    summary: function() {
      return (
        this.post.content.rendered
          .split(' ')
          .slice(0, 30)
          .join(' ') + '...'
      )
    },
    timeSpent: function() {
      return moment(this.post.date).fromNow(true)
    },
  },
  methods: {
    getDomainRoot(str) {
      return str.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0]
    },
  },
}
</script>

<style scoped>
.read-more {
  position: absolute;
  right: 8px;
}
</style>
