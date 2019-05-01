<template>
  <v-system-bar window color="#fff" fixed app>
    <v-btn to="/" flat height="10" color="blue" small="true" style="margin:0">
      {{ commandCenter.title }}
    </v-btn>
    <v-icon></v-icon>
    <v-spacer></v-spacer>
    <v-icon>remove</v-icon>
    <v-icon>check_box_outline_blank</v-icon>
    <v-icon>close</v-icon>
  </v-system-bar>
</template>

<script>
export default {
  data() {
    return {
      commandCenter: {
        title: 'winterguard.github.io'
      }
    };
  }
};
</script>
