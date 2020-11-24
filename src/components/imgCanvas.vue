<template>
  <div>
    <canvas ref="canvasContainer"></canvas>
  </div>
</template>

<script>
  import GlslCanvas from 'glslCanvas';

  export default {
    name: "glslImg",
    mounted() {
      let el = this.$refs.canvasContainer;
      let shader = `
        #ifdef GL_ES
        precision mediump float;
        #endif
    
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform float u_time;
    
        float plot(vec2 st){
            float w = 0.08;
            //return smoothstep(0.03,0.0,abs(st.y-(st.x)));
            return abs(st.y-(st.x))<=w?1.-1./w*abs(st.x-(st.y)):0.;
        }
    
        void main() {
            vec2 st = gl_FragCoord.xy/u_resolution;
            float pct = plot(st);
            float w = mix(pct,sin(u_time),0.5);
            vec3 color = pct * vec3(1.,1.,1.);
            gl_FragColor = vec4(color,1.0);
        }
        `;
      var sandbox = new GlslCanvas(el);
      sandbox.load(shader);
      el.style.width = '100%';
      el.style.height = '100%';
    }
  }
</script>

<style scoped>

</style>
