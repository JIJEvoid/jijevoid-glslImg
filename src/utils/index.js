/**
 * Created by jijevoid on 2021/4/7
 */

const gl_header = ` #ifdef GL_ES
        precision lowp float;
        #endif
        
        uniform sampler2D u_tex0;
        uniform vec2 u_resolution;
        uniform vec2 u_tex0Resolution;
        uniform vec2 u_mouse;
        uniform float u_time;\n`;
let uniforms;

const init = async (THREE, options) => {
  var width = parseInt(options.width); // 画布的宽度
  var height = parseInt(options.height); // 画布的高度

  // 渲染器
  var renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(width, height);
  // 将canvas添加到指定元素
  var element = document.getElementById('scene');
  element.appendChild(renderer.domElement);

  // 场景
  var scene = new THREE.Scene();
  // 摄像机
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
  camera.position.set(0, 0, 360);
  scene.add(camera);
  // 传递给着色器的uniform参数
  uniforms = {
    iTime: {value: 0.0},
    iResolution: {value: new THREE.Vector2(width * 1.0, height * 1.0)},
    // iChannel0: {value: lavaTexture},
    iArg0: {value: 5.0},
  };

  if(typeof(options.img) == 'object'){
    for (var i in options.img){
      var lavaTexture = THREE.ImageUtils.loadTexture(options.img[i]);
      lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
      uniforms['iChannel'+i] = {value:lavaTexture};
    }
  }else{
    var lavaTexture = THREE.ImageUtils.loadTexture(options.img);
    lavaTexture.wrapS = lavaTexture.wrapT = THREE.RepeatWrapping;
    uniforms['iChannel0'] = {value:lavaTexture};
  }

  // lavaTexture.repeat.set( 200, 200 );
  window.uniforms = uniforms;
  // 材质

  var vertexShader = 'varying vec2 vUv;\n' +
    '    \n' +
    '    void main() {\n' +
    '        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n' +
    '        \n' +
    '        vUv = uv;\n' +
    '        \n' +
    '        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n' +
    '    }'
  var fragmentShader =  gl_header + options.customHeader + options.customBody;
  var material = new THREE.ShaderMaterial({
    // 着色器 uniform 参数
    uniforms: uniforms,
    // 顶点着色器文本内容
    vertexShader: vertexShader,
    // 片元着色器文本内容
    fragmentShader:fragmentShader
  });

  // 平面几何体
  var geom = new THREE.PlaneBufferGeometry(width, height);
  // 网格对象
  var mesh = new THREE.Mesh(geom, material);
  scene.add(mesh);


  /* 利用requestAnimationFrame实现动画 */
  var clock = new THREE.Clock(); // 时钟

  (function animate() {
    requestAnimationFrame(animate);

    var delta = clock.getDelta(); // 获取本次和上次的时间间隔
    uniforms.iTime.value += delta; // 设置着色器使用的 iTime 参数
    renderer.render(scene, camera); // 重新渲染
  })();

}

export {init,uniforms};

