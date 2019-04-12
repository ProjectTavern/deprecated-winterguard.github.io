<template>
  <div v-html="markdown"></div>
</template>

<script>
export default {
  computed: {
    subject() {
      return this.$route.params.subject;
    },
    markdown() {
      return require('~/static/post/logbook/2019-04-10-New-start.md');
    }
  }
};
</script>
