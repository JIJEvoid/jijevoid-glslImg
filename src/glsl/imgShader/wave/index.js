/**
 * Created by jijevoid on 2020/11/24
 */
let fs =
  "vec3 params = vec3(10.0, 0.1, 0.1);\n" +
  "        vec2 center = vec2(0.5, .5);\n" +
  "        float itime = u_time/3.0;\n" +
  "        float time =(itime - floor(itime));\n" +
  "        void main()\n" +
  "        {\n" +
  "            vec2 st = gl_FragCoord.xy/u_resolution;\n" +
  "            vec2 texCoord = st;\n" +
  "            float dist = distance(st, center);\n" +
  "            if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n" +
  "            {\n" +
  "                float diff = (dist - time);\n" +
  "                float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n" +
  "                float diffTime = diff  * powDiff;\n" +
  "                vec2 diffUV = normalize(st - center);\n" +
  "                texCoord = st + (diffUV * diffTime);\n" +
  "            }\n" +
  "            gl_FragColor = texture2D(u_tex0, texCoord);\n" +
  "        }";
export default fs;
