/**
 * Created by jijevoid on 2020/11/24
 */
import lightShader from './light/index';
import waveShader from './wave/index';
import strokeShader from './stroke/index';

const shaderType = 'imgShader';
const gl_header = `#ifdef GL_ES
        precision mediump float;
        #endif
        
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform float u_time;
        uniform sampler2D u_tex0;
        uniform vec2 u_tex0Resolution;`;

let arr = [];
function getShaderInstance(
  name,ctx
){
  return {
    name:name,
    ctx:gl_header+ctx,
    type:shaderType
  }
}
arr.push(getShaderInstance("light",lightShader));
arr.push(getShaderInstance("wave",waveShader));
arr.push(getShaderInstance("stroke",strokeShader));

export default arr;
