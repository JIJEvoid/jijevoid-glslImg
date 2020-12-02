void main() {
    vec4 vColor = vec4(1.0,1.0,1.0,1.0);
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec4 fg = texture2D(u_tex0, st);
    fg.rgb += sin(u_time*3.+ st.x * 2. + st.y * 2.) * 0.2;
    gl_FragColor = fg * vColor;
}
