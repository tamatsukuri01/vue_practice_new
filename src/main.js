import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBp22pMmxoBawOo_gIZOAOgIqQDkWC4tSA",
    authDomain: "my-address-pj-2ba48.firebaseapp.com",
    projectId: "my-address-pj-2ba48",
    storageBucket: "my-address-pj-2ba48.appspot.com",
    messagingSenderId: "214237222814",
    appId: "1:214237222814:web:89c8c19745acddd63b688f",
    measurementId: "G-5PMM37TRJ2"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
