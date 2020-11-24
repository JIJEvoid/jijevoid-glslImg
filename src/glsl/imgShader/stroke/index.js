/**
 * Created by jijevoid on 2020/11/24
 */
let fs = "vec3 texsample( float x,  float y, in vec2 st)" +
  "      {" +
  "          vec2 uv = (st.xy+ vec2(x, y))/ u_resolution.xy;" +
  "//          uv = (uv) / st.xy;" +
  "          return texture2D(u_tex0, uv).rgb;" +
  "      }" +
  "      vec3 count(vec2 st)" +
  "      {" +
  "          vec3 sum = texsample(-1., -1., st) * -2." +
  "          + texsample(-1.,  0., st) *-2." +
  "          + texsample(-1.,  1., st) *-2." +
  "          + texsample( 0., -1., st) *-2." +
  "          + texsample( 0.,  0., st) *  17." +
  "          + texsample( 0.,  1., st) *-2." +
  "          + texsample( 1., -1., st) *-2." +
  "          + texsample( 1.,  0., st) * -2." +
  "          + texsample( 1.,  1., st) *-2.;" +
  "    " +
  "          return sum;" +
  "      }" +
  "      void main()" +
  "      {" +
  "          gl_FragColor = vec4(count(gl_FragCoord.xy),1.0);" +
  "          gl_FragColor = vec4(1.0,1.0,1.0,1.0);" +
  "      }"
export default fs;

