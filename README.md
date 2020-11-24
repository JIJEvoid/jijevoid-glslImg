# jijeimg

An Vue img-canvas component base GLSL.

## Project install
```
npm i @jijevoid/glslimg
```

### Program 
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
     <div class="hello">
       <glslimg :img="img" :type="type" :height="height" :width="width"></glslimg>
     </div>
   </template>
   
   <script>
     import glslimg from '@jijevoid/glslimg'
   export default {
     name: 'HelloWorld',
     props: {
       msg: String
     },
     data(){
       return{
         img:require('./../assets/logo.png'),
         type:'wave',
         height:100,
         width:100,
       }
     },
     components:{
       glslimg
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

