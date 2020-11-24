<template>
  <div>
    <canvas ref="canvasContainer"></canvas>
  </div>
</template>

<script>
  import GlslCanvas from 'glslCanvas';
  import GLSLINSTANCE from './../glsl/index'
  export default {
    name: "glslImg",
    props: {
      img: String
    },
    mounted() {
      let el = this.$refs.canvasContainer;
      console.log(GLSLINSTANCE);
      
      let shader = GLSLINSTANCE[0].ctx;
      

      var sandbox = new GlslCanvas(el);
      sandbox.setUniform("u_tex0",this.img);
      sandbox.load(shader);
      
      el.style.width = '100%';
      el.style.height = '100%';
    }
  }
</script>

<style scoped>

</style>
