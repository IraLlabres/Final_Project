<template>

   <link rel="preconnect" href="https://fonts.gstatic.com">
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap" rel="stylesheet">
     
     <v-app style="font-family: 'Montserrat', sans-serif;">
       <v-main class="SetBG text-center">
           <Navbar/>
           <div class="card">
             <router-view></router-view>
           </div>
       </v-main>
     </v-app>
   
   </template>
   
   <script setup>
     import Navbar from '@/components/NavBar.vue';
   </script>
   
   
   <style>
      .SetBG {
         background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./assets/bg.png);
         background-size: cover;
      }
      .card {
    display: flex;
    align-items: center;
    justify-content: center;
    }
   
   </style>
   
