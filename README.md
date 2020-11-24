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
       <glslimg :img="img"></glslimg>
     </div>
   </template>
   
   <script>

   import glslimg from '@jijevoid/glslimg';

   export default {
     name: 'HelloWorld',
     props: {
       msg: String
     },
     data(){
       return{
         img:require('./../assets/logo.png')//use yourself imgSrc
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
