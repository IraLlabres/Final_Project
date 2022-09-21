<template>
  <nav>
    <v-toolbar color="blue-grey darken-4 text-left text-white" app>
      <v-toolbar-title>
        <span class="font-weight-light">Final Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-if="!user.loggedIn">
        <v-btn router :to="register" color="black">
          <span class="text-white">Register</span>
        </v-btn>

        <v-btn router :to="login" color="black">
          <span class="text-white">Login</span>
        </v-btn>
      </div>

      <div v-else>
        <v-btn @click.prevent="signOut" color="black">
          <span class="text-white">Sign Out</span>
        </v-btn>
      </div>
    </v-toolbar>

    <div v-if="user.loggedIn">
    <v-navigation-drawer color="#212121" class="pt-16 text-white" app expand-on-hover rail="true">
      <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../firebase'
export default {
  data() {
    return {
      login: '/SignInView',
      register: '/RegisterView',
      items: [
        { title: 'About Apps', icon: 'mdi-home', path: '/' },
        { title: 'Calculator', icon: 'mdi-calculator-variant', path: '/basicMath' },
        { title: 'Convert String', icon: 'mdi-file', path: '/stringApp' },
        { title: 'About', icon: 'mdi-account-circle', path: '/aboutMe' },
        { title: 'About Vuetify', icon: 'mdi-vuetify', path: '/aboutVuetifyView' },
        { title: 'Axios', icon: 'mdi-atom', path: '/AxiosView' },
        { title: 'Quiz App', icon: 'mdi-controller-classic', path: '/QuizView' },
        { title: 'History', icon: 'mdi-history', path: '/MatchHistory' },
      ], rail: false,
    }
  },
  name: "DashboardComponent",

  setup() {

    const store = useStore()
    const router = useRouter()
    auth.onAuthStateChanged(user => {
      store.dispatch("fetchUser", user);
    });
    const user = computed(() => {
      return store.getters.user;
    });
    const signOut = async () => {
      await store.dispatch('logOut')
      router.push('/login')
    }
    return { user, signOut }
  }
};
</script>