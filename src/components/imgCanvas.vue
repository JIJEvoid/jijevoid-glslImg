<template>
  <canvas v-if="renderType=='glsl'" class="ctx" ref="canvasContainer" :style="{width: width,height: height}" ></canvas>
  <div v-else id="scene" ref="canvasContainer">
  </div>
</template>

<script>
  import GlslCanvas from 'glslCanvas';
  import GLSLINSTANCE from './../glsl/index'
  import doc from './map'
  import * as THREE  from 'three';
  import {init,uniforms}  from './../utils/index';

  const gl_header = ` #ifdef GL_ES
        precision lowp float;
        #endif
        
        uniform sampler2D u_tex0;
        uniform vec2 u_resolution;
        uniform vec2 u_tex0Resolution;
        uniform vec2 u_mouse;
        uniform float u_time;\n`;

  export default {
    name: "glslImg",
    doc:doc,
    props: {
      renderType:{
        type: String,
        default: 'three',// glsl || three 两种渲染器
      },
      // 图片
      img: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: 480 + 'px',
      },
      width: {
        type: String,
        default: 600 + 'px',
      },
      type: {
        type: String,
        default: "imgShader",
      },
      customHeader: {
        type: String,
        default: "",
      },
      customBody: {
        type: String,
        default: "",
      },
      loop: {
        type: Boolean,
        default: true,
      },
      autoRender: {
        type: Boolean,
        default: true,
      },
      iTime:{
        type: Number,
        default: 0,
      }
    },
    data() {
      return {
        // glsl 代码
        shaderCtx: '',
        // glslImg map表
        glslMaps: new Map(),
        //
        glslInstance: null,
        //
        sandbox: null,
      }
    },
    created() {
      for (let i = 0; i < GLSLINSTANCE.length; i++) {
        this.glslMaps.set(GLSLINSTANCE[i].name, GLSLINSTANCE[i].ctx)
      }
    },
    mounted() {
      if(this.renderType=='glsl'){
        this.glsl_render();
      }else{
        this.three_render();
      }
    },
    methods: {
      init() {
        this.sandbox.load(this.shaderCtx);
      },
      
      glsl_render(){
        let el = this.$refs.canvasContainer;
        if (this.type != 'customShader') {
          this.shaderCtx = this.glslMaps.get(this.type) ? gl_header + this.customHeader + this.glslMaps.get(this.type) : gl_header + this.customHeader + GLSLINSTANCE[1].ctx;
        } else {
          this.shaderCtx = gl_header + this.customHeader + this.customBody;
        }
        var sandbox = new GlslCanvas(el);
        this.sandbox = sandbox;
        this.glslInstance = sandbox;
        sandbox.setUniform("u_tex0", this.img);
        //sandbox.load(this.shaderCtx);
        if(this.autoRender){
          this.$nextTick(()=>{
            this.init();
          })
        }
      },
      
      three_render(){
        let options = {
          img: this.img,
          height: this.height,
          width: this.width,
          customHeader: this.customHeader,
          customBody: this.customBody,
          loop: this.loop,
          autoRender: this.autoRender,
          el:this.$refs.canvasContainer
        };
        init(THREE,options);
      }
    }
  }
</script>

<style scoped>
  .ctx {
    width: 300px;
    height: 300px;
  }
</style>
