<template>
  <v-app>
    <SystemBar></SystemBar>
    <NavigationDrawer></NavigationDrawer>
    <v-content>
      <nuxt />
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import SystemBar from '~/components/Layouts/SystemBar';
import NavigationDrawer from '~/components/Layouts/NavigationDrawer';
import Footer from '~/components/Layouts/Footer';

export default {
  components: {
    SystemBar,
    NavigationDrawer,
    Footer
  }
};
</script>
