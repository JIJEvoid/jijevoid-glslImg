/**
 * Created by jijevoid on 2020/11/23
 */
import Vue from "vue";
import imgCanvas from "./imgCanvas";

const Components = {
  imgCanvas
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});
// Vue.component("GlslCanvas", Components[name]);
export default imgCanvas;
