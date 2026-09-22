(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Hd="modulepreload",Bd=function(o){return"/ellipse/"+o},bl={},Ch=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=r?.nonce||r?.getAttribute("nonce");i=Promise.allSettled(e.map(l=>{if(l=Bd(l),l in bl)return;bl[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Hd,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,f)=>{h.addEventListener("load",d),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="160",zd=0,Sl=1,Gd=2,Ph=1,Wd=2,ei=3,Un=0,cn=1,Oe=2,wi=0,Ai=1,fn=2,Tl=3,El=4,Vd=5,Yi=100,Xd=101,qd=102,wl=103,Al=104,Yd=200,$d=201,Kd=202,jd=203,Ba=204,za=205,Zd=206,Jd=207,Qd=208,tu=209,eu=210,nu=211,iu=212,su=213,ou=214,ru=0,au=1,lu=2,xr=3,cu=4,hu=5,du=6,uu=7,il=0,fu=1,pu=2,oi=0,mu=1,gu=2,yu=3,xu=4,_u=5,vu=6,Rl="attached",Mu="detached",Lh=300,Us=301,Ns=302,Ga=303,Wa=304,wr=306,_n=1e3,He=1001,_r=1002,Xe=1003,Va=1004,mr=1005,Qe=1006,Ih=1007,Qi=1008,Ri=1009,bu=1010,Su=1011,sl=1012,Dh=1013,bi=1014,ii=1015,po=1016,Uh=1017,Nh=1018,ji=1020,Tu=1021,pn=1023,Eu=1024,wu=1025,Zi=1026,Fs=1027,Au=1028,Fh=1029,Ru=1030,kh=1031,Oh=1033,Fr=33776,kr=33777,Or=33778,Hr=33779,Cl=35840,Pl=35841,Ll=35842,Il=35843,Hh=36196,Dl=37492,Ul=37496,Nl=37808,Fl=37809,kl=37810,Ol=37811,Hl=37812,Bl=37813,zl=37814,Gl=37815,Wl=37816,Vl=37817,Xl=37818,ql=37819,Yl=37820,$l=37821,Br=36492,Kl=36494,jl=36495,Cu=36283,Zl=36284,Jl=36285,Ql=36286,mo=2300,ks=2301,zr=2302,tc=2400,ec=2401,nc=2402,Pu=2500,Lu=0,Bh=1,Xa=2,zh=3e3,Ji=3001,Iu=3200,Du=3201,ol=0,Uu=1,En="",ie="srgb",Pe="srgb-linear",rl="display-p3",Ar="display-p3-linear",vr="linear",Te="srgb",Mr="rec709",br="p3",ss=7680,ic=519,Nu=512,Fu=513,ku=514,Gh=515,Ou=516,Hu=517,Bu=518,zu=519,qa=35044,sc="300 es",Ya=1035,si=2e3,Sr=2001;class Gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oc=1234567;const ao=Math.PI/180,Os=180/Math.PI;function Dn(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[o&255]+Ze[o>>8&255]+Ze[o>>16&255]+Ze[o>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function tn(o,t,e){return Math.max(t,Math.min(e,o))}function al(o,t){return(o%t+t)%t}function Gu(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function Wu(o,t,e){return o!==t?(e-o)/(t-o):0}function lo(o,t,e){return(1-e)*o+e*t}function Vu(o,t,e,n){return lo(o,t,1-Math.exp(-e*n))}function Xu(o,t=1){return t-Math.abs(al(o,t*2)-t)}function qu(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Yu(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function $u(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Ku(o,t){return o+Math.random()*(t-o)}function ju(o){return o*(.5-Math.random())}function Zu(o){o!==void 0&&(oc=o);let t=oc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ju(o){return o*ao}function Qu(o){return o*Os}function $a(o){return(o&o-1)===0&&o!==0}function tf(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Tr(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ef(o,t,e,n,i){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+n)/2),u=r((t+n)/2),h=s((t-n)/2),d=r((t-n)/2),f=s((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":o.set(a*u,l*h,l*d,a*c);break;case"YZY":o.set(l*d,a*u,l*h,a*c);break;case"ZXZ":o.set(l*h,l*d,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function xe(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const nf={DEG2RAD:ao,RAD2DEG:Os,generateUUID:Dn,clamp:tn,euclideanModulo:al,mapLinear:Gu,inverseLerp:Wu,lerp:lo,damp:Vu,pingpong:Xu,smoothstep:qu,smootherstep:Yu,randInt:$u,randFloat:Ku,randFloatSpread:ju,seededRandom:Zu,degToRad:Ju,radToDeg:Qu,isPowerOfTwo:$a,ceilPowerOfTwo:tf,floorPowerOfTwo:Tr,setQuaternionFromProperEuler:ef,normalize:xe,denormalize:Gn};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,i,s,r,a,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c)}set(t,e,n,i,s,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],y=i[0],m=i[3],p=i[6],x=i[1],_=i[4],b=i[7],C=i[2],w=i[5],S=i[8];return s[0]=r*y+a*x+l*C,s[3]=r*m+a*_+l*w,s[6]=r*p+a*b+l*S,s[1]=c*y+u*x+h*C,s[4]=c*m+u*_+h*w,s[7]=c*p+u*b+h*S,s[2]=d*y+f*x+g*C,s[5]=d*m+f*_+g*w,s[8]=d*p+f*b+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-n*s*u+n*a*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*r-a*c,d=a*l-u*s,f=c*s-r*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=h*y,t[1]=(i*c-u*n)*y,t[2]=(a*n-i*r)*y,t[3]=d*y,t[4]=(u*e-i*l)*y,t[5]=(i*s-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(r*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gr.makeScale(t,e)),this}rotate(t){return this.premultiply(Gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new ee;function Wh(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function go(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function sf(){const o=go("canvas");return o.style.display="block",o}const rc={};function co(o){o in rc||(rc[o]=!0,console.warn(o))}const ac=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lc=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[Pe]:{transfer:vr,primaries:Mr,toReference:o=>o,fromReference:o=>o},[ie]:{transfer:Te,primaries:Mr,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Ar]:{transfer:vr,primaries:br,toReference:o=>o.applyMatrix3(lc),fromReference:o=>o.applyMatrix3(ac)},[rl]:{transfer:Te,primaries:br,toReference:o=>o.convertSRGBToLinear().applyMatrix3(lc),fromReference:o=>o.applyMatrix3(ac).convertLinearToSRGB()}},of=new Set([Pe,Ar]),me={enabled:!0,_workingColorSpace:Pe,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!of.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=To[t].toReference,i=To[e].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return To[o].primaries},getTransfer:function(o){return o===En?vr:To[o].transfer}};function Is(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let os;class Vh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=go("canvas")),os.width=t.width,os.height=t.height;const n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=go("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Is(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Is(e[n]/255)*255):e[n]=Is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rf=0;class Xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Dn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Vr(i[r].image)):s.push(Vr(i[r]))}else s=Vr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Vr(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Vh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let af=0;class Be extends Gs{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=He,i=He,s=Qe,r=Qi,a=pn,l=Ri,c=Be.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Dn(),this.name="",this.source=new Xh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ji?ie:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _n:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case _r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _n:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case _r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ie?Ji:zh}set encoding(t){co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ji?ie:En}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Lh;Be.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,b=(f+1)/2,C=(p+1)/2,w=(u+d)/4,S=(h+y)/4,O=(g+m)/4;return _>b&&_>C?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=w/n,s=S/n):b>C?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=w/i,s=O/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=S/s,i=O/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-y)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lf extends Gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(co("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ji?ie:En),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends lf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qh extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cf extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class an{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],y=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(h!==y||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*y,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),w=Math.atan2(C,p*x);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const b=a*x;if(l=l*m+d*b,c=c*m+f*b,u=u*m+g*b,h=h*m+y*b,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return t[e]=a*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-a*f,t[e+2]=c*g+u*f+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*a+i*c-s*l,this._y=i*u+r*l+s*a-n*c,this._z=s*u+r*c+n*l-i*a,this._w=r*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),u=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+l*c+r*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new L,cc=new an;class vn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Pn):Pn.fromBufferAttribute(s,r),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),wo.subVectors(this.max,Ks),rs.subVectors(t.a,Ks),as.subVectors(t.b,Ks),ls.subVectors(t.c,Ks),li.subVectors(as,rs),ci.subVectors(ls,as),Ui.subVectors(rs,ls);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ui.z,Ui.y,li.z,0,-li.x,ci.z,0,-ci.x,Ui.z,0,-Ui.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ui.y,Ui.x,0];return!qr(e,rs,as,ls,wo)||(e=[1,0,0,0,1,0,0,0,1],!qr(e,rs,as,ls,wo))?!1:(Ao.crossVectors(li,ci),e=[Ao.x,Ao.y,Ao.z],qr(e,rs,as,ls,wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new L,new L,new L,new L,new L,new L,new L,new L],Pn=new L,Eo=new vn,rs=new L,as=new L,ls=new L,li=new L,ci=new L,Ui=new L,Ks=new L,wo=new L,Ao=new L,Ni=new L;function qr(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Ni.fromArray(o,s);const a=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),u=n.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hf=new vn,js=new L,Yr=new L;class Vn{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Yr)),this.expandByPoint(js.copy(t.center).sub(Yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new L,$r=new L,Ro=new L,hi=new L,Kr=new L,Co=new L,jr=new L;class Rr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$r.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),hi.copy(this.origin).sub($r);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Ro),a=hi.dot(this.direction),l=-hi.dot(Ro),c=hi.lengthSq(),u=Math.abs(1-r*r);let h,d,f,g;if(u>0)if(h=r*l-a,d=r*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,f=h*(h+r*d+2*a)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($r).addScaledVector(Ro,d),f}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,i,s){Kr.subVectors(e,t),Co.subVectors(n,t),jr.crossVectors(Kr,Co);let r=this.direction.dot(jr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;hi.subVectors(this.origin,t);const l=a*this.direction.dot(Co.crossVectors(hi,Co));if(l<0)return null;const c=a*this.direction.dot(Kr.cross(hi));if(c<0||l+c>r)return null;const u=-a*hi.dot(jr);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,i,s,r,a,l,c,u,h,d,f,g,y,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c,u,h,d,f,g,y,m)}set(t,e,n,i,s,r,a,l,c,u,h,d,f,g,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/cs.setFromMatrixColumn(t,0).length(),s=1/cs.setFromMatrixColumn(t,1).length(),r=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=r*u,f=r*h,g=a*u,y=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,y=c*h;e[0]=d+y*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=f*a-g,e[6]=y+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,y=c*h;e[0]=d-y*a,e[4]=-r*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*u,e[9]=y-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*u,f=r*h,g=a*u,y=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*h,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,g=a*l,y=a*c;e[0]=l*u,e[4]=y-d*h,e[8]=g*h+f,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-y*h}else if(t.order==="XZY"){const d=r*l,f=r*c,g=a*l,y=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+y,e[5]=r*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=y*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(df,t,uf)}lookAt(t,e,n){const i=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),di.crossVectors(n,yn),di.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),di.crossVectors(n,yn)),di.normalize(),Po.crossVectors(yn,di),i[0]=di.x,i[4]=Po.x,i[8]=yn.x,i[1]=di.y,i[5]=Po.y,i[9]=yn.y,i[2]=di.z,i[6]=Po.z,i[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],x=n[3],_=n[7],b=n[11],C=n[15],w=i[0],S=i[4],O=i[8],M=i[12],v=i[1],F=i[5],k=i[9],K=i[13],I=i[2],G=i[6],q=i[10],Z=i[14],J=i[3],j=i[7],tt=i[11],ct=i[15];return s[0]=r*w+a*v+l*I+c*J,s[4]=r*S+a*F+l*G+c*j,s[8]=r*O+a*k+l*q+c*tt,s[12]=r*M+a*K+l*Z+c*ct,s[1]=u*w+h*v+d*I+f*J,s[5]=u*S+h*F+d*G+f*j,s[9]=u*O+h*k+d*q+f*tt,s[13]=u*M+h*K+d*Z+f*ct,s[2]=g*w+y*v+m*I+p*J,s[6]=g*S+y*F+m*G+p*j,s[10]=g*O+y*k+m*q+p*tt,s[14]=g*M+y*K+m*Z+p*ct,s[3]=x*w+_*v+b*I+C*J,s[7]=x*S+_*F+b*G+C*j,s[11]=x*O+_*k+b*q+C*tt,s[15]=x*M+_*K+b*Z+C*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+y*(+e*l*f-e*c*d+s*r*d-i*r*f+i*c*u-s*l*u)+m*(+e*c*h-e*a*f-s*r*h+n*r*f+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*d+i*r*h-n*r*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],x=h*m*c-y*d*c+y*l*f-a*m*f-h*l*p+a*d*p,_=g*d*c-u*m*c-g*l*f+r*m*f+u*l*p-r*d*p,b=u*y*c-g*h*c+g*a*f-r*y*f-u*a*p+r*h*p,C=g*h*l-u*y*l-g*a*d+r*y*d+u*a*m-r*h*m,w=e*x+n*_+i*b+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=x*S,t[1]=(y*d*s-h*m*s-y*i*f+n*m*f+h*i*p-n*d*p)*S,t[2]=(a*m*s-y*l*s+y*i*c-n*m*c-a*i*p+n*l*p)*S,t[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*S,t[4]=_*S,t[5]=(u*m*s-g*d*s+g*i*f-e*m*f-u*i*p+e*d*p)*S,t[6]=(g*l*s-r*m*s-g*i*c+e*m*c+r*i*p-e*l*p)*S,t[7]=(r*d*s-u*l*s+u*i*c-e*d*c-r*i*f+e*l*f)*S,t[8]=b*S,t[9]=(g*h*s-u*y*s-g*n*f+e*y*f+u*n*p-e*h*p)*S,t[10]=(r*y*s-g*a*s+g*n*c-e*y*c-r*n*p+e*a*p)*S,t[11]=(u*a*s-r*h*s-u*n*c+e*h*c+r*n*f-e*a*f)*S,t[12]=C*S,t[13]=(u*y*i-g*h*i+g*n*d-e*y*d-u*n*m+e*h*m)*S,t[14]=(g*a*i-r*y*i-g*n*l+e*y*l+r*n*m-e*a*m)*S,t[15]=(r*h*i-u*a*i+u*n*l-e*h*l-r*n*d+e*a*d)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,c=s*r,u=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*r,0,c*l-i*a,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,u=r+r,h=a+a,d=s*c,f=s*u,g=s*h,y=r*u,m=r*h,p=a*h,x=l*c,_=l*u,b=l*h,C=n.x,w=n.y,S=n.z;return i[0]=(1-(y+p))*C,i[1]=(f+b)*C,i[2]=(g-_)*C,i[3]=0,i[4]=(f-b)*w,i[5]=(1-(d+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+_)*S,i[9]=(m-x)*S,i[10]=(1-(d+y))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=cs.set(i[0],i[1],i[2]).length();const r=cs.set(i[4],i[5],i[6]).length(),a=cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ln.copy(this);const c=1/s,u=1/r,h=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,e.setFromRotationMatrix(Ln),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=si){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===si)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===Sr)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=si){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(r-s),d=(e+t)*c,f=(n+i)*u;let g,y;if(a===si)g=(r+s)*h,y=-2*h;else if(a===Sr)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new L,Ln=new Jt,df=new L(0,0,0),uf=new L(1,1,1),di=new L,Po=new L,yn=new L,hc=new Jt,dc=new an;class Cr{constructor(t=0,e=0,n=0,i=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dc.setFromEuler(this),this.setFromQuaternion(dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class Yh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ff=0;const uc=new L,hs=new an,Zn=new Jt,Lo=new L,Zs=new L,pf=new L,mf=new an,fc=new L(1,0,0),pc=new L(0,1,0),mc=new L(0,0,1),gf={type:"added"},yf={type:"removed"};class Ee extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new L,e=new Cr,n=new an,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ee}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(fc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return uc.copy(t).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lo.copy(t):Lo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Zs,Lo,this.up):Zn.lookAt(Lo,Zs,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(Zn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(gf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new L(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new L,Jn=new L,Zr=new L,Qn=new L,ds=new L,us=new L,gc=new L,Jr=new L,Qr=new L,ta=new L;let Io=!1;class Tn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),In.subVectors(t,e),i.cross(In);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){In.subVectors(i,e),Jn.subVectors(n,e),Zr.subVectors(t,e);const r=In.dot(In),a=In.dot(Jn),l=In.dot(Zr),c=Jn.dot(Jn),u=Jn.dot(Zr),h=r*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(r*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(t,e,n,i,s,r,a,l){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),this.getInterpolation(t,e,n,i,s,r,a,l)}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(r,Qn.y),l.addScaledVector(a,Qn.z),l)}static isFrontFacing(t,e,n,i){return In.subVectors(n,e),Jn.subVectors(t,e),In.cross(Jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),In.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),Tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;ds.subVectors(i,n),us.subVectors(s,n),Jr.subVectors(t,n);const l=ds.dot(Jr),c=us.dot(Jr);if(l<=0&&c<=0)return e.copy(n);Qr.subVectors(t,i);const u=ds.dot(Qr),h=us.dot(Qr);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(ds,r);ta.subVectors(t,s);const f=ds.dot(ta),g=us.dot(ta);if(g>=0&&f<=g)return e.copy(s);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(us,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return gc.subVectors(s,i),a=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(gc,a);const p=1/(m+y+d);return r=y*p,a=d*p,e.copy(n).addScaledVector(ds,r).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Do={h:0,s:0,l:0};function ea(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=al(t,1),e=tn(e,0,1),n=tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=ea(r,s,t+1/3),this.g=ea(r,s,t),this.b=ea(r,s,t-1/3)}return me.toWorkingColorSpace(this,i),this}setStyle(t,e=ie){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ie){const n=$h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ie){return me.fromWorkingColorSpace(Je.copy(this),t),Math.round(tn(Je.r*255,0,255))*65536+Math.round(tn(Je.g*255,0,255))*256+Math.round(tn(Je.b*255,0,255))}getHexString(t=ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(Je.copy(this),e);const n=Je.r,i=Je.g,s=Je.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const h=r-a;switch(c=u<=.5?h/(r+a):h/(2-r-a),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=ie){me.fromWorkingColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,i=Je.b;return t!==ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Do);const n=lo(ui.h,Do.h,e),i=lo(ui.s,Do.s,e),s=lo(ui.l,Do.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Rt;Rt.NAMES=$h;let xf=0;class wn extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Ai,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ba&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Re extends wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new L,Uo=new Vt;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}}class Kh extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jh extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _f=0;const Mn=new Jt,na=new Ee,fs=new L,xn=new vn,Js=new vn,Ve=new L;class Ne extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wh(t)?jh:Kh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new we(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(xn.min,Js.min),xn.expandByPoint(Ve),Ve.addVectors(xn.max,Js.max),xn.expandByPoint(Ve)):(xn.expandByPoint(Js.min),xn.expandByPoint(Js.max))}xn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ve.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ve.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(t,c),Ve.add(fs)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let v=0;v<a;v++)c[v]=new L,u[v]=new L;const h=new L,d=new L,f=new L,g=new Vt,y=new Vt,m=new Vt,p=new L,x=new L;function _(v,F,k){h.fromArray(i,v*3),d.fromArray(i,F*3),f.fromArray(i,k*3),g.fromArray(r,v*2),y.fromArray(r,F*2),m.fromArray(r,k*2),d.sub(h),f.sub(h),y.sub(g),m.sub(g);const K=1/(y.x*m.y-m.x*y.y);isFinite(K)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-y.y).multiplyScalar(K),x.copy(f).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(K),c[v].add(p),c[F].add(p),c[k].add(p),u[v].add(x),u[F].add(x),u[k].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let v=0,F=b.length;v<F;++v){const k=b[v],K=k.start,I=k.count;for(let G=K,q=K+I;G<q;G+=3)_(n[G+0],n[G+1],n[G+2])}const C=new L,w=new L,S=new L,O=new L;function M(v){S.fromArray(s,v*3),O.copy(S);const F=c[v];C.copy(F),C.sub(S.multiplyScalar(S.dot(F))).normalize(),w.crossVectors(O,F);const K=w.dot(u[v])<0?-1:1;l[v*4]=C.x,l[v*4+1]=C.y,l[v*4+2]=C.z,l[v*4+3]=K}for(let v=0,F=b.length;v<F;++v){const k=b[v],K=k.start,I=k.count;for(let G=K,q=K+I;G<q;G+=3)M(n[G+0]),M(n[G+1]),M(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,r=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,m),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Le(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new Jt,Fi=new Rr,No=new Vn,xc=new L,ps=new L,ms=new L,gs=new L,ia=new L,Fo=new L,ko=new Vt,Oo=new Vt,Ho=new Vt,_c=new L,vc=new L,Mc=new L,Bo=new L,zo=new L;class lt extends Ee{constructor(t=new Ne,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ia.fromBufferAttribute(h,t),r?Fo.addScaledVector(ia,u):Fo.addScaledVector(ia.sub(e),u))}e.add(Fo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),Fi.copy(t.ray).recast(t.near),!(No.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(No,xc)===null||Fi.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(yc.copy(s).invert(),Fi.copy(t.ray).applyMatrix4(yc),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,C=_;b<C;b+=3){const w=a.getX(b),S=a.getX(b+1),O=a.getX(b+2);i=Go(this,p,t,n,c,u,h,w,S,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const x=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);i=Go(this,r,t,n,c,u,h,x,_,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,C=_;b<C;b+=3){const w=b,S=b+1,O=b+2;i=Go(this,p,t,n,c,u,h,w,S,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const x=m,_=m+1,b=m+2;i=Go(this,r,t,n,c,u,h,x,_,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function vf(o,t,e,n,i,s,r,a){let l;if(t.side===cn?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===Un,a),l===null)return null;zo.copy(a),zo.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:o}}function Go(o,t,e,n,i,s,r,a,l,c){o.getVertexPosition(a,ps),o.getVertexPosition(l,ms),o.getVertexPosition(c,gs);const u=vf(o,t,e,n,ps,ms,gs,Bo);if(u){i&&(ko.fromBufferAttribute(i,a),Oo.fromBufferAttribute(i,l),Ho.fromBufferAttribute(i,c),u.uv=Tn.getInterpolation(Bo,ps,ms,gs,ko,Oo,Ho,new Vt)),s&&(ko.fromBufferAttribute(s,a),Oo.fromBufferAttribute(s,l),Ho.fromBufferAttribute(s,c),u.uv1=Tn.getInterpolation(Bo,ps,ms,gs,ko,Oo,Ho,new Vt),u.uv2=u.uv1),r&&(_c.fromBufferAttribute(r,a),vc.fromBufferAttribute(r,l),Mc.fromBufferAttribute(r,c),u.normal=Tn.getInterpolation(Bo,ps,ms,gs,_c,vc,Mc,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};Tn.getNormal(ps,ms,gs,h.normal),u.face=h}return u}class Wn extends Ne{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(h,2));function g(y,m,p,x,_,b,C,w,S,O,M){const v=b/S,F=C/O,k=b/2,K=C/2,I=w/2,G=S+1,q=O+1;let Z=0,J=0;const j=new L;for(let tt=0;tt<q;tt++){const ct=tt*F-K;for(let ht=0;ht<G;ht++){const Y=ht*v-k;j[y]=Y*x,j[m]=ct*_,j[p]=I,c.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[p]=w>0?1:-1,u.push(j.x,j.y,j.z),h.push(ht/S),h.push(1-tt/O),Z+=1}}for(let tt=0;tt<O;tt++)for(let ct=0;ct<S;ct++){const ht=d+ct+G*tt,Y=d+ct+G*(tt+1),nt=d+(ct+1)+G*(tt+1),yt=d+(ct+1)+G*tt;l.push(ht,Y,yt),l.push(Y,nt,yt),J+=6}a.addGroup(f,J,M),f+=J,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function rn(o){const t={};for(let e=0;e<o.length;e++){const n=Hs(o[e]);for(const i in n)t[i]=n[i]}return t}function Mf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Zh(o){return o.getRenderTarget()===null?o.outputColorSpace:me.workingColorSpace}const bf={clone:Hs,merge:rn};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=Mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jh extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Jh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ao*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=-90,xs=1;class Ef extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(ys,xs,t,e);i.layers=this.layers,this.add(i);const s=new en(ys,xs,t,e);s.layers=this.layers,this.add(s);const r=new en(ys,xs,t,e);r.layers=this.layers,this.add(r);const a=new en(ys,xs,t,e);a.layers=this.layers,this.add(a);const l=new en(ys,xs,t,e);l.layers=this.layers,this.add(l);const c=new en(ys,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,l]=e;for(const c of e)this.remove(c);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qh extends Be{constructor(t,e,n,i,s,r,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,i,s,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wf extends ts{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(co("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ji?ie:En),this.texture=new Qh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wn(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:wi});s.uniforms.tEquirect.value=e;const r=new lt(i,s),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=Qe),new Ef(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const sa=new L,Af=new L,Rf=new ee;class Xi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=sa.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rf.getNormalMatrix(t),i=this.coplanarPoint(sa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Vn,Wo=new L;class ll{constructor(t=new Xi,e=new Xi,n=new Xi,i=new Xi,s=new Xi,r=new Xi){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){const n=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],y=i[10],m=i[11],p=i[12],x=i[13],_=i[14],b=i[15];if(n[0].setComponents(l-s,d-c,m-f,b-p).normalize(),n[1].setComponents(l+s,d+c,m+f,b+p).normalize(),n[2].setComponents(l+r,d+u,m+g,b+x).normalize(),n[3].setComponents(l-r,d-u,m-g,b-x).normalize(),n[4].setComponents(l-a,d-h,m-y,b-_).normalize(),e===si)n[5].setComponents(l+a,d+h,m+y,b+_).normalize();else if(e===Sr)n[5].setComponents(a,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Wo.x=i.normal.x>0?t.max.x:t.min.x,Wo.y=i.normal.y>0?t.max.y:t.min.y,Wo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function td(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function Cf(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=h.byteLength,g=o.createBuffer();o.bindBuffer(u,g),o.bufferData(u,h,d),c.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)y=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(o.bindBuffer(h,c),f.count===-1&&g.length===0&&o.bufferSubData(h,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){const p=g[y];e?o.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):o.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(e?o.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:r,remove:a,update:l}}class cl extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const x=p*d-r;for(let _=0;_<c;_++){const b=_*h-s;g.push(b,-x,0),y.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,b=x+c*(p+1),C=x+1+c*(p+1),w=x+1+c*p;f.push(_,b,w),f.push(b,C,w)}this.setIndex(f),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(y,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,a0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Pf,alphahash_pars_fragment:Lf,alphamap_fragment:If,alphamap_pars_fragment:Df,alphatest_fragment:Uf,alphatest_pars_fragment:Nf,aomap_fragment:Ff,aomap_pars_fragment:kf,batching_pars_vertex:Of,batching_vertex:Hf,begin_vertex:Bf,beginnormal_vertex:zf,bsdfs:Gf,iridescence_fragment:Wf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:$f,color_fragment:Kf,color_pars_fragment:jf,color_pars_vertex:Zf,color_vertex:Jf,common:Qf,cube_uv_reflection_fragment:tp,defaultnormal_vertex:ep,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:sp,emissivemap_pars_fragment:op,colorspace_fragment:rp,colorspace_pars_fragment:ap,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:hp,envmap_pars_vertex:dp,envmap_physical_pars_fragment:Sp,envmap_vertex:up,fog_vertex:fp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:gp,gradientmap_pars_fragment:yp,lightmap_fragment:xp,lightmap_pars_fragment:_p,lights_lambert_fragment:vp,lights_lambert_pars_fragment:Mp,lights_pars_begin:bp,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ep,lights_phong_fragment:wp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Rp,lights_physical_pars_fragment:Cp,lights_fragment_begin:Pp,lights_fragment_maps:Lp,lights_fragment_end:Ip,logdepthbuf_fragment:Dp,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Fp,map_fragment:kp,map_pars_fragment:Op,map_particle_fragment:Hp,map_particle_pars_fragment:Bp,metalnessmap_fragment:zp,metalnessmap_pars_fragment:Gp,morphcolor_vertex:Wp,morphnormal_vertex:Vp,morphtarget_pars_vertex:Xp,morphtarget_vertex:qp,normal_fragment_begin:Yp,normal_fragment_maps:$p,normal_pars_fragment:Kp,normal_pars_vertex:jp,normal_vertex:Zp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:em,iridescence_pars_fragment:nm,opaque_fragment:im,packing:sm,premultiplied_alpha_fragment:om,project_vertex:rm,dithering_fragment:am,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:um,shadowmap_vertex:fm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:ym,skinnormal_vertex:xm,specularmap_fragment:_m,specularmap_pars_fragment:vm,tonemapping_fragment:Mm,tonemapping_pars_fragment:bm,transmission_fragment:Sm,transmission_pars_fragment:Tm,uv_pars_fragment:Em,uv_pars_vertex:wm,uv_vertex:Am,worldpos_vertex:Rm,background_vert:Cm,background_frag:Pm,backgroundCube_vert:Lm,backgroundCube_frag:Im,cube_vert:Dm,cube_frag:Um,depth_vert:Nm,depth_frag:Fm,distanceRGBA_vert:km,distanceRGBA_frag:Om,equirect_vert:Hm,equirect_frag:Bm,linedashed_vert:zm,linedashed_frag:Gm,meshbasic_vert:Wm,meshbasic_frag:Vm,meshlambert_vert:Xm,meshlambert_frag:qm,meshmatcap_vert:Ym,meshmatcap_frag:$m,meshnormal_vert:Km,meshnormal_frag:jm,meshphong_vert:Zm,meshphong_frag:Jm,meshphysical_vert:Qm,meshphysical_frag:t0,meshtoon_vert:e0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:o0,shadow_frag:r0,sprite_vert:a0,sprite_frag:l0},pt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},zn={basic:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:rn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:rn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:rn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:rn([pt.points,pt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:rn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:rn([pt.common,pt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:rn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:rn([pt.sprite,pt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:rn([pt.common,pt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:rn([pt.lights,pt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};zn.physical={uniforms:rn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Vo={r:0,b:0,g:0};function c0(o,t,e,n,i,s,r){const a=new Rt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let x=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?y(a,l):_&&_.isColor&&(y(_,1),x=!0);const b=o.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),_&&(_.isCubeTexture||_.mapping===wr)?(u===void 0&&(u=new lt(new Wn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Hs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=me.getTransfer(_.colorSpace)!==Te,(h!==_||d!==_.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new lt(new cl(2,2),new Nn({name:"BackgroundMaterial",uniforms:Hs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=me.getTransfer(_.colorSpace)!==Te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,p){m.getRGB(Vo,Zh(o)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:g}}function h0(o,t,e,n){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(I,G,q,Z,J){let j=!1;if(r){const tt=y(Z,q,G);c!==tt&&(c=tt,f(c.object)),j=p(I,Z,q,J),j&&x(I,Z,q,J)}else{const tt=G.wireframe===!0;(c.geometry!==Z.id||c.program!==q.id||c.wireframe!==tt)&&(c.geometry=Z.id,c.program=q.id,c.wireframe=tt,j=!0)}J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,O(I,G,q,Z),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?o.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?o.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,G,q){const Z=q.wireframe===!0;let J=a[I.id];J===void 0&&(J={},a[I.id]=J);let j=J[G.id];j===void 0&&(j={},J[G.id]=j);let tt=j[Z];return tt===void 0&&(tt=m(d()),j[Z]=tt),tt}function m(I){const G=[],q=[],Z=[];for(let J=0;J<i;J++)G[J]=0,q[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:Z,object:I,attributes:{},index:null}}function p(I,G,q,Z){const J=c.attributes,j=G.attributes;let tt=0;const ct=q.getAttributes();for(const ht in ct)if(ct[ht].location>=0){const nt=J[ht];let yt=j[ht];if(yt===void 0&&(ht==="instanceMatrix"&&I.instanceMatrix&&(yt=I.instanceMatrix),ht==="instanceColor"&&I.instanceColor&&(yt=I.instanceColor)),nt===void 0||nt.attribute!==yt||yt&&nt.data!==yt.data)return!0;tt++}return c.attributesNum!==tt||c.index!==Z}function x(I,G,q,Z){const J={},j=G.attributes;let tt=0;const ct=q.getAttributes();for(const ht in ct)if(ct[ht].location>=0){let nt=j[ht];nt===void 0&&(ht==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),ht==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor));const yt={};yt.attribute=nt,nt&&nt.data&&(yt.data=nt.data),J[ht]=yt,tt++}c.attributes=J,c.attributesNum=tt,c.index=Z}function _(){const I=c.newAttributes;for(let G=0,q=I.length;G<q;G++)I[G]=0}function b(I){C(I,0)}function C(I,G){const q=c.newAttributes,Z=c.enabledAttributes,J=c.attributeDivisors;q[I]=1,Z[I]===0&&(o.enableVertexAttribArray(I),Z[I]=1),J[I]!==G&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),J[I]=G)}function w(){const I=c.newAttributes,G=c.enabledAttributes;for(let q=0,Z=G.length;q<Z;q++)G[q]!==I[q]&&(o.disableVertexAttribArray(q),G[q]=0)}function S(I,G,q,Z,J,j,tt){tt===!0?o.vertexAttribIPointer(I,G,q,J,j):o.vertexAttribPointer(I,G,q,Z,J,j)}function O(I,G,q,Z){if(n.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const J=Z.attributes,j=q.getAttributes(),tt=G.defaultAttributeValues;for(const ct in j){const ht=j[ct];if(ht.location>=0){let Y=J[ct];if(Y===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){const nt=Y.normalized,yt=Y.itemSize,St=e.get(Y);if(St===void 0)continue;const Tt=St.buffer,Bt=St.type,zt=St.bytesPerElement,wt=n.isWebGL2===!0&&(Bt===o.INT||Bt===o.UNSIGNED_INT||Y.gpuType===Dh);if(Y.isInterleavedBufferAttribute){const Ft=Y.data,z=Ft.stride,be=Y.offset;if(Ft.isInstancedInterleavedBuffer){for(let Pt=0;Pt<ht.locationSize;Pt++)C(ht.location+Pt,Ft.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let Pt=0;Pt<ht.locationSize;Pt++)b(ht.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let Pt=0;Pt<ht.locationSize;Pt++)S(ht.location+Pt,yt/ht.locationSize,Bt,nt,z*zt,(be+yt/ht.locationSize*Pt)*zt,wt)}else{if(Y.isInstancedBufferAttribute){for(let Ft=0;Ft<ht.locationSize;Ft++)C(ht.location+Ft,Y.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ft=0;Ft<ht.locationSize;Ft++)b(ht.location+Ft);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let Ft=0;Ft<ht.locationSize;Ft++)S(ht.location+Ft,yt/ht.locationSize,Bt,nt,yt*zt,yt/ht.locationSize*Ft*zt,wt)}}else if(tt!==void 0){const nt=tt[ct];if(nt!==void 0)switch(nt.length){case 2:o.vertexAttrib2fv(ht.location,nt);break;case 3:o.vertexAttrib3fv(ht.location,nt);break;case 4:o.vertexAttrib4fv(ht.location,nt);break;default:o.vertexAttrib1fv(ht.location,nt)}}}}w()}function M(){k();for(const I in a){const G=a[I];for(const q in G){const Z=G[q];for(const J in Z)g(Z[J].object),delete Z[J];delete G[q]}delete a[I]}}function v(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const q in G){const Z=G[q];for(const J in Z)g(Z[J].object),delete Z[J];delete G[q]}delete a[I.id]}function F(I){for(const G in a){const q=a[G];if(q[I.id]===void 0)continue;const Z=q[I.id];for(const J in Z)g(Z[J].object),delete Z[J];delete q[I.id]}}function k(){K(),u=!0,c!==l&&(c=l,f(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:v,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:b,disableUnusedAttributes:w}}function d0(o,t,e,n){const i=n.isWebGL2;let s;function r(u){s=u}function a(u,h){o.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,g;if(i)f=o,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),e.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y];e.update(g,s,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function u0(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),d=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),m=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),p=o.getParameter(o.MAX_VARYING_VECTORS),x=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=r||t.has("OES_texture_float"),C=_&&b,w=r?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:w}}function f0(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Xi,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=o.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,_=x*4;let b=p.clippingState||null;l.value=b,b=u(g,d,_,f);for(let C=0;C!==_;++C)b[C]=e[C];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=f+y*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==y;++_,b+=4)r.copy(h[_]).applyMatrix4(x,a),r.normal.toArray(m,b),m[b+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function p0(o){let t=new WeakMap;function e(r,a){return a===Ga?r.mapping=Us:a===Wa&&(r.mapping=Ns),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ga||a===Wa)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new wf(l.height/2);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class hl extends Jh{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ps=4,bc=[.125,.215,.35,.446,.526,.582],$i=20,oa=new hl,Sc=new Rt;let ra=null,aa=0,la=0;const qi=(1+Math.sqrt(5))/2,_s=1/qi,Tc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,qi,_s),new L(0,qi,-_s),new L(_s,0,qi),new L(-_s,0,qi),new L(qi,_s,0),new L(-qi,_s,0)];class Ec{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ra=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,aa,la),t.scissorTest=!1,Xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:po,format:pn,colorSpace:Pe,depthBuffer:!1},i=wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(s)),this._blurMaterial=g0(s,t,e)}return i}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,i){const a=new en(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Sc),u.toneMapping=oi,u.autoClear=!1;const f=new Re({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new lt(new Wn,f);let y=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(Sc),y=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Xo(i,x*_,p>2?_:0,_,_),u.setRenderTarget(i),y&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Us||t.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Xo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Tc[(i-1)%Tc.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*$i-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):$i;m>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const p=[];let x=0;for(let S=0;S<$i;++S){const O=S/y,M=Math.exp(-O*O/2);p.push(M),S===0?x+=M:S<m&&(x+=2*M)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const b=this._sizeLods[i],C=3*b*(i>_-Ps?i-_+Ps:0),w=4*(this._cubeSize-b);Xo(e,C,w,3*b,2*b),l.setRenderTarget(e),l.render(h,oa)}}function m0(o){const t=[],e=[],n=[];let i=o;const s=o-Ps+1+bc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>o-Ps?l=bc[r-o+Ps-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let w=0;w<f;w++){const S=w%3*2/3-1,O=w>2?0:-1,M=[S,O,0,S+2/3,O,0,S+2/3,O+1,0,S,O,0,S+2/3,O+1,0,S,O+1,0];x.set(M,y*g*w),_.set(d,m*g*w);const v=[w,w,w,w,w,w];b.set(v,p*g*w)}const C=new Ne;C.setAttribute("position",new Le(x,y)),C.setAttribute("uv",new Le(_,m)),C.setAttribute("faceIndex",new Le(b,p)),t.push(C),i>Ps&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wc(o,t,e){const n=new ts(o,t,e);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xo(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function g0(o,t,e){const n=new Float32Array($i),i=new L(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ac(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Rc(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y0(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ga||l===Wa,u=l===Us||l===Ns;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Ec(o)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Ec(o));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function x0(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _0(o,t,e,n){const i={},s=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],o.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],o.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let y=0;if(f!==null){const x=f.array;y=f.version;for(let _=0,b=x.length;_<b;_+=3){const C=x[_+0],w=x[_+1],S=x[_+2];d.push(C,w,w,S,S,C)}}else if(g!==void 0){const x=g.array;y=g.version;for(let _=0,b=x.length/3-1;_<b;_+=3){const C=_+0,w=_+1,S=_+2;d.push(C,w,w,S,S,C)}}else return;const m=new(Wh(d)?jh:Kh)(d,1);m.version=y;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function v0(o,t,e,n){const i=n.isWebGL2;let s;function r(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){o.drawElements(s,g,a,f*l),e.update(g,s,1)}function h(f,g,y){if(y===0)return;let m,p;if(i)m=o,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*l,y),e.update(g,s,y)}function d(f,g,y){if(y===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,y);let p=0;for(let x=0;x<y;x++)p+=g[x];e.update(p,s,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function M0(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function b0(o,t){return o[0]-t[0]}function S0(o,t){return Math.abs(t[1])-Math.abs(o[1])}function T0(o,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new ve,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==y){let G=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var f=G;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),b===!0&&(M=2),C===!0&&(M=3);let v=u.attributes.position.count*M,F=1;v>t.maxTextureSize&&(F=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const k=new Float32Array(v*F*4*y),K=new qh(k,v,F,y);K.type=ii,K.needsUpdate=!0;const I=M*4;for(let q=0;q<y;q++){const Z=w[q],J=S[q],j=O[q],tt=v*F*4*q;for(let ct=0;ct<Z.count;ct++){const ht=ct*I;_===!0&&(r.fromBufferAttribute(Z,ct),k[tt+ht+0]=r.x,k[tt+ht+1]=r.y,k[tt+ht+2]=r.z,k[tt+ht+3]=0),b===!0&&(r.fromBufferAttribute(J,ct),k[tt+ht+4]=r.x,k[tt+ht+5]=r.y,k[tt+ht+6]=r.z,k[tt+ht+7]=0),C===!0&&(r.fromBufferAttribute(j,ct),k[tt+ht+8]=r.x,k[tt+ht+9]=r.y,k[tt+ht+10]=r.z,k[tt+ht+11]=j.itemSize===4?r.w:1)}}m={count:y,texture:K,size:new Vt(v,F)},s.set(u,m),u.addEventListener("dispose",G)}let p=0;for(let _=0;_<d.length;_++)p+=d[_];const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(o,"morphTargetBaseInfluence",x),h.getUniforms().setValue(o,"morphTargetInfluences",d),h.getUniforms().setValue(o,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let y=n[u.id];if(y===void 0||y.length!==g){y=[];for(let b=0;b<g;b++)y[b]=[b,0];n[u.id]=y}for(let b=0;b<g;b++){const C=y[b];C[0]=b,C[1]=d[b]}y.sort(S0);for(let b=0;b<8;b++)b<g&&y[b][1]?(a[b][0]=y[b][0],a[b][1]=y[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(b0);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const C=a[b],w=C[0],S=C[1];w!==Number.MAX_SAFE_INTEGER&&S?(m&&u.getAttribute("morphTarget"+b)!==m[w]&&u.setAttribute("morphTarget"+b,m[w]),p&&u.getAttribute("morphNormal"+b)!==p[w]&&u.setAttribute("morphNormal"+b,p[w]),i[b]=S,x+=S):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),p&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const _=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(o,"morphTargetBaseInfluence",_),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function E0(o,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class ed extends Be{constructor(t,e,n,i,s,r,a,l,c,u){if(u=u!==void 0?u:Zi,u!==Zi&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zi&&(n=bi),n===void 0&&u===Fs&&(n=ji),super(null,i,s,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nd=new Be,id=new ed(1,1);id.compareFunction=Gh;const sd=new qh,od=new cf,rd=new Qh,Cc=[],Pc=[],Lc=new Float32Array(16),Ic=new Float32Array(9),Dc=new Float32Array(4);function Ws(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=Cc[i];if(s===void 0&&(s=new Float32Array(i),Cc[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function ze(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Ge(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Pr(o,t){let e=Pc[t];e===void 0&&(e=new Int32Array(t),Pc[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function w0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function A0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2fv(this.addr,t),Ge(e,t)}}function R0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;o.uniform3fv(this.addr,t),Ge(e,t)}}function C0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4fv(this.addr,t),Ge(e,t)}}function P0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;Dc.set(n),o.uniformMatrix2fv(this.addr,!1,Dc),Ge(e,n)}}function L0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;Ic.set(n),o.uniformMatrix3fv(this.addr,!1,Ic),Ge(e,n)}}function I0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;Lc.set(n),o.uniformMatrix4fv(this.addr,!1,Lc),Ge(e,n)}}function D0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function U0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2iv(this.addr,t),Ge(e,t)}}function N0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;o.uniform3iv(this.addr,t),Ge(e,t)}}function F0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4iv(this.addr,t),Ge(e,t)}}function k0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function O0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2uiv(this.addr,t),Ge(e,t)}}function H0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;o.uniform3uiv(this.addr,t),Ge(e,t)}}function B0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4uiv(this.addr,t),Ge(e,t)}}function z0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?id:nd;e.setTexture2D(t||s,i)}function G0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||od,i)}function W0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||rd,i)}function V0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||sd,i)}function X0(o){switch(o){case 5126:return w0;case 35664:return A0;case 35665:return R0;case 35666:return C0;case 35674:return P0;case 35675:return L0;case 35676:return I0;case 5124:case 35670:return D0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return F0;case 5125:return k0;case 36294:return O0;case 36295:return H0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return V0}}function q0(o,t){o.uniform1fv(this.addr,t)}function Y0(o,t){const e=Ws(t,this.size,2);o.uniform2fv(this.addr,e)}function $0(o,t){const e=Ws(t,this.size,3);o.uniform3fv(this.addr,e)}function K0(o,t){const e=Ws(t,this.size,4);o.uniform4fv(this.addr,e)}function j0(o,t){const e=Ws(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Z0(o,t){const e=Ws(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function J0(o,t){const e=Ws(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Q0(o,t){o.uniform1iv(this.addr,t)}function tg(o,t){o.uniform2iv(this.addr,t)}function eg(o,t){o.uniform3iv(this.addr,t)}function ng(o,t){o.uniform4iv(this.addr,t)}function ig(o,t){o.uniform1uiv(this.addr,t)}function sg(o,t){o.uniform2uiv(this.addr,t)}function og(o,t){o.uniform3uiv(this.addr,t)}function rg(o,t){o.uniform4uiv(this.addr,t)}function ag(o,t,e){const n=this.cache,i=t.length,s=Pr(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Ge(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||nd,s[r])}function lg(o,t,e){const n=this.cache,i=t.length,s=Pr(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Ge(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||od,s[r])}function cg(o,t,e){const n=this.cache,i=t.length,s=Pr(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Ge(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||rd,s[r])}function hg(o,t,e){const n=this.cache,i=t.length,s=Pr(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Ge(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||sd,s[r])}function dg(o){switch(o){case 5126:return q0;case 35664:return Y0;case 35665:return $0;case 35666:return K0;case 35674:return j0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return og;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}class ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=X0(e.type)}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}}class pg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function Uc(o,t){o.seq.push(t),o.map[t.id]=t}function mg(o,t,e){const n=o.name,i=n.length;for(ca.lastIndex=0;;){const s=ca.exec(n),r=ca.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Uc(e,c===void 0?new ug(a,o,t):new fg(a,o,t));break}else{let h=e.map[a];h===void 0&&(h=new pg(a),Uc(e,h)),e=h}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);mg(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Nc(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const gg=37297;let yg=0;function xg(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function _g(o){const t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(o);let n;switch(t===e?n="":t===br&&e===Mr?n="LinearDisplayP3ToLinearSRGB":t===Mr&&e===br&&(n="LinearSRGBToLinearDisplayP3"),o){case Pe:case Ar:return[n,"LinearTransferOETF"];case ie:case rl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function Fc(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+xg(o.getShaderSource(t),r)}else return i}function vg(o,t){const e=_g(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Mg(o,t){let e;switch(t){case mu:e="Linear";break;case gu:e="Reinhard";break;case yu:e="OptimizedCineon";break;case xu:e="ACESFilmic";break;case vu:e="AgX";break;case _u:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function bg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function Sg(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ls).join(`
`)}function Tg(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eg(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function Ls(o){return o!==""}function kc(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oc(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(o){return o.replace(wg,Rg)}const Ag=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rg(o,t){let e=jt[t];if(e===void 0){const n=Ag.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ka(e)}const Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(o){return o.replace(Cg,Pg)}function Pg(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bc(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ph?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Wd?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function Ig(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Ug(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case il:t="ENVMAP_BLENDING_MULTIPLY";break;case fu:t="ENVMAP_BLENDING_MIX";break;case pu:t="ENVMAP_BLENDING_ADD";break}return t}function Ng(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Fg(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Lg(e),c=Ig(e),u=Dg(e),h=Ug(e),d=Ng(e),f=e.isWebGL2?"":bg(e),g=Sg(e),y=Tg(s),m=i.createProgram();let p,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ls).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ls).join(`
`),x.length>0&&(x+=`
`)):(p=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),x=[f,Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?jt.tonemapping_pars_fragment:"",e.toneMapping!==oi?Mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),r=Ka(r),r=kc(r,e),r=Oc(r,e),a=Ka(a),a=kc(a,e),a=Oc(a,e),r=Hc(r),a=Hc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=_+p+r,C=_+x+a,w=Nc(i,i.VERTEX_SHADER,b),S=Nc(i,i.FRAGMENT_SHADER,C);i.attachShader(m,w),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(k){if(o.debug.checkShaderErrors){const K=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(w).trim(),G=i.getShaderInfoLog(S).trim();let q=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,m,w,S);else{const J=Fc(i,w,"vertex"),j=Fc(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+J+`
`+j)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(I===""||G==="")&&(Z=!1);Z&&(k.diagnostics={runnable:q,programLog:K,vertexShader:{log:I,prefix:p},fragmentShader:{log:G,prefix:x}})}i.deleteShader(w),i.deleteShader(S),M=new gr(i,m),v=Eg(i,m)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let v;this.getAttributes=function(){return v===void 0&&O(this),v};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,gg)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=S,this}let kg=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hg(t),e.set(t,n)),n}}class Hg{constructor(t){this.id=kg++,this.code=t,this.usedTimes=0}}function Bg(o,t,e,n,i,s,r){const a=new Yh,l=new Og,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,v,F,k,K){const I=k.fog,G=K.geometry,q=M.isMeshStandardMaterial?k.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),J=Z&&Z.mapping===wr?Z.image.height:null,j=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=tt!==void 0?tt.length:0;let ht=0;G.morphAttributes.position!==void 0&&(ht=1),G.morphAttributes.normal!==void 0&&(ht=2),G.morphAttributes.color!==void 0&&(ht=3);let Y,nt,yt,St;if(j){const _e=zn[j];Y=_e.vertexShader,nt=_e.fragmentShader}else Y=M.vertexShader,nt=M.fragmentShader,l.update(M),yt=l.getVertexShaderID(M),St=l.getFragmentShaderID(M);const Tt=o.getRenderTarget(),Bt=K.isInstancedMesh===!0,zt=K.isBatchedMesh===!0,wt=!!M.map,Ft=!!M.matcap,z=!!Z,be=!!M.aoMap,Pt=!!M.lightMap,Ht=!!M.bumpMap,Et=!!M.normalMap,de=!!M.displacementMap,Wt=!!M.emissiveMap,R=!!M.metalnessMap,T=!!M.roughnessMap,V=M.anisotropy>0,st=M.clearcoat>0,et=M.iridescence>0,ot=M.sheen>0,At=M.transmission>0,mt=V&&!!M.anisotropyMap,U=st&&!!M.clearcoatMap,ft=st&&!!M.clearcoatNormalMap,xt=st&&!!M.clearcoatRoughnessMap,P=et&&!!M.iridescenceMap,kt=et&&!!M.iridescenceThicknessMap,_t=ot&&!!M.sheenColorMap,It=ot&&!!M.sheenRoughnessMap,dt=!!M.specularMap,vt=!!M.specularColorMap,Ut=!!M.specularIntensityMap,Nt=At&&!!M.transmissionMap,ae=At&&!!M.thicknessMap,Lt=!!M.gradientMap,at=!!M.alphaMap,D=M.alphaTest>0,ut=!!M.alphaHash,gt=!!M.extensions,Ot=!!G.attributes.uv1,Dt=!!G.attributes.uv2,ue=!!G.attributes.uv3;let qt=oi;return M.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(qt=o.toneMapping),{isWebGL2:u,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:nt,defines:M.defines,customVertexShaderID:yt,customFragmentShaderID:St,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:zt,instancing:Bt,instancingColor:Bt&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Pe,map:wt,matcap:Ft,envMap:z,envMapMode:z&&Z.mapping,envMapCubeUVHeight:J,aoMap:be,lightMap:Pt,bumpMap:Ht,normalMap:Et,displacementMap:d&&de,emissiveMap:Wt,normalMapObjectSpace:Et&&M.normalMapType===Uu,normalMapTangentSpace:Et&&M.normalMapType===ol,metalnessMap:R,roughnessMap:T,anisotropy:V,anisotropyMap:mt,clearcoat:st,clearcoatMap:U,clearcoatNormalMap:ft,clearcoatRoughnessMap:xt,iridescence:et,iridescenceMap:P,iridescenceThicknessMap:kt,sheen:ot,sheenColorMap:_t,sheenRoughnessMap:It,specularMap:dt,specularColorMap:vt,specularIntensityMap:Ut,transmission:At,transmissionMap:Nt,thicknessMap:ae,gradientMap:Lt,opaque:M.transparent===!1&&M.blending===Ai,alphaMap:at,alphaTest:D,alphaHash:ut,combine:M.combine,mapUv:wt&&y(M.map.channel),aoMapUv:be&&y(M.aoMap.channel),lightMapUv:Pt&&y(M.lightMap.channel),bumpMapUv:Ht&&y(M.bumpMap.channel),normalMapUv:Et&&y(M.normalMap.channel),displacementMapUv:de&&y(M.displacementMap.channel),emissiveMapUv:Wt&&y(M.emissiveMap.channel),metalnessMapUv:R&&y(M.metalnessMap.channel),roughnessMapUv:T&&y(M.roughnessMap.channel),anisotropyMapUv:mt&&y(M.anisotropyMap.channel),clearcoatMapUv:U&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ft&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:P&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(M.sheenRoughnessMap.channel),specularMapUv:dt&&y(M.specularMap.channel),specularColorMapUv:vt&&y(M.specularColorMap.channel),specularIntensityMapUv:Ut&&y(M.specularIntensityMap.channel),transmissionMapUv:Nt&&y(M.transmissionMap.channel),thicknessMapUv:ae&&y(M.thicknessMap.channel),alphaMapUv:at&&y(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Et||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ot,vertexUv2s:Dt,vertexUv3s:ue,pointsUvs:K.isPoints===!0&&!!G.attributes.uv&&(wt||at),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:ht,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:qt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:wt&&M.map.isVideoTexture===!0&&me.getTransfer(M.map.colorSpace)===Te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Oe,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:gt&&M.extensions.derivatives===!0,extensionFragDepth:gt&&M.extensions.fragDepth===!0,extensionDrawBuffers:gt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)v.push(F),v.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(x(v,M),_(v,M),v.push(o.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function x(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function _(M,v){a.disableAll(),v.isWebGL2&&a.enable(0),v.supportsVertexTextures&&a.enable(1),v.instancing&&a.enable(2),v.instancingColor&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const v=g[M.type];let F;if(v){const k=zn[v];F=bf.clone(k.uniforms)}else F=M.uniforms;return F}function C(M,v){let F;for(let k=0,K=c.length;k<K;k++){const I=c[k];if(I.cacheKey===v){F=I,++F.usedTimes;break}}return F===void 0&&(F=new Fg(o,v,M,s),c.push(F)),F}function w(M){if(--M.usedTimes===0){const v=c.indexOf(M);c[v]=c[c.length-1],c.pop(),M.destroy()}}function S(M){l.remove(M)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:O}}function zg(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Gg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function zc(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Gc(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(h,d,f,g,y,m){let p=o[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},o[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=y,p.group=m),t++,p}function a(h,d,f,g,y,m){const p=r(h,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,g,y,m){const p=r(h,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||Gg),n.length>1&&n.sort(d||zc),i.length>1&&i.sort(d||zc)}function u(){for(let h=t,d=o.length;h<d;h++){const f=o[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Wg(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new Gc,o.set(n,[r])):i>=s.length?(r=new Gc,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function Vg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Rt};break;case"SpotLight":e={position:new L,direction:new L,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new L,halfWidth:new L,halfHeight:new L};break}return o[t.id]=e,e}}}function Xg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let qg=0;function Yg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function $g(o,t){const e=new Vg,n=Xg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);const s=new L,r=new Jt,a=new Jt;function l(u,h){let d=0,f=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let y=0,m=0,p=0,x=0,_=0,b=0,C=0,w=0,S=0,O=0,M=0;u.sort(Yg);const v=h===!0?Math.PI:1;for(let k=0,K=u.length;k<K;k++){const I=u[k],G=I.color,q=I.intensity,Z=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=G.r*q*v,f+=G.g*q*v,g+=G.b*q*v;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],q);M++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const tt=I.shadow,ct=n.get(I);ct.shadowBias=tt.bias,ct.shadowNormalBias=tt.normalBias,ct.shadowRadius=tt.radius,ct.shadowMapSize=tt.mapSize,i.directionalShadow[y]=ct,i.directionalShadowMap[y]=J,i.directionalShadowMatrix[y]=I.shadow.matrix,b++}i.directional[y]=j,y++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(G).multiplyScalar(q*v),j.distance=Z,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[p]=j;const tt=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,tt.updateMatrices(I),I.castShadow&&O++),i.spotLightMatrix[p]=tt.matrix,I.castShadow){const ct=n.get(I);ct.shadowBias=tt.bias,ct.shadowNormalBias=tt.normalBias,ct.shadowRadius=tt.radius,ct.shadowMapSize=tt.mapSize,i.spotShadow[p]=ct,i.spotShadowMap[p]=J,w++}p++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(G).multiplyScalar(q),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[x]=j,x++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*v),j.distance=I.distance,j.decay=I.decay,I.castShadow){const tt=I.shadow,ct=n.get(I);ct.shadowBias=tt.bias,ct.shadowNormalBias=tt.normalBias,ct.shadowRadius=tt.radius,ct.shadowMapSize=tt.mapSize,ct.shadowCameraNear=tt.camera.near,ct.shadowCameraFar=tt.camera.far,i.pointShadow[m]=ct,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=I.shadow.matrix,C++}i.point[m]=j,m++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(q*v),j.groundColor.copy(I.groundColor).multiplyScalar(q*v),i.hemi[_]=j,_++}}x>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==y||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==x||F.hemiLength!==_||F.numDirectionalShadows!==b||F.numPointShadows!==C||F.numSpotShadows!==w||F.numSpotMaps!==S||F.numLightProbes!==M)&&(i.directional.length=y,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=w+S-O,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=M,F.directionalLength=y,F.pointLength=m,F.spotLength=p,F.rectAreaLength=x,F.hemiLength=_,F.numDirectionalShadows=b,F.numPointShadows=C,F.numSpotShadows=w,F.numSpotMaps=S,F.numLightProbes=M,i.version=qg++)}function c(u,h){let d=0,f=0,g=0,y=0,m=0;const p=h.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const b=u[x];if(b.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),d++}else if(b.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const C=i.rectArea[y];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const C=i.point[f];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Wc(o,t){const e=new $g(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function Kg(o,t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new Wc(o,t),e.set(s,[l])):r>=a.length?(l=new Wc(o,t),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class jg extends wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zg extends wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ty(o,t,e){let n=new ll;const i=new Vt,s=new Vt,r=new ve,a=new jg({depthPacking:Du}),l=new Zg,c={},u=e.maxTextureSize,h={[Un]:cn,[cn]:Un,[Oe]:Oe},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Jg,fragmentShader:Qg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ph;let p=this.type;this.render=function(w,S,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=o.getRenderTarget(),v=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),k=o.state;k.setBlending(wi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const K=p!==ei&&this.type===ei,I=p===ei&&this.type!==ei;for(let G=0,q=w.length;G<q;G++){const Z=w[G],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const j=J.getFrameExtents();if(i.multiply(j),s.copy(J.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,J.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,J.mapSize.y=s.y)),J.map===null||K===!0||I===!0){const ct=this.type!==ei?{minFilter:Xe,magFilter:Xe}:{};J.map!==null&&J.map.dispose(),J.map=new ts(i.x,i.y,ct),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}o.setRenderTarget(J.map),o.clear();const tt=J.getViewportCount();for(let ct=0;ct<tt;ct++){const ht=J.getViewport(ct);r.set(s.x*ht.x,s.y*ht.y,s.x*ht.z,s.y*ht.w),k.viewport(r),J.updateMatrices(Z,ct),n=J.getFrustum(),b(S,O,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===ei&&x(J,O),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(M,v,F)};function x(w,S){const O=t.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ts(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(S,null,O,d,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(S,null,O,f,y,null)}function _(w,S,O,M){let v=null;const F=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)v=F;else if(v=O.isPointLight===!0?l:a,o.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const k=v.uuid,K=S.uuid;let I=c[k];I===void 0&&(I={},c[k]=I);let G=I[K];G===void 0&&(G=v.clone(),I[K]=G,S.addEventListener("dispose",C)),v=G}if(v.visible=S.visible,v.wireframe=S.wireframe,M===ei?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:h[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=o.properties.get(v);k.light=O}return v}function b(w,S,O,M,v){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===ei)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);const K=t.update(w),I=w.material;if(Array.isArray(I)){const G=K.groups;for(let q=0,Z=G.length;q<Z;q++){const J=G[q],j=I[J.materialIndex];if(j&&j.visible){const tt=_(w,j,M,v);w.onBeforeShadow(o,w,S,O,K,tt,J),o.renderBufferDirect(O,null,K,tt,w,J),w.onAfterShadow(o,w,S,O,K,tt,J)}}}else if(I.visible){const G=_(w,I,M,v);w.onBeforeShadow(o,w,S,O,K,G,null),o.renderBufferDirect(O,null,K,G,w,null),w.onAfterShadow(o,w,S,O,K,G,null)}}const k=w.children;for(let K=0,I=k.length;K<I;K++)b(k[K],S,O,M,v)}function C(w){w.target.removeEventListener("dispose",C);for(const O in c){const M=c[O],v=w.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}function ey(o,t,e){const n=e.isWebGL2;function i(){let D=!1;const ut=new ve;let gt=null;const Ot=new ve(0,0,0,0);return{setMask:function(Dt){gt!==Dt&&!D&&(o.colorMask(Dt,Dt,Dt,Dt),gt=Dt)},setLocked:function(Dt){D=Dt},setClear:function(Dt,ue,qt,fe,_e){_e===!0&&(Dt*=fe,ue*=fe,qt*=fe),ut.set(Dt,ue,qt,fe),Ot.equals(ut)===!1&&(o.clearColor(Dt,ue,qt,fe),Ot.copy(ut))},reset:function(){D=!1,gt=null,Ot.set(-1,0,0,0)}}}function s(){let D=!1,ut=null,gt=null,Ot=null;return{setTest:function(Dt){Dt?zt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(Dt){ut!==Dt&&!D&&(o.depthMask(Dt),ut=Dt)},setFunc:function(Dt){if(gt!==Dt){switch(Dt){case ru:o.depthFunc(o.NEVER);break;case au:o.depthFunc(o.ALWAYS);break;case lu:o.depthFunc(o.LESS);break;case xr:o.depthFunc(o.LEQUAL);break;case cu:o.depthFunc(o.EQUAL);break;case hu:o.depthFunc(o.GEQUAL);break;case du:o.depthFunc(o.GREATER);break;case uu:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Dt}},setLocked:function(Dt){D=Dt},setClear:function(Dt){Ot!==Dt&&(o.clearDepth(Dt),Ot=Dt)},reset:function(){D=!1,ut=null,gt=null,Ot=null}}}function r(){let D=!1,ut=null,gt=null,Ot=null,Dt=null,ue=null,qt=null,fe=null,_e=null;return{setTest:function(Qt){D||(Qt?zt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!D&&(o.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,pe,$e){(gt!==Qt||Ot!==pe||Dt!==$e)&&(o.stencilFunc(Qt,pe,$e),gt=Qt,Ot=pe,Dt=$e)},setOp:function(Qt,pe,$e){(ue!==Qt||qt!==pe||fe!==$e)&&(o.stencilOp(Qt,pe,$e),ue=Qt,qt=pe,fe=$e)},setLocked:function(Qt){D=Qt},setClear:function(Qt){_e!==Qt&&(o.clearStencil(Qt),_e=Qt)},reset:function(){D=!1,ut=null,gt=null,Ot=null,Dt=null,ue=null,qt=null,fe=null,_e=null}}}const a=new i,l=new s,c=new r,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,y=[],m=null,p=!1,x=null,_=null,b=null,C=null,w=null,S=null,O=null,M=new Rt(0,0,0),v=0,F=!1,k=null,K=null,I=null,G=null,q=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,j=0;const tt=o.getParameter(o.VERSION);tt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(tt)[1]),J=j>=1):tt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),J=j>=2);let ct=null,ht={};const Y=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),yt=new ve().fromArray(Y),St=new ve().fromArray(nt);function Tt(D,ut,gt,Ot){const Dt=new Uint8Array(4),ue=o.createTexture();o.bindTexture(D,ue),o.texParameteri(D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(D,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qt=0;qt<gt;qt++)n&&(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)?o.texImage3D(ut,0,o.RGBA,1,1,Ot,0,o.RGBA,o.UNSIGNED_BYTE,Dt):o.texImage2D(ut+qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Dt);return ue}const Bt={};Bt[o.TEXTURE_2D]=Tt(o.TEXTURE_2D,o.TEXTURE_2D,1),Bt[o.TEXTURE_CUBE_MAP]=Tt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Bt[o.TEXTURE_2D_ARRAY]=Tt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Bt[o.TEXTURE_3D]=Tt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),zt(o.DEPTH_TEST),l.setFunc(xr),Wt(!1),R(Sl),zt(o.CULL_FACE),Et(wi);function zt(D){d[D]!==!0&&(o.enable(D),d[D]=!0)}function wt(D){d[D]!==!1&&(o.disable(D),d[D]=!1)}function Ft(D,ut){return f[D]!==ut?(o.bindFramebuffer(D,ut),f[D]=ut,n&&(D===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=ut),D===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=ut)),!0):!1}function z(D,ut){let gt=y,Ot=!1;if(D)if(gt=g.get(ut),gt===void 0&&(gt=[],g.set(ut,gt)),D.isWebGLMultipleRenderTargets){const Dt=D.texture;if(gt.length!==Dt.length||gt[0]!==o.COLOR_ATTACHMENT0){for(let ue=0,qt=Dt.length;ue<qt;ue++)gt[ue]=o.COLOR_ATTACHMENT0+ue;gt.length=Dt.length,Ot=!0}}else gt[0]!==o.COLOR_ATTACHMENT0&&(gt[0]=o.COLOR_ATTACHMENT0,Ot=!0);else gt[0]!==o.BACK&&(gt[0]=o.BACK,Ot=!0);Ot&&(e.isWebGL2?o.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function be(D){return m!==D?(o.useProgram(D),m=D,!0):!1}const Pt={[Yi]:o.FUNC_ADD,[Xd]:o.FUNC_SUBTRACT,[qd]:o.FUNC_REVERSE_SUBTRACT};if(n)Pt[wl]=o.MIN,Pt[Al]=o.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(Pt[wl]=D.MIN_EXT,Pt[Al]=D.MAX_EXT)}const Ht={[Yd]:o.ZERO,[$d]:o.ONE,[Kd]:o.SRC_COLOR,[Ba]:o.SRC_ALPHA,[eu]:o.SRC_ALPHA_SATURATE,[Qd]:o.DST_COLOR,[Zd]:o.DST_ALPHA,[jd]:o.ONE_MINUS_SRC_COLOR,[za]:o.ONE_MINUS_SRC_ALPHA,[tu]:o.ONE_MINUS_DST_COLOR,[Jd]:o.ONE_MINUS_DST_ALPHA,[nu]:o.CONSTANT_COLOR,[iu]:o.ONE_MINUS_CONSTANT_COLOR,[su]:o.CONSTANT_ALPHA,[ou]:o.ONE_MINUS_CONSTANT_ALPHA};function Et(D,ut,gt,Ot,Dt,ue,qt,fe,_e,Qt){if(D===wi){p===!0&&(wt(o.BLEND),p=!1);return}if(p===!1&&(zt(o.BLEND),p=!0),D!==Vd){if(D!==x||Qt!==F){if((_!==Yi||w!==Yi)&&(o.blendEquation(o.FUNC_ADD),_=Yi,w=Yi),Qt)switch(D){case Ai:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fn:o.blendFunc(o.ONE,o.ONE);break;case Tl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case El:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ai:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fn:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Tl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case El:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,C=null,S=null,O=null,M.set(0,0,0),v=0,x=D,F=Qt}return}Dt=Dt||ut,ue=ue||gt,qt=qt||Ot,(ut!==_||Dt!==w)&&(o.blendEquationSeparate(Pt[ut],Pt[Dt]),_=ut,w=Dt),(gt!==b||Ot!==C||ue!==S||qt!==O)&&(o.blendFuncSeparate(Ht[gt],Ht[Ot],Ht[ue],Ht[qt]),b=gt,C=Ot,S=ue,O=qt),(fe.equals(M)===!1||_e!==v)&&(o.blendColor(fe.r,fe.g,fe.b,_e),M.copy(fe),v=_e),x=D,F=!1}function de(D,ut){D.side===Oe?wt(o.CULL_FACE):zt(o.CULL_FACE);let gt=D.side===cn;ut&&(gt=!gt),Wt(gt),D.blending===Ai&&D.transparent===!1?Et(wi):Et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ot=D.stencilWrite;c.setTest(Ot),Ot&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),V(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?zt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){k!==D&&(D?o.frontFace(o.CW):o.frontFace(o.CCW),k=D)}function R(D){D!==zd?(zt(o.CULL_FACE),D!==K&&(D===Sl?o.cullFace(o.BACK):D===Gd?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),K=D}function T(D){D!==I&&(J&&o.lineWidth(D),I=D)}function V(D,ut,gt){D?(zt(o.POLYGON_OFFSET_FILL),(G!==ut||q!==gt)&&(o.polygonOffset(ut,gt),G=ut,q=gt)):wt(o.POLYGON_OFFSET_FILL)}function st(D){D?zt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function et(D){D===void 0&&(D=o.TEXTURE0+Z-1),ct!==D&&(o.activeTexture(D),ct=D)}function ot(D,ut,gt){gt===void 0&&(ct===null?gt=o.TEXTURE0+Z-1:gt=ct);let Ot=ht[gt];Ot===void 0&&(Ot={type:void 0,texture:void 0},ht[gt]=Ot),(Ot.type!==D||Ot.texture!==ut)&&(ct!==gt&&(o.activeTexture(gt),ct=gt),o.bindTexture(D,ut||Bt[D]),Ot.type=D,Ot.texture=ut)}function At(){const D=ht[ct];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function mt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(D){yt.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),yt.copy(D))}function Nt(D){St.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),St.copy(D))}function ae(D,ut){let gt=h.get(ut);gt===void 0&&(gt=new WeakMap,h.set(ut,gt));let Ot=gt.get(D);Ot===void 0&&(Ot=o.getUniformBlockIndex(ut,D.name),gt.set(D,Ot))}function Lt(D,ut){const Ot=h.get(ut).get(D);u.get(ut)!==Ot&&(o.uniformBlockBinding(ut,Ot,D.__bindingPointIndex),u.set(ut,Ot))}function at(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},ct=null,ht={},f={},g=new WeakMap,y=[],m=null,p=!1,x=null,_=null,b=null,C=null,w=null,S=null,O=null,M=new Rt(0,0,0),v=0,F=!1,k=null,K=null,I=null,G=null,q=null,yt.set(0,0,o.canvas.width,o.canvas.height),St.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:zt,disable:wt,bindFramebuffer:Ft,drawBuffers:z,useProgram:be,setBlending:Et,setMaterial:de,setFlipSided:Wt,setCullFace:R,setLineWidth:T,setPolygonOffset:V,setScissorTest:st,activeTexture:et,bindTexture:ot,unbindTexture:At,compressedTexImage2D:mt,compressedTexImage3D:U,texImage2D:dt,texImage3D:vt,updateUBOMapping:ae,uniformBlockBinding:Lt,texStorage2D:_t,texStorage3D:It,texSubImage2D:ft,texSubImage3D:xt,compressedTexSubImage2D:P,compressedTexSubImage3D:kt,scissor:Ut,viewport:Nt,reset:at}}function ny(o,t,e,n,i,s,r){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return f?new OffscreenCanvas(R,T):go("canvas")}function y(R,T,V,st){let et=1;if((R.width>st||R.height>st)&&(et=st/Math.max(R.width,R.height)),et<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ot=T?Tr:Math.floor,At=ot(et*R.width),mt=ot(et*R.height);h===void 0&&(h=g(At,mt));const U=V?g(At,mt):h;return U.width=At,U.height=mt,U.getContext("2d").drawImage(R,0,0,At,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+At+"x"+mt+")."),U}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return $a(R.width)&&$a(R.height)}function p(R){return a?!1:R.wrapS!==He||R.wrapT!==He||R.minFilter!==Xe&&R.minFilter!==Qe}function x(R,T){return R.generateMipmaps&&T&&R.minFilter!==Xe&&R.minFilter!==Qe}function _(R){o.generateMipmap(R)}function b(R,T,V,st,et=!1){if(a===!1)return T;if(R!==null){if(o[R]!==void 0)return o[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ot=T;if(T===o.RED&&(V===o.FLOAT&&(ot=o.R32F),V===o.HALF_FLOAT&&(ot=o.R16F),V===o.UNSIGNED_BYTE&&(ot=o.R8)),T===o.RED_INTEGER&&(V===o.UNSIGNED_BYTE&&(ot=o.R8UI),V===o.UNSIGNED_SHORT&&(ot=o.R16UI),V===o.UNSIGNED_INT&&(ot=o.R32UI),V===o.BYTE&&(ot=o.R8I),V===o.SHORT&&(ot=o.R16I),V===o.INT&&(ot=o.R32I)),T===o.RG&&(V===o.FLOAT&&(ot=o.RG32F),V===o.HALF_FLOAT&&(ot=o.RG16F),V===o.UNSIGNED_BYTE&&(ot=o.RG8)),T===o.RGBA){const At=et?vr:me.getTransfer(st);V===o.FLOAT&&(ot=o.RGBA32F),V===o.HALF_FLOAT&&(ot=o.RGBA16F),V===o.UNSIGNED_BYTE&&(ot=At===Te?o.SRGB8_ALPHA8:o.RGBA8),V===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),V===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function C(R,T,V){return x(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==Xe&&R.minFilter!==Qe?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function w(R){return R===Xe||R===Va||R===mr?o.NEAREST:o.LINEAR}function S(R){const T=R.target;T.removeEventListener("dispose",S),M(T),T.isVideoTexture&&u.delete(T)}function O(R){const T=R.target;T.removeEventListener("dispose",O),F(T)}function M(R){const T=n.get(R);if(T.__webglInit===void 0)return;const V=R.source,st=d.get(V);if(st){const et=st[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&v(R),Object.keys(st).length===0&&d.delete(V)}n.remove(R)}function v(R){const T=n.get(R);o.deleteTexture(T.__webglTexture);const V=R.source,st=d.get(V);delete st[T.__cacheKey],r.memory.textures--}function F(R){const T=R.texture,V=n.get(R),st=n.get(T);if(st.__webglTexture!==void 0&&(o.deleteTexture(st.__webglTexture),r.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(V.__webglFramebuffer[et]))for(let ot=0;ot<V.__webglFramebuffer[et].length;ot++)o.deleteFramebuffer(V.__webglFramebuffer[et][ot]);else o.deleteFramebuffer(V.__webglFramebuffer[et]);V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer[et])}else{if(Array.isArray(V.__webglFramebuffer))for(let et=0;et<V.__webglFramebuffer.length;et++)o.deleteFramebuffer(V.__webglFramebuffer[et]);else o.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&o.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let et=0;et<V.__webglColorRenderbuffer.length;et++)V.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(V.__webglColorRenderbuffer[et]);V.__webglDepthRenderbuffer&&o.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let et=0,ot=T.length;et<ot;et++){const At=n.get(T[et]);At.__webglTexture&&(o.deleteTexture(At.__webglTexture),r.memory.textures--),n.remove(T[et])}n.remove(T),n.remove(R)}let k=0;function K(){k=0}function I(){const R=k;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),k+=1,R}function G(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function q(R,T){const V=n.get(R);if(R.isVideoTexture&&de(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const st=R.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(V,R,T);return}}e.bindTexture(o.TEXTURE_2D,V.__webglTexture,o.TEXTURE0+T)}function Z(R,T){const V=n.get(R);if(R.version>0&&V.__version!==R.version){yt(V,R,T);return}e.bindTexture(o.TEXTURE_2D_ARRAY,V.__webglTexture,o.TEXTURE0+T)}function J(R,T){const V=n.get(R);if(R.version>0&&V.__version!==R.version){yt(V,R,T);return}e.bindTexture(o.TEXTURE_3D,V.__webglTexture,o.TEXTURE0+T)}function j(R,T){const V=n.get(R);if(R.version>0&&V.__version!==R.version){St(V,R,T);return}e.bindTexture(o.TEXTURE_CUBE_MAP,V.__webglTexture,o.TEXTURE0+T)}const tt={[_n]:o.REPEAT,[He]:o.CLAMP_TO_EDGE,[_r]:o.MIRRORED_REPEAT},ct={[Xe]:o.NEAREST,[Va]:o.NEAREST_MIPMAP_NEAREST,[mr]:o.NEAREST_MIPMAP_LINEAR,[Qe]:o.LINEAR,[Ih]:o.LINEAR_MIPMAP_NEAREST,[Qi]:o.LINEAR_MIPMAP_LINEAR},ht={[Nu]:o.NEVER,[zu]:o.ALWAYS,[Fu]:o.LESS,[Gh]:o.LEQUAL,[ku]:o.EQUAL,[Bu]:o.GEQUAL,[Ou]:o.GREATER,[Hu]:o.NOTEQUAL};function Y(R,T,V){if(V?(o.texParameteri(R,o.TEXTURE_WRAP_S,tt[T.wrapS]),o.texParameteri(R,o.TEXTURE_WRAP_T,tt[T.wrapT]),(R===o.TEXTURE_3D||R===o.TEXTURE_2D_ARRAY)&&o.texParameteri(R,o.TEXTURE_WRAP_R,tt[T.wrapR]),o.texParameteri(R,o.TEXTURE_MAG_FILTER,ct[T.magFilter]),o.texParameteri(R,o.TEXTURE_MIN_FILTER,ct[T.minFilter])):(o.texParameteri(R,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(R,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(R===o.TEXTURE_3D||R===o.TEXTURE_2D_ARRAY)&&o.texParameteri(R,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(T.wrapS!==He||T.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(R,o.TEXTURE_MAG_FILTER,w(T.magFilter)),o.texParameteri(R,o.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==Xe&&T.minFilter!==Qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(o.texParameteri(R,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(R,o.TEXTURE_COMPARE_FUNC,ht[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Xe||T.minFilter!==mr&&T.minFilter!==Qi||T.type===ii&&t.has("OES_texture_float_linear")===!1||a===!1&&T.type===po&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(o.texParameterf(R,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function nt(R,T){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",S));const st=T.source;let et=d.get(st);et===void 0&&(et={},d.set(st,et));const ot=G(T);if(ot!==R.__cacheKey){et[ot]===void 0&&(et[ot]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,V=!0),et[ot].usedTimes++;const At=et[R.__cacheKey];At!==void 0&&(et[R.__cacheKey].usedTimes--,At.usedTimes===0&&v(T)),R.__cacheKey=ot,R.__webglTexture=et[ot].texture}return V}function yt(R,T,V){let st=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(st=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(st=o.TEXTURE_3D);const et=nt(R,T),ot=T.source;e.bindTexture(st,R.__webglTexture,o.TEXTURE0+V);const At=n.get(ot);if(ot.version!==At.__version||et===!0){e.activeTexture(o.TEXTURE0+V);const mt=me.getPrimaries(me.workingColorSpace),U=T.colorSpace===En?null:me.getPrimaries(T.colorSpace),ft=T.colorSpace===En||mt===U?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const xt=p(T)&&m(T.image)===!1;let P=y(T.image,xt,!1,i.maxTextureSize);P=Wt(T,P);const kt=m(P)||a,_t=s.convert(T.format,T.colorSpace);let It=s.convert(T.type),dt=b(T.internalFormat,_t,It,T.colorSpace,T.isVideoTexture);Y(st,T,kt);let vt;const Ut=T.mipmaps,Nt=a&&T.isVideoTexture!==!0&&dt!==Hh,ae=At.__version===void 0||et===!0,Lt=C(T,P,kt);if(T.isDepthTexture)dt=o.DEPTH_COMPONENT,a?T.type===ii?dt=o.DEPTH_COMPONENT32F:T.type===bi?dt=o.DEPTH_COMPONENT24:T.type===ji?dt=o.DEPTH24_STENCIL8:dt=o.DEPTH_COMPONENT16:T.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Zi&&dt===o.DEPTH_COMPONENT&&T.type!==sl&&T.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=bi,It=s.convert(T.type)),T.format===Fs&&dt===o.DEPTH_COMPONENT&&(dt=o.DEPTH_STENCIL,T.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ji,It=s.convert(T.type))),ae&&(Nt?e.texStorage2D(o.TEXTURE_2D,1,dt,P.width,P.height):e.texImage2D(o.TEXTURE_2D,0,dt,P.width,P.height,0,_t,It,null));else if(T.isDataTexture)if(Ut.length>0&&kt){Nt&&ae&&e.texStorage2D(o.TEXTURE_2D,Lt,dt,Ut[0].width,Ut[0].height);for(let at=0,D=Ut.length;at<D;at++)vt=Ut[at],Nt?e.texSubImage2D(o.TEXTURE_2D,at,0,0,vt.width,vt.height,_t,It,vt.data):e.texImage2D(o.TEXTURE_2D,at,dt,vt.width,vt.height,0,_t,It,vt.data);T.generateMipmaps=!1}else Nt?(ae&&e.texStorage2D(o.TEXTURE_2D,Lt,dt,P.width,P.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,P.width,P.height,_t,It,P.data)):e.texImage2D(o.TEXTURE_2D,0,dt,P.width,P.height,0,_t,It,P.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Nt&&ae&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,dt,Ut[0].width,Ut[0].height,P.depth);for(let at=0,D=Ut.length;at<D;at++)vt=Ut[at],T.format!==pn?_t!==null?Nt?e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,P.depth,_t,vt.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,at,dt,vt.width,vt.height,P.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?e.texSubImage3D(o.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,P.depth,_t,It,vt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,at,dt,vt.width,vt.height,P.depth,0,_t,It,vt.data)}else{Nt&&ae&&e.texStorage2D(o.TEXTURE_2D,Lt,dt,Ut[0].width,Ut[0].height);for(let at=0,D=Ut.length;at<D;at++)vt=Ut[at],T.format!==pn?_t!==null?Nt?e.compressedTexSubImage2D(o.TEXTURE_2D,at,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(o.TEXTURE_2D,at,dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?e.texSubImage2D(o.TEXTURE_2D,at,0,0,vt.width,vt.height,_t,It,vt.data):e.texImage2D(o.TEXTURE_2D,at,dt,vt.width,vt.height,0,_t,It,vt.data)}else if(T.isDataArrayTexture)Nt?(ae&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,dt,P.width,P.height,P.depth),e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,_t,It,P.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,dt,P.width,P.height,P.depth,0,_t,It,P.data);else if(T.isData3DTexture)Nt?(ae&&e.texStorage3D(o.TEXTURE_3D,Lt,dt,P.width,P.height,P.depth),e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,_t,It,P.data)):e.texImage3D(o.TEXTURE_3D,0,dt,P.width,P.height,P.depth,0,_t,It,P.data);else if(T.isFramebufferTexture){if(ae)if(Nt)e.texStorage2D(o.TEXTURE_2D,Lt,dt,P.width,P.height);else{let at=P.width,D=P.height;for(let ut=0;ut<Lt;ut++)e.texImage2D(o.TEXTURE_2D,ut,dt,at,D,0,_t,It,null),at>>=1,D>>=1}}else if(Ut.length>0&&kt){Nt&&ae&&e.texStorage2D(o.TEXTURE_2D,Lt,dt,Ut[0].width,Ut[0].height);for(let at=0,D=Ut.length;at<D;at++)vt=Ut[at],Nt?e.texSubImage2D(o.TEXTURE_2D,at,0,0,_t,It,vt):e.texImage2D(o.TEXTURE_2D,at,dt,_t,It,vt);T.generateMipmaps=!1}else Nt?(ae&&e.texStorage2D(o.TEXTURE_2D,Lt,dt,P.width,P.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,_t,It,P)):e.texImage2D(o.TEXTURE_2D,0,dt,_t,It,P);x(T,kt)&&_(st),At.__version=ot.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function St(R,T,V){if(T.image.length!==6)return;const st=nt(R,T),et=T.source;e.bindTexture(o.TEXTURE_CUBE_MAP,R.__webglTexture,o.TEXTURE0+V);const ot=n.get(et);if(et.version!==ot.__version||st===!0){e.activeTexture(o.TEXTURE0+V);const At=me.getPrimaries(me.workingColorSpace),mt=T.colorSpace===En?null:me.getPrimaries(T.colorSpace),U=T.colorSpace===En||At===mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);const ft=T.isCompressedTexture||T.image[0].isCompressedTexture,xt=T.image[0]&&T.image[0].isDataTexture,P=[];for(let at=0;at<6;at++)!ft&&!xt?P[at]=y(T.image[at],!1,!0,i.maxCubemapSize):P[at]=xt?T.image[at].image:T.image[at],P[at]=Wt(T,P[at]);const kt=P[0],_t=m(kt)||a,It=s.convert(T.format,T.colorSpace),dt=s.convert(T.type),vt=b(T.internalFormat,It,dt,T.colorSpace),Ut=a&&T.isVideoTexture!==!0,Nt=ot.__version===void 0||st===!0;let ae=C(T,kt,_t);Y(o.TEXTURE_CUBE_MAP,T,_t);let Lt;if(ft){Ut&&Nt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,ae,vt,kt.width,kt.height);for(let at=0;at<6;at++){Lt=P[at].mipmaps;for(let D=0;D<Lt.length;D++){const ut=Lt[D];T.format!==pn?It!==null?Ut?e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,D,0,0,ut.width,ut.height,It,ut.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,D,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,D,0,0,ut.width,ut.height,It,dt,ut.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,D,vt,ut.width,ut.height,0,It,dt,ut.data)}}}else{Lt=T.mipmaps,Ut&&Nt&&(Lt.length>0&&ae++,e.texStorage2D(o.TEXTURE_CUBE_MAP,ae,vt,P[0].width,P[0].height));for(let at=0;at<6;at++)if(xt){Ut?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,P[at].width,P[at].height,It,dt,P[at].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,P[at].width,P[at].height,0,It,dt,P[at].data);for(let D=0;D<Lt.length;D++){const gt=Lt[D].image[at].image;Ut?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,D+1,0,0,gt.width,gt.height,It,dt,gt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,D+1,vt,gt.width,gt.height,0,It,dt,gt.data)}}else{Ut?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,It,dt,P[at]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,It,dt,P[at]);for(let D=0;D<Lt.length;D++){const ut=Lt[D];Ut?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,D+1,0,0,It,dt,ut.image[at]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+at,D+1,vt,It,dt,ut.image[at])}}}x(T,_t)&&_(o.TEXTURE_CUBE_MAP),ot.__version=et.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Tt(R,T,V,st,et,ot){const At=s.convert(V.format,V.colorSpace),mt=s.convert(V.type),U=b(V.internalFormat,At,mt,V.colorSpace);if(!n.get(T).__hasExternalTextures){const xt=Math.max(1,T.width>>ot),P=Math.max(1,T.height>>ot);et===o.TEXTURE_3D||et===o.TEXTURE_2D_ARRAY?e.texImage3D(et,ot,U,xt,P,T.depth,0,At,mt,null):e.texImage2D(et,ot,U,xt,P,0,At,mt,null)}e.bindFramebuffer(o.FRAMEBUFFER,R),Et(T)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,st,et,n.get(V).__webglTexture,0,Ht(T)):(et===o.TEXTURE_2D||et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,st,et,n.get(V).__webglTexture,ot),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(R,T,V){if(o.bindRenderbuffer(o.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let st=a===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(V||Et(T)){const et=T.depthTexture;et&&et.isDepthTexture&&(et.type===ii?st=o.DEPTH_COMPONENT32F:et.type===bi&&(st=o.DEPTH_COMPONENT24));const ot=Ht(T);Et(T)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ot,st,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ot,st,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,st,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const st=Ht(T);V&&Et(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,st,o.DEPTH24_STENCIL8,T.width,T.height):Et(T)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,st,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,R)}else{const st=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let et=0;et<st.length;et++){const ot=st[et],At=s.convert(ot.format,ot.colorSpace),mt=s.convert(ot.type),U=b(ot.internalFormat,At,mt,ot.colorSpace),ft=Ht(T);V&&Et(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ft,U,T.width,T.height):Et(T)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ft,U,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,U,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function zt(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),q(T.depthTexture,0);const st=n.get(T.depthTexture).__webglTexture,et=Ht(T);if(T.depthTexture.format===Zi)Et(T)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,st,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,st,0);else if(T.depthTexture.format===Fs)Et(T)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,st,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function wt(R){const T=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");zt(T.__webglFramebuffer,R)}else if(V){T.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[st]),T.__webglDepthbuffer[st]=o.createRenderbuffer(),Bt(T.__webglDepthbuffer[st],R,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),Bt(T.__webglDepthbuffer,R,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(R,T,V){const st=n.get(R);T!==void 0&&Tt(st.__webglFramebuffer,R,R.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),V!==void 0&&wt(R)}function z(R){const T=R.texture,V=n.get(R),st=n.get(T);R.addEventListener("dispose",O),R.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=o.createTexture()),st.__version=T.version,r.memory.textures++);const et=R.isWebGLCubeRenderTarget===!0,ot=R.isWebGLMultipleRenderTargets===!0,At=m(R)||a;if(et){V.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(a&&T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[mt]=[];for(let U=0;U<T.mipmaps.length;U++)V.__webglFramebuffer[mt][U]=o.createFramebuffer()}else V.__webglFramebuffer[mt]=o.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let mt=0;mt<T.mipmaps.length;mt++)V.__webglFramebuffer[mt]=o.createFramebuffer()}else V.__webglFramebuffer=o.createFramebuffer();if(ot)if(i.drawBuffers){const mt=R.texture;for(let U=0,ft=mt.length;U<ft;U++){const xt=n.get(mt[U]);xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Et(R)===!1){const mt=ot?T:[T];V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let U=0;U<mt.length;U++){const ft=mt[U];V.__webglColorRenderbuffer[U]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,V.__webglColorRenderbuffer[U]);const xt=s.convert(ft.format,ft.colorSpace),P=s.convert(ft.type),kt=b(ft.internalFormat,xt,P,ft.colorSpace,R.isXRRenderTarget===!0),_t=Ht(R);o.renderbufferStorageMultisample(o.RENDERBUFFER,_t,kt,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+U,o.RENDERBUFFER,V.__webglColorRenderbuffer[U])}o.bindRenderbuffer(o.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),Bt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(et){e.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture),Y(o.TEXTURE_CUBE_MAP,T,At);for(let mt=0;mt<6;mt++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let U=0;U<T.mipmaps.length;U++)Tt(V.__webglFramebuffer[mt][U],R,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,U);else Tt(V.__webglFramebuffer[mt],R,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);x(T,At)&&_(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){const mt=R.texture;for(let U=0,ft=mt.length;U<ft;U++){const xt=mt[U],P=n.get(xt);e.bindTexture(o.TEXTURE_2D,P.__webglTexture),Y(o.TEXTURE_2D,xt,At),Tt(V.__webglFramebuffer,R,xt,o.COLOR_ATTACHMENT0+U,o.TEXTURE_2D,0),x(xt,At)&&_(o.TEXTURE_2D)}e.unbindTexture()}else{let mt=o.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?mt=R.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,st.__webglTexture),Y(mt,T,At),a&&T.mipmaps&&T.mipmaps.length>0)for(let U=0;U<T.mipmaps.length;U++)Tt(V.__webglFramebuffer[U],R,T,o.COLOR_ATTACHMENT0,mt,U);else Tt(V.__webglFramebuffer,R,T,o.COLOR_ATTACHMENT0,mt,0);x(T,At)&&_(mt),e.unbindTexture()}R.depthBuffer&&wt(R)}function be(R){const T=m(R)||a,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let st=0,et=V.length;st<et;st++){const ot=V[st];if(x(ot,T)){const At=R.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,mt=n.get(ot).__webglTexture;e.bindTexture(At,mt),_(At),e.unbindTexture()}}}function Pt(R){if(a&&R.samples>0&&Et(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,st=R.height;let et=o.COLOR_BUFFER_BIT;const ot=[],At=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=n.get(R),U=R.isWebGLMultipleRenderTargets===!0;if(U)for(let ft=0;ft<T.length;ft++)e.bindFramebuffer(o.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ft=0;ft<T.length;ft++){ot.push(o.COLOR_ATTACHMENT0+ft),R.depthBuffer&&ot.push(At);const xt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(xt===!1&&(R.depthBuffer&&(et|=o.DEPTH_BUFFER_BIT),R.stencilBuffer&&(et|=o.STENCIL_BUFFER_BIT)),U&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,mt.__webglColorRenderbuffer[ft]),xt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[At]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[At])),U){const P=n.get(T[ft]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,P,0)}o.blitFramebuffer(0,0,V,st,0,0,V,st,et,o.NEAREST),c&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),U)for(let ft=0;ft<T.length;ft++){e.bindFramebuffer(o.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,mt.__webglColorRenderbuffer[ft]);const xt=n.get(T[ft]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,xt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function Ht(R){return Math.min(i.maxSamples,R.samples)}function Et(R){const T=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function de(R){const T=r.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function Wt(R,T){const V=R.colorSpace,st=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ya||V!==Pe&&V!==En&&(me.getTransfer(V)===Te?a===!1?t.has("EXT_sRGB")===!0&&st===pn?(R.format=Ya,R.minFilter=Qe,R.generateMipmaps=!1):T=Vh.sRGBToLinear(T):(st!==pn||et!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}this.allocateTextureUnit=I,this.resetTextureUnits=K,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=Ft,this.setupRenderTarget=z,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Et}function iy(o,t,e){const n=e.isWebGL2;function i(s,r=En){let a;const l=me.getTransfer(r);if(s===Ri)return o.UNSIGNED_BYTE;if(s===Uh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Nh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===bu)return o.BYTE;if(s===Su)return o.SHORT;if(s===sl)return o.UNSIGNED_SHORT;if(s===Dh)return o.INT;if(s===bi)return o.UNSIGNED_INT;if(s===ii)return o.FLOAT;if(s===po)return n?o.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Tu)return o.ALPHA;if(s===pn)return o.RGBA;if(s===Eu)return o.LUMINANCE;if(s===wu)return o.LUMINANCE_ALPHA;if(s===Zi)return o.DEPTH_COMPONENT;if(s===Fs)return o.DEPTH_STENCIL;if(s===Ya)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Au)return o.RED;if(s===Fh)return o.RED_INTEGER;if(s===Ru)return o.RG;if(s===kh)return o.RG_INTEGER;if(s===Oh)return o.RGBA_INTEGER;if(s===Fr||s===kr||s===Or||s===Hr)if(l===Te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Or)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cl||s===Pl||s===Ll||s===Il)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Cl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ll)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Il)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dl||s===Ul)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Dl)return l===Te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ul)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Nl||s===Fl||s===kl||s===Ol||s===Hl||s===Bl||s===zl||s===Gl||s===Wl||s===Vl||s===Xl||s===ql||s===Yl||s===$l)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Nl)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fl)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kl)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ol)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hl)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bl)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zl)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gl)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wl)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vl)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xl)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ql)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yl)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$l)return l===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Br||s===Kl||s===jl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Br)return l===Te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Kl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cu||s===Zl||s===Jl||s===Ql)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Br)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Zl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ql)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ji?n?o.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class sy extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ln extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oy={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ry extends Gs{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const y=e.getContextAttributes();let m=null,p=null;const x=[],_=[],b=new Vt;let C=null;const w=new en;w.layers.enable(1),w.viewport=new ve;const S=new en;S.layers.enable(2),S.viewport=new ve;const O=[w,S],M=new sy;M.layers.enable(1),M.layers.enable(2);let v=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=x[Y];return nt===void 0&&(nt=new ha,x[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=x[Y];return nt===void 0&&(nt=new ha,x[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=x[Y];return nt===void 0&&(nt=new ha,x[Y]=nt),nt.getHandSpace()};function k(Y){const nt=_.indexOf(Y.inputSource);if(nt===-1)return;const yt=x[nt];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,c||r),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",I);for(let Y=0;Y<x.length;Y++){const nt=_[Y];nt!==null&&(_[Y]=null,x[Y].disconnect(nt))}v=null,F=null,t.setRenderTarget(m),f=null,d=null,h=null,i=null,p=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",K),i.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ts(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let nt=null,yt=null,St=null;y.depth&&(St=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=y.stencil?Fs:Zi,yt=y.stencil?ji:bi);const Tt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new ts(d.textureWidth,d.textureHeight,{format:pn,type:Ri,depthTexture:new ed(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const Bt=t.properties.get(p);Bt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),ht.setContext(i),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(Y){for(let nt=0;nt<Y.removed.length;nt++){const yt=Y.removed[nt],St=_.indexOf(yt);St>=0&&(_[St]=null,x[St].disconnect(yt))}for(let nt=0;nt<Y.added.length;nt++){const yt=Y.added[nt];let St=_.indexOf(yt);if(St===-1){for(let Bt=0;Bt<x.length;Bt++)if(Bt>=_.length){_.push(yt),St=Bt;break}else if(_[Bt]===null){_[Bt]=yt,St=Bt;break}if(St===-1)break}const Tt=x[St];Tt&&Tt.connect(yt)}}const G=new L,q=new L;function Z(Y,nt,yt){G.setFromMatrixPosition(nt.matrixWorld),q.setFromMatrixPosition(yt.matrixWorld);const St=G.distanceTo(q),Tt=nt.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,zt=Tt[14]/(Tt[10]-1),wt=Tt[14]/(Tt[10]+1),Ft=(Tt[9]+1)/Tt[5],z=(Tt[9]-1)/Tt[5],be=(Tt[8]-1)/Tt[0],Pt=(Bt[8]+1)/Bt[0],Ht=zt*be,Et=zt*Pt,de=St/(-be+Pt),Wt=de*-be;nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Wt),Y.translateZ(de),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const R=zt+de,T=wt+de,V=Ht-Wt,st=Et+(St-Wt),et=Ft*wt/T*R,ot=z*wt/T*R;Y.projectionMatrix.makePerspective(V,st,et,ot,R,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function J(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;M.near=S.near=w.near=Y.near,M.far=S.far=w.far=Y.far,(v!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),v=M.near,F=M.far);const nt=Y.parent,yt=M.cameras;J(M,nt);for(let St=0;St<yt.length;St++)J(yt[St],nt);yt.length===2?Z(M,w,S):M.projectionMatrix.copy(w.projectionMatrix),j(Y,M,nt)};function j(Y,nt,yt){yt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Os*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let tt=null;function ct(Y,nt){if(u=nt.getViewerPose(c||r),g=nt,u!==null){const yt=u.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let St=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,St=!0);for(let Tt=0;Tt<yt.length;Tt++){const Bt=yt[Tt];let zt=null;if(f!==null)zt=f.getViewport(Bt);else{const Ft=h.getViewSubImage(d,Bt);zt=Ft.viewport,Tt===0&&(t.setRenderTargetTextures(p,Ft.colorTexture,d.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(p))}let wt=O[Tt];wt===void 0&&(wt=new en,wt.layers.enable(Tt),wt.viewport=new ve,O[Tt]=wt),wt.matrix.fromArray(Bt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Bt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(zt.x,zt.y,zt.width,zt.height),Tt===0&&(M.matrix.copy(wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),St===!0&&M.cameras.push(wt)}}for(let yt=0;yt<x.length;yt++){const St=_[yt],Tt=x[yt];St!==null&&Tt!==void 0&&Tt.update(St,nt,c||r)}tt&&tt(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const ht=new td;ht.setAnimationLoop(ct),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}}function ay(o,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zh(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=o._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ly(o,t,e,n){let i={},s={},r=[];const a=e.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const b=_.program;n.uniformBlockBinding(x,b)}function c(x,_){let b=i[x.id];b===void 0&&(g(x),b=u(x),i[x.id]=b,x.addEventListener("dispose",m));const C=_.program;n.updateUBOMapping(x,C);const w=t.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function u(x){const _=h();x.__bindingPointIndex=_;const b=o.createBuffer(),C=x.__size,w=x.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,C,w),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,_,b),b}function h(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=i[x.id],b=x.uniforms,C=x.__cache;o.bindBuffer(o.UNIFORM_BUFFER,_);for(let w=0,S=b.length;w<S;w++){const O=Array.isArray(b[w])?b[w]:[b[w]];for(let M=0,v=O.length;M<v;M++){const F=O[M];if(f(F,w,M,C)===!0){const k=F.__offset,K=Array.isArray(F.value)?F.value:[F.value];let I=0;for(let G=0;G<K.length;G++){const q=K[G],Z=y(q);typeof q=="number"||typeof q=="boolean"?(F.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,k+I,F.__data)):q.isMatrix3?(F.__data[0]=q.elements[0],F.__data[1]=q.elements[1],F.__data[2]=q.elements[2],F.__data[3]=0,F.__data[4]=q.elements[3],F.__data[5]=q.elements[4],F.__data[6]=q.elements[5],F.__data[7]=0,F.__data[8]=q.elements[6],F.__data[9]=q.elements[7],F.__data[10]=q.elements[8],F.__data[11]=0):(q.toArray(F.__data,I),I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,k,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(x,_,b,C){const w=x.value,S=_+"_"+b;if(C[S]===void 0)return typeof w=="number"||typeof w=="boolean"?C[S]=w:C[S]=w.clone(),!0;{const O=C[S];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return C[S]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function g(x){const _=x.uniforms;let b=0;const C=16;for(let S=0,O=_.length;S<O;S++){const M=Array.isArray(_[S])?_[S]:[_[S]];for(let v=0,F=M.length;v<F;v++){const k=M[v],K=Array.isArray(k.value)?k.value:[k.value];for(let I=0,G=K.length;I<G;I++){const q=K[I],Z=y(q),J=b%C;J!==0&&C-J<Z.boundary&&(b+=C-J),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=Z.storage}}}const w=b%C;return w>0&&(b+=C-w),x.__size=b,x.__cache={},this}function y(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const b=r.indexOf(_.__bindingPointIndex);r.splice(b,1),o.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const x in i)o.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class ad{constructor(t={}){const{canvas:e=sf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=r;const f=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ie,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const _=this;let b=!1,C=0,w=0,S=null,O=-1,M=null;const v=new ve,F=new ve;let k=null;const K=new Rt(0);let I=0,G=e.width,q=e.height,Z=1,J=null,j=null;const tt=new ve(0,0,G,q),ct=new ve(0,0,G,q);let ht=!1;const Y=new ll;let nt=!1,yt=!1,St=null;const Tt=new Jt,Bt=new Vt,zt=new L,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return S===null?Z:1}let z=n;function be(E,H){for(let X=0;X<E.length;X++){const B=E[X],A=e.getContext(B,H);if(A!==null)return A}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ut,!1),z===null){const H=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&H.shift(),z=be(H,E),z===null)throw be(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Pt,Ht,Et,de,Wt,R,T,V,st,et,ot,At,mt,U,ft,xt,P,kt,_t,It,dt,vt,Ut,Nt;function ae(){Pt=new x0(z),Ht=new u0(z,Pt,t),Pt.init(Ht),vt=new iy(z,Pt,Ht),Et=new ey(z,Pt,Ht),de=new M0(z),Wt=new zg,R=new ny(z,Pt,Et,Wt,Ht,vt,de),T=new p0(_),V=new y0(_),st=new Cf(z,Ht),Ut=new h0(z,Pt,st,Ht),et=new _0(z,st,de,Ut),ot=new E0(z,et,st,de),_t=new T0(z,Ht,R),xt=new f0(Wt),At=new Bg(_,T,V,Pt,Ht,Ut,xt),mt=new ay(_,Wt),U=new Wg,ft=new Kg(Pt,Ht),kt=new c0(_,T,V,Et,ot,d,l),P=new ty(_,ot,Ht),Nt=new ly(z,de,Ht,Et),It=new d0(z,Pt,de,Ht),dt=new v0(z,Pt,de,Ht),de.programs=At.programs,_.capabilities=Ht,_.extensions=Pt,_.properties=Wt,_.renderLists=U,_.shadowMap=P,_.state=Et,_.info=de}ae();const Lt=new ry(_,z);this.xr=Lt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=Pt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Pt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(G,q,!1))},this.getSize=function(E){return E.set(G,q)},this.setSize=function(E,H,X=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,q=H,e.width=Math.floor(E*Z),e.height=Math.floor(H*Z),X===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(G*Z,q*Z).floor()},this.setDrawingBufferSize=function(E,H,X){G=E,q=H,Z=X,e.width=Math.floor(E*X),e.height=Math.floor(H*X),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(tt)},this.setViewport=function(E,H,X,B){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,H,X,B),Et.viewport(v.copy(tt).multiplyScalar(Z).floor())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,H,X,B){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,H,X,B),Et.scissor(F.copy(ct).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(E){Et.setScissorTest(ht=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(E=!0,H=!0,X=!0){let B=0;if(E){let A=!1;if(S!==null){const N=S.texture.format;A=N===Oh||N===kh||N===Fh}if(A){const N=S.texture.type,W=N===Ri||N===bi||N===sl||N===ji||N===Uh||N===Nh,$=kt.getClearColor(),Q=kt.getClearAlpha(),it=$.r,rt=$.g,bt=$.b;W?(f[0]=it,f[1]=rt,f[2]=bt,f[3]=Q,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=it,g[1]=rt,g[2]=bt,g[3]=Q,z.clearBufferiv(z.COLOR,0,g))}else B|=z.COLOR_BUFFER_BIT}H&&(B|=z.DEPTH_BUFFER_BIT),X&&(B|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),U.dispose(),ft.dispose(),Wt.dispose(),T.dispose(),V.dispose(),ot.dispose(),Ut.dispose(),Nt.dispose(),At.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",_e),Lt.removeEventListener("sessionend",Qt),St&&(St.dispose(),St=null),pe.stop()};function at(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=de.autoReset,H=P.enabled,X=P.autoUpdate,B=P.needsUpdate,A=P.type;ae(),de.autoReset=E,P.enabled=H,P.autoUpdate=X,P.needsUpdate=B,P.type=A}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function gt(E){const H=E.target;H.removeEventListener("dispose",gt),Ot(H)}function Ot(E){Dt(E),Wt.remove(E)}function Dt(E){const H=Wt.get(E).programs;H!==void 0&&(H.forEach(function(X){At.releaseProgram(X)}),E.isShaderMaterial&&At.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,X,B,A,N){H===null&&(H=wt);const W=A.isMesh&&A.matrixWorld.determinant()<0,$=Gt(E,H,X,B,A);Et.setMaterial(B,W);let Q=X.index,it=1;if(B.wireframe===!0){if(Q=et.getWireframeAttribute(X),Q===void 0)return;it=2}const rt=X.drawRange,bt=X.attributes.position;let ce=rt.start*it,oe=(rt.start+rt.count)*it;N!==null&&(ce=Math.max(ce,N.start*it),oe=Math.min(oe,(N.start+N.count)*it)),Q!==null?(ce=Math.max(ce,0),oe=Math.min(oe,Q.count)):bt!=null&&(ce=Math.max(ce,0),oe=Math.min(oe,bt.count));const $t=oe-ce;if($t<0||$t===1/0)return;Ut.setup(A,B,$,X,Q);let le,Yt=It;if(Q!==null&&(le=st.get(Q),Yt=dt,Yt.setIndex(le)),A.isMesh)B.wireframe===!0?(Et.setLineWidth(B.wireframeLinewidth*Ft()),Yt.setMode(z.LINES)):Yt.setMode(z.TRIANGLES);else if(A.isLine){let Mt=B.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*Ft()),A.isLineSegments?Yt.setMode(z.LINES):A.isLineLoop?Yt.setMode(z.LINE_LOOP):Yt.setMode(z.LINE_STRIP)}else A.isPoints?Yt.setMode(z.POINTS):A.isSprite&&Yt.setMode(z.TRIANGLES);if(A.isBatchedMesh)Yt.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else if(A.isInstancedMesh)Yt.renderInstances(ce,$t,A.count);else if(X.isInstancedBufferGeometry){const Mt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ke=Math.min(X.instanceCount,Mt);Yt.renderInstances(ce,$t,Ke)}else Yt.render(ce,$t)};function ue(E,H,X){E.transparent===!0&&E.side===Oe&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,On(E,H,X),E.side=Un,E.needsUpdate=!0,On(E,H,X),E.side=Oe):On(E,H,X)}this.compile=function(E,H,X=null){X===null&&(X=E),m=ft.get(X),m.init(),x.push(m),X.traverseVisible(function(A){A.isLight&&A.layers.test(H.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),E!==X&&E.traverseVisible(function(A){A.isLight&&A.layers.test(H.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),m.setupLights(_._useLegacyLights);const B=new Set;return E.traverse(function(A){const N=A.material;if(N)if(Array.isArray(N))for(let W=0;W<N.length;W++){const $=N[W];ue($,X,A),B.add($)}else ue(N,X,A),B.add(N)}),x.pop(),m=null,B},this.compileAsync=function(E,H,X=null){const B=this.compile(E,H,X);return new Promise(A=>{function N(){if(B.forEach(function(W){Wt.get(W).currentProgram.isReady()&&B.delete(W)}),B.size===0){A(E);return}setTimeout(N,10)}Pt.get("KHR_parallel_shader_compile")!==null?N():setTimeout(N,10)})};let qt=null;function fe(E){qt&&qt(E)}function _e(){pe.stop()}function Qt(){pe.start()}const pe=new td;pe.setAnimationLoop(fe),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(E){qt=E,Lt.setAnimationLoop(E),E===null?pe.stop():pe.start()},Lt.addEventListener("sessionstart",_e),Lt.addEventListener("sessionend",Qt),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(H),H=Lt.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,H,S),m=ft.get(E,x.length),m.init(),x.push(m),Tt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(Tt),yt=this.localClippingEnabled,nt=xt.init(this.clippingPlanes,yt),y=U.get(E,p.length),y.init(),p.push(y),$e(E,H,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(J,j),this.info.render.frame++,nt===!0&&xt.beginShadows();const X=m.state.shadowsArray;if(P.render(X,E,H),nt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),kt.render(y,E),m.setupLights(_._useLegacyLights),H.isArrayCamera){const B=H.cameras;for(let A=0,N=B.length;A<N;A++){const W=B[A];kn(y,E,W,W.viewport)}}else kn(y,E,H);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(_,E,H),Ut.resetDefaultState(),O=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function $e(E,H,X,B){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){B&&zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);const W=ot.update(E),$=E.material;$.visible&&y.push(E,W,$,X,zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const W=ot.update(E),$=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),zt.copy(E.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),zt.copy(W.boundingSphere.center)),zt.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray($)){const Q=W.groups;for(let it=0,rt=Q.length;it<rt;it++){const bt=Q[it],ce=$[bt.materialIndex];ce&&ce.visible&&y.push(E,W,ce,X,zt.z,bt)}}else $.visible&&y.push(E,W,$,X,zt.z,null)}}const N=E.children;for(let W=0,$=N.length;W<$;W++)$e(N[W],H,X,B)}function kn(E,H,X,B){const A=E.opaque,N=E.transmissive,W=E.transparent;m.setupLightsView(X),nt===!0&&xt.setGlobalState(_.clippingPlanes,X),N.length>0&&Rn(A,N,H,X),B&&Et.viewport(v.copy(B)),A.length>0&&Ie(A,H,X),N.length>0&&Ie(N,H,X),W.length>0&&Ie(W,H,X),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Rn(E,H,X,B){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const N=Ht.isWebGL2;St===null&&(St=new ts(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")?po:Ri,minFilter:Qi,samples:N?4:0})),_.getDrawingBufferSize(Bt),N?St.setSize(Bt.x,Bt.y):St.setSize(Tr(Bt.x),Tr(Bt.y));const W=_.getRenderTarget();_.setRenderTarget(St),_.getClearColor(K),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const $=_.toneMapping;_.toneMapping=oi,Ie(E,X,B),R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St);let Q=!1;for(let it=0,rt=H.length;it<rt;it++){const bt=H[it],ce=bt.object,oe=bt.geometry,$t=bt.material,le=bt.group;if($t.side===Oe&&ce.layers.test(B.layers)){const Yt=$t.side;$t.side=cn,$t.needsUpdate=!0,Fe(ce,X,B,oe,$t,le),$t.side=Yt,$t.needsUpdate=!0,Q=!0}}Q===!0&&(R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St)),_.setRenderTarget(W),_.setClearColor(K,I),_.toneMapping=$}function Ie(E,H,X){const B=H.isScene===!0?H.overrideMaterial:null;for(let A=0,N=E.length;A<N;A++){const W=E[A],$=W.object,Q=W.geometry,it=B===null?W.material:B,rt=W.group;$.layers.test(X.layers)&&Fe($,H,X,Q,it,rt)}}function Fe(E,H,X,B,A,N){E.onBeforeRender(_,H,X,B,A,N),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),A.onBeforeRender(_,H,X,B,E,N),A.transparent===!0&&A.side===Oe&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,_.renderBufferDirect(X,H,B,A,E,N),A.side=Un,A.needsUpdate=!0,_.renderBufferDirect(X,H,B,A,E,N),A.side=Oe):_.renderBufferDirect(X,H,B,A,E,N),E.onAfterRender(_,H,X,B,A,N)}function On(E,H,X){H.isScene!==!0&&(H=wt);const B=Wt.get(E),A=m.state.lights,N=m.state.shadowsArray,W=A.state.version,$=At.getParameters(E,A.state,N,H,X),Q=At.getProgramCacheKey($);let it=B.programs;B.environment=E.isMeshStandardMaterial?H.environment:null,B.fog=H.fog,B.envMap=(E.isMeshStandardMaterial?V:T).get(E.envMap||B.environment),it===void 0&&(E.addEventListener("dispose",gt),it=new Map,B.programs=it);let rt=it.get(Q);if(rt!==void 0){if(B.currentProgram===rt&&B.lightsStateVersion===W)return Zt(E,$),rt}else $.uniforms=At.getUniforms(E),E.onBuild(X,$,_),E.onBeforeCompile($,_),rt=At.acquireProgram($,Q),it.set(Q,rt),B.uniforms=$.uniforms;const bt=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(bt.clippingPlanes=xt.uniform),Zt(E,$),B.needsLights=ne(E),B.lightsStateVersion=W,B.needsLights&&(bt.ambientLightColor.value=A.state.ambient,bt.lightProbe.value=A.state.probe,bt.directionalLights.value=A.state.directional,bt.directionalLightShadows.value=A.state.directionalShadow,bt.spotLights.value=A.state.spot,bt.spotLightShadows.value=A.state.spotShadow,bt.rectAreaLights.value=A.state.rectArea,bt.ltc_1.value=A.state.rectAreaLTC1,bt.ltc_2.value=A.state.rectAreaLTC2,bt.pointLights.value=A.state.point,bt.pointLightShadows.value=A.state.pointShadow,bt.hemisphereLights.value=A.state.hemi,bt.directionalShadowMap.value=A.state.directionalShadowMap,bt.directionalShadowMatrix.value=A.state.directionalShadowMatrix,bt.spotShadowMap.value=A.state.spotShadowMap,bt.spotLightMatrix.value=A.state.spotLightMatrix,bt.spotLightMap.value=A.state.spotLightMap,bt.pointShadowMap.value=A.state.pointShadowMap,bt.pointShadowMatrix.value=A.state.pointShadowMatrix),B.currentProgram=rt,B.uniformsList=null,rt}function Yn(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=gr.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Zt(E,H){const X=Wt.get(E);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function Gt(E,H,X,B,A){H.isScene!==!0&&(H=wt),R.resetTextureUnits();const N=H.fog,W=B.isMeshStandardMaterial?H.environment:null,$=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Pe,Q=(B.isMeshStandardMaterial?V:T).get(B.envMap||W),it=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,rt=!!X.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),bt=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,oe=!!X.morphAttributes.color;let $t=oi;B.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&($t=_.toneMapping);const le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Yt=le!==void 0?le.length:0,Mt=Wt.get(B),Ke=m.state.lights;if(nt===!0&&(yt===!0||E!==M)){const te=E===M&&B.id===O;xt.setState(B,E,te)}let Se=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Ke.state.version||Mt.outputColorSpace!==$||A.isBatchedMesh&&Mt.batching===!1||!A.isBatchedMesh&&Mt.batching===!0||A.isInstancedMesh&&Mt.instancing===!1||!A.isInstancedMesh&&Mt.instancing===!0||A.isSkinnedMesh&&Mt.skinning===!1||!A.isSkinnedMesh&&Mt.skinning===!0||A.isInstancedMesh&&Mt.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&Mt.instancingColor===!1&&A.instanceColor!==null||Mt.envMap!==Q||B.fog===!0&&Mt.fog!==N||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==xt.numPlanes||Mt.numIntersection!==xt.numIntersection)||Mt.vertexAlphas!==it||Mt.vertexTangents!==rt||Mt.morphTargets!==bt||Mt.morphNormals!==ce||Mt.morphColors!==oe||Mt.toneMapping!==$t||Ht.isWebGL2===!0&&Mt.morphTargetsCount!==Yt)&&(Se=!0):(Se=!0,Mt.__version=B.version);let Cn=Mt.currentProgram;Se===!0&&(Cn=On(B,H,A));let $n=!1,dn=!1,un=!1;const De=Cn.getUniforms(),We=Mt.uniforms;if(Et.useProgram(Cn.program)&&($n=!0,dn=!0,un=!0),B.id!==O&&(O=B.id,dn=!0),$n||M!==E){De.setValue(z,"projectionMatrix",E.projectionMatrix),De.setValue(z,"viewMatrix",E.matrixWorldInverse);const te=De.map.cameraPosition;te!==void 0&&te.setValue(z,zt.setFromMatrixPosition(E.matrixWorld)),Ht.logarithmicDepthBuffer&&De.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&De.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,dn=!0,un=!0)}if(A.isSkinnedMesh){De.setOptional(z,A,"bindMatrix"),De.setOptional(z,A,"bindMatrixInverse");const te=A.skeleton;te&&(Ht.floatVertexTextures?(te.boneTexture===null&&te.computeBoneTexture(),De.setValue(z,"boneTexture",te.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}A.isBatchedMesh&&(De.setOptional(z,A,"batchingTexture"),De.setValue(z,"batchingTexture",A._matricesTexture,R));const qe=X.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0&&Ht.isWebGL2===!0)&&_t.update(A,X,Cn),(dn||Mt.receiveShadow!==A.receiveShadow)&&(Mt.receiveShadow=A.receiveShadow,De.setValue(z,"receiveShadow",A.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(We.envMap.value=Q,We.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1),dn&&(De.setValue(z,"toneMappingExposure",_.toneMappingExposure),Mt.needsLights&&Me(We,un),N&&B.fog===!0&&mt.refreshFogUniforms(We,N),mt.refreshMaterialUniforms(We,B,Z,q,St),gr.upload(z,Yn(Mt),We,R)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(gr.upload(z,Yn(Mt),We,R),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&De.setValue(z,"center",A.center),De.setValue(z,"modelViewMatrix",A.modelViewMatrix),De.setValue(z,"normalMatrix",A.normalMatrix),De.setValue(z,"modelMatrix",A.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const te=B.uniformsGroups;for(let je=0,Nr=te.length;je<Nr;je++)if(Ht.isWebGL2){const So=te[je];Nt.update(So,Cn),Nt.bind(So,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function Me(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function ne(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,H,X){Wt.get(E.texture).__webglTexture=H,Wt.get(E.depthTexture).__webglTexture=X;const B=Wt.get(E);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=X===void 0,B.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){const X=Wt.get(E);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,X=0){S=E,C=H,w=X;let B=!0,A=null,N=!1,W=!1;if(E){const Q=Wt.get(E);Q.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(z.FRAMEBUFFER,null),B=!1):Q.__webglFramebuffer===void 0?R.setupRenderTarget(E):Q.__hasExternalTextures&&R.rebindTextures(E,Wt.get(E.texture).__webglTexture,Wt.get(E.depthTexture).__webglTexture);const it=E.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(W=!0);const rt=Wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(rt[H])?A=rt[H][X]:A=rt[H],N=!0):Ht.isWebGL2&&E.samples>0&&R.useMultisampledRTT(E)===!1?A=Wt.get(E).__webglMultisampledFramebuffer:Array.isArray(rt)?A=rt[X]:A=rt,v.copy(E.viewport),F.copy(E.scissor),k=E.scissorTest}else v.copy(tt).multiplyScalar(Z).floor(),F.copy(ct).multiplyScalar(Z).floor(),k=ht;if(Et.bindFramebuffer(z.FRAMEBUFFER,A)&&Ht.drawBuffers&&B&&Et.drawBuffers(E,A),Et.viewport(v),Et.scissor(F),Et.setScissorTest(k),N){const Q=Wt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Q.__webglTexture,X)}else if(W){const Q=Wt.get(E.texture),it=H||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Q.__webglTexture,X||0,it)}O=-1},this.readRenderTargetPixels=function(E,H,X,B,A,N,W){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=Wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&W!==void 0&&($=$[W]),$){Et.bindFramebuffer(z.FRAMEBUFFER,$);try{const Q=E.texture,it=Q.format,rt=Q.type;if(it!==pn&&vt.convert(it)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const bt=rt===po&&(Pt.has("EXT_color_buffer_half_float")||Ht.isWebGL2&&Pt.has("EXT_color_buffer_float"));if(rt!==Ri&&vt.convert(rt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===ii&&(Ht.isWebGL2||Pt.has("OES_texture_float")||Pt.has("WEBGL_color_buffer_float")))&&!bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-B&&X>=0&&X<=E.height-A&&z.readPixels(H,X,B,A,vt.convert(it),vt.convert(rt),N)}finally{const Q=S!==null?Wt.get(S).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,Q)}}},this.copyFramebufferToTexture=function(E,H,X=0){const B=Math.pow(2,-X),A=Math.floor(H.image.width*B),N=Math.floor(H.image.height*B);R.setTexture2D(H,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,E.x,E.y,A,N),Et.unbindTexture()},this.copyTextureToTexture=function(E,H,X,B=0){const A=H.image.width,N=H.image.height,W=vt.convert(X.format),$=vt.convert(X.type);R.setTexture2D(X,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment),H.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,B,E.x,E.y,A,N,W,$,H.image.data):H.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,B,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,W,H.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,B,E.x,E.y,W,$,H.image),B===0&&X.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(E,H,X,B,A=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const N=E.max.x-E.min.x+1,W=E.max.y-E.min.y+1,$=E.max.z-E.min.z+1,Q=vt.convert(B.format),it=vt.convert(B.type);let rt;if(B.isData3DTexture)R.setTexture3D(B,0),rt=z.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)R.setTexture2DArray(B,0),rt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);const bt=z.getParameter(z.UNPACK_ROW_LENGTH),ce=z.getParameter(z.UNPACK_IMAGE_HEIGHT),oe=z.getParameter(z.UNPACK_SKIP_PIXELS),$t=z.getParameter(z.UNPACK_SKIP_ROWS),le=z.getParameter(z.UNPACK_SKIP_IMAGES),Yt=X.isCompressedTexture?X.mipmaps[A]:X.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Yt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Yt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),X.isDataTexture||X.isData3DTexture?z.texSubImage3D(rt,A,H.x,H.y,H.z,N,W,$,Q,it,Yt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(rt,A,H.x,H.y,H.z,N,W,$,Q,Yt.data)):z.texSubImage3D(rt,A,H.x,H.y,H.z,N,W,$,Q,it,Yt),z.pixelStorei(z.UNPACK_ROW_LENGTH,bt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce),z.pixelStorei(z.UNPACK_SKIP_PIXELS,oe),z.pixelStorei(z.UNPACK_SKIP_ROWS,$t),z.pixelStorei(z.UNPACK_SKIP_IMAGES,le),A===0&&B.generateMipmaps&&z.generateMipmap(rt),Et.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Et.unbindTexture()},this.resetState=function(){C=0,w=0,S=null,Et.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===rl?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===Ar?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ie?Ji:zh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ji?ie:Pe}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class cy extends ad{}cy.prototype.isWebGL1Renderer=!0;class ld extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class cd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new L;class yo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hd extends wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vs;const Qs=new L,Ms=new L,bs=new L,Ss=new Vt,to=new Vt,dd=new Jt,qo=new L,eo=new L,Yo=new L,Vc=new Vt,da=new Vt,Xc=new Vt;class hy extends Ee{constructor(t=new hd){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cd(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new yo(n,3,0,!1)),vs.setAttribute("uv",new yo(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new Vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;$o(qo.set(-.5,-.5,0),bs,r,Ms,i,s),$o(eo.set(.5,-.5,0),bs,r,Ms,i,s),$o(Yo.set(.5,.5,0),bs,r,Ms,i,s),Vc.set(0,0),da.set(1,0),Xc.set(1,1);let a=t.ray.intersectTriangle(qo,eo,Yo,!1,Qs);if(a===null&&($o(eo.set(-.5,.5,0),bs,r,Ms,i,s),da.set(0,1),a=t.ray.intersectTriangle(qo,Yo,eo,!1,Qs),a===null))return;const l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:Tn.getInterpolation(Qs,qo,eo,Yo,Vc,da,Xc,new Vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $o(o,t,e,n,i,s){Ss.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(to.x=s*Ss.x-i*Ss.y,to.y=i*Ss.x+s*Ss.y):to.copy(Ss),o.copy(t),o.x+=to.x,o.y+=to.y,o.applyMatrix4(dd)}const qc=new L,Yc=new ve,$c=new ve,dy=new L,Kc=new Jt,Ko=new L,ua=new Vn,jc=new Jt,fa=new Rr;class uy extends lt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rl,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ko),this.boundingBox.expandByPoint(Ko)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ko),this.boundingSphere.expandByPoint(Ko)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(i),t.ray.intersectsSphere(ua)!==!1&&(jc.copy(i).invert(),fa.copy(t.ray).applyMatrix4(jc),!(this.boundingBox!==null&&fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,fa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Yc.fromBufferAttribute(i.attributes.skinIndex,t),$c.fromBufferAttribute(i.attributes.skinWeight,t),qc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const r=$c.getComponent(s);if(r!==0){const a=Yc.getComponent(s);Kc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(dy.copy(qc).applyMatrix4(Kc),r)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class ud extends Ee{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ul extends Be{constructor(t=null,e=1,n=1,i,s,r,a,l,c=Xe,u=Xe,h,d){super(null,r,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zc=new Jt,fy=new Jt;class fl{constructor(t=[],e=[]){this.uuid=Dn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=t.length;s<r;s++){const a=t[s]?t[s].matrixWorld:fy;Zc.multiplyMatrices(a,e[s]),Zc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ul(e,t,t,pn,ii);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let r=e[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new ud),this.bones.push(r),this.boneInverses.push(new Jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const r=e[i];t.bones.push(r.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class ja extends Le{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ts=new Jt,Jc=new Jt,jo=[],Qc=new vn,py=new Jt,no=new lt,io=new Vn;class my extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ja(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,py)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),Qc.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Qc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),io.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(io)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(n),t.ray.intersectsSphere(io)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ts),Jc.multiplyMatrices(n,Ts),no.matrixWorld=Jc,no.raycast(t,jo);for(let r=0,a=jo.length;r<a;r++){const l=jo[r];l.instanceId=s,l.object=this,e.push(l)}jo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ja(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class pl extends wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const th=new L,eh=new L,nh=new Jt,pa=new Rr,Zo=new Vn;class Lr extends Ee{constructor(t=new Ne,e=new pl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)th.fromBufferAttribute(e,i-1),eh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=th.distanceTo(eh);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(i),Zo.radius+=s,t.ray.intersectsSphere(Zo)===!1)return;nh.copy(i).invert(),pa.copy(t.ray).applyMatrix4(nh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,d=new L,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let _=p,b=x-1;_<b;_+=f){const C=g.getX(_),w=g.getX(_+1);if(c.fromBufferAttribute(m,C),u.fromBufferAttribute(m,w),pa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(d);O<t.near||O>t.far||e.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),x=Math.min(m.count,r.start+r.count);for(let _=p,b=x-1;_<b;_+=f){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),pa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ih=new L,sh=new L;class gy extends Lr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)ih.fromBufferAttribute(e,i),sh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ih.distanceTo(sh);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yy extends Lr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class xo extends wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const oh=new Jt,Za=new Rr,Jo=new Vn,Qo=new L;class Er extends Ee{constructor(t=new Ne,e=new xo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=s,t.ray.intersectsSphere(Jo)===!1)return;oh.copy(i).invert(),Za.copy(t.ray).applyMatrix4(oh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,y=f;g<y;g++){const m=c.getX(g);Qo.fromBufferAttribute(h,m),rh(Qo,m,l,i,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=d,y=f;g<y;g++)Qo.fromBufferAttribute(h,g),rh(Qo,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rh(o,t,e,n,i,s,r){const a=Za.distanceSqToPoint(o);if(a<e){const l=new L;Za.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}class nn extends Be{constructor(t,e,n,i,s,r,a,l,c){super(t,e,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ml extends Ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],r=[],a=[],l=[],c=new L,u=new Vt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(a,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class he extends Ne{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const y=[],m=n/2;let p=0;x(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(f,2));function x(){const b=new L,C=new L;let w=0;const S=(e-t)/n;for(let O=0;O<=s;O++){const M=[],v=O/s,F=v*(e-t)+t;for(let k=0;k<=i;k++){const K=k/i,I=K*l+a,G=Math.sin(I),q=Math.cos(I);C.x=F*G,C.y=-v*n+m,C.z=F*q,h.push(C.x,C.y,C.z),b.set(G,S,q).normalize(),d.push(b.x,b.y,b.z),f.push(K,1-v),M.push(g++)}y.push(M)}for(let O=0;O<i;O++)for(let M=0;M<s;M++){const v=y[M][O],F=y[M+1][O],k=y[M+1][O+1],K=y[M][O+1];u.push(v,F,K),u.push(F,k,K),w+=6}c.addGroup(p,w,0),p+=w}function _(b){const C=g,w=new Vt,S=new L;let O=0;const M=b===!0?t:e,v=b===!0?1:-1;for(let k=1;k<=i;k++)h.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const F=g;for(let k=0;k<=i;k++){const I=k/i*l+a,G=Math.cos(I),q=Math.sin(I);S.x=M*q,S.y=m*v,S.z=M*G,h.push(S.x,S.y,S.z),d.push(0,v,0),w.x=G*.5+.5,w.y=q*.5*v+.5,f.push(w.x,w.y),g++}for(let k=0;k<i;k++){const K=C+k,I=F+k;b===!0?u.push(I,I+1,K):u.push(I+1,I,K),O+=3}c.addGroup(p,O,b===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ir extends he{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ir(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pi extends Ne{constructor(t=.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/i,f=new L,g=new Vt;for(let y=0;y<=i;y++){for(let m=0;m<=n;m++){const p=s+m/n*r;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let y=0;y<i;y++){const m=y*(n+1);for(let p=0;p<n;p++){const x=p+m,_=x,b=x+n+1,C=x+n+2,w=x+1;a.push(_,b,w),a.push(b,C,w)}}this.setIndex(a),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ye extends Ne{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],h=new L,d=new L,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let b=0;p===0&&r===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let C=0;C<=e;C++){const w=C/e;h.x=-t*Math.cos(i+w*s)*Math.sin(r+_*a),h.y=t*Math.cos(r+_*a),h.z=t*Math.sin(i+w*s)*Math.sin(r+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(w+b,1-_),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const _=u[p][x+1],b=u[p][x],C=u[p+1][x],w=u[p+1][x+1];(p!==0||r>0)&&f.push(_,b,w),(p!==n-1||l<Math.PI)&&f.push(b,C,w)}this.setIndex(f),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(y,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class es extends Ne{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],u=new L,h=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const y=g/i*s,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(y),h.y=(t+e*Math.cos(m))*Math.sin(y),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const y=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;r.push(y,m,x),r.push(m,p,x)}this.setIndex(r),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class se extends wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ai extends se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class xy extends wn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function tr(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function _y(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function vy(o){function t(i,s){return o[i]-o[s]}const e=o.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function ah(o,t,e){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[r++]=o[a+l]}return i}function fd(o,t,e,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(t.push(s.time),e.push.apply(e,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(t.push(s.time),e.push(r)),s=o[i++];while(s!==void 0)}class Mo{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}for(;n<r;){const a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class My extends Mo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,r=t+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case ec:s=t,a=2*e-n;break;case nc:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ec:r=t,l=2*n-e;break;case nc:r=1,l=n+i[1]-i[0];break;default:r=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let C=0;C!==a;++C)s[C]=p*r[u+C]+x*r[c+C]+_*r[l+C]+b*r[h+C];return s}}class by extends Mo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==a;++d)s[d]=r[c+d]*h+r[l+d]*u;return s}}class Sy extends Mo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Xn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tr(e,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tr(t.times,Array),values:tr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sy(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new by(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new My(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case ks:e=this.InterpolantFactoryMethodLinear;break;case zr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return zr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(i!==void 0&&_y(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zr,s=t.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const y=e[h+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];const h=a*n,d=r*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=ks;class Vs extends Xn{}Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=mo;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class pd extends Xn{}pd.prototype.ValueTypeName="color";class Bs extends Xn{}Bs.prototype.ValueTypeName="number";class Ty extends Mo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let u=c+a;c!==u;c+=4)an.slerpFlat(s,0,r,c-a,r,c,l);return s}}class ns extends Xn{InterpolantFactoryMethodLinear(t){return new Ty(this.times,this.values,this.getValueSize(),t)}}ns.prototype.ValueTypeName="quaternion";ns.prototype.DefaultInterpolation=ks;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends Xn{}Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=mo;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Xn{}zs.prototype.ValueTypeName="vector";class Ey{constructor(t,e=-1,n,i=Pu){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,a=n.length;r!==a;++r)e.push(Ay(n[r]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,r=n.length;s!==r;++s)e.push(Xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=vy(l);l=ah(l,1,u),c=ah(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Bs(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,r)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,y){if(f.length!==0){const m=[],p=[];fd(f,m,p,g),m.length!==0&&y.push(new h(d,m,p))}},i=[],s=t.name||"default",r=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)f[d[g].morphTargets[y]]=-1;for(const y in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const _=d[g];m.push(_.time),p.push(_.morphTarget===y?1:0)}i.push(new Bs(".morphTargetInfluence["+y+"]",m,p))}l=f.length*r}else{const f=".bones["+e[h].name+"]";n(zs,f+".position",d,"pos",i),n(ns,f+".quaternion",d,"rot",i),n(zs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function wy(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bs;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return pd;case"quaternion":return ns;case"bool":case"boolean":return Vs;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Ay(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=wy(o.type);if(o.times===void 0){const e=[],n=[];fd(o.keys,e,n,"value"),o.times=e,o.values=n}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const Si={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Ry{constructor(t,e,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Cy=new Ry;class qs{constructor(t){this.manager=t!==void 0?t:Cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class Py extends Error{constructor(t,e){super(t),this.response=e}}class md extends qs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Si.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:n,onError:i});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ti[t],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let y=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:_,value:b})=>{if(_)p.close();else{y+=b.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let w=0,S=u.length;w<S;w++){const O=u[w];O.onProgress&&O.onProgress(C)}p.enqueue(b),x()}})}}});return new Response(m)}else throw new Py(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Si.add(t,c);const u=ti[t];delete ti[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ti[t];if(u===void 0)throw this.manager.itemError(t),c;delete ti[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ly extends qs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Si.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=go("img");function l(){u(),Si.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Ys extends qs{constructor(t){super(t)}load(t,e,n,i){const s=new Be,r=new Ly(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class bo extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class gd extends bo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ma=new Jt,lh=new L,ch=new L;class gl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(lh),ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ch),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Iy extends gl{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Os*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Dy extends bo{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Iy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const hh=new Jt,so=new L,ga=new L;class Uy extends gl{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),so.setFromMatrixPosition(t.matrixWorld),n.position.copy(so),ga.copy(n.position),ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ga),n.updateMatrixWorld(),i.makeTranslation(-so.x,-so.y,-so.z),hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh)}}class Ja extends bo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Uy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ny extends gl{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dr extends bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Ny}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yd extends bo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ho{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Fy extends qs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Si.get(t);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Si.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Si.add(t,l),s.manager.itemStart(t)}}class ky{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=dh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function dh(){return(typeof performance>"u"?Date:performance).now()}const yl="\\[\\]\\.:\\/",Oy=new RegExp("["+yl+"]","g"),xl="[^"+yl+"]",Hy="[^"+yl.replace("\\.","")+"]",By=/((?:WC+[\/:])*)/.source.replace("WC",xl),zy=/(WCOD+)?/.source.replace("WCOD",Hy),Gy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),Wy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),Vy=new RegExp("^"+By+zy+Gy+Wy+"$"),Xy=["material","materials","bones","map"];class qy{constructor(t,e,n){const i=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ge{constructor(t,e,n){this.path=e,this.parsedPath=n||ge.parseTrackName(e),this.node=ge.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ge.Composite(t,e,n):new ge(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Oy,"")}static parseTrackName(t){const e=Vy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Xy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ge.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const r=t[i];if(r===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ge.Composite=qy;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);class Yy{domElement;three;constructor(){this.three=new ad({antialias:!1,powerPreference:"high-performance"}),this.domElement=this.three.domElement,this.three.setPixelRatio(window.devicePixelRatio),this.three.setClearColor(16,1),this.three.toneMapping=oi,this.three.outputColorSpace=ie}setSize(t,e){this.three.setSize(t,e,!1),this.domElement.style.width="100vw",this.domElement.style.height="100vh",this.domElement.style.position="fixed",this.domElement.style.top="0",this.domElement.style.left="0"}dispose(){this.three.dispose()}}class $y{group;skyMat;time=0;constructor(){this.group=new ln;const t=new ye(5e4,64,48);t.scale(-1,1,1),this.skyMat=new Nn({uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vPos;
        void main() {
          vUv = uv;
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        varying vec2 vUv;
        varying vec3 vPos;
        uniform float uTime;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        float hash1(float n) { return fract(sin(n) * 43758.5453); }

        float star(vec2 uv, float density) {
          vec2 g = floor(uv * density);
          vec2 f = fract(uv * density) - 0.5;
          float h = hash(g);
          float dist = length(f - vec2(hash(g + 1.7), hash(g + 3.1)) * 0.8 + 0.1);
          float bright = h;
          float size = 0.05 + 0.08 * h;
          return smoothstep(size, 0.0, dist) * bright;
        }

        // Twinkle: per-star phase + slow brightness modulation (subtle)
        float twinklingStar(vec2 uv, float density, float amp) {
          vec2 g = floor(uv * density);
          float h = hash(g);
          float phase = h * 6.2832;
          float tw = 0.5 + 0.5 * sin(uTime * (0.4 + h * 0.8) + phase);
          return star(uv, density) * (1.0 + (tw - 0.5) * amp);
        }

        void main() {
          vec3 dir = normalize(vPos);
          float height = dir.y * 0.5 + 0.5;

          vec3 top = vec3(0.02, 0.03, 0.08);
          vec3 bottom = vec3(0.001, 0.001, 0.03);
          vec3 col = mix(bottom, top, smoothstep(0.0, 1.0, height));

          // Slow drifting nebula bands
          float neb1 = sin(dir.y * 12.0 + dir.x * 8.0 + uTime * 0.02) * 0.5 + 0.5;
          float neb2 = sin(dir.z * 10.0 - dir.x * 6.0 - uTime * 0.015) * 0.5 + 0.5;
          col += vec3(0.15, 0.02, 0.08) * neb1 * 0.12;
          col += vec3(0.01, 0.04, 0.12) * neb2 * 0.08;

          // Dense dim stars (background) — gentle twinkle
          float s1 = twinklingStar(vUv, 200.0, 0.15) * 0.6;
          col += vec3(s1);

          // Bright foreground stars — moderate twinkle
          float s2 = twinklingStar(vUv, 60.0, 0.35) * 1.5;
          float s3 = twinklingStar(vUv + vec2(13.7, 7.3), 40.0, 0.4) * 2.0;
          col += vec3(s2 + s3);

          gl_FragColor = vec4(col, 1.0);
        }
      `,side:cn,depthWrite:!1}),this.group.add(new lt(t,this.skyMat))}update(t){this.time+=t,this.skyMat.uniforms.uTime.value=this.time}getMesh(){return this.group}}class Ky{scene;camera;clock=new ky;frames=0;lastFpsUpdate=0;fps=0;stars;constructor(){this.scene=new ld,this.scene.background=new Rt(0),this.stars=new $y,this.scene.add(this.stars.getMesh()),this.scene.add(new yd(2241365,.1)),this.scene.add(new gd(3364215,1122867,.15)),this.camera=new en(45,window.innerWidth/window.innerHeight,1,5e7),this.camera.position.set(0,0,10),this.camera.lookAt(0,0,0)}update(t){const e=this.clock.getElapsedTime();this.frames++,e-this.lastFpsUpdate>=1&&(this.fps=this.frames/(e-this.lastFpsUpdate),this.frames=0,this.lastFpsUpdate=e),this.stars.getMesh().position.copy(this.camera.position),this.stars.update(t)}getFps(){return this.fps}}const yr=[{id:"first_flight",name:"First Flight",description:"Launch your rocket",reward:10,category:"launch"},{id:"reach_10km",name:"Sky Pilot",description:"Reach 10 km altitude",reward:15,category:"altitude"},{id:"reach_space",name:"Edge of Space",description:"Reach 100 km (Kármán line)",reward:25,category:"altitude"},{id:"reach_orbit",name:"Orbital Velocity",description:"Achieve a stable orbit (Pe > 80 km)",reward:50,category:"orbit"},{id:"high_orbit",name:"High Orbit",description:"Apoapsis above 500 km",reward:40,category:"orbit"},{id:"land_earth",name:"Homecoming",description:"Land safely on Earth",reward:20,category:"landing"},{id:"land_moon",name:"One Small Step",description:"Land on the Moon",reward:100,category:"landing"},{id:"land_mars",name:"Red Planet",description:"Land on Mars",reward:150,category:"landing"},{id:"stage_master",name:"Staging Pro",description:"Separate 3 stages in one flight",reward:30,category:"staging"},{id:"speed_demon",name:"Speed Demon",description:"Exceed 3000 m/s",reward:20,category:"speed"},{id:"ev astronaut",name:"EV Astronaut",description:"Exceed 7000 m/s (orbital speed)",reward:35,category:"speed"},{id:"munar_orbit",name:"Lunar Orbit",description:"Achieve orbit around the Moon",reward:80,category:"orbit"}];class jy{root;helpOverlay=null;onPlay;onVab;onSettings;onContinue;missionsOverlay=null;scoreEl;missions;constructor(t,e,n,i,s){this.onPlay=t,this.onVab=e,this.onSettings=n,this.onContinue=i??null,this.missions=s??null,this.root=document.createElement("div"),this.root.className="panel",this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 500;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: rgba(6,8,20,0.95);
      border: none; border-radius: 0;
    `;const r=document.createElement("div");r.className="menu-logo",r.style.cssText="margin-bottom: var(--space-8); text-align: center;",r.innerHTML=`
      <svg viewBox="0 0 120 40" fill="none" style="width:100px;height:36px;display:block;margin:0 auto var(--space-2);">
        <ellipse class="ellipse-ring" cx="60" cy="20" rx="52" ry="16" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="1.2" opacity="0.4"/>
        <ellipse class="ellipse-ring" cx="60" cy="20" rx="36" ry="10" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.8" opacity="0.25"/>
        <ellipse class="ellipse-ring" cx="60" cy="20" rx="18" ry="5" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.6" opacity="0.15"/>
        <circle cx="60" cy="20" r="2.5" fill="var(--accent-gold)"/>
        <line x1="10" y1="20" x2="110" y2="20" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
        <line x1="60" y1="4" x2="60" y2="36" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
      </svg>
      <div class="text-display" style="font-size:52px;letter-spacing:0.1em;color:var(--accent-gold);">ELLIPSE</div>
      <div class="text-caption" style="margin-top:var(--space-2);letter-spacing:0.15em;">SPACE FLIGHT SIMULATOR</div>
    `,this.root.appendChild(r);const a=(l,c,u)=>{const h=document.createElement("button");return h.className=`btn btn--${c} menu-btn`,h.textContent=l,h.style.cssText="margin: 6px; min-width: 220px; padding: 12px 24px; font-size: 14px;",h.addEventListener("click",u),h};if(this.root.appendChild(a("FLIGHT","primary",this.onPlay)),this.onContinue&&this.root.appendChild(a("CONTINUE","secondary",this.onContinue)),this.root.appendChild(a("VEHICLE ASSEMBLY","secondary",this.onVab)),this.root.appendChild(a("MISSIONS","ghost",()=>this.toggleMissions())),this.root.appendChild(a("SETTINGS","ghost",this.onSettings)),this.root.appendChild(a("GUIDE","ghost",()=>this.toggleHelp())),this.missions){const l=document.createElement("div");l.style.cssText="position:fixed;top:16px;right:16px;z-index:500;color:var(--accent-gold);font:600 12px/1 monospace;letter-spacing:0.1em;background:rgba(8,10,24,0.6);border:1px solid rgba(200,152,56,0.2);border-radius:12px;padding:6px 12px;pointer-events:none;",l.textContent=`★ ${this.missions.totalScore}`,this.root.appendChild(l),this.scoreEl=l,this.missions.onScore(c=>{this.scoreEl&&(this.scoreEl.textContent=`★ ${c}`)})}else this.scoreEl=document.createElement("div")}toggleMissions(){if(this.missionsOverlay){this.missionsOverlay.remove(),this.missionsOverlay=null;return}if(!this.missions)return;const t=document.createElement("div");t.className="guide-overlay",t.style.cssText="position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:rgba(6,8,20,0.9);";const e=document.createElement("div");e.className="guide-card",e.style.cssText="max-width:520px;max-height:80vh;overflow-y:auto;padding:28px;font-family:system-ui,sans-serif;color:#ddd;background:#0c1020;border:1px solid rgba(200,152,56,0.2);border-radius:8px;";const n=new Set(this.missions.getCompleted());let i=0,s=0;for(const l of yr)i+=l.reward;for(const l of yr)n.has(l.id)&&(s+=l.reward);e.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:16px;">
        <div style="color:#c89838;font-size:18px;letter-spacing:0.05em;">★ MISSIONS</div>
        <div style="color:#c89838;font-size:12px;">${s} / ${i} pts</div>
      </div>`;const r=document.createElement("div");r.style.cssText="display:flex;flex-direction:column;gap:6px;";for(const l of yr){const c=n.has(l.id),u=document.createElement("div");u.style.cssText=`display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:4px;background:${c?"rgba(124,255,178,0.06)":"rgba(255,255,255,0.02)"};border-left:3px solid ${c?"#7CFFB2":"#3A4055"};`,u.innerHTML=`
        <div>
          <div style="font-size:13px;color:${c?"#7CFFB2":"#ddd"};font-weight:600;">${c?"☑":"☐"} ${l.name}</div>
          <div style="font-size:11px;color:#889;margin-top:2px;">${l.description}</div>
        </div>
        <div style="color:${c?"#7CFFB2":"#c89838"};font-size:12px;font-weight:600;white-space:nowrap;">+${l.reward}</div>`,r.appendChild(u)}e.appendChild(r);const a=document.createElement("button");a.className="btn btn--primary",a.style.cssText="margin-top:18px;width:100%;padding:10px;font-size:12px;",a.textContent="CLOSE",a.addEventListener("click",()=>{t.remove(),this.missionsOverlay=null}),e.appendChild(a),t.appendChild(e),t.addEventListener("click",l=>{l.target===t&&(t.remove(),this.missionsOverlay=null)}),document.body.appendChild(t),this.missionsOverlay=t}toggleHelp(){if(this.helpOverlay){this.helpOverlay.remove(),this.helpOverlay=null;return}const t=document.createElement("div");t.className="guide-overlay",t.style.cssText="position:fixed;inset:0;z-index:600;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,8,20,0.95);";const e=document.createElement("div");e.className="guide-card",e.style.cssText="max-width:560px;padding:32px;font-family:sans-serif;line-height:1.6;color:#ddd;",e.innerHTML='<h2 style="color:#c89838;font-size:22px;margin-bottom:14px;letter-spacing:0.05em;">🎮 HOW TO BUILD & LAUNCH</h2><p style="font-size:13px;color:#a9b;margin-bottom:6px;">1. Open <b style="color:#c89838;">VEHICLE ASSEMBLY</b> — build your rocket</p><p style="font-size:13px;color:#a9b;margin-bottom:6px;">2. Stack parts bottom→top: <b>capsule</b> → <b>fuel tank</b> → <b>engine</b></p><p style="font-size:13px;color:#a9b;margin-bottom:6px;">3. (optional) Add <b>decoupler</b> between stages, <b>parachute</b> + <b>legs</b> for landing</p><p style="font-size:13px;color:#a9b;margin-bottom:14px;">4. Hit <b style="color:#c89838;">FLIGHT</b>, hold <b>↑</b> to spool engines, wait for countdown</p><h2 style="color:#c89838;font-size:18px;margin:10px 0 8px;letter-spacing:0.05em;">💡 FLIGHT TIPS</h2><p style="font-size:12px;color:#889;margin-bottom:4px;">• <b>TWR ≥ 1.0</b> required to lift off — check the gauge on HUD (green = go)</p><p style="font-size:12px;color:#889;margin-bottom:4px;">• Tilt east (<b>A</b>) at ~10km to build horizontal speed for orbit</p><p style="font-size:12px;color:#889;margin-bottom:4px;">• Watch the <b style="color:#88ccff;">ORBIT panel</b> (top-right): Ap/Pe show your orbit shape</p><p style="font-size:12px;color:#889;margin-bottom:4px;">• Press <b>T</b> to cycle SAS — holds attitude / prograde / retrograde</p><p style="font-size:12px;color:#889;margin-bottom:4px;">• <b>Space</b> drops empty stages — watch the stage panel</p><p style="font-size:12px;color:#889;margin-bottom:14px;">• Land slow (< 5 m/s). Deploy <b>parachute</b> in atmosphere, extend <b>legs</b></p><h2 style="color:#c89838;font-size:18px;margin:10px 0 8px;letter-spacing:0.05em;">⌨ ROCKET CONTROLS</h2><table style="width:100%;font-size:13px;border-collapse:collapse;"><tr><td style="color:#889;padding:3px 12px 3px 0;width:80px;">↑ / ↓</td><td>Engine Power (throttle)</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">W / S</td><td>Pitch — Tilt Up / Down</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">A / D</td><td>Yaw — Turn Left / Right</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Space</td><td>Stage Separation</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;width:80px;">T</td><td>SAS — cycle OFF / HOLD / PROGRADE / RETROGRADE</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">P</td><td>Deploy Parachute</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">M / Tab</td><td>Map / Orbit view</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">[ / ]</td><td>Time Warp slower / faster</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">C</td><td>Free Camera</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">F</td><td>Reset Camera</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Mouse</td><td>Orbit / Zoom camera</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Esc</td><td>Pause / Menu</td></tr></table><button class="btn btn--primary" style="margin-top:20px;width:100%;padding:12px;" id="help-close">CLOSE</button>',e.querySelector("#help-close").addEventListener("click",()=>{t.remove(),this.helpOverlay=null}),t.appendChild(e),document.body.appendChild(t),this.helpOverlay=t}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove(),this.helpOverlay?.remove()}}const Rs=[{id:"capsule_mk1",name:"MK-1 Capsule",kind:"capsule",size:"M",mass:1200,crewCapacity:1,hasParachute:!0,dragCoeff:.5},{id:"tank_s_lfo",name:"Fuel Tank S (LFO)",kind:"tank",size:"S",mass:200,fuelCapacity:5e3,fuelType:"LFO",dragCoeff:.4},{id:"tank_m_lfo",name:"Fuel Tank M (LFO)",kind:"tank",size:"M",mass:600,fuelCapacity:5e4,fuelType:"LFO",dragCoeff:.4},{id:"tank_l_lfo",name:"Fuel Tank L (LFO)",kind:"tank",size:"L",mass:1200,fuelCapacity:1e5,fuelType:"LFO",dragCoeff:.4},{id:"tank_xl_lfo",name:"Fuel Tank XL (LFO)",kind:"tank",size:"XL",mass:2500,fuelCapacity:25e4,fuelType:"LFO",dragCoeff:.4},{id:"engine_ant",name:'"Ant" Engine',kind:"engine",size:"S",mass:50,thrust:1800,isp:350,fuelType:"LFO"},{id:"engine_sparkler",name:'"Sparkler" Vac Engine',kind:"engine",size:"S",mass:80,thrust:600,isp:385,fuelType:"LFO"},{id:"engine_vector",name:'"Vector" Engine',kind:"engine",size:"M",mass:400,thrust:3e3,isp:340,fuelType:"LFO"},{id:"engine_reliant",name:'"Reliant" Engine',kind:"engine",size:"M",mass:300,thrust:2400,isp:290,fuelType:"LFO"},{id:"engine_mastodon",name:'"Mastodon" Engine',kind:"engine",size:"L",mass:1200,thrust:7500,isp:330,fuelType:"LFO"},{id:"engine_poodle",name:'"Poodle" Vac Engine',kind:"engine",size:"L",mass:900,thrust:4e3,isp:370,fuelType:"LFO"},{id:"engine_twinboar",name:'"TwinBoar" Booster',kind:"engine",size:"L",mass:1800,thrust:45e3,isp:300,fuelType:"LFO"},{id:"engine_mammoth",name:'"Mammoth" Engine',kind:"engine",size:"XL",mass:3e3,thrust:55e3,isp:310,fuelType:"LFO"},{id:"engine_kickback",name:'"Kickback" Heavy Booster',kind:"engine",size:"XL",mass:4500,thrust:7e4,isp:280,fuelType:"LFO"},{id:"parachute_mk16",name:"Mk-16 Parachute",kind:"parachute",size:"M",mass:30,dragCoeff:5},{id:"legs_landini",name:'"Landini" Landing Legs',kind:"legs",size:"S",mass:80,dragCoeff:.1},{id:"heatshield_s",name:"Heat Shield S (Ablative)",kind:"heatshield",size:"S",mass:50,heatCapacity:5e4,dragCoeff:1.2},{id:"heatshield_m",name:"Heat Shield M (Ablative)",kind:"heatshield",size:"M",mass:150,heatCapacity:15e4,dragCoeff:1.2},{id:"heatshield_l",name:"Heat Shield L (Ablative)",kind:"heatshield",size:"L",mass:400,heatCapacity:4e5,dragCoeff:1.2},{id:"decoupler_1",name:"TD-1 Decoupler",kind:"decoupler",size:"M",mass:100,dragCoeff:.3},{id:"decoupler_s",name:"TD-0 Decoupler (S)",kind:"decoupler",size:"S",mass:40,dragCoeff:.3},{id:"decoupler_l",name:"TD-2 Decoupler (L)",kind:"decoupler",size:"L",mass:250,dragCoeff:.3},{id:"fairing_s",name:"Nose Cone S",kind:"fairing",size:"S",mass:20,dragCoeff:.1},{id:"fairing_m",name:"Nose Cone M",kind:"fairing",size:"M",mass:50,dragCoeff:.1},{id:"fairing_l",name:"Payload Fairing L",kind:"fairing",size:"L",mass:120,dragCoeff:.1},{id:"rcs_block",name:"RCS Thruster Block",kind:"rcs",size:"S",mass:10,thrust:20,isp:240,fuelType:"LFO",dragCoeff:.05},{id:"solar_panel",name:"Solar Panel",kind:"solar",size:"S",mass:25,dragCoeff:.2},{id:"agena_target",name:"Agena Target Vehicle",kind:"gltf",size:"M",mass:1500,dragCoeff:.3,gltfUrl:"/models/agena.glb",gltfScale:.0015},{id:"apollo_soyuz",name:"Apollo Soyuz",kind:"gltf",size:"L",mass:5e3,dragCoeff:.3,gltfUrl:"/models/apollo_soyuz.glb",gltfScale:.0015},{id:"saturn_v",name:"Saturn V",kind:"gltf",size:"XL",mass:3e4,fuelCapacity:5e5,thrust:55e3,isp:310,dragCoeff:.3,gltfUrl:"/models/saturn_v.glb",gltfScale:.003},{id:"ares_1",name:"Ares I",kind:"gltf",size:"XL",mass:2e4,dragCoeff:.3,gltfUrl:"/models/ares_1.glb",gltfScale:.0015},{id:"apollo_lunar_module",name:"Apollo Lunar Module",kind:"gltf",size:"L",mass:15e3,dragCoeff:.3,gltfUrl:"/models/apollo_lunar_module.glb",gltfScale:.002},{id:"atlas_6",name:"Atlas 6 (Friendship 7)",kind:"gltf",size:"L",mass:12e3,dragCoeff:.3,gltfUrl:"/models/atlas_6.glb",gltfScale:.0015},{id:"atlas_9",name:"Atlas 9 (Faith 7)",kind:"gltf",size:"L",mass:12e3,dragCoeff:.3,gltfUrl:"/models/atlas_9.glb",gltfScale:.0015},{id:"crawler",name:"Crawler Transporter",kind:"gltf",size:"XL",mass:27e3,dragCoeff:.3,gltfUrl:"/models/crawler.glb",gltfScale:.001}];function Cs(o){return Rs.find(t=>t.id===o)}function uh(o,t){if(t===Lu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===Xa||t===Bh){let e=o.getIndex();if(e===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=e.count-2,i=[];if(t===Xa)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class Zy extends qs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new nx(e)}),this.register(function(e){return new dx(e)}),this.register(function(e){return new ux(e)}),this.register(function(e){return new fx(e)}),this.register(function(e){return new sx(e)}),this.register(function(e){return new ox(e)}),this.register(function(e){return new rx(e)}),this.register(function(e){return new ax(e)}),this.register(function(e){return new ex(e)}),this.register(function(e){return new lx(e)}),this.register(function(e){return new ix(e)}),this.register(function(e){return new hx(e)}),this.register(function(e){return new cx(e)}),this.register(function(e){return new Qy(e)}),this.register(function(e){return new px(e)}),this.register(function(e){return new mx(e)})}load(t,e,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=ho.extractUrlBase(t);r=ho.resolveURL(c,this.path)}else r=ho.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new md(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,r,function(u){e(u),s.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===xd){try{r[re.KHR_BINARY_GLTF]=new gx(t)}catch(h){i&&i(h);return}s=JSON.parse(r[re.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Cx(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case re.KHR_MATERIALS_UNLIT:r[h]=new tx;break;case re.KHR_DRACO_MESH_COMPRESSION:r[h]=new yx(s,this.dracoLoader);break;case re.KHR_TEXTURE_TRANSFORM:r[h]=new xx;break;case re.KHR_MESH_QUANTIZATION:r[h]=new _x;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function Jy(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const re={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Qy{constructor(t){this.parser=t,this.name=re.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const u=new Rt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Pe);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Dr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ja(u),c.distance=h;break;case"spot":c=new Dy(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class tx{constructor(){this.name=re.KHR_MATERIALS_UNLIT}getMaterialType(){return Re}extendParams(t,e,n){const i=[];t.color=new Rt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],Pe),t.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,ie))}return Promise.all(i)}}class ex{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class nx{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Vt(a,a)}return Promise.all(s)}}class ix{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class sx{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Rt(0,0,0),e.sheenRoughness=0,e.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Pe)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",r.sheenColorTexture,ie)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class ox{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class rx{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return e.attenuationColor=new Rt().setRGB(a[0],a[1],a[2],Pe),Promise.all(s)}}class ax{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class lx{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return e.specularColor=new Rt().setRGB(a[0],a[1],a[2],Pe),r.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",r.specularColorTexture,ie)),Promise.all(s)}}class cx{constructor(t){this.parser=t,this.name=re.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(s)}}class hx{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class dx{constructor(t){this.parser=t,this.name=re.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,r)}}class ux{constructor(t){this.parser=t,this.name=re.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class fx{constructor(t){this.parser=t,this.name=re.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class px{constructor(t){this.name=re.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class mx{constructor(t){this.name=re.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Sn.TRIANGLES&&c.mode!==Sn.TRIANGLE_STRIP&&c.mode!==Sn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const y=new Jt,m=new L,p=new an,x=new L(1,1,1),_=new my(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&x.fromBufferAttribute(l.SCALE,b),_.setMatrixAt(b,y.compose(m,p,x));for(const b in l)if(b==="_COLOR_0"){const C=l[b];_.instanceColor=new ja(C.array,C.itemSize,C.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);Ee.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const xd="glTF",oo=12,fh={JSON:1313821514,BIN:5130562};class gx{constructor(t){this.name=re.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,oo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==xd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-oo,s=new DataView(t,oo);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===fh.JSON){const c=new Uint8Array(t,oo+r,a);this.content=n.decode(c)}else if(l===fh.BIN){const c=oo+r;this.body=t.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yx{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=re.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,a={},l={},c={};for(const u in r){const h=Qa[u]||u.toLowerCase();a[h]=r[u]}for(const u in t.attributes){const h=Qa[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[t.attributes[u]],f=Ds[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const y=f.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}h(f)},a,c,Pe,d)})})}}class xx{constructor(){this.name=re.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class _x{constructor(){this.name=re.KHR_MESH_QUANTIZATION}}class _d extends Mo{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let r=0;r!==i;r++)e[r]=n[s+r];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-e,h=(n-e)/u,d=h*h,f=d*h,g=t*c,y=g-c,m=-2*f+3*d,p=f-d,x=1-m,_=p-d+h;for(let b=0;b!==a;b++){const C=r[y+b+a],w=r[y+b+l]*u,S=r[g+b+a],O=r[g+b]*u;s[b]=x*C+_*w+m*S+p*O}return s}}const vx=new an;class Mx extends _d{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return vx.fromArray(s).normalize().toArray(s),s}}const Sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ph={9728:Xe,9729:Qe,9984:Va,9985:Ih,9986:mr,9987:Qi},mh={33071:He,33648:_r,10497:_n},ya={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bx={CUBICSPLINE:void 0,LINEAR:ks,STEP:mo},xa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sx(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new se({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),o.DefaultMaterial}function Oi(o,t,e){for(const n in e.extensions)o[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Mi(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Tx(o,t,e){let n=!1,i=!1,s=!1;for(let c=0,u=t.length;c<u;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,u=t.length;c<u;c++){const h=t[c];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):o.attributes.position;r.push(d)}if(i){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=h),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Ex(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)o.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wx(o){let t;const e=o.extensions&&o.extensions[re.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+_a(e.attributes):t=o.indices+":"+_a(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)t+=":"+_a(o.targets[n]);return t}function _a(o){let t="";const e=Object.keys(o).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+o[e[n]]+";";return t}function tl(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ax(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Rx=new Jt;class Cx{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Jy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Ys(this.options.manager):this.textureLoader=new Fy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new md(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Oi(s,a,i),Mi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const r=e[i].joints;for(let a=0,l=r.length;a<l;a++)t[r[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const r=t[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,u]of r.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,r){return n.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[re.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(ho.resolveURL(e.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const r=ya[i.type],a=Ds[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new Le(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=ya[i.type],c=Ds[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let y,m;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=e.cache.get(x);_||(y=new c(a,p*f,i.count*f/u),_=new cd(y,f/u),e.cache.add(x,_)),m=new yo(_,l,d%f/u,g)}else a===null?y=new c(i.count*l):y=new c(a,d,i.count*l),m=new Le(y,l,g);if(i.sparse!==void 0){const p=ya.SCALAR,x=Ds[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,C=new x(r[1],_,i.sparse.count*p),w=new c(r[2],b,i.sparse.count*l);a!==null&&(m=new Le(m.array.slice(),m.itemSize,m.normalized));for(let S=0,O=C.length;S<O;S++){const M=C[S];if(m.setX(M,w[S*l]),l>=2&&m.setY(M,w[S*l+1]),l>=3&&m.setZ(M,w[S*l+2]),l>=4&&m.setW(M,w[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,r=e.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,r=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return u.magFilter=ph[d.magFilter]||Qe,u.minFilter=ph[d.minFilter]||Qi,u.wrapS=mh[d.wrapS]||_n,u.wrapT=mh[d.wrapT]||_n,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const r=i.images[t],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(y){const m=new Be(y);m.needsUpdate=!0,d(m)}),e.load(ho.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=r.mimeType||Ax(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[re.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[re.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[re.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),t[e]=r,r})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new xo,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new pl,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return se}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let r;const a={},l=s.extensions||{},c=[];if(l[re.KHR_MATERIALS_UNLIT]){const h=i[re.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(a,s,e))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Rt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Pe),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",h.baseColorTexture,ie)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Oe);const u=s.alphaMode||xa.OPAQUE;if(u===xa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===xa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Re&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Vt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&r!==Re&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Re){const h=s.emissiveFactor;a.emissive=new Rt().setRGB(h[0],h[1],h[2],Pe)}return s.emissiveTexture!==void 0&&r!==Re&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,ie)),Promise.all(c).then(function(){const h=new r(a);return s.name&&(h.name=s.name),Mi(h,s),e.associations.set(h,{materials:t}),s.extensions&&Oi(i,h,s),h})}createUniqueName(t){const e=ge.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[re.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return gh(l,a,e)})}const r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],u=wx(c),h=i[u];if(h)r.push(h.promise);else{let d;c.extensions&&c.extensions[re.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=gh(new Ne,c,e),i[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?Sx(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(e.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const y=u[f],m=r[f];let p;const x=c[f];if(m.mode===Sn.TRIANGLES||m.mode===Sn.TRIANGLE_STRIP||m.mode===Sn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new uy(y,x):new lt(y,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Sn.TRIANGLE_STRIP?p.geometry=uh(p.geometry,Bh):m.mode===Sn.TRIANGLE_FAN&&(p.geometry=uh(p.geometry,Xa));else if(m.mode===Sn.LINES)p=new gy(y,x);else if(m.mode===Sn.LINE_STRIP)p=new Lr(y,x);else if(m.mode===Sn.LINE_LOOP)p=new yy(y,x);else if(m.mode===Sn.POINTS)p=new Er(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ex(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Mi(p,s),m.extensions&&Oi(i,p,m),e.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&Oi(i,h[0],s),h[0];const d=new ln;s.extensions&&Oi(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new en(nf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new hl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Mi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h){a.push(h);const d=new Jt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new fl(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,r=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],y=f.target,m=y.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(y))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],y=h[3],m=h[4],p=[];for(let x=0,_=d.length;x<_;x++){const b=d[x],C=f[x],w=g[x],S=y[x],O=m[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const M=n._createAnimationTracks(b,C,w,S,O);if(M)for(let v=0;v<M.length;v++)p.push(M[v])}return new Ey(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),r=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Rx)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new ud:c.length>1?u=new ln:c.length===1?u=c[0]:u=new Ee,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=r),Mi(u,s),s.extensions&&Oi(n,u,s),s.matrix!==void 0){const h=new Jt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new ln;n.name&&(s.name=i.createUniqueName(n.name)),Mi(s,n),n.extensions&&Oi(e,s,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof wn||d instanceof Be)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const r=[],a=t.name?t.name:t.uuid,l=[];fi[s.path]===fi.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(fi[s.path]){case fi.weights:c=Bs;break;case fi.rotation:c=ns;break;case fi.position:case fi.scale:c=zs;break;default:switch(n.itemSize){case 1:c=Bs;break;case 2:case 3:default:c=zs;break}break}const u=i.interpolation!==void 0?bx[i.interpolation]:ks,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+fi[s.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=tl(e.constructor),i=new Float32Array(e.length);for(let s=0,r=e.length;s<r;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof ns?Mx:_d;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Px(o,t,e){const n=t.attributes,i=new vn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=tl(Ds[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const y=tl(Ds[d.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new Vn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function gh(o,t,e){const n=t.attributes,i=[];function s(r,a){return e.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=Qa[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(t.indices!==void 0&&!o.index){const r=e.getDependency("accessor",t.indices).then(function(a){o.setIndex(a)});i.push(r)}return me.workingColorSpace!==Pe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${me.workingColorSpace}" not supported.`),Mi(o,t),Px(o,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Tx(o,t.targets,e):o})}const Ti=66743e-15,mn=1e-9,gn=23e4,va=1/60,Lx=9.80665,vd=1/15,Ix=892e22*48,Ce=.05,vi=60;function $s(o){return("/ellipse/"+o.replace(/^\//,"")).replace(/\/\//g,"/")}class Dx{stack=null;ensureStack(){if(this.stack&&document.body.contains(this.stack))return this.stack;const t=document.createElement("div");return t.className="toast-stack",document.body.appendChild(t),this.stack=t,t}show(t,e=2500){const n=this.ensureStack(),i=document.createElement("div");for(i.className="toast",i.textContent=t,n.appendChild(i);n.children.length>4;)n.firstChild?.remove();setTimeout(()=>{i.classList.add("toast-out"),setTimeout(()=>i.remove(),220)},e)}}const Xt=new Dx;function Kt(o,t){const e=document.createElement("canvas");e.width=o,e.height=t;const n=e.getContext("2d");return[e,n]}function Ux(o,t=2){const e=o.width,n=o.height,r=o.getContext("2d").getImageData(0,0,e,n).data,[a,l]=Kt(e,n),c=l.createImageData(e,n),u=c.data,h=(f,g)=>(Math.max(0,Math.min(n-1,g))*e+Math.max(0,Math.min(e-1,f)))*4;for(let f=0;f<n;f++)for(let g=0;g<e;g++){const y=r[h(g-1,f-1)]/255,m=r[h(g,f-1)]/255,p=r[h(g+1,f-1)]/255,x=r[h(g-1,f)]/255,_=r[h(g+1,f)]/255,b=r[h(g-1,f+1)]/255,C=r[h(g,f+1)]/255,w=r[h(g+1,f+1)]/255,S=p+2*_+w-(y+2*x+b),O=b+2*C+w-(y+2*m+p),M=S*t,v=O*t,F=Math.sqrt(M*M+v*v+1),k=(f*e+g)*4;u[k]=Math.round((M/F*.5+.5)*255),u[k+1]=Math.round((v/F*.5+.5)*255),u[k+2]=Math.round(1/F*255),u[k+3]=255}l.putImageData(c,0,0);const d=new nn(a);return d.wrapS=d.wrapT=_n,d.anisotropy=4,d}function Ii(o,t,e,n,i){const s=new nn(o);s.wrapS=s.wrapT=_n,s.colorSpace=ie,s.anisotropy=4;let r;t&&(r=Ux(t,2));let a;e&&(a=new nn(e),a.wrapS=a.wrapT=_n,a.anisotropy=4);let l;n&&(l=new nn(n),l.wrapS=l.wrapT=_n,l.anisotropy=4);let c;return i&&(c=new nn(i),c.wrapS=c.wrapT=_n,c.anisotropy=4),{color:s,normal:r,roughness:a,metalness:l,ao:c}}function An(o){let t=o|0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function Di(o,t,e,n=.02){const i=o.getImageData(0,0,t,e),s=i.data;for(let r=0;r<s.length;r+=4){const a=(Math.random()-.5)*2*n*255;s[r]=Math.min(255,Math.max(0,s[r]+a)),s[r+1]=Math.min(255,Math.max(0,s[r+1]+a)),s[r+2]=Math.min(255,Math.max(0,s[r+2]+a))}o.putImageData(i,0,0)}function Md(o="M"){const[n,i]=Kt(2048,2048),[s,r]=Kt(2048,2048),[a,l]=Kt(2048,2048),[c,u]=Kt(2048,2048),[h,d]=Kt(2048,2048),f=An(o.charCodeAt(0)*1e3+42),g=o==="S",y=o==="L"||o==="XL";i.fillStyle="#f5f5f0",i.fillRect(0,0,2048,2048);const m=i.createLinearGradient(0,0,0,2048);m&&(m.addColorStop(0,"rgba(0,0,0,0.03)"),m.addColorStop(.3,"rgba(0,0,0,0)"),m.addColorStop(.7,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,0.04)"),i.fillStyle=m,i.fillRect(0,0,2048,2048));const x=2048/(g?4:y?12:8);for(let C=x;C<2048;C+=x)i.strokeStyle="rgba(0,0,0,0.08)",i.lineWidth=2,i.beginPath(),i.moveTo(0,C),i.lineTo(2048,C),i.stroke(),i.strokeStyle="rgba(255,255,255,0.15)",i.lineWidth=1.5,i.beginPath(),i.moveTo(0,C-1.5),i.lineTo(2048,C-1.5),i.stroke();const _=g?8:y?24:14;i.strokeStyle="rgba(80,80,90,0.04)",i.lineWidth=1.5;for(let C=1;C<_;C++){const w=C/_*2048;i.beginPath(),i.moveTo(w,0),i.lineTo(w,2048),i.stroke()}i.fillStyle="#c0c0ba";for(let C=x;C<2048;C+=x)for(let w=30;w<2018;w+=60)i.beginPath(),i.arc(w,C,4,0,Math.PI*2),i.fill(),i.strokeStyle="#a0a09a",i.lineWidth=.5,i.stroke();if(y){i.fillStyle="#002868",i.fillRect(163.84,307.2,245.76*.4,163.84);for(let M=0;M<7;M++)i.fillStyle=M%2===0?"#BF0A30":"#ffffff",i.fillRect(163.84+245.76*.4,307.2+M/7*163.84,245.76*.6,163.84/7);i.fillStyle="#ffffff";for(let M=0;M<5;M++)for(let v=0;v<3;v++)i.beginPath(),i.arc(163.84+(v+.5)*(245.76*.4/3),307.2+(M+.5)*(163.84/5),2,0,Math.PI*2),i.fill()}i.fillStyle="rgba(30,40,80,0.12)",i.font=`bold ${2048*.06}px monospace`,i.textAlign="center",i.fillText("USA",2048/2,2048*.25);const b=g?3:y?12:6;for(let C=0;C<b;C++){const w=f()*2048*.8+204.8,S=f()*2048*.7+2048*.15,O=60+f()*200,M=50+f()*140,v=180+f()*40,F=140+f()*30,k=80+f()*30;i.fillStyle=`rgb(${v}, ${F}, ${k})`,i.globalAlpha=.6+f()*.3,i.fillRect(w,S,O,M),i.fillStyle=`rgb(${v-20}, ${F-15}, ${k-10})`;for(let K=0;K<15;K++)i.beginPath(),i.arc(w+f()*O,S+f()*M,2+f()*6,0,Math.PI*2),i.fill();i.fillStyle="rgba(200, 220, 240, 0.15)";for(let K=0;K<5;K++)i.beginPath(),i.arc(w+f()*O,S+f()*M,5+f()*15,0,Math.PI*2),i.fill();i.globalAlpha=1}i.fillStyle="#606068",i.fillRect(0,0,2048,2048*.012),i.fillRect(0,2048*.988,2048,2048*.012),i.strokeStyle="rgba(80,80,90,0.3)",i.lineWidth=3,i.beginPath(),i.moveTo(2048*.5,0),i.lineTo(2048*.5,2048),i.stroke(),i.strokeStyle="rgba(60,50,40,0.03)",i.lineWidth=1;for(let C=0;C<30;C++){const w=f()*2048,S=f()*2048;i.beginPath(),i.moveTo(w,S),i.lineTo(w+(f()-.5)*20,S+f()*2048*.3),i.stroke()}r.fillStyle="#808080",r.fillRect(0,0,2048,2048),r.strokeStyle="#b0b0b0",r.lineWidth=8;for(let C=x;C<2048;C+=x)r.beginPath(),r.moveTo(0,C),r.lineTo(2048,C),r.stroke();r.strokeStyle="#909090",r.lineWidth=3;for(let C=1;C<_;C++){const w=C/_*2048;r.beginPath(),r.moveTo(w,0),r.lineTo(w,2048),r.stroke()}r.fillStyle="#c8c8c8";for(let C=x;C<2048;C+=x)for(let w=30;w<2018;w+=60)r.beginPath(),r.arc(w,C,5,0,Math.PI*2),r.fill();l.fillStyle="#909090",l.fillRect(0,0,2048,2048),l.strokeStyle="#c0c0c0",l.lineWidth=10;for(let C=x;C<2048;C+=x)l.beginPath(),l.moveTo(0,C),l.lineTo(2048,C),l.stroke();for(let C=0;C<b;C++){const w=f()*2048*.8+204.8,S=f()*2048*.7+2048*.15,O=60+f()*200,M=50+f()*140;l.fillStyle="#e0e0e0",l.fillRect(w,S,O,M)}l.fillStyle="#505050",l.fillRect(0,0,2048,2048*.012),l.fillRect(0,2048*.988,2048,2048*.012),u.fillStyle="#050505",u.fillRect(0,0,2048,2048),u.fillStyle="#c0c0c0",u.fillRect(0,0,2048,2048*.012),u.fillRect(0,2048*.988,2048,2048*.012),u.fillStyle="#606060",u.fillRect(2048*.49,0,2048*.02,2048),d.fillStyle="#ffffff",d.fillRect(0,0,2048,2048),d.strokeStyle="#808080",d.lineWidth=12;for(let C=x;C<2048;C+=x)d.beginPath(),d.moveTo(0,C),d.lineTo(2048,C),d.stroke();d.strokeStyle="#b0b0b0",d.lineWidth=6;for(let C=1;C<_;C++){const w=C/_*2048;d.beginPath(),d.moveTo(w,0),d.lineTo(w,2048),d.stroke()}return Di(i,2048,2048,.01),Ii(n,s,a,c,h)}function Nx(){const[e,n]=Kt(2048,2048),[i,s]=Kt(2048,2048),[r,a]=Kt(2048,2048),[l,c]=Kt(2048,2048),[u,h]=Kt(2048,2048),d=An(12345);n.fillStyle="#fafaf5",n.fillRect(0,0,2048,2048*.78);const f=n.createLinearGradient(0,0,0,2048*.78);f&&(f.addColorStop(0,"rgba(20,20,25,0.05)"),f.addColorStop(.5,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(20,20,25,0.03)"),n.fillStyle=f,n.fillRect(0,0,2048,2048*.78)),n.strokeStyle="rgba(180,180,180,0.15)",n.lineWidth=2;for(let y=2048*.08;y<2048*.75;y+=2048*.07)n.beginPath(),n.moveTo(0,y),n.lineTo(2048,y),n.stroke();n.fillStyle="#2a2a2e",n.fillRect(0,2048*.78,2048,2048*.22),n.strokeStyle="rgba(40,40,45,0.5)",n.lineWidth=1;for(let y=0;y<2048;y+=32)n.beginPath(),n.moveTo(y,2048*.78),n.lineTo(y,2048),n.stroke();for(let y=2048*.78;y<2048;y+=32)n.beginPath(),n.moveTo(0,y),n.lineTo(2048,y),n.stroke();for(let y=0;y<2e3;y++){const m=d()*2048,p=2048*.78+d()*2048*.22,x=1+d()*3,_=25+d()*50,b=d()*15;n.fillStyle=`rgb(${_+b},${_},${_-b})`,n.beginPath(),n.arc(m,p,x,0,Math.PI*2),n.fill()}for(let y=0;y<60;y++){const m=d()*2048,p=2048*.78+d()*2048*.15,x=30+d()*150,_=(d()-.5)*50;n.strokeStyle=`rgba(20,15,10,${.2+d()*.3})`,n.lineWidth=1+d()*3,n.beginPath(),n.moveTo(m,p),n.lineTo(m+_,p+x),n.stroke(),n.strokeStyle=`rgba(60,40,20,${.05+d()*.1})`,n.lineWidth=3+d()*5,n.beginPath(),n.moveTo(m-_*.1,p+x*.2),n.lineTo(m+_,p+x),n.stroke()}n.fillStyle="#5a5a60",n.fillRect(0,2048*.77,2048,2048*.015),n.fillStyle="#8a8a90",n.fillRect(0,2048*.775,2048,2048*.005),n.fillStyle="#003366",n.fillRect(0,2048*.2,2048,2048*.035),n.fillStyle="#b31b1b",n.fillRect(0,2048*.245,2048,2048*.025),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(0,2048*.27,2048,2048*.003);const g=[[2048*.28,2048*.12],[2048*.55,2048*.14]];for(const[y,m]of g)n.fillStyle="#0a0a15",n.beginPath(),n.ellipse(y,m,2048*.04,2048*.03,0,0,Math.PI*2),n.fill(),n.strokeStyle="#9a9a9e",n.lineWidth=5,n.beginPath(),n.ellipse(y,m,2048*.045,2048*.035,0,0,Math.PI*2),n.stroke(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.beginPath(),n.ellipse(y,m,2048*.05,2048*.04,0,0,Math.PI*2),n.stroke();n.fillStyle="#3a3a3e";for(let y=0;y<4;y++){const m=y/4*Math.PI*2,p=2048*.5+Math.cos(m)*2048*.38,x=2048*.35+Math.sin(m)*2048*.05;n.beginPath(),n.arc(p,x,14,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.stroke()}n.fillStyle="#e0e0d8",n.fillRect(0,0,2048,2048*.04),n.strokeStyle="#a0a0a0",n.lineWidth=2,n.beginPath(),n.moveTo(0,2048*.04),n.lineTo(2048,2048*.04),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,2048,2048),s.strokeStyle="#a8a8a8",s.lineWidth=5;for(let y=2048*.08;y<2048*.75;y+=2048*.07)s.beginPath(),s.moveTo(0,y),s.lineTo(2048,y),s.stroke();s.strokeStyle="#585858",s.lineWidth=3;for(let y=0;y<2048;y+=48)s.beginPath(),s.moveTo(y,2048*.78),s.lineTo(y,2048),s.stroke();for(let y=2048*.8;y<2048;y+=48)s.beginPath(),s.moveTo(0,y),s.lineTo(2048,y),s.stroke();s.strokeStyle="#c0c0c0",s.lineWidth=8,s.beginPath(),s.moveTo(0,2048*.775),s.lineTo(2048,2048*.775),s.stroke();for(const[y,m]of g)s.strokeStyle="#d0d0d0",s.lineWidth=10,s.beginPath(),s.ellipse(y,m,2048*.05,2048*.04,0,0,Math.PI*2),s.stroke();a.fillStyle="#808080",a.fillRect(0,0,2048,2048*.78),a.fillStyle="#e0e0e0",a.fillRect(0,2048*.78,2048,2048*.22),a.fillStyle="#484848",a.fillRect(0,2048*.77,2048,2048*.015);for(const[y,m]of g)a.fillStyle="#181818",a.beginPath(),a.ellipse(y,m,2048*.045,2048*.035,0,0,Math.PI*2),a.fill();c.fillStyle="#080808",c.fillRect(0,0,2048,2048),c.fillStyle="#d0d0d0",c.fillRect(0,2048*.77,2048,2048*.015),c.fillRect(0,0,2048,2048*.04);for(const[y,m]of g)c.fillStyle="#b0b0b0",c.beginPath(),c.ellipse(y,m,2048*.05,2048*.04,0,0,Math.PI*2),c.fill();for(let y=0;y<4;y++){const m=y/4*Math.PI*2,p=2048*.5+Math.cos(m)*2048*.38,x=2048*.35+Math.sin(m)*2048*.05;c.beginPath(),c.arc(p,x,16,0,Math.PI*2),c.fill()}h.fillStyle="#ffffff",h.fillRect(0,0,2048,2048),h.strokeStyle="#808080",h.lineWidth=10;for(let y=2048*.08;y<2048*.75;y+=2048*.07)h.beginPath(),h.moveTo(0,y),h.lineTo(2048,y),h.stroke();h.strokeStyle="#606060",h.lineWidth=6;for(let y=0;y<2048;y+=48)h.beginPath(),h.moveTo(y,2048*.78),h.lineTo(y,2048),h.stroke();for(let y=2048*.8;y<2048;y+=48)h.beginPath(),h.moveTo(0,y),h.lineTo(2048,y),h.stroke();h.strokeStyle="#909090",h.lineWidth=12,h.beginPath(),h.moveTo(0,2048*.775),h.lineTo(2048,2048*.775),h.stroke();for(const[y,m]of g)h.strokeStyle="#707070",h.lineWidth=14,h.beginPath(),h.ellipse(y,m,2048*.05,2048*.04,0,0,Math.PI*2),h.stroke();return Di(n,2048,2048,.018),Ii(e,i,r,l,u)}function Fx(){const[e,n]=Kt(1024,1024),[i,s]=Kt(1024,1024),[r,a]=Kt(1024,1024),[l,c]=Kt(1024,1024),[u,h]=Kt(1024,1024),d=An(54321);n.fillStyle="#1a1a20",n.fillRect(0,0,1024,1024*.3);for(let g=0;g<150;g++){const y=d()*1024,m=d()*1024*.3,p=5+d()*25;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(y,m),n.lineTo(y,m+p),n.stroke()}n.fillStyle="#4a4a50",n.fillRect(0,1024*.3,1024,1024*.05),n.fillStyle="#2a2a2e";for(let g=20;g<1024;g+=30)n.beginPath(),n.arc(g,1024*.325,4,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=.5,n.stroke();for(let g=1024*.35;g<1024*.92;g++){const y=(g-358.4)/583.68,m=Math.round(180+60*(1-y)),p=Math.round(100+30*(1-y)),x=Math.round(40+15*(1-y));n.fillStyle=`rgb(${m}, ${p}, ${x})`,n.fillRect(0,g,1024,1)}n.strokeStyle="rgba(100,60,25,0.3)",n.lineWidth=1;for(let g=6;g<1024;g+=12)n.beginPath(),n.moveTo(g,1024*.35),n.lineTo(g,1024*.92),n.stroke();const f=n.createLinearGradient(0,1024*.8,0,1024);f&&(f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(.4,"rgba(0,0,0,0.2)"),f.addColorStop(.8,"rgba(0,0,0,0.5)"),f.addColorStop(1,"rgba(0,0,0,0.7)"),n.fillStyle=f,n.fillRect(0,1024*.8,1024,1024*.2)),n.fillStyle="#6a6a70",n.fillRect(0,1024*.92,1024,1024*.03),n.fillStyle="#8a8a90",n.fillRect(0,1024*.95,1024,1024*.02),n.fillStyle="#2a2a30";for(let g=0;g<4;g++){const y=g/4*Math.PI*2+Math.PI/4,m=1024*.5+Math.cos(y)*1024*.38,p=1024*.15+Math.sin(y)*1024*.04;n.beginPath(),n.arc(m,p,1024*.04,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=1,n.stroke()}n.strokeStyle="#6a6a70",n.lineWidth=3,n.beginPath(),n.arc(1024/2,1024*.12,1024*.3,0,Math.PI*2),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let g=0;g<1024;g+=3)s.beginPath(),s.moveTo(g,0),s.lineTo(g,1024*.3),s.stroke();s.fillStyle="#c0c0c0";for(let g=20;g<1024;g+=30)s.beginPath(),s.arc(g,1024*.325,4,0,Math.PI*2),s.fill();s.strokeStyle="#606060",s.lineWidth=2;for(let g=6;g<1024;g+=12)s.beginPath(),s.moveTo(g,1024*.35),s.lineTo(g,1024*.92),s.stroke();s.strokeStyle="#a0a0a0",s.lineWidth=5,s.beginPath(),s.moveTo(0,1024*.3),s.lineTo(1024,1024*.3),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#404040",a.fillRect(0,0,1024,1024*.3),a.fillStyle="#606060",a.fillRect(0,1024*.3,1024,1024*.05),a.fillStyle="#707070",a.fillRect(0,1024*.35,1024,1024*.57),a.fillStyle="#c0c0c0",a.fillRect(0,1024*.8,1024,1024*.2),a.fillStyle="#303030",a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#e0e0e0",c.fillRect(0,0,1024,1024),c.fillStyle="#606060",c.fillRect(0,1024*.8,1024,1024*.2),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.3),h.lineTo(1024,1024*.3),h.stroke(),h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.strokeStyle="#808080",h.lineWidth=3;for(let g=6;g<1024;g+=12)h.beginPath(),h.moveTo(g,1024*.35),h.lineTo(g,1024*.92),h.stroke();return h.strokeStyle="#707070",h.lineWidth=8,h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),Di(n,1024,1024,.01),Ii(e,i,r,l,u)}function kx(){const[e,n]=Kt(1024,1024),[i,s]=Kt(1024,1024),[r,a]=Kt(1024,1024),[l,c]=Kt(1024,1024),[u,h]=Kt(1024,1024),d=An(11111);n.fillStyle="#3a3d30",n.fillRect(0,0,1024,1024);for(let f=0;f<100;f++){const g=d()*1024,y=d()*1024,m=10+d()*50;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(g,y),n.lineTo(g,y+m),n.stroke()}n.fillStyle="#8a8a8e";for(let f=50;f<1024;f+=200)n.fillRect(0,f,1024,15),n.fillStyle="#6a6a6e",n.fillRect(0,f+15,1024,2),n.fillStyle="#8a8a8e";n.fillStyle="#2a2d22",n.fillRect(0,1024*.85,1024,1024*.15),n.strokeStyle="#4a4d42",n.lineWidth=1;for(let f=0;f<1024;f+=32)n.beginPath(),n.moveTo(f,1024*.85),n.lineTo(f,1024),n.stroke();for(let f=1024*.85;f<1024;f+=32)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();n.fillStyle="#222";for(let f=0;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);n.fillStyle="#ffcc00";for(let f=20;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=2;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024*.85),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=6;for(let f=50;f<1024;f+=200)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();s.strokeStyle="#606060",s.lineWidth=3;for(let f=0;f<1024;f+=32)s.beginPath(),s.moveTo(f,1024*.85),s.lineTo(f,1024),s.stroke();for(let f=1024*.85;f<1024;f+=32)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#707070",a.fillRect(0,0,1024,1024*.85),a.fillStyle="#909090";for(let f=50;f<1024;f+=200)a.fillRect(0,f,1024,17);a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),c.fillStyle="#303030",c.fillRect(0,0,1024,1024),c.fillStyle="#e0e0e0";for(let f=50;f<1024;f+=200)c.fillRect(0,f,1024,17);c.fillStyle="#a0a0a0",c.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#808080",h.lineWidth=8;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024*.85),h.stroke();h.strokeStyle="#909090",h.lineWidth=10;for(let f=50;f<1024;f+=200)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Di(n,1024,1024,.02),Ii(e,i,r,l,u)}function Ox(){const[e,n]=Kt(1024,1024),[i,s]=Kt(1024,1024),[r,a]=Kt(1024,1024),[l,c]=Kt(1024,1024),[u,h]=Kt(1024,1024),d=An(22222);n.fillStyle="#4a4a4e",n.fillRect(0,0,1024,1024);for(let f=0;f<150;f++){const g=d()*1024,y=d()*1024,m=5+d()*30;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(g,y),n.lineTo(g,y+m),n.stroke()}n.fillStyle="#7a7a7e",n.fillRect(0,1024*.35,1024,1024*.3),n.fillStyle="#3a3a3e";for(let f=24;f<1024;f+=48)n.beginPath(),n.arc(f,1024*.5,6,0,Math.PI*2),n.fill(),n.strokeStyle="#6a6a6e",n.lineWidth=1,n.stroke();n.fillStyle="#cc3300";for(let f=0;f<8;f++){const g=f/8*Math.PI*2,y=1024*.5+Math.cos(g)*1024*.35,m=1024*.5+Math.sin(g)*1024*.35;n.beginPath(),n.arc(y,m,8,0,Math.PI*2),n.fill()}n.fillStyle="#5a5a5e",n.fillRect(0,0,1024,1024*.08),n.fillRect(0,1024*.92,1024,1024*.08),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#b0b0b0",s.lineWidth=10,s.beginPath(),s.moveTo(0,1024*.35),s.lineTo(1024,1024*.35),s.stroke(),s.beginPath(),s.moveTo(0,1024*.65),s.lineTo(1024,1024*.65),s.stroke(),s.fillStyle="#c0c0c0";for(let f=24;f<1024;f+=48)s.beginPath(),s.arc(f,1024*.5,6,0,Math.PI*2),s.fill();return s.strokeStyle="#a0a0a0",s.lineWidth=8,s.beginPath(),s.moveTo(0,1024*.08),s.lineTo(1024,1024*.08),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#404040",a.fillRect(0,1024*.35,1024,1024*.3),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.08),a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#d0d0d0",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#707070",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.65),h.lineTo(1024,1024*.65),h.stroke(),h.strokeStyle="#808080",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.08),h.lineTo(1024,1024*.08),h.stroke(),h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),Di(n,1024,1024,.015),Ii(e,i,r,l,u)}function Hx(){const[e,n]=Kt(1024,1024),[i,s]=Kt(1024,1024),[r,a]=Kt(1024,1024),[l,c]=Kt(1024,1024),[u,h]=Kt(1024,1024),d=An(33333);n.fillStyle="#1a1a1c",n.fillRect(0,0,1024,1024);for(let f=0;f<3e3;f++){const g=d()*1024,y=d()*1024,m=1+d()*4,p=20+d()*50,x=d()*20-10;n.fillStyle=`rgb(${p+x},${p},${p-x})`,n.beginPath(),n.arc(g,y,m,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(40,20,10,0.3)",n.lineWidth=1+d()*2;for(let f=0;f<80;f++){const g=d()*1024,y=d()*1024*.3,m=50+d()*200;n.beginPath(),n.moveTo(g,y),n.lineTo(g+(d()-.5)*40,y+m),n.stroke()}n.strokeStyle="#0a0a0c",n.lineWidth=2;for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(f,0),n.lineTo(f,1024),n.stroke();for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024);for(let f=0;f<500;f++){const g=d()*1024,y=d()*1024,m=2+d()*5;s.fillStyle=`rgb(${128+d()*30},${128+d()*30},${128+d()*30})`,s.beginPath(),s.arc(g,y,m,0,Math.PI*2),s.fill()}s.strokeStyle="#404040",s.lineWidth=6;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024),s.stroke();for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#f0f0f0",a.fillRect(0,0,1024,1024),a.fillStyle="#ffffff",a.strokeStyle="#ffffff",a.lineWidth=8;for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f,1024),a.stroke();for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(0,f),a.lineTo(1024,f),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#303030",h.lineWidth=10;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024),h.stroke();for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Di(n,1024,1024,.03),Ii(e,i,r,l,u)}function bd(){const[e,n]=Kt(1024,1024),[i,s]=Kt(1024,1024),[r,a]=Kt(1024,1024),[l,c]=Kt(1024,1024),[u,h]=Kt(1024,1024),d=An(44444),f=n.createLinearGradient(0,0,0,1024);f&&(f.addColorStop(0,"#b8862e"),f.addColorStop(.08,"#dba44a"),f.addColorStop(.15,"#e8b858"),f.addColorStop(.22,"#cf9a3e"),f.addColorStop(.3,"#b0802e"),f.addColorStop(.38,"#d8a84a"),f.addColorStop(.45,"#eac05e"),f.addColorStop(.52,"#c89838"),f.addColorStop(.6,"#b0802e"),f.addColorStop(.68,"#d8a84a"),f.addColorStop(.75,"#e8b858"),f.addColorStop(.85,"#c89838"),f.addColorStop(1,"#b8862e"),n.fillStyle=f,n.fillRect(0,0,1024,1024));for(let g=0;g<12;g++){const y=50+d()*924,m=50+d()*924,p=80+d()*300,x=80+d()*300;n.strokeStyle=`rgba(80,55,15,${.15+d()*.15})`,n.lineWidth=1+d()*2,n.strokeRect(y,m,p,x);const _=(d()-.5)*.06;n.fillStyle=`rgba(200,160,60,${_>0?_:0})`,n.fillRect(y+2,m+2,p-4,x-4)}n.strokeStyle="rgba(70,50,15,0.12)",n.lineWidth=3+d()*4;for(let g=0;g<60;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,x=40+d()*150;n.beginPath(),n.moveTo(y,m);const _=y+Math.cos(p+.3)*x*.5,b=m+Math.sin(p+.3)*x*.5;n.quadraticCurveTo(_,b,y+Math.cos(p)*x,m+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(60,40,10,0.18)",n.lineWidth=1.5;for(let g=0;g<120;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,x=15+d()*60;n.beginPath(),n.moveTo(y,m),n.lineTo(y+Math.cos(p)*x,m+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(255,230,160,0.15)",n.lineWidth=.5;for(let g=0;g<250;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,x=3+d()*25;n.beginPath(),n.moveTo(y,m),n.lineTo(y+Math.cos(p)*x,m+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(30,20,5,0.1)",n.lineWidth=.5;for(let g=0;g<200;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,x=4+d()*30;n.beginPath(),n.moveTo(y+1,m+1),n.lineTo(y+Math.cos(p)*x+1,m+Math.sin(p)*x+1),n.stroke()}for(let g=0;g<120;g++){const y=d()*1024,m=d()*1024,p=2+d()*18,x=d();x<.33?n.fillStyle=`rgba(80,50,20,${.08+d()*.15})`:x<.66?n.fillStyle=`rgba(30,25,15,${.06+d()*.12})`:n.fillStyle=`rgba(60,80,40,${.04+d()*.08})`,n.beginPath(),n.arc(y,m,p,0,Math.PI*2),n.fill()}for(let g=0;g<50;g++){const y=d()*1024,m=d()*1024,p=1+d()*8,x=240+Math.floor(d()*15);n.fillStyle=`rgba(${x}, ${x-20}, ${x-80}, ${.15+d()*.2})`,n.beginPath(),n.arc(y,m,p,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,240,180,${.03+d()*.05})`,n.beginPath(),n.arc(y,m,p*3,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(160,120,40,0.12)",n.lineWidth=1;for(let g=0;g<1024;g+=15+d()*25){n.beginPath(),n.moveTo(0,g);for(let y=0;y<1024;y+=10)n.lineTo(y+d()*5,g+(d()-.5)*3);n.stroke()}s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#a0a0a0",s.lineWidth=2;for(let g=0;g<120;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,x=20+d()*100;s.beginPath(),s.moveTo(y,m);const _=y+Math.cos(p+.2)*x*.4,b=m+Math.sin(p+.2)*x*.4;s.quadraticCurveTo(_,b,y+Math.cos(p)*x,m+Math.sin(p)*x),s.stroke()}s.strokeStyle="#c0c0c0",s.lineWidth=1;for(let g=0;g<300;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,x=5+d()*40;s.beginPath(),s.moveTo(y,m),s.lineTo(y+Math.cos(p)*x,m+Math.sin(p)*x),s.stroke()}s.fillStyle="#606060";for(let g=0;g<100;g++){const y=d()*1024,m=d()*1024,p=2+d()*16;s.beginPath(),s.arc(y,m,p,0,Math.PI*2),s.fill()}a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#909090";for(let g=0;g<400;g++){const y=d()*1024,m=d()*1024,p=5+d()*50,x=3+d()*20;a.fillRect(y,m,p,x)}a.fillStyle="#c0c0c0";for(let g=0;g<100;g++){const y=d()*1024,m=d()*1024,p=2+d()*16;a.beginPath(),a.arc(y,m,p,0,Math.PI*2),a.fill()}c.fillStyle="#f0f0f0",c.fillRect(0,0,1024,1024),c.fillStyle="#303030";for(let g=0;g<100;g++){const y=d()*1024,m=d()*1024,p=2+d()*16;c.beginPath(),c.arc(y,m,p,0,Math.PI*2),c.fill()}c.strokeStyle="#808080",c.lineWidth=2;for(let g=0;g<12;g++){const y=50+d()*924,m=50+d()*924,p=80+d()*300,x=80+d()*300;c.strokeRect(y,m,p,x)}h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=3;for(let g=0;g<400;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,x=5+d()*50;h.beginPath(),h.moveTo(y,m),h.lineTo(y+Math.cos(p)*x,m+Math.sin(p)*x),h.stroke()}h.strokeStyle="#808080",h.lineWidth=2;for(let g=0;g<200;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,x=10+d()*80;h.beginPath(),h.moveTo(y,m);const _=y+Math.cos(p+.3)*x*.5,b=m+Math.sin(p+.3)*x*.5;h.quadraticCurveTo(_,b,y+Math.cos(p)*x,m+Math.sin(p)*x),h.stroke()}h.fillStyle="#888888";for(let g=0;g<100;g++){const y=d()*1024,m=d()*1024,p=3+d()*18;h.beginPath(),h.arc(y,m,p,0,Math.PI*2),h.fill()}return Di(n,1024,1024,.02),Ii(e,i,r,l,u)}function Sd(){const[e,n]=Kt(1024,1024),[i,s]=Kt(1024,1024),[r,a]=Kt(1024,1024),[l,c]=Kt(1024,1024),[u,h]=Kt(1024,1024);n.fillStyle="#f5f5f0",n.fillRect(0,0,1024,1024),n.strokeStyle="rgba(200,200,190,0.15)",n.lineWidth=1;for(let d=0;d<1024;d+=4)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();n.strokeStyle="rgba(200,200,190,0.1)";for(let d=0;d<1024;d+=4)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.strokeStyle="rgba(160,160,150,0.3)",n.lineWidth=2;for(let d=0;d<1024;d+=32)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();for(let d=0;d<1024;d+=32)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.strokeStyle="rgba(120,120,110,0.4)",n.lineWidth=1,n.setLineDash([8,16]);for(let d=16;d<1024;d+=64)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();for(let d=16;d<1024;d+=64)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.setLineDash([]),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let d=0;d<1024;d+=8)s.beginPath(),s.moveTo(d,0),s.lineTo(d,1024),s.stroke();for(let d=0;d<1024;d+=8)s.beginPath(),s.moveTo(0,d),s.lineTo(1024,d),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=4;for(let d=0;d<1024;d+=32)s.beginPath(),s.moveTo(d,0),s.lineTo(d,1024),s.stroke();for(let d=0;d<1024;d+=32)s.beginPath(),s.moveTo(0,d),s.lineTo(1024,d),s.stroke();a.fillStyle="#c0c0c0",a.fillRect(0,0,1024,1024),a.fillStyle="#e0e0e0",a.strokeStyle="#e0e0e0",a.lineWidth=6;for(let d=0;d<1024;d+=32)a.beginPath(),a.moveTo(d,0),a.lineTo(d,1024),a.stroke();for(let d=0;d<1024;d+=32)a.beginPath(),a.moveTo(0,d),a.lineTo(1024,d),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#a0a0a0",h.lineWidth=6;for(let d=0;d<1024;d+=32)h.beginPath(),h.moveTo(d,0),h.lineTo(d,1024),h.stroke();for(let d=0;d<1024;d+=32)h.beginPath(),h.moveTo(0,d),h.lineTo(1024,d),h.stroke();return Di(n,1024,1024,.02),Ii(e,i,r,l,u)}function Td(o,t,e,n,i,s){const r=document.createElement("canvas");r.width=o,r.height=t;const a=r.getContext("2d"),l=An(s),c=a.createImageData(o,t);for(let h=0;h<t;h++){const d=h/t;let f=0,g=0,y=0,m=0;for(const p of e){const x=Math.abs(d-p.y)/p.width;if(x<1){const _=1-x*x,b=Bx(p.color);f+=b[0]*_,g+=b[1]*_,y+=b[2]*_,m+=_}}m>0&&(f/=m,g/=m,y/=m);for(let p=0;p<o;p++){const x=p/o,_=Math.sin(x*n+d*n*.5+s)*i+Math.sin(x*n*2.3+d*n*.7+s*2)*i*.5;let b=f,C=g,w=y;const S=_*30;b+=S,C+=S*.7,w+=S*.3;const O=(l()-.5)*8,M=(h*o+p)*4;c.data[M]=ri(b+O),c.data[M+1]=ri(C+O),c.data[M+2]=ri(w+O),c.data[M+3]=255}}a.putImageData(c,0,0);const u=new nn(r);return u.wrapS=u.wrapT=He,u.colorSpace=ie,u}function Bx(o){const t=parseInt(o.slice(1,3),16),e=parseInt(o.slice(3,5),16),n=parseInt(o.slice(5,7),16);return[t,e,n]}function ri(o){return Math.min(255,Math.max(0,Math.round(o)))}function zx(){const n=Td(1024,512,[{y:0,width:.08,color:"#5a4a3a",turbulence:.3},{y:.05,width:.06,color:"#6a4c36",turbulence:.3},{y:.1,width:.04,color:"#8a6a48",turbulence:.4},{y:.18,width:.06,color:"#c4a46a",turbulence:.5},{y:.24,width:.04,color:"#d4b880",turbulence:.5},{y:.3,width:.05,color:"#8a6a3a",turbulence:.6},{y:.38,width:.04,color:"#e4d0a0",turbulence:.7},{y:.42,width:.03,color:"#f0e0b8",turbulence:.8},{y:.46,width:.03,color:"#e8d4a8",turbulence:.7},{y:.5,width:.03,color:"#dcc89c",turbulence:.7},{y:.54,width:.03,color:"#e4d0a0",turbulence:.8},{y:.58,width:.03,color:"#f0e0b8",turbulence:.7},{y:.62,width:.04,color:"#e4d0a0",turbulence:.6},{y:.7,width:.05,color:"#8a6a3a",turbulence:.6},{y:.76,width:.04,color:"#c4a46a",turbulence:.5},{y:.82,width:.06,color:"#d4b880",turbulence:.5},{y:.9,width:.04,color:"#7a5a3a",turbulence:.4},{y:.94,width:.06,color:"#6a4c36",turbulence:.3},{y:1,width:.08,color:"#5a4a3a",turbulence:.3}],40,.015,777),s=n.image.getContext("2d"),r=.33*1024,a=.56*512,l=40+An(888)()*10,c=s.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"#c04830"),c.addColorStop(.3,"#b04028"),c.addColorStop(.6,"#a05030"),c.addColorStop(.8,"#8a4830"),c.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=c,s.beginPath(),s.arc(r,a,l,0,Math.PI*2),s.fill();const u=.55*1024,h=.48*512,d=15+An(889)()*5,f=s.createRadialGradient(u,h,0,u,h,d);return f.addColorStop(0,"#d06040"),f.addColorStop(.5,"#b05038"),f.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=f,s.beginPath(),s.arc(u,h,d,0,Math.PI*2),s.fill(),n.needsUpdate=!0,n}function Gx(){return Td(1024,512,[{y:0,width:.08,color:"#a09070",turbulence:.2},{y:.06,width:.06,color:"#b8a888",turbulence:.2},{y:.12,width:.05,color:"#a89878",turbulence:.3},{y:.18,width:.06,color:"#c8b898",turbulence:.3},{y:.25,width:.05,color:"#b8a888",turbulence:.4},{y:.32,width:.05,color:"#d4c8a8",turbulence:.4},{y:.38,width:.04,color:"#c0b090",turbulence:.5},{y:.42,width:.03,color:"#e8dcc0",turbulence:.5},{y:.46,width:.03,color:"#d4c8a8",turbulence:.5},{y:.5,width:.03,color:"#f0e4d0",turbulence:.5},{y:.54,width:.03,color:"#d4c8a8",turbulence:.5},{y:.58,width:.04,color:"#e8dcc0",turbulence:.5},{y:.64,width:.05,color:"#c0b090",turbulence:.4},{y:.7,width:.05,color:"#b8a888",turbulence:.4},{y:.76,width:.06,color:"#a89878",turbulence:.3},{y:.85,width:.05,color:"#b8a888",turbulence:.2},{y:.92,width:.08,color:"#a09070",turbulence:.2}],30,.01,333)}function Wx(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=An(222),s=n.createImageData(1024,512);for(let a=0;a<512;a++){const l=a/512,u=.6+(Math.sin(l*12)*.3+Math.sin(l*24)*.15+Math.sin(l*6)*.4)*.1;for(let h=0;h<1024;h++){const d=h/1024,f=Math.sin(d*8+l*4)*.03,g=(i()-.5)*.04,y=(.48+u*.12+f+g)*255,m=(.7+u*.18+f*.5+g)*255,p=(.75+u*.2+g)*255,x=(a*1024+h)*4;s.data[x]=ri(y),s.data[x+1]=ri(m),s.data[x+2]=ri(p),s.data[x+3]=255}}n.putImageData(s,0,0);const r=new nn(e);return r.wrapS=r.wrapT=He,r.colorSpace=ie,r}function Vx(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=An(444),s=n.createImageData(1024,512);for(let y=0;y<512;y++){const m=y/512,x=.5+(Math.sin(m*14)*.5+Math.sin(m*28)*.2+Math.sin(m*7)*.3)*.08;for(let _=0;_<1024;_++){const b=_/1024,C=Math.sin(b*10+m*5)*.04,w=(i()-.5)*.03,S=(.18+x*.08+C+w)*255,O=(.25+x*.12+C*.7+w)*255,M=(.7+x*.2+w)*255,v=(y*1024+_)*4;s.data[v]=ri(S),s.data[v+1]=ri(O),s.data[v+2]=ri(M),s.data[v+3]=255}}n.putImageData(s,0,0);const r=.3*1024,a=.65*512,l=30,c=n.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"#0a0a2a"),c.addColorStop(.3,"#101040"),c.addColorStop(.6,"#1a2050"),c.addColorStop(1,"rgba(30,40,80,0)"),n.fillStyle=c,n.beginPath(),n.arc(r,a,l,0,Math.PI*2),n.fill();const u=.3*1024+35,h=.65*512-15,d=15,f=n.createRadialGradient(u,h,0,u,h,d);f.addColorStop(0,"rgba(200,220,255,0.4)"),f.addColorStop(.5,"rgba(180,200,240,0.2)"),f.addColorStop(1,"rgba(180,200,240,0)"),n.fillStyle=f,n.beginPath(),n.arc(u,h,d,0,Math.PI*2),n.fill(),n.putImageData(s,0,0);const g=new nn(e);return g.wrapS=g.wrapT=He,g.colorSpace=ie,g}const _o={S:{radius:.6*Ce,height:1.4*Ce},M:{radius:.85*Ce,height:2*Ce},L:{radius:1.15*Ce,height:2.8*Ce},XL:{radius:1.5*Ce,height:3.6*Ce}},ni=Math.PI,Ei=128;let Ma=0;function ba(){return Ma=Ma*1664525+1013904223>>>0,(Ma>>>0)/4294967295}function uo(o,t){const e=o.attributes.position;if(!e)return;const n=e.array;for(let i=0;i<n.length;i+=3){const s=(ba()-.5)*2,r=(ba()-.5)*2,a=(ba()-.5)*2;n[i]=n[i]+s*t,n[i+1]=n[i+1]+r*t,n[i+2]=n[i+2]+a*t}e.needsUpdate=!0,o.computeVertexNormals()}const Ed=new Zy,Ci=new Map;async function Xx(o,t=1){const e=$s(o);if(Ci.has(o))return Ci.get(o).clone();const n=[e];e!==o&&n.push(o),o.startsWith("/")&&n.push(o.slice(1));let i;for(const s of n)try{const a=(await Ed.loadAsync(s)).scene;if(!a)continue;return a.traverse(l=>{if(l instanceof lt)if(l.castShadow=!0,l.receiveShadow=!0,l.material){const c=Array.isArray(l.material)?l.material:[l.material];for(const u of c)if(u instanceof se){if(u.roughness=Math.max(.1,u.roughness??.5),u.metalness=Math.max(0,u.metalness??0),u.color){const p={h:0,s:0,l:0};u.color.getHSL(p),p.s<.3&&(p.s=Math.min(1,p.s*1.5+.05),p.l=Math.min(1,Math.max(.1,p.l*1.1)),u.color.setHSL(p.h,p.s,p.l))}const h=l.name.toLowerCase(),d=h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor")||h.includes("bell"),f=h.includes("metal")||h.includes("hull")||h.includes("body")||h.includes("frame")||h.includes("strut"),g=h.includes("glass")||h.includes("window")||h.includes("canopy")||h.includes("cockpit"),y=h.includes("heat")||h.includes("shield")||h.includes("tile"),m=h.includes("solar")||h.includes("panel")||h.includes("array");d?(u.roughness=Math.max(.05,u.roughness),u.metalness=Math.min(1,u.metalness+.3),u.emissive=new Rt(8930338),u.emissiveIntensity=.15):f?(u.roughness=Math.max(.1,u.roughness*.7),u.metalness=Math.min(1,u.metalness+.4)):g?(u.roughness=0,u.metalness=0,u.transparent=!0,u.opacity=.6,u.emissive=new Rt(4491519),u.emissiveIntensity=.08):y?(u.roughness=Math.min(1,u.roughness+.2),u.metalness=0):m&&(u.roughness=.8,u.metalness=0,u.emissive=new Rt(4491519),u.emissiveIntensity=.03),!d&&!g&&!m&&(h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor"))&&(u.emissive=new Rt(4465152),u.emissiveIntensity=.05),u.needsUpdate=!0}else if(u instanceof Re||u instanceof xy){const h=new se({color:u.color??16777215,map:u.map,normalMap:u.normalMap,roughnessMap:u.roughnessMap,metalnessMap:u.metalnessMap,aoMap:u.aoMap,roughness:.5,metalness:.1});l.material=h}}else l.material=new se({color:13421772,roughness:.5,metalness:.1})}),a.scale.setScalar(t),Ci.set(o,a),a.clone()}catch(r){i=r}return console.error("Failed to load GLTF after all attempts:",o,i),Xt.show(`Failed to load model: ${o.split("/").pop()}`,3e3),null}const er=new Map;function Fn(o,t){if(!er.has(o))try{const e=t(),n=[e.color,e.normal,e.roughness,e.metalness,e.ao,e.emissive].filter(Boolean);for(const i of n)i.minFilter=Qe,i.magFilter=Qe,i.generateMipmaps=!1,i.needsUpdate=!0;er.set(o,e)}catch{console.warn("Texture generation failed for:",o,"using solid fallback");const e={color:qx(8421504),normal:void 0,roughness:void 0,metalness:void 0,ao:void 0,emissive:void 0};er.set(o,e)}return er.get(o)}function qx(o){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.fillStyle="#"+o.toString(16).padStart(6,"0"),e.fillRect(0,0,64,64);const n=new nn(t);return n.colorSpace=ie,n}function hn(o,t={}){const e={map:o.color,normalMap:o.normal,roughnessMap:o.roughness,metalnessMap:o.metalness,roughness:.5,metalness:.1,color:13426158,...t};return o.ao&&(e.aoMap=o.ao,e.aoMapIntensity=1),o.emissive&&(e.emissiveMap=o.emissive),new se(e)}function sn(o,t=1){const e=o.attributes.position;if(!e)return;let n=o.attributes.uv;n||(n=new Le(new Float32Array(e.count*2),2));let i=1/0,s=-1/0;for(let a=0;a<e.count;a++){const l=e.getY(a);l<i&&(i=l),l>s&&(s=l)}const r=s-i||1;for(let a=0;a<e.count;a++){const l=e.getX(a),c=e.getY(a),u=e.getZ(a),d=(Math.atan2(l,u)+Math.PI)/(2*Math.PI),f=(c-i)/r*t;n.setXY(a,d,f)}o.setAttribute("uv",n),n.needsUpdate=!0,o.attributes.uv2||o.setAttribute("uv2",n.clone())}function wd(o){const t=new ln;t.name=o.id;const e=_o[o.size];switch(o.kind){case"capsule":Yx(t,e,o.id);break;case"tank":$x(t,e,o.size);break;case"engine":Kx(t,e,o.size);break;case"parachute":jx(t,e);break;case"legs":Zx(t,e);break;case"decoupler":Jx(t,e);break;case"heatshield":Qx(t,e);break;case"fairing":t_(t,e);break;case"rcs":e_(t,e);break;case"solar":n_(t,e);break;case"gltf":{if(o.gltfUrl&&Ci.has(o.gltfUrl)){const n=o.gltfScale??1,i=Ci.get(o.gltfUrl).clone();i.scale.setScalar(n);const s=new vn().setFromObject(i),r=new L;s.getCenter(r),i.position.sub(r);const a=[],l=[];i.traverse(c=>{if(c instanceof lt){const u=c.name.toLowerCase();if(u.includes("engine")||u.includes("nozzle")||u.includes("thruster")||u.includes("motor")||u.includes("combustion")||c.position.y<-.1){const f=new vn().setFromObject(c),g=new L;f.getCenter(g);const y=g.clone().sub(i.position);a.push(y),l.push(c)}c.castShadow=!0,c.receiveShadow=!0}}),i.userData.nozzlePoints=a,i.userData.engineMeshes=l,t.add(i)}else{const n=_o[o.size],i=new se({color:8956620,roughness:.4,metalness:.3}),s=new he(n.radius,n.radius*.8,n.height*.8,16);sn(s);const r=new lt(s,i);r.position.y=-n.height*.1,t.add(r);const a=new Ir(n.radius*.6,n.height*.2,16),l=new se({color:13386820,roughness:.6,metalness:.1}),c=new lt(a,l);c.position.y=n.height*.4,t.add(c);const u=new se({color:6710920,roughness:.8,metalness:0});for(let h=0;h<4;h++){const d=h/4*Math.PI*2,f=new Wn(n.radius*.02,n.height*.15,n.radius*.3),g=new lt(f,u);g.position.set(Math.sin(d)*n.radius*1.05,-n.height*.35,Math.cos(d)*n.radius*1.05),g.rotation.y=-d,t.add(g)}}break}}return t}function Yx(o,t,e){const n=t.radius,i=t.height,s=64,r=Fn("capsule_mk1",Nx),a=hn(r),l=new se({color:1710626,roughness:.55,metalness:.45}),c=new se({color:13146168,roughness:.3,metalness:.7}),u=new se({color:6724044,roughness:.15,metalness:.4,emissive:1122867,emissiveIntensity:.3}),h=new lt(new ye(n*.88,s,32,0,Math.PI*2,0,Math.PI*.48),a);h.position.y=i*.23,o.add(h);const d=new lt(new he(n*.88,n*.97,i*.45,s),a);d.position.y=-i*.01,o.add(d);const f=new lt(new he(n*.97,n*.9,i*.1,s),l);f.position.y=-i*.3,o.add(f);const g=new lt(new he(n*.9,n*.68,i*.15,s),a);g.position.y=-i*.425,o.add(g);const y=new lt(new he(n*.22,n*.22,i*.06,16),l);y.position.y=i*.45,o.add(y);const m=new lt(new es(n*.93,n*.03,8,s),c);m.position.y=-i*.19,m.rotation.x=Math.PI/2,o.add(m);for(const[p,x]of[[0,i*.1],[0,-i*.08]]){const _=new lt(new ye(n*.12,16,8),u);_.position.set(p,x,n*.66),o.add(_)}}function $x(o,t,e){const n=t.radius,i=t.height,s=64,r=Fn(`tank_${e}`,()=>Md(e)),a=hn(r),l=new se({color:13395490,roughness:.5,metalness:.05}),c=new se({color:2763312,roughness:.5,metalness:.35}),u=new se({color:13146168,roughness:.3,metalness:.7}),h=new lt(new he(n*.97,n*1.01,i,s),a);o.add(h);const d=new lt(new he(n*1.02,n*1.02,i*.28,s),l);d.position.y=-i*.02,o.add(d);for(const f of[i*.44,i*.2,-i*.24,-i*.44]){const g=new lt(new es(n*1.03,n*.025,8,s),c);g.position.y=f,g.rotation.x=Math.PI/2,o.add(g)}for(const f of[i*.32,-i*.35]){const g=new lt(new es(n*1.01,n*.012,6,s),u);g.position.y=f,g.rotation.x=Math.PI/2,o.add(g)}}function Kx(o,t,e){const n=t.radius,i=t.height,s=48,r=Fn("engine_ant",Fx),a=hn(r),l=new se({color:657940,roughness:.9,metalness:.1}),c=new se({color:2631736,roughness:.25,metalness:.75}),u=new se({color:13146168,roughness:.3,metalness:.7}),h=new Re({color:16733440,transparent:!0,opacity:.5,depthWrite:!1}),d=new lt(new he(n*.97,n*.5,i*.3,s),a);d.position.y=i*.35,o.add(d);const f=new lt(new he(n*.5,n*.58,i*.12,s),a);f.position.y=i*.15,o.add(f);for(const _ of[-1,1]){const b=new lt(new he(n*.06,n*.06,i*.1,8),u);b.position.set(_*n*.5,i*.13,0),b.rotation.z=Math.PI/2,o.add(b)}const g=new lt(new es(n*.52,n*.045,8,s),u);g.position.y=i*.09,g.rotation.x=Math.PI/2,o.add(g);const y=new lt(new he(n*.3,n*.88,i*.52,s),c);y.position.y=-i*.12,o.add(y);const m=new lt(new he(n*.18,n*.66,i*.44,s),l);m.position.y=-i*.1,o.add(m);const p=new lt(new es(n*.86,n*.035,6,s),u);p.position.y=-i*.12-i*.26,p.rotation.x=Math.PI/2,o.add(p);const x=new lt(new Pi(n*.12,n*.28,s),h);x.position.y=-i*.12-i*.18,x.rotation.x=-Math.PI/2,o.add(x)}function jx(o,t){const e=t.radius,n=t.height,i=Fn("fabric",Sd),s=Fn("gold",bd),r=hn(s),a=hn(i,{color:8952234,roughness:.5,metalness:.1}),l=new he(e*.35,e*.35,n*.18,12);sn(l);const c=new lt(l,a);c.position.y=n*.55,o.add(c);const u=hn(i,{color:6978186,roughness:.4,metalness:.2}),h=new he(e*.37,e*.37,n*.03,12);sn(h);const d=new lt(h,u);d.position.y=n*.55+n*.09,o.add(d);const f=new he(e*.37,e*.37,n*.02,12);sn(f);const g=new lt(f,r);g.position.y=n*.55-n*.09,o.add(g)}function el(o){const t=new ln,e=o.radius,n=o.height,i=24,s=Fn("fabric",Sd),r=hn(s,{side:Oe,transparent:!0,opacity:.95}),a=new ye(e*1.8,i,i,0,ni*2,0,ni*.5);sn(a,.5);const l=new lt(a,r);l.position.y=n*.3,l.rotation.x=ni,t.add(l);const c=hn(s,{color:14500932,side:Oe,transparent:!0,opacity:.9});for(let h=0;h<6;h++){const d=h/6*ni*2,f=new Wn(e*.03,n*.7,e*.015),g=new lt(f,c);g.position.set(Math.cos(d)*e*.9,n*.4,Math.sin(d)*e*.9),g.rotation.x=ni,g.lookAt(0,n*.8,0),t.add(g)}const u=hn(s,{color:6978186,roughness:.5,metalness:.4});for(let h=0;h<4;h++){const d=h/4*ni*2+ni/4;for(let f=0;f<3;f++){const g=new he(.006,.006,n*.15,4);sn(g);const y=new lt(g,u),m=d+(f-1)*.3;y.position.set(Math.cos(m)*e*1.5,n*.15-n*.06*f,Math.sin(m)*e*1.5),t.add(y)}}return t}function Zx(o,t){const e=t.radius,n=t.height,i=Fn("legs",kx),s=hn(i),r=hn(i,{color:2764066,roughness:.8,metalness:.2});for(let a=0;a<4;a++){const l=a/4*ni*2+ni/4,c=new he(.01,.007,n*.35,6);sn(c);const u=new lt(c,s),h=Math.cos(l)*e*.65,d=Math.sin(l)*e*.65;u.position.set(h,-n/2-n*.175,d),u.rotation.z=Math.cos(l)*.3,u.rotation.x=Math.sin(l)*.3,o.add(u);const f=new he(.02,.025,.008,6);sn(f);const g=new lt(f,r);g.position.set(Math.cos(l)*e*.95,-n/2-n*.35,Math.sin(l)*e*.95),o.add(g)}}function Jx(o,t){const e=t.radius,n=t.height,i=Fn("decoupler",Ox),s=hn(i,{color:2303278,roughness:.6,metalness:.55}),r=Fn("gold",bd),a=hn(r),l=new se({color:14211282,roughness:.5,metalness:.15}),c=new he(e*1.03,e*.95,n*.96,Ei);sn(c),uo(c,Ce*.008);const u=new lt(c,s);o.add(u);const h=new he(e*1.09,e*1.09,n*.09,Ei);sn(h),uo(h,Ce*.005);const d=new lt(h,a);d.position.y=n*.42,o.add(d);const f=new he(e*1.07,e*1.07,n*.1,Ei);sn(f);const g=new lt(f,l);g.position.y=-n*.38,o.add(g);const y=new he(e*.95,e*.95,n*.05,Ei);sn(y),uo(y,Ce*.008);const m=new lt(y,s);m.position.y=-n*.455,o.add(m)}function Qx(o,t){const e=t.radius,n=t.height,i=Fn("heatshield",Hx),s=hn(i),r=new he(e*1.2,e*.8,n*.2,Ei,1,!0);sn(r,.5),uo(r,Ce*.012);const a=new lt(r,s);a.position.y=-n*.1,o.add(a);const l=new he(e*.8,e*.8,n*.08,Ei);sn(l),uo(l,Ce*.01);const c=new lt(l,s);c.position.y=-n*.2,o.add(c)}function t_(o,t){const e=t.radius,n=t.height,i=Fn("tank",Md),s=hn(i),r=new Ir(e,n*.9,Ei);sn(r);const a=new lt(r,s);a.position.y=n*.45,o.add(a);const l=new he(e,e,n*.08,Ei);sn(l);const c=new lt(l,s);c.position.y=-n*.04,o.add(c)}function e_(o,t){const e=t.radius*.35,n=t.height*.25,i=new se({color:10066329,roughness:.5,metalness:.4,emissive:0,emissiveIntensity:0}),s=new Wn(e*2,n,e*2),r=new lt(s,i);o.add(r);for(let a=0;a<4;a++){const l=a/4*Math.PI*2,c=new he(e*.2,e*.3,n*.8,12),u=new lt(c,i);u.position.set(Math.cos(l)*e,0,Math.sin(l)*e),u.rotation.z=Math.PI/2,u.rotation.y=-l,o.add(u)}}function n_(o,t){const e=t.radius,n=t.height,i=new se({color:1127338,roughness:.3,metalness:.6,emissive:4403,emissiveIntensity:.2}),s=new se({color:8947848,roughness:.5,metalness:.5,emissive:0,emissiveIntensity:0}),r=new he(e*.15,e*.15,n*.15,16),a=new lt(r,s);o.add(a);for(const l of[-1,1]){const c=new Wn(e*1.2,n*.04,e*.6),u=new lt(c,i);u.position.set(l*e*.7,0,0),o.add(u);const h=new Wn(e*.4,n*.04,n*.06),d=new lt(h,s);d.position.set(l*e*.3,0,0),o.add(d)}}const Ad=Object.freeze(Object.defineProperty({__proto__:null,SIZE_DIMS:_o,buildDeployedParachute:el,buildPartMesh:wd,gltfCache:Ci,gltfLoader:Ed,loadGLTF:Xx},Symbol.toStringTag,{value:"Module"}));class fo{roots=[];uidCounter=0;addRoot(t){this.assignUid(t),this.roots.push(t)}assignUid(t){t.uid=`${t.part.id}#${this.uidCounter++}`,t.children.forEach(e=>this.assignUid(e))}totalFuelCapacity(){let t=0;const e=n=>{n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}totalMass(){let t=0;const e=n=>{t+=n.part.mass,n.children.forEach(e)};return this.roots.forEach(e),t}totalMassWithFuel(){let t=0;const e=n=>{t+=n.part.mass,n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}centerOfMass(){let t=0,e=0,n=0,i=0;const s=r=>{const a=r.part.mass;t+=a,e+=r.position[0]*a,n+=r.position[1]*a,i+=r.position[2]*a,r.children.forEach(s)};return this.roots.forEach(s),t===0?[0,0,0]:[e/t,n/t,i/t]}toMesh(){const t=new ln,e=(r,a)=>{const l=wd(r.part);l.name=r.uid??r.part.id,l.position.set(r.position[0],r.position[1],r.position[2]),l.rotation.y=r.rotation,a.add(l),r.children.forEach(c=>e(c,l))};this.roots.forEach(r=>e(r,t));const n=[...this.roots].sort((r,a)=>a.position[1]-r.position[1]);let i=0;for(let r=0;r<n.length-1;r++){const a=n[r],l=n[r+1],c=_o[a.part.size],u=_o[l.part.size];if(!c||!u||Math.abs(c.radius-u.radius)<.001||a.part.id.includes("decoupler")||l.part.id.includes("decoupler"))continue;const h=a.position[1]-c.height/2,d=Math.min(c.height,u.height)*.22,f=Math.max(c.radius,u.radius)*1.02,g=Math.min(c.radius,u.radius)*.98,y=new he(f,g,d,32),m=new se({color:14211282,roughness:.45,metalness:.3}),p=new lt(y,m);p.position.y=h,t.add(p),i++}i>0&&console.log("Smooth adapters created:",i);const s=this.centerOfMass();for(const r of t.children)r.position.x-=s[0],r.position.y-=s[1],r.position.z-=s[2];return t}}const Ur="ellipse_assembly_",vo="ellipse_assemblies",_l="ellipse_assembly_last";function Rd(o){return{partId:o.part.id,position:o.position,rotation:o.rotation,children:o.children.map(Rd)}}function Cd(o){const t=Cs(o.partId);return t?{part:t,position:o.position,rotation:o.rotation,children:(o.children??[]).map(Cd).filter(e=>e!==null)}:null}function Pd(o){return o.roots.map(Rd)}function Ld(o){const t=new fo;let e=!1;for(const n of o){const i=Cd(n);i&&(t.addRoot(i),e=!0)}return e?t:null}function Id(o,t){localStorage.setItem(Ur+o,JSON.stringify(Pd(t)));const e=JSON.parse(localStorage.getItem(vo)??"[]");e.includes(o)||(e.push(o),localStorage.setItem(vo,JSON.stringify(e)))}function Dd(o){const t=localStorage.getItem(Ur+o);return t?Ld(JSON.parse(t)):null}function i_(){return JSON.parse(localStorage.getItem(vo)??"[]")}function s_(o){localStorage.removeItem(Ur+o);const e=JSON.parse(localStorage.getItem(vo)??"[]").filter(n=>n!==o);localStorage.setItem(vo,JSON.stringify(e))}function o_(o){Id(_l,o)}function r_(){return Dd(_l)}function a_(){return localStorage.getItem(Ur+_l)!==null}const vl="ellipse_flight_save";function l_(o){try{localStorage.setItem(vl,JSON.stringify(o))}catch{}}function Ud(){const o=localStorage.getItem(vl);if(!o)return null;try{const t=JSON.parse(o);return!Array.isArray(t.assembly)||!Array.isArray(t.position)||!Array.isArray(t.velocity)?null:t}catch{return null}}function c_(){return Ud()!==null}function yh(){localStorage.removeItem(vl)}const Sa={S:1.4,M:2,L:2.8,XL:3.6};class h_{constructor(t,e){this.ol=t,this.ob=e,this.scene.background=new Rt(527382),this.scene.add(new yd(4478310,.5));const n=new Dr(16777215,2.5);n.position.set(2,5,4),this.scene.add(n),this.scene.add(new gd(8952251,3359829,.5)),this.scene.add(this.rg),this.cam(),this._onDown=s=>{const r=s.target;r&&r.closest&&r.closest("button, input, select, #vl, #vi")||s.button===0&&(this.dr=!0,this.pr={x:s.clientX,y:s.clientY})},this._onMove=s=>{this.dr&&(this.az-=(s.clientX-this.pr.x)*.005,this.po=Math.max(.05,Math.min(Math.PI-.05,this.po+(s.clientY-this.pr.y)*.005)),this.pr={x:s.clientX,y:s.clientY},this.cam())},this._onUp=()=>this.dr=!1,this._onWheel=s=>{if(this.root&&!this.root.isConnected)return;const r=s.target;r&&r.closest&&r.closest("#vl, #vi, button, input, select, .guide-overlay")||(this.dt=Math.max(.12,Math.min(40,this.dt*(s.deltaY>0?1.15:.87))),this.cam())},this._onDbl=s=>{s.target===document.body&&this.frame()};const i=s=>Math.hypot(s.touches[0].clientX-s.touches[1].clientX,s.touches[0].clientY-s.touches[1].clientY);this._onTStart=s=>{const r=s.target;r&&r.closest&&r.closest("#vl, #vi, button, input, select, .guide-overlay")||s.touches.length===2&&(this._pinchDist=i(s))},this._onTMove=s=>{if(s.touches.length===2&&this._pinchDist>0){const r=i(s);r>0&&(this.dt=Math.max(.12,Math.min(40,this.dt*(this._pinchDist/r))),this._pinchDist=r,this.cam())}},this._onTEnd=()=>{this._pinchDist=0},this._onResize=()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()},document.addEventListener("mousedown",this._onDown),document.addEventListener("mousemove",this._onMove),document.addEventListener("mouseup",this._onUp),document.addEventListener("wheel",this._onWheel,{passive:!0}),document.addEventListener("dblclick",this._onDbl),document.addEventListener("touchstart",this._onTStart,{passive:!0}),document.addEventListener("touchmove",this._onTMove,{passive:!0}),document.addEventListener("touchend",this._onTEnd,{passive:!0}),window.addEventListener("resize",this._onResize),this.root=document.createElement("div"),this.root.style.cssText="position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;",this.root.innerHTML=`
      <div style="width:260px;background:rgba(8,12,22,0.98);border-right:1px solid rgba(255,255,255,0.15);display:flex;flex-direction:column;pointer-events:auto;">
        <div style="padding:18px 16px;border-bottom:1px solid rgba(255,255,255,0.15);">
          <div style="font:200 15px/1 system-ui,-apple-system,sans-serif;color:#fff;letter-spacing:0.1em;">ASSEMBLY</div>
          <div id="vi" style="margin-top:10px;font:400 9px/1.5 system-ui,-apple-system,sans-serif;color:rgba(255,255,255,0.7);min-height:32px;">select parts</div>
        </div>
        <div id="vl" style="flex:1;overflow-y:auto;padding:8px 0;"></div>
        <div style="padding:12px 16px;border-top:1px solid rgba(255,255,255,0.15);display:flex;flex-direction:column;gap:6px;">
          <button id="vg" style="width:100%;padding:12px;background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.2);font:400 12px system-ui;letter-spacing:0.08em;cursor:pointer;transition:all 0.2s;">LAUNCH</button>
          <div style="display:flex;gap:4px;">
            <button id="vu" style="flex:1;padding:8px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.15);font:400 10px system-ui;cursor:pointer;">UNDO</button>
            <button id="vc" style="flex:1;padding:8px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.15);font:400 10px system-ui;cursor:pointer;">CLEAR</button>
          </div>
          <div style="display:flex;gap:4px;">
            <button id="vs" style="flex:1;padding:8px;background:rgba(255,255,255,0.05);color:#fff;border:1px solid rgba(255,255,255,0.2);font:400 10px system-ui;cursor:pointer;">SAVE</button>
            <button id="vlb" style="flex:1;padding:8px;background:rgba(255,255,255,0.05);color:#fff;border:1px solid rgba(255,255,255,0.2);font:400 10px system-ui;cursor:pointer;">LOAD</button>
          </div>
          <button id="vb" style="width:100%;padding:8px;background:transparent;color:#fff;border:none;font:400 10px system-ui;cursor:pointer;">BACK</button>
        </div>
      </div>
      <div style="flex:1;"></div>
      <div style="position:absolute;right:18px;bottom:18px;display:flex;flex-direction:column;gap:6px;pointer-events:auto;">
        <button id="vz-in" title="Zoom in" style="width:40px;height:40px;border-radius:8px;background:rgba(8,12,22,0.85);color:#fff;border:1px solid rgba(255,255,255,0.25);font:400 18px system-ui;cursor:pointer;">＋</button>
        <button id="vz-out" title="Zoom out" style="width:40px;height:40px;border-radius:8px;background:rgba(8,12,22,0.85);color:#fff;border:1px solid rgba(255,255,255,0.25);font:400 18px system-ui;cursor:pointer;">－</button>
        <button id="vz-fit" title="Fit whole rocket" style="width:40px;height:40px;border-radius:8px;background:rgba(200,152,56,0.25);color:#EACD9E;border:1px solid rgba(200,152,56,0.45);font:600 10px system-ui;cursor:pointer;">FIT</button>
      </div>`,this.info=this.root.querySelector("#vi"),this.build(),this.root.querySelector("#vg").addEventListener("click",()=>{this.assembly.roots.length?(o_(this.assembly),this.ol(this.assembly)):Xt.show("Add parts first!")}),this.root.querySelector("#vu").addEventListener("click",()=>this.undo()),this.root.querySelector("#vc").addEventListener("click",()=>{this.assembly=new fo,this.st=0,this.nm=[],this.rf(),this.up()}),this.root.querySelector("#vs").addEventListener("click",()=>this.showSaveDialog()),this.root.querySelector("#vlb").addEventListener("click",()=>this.showLoadDialog()),this.root.querySelector("#vb").addEventListener("click",()=>this.ob()),this.root.querySelector("#vz-in").addEventListener("click",()=>{this.dt=Math.max(.12,this.dt*.8),this.cam()}),this.root.querySelector("#vz-out").addEventListener("click",()=>{this.dt=Math.min(40,this.dt*1.25),this.cam()}),this.root.querySelector("#vz-fit").addEventListener("click",()=>this.frame())}scene=new ld;camera=new en(50,innerWidth/innerHeight,.01,1e3);assembly=new fo;rg=new ln;root;info;st=0;nm=[];az=0;po=Math.PI/2;dt=1.5;dr=!1;pr={x:0,y:0};tg=new L(0,Ce,0);_onDown;_onMove;_onUp;_onWheel;_onDbl;_onTStart;_onTMove;_onTEnd;_onResize;_pinchDist=0;build(){const t=this.root.querySelector("#vl"),e=document.createElement("div");e.textContent="PRESETS",e.style.cssText="font:400 8px/1 system-ui,-apple-system,sans-serif;color:#fff;letter-spacing:0.15em;padding:10px 16px 4px;opacity:0.7;",t.appendChild(e);const n=document.createElement("button");n.innerHTML='<span style="width:2px;height:12px;background:#EACD9E;border-radius:1px;display:inline-block;vertical-align:middle;margin-right:8px;opacity:0.8;"></span><span style="vertical-align:middle;color:#fff;">Saturn V (2-stage)</span><span style="float:right;color:rgba(255,255,255,0.6);font-size:9px;margin-top:1px;">165000kN</span>',n.style.cssText="display:block;width:100%;padding:7px 16px;background:transparent;color:#fff;border:none;font:400 11px system-ui;cursor:pointer;text-align:left;transition:all 0.15s;",n.addEventListener("mouseenter",()=>{n.style.background="rgba(255,255,255,0.05)"}),n.addEventListener("mouseleave",()=>{n.style.background="transparent"}),n.addEventListener("click",()=>this.buildSaturnVPreset()),t.appendChild(n);const i=new Map,s={capsule:"#a0b0c0",tank:"#6090c0",engine:"#c08060",decoupler:"#c06070",parachute:"#60a070",legs:"#8090a0",heatshield:"#b08060",gltf:"#b080a0",fairing:"#a0c0e0",rcs:"#c0a0d0",solar:"#4080d0"};for(const r of Rs)i.has(r.kind)||i.set(r.kind,{parts:[],color:s[r.kind]||"#888"}),i.get(r.kind).parts.push(r);for(const[r,a]of i){const l=document.createElement("div");l.textContent=r.toUpperCase(),l.style.cssText="font:400 8px/1 system-ui,-apple-system,sans-serif;color:#fff;letter-spacing:0.15em;padding:10px 16px 4px;opacity:0.7;",t.appendChild(l);for(const c of a.parts){const u=document.createElement("button"),h=c.kind==="engine"?`${(c.thrust/1e3).toFixed(0)}kN · Isp ${c.isp}`:c.kind==="tank"?`${(c.fuelCapacity/1e3).toFixed(0)}t`:c.kind==="capsule"?`${(c.mass/1e3).toFixed(1)}t`:c.kind==="rcs"?`${c.thrust}kN`:c.kind==="fairing"?"aero":"";u.innerHTML=`<span style="width:2px;height:12px;background:${a.color};border-radius:1px;display:inline-block;vertical-align:middle;margin-right:8px;opacity:0.8;"></span><span style="vertical-align:middle;color:#fff;">${c.name}</span><span style="float:right;color:rgba(255,255,255,0.6);font-size:9px;margin-top:1px;">${h}</span>`,u.style.cssText="display:block;width:100%;padding:7px 16px;background:transparent;color:#fff;border:none;font:400 11px system-ui;cursor:pointer;text-align:left;transition:all 0.15s;",u.addEventListener("mouseenter",()=>{u.style.background="rgba(255,255,255,0.05)",u.style.color="#fff"}),u.addEventListener("mouseleave",()=>{u.style.background="transparent",u.style.color="#fff"}),u.addEventListener("click",()=>this.add(c)),t.appendChild(u)}}}add(t){const e=Sa[t.size]||.6,n=this.st+e/2;this.assembly.addRoot({part:t,position:[0,n*Ce,0],rotation:0,children:[]}),this.st+=e,this.nm.push(t.name),this.rf(),this.up()}buildSaturnVPreset(){this.assembly=new fo,this.st=0,this.nm=[];const t=Rs.find(s=>s.id==="engine_twinboar"),e=Rs.find(s=>s.id==="tank_l_lfo"),n=Rs.find(s=>s.id==="decoupler_l"),i=Rs.find(s=>s.id==="saturn_v");this.add(t),this.add(e),this.add(e),this.add(n),this.add(i),Xt.show("Saturn V preset: 2-stage, press SPACE in flight to separate booster",4e3)}undo(){if(!this.assembly.roots.length)return;const t=this.assembly.roots.pop();this.st-=Sa[t.part.size]||.6,this.nm.pop(),this.rf(),this.up()}frame(){const t=new vn().setFromObject(this.rg);if(t.isEmpty()){this.tg.set(0,Ce,0),this.dt=1.5,this.cam();return}const e=t.getCenter(new L),n=t.getSize(new L),i=Math.max(n.y,n.x*2.5,.03);this.tg.copy(e),this.dt=Math.max(.16,Math.min(40,i*.92+.04)),this.cam()}up(){if(!this.nm.length){this.info.innerHTML='<span style="color:rgba(255,255,255,0.5);">select parts</span>';return}const t=this.assembly.roots.reduce((n,i)=>n+i.part.mass,0),e=this.assembly.roots.reduce((n,i)=>n+(i.part.fuelCapacity||0),0);this.info.innerHTML=this.nm.map((n,i)=>`<span style="color:#fff;">${n}</span>`).join(' <span style="color:rgba(255,255,255,0.4);">&rarr;</span> ')+`<div style="margin-top:6px;font:400 8px system-ui;color:rgba(255,255,255,0.6);">${this.nm.length}p &middot; ${(t/1e3).toFixed(1)}t${e?" &middot; "+(e/1e3).toFixed(0)+"t fuel":""}</div>`}async rf(){for(;this.rg.children.length;)this.rg.remove(this.rg.children[0]);if(this.assembly.roots.length){if(this.assembly.roots.some(e=>e.part.kind==="gltf"&&e.part.gltfUrl&&!Ci.has(e.part.gltfUrl))){const{loadGLTF:e}=await Ch(async()=>{const{loadGLTF:n}=await Promise.resolve().then(()=>Ad);return{loadGLTF:n}},void 0);for(const n of this.assembly.roots)n.part.kind==="gltf"&&n.part.gltfUrl&&!Ci.has(n.part.gltfUrl)&&await e(n.part.gltfUrl,n.part.gltfScale??1)}this.rg.add(this.assembly.toMesh())}this.frame()}cam(){const t=this.dt*Math.sin(this.po)*Math.cos(this.az),e=this.dt*Math.cos(this.po),n=this.dt*Math.sin(this.po)*Math.sin(this.az);this.camera.position.set(this.tg.x+t,this.tg.y+e,this.tg.z+n),this.camera.lookAt(this.tg)}mount(){document.body.appendChild(this.root)}unmount(){this.root.remove(),document.removeEventListener("mousedown",this._onDown),document.removeEventListener("mousemove",this._onMove),document.removeEventListener("mouseup",this._onUp),document.removeEventListener("wheel",this._onWheel),document.removeEventListener("dblclick",this._onDbl),document.removeEventListener("touchstart",this._onTStart),document.removeEventListener("touchmove",this._onTMove),document.removeEventListener("touchend",this._onTEnd),window.removeEventListener("resize",this._onResize)}showSaveDialog(){if(!this.assembly.roots.length){Xt.show("Nothing to save — build first!");return}const t=this.makeOverlay(),e=document.createElement("div");e.className="guide-card",e.style.cssText="max-width:380px;padding:24px;font-family:system-ui,sans-serif;color:#fff;background:#0c1020;border:1px solid rgba(255,255,255,0.2);border-radius:8px;",e.innerHTML=`
      <div style="color:#fff;font-size:14px;letter-spacing:0.1em;margin-bottom:12px;">SAVE ASSEMBLY</div>
      <input id="save-name" placeholder="rocket name" style="width:100%;padding:10px;background:#06080f;border:1px solid rgba(255,255,255,0.08);border-radius:4px;color:#fff;font:400 13px monospace;box-sizing:border-box;margin-bottom:12px;" />
      <div style="display:flex;gap:8px;">
        <button id="save-ok" class="btn btn--primary" style="flex:1;padding:10px;font-size:12px;">SAVE</button>
        <button id="save-cancel" class="btn btn--ghost" style="flex:1;padding:10px;font-size:12px;">CANCEL</button>
      </div>`,t.appendChild(e);const n=e.querySelector("#save-name");n.focus();const i=()=>t.remove();e.querySelector("#save-cancel").addEventListener("click",i);const s=()=>{const r=n.value.trim()||`Rocket ${new Date().toLocaleDateString()}`;Id(r,this.assembly),Xt.show(`Saved: "${r}"`),i()};e.querySelector("#save-ok").addEventListener("click",s),n.addEventListener("keydown",r=>{r.key==="Enter"&&s(),r.key==="Escape"&&i()})}showLoadDialog(){const t=i_().filter(s=>s!=="ellipse_assembly_last"),e=this.makeOverlay(),n=document.createElement("div");n.className="guide-card",n.style.cssText="max-width:380px;max-height:60vh;padding:24px;font-family:system-ui,sans-serif;color:#fff;background:#0c1020;border:1px solid rgba(255,255,255,0.2);border-radius:8px;display:flex;flex-direction:column;",n.innerHTML=`
      <div style="color:#fff;font-size:14px;letter-spacing:0.1em;margin-bottom:12px;">LOAD ASSEMBLY</div>
      <div id="load-list" style="flex:1;overflow-y:auto;margin-bottom:12px;"></div>
      <button id="load-cancel" class="btn btn--ghost" style="padding:10px;font-size:12px;color:#fff;">CANCEL</button>`,e.appendChild(n);const i=n.querySelector("#load-list");if(t.length===0)i.innerHTML='<div style="color:rgba(255,255,255,0.6);font-size:12px;text-align:center;padding:20px;">No saved rockets yet</div>';else for(const s of t){const r=document.createElement("div");r.style.cssText="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:4px;margin-bottom:4px;",r.innerHTML=`<span style="font-size:12px;color:#fff;">${s}</span>`;const a=document.createElement("div");a.style.cssText="display:flex;gap:4px;";const l=document.createElement("button");l.textContent="LOAD",l.style.cssText="padding:4px 10px;background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.2);border-radius:3px;font:600 10px system-ui;cursor:pointer;",l.addEventListener("click",()=>{const u=Dd(s);u?(this.assembly=u,this.st=u.roots.reduce((h,d)=>h+(Sa[d.part.size]||.6),0),this.nm=u.roots.map(h=>h.part.name),this.rf(),this.up(),Xt.show(`Loaded: "${s}"`),e.remove()):Xt.show("Failed to load")});const c=document.createElement("button");c.textContent="✕",c.style.cssText="padding:4px 8px;background:rgba(255,68,68,0.1);color:#ff6666;border:1px solid rgba(255,68,68,0.2);border-radius:3px;font:600 10px system-ui;cursor:pointer;",c.addEventListener("click",()=>{s_(s),r.remove(),Xt.show(`Deleted: "${s}"`)}),a.appendChild(l),a.appendChild(c),r.appendChild(a),i.appendChild(r)}n.querySelector("#load-cancel").addEventListener("click",()=>e.remove())}makeOverlay(){const t=document.createElement("div");return t.className="guide-overlay",t.style.cssText="position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:rgba(6,8,20,0.8);",t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.body.appendChild(t),t}}class Ml{name;mass;position;velocity;constructor(t,e,n,i){this.name=t,this.mass=e,this.position=[...n],this.velocity=[...i]}applyForce(t,e){const n=t[0]/this.mass,i=t[1]/this.mass,s=t[2]/this.mass;this.velocity[0]+=n*e,this.velocity[1]+=i*e,this.velocity[2]+=s*e,this.position[0]+=this.velocity[0]*e,this.position[1]+=this.velocity[1]*e,this.position[2]+=this.velocity[2]*e}kineticEnergy(){const t=this.velocity[0]**2+this.velocity[1]**2+this.velocity[2]**2;return .5*this.mass*t}}class d_{rocket;system;position;velocity;throttle=0;constructor(t,e,n,i){this.rocket=t,this.system=e,this.position=[...n],this.velocity=[...i]}consumeFuel(t,e){this.rocket.consumeFuel(t,e)}}const Es=mn*gn,Ta=.2,Ea=200,nr=25,ir=3,xh=2,sr=2,or=0,rr=Math.PI/2.5;class u_{camera;dist=sr;targetDist=sr;azimuth=or;targetAzimuth=or;polar=rr;targetPolar=rr;isDragging=!1;prevMouse={x:0,y:0};canvas=null;smoothPos=new L;initialized=!1;orbitKeys={left:!1,right:!1,up:!1,down:!1};zoomKeys={in:!1,out:!1};inertiaAzimuth=0;inertiaPolar=0;constructor(t){this.camera=t,this.setupKeyboard()}setupKeyboard(){window.addEventListener("keydown",t=>{if(t.shiftKey)switch(t.key){case"ArrowLeft":this.orbitKeys.left=!0,t.preventDefault();break;case"ArrowRight":this.orbitKeys.right=!0,t.preventDefault();break;case"ArrowUp":this.orbitKeys.up=!0,t.preventDefault();break;case"ArrowDown":this.orbitKeys.down=!0,t.preventDefault();break}(t.key==="z"||t.key==="Z")&&(this.zoomKeys.in=!0),(t.key==="x"||t.key==="X")&&(this.zoomKeys.out=!0)}),window.addEventListener("keyup",t=>{switch(t.key){case"ArrowLeft":this.orbitKeys.left=!1;break;case"ArrowRight":this.orbitKeys.right=!1;break;case"ArrowUp":this.orbitKeys.up=!1;break;case"ArrowDown":this.orbitKeys.down=!1;break;case"z":case"Z":this.zoomKeys.in=!1;break;case"x":case"X":this.zoomKeys.out=!1;break}})}initialiseAt(t,e,n,i){const s=t.position[0]*Es+(i?.x??0),r=t.position[1]*Es+(i?.y??0),a=t.position[2]*Es+(i?.z??0),l=new L(s,r,a),c=this.targetDist*Math.sin(this.polar)*Math.cos(this.azimuth),u=this.targetDist*Math.cos(this.polar),h=this.targetDist*Math.sin(this.polar)*Math.sin(this.azimuth);this.camera.position.set(s+c,r+u,a+h),this.camera.up.set(0,1,0),this.camera.lookAt(l)}setAzimuth(t){this.azimuth=t,this.targetAzimuth=t}setPolar(t){this.polar=t,this.targetPolar=t}zoom(t){this.targetDist*=t,this.targetDist=Math.max(Ta,Math.min(Ea,this.targetDist))}enableOrbit(t){this.canvas=t,t.addEventListener("mousedown",e=>{e.button===0&&(this.isDragging=!0,this.prevMouse={x:e.clientX,y:e.clientY},this.inertiaAzimuth=0,this.inertiaPolar=0)}),window.addEventListener("mousemove",e=>{if(!this.isDragging)return;const n=e.clientX-this.prevMouse.x,i=e.clientY-this.prevMouse.y;this.inertiaAzimuth=-n*.005,this.inertiaPolar=i*.005,this.targetAzimuth+=this.inertiaAzimuth,this.targetPolar=Math.max(.05,Math.min(Math.PI-.05,this.targetPolar+this.inertiaPolar)),this.prevMouse={x:e.clientX,y:e.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.targetDist*=e.deltaY>0?1.1:.9,this.targetDist=Math.max(Ta,Math.min(Ea,this.targetDist))},{passive:!1})}follow(t,e,n,i=!1,s){const r=t.position[0]*Es+(s?.x??0),a=t.position[1]*Es+(s?.y??0),l=t.position[2]*Es+(s?.z??0),c=new L(r,a,l);this.orbitKeys.left&&(this.targetAzimuth+=e*ir),this.orbitKeys.right&&(this.targetAzimuth-=e*ir),this.orbitKeys.up&&(this.targetPolar=Math.max(.05,this.targetPolar-e*ir*.5)),this.orbitKeys.down&&(this.targetPolar=Math.min(Math.PI-.05,this.targetPolar+e*ir*.5)),this.zoomKeys.in&&(this.targetDist=Math.max(Ta,this.targetDist*(1-e*xh))),this.zoomKeys.out&&(this.targetDist=Math.min(Ea,this.targetDist*(1+e*xh))),this.isDragging||(this.targetAzimuth+=this.inertiaAzimuth*e*2,this.targetPolar+=this.inertiaPolar*e*2,this.inertiaAzimuth*=Math.exp(-3*e),this.inertiaPolar*=Math.exp(-3*e)),this.dist+=(this.targetDist-this.dist)*Math.min(1,nr*e),this.azimuth+=(this.targetAzimuth-this.azimuth)*Math.min(1,nr*e*.5),this.polar+=(this.targetPolar-this.polar)*Math.min(1,nr*e*.5);const u=this.dist*Math.sin(this.polar)*Math.cos(this.azimuth),h=this.dist*Math.cos(this.polar),d=this.dist*Math.sin(this.polar)*Math.sin(this.azimuth),f=new L(r+u,a+h,l+d),g=new L(0,1,0);if(this.initialized||(this.smoothPos.copy(f),this.initialized=!0),i)this.smoothPos.copy(f);else{const m=Math.min(1,nr*e);this.smoothPos.lerp(f,m)}this.camera.position.copy(this.smoothPos);const y=Math.abs(this.polar)<.1?new L(0,0,1):Math.abs(this.polar-Math.PI)<.1?new L(0,0,-1):g;this.camera.up.copy(y),this.camera.lookAt(c)}reset(){this.targetDist=sr,this.dist=sr,this.targetAzimuth=or,this.azimuth=or,this.targetPolar=rr,this.polar=rr}dispose(){this.canvas=null}}class f_{container;active=!1;keys=new Set;stagePressed=!1;pauseToggle=!1;visible=!1;constructor(){this.container=document.createElement("div"),this.container.style.cssText=`
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 100;
      display: none; pointer-events: none;
      height: 200px; padding: 8px;
    `,document.body.appendChild(this.container),this.buildUI()}buildUI(){const t=this.container,e=document.createElement("div");e.style.cssText=`
      position: absolute; bottom: 20px; left: 20px; width: 140px; height: 140px;
      background: rgba(255,255,255,0.08); border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.15); pointer-events: auto;
      touch-action: none;
    `;const n=document.createElement("div");n.style.cssText=`
      position: absolute; top: 50%; left: 50%; width: 50px; height: 50px;
      background: rgba(255,255,255,0.2); border-radius: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid rgba(255,255,255,0.3);
    `,e.appendChild(n);let i=null;const s={x:0,y:0},r={x:0,y:0},a=(v,F)=>{const k=e.getBoundingClientRect();s.x=k.left+k.width/2,s.y=k.top+k.height/2,r.x=v,r.y=F,this.updateStick(n,s,r)},l=(v,F)=>{r.x=v,r.y=F,this.updateStick(n,s,r);const k=(v-s.x)/60,K=(F-s.y)/60,I=Math.max(-1,Math.min(1,k)),G=Math.max(-1,Math.min(1,K));G>.3?(this.keys.add("touch-up"),this.keys.delete("touch-down")):G<-.3?(this.keys.add("touch-down"),this.keys.delete("touch-up")):(this.keys.delete("touch-up"),this.keys.delete("touch-down")),I>.3?(this.keys.add("touch-right"),this.keys.delete("touch-left")):I<-.3?(this.keys.add("touch-left"),this.keys.delete("touch-right")):(this.keys.delete("touch-left"),this.keys.delete("touch-right"))},c=()=>{i=null,n.style.transform="translate(-50%, -50%)",this.keys.delete("touch-up"),this.keys.delete("touch-down"),this.keys.delete("touch-left"),this.keys.delete("touch-right")};e.addEventListener("touchstart",v=>{if(v.preventDefault(),i!==null)return;const F=v.changedTouches[0];i=F.identifier,a(F.clientX,F.clientY)},{passive:!1}),e.addEventListener("touchmove",v=>{v.preventDefault();for(let F=0;F<v.changedTouches.length;F++)v.changedTouches[F].identifier===i&&l(v.changedTouches[F].clientX,v.changedTouches[F].clientY)},{passive:!1}),e.addEventListener("touchend",v=>{for(let F=0;F<v.changedTouches.length;F++)v.changedTouches[F].identifier===i&&c()}),e.addEventListener("touchcancel",c),t.appendChild(e);const u=document.createElement("div");u.style.cssText=`
      position: absolute; bottom: 20px; right: 20px; display: flex;
      flex-direction: column; gap: 8px; align-items: flex-end;
    `;const h=(v,F=70,k=50)=>{const K=document.createElement("div");K.style.cssText="pointer-events: auto; position: relative;";const I=document.createElement("button");return I.textContent=v,I.style.cssText=`
        width: ${F}px; height: ${k}px; border-radius: 12px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: white; font: 600 14px/1 monospace; cursor: pointer;
        touch-action: none; user-select: none;
      `,K.appendChild(I),[I,K]},[d,f]=h("THR+",70,44),[g,y]=h("THR-",70,44),[m,p]=h("STAGE",70,44),[x,_]=h("SAS",60,44),[b,C]=h("CHUTE",60,44);this._sasAction=null,this._chuteAction=null;const w=(v,F)=>{const k=()=>{this.keys.add(F),v.style.background="rgba(255,255,255,0.3)"},K=()=>{this.keys.delete(F),v.style.background="rgba(255,255,255,0.1)"};v.addEventListener("touchstart",I=>{I.preventDefault(),k()},{passive:!1}),v.addEventListener("touchend",I=>{I.preventDefault(),K()},{passive:!1}),v.addEventListener("touchcancel",K),v.addEventListener("mousedown",k),v.addEventListener("mouseup",K),v.addEventListener("mouseleave",K)};w(d,"w"),w(g,"s");const S=(v,F)=>{const k=()=>{v.style.background="rgba(255,255,255,0.3)",setTimeout(()=>v.style.background="rgba(255,255,255,0.1)",120),F()};v.addEventListener("touchstart",K=>{K.preventDefault(),k()},{passive:!1}),v.addEventListener("mousedown",k)};S(x,()=>{this._sasAction&&this._sasAction()}),S(b,()=>{this._chuteAction&&this._chuteAction()}),m.addEventListener("touchstart",v=>{v.preventDefault(),this.stagePressed=!0},{passive:!1}),m.addEventListener("mousedown",()=>{this.stagePressed=!0});const O=document.createElement("div");O.style.cssText="display:flex; gap:8px;",O.appendChild(f),O.appendChild(p),u.appendChild(O);const M=document.createElement("div");M.style.cssText="display:flex; gap:8px;",M.appendChild(y),M.appendChild(_),M.appendChild(C),u.appendChild(M),t.appendChild(u)}_sasAction=null;_chuteAction=null;onSasAction(t){this._sasAction=t}onChuteAction(t){this._chuteAction=t}updateStick(t,e,n){const i=n.x-e.x,s=n.y-e.y,r=60,a=Math.sqrt(i*i+s*s),l=Math.min(a,r),c=Math.atan2(s,i),u=Math.cos(c)*l,h=Math.sin(c)*l;t.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${h}px))`}show(){this.visible||(this.visible=!0,this.container.style.display="block")}hide(){this.visible=!1,this.container.style.display="none"}isVisible(){return this.visible}getPitch(){let t=0;return this.keys.has("touch-up")&&(t=1),this.keys.has("touch-down")&&(t=-1),t}getYaw(){let t=0;return this.keys.has("touch-right")&&(t=1),this.keys.has("touch-left")&&(t=-1),t}getRoll(){let t=0;return this.keys.has("a")&&(t=1),this.keys.has("d")&&(t=-1),t}getThrottleUp(){return this.keys.has("w")}getThrottleDown(){return this.keys.has("s")}getStageRequested(){const t=this.stagePressed;return this.stagePressed=!1,t}dispose(){document.body.removeChild(this.container)}}class p_{keys=new Set;stagePressed=!1;pauseToggle=!1;state;touch=null;_onKeyDown;_onKeyUp;constructor(t){this.state=t,this._onKeyDown=e=>{e.repeat||(this.keys.add(e.key.toLowerCase()),e.key===" "&&(this.stagePressed=!0),e.key==="Escape"&&(this.pauseToggle=!0),["w","s","a","d","arrowup","arrowdown"," "].includes(e.key.toLowerCase())&&e.preventDefault())},this._onKeyUp=e=>{this.keys.delete(e.key.toLowerCase())},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}enableTouch(){this.touch||(this.touch=new f_),this.touch.show()}disableTouch(){this.touch?.hide()}update(t){const e=this.touch?.getThrottleUp()||this.keys.has("arrowup"),n=this.touch?.getThrottleDown()||this.keys.has("arrowdown");e&&(this.state.throttle=Math.min(1,this.state.throttle+t*.5)),n&&(this.state.throttle=Math.max(0,this.state.throttle-t*.3))}getPitch(){let t=0;return(this.keys.has("w")||this.touch?.getPitch()===1)&&(t=1),(this.keys.has("s")||this.touch?.getPitch()===-1)&&(t=-1),t}getYaw(){let t=0;return(this.keys.has("a")||this.touch?.getYaw()===1)&&(t=1),(this.keys.has("d")||this.touch?.getYaw()===-1)&&(t=-1),t}getRoll(){return 0}getZoomIn(){return this.keys.has("z")}getZoomOut(){return this.keys.has("x")}getStageRequested(){const t=this.stagePressed||!!this.touch?.getStageRequested();return this.stagePressed=!1,t}consumePauseToggle(){const t=this.pauseToggle;return this.pauseToggle=!1,t}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.touch?.dispose(),this.touch=null}}class m_{root;speedVal;fuelVal;vsVal;altVal;massVal;heatFill;heatPct;throttleFill;throttlePct;warpLabel;_fuelRKg;_fuelRBar;pauseOverlay;navballCanvas;navballCtx;camModeEl;twrVal;twrFill;sasModeEl;dvVal;orbitAp;orbitPe;orbitTta;orbitEcc;orbitPanel;onAction=null;constructor(){this.root=document.createElement("div"),this.root.style.cssText="position:fixed;inset:0;z-index:100;pointer-events:none;",this.pauseOverlay=document.createElement("div"),this.pauseOverlay.style.cssText="position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;opacity:0;transition:opacity 220ms ease-out;",this.pauseOverlay.innerHTML=`
      <div style="width:280px;display:flex;flex-direction:column;gap:8px;align-items:center;">
        <button class="btn btn--primary pause-btn" data-action="resume" style="width:100%;padding:14px;font-size:16px;text-align:center;">▶ RESUME</button>
        <button class="btn btn--secondary pause-btn" data-action="menu" style="width:100%;padding:14px;font-size:16px;text-align:center;">MENU</button>
        <button class="btn btn--danger pause-btn" data-action="restart" style="width:100%;padding:14px;font-size:16px;text-align:center;">🔄 RESTART</button>
      </div>
    `,document.body.appendChild(this.pauseOverlay),this.pauseOverlay.querySelectorAll(".pause-btn").forEach(n=>{n.addEventListener("click",i=>{this.onAction&&this.onAction(i.target.dataset.action)})});const t=document.createElement("div");t.classList.add("hud-panel-in-bottom"),t.style.cssText="position:fixed;bottom:16px;left:50%;transform:translateX(-50%);z-index:200;display:flex;gap:8px;pointer-events:auto;";const e=(n,i,s)=>{const r=document.createElement("button");return r.className="hud-ctrl-btn",r.textContent=n,r.style.cssText=`padding:10px 16px;background:rgba(0,0,0,0.6);color:${s};border:1px solid rgba(255,255,255,0.1);border-radius:6px;font:400 12px system-ui;cursor:pointer;letter-spacing:0.05em;`,r.addEventListener("click",()=>{this.onAction&&this.onAction(i)}),r.addEventListener("mousedown",()=>{i==="throttleUp"&&(this._throttleBtn=!0),i==="throttleDown"&&(this._throttleDn=!0)}),r.addEventListener("mouseup",()=>{i==="throttleUp"&&(this._throttleBtn=!1),i==="throttleDown"&&(this._throttleDn=!1)}),r};t.appendChild(e("THR−","throttleDown","#ff8844")),t.appendChild(e("THR+","throttleUp","#44ff88")),t.appendChild(e("STAGE","stage","#ffcc44")),t.appendChild(e("MAP","map","#4488ff")),t.appendChild(e("SAS","sas","#8888cc")),t.appendChild(e("CHUTE","parachute","#44cc88")),this.root.appendChild(t),this._throttleBtn=!1,this._throttleDn=!1}_throttleBtn=!1;_throttleDn=!1;get throttleUpBtn(){return this._throttleBtn}get throttleDownBtn(){return this._throttleDn}mount(t=document.body){const e=document.createElement("div");e.classList.add("hud-panel-in-left"),e.style.cssText=`
      position:fixed;top:16px;left:16px;z-index:100;pointer-events:auto;
      font-family:monospace;font-size:11px;
      display:flex;flex-direction:column;gap:4px;
      background:rgba(8,10,24,0.75);border:1px solid rgba(200,152,56,0.15);
      border-radius:6px;padding:8px 10px;min-width:130px;
      backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);
    `,e.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span class="hud-speed-label" style="color:rgba(244,245,242,0.5);">SPD</span>
        <span class="speed-val" style="color:#ddd;">0</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">m/s</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">ALT</span>
        <span class="alt-val" style="color:#ddd;">0</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">m</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">V/S</span>
        <span class="vs-val" style="color:#88ccff;">0</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">m/s</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">FUEL</span>
        <span class="fuel-val" style="color:#ffaa44;">—</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">kg</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);">MASS</span>
        <span class="mass-val" style="color:#aaaacc;">—</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">t</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:rgba(244,245,242,0.5);">HEAT</span>
        <span style="font-size:9px;"><span class="heat-pct" style="color:#44FF44;">0%</span></span>
        <div class="data-bar" style="width:50px;height:4px;"><span class="data-bar__track"><span class="heat-fill" style="width:0%;height:100%;background:#44FF44;border-radius:2px;display:block;"></span></span></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:rgba(244,245,242,0.5);">THR</span>
        <span style="font-size:9px;"><span class="throt-pct" style="color:#aaaacc;">0%</span></span>
        <div class="data-bar" style="width:50px;height:4px;"><span class="data-bar__track"><span class="throt-fill" style="width:0%;height:100%;background:#4488ff;border-radius:2px;display:block;"></span></span></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:rgba(244,245,242,0.5);">TWR</span>
        <span class="twr-val" style="color:#ff6644;font-size:10px;">0.0</span>
        <div class="data-bar" style="width:50px;height:4px;"><span class="data-bar__track"><span class="twr-fill" style="width:0%;height:100%;background:#ff6644;border-radius:2px;display:block;"></span></span></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="color:rgba(244,245,242,0.5);">Δv</span>
        <span class="dv-val" style="color:#88ccff;font-size:10px;">0 m/s</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px;">
        <span style="color:rgba(244,245,242,0.5);">SAS</span>
        <span class="sas-mode" style="color:#8888cc;font-size:10px;">OFF</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:2px;">
        <span style="color:rgba(244,245,242,0.5);">WARP</span>
        <span class="warp-val" style="color:#c89838;font-size:10px;">x1</span>
      </div>
    `,this.root.appendChild(e),this.speedVal=e.querySelector(".speed-val"),this.fuelVal=e.querySelector(".fuel-val"),this.vsVal=e.querySelector(".vs-val"),this.altVal=e.querySelector(".alt-val"),this.massVal=e.querySelector(".mass-val"),this.heatFill=e.querySelector(".heat-fill"),this.heatPct=e.querySelector(".heat-pct"),this.throttleFill=e.querySelector(".throt-fill"),this.throttlePct=e.querySelector(".throt-pct"),this.warpLabel=e.querySelector(".warp-val"),this.twrVal=e.querySelector(".twr-val"),this.twrFill=e.querySelector(".twr-fill"),this.sasModeEl=e.querySelector(".sas-mode"),this.dvVal=e.querySelector(".dv-val"),e.addEventListener("click",a=>{const l=a.target.closest("[data-action]");l&&this.onAction&&this.onAction(l.dataset.action)}),this.camModeEl=document.createElement("div"),this.camModeEl.style.cssText="position:fixed;bottom:20px;left:20px;z-index:100;color:rgba(200,152,56,0.5);font-size:9px;font-family:monospace;pointer-events:none;",this.root.appendChild(this.camModeEl);const n=document.createElement("div");n.classList.add("hud-panel-in-right"),n.style.cssText="position:fixed;top:96px;right:16px;z-index:100;pointer-events:none;font-family:monospace;font-size:11px;background:rgba(8,10,24,0.8);border:1px solid rgba(68,136,204,0.25);border-radius:6px;padding:8px 12px;color:#88ccff;min-width:140px;",n.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:2px;">
        <span style="color:rgba(244,245,242,0.5);font-size:9px;letter-spacing:0.1em;">ORBIT</span>
        <span class="orbit-ecc" style="color:#88ccff;font-size:9px;">—</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:#ff8844;font-size:10px;">Ap</span>
        <span class="orbit-ap" style="color:#ddd;">—</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:#44dd88;font-size:10px;">Pe</span>
        <span class="orbit-pe" style="color:#ddd;">—</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <span style="color:rgba(244,245,242,0.5);font-size:10px;">T→Ap</span>
        <span class="orbit-tta" style="color:#ddd;">—</span>
      </div>
    `,this.root.appendChild(n),this.orbitPanel=n,this.orbitAp=n.querySelector(".orbit-ap"),this.orbitPe=n.querySelector(".orbit-pe"),this.orbitTta=n.querySelector(".orbit-tta"),this.orbitEcc=n.querySelector(".orbit-ecc");const i=document.createElement("div");i.classList.add("hud-fade-up"),i.style.cssText="position:fixed;bottom:20px;right:20px;z-index:100;pointer-events:none;";const s=document.createElement("canvas");s.width=150,s.height=150,s.style.cssText="width:150px;height:150px;border-radius:75px;opacity:0.85;",i.appendChild(s),this.root.appendChild(i),this.navballCanvas=s,this.navballCtx=s.getContext("2d");const r=document.createElement("div");r.classList.add("hud-panel-in-right"),r.style.cssText="position:fixed;top:16px;right:16px;z-index:100;pointer-events:none;font-family:monospace;font-size:12px;background:rgba(8,10,24,0.8);border:1px solid rgba(200,152,56,0.2);border-radius:6px;padding:8px 12px;color:#ffaa44;",r.innerHTML='<span style="color:rgba(244,245,242,0.5);">FUEL</span> <span class="fuel-r-kg">4500 kg</span><br><div style="width:80px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;margin-top:4px;"><div class="fuel-r-bar" style="width:100%;height:100%;background:#ffaa44;border-radius:3px;"></div></div>',this.root.appendChild(r),this._fuelRKg=r.querySelector(".fuel-r-kg"),this._fuelRBar=r.querySelector(".fuel-r-bar"),t.appendChild(this.root)}setVisible(t){this.root.style.display=t?"":"none"}setMass(t){this.massVal&&(this.massVal.textContent=`${(t/1e3).toFixed(1)}`)}setFreeCamera(t){this.camModeEl&&(this.camModeEl.textContent=t?"FREE":"")}setWarp(t){this.warpLabel&&(this.warpLabel.textContent=`x${t}`,this.warpLabel.classList.remove("warp-pulse"),this.warpLabel.offsetWidth,this.warpLabel.classList.add("warp-pulse"))}setTwr(t){if(!this.twrVal)return;this.twrVal.textContent=t.toFixed(2),this.twrVal.style.color=t>=1?"#44ff88":t>=.5?"#ffcc44":"#ff6644";const e=Math.min(100,t/2*100);this.twrFill.style.width=`${e}%`,this.twrFill.style.background=t>=1?"#44ff88":t>=.5?"#ffcc44":"#ff6644",t>0&&t<1?this.twrVal.classList.add("twr-warn"):this.twrVal.classList.remove("twr-warn")}setSasMode(t){if(!this.sasModeEl)return;const e={off:"OFF",hold:"HOLD",prograde:"PRO",retrograde:"RET"};this.sasModeEl.textContent=e[t],this.sasModeEl.style.color=t==="off"?"#666":t==="prograde"?"#44ff88":t==="retrograde"?"#ff8844":"#8888cc",t!=="off"?this.sasModeEl.classList.add("sas-active"):this.sasModeEl.classList.remove("sas-active")}setDeltaV(t){this.dvVal&&(t>=1e4?this.dvVal.textContent=`${(t/1e3).toFixed(1)} km/s`:this.dvVal.textContent=`${t.toFixed(0)} m/s`,this.dvVal.style.color=t>3e3?"#44ff88":t>1e3?"#ffcc44":"#ff6644")}setOrbit(t){if(!this.orbitPanel)return;if(!t.bound||t.apoapsis===void 0||t.periapsis===void 0){this.orbitAp.textContent="—",this.orbitPe.textContent="—",this.orbitTta.textContent="—",this.orbitEcc.textContent="suborbital",this.orbitPanel.style.borderColor="rgba(221,170,68,0.25)";return}const e=i=>{const s=i/1e3;return s>1e3?`${(s/1e3).toFixed(1)} Mm`:`${s.toFixed(0)} km`},n=i=>i===void 0||!isFinite(i)?"—":i>86400?`${(i/86400).toFixed(1)} d`:i>3600?`${(i/3600).toFixed(1)} h`:i>60?`${(i/60).toFixed(0)} min`:`${i.toFixed(0)} s`;this.orbitAp.textContent=e(t.apoapsis),this.orbitPe.textContent=e(t.periapsis),this.orbitTta.textContent=n(t.timeToAp),this.orbitEcc.textContent=t.eccentricity!==void 0?`e=${t.eccentricity.toFixed(2)}`:"—",this.orbitPanel.style.borderColor="rgba(68,136,204,0.4)"}setPaused(t){t?(this.pauseOverlay.style.display="flex",requestAnimationFrame(()=>{this.pauseOverlay.style.opacity="1"})):(this.pauseOverlay.style.opacity="0",setTimeout(()=>{t||(this.pauseOverlay.style.display="none")},230))}setThrottle(t){const e=Math.round(t*100);this.throttlePct.textContent=`${e}%`,this.throttleFill.style.width=`${e}%`,this.throttleFill.style.background=e>80?"#ff6644":"#4488ff"}setNavballData(t,e,n,i,s){const r=this.navballCtx,a=140,l=140,c=70,u=70,h=66;r.clearRect(0,0,a,l),r.beginPath(),r.arc(c,u,h+2,0,Math.PI*2),r.fillStyle="#060810",r.fill();const d=[t[0],t[1],t[2]],f=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])||1;d[0]/=f,d[1]/=f,d[2]/=f;const g=d[0]*n[0]+d[1]*n[1]+d[2]*n[2];let y=[n[0]-d[0]*g,n[1]-d[1]*g,n[2]-d[2]*g];const m=Math.sqrt(y[0]*y[0]+y[1]*y[1]+y[2]*y[2])||1;y[0]/=m,y[1]/=m,y[2]/=m;const p=[d[1]*y[2]-d[2]*y[1],d[2]*y[0]-d[0]*y[2],d[0]*y[1]-d[1]*y[0]],x=S=>{const O=Math.sqrt(S[0]*S[0]+S[1]*S[1]+S[2]*S[2])||1,M=S[0]/O,v=S[1]/O,F=S[2]/O,k=M*p[0]+v*p[1]+F*p[2],K=M*y[0]+v*y[1]+F*y[2],I=M*d[0]+v*d[1]+F*d[2],G=I>0,q=I>0?h/(1+I):h*.5;return{x:c+k*q,y:u-K*q,inFront:G,lx:k,ly:K,lz:I}},_=h*h;r.save(),r.beginPath(),r.arc(c,u,h,0,Math.PI*2),r.clip(),x(n);const b=x([-n[0],-n[1],-n[2]]),C=r.createRadialGradient(c,u,0,c,u,h);if(C.addColorStop(0,"#0a0a22"),C.addColorStop(.4,"#1a2a4a"),C.addColorStop(1,"#224488"),r.fillStyle=C,r.fillRect(c-h,u-h,h*2,h*2),b.inFront){const S=r.createRadialGradient(b.x,b.y,0,b.x,b.y,h*1.2);S.addColorStop(0,"#6a4a2a"),S.addColorStop(.3,"#5a3a1a"),S.addColorStop(.7,"#3a2a12"),S.addColorStop(1,"rgba(10,10,40,0)"),r.fillStyle=S,r.fillRect(c-h,u-h,h*2,h*2)}for(let S=-80;S<=80;S+=10){const O=S*Math.PI/180,M=Math.cos(O),v=Math.sin(O),F=[d[0]*M+y[0]*v,d[1]*M+y[1]*v,d[2]*M+y[2]*v],k=x(F);if(!k.inFront||(k.x-c)*(k.x-c)+(k.y-u)*(k.y-u)>_)continue;const K=S===0?26:S%20===0?18:10;r.beginPath(),r.moveTo(c-K*(1-Math.abs(v)*.3),k.y),r.lineTo(c+K*(1-Math.abs(v)*.3),k.y),r.strokeStyle=S===0?"#FFCC44":"rgba(255,255,255,0.2)",r.lineWidth=S===0?1.5:.6,r.stroke(),S%20===0&&(r.fillStyle="rgba(255,255,255,0.35)",r.font="7px sans-serif",r.fillText(`${Math.abs(S)}`,c+K+3,k.y+2))}for(let S=0;S<360;S+=45){const O=S*Math.PI/180,M=p[0]*Math.cos(O)+y[0]*Math.sin(O),v=p[1]*Math.cos(O)+y[1]*Math.sin(O),F=p[2]*Math.cos(O)+y[2]*Math.sin(O),k=[M-d[0]*g,v-d[1]*g,F-d[2]*g],K=Math.sqrt(k[0]*k[0]+k[1]*k[1]+k[2]*k[2])||1,I=x([k[0]/K,k[1]/K,k[2]/K]);I.inFront&&(r.fillStyle="rgba(255,255,255,0.2)",r.font="6px sans-serif",r.textAlign="center",r.fillText(`${S}°`,I.x,I.y+2),r.textAlign="start")}const w=(S,O)=>{const M=x(S);M.inFront&&O(M)};w(e,S=>{r.beginPath(),r.arc(S.x,S.y,4,0,Math.PI*2),r.fillStyle="#44FF44",r.fill(),r.beginPath(),r.arc(S.x,S.y,7,0,Math.PI*2),r.strokeStyle="#44FF44",r.lineWidth=1.5,r.stroke()}),w([-e[0],-e[1],-e[2]],S=>{r.beginPath(),r.arc(S.x,S.y,4,0,Math.PI*2),r.fillStyle="rgba(68,255,68,0.5)",r.fill(),r.beginPath(),r.arc(S.x,S.y,7,0,Math.PI*2),r.strokeStyle="#44FF44",r.lineWidth=1,r.stroke(),r.beginPath(),r.moveTo(S.x-3,S.y-3),r.lineTo(S.x+3,S.y+3),r.moveTo(S.x+3,S.y-3),r.lineTo(S.x-3,S.y+3),r.strokeStyle="#44FF44",r.lineWidth=1,r.stroke()}),w(n,S=>{r.beginPath(),r.moveTo(S.x,S.y-6),r.lineTo(S.x-4,S.y+3),r.lineTo(S.x+4,S.y+3),r.closePath(),r.fillStyle="#4488FF",r.fill()}),w([-n[0],-n[1],-n[2]],S=>{r.beginPath(),r.moveTo(S.x,S.y+6),r.lineTo(S.x-4,S.y-3),r.lineTo(S.x+4,S.y-3),r.closePath(),r.fillStyle="#CC8844",r.fill()}),r.beginPath(),r.arc(c,u,3,0,Math.PI*2),r.fillStyle="#FFAA44",r.fill(),r.restore(),r.beginPath(),r.arc(c,u,h+1,0,Math.PI*2),r.strokeStyle="#334466",r.lineWidth=2,r.stroke();for(let S=0;S<360;S+=45){const O=S*Math.PI/180;r.beginPath(),r.moveTo(c+Math.cos(O)*(h-7),u+Math.sin(O)*(h-7)),r.lineTo(c+Math.cos(O)*(h+2),u+Math.sin(O)*(h+2)),r.strokeStyle="#4a6a8a",r.lineWidth=1,r.stroke()}}update(t,e,n=0,i=0){const s=Math.sqrt(t.velocity[0]**2+t.velocity[1]**2+t.velocity[2]**2);let r=1/0;for(const g of e.bodies){if(g.mass<=0)continue;const y=t.position[0]-g.position[0],m=t.position[1]-g.position[1],p=t.position[2]-g.position[2],x=Math.sqrt(y*y+m*m+p*p),_=g.getSurfaceRadiusAt?.(t.position)??g.radius??0,b=x-_;b<r&&(r=b)}const a=Math.min(100,n/3e5*100);this.speedVal.textContent=s>1e3?(s/1e3).toFixed(1)+"k":s.toFixed(1),this.speedVal.style.color=s>3e3?"#ff6644":s>1e3?"#ffaa44":"#ddd";const l=r/1e3;this.altVal.textContent=r>1e4?l.toFixed(1)+"k":r.toFixed(0);const c=t.velocity[1];this.vsVal.textContent=c>0?"+"+c.toFixed(0):c.toFixed(0),this.vsVal.style.color=c>0?"#88ff88":c<0?"#ff6644":"#88ccff";const u=t.rocket.totalFuelMass();u>1e3?(this.fuelVal.textContent=(u/1e3).toFixed(1),this.fuelVal.nextElementSibling.textContent="t"):(this.fuelVal.textContent=u.toFixed(0),this.fuelVal.nextElementSibling.textContent="kg");const h=Math.round(i*100);this.throttlePct.textContent=`${h}%`;const d=t.rocket.totalFuelMass(),f=t.rocket.assembly.totalFuelCapacity();this._fuelRKg&&(this._fuelRKg.textContent=d>1e3?`${(d/1e3).toFixed(1)} t`:`${d.toFixed(0)} kg`),this._fuelRBar&&(this._fuelRBar.style.width=`${f>0?d/f*100:0}%`),this.throttleFill.style.width=`${h}%`,this.throttleFill.style.background=h>80?"#ff4444":h>40?"#ffaa00":"#4488ff",this.heatPct.textContent=`${a.toFixed(0)}%`,this.heatPct.style.color=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44",this.heatFill.style.width=`${a}%`,this.heatFill.style.background=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44"}unmount(){this.root.remove(),this.pauseOverlay.remove()}}function g_(o,t,e){if(o.throttle<=0)return;const n=x_(o.rocket.assembly.roots);if(n.length===0)return;const i=o.rocket.totalFuelMass();if(i<=0)return;let s=0,r=0;for(const y of n){const m=y.thrust*1e3*o.throttle;s+=m,r+=m/(y.isp*Lx)}r*=vd;const a=r*t,l=Math.min(a,i),c=a>0?l/a:1,u=e??[0,1,0],h=o.rocket.totalMass(),d=s*u[0]/h*c,f=s*u[1]/h*c,g=s*u[2]/h*c;o.velocity[0]+=d*t,o.velocity[1]+=f*t,o.velocity[2]+=g*t,o.consumeFuel(r,t)}function wa(o){let t=0;const e=n=>{for(const i of n)i.part.thrust&&i.part.isp&&(t+=i.part.thrust),i.children?.length&&e(i.children)};return e(o),t}function y_(o){let t=0,e=0;const n=i=>{for(const s of i)s.part.thrust&&s.part.isp&&(t+=s.part.thrust,e+=s.part.isp*s.part.thrust),s.children?.length&&n(s.children)};return n(o),t>0?e/t:0}function x_(o){const t=[],e=n=>{for(const i of n)i.part.thrust&&i.part.isp&&t.push({thrust:i.part.thrust,isp:i.part.isp}),i.children?.length&&e(i.children)};return e(o),t}class __{ctx=null;engineOsc=null;engineGain=null;engineNoise=null;engineRunning=!1;throttleLevel=0;constructor(){try{this.ctx=new AudioContext}catch{}}ensureCtx(){return this.ctx?(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx):null}startEngine(){if(!this.ensureCtx()||this.engineRunning)return;const t=this.ctx;this.engineRunning=!0,this.engineOsc=t.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=80,this.engineGain=t.createGain(),this.engineGain.gain.value=.02;const e=t.createBuffer(1,t.sampleRate*2,t.sampleRate),n=e.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=(Math.random()*2-1)*.3;this.engineNoise=t.createBufferSource(),this.engineNoise.buffer=e,this.engineNoise.loop=!0;const i=t.createGain();i.gain.value=.01;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=400,this.engineOsc.connect(this.engineGain),this.engineOsc.start(),this.engineNoise.connect(s),s.connect(i);const r=t.createGain();r.gain.value=.4,this.engineGain.connect(r),i.connect(r),r.connect(t.destination)}setThrottle(t){if(this.throttleLevel=t,!this.engineOsc||!this.engineGain)return;const e=60+t*80,n=.01+t*.04;this.engineOsc.frequency.setValueAtTime(e,this.ctx.currentTime+.1),this.engineGain.gain.setValueAtTime(n,this.ctx.currentTime+.05)}stopEngine(){if(this.engineOsc){try{this.engineOsc.stop()}catch{}this.engineOsc=null}if(this.engineNoise){try{this.engineNoise.stop()}catch{}this.engineNoise=null}this.engineGain&&(this.engineGain.disconnect(),this.engineGain=null),this.engineRunning=!1}playStaging(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="square",n.frequency.setValueAtTime(200,e),n.frequency.exponentialRampToValueAtTime(40,e+.3);const i=t.createGain();i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.5),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.5)}playCrash(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(20,e+.8);const i=t.createGain();i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+1.5);const s=t.createBuffer(1,t.sampleRate*1,t.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*(c<r.length*.2?.8:.1*(1-c/r.length));const a=t.createBufferSource();a.buffer=s;const l=t.createGain();l.gain.setValueAtTime(.2,e),l.gain.exponentialRampToValueAtTime(.001,e+1),n.connect(i),a.connect(l),i.connect(t.destination),l.connect(t.destination),n.start(e),n.stop(e+1.5),a.start(e),a.stop(e+1)}playLand(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(300,e),n.frequency.exponentialRampToValueAtTime(60,e+.2);const i=t.createGain();i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.3)}dispose(){this.stopEngine(),this.ctx&&(this.ctx.close(),this.ctx=null)}}function Ae(o,t){const e=t.bodyByName("sun");let n=e,i=0;for(const s of t.bodies){if(s.name==="sun")continue;const r=s;let a=e,l=e.position;if(r.parentBody)a=r.parentBody,l=a.position;else if(s.name==="moon"){const _=t.bodyByName("earth");_&&(a=_,l=_.position)}const c=s.position[0]-o[0],u=s.position[1]-o[1],h=s.position[2]-o[2],d=c*c+u*u+h*h,f=Math.sqrt(d),g=s.position[0]-l[0],y=s.position[1]-l[1],m=s.position[2]-l[2],x=Math.sqrt(g*g+y*y+m*m)*Math.pow(s.mass/a.mass,.4);if(f<x){const _=Ti*s.mass/d;_>i&&(i=_,n=s)}}return n}function ro(o,t,e,n,i){const s=Ti*e,r=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]),l=(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])/2-s/r,c=-s/(2*l),u=o[1]*t[2]-o[2]*t[1],h=o[2]*t[0]-o[0]*t[2],d=o[0]*t[1]-o[1]*t[0],f=Math.sqrt(u*u+h*h+d*d),g=(t[1]*d-t[2]*h)/s-o[0]/r,y=(t[2]*u-t[0]*d)/s-o[1]/r,m=(t[0]*h-t[1]*u)/s-o[2]/r,p=Math.sqrt(g*g+y*y+m*m),x=p<1&&c>0,_=x?c*(1+p):1/0,b=x?c*(1-p):r,C=p>1e-8?g/p:1,w=p>1e-8?y/p:0,S=p>1e-8?m/p:0,O=[C,w,S],M=[(h*S-d*w)/(f||1),(d*C-u*S)/(f||1),(u*w-h*C)/(f||1)],v=[],F=x?Math.PI:Math.acos(-1/Math.max(p,1.001))*.98;let k,K;if(x){const I=2*Math.PI*Math.sqrt(c*c*c/s),G=(o[0]*t[0]+o[1]*t[1]+o[2]*t[2])/(r||1),q=(c*(1-p*p)/r-1)/p,Z=G*Math.sqrt(c*(1-p*p)/s)/(p||1),J=(p+q)/(1+p*q),j=Math.sqrt(1-p*p)*Z/(1+p*q);let tt=Math.atan2(j,J);tt<0&&(tt+=Math.PI*2);const ht=(tt-p*j)*I/(2*Math.PI),Y=I-ht,nt=(Y+I/2)%I;K=Y,k=nt}for(let I=0;I<=i;I++){const G=-F+2*F*I/i,q=1+p*Math.cos(G);if(Math.abs(q)<1e-10)continue;const Z=c*(1-p*p)/q;if(isNaN(Z)||!isFinite(Z)||Z<0)continue;const J=Z*(Math.cos(G)*O[0]+Math.sin(G)*M[0]),j=Z*(Math.cos(G)*O[2]+Math.sin(G)*M[2]);if(Math.sqrt(J*J+j*j)>n*1.5)break;v.push([J,j])}return{points:v,eccentricity:p,apoapsis:_,periapsis:b,bound:x,timeToAp:k,timeToPe:K}}function Aa(o,t,e,n){const i=e.bodyByName("sun"),s=e.bodyByName(n);if(!i||!s)return null;const r=Ti*i.mass,a=o[0]-i.position[0],l=o[1]-i.position[1],c=o[2]-i.position[2],u=Math.sqrt(a*a+l*l+c*c)||1;Math.sqrt(t[0]**2+t[1]**2+t[2]**2);const h=s.position[0]-i.position[0],d=s.position[1]-i.position[1],f=s.position[2]-i.position[2],g=Math.sqrt(h*h+d*d+f*f)||1,y=g>u,m=Math.min(u,g),p=Math.max(u,g),x=(m+p)/2,_=Math.sqrt(r*(2/m-1/x)),b=Math.sqrt(r*(2/p-1/x)),C=Math.sqrt(r/m);let w,S;y?(w=_-C,S="prograde"):(w=C-b,S="retrograde"),w=Math.abs(w);const O=Math.PI*Math.sqrt(x**3/r),M=`${S==="prograde"?"Prograde":"Retrograde"} burn of ${w.toFixed(0)} m/s to reach ${n.toUpperCase()}. Travel time: ${(O/86400).toFixed(0)} days.`;return{targetName:n,deltaV:w,direction:S,transferTime:O,summary:M}}function v_(o,t){const e=o.position[0]-t.position[0],n=o.position[1]-t.position[1],i=o.position[2]-t.position[2],s=e*e+n*n+i*i,r=Math.sqrt(s);if(r===0)return[0,0,0];const a=Ti*o.mass*t.mass/s;return[a*e/r,a*n/r,a*i/r]}function Nd(o,t){let e=0,n=0,i=0;for(const s of t){if(s===o||s.mass<=0)continue;const r=v_(s,o);e+=r[0],n+=r[1],i+=r[2]}return[e,n,i]}const Hn=Ce/.08*1.5,Bn=900;function M_(){try{const o=document.createElement("canvas");o.width=64,o.height=64;const t=o.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(255,255,240,0.95)"),e.addColorStop(.35,"rgba(255,230,180,0.7)"),e.addColorStop(.55,"rgba(255,180,100,0.35)"),e.addColorStop(.75,"rgba(255,120,50,0.15)"),e.addColorStop(1,"rgba(255,80,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new nn(o);return n.needsUpdate=!0,n}catch{return new ul(new Uint8Array([255,255,255,255]),1,1,pn)}}function b_(){try{const o=document.createElement("canvas");o.width=64,o.height=64;const t=o.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,200,100,0.6)"),e.addColorStop(.3,"rgba(255,150,60,0.3)"),e.addColorStop(.6,"rgba(200,80,30,0.1)"),e.addColorStop(1,"rgba(100,30,10,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new nn(o);return n.needsUpdate=!0,n}catch{return new ul(new Uint8Array([255,255,255,255]),1,1,pn)}}class S_{particles;outerParticles;positions;velocities;lifetimes;ages;colors;sizes;active;nextIndex;coreTex;outerTex;throttleLevel=1;inVacuum=!1;group;constructor(){this.active=!1,this.nextIndex=0,this.positions=new Float32Array(Bn*3),this.velocities=new Float32Array(Bn*3),this.lifetimes=new Float32Array(Bn),this.ages=new Float32Array(Bn),this.colors=new Float32Array(Bn*3),this.sizes=new Float32Array(Bn),this.ages.fill(1/0),this.coreTex=M_(),this.outerTex=b_(),this.group=new ln;const t=new Ne;t.setAttribute("position",new Le(this.positions,3)),t.setAttribute("color",new Le(this.colors,3)),t.setAttribute("size",new Le(this.sizes,1));const e=new xo({size:Hn*.6,map:this.coreTex,vertexColors:!0,sizeAttenuation:!0,blending:fn,depthWrite:!1,transparent:!0,opacity:1});this.particles=new Er(t,e),this.group.add(this.particles);const n=new Ne;n.setAttribute("position",new Le(this.positions.slice(),3));const i=new xo({size:Hn*1.5,map:this.outerTex,color:16755302,sizeAttenuation:!0,blending:fn,depthWrite:!1,transparent:!0,opacity:.6});this.outerParticles=new Er(n,i),this.group.add(this.outerParticles)}setThrottle(t){this.throttleLevel=Math.max(.01,t)}setVacuum(t){this.inVacuum=t}start(){this.active=!0}stop(){this.active=!1;for(let t=0;t<Bn;t++)this.ages[t]=this.lifetimes[t],this.positions[t*3]=0,this.positions[t*3+1]=0,this.positions[t*3+2]=0;this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.outerParticles.geometry.attributes.position.needsUpdate=!0}update(t){const e=this.inVacuum?4.5:1;if(this.active){const i=Math.ceil((5+Math.random()*4)*this.throttleLevel);for(let s=0;s<i;s++){const r=this.nextIndex;this.nextIndex=(this.nextIndex+1)%Bn;const a=(.06+Math.random()*.12)*(this.inVacuum?4:1)/Math.max(.2,this.throttleLevel);this.positions[r*3]=(Math.random()-.5)*a*Hn,this.positions[r*3+1]=-(Math.random()*.03)*Hn,this.positions[r*3+2]=(Math.random()-.5)*a*Hn;const l=(5+Math.random()*8)*this.throttleLevel*e;this.velocities[r*3]=(Math.random()-.5)*.4*Hn,this.velocities[r*3+1]=-(l*Hn),this.velocities[r*3+2]=(Math.random()-.5)*.4*Hn,this.lifetimes[r]=(.2+Math.random()*.3)*e,this.ages[r]=0,this.sizes[r]=.5+Math.random()*.5}}for(let i=0;i<Bn;i++){const s=this.ages[i],r=this.lifetimes[i];if(s>=r)continue;const a=s+t;if(this.ages[i]=a,a>=r)continue;const l=a/r,c=i*3;this.positions[c]=(this.positions[c]??0)+(this.velocities[c]??0)*t,this.positions[c+1]=(this.positions[c+1]??0)+(this.velocities[c+1]??0)*t,this.positions[c+2]=(this.positions[c+2]??0)+(this.velocities[c+2]??0)*t;const u=Math.exp(-2*t);this.velocities[c]=(this.velocities[c]??0)*u,this.velocities[c+2]=(this.velocities[c+2]??0)*u,Math.random()<.05&&(this.velocities[c]=(this.velocities[c]??0)+(Math.random()-.5)*.2*Hn,this.velocities[c+2]=(this.velocities[c+2]??0)+(Math.random()-.5)*.2*Hn);let h,d,f;if(l<.15)h=1,d=1,f=1;else if(l<.35){const y=(l-.15)/.2;h=1,d=1-y*.3,f=1-y*.8}else if(l<.6){const y=(l-.35)/.25;h=1,d=.7-y*.3,f=.2-y*.15}else{const y=(l-.6)/.4;h=1-y*.7,d=.4-y*.35,f=.05-y*.04}this.inVacuum&&(h=h*.5+.1,d=d*.3+.1,f=f*.1+.5),this.colors[c]=Math.max(0,h),this.colors[c+1]=Math.max(0,d),this.colors[c+2]=Math.max(0,f);const g=l<.3?.6+l/.3*.4:1-(l-.3)/.7*.8;this.sizes[i]=g*(.5+(this.sizes[i]??.5)*.5)}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.particles.geometry.attributes.size.needsUpdate=!0;const n=this.outerParticles.geometry.attributes.position;for(let i=0;i<Bn;i++){const s=i*3;n.array[s]=this.positions[s]??0,n.array[s+1]=this.positions[s+1]??0,n.array[s+2]=this.positions[s+2]??0}n.needsUpdate=!0}getMesh(){return this.group}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.outerParticles.geometry.dispose(),this.outerParticles.material.dispose(),this.coreTex.dispose(),this.outerTex.dispose()}}const Hi=100,ws=Ce*vi;class T_{particles;positions;velocities;lifetimes;ages;active=!1;constructor(){this.positions=new Float32Array(Hi*3),this.velocities=new Float32Array(Hi*3),this.lifetimes=new Float32Array(Hi),this.ages=new Float32Array(Hi),this.ages.fill(1/0);const t=new Ne;t.setAttribute("position",new Le(this.positions,3));const e=new xo({size:.3*ws,color:13421772,transparent:!0,opacity:.5,blending:Ai,depthWrite:!1,sizeAttenuation:!0});this.particles=new Er(t,e)}start(){this.active=!0}stop(){this.active=!1}update(t){if(this.active)for(let r=0;r<3;r++){let a=-1,l=-1;for(let c=0;c<Hi;c++)this.ages[c]>=this.lifetimes[c]&&this.ages[c]>l&&(l=this.ages[c],a=c);if(a<0)for(let c=0;c<Hi;c++)this.ages[c]>l&&(l=this.ages[c],a=c);a>=0&&(this.positions[a*3]=(Math.random()-.5)*.1*ws,this.positions[a*3+1]=0,this.positions[a*3+2]=(Math.random()-.5)*.1*ws,this.velocities[a*3]=(Math.random()-.5)*.5*ws,this.velocities[a*3+1]=(.5+Math.random()*1)*ws,this.velocities[a*3+2]=(Math.random()-.5)*.5*ws,this.lifetimes[a]=1+Math.random()*1.5,this.ages[a]=0)}const e=this.particles.material;let n=!1;const i=this.velocities,s=this.positions;for(let r=0;r<Hi;r++){if(this.ages[r]>=this.lifetimes[r])continue;n=!0;const a=this.ages[r]+t;if(this.ages[r]=a,a>=this.lifetimes[r])continue;const l=r*3,c=i[l]??0,u=i[l+1]??0,h=i[l+2]??0;s[l]=(s[l]??0)+c*t,s[l+1]=(s[l+1]??0)+u*t,s[l+2]=(s[l+2]??0)+h*t,i[l]=c*.98,i[l+2]=h*.98}e.opacity=this.active?.5:Math.max(0,e.opacity-t*2),this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.visible=n||this.active}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose()}}const Ct=mn*gn;class bn{static SPAWN_OFFSET_M=150;renderer;sceneMgr;system;achievements;missions;state;rocket;rocketGroup;chase;controls;hud;sound;launched=!1;grounded=!0;groundedDir=null;liftoffFrames=0;engineFlame;groundSmoke;rocketShadow=null;reentryGlow=null;rocketQuat=new an;angularVel=new L;ANGULAR_ACCEL=2.5;ANGULAR_DAMPING=3.5;timeWarp=1;parachuteDeployed=!1;deployedChuteMesh=null;chuteDeployProgress=0;crashed=!1;paused=!1;debris=[];warpLevels=[1,3,5,10,100,1e3,1e5,1e6];warpIndex=0;crashOverlay=null;prevVel=[0,0,0];gearDeployed=!1;gearMeshes=[];missionTime=0;sasMode="off";sasTargetQuat=new an;screenShake=0;heatEnergy=0;MAX_HEAT=9999999999;HEAT_RADIATION_RATE=.999;stageInfo=[];lastReentryIntensity=0;prevMach=0;sonicBoomTriggered=!1;sonicBoomTimer=0;countdownTimer=0;countdownActive=!1;countdownCooldown=0;countdownEl=null;lastRefBody=null;impactMarker=null;maxAlt=0;maxSpeed=0;orbitLine=null;exhaustLight=null;followLight=null;cameraMode="chase";freeCamAzimuth=0;freeCamPolar=Math.PI/2;freeCamDist=4;freeCamKeys={left:!1,right:!1,up:!1,down:!1};freeCamDragging=!1;freeCamPrevMouse={x:0,y:0};throttleUpKey=!1;throttleDownKey=!1;hudVisible=!0;lastAltMilestone=0;sonicBoomRing=null;sonicBoomLife=0;reentryGlowMesh=null;rocketBottomY=0;_debugShown=!1;_debugMarker=null;_spawnProtectionTimer=0;_camSnapped=!1;rocketTopY=0;autopilotActive=!1;autopilotPhase="idle";autopilotTarget="";autopilotDeltaV=0;autopilotDirection="prograde";autopilotBurnStartSpeed=0;autopilotStartMissionTime=0;autopilotStartFuel=0;autopilotStartMass=0;autopilotMaxWarpIndex=6;autopilotStatusEl=null;lastCountdownText="";showCountdown(t){if(this.countdownEl||(this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
        position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);
        font-size:120px;font-weight:bold;color:#ff0;z-index:9999;
        text-shadow:0 0 30px rgba(255,136,0,0.8);
        font-family:system-ui,sans-serif;pointer-events:none;
        transition:opacity 0.2s;
      `,document.body.appendChild(this.countdownEl)),t===this.lastCountdownText){this.countdownEl.style.opacity="1";return}this.lastCountdownText=t,this.countdownEl.textContent=t,this.countdownEl.style.opacity="1",this.countdownEl.classList.remove("countdown-pulse"),this.countdownEl.offsetWidth,t==="LIFTOFF!"?(this.countdownEl.style.color="#FF8844",this.countdownEl.style.fontSize="48px"):(this.countdownEl.style.color="#FFFFFF",this.countdownEl.style.fontSize="72px",this.countdownEl.classList.add("countdown-pulse"))}hideCountdown(){this.countdownEl&&(this.countdownEl.style.opacity="0")}get dragMultiplier(){return this.gearDeployed?2.5:1}onCrashAction=null;constructor(t,e,n,i,s,r,a){this.renderer=t,this.sceneMgr=e,this.system=n,this.achievements=s,this.missions=r,this.missions.resetFlight(),this.rocket=i;const l=n.bodyByName("earth"),c=l.radius??6371e3,u=28.5*Math.PI/180,h=-80.5*Math.PI/180,d=[Math.cos(u)*Math.cos(h),Math.sin(u),Math.cos(u)*Math.sin(h)],f=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),g=[d[0]/f,d[1]/f,d[2]/f],y=[l.position[0]+g[0]*c,l.position[1]+g[1]*c,l.position[2]+g[2]*c],m=l.getSurfaceRadiusAt?.(y)??c,p=[l.position[0]+g[0]*(m+bn.SPAWN_OFFSET_M),l.position[1]+g[1]*(m+bn.SPAWN_OFFSET_M),l.position[2]+g[2]*(m+bn.SPAWN_OFFSET_M)];this.state=new d_(i,n,p,[0,0,0]),this.groundedDir=g;const x=new L(p[0]-l.position[0],p[1]-l.position[1],p[2]-l.position[2]).normalize();this.rocketQuat.setFromUnitVectors(new L(0,1,0),x),this.rocketGroup=i.assembly.toMesh(),this.rocketGroup.scale.setScalar(vi),this.rocketGroup.position.set(this.state.position[0]*Ct,this.state.position[1]*Ct,this.state.position[2]*Ct),e.scene.add(this.rocketGroup);const _=new ye(1,8,6),b=new Re({color:65280,transparent:!0,opacity:.3,depthTest:!1,depthWrite:!1,visible:!1});this._debugMarker=new lt(_,b),this._debugMarker.visible=!1,this._debugMarker.position.copy(this.rocketGroup.position),e.scene.add(this._debugMarker),this.rocketGroup.traverse(U=>{if(U instanceof lt&&U.material){const ft=Array.isArray(U.material)?U.material:[U.material];for(const xt of ft)xt.polygonOffset=!0,xt.polygonOffsetFactor=-1,xt.polygonOffsetUnits=-1,xt instanceof se&&(xt.roughness=.45,xt.metalness=.5,xt.emissive=new Rt(0),xt.emissiveIntensity=0,xt.needsUpdate=!0)}});const C=new Pi(.05,.15,16),w=new Re({color:16724787,side:Oe,transparent:!0,opacity:.6,depthWrite:!1});this.impactMarker=new lt(C,w),this.impactMarker.rotation.x=-Math.PI/2,this.impactMarker.visible=!1,this.sceneMgr.scene.add(this.impactMarker);for(const U of n.bodies){const ft=U;ft.mesh&&e.scene.add(ft.mesh),ft.light&&e.scene.add(ft.light)}const S=new Dr(8952268,1.5);S.position.set(-50,20,-30),e.scene.add(S),this.followLight=new Ja(16768460,3,15),this.followLight.position.set(0,2,0),this.rocketGroup.add(this.followLight),this.engineFlame=new S_,this.positionFlameAtNozzle(),this.rocketGroup.add(this.engineFlame.getMesh()),this.exhaustLight=new Ja(16746564,0,20),this.exhaustLight.position.set(0,-1,0),this.rocketGroup.add(this.exhaustLight);const O=new ye(2,16,16),M=new Re({color:16746564,transparent:!0,opacity:0,depthWrite:!1});this.reentryGlowMesh=new lt(O,M),this.reentryGlowMesh.position.set(0,.5,0),this.reentryGlowMesh.visible=!1,this.rocketGroup.add(this.reentryGlowMesh),this.groundSmoke=new T_,this.rocketGroup.add(this.groundSmoke.getMesh());const v=new ml(.3*vi,32),F=new Re({color:0,transparent:!0,opacity:.3,depthWrite:!1});this.rocketShadow=new lt(v,F),this.rocketShadow.rotation.x=-Math.PI/2,this.rocketShadow.position.y=-2,this.rocketGroup.add(this.rocketShadow);const k=new ye(.3,16,12),K=new Re({color:16737792,transparent:!0,opacity:0,blending:fn,depthWrite:!1});this.reentryGlow=new lt(k,K),this.rocketGroup.add(this.reentryGlow);const I=new ye(.5,16,12),G=new Re({color:16729088,transparent:!0,opacity:0,blending:fn,depthWrite:!1}),q=new lt(I,G);q.name="reentry-outer",this.rocketGroup.add(q);const Z=new L().crossVectors(x,new L(0,1,0)).normalize(),J=Math.atan2(Z.z,Z.x);this.chase=new u_(e.camera),this.chase.setAzimuth(J),this.chase.enableOrbit(this.renderer.domElement);const j=-this.rocketBottomY-50*Ct+2,tt=x.x*j,ct=x.y*j,ht=x.z*j;this.chase.initialiseAt(this.state,this.rocketQuat,x,{x:tt,y:ct,z:ht}),this._spawnProtectionTimer=120;const Y=this.state.position[0]*Ct+x.x*j,nt=this.state.position[1]*Ct+x.y*j,yt=this.state.position[2]*Ct+x.z*j;e.camera.position.set(Y+10,nt+3,yt+10),e.camera.lookAt(Y,nt,yt),this.controls=new p_(this.state),("ontouchstart"in window||navigator.maxTouchPoints>0)&&(this.controls.enableTouch(),this.controls.touch&&(this.controls.touch.onSasAction(()=>this.cycleSasMode()),this.controls.touch.onChuteAction(()=>this.toggleParachute()))),this.sound=new __,this.hud=new m_,window.__ellipse={flight:this},this.hud.onAction=U=>{U==="stage"?this.performStage():U==="parachute"?this.toggleParachute():U==="sas"?this.cycleSasMode():U==="map"?(St=!St,St?(Ft.style.display="block",requestAnimationFrame(()=>{Ft.style.opacity="1"}),requestAnimationFrame(st)):(Ft.style.opacity="0",setTimeout(()=>{St||(Ft.style.display="none")},240))):U==="resume"?(this.paused=!1,this.hud.setPaused(!1)):U==="menu"?this.onCrashAction?.("menu"):U==="restart"&&this.onCrashAction?.("restart")},this.hud.mount();let St=!1,Tt=1,Bt=0,zt=0,wt=null;const Ft=document.createElement("div");Ft.style.cssText="position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.95);display:none;opacity:0;transition:opacity 220ms ease-out;";const z=document.createElement("canvas");z.style.cssText="position:absolute;inset:0;width:100%;height:100%;",Ft.appendChild(z),document.body.appendChild(Ft);const be=document.createElement("div");be.style.cssText="position:absolute;top:16px;left:16px;z-index:10;color:#EACD9E;font-family:monospace;font-size:12px;pointer-events:none;",be.innerHTML='<div id="map-zoom">ZOOM: 1x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>',Ft.appendChild(be);const Pt=document.createElement("div");Pt.style.cssText="position:absolute;top:16px;right:16px;z-index:10;background:rgba(8,10,24,0.85);border:1px solid rgba(68,136,204,0.25);border-radius:6px;padding:12px;font-family:monospace;font-size:11px;color:#88ccff;min-width:200px;pointer-events:auto;display:flex;flex-direction:column;gap:6px;",Pt.innerHTML=`
      <div style="color:#c89838;font-size:10px;letter-spacing:0.1em;">TRANSFER PLANNER</div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="color:#889;font-size:10px;">TARGET</span>
        <select id="transfer-target" style="flex:1;background:#06080f;color:#88ccff;border:1px solid rgba(68,136,204,0.3);border-radius:3px;padding:3px 6px;font:400 11px monospace;cursor:pointer;"></select>
      </div>
      <button id="transfer-compute" style="padding:6px;background:rgba(68,136,204,0.15);color:#88ccff;border:1px solid rgba(68,136,204,0.3);border-radius:3px;font:600 10px system-ui;cursor:pointer;letter-spacing:0.05em;">COMPUTE</button>
      <div id="transfer-result" style="font-size:10px;color:#ddd;min-height:40px;line-height:1.5;"></div>
      <button id="transfer-go" style="padding:8px;background:rgba(124,255,178,0.12);color:#7CFFB2;border:1px solid rgba(124,255,178,0.3);border-radius:3px;font:700 11px system-ui;cursor:pointer;letter-spacing:0.08em;display:none;">▶ AUTOPILOT GO</button>
    `,Ft.appendChild(Pt);const Ht=Pt.querySelector("#transfer-target"),Et=Pt.querySelector("#transfer-compute"),de=Pt.querySelector("#transfer-result"),Wt=Pt.querySelector("#transfer-go");let R=null;const T=this.system.bodies.filter(U=>U.name!=="sun"&&U.mass>0&&U.name!=="moon");Ht.innerHTML=T.map(U=>`<option value="${U.name}">${U.name.toUpperCase()}</option>`).join(""),Et.addEventListener("click",()=>{const U=Ht.value,ft=this.system.bodyByName("sun");if(!ft)return;const xt=this.state.position[0]-ft.position[0],P=this.state.position[1]-ft.position[1],kt=this.state.position[2]-ft.position[2],It=ft.velocity??[0,0,0],dt=this.state.velocity[0]-It[0],vt=this.state.velocity[1]-It[1],Ut=this.state.velocity[2]-It[2],Nt=Aa([xt,P,kt],[dt,vt,Ut],this.system,U);Nt?(R=Nt,de.innerHTML=`<div style="color:${Nt.direction==="prograde"?"#44ff88":"#ff8844"};">→ ${Nt.direction.toUpperCase()} burn</div><div style="color:#ddd;margin-top:3px;">Δv: <b>${Nt.deltaV.toFixed(0)}</b> m/s</div><div style="color:#889;margin-top:2px;">~${(Nt.transferTime/86400).toFixed(0)} days</div>`,Xt.show(Nt.summary,4e3),Wt.style.display="block"):(de.textContent="Unable to compute",Xt.show("Unable to compute transfer — get to orbit or open space first",3500),Wt.style.display="none")}),Wt.addEventListener("click",()=>{if(!R){const xt=Ht.value,P=this.system.bodyByName("sun");if(!P){Xt.show("Sun not found",3500);return}const kt=P.velocity??[0,0,0],_t=Aa([this.state.position[0]-P.position[0],this.state.position[1]-P.position[1],this.state.position[2]-P.position[2]],[this.state.velocity[0]-kt[0],this.state.velocity[1]-kt[1],this.state.velocity[2]-kt[2]],this.system,xt);if(!_t){Xt.show("Unable to compute transfer — try another target",3500);return}R=_t,de.innerHTML=`<div style="color:${_t.direction==="prograde"?"#44ff88":"#ff8844"};">→ ${_t.direction.toUpperCase()} burn</div><div style="color:#ddd;margin-top:3px;">Δv: <b>${_t.deltaV.toFixed(0)}</b> m/s</div><div style="color:#889;margin-top:2px;">~${(_t.transferTime/86400).toFixed(0)} days</div>`}const U=this.state.rocket.totalFuelMass();if(U<1){Xt.show("No fuel left for transfer burn!",3500);return}if(wa(this.state.rocket.assembly.roots)<=0){Xt.show("No engines — cannot burn!",3500);return}if(this.grounded){this.autopilotActive=!0,this.autopilotPhase="ascent",this.autopilotTarget=R.targetName,St=!1,Ft.style.opacity="0",setTimeout(()=>{Ft.style.display="none"},240),Xt.show(`AUTOPILOT: launching to space, then burning to ${R.targetName.toUpperCase()}`,4e3),this.showAutopilotStatus();return}this.autopilotActive=!0,this.autopilotPhase="burn",this.autopilotTarget=R.targetName,this.autopilotDeltaV=R.deltaV,this.autopilotDirection=R.direction,this.autopilotBurnStartSpeed=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),this.autopilotStartMissionTime=this.missionTime,this.autopilotStartFuel=U,this.autopilotStartMass=this.state.rocket.totalMass(),St=!1,Ft.style.opacity="0",setTimeout(()=>{Ft.style.display="none"},240),this.sasMode=this.autopilotDirection,this.hud.setSasMode(this.sasMode),Xt.show(`AUTOPILOT: burning ${this.autopilotDirection} to reach ${R.targetName.toUpperCase()}`,4e3),this.showAutopilotStatus()}),z.addEventListener("wheel",U=>{Tt*=U.deltaY>0?.9:1.1,Tt=Math.max(.05,Math.min(100,Tt))}),z.addEventListener("mousedown",U=>{wt={x:U.clientX,y:U.clientY}}),window.addEventListener("mouseup",()=>{wt=null}),window.addEventListener("mousemove",U=>{wt&&(Bt+=U.clientX-wt.x,zt+=U.clientY-wt.y,wt={x:U.clientX,y:U.clientY})}),z.addEventListener("touchstart",U=>{U.touches.length===1&&(wt={x:U.touches[0].clientX,y:U.touches[0].clientY})}),z.addEventListener("touchmove",U=>{!wt||U.touches.length!==1||(Bt+=U.touches[0].clientX-wt.x,zt+=U.touches[0].clientY-wt.y,wt={x:U.touches[0].clientX,y:U.touches[0].clientY})}),z.addEventListener("touchend",()=>{wt=null}),z.addEventListener("dblclick",U=>{U.preventDefault();const ft=z.getBoundingClientRect(),xt=U.clientX-ft.left,P=U.clientY-ft.top,kt=z.clientWidth,_t=z.clientHeight,It=kt/2+Bt,dt=_t/2+zt;let vt=1;for(const Lt of this.system.bodies){const at=(Lt.position[0]-this.state.position[0])*Ct,D=(Lt.position[2]-this.state.position[2])*Ct,ut=Math.sqrt(at*at+D*D);ut>vt&&(vt=ut)}const Ut=Math.min(kt,_t)*.4/vt*Tt;let Nt=null,ae=25;for(const Lt of this.system.bodies){const at=It+(Lt.position[0]-this.state.position[0])*Ut,D=dt-(Lt.position[2]-this.state.position[2])*Ut,ut=Math.sqrt((xt-at)**2+(P-D)**2);ut<ae&&(ae=ut,Nt=Lt.name)}if(Nt){const Lt=this.system.bodyByName(Nt);if(Lt){const at=Nt==="earth"?20:Nt==="moon"?50:3;Bt=-(Lt.position[0]-this.state.position[0])*Ut,zt=(Lt.position[2]-this.state.position[2])*Ut,Tt=at,Xt.show(`${Nt}: ${(Lt.mass??0).toExponential(2)}kg R=${(Lt.radius??0)/1e3}km`)}}});let V=0;const st=()=>{if(!St)return;if(V++,V%5!==0){requestAnimationFrame(st);return}const U=window.devicePixelRatio||1,ft=z.clientWidth,xt=z.clientHeight;z.width=ft*U,z.height=xt*U;const P=z.getContext("2d");P.setTransform(U,0,0,U,0,0),P.fillStyle="#060814",P.fillRect(0,0,ft,xt);const kt=ft/2+Bt,_t=xt/2+zt;let It=1;for(const Gt of this.system.bodies){const Me=(Gt.position[0]-this.state.position[0])*Ct,ne=(Gt.position[2]-this.state.position[2])*Ct,E=Math.sqrt(Me*Me+ne*ne);E>It&&(It=E)}const dt=Math.min(ft,xt)*.4/It*Tt,vt={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",mercury:"#c0c0c0",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",pluto:"#ddccbb",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",phobos:"#bb9988",deimos:"#887766"},Ut={sun:12,earth:7,moon:3,venus:5,mars:5,mercury:3,jupiter:10,saturn:9,uranus:6,neptune:5,pluto:2},Nt=this.system.bodyByName("sun")?.position;if(Nt)for(const Gt of this.system.bodies){if(Gt.name==="sun"||Gt.name==="moon")continue;const Me=[Gt.position[0]-Nt[0],Gt.position[1]-Nt[1],Gt.position[2]-Nt[2]];if(Gt.velocity){const ne=ro(Me,Gt.velocity,this.system.bodyByName("sun").mass,5e14,180);if(ne.points.length>10){P.beginPath(),P.strokeStyle=vt[Gt.name]+"30",P.lineWidth=1,P.setLineDash([3,6]),P.lineDashOffset=-(V*.5)%9;const E=kt+(ne.points[0][0]+Nt[0])*dt,H=_t-(ne.points[0][1]+Nt[2])*dt;P.moveTo(E,H);for(let X=1;X<ne.points.length;X+=2){const B=kt+(ne.points[X][0]+Nt[0])*dt,A=_t-(ne.points[X][1]+Nt[2])*dt;P.lineTo(B,A)}P.stroke(),P.setLineDash([]),P.lineDashOffset=0}}}for(const Gt of this.system.bodies){const Me=kt+(Gt.position[0]-this.state.position[0])*dt,ne=_t-(Gt.position[2]-this.state.position[2])*dt,E=Ut[Gt.name]||3;P.beginPath(),P.arc(Me,ne,E,0,Math.PI*2),P.fillStyle=vt[Gt.name]||"#888",P.fill(),P.font="bold 10px monospace",P.fillStyle="#F4F5F2",P.fillText(Gt.name.toUpperCase(),Me+E+5,ne+4)}const ae=this.system.bodyByName("sun");for(const Gt of this.system.bodies){if(Gt.name==="sun"||Gt.mass<=0||!ae||Gt.name===ae.name)continue;const Me=(Gt.position[0]-ae.position[0])*Ct,ne=(Gt.position[2]-ae.position[2])*Ct,E=Math.sqrt(Me*Me+ne*ne);if(E<1)continue;const H=E*Math.pow(Gt.mass/ae.mass,.4),X=kt+(Gt.position[0]-this.state.position[0])*dt,B=_t-(Gt.position[2]-this.state.position[2])*dt;P.beginPath(),P.arc(X,B,H*dt,0,Math.PI*2),P.setLineDash([4,4]),P.strokeStyle=(vt[Gt.name]||"#888")+"44",P.lineWidth=.8,P.stroke(),P.setLineDash([])}const Lt=80,at=3,D=ft-Lt-15,ut=xt-30,Ot=It*2/Math.min(ft,xt)*Tt*Lt,Dt=Math.pow(10,Math.floor(Math.log10(Ot))),ue=Lt*(Dt/Ot);P.fillStyle="rgba(244,245,242,0.4)",P.fillRect(D,ut,ue,at),P.strokeStyle="rgba(244,245,242,0.5)",P.lineWidth=.5,P.strokeRect(D,ut,ue,at),P.fillStyle="rgba(244,245,242,0.4)",P.font="8px monospace",P.fillText(`${Dt>=1e3?(Dt/1e3).toFixed(0)+"Mkm":Dt.toFixed(0)+"km"}`,D,ut-2);const qt=30,fe=xt-35,_e=12;P.strokeStyle="rgba(244,245,242,0.25)",P.lineWidth=1,P.beginPath(),P.arc(qt,fe,_e,0,Math.PI*2),P.stroke(),P.beginPath(),P.moveTo(qt,fe-_e-5),P.lineTo(qt,fe+_e+5),P.moveTo(qt-_e-5,fe),P.lineTo(qt+_e+5,fe),P.stroke(),P.fillStyle="rgba(244,245,242,0.4)",P.font="bold 8px monospace",P.fillText("N",qt-3,fe-_e-7),P.fillStyle="rgba(244,245,242,0.2)",P.fillText("S",qt-3,fe+_e+12),P.fillText("W",qt-_e-12,fe+3),P.fillText("E",qt+_e+7,fe+3);const Qt=kt,pe=_t,$e=this.state.velocity[0]||0,kn=this.state.velocity[2]||0,Rn=Math.sqrt($e*$e+kn*kn),Ie=Rn>.1?Math.atan2(kn,$e):0;if(P.save(),P.translate(Qt,pe),P.rotate(-Ie),P.beginPath(),P.moveTo(8,0),P.lineTo(0,-4),P.lineTo(-5,0),P.lineTo(0,4),P.closePath(),P.fillStyle="#EACD9E",P.fill(),P.strokeStyle="#EACD9E",P.lineWidth=1.5,P.stroke(),P.restore(),Rn>.1){const Gt=Math.min(30,10+Rn*dt*2);P.beginPath(),P.moveTo(Qt,pe),P.lineTo(Qt+Math.cos(Ie)*Gt,pe-Math.sin(Ie)*Gt),P.strokeStyle="rgba(234,205,158,0.6)",P.lineWidth=1.5,P.stroke(),P.beginPath(),P.moveTo(Qt+Math.cos(Ie)*Gt,pe-Math.sin(Ie)*Gt),P.lineTo(Qt+Math.cos(Ie+.4)*(Gt-5),pe-Math.sin(Ie+.4)*(Gt-5)),P.lineTo(Qt+Math.cos(Ie-.4)*(Gt-5),pe-Math.sin(Ie-.4)*(Gt-5)),P.closePath(),P.fillStyle="rgba(234,205,158,0.6)",P.fill()}const Fe=Ae(this.state.position,this.system),On=[(this.state.position[0]-Fe.position[0])*Ct,(this.state.position[1]-Fe.position[1])*Ct,(this.state.position[2]-Fe.position[2])*Ct],Yn=this.system.bodyByName("sun");if(Yn){const Gt=(Yn.position[0]-this.state.position[0])*dt,Me=(Yn.position[2]-this.state.position[2])*dt,ne=Math.sqrt(Gt*Gt+Me*Me);ne>1&&(P.beginPath(),P.moveTo(Qt+Gt/ne*12,pe-Me/ne*12),P.lineTo(Qt+Gt/ne*Math.min(ne,60),pe-Me/ne*Math.min(ne,60)),P.strokeStyle="rgba(255,220,68,0.15)",P.lineWidth=2,P.setLineDash([3,6]),P.stroke(),P.setLineDash([]),P.beginPath(),P.arc(Qt+Gt/ne*Math.min(ne,60),pe-Me/ne*Math.min(ne,60),3,0,Math.PI*2),P.fillStyle="rgba(255,220,68,0.3)",P.fill())}const Zt=ro(On,this.state.velocity,Fe.mass,5e14,360);if(Zt.points.length>1){const Gt=.12+.06*(.5+.5*Math.sin(V*.18));P.beginPath(),P.strokeStyle=Zt.bound?`rgba(68,136,204,${Gt})`:`rgba(221,170,68,${Gt})`,P.lineWidth=8;const Me=kt+Zt.points[0][0]*dt,ne=_t-Zt.points[0][1]*dt;P.moveTo(Me,ne);for(let B=1;B<Zt.points.length;B++){const A=kt+Zt.points[B][0]*dt,N=_t-Zt.points[B][1]*dt;P.lineTo(A,N)}P.stroke();const E=P.createLinearGradient(Me,ne,kt+Zt.points[Zt.points.length-1][0]*dt,_t-Zt.points[Zt.points.length-1][1]*dt),H=Zt.bound?"rgba(68,136,204,0.9)":"rgba(221,170,68,0.9)",X=Zt.bound?"rgba(68,136,204,0.2)":"rgba(221,170,68,0.2)";E.addColorStop(0,H),E.addColorStop(1,X),P.beginPath(),P.strokeStyle=E,P.lineWidth=2.5,P.moveTo(Me,ne);for(let B=1;B<Zt.points.length;B++){const A=kt+Zt.points[B][0]*dt,N=_t-Zt.points[B][1]*dt;P.lineTo(A,N)}if(P.stroke(),Zt.points.length>4){const B=Zt.points[Zt.points.length-1],A=Zt.points[Zt.points.length-2],N=B[0]-A[0],W=B[1]-A[1],$=Math.sqrt(N*N+W*W)||1,Q=kt+B[0]*dt,it=_t-B[1]*dt,rt=8;P.beginPath(),P.moveTo(Q,it),P.lineTo(Q-N/$*rt+W/$*rt*.4,it+W/$*rt+N/$*rt*.4),P.lineTo(Q-N/$*rt-W/$*rt*.4,it+W/$*rt-N/$*rt*.4),P.closePath(),P.fillStyle=Zt.bound?"rgba(68,136,204,0.6)":"rgba(221,170,68,0.6)",P.fill()}if(Zt.bound&&isFinite(Zt.apoapsis)&&isFinite(Zt.periapsis)){const B=kt+Zt.apoapsis*dt,A=kt+Zt.periapsis*dt;P.beginPath(),P.arc(B,_t,4,0,Math.PI*2),P.fillStyle="#FF8844",P.fill(),P.font="bold 9px monospace",P.fillStyle="#FF8844",P.fillText("Ap",B+6,_t+3),P.beginPath(),P.arc(A,_t,4,0,Math.PI*2),P.fillStyle="#44DD88",P.fill(),P.fillStyle="#44DD88",P.fillText("Pe",A+6,_t+3)}if(Zt.points.length>2){const B=Zt.points[Zt.points.length-1],A=kt+B[0]*dt,N=_t-B[1]*dt,W=Fe.position[0]*Ct+B[0],$=Fe.position[2]*Ct+B[1];let Q="",it=20;for(const rt of this.system.bodies){if(rt.name===Fe.name||rt.mass<=0)continue;const bt=Math.sqrt((W-rt.position[0]*Ct)**2+($-rt.position[2]*Ct)**2);bt<it&&(it=bt,Q=rt.name)}Q&&(P.font="bold 10px monospace",P.fillStyle="#EACD9E",P.fillText("→ "+Q.toUpperCase(),A+8,N-4))}if(Zt.points.length>2){const B=Zt.points[Zt.points.length-1],A=Fe.position[0]*Ct+B[0],N=Fe.position[2]*Ct+B[1];let W="",$=30;for(const Q of this.system.bodies){if(Q.name===Fe.name||Q.mass<=0)continue;const it=Q.position[0]*Ct,rt=Q.position[2]*Ct,bt=Math.sqrt((A-it)**2+(N-rt)**2);bt<$&&($=bt,W=Q.name)}if(W){const Q=kt+B[0]*dt,it=_t-B[1]*dt;P.font="bold 10px monospace",P.fillStyle="#EACD9E",P.fillText("→ "+W.toUpperCase(),Q+10,it-5)}}}P.fillStyle="rgba(244,245,242,0.3)",P.font="9px sans-serif",P.fillText(`${(It/1e3).toFixed(0)} km | Zoom: ${Tt.toFixed(1)}x`,10,xt-10),requestAnimationFrame(st)};window.addEventListener("keydown",U=>{(U.key==="m"||U.key==="Tab")&&(St=!St,St?(Ft.style.display="block",requestAnimationFrame(()=>{Ft.style.opacity="1"}),St&&requestAnimationFrame(st)):(Ft.style.opacity="0",setTimeout(()=>{St||(Ft.style.display="none")},240)),U.preventDefault())}),window.addEventListener("keydown",U=>{if(U.key==="q"||U.key==="["){if(this.paused)return;this.warpIndex=Math.max(0,this.warpIndex-1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),U.preventDefault()}else if(U.key==="e"||U.key==="]"){if(this.paused)return;this.warpIndex=Math.min(this.warpLevels.length-1,this.warpIndex+1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),U.preventDefault()}else if(U.key==="p"){if(i.assembly.roots.some(xt=>xt.part.kind==="parachute")||i.assembly.roots.some(xt=>xt.children.some(P=>P.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const xt={radius:.6*Ce,height:1*Ce};this.deployedChuteMesh=el(xt),this.deployedChuteMesh.scale.setScalar(.001),this.chuteDeployProgress=0,this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null,this.chuteDeployProgress=0);Xt.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}U.preventDefault()}else U.key==="g"?(this.toggleGear(),U.preventDefault()):U.key==="t"?(this.cycleSasMode(),U.preventDefault()):U.key==="f"?(this.chase.reset(),Xt.show("Camera view reset"),U.preventDefault()):U.key==="c"&&!U.ctrlKey&&!U.metaKey?(this.cameraMode=this.cameraMode==="chase"?"free":"chase",this.hud.setFreeCamera(this.cameraMode==="free"),Xt.show(this.cameraMode==="free"?"Free camera":"Chase camera"),U.preventDefault()):U.key==="F1"&&(U.preventDefault(),this.hudVisible=!this.hudVisible,this.hud.setVisible(this.hudVisible),Xt.show(this.hudVisible?"HUD shown":"HUD hidden"));U.key==="ArrowUp"&&(this.throttleUpKey=!0,U.preventDefault()),U.key==="ArrowDown"&&(this.throttleDownKey=!0,U.preventDefault()),this.cameraMode==="free"&&(U.key==="ArrowUp"&&(this.freeCamKeys.up=!0,U.preventDefault()),U.key==="ArrowDown"&&(this.freeCamKeys.down=!0,U.preventDefault()),U.key==="ArrowLeft"&&(this.freeCamKeys.left=!0,U.preventDefault()),U.key==="ArrowRight"&&(this.freeCamKeys.right=!0,U.preventDefault()))}),window.addEventListener("keyup",U=>{U.key==="ArrowUp"&&(this.throttleUpKey=!1,this.freeCamKeys.up=!1),U.key==="ArrowDown"&&(this.throttleDownKey=!1,this.freeCamKeys.down=!1),U.key==="ArrowLeft"&&(this.freeCamKeys.left=!1),U.key==="ArrowRight"&&(this.freeCamKeys.right=!1)});const et=this.renderer.domElement,ot=(U,ft)=>{this.cameraMode==="free"&&(this.freeCamDragging=!0,this.freeCamPrevMouse={x:U,y:ft})},At=(U,ft)=>{if(!this.freeCamDragging||this.cameraMode!=="free")return;const xt=U-this.freeCamPrevMouse.x,P=ft-this.freeCamPrevMouse.y;this.freeCamAzimuth-=xt*.005,this.freeCamPolar=Math.max(.05,Math.min(Math.PI-.05,this.freeCamPolar+P*.005)),this.freeCamPrevMouse={x:U,y:ft}},mt=()=>{this.freeCamDragging=!1};et.addEventListener("mousedown",U=>ot(U.clientX,U.clientY)),window.addEventListener("mousemove",U=>At(U.clientX,U.clientY)),window.addEventListener("mouseup",mt),et.addEventListener("touchstart",U=>{U.touches.length===1&&U.touches[0]&&ot(U.touches[0].clientX,U.touches[0].clientY)},{passive:!0}),et.addEventListener("touchmove",U=>{U.touches.length===1&&U.touches[0]&&At(U.touches[0].clientX,U.touches[0].clientY)},{passive:!0}),et.addEventListener("touchend",mt),et.addEventListener("wheel",U=>{this.cameraMode==="free"&&(U.preventDefault(),this.freeCamDist*=U.deltaY>0?1.1:.9,this.freeCamDist=Math.max(.5,Math.min(500,this.freeCamDist)))},{passive:!1}),this.achievements.unlock("first_launch"),a?(this.applyFlightSave(a),Xt.show("Flight resumed where you left off. ↑/↓ throttle, W/S pitch, A/D yaw, Space stage.")):Xt.show("You are at the launchpad. ↑/↓ throttle, W/S pitch, A/D yaw, Space stage, Esc pause.")}applyFlightSave(t){this.state.position=[...t.position],this.state.velocity=[...t.velocity],this.state.throttle=t.throttle,this.missionTime=t.missionTime,this.rocketQuat.set(t.quat[0],t.quat[1],t.quat[2],t.quat[3]),this.rocketGroup.quaternion.copy(this.rocketQuat),this.launched=t.launched,this.grounded=t.grounded,this.groundedDir=t.groundedDir?[...t.groundedDir]:null,this._spawnProtectionTimer=0;const e=this.rocket.assembly.roots;for(let n=0;n<e.length&&n<t.fuel.length;n++){const i=this.rocket.fuelTanks.find(s=>s.node===e[n]);i&&(i.remaining=t.fuel[n])}this.rocketGroup.position.set(this.state.position[0]*Ct,this.state.position[1]*Ct,this.state.position[2]*Ct)}atmosphereScale(t){switch(t){case"earth":return 1;case"venus":return 1.5;case"mars":return .05;default:return 0}}relVelocity(){const e=Ae(this.state.position,this.system).velocity??[0,0,0];return[this.state.velocity[0]-e[0],this.state.velocity[1]-e[1],this.state.velocity[2]-e[2]]}relSpeed(){const t=this.relVelocity();return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}sanitize(t){isFinite(t[0])||(t[0]=0),isFinite(t[1])||(t[1]=0),isFinite(t[2])||(t[2]=0)}countStages(t){let e=0;for(const n of t)n.part.kind==="decoupler"&&e++,e+=this.countStages(n.children);return e}computeStageData(){const t=this.rocket.assembly.roots;if(t.length===0)return[];const e=[...t].sort((a,l)=>l.position[1]-a.position[1]),n=[];for(let a=0;a<e.length;a++)e[a].part.kind==="decoupler"&&n.push(a);const i=[];let s=0;for(let a=0;a<=n.length;a++){const l=a<n.length?n[a]:e.length,c=[];for(let u=s;u<l;u++)c.push(e[u]);if(c.length>0){const u=this.isChunkSpent(c);i.push({parts:c,active:!u,spent:u})}s=l+1}let r=0;for(let a=0;a<i.length;a++){if(!i[a].spent){r=a;break}r=a}return i.map((a,l)=>{let c=0,u=0;for(const y of a.parts)if(c+=y.part.mass,y.part.fuelCapacity){const m=this.rocket.fuelTanks.find(p=>p.node===y);u+=m?m.remaining:y.part.fuelCapacity}const h=a.parts.filter(y=>y.part.kind==="engine").length,d=a.parts.filter(y=>y.part.fuelCapacity).length,g=h>0?`${h}E ${d}T`:a.parts.length===1?a.parts[0].part.name||"C":`${a.parts.length}P`;return{label:`S${l+1}: ${g}`,fuelMass:u,dryMass:c,active:l===r,spent:a.spent}})}isChunkSpent(t){if(!t.some(n=>n.part.kind==="engine"))return!1;for(const n of t)if(n.part.fuelCapacity){const i=this.rocket.fuelTanks.find(s=>s.node===n);if(i&&i.remaining>.01)return!1}return!0}update(t){try{this.updateInner(t)}catch(e){Xt.show(`ERROR: ${e.message||e}`),console.error("FlightScene.update error:",e)}}updateInner(t){const e=t;if(this._spawnProtectionTimer>0&&(this._spawnProtectionTimer-=1),this.controls.consumePauseToggle()&&(this.paused=!this.paused,this.hud.setPaused(this.paused),this.paused&&this.sound.stopEngine()),this.paused){this.system.propagate(0,va);for(const A of this.system.bodies)A.syncMesh?.();return}if(this.crashed){this.system.propagate(t*this.timeWarp,va);for(const A of this.system.bodies)A.syncMesh?.();this.updateExplosion(e);return}this.missionTime+=e,this.missionTime=Math.min(this.missionTime,99999);{const A=Ae(this.state.position,this.system),N=this.state.position[0]-A.position[0],W=this.state.position[1]-A.position[1],$=this.state.position[2]-A.position[2],Q=Math.sqrt(N*N+W*W+$*$)||1,it=A.radius??0,rt=Q-it,bt=3;it>0&&rt<7e4&&this.warpIndex>bt&&(this.warpIndex=bt,this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),Xt.show("Time warp limited in atmosphere",1800))}t*=this.timeWarp,(!isFinite(t)||t<=0)&&(t=1/60),this.controls.update(e),this.hud.throttleUpBtn&&(this.state.throttle=Math.min(1,this.state.throttle+e*.5)),this.hud.throttleDownBtn&&(this.state.throttle=Math.max(0,this.state.throttle-e*.3)),this.throttleUpKey&&(this.state.throttle=Math.min(1,this.state.throttle+e*.5)),this.throttleDownKey&&(this.state.throttle=Math.max(0,this.state.throttle-e*.3)),this.controls.getZoomIn()&&this.chase.zoom(.92),this.controls.getZoomOut()&&this.chase.zoom(1.08),this.updateAutopilot(e);const n=this.timeWarp>1;if(n&&this.warpIndex>3&&!(this.autopilotActive&&(this.autopilotPhase==="burn"||this.autopilotPhase==="ascent"))&&(this.state.throttle>0&&Xt.show("Throttle locked above 10x warp — press [ to reduce warp",2500),this.state.throttle=0),!n&&this.controls.getStageRequested()&&this.performStage(),(!n||this.autopilotActive&&this.autopilotPhase==="ascent")&&!this.grounded&&this.state.throttle>0){const A=this.findLowestDecoupler(this.rocket.assembly.roots);if(A){const N=A.position[1],W=this.rocket.fuelTanks.filter(it=>it.node.position[1]<N),$=W.reduce((it,rt)=>it+rt.remaining,0),Q=this.state.rocket.totalFuelMass();(W.length>0&&$<=.01&&Q>.1||Q<=.1)&&this.performStage()}}const i=this.state.throttle>0,s=i&&this.state.rocket.totalFuelMass()>.01,r=n?0:this.controls.getPitch(),a=n?0:this.controls.getYaw();n||this.controls.getRoll();const l=new L(0,1,0).applyQuaternion(this.rocketQuat);new L(1,0,0).applyQuaternion(this.rocketQuat);const c=Ae(this.state.position,this.system),u=this.state.position[0]-c.position[0],h=this.state.position[1]-c.position[1],d=this.state.position[2]-c.position[2],f=Math.sqrt(u*u+h*h+d*d)||1,g=new L(u/f,h/f,d/f),y=new L().crossVectors(l,g);y.length()<.001?(y.set(-g.z,0,g.x).normalize(),y.length()<.001&&y.set(1,0,0)):y.normalize();const p=this.ANGULAR_ACCEL*e,x=new an().setFromAxisAngle(g,a*p),_=new an().setFromAxisAngle(y,r*p*1.2);if(this.rocketQuat.premultiply(x).premultiply(_),this.sasMode!=="off"&&!n){if(this.sasMode==="prograde"||this.sasMode==="retrograde"){const W=this.relVelocity(),$=Math.sqrt(W[0]**2+W[1]**2+W[2]**2);if($>.1){let Q=new L(W[0]/$,W[1]/$,W[2]/$);this.sasMode==="retrograde"&&Q.negate(),this.sasTargetQuat.setFromUnitVectors(new L(0,1,0),Q)}}const A=new an().copy(this.sasTargetQuat).invert().multiply(this.rocketQuat),N=2*Math.acos(Math.abs(A.w));if(N>.001){const W=new L(A.x,A.y,A.z).normalize();this.angularVel.x-=W.x*N*3*e,this.angularVel.y-=W.y*N*3*e,this.angularVel.z-=W.z*N*3*e}this.angularVel.multiplyScalar(Math.exp(-5*e))}const b=this.angularVel.length();if(b>1e-6){const A=new an().setFromAxisAngle(this.angularVel.clone().divideScalar(b),b*e);this.rocketQuat.premultiply(A)}this.rocketQuat.normalize(),this.rocketGroup.quaternion.copy(this.rocketQuat);const C=l,w=C.x,S=C.y,O=C.z;let M=!1;if(this.countdownCooldown>0&&(this.countdownCooldown-=e),i&&this.grounded&&(!this.countdownActive&&!this.launched&&this.countdownCooldown<=0&&(this.countdownActive=!0,this.countdownTimer=0,this.showCountdown("3")),this.countdownActive)){if(this.countdownTimer+=e,this.countdownTimer>=1&&this.countdownTimer<2)this.showCountdown("2");else if(this.countdownTimer>=2&&this.countdownTimer<3)this.showCountdown("1");else if(this.countdownTimer>=3){this.countdownActive=!1,this.launched=!0;const A=wa(this.state.rocket.assembly.roots),N=Ae(this.state.position,this.system),W=this.state.position[0]-N.position[0],$=this.state.position[1]-N.position[1],Q=this.state.position[2]-N.position[2],it=Math.sqrt(W*W+$*$+Q*Q)||1,rt=Ti*N.mass/(it*it);if(A>0&&rt>0)if(this.state.rocket.totalFuelMass()<=.01)Xt.show("No fuel — cannot launch!"),this.launched=!1,this.countdownTimer=0,this.countdownCooldown=5;else{const ce=A*1e3*this.state.throttle/(this.state.rocket.totalMass()*rt);ce>=1?M=!0:(Xt.show(`TWR ${ce.toFixed(2)} — need more throttle!`),this.launched=!1,this.countdownTimer=0,this.countdownCooldown=5)}M&&(this.showCountdown("LIFTOFF!"),setTimeout(()=>this.hideCountdown(),1500))}}if(s&&(!this.grounded||M)&&(g_(this.state,t,[w,S,O]),this.sanitize(this.state.velocity)),s&&M&&this.grounded){this.grounded=!1,this.groundedDir=null,this.liftoffFrames=5,this.launched=!0,this._camSnapped=!1;const N=Ae(this.state.position,this.system).velocity??[0,0,0];this.state.velocity[0]+=N[0],this.state.velocity[1]+=N[1],this.state.velocity[2]+=N[2],this.achievements.unlock("reach_space"),this.sound.startEngine(),this.screenShake=.8}if(s){this.sound.setThrottle(this.state.throttle),this.engineFlame.setThrottle(this.state.throttle),this.engineFlame.start();const A=Ae(this.state.position,this.system),N=this.state.position[0]-A.position[0],W=this.state.position[1]-A.position[1],$=this.state.position[2]-A.position[2],Q=Math.sqrt(N*N+W*W+$*$)||1,it=A.getSurfaceRadiusAt?.(this.state.position)??A.radius??6371e3;this.engineFlame.setVacuum(Q-it>5e4)}else this.sound.setThrottle(0),this.engineFlame.stop();if(this.engineFlame.update(e),this.exhaustLight){const A=1+(Math.random()-.5)*.08;this.exhaustLight.intensity=this.state.throttle*3*A,this.exhaustLight.color.setHSL(.08-this.state.throttle*.05,1,.5+this.state.throttle*.3)}s&&this.grounded?this.groundSmoke.start():this.groundSmoke.stop(),this.groundSmoke.update(e),this.grounded||(this.state.position[0]+=this.state.velocity[0]*t,this.state.position[1]+=this.state.velocity[1]*t,this.state.position[2]+=this.state.velocity[2]*t);let v=null,F=1/0;const k=Ae(this.state.position,this.system),K=k.name;this.lastRefBody&&this.lastRefBody!==K&&Xt.show(`Entering ${K.toUpperCase()} SOI`),this.lastRefBody=K;const I=k.position[0]-this.state.position[0],G=k.position[1]-this.state.position[1],q=k.position[2]-this.state.position[2];F=Math.sqrt(I*I+G*G+q*q),v=k;const Z=this.relSpeed(),J=r!==0||a!==0;if(!this.grounded&&!n&&!J&&Z>5&&v&&v.radius){const A=F-v.radius,N=this.atmosphereScale(v.name);if(N>0&&A>0&&A<7e4){const W=Math.exp(-A/8500)*N,$=this.relVelocity(),Q=new L($[0],$[1],$[2]).normalize(),it=new L(0,1,0).applyQuaternion(this.rocketQuat);if(Math.abs(it.dot(Q))<.99){const bt=new an().setFromUnitVectors(it,Q);this.rocketQuat.slerp(bt,W*.04*e),this.rocketQuat.normalize()}}}if(!this.grounded&&v&&v.radius){const A=F-v.radius;if(A>0&&A<12e4&&Z>2e3){const N=Math.max(0,1-A/12e4)*Math.min(1,Z/8e3);if(this.reentryGlow){this.reentryGlow.material.color.setHSL(.05,1,.7*N),this.reentryGlow.material.opacity=.4*N,this.reentryGlow.scale.setScalar(1+N*2);const W=this.rocketGroup.getObjectByName("reentry-outer");W&&(W.material.color.setHSL(.03,1,.4*N),W.material.opacity=.2*N,W.scale.setScalar(1+N*4))}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const N=this.rocketGroup.getObjectByName("reentry-outer");N&&(N.material.opacity=0)}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const A=this.rocketGroup.getObjectByName("reentry-outer");A&&(A.material.opacity=0)}if(this.liftoffFrames>0&&this.liftoffFrames--,this.grounded)this.state.velocity=[0,0,0];else{const A=I,N=G,W=q,$=F,Q=$*$;if($>1&&Q>0){const le=Ti*k.mass/Q*t;this.state.velocity[0]+=le*A/$,this.state.velocity[1]+=le*N/$,this.state.velocity[2]+=le*W/$}this.sanitize(this.state.velocity);const it=this.relSpeed(),rt=this.state.rocket.totalMass();let bt=rt*.001+.2;if(this.parachuteDeployed?bt=Math.max(50,rt*6):this.gearDeployed&&(bt*=2.5),v&&v.radius&&it>.05&&it<1e6){const $t=F-v.radius,le=this.atmosphereScale(v.name);if(le>0&&$t>0&&$t<3e5){const Yt=1.225*Math.exp(-$t/8500)*le,Cn=.5*Yt*it*it*bt/rt*t,$n=Math.max(.1,1-Cn/it),dn=this.relVelocity();this.state.velocity[0]=dn[0]*$n+(this.state.velocity[0]-dn[0]),this.state.velocity[1]=dn[1]*$n+(this.state.velocity[1]-dn[1]),this.state.velocity[2]=dn[2]*$n+(this.state.velocity[2]-dn[2]),this.sanitize(this.state.velocity);const un=Math.max(0,it/2e3*(Yt/1.225)-.1);if(un>.05&&this.reentryGlowMesh){this.reentryGlowMesh.visible=!0;const We=1+(Math.random()-.5)*.06*un;this.reentryGlowMesh.scale.setScalar((1+un*2)*We),this.reentryGlowMesh.material.opacity=Math.min(1,un*(.92+Math.random()*.08));const qe=un>.8?16777215:un>.5?16763972:16746564;this.reentryGlowMesh.material.color.setHex(qe)}else this.reentryGlowMesh&&(this.reentryGlowMesh.visible=!1);if(this.lastReentryIntensity=un,un>.1)this.rocketGroup.traverse(We=>{const qe=We;if(!qe.isMesh)return;const te=qe.material;if(!te||!te.emissive)return;const je=Math.min(1,this.heatEnergy/3e5),Nr=je*.9,So=je*je*.5,Od=je*je*je*.15;te.emissive.setRGB(Nr,So,Od),te.emissiveIntensity=je*1.5});else if(this.heatEnergy>0){const We=Math.min(1,this.heatEnergy/3e5);this.rocketGroup.traverse(qe=>{const te=qe;if(!te.isMesh)return;const je=te.material;!je||!je.emissive||(je.emissive.setRGB(We*.4,0,0),je.emissiveIntensity=We*.5)})}else this.heatEnergy<1&&this.rocketGroup.traverse(We=>{const qe=We;if(!qe.isMesh)return;const te=qe.material;!te||!te.emissive||te.emissiveIntensity>0&&(te.emissive.setRGB(0,0,0),te.emissiveIntensity=0)});const De=.5*Yt*it*it*it*1e-6/4;this.heatEnergy+=De*e}}this.reentryGlowMesh&&(v&&v.radius&&F-v.radius<3e5||(this.reentryGlowMesh.visible=!1)),this.grounded||(this.heatEnergy>0&&(this.heatEnergy*=this.HEAT_RADIATION_RATE,this.heatEnergy<1&&(this.heatEnergy=0)),this.heatEnergy>this.MAX_HEAT&&(this.crashed=!0,Xt.show(`OVERHEATED! Ship disintegrated at ${this.heatEnergy.toFixed(0)}J`)));const ce=v?v.radius??0:0,oe=v?v.getSurfaceRadiusAt?.(this.state.position)??ce:0;if(v&&ce>0&&isFinite(F)&&this._spawnProtectionTimer<=0){const $t=this.state.position[0]-v.position[0],le=this.state.position[1]-v.position[1],Yt=this.state.position[2]-v.position[2],Mt=Math.sqrt($t*$t+le*le+Yt*Yt),Ke=(this.state.velocity[0]*$t+this.state.velocity[1]*le+this.state.velocity[2]*Yt)/Mt;if(Mt<oe)this.doCrash(`Impact on ${v.name}`,v,$t,le,Yt,Mt,oe);else if(Mt<oe+200&&Mt>.001&&this.liftoffFrames<=0){const Se=new L($t/Mt,le/Mt,Yt/Mt),Cn=new L(0,1,0).applyQuaternion(this.rocketQuat),$n=Math.acos(Math.min(1,Math.abs(Cn.dot(Se))))*180/Math.PI,dn=this.hasLandingLegs(),un=this.parachuteDeployed?15:20,De=this.parachuteDeployed?8:5,We=dn?60:45;if(isFinite(Ke)&&Math.abs(Ke)>un)this.doCrash(`Too fast! (${Math.abs(Ke).toFixed(0)} m/s) on ${v.name}`,v,$t,le,Yt,Mt,oe);else if($n>We)this.doCrash(`Tipped over! (${$n.toFixed(0)}°) on ${v.name}`,v,$t,le,Yt,Mt,oe);else if(isFinite(Ke)&&Math.abs(Ke)<De){this.state.velocity=[0,0,0],this.grounded=!0,this.groundedDir=[$t/Mt,le/Mt,Yt/Mt];const qe=new L($t/Mt,le/Mt,Yt/Mt);if(this.rocketQuat.setFromUnitVectors(new L(0,1,0),qe),this.state.position[0]!==v.position[0]+$t/Mt*(oe+50)||this.state.position[1]!==v.position[1]+le/Mt*(oe+50)||this.state.position[2]!==v.position[2]+Yt/Mt*(oe+50)){this.state.position=[v.position[0]+$t/Mt*(oe+50),v.position[1]+le/Mt*(oe+50),v.position[2]+Yt/Mt*(oe+50)],this.sound.playLand(),this.sound.stopEngine();const te=v.name;Xt.show(`Landed on ${te}!`),te==="earth"?this.achievements.unlock("land_earth"):te==="moon"?this.achievements.unlock("land_moon"):te==="mars"?this.achievements.unlock("land_mars"):te==="venus"?this.achievements.unlock("land_venus"):te==="mercury"&&this.achievements.unlock("land_mercury"),this.missions.recordLanding(te)}}else if(isFinite(Ke)){this.state.velocity=[0,0,0],this.state.position=[v.position[0]+$t/Mt*(oe+50),v.position[1]+le/Mt*(oe+50),v.position[2]+Yt/Mt*(oe+50)],this.grounded=!0,this.groundedDir=[$t/Mt,le/Mt,Yt/Mt];const qe=new L($t/Mt,le/Mt,Yt/Mt);this.rocketQuat.setFromUnitVectors(new L(0,1,0),qe),this.screenShake=Math.abs(Ke)*.05,this.sound.playLand(),this.sound.stopEngine();const te=v.name;Xt.show(`Rough landing on ${te}! (${Math.abs(Ke).toFixed(1)} m/s)`),te==="earth"?this.achievements.unlock("land_earth"):te==="moon"&&this.achievements.unlock("land_moon")}}else Mt<oe+250&&isFinite(Ke)&&Math.abs(Ke)>5e4&&this.doCrash(`High-speed impact! (${Math.abs(Ke).toFixed(0)} m/s) on ${v.name}`,v,$t,le,Yt,Mt,oe)}}if(this.system.propagate(t,va),this.grounded&&this.groundedDir){const A=Ae(this.state.position,this.system),N=A.radius??6371e3,W=[A.position[0]+this.groundedDir[0],A.position[1]+this.groundedDir[1],A.position[2]+this.groundedDir[2]],Q=(A.getSurfaceRadiusAt?.(W)??N)+bn.SPAWN_OFFSET_M;this.state.position[0]=A.position[0]+this.groundedDir[0]*Q,this.state.position[1]=A.position[1]+this.groundedDir[1]*Q,this.state.position[2]=A.position[2]+this.groundedDir[2]*Q}if(this.grounded){const A=Ae(this.state.position,this.system),N=this.state.position[0]-A.position[0],W=this.state.position[1]-A.position[1],$=this.state.position[2]-A.position[2],Q=Math.sqrt(N*N+W*W+$*$),it=A.radius??6371e3;Q>it*1.1&&(this.state.velocity=[0,0,0],this.state.position[0]=A.position[0]+N/Q*(it+bn.SPAWN_OFFSET_M),this.state.position[1]=A.position[1]+W/Q*(it+bn.SPAWN_OFFSET_M),this.state.position[2]=A.position[2]+$/Q*(it+bn.SPAWN_OFFSET_M))}for(const A of this.system.bodies)A.syncMesh?.();const j=Ae(this.state.position,this.system),tt=this.state.position[0]-j.position[0],ct=this.state.position[1]-j.position[1],ht=this.state.position[2]-j.position[2],Y=Math.sqrt(tt*tt+ct*ct+ht*ht)-(j.radius??6371e3),nt=Math.max(.05,Math.min(1,Y/5e4));for(const A of this.system.bodies){const N=A;if(!(!N.mesh||N.name==="earth"||N.name==="sun")&&N.mesh.material){const W=Array.isArray(N.mesh.material)?N.mesh.material:[N.mesh.material];for(const $ of W)$.transparent!==void 0&&($.transparent=!0,$.opacity=nt,$.needsUpdate=!0)}}const yt=this.system.bodyByName("sun");if(yt&&yt.mesh){const A=yt.mesh.position;for(const N of this.system.bodies){const W=N;W.atmosphereGlow&&W.mesh&&W.atmosphereGlow.setSunDirection(A,W.mesh.position)}}const St=this.system.bodyByName("earth");if(St&&"updateClouds"in St){const A=this.system.bodyByName("sun"),N=A?A.position:void 0;St.updateClouds(e,N)}if(this.debris.length>0){const A=Ae(this.state.position,this.system);for(let N=this.debris.length-1;N>=0;N--){const W=this.debris[N];if(W.life-=e,W.life<=0||W.body.mass<=0){this.sceneMgr.scene.remove(W.mesh),this.debris.splice(N,1);continue}const $=Nd(W.body,this.system.bodies);W.body.applyForce($,e),W.mesh.position.set(W.body.position[0]*Ct,W.body.position[1]*Ct,W.body.position[2]*Ct),W.mesh.rotation.x+=.6*e,W.mesh.rotation.z+=.4*e;const Q=W.body.position[0]-A.position[0],it=W.body.position[1]-A.position[1],rt=W.body.position[2]-A.position[2],bt=Math.sqrt(Q*Q+it*it+rt*rt),ce=A.getSurfaceRadiusAt?.(W.body.position)??A.radius??6371e3;bt<ce&&(this.sceneMgr.scene.remove(W.mesh),this.debris.splice(N,1))}}this.updateExplosion(e);const Tt=Ae(this.state.position,this.system),Bt=this.state.position[0]-Tt.position[0],zt=this.state.position[1]-Tt.position[1],wt=this.state.position[2]-Tt.position[2],Ft=Math.sqrt(Bt*Bt+zt*zt+wt*wt)||1,z=new L(Bt/Ft,zt/Ft,wt/Ft);if(this.rocketShadow&&(this.rocketShadow.visible=!1),this._debugMarker&&this._debugMarker.position.copy(this.rocketGroup.position),!this.crashed){const A=-this.rocketBottomY-50*Ct+2,N=Ae(this.state.position,this.system),W=this.state.position[0]-N.position[0],$=this.state.position[1]-N.position[1],Q=this.state.position[2]-N.position[2],it=Math.sqrt(W*W+$*$+Q*Q)||1;if(!this._debugShown){this._debugShown=!0;const rt=document.createElement("div");rt.style.cssText="position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:90;font-family:monospace;font-size:10px;color:#c89838;background:rgba(8,10,24,0.6);padding:3px 10px;border-radius:10px;pointer-events:none;letter-spacing:0.1em;border:1px solid rgba(200,152,56,0.2);",rt.id="rocket-debug",rt.textContent="ELLIPSE  v4.5",document.body.appendChild(rt),console.log("ROCKET DEBUG:",{rocketBottomY:this.rocketBottomY,visualOffset:A,VISUAL_SCALE:Ct,ROCKET_VISUAL_SCALE:vi,earthVisualR:6371e3*Ct,rocketGroupPos:this.rocketGroup.position.toArray(),statePos:this.state.position})}if(this.rocketGroup.position.set(this.state.position[0]*Ct+W/it*A,this.state.position[1]*Ct+$/it*A,this.state.position[2]*Ct+Q/it*A),this.stagePulseTimer>0){this.stagePulseTimer-=e;const rt=1-Math.max(0,this.stagePulseTimer/.35),bt=1.70158,oe=1+((bt+1)*Math.pow(rt-1,3)+bt*Math.pow(rt-1,2))*.04;this.rocketGroup.scale.setScalar(vi*Math.max(1,oe))}else this.rocketGroup.scale.x!==vi&&this.rocketGroup.scale.setScalar(vi);if(this.cameraMode==="free"){this.freeCamKeys.left&&(this.freeCamAzimuth+=3*e),this.freeCamKeys.right&&(this.freeCamAzimuth-=3*e),this.freeCamKeys.up&&(this.freeCamPolar=Math.max(.05,this.freeCamPolar-3*.7*e)),this.freeCamKeys.down&&(this.freeCamPolar=Math.min(Math.PI-.05,this.freeCamPolar+3*.7*e));const bt=new L(this.state.position[0]*Ct+W/it*A,this.state.position[1]*Ct+$/it*A,this.state.position[2]*Ct+Q/it*A),ce=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.cos(this.freeCamAzimuth),oe=this.freeCamDist*Math.cos(this.freeCamPolar),$t=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.sin(this.freeCamAzimuth);this.sceneMgr.camera.position.set(bt.x+ce,bt.y+oe,bt.z+$t);const le=Math.abs(this.freeCamPolar-Math.PI/2)>Math.PI/2-.15?new L(0,0,Math.sin(this.freeCamPolar)>0?1:-1):new L(0,1,0);this.sceneMgr.camera.up.copy(le),this.sceneMgr.camera.lookAt(bt)}else{const rt={x:W/it*A,y:$/it*A,z:Q/it*A};this.chase.follow(this.state,e,z,n||!this._camSnapped,rt),this._camSnapped||(this._camSnapped=!0)}if(this.deployedChuteMesh&&(this.deployedChuteMesh.position.set(this.state.position[0]*Ct,this.state.position[1]*Ct+.02,this.state.position[2]*Ct),this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation),this.chuteDeployProgress<1)){this.chuteDeployProgress=Math.min(1,this.chuteDeployProgress+e*.8);const rt=this.chuteDeployProgress,bt=1.70158,oe=1+(bt+1)*Math.pow(rt-1,3)+bt*Math.pow(rt-1,2);this.deployedChuteMesh.scale.setScalar(Math.max(.001,oe))}}const be=v&&v.radius?F-v.radius:0;this.countStages(this.rocket.assembly.roots);const Pt=this.computeStageData();this.stageInfo=Pt;let Ht,Et,de,Wt,R,T;const V=Ae(this.state.position,this.system);if(V&&V.mass>0){const A=[(this.state.position[0]-V.position[0])*Ct,(this.state.position[1]-V.position[1])*Ct,(this.state.position[2]-V.position[2])*Ct],N=ro(A,this.state.velocity,V.mass,5e14,360);N.bound&&(Ht=N.apoapsis,Et=N.periapsis,de=N.timeToAp,Wt=N.timeToPe,R=N.eccentricity,T=N.timeToAp!==void 0&&N.timeToPe!==void 0?(N.timeToAp+N.timeToPe)*2:void 0)}if(this.impactMarker){const A=Ae(this.state.position,this.system),N=[this.state.position[0]-A.position[0],this.state.position[1]-A.position[1],this.state.position[2]-A.position[2]],W=ro(N,this.state.velocity,A.mass,5e14,360);if(W.points.length>10&&!W.bound){const $=W.points[W.points.length-1],Q=A.getSurfaceRadiusAt?.([$[0],0,$[1]])??A.radius??6371e3;A.position[0]+$[0],A.position[2]+$[1];const it=Math.sqrt($[0]*$[0]+$[1]*$[1]);if(it>Q*.5){const rt=A.position[0]+$[0]/it*Q,bt=A.position[2]+$[1]/it*Q;this.impactMarker.position.set(rt*Ct,0,bt*Ct),this.impactMarker.visible=!0}else this.impactMarker.visible=!1}else this.impactMarker.visible=!1}this.stageInfo.filter(A=>A.active).length>0&&this.stageInfo.findIndex(A=>A.active)+1;let st=0;const et=Ae(this.state.position,this.system);if(et&&et.mass>0){const A=this.state.position[0]-et.position[0],N=this.state.position[1]-et.position[1],W=this.state.position[2]-et.position[2],$=Math.sqrt(A*A+N*N+W*W)||1,Q=Ti*et.mass/($*$),it=wa(this.state.rocket.assembly.roots),rt=this.state.rocket.totalMass();it>0&&Q>0&&rt>0&&(st=it*1e3*this.state.throttle/(rt*Q))}this.hud.setTwr(st),this.hud.setSasMode(this.sasMode);const ot=y_(this.state.rocket.assembly.roots),At=this.state.rocket.totalMass(),mt=this.state.rocket.totalFuelMass(),U=At-mt;let ft=0;ot>0&&At>0&&U>0&&(ft=ot*9.80665/vd*Math.log(At/U)),this.hud.setDeltaV(ft),this.hud.update(this.state,this.system,this.heatEnergy,this.state.throttle),this.hud.setOrbit({apoapsis:Ht,periapsis:Et,timeToAp:de,timeToPe:Wt,eccentricity:R,period:T,bound:Ht!==void 0&&Et!==void 0});const xt=Ae(this.state.position,this.system);this.missions.evaluate({launched:this.launched,altitude:be,maxAltitude:this.maxAlt,speed:Z,maxSpeed:this.maxSpeed,grounded:this.grounded,nearestBody:k.name,refBody:xt.name,bound:Ht!==void 0&&Et!==void 0,apoapsis:Ht??-1,periapsis:Et??-1,stageSeparations:0,softLanded:!1});const P=Ae(this.state.position,this.system),kt=[(this.state.position[0]-P.position[0])*Ct,(this.state.position[1]-P.position[1])*Ct,(this.state.position[2]-P.position[2])*Ct],_t=ro(kt,this.state.velocity,P.mass,5e14,90);if(_t.points.length>5){if(!this.orbitLine){const N=new Ne,W=new Float32Array(_t.points.length*3);N.setAttribute("position",new Le(W,3));const $=new pl({color:_t.bound?4491468:14527044,transparent:!0,opacity:.3,depthWrite:!1});this.orbitLine=new Lr(N,$),this.sceneMgr.scene.add(this.orbitLine)}const A=this.orbitLine.geometry.attributes.position;for(let N=0;N<_t.points.length;N++)A.array[N*3]=P.position[0]*Ct+_t.points[N][0],A.array[N*3+1]=this.state.position[1]*Ct,A.array[N*3+2]=P.position[2]*Ct+_t.points[N][1];A.needsUpdate=!0,this.orbitLine.geometry.setDrawRange(0,_t.points.length),this.orbitLine.material.color.set(_t.bound?4491468:14527044),this.orbitLine.visible=!0}else this.orbitLine&&(this.orbitLine.visible=!1);be>this.maxAlt&&(this.maxAlt=be),Z>this.maxSpeed&&(this.maxSpeed=Z);const It=[100,500,1e3,5e3,1e4,5e4,1e5,5e5,1e6];for(const A of It)if(be>=A&&this.lastAltMilestone<A){this.lastAltMilestone=A,Xt.show(`Altitude: ${A>=1e3?A/1e3+"km":A+"m"}`);break}const vt=this.relSpeed()/340;this.hud.setMass(this.state.rocket.totalMass()),this.prevMach=vt;const Ut=Ae(this.state.position,this.system);if(Ut&&Ut.mass>0){const A=this.state.position[0]-Ut.position[0],N=this.state.position[1]-Ut.position[1],W=this.state.position[2]-Ut.position[2],$=Math.sqrt(A*A+N*N+W*W)||1;Ti*Ut.mass/($*$)}this.prevVel=[this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]];const Nt=this.state.velocity[0]-this.prevVel[0],ae=this.state.velocity[1]-this.prevVel[1],Lt=this.state.velocity[2]-this.prevVel[2],at=Math.sqrt(Nt*Nt+ae*ae+Lt*Lt),D=e>0?at/(e*9.80665):1;if(D>2.5?this.screenShake=Math.min(1,(D-2.5)/5):this.screenShake*=Math.exp(-3*e),this.screenShake>.01){const A=(Math.random()-.5)*this.screenShake*.01,N=(Math.random()-.5)*this.screenShake*.01;this.rocketGroup.position.x+=A,this.rocketGroup.position.z+=N}const ut=Z/1e3,gt=45+Math.min(8,Math.max(0,ut-3)*.06),Ot=this.sceneMgr.camera.fov,Dt=Ot+(gt-Ot)*e*1.2;Math.abs(Dt-Ot)>.01&&(this.sceneMgr.camera.fov=Dt,this.sceneMgr.camera.updateProjectionMatrix());const qt=Math.min(1,Math.max(0,(be??0)/3e4)),fe=.02*(1-qt)+0*qt,_e=.05*(1-qt)+0*qt,Qt=.15*(1-qt)+.01*qt;this.sceneMgr.scene.background=this.sceneMgr.scene.background.setRGB(fe,_e,Qt),new L(0,1,0).applyQuaternion(this.rocketQuat);const pe=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),$e=pe>.01?[this.state.velocity[0]/pe,this.state.velocity[1]/pe,this.state.velocity[2]/pe]:[0,1,0],kn=Ae(this.state.position,this.system),Rn=this.state.position[0]-kn.position[0],Ie=this.state.position[1]-kn.position[1],Fe=this.state.position[2]-kn.position[2],On=Math.sqrt(Rn*Rn+Ie*Ie+Fe*Fe)||1,Yn=this.state.velocity[0],Zt=this.state.velocity[1],Gt=this.state.velocity[2],Me=Ie*Gt-Fe*Zt,ne=Fe*Yn-Rn*Gt,E=Rn*Zt-Ie*Yn,H=Math.sqrt(Me*Me+ne*ne+E*E)||1,X=[],B={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",pluto:"#ddccbb"};for(const A of this.system.bodies){if(A.mass<=0)continue;const N=A.position[0]-this.state.position[0],W=A.position[1]-this.state.position[1],$=A.position[2]-this.state.position[2],Q=Math.sqrt(N*N+W*W+$*$)||1;X.push({name:A.name,dir:[N/Q,W/Q,$/Q],color:B[A.name]||"#888"})}this.hud.setNavballData([l.x,l.y,l.z],$e,[Rn/On,Ie/On,Fe/On],[Me/H,ne/H,E/H],X)}showAutopilotStatus(){this.autopilotStatusEl&&this.autopilotStatusEl.remove();const t=document.createElement("div");t.style.cssText="position:fixed;top:48px;left:50%;transform:translateX(-50%);z-index:250;background:rgba(8,10,24,0.85);border:1px solid rgba(124,255,178,0.3);border-radius:6px;padding:6px 14px;font:600 11px system-ui;color:#7CFFB2;letter-spacing:0.05em;pointer-events:auto;cursor:pointer;text-align:center;",t.innerHTML='<div id="ap-phase">AUTOPILOT: BURN</div><div id="ap-detail" style="font-size:9px;color:#889;margin-top:2px;font-weight:400;"></div><div style="font-size:8px;color:#ff6644;margin-top:3px;font-weight:400;">click to cancel</div>',t.addEventListener("click",()=>this.abortAutopilot("Cancelled by user")),document.body.appendChild(t),this.autopilotStatusEl=t}hideAutopilotStatus(){this.autopilotStatusEl&&(this.autopilotStatusEl.remove(),this.autopilotStatusEl=null)}updateAutopilotStatus(t,e){if(!this.autopilotStatusEl)return;const n=this.autopilotStatusEl.querySelector("#ap-phase"),i=this.autopilotStatusEl.querySelector("#ap-detail");n&&(n.textContent=`AUTOPILOT: ${t}`),i&&(i.textContent=e)}updateAutopilot(t){if(!this.autopilotActive)return;const e=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),n=this.state.rocket.totalFuelMass();if(this.autopilotPhase==="ascent"){if(this.state.throttle=1,n<.1){this.abortAutopilot("out of fuel during ascent");return}const i=Ae(this.state.position,this.system),s=this.state.position[0]-i.position[0],r=this.state.position[1]-i.position[1],a=this.state.position[2]-i.position[2],l=Math.sqrt(s*s+r*r+a*a)-(i.radius??6371e3);if(this.updateAutopilotStatus("ASCENT",`alt ${(l/1e3).toFixed(0)} km · warp OK — then burn to ${this.autopilotTarget.toUpperCase()}`),l>12e4){const c=this.system.bodyByName("sun");if(!c){this.abortAutopilot("Sun not found");return}const u=c.velocity??[0,0,0],h=Aa([this.state.position[0]-c.position[0],this.state.position[1]-c.position[1],this.state.position[2]-c.position[2]],[this.state.velocity[0]-u[0],this.state.velocity[1]-u[1],this.state.velocity[2]-u[2]],this.system,this.autopilotTarget);if(!h){this.abortAutopilot("could not compute transfer from the current orbit");return}this.autopilotPhase="burn",this.autopilotDirection=h.direction,this.autopilotDeltaV=h.deltaV,this.autopilotBurnStartSpeed=e,this.autopilotStartMissionTime=this.missionTime,this.autopilotStartFuel=n,this.autopilotStartMass=this.state.rocket.totalMass(),this.sasMode=h.direction,this.hud.setSasMode(this.sasMode),Xt.show(`Space reached — burning ${h.direction} toward ${this.autopilotTarget.toUpperCase()}`,4e3)}return}if(this.autopilotPhase==="burn"){this.state.throttle=1,this.sasMode=this.autopilotDirection,this.timeWarp>1&&(this.warpIndex=0,this.timeWarp=1,this.hud.setWarp(1));const i=this.autopilotDirection==="prograde"?e-this.autopilotBurnStartSpeed:this.autopilotBurnStartSpeed-e;this.updateAutopilotStatus("BURN",`Δv ${i.toFixed(0)}/${this.autopilotDeltaV.toFixed(0)} m/s · fuel ${n.toFixed(0)}kg`),i>=this.autopilotDeltaV?(this.autopilotPhase="coast",this.state.throttle=0,this.sasMode="off",this.hud.setSasMode("off"),this.warpIndex=this.autopilotMaxWarpIndex,this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),Xt.show("Burn complete — coasting to target",3e3)):n<.1&&(this.autopilotPhase="aborted",this.state.throttle=0,this.sasMode="off",this.hud.setSasMode("off"),this.autopilotActive=!1,this.hideAutopilotStatus(),Xt.show("AUTOPILOT ABORTED: out of fuel before reaching target Δv",5e3));return}if(this.autopilotPhase==="coast"){this.state.throttle=0,this.timeWarp!==this.warpLevels[this.autopilotMaxWarpIndex]&&(this.warpIndex=this.autopilotMaxWarpIndex,this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp));const i=this.system.bodyByName(this.autopilotTarget);if(!i){this.abortAutopilot("Target not found");return}const s=i.position[0]-this.state.position[0],r=i.position[1]-this.state.position[1],a=i.position[2]-this.state.position[2],l=Math.sqrt(s*s+r*r+a*a),c=i.radius??6e6,u=Ae(this.state.position,this.system),h=l<c*3||u.name===this.autopilotTarget;this.autopilotStartMissionTime+this.autopilotDeltaV*0+999999;const d=this.missionTime-this.autopilotStartMissionTime;if(this.updateAutopilotStatus("COAST",`${(l/1e3).toFixed(0)}km to ${this.autopilotTarget.toUpperCase()} · elapsed ${(d/86400).toFixed(1)}d`),h){this.autopilotPhase="arrived",this.autopilotActive=!1,this.warpIndex=0,this.timeWarp=1,this.hud.setWarp(1);const f=this.missionTime-this.autopilotStartMissionTime,g=this.autopilotStartFuel-n,y=this.autopilotStartMass-this.state.rocket.totalMass();this.hideAutopilotStatus(),this.showArrivalOverlay(this.autopilotTarget,f,g,y)}else d>5*(this.autopilotDeltaV>0,1e7);return}}abortAutopilot(t){this.autopilotActive=!1,this.autopilotPhase="aborted",this.state.throttle=0,this.sasMode="off",this.hud.setSasMode("off"),this.warpIndex=0,this.timeWarp=1,this.hud.setWarp(1),this.hideAutopilotStatus(),Xt.show(`AUTOPILOT ABORTED: ${t}`,5e3)}showArrivalOverlay(t,e,n,i){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;z-index:700;display:flex;align-items:center;justify-content:center;background:rgba(6,8,20,0.7);opacity:0;transition:opacity 400ms ease-out;";const r=document.createElement("div");r.style.cssText="max-width:420px;padding:32px;background:#0c1020;border:1px solid rgba(124,255,178,0.4);border-radius:10px;text-align:center;font-family:system-ui,sans-serif;box-shadow:0 0 40px rgba(124,255,178,0.15);";const a=e/86400,l=a>=1?`${a.toFixed(1)} days`:`${(e/3600).toFixed(1)} hours`;r.innerHTML=`
      <div style="font-size:28px;font-weight:700;color:#7CFFB2;letter-spacing:0.05em;margin-bottom:6px;text-shadow:0 0 20px rgba(124,255,178,0.4);">YOU HAVE ARRIVED</div>
      <div style="font-size:14px;color:#ddd;margin-bottom:20px;">Destination: <b style="color:#88ccff;">${t.toUpperCase()}</b></div>
      <div style="display:flex;justify-content:center;gap:24px;margin-bottom:24px;">
        <div><div style="font-size:10px;color:#889;letter-spacing:0.1em;">TRAVEL TIME</div><div style="font-size:18px;color:#c89838;font-weight:600;margin-top:4px;">${l}</div></div>
        <div><div style="font-size:10px;color:#889;letter-spacing:0.1em;">FUEL USED</div><div style="font-size:18px;color:#ffaa44;font-weight:600;margin-top:4px;">${(n/1e3).toFixed(1)} t</div></div>
        <div><div style="font-size:10px;color:#889;letter-spacing:0.1em;">MASS LOST</div><div style="font-size:18px;color:#ff6644;font-weight:600;margin-top:4px;">${(i/1e3).toFixed(1)} t</div></div>
      </div>
      <button class="btn btn--primary" style="width:100%;padding:12px;font-size:13px;" id="arrival-close">CONTINUE</button>
    `,s.appendChild(r),document.body.appendChild(s),requestAnimationFrame(()=>{s.style.opacity="1"}),r.querySelector("#arrival-close").addEventListener("click",()=>{s.style.opacity="0",setTimeout(()=>s.remove(),420)}),this.achievements.unlock("reach_space")}performStage(){const t=this.findLowestDecoupler(this.rocket.assembly.roots);if(!t){Xt.show("No decouplers to stage.");return}this.sound.playStaging();const e=this.rocketGroup.getObjectByName(t.uid??t.part.id);if(e){const n=[],i=[];for(let h=0;h<16;h++){const d=.02+Math.random()*.04,f=new ye(d,4,3),g=new Re({color:h<4?16746564:11184810,transparent:!0,opacity:.9,blending:fn,depthWrite:!1}),y=new lt(f,g),m=h/16*Math.PI*2+Math.random()*.3,p=(Math.random()-.5)*.8;y.position.copy(this.rocketGroup.position),y.position.x+=Math.cos(m)*.15,y.position.y+=p*.1,y.position.z+=Math.sin(m)*.15,this.sceneMgr.scene.add(y),y._life=.6+Math.random()*.4,y._age=0,y._vx=Math.cos(m)*(.8+Math.random()*1.5),y._vy=p*.5,y._vz=Math.sin(m)*(.8+Math.random()*1.5),this.explosionMeshes.push(y)}const s=this.rocket.assembly.roots,r=t.position[1];for(const h of s){if(h!==t&&h.position[1]>=r)continue;const d=this.rocketGroup.getObjectByName(h.uid??h.part.id);if(d){const f=new L;d.getWorldPosition(f),n.push(f),i.push(d),d.removeFromParent()}}for(;e.children.length>0;){const h=e.children[0],d=new L;h.getWorldPosition(d),n.push(d),i.push(h),h.removeFromParent()}const a=Ae(this.state.position,this.system),l=[...this.state.position],c=[a.position[0]-l[0],a.position[1]-l[1],a.position[2]-l[2]],u=Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2])||1;for(let h=0;h<i.length;h++){const d=i[h],f=new ln;f.add(d),d.position.set(0,0,0),f.scale.setScalar(vi);const g=this.sceneMgr.scene;f.position.copy(n[h]),f.position.x+=(Math.random()-.5)*.5,f.position.y+=(Math.random()-.5)*.5,f.position.z+=(Math.random()-.5)*.5,f.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),g.add(f);const y=5+Math.random()*5,m=a.velocity??[0,0,0],p=[this.state.velocity[0]+m[0]+c[0]/u*y+(Math.random()-.5)*2,this.state.velocity[1]+m[1]+c[1]/u*y+(Math.random()-.5)*2,this.state.velocity[2]+m[2]+c[2]/u*y+(Math.random()-.5)*2],x=new Ml("debris",100,l,p);this.debris.push({mesh:f,body:x,life:60})}}this.rocket.removeStage(t),this.positionFlameAtNozzle(),this.achievements.unlock("stage_separate"),this.missions.recordStageSeparation(),this.triggerStageFlash(),this.stagePulseTimer=.35,Xt.show("Stage separated!")}stagePulseTimer=0;triggerStageFlash(){const t=document.createElement("div");t.className="stage-flash",document.body.appendChild(t),setTimeout(()=>t.remove(),240)}findLowestDecoupler(t){let e=null;const n=i=>{for(const s of i)s.part.kind==="decoupler"&&(!e||s.position[1]<e.position[1])&&(e=s),n(s.children)};return n(t),e}toggleParachute(){if(this.rocket.assembly.roots.some(e=>e.part.kind==="parachute")||this.rocket.assembly.roots.some(e=>e.children.some(n=>n.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const e={radius:.6*Ce,height:1*Ce};this.deployedChuteMesh=el(e),this.deployedChuteMesh.scale.setScalar(.001),this.chuteDeployProgress=0,this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null,this.chuteDeployProgress=0);Xt.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}}cycleSasMode(){const t=["off","hold","prograde","retrograde"],e=t.indexOf(this.sasMode);this.sasMode=t[(e+1)%t.length],this.sasMode==="hold"&&this.sasTargetQuat.copy(this.rocketQuat);const n={off:"SAS: OFF",hold:"SAS: HOLD attitude",prograde:"SAS: PROGRADE",retrograde:"SAS: RETROGRADE"};Xt.show(n[this.sasMode]),this.hud.setSasMode(this.sasMode)}toggleGear(){this.gearDeployed=!this.gearDeployed;for(const t of this.gearMeshes)t.visible=this.gearDeployed;Xt.show(this.gearDeployed?"Landing gear deployed":"Landing gear retracted")}doCrash(t,e,n,i,s,r,a){this.crashed||this._spawnProtectionTimer>0||(this.crashed=!0,this.achievements.unlock("crash"),this.sound.playCrash(),this.sound.stopEngine(),Xt.show(`CRASH! ${t}`),this.rocketGroup.visible=!1,this.engineFlame.stop(),this.screenShake=3,this.state.position=[e.position[0]+n/r*(a+bn.SPAWN_OFFSET_M),e.position[1]+i/r*(a+bn.SPAWN_OFFSET_M),e.position[2]+s/r*(a+bn.SPAWN_OFFSET_M)],this.state.velocity=[0,0,0],this.state.throttle=0,this.spawnExplosion(this.state.position[0]*Ct,this.state.position[1]*Ct,this.state.position[2]*Ct),this.showCrashOverlay(t))}showCrashOverlay(t){const e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999;pointer-events:none;opacity:0;transition:opacity 0.1s;",document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1"}),setTimeout(()=>{e.style.opacity="0"},100),setTimeout(()=>e.remove(),500);const n=document.createElement("div");n.style.cssText=`
      position:fixed;top:0;left:0;width:100%;height:100%;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(0,0,0,0.7);z-index:9999;
      font-family:system-ui,sans-serif;color:#ff0;
      opacity:0;transition:opacity 360ms ease-out;
    `,n.innerHTML=`
      <div class="crash-shake" style="text-align:center;">
        <div style="font-size:48px;font-weight:bold;color:#ff4444;margin-bottom:8px;text-shadow:0 0 24px rgba(255,68,68,0.6);">CRASH!</div>
        <div style="font-size:16px;color:#ccc;margin-bottom:32px;">${t}</div>
      </div>
      <div style="display:flex;gap:16px;">
        <button id="crash-menu" style="padding:12px 32px;font-size:18px;border:1px solid #555;border-radius:6px;background:#222;color:#ff0;cursor:pointer;transition:all 0.15s;">MENU</button>
        <button id="crash-restart" style="padding:12px 32px;font-size:18px;border:none;border-radius:6px;background:#4488ff;color:#ff0;cursor:pointer;transition:all 0.15s;">LAUNCH AGAIN</button>
      </div>
    `,document.body.appendChild(n),this.crashOverlay=n,requestAnimationFrame(()=>{n.style.opacity="1"}),n.querySelector("#crash-menu").addEventListener("click",()=>{this.onCrashAction?.("menu")}),n.querySelector("#crash-restart").addEventListener("click",()=>{this.onCrashAction?.("restart")})}updateExplosion(t){if(this.explosionMeshes.length>0)for(let e=this.explosionMeshes.length-1;e>=0;e--){const n=this.explosionMeshes[e],i=n._age+t;n._age=i;const s=n._life,r=i/s;if(r>=1){this.sceneMgr.scene.remove(n),n.geometry.dispose(),n.material.dispose(),this.explosionMeshes.splice(e,1);continue}const a=n._shockRing,l=a?1+r*60:1+r*6;n.scale.setScalar(l);const c=s<1?2:1;n.material.opacity=a?Math.max(0,.85*(1-r*1.5)):Math.max(0,.9*(1-r*c)),n.position.x+=n._vx*t,n.position.y+=n._vy*t,n.position.z+=n._vz*t}}explosionMeshes=[];spawnExplosion(t,e,n){const i=[16746496,16729088,16720384,16737792,13386752,16755200],s=new lt(new ye(.8,12,8),new Re({color:16755200,transparent:!0,opacity:1,blending:fn,depthWrite:!1}));s.position.set(t,e,n),s._life=.8,s._age=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s);for(let r=0;r<8;r++){const a=1+Math.random()*1.5,l=new ye(a,8,6),c=new Re({color:i[r%i.length],transparent:!0,opacity:.9,blending:fn,depthWrite:!1}),u=new lt(l,c),h=r/8*Math.PI*2,d=Math.random()*Math.PI,f=.3;u.position.set(t+Math.sin(h)*Math.cos(d)*f,e+Math.sin(d)*f,n+Math.cos(h)*Math.cos(d)*f),u._life=1.5+Math.random()*.5,u._age=0,u._vx=Math.sin(h)*Math.cos(d)*(1+Math.random()*3),u._vy=Math.sin(d)*(1+Math.random()*3),u._vz=Math.cos(h)*Math.cos(d)*(1+Math.random()*3),this.sceneMgr.scene.add(u),this.explosionMeshes.push(u)}for(let r=0;r<4;r++){const a=1.5+Math.random()*2,l=new Re({color:4473924,transparent:!0,opacity:.4,blending:Ai,depthWrite:!1}),c=new lt(new ye(a,6,6),l),u=r/4*Math.PI*2+Math.random()*.5;c.position.set(t+Math.cos(u)*.5,e+(Math.random()-.5)*.3,n+Math.sin(u)*.5),c._life=2+Math.random()*.5,c._age=0,c._vx=Math.cos(u)*(.5+Math.random()*1.5),c._vy=(Math.random()-.5)*1,c._vz=Math.sin(u)*(.5+Math.random()*1.5),this.sceneMgr.scene.add(c),this.explosionMeshes.push(c)}}spawnShockRing(t=16777215){const e=new L;this.rocketGroup.getWorldPosition(e),e.x*Ct,e.y*Ct,e.z*Ct;const n=new Pi(.1,.2,64),i=new Re({color:t,transparent:!0,opacity:.85,side:Oe,blending:fn,depthWrite:!1}),s=new lt(n,i);s.position.set(this.rocketGroup.position.x,this.rocketGroup.position.y,this.rocketGroup.position.z),s.quaternion.copy(this.rocketQuat),s.scale.setScalar(1),s._life=1.2,s._age=0,s._shockRing=!0,s._vx=0,s._vy=0,s._vz=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s)}hasLandingLegs(){const t=e=>{for(const n of e)if(n.part.kind==="legs"||t(n.children))return!0;return!1};return t(this.rocket.assembly.roots)}positionFlameAtNozzle(){let t=1/0,e=-1/0;const n=this.rocketGroup.matrixWorld.clone().invert();this.rocketGroup.traverse(a=>{if(a instanceof lt){if(this.gearMeshes.includes(a)||a===this.rocketShadow||a===this.reentryGlow||a===this.reentryGlowMesh||a.name==="reentry-outer")return;const c=new vn().setFromObject(a).applyMatrix4(n);c.min.y<t&&(t=c.min.y),c.max.y>e&&(e=c.max.y)}}),this.rocketBottomY=t===1/0?-.1:t,this.rocketTopY=e===-1/0?.1:e;const i=t===1/0?-.1:t-.01;this.engineFlame.getMesh().position.set(0,i,0),this.engineFlame.getMesh().rotation.set(0,0,0);const r=new L(0,-this.rocketBottomY,0).applyQuaternion(this.rocketQuat);this.rocketGroup.position.add(r.multiplyScalar(Ct))}dispose(){if(!this.crashed){const t=this.rocket.assembly.roots;l_({assembly:Pd(this.rocket.assembly),fuel:t.map(e=>{const n=this.rocket.fuelTanks.find(i=>i.node===e);return n?n.remaining:0}),position:[...this.state.position],velocity:[...this.state.velocity],throttle:this.state.throttle,missionTime:this.missionTime,quat:[this.rocketQuat.x,this.rocketQuat.y,this.rocketQuat.z,this.rocketQuat.w],launched:this.launched,grounded:this.grounded,groundedDir:this.groundedDir?[...this.groundedDir]:null,bodies:this.system.bodies.map(e=>({name:e.name,position:[...e.position],velocity:[...e.velocity??[0,0,0]]}))})}this.crashOverlay&&(this.crashOverlay.remove(),this.crashOverlay=null),this.hideAutopilotStatus(),this.sceneMgr.scene.remove(this.rocketGroup);for(const t of this.debris)this.sceneMgr.scene.remove(t.mesh);this.debris=[];for(const t of this.explosionMeshes)this.sceneMgr.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.explosionMeshes=[],this.controls.dispose(),this.chase.dispose(),this.engineFlame.dispose(),this.groundSmoke.dispose(),this.hud.unmount(),this.sound.dispose()}}function E_(o,t,e){const n=o.mass,i=[...o.position],s=[...o.velocity],r=ke(t(o),1/n),a=s,c=Ra(o,Ye(i,ke(r,.5*e)),Ye(s,ke(a,.5*e))),u=ke(t(c),1/n),h=Ye(s,ke(r,.5*e)),f=Ra(o,Ye(i,ke(u,.5*e)),Ye(s,ke(h,.5*e))),g=ke(t(f),1/n),y=Ye(s,ke(u,.5*e)),p=Ra(o,Ye(i,ke(g,e)),Ye(s,ke(y,e))),x=ke(t(p),1/n),_=Ye(s,ke(g,e)),b=ke(Ye(Ye(r,ke(u,2)),Ye(ke(g,2),x)),e/6),C=ke(Ye(Ye(a,ke(h,2)),Ye(ke(y,2),_)),e/6);o.position=Ye(i,C),o.velocity=Ye(s,b)}function Ra(o,t,e){return{...o,position:t,velocity:e}}function Ye(o,t){return[o[0]+t[0],o[1]+t[1],o[2]+t[2]]}function ke(o,t){return[o[0]*t,o[1]*t,o[2]*t]}class w_{bodies=[];add(t){this.bodies.push(t)}bodyByName(t){return this.bodies.find(e=>e.name===t)}propagate(t,e){let n=t;for(;n>0;){const i=Math.min(e,n);this.step(i),n-=i}}step(t){for(const e of this.bodies){if(e.mass<=0)continue;const n=Nd(e,this.bodies);E_(e,()=>n,t)}}}const pi=mn*gn;class qn extends Ml{radius;visualRadius;mesh;constructor(t,e,n,i,s){super(t,e,n,i),this.radius=s,this.visualRadius=s*pi;const r=new ye(this.visualRadius,64,32),a=new se({color:8421504});this.mesh=new lt(r,a),this.mesh.position.set(n[0]*pi,n[1]*pi,n[2]*pi)}getTerrainHeightVisual(t,e,n){return 0}syncMesh(){this.mesh.position.set(this.position[0]*pi,this.position[1]*pi,this.position[2]*pi)}getSurfaceRadiusAt(t){const e=t[0]-this.position[0],n=t[1]-this.position[1],i=t[2]-this.position[2],s=Math.sqrt(e*e+n*n+i*i);if(s===0)return this.radius;const r=e/s,a=n/s,l=i/s,u=this.getTerrainHeightVisual(r,a,l)/pi;return this.radius+u}}const Ca=mn*gn,_h=64,mi=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},A_=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),u=a*a*(3-2*a),h=l*l*(3-2*l),d=mi(n,i,s),f=mi(n+1,i,s),g=mi(n,i+1,s),y=mi(n+1,i+1,s),m=mi(n,i,s+1),p=mi(n+1,i,s+1),x=mi(n,i+1,s+1),_=mi(n+1,i+1,s+1);return Bi(Bi(Bi(d,f,c),Bi(g,y,c),u),Bi(Bi(m,p,c),Bi(x,_,c),u),h)},ar=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*A_(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Bi=(o,t,e)=>o+(t-o)*e;class R_ extends qn{getTerrainHeightVisual(t,e,n){const i=ar(t*10+500,e*10+600,n*10+700,4),s=ar(t*40+100,e*40+200,n*40+300,3),r=i*.8+s*.2,a=this.visualRadius*.03;return r>.4?((r-.4)/.6)**2*a:-(.4-r)/.4*a*.12}constructor(t,e){super("mercury",1e24,t,e,244e4);const n=this.visualRadius,s=new Ys().load($s("/textures/mercury.jpg"),h=>{h.colorSpace=ie,h.anisotropy=4}),r=new ye(n,_h,_h),a=r.attributes.position,l=new L,c=n*.03;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,g=l.z/n,y=ar(d*10+500,f*10+600,g*10+700,4),m=ar(d*40+100,f*40+200,g*40+300,3),p=y*.8+m*.2;let x=0;p>.4?x=((p-.4)/.6)**2*c:x=-(.4-p)/.4*c*.12,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const u=new se({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new lt(r,u),this.mesh.position.set(t[0]*Ca,t[1]*Ca,t[2]*Ca)}}const vh=`
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying vec3 vViewDir;

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos     = wp.xyz;
  vWorldNormal  = normalize(mat3(modelMatrix) * normal);
  vViewDir      = normalize(cameraPosition - wp.xyz);
  gl_Position   = projectionMatrix * viewMatrix * wp;
}
`,C_=`
uniform vec3  uSunDir;           // normalised world-space direction planet→sun
uniform vec3  uPlanetCenter;     // world-space centre of the planet
uniform float uInnerRadius;      // planet surface radius
uniform float uAtmHeight;        // physical height of the atmosphere shell
uniform vec3  uRayleighCol;      // base Rayleigh colour (per-planet tint)
uniform vec3  uMieCol;           // Mie / haze colour
uniform float uDensity;          // overall optical depth multiplier
uniform vec3  uTerminatorCol;    // colour at the terminator (sunset band)
uniform float uGlowPower;        // how much the glow spreads past the limb

varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying vec3 vViewDir;

// Rayleigh phase function  P(θ) = 3/16π (1 + cos²θ)
float rayleighPhase(float cosTheta) {
  float ct2 = cosTheta * cosTheta;
  return 0.0596831 * (1.0 + ct2);           // 3/(16π) ≈ 0.05968
}

// Henyey–Greenstein Mie phase function
float miePhase(float cosTheta, float g) {
  float g2 = g * g;
  return 0.0795775 * (1.0 - g2) / pow(1.0 + g2 - 2.0 * g * cosTheta, 1.5);   // 1/(4π) ≈ 0.07958
}

void main() {
  vec3  V   = normalize(vViewDir);
  vec3  L   = normalize(uSunDir);
  vec3  N   = normalize(vWorldNormal);
  vec3  C   = uPlanetCenter;
  float R   = uInnerRadius;
  float Ratm = R + uAtmHeight;

  // ---- 1. Geometry: where on the planet disk? ----
  float viewAngle = max(dot(N, V), 0.0);
  float fresnel   = pow(1.0 - viewAngle, uGlowPower);

  // ---- 2. Lighting: day / terminator / night ----
  float NdotL     = dot(N, L);
  float daySide   = smoothstep(-0.15, 0.25, NdotL);
  float terminator = exp(-pow((NdotL - 0.08) * 6.0, 2.0));   // band at terminator

  // ---- 3. Phase functions ----
  float cosTheta   = dot(V, L);
  float phaseR    = rayleighPhase(cosTheta);
  float phaseM    = miePhase(cosTheta, 0.76);

  // ---- 4. Density approximation ----
  // Use fresnel as a proxy for the optical path length through the atmosphere
  float optDepth = fresnel * uDensity * 0.5;

  // ---- 5. Base colour mixing ----
  vec3 dayCol       = uRayleighCol;
  vec3 nightCol     = vec3(0.01, 0.005, 0.02);
  vec3 terminatorCol = uTerminatorCol;

  vec3 baseCol = mix(nightCol, dayCol, daySide);
  baseCol      = mix(baseCol, terminatorCol, terminator);

  // ---- 6. Apply phase + depth ----
  float scattering = phaseR * 0.7 + phaseM * 0.3;
  float alpha      = fresnel * (0.3 + 0.7 * daySide) * uDensity;

  vec3 color = baseCol * scattering * optDepth * 2.0;

  // ---- 7. Outer haze (adds bright white at limb) ----
  float haze = fresnel * fresnel * uDensity * 0.15 * (0.5 + 0.5 * daySide);
  color += vec3(haze);

  alpha = clamp(alpha, 0.0, 1.0);
  if (alpha < 0.005) discard;

  gl_FragColor = vec4(color, alpha);
}
`,P_=`
uniform vec3  uSunDir;
uniform vec3  uPlanetCenter;
uniform float uInnerRadius;
uniform float uDensity;
uniform float uGlowPower;

varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying vec3 vViewDir;

void main() {
  vec3 V = normalize(vViewDir);
  vec3 L = normalize(uSunDir);
  vec3 N = normalize(vWorldNormal);

  float viewAngle = max(dot(N, V), 0.0);
  float fresnel   = pow(1.0 - viewAngle, uGlowPower * 0.7);
  float NdotL     = dot(N, L);
  float dayFactor = smoothstep(-0.3, 0.2, NdotL);

  float cosTheta  = dot(V, L);
  float phase     = 0.05968 * (1.0 + cosTheta * cosTheta);

  float alpha = fresnel * (0.1 + 0.4 * dayFactor) * uDensity * phase;
  alpha = clamp(alpha, 0.0, 0.6);

  vec3 color = mix(
    vec3(0.01, 0.005, 0.03),
    vec3(0.3, 0.5, 1.0),
    dayFactor
  ) * fresnel * uDensity * 0.3;

  if (alpha < 0.005) discard;
  gl_FragColor = vec4(color, alpha);
}
`;class is{group=new ln;innerMesh;outerMesh;innerMat;outerMat;constructor(t,e=4491519,n=.7,i,s=16737826,r=3){const a=new Rt(e),l=new Rt(s),c=i??t*.08,u=new L(0,0,0),h=t*1.01,d=new ye(h,64,48);this.innerMat=new Nn({vertexShader:vh,fragmentShader:C_,uniforms:{uSunDir:{value:new L(0,1,0)},uPlanetCenter:{value:u},uInnerRadius:{value:t},uAtmHeight:{value:c},uRayleighCol:{value:a},uMieCol:{value:new Rt(.9,.9,1)},uDensity:{value:n},uTerminatorCol:{value:l},uGlowPower:{value:r}},transparent:!0,blending:fn,depthWrite:!1,side:Un}),this.innerMesh=new lt(d,this.innerMat),this.group.add(this.innerMesh);const f=t*1.06,g=new ye(f,48,32);this.outerMat=new Nn({vertexShader:vh,fragmentShader:P_,uniforms:{uSunDir:{value:new L(0,1,0)},uPlanetCenter:{value:u},uInnerRadius:{value:t},uDensity:{value:n*.5},uGlowPower:{value:r}},transparent:!0,blending:fn,depthWrite:!1,side:Un}),this.outerMesh=new lt(g,this.outerMat),this.group.add(this.outerMesh)}setSunDirection(t,e){const n=new L().copy(t).sub(e).normalize();this.innerMat.uniforms.uSunDir.value.copy(n),this.outerMat.uniforms.uSunDir.value.copy(n)}getMesh(){return this.group}dispose(){this.innerMat.dispose(),this.outerMat.dispose(),this.innerMesh.geometry.dispose(),this.outerMesh.geometry.dispose()}}const Pa=mn*gn,Mh=64,gi=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},L_=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),u=a*a*(3-2*a),h=l*l*(3-2*l),d=gi(n,i,s),f=gi(n+1,i,s),g=gi(n,i+1,s),y=gi(n+1,i+1,s),m=gi(n,i,s+1),p=gi(n+1,i,s+1),x=gi(n,i+1,s+1),_=gi(n+1,i+1,s+1);return zi(zi(zi(d,f,c),zi(g,y,c),u),zi(zi(m,p,c),zi(x,_,c),u),h)},lr=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*L_(o*l,t*l,e*l),r+=s,s*=.5}return i/r},zi=(o,t,e)=>o+(t-o)*e;class I_ extends qn{getTerrainHeightVisual(t,e,n){const i=lr(t*6+50,e*6+100,n*6+150,4),s=lr(t*15+200,e*15+300,n*15+400,3),r=i*.6+s*.4,a=this.visualRadius*.015;return r>.35?((r-.35)/.65)**2*a:-(.35-r)/.35*a*.05}atmosphereGlow;constructor(t,e){super("venus",146e23,t,e,6052e3);const n=this.visualRadius,s=new Ys().load($s("/textures/venus.jpg"),h=>{h.colorSpace=ie,h.anisotropy=4}),r=new ye(n,Mh,Mh),a=r.attributes.position,l=new L,c=n*.015;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,g=l.z/n,y=lr(d*6+50,f*6+100,g*6+150,4),m=lr(d*15+200,f*15+300,g*15+400,3),p=y*.6+m*.4;let x=0;p>.35?x=((p-.35)/.65)**2*c:x=-(.35-p)/.35*c*.05,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const u=new se({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new lt(r,u),this.mesh.position.set(t[0]*Pa,t[1]*Pa,t[2]*Pa),this.atmosphereGlow=new is(n,15247436,.4),this.mesh.add(this.atmosphereGlow.getMesh())}}const La=mn*gn;class D_ extends qn{constructor(t,e){super("pluto",44e20,t,e,1188e3);const n=new ye(this.visualRadius,32,16),i=new se({color:14535867,roughness:.9,metalness:0});this.mesh=new lt(n,i),this.mesh.position.set(t[0]*La,t[1]*La,t[2]*La)}}const Ia=mn*gn;function U_(o){let t=o|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function N_(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=n.createImageData(2048,1024);for(let r=0;r<1024;r++)for(let a=0;a<2048;a++){const l=r/1024,c=a/2048,u=(l-.5)*Math.PI,h=c*Math.PI*2,d=Math.cos(u)*Math.cos(h),f=Math.cos(u)*Math.sin(h),g=Math.sin(u);let y=(Math.sin(d*3+f*1.3+g*.7)*.5+.5)*.4+(Math.sin((d+1.7)*6+g*1.1)*.5+.5)*.3;y*=Math.max(0,1-Math.abs(l-.5)*1.2),y=Math.max(0,Math.min(255,(y-.4)*2.5*255));const m=(r*2048+a)*4;i.data[m]=i.data[m+1]=i.data[m+2]=y,i.data[m+3]=255}n.putImageData(i,0,0);const s=new nn(e);return s.wrapS=s.wrapT=He,s}function F_(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");n.fillStyle="#000000",n.fillRect(0,0,1024,512);const i=U_(42),s=[{lat:.7,lon:-1.8,rx:.5,ry:.8},{lat:-.4,lon:-1.3,rx:.6,ry:.35},{lat:.1,lon:.6,rx:.55,ry:.4},{lat:.5,lon:1.5,rx:.6,ry:.4},{lat:.85,lon:.4,rx:.25,ry:.3}];for(const a of s){const l=(a.lon+Math.PI)/(2*Math.PI)*1024,c=(Math.PI/2-a.lat)/Math.PI*512,u=a.rx/(2*Math.PI)*1024,h=a.ry/Math.PI*512;for(let d=0;d<30;d++){const f=(i()-.5)*u*2,g=(i()-.5)*h*2;if((f/u)**2+(g/h)**2>1)continue;const y=120+Math.floor(i()*135);n.fillStyle=`rgb(${y},${Math.floor(y*.85)},${Math.floor(y*.5)})`,n.beginPath(),n.arc(l+f,c+g,1+i()*3,0,Math.PI*2),n.fill()}}const r=new nn(e);return r.wrapS=r.wrapT=He,r.colorSpace=ie,r}class k_ extends qn{atmosphereGlow;cloudMesh;constructor(t,e){super("earth",Ix,t,e,6371e3*2);const n=this.visualRadius,i=320,s=new ye(n,i,i),r=s.attributes.position,a=new L,l=[],c=n*.035,u=n*.007;for(let y=0;y<r.count;y++){a.fromBufferAttribute(r,y);const m=a.x/n,p=a.y/n,x=a.z/n,_=this.terrainAt(m,p,x,c,u);a.setLength(n+_),r.setXYZ(y,a.x,a.y,a.z);const b=Math.max(-1,Math.min(1,_/c));let C,w,S;b<-.6?(C=.005,w=.04,S=.22):b<-.15?(C=.02,w=.1,S=.38):b<.02?(C=.5,w=.46,S=.28):b<.22?(C=.12,w=.35,S=.08):b<.5?(C=.18,w=.25,S=.08):b<.78?(C=.35,w=.3,S=.2):(C=.92,w=.88,S=.85),l.push(C,w,S)}r.needsUpdate=!0,s.setAttribute("color",new we(l,3)),s.computeVertexNormals();const h=new se({roughness:.85,metalness:.05,vertexColors:!0,emissiveMap:F_(),emissive:new Rt(16768358),emissiveIntensity:.3});this.mesh=new lt(s,h),this.mesh.position.set(t[0]*Ia,t[1]*Ia,t[2]*Ia),this.loadTexture().catch(()=>{}),this.atmosphereGlow=new is(n,4491519,2.5,n*.1),this.mesh.add(this.atmosphereGlow.getMesh());const d=N_(),f=new se({map:d,transparent:!0,opacity:.3,depthWrite:!1,side:Oe,roughness:1,metalness:0}),g=new ye(n*1.008,64,32);this.cloudMesh=new lt(g,f),this.cloudMesh.position.copy(this.mesh.position),this.mesh.add(this.cloudMesh)}terrainAt(t,e,n,i,s){const r=Math.sin(t*5+e*3.5)*.5+Math.cos(e*4.5-n*3)*.3,a=Math.sin(n*7+t*3+e*5)*.2+Math.sin(t*13+e*9+n*11)*.12,l=Math.sin(t*20+n*16)*.06+Math.cos(e*18+t*13)*.04,c=Math.sin(t*38+e*33+n*42)*.02,u=((r+a+l+c)*.35+.5)*1.05;if(u>.48){const h=(u-.48)/.52;return h*h*i}return u>.38?(u-.38)/.1*i*.2:-(.38-u)/.38*s}async loadTexture(){try{const t=await new Ys().loadAsync($s("/textures/earth_daymap.jpg"));t.colorSpace=ie,this.mesh.material.map=t,this.mesh.material.needsUpdate=!0}catch{}}updateClouds(t,e){if(this.cloudMesh.rotation.y+=t*.01,e){const n=this.mesh.material,i=Math.sqrt(e[0]**2+e[1]**2+e[2]**2)||1;this.mesh.lookAt(this.mesh.position.x+e[0]/i*100,this.mesh.position.y+e[1]/i*100,this.mesh.position.z+e[2]/i*100),n.emissiveIntensity=.15}}}const Da=mn*gn,bh=64,yi=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},O_=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),u=a*a*(3-2*a),h=l*l*(3-2*l),d=yi(n,i,s),f=yi(n+1,i,s),g=yi(n,i+1,s),y=yi(n+1,i+1,s),m=yi(n,i,s+1),p=yi(n+1,i,s+1),x=yi(n,i+1,s+1),_=yi(n+1,i+1,s+1);return Gi(Gi(Gi(d,f,c),Gi(g,y,c),u),Gi(Gi(m,p,c),Gi(x,_,c),u),h)},cr=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*O_(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Gi=(o,t,e)=>o+(t-o)*e;class H_ extends qn{getTerrainHeightVisual(t,e,n){const i=cr(t*8+100,e*8+200,n*8+300,4),s=cr(t*30+400,e*30+500,n*30+600,3),r=i*.7+s*.3,a=this.visualRadius*.04;return r>.45?((r-.45)/.55)**2*a:-(.45-r)/.45*a*.15}constructor(t,e){super("moon",22e22,t,e,1737e3);const n=this.visualRadius,s=new Ys().load($s("/textures/moon.jpg"),h=>{h.colorSpace=ie,h.anisotropy=4}),r=new ye(n,bh,bh),a=r.attributes.position,l=new L,c=n*.04;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,g=l.z/n,y=cr(d*8+100,f*8+200,g*8+300,4),m=cr(d*30+400,f*30+500,g*30+600,3),p=y*.7+m*.3;let x=0;p>.45?x=((p-.45)/.55)**2*c:x=-(.45-p)/.45*c*.15,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const u=new se({map:s,roughness:.95,metalness:0,color:16777215});this.mesh=new lt(r,u),this.mesh.position.set(t[0]*Da,t[1]*Da,t[2]*Da)}}const Ua=mn*gn,Sh=64,xi=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},B_=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),u=a*a*(3-2*a),h=l*l*(3-2*l),d=xi(n,i,s),f=xi(n+1,i,s),g=xi(n,i+1,s),y=xi(n+1,i+1,s),m=xi(n,i,s+1),p=xi(n+1,i,s+1),x=xi(n,i+1,s+1),_=xi(n+1,i+1,s+1);return Wi(Wi(Wi(d,f,c),Wi(g,y,c),u),Wi(Wi(m,p,c),Wi(x,_,c),u),h)},hr=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*B_(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Wi=(o,t,e)=>o+(t-o)*e;class z_ extends qn{getTerrainHeightVisual(t,e,n){const i=hr(t*4+10,e*4+20,n*4+30,5),s=hr(t*20+100,e*20+200,n*20+300,3),r=i*.7+s*.3,a=this.visualRadius*.035;return r>.4?((r-.4)/.6)**2*a:-(.4-r)/.4*a*.1}atmosphereGlow;constructor(t,e){super("mars",19e23,t,e,339e4);const n=this.visualRadius,s=new Ys().load($s("/textures/mars.jpg"),h=>{h.colorSpace=ie,h.anisotropy=4}),r=new ye(n,Sh,Sh),a=r.attributes.position,l=new L,c=n*.035;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,g=l.z/n,y=hr(d*4+10,f*4+20,g*4+30,5),m=hr(d*20+100,f*20+200,g*20+300,3),p=y*.7+m*.3;let x=0;p>.4?x=((p-.4)/.6)**2*c:x=-(.4-p)/.4*c*.1,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const u=new se({map:s,roughness:.85,metalness:0,color:16777215});this.mesh=new lt(r,u),this.mesh.position.set(t[0]*Ua,t[1]*Ua,t[2]*Ua),this.atmosphereGlow=new is(n,13920842,.25),this.mesh.add(this.atmosphereGlow.getMesh())}}function _i(o,t,e){const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)}function G_(o,t,e){const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),u=a*a*(3-2*a),h=l*l*(3-2*l),d=_i(n,i,s),f=_i(n+1,i,s),g=_i(n,i+1,s),y=_i(n+1,i+1,s),m=_i(n,i,s+1),p=_i(n+1,i,s+1),x=_i(n,i+1,s+1),_=_i(n+1,i+1,s+1);return Vi(Vi(Vi(d,f,c),Vi(g,y,c),u),Vi(Vi(m,p,c),Vi(x,_,c),u),h)}function Li(o,t,e,n){let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*G_(o*l,t*l,e*l),r+=s,s*=.5}return i/r}function Vi(o,t,e){return o+(t-o)*e}const Na=mn*gn,Th=64;class W_ extends qn{atmosphereGlow;constructor(t,e){super("jupiter",19e26,t,e,69911e3);const n=this.visualRadius,i=zx(),s=new ye(n,Th,Th),r=s.attributes.position,a=new L,l=n*.02;for(let u=0;u<r.count;u++){a.fromBufferAttribute(r,u);const h=a.x/n,d=a.y/n,f=a.z/n,g=Li(h*8+10,d*8+20,f*8+30,4),y=Li(h*30+100,d*30+200,f*30+300,3),m=g*.7+y*.3;let p=0;m>.4?p=((m-.4)/.6)**2*l:p=-(.4-m)/.4*l*.1,a.setLength(n+p),r.setXYZ(u,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new se({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new lt(s,c),this.mesh.position.set(t[0]*Na,t[1]*Na,t[2]*Na),this.mesh.rotation.z=3.1*Math.PI/180,this.atmosphereGlow=new is(n,13935988,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const Fa=mn*gn;function V_(){const e=document.createElement("canvas");e.width=1024,e.height=64;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,1024,0);i.addColorStop(0,"#8a7a5a"),i.addColorStop(.05,"#b8a888"),i.addColorStop(.12,"#d4c8a8"),i.addColorStop(.2,"#c0b898"),i.addColorStop(.35,"#e8ddd0"),i.addColorStop(.5,"#c0b090"),i.addColorStop(.65,"#d8ccb0"),i.addColorStop(.8,"#a89878"),i.addColorStop(.9,"#786858"),i.addColorStop(1,"#584838"),n.fillStyle=i,n.fillRect(0,0,1024,64);for(let r=0;r<8e3;r++){const a=Math.random()*1024,l=Math.random()*64,c=1+Math.random()*4,u=120+Math.random()*80;n.fillStyle=`rgba(${u},${u-20},${u-40},${.2+Math.random()*.4})`,n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.fill()}n.fillStyle="rgba(0,0,0,0.7)",n.fillRect(1024*.43,0,1024*.04,64),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(1024*.72,0,1024*.015,64),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(1024*.1,0,1024*.02,64),n.fillRect(1024*.17,0,1024*.01,64),n.fillRect(1024*.55,0,1024*.02,64),n.fillStyle="rgba(200,190,170,0.15)";for(let r=0;r<1024;r+=8)n.fillRect(r,0,2,64);const s=new nn(e);return s.wrapS=He,s.wrapT=He,s.anisotropy=4,s}class X_ extends qn{atmosphereGlow;constructor(t,e){super("saturn",5683e23,t,e,58232e3);const n=this.visualRadius,i=Gx(),s=new ye(n,64,32),r=s.attributes.position,a=new L,l=n*.015;for(let p=0;p<r.count;p++){a.fromBufferAttribute(r,p);const x=a.x/n,_=a.y/n,b=a.z/n,C=Li(x*8+10,_*8+20,b*8+30,4),w=Li(x*30+100,_*30+200,b*30+300,3),S=C*.7+w*.3;let O=0;S>.4?O=((S-.4)/.6)**2*l:O=-(.4-S)/.4*l*.1,a.setLength(n+O),r.setXYZ(p,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new se({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new lt(s,c),this.mesh.position.set(t[0]*Fa,t[1]*Fa,t[2]*Fa),this.mesh.rotation.z=26.7*Math.PI/180,this.atmosphereGlow=new is(n,16049313,.1),this.mesh.add(this.atmosphereGlow.getMesh());const u=V_(),h=new Pi(n*1.15,n*2.4,256),d=new Re({map:u,side:Oe,transparent:!0,opacity:.8,depthWrite:!1}),f=new lt(h,d);f.rotation.x=-Math.PI/2,f.rotation.z=26.7*Math.PI/180,this.mesh.add(f);const g=new Pi(n*2.4,n*2.8,128),y=new Re({color:8943720,side:Oe,transparent:!0,opacity:.15,depthWrite:!1}),m=new lt(g,y);m.rotation.x=-Math.PI/2,m.rotation.z=26.7*Math.PI/180,this.mesh.add(m)}}const ka=mn*gn;class q_ extends qn{atmosphereGlow;constructor(t,e){super("uranus",8681e22,t,e,25362e3);const n=this.visualRadius,i=Wx(),s=new ye(n,64,32),r=s.attributes.position,a=new L,l=n*.015;for(let f=0;f<r.count;f++){a.fromBufferAttribute(r,f);const g=a.x/n,y=a.y/n,m=a.z/n,p=Li(g*6+10,y*6+20,m*6+30,4),x=Li(g*25+400,y*25+500,m*25+600,3),_=p*.7+x*.3;let b=0;_>.4?b=((_-.4)/.6)**2*l:b=-(.4-_)/.4*l*.1,a.setLength(n+b),r.setXYZ(f,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new se({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new lt(s,c),this.mesh.position.set(t[0]*ka,t[1]*ka,t[2]*ka),this.mesh.rotation.z=-97.8*Math.PI/180,this.atmosphereGlow=new is(n,5230824,.1),this.mesh.add(this.atmosphereGlow.getMesh());const u=new Pi(n*1.2,n*2.1,64),h=new Re({color:11184844,side:Oe,transparent:!0,opacity:.3}),d=new lt(u,h);d.rotation.x=-Math.PI/2,d.rotation.z=97.8*Math.PI/180,this.mesh.add(d)}}const Oa=mn*gn;class Y_ extends qn{atmosphereGlow;constructor(t,e){super("neptune",1024e23,t,e,24622e3);const n=this.visualRadius,i=Vx(),s=new ye(n,64,32),r=s.attributes.position,a=new L,l=n*.015;for(let u=0;u<r.count;u++){a.fromBufferAttribute(r,u);const h=a.x/n,d=a.y/n,f=a.z/n,g=Li(h*6+10,d*6+20,f*6+30,4),y=Li(h*25+100,d*25+200,f*25+300,3),m=g*.7+y*.3;let p=0;m>.4?p=((m-.4)/.6)**2*l:p=-(.4-m)/.4*l*.1,a.setLength(n+p),r.setXYZ(u,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new se({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new lt(s,c),this.mesh.position.set(t[0]*Oa,t[1]*Oa,t[2]*Oa),this.mesh.rotation.z=28.3*Math.PI/180,this.atmosphereGlow=new is(n,4944093,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const As=mn*gn,$_=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`,K_=`
uniform float uTime;
uniform vec3 uColor;
uniform float uIntensity;
varying vec2 vUv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = vUv * 6.0;
  float n = fbm(uv + uTime * 0.05);
  float bright = 0.6 + n * 0.4;
  vec3 col = uColor * bright;
  float alpha = (0.8 + n * 0.2) * uIntensity;
  gl_FragColor = vec4(col, alpha);
}
`;class j_ extends Ml{light;visualRadius;mesh;constructor(t,e,n=2e26){super("sun",n,t,e),this.visualRadius=100;const i=new ye(this.visualRadius,32,16),s=new Nn({vertexShader:$_,fragmentShader:K_,uniforms:{uTime:{value:0},uColor:{value:new Rt(16763904)},uIntensity:{value:1.5}},transparent:!0,blending:fn,depthWrite:!1,side:Oe});this.mesh=new lt(i,s),this.mesh.position.set(t[0]*As,t[1]*As,t[2]*As),this.light=new Dr(16772829,5),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z);const r=Z_(),a=new hd({map:r,blending:fn,depthWrite:!1,transparent:!0,opacity:1}),l=new hy(a);l.scale.set(25e4,25e4,1),this.mesh.add(l),this.sunMaterial=s}sunMaterial;update(t){this.sunMaterial.uniforms.uTime.value+=t}syncMesh(){this.mesh.position.set(this.position[0]*As,this.position[1]*As,this.position[2]*As),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z)}}function Z_(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255, 220, 100, 1)"),n.addColorStop(.1,"rgba(255, 200, 80, 0.8)"),n.addColorStop(.3,"rgba(255, 160, 40, 0.4)"),n.addColorStop(.5,"rgba(255, 100, 20, 0.15)"),n.addColorStop(.7,"rgba(255, 60, 10, 0.05)"),n.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=new nn(t);return i.needsUpdate=!0,i}class dr{assembly;fuelTanks;constructor(t){this.assembly=t,this.fuelTanks=[],Fd(t.roots,this.fuelTanks),this.fuelTanks.sort((e,n)=>n.node.position[1]-e.node.position[1])}dryMass(){return this.assembly.totalMass()}totalFuelMass(){return this.fuelTanks.reduce((t,e)=>t+e.remaining,0)}totalMass(){return this.dryMass()+this.totalFuelMass()}consumeFuel(t,e){let n=0;for(let i=this.fuelTanks.length-1;i>=0;i--){const s=this.fuelTanks[i];if(s.remaining<=0)continue;const r=t*e-n;if(r<=0)break;const a=Math.min(s.remaining,r);s.remaining-=a,n+=a}return n}removeStage(t){const e=this.assembly.roots,n=t.position[1],i=new Set,s=r=>{i.add(r),r.children.forEach(s)};for(const r of e)(r===t||r.position[1]<n)&&s(r);this.fuelTanks=this.fuelTanks.filter(r=>!i.has(r.node)),this.assembly.roots=e.filter(r=>!i.has(r)),t.children=[]}}function Fd(o,t){for(const e of o)e.part.fuelCapacity&&t.push({node:e,remaining:e.part.fuelCapacity,capacity:e.part.fuelCapacity}),Fd(e.children,t)}const Eh="ellipse_achievements";class J_{unlocked=new Set;callbacks=[];constructor(){const t=localStorage.getItem(Eh);if(t)try{JSON.parse(t).forEach(e=>this.unlocked.add(e))}catch{}}unlock(t){this.unlocked.has(t)||(this.unlocked.add(t),localStorage.setItem(Eh,JSON.stringify([...this.unlocked])),this.callbacks.forEach(e=>e(t)))}isUnlocked(t){return this.unlocked.has(t)}list(){return[...this.unlocked]}onUnlock(t){this.callbacks.push(t)}}const Q_=[{id:"first_launch",name:"First Launch",description:"Successful liftoff from the pad"},{id:"reach_space",name:"Edge of Space",description:"Reach 100 km altitude"},{id:"reach_orbit",name:"Orbital",description:"Achieve a stable orbit"},{id:"first_landing",name:"Soft Touchdown",description:"Land at v < 3 m/s"},{id:"parachute_landing",name:"Parachute Pioneer",description:"Land using only a parachute"},{id:"moon_landing",name:"Moon Walker",description:"Land on the Moon"},{id:"no_damage",name:"Pristine",description:"Complete a flight without damage"},{id:"one_stage",name:"Single Stage",description:"Reach orbit without staging"},{id:"crash",name:"Rapid Unscheduled Disassembly",description:"Crash your rocket"},{id:"land_earth",name:"Home Sweet Home",description:"Land safely on Earth"},{id:"land_moon",name:"Lunar Landing",description:"Land safely on the Moon"},{id:"land_mars",name:"Red Planet Touchdown",description:"Land safely on Mars"},{id:"land_venus",name:"Venusian Visit",description:"Land safely on Venus"},{id:"land_mercury",name:"Mercurial Touch",description:"Land safely on Mercury"},{id:"stage_separate",name:"Stage Separation",description:"Separate a stage in flight"}],wh="ellipse_missions_completed",Ah="ellipse_missions_score";class tv{completed=new Set;stageCountThisFlight=0;landedThisFrame=!1;score=0;onScoreChange=[];constructor(){const t=localStorage.getItem(wh);if(t)try{JSON.parse(t).forEach(e=>this.completed.add(e))}catch{}this.score=parseInt(localStorage.getItem(Ah)??"0",10)||0}get totalScore(){return this.score}getCompleted(){return[...this.completed]}isCompleted(t){return this.completed.has(t)}onScore(t){this.onScoreChange.push(t)}recordStageSeparation(){this.stageCountThisFlight++,this.tryUnlock("stage_master",this.stageCountThisFlight>=3)}recordLanding(t){this.landedThisFrame=!0,t==="earth"?this.tryUnlock("land_earth",!0):t==="moon"?this.tryUnlock("land_moon",!0):t==="mars"&&this.tryUnlock("land_mars",!0)}resetFlight(){this.stageCountThisFlight=0,this.landedThisFrame=!1}evaluate(t){t.launched&&this.tryUnlock("first_flight",!0),t.maxAltitude>=1e4&&this.tryUnlock("reach_10km",!0),t.maxAltitude>=1e5&&this.tryUnlock("reach_space",!0),t.maxSpeed>=3e3&&this.tryUnlock("speed_demon",!0),t.maxSpeed>=7e3&&this.tryUnlock("ev_astronaut",!0),t.bound&&t.periapsis>8e4&&t.refBody==="earth"&&this.tryUnlock("reach_orbit",!0),t.bound&&t.apoapsis>5e5&&t.refBody==="earth"&&this.tryUnlock("high_orbit",!0),t.bound&&t.periapsis>1e3&&t.refBody==="moon"&&this.tryUnlock("munar_orbit",!0)}tryUnlock(t,e){if(!e||this.completed.has(t))return;this.completed.add(t),localStorage.setItem(wh,JSON.stringify([...this.completed]));const n=yr.find(i=>i.id===t);n&&(this.score+=n.reward,localStorage.setItem(Ah,String(this.score)),this.onScoreChange.forEach(i=>i(this.score)),Xt.show(`☑ ${n.name} (+${n.reward})`,3200))}}const Ha={units:"metric",autoSave:!0,difficulty:"normal",musicVolume:.7,sfxVolume:.8},kd="ellipse_settings";function ev(){const o=localStorage.getItem(kd);if(!o)return{...Ha};try{return{...Ha,...JSON.parse(o)}}catch{return{...Ha}}}function Rh(o){localStorage.setItem(kd,JSON.stringify(o))}class nv{root;onClose;current;constructor(t,e){this.current=t,this.onClose=e,this.root=document.createElement("div"),this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(6, 8, 20, 0.88);
      display: flex; align-items: center; justify-content: center;
    `;const n=document.createElement("div");n.className="panel panel--elevated",n.style.cssText="padding: var(--space-6); min-width: 400px;";const i=document.createElement("h2");i.className="text-display-sm",i.textContent="Settings",i.style.cssText="margin: 0 0 var(--space-5);",n.appendChild(i);const s=this.makeRow("Units",["metric","imperial"],t.units,c=>{this.current.units=c});n.appendChild(s);const r=this.makeRow("Difficulty",["easy","normal","hard","realistic"],t.difficulty,c=>{this.current.difficulty=c});n.appendChild(r);const a=this.makeToggle("Auto-save",t.autoSave,c=>{this.current.autoSave=c});n.appendChild(a);const l=document.createElement("button");l.className="btn btn--primary",l.textContent="Save & Close",l.style.cssText="margin-top: var(--space-4); width: 100%; padding: 12px;",l.addEventListener("click",()=>{Rh(this.current),this.onClose()}),n.appendChild(l),this.root.appendChild(n)}makeRow(t,e,n,i){const s=document.createElement("div");s.style.cssText="margin: var(--space-3) 0;";const r=document.createElement("div");r.className="text-caption",r.textContent=t,r.style.cssText="margin-bottom: var(--space-2);",s.appendChild(r);const a=document.createElement("div");a.style.cssText="display:flex;gap:var(--space-2);";for(const l of e){const c=document.createElement("button");c.className=`btn${l===n?" btn--secondary":""}`,c.textContent=l,l===n&&(c.style.borderColor="var(--accent-blue)"),c.addEventListener("click",()=>{i(l),Rh(this.current)}),a.appendChild(c)}return s.appendChild(a),s}makeToggle(t,e,n){const i=document.createElement("div");i.style.cssText="margin: var(--space-3) 0; display: flex; justify-content: space-between; align-items: center;";const s=document.createElement("span");s.className="text-body",s.textContent=t;const r=document.createElement("input");return r.type="checkbox",r.checked=e,r.addEventListener("change",()=>n(r.checked)),i.appendChild(s),i.appendChild(r),i}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove()}}function ur(o){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle=o,e.fillRect(0,0,64,64),e.strokeStyle="#000",e.lineWidth=2,e.strokeRect(0,0,64,64),e.strokeRect(16,16,32,32);const n=new nn(t);return n.wrapS=n.wrapT=_n,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}ur("#8899aa"),ur("#808080"),ur("#808080"),ur("#000000");async function Ki(o,t=ie){const e=await new Promise((i,s)=>{const r=new Image;r.onload=()=>i(r),r.onerror=()=>s(new Error(`Failed: ${o}`)),r.src=o}),n=new Be(e);return n.colorSpace=t,n.wrapS=n.wrapT=_n,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}async function fr(o){const[t,e,n,i]=await Promise.all([Ki(`/textures/${o}_color.jpg`,ie),Ki(`/textures/${o}_normal.jpg`,Pe),Ki(`/textures/${o}_rough.jpg`,Pe),Ki(`/textures/${o}_metal.jpg`,Pe)]);return{color:t,normal:e,roughness:n,metalness:i}}let iv=!1,sv=null,ov=null,rv=null,av=null,lv=null,pr=null;function cv(){return pr||(pr=(async()=>{try{[sv,ov,rv,av,lv]=await Promise.all([fr("metal013"),fr("plates"),fr("metal009"),fr("metal021"),(async()=>{const[o,t,e]=await Promise.all([Ki("/textures/fabric_color.jpg",ie),Ki("/textures/fabric_normal.jpg",Pe),Ki("/textures/fabric_rough.jpg",Pe)]);return{color:o,normal:t,roughness:e,metalness:e}})()]),iv=!0}catch(o){console.error("Texture loading failed, using fallback",o)}})(),pr)}class hv{renderer;sceneMgr;system;achievements;missions;mainMenu;vab;flight;constructor(){cv(),this.renderer=new Yy,this.sceneMgr=new Ky,this.achievements=new J_,this.missions=new tv,this.system=new w_;const t=2e26;this.system.add(new j_([0,0,0],[0,0,0],t)),this.system.add(new R_([2e8,0,2e7],[0,0,38e3])),this.system.add(new I_([6e8,0,-6e7],[0,0,21e3]));const e=[1e9,0,0],n=[0,0,17e3];this.system.add(new k_(e,n));const i=[e[0],0,e[2]+6e7],s=[0,0,n[2]+900];this.system.add(new H_(i,s)),this.system.add(new z_([15e8,1e9,-4e8],[0,0,13500])),this.system.add(new W_([3e9,-6e8,2e8],[0,0,9e3])),this.system.add(new X_([56e8,4e8,-4e8],[0,0,6800])),this.system.add(new q_([11e9,-2e8,6e8],[0,0,4800])),this.system.add(new Y_([17e9,8e8,0],[0,0,3800])),this.system.add(new D_([23e9,16e8,-1e9],[0,0,2e3])),document.getElementById("app").appendChild(this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.sceneMgr.camera.aspect=window.innerWidth/window.innerHeight,this.sceneMgr.camera.updateProjectionMatrix()}),this.achievements.onUnlock(r=>{const l=Q_.find(u=>u.id===r)?.name??r,c=document.createElement("div");c.className="achievement-pop",c.style.cssText="position:fixed;top:80px;right:16px;z-index:310;background:rgba(8,10,24,0.92);border:1px solid var(--accent-gold);border-radius:8px;padding:10px 14px;box-shadow:var(--shadow-glow-gold);font-family:system-ui,sans-serif;max-width:240px;pointer-events:none;",c.innerHTML=`<div style="color:var(--accent-gold);font-size:9px;letter-spacing:0.15em;margin-bottom:2px;">★ ACHIEVEMENT</div><div style="color:var(--text-primary);font-size:13px;font-weight:600;">${l}</div>`,document.body.appendChild(c),setTimeout(()=>{c.style.transition="opacity 300ms ease-in, transform 300ms ease-in",c.style.opacity="0",c.style.transform="translateX(40px)",setTimeout(()=>c.remove(),320)},3200)})}async start(){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:9998;background:var(--space-deep);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;font-family:system-ui,sans-serif;",t.innerHTML=`
      <div style="width:46px;height:46px;border:2px solid rgba(234,205,158,0.2);border-top-color:var(--accent-gold);border-radius:50%;animation:spin 0.9s linear infinite;"></div>
      <div style="color:var(--accent-gold);font-size:13px;letter-spacing:0.2em;">LOADING</div>
      <div id="load-progress" style="color:rgba(244,245,242,0.4);font-size:10px;letter-spacing:0.1em;">preparing assets</div>
    `;const e=document.createElement("style");e.textContent="@keyframes spin{to{transform:rotate(360deg);}}",document.head.appendChild(e),document.body.appendChild(t);const n=t.querySelector("#load-progress"),i=["/models/agena.glb","/models/saturn_v.glb","/models/apollo_soyuz.glb","/models/ares_1.glb","/models/apollo_lunar_module.glb","/models/atlas_6.glb","/models/atlas_9.glb","/models/crawler.glb"],{loadGLTF:s}=await Ch(async()=>{const{loadGLTF:a}=await Promise.resolve().then(()=>Ad);return{loadGLTF:a}},void 0);let r=0;await Promise.allSettled(i.map(async a=>{await s(a,1),r++,n&&(n.textContent=`${r}/${i.length} models`)})),t.style.transition="opacity 320ms ease-out",requestAnimationFrame(()=>{t.style.opacity="0"}),setTimeout(()=>{t.remove(),e.remove()},360),this.showMainMenu(),this.loop()}collectUnknownPartIds(t){const e=[],n=i=>{for(const s of i)Cs(s.partId)||e.push(String(s.partId)),Array.isArray(s.children)&&n(s.children)};return n(t??[]),[...new Set(e)]}showMainMenu(){this.transitionTo(()=>{this.unmountCurrent(),this.sceneMgr.scene.background=new Rt(0);const t=c_()||a_()?()=>{const e=Ud();if(e){const i=this.collectUnknownPartIds(e.assembly);if(i.length>0){Xt.show(`Saved flight has unknown parts (${i.join(", ")}) — old save, starting fresh`,5e3),yh(),this.showFlight();return}for(const r of e.bodies){const a=this.system.bodies.find(l=>l.name===r.name);a&&(a.position=[...r.position],a.velocity=[...r.velocity],a.syncMesh?.())}const s=Ld(e.assembly);if(s){const r=new dr(s);this.showFlight(r,e);return}}const n=r_();if(n){const i=new dr(n);this.showFlight(i)}else this.showFlight()}:null;this.mainMenu=new jy(()=>this.showFlight(),()=>this.showVab(),()=>this.showSettings(),t??void 0,this.missions),this.mainMenu.mount()})}showSettings(){const t=new nv(ev(),()=>t.unmount());t.mount()}showVab(){this.transitionTo(()=>{this.unmountCurrent(),this.vab=new h_(t=>{const e=new dr(t);this.showFlight(e)},()=>this.showMainMenu()),this.vab.mount(),this.sceneMgr.scene.add(this.vab.scene)})}async showFlight(t,e){this.transitionTo(()=>{this.unmountCurrent(),e||yh();const n=t?.assembly??new fo;if(!t){const s=Ce,r={S:1.4*s,M:2*s},a=0;let l=-.06999999999999999/2;const c=g=>{const y=l+g/2;return l+=g+a,y},u=c(r.S),h=c(r.S),d=c(r.S),f=c(r.M);n.addRoot({part:Cs("engine_ant"),position:[0,u,0],rotation:0,children:[]}),n.addRoot({part:Cs("tank_s_lfo"),position:[0,h,0],rotation:0,children:[]}),n.addRoot({part:Cs("tank_s_lfo"),position:[0,d,0],rotation:0,children:[]}),n.addRoot({part:Cs("capsule_mk1"),position:[0,f,0],rotation:0,children:[]})}const i=new dr(n);this.flight=new bn(this.renderer,this.sceneMgr,this.system,i,this.achievements,this.missions,e),this.flight.onCrashAction=s=>{s==="menu"?this.showMainMenu():this.showFlight(t)}})}transitionTo(t){const e=document.createElement("div");e.className="scene-fade fade-in",document.body.appendChild(e),setTimeout(()=>{t(),e.classList.remove("fade-in"),e.classList.add("fade-out"),setTimeout(()=>e.remove(),640)},280)}unmountCurrent(){this.mainMenu?.unmount(),this.mainMenu=void 0,this.vab&&(this.vab.unmount(),this.sceneMgr.scene.remove(this.vab.scene),this.vab=void 0),this.flight?.dispose(),this.flight=void 0}lastFrameTime=performance.now();loop(){const t=performance.now(),e=Math.min(Math.max((t-this.lastFrameTime)/1e3,5e-4),.05);this.lastFrameTime=t,this.sceneMgr.update(e),this.flight?.update(e),this.vab?this.renderer.three.render(this.vab.scene,this.vab.camera):this.renderer.three.render(this.sceneMgr.scene,this.sceneMgr.camera),requestAnimationFrame(()=>this.loop())}}function dv(){const o=document.getElementById("loading-screen");o&&o.classList.add("hidden");const t=document.getElementById("loading-label");t&&(t.dataset.done="1")}try{new hv().start()}catch(o){console.error("Failed to start Ellipse:",o),dv(),document.body.innerHTML+=`<div style="position:fixed;inset:0;z-index:950;color:white;padding:32px;font-family:monospace;background:#06080f;">
      <h1>Failed to start</h1>
      <pre>${String(o)}</pre>
    </div>`}
//# sourceMappingURL=index-2jNEQ2ku.js.map
