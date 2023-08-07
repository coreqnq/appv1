<template>
<h2>Section Counter</h2>
  <h1>{{ getTitle }} : {{squareCounter }}</h1>
  <p>{{counter}}<sub>2</sub>   = {{squareCounter}}</p>
  <p data-testid="modelID">{{counter}}</p>

  <div class="container">
    <button @click="increase">+1</button>
    <button @click="decrease">-1*</button>
  </div>
</template>
<script>
export default {
  props:
{
  titleBook : String,
      start : { type: Number,
                // require: true,
                default: 100
      }
}
  ,
  name: "Counter",
  data () {
    return {
      counter: this.start
    }
  },
  methods :{
    getSquare() {
      return this.counter * this.counter
    },

    increase() {
      this.counter ++;
    },
    decrease() {
      this.counter --;
    }
  },
  computed : {
    squareCounter () {
      console.log('time')
      return this.counter * this.counter
    },
    getTitle(){
      return this.titleBook || 'Default'
    }
  }

}
</script>

<style scoped>

  button{
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
  }

  button:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;

  }

</style>