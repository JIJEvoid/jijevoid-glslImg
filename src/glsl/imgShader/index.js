/**
 * Created by jijevoid on 2020/11/24
 */
import lightShader from './light/index';
import waveShader from './wave/index';
import strokeShader from './stroke/index';
import mosaicShader from './mosaic/index';

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

export default arr;
