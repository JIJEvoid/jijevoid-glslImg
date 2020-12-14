# jijeimg

An Vue img-canvas component base GLSL.

## Project install
```
npm i @jijevoid/glslimg
```

### question 
```
https://github.com/JIJEvoid/jijevoid-glslImg/issues/
```

### code source
```
https://github.com/JIJEvoid/jijevoid-glslImg
```

### who to use
```
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
         type:'light',
         height:'300px',
         width:'300px',
       }
     },
     mounted() {
     
     }
   }
   </script>
```

### params
```
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
```
### about shaderType
有如下几种type
1 固定shader

2 自定义shader

