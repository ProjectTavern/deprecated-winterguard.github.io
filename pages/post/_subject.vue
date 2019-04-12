<template>
  <v-card>
    <div>{{ subject }}</div>
    <nuxt-child v-if="article"></nuxt-child>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex
          v-for="(articleItem, index) in articles"
          :key="index"
          :to="articleItem.to"
          router
          exact
          xs12
        >
          <v-card color="green" class="white--text">
            <v-layout>
              <v-flex xs2>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  height="125px"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs10>
                <v-card-title primary-title>
                  <div class="headline">{{ articleItem.title }}</div>
                  <span>
                    {{ articleItem.to }}
                  </span>
                </v-card-title>
              </v-flex>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          to: '2019-04-10-New-start',
          title: 'New-start'
        },
        {
          to: '2019-04-10-New-start',
          title: 'New-start'
        },
        {
          to: '2019-04-10-New-start',
          title: 'New-start'
        }
      ]
    };
  },
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
