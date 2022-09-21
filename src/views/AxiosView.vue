<script setup>
    import { ref } from 'vue'
    import axios from 'axios'

        const questions=ref([])
        async function getQuestions () {
        axios.get('https://opentdb.com/api.php?amount=10').then( response => {
        questions.value=(response.data.results)
        })
    }
</script>

<template>
    <v-container fluid class="container">
        <v-card color="#212121" class="text-white ma-15 pa-10" max-width="544">
            <v-container>
                <h1 class="ma-5">Axios Demo</h1>
                    <v-col cols="" sm="" align="center" justify="center">
                    <v-btn class="text-black" @click="getQuestions">Get Post</v-btn>
                    </v-col>
                <v-list-item
                v-for="question in questions"
                :key="question.id"
                >
                    <v-card color="blue-grey darken-4">
                    <v-container>
                    <v-list-item-title>{{ question.question }}</v-list-item-title>
                    <v-list-item>
                    {{question.correct_answer}}
                    </v-list-item>
                    </v-container>
                    </v-card>
                </v-list-item>
            </v-container>
        </v-card>
    </v-container>
</template>    

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>