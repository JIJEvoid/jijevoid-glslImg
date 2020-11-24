<template>
  <div>
    <canvas ref="canvasContainer" :height="`${height}px`"  :width="`${width}px`"></canvas>
  </div>
</template>

<script>
  import GlslCanvas from 'glslCanvas';
  import GLSLINSTANCE from './../glsl/index'
  export default {
    name: "glslImg",
    props: {
      // 图片
      img: {
        type: String,
        default: ''
      },
      height:{
        type: Number,
        default: 480,
      },
      width:{
        type: Number,
        default: 600,
      },
      type:{
        type: String,
        default: "imgShader",
      },
      customShader:{
        type: String,
        default: "",
      },
      loop:{
        type:Boolean,
        default:true,
      }
    },
    data(){
      return{
        // glsl 代码
        shaderCtx:'',
        // glslImg map表
        glslMaps:new Map(),
        //
      }
    },
    created(){
      console.log(GLSLINSTANCE);
      for(let i=0;i<GLSLINSTANCE.length;i++){
        this.glslMaps.set(GLSLINSTANCE[i].name,GLSLINSTANCE[i].ctx)
      }
    },
    mounted() {
      let el = this.$refs.canvasContainer;
      if(this.type!='customShader'){
        this.shaderCtx = this.glslMaps.get(this.type)?this.glslMaps.get(this.type):GLSLINSTANCE[1].ctx;
      }else{
        this.shaderCtx = this.customShader;
      }
      var sandbox = new GlslCanvas(el);
      sandbox.setUniform("u_tex0",this.img);
      sandbox.load(this.shaderCtx);
    }
  }
</script>

<style scoped>

</style>
