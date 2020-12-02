vec3 texsample( float x,  float y, in vec2 st)
{
    vec2 uv = (st.xy+ vec2(x, y))/ u_resolution.xy;
    return texture2D(u_tex0, uv).rgb;
}
vec3 count(vec2 st)
{
    vec3 sum = texsample(-1., -1., st) * -1.
    + texsample(-1.,  0., st) *-1.
    + texsample(-1.,  1., st) *-1.
    + texsample( 0., -1., st) *-1.
    + texsample( 0.,  0., st) * 9.
    + texsample( 0.,  1., st) *-1.
    + texsample( 1., -1., st) *-1.
    + texsample( 1.,  0., st) * -1.
    + texsample( 1.,  1., st) *-1.;
    return sum;
}
void main()
{
    gl_FragColor = vec4(count(gl_FragCoord.xy),1.0);
}
