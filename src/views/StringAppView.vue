<template>
  <v-card
  class="ma-15 text-white"
  max-width="544"
  color="#212121"
  >
    <v-card-title> Convert String</v-card-title>

    <v-text-field class="Input" label="Enter a String" v-model="vowel" @change='answer'></v-text-field>

    <h3 class="text-center">Vowels: {{vow}}</h3><br>
    <h3 class="text-center">Number of Characters: {{count}}</h3><br>
    <h3 class="text-center">Consonants: {{conso}}</h3><br>
    <h3 class="text-center">Vowel to *: {{con}}</h3><br>
  </v-card>  
</template>

<style>
  .Input {
    width: 60rem;
  }
</style>

<script>

export default {
    el: '#app',
    computed: {
    answer: function() {
      var vowelList = 'aeiouAEIOU';
      this.vow = 0;
      this.count = 0;
      this.conso = 0;
      this.con = "";

      //Count vowels
      for (var x = 0; x < this.vowel.length; x++) {
        if (vowelList.indexOf(this.vowel[x]) !== -1) {
          this.vow = this.vow + 1;
        }
      }

      //Count Characters in the string
      for (var x = 0; x < this.vowel.length; x++) {
        this.count = this.count + 1;
      }

      //Count consonants
      for (var x = 0; x < this.vowel.length; x++) {
        if (vowelList.indexOf(this.vowel[x]) == -1) {
          this.conso = this.conso + 1;
        }
      }
      //Convert to *
      for (var x = 0; x < this.vowel.length; x++) {
        if (vowelList.indexOf(this.vowel[x]) !== -1) {
          this.con += "*";
        } else {
          this.con += this.vowel[x];
        }
      }
    }
  },
    data() {
        return {
            vowel: "",
            vow: 0,
            count: 0,
            conso: 0,
            con: "",
        }
    }
}
</script>