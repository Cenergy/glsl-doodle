(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{548:function(n,e,d){"use strict";d.r(e),e.default="#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#pragma include <graphics>\n#pragma include <color>\n#pragma include <pattern>\n\nuniform vec2 dd_resolution;\n\nvoid main() {\n  vec2 st =  gl_FragCoord.xy / dd_resolution.xy;\n  float d = sdf_circle(st, vec2(0.5), 0.5);\n  d = fill(d);\n  if(d > 0.0) {\n    vec2 grid = vec2(4.0, 4.0);\n    vec2 overlaps[4]; \n    grid_overlap(st, grid, overlaps);\n    float d3 = 0.0;\n    for(int i = 0; i < 4; i++) {\n      vec2 st2 = overlaps[i];\n      st2 *= 0.6;\n      // st2 = skew(st2, vec2(0), vec2(1.0, 0.0));\n      st2 = rotate(st2, vec2(0.0), - PI / 3.0);\n      float d2 = shape_hypocycloid(st2, vec2(0), 4);\n      d3 = udf_union(d3, d2);\n    }\n    color(d3, vec3(0.376, 0.337, 0.619));\n  }\n}"}}]);