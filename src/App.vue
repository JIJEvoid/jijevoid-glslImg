<template>
  <div id="app">
    <imgCanvas :img="img"/>
  </div>
</template>

<script>
import imgCanvas from './components/imgCanvas'

export default {
  name: 'App',
  components: {
    imgCanvas
  },
  data(){
    return{
      img:require('./assets/logo.png')
    }
  },
  mounted() {
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
