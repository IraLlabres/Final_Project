
<template>
    <v-card
            class="ma-15 text-white"
            max-width="600"
            color="#212121"
    >
        <v-card-title> Calculator</v-card-title>
  
            <v-text-field label="First Input" v-model.number="number1"></v-text-field>
            <v-text-field color="grey lighten-5" label="Second Input" v-model.number="number2"></v-text-field>
  
                <div class="ma-5 text-black">
                <v-btn class="rounded-pill mx-1" @click="add">Addition</v-btn>
                <v-btn class="rounded-pill mx-1" @click="sub">Subtraction</v-btn>
                <v-btn class="rounded-pill mx-1" @click="quo">Division</v-btn>
                <v-btn class="rounded-pill mx-1" @click="mul">Multiplication</v-btn>
                <v-btn class="rounded-pill mx-1 my-3" click="mul">Average</v-btn><br>
                </div>
            
                    <h3 class="ma-5">Total: {{result}}</h3> 
    </v-card>
</template> 

  
  <script>
  
  export default {
    el: '#app',
        methods: {
            add() {
                this.result= parseInt(this.number1) + parseInt(this.number2);
                
            },
            sub() {
                this.result= parseInt(this.number1) - parseInt(this.number2);
            },
            quo() {
                this.result= parseInt(this.number1) / parseInt(this.number2);
            },
            mul() {
                this.result= parseInt(this.number1) * parseInt(this.number2);
            },
            ave() {
                this.result= (parseInt(this.number1) + parseInt(this.number2)) / 2;
            }
  },
    data() {
        return {
            number1: 0,
            number2: 0,
            result:0
        }
    },
    
    
  }
  </script>