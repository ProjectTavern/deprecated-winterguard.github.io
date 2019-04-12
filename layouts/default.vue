<template>
  <v-app>
    <v-navigation-drawer mobile-break-point="640" width="180" app>
      <v-list>
        <v-list-tile
          v-for="(subject, index) in subjects"
          :key="index"
          :to="subject.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ subject.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="subject.title" />
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
      subjects: [
        {
          icon: 'apps',
          title: '메인',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: '소식',
          to: '/post/news'
        },
        {
          icon: 'bubble_chart',
          title: '지식',
          to: '/post/knowledge'
        },
        {
          icon: 'bubble_chart',
          title: '학습',
          to: '/post/learn'
        },
        {
          icon: 'bubble_chart',
          title: '일지',
          to: '/post/logbook'
        },
        {
          icon: 'bubble_chart',
          title: '코드폴리오',
          to: '/post/codefolio'
        }
      ],
      fixed: true,
      title: '윈터가드 오두막'
    };
  }
};
</script>
