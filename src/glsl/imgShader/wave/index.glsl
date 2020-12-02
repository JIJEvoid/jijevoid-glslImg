vec3 params = vec3(10.0, 0.1, 0.1);
vec2 center = vec2(0.5, .5);
float itime = u_time/3.0;
float time =(itime - floor(itime));
void main()
{
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 texCoord = st;
    float dist = distance(st, center);
    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )
    {
        float diff = (dist - time);
        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);
        float diffTime = diff  * powDiff;
        vec2 diffUV = normalize(st - center);
        texCoord = st + (diffUV * diffTime);
    }
    gl_FragColor = texture2D(u_tex0, texCoord);
}
