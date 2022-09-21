<template>
  <div class="container">
    <div v-if="user.loggedIn">
    <v-row no-gutters style="padding: 2rem; ">
      <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card class="pa-10" max-width="350" color="#212121">
        <router-link to="/basicMath">
          <v-img max-width="350" height="200" src="https://cdn-icons-png.flaticon.com/512/1048/1048913.png"></v-img>
        </router-link>
        <v-card-title class="text-white">Calculator</v-card-title>
        <v-card-text class="text-white">
          <div>Used to add, subtract, multiply, divivide, and find the average of the number</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card class="pa-10" max-width="350" color="#212121">
        <router-link to="/stringApp">
          <v-img max-width="350" height="200" src="https://cdn-icons-png.flaticon.com/512/3665/3665909.png"></v-img>
        </router-link>
        <v-card-title class="text-white">Convert String</v-card-title>
        <v-card-text class="text-white">
          <div>Used to convert string into different property</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card class="pa-10" max-width="350" color="#212121">
        <router-link to="/aboutvuetify">
          <v-img max-width="350" height="200" src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png"></v-img>
        </router-link>
        <v-card-title class="text-white">About Vuetify</v-card-title>
        <v-card-text class="text-white">
          <div>Information about Vuetify</div>
        </v-card-text>
      </v-card>
    </v-col>


    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card class="pa-10" max-width="350" color="#212121">
        <router-link to="/QuizView">
          <v-img max-width="350" height="200" src="https://cdn-icons-png.flaticon.com/512/3874/3874176.png"></v-img>
        </router-link>
        <v-card-title class="text-white">Quiz App</v-card-title>
        <v-card-text class="text-white">
          <div>A test</div>
        </v-card-text>
      </v-card>
    </v-col>
    
    <v-col cols="12" sm="4" style="margin-top: 1rem;">
      <v-card class="pa-10" max-width="350" color="#212121">
        <router-link to="/aboutMe">
          <v-img max-width="350" height="200" src="https://cdn-icons-png.flaticon.com/512/785/785822.png"></v-img>
        </router-link>
        <v-card-title class="text-white">About Me</v-card-title>
        <v-card-text class="text-white">
          <div>Information about me</div>
        </v-card-text>
      </v-card>
    </v-col>
     </v-row>
     
</div>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5rem;
}
</style>
  
  <script>
      import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../firebase'

export default {
  data: () => ({
    show: true,
    overlay: true,
    items: [
      {
        title: 'Calculator',
        path: '/basicMath',
      },

      {
        title: 'String Manipulator',
        path: '/stringApp',

      },

      {
        title: 'About Vuetify',
        path: '/aboutvuetify',

      },

      {
        title: 'Quiz App',
        path: '/QuizView',

      },

      {
        title: 'About Me',
        path: '/aboutMe',

      },

     
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),

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
    return { user, signOut, Image }
  },
  mounted() {
    setTimeout(() => {
      this.overlay = false
    }, 1300)
  }
}
    </script>