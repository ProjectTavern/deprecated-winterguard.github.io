<template>
  <v-flex>
    {{ subject }}
    <nuxt-child></nuxt-child>
  </v-flex>
</template>

<script>
export default {
  computed: {
    subject() {
      return this.$route.params.subject;
    }
  }
};
</script>
