<template>
  <div id="app">
    <imgCanvas ref="canvasContainer" :img="img" :type="type" :height="height" :width="width" :customHeader="customHeader"
               :autoRender="autoRender"/>
  </div>
</template>

<script>
  import imgCanvas from './components/imgCanvas'

  export default {
    name: 'App',
    components: {
      imgCanvas
    },
    data() {
      return {
        img: require('./assets/juzi.jpg'),
        type: 'texture2',
        height: '480px',
        width: '720px',
        customHeader: 'uniform sampler2D iChannel0;',
        autoRender: false
      }
    },
    mounted() {
      console.log(imgCanvas);
      // sandbox.setUniform("iChannel0", require('../assets/noise/noise3.png'));
      let e = (this.$refs.canvasContainer);
      e.sandbox.setUniform("iChannel0", require('./assets/noise/noise3.png'));
      e.init();
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
  
  body {
    margin: 0;
  }
</style>
