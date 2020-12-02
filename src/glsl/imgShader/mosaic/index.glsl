float u_pixelate_size = 100.;
void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution;
    uv = floor(uv*u_pixelate_size)/u_pixelate_size;
    vec4 color = texture2D(u_tex0, uv);
    gl_FragColor = color;
}
