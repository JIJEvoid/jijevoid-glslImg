/**
 * Created by jijevoid on 2020/11/24
 */
let fs = "vec3 texsample( float x,  float y, in vec2 st)\n" +
  "      {\n" +
  "          vec2 uv = (st.xy+ vec2(x, y))/ u_resolution.xy;\n" +
  "          return texture2D(u_tex0, uv).rgb;\n" +
  "      }\n" +
  "      vec3 count(vec2 st)\n" +
  "      {\n" +
  "          vec3 sum = texsample(-1., -1., st) * -2.\n" +
  "          + texsample(-1.,  0., st) *-2.\n" +
  "          + texsample(-1.,  1., st) *-2.\n" +
  "          + texsample( 0., -1., st) *-2.\n" +
  "          + texsample( 0.,  0., st) *  17.\n" +
  "          + texsample( 0.,  1., st) *-2.\n" +
  "          + texsample( 1., -1., st) *-2.\n" +
  "          + texsample( 1.,  0., st) * -2.\n" +
  "          + texsample( 1.,  1., st) *-2.;\n" +
  "          return sum;\n" +
  "      }\n" +
  "      void main()\n" +
  "      {\n" +
  "          gl_FragColor = vec4(count(gl_FragCoord.xy),1.0);\n" +
  "          gl_FragColor = vec4(1.0,1.0,1.0,1.0);\n" +
  "      }"
export default fs;

