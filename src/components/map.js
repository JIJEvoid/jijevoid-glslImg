/**
 * Created by jijevoid on 2020/12/15
 */
//用于解释该插件的使用文档
import typelist from './../glsl/imgShader/index'

let typeMap = new Map();
for (var i=0;i<typelist.length;i++){
  typeMap.set(typelist[i].ctx,typelist[i])
}
let doc = {
  des: '一款封装片源着色器的vue插件',
  typeMap: typeMap,
};

export default doc;
