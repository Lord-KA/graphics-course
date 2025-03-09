#ifndef TOYPARAMS_INCLUDED
#define TOYPARAMS_INCLUDED

#include "cpp_glsl_compat.h"

struct ToyParams { 
	shader_uint resolution_x;
	shader_uint resolution_y;
	shader_float time;
	shader_uint mouse_x;
	shader_uint mouse_y;
}; 
#endif
