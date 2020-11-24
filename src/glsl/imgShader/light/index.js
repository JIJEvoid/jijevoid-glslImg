/**
 * Created by jijevoid on 2020/11/24
 */
let fs =
  "        void main(void) {\n" +
  "           vec4 vColor = vec4(1.0,1.0,1.0,1.0);\n" +
  "           vec2 st = gl_FragCoord.xy/u_resolution;\n" +
  "           vec4 fg = texture2D(u_tex0, st);\n" +
  "           fg.rgb += sin(u_time*3.+ st.x * 2. + st.y * 2.) * 0.2;\n" +
  "           gl_FragColor = fg * vColor;\n" +
  "       }";
  export default fs;

