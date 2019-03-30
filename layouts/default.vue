<template>
  <v-app>
    <v-navigation-drawer fixed app>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019 alias Winterguard Bonfire all right reserved.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: '메인',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: '소식',
          to: '/news'
        },
        {
          icon: 'bubble_chart',
          title: '지식',
          to: '/knowledge'
        },
        {
          icon: 'bubble_chart',
          title: '학습',
          to: '/learn'
        },
        {
          icon: 'bubble_chart',
          title: '일지',
          to: '/logbook'
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: '윈터가드 오두막'
    };
  }
};
</script>
