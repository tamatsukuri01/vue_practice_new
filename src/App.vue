<template>
  <v-app>
    <v-app-bar app >
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-app-bar-title>
        マイアドレス帳
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <SideNav/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    SideNav
  },
  methods: {
    ...mapActions(['toggleSideMenu'])
  }
};
</script>
