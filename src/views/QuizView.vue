<template>
    <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap" rel="stylesheet">
    <v-card class="ma-15 mx-auto " max-width="544">
        <v-card color="#212121" class="text-white">
            
          <v-card-title class="mt-10"><h1>Quiz App</h1></v-card-title>
          <quizapp @quiz-completed="handleQuizCompleted" :key="quizKey" />
          <modal
            v-show="showModal"
            header="Congratulations!"
            subheader="You've completed your Quiz!"
            :score="score"
            @reload="updateQuiz"
            @close="showModal = false"
          />
        </v-card>
    </v-card>
       </template> 
       
      <script>
      import modal from "../components/modal.vue";
      import quizapp from "../components/quizapp.vue";
       
      export default {
       components: { quizapp, modal },
       name: "App",
       data() {
         return {
           quizKey: 0,
           showModal: false,
           score: {
             allQuestions: 0,
             answeredQuestions: 0,
             correctlyAnsweredQuestions: 0,
           },
         };
       },
       methods: {
         handleQuizCompleted(score) {
           this.score = score;
           this.showModal = true;
         },
         updateQuiz() {
           this.showModal = false;
           this.quizKey++;
         },
        },
      };
       </script>