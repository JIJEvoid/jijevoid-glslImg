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
   // 1.import component
   import glslimg from '@jijevoid/glslimg'
   
   // 2.register in vue
   components:{
      glslimg
   },

   // 3. use it in html
   <template>
     <div class="hello">
       <glslimg :img="img"></glslimg>
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
         img:require('./../assets/logo.png')
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
