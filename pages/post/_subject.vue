<template>
  <v-list v-if="!article" three-line>
    <div @click="test()">타ㅌ이타이스</div>
    <template v-for="(post, index) in posts">
      <v-list-tile :key="index" ripple avatar :to="subject + '/' + post.to">
        <v-list-tile-avatar>
          <img :src="post.avatar" />
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="post.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="post.date"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider
        v-if="index + 1 < posts.length"
        :key="`divider-${index}`"
      ></v-divider>
    </template>
  </v-list>
  <NuxtChild v-else></NuxtChild>
</template>

<script>
export default {
  data() {
    const subjects = this.$store.state.blog.subjects;
    const currentSubject = this.$route.params.subject;

    const currentPostsIndex = Object.keys(subjects).filter(
      key => key.indexOf(currentSubject) > 0
    )[0];

    return {
      posts: subjects[currentPostsIndex]
    };
  },
  computed: {
    subject() {
      return this.$route.params.subject;
    },
    article() {
      return this.$route.params.article;
    }
  },
  methods: {
    test() {
      console.log(0);
    }
  }
};
</script>
