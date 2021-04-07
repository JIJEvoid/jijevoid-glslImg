<template>
  <div id="app">
    <imgCanvas ref="canvasContainer" :img="img" :type="type" :height="height" :width="width" :customHeader="customHeader" :customBody="customBody"
               :autoRender="autoRender"/>
  </div>
</template>

<script>
  import imgCanvas from './components/imgCanvas'

  const str = '#ifdef GL_ES\n' +
    '    precision mediump float;\n' +
    '    #endif\n' +
    '    \n' +
    '    #define PI 3.14159265359\n' +
    '    \n' +
    '    uniform vec2 iResolution;\n' +
    '    uniform sampler2D iChannel0;\n' +
    '    uniform float iTime;\n' +
    '    varying vec2 vUv;\n' +
    '    uniform float iArg0;\n' +
    '\n' +
    '    float hash( float n )\n' +
    '    {\n' +
    '        return fract(sin(n)*43758.5453123);\n' +
    '    }\n' +
    '\n' +
    '    float noise( in vec2 x )\n' +
    '    {\n' +
    '        vec2 p = floor(x);\n' +
    '        vec2 f = fract(x);\n' +
    '        f = f*f*(3.0-2.0*f);\n' +
    '        float n = p.x + p.y*157.0;\n' +
    '        return mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),mix( hash(n+157.0), hash(n+158.0),f.x),f.y);\n' +
    '    }\n' +
    '\n' +
    '    const mat2 m2 = mat2( 0.80, -0.60, 0.60, 0.80 );\n' +
    '\n' +
    '    float fbm( vec2 p )\n' +
    '    {\n' +
    '        float f = 0.0;\n' +
    '        f += 0.5000*noise( p ); p = m2*p*2.02;\n' +
    '        f += 0.2500*noise( p ); p = m2*p*2.03;\n' +
    '        f += 0.1250*noise( p ); p = m2*p*2.01;\n' +
    '        f += 0.0625*noise( p );\n' +
    '        return f/0.9375;\n' +
    '    }\n' +
    '    \n' +
    '    \n' +
    '    float plot(vec2 st, float pct){\n' +
    '        return  smoothstep( pct-0.02, pct, st.y) -\n' +
    '        smoothstep( pct, pct+0.02, st.y);\n' +
    '    }\n' +
    '    \n' +
    '    float countC(float color){\n' +
    '        \n' +
    '        return floor(color*iArg0)/iArg0;\n' +
    '    }\n' +
    '    \n' +
    '    void main() {\n' +
    '        vec2 st = gl_FragCoord.xy/iResolution;\n' +
    '    \n' +
    '        float h = iTime/10.;\n' +
    '        float v = iTime/10.;\n' +
    '        vec4 color = texture2D(iChannel0,st);\n' +
    '        vec4 sum = vec4( 0.0 );\n' +
    '    \n' +
    '        sum += texture2D( iChannel0, vec2( st.x, st.y - 4.0 * v ) ) * (0.051/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x, st.y - 3.0 * v ) ) * (0.0918/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x, st.y - 2.0 * v ) ) * (0.12245/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x, st.y - 1.0 * v ) ) * (0.1531/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x, st.y ) ) * (0.1633/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x, st.y + 1.0 * v ) ) * (0.1531/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x, st.y + 2.0 * v ) ) * (0.12245/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x, st.y + 3.0 * v ) ) * (0.0918/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x, st.y + 4.0 * v ) ) * (0.051/2.0);\n' +
    '        \n' +
    '        sum += texture2D( iChannel0, vec2( st.x - 4.0 * h, st.y ) ) * (0.051/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x - 3.0 * h, st.y ) ) * (0.0918/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x - 2.0 * h, st.y ) ) * (0.12245/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x - 1.0 * h, st.y ) ) * (0.1531/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x, st.y ) ) * (0.1633/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x + 1.0 * h, st.y ) ) * (0.1531/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x + 2.0 * h, st.y ) ) * (0.12245/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x + 3.0 * h, st.y ) ) * (0.0918/2.0);\n' +
    '        sum += texture2D( iChannel0, vec2( st.x + 4.0 * h, st.y ) ) * (0.051/2.0);\n' +
    '    \n' +
    '        gl_FragColor = sum;\n' +
    '    }'
  
  export default {
    name: 'App',
    components: {
      imgCanvas
    },
    data() {
      return {
        img: require('./assets/juzi.jpg'),
        type: 'custom',
        height: '480px',
        width: '720px',
        customHeader: '',
        customBody:str ,
        autoRender: false
      }
    },
    mounted() {
      // console.log(imgCanvas);
      // sandbox.setUniform("iChannel0", require('../assets/noise/noise3.png'));
      // let e = (this.$refs.canvasContainer);
      // e.sandbox.setUniform("iChannel0", require('./assets/noise/noise3.png'));
      // e.init();
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
