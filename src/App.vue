<template>
  <v-app>
    <v-app-bar app >
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-app-bar-title>
        マイアドレス帳
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SideNav/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
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
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setLoginUser(user)
        if(this.$router.currentRoute.name === 'Home')this.$router.push({ name: 'addresses' })
      } else {
        this.deleteLoginUser()
        this.$router.push({ name: 'Home'})
      }
    })
  },
  methods: {
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser'])
  }
};
</script>
