/**
 * Created by jijevoid on 2020/11/24
 */
// import lightShader from './light/index';
// import waveShader from './wave/index';
// import strokeShader from './stroke/index';
// import mosaicShader from './mosaic/index';
//
// let gl = require('./mosaic/mosaic.glsl');

let lightShader = require('./light/index.glsl').default;
let waveShader = require('./wave/index.glsl').default;
let strokeShader = require('./stroke/index.glsl').default;
let mosaicShader = require('./mosaic/index.glsl').default;
let textShader1 = require('./textureBg/type1.glsl').default;
let textShader2 = require('./textureBg/type2.glsl').default;



const shaderType = 'imgShader';


let arr = [];
function getShaderInstance(
  name,ctx
){
  return {
    name:name,
    ctx:ctx,
    type:shaderType
  }
}
arr.push(getShaderInstance("light",lightShader));
arr.push(getShaderInstance("wave",waveShader));
arr.push(getShaderInstance("stroke",strokeShader));
arr.push(getShaderInstance("mosaic",mosaicShader));
arr.push(getShaderInstance("texture1",textShader1));
arr.push(getShaderInstance("texture2",textShader2));

export default arr;
