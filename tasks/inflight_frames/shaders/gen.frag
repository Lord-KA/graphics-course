#version 450

#extension GL_ARB_separate_shader_objects : enable
#extension GL_GOOGLE_include_directive : require

#include "ToyParams.hpp"

float iTime;

vec2 iResolution;

layout (binding = 0) uniform sampler2D gTexture;
layout(binding = 1, set = 0) uniform Params {
  ToyParams params;
};


layout (location = 0) out vec4 fragColor;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord.xy / iResolution.xy;
    
    vec4 texFromChannel1 = texture(gTexture, uv);
    
    vec3 procPattern = vec3(uv, 0.5 + 0.5 * sin(iTime));
    
    vec3 finalColor = mix(procPattern, texFromChannel1.rgb, 0.5);
    
    fragColor = vec4(finalColor, 1.0);
}

void main()
{
  iResolution = vec2(params.resolution_x, params.resolution_y);
  iTime = params.time;

  ivec2 iFragCoord = ivec2(gl_FragCoord.xy);
  mainImage(fragColor, iFragCoord);
}
