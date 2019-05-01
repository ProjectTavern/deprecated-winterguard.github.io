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
// nuxt-child 로 사용하는 것이 낫지 않을까 ?
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
