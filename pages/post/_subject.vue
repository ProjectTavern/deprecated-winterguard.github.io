<template>
  <v-list v-if="!article" three-line>
    <template v-for="(post, index) in posts">
      <v-list-tile :key="index" ripple avatar :to="subject + '/' + post.to">
        <v-list-tile-avatar>
          <img :src="post.avatar" />
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="post.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="post.subtitle"></v-list-tile-sub-title>
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
    return {
      posts: [
        {
          to: '2019-04-10-New-start',
          title: '블로그를 새로 개장하는 중입니다.',
          subtitle:
            '블로그를 새로 개장하기 위해서는 어떤 것이 필요할까요? 구조를 어떻게 짜야할까요? 디자인은 어떻게 해야 좋을까요? 어떤 내용을 담으려고 하는 걸까요?'
        },
        {
          to: '2019-04-10-New-start',
          title: '블로그를 새로 개장하는 중입니다.',
          subtitle:
            '블로그를 새로 개장하기 위해서는 어떤 것이 필요할까요? 구조를 어떻게 짜야할까요? 디자인은 어떻게 해야 좋을까요? 어떤 내용을 담으려고 하는 걸까요?'
        },
        {
          to: '2019-04-10-New-start',
          title: '블로그를 새로 개장하는 중입니다.',
          subtitle:
            '블로그를 새로 개장하기 위해서는 어떤 것이 필요할까요? 구조를 어떻게 짜야할까요? 디자인은 어떻게 해야 좋을까요? 어떤 내용을 담으려고 하는 걸까요?'
        },
        {
          to: '2019-04-10-New-start',
          title: '블로그를 새로 개장하는 중입니다.',
          subtitle:
            '블로그를 새로 개장하기 위해서는 어떤 것이 필요할까요? 구조를 어떻게 짜야할까요? 디자인은 어떻게 해야 좋을까요? 어떤 내용을 담으려고 하는 걸까요?'
        },
        {
          to: '2019-04-10-New-start',
          title: '블로그를 새로 개장하는 중입니다.',
          subtitle:
            '블로그를 새로 개장하기 위해서는 어떤 것이 필요할까요? 구조를 어떻게 짜야할까요? 디자인은 어떻게 해야 좋을까요? 어떤 내용을 담으려고 하는 걸까요?'
        },
        {
          to: '2019-04-10-New-start',
          title: '블로그를 새로 개장하는 중입니다.',
          subtitle:
            '블로그를 새로 개장하기 위해서는 어떤 것이 필요할까요? 구조를 어떻게 짜야할까요? 디자인은 어떻게 해야 좋을까요? 어떤 내용을 담으려고 하는 걸까요?'
        },
        {
          to: '2019-04-10-New-start',
          title: '블로그를 새로 개장하는 중입니다.',
          subtitle:
            '블로그를 새로 개장하기 위해서는 어떤 것이 필요할까요? 구조를 어떻게 짜야할까요? 디자인은 어떻게 해야 좋을까요? 어떤 내용을 담으려고 하는 걸까요?'
        }
      ]
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
