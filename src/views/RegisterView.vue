<template>
  <v-card color="#212121" class="ma-5 pt-5 pb-6 mx-auto mx-auto text-white" max-width="600">
           <v-card-title>Register</v-card-title>
            
              <div v-if="error" class="alert alert-danger">{{error}}</div>
             
              <v-text-field 
              label="Name" 
              id="name" 
              type="text" 
              name="name" 
              required v-model="name" 
              class="Input mt-3"></v-text-field>

              <v-text-field  
              label="Email" 
              id="email" 
              type="email" 
              name="email" 
              required v-model="email" 
              class="Input mt-3"></v-text-field>

              <v-text-field 
              label="Password" 
              id="password" 
              type="password" 
              name="password" 
              required v-model="password" 
              class="Input mt-3"></v-text-field>

              <v-btn class="primary text-black rounded-pill text-black" @click="Register">
                    <button type="submit" class="btn btn-primary">Register</button>
              </v-btn>
  </v-card>
</template>
  
<style>
  .Input {
    width: 60rem;
  }
</style>  

  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  export default {
    name: "RegisterComponent",
   setup() {
      const name = ref('')
      const email = ref('')
      const password = ref('')
      const error = ref(null)
      const store = useStore()
      const router = useRouter()
      const Register = async () => {
        try {
          await store.dispatch('register', {
            email: email.value,
            password: password.value,
            name: name.value
          })
          router.push('/')
        }
        catch (err) {
          error.value = err.message
              }
      }
      return { Register, name,email, password, error }
    }
  };
  </script>