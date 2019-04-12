<template>
  <div>
    <div>{{ subject }}</div>
    <nuxt-child v-if="article"></nuxt-child>
    <ul v-else>
      <li>
        <a href="2019-04-10-New-start">블로그 일지를 시작합니다.</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    subject() {
      return this.$route.params.subject;
    },
    article() {
      return this.$route.params.article;
    }
  }
};
</script>
