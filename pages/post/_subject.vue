<template>
  <v-list v-if="!articleData" three-line>
    <template v-for="(article, index) in articles">
      <v-list-tile :key="index" ripple avatar :to="'news/' + article.to">
        <v-list-tile-avatar>
          <img :src="article.avatar" />
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="article.title"></v-list-tile-title>
          <v-list-tile-sub-title
            v-html="article.subtitle"
          ></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider
        v-if="index + 1 < articles.length"
        :key="`divider-${index}`"
      ></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      articles: [
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
    articleData() {
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
