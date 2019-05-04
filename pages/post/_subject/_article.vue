<template>
  <div v-html="markdown"></div>
</template>

<script>
export default {
  computed: {
    markdown() {
      console.log('article:', this.$route.params.article);
      console.log('article:', this.$route.params.subject);
      // return require('~/static/post/logbook/2019-04-10-New-start.md');
      return '# Test';
    }
  }
};
</script>
