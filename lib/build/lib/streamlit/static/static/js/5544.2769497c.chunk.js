"use strict";(self.webpackChunk_streamlit_app=self.webpackChunk_streamlit_app||[]).push([[5544],{41514:(n,t,r)=>{r.d(t,{u:()=>a});var e=r(68102),i=r(58878),o=r(68622),a=i.forwardRef((function(n,t){return i.createElement(o.I,(0,e.A)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 8 8"},n,{ref:t}),i.createElement("path",{d:"M0 0v4l1.5-1.5L3 4l1-1-1.5-1.5L4 0H0zm5 4L4 5l1.5 1.5L4 8h4V4L6.5 5.5 5 4z"}))}));a.displayName="FullscreenEnter"},67214:(n,t,r)=>{r.d(t,{Q:()=>a});var e=r(68102),i=r(58878),o=r(68622),a=i.forwardRef((function(n,t){return i.createElement(o.I,(0,e.A)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 8 8"},n,{ref:t}),i.createElement("path",{d:"M1 0L0 1l1.5 1.5L0 4h4V0L2.5 1.5 1 0zm3 4v4l1.5-1.5L7 8l1-1-1.5-1.5L8 4H4z"}))}));a.displayName="FullscreenExit"},25638:(n,t,r)=>{function e(n,t){return null==n||null==t?NaN:n<t?-1:n>t?1:n>=t?0:NaN}r.d(t,{A:()=>e})},66384:(n,t,r)=>{r.d(t,{Ay:()=>s,Jj:()=>u,ah:()=>l});var e=r(25638),i=r(87821),o=r(2651);const a=(0,i.A)(e.A),u=a.right,l=a.left,s=((0,i.A)(o.A).center,u)},87821:(n,t,r)=>{r.d(t,{A:()=>o});var e=r(25638);function i(n,t){return null==n||null==t?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function o(n){let t,r,o;function u(n,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length;if(i<o){if(0!==t(e,e))return o;do{const t=i+o>>>1;r(n[t],e)<0?i=t+1:o=t}while(i<o)}return i}return 2!==n.length?(t=e.A,r=(t,r)=>(0,e.A)(n(t),r),o=(t,r)=>n(t)-r):(t=n===e.A||n===i?n:a,r=n,o=n),{left:u,center:function(n,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const e=u(n,t,r,(arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length)-1);return e>r&&o(n[e-1],t)>-o(n[e],t)?e-1:e},right:function(n,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length;if(i<o){if(0!==t(e,e))return o;do{const t=i+o>>>1;r(n[t],e)<=0?i=t+1:o=t}while(i<o)}return i}}}function a(){return 0}},39687:(n,t,r)=>{r.d(t,{A:()=>i});var e=r(67413);function i(n,t){const r=(0,e.A)(n,t);return r?Math.sqrt(r):r}},57214:(n,t,r)=>{function e(n,t){let r;if(void 0===t)for(const e of n)null!=e&&(r<e||void 0===r&&e>=e)&&(r=e);else{let e=-1;for(let i of n)null!=(i=t(i,++e,n))&&(r<i||void 0===r&&i>=i)&&(r=i)}return r}r.d(t,{A:()=>e})},89504:(n,t,r)=>{r.d(t,{A:()=>i});var e=r(8410);function i(n,t){return(0,e.Ay)(n,.5,t)}},15232:(n,t,r)=>{function e(n,t){let r;if(void 0===t)for(const e of n)null!=e&&(r>e||void 0===r&&e>=e)&&(r=e);else{let e=-1;for(let i of n)null!=(i=t(i,++e,n))&&(r>i||void 0===r&&i>=i)&&(r=i)}return r}r.d(t,{A:()=>e})},2651:(n,t,r)=>{function e(n){return null===n?NaN:+n}function*i(n,t){if(void 0===t)for(let r of n)null!=r&&(r=+r)>=r&&(yield r);else{let r=-1;for(let e of n)null!=(e=t(e,++r,n))&&(e=+e)>=e&&(yield e)}}r.d(t,{A:()=>e,n:()=>i})},14826:(n,t,r)=>{function e(n,t){return Array.from(t,(t=>n[t]))}r.d(t,{A:()=>e})},8410:(n,t,r)=>{r.d(t,{Ay:()=>s,Z4:()=>c});var e=r(57214),i=r(15232),o=r(87670);function a(n,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1/0,i=arguments.length>4?arguments[4]:void 0;if(t=Math.floor(t),r=Math.floor(Math.max(0,r)),e=Math.floor(Math.min(n.length-1,e)),!(r<=t&&t<=e))return n;for(i=void 0===i?o.o2:(0,o.JC)(i);e>r;){if(e-r>600){const o=e-r+1,u=t-r+1,l=Math.log(o),s=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*s*(o-s)/o)*(u-o/2<0?-1:1);a(n,t,Math.max(r,Math.floor(t-u*s/o+c)),Math.min(e,Math.floor(t+(o-u)*s/o+c)),i)}const o=n[t];let l=r,s=e;for(u(n,r,t),i(n[e],o)>0&&u(n,r,e);l<s;){for(u(n,l,s),++l,--s;i(n[l],o)<0;)++l;for(;i(n[s],o)>0;)--s}0===i(n[r],o)?u(n,r,s):(++s,u(n,s,e)),s<=t&&(r=s+1),t<=s&&(e=s-1)}return n}function u(n,t,r){const e=n[t];n[t]=n[r],n[r]=e}var l=r(2651);function s(n,t,r){if((o=(n=Float64Array.from((0,l.n)(n,r))).length)&&!isNaN(t=+t)){if(t<=0||o<2)return(0,i.A)(n);if(t>=1)return(0,e.A)(n);var o,u=(o-1)*t,s=Math.floor(u),c=(0,e.A)(a(n,s).subarray(0,s+1));return c+((0,i.A)(n.subarray(s+1))-c)*(u-s)}}function c(n,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.A;if((e=n.length)&&!isNaN(t=+t)){if(t<=0||e<2)return+r(n[0],0,n);if(t>=1)return+r(n[e-1],e-1,n);var e,i=(e-1)*t,o=Math.floor(i),a=+r(n[o],o,n);return a+(+r(n[o+1],o+1,n)-a)*(i-o)}}},65537:(n,t,r)=>{function e(n,t,r){n=+n,t=+t,r=(i=arguments.length)<2?(t=n,n=0,1):i<3?1:+r;for(var e=-1,i=0|Math.max(0,Math.ceil((t-n)/r)),o=new Array(i);++e<i;)o[e]=n+e*r;return o}r.d(t,{A:()=>e})},87670:(n,t,r)=>{r.d(t,{Ay:()=>o,JC:()=>a,o2:()=>u});var e=r(25638),i=r(14826);function o(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if("function"!==typeof n[Symbol.iterator])throw new TypeError("values is not iterable");n=Array.from(n);let[o]=r;if(o&&2!==o.length||r.length>1){const t=Uint32Array.from(n,((n,t)=>t));return r.length>1?(r=r.map((t=>n.map(t))),t.sort(((n,t)=>{for(const e of r){const r=u(e[n],e[t]);if(r)return r}}))):(o=n.map(o),t.sort(((n,t)=>u(o[n],o[t])))),(0,i.A)(n,t)}return n.sort(a(o))}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.A;if(n===e.A)return u;if("function"!==typeof n)throw new TypeError("compare is not a function");return(t,r)=>{const e=n(t,r);return e||0===e?e:(0===n(r,r))-(0===n(t,t))}}function u(n,t){return(null==n||!(n>=n))-(null==t||!(t>=t))||(n<t?-1:n>t?1:0)}},17698:(n,t,r)=>{r.d(t,{Ay:()=>u,lq:()=>l,sG:()=>s});const e=Math.sqrt(50),i=Math.sqrt(10),o=Math.sqrt(2);function a(n,t,r){const u=(t-n)/Math.max(0,r),l=Math.floor(Math.log10(u)),s=u/Math.pow(10,l),c=s>=e?10:s>=i?5:s>=o?2:1;let h,f,g;return l<0?(g=Math.pow(10,-l)/c,h=Math.round(n*g),f=Math.round(t*g),h/g<n&&++h,f/g>t&&--f,g=-g):(g=Math.pow(10,l)*c,h=Math.round(n/g),f=Math.round(t/g),h*g<n&&++h,f*g>t&&--f),f<h&&.5<=r&&r<2?a(n,t,2*r):[h,f,g]}function u(n,t,r){if(!((r=+r)>0))return[];if((n=+n)===(t=+t))return[n];const e=t<n,[i,o,u]=e?a(t,n,r):a(n,t,r);if(!(o>=i))return[];const l=o-i+1,s=new Array(l);if(e)if(u<0)for(let a=0;a<l;++a)s[a]=(o-a)/-u;else for(let a=0;a<l;++a)s[a]=(o-a)*u;else if(u<0)for(let a=0;a<l;++a)s[a]=(i+a)/-u;else for(let a=0;a<l;++a)s[a]=(i+a)*u;return s}function l(n,t,r){return a(n=+n,t=+t,r=+r)[2]}function s(n,t,r){r=+r;const e=(t=+t)<(n=+n),i=e?l(t,n,r):l(n,t,r);return(e?-1:1)*(i<0?1/-i:i)}},67413:(n,t,r)=>{function e(n,t){let r,e=0,i=0,o=0;if(void 0===t)for(let a of n)null!=a&&(a=+a)>=a&&(r=a-i,i+=r/++e,o+=r*(a-i));else{let a=-1;for(let u of n)null!=(u=t(u,++a,n))&&(u=+u)>=u&&(r=u-i,i+=r/++e,o+=r*(u-i))}if(e>1)return o/(e-1)}r.d(t,{A:()=>e})},89421:(n,t,r)=>{r.d(t,{Ay:()=>w,Gw:()=>k,KI:()=>L,Q1:()=>i,Qh:()=>N,Uw:()=>a,b:()=>x,ef:()=>o});var e=r(39655);function i(){}var o=.7,a=1/o,u="\\s*([+-]?\\d+)\\s*",l="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",s="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",c=/^#([0-9a-f]{3,8})$/,h=new RegExp(`^rgb\\(${u},${u},${u}\\)$`),f=new RegExp(`^rgb\\(${s},${s},${s}\\)$`),g=new RegExp(`^rgba\\(${u},${u},${u},${l}\\)$`),d=new RegExp(`^rgba\\(${s},${s},${s},${l}\\)$`),p=new RegExp(`^hsl\\(${l},${s},${s}\\)$`),m=new RegExp(`^hsla\\(${l},${s},${s},${l}\\)$`),y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function v(){return this.rgb().formatHex()}function A(){return this.rgb().formatRgb()}function w(n){var t,r;return n=(n+"").trim().toLowerCase(),(t=c.exec(n))?(r=t[1].length,t=parseInt(t[1],16),6===r?M(t):3===r?new k(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===r?b(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===r?b(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=h.exec(n))?new k(t[1],t[2],t[3],1):(t=f.exec(n))?new k(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=g.exec(n))?b(t[1],t[2],t[3],t[4]):(t=d.exec(n))?b(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=p.exec(n))?S(t[1],t[2]/100,t[3]/100,1):(t=m.exec(n))?S(t[1],t[2]/100,t[3]/100,t[4]):y.hasOwnProperty(n)?M(y[n]):"transparent"===n?new k(NaN,NaN,NaN,0):null}function M(n){return new k(n>>16&255,n>>8&255,255&n,1)}function b(n,t,r,e){return e<=0&&(n=t=r=NaN),new k(n,t,r,e)}function x(n){return n instanceof i||(n=w(n)),n?new k((n=n.rgb()).r,n.g,n.b,n.opacity):new k}function N(n,t,r,e){return 1===arguments.length?x(n):new k(n,t,r,null==e?1:e)}function k(n,t,r,e){this.r=+n,this.g=+t,this.b=+r,this.opacity=+e}function $(){return`#${_(this.r)}${_(this.g)}${_(this.b)}`}function E(){const n=C(this.opacity);return`${1===n?"rgb(":"rgba("}${q(this.r)}, ${q(this.g)}, ${q(this.b)}${1===n?")":`, ${n})`}`}function C(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function q(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function _(n){return((n=q(n))<16?"0":"")+n.toString(16)}function S(n,t,r,e){return e<=0?n=t=r=NaN:r<=0||r>=1?n=t=NaN:t<=0&&(n=NaN),new R(n,t,r,e)}function j(n){if(n instanceof R)return new R(n.h,n.s,n.l,n.opacity);if(n instanceof i||(n=w(n)),!n)return new R;if(n instanceof R)return n;var t=(n=n.rgb()).r/255,r=n.g/255,e=n.b/255,o=Math.min(t,r,e),a=Math.max(t,r,e),u=NaN,l=a-o,s=(a+o)/2;return l?(u=t===a?(r-e)/l+6*(r<e):r===a?(e-t)/l+2:(t-r)/l+4,l/=s<.5?a+o:2-a-o,u*=60):l=s>0&&s<1?0:u,new R(u,l,s,n.opacity)}function L(n,t,r,e){return 1===arguments.length?j(n):new R(n,t,r,null==e?1:e)}function R(n,t,r,e){this.h=+n,this.s=+t,this.l=+r,this.opacity=+e}function H(n){return(n=(n||0)%360)<0?n+360:n}function z(n){return Math.max(0,Math.min(1,n||0))}function G(n,t,r){return 255*(n<60?t+(r-t)*n/60:n<180?r:n<240?t+(r-t)*(240-n)/60:t)}(0,e.A)(i,w,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:v,formatHex:v,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return j(this).formatHsl()},formatRgb:A,toString:A}),(0,e.A)(k,N,(0,e.X)(i,{brighter(n){return n=null==n?a:Math.pow(a,n),new k(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=null==n?o:Math.pow(o,n),new k(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new k(q(this.r),q(this.g),q(this.b),C(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:$,formatHex:$,formatHex8:function(){return`#${_(this.r)}${_(this.g)}${_(this.b)}${_(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:E,toString:E})),(0,e.A)(R,L,(0,e.X)(i,{brighter(n){return n=null==n?a:Math.pow(a,n),new R(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=null==n?o:Math.pow(o,n),new R(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+360*(this.h<0),t=isNaN(n)||isNaN(this.s)?0:this.s,r=this.l,e=r+(r<.5?r:1-r)*t,i=2*r-e;return new k(G(n>=240?n-240:n+120,i,e),G(n,i,e),G(n<120?n+240:n-120,i,e),this.opacity)},clamp(){return new R(H(this.h),z(this.s),z(this.l),C(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=C(this.opacity);return`${1===n?"hsl(":"hsla("}${H(this.h)}, ${100*z(this.s)}%, ${100*z(this.l)}%${1===n?")":`, ${n})`}`}}))},39655:(n,t,r)=>{function e(n,t,r){n.prototype=t.prototype=r,r.constructor=n}function i(n,t){var r=Object.create(n.prototype);for(var e in t)r[e]=t[e];return r}r.d(t,{A:()=>e,X:()=>i})},55453:(n,t,r)=>{r.d(t,{GP:()=>i,s:()=>o});var e,i,o,a,u=r(75351);a={thousands:",",grouping:[3],currency:["$",""]},e=(0,u.A)(a),i=e.format,o=e.formatPrefix},30563:(n,t,r)=>{r.d(t,{A:()=>i});var e=r(88772);function i(n){return(n=(0,e.f)(Math.abs(n)))?n[1]:NaN}},88772:(n,t,r)=>{function e(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function i(n,t){if((r=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var r,e=n.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+n.slice(r+1)]}r.d(t,{A:()=>e,f:()=>i})},46047:(n,t,r)=>{r.d(t,{A:()=>i});var e=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function i(n){if(!(t=e.exec(n)))throw new Error("invalid format: "+n);var t;return new o({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}function o(n){this.fill=void 0===n.fill?" ":n.fill+"",this.align=void 0===n.align?">":n.align+"",this.sign=void 0===n.sign?"-":n.sign+"",this.symbol=void 0===n.symbol?"":n.symbol+"",this.zero=!!n.zero,this.width=void 0===n.width?void 0:+n.width,this.comma=!!n.comma,this.precision=void 0===n.precision?void 0:+n.precision,this.trim=!!n.trim,this.type=void 0===n.type?"":n.type+""}i.prototype=o.prototype,o.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}},75351:(n,t,r)=>{r.d(t,{A:()=>f});var e=r(30563);var i=r(46047);var o,a=r(88772);function u(n,t){var r=(0,a.f)(n,t);if(!r)return n+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")}const l={"%":(n,t)=>(100*n).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:a.A,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>u(100*n,t),r:u,s:function(n,t){var r=(0,a.f)(n,t);if(!r)return n+"";var e=r[0],i=r[1],u=i-(o=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,l=e.length;return u===l?e:u>l?e+new Array(u-l+1).join("0"):u>0?e.slice(0,u)+"."+e.slice(u):"0."+new Array(1-u).join("0")+(0,a.f)(n,Math.max(0,t+u-1))[0]},X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function s(n){return n}var c=Array.prototype.map,h=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"];function f(n){var t,r,a=void 0===n.grouping||void 0===n.thousands?s:(t=c.call(n.grouping,Number),r=n.thousands+"",function(n,e){for(var i=n.length,o=[],a=0,u=t[0],l=0;i>0&&u>0&&(l+u+1>e&&(u=Math.max(1,e-l)),o.push(n.substring(i-=u,i+u)),!((l+=u+1)>e));)u=t[a=(a+1)%t.length];return o.reverse().join(r)}),u=void 0===n.currency?"":n.currency[0]+"",f=void 0===n.currency?"":n.currency[1]+"",g=void 0===n.decimal?".":n.decimal+"",d=void 0===n.numerals?s:function(n){return function(t){return t.replace(/[0-9]/g,(function(t){return n[+t]}))}}(c.call(n.numerals,String)),p=void 0===n.percent?"%":n.percent+"",m=void 0===n.minus?"\u2212":n.minus+"",y=void 0===n.nan?"NaN":n.nan+"";function v(n){var t=(n=(0,i.A)(n)).fill,r=n.align,e=n.sign,s=n.symbol,c=n.zero,v=n.width,A=n.comma,w=n.precision,M=n.trim,b=n.type;"n"===b?(A=!0,b="g"):l[b]||(void 0===w&&(w=12),M=!0,b="g"),(c||"0"===t&&"="===r)&&(c=!0,t="0",r="=");var x="$"===s?u:"#"===s&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",N="$"===s?f:/[%p]/.test(b)?p:"",k=l[b],$=/[defgprs%]/.test(b);function E(n){var i,u,l,s=x,f=N;if("c"===b)f=k(n)+f,n="";else{var p=(n=+n)<0||1/n<0;if(n=isNaN(n)?y:k(Math.abs(n),w),M&&(n=function(n){n:for(var t,r=n.length,e=1,i=-1;e<r;++e)switch(n[e]){case".":i=t=e;break;case"0":0===i&&(i=e),t=e;break;default:if(!+n[e])break n;i>0&&(i=0)}return i>0?n.slice(0,i)+n.slice(t+1):n}(n)),p&&0===+n&&"+"!==e&&(p=!1),s=(p?"("===e?e:m:"-"===e||"("===e?"":e)+s,f=("s"===b?h[8+o/3]:"")+f+(p&&"("===e?")":""),$)for(i=-1,u=n.length;++i<u;)if(48>(l=n.charCodeAt(i))||l>57){f=(46===l?g+n.slice(i+1):n.slice(i))+f,n=n.slice(0,i);break}}A&&!c&&(n=a(n,1/0));var E=s.length+n.length+f.length,C=E<v?new Array(v-E+1).join(t):"";switch(A&&c&&(n=a(C+n,C.length?v-f.length:1/0),C=""),r){case"<":n=s+n+f+C;break;case"=":n=s+C+n+f;break;case"^":n=C.slice(0,E=C.length>>1)+s+n+f+C.slice(E);break;default:n=C+s+n+f}return d(n)}return w=void 0===w?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w)),E.toString=function(){return n+""},E}return{format:v,formatPrefix:function(n,t){var r=v(((n=(0,i.A)(n)).type="f",n)),o=3*Math.max(-8,Math.min(8,Math.floor((0,e.A)(t)/3))),a=Math.pow(10,-o),u=h[8+o/3];return function(n){return r(a*n)+u}}}}},52102:(n,t,r)=>{r.d(t,{A:()=>i});var e=r(30563);function i(n){return Math.max(0,-(0,e.A)(Math.abs(n)))}},16038:(n,t,r)=>{r.d(t,{A:()=>i});var e=r(30563);function i(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,e.A)(t)/3)))-(0,e.A)(Math.abs(n)))}},96324:(n,t,r)=>{r.d(t,{A:()=>i});var e=r(30563);function i(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,(0,e.A)(t)-(0,e.A)(n))+1}},63535:(n,t,r)=>{r.d(t,{$:()=>a,A:()=>o});var e=r(80039),i=r(30032);function o(n,t){return((0,i.p)(t)?i.A:a)(n,t)}function a(n,t){var r,i=t?t.length:0,o=n?Math.min(i,n.length):0,a=new Array(o),u=new Array(i);for(r=0;r<o;++r)a[r]=(0,e.A)(n[r],t[r]);for(;r<i;++r)u[r]=t[r];return function(n){for(r=0;r<o;++r)u[r]=a[r](n);return u}}},36368:(n,t,r)=>{function e(n,t,r,e,i){var o=n*n,a=o*n;return((1-3*n+3*o-a)*t+(4-6*o+3*a)*r+(1+3*n+3*o-3*a)*e+a*i)/6}function i(n){var t=n.length-1;return function(r){var i=r<=0?r=0:r>=1?(r=1,t-1):Math.floor(r*t),o=n[i],a=n[i+1],u=i>0?n[i-1]:2*o-a,l=i<t-1?n[i+2]:2*a-o;return e((r-i/t)*t,u,o,a,l)}}r.d(t,{A:()=>i,H:()=>e})},16284:(n,t,r)=>{r.d(t,{A:()=>i});var e=r(36368);function i(n){var t=n.length;return function(r){var i=Math.floor(((r%=1)<0?++r:r)*t),o=n[(i+t-1)%t],a=n[i%t],u=n[(i+1)%t],l=n[(i+2)%t];return(0,e.H)((r-i/t)*t,o,a,u,l)}}},73637:(n,t,r)=>{r.d(t,{Ay:()=>u,lG:()=>o,uN:()=>a});var e=r(80428);function i(n,t){return function(r){return n+r*t}}function o(n,t){var r=t-n;return r?i(n,r>180||r<-180?r-360*Math.round(r/360):r):(0,e.A)(isNaN(n)?t:n)}function a(n){return 1===(n=+n)?u:function(t,r){return r-t?function(n,t,r){return n=Math.pow(n,r),t=Math.pow(t,r)-n,r=1/r,function(e){return Math.pow(n+e*t,r)}}(t,r,n):(0,e.A)(isNaN(t)?r:t)}}function u(n,t){var r=t-n;return r?i(n,r):(0,e.A)(isNaN(n)?t:n)}},80428:(n,t,r)=>{r.d(t,{A:()=>e});const e=n=>()=>n},44700:(n,t,r)=>{function e(n,t){var r=new Date;return n=+n,t=+t,function(e){return r.setTime(n*(1-e)+t*e),r}}r.d(t,{A:()=>e})},48853:(n,t,r)=>{function e(n,t){return n=+n,t=+t,function(r){return n*(1-r)+t*r}}r.d(t,{A:()=>e})},30032:(n,t,r)=>{function e(n,t){t||(t=[]);var r,e=n?Math.min(t.length,n.length):0,i=t.slice();return function(o){for(r=0;r<e;++r)i[r]=n[r]*(1-o)+t[r]*o;return i}}function i(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}r.d(t,{A:()=>e,p:()=>i})},47983:(n,t,r)=>{r.d(t,{A:()=>i});var e=r(80039);function i(n,t){var r,i={},o={};for(r in null!==n&&"object"===typeof n||(n={}),null!==t&&"object"===typeof t||(t={}),t)r in n?i[r]=(0,e.A)(n[r],t[r]):o[r]=t[r];return function(n){for(r in i)o[r]=i[r](n);return o}}},70701:(n,t,r)=>{r.d(t,{Ay:()=>u,Ik:()=>s,uL:()=>c});var e=r(89421),i=r(36368),o=r(16284),a=r(73637);const u=function n(t){var r=(0,a.uN)(t);function i(n,t){var i=r((n=(0,e.Qh)(n)).r,(t=(0,e.Qh)(t)).r),o=r(n.g,t.g),u=r(n.b,t.b),l=(0,a.Ay)(n.opacity,t.opacity);return function(t){return n.r=i(t),n.g=o(t),n.b=u(t),n.opacity=l(t),n+""}}return i.gamma=n,i}(1);function l(n){return function(t){var r,i,o=t.length,a=new Array(o),u=new Array(o),l=new Array(o);for(r=0;r<o;++r)i=(0,e.Qh)(t[r]),a[r]=i.r||0,u[r]=i.g||0,l[r]=i.b||0;return a=n(a),u=n(u),l=n(l),i.opacity=1,function(n){return i.r=a(n),i.g=u(n),i.b=l(n),i+""}}}var s=l(i.A),c=l(o.A)},72970:(n,t,r)=>{function e(n,t){return n=+n,t=+t,function(r){return Math.round(n*(1-r)+t*r)}}r.d(t,{A:()=>e})},56409:(n,t,r)=>{r.d(t,{A:()=>a});var e=r(48853),i=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,o=new RegExp(i.source,"g");function a(n,t){var r,a,u,l=i.lastIndex=o.lastIndex=0,s=-1,c=[],h=[];for(n+="",t+="";(r=i.exec(n))&&(a=o.exec(t));)(u=a.index)>l&&(u=t.slice(l,u),c[s]?c[s]+=u:c[++s]=u),(r=r[0])===(a=a[0])?c[s]?c[s]+=a:c[++s]=a:(c[++s]=null,h.push({i:s,x:(0,e.A)(r,a)})),l=o.lastIndex;return l<t.length&&(u=t.slice(l),c[s]?c[s]+=u:c[++s]=u),c.length<2?h[0]?function(n){return function(t){return n(t)+""}}(h[0].x):function(n){return function(){return n}}(t):(t=h.length,function(n){for(var r,e=0;e<t;++e)c[(r=h[e]).i]=r.x(n);return c.join("")})}},80039:(n,t,r)=>{r.d(t,{A:()=>f});var e=r(89421),i=r(70701),o=r(63535),a=r(44700),u=r(48853),l=r(47983),s=r(56409),c=r(80428),h=r(30032);function f(n,t){var r,f=typeof t;return null==t||"boolean"===f?(0,c.A)(t):("number"===f?u.A:"string"===f?(r=(0,e.Ay)(t))?(t=r,i.Ay):s.A:t instanceof e.Ay?i.Ay:t instanceof Date?a.A:(0,h.p)(t)?h.A:Array.isArray(t)?o.$:"function"!==typeof t.valueOf&&"function"!==typeof t.toString||isNaN(t)?l.A:u.A)(n,t)}},95507:(n,t,r)=>{r.d(t,{C:()=>g,Ay:()=>p,D_:()=>s,Gu:()=>d});var e=r(66384),i=r(80039),o=r(48853),a=r(72970);var u=r(68558),l=[0,1];function s(n){return n}function c(n,t){return(t-=n=+n)?function(r){return(r-n)/t}:(r=isNaN(t)?NaN:.5,function(){return r});var r}function h(n,t,r){var e=n[0],i=n[1],o=t[0],a=t[1];return i<e?(e=c(i,e),o=r(a,o)):(e=c(e,i),o=r(o,a)),function(n){return o(e(n))}}function f(n,t,r){var i=Math.min(n.length,t.length)-1,o=new Array(i),a=new Array(i),u=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++u<i;)o[u]=c(n[u],n[u+1]),a[u]=r(t[u],t[u+1]);return function(t){var r=(0,e.Ay)(n,t,1,i)-1;return a[r](o[r](t))}}function g(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function d(){var n,t,r,e,c,g,d=l,p=l,m=i.A,y=s;function v(){var n=Math.min(d.length,p.length);return y!==s&&(y=function(n,t){var r;return n>t&&(r=n,n=t,t=r),function(r){return Math.max(n,Math.min(t,r))}}(d[0],d[n-1])),e=n>2?f:h,c=g=null,A}function A(t){return null==t||isNaN(t=+t)?r:(c||(c=e(d.map(n),p,m)))(n(y(t)))}return A.invert=function(r){return y(t((g||(g=e(p,d.map(n),o.A)))(r)))},A.domain=function(n){return arguments.length?(d=Array.from(n,u.A),v()):d.slice()},A.range=function(n){return arguments.length?(p=Array.from(n),v()):p.slice()},A.rangeRound=function(n){return p=Array.from(n),m=a.A,v()},A.clamp=function(n){return arguments.length?(y=!!n||s,v()):y!==s},A.interpolate=function(n){return arguments.length?(m=n,v()):m},A.unknown=function(n){return arguments.length?(r=n,A):r},function(r,e){return n=r,t=e,v()}}function p(){return d()(s,s)}},57113:(n,t,r)=>{function e(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n)}return this}function i(n,t){switch(arguments.length){case 0:break;case 1:"function"===typeof n?this.interpolator(n):this.range(n);break;default:this.domain(n),"function"===typeof t?this.interpolator(t):this.range(t)}return this}r.d(t,{C:()=>e,K:()=>i})},53142:(n,t,r)=>{r.d(t,{A:()=>l,C:()=>u});var e=r(17698),i=r(95507),o=r(57113),a=r(10545);function u(n){var t=n.domain;return n.ticks=function(n){var r=t();return(0,e.Ay)(r[0],r[r.length-1],null==n?10:n)},n.tickFormat=function(n,r){var e=t();return(0,a.A)(e[0],e[e.length-1],null==n?10:n,r)},n.nice=function(r){null==r&&(r=10);var i,o,a=t(),u=0,l=a.length-1,s=a[u],c=a[l],h=10;for(c<s&&(o=s,s=c,c=o,o=u,u=l,l=o);h-- >0;){if((o=(0,e.lq)(s,c,r))===i)return a[u]=s,a[l]=c,t(a);if(o>0)s=Math.floor(s/o)*o,c=Math.ceil(c/o)*o;else{if(!(o<0))break;s=Math.ceil(s*o)/o,c=Math.floor(c*o)/o}i=o}return n},n}function l(){var n=(0,i.Ay)();return n.copy=function(){return(0,i.C)(n,l())},o.C.apply(n,arguments),u(n)}},18617:(n,t,r)=>{r.d(t,{A:()=>m,g:()=>p});var e=r(17698),i=r(46047),o=r(55453),a=r(73806),u=r(95507),l=r(57113);function s(n){return Math.log(n)}function c(n){return Math.exp(n)}function h(n){return-Math.log(-n)}function f(n){return-Math.exp(-n)}function g(n){return isFinite(n)?+("1e"+n):n<0?0:n}function d(n){return(t,r)=>-n(-t,r)}function p(n){const t=n(s,c),r=t.domain;let u,l,p=10;function m(){return u=function(n){return n===Math.E?Math.log:10===n&&Math.log10||2===n&&Math.log2||(n=Math.log(n),t=>Math.log(t)/n)}(p),l=function(n){return 10===n?g:n===Math.E?Math.exp:t=>Math.pow(n,t)}(p),r()[0]<0?(u=d(u),l=d(l),n(h,f)):n(s,c),t}return t.base=function(n){return arguments.length?(p=+n,m()):p},t.domain=function(n){return arguments.length?(r(n),m()):r()},t.ticks=n=>{const t=r();let i=t[0],o=t[t.length-1];const a=o<i;a&&([i,o]=[o,i]);let s,c,h=u(i),f=u(o);const g=null==n?10:+n;let d=[];if(!(p%1)&&f-h<g){if(h=Math.floor(h),f=Math.ceil(f),i>0){for(;h<=f;++h)for(s=1;s<p;++s)if(c=h<0?s/l(-h):s*l(h),!(c<i)){if(c>o)break;d.push(c)}}else for(;h<=f;++h)for(s=p-1;s>=1;--s)if(c=h>0?s/l(-h):s*l(h),!(c<i)){if(c>o)break;d.push(c)}2*d.length<g&&(d=(0,e.Ay)(i,o,g))}else d=(0,e.Ay)(h,f,Math.min(f-h,g)).map(l);return a?d.reverse():d},t.tickFormat=(n,r)=>{if(null==n&&(n=10),null==r&&(r=10===p?"s":","),"function"!==typeof r&&(p%1||null!=(r=(0,i.A)(r)).precision||(r.trim=!0),r=(0,o.GP)(r)),n===1/0)return r;const e=Math.max(1,p*n/t.ticks().length);return n=>{let t=n/l(Math.round(u(n)));return t*p<p-.5&&(t*=p),t<=e?r(n):""}},t.nice=()=>r((0,a.A)(r(),{floor:n=>l(Math.floor(u(n))),ceil:n=>l(Math.ceil(u(n)))})),t}function m(){const n=p((0,u.Gu)()).domain([1,10]);return n.copy=()=>(0,u.C)(n,m()).base(n.base()),l.C.apply(n,arguments),n}},73806:(n,t,r)=>{function e(n,t){var r,e=0,i=(n=n.slice()).length-1,o=n[e],a=n[i];return a<o&&(r=e,e=i,i=r,r=o,o=a,a=r),n[e]=t.floor(o),n[i]=t.ceil(a),n}r.d(t,{A:()=>e})},68558:(n,t,r)=>{function e(n){return+n}r.d(t,{A:()=>e})},61562:(n,t,r)=>{r.d(t,{A:()=>a,h:()=>o});var e=r(19639),i=r(57113);const o=Symbol("implicit");function a(){var n=new e.B,t=[],r=[],u=o;function l(e){let i=n.get(e);if(void 0===i){if(u!==o)return u;n.set(e,i=t.push(e)-1)}return r[i%r.length]}return l.domain=function(r){if(!arguments.length)return t.slice();t=[],n=new e.B;for(const e of r)n.has(e)||n.set(e,t.push(e)-1);return l},l.range=function(n){return arguments.length?(r=Array.from(n),l):r.slice()},l.unknown=function(n){return arguments.length?(u=n,l):u},l.copy=function(){return a(t,r).unknown(u)},i.C.apply(l,arguments),l}},52509:(n,t,r)=>{r.d(t,{Ay:()=>c,DS:()=>s,RZ:()=>h});var e=r(53142),i=r(95507),o=r(57113);function a(n){return function(t){return t<0?-Math.pow(-t,n):Math.pow(t,n)}}function u(n){return n<0?-Math.sqrt(-n):Math.sqrt(n)}function l(n){return n<0?-n*n:n*n}function s(n){var t=n(i.D_,i.D_),r=1;return t.exponent=function(t){return arguments.length?1===(r=+t)?n(i.D_,i.D_):.5===r?n(u,l):n(a(r),a(1/r)):r},(0,e.C)(t)}function c(){var n=s((0,i.Gu)());return n.copy=function(){return(0,i.C)(n,c()).exponent(n.exponent())},o.C.apply(n,arguments),n}function h(){return c.apply(null,arguments).exponent(.5)}},39622:(n,t,r)=>{r.d(t,{A:()=>u});var e=r(8410),i=r(66384),o=r(25638),a=r(57113);function u(){var n,t=[],r=[],l=[];function s(){var n=0,i=Math.max(1,r.length);for(l=new Array(i-1);++n<i;)l[n-1]=(0,e.Z4)(t,n/i);return c}function c(t){return null==t||isNaN(t=+t)?n:r[(0,i.Ay)(l,t)]}return c.invertExtent=function(n){var e=r.indexOf(n);return e<0?[NaN,NaN]:[e>0?l[e-1]:t[0],e<l.length?l[e]:t[t.length-1]]},c.domain=function(n){if(!arguments.length)return t.slice();t=[];for(let r of n)null==r||isNaN(r=+r)||t.push(r);return t.sort(o.A),s()},c.range=function(n){return arguments.length?(r=Array.from(n),s()):r.slice()},c.unknown=function(t){return arguments.length?(n=t,c):n},c.quantiles=function(){return l.slice()},c.copy=function(){return u().domain(t).range(r).unknown(n)},a.C.apply(c,arguments)}},57892:(n,t,r)=>{r.d(t,{A:()=>a});var e=r(66384),i=r(53142),o=r(57113);function a(){var n,t=0,r=1,u=1,l=[.5],s=[0,1];function c(t){return null!=t&&t<=t?s[(0,e.Ay)(l,t,0,u)]:n}function h(){var n=-1;for(l=new Array(u);++n<u;)l[n]=((n+1)*r-(n-u)*t)/(u+1);return c}return c.domain=function(n){return arguments.length?([t,r]=n,t=+t,r=+r,h()):[t,r]},c.range=function(n){return arguments.length?(u=(s=Array.from(n)).length-1,h()):s.slice()},c.invertExtent=function(n){var e=s.indexOf(n);return e<0?[NaN,NaN]:e<1?[t,l[0]]:e>=u?[l[u-1],r]:[l[e-1],l[e]]},c.unknown=function(t){return arguments.length?(n=t,c):c},c.thresholds=function(){return l.slice()},c.copy=function(){return a().domain([t,r]).range(s).unknown(n)},o.C.apply((0,i.C)(c),arguments)}},31708:(n,t,r)=>{r.d(t,{A:()=>o});var e=r(66384),i=r(57113);function o(){var n,t=[.5],r=[0,1],a=1;function u(i){return null!=i&&i<=i?r[(0,e.Ay)(t,i,0,a)]:n}return u.domain=function(n){return arguments.length?(t=Array.from(n),a=Math.min(t.length,r.length-1),u):t.slice()},u.range=function(n){return arguments.length?(r=Array.from(n),a=Math.min(t.length,r.length-1),u):r.slice()},u.invertExtent=function(n){var e=r.indexOf(n);return[t[e-1],t[e]]},u.unknown=function(t){return arguments.length?(n=t,u):n},u.copy=function(){return o().domain(t).range(r).unknown(n)},i.C.apply(u,arguments)}},10545:(n,t,r)=>{r.d(t,{A:()=>s});var e=r(17698),i=r(46047),o=r(16038),a=r(55453),u=r(96324),l=r(52102);function s(n,t,r,s){var c,h=(0,e.sG)(n,t,r);switch((s=(0,i.A)(null==s?",f":s)).type){case"s":var f=Math.max(Math.abs(n),Math.abs(t));return null!=s.precision||isNaN(c=(0,o.A)(h,f))||(s.precision=c),(0,a.s)(s,f);case"":case"e":case"g":case"p":case"r":null!=s.precision||isNaN(c=(0,u.A)(h,Math.max(Math.abs(n),Math.abs(t))))||(s.precision=c-("e"===s.type));break;case"f":case"%":null!=s.precision||isNaN(c=(0,l.A)(h))||(s.precision=c-2*("%"===s.type))}return(0,a.GP)(s)}},19639:(n,t,r)=>{r.d(t,{B:()=>e,v:()=>i});class e extends Map{constructor(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=n)for(const[r,e]of n)this.set(r,e)}get(n){return super.get(o(this,n))}has(n){return super.has(o(this,n))}set(n,t){return super.set(a(this,n),t)}delete(n){return super.delete(u(this,n))}}class i extends Set{constructor(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=n)for(const r of n)this.add(r)}has(n){return super.has(o(this,n))}add(n){return super.add(a(this,n))}delete(n){return super.delete(u(this,n))}}function o(n,t){let{_intern:r,_key:e}=n;const i=e(t);return r.has(i)?r.get(i):t}function a(n,t){let{_intern:r,_key:e}=n;const i=e(t);return r.has(i)?r.get(i):(r.set(i,t),t)}function u(n,t){let{_intern:r,_key:e}=n;const i=e(t);return r.has(i)&&(t=r.get(i),r.delete(i)),t}function l(n){return null!==n&&"object"===typeof n?n.valueOf():n}}}]);