<template>
  <img v-if="img" :src="img" alt="bg">
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input type="text" v-model="question"  placeholder="Hazme una pregunta"  >
    <p>Recuerda terminar con un signo de interrogacion (?)</p>
    <div v-if="isValidQuestion">
      <h3>{{question}}</h3>
      <h2>{{answer}}</h2>
    </div>
  </div>

</template>

<script>
export default {
  name: "Indecision",
  data  () {
    return {
      question : 'hello world',
      answer : null,
      img : null,
      isValidQuestion : false

    }
  },
  methods: {
    async getAnswer () {


      const {answer, image} = await fetch('https://yesno.wtf/api').then( r=> r.json())
      this.img = image
      this.answer = answer
      console.log(responseData);
    }
  },
  watch:{
    question( value, oldValue){
      this.isValidQuestion = false;
      if ( !value.includes('?') ) return
      this.isValidQuestion = true;
      this.getAnswer();
    }
  }
}
</script>

<style  >
img, .bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1, h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>