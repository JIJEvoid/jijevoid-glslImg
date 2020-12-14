<template>
  <div id="app">
    <imgCanvas :img="img" :type="type" :height="height" :width="width"/>
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
      img:require('./assets/juzi.jpg'),
      type:'texture3',
      height:'480px',
      width:'720px',
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
  width: 100%;
  height: 100%;
  position: absolute;
}
  body{
    margin: 0;
  }
</style>
