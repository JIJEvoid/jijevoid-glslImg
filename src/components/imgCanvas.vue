<template>
    <canvas ref="canvasContainer" :style="{width: width,height: height}"></canvas>
  
</template>

<script>
  import GlslCanvas from 'glslCanvas';
  import GLSLINSTANCE from './../glsl/index'

  const gl_header = ` #ifdef GL_ES
        precision mediump float;
        #endif
        
        uniform sampler2D u_tex0;
        uniform sampler2D iChannel0;
        uniform vec2 u_resolution;
        uniform vec2 u_tex0Resolution;
        uniform vec2 u_mouse;
        uniform float u_time;\n`;
  
  export default {
    name: "glslImg",
    props: {
      // 图片
      img: {
        type: String,
        default: ''
      },
      height:{
        type: String,
        default: 480+'px',
      },
      width:{
        type: String,
        default: 600+'px',
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
        glslInstance:null,
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
        this.shaderCtx = this.glslMaps.get(this.type)?gl_header+this.glslMaps.get(this.type):gl_header+GLSLINSTANCE[1].ctx;
      }else{
        this.shaderCtx = gl_header+this.customShader;
      }
      var sandbox = new GlslCanvas(el);
      this.glslInstance = sandbox;
      sandbox.setUniform("u_tex0",this.img);
      sandbox.setUniform("iChannel0",require('../assets/noise/noise2.png'));
      setTimeout(()=>{
        sandbox.load(this.shaderCtx);
      },1000)
      
    }
  }
</script>

<style scoped>
.ctx{
  width: 100%;
  height: 100%;
}
</style>
