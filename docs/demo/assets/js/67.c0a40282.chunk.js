(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{512:function(n,o,e){"use strict";e.r(o),o.default="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy;\n  if(st.x > 256.0) {\n    gl_FragColor = vec4(1.0);\n  } else {\n    gl_FragColor = vec4(0, 0, 0, 1.0);\n  }\n}"}}]);