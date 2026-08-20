(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Id="modulepreload",Dd=function(o){return"/ellipse/"+o},ml={},Th=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=r?.nonce||r?.getAttribute("nonce");i=Promise.allSettled(e.map(l=>{if(l=Dd(l),l in ml)return;ml[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Id,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,f)=>{h.addEventListener("load",d),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="160",Ud=0,gl=1,Nd=2,Eh=1,Fd=2,Kn=3,Ln=0,rn=1,Be=2,gi=0,yi=1,dn=2,yl=3,_l=4,kd=5,Bi=100,Od=101,Hd=102,xl=103,vl=104,Bd=200,zd=201,Gd=202,Wd=203,Ua=204,Na=205,Vd=206,Xd=207,qd=208,Yd=209,Kd=210,$d=211,jd=212,Zd=213,Jd=214,Qd=0,tu=1,eu=2,hr=3,nu=4,iu=5,su=6,ou=7,Za=0,ru=1,au=2,Jn=0,lu=1,cu=2,hu=3,du=4,uu=5,fu=6,Ml="attached",pu="detached",wh=300,As=301,Rs=302,Fa=303,ka=304,xr=306,_n=1e3,ze=1001,dr=1002,Ye=1003,Oa=1004,rr=1005,Je=1006,Ah=1007,Ki=1008,_i=1009,mu=1010,gu=1011,Ja=1012,Rh=1013,pi=1014,jn=1015,ro=1016,Ch=1017,Ph=1018,Vi=1020,yu=1021,fn=1023,_u=1024,xu=1025,Xi=1026,Cs=1027,vu=1028,Lh=1029,Mu=1030,Ih=1031,Dh=1033,Ir=33776,Dr=33777,Ur=33778,Nr=33779,bl=35840,Sl=35841,Tl=35842,El=35843,Uh=36196,wl=37492,Al=37496,Rl=37808,Cl=37809,Pl=37810,Ll=37811,Il=37812,Dl=37813,Ul=37814,Nl=37815,Fl=37816,kl=37817,Ol=37818,Hl=37819,Bl=37820,zl=37821,Fr=36492,Gl=36494,Wl=36495,bu=36283,Vl=36284,Xl=36285,ql=36286,ao=2300,Ps=2301,kr=2302,Yl=2400,Kl=2401,$l=2402,Su=2500,Tu=0,Nh=1,Ha=2,Fh=3e3,qi=3001,Eu=3200,wu=3201,Qa=0,Au=1,Sn="",Qt="srgb",Le="srgb-linear",tl="display-p3",vr="display-p3-linear",ur="linear",Ee="srgb",fr="rec709",pr="p3",Qi=7680,jl=519,Ru=512,Cu=513,Pu=514,kh=515,Lu=516,Iu=517,Du=518,Uu=519,Ba=35044,Zl="300 es",za=1035,Zn=2e3,mr=2001;class Ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const eo=Math.PI/180,Ls=180/Math.PI;function Pn(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[o&255]+je[o>>8&255]+je[o>>16&255]+je[o>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Qe(o,t,e){return Math.max(t,Math.min(e,o))}function el(o,t){return(o%t+t)%t}function Nu(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function Fu(o,t,e){return o!==t?(e-o)/(t-o):0}function no(o,t,e){return(1-e)*o+e*t}function ku(o,t,e,n){return no(o,t,1-Math.exp(-e*n))}function Ou(o,t=1){return t-Math.abs(el(o,t*2)-t)}function Hu(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Bu(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function zu(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Gu(o,t){return o+Math.random()*(t-o)}function Wu(o){return o*(.5-Math.random())}function Vu(o){o!==void 0&&(Jl=o);let t=Jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xu(o){return o*eo}function qu(o){return o*Ls}function Ga(o){return(o&o-1)===0&&o!==0}function Yu(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function gr(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Ku(o,t,e,n,i){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+n)/2),u=r((t+n)/2),h=s((t-n)/2),d=r((t-n)/2),f=s((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":o.set(a*u,l*h,l*d,a*c);break;case"YZY":o.set(l*d,a*u,l*h,a*c);break;case"ZXZ":o.set(l*h,l*d,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ye(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const $u={DEG2RAD:eo,RAD2DEG:Ls,generateUUID:Pn,clamp:Qe,euclideanModulo:el,mapLinear:Nu,inverseLerp:Fu,lerp:no,damp:ku,pingpong:Ou,smoothstep:Hu,smootherstep:Bu,randInt:zu,randFloat:Gu,randFloatSpread:Wu,seededRandom:Vu,degToRad:Xu,radToDeg:qu,isPowerOfTwo:Ga,ceilPowerOfTwo:Yu,floorPowerOfTwo:gr,setQuaternionFromProperEuler:Ku,normalize:ye,denormalize:On};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,s,r,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c)}set(t,e,n,i,s,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],y=i[0],m=i[3],p=i[6],_=i[1],M=i[4],S=i[7],R=i[2],w=i[5],T=i[8];return s[0]=r*y+a*_+l*R,s[3]=r*m+a*M+l*w,s[6]=r*p+a*S+l*T,s[1]=c*y+u*_+h*R,s[4]=c*m+u*M+h*w,s[7]=c*p+u*S+h*T,s[2]=d*y+f*_+g*R,s[5]=d*m+f*M+g*w,s[8]=d*p+f*S+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-n*s*u+n*a*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*r-a*c,d=a*l-u*s,f=c*s-r*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=h*y,t[1]=(i*c-u*n)*y,t[2]=(a*n-i*r)*y,t[3]=d*y,t[4]=(u*e-i*l)*y,t[5]=(i*s-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(r*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Or.makeScale(t,e)),this}rotate(t){return this.premultiply(Or.makeRotation(-t)),this}translate(t,e){return this.premultiply(Or.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Or=new Jt;function Oh(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function lo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ju(){const o=lo("canvas");return o.style.display="block",o}const Ql={};function io(o){o in Ql||(Ql[o]=!0,console.warn(o))}const tc=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ec=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),go={[Le]:{transfer:ur,primaries:fr,toReference:o=>o,fromReference:o=>o},[Qt]:{transfer:Ee,primaries:fr,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[vr]:{transfer:ur,primaries:pr,toReference:o=>o.applyMatrix3(ec),fromReference:o=>o.applyMatrix3(tc)},[tl]:{transfer:Ee,primaries:pr,toReference:o=>o.convertSRGBToLinear().applyMatrix3(ec),fromReference:o=>o.applyMatrix3(tc).convertLinearToSRGB()}},Zu=new Set([Le,vr]),de={enabled:!0,_workingColorSpace:Le,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Zu.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=go[t].toReference,i=go[e].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return go[o].primaries},getTransfer:function(o){return o===Sn?ur:go[o].transfer}};function Es(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Hr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ts;class Hh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=lo("canvas")),ts.width=t.width,ts.height=t.height;const n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Es(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Es(e[n]/255)*255):e[n]=Es(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ju=0;class Bh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Pn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Br(i[r].image)):s.push(Br(i[r]))}else s=Br(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Br(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Hh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qu=0;class Ge extends Ns{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=ze,i=ze,s=Je,r=Ki,a=fn,l=_i,c=Ge.DEFAULT_ANISOTROPY,u=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Pn(),this.name="",this.source=new Bh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===qi?Qt:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _n:t.x=t.x-Math.floor(t.x);break;case ze:t.x=t.x<0?0:1;break;case dr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _n:t.y=t.y-Math.floor(t.y);break;case ze:t.y=t.y<0?0:1;break;case dr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?qi:Fh}set encoding(t){io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qi?Qt:Sn}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=wh;Ge.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(f+1)/2,R=(p+1)/2,w=(u+d)/4,T=(h+y)/4,O=(g+m)/4;return M>S&&M>R?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=T/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=O/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=O/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-y)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tf extends Ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qi?Qt:Sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ge(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends tf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zh extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ef extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],y=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(h!==y||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*y,_=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),w=Math.atan2(R,p*_);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R}const S=a*_;if(l=l*m+d*S,c=c*m+f*S,u=u*m+g*S,h=h*m+y*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return t[e]=a*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-a*f,t[e+2]=c*g+u*f+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*a+i*c-s*l,this._y=i*u+r*l+s*a-n*c,this._z=s*u+r*c+n*l-i*a,this._w=r*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),u=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+l*c+r*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new P,nc=new un;class En{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,An):An.fromBufferAttribute(s,r),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(t.matrixWorld),this.union(yo)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),_o.subVectors(this.max,Ws),es.subVectors(t.a,Ws),ns.subVectors(t.b,Ws),is.subVectors(t.c,Ws),ei.subVectors(ns,es),ni.subVectors(is,ns),Ei.subVectors(es,is);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Ei.z,Ei.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Ei.z,0,-Ei.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Ei.y,Ei.x,0];return!Gr(e,es,ns,is,_o)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,es,ns,is,_o))?!1:(xo.crossVectors(ei,ni),e=[xo.x,xo.y,xo.z],Gr(e,es,ns,is,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new P,new P,new P,new P,new P,new P,new P,new P],An=new P,yo=new En,es=new P,ns=new P,is=new P,ei=new P,ni=new P,Ei=new P,Ws=new P,_o=new P,xo=new P,wi=new P;function Gr(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){wi.fromArray(o,s);const a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const nf=new En,Vs=new P,Wr=new P;class Hn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Wr)),this.expandByPoint(Vs.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new P,Vr=new P,vo=new P,ii=new P,Xr=new P,Mo=new P,qr=new P;class Mr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vr.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Vr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(vo),a=ii.dot(this.direction),l=-ii.dot(vo),c=ii.lengthSq(),u=Math.abs(1-r*r);let h,d,f,g;if(u>0)if(h=r*l-a,d=r*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,f=h*(h+r*d+2*a)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Vr).addScaledVector(vo,d),f}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,i,s){Xr.subVectors(e,t),Mo.subVectors(n,t),qr.crossVectors(Xr,Mo);let r=this.direction.dot(qr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ii.subVectors(this.origin,t);const l=a*this.direction.dot(Mo.crossVectors(ii,Mo));if(l<0)return null;const c=a*this.direction.dot(Xr.cross(ii));if(c<0||l+c>r)return null;const u=-a*ii.dot(qr);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,i,s,r,a,l,c,u,h,d,f,g,y,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c,u,h,d,f,g,y,m)}set(t,e,n,i,s,r,a,l,c,u,h,d,f,g,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ss.setFromMatrixColumn(t,0).length(),s=1/ss.setFromMatrixColumn(t,1).length(),r=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=r*u,f=r*h,g=a*u,y=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,y=c*h;e[0]=d+y*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=f*a-g,e[6]=y+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,y=c*h;e[0]=d-y*a,e[4]=-r*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*u,e[9]=y-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*u,f=r*h,g=a*u,y=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*h,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,g=a*l,y=a*c;e[0]=l*u,e[4]=y-d*h,e[8]=g*h+f,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-y*h}else if(t.order==="XZY"){const d=r*l,f=r*c,g=a*l,y=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+y,e[5]=r*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=y*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sf,t,of)}lookAt(t,e,n){const i=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),si.crossVectors(n,gn),si.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),si.crossVectors(n,gn)),si.normalize(),bo.crossVectors(gn,si),i[0]=si.x,i[4]=bo.x,i[8]=gn.x,i[1]=si.y,i[5]=bo.y,i[9]=gn.y,i[2]=si.z,i[6]=bo.z,i[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],_=n[3],M=n[7],S=n[11],R=n[15],w=i[0],T=i[4],O=i[8],v=i[12],E=i[1],F=i[5],k=i[9],q=i[13],L=i[2],G=i[6],W=i[10],$=i[14],j=i[3],K=i[7],Q=i[11],rt=i[15];return s[0]=r*w+a*E+l*L+c*j,s[4]=r*T+a*F+l*G+c*K,s[8]=r*O+a*k+l*W+c*Q,s[12]=r*v+a*q+l*$+c*rt,s[1]=u*w+h*E+d*L+f*j,s[5]=u*T+h*F+d*G+f*K,s[9]=u*O+h*k+d*W+f*Q,s[13]=u*v+h*q+d*$+f*rt,s[2]=g*w+y*E+m*L+p*j,s[6]=g*T+y*F+m*G+p*K,s[10]=g*O+y*k+m*W+p*Q,s[14]=g*v+y*q+m*$+p*rt,s[3]=_*w+M*E+S*L+R*j,s[7]=_*T+M*F+S*G+R*K,s[11]=_*O+M*k+S*W+R*Q,s[15]=_*v+M*q+S*$+R*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+y*(+e*l*f-e*c*d+s*r*d-i*r*f+i*c*u-s*l*u)+m*(+e*c*h-e*a*f-s*r*h+n*r*f+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*d+i*r*h-n*r*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],_=h*m*c-y*d*c+y*l*f-a*m*f-h*l*p+a*d*p,M=g*d*c-u*m*c-g*l*f+r*m*f+u*l*p-r*d*p,S=u*y*c-g*h*c+g*a*f-r*y*f-u*a*p+r*h*p,R=g*h*l-u*y*l-g*a*d+r*y*d+u*a*m-r*h*m,w=e*_+n*M+i*S+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=_*T,t[1]=(y*d*s-h*m*s-y*i*f+n*m*f+h*i*p-n*d*p)*T,t[2]=(a*m*s-y*l*s+y*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*T,t[4]=M*T,t[5]=(u*m*s-g*d*s+g*i*f-e*m*f-u*i*p+e*d*p)*T,t[6]=(g*l*s-r*m*s-g*i*c+e*m*c+r*i*p-e*l*p)*T,t[7]=(r*d*s-u*l*s+u*i*c-e*d*c-r*i*f+e*l*f)*T,t[8]=S*T,t[9]=(g*h*s-u*y*s-g*n*f+e*y*f+u*n*p-e*h*p)*T,t[10]=(r*y*s-g*a*s+g*n*c-e*y*c-r*n*p+e*a*p)*T,t[11]=(u*a*s-r*h*s-u*n*c+e*h*c+r*n*f-e*a*f)*T,t[12]=R*T,t[13]=(u*y*i-g*h*i+g*n*d-e*y*d-u*n*m+e*h*m)*T,t[14]=(g*a*i-r*y*i-g*n*l+e*y*l+r*n*m-e*a*m)*T,t[15]=(r*h*i-u*a*i+u*n*l-e*h*l-r*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,c=s*r,u=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*r,0,c*l-i*a,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,u=r+r,h=a+a,d=s*c,f=s*u,g=s*h,y=r*u,m=r*h,p=a*h,_=l*c,M=l*u,S=l*h,R=n.x,w=n.y,T=n.z;return i[0]=(1-(y+p))*R,i[1]=(f+S)*R,i[2]=(g-M)*R,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(d+p))*w,i[6]=(m+_)*w,i[7]=0,i[8]=(g+M)*T,i[9]=(m-_)*T,i[10]=(1-(d+y))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ss.set(i[0],i[1],i[2]).length();const r=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Rn.copy(this);const c=1/s,u=1/r,h=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,e.setFromRotationMatrix(Rn),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=Zn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===Zn)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===mr)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=Zn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(r-s),d=(e+t)*c,f=(n+i)*u;let g,y;if(a===Zn)g=(r+s)*h,y=-2*h;else if(a===mr)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new P,Rn=new Zt,sf=new P(0,0,0),of=new P(1,1,1),si=new P,bo=new P,gn=new P,ic=new Zt,sc=new un;class br{constructor(t=0,e=0,n=0,i=br.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sc.setFromEuler(this),this.setFromQuaternion(sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class Gh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rf=0;const oc=new P,os=new un,Vn=new Zt,So=new P,Xs=new P,af=new P,lf=new un,rc=new P(1,0,0),ac=new P(0,1,0),lc=new P(0,0,1),cf={type:"added"},hf={type:"removed"};class we extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new P,e=new br,n=new un,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Jt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(ac,t)}rotateZ(t){return this.rotateOnAxis(lc,t)}translateOnAxis(t,e){return oc.copy(t).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(ac,t)}translateZ(t){return this.translateOnAxis(lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?So.copy(t):So.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Xs,So,this.up):Vn.lookAt(So,Xs,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Vn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(cf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new P(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new P,Xn=new P,Yr=new P,qn=new P,rs=new P,as=new P,cc=new P,Kr=new P,$r=new P,jr=new P;let To=!1;class bn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Cn.subVectors(t,e),i.cross(Cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Cn.subVectors(i,e),Xn.subVectors(n,e),Yr.subVectors(t,e);const r=Cn.dot(Cn),a=Cn.dot(Xn),l=Cn.dot(Yr),c=Xn.dot(Xn),u=Xn.dot(Yr),h=r*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(r*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(t,e,n,i,s,r,a,l){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),this.getInterpolation(t,e,n,i,s,r,a,l)}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(r,qn.y),l.addScaledVector(a,qn.z),l)}static isFrontFacing(t,e,n,i){return Cn.subVectors(n,e),Xn.subVectors(t,e),Cn.cross(Xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Cn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),bn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;rs.subVectors(i,n),as.subVectors(s,n),Kr.subVectors(t,n);const l=rs.dot(Kr),c=as.dot(Kr);if(l<=0&&c<=0)return e.copy(n);$r.subVectors(t,i);const u=rs.dot($r),h=as.dot($r);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(rs,r);jr.subVectors(t,s);const f=rs.dot(jr),g=as.dot(jr);if(g>=0&&f<=g)return e.copy(s);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(as,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return cc.subVectors(s,i),a=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(cc,a);const p=1/(m+y+d);return r=y*p,a=d*p,e.copy(n).addScaledVector(rs,r).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Zr(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=el(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Zr(r,s,t+1/3),this.g=Zr(r,s,t),this.b=Zr(r,s,t-1/3)}return de.toWorkingColorSpace(this,i),this}setStyle(t,e=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qt){const n=Wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qt){return de.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Qe(Ze.r*255,0,255))*65536+Math.round(Qe(Ze.g*255,0,255))*256+Math.round(Qe(Ze.b*255,0,255))}getHexString(t=Qt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(Ze.copy(this),e);const n=Ze.r,i=Ze.g,s=Ze.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const h=r-a;switch(c=u<=.5?h/(r+a):h/(2-r-a),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Qt){de.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,i=Ze.b;return t!==Qt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Eo);const n=no(oi.h,Eo.h,e),i=no(oi.s,Eo.s,e),s=no(oi.l,Eo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new Tt;Tt.NAMES=Wh;let df=0;class Tn extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=yi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pe extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new P,wo=new Wt;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ba,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ba&&(t.usage=this.usage),t}}class Vh extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xh extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let uf=0;const vn=new Zt,Jr=new we,ls=new P,yn=new En,qs=new En,qe=new P;class Fe extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oh(t)?Xh:Vh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Jr.lookAt(t),Jr.updateMatrix(),this.applyMatrix4(Jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(yn.min,qs.min),yn.expandByPoint(qe),qe.addVectors(yn.max,qs.max),yn.expandByPoint(qe)):(yn.expandByPoint(qs.min),yn.expandByPoint(qs.max))}yn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qe.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(t,c),qe.add(ls)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new P,u[E]=new P;const h=new P,d=new P,f=new P,g=new Wt,y=new Wt,m=new Wt,p=new P,_=new P;function M(E,F,k){h.fromArray(i,E*3),d.fromArray(i,F*3),f.fromArray(i,k*3),g.fromArray(r,E*2),y.fromArray(r,F*2),m.fromArray(r,k*2),d.sub(h),f.sub(h),y.sub(g),m.sub(g);const q=1/(y.x*m.y-m.x*y.y);isFinite(q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-y.y).multiplyScalar(q),_.copy(f).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(q),c[E].add(p),c[F].add(p),c[k].add(p),u[E].add(_),u[F].add(_),u[k].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,F=S.length;E<F;++E){const k=S[E],q=k.start,L=k.count;for(let G=q,W=q+L;G<W;G+=3)M(n[G+0],n[G+1],n[G+2])}const R=new P,w=new P,T=new P,O=new P;function v(E){T.fromArray(s,E*3),O.copy(T);const F=c[E];R.copy(F),R.sub(T.multiplyScalar(T.dot(F))).normalize(),w.crossVectors(O,F);const q=w.dot(u[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=q}for(let E=0,F=S.length;E<F;++E){const k=S[E],q=k.start,L=k.count;for(let G=q,W=q+L;G<W;G+=3)v(n[G+0]),v(n[G+1]),v(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,r=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,m),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new De(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new Zt,Ai=new Mr,Ao=new Hn,dc=new P,cs=new P,hs=new P,ds=new P,Qr=new P,Ro=new P,Co=new Wt,Po=new Wt,Lo=new Wt,uc=new P,fc=new P,pc=new P,Io=new P,Do=new P;class ot extends we{constructor(t=new Fe,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Qr.fromBufferAttribute(h,t),r?Ro.addScaledVector(Qr,u):Ro.addScaledVector(Qr.sub(e),u))}e.add(Ro)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ai.copy(t.ray).recast(t.near),!(Ao.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Ao,dc)===null||Ai.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(hc.copy(s).invert(),Ai.copy(t.ray).applyMatrix4(hc),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=r[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=_,R=M;S<R;S+=3){const w=a.getX(S),T=a.getX(S+1),O=a.getX(S+2);i=Uo(this,p,t,n,c,u,h,w,T,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const _=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);i=Uo(this,r,t,n,c,u,h,_,M,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=r[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=_,R=M;S<R;S+=3){const w=S,T=S+1,O=S+2;i=Uo(this,p,t,n,c,u,h,w,T,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const _=m,M=m+1,S=m+2;i=Uo(this,r,t,n,c,u,h,_,M,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function ff(o,t,e,n,i,s,r,a){let l;if(t.side===rn?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===Ln,a),l===null)return null;Do.copy(a),Do.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(Do);return c<e.near||c>e.far?null:{distance:c,point:Do.clone(),object:o}}function Uo(o,t,e,n,i,s,r,a,l,c){o.getVertexPosition(a,cs),o.getVertexPosition(l,hs),o.getVertexPosition(c,ds);const u=ff(o,t,e,n,cs,hs,ds,Io);if(u){i&&(Co.fromBufferAttribute(i,a),Po.fromBufferAttribute(i,l),Lo.fromBufferAttribute(i,c),u.uv=bn.getInterpolation(Io,cs,hs,ds,Co,Po,Lo,new Wt)),s&&(Co.fromBufferAttribute(s,a),Po.fromBufferAttribute(s,l),Lo.fromBufferAttribute(s,c),u.uv1=bn.getInterpolation(Io,cs,hs,ds,Co,Po,Lo,new Wt),u.uv2=u.uv1),r&&(uc.fromBufferAttribute(r,a),fc.fromBufferAttribute(r,l),pc.fromBufferAttribute(r,c),u.normal=bn.getInterpolation(Io,cs,hs,ds,uc,fc,pc,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};bn.getNormal(cs,hs,ds,h.normal),u.face=h}return u}class In extends Fe{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(h,2));function g(y,m,p,_,M,S,R,w,T,O,v){const E=S/T,F=R/O,k=S/2,q=R/2,L=w/2,G=T+1,W=O+1;let $=0,j=0;const K=new P;for(let Q=0;Q<W;Q++){const rt=Q*F-q;for(let at=0;at<G;at++){const X=at*E-k;K[y]=X*_,K[m]=rt*M,K[p]=L,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[p]=w>0?1:-1,u.push(K.x,K.y,K.z),h.push(at/T),h.push(1-Q/O),$+=1}}for(let Q=0;Q<O;Q++)for(let rt=0;rt<T;rt++){const at=d+rt+G*Q,X=d+rt+G*(Q+1),et=d+(rt+1)+G*(Q+1),gt=d+(rt+1)+G*Q;l.push(at,X,gt),l.push(X,et,gt),j+=6}a.addGroup(f,j,v),f+=j,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function sn(o){const t={};for(let e=0;e<o.length;e++){const n=Is(o[e]);for(const i in n)t[i]=n[i]}return t}function pf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function qh(o){return o.getRenderTarget()===null?o.outputColorSpace:de.workingColorSpace}const mf={clone:Is,merge:sn};var gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yh extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends Yh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(eo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,fs=1;class _f extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(us,fs,t,e);i.layers=this.layers,this.add(i);const s=new tn(us,fs,t,e);s.layers=this.layers,this.add(s);const r=new tn(us,fs,t,e);r.layers=this.layers,this.add(r);const a=new tn(us,fs,t,e);a.layers=this.layers,this.add(a);const l=new tn(us,fs,t,e);l.layers=this.layers,this.add(l);const c=new tn(us,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,l]=e;for(const c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kh extends Ge{constructor(t,e,n,i,s,r,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:As,super(t,e,n,i,s,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xf extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===qi?Qt:Sn),this.texture=new Kh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new In(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:gi});s.uniforms.tEquirect.value=e;const r=new ot(i,s),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=Je),new _f(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const ta=new P,vf=new P,Mf=new Jt;class Fi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ta.subVectors(n,e).cross(vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ta),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Mf.getNormalMatrix(t),i=this.coplanarPoint(ta).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Hn,No=new P;class nl{constructor(t=new Fi,e=new Fi,n=new Fi,i=new Fi,s=new Fi,r=new Fi){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){const n=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],y=i[10],m=i[11],p=i[12],_=i[13],M=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,m-f,S-p).normalize(),n[1].setComponents(l+s,d+c,m+f,S+p).normalize(),n[2].setComponents(l+r,d+u,m+g,S+_).normalize(),n[3].setComponents(l-r,d-u,m-g,S-_).normalize(),n[4].setComponents(l-a,d-h,m-y,S-M).normalize(),e===Zn)n[5].setComponents(l+a,d+h,m+y,S+M).normalize();else if(e===mr)n[5].setComponents(a,h,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(No.x=i.normal.x>0?t.max.x:t.min.x,No.y=i.normal.y>0?t.max.y:t.min.y,No.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(No)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $h(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function bf(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=h.byteLength,g=o.createBuffer();o.bindBuffer(u,g),o.bufferData(u,h,d),c.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)y=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(o.bindBuffer(h,c),f.count===-1&&g.length===0&&o.bufferSubData(h,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){const p=g[y];e?o.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):o.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(e?o.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:r,remove:a,update:l}}class il extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const _=p*d-r;for(let M=0;M<c;M++){const S=M*h-s;g.push(S,-_,0),y.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const M=_+c*p,S=_+c*(p+1),R=_+1+c*(p+1),w=_+1+c*p;f.push(M,S,w),f.push(S,R,w)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.width,t.height,t.widthSegments,t.heightSegments)}}var Sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
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
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cf=`#ifdef USE_AOMAP
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
#endif`,Pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf=`#ifdef USE_BATCHING
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
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ff=`#ifdef USE_IRIDESCENCE
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
#endif`,kf=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qf=`#define PI 3.141592653589793
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
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kf=`vec3 transformedNormal = objectNormal;
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
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`
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
}`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
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
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
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
#endif`,bp=`struct PhysicalMaterial {
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
}`,Sp=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dp=`#if defined( USE_POINTS_UV )
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
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
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
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xp=`#ifdef USE_NORMALMAP
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
#endif`,qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
}`,Pm=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,km=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,Hm=`#define LAMBERT
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Wm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Xm=`#define PHONG
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
}`,qm=`#define STANDARD
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
}`,Ym=`#define STANDARD
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
}`,Km=`#define TOON
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
}`,$m=`#define TOON
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
}`,jm=`uniform float size;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 color;
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
}`,t0=`uniform float rotation;
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
}`,e0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Sf,alphahash_pars_fragment:Tf,alphamap_fragment:Ef,alphamap_pars_fragment:wf,alphatest_fragment:Af,alphatest_pars_fragment:Rf,aomap_fragment:Cf,aomap_pars_fragment:Pf,batching_pars_vertex:Lf,batching_vertex:If,begin_vertex:Df,beginnormal_vertex:Uf,bsdfs:Nf,iridescence_fragment:Ff,bumpmap_pars_fragment:kf,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Bf,clipping_planes_vertex:zf,color_fragment:Gf,color_pars_fragment:Wf,color_pars_vertex:Vf,color_vertex:Xf,common:qf,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:$f,displacementmap_vertex:jf,emissivemap_fragment:Zf,emissivemap_pars_fragment:Jf,colorspace_fragment:Qf,colorspace_pars_fragment:tp,envmap_fragment:ep,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:sp,envmap_physical_pars_fragment:gp,envmap_vertex:op,fog_vertex:rp,fog_pars_vertex:ap,fog_fragment:lp,fog_pars_fragment:cp,gradientmap_pars_fragment:hp,lightmap_fragment:dp,lightmap_pars_fragment:up,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:yp,lights_toon_pars_fragment:_p,lights_phong_fragment:xp,lights_phong_pars_fragment:vp,lights_physical_fragment:Mp,lights_physical_pars_fragment:bp,lights_fragment_begin:Sp,lights_fragment_maps:Tp,lights_fragment_end:Ep,logdepthbuf_fragment:wp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Lp,map_particle_fragment:Ip,map_particle_pars_fragment:Dp,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Np,morphcolor_vertex:Fp,morphnormal_vertex:kp,morphtarget_pars_vertex:Op,morphtarget_vertex:Hp,normal_fragment_begin:Bp,normal_fragment_maps:zp,normal_pars_fragment:Gp,normal_pars_vertex:Wp,normal_vertex:Vp,normalmap_pars_fragment:Xp,clearcoat_normal_fragment_begin:qp,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:$p,opaque_fragment:jp,packing:Zp,premultiplied_alpha_fragment:Jp,project_vertex:Qp,dithering_fragment:tm,dithering_pars_fragment:em,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:om,shadowmap_vertex:rm,shadowmask_pars_fragment:am,skinbase_vertex:lm,skinning_pars_vertex:cm,skinning_vertex:hm,skinnormal_vertex:dm,specularmap_fragment:um,specularmap_pars_fragment:fm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:ym,uv_pars_fragment:_m,uv_pars_vertex:xm,uv_vertex:vm,worldpos_vertex:Mm,background_vert:bm,background_frag:Sm,backgroundCube_vert:Tm,backgroundCube_frag:Em,cube_vert:wm,cube_frag:Am,depth_vert:Rm,depth_frag:Cm,distanceRGBA_vert:Pm,distanceRGBA_frag:Lm,equirect_vert:Im,equirect_frag:Dm,linedashed_vert:Um,linedashed_frag:Nm,meshbasic_vert:Fm,meshbasic_frag:km,meshlambert_vert:Om,meshlambert_frag:Hm,meshmatcap_vert:Bm,meshmatcap_frag:zm,meshnormal_vert:Gm,meshnormal_frag:Wm,meshphong_vert:Vm,meshphong_frag:Xm,meshphysical_vert:qm,meshphysical_frag:Ym,meshtoon_vert:Km,meshtoon_frag:$m,points_vert:jm,points_frag:Zm,shadow_vert:Jm,shadow_frag:Qm,sprite_vert:t0,sprite_frag:e0},ut={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},kn={basic:{uniforms:sn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:sn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:sn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:sn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:sn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:sn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:sn([ut.points,ut.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:sn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:sn([ut.common,ut.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:sn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:sn([ut.sprite,ut.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:sn([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:sn([ut.lights,ut.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};kn.physical={uniforms:sn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Fo={r:0,b:0,g:0};function n0(o,t,e,n,i,s,r){const a=new Tt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let _=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=(p.backgroundBlurriness>0?e:t).get(M)),M===null?y(a,l):M&&M.isColor&&(y(M,1),_=!0);const S=o.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),M&&(M.isCubeTexture||M.mapping===xr)?(u===void 0&&(u=new ot(new In(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Is(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=de.getTransfer(M.colorSpace)!==Ee,(h!==M||d!==M.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ot(new il(2,2),new Dn({name:"BackgroundMaterial",uniforms:Is(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=de.getTransfer(M.colorSpace)!==Ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,p){m.getRGB(Fo,qh(o)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:g}}function i0(o,t,e,n){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(L,G,W,$,j){let K=!1;if(r){const Q=y($,W,G);c!==Q&&(c=Q,f(c.object)),K=p(L,$,W,j),K&&_(L,$,W,j)}else{const Q=G.wireframe===!0;(c.geometry!==$.id||c.program!==W.id||c.wireframe!==Q)&&(c.geometry=$.id,c.program=W.id,c.wireframe=Q,K=!0)}j!==null&&e.update(j,o.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,O(L,G,W,$),j!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(L){return n.isWebGL2?o.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?o.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,G,W){const $=W.wireframe===!0;let j=a[L.id];j===void 0&&(j={},a[L.id]=j);let K=j[G.id];K===void 0&&(K={},j[G.id]=K);let Q=K[$];return Q===void 0&&(Q=m(d()),K[$]=Q),Q}function m(L){const G=[],W=[],$=[];for(let j=0;j<i;j++)G[j]=0,W[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:W,attributeDivisors:$,object:L,attributes:{},index:null}}function p(L,G,W,$){const j=c.attributes,K=G.attributes;let Q=0;const rt=W.getAttributes();for(const at in rt)if(rt[at].location>=0){const et=j[at];let gt=K[at];if(gt===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&(gt=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&(gt=L.instanceColor)),et===void 0||et.attribute!==gt||gt&&et.data!==gt.data)return!0;Q++}return c.attributesNum!==Q||c.index!==$}function _(L,G,W,$){const j={},K=G.attributes;let Q=0;const rt=W.getAttributes();for(const at in rt)if(rt[at].location>=0){let et=K[at];et===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));const gt={};gt.attribute=et,et&&et.data&&(gt.data=et.data),j[at]=gt,Q++}c.attributes=j,c.attributesNum=Q,c.index=$}function M(){const L=c.newAttributes;for(let G=0,W=L.length;G<W;G++)L[G]=0}function S(L){R(L,0)}function R(L,G){const W=c.newAttributes,$=c.enabledAttributes,j=c.attributeDivisors;W[L]=1,$[L]===0&&(o.enableVertexAttribArray(L),$[L]=1),j[L]!==G&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),j[L]=G)}function w(){const L=c.newAttributes,G=c.enabledAttributes;for(let W=0,$=G.length;W<$;W++)G[W]!==L[W]&&(o.disableVertexAttribArray(W),G[W]=0)}function T(L,G,W,$,j,K,Q){Q===!0?o.vertexAttribIPointer(L,G,W,j,K):o.vertexAttribPointer(L,G,W,$,j,K)}function O(L,G,W,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const j=$.attributes,K=W.getAttributes(),Q=G.defaultAttributeValues;for(const rt in K){const at=K[rt];if(at.location>=0){let X=j[rt];if(X===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){const et=X.normalized,gt=X.itemSize,vt=e.get(X);if(vt===void 0)continue;const Mt=vt.buffer,Ot=vt.type,Bt=vt.bytesPerElement,Et=n.isWebGL2===!0&&(Ot===o.INT||Ot===o.UNSIGNED_INT||X.gpuType===Rh);if(X.isInterleavedBufferAttribute){const Ut=X.data,z=Ut.stride,Te=X.offset;if(Ut.isInstancedInterleavedBuffer){for(let At=0;At<at.locationSize;At++)R(at.location+At,Ut.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let At=0;At<at.locationSize;At++)S(at.location+At);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let At=0;At<at.locationSize;At++)T(at.location+At,gt/at.locationSize,Ot,et,z*Bt,(Te+gt/at.locationSize*At)*Bt,Et)}else{if(X.isInstancedBufferAttribute){for(let Ut=0;Ut<at.locationSize;Ut++)R(at.location+Ut,X.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ut=0;Ut<at.locationSize;Ut++)S(at.location+Ut);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let Ut=0;Ut<at.locationSize;Ut++)T(at.location+Ut,gt/at.locationSize,Ot,et,gt*Bt,gt/at.locationSize*Ut*Bt,Et)}}else if(Q!==void 0){const et=Q[rt];if(et!==void 0)switch(et.length){case 2:o.vertexAttrib2fv(at.location,et);break;case 3:o.vertexAttrib3fv(at.location,et);break;case 4:o.vertexAttrib4fv(at.location,et);break;default:o.vertexAttrib1fv(at.location,et)}}}}w()}function v(){k();for(const L in a){const G=a[L];for(const W in G){const $=G[W];for(const j in $)g($[j].object),delete $[j];delete G[W]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const G=a[L.id];for(const W in G){const $=G[W];for(const j in $)g($[j].object),delete $[j];delete G[W]}delete a[L.id]}function F(L){for(const G in a){const W=a[G];if(W[L.id]===void 0)continue;const $=W[L.id];for(const j in $)g($[j].object),delete $[j];delete W[L.id]}}function k(){q(),u=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:q,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:S,disableUnusedAttributes:w}}function s0(o,t,e,n){const i=n.isWebGL2;let s;function r(u){s=u}function a(u,h){o.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,g;if(i)f=o,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),e.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y];e.update(g,s,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function o0(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),d=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),m=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),p=o.getParameter(o.MAX_VARYING_VECTORS),_=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,S=r||t.has("OES_texture_float"),R=M&&S,w=r?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:w}}function r0(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Fi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=o.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:n,M=_*4;let S=p.clippingState||null;l.value=S,S=u(g,d,M,f);for(let R=0;R!==M;++R)S[R]=e[R];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=f+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=f;M!==y;++M,S+=4)r.copy(h[M]).applyMatrix4(_,a),r.normal.toArray(m,S),m[S+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function a0(o){let t=new WeakMap;function e(r,a){return a===Fa?r.mapping=As:a===ka&&(r.mapping=Rs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Fa||a===ka)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new xf(l.height/2);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class sl extends Yh{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=4,mc=[.125,.215,.35,.446,.526,.582],zi=20,ea=new sl,gc=new Tt;let na=null,ia=0,sa=0;const ki=(1+Math.sqrt(5))/2,ps=1/ki,yc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ki,ps),new P(0,ki,-ps),new P(ps,0,ki),new P(-ps,0,ki),new P(ki,ps,0),new P(-ki,ps,0)];class _c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,sa),t.scissorTest=!1,ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:ro,format:fn,colorSpace:Le,depthBuffer:!1},i=xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l0(s)),this._blurMaterial=c0(s,t,e)}return i}_compileMaterial(t){const e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,i){const a=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(gc),u.toneMapping=Jn,u.autoClear=!1;const f=new Pe({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new ot(new In,f);let y=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(gc),y=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;ko(i,_*M,p>2?M:0,M,M),u.setRenderTarget(i),y&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===As||t.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ko(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=yc[(i-1)%yc.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ot(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zi-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):zi;m>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let _=0;for(let T=0;T<zi;++T){const O=T/y,v=Math.exp(-O*O/2);p.push(v),T===0?_+=v:T<m&&(_+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const S=this._sizeLods[i],R=3*S*(i>M-Ss?i-M+Ss:0),w=4*(this._cubeSize-S);ko(e,R,w,3*S,2*S),l.setRenderTarget(e),l.render(h,ea)}}function l0(o){const t=[],e=[],n=[];let i=o;const s=o-Ss+1+mc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>o-Ss?l=mc[r-o+Ss-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,y=3,m=2,p=1,_=new Float32Array(y*g*f),M=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,O=w>2?0:-1,v=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];_.set(v,y*g*w),M.set(d,m*g*w);const E=[w,w,w,w,w,w];S.set(E,p*g*w)}const R=new Fe;R.setAttribute("position",new De(_,y)),R.setAttribute("uv",new De(M,m)),R.setAttribute("faceIndex",new De(S,p)),t.push(R),i>Ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xc(o,t,e){const n=new $i(o,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function c0(o,t,e){const n=new Float32Array(zi),i=new P(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ol(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function vc(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Mc(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function h0(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fa||l===ka,u=l===As||l===Rs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new _c(o)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new _c(o));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function d0(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function u0(o,t,e,n){const i={},s=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],o.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],o.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let y=0;if(f!==null){const _=f.array;y=f.version;for(let M=0,S=_.length;M<S;M+=3){const R=_[M+0],w=_[M+1],T=_[M+2];d.push(R,w,w,T,T,R)}}else if(g!==void 0){const _=g.array;y=g.version;for(let M=0,S=_.length/3-1;M<S;M+=3){const R=M+0,w=M+1,T=M+2;d.push(R,w,w,T,T,R)}}else return;const m=new(Oh(d)?Xh:Vh)(d,1);m.version=y;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function f0(o,t,e,n){const i=n.isWebGL2;let s;function r(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){o.drawElements(s,g,a,f*l),e.update(g,s,1)}function h(f,g,y){if(y===0)return;let m,p;if(i)m=o,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*l,y),e.update(g,s,y)}function d(f,g,y){if(y===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,y);let p=0;for(let _=0;_<y;_++)p+=g[_];e.update(p,s,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function p0(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function m0(o,t){return o[0]-t[0]}function g0(o,t){return Math.abs(t[1])-Math.abs(o[1])}function y0(o,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new ve,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==y){let G=function(){q.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var f=G;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let v=0;M===!0&&(v=1),S===!0&&(v=2),R===!0&&(v=3);let E=u.attributes.position.count*v,F=1;E>t.maxTextureSize&&(F=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const k=new Float32Array(E*F*4*y),q=new zh(k,E,F,y);q.type=jn,q.needsUpdate=!0;const L=v*4;for(let W=0;W<y;W++){const $=w[W],j=T[W],K=O[W],Q=E*F*4*W;for(let rt=0;rt<$.count;rt++){const at=rt*L;M===!0&&(r.fromBufferAttribute($,rt),k[Q+at+0]=r.x,k[Q+at+1]=r.y,k[Q+at+2]=r.z,k[Q+at+3]=0),S===!0&&(r.fromBufferAttribute(j,rt),k[Q+at+4]=r.x,k[Q+at+5]=r.y,k[Q+at+6]=r.z,k[Q+at+7]=0),R===!0&&(r.fromBufferAttribute(K,rt),k[Q+at+8]=r.x,k[Q+at+9]=r.y,k[Q+at+10]=r.z,k[Q+at+11]=K.itemSize===4?r.w:1)}}m={count:y,texture:q,size:new Wt(E,F)},s.set(u,m),u.addEventListener("dispose",G)}let p=0;for(let M=0;M<d.length;M++)p+=d[M];const _=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(o,"morphTargetBaseInfluence",_),h.getUniforms().setValue(o,"morphTargetInfluences",d),h.getUniforms().setValue(o,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let y=n[u.id];if(y===void 0||y.length!==g){y=[];for(let S=0;S<g;S++)y[S]=[S,0];n[u.id]=y}for(let S=0;S<g;S++){const R=y[S];R[0]=S,R[1]=d[S]}y.sort(g0);for(let S=0;S<8;S++)S<g&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(m0);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const R=a[S],w=R[0],T=R[1];w!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+S)!==m[w]&&u.setAttribute("morphTarget"+S,m[w]),p&&u.getAttribute("morphNormal"+S)!==p[w]&&u.setAttribute("morphNormal"+S,p[w]),i[S]=T,_+=T):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const M=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(o,"morphTargetBaseInfluence",M),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function _0(o,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class jh extends Ge{constructor(t,e,n,i,s,r,a,l,c,u){if(u=u!==void 0?u:Xi,u!==Xi&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xi&&(n=pi),n===void 0&&u===Cs&&(n=Vi),super(null,i,s,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zh=new Ge,Jh=new jh(1,1);Jh.compareFunction=kh;const Qh=new zh,td=new ef,ed=new Kh,bc=[],Sc=[],Tc=new Float32Array(16),Ec=new Float32Array(9),wc=new Float32Array(4);function Fs(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=bc[i];if(s===void 0&&(s=new Float32Array(i),bc[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function We(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Ve(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Sr(o,t){let e=Sc[t];e===void 0&&(e=new Int32Array(t),Sc[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function x0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function v0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;o.uniform2fv(this.addr,t),Ve(e,t)}}function M0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;o.uniform3fv(this.addr,t),Ve(e,t)}}function b0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;o.uniform4fv(this.addr,t),Ve(e,t)}}function S0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(We(e,n))return;wc.set(n),o.uniformMatrix2fv(this.addr,!1,wc),Ve(e,n)}}function T0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(We(e,n))return;Ec.set(n),o.uniformMatrix3fv(this.addr,!1,Ec),Ve(e,n)}}function E0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(We(e,n))return;Tc.set(n),o.uniformMatrix4fv(this.addr,!1,Tc),Ve(e,n)}}function w0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function A0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;o.uniform2iv(this.addr,t),Ve(e,t)}}function R0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;o.uniform3iv(this.addr,t),Ve(e,t)}}function C0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;o.uniform4iv(this.addr,t),Ve(e,t)}}function P0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function L0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;o.uniform2uiv(this.addr,t),Ve(e,t)}}function I0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;o.uniform3uiv(this.addr,t),Ve(e,t)}}function D0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;o.uniform4uiv(this.addr,t),Ve(e,t)}}function U0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?Jh:Zh;e.setTexture2D(t||s,i)}function N0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||td,i)}function F0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ed,i)}function k0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Qh,i)}function O0(o){switch(o){case 5126:return x0;case 35664:return v0;case 35665:return M0;case 35666:return b0;case 35674:return S0;case 35675:return T0;case 35676:return E0;case 5124:case 35670:return w0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return L0;case 36295:return I0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return k0}}function H0(o,t){o.uniform1fv(this.addr,t)}function B0(o,t){const e=Fs(t,this.size,2);o.uniform2fv(this.addr,e)}function z0(o,t){const e=Fs(t,this.size,3);o.uniform3fv(this.addr,e)}function G0(o,t){const e=Fs(t,this.size,4);o.uniform4fv(this.addr,e)}function W0(o,t){const e=Fs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function V0(o,t){const e=Fs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function X0(o,t){const e=Fs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function q0(o,t){o.uniform1iv(this.addr,t)}function Y0(o,t){o.uniform2iv(this.addr,t)}function K0(o,t){o.uniform3iv(this.addr,t)}function $0(o,t){o.uniform4iv(this.addr,t)}function j0(o,t){o.uniform1uiv(this.addr,t)}function Z0(o,t){o.uniform2uiv(this.addr,t)}function J0(o,t){o.uniform3uiv(this.addr,t)}function Q0(o,t){o.uniform4uiv(this.addr,t)}function tg(o,t,e){const n=this.cache,i=t.length,s=Sr(e,i);We(n,s)||(o.uniform1iv(this.addr,s),Ve(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Zh,s[r])}function eg(o,t,e){const n=this.cache,i=t.length,s=Sr(e,i);We(n,s)||(o.uniform1iv(this.addr,s),Ve(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||td,s[r])}function ng(o,t,e){const n=this.cache,i=t.length,s=Sr(e,i);We(n,s)||(o.uniform1iv(this.addr,s),Ve(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||ed,s[r])}function ig(o,t,e){const n=this.cache,i=t.length,s=Sr(e,i);We(n,s)||(o.uniform1iv(this.addr,s),Ve(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Qh,s[r])}function sg(o){switch(o){case 5126:return H0;case 35664:return B0;case 35665:return z0;case 35666:return G0;case 35674:return W0;case 35675:return V0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return K0;case 35669:case 35673:return $0;case 5125:return j0;case 36294:return Z0;case 36295:return J0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}class og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=O0(e.type)}}class rg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sg(e.type)}}class ag{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function Ac(o,t){o.seq.push(t),o.map[t.id]=t}function lg(o,t,e){const n=o.name,i=n.length;for(oa.lastIndex=0;;){const s=oa.exec(n),r=oa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Ac(e,c===void 0?new og(a,o,t):new rg(a,o,t));break}else{let h=e.map[a];h===void 0&&(h=new ag(a),Ac(e,h)),e=h}}}class ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);lg(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Rc(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const cg=37297;let hg=0;function dg(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function ug(o){const t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(o);let n;switch(t===e?n="":t===pr&&e===fr?n="LinearDisplayP3ToLinearSRGB":t===fr&&e===pr&&(n="LinearSRGBToLinearDisplayP3"),o){case Le:case vr:return[n,"LinearTransferOETF"];case Qt:case tl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function Cc(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+dg(o.getShaderSource(t),r)}else return i}function fg(o,t){const e=ug(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function pg(o,t){let e;switch(t){case lu:e="Linear";break;case cu:e="Reinhard";break;case hu:e="OptimizedCineon";break;case du:e="ACESFilmic";break;case fu:e="AgX";break;case uu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function mg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function gg(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ts).join(`
`)}function yg(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _g(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function Ts(o){return o!==""}function Pc(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(o){return o.replace(xg,Mg)}const vg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mg(o,t){let e=jt[t];if(e===void 0){const n=vg.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wa(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(o){return o.replace(bg,Sg)}function Sg(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Dc(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Fd?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Eg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ag(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Za:t="ENVMAP_BLENDING_MULTIPLY";break;case ru:t="ENVMAP_BLENDING_MIX";break;case au:t="ENVMAP_BLENDING_ADD";break}return t}function Rg(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cg(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Tg(e),c=Eg(e),u=wg(e),h=Ag(e),d=Rg(e),f=e.isWebGL2?"":mg(e),g=gg(e),y=yg(s),m=i.createProgram();let p,_,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ts).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ts).join(`
`),_.length>0&&(_+=`
`)):(p=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),_=[f,Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,fg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),r=Wa(r),r=Pc(r,e),r=Lc(r,e),a=Wa(a),a=Pc(a,e),a=Lc(a,e),r=Ic(r),a=Ic(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=M+p+r,R=M+_+a,w=Rc(i,i.VERTEX_SHADER,S),T=Rc(i,i.FRAGMENT_SHADER,R);i.attachShader(m,w),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(k){if(o.debug.checkShaderErrors){const q=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(w).trim(),G=i.getShaderInfoLog(T).trim();let W=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,m,w,T);else{const j=Cc(i,w,"vertex"),K=Cc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+j+`
`+K)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||G==="")&&($=!1);$&&(k.diagnostics={runnable:W,programLog:q,vertexShader:{log:L,prefix:p},fragmentShader:{log:G,prefix:_}})}i.deleteShader(w),i.deleteShader(T),v=new ar(i,m),E=_g(i,m)}let v;this.getUniforms=function(){return v===void 0&&O(this),v};let E;this.getAttributes=function(){return E===void 0&&O(this),E};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,cg)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}let Pg=0;class Lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ig(t),e.set(t,n)),n}}class Ig{constructor(t){this.id=Pg++,this.code=t,this.usedTimes=0}}function Dg(o,t,e,n,i,s,r){const a=new Gh,l=new Lg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return v===0?"uv":`uv${v}`}function m(v,E,F,k,q){const L=k.fog,G=q.geometry,W=v.isMeshStandardMaterial?k.environment:null,$=(v.isMeshStandardMaterial?e:t).get(v.envMap||W),j=$&&$.mapping===xr?$.image.height:null,K=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=Q!==void 0?Q.length:0;let at=0;G.morphAttributes.position!==void 0&&(at=1),G.morphAttributes.normal!==void 0&&(at=2),G.morphAttributes.color!==void 0&&(at=3);let X,et,gt,vt;if(K){const le=kn[K];X=le.vertexShader,et=le.fragmentShader}else X=v.vertexShader,et=v.fragmentShader,l.update(v),gt=l.getVertexShaderID(v),vt=l.getFragmentShaderID(v);const Mt=o.getRenderTarget(),Ot=q.isInstancedMesh===!0,Bt=q.isBatchedMesh===!0,Et=!!v.map,Ut=!!v.matcap,z=!!$,Te=!!v.aoMap,At=!!v.lightMap,zt=!!v.bumpMap,bt=!!v.normalMap,ue=!!v.displacementMap,Vt=!!v.emissiveMap,A=!!v.metalnessMap,x=!!v.roughnessMap,H=v.anisotropy>0,Y=v.clearcoat>0,C=v.iridescence>0,J=v.sheen>0,ht=v.transmission>0,dt=H&&!!v.anisotropyMap,st=Y&&!!v.clearcoatMap,Rt=Y&&!!v.clearcoatNormalMap,kt=Y&&!!v.clearcoatRoughnessMap,Z=C&&!!v.iridescenceMap,Kt=C&&!!v.iridescenceThicknessMap,Ct=J&&!!v.sheenColorMap,It=J&&!!v.sheenRoughnessMap,St=!!v.specularMap,yt=!!v.specularColorMap,Xt=!!v.specularIntensityMap,ee=ht&&!!v.transmissionMap,he=ht&&!!v.thicknessMap,qt=!!v.gradientMap,nt=!!v.alphaMap,D=v.alphaTest>0,lt=!!v.alphaHash,ct=!!v.extensions,wt=!!G.attributes.uv1,Dt=!!G.attributes.uv2,re=!!G.attributes.uv3;let ne=Jn;return v.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ne=o.toneMapping),{isWebGL2:u,shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:et,defines:v.defines,customVertexShaderID:gt,customFragmentShaderID:vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Bt,instancing:Ot,instancingColor:Ot&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Le,map:Et,matcap:Ut,envMap:z,envMapMode:z&&$.mapping,envMapCubeUVHeight:j,aoMap:Te,lightMap:At,bumpMap:zt,normalMap:bt,displacementMap:d&&ue,emissiveMap:Vt,normalMapObjectSpace:bt&&v.normalMapType===Au,normalMapTangentSpace:bt&&v.normalMapType===Qa,metalnessMap:A,roughnessMap:x,anisotropy:H,anisotropyMap:dt,clearcoat:Y,clearcoatMap:st,clearcoatNormalMap:Rt,clearcoatRoughnessMap:kt,iridescence:C,iridescenceMap:Z,iridescenceThicknessMap:Kt,sheen:J,sheenColorMap:Ct,sheenRoughnessMap:It,specularMap:St,specularColorMap:yt,specularIntensityMap:Xt,transmission:ht,transmissionMap:ee,thicknessMap:he,gradientMap:qt,opaque:v.transparent===!1&&v.blending===yi,alphaMap:nt,alphaTest:D,alphaHash:lt,combine:v.combine,mapUv:Et&&y(v.map.channel),aoMapUv:Te&&y(v.aoMap.channel),lightMapUv:At&&y(v.lightMap.channel),bumpMapUv:zt&&y(v.bumpMap.channel),normalMapUv:bt&&y(v.normalMap.channel),displacementMapUv:ue&&y(v.displacementMap.channel),emissiveMapUv:Vt&&y(v.emissiveMap.channel),metalnessMapUv:A&&y(v.metalnessMap.channel),roughnessMapUv:x&&y(v.roughnessMap.channel),anisotropyMapUv:dt&&y(v.anisotropyMap.channel),clearcoatMapUv:st&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:It&&y(v.sheenRoughnessMap.channel),specularMapUv:St&&y(v.specularMap.channel),specularColorMapUv:yt&&y(v.specularColorMap.channel),specularIntensityMapUv:Xt&&y(v.specularIntensityMap.channel),transmissionMapUv:ee&&y(v.transmissionMap.channel),thicknessMapUv:he&&y(v.thicknessMap.channel),alphaMapUv:nt&&y(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(bt||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:wt,vertexUv2s:Dt,vertexUv3s:re,pointsUvs:q.isPoints===!0&&!!G.attributes.uv&&(Et||nt),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:at,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Et&&v.map.isVideoTexture===!0&&de.getTransfer(v.map.colorSpace)===Ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Be,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ct&&v.extensions.derivatives===!0,extensionFragDepth:ct&&v.extensions.fragDepth===!0,extensionDrawBuffers:ct&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)E.push(F),E.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(_(E,v),M(E,v),E.push(o.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function _(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function S(v){const E=g[v.type];let F;if(E){const k=kn[E];F=mf.clone(k.uniforms)}else F=v.uniforms;return F}function R(v,E){let F;for(let k=0,q=c.length;k<q;k++){const L=c[k];if(L.cacheKey===E){F=L,++F.usedTimes;break}}return F===void 0&&(F=new Cg(o,E,v,s),c.push(F)),F}function w(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:O}}function Ug(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Ng(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Uc(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Nc(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(h,d,f,g,y,m){let p=o[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},o[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=y,p.group=m),t++,p}function a(h,d,f,g,y,m){const p=r(h,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,g,y,m){const p=r(h,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||Ng),n.length>1&&n.sort(d||Uc),i.length>1&&i.sort(d||Uc)}function u(){for(let h=t,d=o.length;h<d;h++){const f=o[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Fg(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new Nc,o.set(n,[r])):i>=s.length?(r=new Nc,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function kg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Tt};break;case"SpotLight":e={position:new P,direction:new P,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new P,halfWidth:new P,halfHeight:new P};break}return o[t.id]=e,e}}}function Og(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Hg=0;function Bg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function zg(o,t){const e=new kg,n=Og(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,r=new Zt,a=new Zt;function l(u,h){let d=0,f=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let y=0,m=0,p=0,_=0,M=0,S=0,R=0,w=0,T=0,O=0,v=0;u.sort(Bg);const E=h===!0?Math.PI:1;for(let k=0,q=u.length;k<q;k++){const L=u[k],G=L.color,W=L.intensity,$=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=G.r*W*E,f+=G.g*W*E,g+=G.b*W*E;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],W);v++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const Q=L.shadow,rt=n.get(L);rt.shadowBias=Q.bias,rt.shadowNormalBias=Q.normalBias,rt.shadowRadius=Q.radius,rt.shadowMapSize=Q.mapSize,i.directionalShadow[y]=rt,i.directionalShadowMap[y]=j,i.directionalShadowMatrix[y]=L.shadow.matrix,S++}i.directional[y]=K,y++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(G).multiplyScalar(W*E),K.distance=$,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[p]=K;const Q=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,Q.updateMatrices(L),L.castShadow&&O++),i.spotLightMatrix[p]=Q.matrix,L.castShadow){const rt=n.get(L);rt.shadowBias=Q.bias,rt.shadowNormalBias=Q.normalBias,rt.shadowRadius=Q.radius,rt.shadowMapSize=Q.mapSize,i.spotShadow[p]=rt,i.spotShadowMap[p]=j,w++}p++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(G).multiplyScalar(W),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=K,_++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*E),K.distance=L.distance,K.decay=L.decay,L.castShadow){const Q=L.shadow,rt=n.get(L);rt.shadowBias=Q.bias,rt.shadowNormalBias=Q.normalBias,rt.shadowRadius=Q.radius,rt.shadowMapSize=Q.mapSize,rt.shadowCameraNear=Q.camera.near,rt.shadowCameraFar=Q.camera.far,i.pointShadow[m]=rt,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=K,m++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(W*E),K.groundColor.copy(L.groundColor).multiplyScalar(W*E),i.hemi[M]=K,M++}}_>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==y||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==_||F.hemiLength!==M||F.numDirectionalShadows!==S||F.numPointShadows!==R||F.numSpotShadows!==w||F.numSpotMaps!==T||F.numLightProbes!==v)&&(i.directional.length=y,i.spot.length=p,i.rectArea.length=_,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=w+T-O,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=v,F.directionalLength=y,F.pointLength=m,F.spotLength=p,F.rectAreaLength=_,F.hemiLength=M,F.numDirectionalShadows=S,F.numPointShadows=R,F.numSpotShadows=w,F.numSpotMaps=T,F.numLightProbes=v,i.version=Hg++)}function c(u,h){let d=0,f=0,g=0,y=0,m=0;const p=h.matrixWorldInverse;for(let _=0,M=u.length;_<M;_++){const S=u[_];if(S.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(S.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const R=i.rectArea[y];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const R=i.point[f];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Fc(o,t){const e=new zg(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function Gg(o,t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new Fc(o,t),e.set(s,[l])):r>=a.length?(l=new Fc(o,t),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Wg extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vg extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
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
}`;function Yg(o,t,e){let n=new nl;const i=new Wt,s=new Wt,r=new ve,a=new Wg({depthPacking:wu}),l=new Vg,c={},u=e.maxTextureSize,h={[Ln]:rn,[rn]:Ln,[Be]:Be},d=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Xg,fragmentShader:qg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let p=this.type;this.render=function(w,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const v=o.getRenderTarget(),E=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),k=o.state;k.setBlending(gi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=p!==Kn&&this.type===Kn,L=p===Kn&&this.type!==Kn;for(let G=0,W=w.length;G<W;G++){const $=w[G],j=$.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const K=j.getFrameExtents();if(i.multiply(K),s.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,j.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,j.mapSize.y=s.y)),j.map===null||q===!0||L===!0){const rt=this.type!==Kn?{minFilter:Ye,magFilter:Ye}:{};j.map!==null&&j.map.dispose(),j.map=new $i(i.x,i.y,rt),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Q=j.getViewportCount();for(let rt=0;rt<Q;rt++){const at=j.getViewport(rt);r.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),k.viewport(r),j.updateMatrices($,rt),n=j.getFrustum(),S(T,O,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===Kn&&_(j,O),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(v,E,F)};function _(w,T){const O=t.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $i(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(T,null,O,d,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(T,null,O,f,y,null)}function M(w,T,O,v){let E=null;const F=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)E=F;else if(E=O.isPointLight===!0?l:a,o.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=E.uuid,q=T.uuid;let L=c[k];L===void 0&&(L={},c[k]=L);let G=L[q];G===void 0&&(G=E.clone(),L[q]=G,T.addEventListener("dispose",R)),E=G}if(E.visible=T.visible,E.wireframe=T.wireframe,v===Kn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:h[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=o.properties.get(E);k.light=O}return E}function S(w,T,O,v,E){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);const q=t.update(w),L=w.material;if(Array.isArray(L)){const G=q.groups;for(let W=0,$=G.length;W<$;W++){const j=G[W],K=L[j.materialIndex];if(K&&K.visible){const Q=M(w,K,v,E);w.onBeforeShadow(o,w,T,O,q,Q,j),o.renderBufferDirect(O,null,q,Q,w,j),w.onAfterShadow(o,w,T,O,q,Q,j)}}}else if(L.visible){const G=M(w,L,v,E);w.onBeforeShadow(o,w,T,O,q,G,null),o.renderBufferDirect(O,null,q,G,w,null),w.onAfterShadow(o,w,T,O,q,G,null)}}const k=w.children;for(let q=0,L=k.length;q<L;q++)S(k[q],T,O,v,E)}function R(w){w.target.removeEventListener("dispose",R);for(const O in c){const v=c[O],E=w.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function Kg(o,t,e){const n=e.isWebGL2;function i(){let D=!1;const lt=new ve;let ct=null;const wt=new ve(0,0,0,0);return{setMask:function(Dt){ct!==Dt&&!D&&(o.colorMask(Dt,Dt,Dt,Dt),ct=Dt)},setLocked:function(Dt){D=Dt},setClear:function(Dt,re,ne,ae,le){le===!0&&(Dt*=ae,re*=ae,ne*=ae),lt.set(Dt,re,ne,ae),wt.equals(lt)===!1&&(o.clearColor(Dt,re,ne,ae),wt.copy(lt))},reset:function(){D=!1,ct=null,wt.set(-1,0,0,0)}}}function s(){let D=!1,lt=null,ct=null,wt=null;return{setTest:function(Dt){Dt?Bt(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(Dt){lt!==Dt&&!D&&(o.depthMask(Dt),lt=Dt)},setFunc:function(Dt){if(ct!==Dt){switch(Dt){case Qd:o.depthFunc(o.NEVER);break;case tu:o.depthFunc(o.ALWAYS);break;case eu:o.depthFunc(o.LESS);break;case hr:o.depthFunc(o.LEQUAL);break;case nu:o.depthFunc(o.EQUAL);break;case iu:o.depthFunc(o.GEQUAL);break;case su:o.depthFunc(o.GREATER);break;case ou:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ct=Dt}},setLocked:function(Dt){D=Dt},setClear:function(Dt){wt!==Dt&&(o.clearDepth(Dt),wt=Dt)},reset:function(){D=!1,lt=null,ct=null,wt=null}}}function r(){let D=!1,lt=null,ct=null,wt=null,Dt=null,re=null,ne=null,ae=null,le=null;return{setTest:function(ce){D||(ce?Bt(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(ce){lt!==ce&&!D&&(o.stencilMask(ce),lt=ce)},setFunc:function(ce,Ie,Gt){(ct!==ce||wt!==Ie||Dt!==Gt)&&(o.stencilFunc(ce,Ie,Gt),ct=ce,wt=Ie,Dt=Gt)},setOp:function(ce,Ie,Gt){(re!==ce||ne!==Ie||ae!==Gt)&&(o.stencilOp(ce,Ie,Gt),re=ce,ne=Ie,ae=Gt)},setLocked:function(ce){D=ce},setClear:function(ce){le!==ce&&(o.clearStencil(ce),le=ce)},reset:function(){D=!1,lt=null,ct=null,wt=null,Dt=null,re=null,ne=null,ae=null,le=null}}}const a=new i,l=new s,c=new r,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,y=[],m=null,p=!1,_=null,M=null,S=null,R=null,w=null,T=null,O=null,v=new Tt(0,0,0),E=0,F=!1,k=null,q=null,L=null,G=null,W=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=K>=2);let rt=null,at={};const X=o.getParameter(o.SCISSOR_BOX),et=o.getParameter(o.VIEWPORT),gt=new ve().fromArray(X),vt=new ve().fromArray(et);function Mt(D,lt,ct,wt){const Dt=new Uint8Array(4),re=o.createTexture();o.bindTexture(D,re),o.texParameteri(D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(D,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ne=0;ne<ct;ne++)n&&(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)?o.texImage3D(lt,0,o.RGBA,1,1,wt,0,o.RGBA,o.UNSIGNED_BYTE,Dt):o.texImage2D(lt+ne,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Dt);return re}const Ot={};Ot[o.TEXTURE_2D]=Mt(o.TEXTURE_2D,o.TEXTURE_2D,1),Ot[o.TEXTURE_CUBE_MAP]=Mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ot[o.TEXTURE_2D_ARRAY]=Mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ot[o.TEXTURE_3D]=Mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Bt(o.DEPTH_TEST),l.setFunc(hr),Vt(!1),A(gl),Bt(o.CULL_FACE),bt(gi);function Bt(D){d[D]!==!0&&(o.enable(D),d[D]=!0)}function Et(D){d[D]!==!1&&(o.disable(D),d[D]=!1)}function Ut(D,lt){return f[D]!==lt?(o.bindFramebuffer(D,lt),f[D]=lt,n&&(D===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=lt),D===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=lt)),!0):!1}function z(D,lt){let ct=y,wt=!1;if(D)if(ct=g.get(lt),ct===void 0&&(ct=[],g.set(lt,ct)),D.isWebGLMultipleRenderTargets){const Dt=D.texture;if(ct.length!==Dt.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let re=0,ne=Dt.length;re<ne;re++)ct[re]=o.COLOR_ATTACHMENT0+re;ct.length=Dt.length,wt=!0}}else ct[0]!==o.COLOR_ATTACHMENT0&&(ct[0]=o.COLOR_ATTACHMENT0,wt=!0);else ct[0]!==o.BACK&&(ct[0]=o.BACK,wt=!0);wt&&(e.isWebGL2?o.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function Te(D){return m!==D?(o.useProgram(D),m=D,!0):!1}const At={[Bi]:o.FUNC_ADD,[Od]:o.FUNC_SUBTRACT,[Hd]:o.FUNC_REVERSE_SUBTRACT};if(n)At[xl]=o.MIN,At[vl]=o.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(At[xl]=D.MIN_EXT,At[vl]=D.MAX_EXT)}const zt={[Bd]:o.ZERO,[zd]:o.ONE,[Gd]:o.SRC_COLOR,[Ua]:o.SRC_ALPHA,[Kd]:o.SRC_ALPHA_SATURATE,[qd]:o.DST_COLOR,[Vd]:o.DST_ALPHA,[Wd]:o.ONE_MINUS_SRC_COLOR,[Na]:o.ONE_MINUS_SRC_ALPHA,[Yd]:o.ONE_MINUS_DST_COLOR,[Xd]:o.ONE_MINUS_DST_ALPHA,[$d]:o.CONSTANT_COLOR,[jd]:o.ONE_MINUS_CONSTANT_COLOR,[Zd]:o.CONSTANT_ALPHA,[Jd]:o.ONE_MINUS_CONSTANT_ALPHA};function bt(D,lt,ct,wt,Dt,re,ne,ae,le,ce){if(D===gi){p===!0&&(Et(o.BLEND),p=!1);return}if(p===!1&&(Bt(o.BLEND),p=!0),D!==kd){if(D!==_||ce!==F){if((M!==Bi||w!==Bi)&&(o.blendEquation(o.FUNC_ADD),M=Bi,w=Bi),ce)switch(D){case yi:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dn:o.blendFunc(o.ONE,o.ONE);break;case yl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case _l:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case yi:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dn:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case yl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case _l:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,R=null,T=null,O=null,v.set(0,0,0),E=0,_=D,F=ce}return}Dt=Dt||lt,re=re||ct,ne=ne||wt,(lt!==M||Dt!==w)&&(o.blendEquationSeparate(At[lt],At[Dt]),M=lt,w=Dt),(ct!==S||wt!==R||re!==T||ne!==O)&&(o.blendFuncSeparate(zt[ct],zt[wt],zt[re],zt[ne]),S=ct,R=wt,T=re,O=ne),(ae.equals(v)===!1||le!==E)&&(o.blendColor(ae.r,ae.g,ae.b,le),v.copy(ae),E=le),_=D,F=!1}function ue(D,lt){D.side===Be?Et(o.CULL_FACE):Bt(o.CULL_FACE);let ct=D.side===rn;lt&&(ct=!ct),Vt(ct),D.blending===yi&&D.transparent===!1?bt(gi):bt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const wt=D.stencilWrite;c.setTest(wt),wt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Bt(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){k!==D&&(D?o.frontFace(o.CW):o.frontFace(o.CCW),k=D)}function A(D){D!==Ud?(Bt(o.CULL_FACE),D!==q&&(D===gl?o.cullFace(o.BACK):D===Nd?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),q=D}function x(D){D!==L&&(j&&o.lineWidth(D),L=D)}function H(D,lt,ct){D?(Bt(o.POLYGON_OFFSET_FILL),(G!==lt||W!==ct)&&(o.polygonOffset(lt,ct),G=lt,W=ct)):Et(o.POLYGON_OFFSET_FILL)}function Y(D){D?Bt(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function C(D){D===void 0&&(D=o.TEXTURE0+$-1),rt!==D&&(o.activeTexture(D),rt=D)}function J(D,lt,ct){ct===void 0&&(rt===null?ct=o.TEXTURE0+$-1:ct=rt);let wt=at[ct];wt===void 0&&(wt={type:void 0,texture:void 0},at[ct]=wt),(wt.type!==D||wt.texture!==lt)&&(rt!==ct&&(o.activeTexture(ct),rt=ct),o.bindTexture(D,lt||Ot[D]),wt.type=D,wt.texture=lt)}function ht(){const D=at[rt];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function dt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Kt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(D){gt.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),gt.copy(D))}function ee(D){vt.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),vt.copy(D))}function he(D,lt){let ct=h.get(lt);ct===void 0&&(ct=new WeakMap,h.set(lt,ct));let wt=ct.get(D);wt===void 0&&(wt=o.getUniformBlockIndex(lt,D.name),ct.set(D,wt))}function qt(D,lt){const wt=h.get(lt).get(D);u.get(lt)!==wt&&(o.uniformBlockBinding(lt,wt,D.__bindingPointIndex),u.set(lt,wt))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},rt=null,at={},f={},g=new WeakMap,y=[],m=null,p=!1,_=null,M=null,S=null,R=null,w=null,T=null,O=null,v=new Tt(0,0,0),E=0,F=!1,k=null,q=null,L=null,G=null,W=null,gt.set(0,0,o.canvas.width,o.canvas.height),vt.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Bt,disable:Et,bindFramebuffer:Ut,drawBuffers:z,useProgram:Te,setBlending:bt,setMaterial:ue,setFlipSided:Vt,setCullFace:A,setLineWidth:x,setPolygonOffset:H,setScissorTest:Y,activeTexture:C,bindTexture:J,unbindTexture:ht,compressedTexImage2D:dt,compressedTexImage3D:st,texImage2D:St,texImage3D:yt,updateUBOMapping:he,uniformBlockBinding:qt,texStorage2D:Ct,texStorage3D:It,texSubImage2D:Rt,texSubImage3D:kt,compressedTexSubImage2D:Z,compressedTexSubImage3D:Kt,scissor:Xt,viewport:ee,reset:nt}}function $g(o,t,e,n,i,s,r){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return f?new OffscreenCanvas(A,x):lo("canvas")}function y(A,x,H,Y){let C=1;if((A.width>Y||A.height>Y)&&(C=Y/Math.max(A.width,A.height)),C<1||x===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const J=x?gr:Math.floor,ht=J(C*A.width),dt=J(C*A.height);h===void 0&&(h=g(ht,dt));const st=H?g(ht,dt):h;return st.width=ht,st.height=dt,st.getContext("2d").drawImage(A,0,0,ht,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ht+"x"+dt+")."),st}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Ga(A.width)&&Ga(A.height)}function p(A){return a?!1:A.wrapS!==ze||A.wrapT!==ze||A.minFilter!==Ye&&A.minFilter!==Je}function _(A,x){return A.generateMipmaps&&x&&A.minFilter!==Ye&&A.minFilter!==Je}function M(A){o.generateMipmap(A)}function S(A,x,H,Y,C=!1){if(a===!1)return x;if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=x;if(x===o.RED&&(H===o.FLOAT&&(J=o.R32F),H===o.HALF_FLOAT&&(J=o.R16F),H===o.UNSIGNED_BYTE&&(J=o.R8)),x===o.RED_INTEGER&&(H===o.UNSIGNED_BYTE&&(J=o.R8UI),H===o.UNSIGNED_SHORT&&(J=o.R16UI),H===o.UNSIGNED_INT&&(J=o.R32UI),H===o.BYTE&&(J=o.R8I),H===o.SHORT&&(J=o.R16I),H===o.INT&&(J=o.R32I)),x===o.RG&&(H===o.FLOAT&&(J=o.RG32F),H===o.HALF_FLOAT&&(J=o.RG16F),H===o.UNSIGNED_BYTE&&(J=o.RG8)),x===o.RGBA){const ht=C?ur:de.getTransfer(Y);H===o.FLOAT&&(J=o.RGBA32F),H===o.HALF_FLOAT&&(J=o.RGBA16F),H===o.UNSIGNED_BYTE&&(J=ht===Ee?o.SRGB8_ALPHA8:o.RGBA8),H===o.UNSIGNED_SHORT_4_4_4_4&&(J=o.RGBA4),H===o.UNSIGNED_SHORT_5_5_5_1&&(J=o.RGB5_A1)}return(J===o.R16F||J===o.R32F||J===o.RG16F||J===o.RG32F||J===o.RGBA16F||J===o.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function R(A,x,H){return _(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Ye&&A.minFilter!==Je?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){return A===Ye||A===Oa||A===rr?o.NEAREST:o.LINEAR}function T(A){const x=A.target;x.removeEventListener("dispose",T),v(x),x.isVideoTexture&&u.delete(x)}function O(A){const x=A.target;x.removeEventListener("dispose",O),F(x)}function v(A){const x=n.get(A);if(x.__webglInit===void 0)return;const H=A.source,Y=d.get(H);if(Y){const C=Y[x.__cacheKey];C.usedTimes--,C.usedTimes===0&&E(A),Object.keys(Y).length===0&&d.delete(H)}n.remove(A)}function E(A){const x=n.get(A);o.deleteTexture(x.__webglTexture);const H=A.source,Y=d.get(H);delete Y[x.__cacheKey],r.memory.textures--}function F(A){const x=A.texture,H=n.get(A),Y=n.get(x);if(Y.__webglTexture!==void 0&&(o.deleteTexture(Y.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(H.__webglFramebuffer[C]))for(let J=0;J<H.__webglFramebuffer[C].length;J++)o.deleteFramebuffer(H.__webglFramebuffer[C][J]);else o.deleteFramebuffer(H.__webglFramebuffer[C]);H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[C])}else{if(Array.isArray(H.__webglFramebuffer))for(let C=0;C<H.__webglFramebuffer.length;C++)o.deleteFramebuffer(H.__webglFramebuffer[C]);else o.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let C=0;C<H.__webglColorRenderbuffer.length;C++)H.__webglColorRenderbuffer[C]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[C]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let C=0,J=x.length;C<J;C++){const ht=n.get(x[C]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),r.memory.textures--),n.remove(x[C])}n.remove(x),n.remove(A)}let k=0;function q(){k=0}function L(){const A=k;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),k+=1,A}function G(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function W(A,x){const H=n.get(A);if(A.isVideoTexture&&ue(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(H,A,x);return}}e.bindTexture(o.TEXTURE_2D,H.__webglTexture,o.TEXTURE0+x)}function $(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){gt(H,A,x);return}e.bindTexture(o.TEXTURE_2D_ARRAY,H.__webglTexture,o.TEXTURE0+x)}function j(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){gt(H,A,x);return}e.bindTexture(o.TEXTURE_3D,H.__webglTexture,o.TEXTURE0+x)}function K(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){vt(H,A,x);return}e.bindTexture(o.TEXTURE_CUBE_MAP,H.__webglTexture,o.TEXTURE0+x)}const Q={[_n]:o.REPEAT,[ze]:o.CLAMP_TO_EDGE,[dr]:o.MIRRORED_REPEAT},rt={[Ye]:o.NEAREST,[Oa]:o.NEAREST_MIPMAP_NEAREST,[rr]:o.NEAREST_MIPMAP_LINEAR,[Je]:o.LINEAR,[Ah]:o.LINEAR_MIPMAP_NEAREST,[Ki]:o.LINEAR_MIPMAP_LINEAR},at={[Ru]:o.NEVER,[Uu]:o.ALWAYS,[Cu]:o.LESS,[kh]:o.LEQUAL,[Pu]:o.EQUAL,[Du]:o.GEQUAL,[Lu]:o.GREATER,[Iu]:o.NOTEQUAL};function X(A,x,H){if(H?(o.texParameteri(A,o.TEXTURE_WRAP_S,Q[x.wrapS]),o.texParameteri(A,o.TEXTURE_WRAP_T,Q[x.wrapT]),(A===o.TEXTURE_3D||A===o.TEXTURE_2D_ARRAY)&&o.texParameteri(A,o.TEXTURE_WRAP_R,Q[x.wrapR]),o.texParameteri(A,o.TEXTURE_MAG_FILTER,rt[x.magFilter]),o.texParameteri(A,o.TEXTURE_MIN_FILTER,rt[x.minFilter])):(o.texParameteri(A,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(A,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(A===o.TEXTURE_3D||A===o.TEXTURE_2D_ARRAY)&&o.texParameteri(A,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(x.wrapS!==ze||x.wrapT!==ze)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(A,o.TEXTURE_MAG_FILTER,w(x.magFilter)),o.texParameteri(A,o.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==Ye&&x.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(o.texParameteri(A,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(A,o.TEXTURE_COMPARE_FUNC,at[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Y=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ye||x.minFilter!==rr&&x.minFilter!==Ki||x.type===jn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===ro&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(o.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function et(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",T));const Y=x.source;let C=d.get(Y);C===void 0&&(C={},d.set(Y,C));const J=G(x);if(J!==A.__cacheKey){C[J]===void 0&&(C[J]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,H=!0),C[J].usedTimes++;const ht=C[A.__cacheKey];ht!==void 0&&(C[A.__cacheKey].usedTimes--,ht.usedTimes===0&&E(x)),A.__cacheKey=J,A.__webglTexture=C[J].texture}return H}function gt(A,x,H){let Y=o.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=o.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=o.TEXTURE_3D);const C=et(A,x),J=x.source;e.bindTexture(Y,A.__webglTexture,o.TEXTURE0+H);const ht=n.get(J);if(J.version!==ht.__version||C===!0){e.activeTexture(o.TEXTURE0+H);const dt=de.getPrimaries(de.workingColorSpace),st=x.colorSpace===Sn?null:de.getPrimaries(x.colorSpace),Rt=x.colorSpace===Sn||dt===st?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,x.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,x.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const kt=p(x)&&m(x.image)===!1;let Z=y(x.image,kt,!1,i.maxTextureSize);Z=Vt(x,Z);const Kt=m(Z)||a,Ct=s.convert(x.format,x.colorSpace);let It=s.convert(x.type),St=S(x.internalFormat,Ct,It,x.colorSpace,x.isVideoTexture);X(Y,x,Kt);let yt;const Xt=x.mipmaps,ee=a&&x.isVideoTexture!==!0&&St!==Uh,he=ht.__version===void 0||C===!0,qt=R(x,Z,Kt);if(x.isDepthTexture)St=o.DEPTH_COMPONENT,a?x.type===jn?St=o.DEPTH_COMPONENT32F:x.type===pi?St=o.DEPTH_COMPONENT24:x.type===Vi?St=o.DEPTH24_STENCIL8:St=o.DEPTH_COMPONENT16:x.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Xi&&St===o.DEPTH_COMPONENT&&x.type!==Ja&&x.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=pi,It=s.convert(x.type)),x.format===Cs&&St===o.DEPTH_COMPONENT&&(St=o.DEPTH_STENCIL,x.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Vi,It=s.convert(x.type))),he&&(ee?e.texStorage2D(o.TEXTURE_2D,1,St,Z.width,Z.height):e.texImage2D(o.TEXTURE_2D,0,St,Z.width,Z.height,0,Ct,It,null));else if(x.isDataTexture)if(Xt.length>0&&Kt){ee&&he&&e.texStorage2D(o.TEXTURE_2D,qt,St,Xt[0].width,Xt[0].height);for(let nt=0,D=Xt.length;nt<D;nt++)yt=Xt[nt],ee?e.texSubImage2D(o.TEXTURE_2D,nt,0,0,yt.width,yt.height,Ct,It,yt.data):e.texImage2D(o.TEXTURE_2D,nt,St,yt.width,yt.height,0,Ct,It,yt.data);x.generateMipmaps=!1}else ee?(he&&e.texStorage2D(o.TEXTURE_2D,qt,St,Z.width,Z.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,Z.width,Z.height,Ct,It,Z.data)):e.texImage2D(o.TEXTURE_2D,0,St,Z.width,Z.height,0,Ct,It,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ee&&he&&e.texStorage3D(o.TEXTURE_2D_ARRAY,qt,St,Xt[0].width,Xt[0].height,Z.depth);for(let nt=0,D=Xt.length;nt<D;nt++)yt=Xt[nt],x.format!==fn?Ct!==null?ee?e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,Z.depth,Ct,yt.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,nt,St,yt.width,yt.height,Z.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage3D(o.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,Z.depth,Ct,It,yt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,nt,St,yt.width,yt.height,Z.depth,0,Ct,It,yt.data)}else{ee&&he&&e.texStorage2D(o.TEXTURE_2D,qt,St,Xt[0].width,Xt[0].height);for(let nt=0,D=Xt.length;nt<D;nt++)yt=Xt[nt],x.format!==fn?Ct!==null?ee?e.compressedTexSubImage2D(o.TEXTURE_2D,nt,0,0,yt.width,yt.height,Ct,yt.data):e.compressedTexImage2D(o.TEXTURE_2D,nt,St,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage2D(o.TEXTURE_2D,nt,0,0,yt.width,yt.height,Ct,It,yt.data):e.texImage2D(o.TEXTURE_2D,nt,St,yt.width,yt.height,0,Ct,It,yt.data)}else if(x.isDataArrayTexture)ee?(he&&e.texStorage3D(o.TEXTURE_2D_ARRAY,qt,St,Z.width,Z.height,Z.depth),e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Ct,It,Z.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,St,Z.width,Z.height,Z.depth,0,Ct,It,Z.data);else if(x.isData3DTexture)ee?(he&&e.texStorage3D(o.TEXTURE_3D,qt,St,Z.width,Z.height,Z.depth),e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Ct,It,Z.data)):e.texImage3D(o.TEXTURE_3D,0,St,Z.width,Z.height,Z.depth,0,Ct,It,Z.data);else if(x.isFramebufferTexture){if(he)if(ee)e.texStorage2D(o.TEXTURE_2D,qt,St,Z.width,Z.height);else{let nt=Z.width,D=Z.height;for(let lt=0;lt<qt;lt++)e.texImage2D(o.TEXTURE_2D,lt,St,nt,D,0,Ct,It,null),nt>>=1,D>>=1}}else if(Xt.length>0&&Kt){ee&&he&&e.texStorage2D(o.TEXTURE_2D,qt,St,Xt[0].width,Xt[0].height);for(let nt=0,D=Xt.length;nt<D;nt++)yt=Xt[nt],ee?e.texSubImage2D(o.TEXTURE_2D,nt,0,0,Ct,It,yt):e.texImage2D(o.TEXTURE_2D,nt,St,Ct,It,yt);x.generateMipmaps=!1}else ee?(he&&e.texStorage2D(o.TEXTURE_2D,qt,St,Z.width,Z.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,It,Z)):e.texImage2D(o.TEXTURE_2D,0,St,Ct,It,Z);_(x,Kt)&&M(Y),ht.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function vt(A,x,H){if(x.image.length!==6)return;const Y=et(A,x),C=x.source;e.bindTexture(o.TEXTURE_CUBE_MAP,A.__webglTexture,o.TEXTURE0+H);const J=n.get(C);if(C.version!==J.__version||Y===!0){e.activeTexture(o.TEXTURE0+H);const ht=de.getPrimaries(de.workingColorSpace),dt=x.colorSpace===Sn?null:de.getPrimaries(x.colorSpace),st=x.colorSpace===Sn||ht===dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,x.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,x.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const Rt=x.isCompressedTexture||x.image[0].isCompressedTexture,kt=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let nt=0;nt<6;nt++)!Rt&&!kt?Z[nt]=y(x.image[nt],!1,!0,i.maxCubemapSize):Z[nt]=kt?x.image[nt].image:x.image[nt],Z[nt]=Vt(x,Z[nt]);const Kt=Z[0],Ct=m(Kt)||a,It=s.convert(x.format,x.colorSpace),St=s.convert(x.type),yt=S(x.internalFormat,It,St,x.colorSpace),Xt=a&&x.isVideoTexture!==!0,ee=J.__version===void 0||Y===!0;let he=R(x,Kt,Ct);X(o.TEXTURE_CUBE_MAP,x,Ct);let qt;if(Rt){Xt&&ee&&e.texStorage2D(o.TEXTURE_CUBE_MAP,he,yt,Kt.width,Kt.height);for(let nt=0;nt<6;nt++){qt=Z[nt].mipmaps;for(let D=0;D<qt.length;D++){const lt=qt[D];x.format!==fn?It!==null?Xt?e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,D,0,0,lt.width,lt.height,It,lt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,D,yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,D,0,0,lt.width,lt.height,It,St,lt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,D,yt,lt.width,lt.height,0,It,St,lt.data)}}}else{qt=x.mipmaps,Xt&&ee&&(qt.length>0&&he++,e.texStorage2D(o.TEXTURE_CUBE_MAP,he,yt,Z[0].width,Z[0].height));for(let nt=0;nt<6;nt++)if(kt){Xt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Z[nt].width,Z[nt].height,It,St,Z[nt].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,yt,Z[nt].width,Z[nt].height,0,It,St,Z[nt].data);for(let D=0;D<qt.length;D++){const ct=qt[D].image[nt].image;Xt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,D+1,0,0,ct.width,ct.height,It,St,ct.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,D+1,yt,ct.width,ct.height,0,It,St,ct.data)}}else{Xt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,It,St,Z[nt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,yt,It,St,Z[nt]);for(let D=0;D<qt.length;D++){const lt=qt[D];Xt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,D+1,0,0,It,St,lt.image[nt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,D+1,yt,It,St,lt.image[nt])}}}_(x,Ct)&&M(o.TEXTURE_CUBE_MAP),J.__version=C.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Mt(A,x,H,Y,C,J){const ht=s.convert(H.format,H.colorSpace),dt=s.convert(H.type),st=S(H.internalFormat,ht,dt,H.colorSpace);if(!n.get(x).__hasExternalTextures){const kt=Math.max(1,x.width>>J),Z=Math.max(1,x.height>>J);C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY?e.texImage3D(C,J,st,kt,Z,x.depth,0,ht,dt,null):e.texImage2D(C,J,st,kt,Z,0,ht,dt,null)}e.bindFramebuffer(o.FRAMEBUFFER,A),bt(x)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Y,C,n.get(H).__webglTexture,0,zt(x)):(C===o.TEXTURE_2D||C>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Y,C,n.get(H).__webglTexture,J),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(A,x,H){if(o.bindRenderbuffer(o.RENDERBUFFER,A),x.depthBuffer&&!x.stencilBuffer){let Y=a===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(H||bt(x)){const C=x.depthTexture;C&&C.isDepthTexture&&(C.type===jn?Y=o.DEPTH_COMPONENT32F:C.type===pi&&(Y=o.DEPTH_COMPONENT24));const J=zt(x);bt(x)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,J,Y,x.width,x.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,J,Y,x.width,x.height)}else o.renderbufferStorage(o.RENDERBUFFER,Y,x.width,x.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,A)}else if(x.depthBuffer&&x.stencilBuffer){const Y=zt(x);H&&bt(x)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Y,o.DEPTH24_STENCIL8,x.width,x.height):bt(x)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Y,o.DEPTH24_STENCIL8,x.width,x.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,x.width,x.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,A)}else{const Y=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let C=0;C<Y.length;C++){const J=Y[C],ht=s.convert(J.format,J.colorSpace),dt=s.convert(J.type),st=S(J.internalFormat,ht,dt,J.colorSpace),Rt=zt(x);H&&bt(x)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,st,x.width,x.height):bt(x)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,st,x.width,x.height):o.renderbufferStorage(o.RENDERBUFFER,st,x.width,x.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Bt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const Y=n.get(x.depthTexture).__webglTexture,C=zt(x);if(x.depthTexture.format===Xi)bt(x)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Y,0,C):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Y,0);else if(x.depthTexture.format===Cs)bt(x)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Y,0,C):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Et(A){const x=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Bt(x.__webglFramebuffer,A)}else if(H){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)e.bindFramebuffer(o.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]=o.createRenderbuffer(),Ot(x.__webglDepthbuffer[Y],A,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=o.createRenderbuffer(),Ot(x.__webglDepthbuffer,A,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(A,x,H){const Y=n.get(A);x!==void 0&&Mt(Y.__webglFramebuffer,A,A.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),H!==void 0&&Et(A)}function z(A){const x=A.texture,H=n.get(A),Y=n.get(x);A.addEventListener("dispose",O),A.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=o.createTexture()),Y.__version=x.version,r.memory.textures++);const C=A.isWebGLCubeRenderTarget===!0,J=A.isWebGLMultipleRenderTargets===!0,ht=m(A)||a;if(C){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(a&&x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let st=0;st<x.mipmaps.length;st++)H.__webglFramebuffer[dt][st]=o.createFramebuffer()}else H.__webglFramebuffer[dt]=o.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<x.mipmaps.length;dt++)H.__webglFramebuffer[dt]=o.createFramebuffer()}else H.__webglFramebuffer=o.createFramebuffer();if(J)if(i.drawBuffers){const dt=A.texture;for(let st=0,Rt=dt.length;st<Rt;st++){const kt=n.get(dt[st]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&bt(A)===!1){const dt=J?x:[x];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let st=0;st<dt.length;st++){const Rt=dt[st];H.__webglColorRenderbuffer[st]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,H.__webglColorRenderbuffer[st]);const kt=s.convert(Rt.format,Rt.colorSpace),Z=s.convert(Rt.type),Kt=S(Rt.internalFormat,kt,Z,Rt.colorSpace,A.isXRRenderTarget===!0),Ct=zt(A);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,Kt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.RENDERBUFFER,H.__webglColorRenderbuffer[st])}o.bindRenderbuffer(o.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(C){e.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture),X(o.TEXTURE_CUBE_MAP,x,ht);for(let dt=0;dt<6;dt++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)Mt(H.__webglFramebuffer[dt][st],A,x,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,st);else Mt(H.__webglFramebuffer[dt],A,x,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);_(x,ht)&&M(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){const dt=A.texture;for(let st=0,Rt=dt.length;st<Rt;st++){const kt=dt[st],Z=n.get(kt);e.bindTexture(o.TEXTURE_2D,Z.__webglTexture),X(o.TEXTURE_2D,kt,ht),Mt(H.__webglFramebuffer,A,kt,o.COLOR_ATTACHMENT0+st,o.TEXTURE_2D,0),_(kt,ht)&&M(o.TEXTURE_2D)}e.unbindTexture()}else{let dt=o.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?dt=A.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,Y.__webglTexture),X(dt,x,ht),a&&x.mipmaps&&x.mipmaps.length>0)for(let st=0;st<x.mipmaps.length;st++)Mt(H.__webglFramebuffer[st],A,x,o.COLOR_ATTACHMENT0,dt,st);else Mt(H.__webglFramebuffer,A,x,o.COLOR_ATTACHMENT0,dt,0);_(x,ht)&&M(dt),e.unbindTexture()}A.depthBuffer&&Et(A)}function Te(A){const x=m(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Y=0,C=H.length;Y<C;Y++){const J=H[Y];if(_(J,x)){const ht=A.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,dt=n.get(J).__webglTexture;e.bindTexture(ht,dt),M(ht),e.unbindTexture()}}}function At(A){if(a&&A.samples>0&&bt(A)===!1){const x=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,Y=A.height;let C=o.COLOR_BUFFER_BIT;const J=[],ht=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=n.get(A),st=A.isWebGLMultipleRenderTargets===!0;if(st)for(let Rt=0;Rt<x.length;Rt++)e.bindFramebuffer(o.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Rt=0;Rt<x.length;Rt++){J.push(o.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&J.push(ht);const kt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(kt===!1&&(A.depthBuffer&&(C|=o.DEPTH_BUFFER_BIT),A.stencilBuffer&&(C|=o.STENCIL_BUFFER_BIT)),st&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,dt.__webglColorRenderbuffer[Rt]),kt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[ht]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[ht])),st){const Z=n.get(x[Rt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Z,0)}o.blitFramebuffer(0,0,H,Y,0,0,H,Y,C,o.NEAREST),c&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),st)for(let Rt=0;Rt<x.length;Rt++){e.bindFramebuffer(o.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,dt.__webglColorRenderbuffer[Rt]);const kt=n.get(x[Rt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,kt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function zt(A){return Math.min(i.maxSamples,A.samples)}function bt(A){const x=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ue(A){const x=r.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Vt(A,x){const H=A.colorSpace,Y=A.format,C=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===za||H!==Le&&H!==Sn&&(de.getTransfer(H)===Ee?a===!1?t.has("EXT_sRGB")===!0&&Y===fn?(A.format=za,A.minFilter=Je,A.generateMipmaps=!1):x=Hh.sRGBToLinear(x):(Y!==fn||C!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=Ut,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=bt}function jg(o,t,e){const n=e.isWebGL2;function i(s,r=Sn){let a;const l=de.getTransfer(r);if(s===_i)return o.UNSIGNED_BYTE;if(s===Ch)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ph)return o.UNSIGNED_SHORT_5_5_5_1;if(s===mu)return o.BYTE;if(s===gu)return o.SHORT;if(s===Ja)return o.UNSIGNED_SHORT;if(s===Rh)return o.INT;if(s===pi)return o.UNSIGNED_INT;if(s===jn)return o.FLOAT;if(s===ro)return n?o.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yu)return o.ALPHA;if(s===fn)return o.RGBA;if(s===_u)return o.LUMINANCE;if(s===xu)return o.LUMINANCE_ALPHA;if(s===Xi)return o.DEPTH_COMPONENT;if(s===Cs)return o.DEPTH_STENCIL;if(s===za)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vu)return o.RED;if(s===Lh)return o.RED_INTEGER;if(s===Mu)return o.RG;if(s===Ih)return o.RG_INTEGER;if(s===Dh)return o.RGBA_INTEGER;if(s===Ir||s===Dr||s===Ur||s===Nr)if(l===Ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ir)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ir)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ur)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bl||s===Sl||s===Tl||s===El)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===bl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Tl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===El)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wl||s===Al)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===wl)return l===Ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Al)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rl||s===Cl||s===Pl||s===Ll||s===Il||s===Dl||s===Ul||s===Nl||s===Fl||s===kl||s===Ol||s===Hl||s===Bl||s===zl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Rl)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cl)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pl)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ll)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Il)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dl)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ul)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nl)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fl)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kl)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ol)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hl)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bl)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zl)return l===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fr||s===Gl||s===Wl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Fr)return l===Ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Wl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bu||s===Vl||s===Xl||s===ql)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Fr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Vl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ql)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vi?n?o.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class Zg extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class on extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jg={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new on;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Qg extends Ns{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const y=e.getContextAttributes();let m=null,p=null;const _=[],M=[],S=new Wt;let R=null;const w=new tn;w.layers.enable(1),w.viewport=new ve;const T=new tn;T.layers.enable(2),T.viewport=new ve;const O=[w,T],v=new Zg;v.layers.enable(1),v.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=_[X];return et===void 0&&(et=new ra,_[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=_[X];return et===void 0&&(et=new ra,_[X]=et),et.getGripSpace()},this.getHand=function(X){let et=_[X];return et===void 0&&(et=new ra,_[X]=et),et.getHandSpace()};function k(X){const et=M.indexOf(X.inputSource);if(et===-1)return;const gt=_[et];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||r),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",L);for(let X=0;X<_.length;X++){const et=M[X];et!==null&&(M[X]=null,_[X].disconnect(et))}E=null,F=null,t.setRenderTarget(m),f=null,d=null,h=null,i=null,p=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",q),i.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new $i(f.framebufferWidth,f.framebufferHeight,{format:fn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let et=null,gt=null,vt=null;y.depth&&(vt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=y.stencil?Cs:Xi,gt=y.stencil?Vi:pi);const Mt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(Mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new $i(d.textureWidth,d.textureHeight,{format:fn,type:_i,depthTexture:new jh(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const Ot=t.properties.get(p);Ot.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(X){for(let et=0;et<X.removed.length;et++){const gt=X.removed[et],vt=M.indexOf(gt);vt>=0&&(M[vt]=null,_[vt].disconnect(gt))}for(let et=0;et<X.added.length;et++){const gt=X.added[et];let vt=M.indexOf(gt);if(vt===-1){for(let Ot=0;Ot<_.length;Ot++)if(Ot>=M.length){M.push(gt),vt=Ot;break}else if(M[Ot]===null){M[Ot]=gt,vt=Ot;break}if(vt===-1)break}const Mt=_[vt];Mt&&Mt.connect(gt)}}const G=new P,W=new P;function $(X,et,gt){G.setFromMatrixPosition(et.matrixWorld),W.setFromMatrixPosition(gt.matrixWorld);const vt=G.distanceTo(W),Mt=et.projectionMatrix.elements,Ot=gt.projectionMatrix.elements,Bt=Mt[14]/(Mt[10]-1),Et=Mt[14]/(Mt[10]+1),Ut=(Mt[9]+1)/Mt[5],z=(Mt[9]-1)/Mt[5],Te=(Mt[8]-1)/Mt[0],At=(Ot[8]+1)/Ot[0],zt=Bt*Te,bt=Bt*At,ue=vt/(-Te+At),Vt=ue*-Te;et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Vt),X.translateZ(ue),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const A=Bt+ue,x=Et+ue,H=zt-Vt,Y=bt+(vt-Vt),C=Ut*Et/x*A,J=z*Et/x*A;X.projectionMatrix.makePerspective(H,Y,C,J,A,x),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function j(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;v.near=T.near=w.near=X.near,v.far=T.far=w.far=X.far,(E!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,F=v.far);const et=X.parent,gt=v.cameras;j(v,et);for(let vt=0;vt<gt.length;vt++)j(gt[vt],et);gt.length===2?$(v,w,T):v.projectionMatrix.copy(w.projectionMatrix),K(X,v,et)};function K(X,et,gt){gt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ls*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let Q=null;function rt(X,et){if(u=et.getViewerPose(c||r),g=et,u!==null){const gt=u.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let vt=!1;gt.length!==v.cameras.length&&(v.cameras.length=0,vt=!0);for(let Mt=0;Mt<gt.length;Mt++){const Ot=gt[Mt];let Bt=null;if(f!==null)Bt=f.getViewport(Ot);else{const Ut=h.getViewSubImage(d,Ot);Bt=Ut.viewport,Mt===0&&(t.setRenderTargetTextures(p,Ut.colorTexture,d.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(p))}let Et=O[Mt];Et===void 0&&(Et=new tn,Et.layers.enable(Mt),Et.viewport=new ve,O[Mt]=Et),Et.matrix.fromArray(Ot.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Ot.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Mt===0&&(v.matrix.copy(Et.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),vt===!0&&v.cameras.push(Et)}}for(let gt=0;gt<_.length;gt++){const vt=M[gt],Mt=_[gt];vt!==null&&Mt!==void 0&&Mt.update(vt,et,c||r)}Q&&Q(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const at=new $h;at.setAnimationLoop(rt),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}}function ty(o,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qh(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const M=o._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*M,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ey(o,t,e,n){let i={},s={},r=[];const a=e.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,M){const S=M.program;n.uniformBlockBinding(_,S)}function c(_,M){let S=i[_.id];S===void 0&&(g(_),S=u(_),i[_.id]=S,_.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(_,R);const w=t.render.frame;s[_.id]!==w&&(d(_),s[_.id]=w)}function u(_){const M=h();_.__bindingPointIndex=M;const S=o.createBuffer(),R=_.__size,w=_.usage;return o.bindBuffer(o.UNIFORM_BUFFER,S),o.bufferData(o.UNIFORM_BUFFER,R,w),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,M,S),S}function h(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const M=i[_.id],S=_.uniforms,R=_.__cache;o.bindBuffer(o.UNIFORM_BUFFER,M);for(let w=0,T=S.length;w<T;w++){const O=Array.isArray(S[w])?S[w]:[S[w]];for(let v=0,E=O.length;v<E;v++){const F=O[v];if(f(F,w,v,R)===!0){const k=F.__offset,q=Array.isArray(F.value)?F.value:[F.value];let L=0;for(let G=0;G<q.length;G++){const W=q[G],$=y(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,o.bufferSubData(o.UNIFORM_BUFFER,k+L,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,k,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(_,M,S,R){const w=_.value,T=M+"_"+S;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const O=R[T];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return R[T]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function g(_){const M=_.uniforms;let S=0;const R=16;for(let T=0,O=M.length;T<O;T++){const v=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,F=v.length;E<F;E++){const k=v[E],q=Array.isArray(k.value)?k.value:[k.value];for(let L=0,G=q.length;L<G;L++){const W=q[L],$=y(W),j=S%R;j!==0&&R-j<$.boundary&&(S+=R-j),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=$.storage}}}const w=S%R;return w>0&&(S+=R-w),_.__size=S,_.__cache={},this}function y(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){const M=_.target;M.removeEventListener("dispose",m);const S=r.indexOf(M.__bindingPointIndex);r.splice(S,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const _ in i)o.deleteBuffer(i[_]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class nd{constructor(t={}){const{canvas:e=ju(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=r;const f=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;const M=this;let S=!1,R=0,w=0,T=null,O=-1,v=null;const E=new ve,F=new ve;let k=null;const q=new Tt(0);let L=0,G=e.width,W=e.height,$=1,j=null,K=null;const Q=new ve(0,0,G,W),rt=new ve(0,0,G,W);let at=!1;const X=new nl;let et=!1,gt=!1,vt=null;const Mt=new Zt,Ot=new Wt,Bt=new P,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return T===null?$:1}let z=n;function Te(b,I){for(let U=0;U<b.length;U++){const N=b[U],B=e.getContext(N,I);if(B!==null)return B}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ja}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",lt,!1),z===null){const I=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&I.shift(),z=Te(I,b),z===null)throw Te(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let At,zt,bt,ue,Vt,A,x,H,Y,C,J,ht,dt,st,Rt,kt,Z,Kt,Ct,It,St,yt,Xt,ee;function he(){At=new d0(z),zt=new o0(z,At,t),At.init(zt),yt=new jg(z,At,zt),bt=new Kg(z,At,zt),ue=new p0(z),Vt=new Ug,A=new $g(z,At,bt,Vt,zt,yt,ue),x=new a0(M),H=new h0(M),Y=new bf(z,zt),Xt=new i0(z,At,Y,zt),C=new u0(z,Y,ue,Xt),J=new _0(z,C,Y,ue),Ct=new y0(z,zt,A),kt=new r0(Vt),ht=new Dg(M,x,H,At,zt,Xt,kt),dt=new ty(M,Vt),st=new Fg,Rt=new Gg(At,zt),Kt=new n0(M,x,H,bt,J,d,l),Z=new Yg(M,J,zt),ee=new ey(z,ue,zt,bt),It=new s0(z,At,ue,zt),St=new f0(z,At,ue,zt),ue.programs=ht.programs,M.capabilities=zt,M.extensions=At,M.properties=Vt,M.renderLists=st,M.shadowMap=Z,M.state=bt,M.info=ue}he();const qt=new Qg(M,z);this.xr=qt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=At.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=At.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(G,W,!1))},this.getSize=function(b){return b.set(G,W)},this.setSize=function(b,I,U=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,W=I,e.width=Math.floor(b*$),e.height=Math.floor(I*$),U===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(G*$,W*$).floor()},this.setDrawingBufferSize=function(b,I,U){G=b,W=I,$=U,e.width=Math.floor(b*U),e.height=Math.floor(I*U),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(Q)},this.setViewport=function(b,I,U,N){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,I,U,N),bt.viewport(E.copy(Q).multiplyScalar($).floor())},this.getScissor=function(b){return b.copy(rt)},this.setScissor=function(b,I,U,N){b.isVector4?rt.set(b.x,b.y,b.z,b.w):rt.set(b,I,U,N),bt.scissor(F.copy(rt).multiplyScalar($).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(b){bt.setScissorTest(at=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(b=!0,I=!0,U=!0){let N=0;if(b){let B=!1;if(T!==null){const mt=T.texture.format;B=mt===Dh||mt===Ih||mt===Lh}if(B){const mt=T.texture.type,ft=mt===_i||mt===pi||mt===Ja||mt===Vi||mt===Ch||mt===Ph,_t=Kt.getClearColor(),xt=Kt.getClearAlpha(),Pt=_t.r,pt=_t.g,Nt=_t.b;ft?(f[0]=Pt,f[1]=pt,f[2]=Nt,f[3]=xt,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=Pt,g[1]=pt,g[2]=Nt,g[3]=xt,z.clearBufferiv(z.COLOR,0,g))}else N|=z.COLOR_BUFFER_BIT}I&&(N|=z.DEPTH_BUFFER_BIT),U&&(N|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),st.dispose(),Rt.dispose(),Vt.dispose(),x.dispose(),H.dispose(),J.dispose(),Xt.dispose(),ee.dispose(),ht.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",le),qt.removeEventListener("sessionend",ce),vt&&(vt.dispose(),vt=null),Ie.stop()};function nt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=ue.autoReset,I=Z.enabled,U=Z.autoUpdate,N=Z.needsUpdate,B=Z.type;he(),ue.autoReset=b,Z.enabled=I,Z.autoUpdate=U,Z.needsUpdate=N,Z.type=B}function lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){const I=b.target;I.removeEventListener("dispose",ct),wt(I)}function wt(b){Dt(b),Vt.remove(b)}function Dt(b){const I=Vt.get(b).programs;I!==void 0&&(I.forEach(function(U){ht.releaseProgram(U)}),b.isShaderMaterial&&ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,U,N,B,mt){I===null&&(I=Et);const ft=B.isMesh&&B.matrixWorld.determinant()<0,_t=V(b,I,U,N,B);bt.setMaterial(N,ft);let xt=U.index,Pt=1;if(N.wireframe===!0){if(xt=C.getWireframeAttribute(U),xt===void 0)return;Pt=2}const pt=U.drawRange,Nt=U.attributes.position;let Se=pt.start*Pt,Ae=(pt.start+pt.count)*Pt;mt!==null&&(Se=Math.max(Se,mt.start*Pt),Ae=Math.min(Ae,(mt.start+mt.count)*Pt)),xt!==null?(Se=Math.max(Se,0),Ae=Math.min(Ae,xt.count)):Nt!=null&&(Se=Math.max(Se,0),Ae=Math.min(Ae,Nt.count));const Ce=Ae-Se;if(Ce<0||Ce===1/0)return;Xt.setup(B,N,_t,U,xt);let Re,oe=It;if(xt!==null&&(Re=Y.get(xt),oe=St,oe.setIndex(Re)),B.isMesh)N.wireframe===!0?(bt.setLineWidth(N.wireframeLinewidth*Ut()),oe.setMode(z.LINES)):oe.setMode(z.TRIANGLES);else if(B.isLine){let Ft=N.linewidth;Ft===void 0&&(Ft=1),bt.setLineWidth(Ft*Ut()),B.isLineSegments?oe.setMode(z.LINES):B.isLineLoop?oe.setMode(z.LINE_LOOP):oe.setMode(z.LINE_STRIP)}else B.isPoints?oe.setMode(z.POINTS):B.isSprite&&oe.setMode(z.TRIANGLES);if(B.isBatchedMesh)oe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)oe.renderInstances(Se,Ce,B.count);else if(U.isInstancedBufferGeometry){const Ft=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Xe=Math.min(U.instanceCount,Ft);oe.renderInstances(Se,Ce,Xe)}else oe.render(Se,Ce)};function re(b,I,U){b.transparent===!0&&b.side===Be&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,cn(b,I,U),b.side=Ln,b.needsUpdate=!0,cn(b,I,U),b.side=Be):cn(b,I,U)}this.compile=function(b,I,U=null){U===null&&(U=b),m=Rt.get(U),m.init(),_.push(m),U.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==U&&b.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(M._useLegacyLights);const N=new Set;return b.traverse(function(B){const mt=B.material;if(mt)if(Array.isArray(mt))for(let ft=0;ft<mt.length;ft++){const _t=mt[ft];re(_t,U,B),N.add(_t)}else re(mt,U,B),N.add(mt)}),_.pop(),m=null,N},this.compileAsync=function(b,I,U=null){const N=this.compile(b,I,U);return new Promise(B=>{function mt(){if(N.forEach(function(ft){Vt.get(ft).currentProgram.isReady()&&N.delete(ft)}),N.size===0){B(b);return}setTimeout(mt,10)}At.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ne=null;function ae(b){ne&&ne(b)}function le(){Ie.stop()}function ce(){Ie.start()}const Ie=new $h;Ie.setAnimationLoop(ae),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(b){ne=b,qt.setAnimationLoop(b),b===null?Ie.stop():Ie.start()},qt.addEventListener("sessionstart",le),qt.addEventListener("sessionend",ce),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(I),I=qt.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,I,T),m=Rt.get(b,_.length),m.init(),_.push(m),Mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(Mt),gt=this.localClippingEnabled,et=kt.init(this.clippingPlanes,gt),y=st.get(b,p.length),y.init(),p.push(y),Gt(b,I,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(j,K),this.info.render.frame++,et===!0&&kt.beginShadows();const U=m.state.shadowsArray;if(Z.render(U,b,I),et===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(y,b),m.setupLights(M._useLegacyLights),I.isArrayCamera){const N=I.cameras;for(let B=0,mt=N.length;B<mt;B++){const ft=N[B];Ht(y,b,ft,ft.viewport)}}else Ht(y,b,I);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(M,b,I),Xt.resetDefaultState(),O=-1,v=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Gt(b,I,U,N){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)U=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){N&&Bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Mt);const ft=J.update(b),_t=b.material;_t.visible&&y.push(b,ft,_t,U,Bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){const ft=J.update(b),_t=b.material;if(N&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Bt.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Bt.copy(ft.boundingSphere.center)),Bt.applyMatrix4(b.matrixWorld).applyMatrix4(Mt)),Array.isArray(_t)){const xt=ft.groups;for(let Pt=0,pt=xt.length;Pt<pt;Pt++){const Nt=xt[Pt],Se=_t[Nt.materialIndex];Se&&Se.visible&&y.push(b,ft,Se,U,Bt.z,Nt)}}else _t.visible&&y.push(b,ft,_t,U,Bt.z,null)}}const mt=b.children;for(let ft=0,_t=mt.length;ft<_t;ft++)Gt(mt[ft],I,U,N)}function Ht(b,I,U,N){const B=b.opaque,mt=b.transmissive,ft=b.transparent;m.setupLightsView(U),et===!0&&kt.setGlobalState(M.clippingPlanes,U),mt.length>0&&be(B,mt,I,U),N&&bt.viewport(E.copy(N)),B.length>0&&$t(B,I,U),mt.length>0&&$t(mt,I,U),ft.length>0&&$t(ft,I,U),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function be(b,I,U,N){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;const mt=zt.isWebGL2;vt===null&&(vt=new $i(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")?ro:_i,minFilter:Ki,samples:mt?4:0})),M.getDrawingBufferSize(Ot),mt?vt.setSize(Ot.x,Ot.y):vt.setSize(gr(Ot.x),gr(Ot.y));const ft=M.getRenderTarget();M.setRenderTarget(vt),M.getClearColor(q),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const _t=M.toneMapping;M.toneMapping=Jn,$t(b,U,N),A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt);let xt=!1;for(let Pt=0,pt=I.length;Pt<pt;Pt++){const Nt=I[Pt],Se=Nt.object,Ae=Nt.geometry,Ce=Nt.material,Re=Nt.group;if(Ce.side===Be&&Se.layers.test(N.layers)){const oe=Ce.side;Ce.side=rn,Ce.needsUpdate=!0,Ue(Se,U,N,Ae,Ce,Re),Ce.side=oe,Ce.needsUpdate=!0,xt=!0}}xt===!0&&(A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt)),M.setRenderTarget(ft),M.setClearColor(q,L),M.toneMapping=_t}function $t(b,I,U){const N=I.isScene===!0?I.overrideMaterial:null;for(let B=0,mt=b.length;B<mt;B++){const ft=b[B],_t=ft.object,xt=ft.geometry,Pt=N===null?ft.material:N,pt=ft.group;_t.layers.test(U.layers)&&Ue(_t,I,U,xt,Pt,pt)}}function Ue(b,I,U,N,B,mt){b.onBeforeRender(M,I,U,N,B,mt),b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(M,I,U,N,b,mt),B.transparent===!0&&B.side===Be&&B.forceSinglePass===!1?(B.side=rn,B.needsUpdate=!0,M.renderBufferDirect(U,I,N,B,b,mt),B.side=Ln,B.needsUpdate=!0,M.renderBufferDirect(U,I,N,B,b,mt),B.side=Be):M.renderBufferDirect(U,I,N,B,b,mt),b.onAfterRender(M,I,U,N,B,mt)}function cn(b,I,U){I.isScene!==!0&&(I=Et);const N=Vt.get(b),B=m.state.lights,mt=m.state.shadowsArray,ft=B.state.version,_t=ht.getParameters(b,B.state,mt,I,U),xt=ht.getProgramCacheKey(_t);let Pt=N.programs;N.environment=b.isMeshStandardMaterial?I.environment:null,N.fog=I.fog,N.envMap=(b.isMeshStandardMaterial?H:x).get(b.envMap||N.environment),Pt===void 0&&(b.addEventListener("dispose",ct),Pt=new Map,N.programs=Pt);let pt=Pt.get(xt);if(pt!==void 0){if(N.currentProgram===pt&&N.lightsStateVersion===ft)return ie(b,_t),pt}else _t.uniforms=ht.getUniforms(b),b.onBuild(U,_t,M),b.onBeforeCompile(_t,M),pt=ht.acquireProgram(_t,xt),Pt.set(xt,pt),N.uniforms=_t.uniforms;const Nt=N.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Nt.clippingPlanes=kt.uniform),ie(b,_t),N.needsLights=it(b),N.lightsStateVersion=ft,N.needsLights&&(Nt.ambientLightColor.value=B.state.ambient,Nt.lightProbe.value=B.state.probe,Nt.directionalLights.value=B.state.directional,Nt.directionalLightShadows.value=B.state.directionalShadow,Nt.spotLights.value=B.state.spot,Nt.spotLightShadows.value=B.state.spotShadow,Nt.rectAreaLights.value=B.state.rectArea,Nt.ltc_1.value=B.state.rectAreaLTC1,Nt.ltc_2.value=B.state.rectAreaLTC2,Nt.pointLights.value=B.state.point,Nt.pointLightShadows.value=B.state.pointShadow,Nt.hemisphereLights.value=B.state.hemi,Nt.directionalShadowMap.value=B.state.directionalShadowMap,Nt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Nt.spotShadowMap.value=B.state.spotShadowMap,Nt.spotLightMatrix.value=B.state.spotLightMatrix,Nt.spotLightMap.value=B.state.spotLightMap,Nt.pointShadowMap.value=B.state.pointShadowMap,Nt.pointShadowMatrix.value=B.state.pointShadowMatrix),N.currentProgram=pt,N.uniformsList=null,pt}function hn(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=ar.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function ie(b,I){const U=Vt.get(b);U.outputColorSpace=I.outputColorSpace,U.batching=I.batching,U.instancing=I.instancing,U.instancingColor=I.instancingColor,U.skinning=I.skinning,U.morphTargets=I.morphTargets,U.morphNormals=I.morphNormals,U.morphColors=I.morphColors,U.morphTargetsCount=I.morphTargetsCount,U.numClippingPlanes=I.numClippingPlanes,U.numIntersection=I.numClipIntersection,U.vertexAlphas=I.vertexAlphas,U.vertexTangents=I.vertexTangents,U.toneMapping=I.toneMapping}function V(b,I,U,N,B){I.isScene!==!0&&(I=Et),A.resetTextureUnits();const mt=I.fog,ft=N.isMeshStandardMaterial?I.environment:null,_t=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Le,xt=(N.isMeshStandardMaterial?H:x).get(N.envMap||ft),Pt=N.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pt=!!U.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Nt=!!U.morphAttributes.position,Se=!!U.morphAttributes.normal,Ae=!!U.morphAttributes.color;let Ce=Jn;N.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ce=M.toneMapping);const Re=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,oe=Re!==void 0?Re.length:0,Ft=Vt.get(N),Xe=m.state.lights;if(et===!0&&(gt===!0||b!==v)){const xn=b===v&&N.id===O;kt.setState(N,b,xn)}let ge=!1;N.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Xe.state.version||Ft.outputColorSpace!==_t||B.isBatchedMesh&&Ft.batching===!1||!B.isBatchedMesh&&Ft.batching===!0||B.isInstancedMesh&&Ft.instancing===!1||!B.isInstancedMesh&&Ft.instancing===!0||B.isSkinnedMesh&&Ft.skinning===!1||!B.isSkinnedMesh&&Ft.skinning===!0||B.isInstancedMesh&&Ft.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ft.instancingColor===!1&&B.instanceColor!==null||Ft.envMap!==xt||N.fog===!0&&Ft.fog!==mt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==kt.numPlanes||Ft.numIntersection!==kt.numIntersection)||Ft.vertexAlphas!==Pt||Ft.vertexTangents!==pt||Ft.morphTargets!==Nt||Ft.morphNormals!==Se||Ft.morphColors!==Ae||Ft.toneMapping!==Ce||zt.isWebGL2===!0&&Ft.morphTargetsCount!==oe)&&(ge=!0):(ge=!0,Ft.__version=N.version);let Ne=Ft.currentProgram;ge===!0&&(Ne=cn(N,I,B));let mo=!1,Gs=!1,Cr=!1;const $e=Ne.getUniforms(),Ti=Ft.uniforms;if(bt.useProgram(Ne.program)&&(mo=!0,Gs=!0,Cr=!0),N.id!==O&&(O=N.id,Gs=!0),mo||v!==b){$e.setValue(z,"projectionMatrix",b.projectionMatrix),$e.setValue(z,"viewMatrix",b.matrixWorldInverse);const xn=$e.map.cameraPosition;xn!==void 0&&xn.setValue(z,Bt.setFromMatrixPosition(b.matrixWorld)),zt.logarithmicDepthBuffer&&$e.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&$e.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Gs=!0,Cr=!0)}if(B.isSkinnedMesh){$e.setOptional(z,B,"bindMatrix"),$e.setOptional(z,B,"bindMatrixInverse");const xn=B.skeleton;xn&&(zt.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),$e.setValue(z,"boneTexture",xn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&($e.setOptional(z,B,"batchingTexture"),$e.setValue(z,"batchingTexture",B._matricesTexture,A));const Pr=U.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0&&zt.isWebGL2===!0)&&Ct.update(B,U,Ne),(Gs||Ft.receiveShadow!==B.receiveShadow)&&(Ft.receiveShadow=B.receiveShadow,$e.setValue(z,"receiveShadow",B.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Ti.envMap.value=xt,Ti.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),Gs&&($e.setValue(z,"toneMappingExposure",M.toneMappingExposure),Ft.needsLights&&tt(Ti,Cr),mt&&N.fog===!0&&dt.refreshFogUniforms(Ti,mt),dt.refreshMaterialUniforms(Ti,N,$,W,vt),ar.upload(z,hn(Ft),Ti,A)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ar.upload(z,hn(Ft),Ti,A),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&$e.setValue(z,"center",B.center),$e.setValue(z,"modelViewMatrix",B.modelViewMatrix),$e.setValue(z,"normalMatrix",B.normalMatrix),$e.setValue(z,"modelMatrix",B.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const xn=N.uniformsGroups;for(let Lr=0,Ld=xn.length;Lr<Ld;Lr++)if(zt.isWebGL2){const pl=xn[Lr];ee.update(pl,Ne),ee.bind(pl,Ne)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ne}function tt(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function it(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,U){Vt.get(b.texture).__webglTexture=I,Vt.get(b.depthTexture).__webglTexture=U;const N=Vt.get(b);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=U===void 0,N.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){const U=Vt.get(b);U.__webglFramebuffer=I,U.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,U=0){T=b,R=I,w=U;let N=!0,B=null,mt=!1,ft=!1;if(b){const xt=Vt.get(b);xt.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(z.FRAMEBUFFER,null),N=!1):xt.__webglFramebuffer===void 0?A.setupRenderTarget(b):xt.__hasExternalTextures&&A.rebindTextures(b,Vt.get(b.texture).__webglTexture,Vt.get(b.depthTexture).__webglTexture);const Pt=b.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ft=!0);const pt=Vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(pt[I])?B=pt[I][U]:B=pt[I],mt=!0):zt.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?B=Vt.get(b).__webglMultisampledFramebuffer:Array.isArray(pt)?B=pt[U]:B=pt,E.copy(b.viewport),F.copy(b.scissor),k=b.scissorTest}else E.copy(Q).multiplyScalar($).floor(),F.copy(rt).multiplyScalar($).floor(),k=at;if(bt.bindFramebuffer(z.FRAMEBUFFER,B)&&zt.drawBuffers&&N&&bt.drawBuffers(b,B),bt.viewport(E),bt.scissor(F),bt.setScissorTest(k),mt){const xt=Vt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,xt.__webglTexture,U)}else if(ft){const xt=Vt.get(b.texture),Pt=I||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,xt.__webglTexture,U||0,Pt)}O=-1},this.readRenderTargetPixels=function(b,I,U,N,B,mt,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t){bt.bindFramebuffer(z.FRAMEBUFFER,_t);try{const xt=b.texture,Pt=xt.format,pt=xt.type;if(Pt!==fn&&yt.convert(Pt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=pt===ro&&(At.has("EXT_color_buffer_half_float")||zt.isWebGL2&&At.has("EXT_color_buffer_float"));if(pt!==_i&&yt.convert(pt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(pt===jn&&(zt.isWebGL2||At.has("OES_texture_float")||At.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-N&&U>=0&&U<=b.height-B&&z.readPixels(I,U,N,B,yt.convert(Pt),yt.convert(pt),mt)}finally{const xt=T!==null?Vt.get(T).__webglFramebuffer:null;bt.bindFramebuffer(z.FRAMEBUFFER,xt)}}},this.copyFramebufferToTexture=function(b,I,U=0){const N=Math.pow(2,-U),B=Math.floor(I.image.width*N),mt=Math.floor(I.image.height*N);A.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,U,0,0,b.x,b.y,B,mt),bt.unbindTexture()},this.copyTextureToTexture=function(b,I,U,N=0){const B=I.image.width,mt=I.image.height,ft=yt.convert(U.format),_t=yt.convert(U.type);A.setTexture2D(U,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment),I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,N,b.x,b.y,B,mt,ft,_t,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,N,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,ft,I.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,N,b.x,b.y,ft,_t,I.image),N===0&&U.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(b,I,U,N,B=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=b.max.x-b.min.x+1,ft=b.max.y-b.min.y+1,_t=b.max.z-b.min.z+1,xt=yt.convert(N.format),Pt=yt.convert(N.type);let pt;if(N.isData3DTexture)A.setTexture3D(N,0),pt=z.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)A.setTexture2DArray(N,0),pt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,N.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,N.unpackAlignment);const Nt=z.getParameter(z.UNPACK_ROW_LENGTH),Se=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ae=z.getParameter(z.UNPACK_SKIP_PIXELS),Ce=z.getParameter(z.UNPACK_SKIP_ROWS),Re=z.getParameter(z.UNPACK_SKIP_IMAGES),oe=U.isCompressedTexture?U.mipmaps[B]:U.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,oe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,b.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,b.min.z),U.isDataTexture||U.isData3DTexture?z.texSubImage3D(pt,B,I.x,I.y,I.z,mt,ft,_t,xt,Pt,oe.data):U.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(pt,B,I.x,I.y,I.z,mt,ft,_t,xt,oe.data)):z.texSubImage3D(pt,B,I.x,I.y,I.z,mt,ft,_t,xt,Pt,oe),z.pixelStorei(z.UNPACK_ROW_LENGTH,Nt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ae),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ce),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Re),B===0&&N.generateMipmaps&&z.generateMipmap(pt),bt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),bt.unbindTexture()},this.resetState=function(){R=0,w=0,T=null,bt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===tl?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===vr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?qi:Fh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===qi?Qt:Le}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class ny extends nd{}ny.prototype.isWebGL1Renderer=!0;class id extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class sd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ba,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new P;class co{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new co(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class od extends Tn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ms;const Ys=new P,gs=new P,ys=new P,_s=new Wt,Ks=new Wt,rd=new Zt,Oo=new P,$s=new P,Ho=new P,kc=new Wt,aa=new Wt,Oc=new Wt;class iy extends we{constructor(t=new od){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sd(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new co(n,3,0,!1)),ms.setAttribute("uv",new co(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new Wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-ys.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;Bo(Oo.set(-.5,-.5,0),ys,r,gs,i,s),Bo($s.set(.5,-.5,0),ys,r,gs,i,s),Bo(Ho.set(.5,.5,0),ys,r,gs,i,s),kc.set(0,0),aa.set(1,0),Oc.set(1,1);let a=t.ray.intersectTriangle(Oo,$s,Ho,!1,Ys);if(a===null&&(Bo($s.set(-.5,.5,0),ys,r,gs,i,s),aa.set(0,1),a=t.ray.intersectTriangle(Oo,Ho,$s,!1,Ys),a===null))return;const l=t.ray.origin.distanceTo(Ys);l<t.near||l>t.far||e.push({distance:l,point:Ys.clone(),uv:bn.getInterpolation(Ys,Oo,$s,Ho,kc,aa,Oc,new Wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bo(o,t,e,n,i,s){_s.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(Ks.x=s*_s.x-i*_s.y,Ks.y=i*_s.x+s*_s.y):Ks.copy(_s),o.copy(t),o.x+=Ks.x,o.y+=Ks.y,o.applyMatrix4(rd)}const Hc=new P,Bc=new ve,zc=new ve,sy=new P,Gc=new Zt,zo=new P,la=new Hn,Wc=new Zt,ca=new Mr;class oy extends ot{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ml,this.bindMatrix=new Zt,this.bindMatrixInverse=new Zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,zo),this.boundingBox.expandByPoint(zo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,zo),this.boundingSphere.expandByPoint(zo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(i),t.ray.intersectsSphere(la)!==!1&&(Wc.copy(i).invert(),ca.copy(t.ray).applyMatrix4(Wc),!(this.boundingBox!==null&&ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ca)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ml?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Bc.fromBufferAttribute(i.attributes.skinIndex,t),zc.fromBufferAttribute(i.attributes.skinWeight,t),Hc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const r=zc.getComponent(s);if(r!==0){const a=Bc.getComponent(s);Gc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(sy.copy(Hc).applyMatrix4(Gc),r)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class ad extends we{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rl extends Ge{constructor(t=null,e=1,n=1,i,s,r,a,l,c=Ye,u=Ye,h,d){super(null,r,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vc=new Zt,ry=new Zt;class al{constructor(t=[],e=[]){this.uuid=Pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=t.length;s<r;s++){const a=t[s]?t[s].matrixWorld:ry;Vc.multiplyMatrices(a,e[s]),Vc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new al(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new rl(e,t,t,fn,jn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let r=e[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new ad),this.bones.push(r),this.boneInverses.push(new Zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const r=e[i];t.bones.push(r.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Va extends De{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xs=new Zt,Xc=new Zt,Go=[],qc=new En,ay=new Zt,js=new ot,Zs=new Hn;class ly extends ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Va(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ay)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new En),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),qc.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(qc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),Zs.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(Zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),t.ray.intersectsSphere(Zs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xs),Xc.multiplyMatrices(n,xs),js.matrixWorld=Xc,js.raycast(t,Go);for(let r=0,a=Go.length;r<a;r++){const l=Go[r];l.instanceId=s,l.object=this,e.push(l)}Go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Va(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends Tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yc=new P,Kc=new P,$c=new Zt,ha=new Mr,Wo=new Hn;class Er extends we{constructor(t=new Fe,e=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Yc.fromBufferAttribute(e,i-1),Kc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Yc.distanceTo(Kc);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(i),Wo.radius+=s,t.ray.intersectsSphere(Wo)===!1)return;$c.copy(i).invert(),ha.copy(t.ray).applyMatrix4($c);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,u=new P,h=new P,d=new P,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,r.start),_=Math.min(g.count,r.start+r.count);for(let M=p,S=_-1;M<S;M+=f){const R=g.getX(M),w=g.getX(M+1);if(c.fromBufferAttribute(m,R),u.fromBufferAttribute(m,w),ha.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(d);O<t.near||O>t.far||e.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),_=Math.min(m.count,r.start+r.count);for(let M=p,S=_-1;M<S;M+=f){if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,M+1),ha.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const jc=new P,Zc=new P;class ld extends Er{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)jc.fromBufferAttribute(e,i),Zc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jc.distanceTo(Zc);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cy extends Er{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ho extends Tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jc=new Zt,Xa=new Mr,Vo=new Hn,Xo=new P;class yr extends we{constructor(t=new Fe,e=new ho){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(i),Vo.radius+=s,t.ray.intersectsSphere(Vo)===!1)return;Jc.copy(i).invert(),Xa.copy(t.ray).applyMatrix4(Jc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,y=f;g<y;g++){const m=c.getX(g);Xo.fromBufferAttribute(h,m),Qc(Xo,m,l,i,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=d,y=f;g<y;g++)Xo.fromBufferAttribute(h,g),Qc(Xo,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qc(o,t,e,n,i,s,r){const a=Xa.distanceSqToPoint(o);if(a<e){const l=new P;Xa.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}class en extends Ge{constructor(t,e,n,i,s,r,a,l,c){super(t,e,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ll extends Fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],r=[],a=[],l=[],c=new P,u=new Wt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _e extends Fe{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const y=[],m=n/2;let p=0;_(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function _(){const S=new P,R=new P;let w=0;const T=(e-t)/n;for(let O=0;O<=s;O++){const v=[],E=O/s,F=E*(e-t)+t;for(let k=0;k<=i;k++){const q=k/i,L=q*l+a,G=Math.sin(L),W=Math.cos(L);R.x=F*G,R.y=-E*n+m,R.z=F*W,h.push(R.x,R.y,R.z),S.set(G,T,W).normalize(),d.push(S.x,S.y,S.z),f.push(q,1-E),v.push(g++)}y.push(v)}for(let O=0;O<i;O++)for(let v=0;v<s;v++){const E=y[v][O],F=y[v+1][O],k=y[v+1][O+1],q=y[v][O+1];u.push(E,F,q),u.push(F,k,q),w+=6}c.addGroup(p,w,0),p+=w}function M(S){const R=g,w=new Wt,T=new P;let O=0;const v=S===!0?t:e,E=S===!0?1:-1;for(let k=1;k<=i;k++)h.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;const F=g;for(let k=0;k<=i;k++){const L=k/i*l+a,G=Math.cos(L),W=Math.sin(L);T.x=v*W,T.y=m*E,T.z=v*G,h.push(T.x,T.y,T.z),d.push(0,E,0),w.x=G*.5+.5,w.y=W*.5*E+.5,f.push(w.x,w.y),g++}for(let k=0;k<i;k++){const q=R+k,L=F+k;S===!0?u.push(L,L+1,q):u.push(L+1,L,q),O+=3}c.addGroup(p,O,S===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wr extends _e{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new wr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vi extends Fe{constructor(t=.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/i,f=new P,g=new Wt;for(let y=0;y<=i;y++){for(let m=0;m<=n;m++){const p=s+m/n*r;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let y=0;y<i;y++){const m=y*(n+1);for(let p=0;p<n;p++){const _=p+m,M=_,S=_+n+1,R=_+n+2,w=_+1;a.push(M,S,w),a.push(S,R,w)}}this.setIndex(a),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pe extends Fe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],h=new P,d=new P,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const _=[],M=p/n;let S=0;p===0&&r===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const w=R/e;h.x=-t*Math.cos(i+w*s)*Math.sin(r+M*a),h.y=t*Math.cos(r+M*a),h.z=t*Math.sin(i+w*s)*Math.sin(r+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(w+S,1-M),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const M=u[p][_+1],S=u[p][_],R=u[p+1][_],w=u[p+1][_+1];(p!==0||r>0)&&f.push(M,S,w),(p!==n-1||l<Math.PI)&&f.push(S,R,w)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ji extends Fe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],u=new P,h=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const y=g/i*s,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(y),h.y=(t+e*Math.cos(m))*Math.sin(y),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const y=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,_=(i+1)*f+g;r.push(y,m,_),r.push(m,p,_)}this.setIndex(r),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class te extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ti extends te{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class hy extends Tn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function qo(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function dy(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function uy(o){function t(i,s){return o[i]-o[s]}const e=o.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function th(o,t,e){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[r++]=o[a+l]}return i}function cd(o,t,e,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(t.push(s.time),e.push.apply(e,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(t.push(s.time),e.push(r)),s=o[i++];while(s!==void 0)}class fo{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}for(;n<r;){const a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fy extends fo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,r=t+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Kl:s=t,a=2*e-n;break;case $l:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kl:r=t,l=2*n-e;break;case $l:r=1,l=n+i[1]-i[0];break;default:r=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,_=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*y+.5*g,S=f*m-f*y;for(let R=0;R!==a;++R)s[R]=p*r[u+R]+_*r[c+R]+M*r[l+R]+S*r[h+R];return s}}class py extends fo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==a;++d)s[d]=r[c+d]*h+r[l+d]*u;return s}}class my extends fo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Bn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qo(e,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qo(t.times,Array),values:qo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new my(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new py(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fy(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ao:e=this.InterpolantFactoryMethodDiscrete;break;case Ps:e=this.InterpolantFactoryMethodLinear;break;case kr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return kr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(i!==void 0&&dy(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kr,s=t.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const y=e[h+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];const h=a*n,d=r*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Ps;class ks extends Bn{}ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=ao;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class hd extends Bn{}hd.prototype.ValueTypeName="color";class Ds extends Bn{}Ds.prototype.ValueTypeName="number";class gy extends fo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let u=c+a;c!==u;c+=4)un.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Zi extends Bn{InterpolantFactoryMethodLinear(t){return new gy(this.times,this.values,this.getValueSize(),t)}}Zi.prototype.ValueTypeName="quaternion";Zi.prototype.DefaultInterpolation=Ps;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Bn{}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=ao;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Bn{}Us.prototype.ValueTypeName="vector";class yy{constructor(t,e=-1,n,i=Su){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,a=n.length;r!==a;++r)e.push(xy(n[r]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,r=n.length;s!==r;++s)e.push(Bn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=uy(l);l=th(l,1,u),c=th(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Ds(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,r)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,y){if(f.length!==0){const m=[],p=[];cd(f,m,p,g),m.length!==0&&y.push(new h(d,m,p))}},i=[],s=t.name||"default",r=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)f[d[g].morphTargets[y]]=-1;for(const y in f){const m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){const M=d[g];m.push(M.time),p.push(M.morphTarget===y?1:0)}i.push(new Ds(".morphTargetInfluence["+y+"]",m,p))}l=f.length*r}else{const f=".bones["+e[h].name+"]";n(Us,f+".position",d,"pos",i),n(Zi,f+".quaternion",d,"rot",i),n(Us,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _y(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return hd;case"quaternion":return Zi;case"bool":case"boolean":return ks;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function xy(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=_y(o.type);if(o.times===void 0){const e=[],n=[];cd(o.keys,e,n,"value"),o.times=e,o.values=n}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const mi={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class vy{constructor(t,e,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const My=new vy;class Hs{constructor(t){this.manager=t!==void 0?t:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Hs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class by extends Error{constructor(t,e){super(t),this.response=e}}class dd extends Hs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=mi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Yn[t]!==void 0){Yn[t].push({onLoad:e,onProgress:n,onError:i});return}Yn[t]=[],Yn[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Yn[t],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let y=0;const m=new ReadableStream({start(p){_();function _(){h.read().then(({done:M,value:S})=>{if(M)p.close();else{y+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let w=0,T=u.length;w<T;w++){const O=u[w];O.onProgress&&O.onProgress(R)}p.enqueue(S),_()}})}}});return new Response(m)}else throw new by(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{mi.add(t,c);const u=Yn[t];delete Yn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Yn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Yn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Sy extends Hs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=mi.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=lo("img");function l(){u(),mi.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Bs extends Hs{constructor(t){super(t)}load(t,e,n,i){const s=new Ge,r=new Sy(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class po extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class ud extends po{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const da=new Zt,eh=new P,nh=new P;class cl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(eh),nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nh),e.updateMatrixWorld(),da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ty extends cl{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ls*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ey extends po{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Ty}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ih=new Zt,Js=new P,ua=new P;class wy extends cl{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Wt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),ua.copy(n.position),ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ua),n.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih)}}class qa extends po{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ay extends cl{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ar extends po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Ay}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fd extends po{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class so{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Ry extends Hs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=mi.get(t);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),mi.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});mi.add(t,l),s.manager.itemStart(t)}}class Cy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=sh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function sh(){return(typeof performance>"u"?Date:performance).now()}const hl="\\[\\]\\.:\\/",Py=new RegExp("["+hl+"]","g"),dl="[^"+hl+"]",Ly="[^"+hl.replace("\\.","")+"]",Iy=/((?:WC+[\/:])*)/.source.replace("WC",dl),Dy=/(WCOD+)?/.source.replace("WCOD",Ly),Uy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dl),Ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dl),Fy=new RegExp("^"+Iy+Dy+Uy+Ny+"$"),ky=["material","materials","bones","map"];class Oy{constructor(t,e,n){const i=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class fe{constructor(t,e,n){this.path=e,this.parsedPath=n||fe.parseTrackName(e),this.node=fe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new fe.Composite(t,e,n):new fe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Py,"")}static parseTrackName(t){const e=Fy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ky.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=fe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const r=t[i];if(r===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}fe.Composite=Oy;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Hy extends ld{constructor(t=10,e=10,n=4473924,i=8947848){n=new Tt(n),i=new Tt(i);const s=e/2,r=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=r){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const y=d===s?n:i;y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3}const u=new Fe;u.setAttribute("position",new Me(l,3)),u.setAttribute("color",new Me(c,3));const h=new Tr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);class By{domElement;three;constructor(){this.three=new nd({antialias:!1,powerPreference:"high-performance"}),this.domElement=this.three.domElement,this.three.setPixelRatio(window.devicePixelRatio),this.three.setClearColor(16,1),this.three.toneMapping=Jn,this.three.outputColorSpace=Qt}setSize(t,e){this.three.setSize(t,e,!1),this.domElement.style.width="100vw",this.domElement.style.height="100vh",this.domElement.style.position="fixed",this.domElement.style.top="0",this.domElement.style.left="0"}dispose(){this.three.dispose()}}class zy{group;skyMat;time=0;constructor(){this.group=new on;const t=new pe(5e4,64,48);t.scale(-1,1,1),this.skyMat=new Dn({uniforms:{uTime:{value:0}},vertexShader:`
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
      `,side:rn,depthWrite:!1}),this.group.add(new ot(t,this.skyMat))}update(t){this.time+=t,this.skyMat.uniforms.uTime.value=this.time}getMesh(){return this.group}}class Gy{scene;camera;clock=new Cy;frames=0;lastFpsUpdate=0;fps=0;stars;constructor(){this.scene=new id,this.scene.background=new Tt(0),this.stars=new zy,this.scene.add(this.stars.getMesh()),this.scene.add(new fd(2241365,.1)),this.scene.add(new ud(3364215,1122867,.15)),this.camera=new tn(45,window.innerWidth/window.innerHeight,1,5e7),this.camera.position.set(0,0,10),this.camera.lookAt(0,0,0)}update(t){const e=this.clock.getElapsedTime();this.frames++,e-this.lastFpsUpdate>=1&&(this.fps=this.frames/(e-this.lastFpsUpdate),this.frames=0,this.lastFpsUpdate=e),this.stars.getMesh().position.copy(this.camera.position),this.stars.update(t)}getFps(){return this.fps}}const lr=[{id:"first_flight",name:"First Flight",description:"Launch your rocket",reward:10,category:"launch"},{id:"reach_10km",name:"Sky Pilot",description:"Reach 10 km altitude",reward:15,category:"altitude"},{id:"reach_space",name:"Edge of Space",description:"Reach 100 km (Kármán line)",reward:25,category:"altitude"},{id:"reach_orbit",name:"Orbital Velocity",description:"Achieve a stable orbit (Pe > 80 km)",reward:50,category:"orbit"},{id:"high_orbit",name:"High Orbit",description:"Apoapsis above 500 km",reward:40,category:"orbit"},{id:"land_earth",name:"Homecoming",description:"Land safely on Earth",reward:20,category:"landing"},{id:"land_moon",name:"One Small Step",description:"Land on the Moon",reward:100,category:"landing"},{id:"land_mars",name:"Red Planet",description:"Land on Mars",reward:150,category:"landing"},{id:"stage_master",name:"Staging Pro",description:"Separate 3 stages in one flight",reward:30,category:"staging"},{id:"speed_demon",name:"Speed Demon",description:"Exceed 3000 m/s",reward:20,category:"speed"},{id:"ev astronaut",name:"EV Astronaut",description:"Exceed 7000 m/s (orbital speed)",reward:35,category:"speed"},{id:"munar_orbit",name:"Lunar Orbit",description:"Achieve orbit around the Moon",reward:80,category:"orbit"}];class Wy{root;helpOverlay=null;onPlay;onVab;onSettings;onContinue;missionsOverlay=null;scoreEl;missions;constructor(t,e,n,i,s){this.onPlay=t,this.onVab=e,this.onSettings=n,this.onContinue=i??null,this.missions=s??null,this.root=document.createElement("div"),this.root.className="panel",this.root.style.cssText=`
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
    `,this.root.appendChild(r);const a=(l,c,u)=>{const h=document.createElement("button");return h.className=`btn btn--${c} menu-btn`,h.textContent=l,h.style.cssText="margin: 6px; min-width: 220px; padding: 12px 24px; font-size: 14px;",h.addEventListener("click",u),h};if(this.root.appendChild(a("FLIGHT","primary",this.onPlay)),this.onContinue&&this.root.appendChild(a("CONTINUE","secondary",this.onContinue)),this.root.appendChild(a("VEHICLE ASSEMBLY","secondary",this.onVab)),this.root.appendChild(a("MISSIONS","ghost",()=>this.toggleMissions())),this.root.appendChild(a("SETTINGS","ghost",this.onSettings)),this.root.appendChild(a("GUIDE","ghost",()=>this.toggleHelp())),this.missions){const l=document.createElement("div");l.style.cssText="position:fixed;top:16px;right:16px;z-index:500;color:var(--accent-gold);font:600 12px/1 monospace;letter-spacing:0.1em;background:rgba(8,10,24,0.6);border:1px solid rgba(200,152,56,0.2);border-radius:12px;padding:6px 12px;pointer-events:none;",l.textContent=`★ ${this.missions.totalScore}`,this.root.appendChild(l),this.scoreEl=l,this.missions.onScore(c=>{this.scoreEl&&(this.scoreEl.textContent=`★ ${c}`)})}else this.scoreEl=document.createElement("div")}toggleMissions(){if(this.missionsOverlay){this.missionsOverlay.remove(),this.missionsOverlay=null;return}if(!this.missions)return;const t=document.createElement("div");t.className="guide-overlay",t.style.cssText="position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:rgba(6,8,20,0.9);";const e=document.createElement("div");e.className="guide-card",e.style.cssText="max-width:520px;max-height:80vh;overflow-y:auto;padding:28px;font-family:system-ui,sans-serif;color:#ddd;background:#0c1020;border:1px solid rgba(200,152,56,0.2);border-radius:8px;";const n=new Set(this.missions.getCompleted());let i=0,s=0;for(const l of lr)i+=l.reward;for(const l of lr)n.has(l.id)&&(s+=l.reward);e.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:16px;">
        <div style="color:#c89838;font-size:18px;letter-spacing:0.05em;">★ MISSIONS</div>
        <div style="color:#c89838;font-size:12px;">${s} / ${i} pts</div>
      </div>`;const r=document.createElement("div");r.style.cssText="display:flex;flex-direction:column;gap:6px;";for(const l of lr){const c=n.has(l.id),u=document.createElement("div");u.style.cssText=`display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:4px;background:${c?"rgba(124,255,178,0.06)":"rgba(255,255,255,0.02)"};border-left:3px solid ${c?"#7CFFB2":"#3A4055"};`,u.innerHTML=`
        <div>
          <div style="font-size:13px;color:${c?"#7CFFB2":"#ddd"};font-weight:600;">${c?"☑":"☐"} ${l.name}</div>
          <div style="font-size:11px;color:#889;margin-top:2px;">${l.description}</div>
        </div>
        <div style="color:${c?"#7CFFB2":"#c89838"};font-size:12px;font-weight:600;white-space:nowrap;">+${l.reward}</div>`,r.appendChild(u)}e.appendChild(r);const a=document.createElement("button");a.className="btn btn--primary",a.style.cssText="margin-top:18px;width:100%;padding:10px;font-size:12px;",a.textContent="CLOSE",a.addEventListener("click",()=>{t.remove(),this.missionsOverlay=null}),e.appendChild(a),t.appendChild(e),t.addEventListener("click",l=>{l.target===t&&(t.remove(),this.missionsOverlay=null)}),document.body.appendChild(t),this.missionsOverlay=t}toggleHelp(){if(this.helpOverlay){this.helpOverlay.remove(),this.helpOverlay=null;return}const t=document.createElement("div");t.className="guide-overlay",t.style.cssText="position:fixed;inset:0;z-index:600;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,8,20,0.95);";const e=document.createElement("div");e.className="guide-card",e.style.cssText="max-width:560px;padding:32px;font-family:sans-serif;line-height:1.6;color:#ddd;",e.innerHTML='<h2 style="color:#c89838;font-size:22px;margin-bottom:14px;letter-spacing:0.05em;">🎮 HOW TO BUILD & LAUNCH</h2><p style="font-size:13px;color:#a9b;margin-bottom:6px;">1. Open <b style="color:#c89838;">VEHICLE ASSEMBLY</b> — build your rocket</p><p style="font-size:13px;color:#a9b;margin-bottom:6px;">2. Stack parts bottom→top: <b>capsule</b> → <b>fuel tank</b> → <b>engine</b></p><p style="font-size:13px;color:#a9b;margin-bottom:6px;">3. (optional) Add <b>decoupler</b> between stages, <b>parachute</b> + <b>legs</b> for landing</p><p style="font-size:13px;color:#a9b;margin-bottom:14px;">4. Hit <b style="color:#c89838;">FLIGHT</b>, hold <b>↑</b> to spool engines, wait for countdown</p><h2 style="color:#c89838;font-size:18px;margin:10px 0 8px;letter-spacing:0.05em;">💡 FLIGHT TIPS</h2><p style="font-size:12px;color:#889;margin-bottom:4px;">• <b>TWR ≥ 1.0</b> required to lift off — check the gauge on HUD (green = go)</p><p style="font-size:12px;color:#889;margin-bottom:4px;">• Tilt east (<b>A</b>) at ~10km to build horizontal speed for orbit</p><p style="font-size:12px;color:#889;margin-bottom:4px;">• Watch the <b style="color:#88ccff;">ORBIT panel</b> (top-right): Ap/Pe show your orbit shape</p><p style="font-size:12px;color:#889;margin-bottom:4px;">• Press <b>T</b> to cycle SAS — holds attitude / prograde / retrograde</p><p style="font-size:12px;color:#889;margin-bottom:4px;">• <b>Space</b> drops empty stages — watch the stage panel</p><p style="font-size:12px;color:#889;margin-bottom:14px;">• Land slow (< 5 m/s). Deploy <b>parachute</b> in atmosphere, extend <b>legs</b></p><h2 style="color:#c89838;font-size:18px;margin:10px 0 8px;letter-spacing:0.05em;">⌨ ROCKET CONTROLS</h2><table style="width:100%;font-size:13px;border-collapse:collapse;"><tr><td style="color:#889;padding:3px 12px 3px 0;width:80px;">↑ / ↓</td><td>Engine Power (throttle)</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">W / S</td><td>Pitch — Tilt Up / Down</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">A / D</td><td>Yaw — Turn Left / Right</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Space</td><td>Stage Separation</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;width:80px;">T</td><td>SAS — cycle OFF / HOLD / PROGRADE / RETROGRADE</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">P</td><td>Deploy Parachute</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">M / Tab</td><td>Map / Orbit view</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">[ / ]</td><td>Time Warp slower / faster</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">C</td><td>Free Camera</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">F</td><td>Reset Camera</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Mouse</td><td>Orbit / Zoom camera</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Esc</td><td>Pause / Menu</td></tr></table><button class="btn btn--primary" style="margin-top:20px;width:100%;padding:12px;" id="help-close">CLOSE</button>',e.querySelector("#help-close").addEventListener("click",()=>{t.remove(),this.helpOverlay=null}),t.appendChild(e),document.body.appendChild(t),this.helpOverlay=t}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove(),this.helpOverlay?.remove()}}const pd=[{id:"capsule_mk1",name:"MK-1 Capsule",kind:"capsule",size:"M",mass:1200,crewCapacity:1,hasParachute:!0,dragCoeff:.5},{id:"tank_s_lfo",name:"Fuel Tank S (LFO)",kind:"tank",size:"S",mass:200,fuelCapacity:5e3,fuelType:"LFO",dragCoeff:.4},{id:"tank_m_lfo",name:"Fuel Tank M (LFO)",kind:"tank",size:"M",mass:600,fuelCapacity:5e4,fuelType:"LFO",dragCoeff:.4},{id:"tank_l_lfo",name:"Fuel Tank L (LFO)",kind:"tank",size:"L",mass:1200,fuelCapacity:1e5,fuelType:"LFO",dragCoeff:.4},{id:"tank_xl_lfo",name:"Fuel Tank XL (LFO)",kind:"tank",size:"XL",mass:2500,fuelCapacity:25e4,fuelType:"LFO",dragCoeff:.4},{id:"engine_ant",name:'"Ant" Engine',kind:"engine",size:"S",mass:50,thrust:1800,isp:350,fuelType:"LFO"},{id:"engine_sparkler",name:'"Sparkler" Vac Engine',kind:"engine",size:"S",mass:80,thrust:600,isp:385,fuelType:"LFO"},{id:"engine_vector",name:'"Vector" Engine',kind:"engine",size:"M",mass:400,thrust:3e3,isp:340,fuelType:"LFO"},{id:"engine_reliant",name:'"Reliant" Engine',kind:"engine",size:"M",mass:300,thrust:2400,isp:290,fuelType:"LFO"},{id:"engine_mastodon",name:'"Mastodon" Engine',kind:"engine",size:"L",mass:1200,thrust:7500,isp:330,fuelType:"LFO"},{id:"engine_poodle",name:'"Poodle" Vac Engine',kind:"engine",size:"L",mass:900,thrust:4e3,isp:370,fuelType:"LFO"},{id:"engine_twinboar",name:'"TwinBoar" Booster',kind:"engine",size:"L",mass:1800,thrust:14e3,isp:300,fuelType:"LFO"},{id:"engine_mammoth",name:'"Mammoth" Engine',kind:"engine",size:"XL",mass:3e3,thrust:18e3,isp:310,fuelType:"LFO"},{id:"engine_kickback",name:'"Kickback" Heavy Booster',kind:"engine",size:"XL",mass:4500,thrust:22e3,isp:280,fuelType:"LFO"},{id:"parachute_mk16",name:"Mk-16 Parachute",kind:"parachute",size:"M",mass:30,dragCoeff:5},{id:"legs_landini",name:'"Landini" Landing Legs',kind:"legs",size:"S",mass:80,dragCoeff:.1},{id:"heatshield_s",name:"Heat Shield S (Ablative)",kind:"heatshield",size:"S",mass:50,heatCapacity:5e4,dragCoeff:1.2},{id:"heatshield_m",name:"Heat Shield M (Ablative)",kind:"heatshield",size:"M",mass:150,heatCapacity:15e4,dragCoeff:1.2},{id:"heatshield_l",name:"Heat Shield L (Ablative)",kind:"heatshield",size:"L",mass:400,heatCapacity:4e5,dragCoeff:1.2},{id:"decoupler_1",name:"TD-1 Decoupler",kind:"decoupler",size:"M",mass:100,dragCoeff:.3},{id:"decoupler_s",name:"TD-0 Decoupler (S)",kind:"decoupler",size:"S",mass:40,dragCoeff:.3},{id:"decoupler_l",name:"TD-2 Decoupler (L)",kind:"decoupler",size:"L",mass:250,dragCoeff:.3},{id:"fairing_s",name:"Nose Cone S",kind:"fairing",size:"S",mass:20,dragCoeff:.1},{id:"fairing_m",name:"Nose Cone M",kind:"fairing",size:"M",mass:50,dragCoeff:.1},{id:"fairing_l",name:"Payload Fairing L",kind:"fairing",size:"L",mass:120,dragCoeff:.1},{id:"rcs_block",name:"RCS Thruster Block",kind:"rcs",size:"S",mass:10,thrust:20,isp:240,fuelType:"LFO",dragCoeff:.05},{id:"solar_panel",name:"Solar Panel",kind:"solar",size:"S",mass:25,dragCoeff:.2},{id:"agena_target",name:"Agena Target Vehicle",kind:"gltf",size:"M",mass:1500,dragCoeff:.3,gltfUrl:"/models/agena.glb",gltfScale:.0015},{id:"apollo_soyuz",name:"Apollo Soyuz",kind:"gltf",size:"L",mass:5e3,dragCoeff:.3,gltfUrl:"/models/apollo_soyuz.glb",gltfScale:.0015},{id:"saturn_v",name:"Saturn V",kind:"gltf",size:"XL",mass:3e4,fuelCapacity:5e5,thrust:6e4,isp:310,dragCoeff:.3,gltfUrl:"/models/saturn_v.glb",gltfScale:.003},{id:"ares_1",name:"Ares I",kind:"gltf",size:"XL",mass:2e4,dragCoeff:.3,gltfUrl:"/models/ares_1.glb",gltfScale:.0015},{id:"apollo_lunar_module",name:"Apollo Lunar Module",kind:"gltf",size:"L",mass:15e3,dragCoeff:.3,gltfUrl:"/models/apollo_lunar_module.glb",gltfScale:.002},{id:"atlas_6",name:"Atlas 6 (Friendship 7)",kind:"gltf",size:"L",mass:12e3,dragCoeff:.3,gltfUrl:"/models/atlas_6.glb",gltfScale:.0015},{id:"atlas_9",name:"Atlas 9 (Faith 7)",kind:"gltf",size:"L",mass:12e3,dragCoeff:.3,gltfUrl:"/models/atlas_9.glb",gltfScale:.0015},{id:"crawler",name:"Crawler Transporter",kind:"gltf",size:"XL",mass:27e3,dragCoeff:.3,gltfUrl:"/models/crawler.glb",gltfScale:.001}];function Oi(o){return pd.find(t=>t.id===o)}function oh(o,t){if(t===Tu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===Ha||t===Nh){let e=o.getIndex();if(e===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=e.count-2,i=[];if(t===Ha)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class Vy extends Hs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new $y(e)}),this.register(function(e){return new s_(e)}),this.register(function(e){return new o_(e)}),this.register(function(e){return new r_(e)}),this.register(function(e){return new Zy(e)}),this.register(function(e){return new Jy(e)}),this.register(function(e){return new Qy(e)}),this.register(function(e){return new t_(e)}),this.register(function(e){return new Ky(e)}),this.register(function(e){return new e_(e)}),this.register(function(e){return new jy(e)}),this.register(function(e){return new i_(e)}),this.register(function(e){return new n_(e)}),this.register(function(e){return new qy(e)}),this.register(function(e){return new a_(e)}),this.register(function(e){return new l_(e)})}load(t,e,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=so.extractUrlBase(t);r=so.resolveURL(c,this.path)}else r=so.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new dd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,r,function(u){e(u),s.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===md){try{r[se.KHR_BINARY_GLTF]=new c_(t)}catch(h){i&&i(h);return}s=JSON.parse(r[se.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new b_(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case se.KHR_MATERIALS_UNLIT:r[h]=new Yy;break;case se.KHR_DRACO_MESH_COMPRESSION:r[h]=new h_(s,this.dracoLoader);break;case se.KHR_TEXTURE_TRANSFORM:r[h]=new d_;break;case se.KHR_MESH_QUANTIZATION:r[h]=new u_;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function Xy(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const se={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qy{constructor(t){this.parser=t,this.name=se.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const u=new Tt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Le);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ar(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new qa(u),c.distance=h;break;case"spot":c=new Ey(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class Yy{constructor(){this.name=se.KHR_MATERIALS_UNLIT}getMaterialType(){return Pe}extendParams(t,e,n){const i=[];t.color=new Tt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],Le),t.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Qt))}return Promise.all(i)}}class Ky{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class $y{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Wt(a,a)}return Promise.all(s)}}class jy{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Zy{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Tt(0,0,0),e.sheenRoughness=0,e.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Le)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",r.sheenColorTexture,Qt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Jy{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Qy{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return e.attenuationColor=new Tt().setRGB(a[0],a[1],a[2],Le),Promise.all(s)}}class t_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class e_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return e.specularColor=new Tt().setRGB(a[0],a[1],a[2],Le),r.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",r.specularColorTexture,Qt)),Promise.all(s)}}class n_{constructor(t){this.parser=t,this.name=se.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(s)}}class i_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class s_{constructor(t){this.parser=t,this.name=se.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,r)}}class o_{constructor(t){this.parser=t,this.name=se.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class r_{constructor(t){this.parser=t,this.name=se.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class a_{constructor(t){this.name=se.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class l_{constructor(t){this.name=se.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const y=new Zt,m=new P,p=new un,_=new P(1,1,1),M=new ly(g.geometry,g.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&_.fromBufferAttribute(l.SCALE,S),M.setMatrixAt(S,y.compose(m,p,_));for(const S in l)if(S==="_COLOR_0"){const R=l[S];M.instanceColor=new Va(R.array,R.itemSize,R.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);we.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const md="glTF",Qs=12,rh={JSON:1313821514,BIN:5130562};class c_{constructor(t){this.name=se.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==md)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Qs,s=new DataView(t,Qs);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===rh.JSON){const c=new Uint8Array(t,Qs+r,a);this.content=n.decode(c)}else if(l===rh.BIN){const c=Qs+r;this.body=t.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class h_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=se.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,a={},l={},c={};for(const u in r){const h=Ya[u]||u.toLowerCase();a[h]=r[u]}for(const u in t.attributes){const h=Ya[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[t.attributes[u]],f=ws[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const y=f.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}h(f)},a,c,Le,d)})})}}class d_{constructor(){this.name=se.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class u_{constructor(){this.name=se.KHR_MESH_QUANTIZATION}}class gd extends fo{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let r=0;r!==i;r++)e[r]=n[s+r];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-e,h=(n-e)/u,d=h*h,f=d*h,g=t*c,y=g-c,m=-2*f+3*d,p=f-d,_=1-m,M=p-d+h;for(let S=0;S!==a;S++){const R=r[y+S+a],w=r[y+S+l]*u,T=r[g+S+a],O=r[g+S]*u;s[S]=_*R+M*w+m*T+p*O}return s}}const f_=new un;class p_ extends gd{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return f_.fromArray(s).normalize().toArray(s),s}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ah={9728:Ye,9729:Je,9984:Oa,9985:Ah,9986:rr,9987:Ki},lh={33071:ze,33648:dr,10497:_n},fa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ya={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},m_={CUBICSPLINE:void 0,LINEAR:Ps,STEP:ao},pa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function g_(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new te({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),o.DefaultMaterial}function Ci(o,t,e){for(const n in e.extensions)o[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function fi(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function y_(o,t,e){let n=!1,i=!1,s=!1;for(let c=0,u=t.length;c<u;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,u=t.length;c<u;c++){const h=t[c];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):o.attributes.position;r.push(d)}if(i){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=h),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function __(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)o.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function x_(o){let t;const e=o.extensions&&o.extensions[se.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ma(e.attributes):t=o.indices+":"+ma(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)t+=":"+ma(o.targets[n]);return t}function ma(o){let t="";const e=Object.keys(o).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+o[e[n]]+";";return t}function Ka(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function v_(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const M_=new Zt;class b_{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Xy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Bs(this.options.manager):this.textureLoader=new Ry(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Ci(s,a,i),fi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const r=e[i].joints;for(let a=0,l=r.length;a<l;a++)t[r[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const r=t[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,u]of r.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,r){return n.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[se.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(so.resolveURL(e.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const r=fa[i.type],a=ws[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new De(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=fa[i.type],c=ws[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let y,m;if(f&&f!==h){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=e.cache.get(_);M||(y=new c(a,p*f,i.count*f/u),M=new sd(y,f/u),e.cache.add(_,M)),m=new co(M,l,d%f/u,g)}else a===null?y=new c(i.count*l):y=new c(a,d,i.count*l),m=new De(y,l,g);if(i.sparse!==void 0){const p=fa.SCALAR,_=ws[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,R=new _(r[1],M,i.sparse.count*p),w=new c(r[2],S,i.sparse.count*l);a!==null&&(m=new De(m.array.slice(),m.itemSize,m.normalized));for(let T=0,O=R.length;T<O;T++){const v=R[T];if(m.setX(v,w[T*l]),l>=2&&m.setY(v,w[T*l+1]),l>=3&&m.setZ(v,w[T*l+2]),l>=4&&m.setW(v,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,r=e.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,r=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return u.magFilter=ah[d.magFilter]||Je,u.minFilter=ah[d.minFilter]||Ki,u.wrapS=lh[d.wrapS]||_n,u.wrapT=lh[d.wrapT]||_n,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const r=i.images[t],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(y){const m=new Ge(y);m.needsUpdate=!0,d(m)}),e.load(so.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=r.mimeType||v_(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[se.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[se.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[se.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),t[e]=r,r})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ho,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Tr,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return te}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let r;const a={},l=s.extensions||{},c=[];if(l[se.KHR_MATERIALS_UNLIT]){const h=i[se.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(a,s,e))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Tt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Le),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",h.baseColorTexture,Qt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Be);const u=s.alphaMode||pa.OPAQUE;if(u===pa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===pa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Pe&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Wt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&r!==Pe&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Pe){const h=s.emissiveFactor;a.emissive=new Tt().setRGB(h[0],h[1],h[2],Le)}return s.emissiveTexture!==void 0&&r!==Pe&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Qt)),Promise.all(c).then(function(){const h=new r(a);return s.name&&(h.name=s.name),fi(h,s),e.associations.set(h,{materials:t}),s.extensions&&Ci(i,h,s),h})}createUniqueName(t){const e=fe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[se.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return ch(l,a,e)})}const r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],u=x_(c),h=i[u];if(h)r.push(h.promise);else{let d;c.extensions&&c.extensions[se.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=ch(new Fe,c,e),i[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?g_(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(e.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const y=u[f],m=r[f];let p;const _=c[f];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new oy(y,_):new ot(y,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=oh(p.geometry,Nh):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=oh(p.geometry,Ha));else if(m.mode===Mn.LINES)p=new ld(y,_);else if(m.mode===Mn.LINE_STRIP)p=new Er(y,_);else if(m.mode===Mn.LINE_LOOP)p=new cy(y,_);else if(m.mode===Mn.POINTS)p=new yr(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&__(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),fi(p,s),m.extensions&&Ci(i,p,m),e.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&Ci(i,h[0],s),h[0];const d=new on;s.extensions&&Ci(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new tn($u.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new sl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),fi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h){a.push(h);const d=new Zt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new al(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,r=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],y=f.target,m=y.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(y))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],y=h[3],m=h[4],p=[];for(let _=0,M=d.length;_<M;_++){const S=d[_],R=f[_],w=g[_],T=y[_],O=m[_];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const v=n._createAnimationTracks(S,R,w,T,O);if(v)for(let E=0;E<v.length;E++)p.push(v[E])}return new yy(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),r=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,M_)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new ad:c.length>1?u=new on:c.length===1?u=c[0]:u=new we,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=r),fi(u,s),s.extensions&&Ci(n,u,s),s.matrix!==void 0){const h=new Zt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new on;n.name&&(s.name=i.createUniqueName(n.name)),fi(s,n),n.extensions&&Ci(e,s,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Tn||d instanceof Ge)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const r=[],a=t.name?t.name:t.uuid,l=[];ri[s.path]===ri.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ri[s.path]){case ri.weights:c=Ds;break;case ri.rotation:c=Zi;break;case ri.position:case ri.scale:c=Us;break;default:switch(n.itemSize){case 1:c=Ds;break;case 2:case 3:default:c=Us;break}break}const u=i.interpolation!==void 0?m_[i.interpolation]:Ps,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ri[s.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Ka(e.constructor),i=new Float32Array(e.length);for(let s=0,r=e.length;s<r;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Zi?p_:gd;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function S_(o,t,e){const n=t.attributes,i=new En;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=Ka(ws[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const y=Ka(ws[d.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new Hn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function ch(o,t,e){const n=t.attributes,i=[];function s(r,a){return e.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=Ya[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(t.indices!==void 0&&!o.index){const r=e.getDependency("accessor",t.indices).then(function(a){o.setIndex(a)});i.push(r)}return de.workingColorSpace!==Le&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${de.workingColorSpace}" not supported.`),fi(o,t),S_(o,t,e),Promise.all(i).then(function(){return t.targets!==void 0?y_(o,t.targets,e):o})}const Gi=66743e-15,pn=1e-9,mn=23e4,ga=1/60,T_=9.80665,E_=892e22*48,me=.05,Hi=60;function zs(o){return("/ellipse/"+o.replace(/^\//,"")).replace(/\/\//g,"/")}class w_{stack=null;ensureStack(){if(this.stack&&document.body.contains(this.stack))return this.stack;const t=document.createElement("div");return t.className="toast-stack",document.body.appendChild(t),this.stack=t,t}show(t,e=2500){const n=this.ensureStack(),i=document.createElement("div");for(i.className="toast",i.textContent=t,n.appendChild(i);n.children.length>4;)n.firstChild?.remove();setTimeout(()=>{i.classList.add("toast-out"),setTimeout(()=>i.remove(),220)},e)}}const xe=new w_;function Yt(o,t){const e=document.createElement("canvas");e.width=o,e.height=t;const n=e.getContext("2d");return[e,n]}function A_(o,t=2){const e=o.width,n=o.height,r=o.getContext("2d").getImageData(0,0,e,n).data,[a,l]=Yt(e,n),c=l.createImageData(e,n),u=c.data,h=(f,g)=>(Math.max(0,Math.min(n-1,g))*e+Math.max(0,Math.min(e-1,f)))*4;for(let f=0;f<n;f++)for(let g=0;g<e;g++){const y=r[h(g-1,f-1)]/255,m=r[h(g,f-1)]/255,p=r[h(g+1,f-1)]/255,_=r[h(g-1,f)]/255,M=r[h(g+1,f)]/255,S=r[h(g-1,f+1)]/255,R=r[h(g,f+1)]/255,w=r[h(g+1,f+1)]/255,T=p+2*M+w-(y+2*_+S),O=S+2*R+w-(y+2*m+p),v=T*t,E=O*t,F=Math.sqrt(v*v+E*E+1),k=(f*e+g)*4;u[k]=Math.round((v/F*.5+.5)*255),u[k+1]=Math.round((E/F*.5+.5)*255),u[k+2]=Math.round(1/F*255),u[k+3]=255}l.putImageData(c,0,0);const d=new en(a);return d.wrapS=d.wrapT=_n,d.anisotropy=4,d}function bi(o,t,e,n,i){const s=new en(o);s.wrapS=s.wrapT=_n,s.colorSpace=Qt,s.anisotropy=4;let r;t&&(r=A_(t,2));let a;e&&(a=new en(e),a.wrapS=a.wrapT=_n,a.anisotropy=4);let l;n&&(l=new en(n),l.wrapS=l.wrapT=_n,l.anisotropy=4);let c;return i&&(c=new en(i),c.wrapS=c.wrapT=_n,c.anisotropy=4),{color:s,normal:r,roughness:a,metalness:l,ao:c}}function wn(o){let t=o|0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function Si(o,t,e,n=.02){const i=o.getImageData(0,0,t,e),s=i.data;for(let r=0;r<s.length;r+=4){const a=(Math.random()-.5)*2*n*255;s[r]=Math.min(255,Math.max(0,s[r]+a)),s[r+1]=Math.min(255,Math.max(0,s[r+1]+a)),s[r+2]=Math.min(255,Math.max(0,s[r+2]+a))}o.putImageData(i,0,0)}function yd(o="M"){const[n,i]=Yt(2048,2048),[s,r]=Yt(2048,2048),[a,l]=Yt(2048,2048),[c,u]=Yt(2048,2048),[h,d]=Yt(2048,2048),f=wn(o.charCodeAt(0)*1e3+42),g=o==="S",y=o==="L"||o==="XL";i.fillStyle="#f5f5f0",i.fillRect(0,0,2048,2048);const m=i.createLinearGradient(0,0,0,2048);m&&(m.addColorStop(0,"rgba(0,0,0,0.03)"),m.addColorStop(.3,"rgba(0,0,0,0)"),m.addColorStop(.7,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,0.04)"),i.fillStyle=m,i.fillRect(0,0,2048,2048));const _=2048/(g?4:y?12:8);for(let R=_;R<2048;R+=_)i.strokeStyle="rgba(0,0,0,0.08)",i.lineWidth=2,i.beginPath(),i.moveTo(0,R),i.lineTo(2048,R),i.stroke(),i.strokeStyle="rgba(255,255,255,0.15)",i.lineWidth=1.5,i.beginPath(),i.moveTo(0,R-1.5),i.lineTo(2048,R-1.5),i.stroke();const M=g?8:y?24:14;i.strokeStyle="rgba(80,80,90,0.04)",i.lineWidth=1.5;for(let R=1;R<M;R++){const w=R/M*2048;i.beginPath(),i.moveTo(w,0),i.lineTo(w,2048),i.stroke()}i.fillStyle="#c0c0ba";for(let R=_;R<2048;R+=_)for(let w=30;w<2018;w+=60)i.beginPath(),i.arc(w,R,4,0,Math.PI*2),i.fill(),i.strokeStyle="#a0a09a",i.lineWidth=.5,i.stroke();if(y){i.fillStyle="#002868",i.fillRect(163.84,307.2,245.76*.4,163.84);for(let v=0;v<7;v++)i.fillStyle=v%2===0?"#BF0A30":"#ffffff",i.fillRect(163.84+245.76*.4,307.2+v/7*163.84,245.76*.6,163.84/7);i.fillStyle="#ffffff";for(let v=0;v<5;v++)for(let E=0;E<3;E++)i.beginPath(),i.arc(163.84+(E+.5)*(245.76*.4/3),307.2+(v+.5)*(163.84/5),2,0,Math.PI*2),i.fill()}i.fillStyle="rgba(30,40,80,0.12)",i.font=`bold ${2048*.06}px monospace`,i.textAlign="center",i.fillText("USA",2048/2,2048*.25);const S=g?3:y?12:6;for(let R=0;R<S;R++){const w=f()*2048*.8+204.8,T=f()*2048*.7+2048*.15,O=60+f()*200,v=50+f()*140,E=180+f()*40,F=140+f()*30,k=80+f()*30;i.fillStyle=`rgb(${E}, ${F}, ${k})`,i.globalAlpha=.6+f()*.3,i.fillRect(w,T,O,v),i.fillStyle=`rgb(${E-20}, ${F-15}, ${k-10})`;for(let q=0;q<15;q++)i.beginPath(),i.arc(w+f()*O,T+f()*v,2+f()*6,0,Math.PI*2),i.fill();i.fillStyle="rgba(200, 220, 240, 0.15)";for(let q=0;q<5;q++)i.beginPath(),i.arc(w+f()*O,T+f()*v,5+f()*15,0,Math.PI*2),i.fill();i.globalAlpha=1}i.fillStyle="#606068",i.fillRect(0,0,2048,2048*.012),i.fillRect(0,2048*.988,2048,2048*.012),i.strokeStyle="rgba(80,80,90,0.3)",i.lineWidth=3,i.beginPath(),i.moveTo(2048*.5,0),i.lineTo(2048*.5,2048),i.stroke(),i.strokeStyle="rgba(60,50,40,0.03)",i.lineWidth=1;for(let R=0;R<30;R++){const w=f()*2048,T=f()*2048;i.beginPath(),i.moveTo(w,T),i.lineTo(w+(f()-.5)*20,T+f()*2048*.3),i.stroke()}r.fillStyle="#808080",r.fillRect(0,0,2048,2048),r.strokeStyle="#b0b0b0",r.lineWidth=8;for(let R=_;R<2048;R+=_)r.beginPath(),r.moveTo(0,R),r.lineTo(2048,R),r.stroke();r.strokeStyle="#909090",r.lineWidth=3;for(let R=1;R<M;R++){const w=R/M*2048;r.beginPath(),r.moveTo(w,0),r.lineTo(w,2048),r.stroke()}r.fillStyle="#c8c8c8";for(let R=_;R<2048;R+=_)for(let w=30;w<2018;w+=60)r.beginPath(),r.arc(w,R,5,0,Math.PI*2),r.fill();l.fillStyle="#909090",l.fillRect(0,0,2048,2048),l.strokeStyle="#c0c0c0",l.lineWidth=10;for(let R=_;R<2048;R+=_)l.beginPath(),l.moveTo(0,R),l.lineTo(2048,R),l.stroke();for(let R=0;R<S;R++){const w=f()*2048*.8+204.8,T=f()*2048*.7+2048*.15,O=60+f()*200,v=50+f()*140;l.fillStyle="#e0e0e0",l.fillRect(w,T,O,v)}l.fillStyle="#505050",l.fillRect(0,0,2048,2048*.012),l.fillRect(0,2048*.988,2048,2048*.012),u.fillStyle="#050505",u.fillRect(0,0,2048,2048),u.fillStyle="#c0c0c0",u.fillRect(0,0,2048,2048*.012),u.fillRect(0,2048*.988,2048,2048*.012),u.fillStyle="#606060",u.fillRect(2048*.49,0,2048*.02,2048),d.fillStyle="#ffffff",d.fillRect(0,0,2048,2048),d.strokeStyle="#808080",d.lineWidth=12;for(let R=_;R<2048;R+=_)d.beginPath(),d.moveTo(0,R),d.lineTo(2048,R),d.stroke();d.strokeStyle="#b0b0b0",d.lineWidth=6;for(let R=1;R<M;R++){const w=R/M*2048;d.beginPath(),d.moveTo(w,0),d.lineTo(w,2048),d.stroke()}return Si(i,2048,2048,.01),bi(n,s,a,c,h)}function R_(){const[e,n]=Yt(2048,2048),[i,s]=Yt(2048,2048),[r,a]=Yt(2048,2048),[l,c]=Yt(2048,2048),[u,h]=Yt(2048,2048),d=wn(12345);n.fillStyle="#fafaf5",n.fillRect(0,0,2048,2048*.78);const f=n.createLinearGradient(0,0,0,2048*.78);f&&(f.addColorStop(0,"rgba(20,20,25,0.05)"),f.addColorStop(.5,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(20,20,25,0.03)"),n.fillStyle=f,n.fillRect(0,0,2048,2048*.78)),n.strokeStyle="rgba(180,180,180,0.15)",n.lineWidth=2;for(let y=2048*.08;y<2048*.75;y+=2048*.07)n.beginPath(),n.moveTo(0,y),n.lineTo(2048,y),n.stroke();n.fillStyle="#2a2a2e",n.fillRect(0,2048*.78,2048,2048*.22),n.strokeStyle="rgba(40,40,45,0.5)",n.lineWidth=1;for(let y=0;y<2048;y+=32)n.beginPath(),n.moveTo(y,2048*.78),n.lineTo(y,2048),n.stroke();for(let y=2048*.78;y<2048;y+=32)n.beginPath(),n.moveTo(0,y),n.lineTo(2048,y),n.stroke();for(let y=0;y<2e3;y++){const m=d()*2048,p=2048*.78+d()*2048*.22,_=1+d()*3,M=25+d()*50,S=d()*15;n.fillStyle=`rgb(${M+S},${M},${M-S})`,n.beginPath(),n.arc(m,p,_,0,Math.PI*2),n.fill()}for(let y=0;y<60;y++){const m=d()*2048,p=2048*.78+d()*2048*.15,_=30+d()*150,M=(d()-.5)*50;n.strokeStyle=`rgba(20,15,10,${.2+d()*.3})`,n.lineWidth=1+d()*3,n.beginPath(),n.moveTo(m,p),n.lineTo(m+M,p+_),n.stroke(),n.strokeStyle=`rgba(60,40,20,${.05+d()*.1})`,n.lineWidth=3+d()*5,n.beginPath(),n.moveTo(m-M*.1,p+_*.2),n.lineTo(m+M,p+_),n.stroke()}n.fillStyle="#5a5a60",n.fillRect(0,2048*.77,2048,2048*.015),n.fillStyle="#8a8a90",n.fillRect(0,2048*.775,2048,2048*.005),n.fillStyle="#003366",n.fillRect(0,2048*.2,2048,2048*.035),n.fillStyle="#b31b1b",n.fillRect(0,2048*.245,2048,2048*.025),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(0,2048*.27,2048,2048*.003);const g=[[2048*.28,2048*.12],[2048*.55,2048*.14]];for(const[y,m]of g)n.fillStyle="#0a0a15",n.beginPath(),n.ellipse(y,m,2048*.04,2048*.03,0,0,Math.PI*2),n.fill(),n.strokeStyle="#9a9a9e",n.lineWidth=5,n.beginPath(),n.ellipse(y,m,2048*.045,2048*.035,0,0,Math.PI*2),n.stroke(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.beginPath(),n.ellipse(y,m,2048*.05,2048*.04,0,0,Math.PI*2),n.stroke();n.fillStyle="#3a3a3e";for(let y=0;y<4;y++){const m=y/4*Math.PI*2,p=2048*.5+Math.cos(m)*2048*.38,_=2048*.35+Math.sin(m)*2048*.05;n.beginPath(),n.arc(p,_,14,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.stroke()}n.fillStyle="#e0e0d8",n.fillRect(0,0,2048,2048*.04),n.strokeStyle="#a0a0a0",n.lineWidth=2,n.beginPath(),n.moveTo(0,2048*.04),n.lineTo(2048,2048*.04),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,2048,2048),s.strokeStyle="#a8a8a8",s.lineWidth=5;for(let y=2048*.08;y<2048*.75;y+=2048*.07)s.beginPath(),s.moveTo(0,y),s.lineTo(2048,y),s.stroke();s.strokeStyle="#585858",s.lineWidth=3;for(let y=0;y<2048;y+=48)s.beginPath(),s.moveTo(y,2048*.78),s.lineTo(y,2048),s.stroke();for(let y=2048*.8;y<2048;y+=48)s.beginPath(),s.moveTo(0,y),s.lineTo(2048,y),s.stroke();s.strokeStyle="#c0c0c0",s.lineWidth=8,s.beginPath(),s.moveTo(0,2048*.775),s.lineTo(2048,2048*.775),s.stroke();for(const[y,m]of g)s.strokeStyle="#d0d0d0",s.lineWidth=10,s.beginPath(),s.ellipse(y,m,2048*.05,2048*.04,0,0,Math.PI*2),s.stroke();a.fillStyle="#808080",a.fillRect(0,0,2048,2048*.78),a.fillStyle="#e0e0e0",a.fillRect(0,2048*.78,2048,2048*.22),a.fillStyle="#484848",a.fillRect(0,2048*.77,2048,2048*.015);for(const[y,m]of g)a.fillStyle="#181818",a.beginPath(),a.ellipse(y,m,2048*.045,2048*.035,0,0,Math.PI*2),a.fill();c.fillStyle="#080808",c.fillRect(0,0,2048,2048),c.fillStyle="#d0d0d0",c.fillRect(0,2048*.77,2048,2048*.015),c.fillRect(0,0,2048,2048*.04);for(const[y,m]of g)c.fillStyle="#b0b0b0",c.beginPath(),c.ellipse(y,m,2048*.05,2048*.04,0,0,Math.PI*2),c.fill();for(let y=0;y<4;y++){const m=y/4*Math.PI*2,p=2048*.5+Math.cos(m)*2048*.38,_=2048*.35+Math.sin(m)*2048*.05;c.beginPath(),c.arc(p,_,16,0,Math.PI*2),c.fill()}h.fillStyle="#ffffff",h.fillRect(0,0,2048,2048),h.strokeStyle="#808080",h.lineWidth=10;for(let y=2048*.08;y<2048*.75;y+=2048*.07)h.beginPath(),h.moveTo(0,y),h.lineTo(2048,y),h.stroke();h.strokeStyle="#606060",h.lineWidth=6;for(let y=0;y<2048;y+=48)h.beginPath(),h.moveTo(y,2048*.78),h.lineTo(y,2048),h.stroke();for(let y=2048*.8;y<2048;y+=48)h.beginPath(),h.moveTo(0,y),h.lineTo(2048,y),h.stroke();h.strokeStyle="#909090",h.lineWidth=12,h.beginPath(),h.moveTo(0,2048*.775),h.lineTo(2048,2048*.775),h.stroke();for(const[y,m]of g)h.strokeStyle="#707070",h.lineWidth=14,h.beginPath(),h.ellipse(y,m,2048*.05,2048*.04,0,0,Math.PI*2),h.stroke();return Si(n,2048,2048,.018),bi(e,i,r,l,u)}function C_(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[r,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024),d=wn(54321);n.fillStyle="#1a1a20",n.fillRect(0,0,1024,1024*.3);for(let g=0;g<150;g++){const y=d()*1024,m=d()*1024*.3,p=5+d()*25;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(y,m),n.lineTo(y,m+p),n.stroke()}n.fillStyle="#4a4a50",n.fillRect(0,1024*.3,1024,1024*.05),n.fillStyle="#2a2a2e";for(let g=20;g<1024;g+=30)n.beginPath(),n.arc(g,1024*.325,4,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=.5,n.stroke();for(let g=1024*.35;g<1024*.92;g++){const y=(g-358.4)/583.68,m=Math.round(180+60*(1-y)),p=Math.round(100+30*(1-y)),_=Math.round(40+15*(1-y));n.fillStyle=`rgb(${m}, ${p}, ${_})`,n.fillRect(0,g,1024,1)}n.strokeStyle="rgba(100,60,25,0.3)",n.lineWidth=1;for(let g=6;g<1024;g+=12)n.beginPath(),n.moveTo(g,1024*.35),n.lineTo(g,1024*.92),n.stroke();const f=n.createLinearGradient(0,1024*.8,0,1024);f&&(f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(.4,"rgba(0,0,0,0.2)"),f.addColorStop(.8,"rgba(0,0,0,0.5)"),f.addColorStop(1,"rgba(0,0,0,0.7)"),n.fillStyle=f,n.fillRect(0,1024*.8,1024,1024*.2)),n.fillStyle="#6a6a70",n.fillRect(0,1024*.92,1024,1024*.03),n.fillStyle="#8a8a90",n.fillRect(0,1024*.95,1024,1024*.02),n.fillStyle="#2a2a30";for(let g=0;g<4;g++){const y=g/4*Math.PI*2+Math.PI/4,m=1024*.5+Math.cos(y)*1024*.38,p=1024*.15+Math.sin(y)*1024*.04;n.beginPath(),n.arc(m,p,1024*.04,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=1,n.stroke()}n.strokeStyle="#6a6a70",n.lineWidth=3,n.beginPath(),n.arc(1024/2,1024*.12,1024*.3,0,Math.PI*2),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let g=0;g<1024;g+=3)s.beginPath(),s.moveTo(g,0),s.lineTo(g,1024*.3),s.stroke();s.fillStyle="#c0c0c0";for(let g=20;g<1024;g+=30)s.beginPath(),s.arc(g,1024*.325,4,0,Math.PI*2),s.fill();s.strokeStyle="#606060",s.lineWidth=2;for(let g=6;g<1024;g+=12)s.beginPath(),s.moveTo(g,1024*.35),s.lineTo(g,1024*.92),s.stroke();s.strokeStyle="#a0a0a0",s.lineWidth=5,s.beginPath(),s.moveTo(0,1024*.3),s.lineTo(1024,1024*.3),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#404040",a.fillRect(0,0,1024,1024*.3),a.fillStyle="#606060",a.fillRect(0,1024*.3,1024,1024*.05),a.fillStyle="#707070",a.fillRect(0,1024*.35,1024,1024*.57),a.fillStyle="#c0c0c0",a.fillRect(0,1024*.8,1024,1024*.2),a.fillStyle="#303030",a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#e0e0e0",c.fillRect(0,0,1024,1024),c.fillStyle="#606060",c.fillRect(0,1024*.8,1024,1024*.2),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.3),h.lineTo(1024,1024*.3),h.stroke(),h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.strokeStyle="#808080",h.lineWidth=3;for(let g=6;g<1024;g+=12)h.beginPath(),h.moveTo(g,1024*.35),h.lineTo(g,1024*.92),h.stroke();return h.strokeStyle="#707070",h.lineWidth=8,h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),Si(n,1024,1024,.01),bi(e,i,r,l,u)}function P_(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[r,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024),d=wn(11111);n.fillStyle="#3a3d30",n.fillRect(0,0,1024,1024);for(let f=0;f<100;f++){const g=d()*1024,y=d()*1024,m=10+d()*50;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(g,y),n.lineTo(g,y+m),n.stroke()}n.fillStyle="#8a8a8e";for(let f=50;f<1024;f+=200)n.fillRect(0,f,1024,15),n.fillStyle="#6a6a6e",n.fillRect(0,f+15,1024,2),n.fillStyle="#8a8a8e";n.fillStyle="#2a2d22",n.fillRect(0,1024*.85,1024,1024*.15),n.strokeStyle="#4a4d42",n.lineWidth=1;for(let f=0;f<1024;f+=32)n.beginPath(),n.moveTo(f,1024*.85),n.lineTo(f,1024),n.stroke();for(let f=1024*.85;f<1024;f+=32)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();n.fillStyle="#222";for(let f=0;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);n.fillStyle="#ffcc00";for(let f=20;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=2;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024*.85),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=6;for(let f=50;f<1024;f+=200)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();s.strokeStyle="#606060",s.lineWidth=3;for(let f=0;f<1024;f+=32)s.beginPath(),s.moveTo(f,1024*.85),s.lineTo(f,1024),s.stroke();for(let f=1024*.85;f<1024;f+=32)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#707070",a.fillRect(0,0,1024,1024*.85),a.fillStyle="#909090";for(let f=50;f<1024;f+=200)a.fillRect(0,f,1024,17);a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),c.fillStyle="#303030",c.fillRect(0,0,1024,1024),c.fillStyle="#e0e0e0";for(let f=50;f<1024;f+=200)c.fillRect(0,f,1024,17);c.fillStyle="#a0a0a0",c.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#808080",h.lineWidth=8;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024*.85),h.stroke();h.strokeStyle="#909090",h.lineWidth=10;for(let f=50;f<1024;f+=200)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Si(n,1024,1024,.02),bi(e,i,r,l,u)}function L_(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[r,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024),d=wn(22222);n.fillStyle="#4a4a4e",n.fillRect(0,0,1024,1024);for(let f=0;f<150;f++){const g=d()*1024,y=d()*1024,m=5+d()*30;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(g,y),n.lineTo(g,y+m),n.stroke()}n.fillStyle="#7a7a7e",n.fillRect(0,1024*.35,1024,1024*.3),n.fillStyle="#3a3a3e";for(let f=24;f<1024;f+=48)n.beginPath(),n.arc(f,1024*.5,6,0,Math.PI*2),n.fill(),n.strokeStyle="#6a6a6e",n.lineWidth=1,n.stroke();n.fillStyle="#cc3300";for(let f=0;f<8;f++){const g=f/8*Math.PI*2,y=1024*.5+Math.cos(g)*1024*.35,m=1024*.5+Math.sin(g)*1024*.35;n.beginPath(),n.arc(y,m,8,0,Math.PI*2),n.fill()}n.fillStyle="#5a5a5e",n.fillRect(0,0,1024,1024*.08),n.fillRect(0,1024*.92,1024,1024*.08),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#b0b0b0",s.lineWidth=10,s.beginPath(),s.moveTo(0,1024*.35),s.lineTo(1024,1024*.35),s.stroke(),s.beginPath(),s.moveTo(0,1024*.65),s.lineTo(1024,1024*.65),s.stroke(),s.fillStyle="#c0c0c0";for(let f=24;f<1024;f+=48)s.beginPath(),s.arc(f,1024*.5,6,0,Math.PI*2),s.fill();return s.strokeStyle="#a0a0a0",s.lineWidth=8,s.beginPath(),s.moveTo(0,1024*.08),s.lineTo(1024,1024*.08),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#404040",a.fillRect(0,1024*.35,1024,1024*.3),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.08),a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#d0d0d0",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#707070",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.65),h.lineTo(1024,1024*.65),h.stroke(),h.strokeStyle="#808080",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.08),h.lineTo(1024,1024*.08),h.stroke(),h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),Si(n,1024,1024,.015),bi(e,i,r,l,u)}function I_(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[r,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024),d=wn(33333);n.fillStyle="#1a1a1c",n.fillRect(0,0,1024,1024);for(let f=0;f<3e3;f++){const g=d()*1024,y=d()*1024,m=1+d()*4,p=20+d()*50,_=d()*20-10;n.fillStyle=`rgb(${p+_},${p},${p-_})`,n.beginPath(),n.arc(g,y,m,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(40,20,10,0.3)",n.lineWidth=1+d()*2;for(let f=0;f<80;f++){const g=d()*1024,y=d()*1024*.3,m=50+d()*200;n.beginPath(),n.moveTo(g,y),n.lineTo(g+(d()-.5)*40,y+m),n.stroke()}n.strokeStyle="#0a0a0c",n.lineWidth=2;for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(f,0),n.lineTo(f,1024),n.stroke();for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024);for(let f=0;f<500;f++){const g=d()*1024,y=d()*1024,m=2+d()*5;s.fillStyle=`rgb(${128+d()*30},${128+d()*30},${128+d()*30})`,s.beginPath(),s.arc(g,y,m,0,Math.PI*2),s.fill()}s.strokeStyle="#404040",s.lineWidth=6;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024),s.stroke();for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#f0f0f0",a.fillRect(0,0,1024,1024),a.fillStyle="#ffffff",a.strokeStyle="#ffffff",a.lineWidth=8;for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f,1024),a.stroke();for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(0,f),a.lineTo(1024,f),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#303030",h.lineWidth=10;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024),h.stroke();for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Si(n,1024,1024,.03),bi(e,i,r,l,u)}function _d(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[r,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024),d=wn(44444),f=n.createLinearGradient(0,0,0,1024);f&&(f.addColorStop(0,"#b8862e"),f.addColorStop(.08,"#dba44a"),f.addColorStop(.15,"#e8b858"),f.addColorStop(.22,"#cf9a3e"),f.addColorStop(.3,"#b0802e"),f.addColorStop(.38,"#d8a84a"),f.addColorStop(.45,"#eac05e"),f.addColorStop(.52,"#c89838"),f.addColorStop(.6,"#b0802e"),f.addColorStop(.68,"#d8a84a"),f.addColorStop(.75,"#e8b858"),f.addColorStop(.85,"#c89838"),f.addColorStop(1,"#b8862e"),n.fillStyle=f,n.fillRect(0,0,1024,1024));for(let g=0;g<12;g++){const y=50+d()*924,m=50+d()*924,p=80+d()*300,_=80+d()*300;n.strokeStyle=`rgba(80,55,15,${.15+d()*.15})`,n.lineWidth=1+d()*2,n.strokeRect(y,m,p,_);const M=(d()-.5)*.06;n.fillStyle=`rgba(200,160,60,${M>0?M:0})`,n.fillRect(y+2,m+2,p-4,_-4)}n.strokeStyle="rgba(70,50,15,0.12)",n.lineWidth=3+d()*4;for(let g=0;g<60;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,_=40+d()*150;n.beginPath(),n.moveTo(y,m);const M=y+Math.cos(p+.3)*_*.5,S=m+Math.sin(p+.3)*_*.5;n.quadraticCurveTo(M,S,y+Math.cos(p)*_,m+Math.sin(p)*_),n.stroke()}n.strokeStyle="rgba(60,40,10,0.18)",n.lineWidth=1.5;for(let g=0;g<120;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,_=15+d()*60;n.beginPath(),n.moveTo(y,m),n.lineTo(y+Math.cos(p)*_,m+Math.sin(p)*_),n.stroke()}n.strokeStyle="rgba(255,230,160,0.15)",n.lineWidth=.5;for(let g=0;g<250;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,_=3+d()*25;n.beginPath(),n.moveTo(y,m),n.lineTo(y+Math.cos(p)*_,m+Math.sin(p)*_),n.stroke()}n.strokeStyle="rgba(30,20,5,0.1)",n.lineWidth=.5;for(let g=0;g<200;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,_=4+d()*30;n.beginPath(),n.moveTo(y+1,m+1),n.lineTo(y+Math.cos(p)*_+1,m+Math.sin(p)*_+1),n.stroke()}for(let g=0;g<120;g++){const y=d()*1024,m=d()*1024,p=2+d()*18,_=d();_<.33?n.fillStyle=`rgba(80,50,20,${.08+d()*.15})`:_<.66?n.fillStyle=`rgba(30,25,15,${.06+d()*.12})`:n.fillStyle=`rgba(60,80,40,${.04+d()*.08})`,n.beginPath(),n.arc(y,m,p,0,Math.PI*2),n.fill()}for(let g=0;g<50;g++){const y=d()*1024,m=d()*1024,p=1+d()*8,_=240+Math.floor(d()*15);n.fillStyle=`rgba(${_}, ${_-20}, ${_-80}, ${.15+d()*.2})`,n.beginPath(),n.arc(y,m,p,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,240,180,${.03+d()*.05})`,n.beginPath(),n.arc(y,m,p*3,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(160,120,40,0.12)",n.lineWidth=1;for(let g=0;g<1024;g+=15+d()*25){n.beginPath(),n.moveTo(0,g);for(let y=0;y<1024;y+=10)n.lineTo(y+d()*5,g+(d()-.5)*3);n.stroke()}s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#a0a0a0",s.lineWidth=2;for(let g=0;g<120;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,_=20+d()*100;s.beginPath(),s.moveTo(y,m);const M=y+Math.cos(p+.2)*_*.4,S=m+Math.sin(p+.2)*_*.4;s.quadraticCurveTo(M,S,y+Math.cos(p)*_,m+Math.sin(p)*_),s.stroke()}s.strokeStyle="#c0c0c0",s.lineWidth=1;for(let g=0;g<300;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,_=5+d()*40;s.beginPath(),s.moveTo(y,m),s.lineTo(y+Math.cos(p)*_,m+Math.sin(p)*_),s.stroke()}s.fillStyle="#606060";for(let g=0;g<100;g++){const y=d()*1024,m=d()*1024,p=2+d()*16;s.beginPath(),s.arc(y,m,p,0,Math.PI*2),s.fill()}a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#909090";for(let g=0;g<400;g++){const y=d()*1024,m=d()*1024,p=5+d()*50,_=3+d()*20;a.fillRect(y,m,p,_)}a.fillStyle="#c0c0c0";for(let g=0;g<100;g++){const y=d()*1024,m=d()*1024,p=2+d()*16;a.beginPath(),a.arc(y,m,p,0,Math.PI*2),a.fill()}c.fillStyle="#f0f0f0",c.fillRect(0,0,1024,1024),c.fillStyle="#303030";for(let g=0;g<100;g++){const y=d()*1024,m=d()*1024,p=2+d()*16;c.beginPath(),c.arc(y,m,p,0,Math.PI*2),c.fill()}c.strokeStyle="#808080",c.lineWidth=2;for(let g=0;g<12;g++){const y=50+d()*924,m=50+d()*924,p=80+d()*300,_=80+d()*300;c.strokeRect(y,m,p,_)}h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=3;for(let g=0;g<400;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,_=5+d()*50;h.beginPath(),h.moveTo(y,m),h.lineTo(y+Math.cos(p)*_,m+Math.sin(p)*_),h.stroke()}h.strokeStyle="#808080",h.lineWidth=2;for(let g=0;g<200;g++){const y=d()*1024,m=d()*1024,p=d()*Math.PI*2,_=10+d()*80;h.beginPath(),h.moveTo(y,m);const M=y+Math.cos(p+.3)*_*.5,S=m+Math.sin(p+.3)*_*.5;h.quadraticCurveTo(M,S,y+Math.cos(p)*_,m+Math.sin(p)*_),h.stroke()}h.fillStyle="#888888";for(let g=0;g<100;g++){const y=d()*1024,m=d()*1024,p=3+d()*18;h.beginPath(),h.arc(y,m,p,0,Math.PI*2),h.fill()}return Si(n,1024,1024,.02),bi(e,i,r,l,u)}function xd(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[r,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024);n.fillStyle="#f5f5f0",n.fillRect(0,0,1024,1024),n.strokeStyle="rgba(200,200,190,0.15)",n.lineWidth=1;for(let d=0;d<1024;d+=4)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();n.strokeStyle="rgba(200,200,190,0.1)";for(let d=0;d<1024;d+=4)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.strokeStyle="rgba(160,160,150,0.3)",n.lineWidth=2;for(let d=0;d<1024;d+=32)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();for(let d=0;d<1024;d+=32)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.strokeStyle="rgba(120,120,110,0.4)",n.lineWidth=1,n.setLineDash([8,16]);for(let d=16;d<1024;d+=64)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();for(let d=16;d<1024;d+=64)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.setLineDash([]),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let d=0;d<1024;d+=8)s.beginPath(),s.moveTo(d,0),s.lineTo(d,1024),s.stroke();for(let d=0;d<1024;d+=8)s.beginPath(),s.moveTo(0,d),s.lineTo(1024,d),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=4;for(let d=0;d<1024;d+=32)s.beginPath(),s.moveTo(d,0),s.lineTo(d,1024),s.stroke();for(let d=0;d<1024;d+=32)s.beginPath(),s.moveTo(0,d),s.lineTo(1024,d),s.stroke();a.fillStyle="#c0c0c0",a.fillRect(0,0,1024,1024),a.fillStyle="#e0e0e0",a.strokeStyle="#e0e0e0",a.lineWidth=6;for(let d=0;d<1024;d+=32)a.beginPath(),a.moveTo(d,0),a.lineTo(d,1024),a.stroke();for(let d=0;d<1024;d+=32)a.beginPath(),a.moveTo(0,d),a.lineTo(1024,d),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#a0a0a0",h.lineWidth=6;for(let d=0;d<1024;d+=32)h.beginPath(),h.moveTo(d,0),h.lineTo(d,1024),h.stroke();for(let d=0;d<1024;d+=32)h.beginPath(),h.moveTo(0,d),h.lineTo(1024,d),h.stroke();return Si(n,1024,1024,.02),bi(e,i,r,l,u)}function vd(o,t,e,n,i,s){const r=document.createElement("canvas");r.width=o,r.height=t;const a=r.getContext("2d"),l=wn(s),c=a.createImageData(o,t);for(let h=0;h<t;h++){const d=h/t;let f=0,g=0,y=0,m=0;for(const p of e){const _=Math.abs(d-p.y)/p.width;if(_<1){const M=1-_*_,S=D_(p.color);f+=S[0]*M,g+=S[1]*M,y+=S[2]*M,m+=M}}m>0&&(f/=m,g/=m,y/=m);for(let p=0;p<o;p++){const _=p/o,M=Math.sin(_*n+d*n*.5+s)*i+Math.sin(_*n*2.3+d*n*.7+s*2)*i*.5;let S=f,R=g,w=y;const T=M*30;S+=T,R+=T*.7,w+=T*.3;const O=(l()-.5)*8,v=(h*o+p)*4;c.data[v]=Qn(S+O),c.data[v+1]=Qn(R+O),c.data[v+2]=Qn(w+O),c.data[v+3]=255}}a.putImageData(c,0,0);const u=new en(r);return u.wrapS=u.wrapT=ze,u.colorSpace=Qt,u}function D_(o){const t=parseInt(o.slice(1,3),16),e=parseInt(o.slice(3,5),16),n=parseInt(o.slice(5,7),16);return[t,e,n]}function Qn(o){return Math.min(255,Math.max(0,Math.round(o)))}function U_(){const n=vd(1024,512,[{y:0,width:.08,color:"#5a4a3a",turbulence:.3},{y:.05,width:.06,color:"#6a4c36",turbulence:.3},{y:.1,width:.04,color:"#8a6a48",turbulence:.4},{y:.18,width:.06,color:"#c4a46a",turbulence:.5},{y:.24,width:.04,color:"#d4b880",turbulence:.5},{y:.3,width:.05,color:"#8a6a3a",turbulence:.6},{y:.38,width:.04,color:"#e4d0a0",turbulence:.7},{y:.42,width:.03,color:"#f0e0b8",turbulence:.8},{y:.46,width:.03,color:"#e8d4a8",turbulence:.7},{y:.5,width:.03,color:"#dcc89c",turbulence:.7},{y:.54,width:.03,color:"#e4d0a0",turbulence:.8},{y:.58,width:.03,color:"#f0e0b8",turbulence:.7},{y:.62,width:.04,color:"#e4d0a0",turbulence:.6},{y:.7,width:.05,color:"#8a6a3a",turbulence:.6},{y:.76,width:.04,color:"#c4a46a",turbulence:.5},{y:.82,width:.06,color:"#d4b880",turbulence:.5},{y:.9,width:.04,color:"#7a5a3a",turbulence:.4},{y:.94,width:.06,color:"#6a4c36",turbulence:.3},{y:1,width:.08,color:"#5a4a3a",turbulence:.3}],40,.015,777),s=n.image.getContext("2d"),r=.33*1024,a=.56*512,l=40+wn(888)()*10,c=s.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"#c04830"),c.addColorStop(.3,"#b04028"),c.addColorStop(.6,"#a05030"),c.addColorStop(.8,"#8a4830"),c.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=c,s.beginPath(),s.arc(r,a,l,0,Math.PI*2),s.fill();const u=.55*1024,h=.48*512,d=15+wn(889)()*5,f=s.createRadialGradient(u,h,0,u,h,d);return f.addColorStop(0,"#d06040"),f.addColorStop(.5,"#b05038"),f.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=f,s.beginPath(),s.arc(u,h,d,0,Math.PI*2),s.fill(),n.needsUpdate=!0,n}function N_(){return vd(1024,512,[{y:0,width:.08,color:"#a09070",turbulence:.2},{y:.06,width:.06,color:"#b8a888",turbulence:.2},{y:.12,width:.05,color:"#a89878",turbulence:.3},{y:.18,width:.06,color:"#c8b898",turbulence:.3},{y:.25,width:.05,color:"#b8a888",turbulence:.4},{y:.32,width:.05,color:"#d4c8a8",turbulence:.4},{y:.38,width:.04,color:"#c0b090",turbulence:.5},{y:.42,width:.03,color:"#e8dcc0",turbulence:.5},{y:.46,width:.03,color:"#d4c8a8",turbulence:.5},{y:.5,width:.03,color:"#f0e4d0",turbulence:.5},{y:.54,width:.03,color:"#d4c8a8",turbulence:.5},{y:.58,width:.04,color:"#e8dcc0",turbulence:.5},{y:.64,width:.05,color:"#c0b090",turbulence:.4},{y:.7,width:.05,color:"#b8a888",turbulence:.4},{y:.76,width:.06,color:"#a89878",turbulence:.3},{y:.85,width:.05,color:"#b8a888",turbulence:.2},{y:.92,width:.08,color:"#a09070",turbulence:.2}],30,.01,333)}function F_(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=wn(222),s=n.createImageData(1024,512);for(let a=0;a<512;a++){const l=a/512,u=.6+(Math.sin(l*12)*.3+Math.sin(l*24)*.15+Math.sin(l*6)*.4)*.1;for(let h=0;h<1024;h++){const d=h/1024,f=Math.sin(d*8+l*4)*.03,g=(i()-.5)*.04,y=(.48+u*.12+f+g)*255,m=(.7+u*.18+f*.5+g)*255,p=(.75+u*.2+g)*255,_=(a*1024+h)*4;s.data[_]=Qn(y),s.data[_+1]=Qn(m),s.data[_+2]=Qn(p),s.data[_+3]=255}}n.putImageData(s,0,0);const r=new en(e);return r.wrapS=r.wrapT=ze,r.colorSpace=Qt,r}function k_(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=wn(444),s=n.createImageData(1024,512);for(let y=0;y<512;y++){const m=y/512,_=.5+(Math.sin(m*14)*.5+Math.sin(m*28)*.2+Math.sin(m*7)*.3)*.08;for(let M=0;M<1024;M++){const S=M/1024,R=Math.sin(S*10+m*5)*.04,w=(i()-.5)*.03,T=(.18+_*.08+R+w)*255,O=(.25+_*.12+R*.7+w)*255,v=(.7+_*.2+w)*255,E=(y*1024+M)*4;s.data[E]=Qn(T),s.data[E+1]=Qn(O),s.data[E+2]=Qn(v),s.data[E+3]=255}}n.putImageData(s,0,0);const r=.3*1024,a=.65*512,l=30,c=n.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"#0a0a2a"),c.addColorStop(.3,"#101040"),c.addColorStop(.6,"#1a2050"),c.addColorStop(1,"rgba(30,40,80,0)"),n.fillStyle=c,n.beginPath(),n.arc(r,a,l,0,Math.PI*2),n.fill();const u=.3*1024+35,h=.65*512-15,d=15,f=n.createRadialGradient(u,h,0,u,h,d);f.addColorStop(0,"rgba(200,220,255,0.4)"),f.addColorStop(.5,"rgba(180,200,240,0.2)"),f.addColorStop(1,"rgba(180,200,240,0)"),n.fillStyle=f,n.beginPath(),n.arc(u,h,d,0,Math.PI*2),n.fill(),n.putImageData(s,0,0);const g=new en(e);return g.wrapS=g.wrapT=ze,g.colorSpace=Qt,g}const hh={S:{radius:.5*me,height:.7*me},M:{radius:.7*me,height:1.1*me},L:{radius:1*me,height:1.6*me},XL:{radius:1.4*me,height:2.2*me}},$n=Math.PI,Yi=128;let ya=0;function _a(){return ya=ya*1664525+1013904223>>>0,(ya>>>0)/4294967295}function oo(o,t){const e=o.attributes.position;if(!e)return;const n=e.array;for(let i=0;i<n.length;i+=3){const s=(_a()-.5)*2,r=(_a()-.5)*2,a=(_a()-.5)*2;n[i]=n[i]+s*t,n[i+1]=n[i+1]+r*t,n[i+2]=n[i+2]+a*t}e.needsUpdate=!0,o.computeVertexNormals()}const Md=new Vy,xi=new Map;async function O_(o,t=1){const e=zs(o);if(xi.has(o))return xi.get(o).clone();const n=[e];e!==o&&n.push(o),o.startsWith("/")&&n.push(o.slice(1));let i;for(const s of n)try{const a=(await Md.loadAsync(s)).scene;if(!a)continue;return a.traverse(l=>{if(l instanceof ot)if(l.castShadow=!0,l.receiveShadow=!0,l.material){const c=Array.isArray(l.material)?l.material:[l.material];for(const u of c)if(u instanceof te){if(u.roughness=Math.max(.1,u.roughness??.5),u.metalness=Math.max(0,u.metalness??0),u.color){const p={h:0,s:0,l:0};u.color.getHSL(p),p.s<.3&&(p.s=Math.min(1,p.s*1.5+.05),p.l=Math.min(1,Math.max(.1,p.l*1.1)),u.color.setHSL(p.h,p.s,p.l))}const h=l.name.toLowerCase(),d=h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor")||h.includes("bell"),f=h.includes("metal")||h.includes("hull")||h.includes("body")||h.includes("frame")||h.includes("strut"),g=h.includes("glass")||h.includes("window")||h.includes("canopy")||h.includes("cockpit"),y=h.includes("heat")||h.includes("shield")||h.includes("tile"),m=h.includes("solar")||h.includes("panel")||h.includes("array");d?(u.roughness=Math.max(.05,u.roughness),u.metalness=Math.min(1,u.metalness+.3),u.emissive=new Tt(8930338),u.emissiveIntensity=.15):f?(u.roughness=Math.max(.1,u.roughness*.7),u.metalness=Math.min(1,u.metalness+.4)):g?(u.roughness=0,u.metalness=0,u.transparent=!0,u.opacity=.6,u.emissive=new Tt(4491519),u.emissiveIntensity=.08):y?(u.roughness=Math.min(1,u.roughness+.2),u.metalness=0):m&&(u.roughness=.8,u.metalness=0,u.emissive=new Tt(4491519),u.emissiveIntensity=.03),!d&&!g&&!m&&(h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor"))&&(u.emissive=new Tt(4465152),u.emissiveIntensity=.05),u.needsUpdate=!0}else if(u instanceof Pe||u instanceof hy){const h=new te({color:u.color??16777215,map:u.map,normalMap:u.normalMap,roughnessMap:u.roughnessMap,metalnessMap:u.metalnessMap,aoMap:u.aoMap,roughness:.5,metalness:.1});l.material=h}}else l.material=new te({color:13421772,roughness:.5,metalness:.1})}),a.scale.setScalar(t),xi.set(o,a),a.clone()}catch(r){i=r}return console.error("Failed to load GLTF after all attempts:",o,i),xe.show(`Failed to load model: ${o.split("/").pop()}`,3e3),null}const Yo=new Map;function Un(o,t){if(!Yo.has(o))try{const e=t(),n=[e.color,e.normal,e.roughness,e.metalness,e.ao,e.emissive].filter(Boolean);for(const i of n)i.minFilter=Je,i.magFilter=Je,i.generateMipmaps=!1,i.needsUpdate=!0;Yo.set(o,e)}catch{console.warn("Texture generation failed for:",o,"using solid fallback");const e={color:H_(8421504),normal:void 0,roughness:void 0,metalness:void 0,ao:void 0,emissive:void 0};Yo.set(o,e)}return Yo.get(o)}function H_(o){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.fillStyle="#"+o.toString(16).padStart(6,"0"),e.fillRect(0,0,64,64);const n=new en(t);return n.colorSpace=Qt,n}function an(o,t={}){const e={map:o.color,normalMap:o.normal,roughnessMap:o.roughness,metalnessMap:o.metalness,roughness:.5,metalness:.1,color:13426158,...t};return o.ao&&(e.aoMap=o.ao,e.aoMapIntensity=1),o.emissive&&(e.emissiveMap=o.emissive),new te(e)}function ln(o,t=1){const e=o.attributes.position;if(!e)return;let n=o.attributes.uv;n||(n=new De(new Float32Array(e.count*2),2));let i=1/0,s=-1/0;for(let a=0;a<e.count;a++){const l=e.getY(a);l<i&&(i=l),l>s&&(s=l)}const r=s-i||1;for(let a=0;a<e.count;a++){const l=e.getX(a),c=e.getY(a),u=e.getZ(a),d=(Math.atan2(l,u)+Math.PI)/(2*Math.PI),f=(c-i)/r*t;n.setXY(a,d,f)}o.setAttribute("uv",n),n.needsUpdate=!0,o.attributes.uv2||o.setAttribute("uv2",n.clone())}function bd(o){const t=new on;t.name=o.id;const e=hh[o.size];switch(o.kind){case"capsule":B_(t,e,o.id);break;case"tank":z_(t,e,o.size);break;case"engine":G_(t,e,o.size);break;case"parachute":W_(t,e);break;case"legs":V_(t,e);break;case"decoupler":X_(t,e);break;case"heatshield":q_(t,e);break;case"fairing":Y_(t,e);break;case"rcs":K_(t,e);break;case"solar":$_(t,e);break;case"gltf":{if(o.gltfUrl&&xi.has(o.gltfUrl)){const n=o.gltfScale??1,i=xi.get(o.gltfUrl).clone();i.scale.setScalar(n);const s=new En().setFromObject(i),r=new P;s.getCenter(r),i.position.sub(r);const a=[],l=[];i.traverse(c=>{if(c instanceof ot){const u=c.name.toLowerCase();if(u.includes("engine")||u.includes("nozzle")||u.includes("thruster")||u.includes("motor")||u.includes("combustion")||c.position.y<-.1){const f=new En().setFromObject(c),g=new P;f.getCenter(g);const y=g.clone().sub(i.position);a.push(y),l.push(c)}c.castShadow=!0,c.receiveShadow=!0}}),i.userData.nozzlePoints=a,i.userData.engineMeshes=l,t.add(i)}else{const n=hh[o.size],i=new te({color:8956620,roughness:.4,metalness:.3}),s=new _e(n.radius,n.radius*.8,n.height*.8,16);ln(s);const r=new ot(s,i);r.position.y=-n.height*.1,t.add(r);const a=new wr(n.radius*.6,n.height*.2,16),l=new te({color:13386820,roughness:.6,metalness:.1}),c=new ot(a,l);c.position.y=n.height*.4,t.add(c);const u=new te({color:6710920,roughness:.8,metalness:0});for(let h=0;h<4;h++){const d=h/4*Math.PI*2,f=new In(n.radius*.02,n.height*.15,n.radius*.3),g=new ot(f,u);g.position.set(Math.sin(d)*n.radius*1.05,-n.height*.35,Math.cos(d)*n.radius*1.05),g.rotation.y=-d,t.add(g)}}break}}return t}function B_(o,t,e){const n=t.radius,i=t.height,s=64,r=Un("capsule_mk1",R_),a=an(r),l=new te({color:1710626,roughness:.55,metalness:.45}),c=new te({color:13146168,roughness:.3,metalness:.7}),u=new te({color:6724044,roughness:.15,metalness:.4,emissive:1122867,emissiveIntensity:.3}),h=new ot(new pe(n*.88,s,32,0,Math.PI*2,0,Math.PI*.48),a);h.position.y=i*.23,o.add(h);const d=new ot(new _e(n*.88,n*.97,i*.45,s),a);d.position.y=-i*.01,o.add(d);const f=new ot(new _e(n*.97,n*.82,i*.13,s),l);f.position.y=-i*.26,o.add(f);const g=new ot(new _e(n*.22,n*.22,i*.06,16),l);g.position.y=i*.45,o.add(g);const y=new ot(new ji(n*.93,n*.03,8,s),c);y.position.y=-i*.19,y.rotation.x=Math.PI/2,o.add(y);for(const[m,p]of[[0,i*.1],[0,-i*.08]]){const _=new ot(new pe(n*.12,16,8),u);_.position.set(m,p,n*.66),o.add(_)}}function z_(o,t,e){const n=t.radius,i=t.height,s=64,r=Un(`tank_${e}`,()=>yd(e)),a=an(r),l=new te({color:13395490,roughness:.5,metalness:.05}),c=new te({color:2763312,roughness:.5,metalness:.35}),u=new te({color:13146168,roughness:.3,metalness:.7}),h=new ot(new _e(n*.97,n*1.01,i,s),a);o.add(h);const d=new ot(new _e(n*1.02,n*1.02,i*.28,s),l);d.position.y=-i*.02,o.add(d);for(const f of[i*.44,i*.2,-i*.24,-i*.44]){const g=new ot(new ji(n*1.03,n*.025,8,s),c);g.position.y=f,g.rotation.x=Math.PI/2,o.add(g)}for(const f of[i*.32,-i*.35]){const g=new ot(new ji(n*1.01,n*.012,6,s),u);g.position.y=f,g.rotation.x=Math.PI/2,o.add(g)}}function G_(o,t,e){const n=t.radius,i=t.height,s=48,r=Un("engine_ant",C_),a=an(r),l=new te({color:657940,roughness:.9,metalness:.1}),c=new te({color:2631736,roughness:.25,metalness:.75}),u=new te({color:13146168,roughness:.3,metalness:.7}),h=new Pe({color:16733440,transparent:!0,opacity:.5,depthWrite:!1}),d=new ot(new _e(n*.88,n*.72,i*.22,s),a);d.position.y=i*.24,o.add(d);const f=new ot(new _e(n*.06,n*.06,i*.12,8),u);f.position.set(n*.75,i*.24,0),f.rotation.z=Math.PI/2,o.add(f);const g=new ot(new ji(n*.7,n*.04,8,s),u);g.position.y=i*.13,g.rotation.x=Math.PI/2,o.add(g);const y=new ot(new _e(n*.5,n*.84,i*.38,s),c);y.position.y=-i*.07,o.add(y);const m=new ot(new _e(n*.3,n*.55,i*.3,s),l);m.position.y=-i*.05,o.add(m);const p=new ot(new ji(n*.78,n*.035,6,s),u);p.position.y=-i*.07-i*.19,p.rotation.x=Math.PI/2,o.add(p);const _=new ot(new vi(n*.28,n*.48,s),h);_.position.y=-i*.07-i*.15,_.rotation.x=-Math.PI/2,o.add(_)}function W_(o,t){const e=t.radius,n=t.height,i=Un("fabric",xd),s=Un("gold",_d),r=an(s),a=an(i,{color:8952234,roughness:.5,metalness:.1}),l=new _e(e*.35,e*.35,n*.18,12);ln(l);const c=new ot(l,a);c.position.y=n*.55,o.add(c);const u=an(i,{color:6978186,roughness:.4,metalness:.2}),h=new _e(e*.37,e*.37,n*.03,12);ln(h);const d=new ot(h,u);d.position.y=n*.55+n*.09,o.add(d);const f=new _e(e*.37,e*.37,n*.02,12);ln(f);const g=new ot(f,r);g.position.y=n*.55-n*.09,o.add(g)}function $a(o){const t=new on,e=o.radius,n=o.height,i=24,s=Un("fabric",xd),r=an(s,{side:Be,transparent:!0,opacity:.95}),a=new pe(e*1.8,i,i,0,$n*2,0,$n*.5);ln(a,.5);const l=new ot(a,r);l.position.y=n*.3,l.rotation.x=$n,t.add(l);const c=an(s,{color:14500932,side:Be,transparent:!0,opacity:.9});for(let h=0;h<6;h++){const d=h/6*$n*2,f=new In(e*.03,n*.7,e*.015),g=new ot(f,c);g.position.set(Math.cos(d)*e*.9,n*.4,Math.sin(d)*e*.9),g.rotation.x=$n,g.lookAt(0,n*.8,0),t.add(g)}const u=an(s,{color:6978186,roughness:.5,metalness:.4});for(let h=0;h<4;h++){const d=h/4*$n*2+$n/4;for(let f=0;f<3;f++){const g=new _e(.006,.006,n*.15,4);ln(g);const y=new ot(g,u),m=d+(f-1)*.3;y.position.set(Math.cos(m)*e*1.5,n*.15-n*.06*f,Math.sin(m)*e*1.5),t.add(y)}}return t}function V_(o,t){const e=t.radius,n=t.height,i=Un("legs",P_),s=an(i),r=an(i,{color:2764066,roughness:.8,metalness:.2});for(let a=0;a<4;a++){const l=a/4*$n*2+$n/4,c=new _e(.01,.007,n*.35,6);ln(c);const u=new ot(c,s),h=Math.cos(l)*e*.65,d=Math.sin(l)*e*.65;u.position.set(h,-n/2-n*.175,d),u.rotation.z=Math.cos(l)*.3,u.rotation.x=Math.sin(l)*.3,o.add(u);const f=new _e(.02,.025,.008,6);ln(f);const g=new ot(f,r);g.position.set(Math.cos(l)*e*.95,-n/2-n*.35,Math.sin(l)*e*.95),o.add(g)}}function X_(o,t){const e=t.radius,n=t.height,i=Un("decoupler",L_),s=an(i),r=Un("gold",_d),a=an(r),l=new _e(e*1.05,e*.92,n*.12,Yi);ln(l),oo(l,me*.008);const c=new ot(l,s);o.add(c);const u=new _e(e*1.08,e*1.08,n*.04,Yi);ln(u),oo(u,me*.005);const h=new ot(u,a);h.position.y=n*.06,o.add(h);const d=new _e(e*.92,e*.92,n*.04,Yi);ln(d),oo(d,me*.008);const f=new ot(d,s);f.position.y=-n*.06,o.add(f)}function q_(o,t){const e=t.radius,n=t.height,i=Un("heatshield",I_),s=an(i),r=new _e(e*1.2,e*.8,n*.2,Yi,1,!0);ln(r,.5),oo(r,me*.012);const a=new ot(r,s);a.position.y=-n*.1,o.add(a);const l=new _e(e*.8,e*.8,n*.08,Yi);ln(l),oo(l,me*.01);const c=new ot(l,s);c.position.y=-n*.2,o.add(c)}function Y_(o,t){const e=t.radius,n=t.height,i=Un("tank",yd),s=an(i),r=new wr(e,n*.9,Yi);ln(r);const a=new ot(r,s);a.position.y=n*.45,o.add(a);const l=new _e(e,e,n*.08,Yi);ln(l);const c=new ot(l,s);c.position.y=-n*.04,o.add(c)}function K_(o,t){const e=t.radius*.35,n=t.height*.25,i=new te({color:10066329,roughness:.5,metalness:.4,emissive:0,emissiveIntensity:0}),s=new In(e*2,n,e*2),r=new ot(s,i);o.add(r);for(let a=0;a<4;a++){const l=a/4*Math.PI*2,c=new _e(e*.2,e*.3,n*.8,12),u=new ot(c,i);u.position.set(Math.cos(l)*e,0,Math.sin(l)*e),u.rotation.z=Math.PI/2,u.rotation.y=-l,o.add(u)}}function $_(o,t){const e=t.radius,n=t.height,i=new te({color:1127338,roughness:.3,metalness:.6,emissive:4403,emissiveIntensity:.2}),s=new te({color:8947848,roughness:.5,metalness:.5,emissive:0,emissiveIntensity:0}),r=new _e(e*.15,e*.15,n*.15,16),a=new ot(r,s);o.add(a);for(const l of[-1,1]){const c=new In(e*1.2,n*.04,e*.6),u=new ot(c,i);u.position.set(l*e*.7,0,0),o.add(u);const h=new In(e*.4,n*.04,n*.06),d=new ot(h,s);d.position.set(l*e*.3,0,0),o.add(d)}}const Sd=Object.freeze(Object.defineProperty({__proto__:null,buildDeployedParachute:$a,buildPartMesh:bd,gltfCache:xi,gltfLoader:Md,loadGLTF:O_},Symbol.toStringTag,{value:"Module"})),dh={S:{radius:.5*me},M:{radius:.7*me},L:{radius:1*me},XL:{radius:1.4*me}};class _r{roots=[];addRoot(t){this.roots.push(t)}totalFuelCapacity(){let t=0;const e=n=>{n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}totalMass(){let t=0;const e=n=>{t+=n.part.mass,n.children.forEach(e)};return this.roots.forEach(e),t}totalMassWithFuel(){let t=0;const e=n=>{t+=n.part.mass,n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}centerOfMass(){let t=0,e=0,n=0,i=0;const s=r=>{const a=r.part.mass;t+=a,e+=r.position[0]*a,n+=r.position[1]*a,i+=r.position[2]*a,r.children.forEach(s)};return this.roots.forEach(s),t===0?[0,0,0]:[e/t,n/t,i/t]}toMesh(){const t=new on,e=(r,a)=>{const l=bd(r.part);l.position.set(r.position[0],r.position[1],r.position[2]),l.rotation.y=r.rotation,a.add(l),r.children.forEach(c=>e(c,l))};this.roots.forEach(r=>e(r,t));const n=[...this.roots].sort((r,a)=>a.position[1]-r.position[1]);let i=0;for(let r=0;r<n.length-1;r++){const a=n[r],l=n[r+1],c=dh[a.part.size]?.radius??0,u=dh[l.part.size]?.radius??0;if(Math.abs(c-u)>.001&&!a.part.id.includes("decoupler")&&!l.part.id.includes("decoupler")){const h=(a.position[1]+l.position[1])/2,d=Math.abs(a.position[1]-l.position[1])*1.5,f=new _e(u,c,d,32),g=new te({color:16777215,roughness:.3,metalness:.2,emissive:0,emissiveIntensity:0}),y=new ot(f,g);y.position.y=h,t.add(y),i++}}i>0&&console.log("Smooth adapters created:",i);const s=this.centerOfMass();for(const r of t.children)r.position.x-=s[0],r.position.y-=s[1],r.position.z-=s[2];return t}}const Rr="ellipse_assembly_",uo="ellipse_assemblies",ul="ellipse_assembly_last";function Td(o){return{partId:o.part.id,position:o.position,rotation:o.rotation,children:o.children.map(Td)}}function Ed(o){const t=Oi(o.partId);return t?{part:t,position:o.position,rotation:o.rotation,children:(o.children??[]).map(Ed).filter(e=>e!==null)}:null}function wd(o,t){const e=t.roots.map(Td);localStorage.setItem(Rr+o,JSON.stringify(e));const n=JSON.parse(localStorage.getItem(uo)??"[]");n.includes(o)||(n.push(o),localStorage.setItem(uo,JSON.stringify(n)))}function Ad(o){const t=localStorage.getItem(Rr+o);if(!t)return null;const e=JSON.parse(t),n=new _r;for(const i of e){const s=Ed(i);s&&n.addRoot(s)}return n}function j_(){return JSON.parse(localStorage.getItem(uo)??"[]")}function Z_(o){localStorage.removeItem(Rr+o);const e=JSON.parse(localStorage.getItem(uo)??"[]").filter(n=>n!==o);localStorage.setItem(uo,JSON.stringify(e))}function J_(o){wd(ul,o)}function Q_(){return Ad(ul)}function tx(){return localStorage.getItem(Rr+ul)!==null}const uh={S:.7,M:1.1,L:1.6,XL:2.2};class ex{constructor(t,e){this.ol=t,this.ob=e,this.scene.background=new Tt(527382),this.scene.add(new fd(4478310,.5));const n=new Ar(16777215,2.5);n.position.set(2,5,4),this.scene.add(n),this.scene.add(new ud(8952251,3359829,.5));const i=new Hy(10,20,1714746,857376);i.position.y=-.3,this.scene.add(i);const s=new ot(new In(me*4,.001,me*4),new te({color:1054760,roughness:.9}));s.position.y=-me*.3,this.scene.add(s),this.scene.add(this.rg),this.cam();const r=a=>{a.button===0&&(this.dr=!0,this.pr={x:a.clientX,y:a.clientY})};document.addEventListener("mousedown",r),document.addEventListener("mousemove",a=>{this.dr&&(this.az-=(a.clientX-this.pr.x)*.005,this.po=Math.max(.05,Math.min(Math.PI-.05,this.po+(a.clientY-this.pr.y)*.005)),this.pr={x:a.clientX,y:a.clientY},this.cam())}),document.addEventListener("mouseup",()=>this.dr=!1),document.addEventListener("wheel",a=>{this.dt*=a.deltaY>0?1.1:.9,this.dt=Math.max(.5,Math.min(50,this.dt)),this.cam()},{passive:!0}),this.root=document.createElement("div"),this.root.style.cssText="position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;",this.root.innerHTML=`
      <div style="width:260px;background:rgba(8,12,22,0.98);border-right:1px solid rgba(255,255,255,0.04);display:flex;flex-direction:column;pointer-events:auto;">
        <div style="padding:18px 16px;border-bottom:1px solid rgba(255,255,255,0.04);">
          <div style="font:200 15px/1 system-ui,-apple-system,sans-serif;color:#8090a8;letter-spacing:0.1em;">ASSEMBLY</div>
          <div id="vi" style="margin-top:10px;font:400 9px/1.5 system-ui,-apple-system,sans-serif;color:rgba(255,255,255,0.12);min-height:32px;">select parts</div>
        </div>
        <div id="vl" style="flex:1;overflow-y:auto;padding:8px 0;"></div>
        <div style="padding:12px 16px;border-top:1px solid rgba(255,255,255,0.04);display:flex;flex-direction:column;gap:6px;">
          <button id="vg" style="width:100%;padding:12px;background:rgba(160,176,200,0.08);color:#a0b0c8;border:1px solid rgba(160,176,200,0.12);font:400 12px system-ui;letter-spacing:0.08em;cursor:pointer;transition:all 0.2s;">LAUNCH</button>
          <div style="display:flex;gap:4px;">
            <button id="vu" style="flex:1;padding:8px;background:transparent;color:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.05);font:400 10px system-ui;cursor:pointer;">UNDO</button>
            <button id="vc" style="flex:1;padding:8px;background:transparent;color:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.03);font:400 10px system-ui;cursor:pointer;">CLEAR</button>
          </div>
          <div style="display:flex;gap:4px;">
            <button id="vs" style="flex:1;padding:8px;background:rgba(200,152,56,0.08);color:#c89838;border:1px solid rgba(200,152,56,0.15);font:400 10px system-ui;cursor:pointer;">SAVE</button>
            <button id="vlb" style="flex:1;padding:8px;background:rgba(68,136,204,0.08);color:#88ccff;border:1px solid rgba(68,136,204,0.15);font:400 10px system-ui;cursor:pointer;">LOAD</button>
          </div>
          <button id="vb" style="width:100%;padding:8px;background:transparent;color:rgba(255,255,255,0.1);border:none;font:400 10px system-ui;cursor:pointer;">BACK</button>
        </div>
      </div>
      <div style="flex:1;"></div>`,this.info=this.root.querySelector("#vi"),this.build(),this.root.querySelector("#vg").addEventListener("click",()=>{this.assembly.roots.length?(J_(this.assembly),this.ol(this.assembly)):xe.show("Add parts first!")}),this.root.querySelector("#vu").addEventListener("click",()=>this.undo()),this.root.querySelector("#vc").addEventListener("click",()=>{this.assembly=new _r,this.st=0,this.nm=[],this.rf(),this.up()}),this.root.querySelector("#vs").addEventListener("click",()=>this.showSaveDialog()),this.root.querySelector("#vlb").addEventListener("click",()=>this.showLoadDialog()),this.root.querySelector("#vb").addEventListener("click",()=>this.ob())}scene=new id;camera=new tn(50,innerWidth/innerHeight,.01,1e3);assembly=new _r;rg=new on;root;info;st=0;nm=[];az=0;po=Math.PI/2;dt=5;dr=!1;pr={x:0,y:0};tg=new P(0,me,0);build(){const t=this.root.querySelector("#vl"),e=new Map,n={capsule:"#a0b0c0",tank:"#6090c0",engine:"#c08060",decoupler:"#c06070",parachute:"#60a070",legs:"#8090a0",heatshield:"#b08060",gltf:"#b080a0",fairing:"#a0c0e0",rcs:"#c0a0d0",solar:"#4080d0"};for(const i of pd)e.has(i.kind)||e.set(i.kind,{parts:[],color:n[i.kind]||"#888"}),e.get(i.kind).parts.push(i);for(const[i,s]of e){const r=document.createElement("div");r.textContent=i.toUpperCase(),r.style.cssText="font:400 7px/1 system-ui,-apple-system,sans-serif;color:rgba(255,255,255,0.12);letter-spacing:0.15em;padding:10px 16px 4px;",t.appendChild(r);for(const a of s.parts){const l=document.createElement("button"),c=a.kind==="engine"?`${(a.thrust/1e3).toFixed(0)}kN · Isp ${a.isp}`:a.kind==="tank"?`${(a.fuelCapacity/1e3).toFixed(0)}t`:a.kind==="capsule"?`${(a.mass/1e3).toFixed(1)}t`:a.kind==="rcs"?`${a.thrust}kN`:a.kind==="fairing"?"aero":"";l.innerHTML=`<span style="width:2px;height:12px;background:${s.color};border-radius:1px;display:inline-block;vertical-align:middle;margin-right:8px;opacity:0.6;"></span><span style="vertical-align:middle;">${a.name}</span><span style="float:right;color:rgba(255,255,255,0.12);font-size:9px;margin-top:1px;">${c}</span>`,l.style.cssText="display:block;width:100%;padding:7px 16px;background:transparent;color:rgba(255,255,255,0.35);border:none;font:400 11px system-ui;cursor:pointer;text-align:left;transition:all 0.15s;",l.addEventListener("mouseenter",()=>{l.style.background="rgba(255,255,255,0.02)",l.style.color="rgba(255,255,255,0.7)"}),l.addEventListener("mouseleave",()=>{l.style.background="transparent",l.style.color="rgba(255,255,255,0.35)"}),l.addEventListener("click",()=>this.add(a)),t.appendChild(l)}}}add(t){const e=uh[t.size]||.6,n=this.st+e/2;this.assembly.addRoot({part:t,position:[0,n*me,0],rotation:0,children:[]}),this.st+=e,this.nm.push(t.name),this.rf(),this.up()}undo(){if(!this.assembly.roots.length)return;const t=this.assembly.roots.pop();this.st-=uh[t.part.size]||.6,this.nm.pop(),this.rf(),this.up()}up(){if(!this.nm.length){this.info.innerHTML='<span style="color:rgba(255,255,255,0.08);">select parts</span>';return}const t=this.assembly.roots.reduce((n,i)=>n+i.part.mass,0),e=this.assembly.roots.reduce((n,i)=>n+(i.part.fuelCapacity||0),0);this.info.innerHTML=this.nm.map((n,i)=>`<span style="color:rgba(255,255,255,0.2);">${n}</span>`).join(' <span style="color:rgba(255,255,255,0.05);">&rarr;</span> ')+`<div style="margin-top:6px;font:400 8px system-ui;color:rgba(255,255,255,0.08);">${this.nm.length}p &middot; ${(t/1e3).toFixed(1)}t${e?" &middot; "+(e/1e3).toFixed(0)+"t fuel":""}</div>`}async rf(){for(;this.rg.children.length;)this.rg.remove(this.rg.children[0]);if(!this.assembly.roots.length)return;if(this.assembly.roots.some(e=>e.part.kind==="gltf"&&e.part.gltfUrl&&!xi.has(e.part.gltfUrl))){const{loadGLTF:e}=await Th(async()=>{const{loadGLTF:n}=await Promise.resolve().then(()=>Sd);return{loadGLTF:n}},void 0);for(const n of this.assembly.roots)n.part.kind==="gltf"&&n.part.gltfUrl&&!xi.has(n.part.gltfUrl)&&await e(n.part.gltfUrl,n.part.gltfScale??1)}this.rg.add(this.assembly.toMesh())}cam(){const t=this.dt*Math.sin(this.po)*Math.cos(this.az),e=this.dt*Math.cos(this.po),n=this.dt*Math.sin(this.po)*Math.sin(this.az);this.camera.position.set(this.tg.x+t,this.tg.y+e,this.tg.z+n),this.camera.lookAt(this.tg)}mount(){document.body.appendChild(this.root)}unmount(){this.root.remove()}showSaveDialog(){if(!this.assembly.roots.length){xe.show("Nothing to save — build first!");return}const t=this.makeOverlay(),e=document.createElement("div");e.className="guide-card",e.style.cssText="max-width:380px;padding:24px;font-family:system-ui,sans-serif;color:#ddd;background:#0c1020;border:1px solid rgba(200,152,56,0.2);border-radius:8px;",e.innerHTML=`
      <div style="color:#c89838;font-size:14px;letter-spacing:0.1em;margin-bottom:12px;">SAVE ASSEMBLY</div>
      <input id="save-name" placeholder="rocket name" style="width:100%;padding:10px;background:#06080f;border:1px solid rgba(255,255,255,0.08);border-radius:4px;color:#fff;font:400 13px monospace;box-sizing:border-box;margin-bottom:12px;" />
      <div style="display:flex;gap:8px;">
        <button id="save-ok" class="btn btn--primary" style="flex:1;padding:10px;font-size:12px;">SAVE</button>
        <button id="save-cancel" class="btn btn--ghost" style="flex:1;padding:10px;font-size:12px;">CANCEL</button>
      </div>`,t.appendChild(e);const n=e.querySelector("#save-name");n.focus();const i=()=>t.remove();e.querySelector("#save-cancel").addEventListener("click",i);const s=()=>{const r=n.value.trim()||`Rocket ${new Date().toLocaleDateString()}`;wd(r,this.assembly),xe.show(`Saved: "${r}"`),i()};e.querySelector("#save-ok").addEventListener("click",s),n.addEventListener("keydown",r=>{r.key==="Enter"&&s(),r.key==="Escape"&&i()})}showLoadDialog(){const t=j_().filter(s=>s!=="ellipse_assembly_last"),e=this.makeOverlay(),n=document.createElement("div");n.className="guide-card",n.style.cssText="max-width:380px;max-height:60vh;padding:24px;font-family:system-ui,sans-serif;color:#ddd;background:#0c1020;border:1px solid rgba(68,136,204,0.2);border-radius:8px;display:flex;flex-direction:column;",n.innerHTML=`
      <div style="color:#88ccff;font-size:14px;letter-spacing:0.1em;margin-bottom:12px;">LOAD ASSEMBLY</div>
      <div id="load-list" style="flex:1;overflow-y:auto;margin-bottom:12px;"></div>
      <button id="load-cancel" class="btn btn--ghost" style="padding:10px;font-size:12px;">CANCEL</button>`,e.appendChild(n);const i=n.querySelector("#load-list");if(t.length===0)i.innerHTML='<div style="color:#666;font-size:12px;text-align:center;padding:20px;">No saved rockets yet</div>';else for(const s of t){const r=document.createElement("div");r.style.cssText="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:4px;margin-bottom:4px;",r.innerHTML=`<span style="font-size:12px;color:#ddd;">${s}</span>`;const a=document.createElement("div");a.style.cssText="display:flex;gap:4px;";const l=document.createElement("button");l.textContent="LOAD",l.style.cssText="padding:4px 10px;background:rgba(68,136,204,0.15);color:#88ccff;border:1px solid rgba(68,136,204,0.3);border-radius:3px;font:600 10px system-ui;cursor:pointer;",l.addEventListener("click",()=>{const u=Ad(s);u?(this.assembly=u,this.st=0,this.nm=u.roots.map(h=>h.part.name),this.rf(),this.up(),xe.show(`Loaded: "${s}"`),e.remove()):xe.show("Failed to load")});const c=document.createElement("button");c.textContent="✕",c.style.cssText="padding:4px 8px;background:rgba(255,68,68,0.1);color:#ff6666;border:1px solid rgba(255,68,68,0.2);border-radius:3px;font:600 10px system-ui;cursor:pointer;",c.addEventListener("click",()=>{Z_(s),r.remove(),xe.show(`Deleted: "${s}"`)}),a.appendChild(l),a.appendChild(c),r.appendChild(a),i.appendChild(r)}n.querySelector("#load-cancel").addEventListener("click",()=>e.remove())}makeOverlay(){const t=document.createElement("div");return t.className="guide-overlay",t.style.cssText="position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:rgba(6,8,20,0.8);",t.addEventListener("click",e=>{e.target===t&&t.remove()}),document.body.appendChild(t),t}}class fl{name;mass;position;velocity;constructor(t,e,n,i){this.name=t,this.mass=e,this.position=[...n],this.velocity=[...i]}applyForce(t,e){const n=t[0]/this.mass,i=t[1]/this.mass,s=t[2]/this.mass;this.velocity[0]+=n*e,this.velocity[1]+=i*e,this.velocity[2]+=s*e,this.position[0]+=this.velocity[0]*e,this.position[1]+=this.velocity[1]*e,this.position[2]+=this.velocity[2]*e}kineticEnergy(){const t=this.velocity[0]**2+this.velocity[1]**2+this.velocity[2]**2;return .5*this.mass*t}}class nx{rocket;system;position;velocity;throttle=0;constructor(t,e,n,i){this.rocket=t,this.system=e,this.position=[...n],this.velocity=[...i]}consumeFuel(t,e){this.rocket.consumeFuel(t,e)}}const vs=pn*mn,xa=.5,va=500,Ko=25,$o=3,fh=2,jo=7,Zo=0,Jo=Math.PI/2.5;class ix{camera;dist=jo;targetDist=jo;azimuth=Zo;targetAzimuth=Zo;polar=Jo;targetPolar=Jo;isDragging=!1;prevMouse={x:0,y:0};canvas=null;smoothPos=new P;initialized=!1;orbitKeys={left:!1,right:!1,up:!1,down:!1};zoomKeys={in:!1,out:!1};inertiaAzimuth=0;inertiaPolar=0;constructor(t){this.camera=t,this.setupKeyboard()}setupKeyboard(){window.addEventListener("keydown",t=>{if(t.shiftKey)switch(t.key){case"ArrowLeft":this.orbitKeys.left=!0,t.preventDefault();break;case"ArrowRight":this.orbitKeys.right=!0,t.preventDefault();break;case"ArrowUp":this.orbitKeys.up=!0,t.preventDefault();break;case"ArrowDown":this.orbitKeys.down=!0,t.preventDefault();break}(t.key==="z"||t.key==="Z")&&(this.zoomKeys.in=!0),(t.key==="x"||t.key==="X")&&(this.zoomKeys.out=!0)}),window.addEventListener("keyup",t=>{switch(t.key){case"ArrowLeft":this.orbitKeys.left=!1;break;case"ArrowRight":this.orbitKeys.right=!1;break;case"ArrowUp":this.orbitKeys.up=!1;break;case"ArrowDown":this.orbitKeys.down=!1;break;case"z":case"Z":this.zoomKeys.in=!1;break;case"x":case"X":this.zoomKeys.out=!1;break}})}initialiseAt(t,e,n,i){const s=t.position[0]*vs+(i?.x??0),r=t.position[1]*vs+(i?.y??0),a=t.position[2]*vs+(i?.z??0),l=new P(s,r,a),c=this.targetDist*Math.sin(this.polar)*Math.cos(this.azimuth),u=this.targetDist*Math.cos(this.polar),h=this.targetDist*Math.sin(this.polar)*Math.sin(this.azimuth);this.camera.position.set(s+c,r+u,a+h),this.camera.up.set(0,1,0),this.camera.lookAt(l)}setAzimuth(t){this.azimuth=t,this.targetAzimuth=t}setPolar(t){this.polar=t,this.targetPolar=t}zoom(t){this.targetDist*=t,this.targetDist=Math.max(xa,Math.min(va,this.targetDist))}enableOrbit(t){this.canvas=t,t.addEventListener("mousedown",e=>{e.button===0&&(this.isDragging=!0,this.prevMouse={x:e.clientX,y:e.clientY},this.inertiaAzimuth=0,this.inertiaPolar=0)}),window.addEventListener("mousemove",e=>{if(!this.isDragging)return;const n=e.clientX-this.prevMouse.x,i=e.clientY-this.prevMouse.y;this.inertiaAzimuth=-n*.005,this.inertiaPolar=i*.005,this.targetAzimuth+=this.inertiaAzimuth,this.targetPolar=Math.max(.05,Math.min(Math.PI-.05,this.targetPolar+this.inertiaPolar)),this.prevMouse={x:e.clientX,y:e.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.targetDist*=e.deltaY>0?1.1:.9,this.targetDist=Math.max(xa,Math.min(va,this.targetDist))},{passive:!1})}follow(t,e,n,i=!1,s){const r=t.position[0]*vs+(s?.x??0),a=t.position[1]*vs+(s?.y??0),l=t.position[2]*vs+(s?.z??0),c=new P(r,a,l);this.orbitKeys.left&&(this.targetAzimuth+=e*$o),this.orbitKeys.right&&(this.targetAzimuth-=e*$o),this.orbitKeys.up&&(this.targetPolar=Math.max(.05,this.targetPolar-e*$o*.5)),this.orbitKeys.down&&(this.targetPolar=Math.min(Math.PI-.05,this.targetPolar+e*$o*.5)),this.zoomKeys.in&&(this.targetDist=Math.max(xa,this.targetDist*(1-e*fh))),this.zoomKeys.out&&(this.targetDist=Math.min(va,this.targetDist*(1+e*fh))),this.isDragging||(this.targetAzimuth+=this.inertiaAzimuth*e*2,this.targetPolar+=this.inertiaPolar*e*2,this.inertiaAzimuth*=Math.exp(-3*e),this.inertiaPolar*=Math.exp(-3*e)),this.dist+=(this.targetDist-this.dist)*Math.min(1,Ko*e),this.azimuth+=(this.targetAzimuth-this.azimuth)*Math.min(1,Ko*e*.5),this.polar+=(this.targetPolar-this.polar)*Math.min(1,Ko*e*.5);const u=this.dist*Math.sin(this.polar)*Math.cos(this.azimuth),h=this.dist*Math.cos(this.polar),d=this.dist*Math.sin(this.polar)*Math.sin(this.azimuth),f=new P(r+u,a+h,l+d),g=new P(0,1,0);if(this.initialized||(this.smoothPos.copy(f),this.initialized=!0),i)this.smoothPos.copy(f);else{const m=Math.min(1,Ko*e);this.smoothPos.lerp(f,m)}this.camera.position.copy(this.smoothPos);const y=Math.abs(this.polar)<.1?new P(0,0,1):Math.abs(this.polar-Math.PI)<.1?new P(0,0,-1):g;this.camera.up.copy(y),this.camera.lookAt(c)}reset(){this.targetDist=jo,this.dist=jo,this.targetAzimuth=Zo,this.azimuth=Zo,this.targetPolar=Jo,this.polar=Jo}dispose(){this.canvas=null}}class sx{container;active=!1;keys=new Set;stagePressed=!1;pauseToggle=!1;visible=!1;constructor(){this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,e.appendChild(n);let i=null;const s={x:0,y:0},r={x:0,y:0},a=(E,F)=>{const k=e.getBoundingClientRect();s.x=k.left+k.width/2,s.y=k.top+k.height/2,r.x=E,r.y=F,this.updateStick(n,s,r)},l=(E,F)=>{r.x=E,r.y=F,this.updateStick(n,s,r);const k=(E-s.x)/60,q=(F-s.y)/60,L=Math.max(-1,Math.min(1,k)),G=Math.max(-1,Math.min(1,q));G>.3?(this.keys.add("touch-up"),this.keys.delete("touch-down")):G<-.3?(this.keys.add("touch-down"),this.keys.delete("touch-up")):(this.keys.delete("touch-up"),this.keys.delete("touch-down")),L>.3?(this.keys.add("touch-right"),this.keys.delete("touch-left")):L<-.3?(this.keys.add("touch-left"),this.keys.delete("touch-right")):(this.keys.delete("touch-left"),this.keys.delete("touch-right"))},c=()=>{i=null,n.style.transform="translate(-50%, -50%)",this.keys.delete("touch-up"),this.keys.delete("touch-down"),this.keys.delete("touch-left"),this.keys.delete("touch-right")};e.addEventListener("touchstart",E=>{if(E.preventDefault(),i!==null)return;const F=E.changedTouches[0];i=F.identifier,a(F.clientX,F.clientY)},{passive:!1}),e.addEventListener("touchmove",E=>{E.preventDefault();for(let F=0;F<E.changedTouches.length;F++)E.changedTouches[F].identifier===i&&l(E.changedTouches[F].clientX,E.changedTouches[F].clientY)},{passive:!1}),e.addEventListener("touchend",E=>{for(let F=0;F<E.changedTouches.length;F++)E.changedTouches[F].identifier===i&&c()}),e.addEventListener("touchcancel",c),t.appendChild(e);const u=document.createElement("div");u.style.cssText=`
      position: absolute; bottom: 20px; right: 20px; display: flex;
      flex-direction: column; gap: 8px; align-items: flex-end;
    `;const h=(E,F=70,k=50)=>{const q=document.createElement("div");q.style.cssText="pointer-events: auto; position: relative;";const L=document.createElement("button");return L.textContent=E,L.style.cssText=`
        width: ${F}px; height: ${k}px; border-radius: 12px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: white; font: 600 14px/1 monospace; cursor: pointer;
        touch-action: none; user-select: none;
      `,q.appendChild(L),[L,q]},[d,f]=h("THR+",70,44),[g,y]=h("THR-",70,44),[m,p]=h("STAGE",70,44),[_,M]=h("SAS",60,44),[S,R]=h("CHUTE",60,44);this._sasAction=null,this._chuteAction=null;const w=(E,F)=>{const k=()=>{this.keys.add(F),E.style.background="rgba(255,255,255,0.3)"},q=()=>{this.keys.delete(F),E.style.background="rgba(255,255,255,0.1)"};E.addEventListener("touchstart",L=>{L.preventDefault(),k()},{passive:!1}),E.addEventListener("touchend",L=>{L.preventDefault(),q()},{passive:!1}),E.addEventListener("touchcancel",q),E.addEventListener("mousedown",k),E.addEventListener("mouseup",q),E.addEventListener("mouseleave",q)};w(d,"w"),w(g,"s");const T=(E,F)=>{const k=()=>{E.style.background="rgba(255,255,255,0.3)",setTimeout(()=>E.style.background="rgba(255,255,255,0.1)",120),F()};E.addEventListener("touchstart",q=>{q.preventDefault(),k()},{passive:!1}),E.addEventListener("mousedown",k)};T(_,()=>{this._sasAction&&this._sasAction()}),T(S,()=>{this._chuteAction&&this._chuteAction()}),m.addEventListener("touchstart",E=>{E.preventDefault(),this.stagePressed=!0},{passive:!1}),m.addEventListener("mousedown",()=>{this.stagePressed=!0});const O=document.createElement("div");O.style.cssText="display:flex; gap:8px;",O.appendChild(f),O.appendChild(p),u.appendChild(O);const v=document.createElement("div");v.style.cssText="display:flex; gap:8px;",v.appendChild(y),v.appendChild(M),v.appendChild(R),u.appendChild(v),t.appendChild(u)}_sasAction=null;_chuteAction=null;onSasAction(t){this._sasAction=t}onChuteAction(t){this._chuteAction=t}updateStick(t,e,n){const i=n.x-e.x,s=n.y-e.y,r=60,a=Math.sqrt(i*i+s*s),l=Math.min(a,r),c=Math.atan2(s,i),u=Math.cos(c)*l,h=Math.sin(c)*l;t.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${h}px))`}show(){this.visible||(this.visible=!0,this.container.style.display="block")}hide(){this.visible=!1,this.container.style.display="none"}isVisible(){return this.visible}getPitch(){let t=0;return this.keys.has("touch-up")&&(t=1),this.keys.has("touch-down")&&(t=-1),t}getYaw(){let t=0;return this.keys.has("touch-right")&&(t=1),this.keys.has("touch-left")&&(t=-1),t}getRoll(){let t=0;return this.keys.has("a")&&(t=1),this.keys.has("d")&&(t=-1),t}getThrottleUp(){return this.keys.has("w")}getThrottleDown(){return this.keys.has("s")}getStageRequested(){const t=this.stagePressed;return this.stagePressed=!1,t}dispose(){document.body.removeChild(this.container)}}class ox{keys=new Set;stagePressed=!1;pauseToggle=!1;state;touch=null;_onKeyDown;_onKeyUp;constructor(t){this.state=t,this._onKeyDown=e=>{e.repeat||(this.keys.add(e.key.toLowerCase()),e.key===" "&&(this.stagePressed=!0),e.key==="Escape"&&(this.pauseToggle=!0),["w","s","a","d","arrowup","arrowdown"," "].includes(e.key.toLowerCase())&&e.preventDefault())},this._onKeyUp=e=>{this.keys.delete(e.key.toLowerCase())},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}enableTouch(){this.touch||(this.touch=new sx),this.touch.show()}disableTouch(){this.touch?.hide()}update(t){const e=this.touch?.getThrottleUp()||this.keys.has("arrowup"),n=this.touch?.getThrottleDown()||this.keys.has("arrowdown");e&&(this.state.throttle=Math.min(1,this.state.throttle+t*.5)),n&&(this.state.throttle=Math.max(0,this.state.throttle-t*.3))}getPitch(){let t=0;return(this.keys.has("w")||this.touch?.getPitch()===1)&&(t=1),(this.keys.has("s")||this.touch?.getPitch()===-1)&&(t=-1),t}getYaw(){let t=0;return(this.keys.has("a")||this.touch?.getYaw()===1)&&(t=1),(this.keys.has("d")||this.touch?.getYaw()===-1)&&(t=-1),t}getRoll(){return 0}getZoomIn(){return this.keys.has("z")}getZoomOut(){return this.keys.has("x")}getStageRequested(){const t=this.stagePressed||!!this.touch?.getStageRequested();return this.stagePressed=!1,t}consumePauseToggle(){const t=this.pauseToggle;return this.pauseToggle=!1,t}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.touch?.dispose(),this.touch=null}}class rx{root;speedVal;fuelVal;vsVal;altVal;massVal;heatFill;heatPct;throttleFill;throttlePct;warpLabel;_fuelRKg;_fuelRBar;pauseOverlay;navballCanvas;navballCtx;camModeEl;twrVal;twrFill;sasModeEl;orbitAp;orbitPe;orbitTta;orbitEcc;orbitPanel;onAction=null;constructor(){this.root=document.createElement("div"),this.root.style.cssText="position:fixed;inset:0;z-index:100;pointer-events:none;",this.pauseOverlay=document.createElement("div"),this.pauseOverlay.style.cssText="position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;opacity:0;transition:opacity 220ms ease-out;",this.pauseOverlay.innerHTML=`
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
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px;">
        <span style="color:rgba(244,245,242,0.5);">SAS</span>
        <span class="sas-mode" style="color:#8888cc;font-size:10px;">OFF</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:2px;">
        <span style="color:rgba(244,245,242,0.5);">WARP</span>
        <span class="warp-val" style="color:#c89838;font-size:10px;">x1</span>
      </div>
    `,this.root.appendChild(e),this.speedVal=e.querySelector(".speed-val"),this.fuelVal=e.querySelector(".fuel-val"),this.vsVal=e.querySelector(".vs-val"),this.altVal=e.querySelector(".alt-val"),this.massVal=e.querySelector(".mass-val"),this.heatFill=e.querySelector(".heat-fill"),this.heatPct=e.querySelector(".heat-pct"),this.throttleFill=e.querySelector(".throt-fill"),this.throttlePct=e.querySelector(".throt-pct"),this.warpLabel=e.querySelector(".warp-val"),this.twrVal=e.querySelector(".twr-val"),this.twrFill=e.querySelector(".twr-fill"),this.sasModeEl=e.querySelector(".sas-mode"),e.addEventListener("click",a=>{const l=a.target.closest("[data-action]");l&&this.onAction&&this.onAction(l.dataset.action)}),this.camModeEl=document.createElement("div"),this.camModeEl.style.cssText="position:fixed;bottom:20px;left:20px;z-index:100;color:rgba(200,152,56,0.5);font-size:9px;font-family:monospace;pointer-events:none;",this.root.appendChild(this.camModeEl);const n=document.createElement("div");n.classList.add("hud-panel-in-right"),n.style.cssText="position:fixed;top:96px;right:16px;z-index:100;pointer-events:none;font-family:monospace;font-size:11px;background:rgba(8,10,24,0.8);border:1px solid rgba(68,136,204,0.25);border-radius:6px;padding:8px 12px;color:#88ccff;min-width:140px;",n.innerHTML=`
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
    `,this.root.appendChild(n),this.orbitPanel=n,this.orbitAp=n.querySelector(".orbit-ap"),this.orbitPe=n.querySelector(".orbit-pe"),this.orbitTta=n.querySelector(".orbit-tta"),this.orbitEcc=n.querySelector(".orbit-ecc");const i=document.createElement("div");i.classList.add("hud-fade-up"),i.style.cssText="position:fixed;bottom:20px;right:20px;z-index:100;pointer-events:none;";const s=document.createElement("canvas");s.width=150,s.height=150,s.style.cssText="width:150px;height:150px;border-radius:75px;opacity:0.85;",i.appendChild(s),this.root.appendChild(i),this.navballCanvas=s,this.navballCtx=s.getContext("2d");const r=document.createElement("div");r.classList.add("hud-panel-in-right"),r.style.cssText="position:fixed;top:16px;right:16px;z-index:100;pointer-events:none;font-family:monospace;font-size:12px;background:rgba(8,10,24,0.8);border:1px solid rgba(200,152,56,0.2);border-radius:6px;padding:8px 12px;color:#ffaa44;",r.innerHTML='<span style="color:rgba(244,245,242,0.5);">FUEL</span> <span class="fuel-r-kg">4500 kg</span><br><div style="width:80px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;margin-top:4px;"><div class="fuel-r-bar" style="width:100%;height:100%;background:#ffaa44;border-radius:3px;"></div></div>',this.root.appendChild(r),this._fuelRKg=r.querySelector(".fuel-r-kg"),this._fuelRBar=r.querySelector(".fuel-r-bar"),t.appendChild(this.root)}setVisible(t){this.root.style.display=t?"":"none"}setMass(t){this.massVal&&(this.massVal.textContent=`${(t/1e3).toFixed(1)}`)}setFreeCamera(t){this.camModeEl&&(this.camModeEl.textContent=t?"FREE":"")}setWarp(t){this.warpLabel&&(this.warpLabel.textContent=`x${t}`,this.warpLabel.classList.remove("warp-pulse"),this.warpLabel.offsetWidth,this.warpLabel.classList.add("warp-pulse"))}setTwr(t){if(!this.twrVal)return;this.twrVal.textContent=t.toFixed(2),this.twrVal.style.color=t>=1?"#44ff88":t>=.5?"#ffcc44":"#ff6644";const e=Math.min(100,t/2*100);this.twrFill.style.width=`${e}%`,this.twrFill.style.background=t>=1?"#44ff88":t>=.5?"#ffcc44":"#ff6644",t>0&&t<1?this.twrVal.classList.add("twr-warn"):this.twrVal.classList.remove("twr-warn")}setSasMode(t){if(!this.sasModeEl)return;const e={off:"OFF",hold:"HOLD",prograde:"PRO",retrograde:"RET"};this.sasModeEl.textContent=e[t],this.sasModeEl.style.color=t==="off"?"#666":t==="prograde"?"#44ff88":t==="retrograde"?"#ff8844":"#8888cc",t!=="off"?this.sasModeEl.classList.add("sas-active"):this.sasModeEl.classList.remove("sas-active")}setOrbit(t){if(!this.orbitPanel)return;if(!t.bound||t.apoapsis===void 0||t.periapsis===void 0){this.orbitAp.textContent="—",this.orbitPe.textContent="—",this.orbitTta.textContent="—",this.orbitEcc.textContent="suborbital",this.orbitPanel.style.borderColor="rgba(221,170,68,0.25)";return}const e=i=>{const s=i/1e3;return s>1e3?`${(s/1e3).toFixed(1)} Mm`:`${s.toFixed(0)} km`},n=i=>i===void 0||!isFinite(i)?"—":i>86400?`${(i/86400).toFixed(1)} d`:i>3600?`${(i/3600).toFixed(1)} h`:i>60?`${(i/60).toFixed(0)} min`:`${i.toFixed(0)} s`;this.orbitAp.textContent=e(t.apoapsis),this.orbitPe.textContent=e(t.periapsis),this.orbitTta.textContent=n(t.timeToAp),this.orbitEcc.textContent=t.eccentricity!==void 0?`e=${t.eccentricity.toFixed(2)}`:"—",this.orbitPanel.style.borderColor="rgba(68,136,204,0.4)"}setPaused(t){t?(this.pauseOverlay.style.display="flex",requestAnimationFrame(()=>{this.pauseOverlay.style.opacity="1"})):(this.pauseOverlay.style.opacity="0",setTimeout(()=>{t||(this.pauseOverlay.style.display="none")},230))}setThrottle(t){const e=Math.round(t*100);this.throttlePct.textContent=`${e}%`,this.throttleFill.style.width=`${e}%`,this.throttleFill.style.background=e>80?"#ff6644":"#4488ff"}setNavballData(t,e,n,i,s){const r=this.navballCtx,a=140,l=140,c=70,u=70,h=66;r.clearRect(0,0,a,l),r.beginPath(),r.arc(c,u,h+2,0,Math.PI*2),r.fillStyle="#060810",r.fill();const d=[t[0],t[1],t[2]],f=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])||1;d[0]/=f,d[1]/=f,d[2]/=f;const g=d[0]*n[0]+d[1]*n[1]+d[2]*n[2];let y=[n[0]-d[0]*g,n[1]-d[1]*g,n[2]-d[2]*g];const m=Math.sqrt(y[0]*y[0]+y[1]*y[1]+y[2]*y[2])||1;y[0]/=m,y[1]/=m,y[2]/=m;const p=[d[1]*y[2]-d[2]*y[1],d[2]*y[0]-d[0]*y[2],d[0]*y[1]-d[1]*y[0]],_=T=>{const O=Math.sqrt(T[0]*T[0]+T[1]*T[1]+T[2]*T[2])||1,v=T[0]/O,E=T[1]/O,F=T[2]/O,k=v*p[0]+E*p[1]+F*p[2],q=v*y[0]+E*y[1]+F*y[2],L=v*d[0]+E*d[1]+F*d[2],G=L>0,W=L>0?h/(1+L):h*.5;return{x:c+k*W,y:u-q*W,inFront:G,lx:k,ly:q,lz:L}},M=h*h;r.save(),r.beginPath(),r.arc(c,u,h,0,Math.PI*2),r.clip(),_(n);const S=_([-n[0],-n[1],-n[2]]),R=r.createRadialGradient(c,u,0,c,u,h);if(R.addColorStop(0,"#0a0a22"),R.addColorStop(.4,"#1a2a4a"),R.addColorStop(1,"#224488"),r.fillStyle=R,r.fillRect(c-h,u-h,h*2,h*2),S.inFront){const T=r.createRadialGradient(S.x,S.y,0,S.x,S.y,h*1.2);T.addColorStop(0,"#6a4a2a"),T.addColorStop(.3,"#5a3a1a"),T.addColorStop(.7,"#3a2a12"),T.addColorStop(1,"rgba(10,10,40,0)"),r.fillStyle=T,r.fillRect(c-h,u-h,h*2,h*2)}for(let T=-80;T<=80;T+=10){const O=T*Math.PI/180,v=Math.cos(O),E=Math.sin(O),F=[d[0]*v+y[0]*E,d[1]*v+y[1]*E,d[2]*v+y[2]*E],k=_(F);if(!k.inFront||(k.x-c)*(k.x-c)+(k.y-u)*(k.y-u)>M)continue;const q=T===0?26:T%20===0?18:10;r.beginPath(),r.moveTo(c-q*(1-Math.abs(E)*.3),k.y),r.lineTo(c+q*(1-Math.abs(E)*.3),k.y),r.strokeStyle=T===0?"#FFCC44":"rgba(255,255,255,0.2)",r.lineWidth=T===0?1.5:.6,r.stroke(),T%20===0&&(r.fillStyle="rgba(255,255,255,0.35)",r.font="7px sans-serif",r.fillText(`${Math.abs(T)}`,c+q+3,k.y+2))}for(let T=0;T<360;T+=45){const O=T*Math.PI/180,v=p[0]*Math.cos(O)+y[0]*Math.sin(O),E=p[1]*Math.cos(O)+y[1]*Math.sin(O),F=p[2]*Math.cos(O)+y[2]*Math.sin(O),k=[v-d[0]*g,E-d[1]*g,F-d[2]*g],q=Math.sqrt(k[0]*k[0]+k[1]*k[1]+k[2]*k[2])||1,L=_([k[0]/q,k[1]/q,k[2]/q]);L.inFront&&(r.fillStyle="rgba(255,255,255,0.2)",r.font="6px sans-serif",r.textAlign="center",r.fillText(`${T}°`,L.x,L.y+2),r.textAlign="start")}const w=(T,O)=>{const v=_(T);v.inFront&&O(v)};w(e,T=>{r.beginPath(),r.arc(T.x,T.y,4,0,Math.PI*2),r.fillStyle="#44FF44",r.fill(),r.beginPath(),r.arc(T.x,T.y,7,0,Math.PI*2),r.strokeStyle="#44FF44",r.lineWidth=1.5,r.stroke()}),w([-e[0],-e[1],-e[2]],T=>{r.beginPath(),r.arc(T.x,T.y,4,0,Math.PI*2),r.fillStyle="rgba(68,255,68,0.5)",r.fill(),r.beginPath(),r.arc(T.x,T.y,7,0,Math.PI*2),r.strokeStyle="#44FF44",r.lineWidth=1,r.stroke(),r.beginPath(),r.moveTo(T.x-3,T.y-3),r.lineTo(T.x+3,T.y+3),r.moveTo(T.x+3,T.y-3),r.lineTo(T.x-3,T.y+3),r.strokeStyle="#44FF44",r.lineWidth=1,r.stroke()}),w(n,T=>{r.beginPath(),r.moveTo(T.x,T.y-6),r.lineTo(T.x-4,T.y+3),r.lineTo(T.x+4,T.y+3),r.closePath(),r.fillStyle="#4488FF",r.fill()}),w([-n[0],-n[1],-n[2]],T=>{r.beginPath(),r.moveTo(T.x,T.y+6),r.lineTo(T.x-4,T.y-3),r.lineTo(T.x+4,T.y-3),r.closePath(),r.fillStyle="#CC8844",r.fill()}),r.beginPath(),r.arc(c,u,3,0,Math.PI*2),r.fillStyle="#FFAA44",r.fill(),r.restore(),r.beginPath(),r.arc(c,u,h+1,0,Math.PI*2),r.strokeStyle="#334466",r.lineWidth=2,r.stroke();for(let T=0;T<360;T+=45){const O=T*Math.PI/180;r.beginPath(),r.moveTo(c+Math.cos(O)*(h-7),u+Math.sin(O)*(h-7)),r.lineTo(c+Math.cos(O)*(h+2),u+Math.sin(O)*(h+2)),r.strokeStyle="#4a6a8a",r.lineWidth=1,r.stroke()}}update(t,e,n=0,i=0){const s=Math.sqrt(t.velocity[0]**2+t.velocity[1]**2+t.velocity[2]**2);let r=1/0;for(const g of e.bodies){if(g.mass<=0)continue;const y=t.position[0]-g.position[0],m=t.position[1]-g.position[1],p=t.position[2]-g.position[2],_=Math.sqrt(y*y+m*m+p*p),M=g.getSurfaceRadiusAt?.(t.position)??g.radius??0,S=_-M;S<r&&(r=S)}const a=Math.min(100,n/3e5*100);this.speedVal.textContent=s>1e3?(s/1e3).toFixed(1)+"k":s.toFixed(1),this.speedVal.style.color=s>3e3?"#ff6644":s>1e3?"#ffaa44":"#ddd";const l=r/1e3;this.altVal.textContent=r>1e4?l.toFixed(1)+"k":r.toFixed(0);const c=t.velocity[1];this.vsVal.textContent=c>0?"+"+c.toFixed(0):c.toFixed(0),this.vsVal.style.color=c>0?"#88ff88":c<0?"#ff6644":"#88ccff";const u=t.rocket.totalFuelMass();u>1e3?(this.fuelVal.textContent=(u/1e3).toFixed(1),this.fuelVal.nextElementSibling.textContent="t"):(this.fuelVal.textContent=u.toFixed(0),this.fuelVal.nextElementSibling.textContent="kg");const h=Math.round(i*100);this.throttlePct.textContent=`${h}%`;const d=t.rocket.totalFuelMass(),f=t.rocket.assembly.totalFuelCapacity();this._fuelRKg&&(this._fuelRKg.textContent=d>1e3?`${(d/1e3).toFixed(1)} t`:`${d.toFixed(0)} kg`),this._fuelRBar&&(this._fuelRBar.style.width=`${f>0?d/f*100:0}%`),this.throttleFill.style.width=`${h}%`,this.throttleFill.style.background=h>80?"#ff4444":h>40?"#ffaa00":"#4488ff",this.heatPct.textContent=`${a.toFixed(0)}%`,this.heatPct.style.color=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44",this.heatFill.style.width=`${a}%`,this.heatFill.style.background=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44"}unmount(){this.root.remove(),this.pauseOverlay.remove()}}function ax(o,t,e){if(o.throttle<=0)return;const n=lx(o.rocket.assembly.roots);if(n.length===0)return;let i=0,s=0;for(const h of n){const d=h.thrust*1e3*o.throttle;i+=d,s+=d/(h.isp*T_)}const r=e??[0,1,0],a=o.rocket.totalMass(),l=i*r[0]/a,c=i*r[1]/a,u=i*r[2]/a;o.velocity[0]+=l*t,o.velocity[1]+=c*t,o.velocity[2]+=u*t,o.consumeFuel(s,t)}function cr(o){for(const t of o){if(t.part.thrust&&t.part.isp)return{thrust:t.part.thrust,isp:t.part.isp};if(t.children?.length){const e=cr(t.children);if(e)return e}}return null}function lx(o){const t=[],e=n=>{for(const i of n)i.part.thrust&&i.part.isp&&t.push({thrust:i.part.thrust,isp:i.part.isp}),i.children?.length&&e(i.children)};return e(o),t}class cx{ctx=null;engineOsc=null;engineGain=null;engineNoise=null;engineRunning=!1;throttleLevel=0;constructor(){try{this.ctx=new AudioContext}catch{}}ensureCtx(){return this.ctx?(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx):null}startEngine(){if(!this.ensureCtx()||this.engineRunning)return;const t=this.ctx;this.engineRunning=!0,this.engineOsc=t.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=80,this.engineGain=t.createGain(),this.engineGain.gain.value=.02;const e=t.createBuffer(1,t.sampleRate*2,t.sampleRate),n=e.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=(Math.random()*2-1)*.3;this.engineNoise=t.createBufferSource(),this.engineNoise.buffer=e,this.engineNoise.loop=!0;const i=t.createGain();i.gain.value=.01;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=400,this.engineOsc.connect(this.engineGain),this.engineOsc.start(),this.engineNoise.connect(s),s.connect(i);const r=t.createGain();r.gain.value=.4,this.engineGain.connect(r),i.connect(r),r.connect(t.destination)}setThrottle(t){if(this.throttleLevel=t,!this.engineOsc||!this.engineGain)return;const e=60+t*80,n=.01+t*.04;this.engineOsc.frequency.setValueAtTime(e,this.ctx.currentTime+.1),this.engineGain.gain.setValueAtTime(n,this.ctx.currentTime+.05)}stopEngine(){if(this.engineOsc){try{this.engineOsc.stop()}catch{}this.engineOsc=null}if(this.engineNoise){try{this.engineNoise.stop()}catch{}this.engineNoise=null}this.engineGain&&(this.engineGain.disconnect(),this.engineGain=null),this.engineRunning=!1}playStaging(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="square",n.frequency.setValueAtTime(200,e),n.frequency.exponentialRampToValueAtTime(40,e+.3);const i=t.createGain();i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.5),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.5)}playCrash(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(20,e+.8);const i=t.createGain();i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+1.5);const s=t.createBuffer(1,t.sampleRate*1,t.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*(c<r.length*.2?.8:.1*(1-c/r.length));const a=t.createBufferSource();a.buffer=s;const l=t.createGain();l.gain.setValueAtTime(.2,e),l.gain.exponentialRampToValueAtTime(.001,e+1),n.connect(i),a.connect(l),i.connect(t.destination),l.connect(t.destination),n.start(e),n.stop(e+1.5),a.start(e),a.stop(e+1)}playLand(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(300,e),n.frequency.exponentialRampToValueAtTime(60,e+.2);const i=t.createGain();i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.3)}dispose(){this.stopEngine(),this.ctx&&(this.ctx.close(),this.ctx=null)}}function Oe(o,t){const e=t.bodyByName("sun");let n=e,i=0;for(const s of t.bodies){if(s.name==="sun")continue;const r=s;let a=e,l=e.position;if(r.parentBody)a=r.parentBody,l=a.position;else if(s.name==="moon"){const M=t.bodyByName("earth");M&&(a=M,l=M.position)}const c=s.position[0]-o[0],u=s.position[1]-o[1],h=s.position[2]-o[2],d=c*c+u*u+h*h,f=Math.sqrt(d),g=s.position[0]-l[0],y=s.position[1]-l[1],m=s.position[2]-l[2],_=Math.sqrt(g*g+y*y+m*m)*Math.pow(s.mass/a.mass,.4);if(f<_){const M=Gi*s.mass/d;M>i&&(i=M,n=s)}}return n}function to(o,t,e,n,i){const s=Gi*e,r=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]),l=(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])/2-s/r,c=-s/(2*l),u=o[1]*t[2]-o[2]*t[1],h=o[2]*t[0]-o[0]*t[2],d=o[0]*t[1]-o[1]*t[0],f=Math.sqrt(u*u+h*h+d*d),g=(t[1]*d-t[2]*h)/s-o[0]/r,y=(t[2]*u-t[0]*d)/s-o[1]/r,m=(t[0]*h-t[1]*u)/s-o[2]/r,p=Math.sqrt(g*g+y*y+m*m),_=p<1&&c>0,M=_?c*(1+p):1/0,S=_?c*(1-p):r,R=p>1e-8?g/p:1,w=p>1e-8?y/p:0,T=p>1e-8?m/p:0,O=[R,w,T],v=[(h*T-d*w)/(f||1),(d*R-u*T)/(f||1),(u*w-h*R)/(f||1)],E=[],F=_?Math.PI:Math.acos(-1/Math.max(p,1.001))*.98;let k,q;if(_){const L=2*Math.PI*Math.sqrt(c*c*c/s),G=(o[0]*t[0]+o[1]*t[1]+o[2]*t[2])/(r||1),W=(c*(1-p*p)/r-1)/p,$=G*Math.sqrt(c*(1-p*p)/s)/(p||1),j=(p+W)/(1+p*W),K=Math.sqrt(1-p*p)*$/(1+p*W);let Q=Math.atan2(K,j);Q<0&&(Q+=Math.PI*2);const at=(Q-p*K)*L/(2*Math.PI),X=L-at,et=(X+L/2)%L;q=X,k=et}for(let L=0;L<=i;L++){const G=-F+2*F*L/i,W=1+p*Math.cos(G);if(Math.abs(W)<1e-10)continue;const $=c*(1-p*p)/W;if(isNaN($)||!isFinite($)||$<0)continue;const j=$*(Math.cos(G)*O[0]+Math.sin(G)*v[0]),K=$*(Math.cos(G)*O[2]+Math.sin(G)*v[2]);if(Math.sqrt(j*j+K*K)>n*1.5)break;E.push([j,K])}return{points:E,eccentricity:p,apoapsis:M,periapsis:S,bound:_,timeToAp:k,timeToPe:q}}function hx(o,t){const e=o.position[0]-t.position[0],n=o.position[1]-t.position[1],i=o.position[2]-t.position[2],s=e*e+n*n+i*i,r=Math.sqrt(s);if(r===0)return[0,0,0];const a=Gi*o.mass*t.mass/s;return[a*e/r,a*n/r,a*i/r]}function Rd(o,t){let e=0,n=0,i=0;for(const s of t){if(s===o||s.mass<=0)continue;const r=hx(s,o);e+=r[0],n+=r[1],i+=r[2]}return[e,n,i]}const Nn=me/.08*1.5,Fn=900;function dx(){try{const o=document.createElement("canvas");o.width=64,o.height=64;const t=o.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(255,255,240,0.95)"),e.addColorStop(.35,"rgba(255,230,180,0.7)"),e.addColorStop(.55,"rgba(255,180,100,0.35)"),e.addColorStop(.75,"rgba(255,120,50,0.15)"),e.addColorStop(1,"rgba(255,80,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new en(o);return n.needsUpdate=!0,n}catch{return new rl(new Uint8Array([255,255,255,255]),1,1,fn)}}function ux(){try{const o=document.createElement("canvas");o.width=64,o.height=64;const t=o.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,200,100,0.6)"),e.addColorStop(.3,"rgba(255,150,60,0.3)"),e.addColorStop(.6,"rgba(200,80,30,0.1)"),e.addColorStop(1,"rgba(100,30,10,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new en(o);return n.needsUpdate=!0,n}catch{return new rl(new Uint8Array([255,255,255,255]),1,1,fn)}}class fx{particles;outerParticles;positions;velocities;lifetimes;ages;colors;sizes;active;nextIndex;coreTex;outerTex;throttleLevel=1;inVacuum=!1;group;constructor(){this.active=!1,this.nextIndex=0,this.positions=new Float32Array(Fn*3),this.velocities=new Float32Array(Fn*3),this.lifetimes=new Float32Array(Fn),this.ages=new Float32Array(Fn),this.colors=new Float32Array(Fn*3),this.sizes=new Float32Array(Fn),this.ages.fill(1/0),this.coreTex=dx(),this.outerTex=ux(),this.group=new on;const t=new Fe;t.setAttribute("position",new De(this.positions,3)),t.setAttribute("color",new De(this.colors,3)),t.setAttribute("size",new De(this.sizes,1));const e=new ho({size:Nn*.6,map:this.coreTex,vertexColors:!0,sizeAttenuation:!0,blending:dn,depthWrite:!1,transparent:!0,opacity:1});this.particles=new yr(t,e),this.group.add(this.particles);const n=new Fe;n.setAttribute("position",new De(this.positions.slice(),3));const i=new ho({size:Nn*1.5,map:this.outerTex,color:16755302,sizeAttenuation:!0,blending:dn,depthWrite:!1,transparent:!0,opacity:.6});this.outerParticles=new yr(n,i),this.group.add(this.outerParticles)}setThrottle(t){this.throttleLevel=Math.max(.01,t)}setVacuum(t){this.inVacuum=t}start(){this.active=!0}stop(){this.active=!1;for(let t=0;t<Fn;t++)this.ages[t]=this.lifetimes[t],this.positions[t*3]=0,this.positions[t*3+1]=0,this.positions[t*3+2]=0;this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.outerParticles.geometry.attributes.position.needsUpdate=!0}update(t){const e=this.inVacuum?4.5:1;if(this.active){const i=Math.ceil((5+Math.random()*4)*this.throttleLevel);for(let s=0;s<i;s++){const r=this.nextIndex;this.nextIndex=(this.nextIndex+1)%Fn;const a=(.06+Math.random()*.12)*(this.inVacuum?4:1)/Math.max(.2,this.throttleLevel);this.positions[r*3]=(Math.random()-.5)*a*Nn,this.positions[r*3+1]=-(Math.random()*.03)*Nn,this.positions[r*3+2]=(Math.random()-.5)*a*Nn;const l=(5+Math.random()*8)*this.throttleLevel*e;this.velocities[r*3]=(Math.random()-.5)*.4*Nn,this.velocities[r*3+1]=-(l*Nn),this.velocities[r*3+2]=(Math.random()-.5)*.4*Nn,this.lifetimes[r]=(.2+Math.random()*.3)*e,this.ages[r]=0,this.sizes[r]=.5+Math.random()*.5}}for(let i=0;i<Fn;i++){const s=this.ages[i],r=this.lifetimes[i];if(s>=r)continue;const a=s+t;if(this.ages[i]=a,a>=r)continue;const l=a/r,c=i*3;this.positions[c]=(this.positions[c]??0)+(this.velocities[c]??0)*t,this.positions[c+1]=(this.positions[c+1]??0)+(this.velocities[c+1]??0)*t,this.positions[c+2]=(this.positions[c+2]??0)+(this.velocities[c+2]??0)*t;const u=Math.exp(-2*t);this.velocities[c]=(this.velocities[c]??0)*u,this.velocities[c+2]=(this.velocities[c+2]??0)*u,Math.random()<.05&&(this.velocities[c]=(this.velocities[c]??0)+(Math.random()-.5)*.2*Nn,this.velocities[c+2]=(this.velocities[c+2]??0)+(Math.random()-.5)*.2*Nn);let h,d,f;if(l<.15)h=1,d=1,f=1;else if(l<.35){const y=(l-.15)/.2;h=1,d=1-y*.3,f=1-y*.8}else if(l<.6){const y=(l-.35)/.25;h=1,d=.7-y*.3,f=.2-y*.15}else{const y=(l-.6)/.4;h=1-y*.7,d=.4-y*.35,f=.05-y*.04}this.inVacuum&&(h=h*.5+.1,d=d*.3+.1,f=f*.1+.5),this.colors[c]=Math.max(0,h),this.colors[c+1]=Math.max(0,d),this.colors[c+2]=Math.max(0,f);const g=l<.3?.6+l/.3*.4:1-(l-.3)/.7*.8;this.sizes[i]=g*(.5+(this.sizes[i]??.5)*.5)}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.particles.geometry.attributes.size.needsUpdate=!0;const n=this.outerParticles.geometry.attributes.position;for(let i=0;i<Fn;i++){const s=i*3;n.array[s]=this.positions[s]??0,n.array[s+1]=this.positions[s+1]??0,n.array[s+2]=this.positions[s+2]??0}n.needsUpdate=!0}getMesh(){return this.group}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.outerParticles.geometry.dispose(),this.outerParticles.material.dispose(),this.coreTex.dispose(),this.outerTex.dispose()}}const Pi=100,Ms=me*Hi;class px{particles;positions;velocities;lifetimes;ages;active=!1;constructor(){this.positions=new Float32Array(Pi*3),this.velocities=new Float32Array(Pi*3),this.lifetimes=new Float32Array(Pi),this.ages=new Float32Array(Pi),this.ages.fill(1/0);const t=new Fe;t.setAttribute("position",new De(this.positions,3));const e=new ho({size:.3*Ms,color:13421772,transparent:!0,opacity:.5,blending:yi,depthWrite:!1,sizeAttenuation:!0});this.particles=new yr(t,e)}start(){this.active=!0}stop(){this.active=!1}update(t){if(this.active)for(let r=0;r<3;r++){let a=-1,l=-1;for(let c=0;c<Pi;c++)this.ages[c]>=this.lifetimes[c]&&this.ages[c]>l&&(l=this.ages[c],a=c);if(a<0)for(let c=0;c<Pi;c++)this.ages[c]>l&&(l=this.ages[c],a=c);a>=0&&(this.positions[a*3]=(Math.random()-.5)*.1*Ms,this.positions[a*3+1]=0,this.positions[a*3+2]=(Math.random()-.5)*.1*Ms,this.velocities[a*3]=(Math.random()-.5)*.5*Ms,this.velocities[a*3+1]=(.5+Math.random()*1)*Ms,this.velocities[a*3+2]=(Math.random()-.5)*.5*Ms,this.lifetimes[a]=1+Math.random()*1.5,this.ages[a]=0)}const e=this.particles.material;let n=!1;const i=this.velocities,s=this.positions;for(let r=0;r<Pi;r++){if(this.ages[r]>=this.lifetimes[r])continue;n=!0;const a=this.ages[r]+t;if(this.ages[r]=a,a>=this.lifetimes[r])continue;const l=r*3,c=i[l]??0,u=i[l+1]??0,h=i[l+2]??0;s[l]=(s[l]??0)+c*t,s[l+1]=(s[l+1]??0)+u*t,s[l+2]=(s[l+2]??0)+h*t,i[l]=c*.98,i[l+2]=h*.98}e.opacity=this.active?.5:Math.max(0,e.opacity-t*2),this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.visible=n||this.active}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose()}}const Lt=pn*mn;class mx{renderer;sceneMgr;system;achievements;missions;state;rocket;rocketGroup;chase;controls;hud;sound;launched=!1;grounded=!0;groundedDir=null;liftoffFrames=0;engineFlame;groundSmoke;rocketShadow=null;reentryGlow=null;rocketQuat=new un;angularVel=new P;ANGULAR_ACCEL=1.5;ANGULAR_DAMPING=3.5;timeWarp=1;parachuteDeployed=!1;deployedChuteMesh=null;chuteDeployProgress=0;crashed=!1;paused=!1;debris=[];warpLevels=[1,3,5,10,100,1e3,1e5,1e6];warpIndex=0;crashOverlay=null;prevVel=[0,0,0];gearDeployed=!1;gearMeshes=[];missionTime=0;sasMode="off";sasTargetQuat=new un;screenShake=0;heatEnergy=0;MAX_HEAT=9999999999;HEAT_RADIATION_RATE=.999;stageInfo=[];lastReentryIntensity=0;prevMach=0;sonicBoomTriggered=!1;sonicBoomTimer=0;countdownTimer=0;countdownActive=!1;countdownCooldown=0;countdownEl=null;lastRefBody=null;impactMarker=null;maxAlt=0;maxSpeed=0;orbitLine=null;exhaustLight=null;followLight=null;cameraMode="chase";freeCamAzimuth=0;freeCamPolar=Math.PI/2;freeCamDist=4;freeCamKeys={left:!1,right:!1,up:!1,down:!1};freeCamDragging=!1;freeCamPrevMouse={x:0,y:0};hudVisible=!0;lastAltMilestone=0;sonicBoomRing=null;sonicBoomLife=0;reentryGlowMesh=null;rocketBottomY=0;_debugShown=!1;_debugMarker=null;_spawnProtectionTimer=0;_camSnapped=!1;showCountdown(t){this.countdownEl||(this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
        position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);
        font-size:120px;font-weight:bold;color:#ff0;z-index:9999;
        text-shadow:0 0 30px rgba(255,136,0,0.8);
        font-family:system-ui,sans-serif;pointer-events:none;
        transition:opacity 0.2s;
      `,document.body.appendChild(this.countdownEl)),this.countdownEl.textContent=t,this.countdownEl.style.opacity="1",this.countdownEl.classList.remove("countdown-pulse"),this.countdownEl.offsetWidth,t==="LIFTOFF!"?(this.countdownEl.style.color="#FF8844",this.countdownEl.style.fontSize="48px"):(this.countdownEl.style.color="#FFFFFF",this.countdownEl.style.fontSize="72px",this.countdownEl.classList.add("countdown-pulse"))}hideCountdown(){this.countdownEl&&(this.countdownEl.style.opacity="0")}get dragMultiplier(){return this.gearDeployed?2.5:1}onCrashAction=null;constructor(t,e,n,i,s,r){this.renderer=t,this.sceneMgr=e,this.system=n,this.achievements=s,this.missions=r,this.missions.resetFlight(),this.rocket=i;const a=n.bodyByName("earth"),l=a.radius??6371e3,c=28.5*Math.PI/180,u=-80.5*Math.PI/180,h=[Math.cos(c)*Math.cos(u),Math.sin(c),Math.cos(c)*Math.sin(u)],d=Math.sqrt(h[0]*h[0]+h[1]*h[1]+h[2]*h[2]),f=[h[0]/d,h[1]/d,h[2]/d],g=60,y=[a.position[0]+f[0]*l,a.position[1]+f[1]*l,a.position[2]+f[2]*l],m=a.getSurfaceRadiusAt?.(y)??l,p=[a.position[0]+f[0]*(m+g),a.position[1]+f[1]*(m+g),a.position[2]+f[2]*(m+g)];this.state=new nx(i,n,p,[0,0,0]),this.groundedDir=f;const _=new P(p[0]-a.position[0],p[1]-a.position[1],p[2]-a.position[2]).normalize();this.rocketQuat.setFromUnitVectors(new P(0,1,0),_),this.rocketGroup=i.assembly.toMesh(),this.rocketGroup.scale.setScalar(Hi),this.rocketGroup.position.set(this.state.position[0]*Lt,this.state.position[1]*Lt,this.state.position[2]*Lt),e.scene.add(this.rocketGroup);const M=new pe(1,8,6),S=new Pe({color:65280,transparent:!0,opacity:.3,depthTest:!1,depthWrite:!1,visible:!1});this._debugMarker=new ot(M,S),this._debugMarker.visible=!1,this._debugMarker.position.copy(this.rocketGroup.position),e.scene.add(this._debugMarker),this.rocketGroup.traverse(x=>{if(x instanceof ot&&x.material){const H=Array.isArray(x.material)?x.material:[x.material];for(const Y of H)Y.polygonOffset=!0,Y.polygonOffsetFactor=-1,Y.polygonOffsetUnits=-1,Y instanceof te&&(Y.roughness=.45,Y.metalness=.5,Y.emissive=new Tt(0),Y.emissiveIntensity=0,Y.needsUpdate=!0)}});const R=new vi(.05,.15,16),w=new Pe({color:16724787,side:Be,transparent:!0,opacity:.6,depthWrite:!1});this.impactMarker=new ot(R,w),this.impactMarker.rotation.x=-Math.PI/2,this.impactMarker.visible=!1,this.sceneMgr.scene.add(this.impactMarker);for(const x of n.bodies){const H=x;H.mesh&&e.scene.add(H.mesh),H.light&&e.scene.add(H.light)}const T=new Ar(8952268,1.5);T.position.set(-50,20,-30),e.scene.add(T),this.followLight=new qa(16768460,3,15),this.followLight.position.set(0,2,0),this.rocketGroup.add(this.followLight),this.engineFlame=new fx,this.positionFlameAtNozzle(),this.rocketGroup.add(this.engineFlame.getMesh()),this.exhaustLight=new qa(16746564,0,20),this.exhaustLight.position.set(0,-1,0),this.rocketGroup.add(this.exhaustLight);const O=new pe(2,16,16),v=new Pe({color:16746564,transparent:!0,opacity:0,depthWrite:!1});this.reentryGlowMesh=new ot(O,v),this.reentryGlowMesh.position.set(0,.5,0),this.reentryGlowMesh.visible=!1,this.rocketGroup.add(this.reentryGlowMesh),this.groundSmoke=new px,this.rocketGroup.add(this.groundSmoke.getMesh());const E=new ll(.3*Hi,32),F=new Pe({color:0,transparent:!0,opacity:.3,depthWrite:!1});this.rocketShadow=new ot(E,F),this.rocketShadow.rotation.x=-Math.PI/2,this.rocketShadow.position.y=-2,this.rocketGroup.add(this.rocketShadow);const k=new pe(.3,16,12),q=new Pe({color:16737792,transparent:!0,opacity:0,blending:dn,depthWrite:!1});this.reentryGlow=new ot(k,q),this.rocketGroup.add(this.reentryGlow);const L=new pe(.5,16,12),G=new Pe({color:16729088,transparent:!0,opacity:0,blending:dn,depthWrite:!1}),W=new ot(L,G);W.name="reentry-outer",this.rocketGroup.add(W);const $=new P().crossVectors(_,new P(0,1,0)).normalize(),j=Math.atan2($.z,$.x);this.chase=new ix(e.camera),this.chase.setAzimuth(j),this.chase.enableOrbit(this.renderer.domElement);const K=-this.rocketBottomY-50*Lt+2,Q=_.x*K,rt=_.y*K,at=_.z*K;this.chase.initialiseAt(this.state,this.rocketQuat,_,{x:Q,y:rt,z:at}),this._spawnProtectionTimer=120;const X=this.state.position[0]*Lt+_.x*K,et=this.state.position[1]*Lt+_.y*K,gt=this.state.position[2]*Lt+_.z*K;e.camera.position.set(X+10,et+3,gt+10),e.camera.lookAt(X,et,gt),this.controls=new ox(this.state),("ontouchstart"in window||navigator.maxTouchPoints>0)&&(this.controls.enableTouch(),this.controls.touch&&(this.controls.touch.onSasAction(()=>this.cycleSasMode()),this.controls.touch.onChuteAction(()=>this.toggleParachute()))),this.sound=new cx,this.hud=new rx,this.hud.onAction=x=>{x==="stage"?this.performStage():x==="parachute"?this.toggleParachute():x==="sas"?this.cycleSasMode():x==="map"?(vt=!vt,vt?(Ut.style.display="block",requestAnimationFrame(()=>{Ut.style.opacity="1"}),requestAnimationFrame(zt)):(Ut.style.opacity="0",setTimeout(()=>{vt||(Ut.style.display="none")},240))):x==="resume"?(this.paused=!1,this.hud.setPaused(!1)):x==="menu"?this.onCrashAction?.("menu"):x==="restart"&&this.onCrashAction?.("restart")},this.hud.mount();let vt=!1,Mt=1,Ot=0,Bt=0,Et=null;const Ut=document.createElement("div");Ut.style.cssText="position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.95);display:none;opacity:0;transition:opacity 220ms ease-out;";const z=document.createElement("canvas");z.style.cssText="position:absolute;inset:0;width:100%;height:100%;",Ut.appendChild(z),document.body.appendChild(Ut);const Te=document.createElement("div");Te.style.cssText="position:absolute;top:16px;left:16px;z-index:10;color:#EACD9E;font-family:monospace;font-size:12px;pointer-events:none;",Te.innerHTML='<div id="map-zoom">ZOOM: 1x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>',Ut.appendChild(Te),Ut.appendChild(z),document.body.appendChild(Ut),z.addEventListener("wheel",x=>{Mt*=x.deltaY>0?.9:1.1,Mt=Math.max(.05,Math.min(100,Mt))}),z.addEventListener("mousedown",x=>{Et={x:x.clientX,y:x.clientY}}),window.addEventListener("mouseup",()=>{Et=null}),window.addEventListener("mousemove",x=>{Et&&(Ot+=x.clientX-Et.x,Bt+=x.clientY-Et.y,Et={x:x.clientX,y:x.clientY})}),z.addEventListener("touchstart",x=>{x.touches.length===1&&(Et={x:x.touches[0].clientX,y:x.touches[0].clientY})}),z.addEventListener("touchmove",x=>{!Et||x.touches.length!==1||(Ot+=x.touches[0].clientX-Et.x,Bt+=x.touches[0].clientY-Et.y,Et={x:x.touches[0].clientX,y:x.touches[0].clientY})}),z.addEventListener("touchend",()=>{Et=null}),z.addEventListener("dblclick",x=>{x.preventDefault();const H=z.getBoundingClientRect(),Y=x.clientX-H.left,C=x.clientY-H.top,J=z.clientWidth,ht=z.clientHeight,dt=J/2+Ot,st=ht/2+Bt;let Rt=1;for(const Ct of this.system.bodies){const It=(Ct.position[0]-this.state.position[0])*Lt,St=(Ct.position[2]-this.state.position[2])*Lt,yt=Math.sqrt(It*It+St*St);yt>Rt&&(Rt=yt)}const kt=Math.min(J,ht)*.4/Rt*Mt;let Z=null,Kt=25;for(const Ct of this.system.bodies){const It=dt+(Ct.position[0]-this.state.position[0])*kt,St=st-(Ct.position[2]-this.state.position[2])*kt,yt=Math.sqrt((Y-It)**2+(C-St)**2);yt<Kt&&(Kt=yt,Z=Ct.name)}if(Z){const Ct=this.system.bodyByName(Z);if(Ct){const It=Z==="earth"?20:Z==="moon"?50:3;Ot=-(Ct.position[0]-this.state.position[0])*kt,Bt=(Ct.position[2]-this.state.position[2])*kt,Mt=It,xe.show(`${Z}: ${(Ct.mass??0).toExponential(2)}kg R=${(Ct.radius??0)/1e3}km`)}}});let At=0;const zt=()=>{if(!vt)return;if(At++,At%5!==0){requestAnimationFrame(zt);return}const x=window.devicePixelRatio||1,H=z.clientWidth,Y=z.clientHeight;z.width=H*x,z.height=Y*x;const C=z.getContext("2d");C.setTransform(x,0,0,x,0,0),C.fillStyle="#060814",C.fillRect(0,0,H,Y);const J=H/2+Ot,ht=Y/2+Bt;let dt=1;for(const Ht of this.system.bodies){const be=(Ht.position[0]-this.state.position[0])*Lt,$t=(Ht.position[2]-this.state.position[2])*Lt,Ue=Math.sqrt(be*be+$t*$t);Ue>dt&&(dt=Ue)}const st=Math.min(H,Y)*.4/dt*Mt,Rt={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",mercury:"#c0c0c0",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",pluto:"#ddccbb",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",phobos:"#bb9988",deimos:"#887766"},kt={sun:12,earth:7,moon:3,venus:5,mars:5,mercury:3,jupiter:10,saturn:9,uranus:6,neptune:5,pluto:2},Z=this.system.bodyByName("sun")?.position;if(Z)for(const Ht of this.system.bodies){if(Ht.name==="sun"||Ht.name==="moon")continue;const be=[Ht.position[0]-Z[0],Ht.position[1]-Z[1],Ht.position[2]-Z[2]];if(Ht.velocity){const $t=to(be,Ht.velocity,this.system.bodyByName("sun").mass,5e14,180);if($t.points.length>10){C.beginPath(),C.strokeStyle=Rt[Ht.name]+"30",C.lineWidth=1,C.setLineDash([3,6]),C.lineDashOffset=-(At*.5)%9;const Ue=J+($t.points[0][0]+Z[0])*st,cn=ht-($t.points[0][1]+Z[2])*st;C.moveTo(Ue,cn);for(let hn=1;hn<$t.points.length;hn+=2){const ie=J+($t.points[hn][0]+Z[0])*st,V=ht-($t.points[hn][1]+Z[2])*st;C.lineTo(ie,V)}C.stroke(),C.setLineDash([]),C.lineDashOffset=0}}}for(const Ht of this.system.bodies){const be=J+(Ht.position[0]-this.state.position[0])*st,$t=ht-(Ht.position[2]-this.state.position[2])*st,Ue=kt[Ht.name]||3;C.beginPath(),C.arc(be,$t,Ue,0,Math.PI*2),C.fillStyle=Rt[Ht.name]||"#888",C.fill(),C.font="bold 10px monospace",C.fillStyle="#F4F5F2",C.fillText(Ht.name.toUpperCase(),be+Ue+5,$t+4)}const Kt=this.system.bodyByName("sun");for(const Ht of this.system.bodies){if(Ht.name==="sun"||Ht.mass<=0||!Kt||Ht.name===Kt.name)continue;const be=(Ht.position[0]-Kt.position[0])*Lt,$t=(Ht.position[2]-Kt.position[2])*Lt,Ue=Math.sqrt(be*be+$t*$t);if(Ue<1)continue;const cn=Ue*Math.pow(Ht.mass/Kt.mass,.4),hn=J+(Ht.position[0]-this.state.position[0])*st,ie=ht-(Ht.position[2]-this.state.position[2])*st;C.beginPath(),C.arc(hn,ie,cn*st,0,Math.PI*2),C.setLineDash([4,4]),C.strokeStyle=(Rt[Ht.name]||"#888")+"44",C.lineWidth=.8,C.stroke(),C.setLineDash([])}const Ct=80,It=3,St=H-Ct-15,yt=Y-30,ee=dt*2/Math.min(H,Y)*Mt*Ct,he=Math.pow(10,Math.floor(Math.log10(ee))),qt=Ct*(he/ee);C.fillStyle="rgba(244,245,242,0.4)",C.fillRect(St,yt,qt,It),C.strokeStyle="rgba(244,245,242,0.5)",C.lineWidth=.5,C.strokeRect(St,yt,qt,It),C.fillStyle="rgba(244,245,242,0.4)",C.font="8px monospace",C.fillText(`${he>=1e3?(he/1e3).toFixed(0)+"Mkm":he.toFixed(0)+"km"}`,St,yt-2);const nt=30,D=Y-35,lt=12;C.strokeStyle="rgba(244,245,242,0.25)",C.lineWidth=1,C.beginPath(),C.arc(nt,D,lt,0,Math.PI*2),C.stroke(),C.beginPath(),C.moveTo(nt,D-lt-5),C.lineTo(nt,D+lt+5),C.moveTo(nt-lt-5,D),C.lineTo(nt+lt+5,D),C.stroke(),C.fillStyle="rgba(244,245,242,0.4)",C.font="bold 8px monospace",C.fillText("N",nt-3,D-lt-7),C.fillStyle="rgba(244,245,242,0.2)",C.fillText("S",nt-3,D+lt+12),C.fillText("W",nt-lt-12,D+3),C.fillText("E",nt+lt+7,D+3);const ct=J,wt=ht,Dt=this.state.velocity[0]||0,re=this.state.velocity[2]||0,ne=Math.sqrt(Dt*Dt+re*re),ae=ne>.1?Math.atan2(re,Dt):0;if(C.save(),C.translate(ct,wt),C.rotate(-ae),C.beginPath(),C.moveTo(8,0),C.lineTo(0,-4),C.lineTo(-5,0),C.lineTo(0,4),C.closePath(),C.fillStyle="#EACD9E",C.fill(),C.strokeStyle="#EACD9E",C.lineWidth=1.5,C.stroke(),C.restore(),ne>.1){const Ht=Math.min(30,10+ne*st*2);C.beginPath(),C.moveTo(ct,wt),C.lineTo(ct+Math.cos(ae)*Ht,wt-Math.sin(ae)*Ht),C.strokeStyle="rgba(234,205,158,0.6)",C.lineWidth=1.5,C.stroke(),C.beginPath(),C.moveTo(ct+Math.cos(ae)*Ht,wt-Math.sin(ae)*Ht),C.lineTo(ct+Math.cos(ae+.4)*(Ht-5),wt-Math.sin(ae+.4)*(Ht-5)),C.lineTo(ct+Math.cos(ae-.4)*(Ht-5),wt-Math.sin(ae-.4)*(Ht-5)),C.closePath(),C.fillStyle="rgba(234,205,158,0.6)",C.fill()}const le=Oe(this.state.position,this.system),ce=[(this.state.position[0]-le.position[0])*Lt,(this.state.position[1]-le.position[1])*Lt,(this.state.position[2]-le.position[2])*Lt],Ie=this.system.bodyByName("sun");if(Ie){const Ht=(Ie.position[0]-this.state.position[0])*st,be=(Ie.position[2]-this.state.position[2])*st,$t=Math.sqrt(Ht*Ht+be*be);$t>1&&(C.beginPath(),C.moveTo(ct+Ht/$t*12,wt-be/$t*12),C.lineTo(ct+Ht/$t*Math.min($t,60),wt-be/$t*Math.min($t,60)),C.strokeStyle="rgba(255,220,68,0.15)",C.lineWidth=2,C.setLineDash([3,6]),C.stroke(),C.setLineDash([]),C.beginPath(),C.arc(ct+Ht/$t*Math.min($t,60),wt-be/$t*Math.min($t,60),3,0,Math.PI*2),C.fillStyle="rgba(255,220,68,0.3)",C.fill())}const Gt=to(ce,this.state.velocity,le.mass,5e14,360);if(Gt.points.length>1){const Ht=.12+.06*(.5+.5*Math.sin(At*.18));C.beginPath(),C.strokeStyle=Gt.bound?`rgba(68,136,204,${Ht})`:`rgba(221,170,68,${Ht})`,C.lineWidth=8;const be=J+Gt.points[0][0]*st,$t=ht-Gt.points[0][1]*st;C.moveTo(be,$t);for(let ie=1;ie<Gt.points.length;ie++){const V=J+Gt.points[ie][0]*st,tt=ht-Gt.points[ie][1]*st;C.lineTo(V,tt)}C.stroke();const Ue=C.createLinearGradient(be,$t,J+Gt.points[Gt.points.length-1][0]*st,ht-Gt.points[Gt.points.length-1][1]*st),cn=Gt.bound?"rgba(68,136,204,0.9)":"rgba(221,170,68,0.9)",hn=Gt.bound?"rgba(68,136,204,0.2)":"rgba(221,170,68,0.2)";Ue.addColorStop(0,cn),Ue.addColorStop(1,hn),C.beginPath(),C.strokeStyle=Ue,C.lineWidth=2.5,C.moveTo(be,$t);for(let ie=1;ie<Gt.points.length;ie++){const V=J+Gt.points[ie][0]*st,tt=ht-Gt.points[ie][1]*st;C.lineTo(V,tt)}if(C.stroke(),Gt.points.length>4){const ie=Gt.points[Gt.points.length-1],V=Gt.points[Gt.points.length-2],tt=ie[0]-V[0],it=ie[1]-V[1],b=Math.sqrt(tt*tt+it*it)||1,I=J+ie[0]*st,U=ht-ie[1]*st,N=8;C.beginPath(),C.moveTo(I,U),C.lineTo(I-tt/b*N+it/b*N*.4,U+it/b*N+tt/b*N*.4),C.lineTo(I-tt/b*N-it/b*N*.4,U+it/b*N-tt/b*N*.4),C.closePath(),C.fillStyle=Gt.bound?"rgba(68,136,204,0.6)":"rgba(221,170,68,0.6)",C.fill()}if(Gt.bound&&isFinite(Gt.apoapsis)&&isFinite(Gt.periapsis)){const ie=J+Gt.apoapsis*st,V=J+Gt.periapsis*st;C.beginPath(),C.arc(ie,ht,4,0,Math.PI*2),C.fillStyle="#FF8844",C.fill(),C.font="bold 9px monospace",C.fillStyle="#FF8844",C.fillText("Ap",ie+6,ht+3),C.beginPath(),C.arc(V,ht,4,0,Math.PI*2),C.fillStyle="#44DD88",C.fill(),C.fillStyle="#44DD88",C.fillText("Pe",V+6,ht+3)}if(Gt.points.length>2){const ie=Gt.points[Gt.points.length-1],V=J+ie[0]*st,tt=ht-ie[1]*st,it=le.position[0]*Lt+ie[0],b=le.position[2]*Lt+ie[1];let I="",U=20;for(const N of this.system.bodies){if(N.name===le.name||N.mass<=0)continue;const B=Math.sqrt((it-N.position[0]*Lt)**2+(b-N.position[2]*Lt)**2);B<U&&(U=B,I=N.name)}I&&(C.font="bold 10px monospace",C.fillStyle="#EACD9E",C.fillText("→ "+I.toUpperCase(),V+8,tt-4))}if(Gt.points.length>2){const ie=Gt.points[Gt.points.length-1],V=le.position[0]*Lt+ie[0],tt=le.position[2]*Lt+ie[1];let it="",b=30;for(const I of this.system.bodies){if(I.name===le.name||I.mass<=0)continue;const U=I.position[0]*Lt,N=I.position[2]*Lt,B=Math.sqrt((V-U)**2+(tt-N)**2);B<b&&(b=B,it=I.name)}if(it){const I=J+ie[0]*st,U=ht-ie[1]*st;C.font="bold 10px monospace",C.fillStyle="#EACD9E",C.fillText("→ "+it.toUpperCase(),I+10,U-5)}}}C.fillStyle="rgba(244,245,242,0.3)",C.font="9px sans-serif",C.fillText(`${(dt/1e3).toFixed(0)} km | Zoom: ${Mt.toFixed(1)}x`,10,Y-10),requestAnimationFrame(zt)};window.addEventListener("keydown",x=>{(x.key==="m"||x.key==="Tab")&&(vt=!vt,vt?(Ut.style.display="block",requestAnimationFrame(()=>{Ut.style.opacity="1"}),vt&&requestAnimationFrame(zt)):(Ut.style.opacity="0",setTimeout(()=>{vt||(Ut.style.display="none")},240)),x.preventDefault())}),window.addEventListener("keydown",x=>{if(x.key==="q"||x.key==="["){if(this.paused)return;this.warpIndex=Math.max(0,this.warpIndex-1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),x.preventDefault()}else if(x.key==="e"||x.key==="]"){if(this.paused)return;this.warpIndex=Math.min(this.warpLevels.length-1,this.warpIndex+1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),x.preventDefault()}else if(x.key==="p"){if(i.assembly.roots.some(Y=>Y.part.kind==="parachute")||i.assembly.roots.some(Y=>Y.children.some(C=>C.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const Y={radius:.6*me,height:1*me};this.deployedChuteMesh=$a(Y),this.deployedChuteMesh.scale.setScalar(.001),this.chuteDeployProgress=0,this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null,this.chuteDeployProgress=0);xe.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}x.preventDefault()}else x.key==="g"?(this.toggleGear(),x.preventDefault()):x.key==="t"?(this.cycleSasMode(),x.preventDefault()):x.key==="f"?(this.chase.reset(),xe.show("Camera view reset"),x.preventDefault()):x.key==="c"&&!x.ctrlKey&&!x.metaKey?(this.cameraMode=this.cameraMode==="chase"?"free":"chase",this.hud.setFreeCamera(this.cameraMode==="free"),xe.show(this.cameraMode==="free"?"Free camera":"Chase camera"),x.preventDefault()):x.key==="F1"&&(x.preventDefault(),this.hudVisible=!this.hudVisible,this.hud.setVisible(this.hudVisible),xe.show(this.hudVisible?"HUD shown":"HUD hidden"));this.cameraMode==="free"&&(x.key==="ArrowUp"&&(this.freeCamKeys.up=!0,x.preventDefault()),x.key==="ArrowDown"&&(this.freeCamKeys.down=!0,x.preventDefault()),x.key==="ArrowLeft"&&(this.freeCamKeys.left=!0,x.preventDefault()),x.key==="ArrowRight"&&(this.freeCamKeys.right=!0,x.preventDefault()))}),window.addEventListener("keyup",x=>{x.key==="ArrowUp"&&(this.freeCamKeys.up=!1),x.key==="ArrowDown"&&(this.freeCamKeys.down=!1),x.key==="ArrowLeft"&&(this.freeCamKeys.left=!1),x.key==="ArrowRight"&&(this.freeCamKeys.right=!1)});const bt=this.renderer.domElement,ue=(x,H)=>{this.cameraMode==="free"&&(this.freeCamDragging=!0,this.freeCamPrevMouse={x,y:H})},Vt=(x,H)=>{if(!this.freeCamDragging||this.cameraMode!=="free")return;const Y=x-this.freeCamPrevMouse.x,C=H-this.freeCamPrevMouse.y;this.freeCamAzimuth-=Y*.005,this.freeCamPolar=Math.max(.05,Math.min(Math.PI-.05,this.freeCamPolar+C*.005)),this.freeCamPrevMouse={x,y:H}},A=()=>{this.freeCamDragging=!1};bt.addEventListener("mousedown",x=>ue(x.clientX,x.clientY)),window.addEventListener("mousemove",x=>Vt(x.clientX,x.clientY)),window.addEventListener("mouseup",A),bt.addEventListener("touchstart",x=>{x.touches.length===1&&x.touches[0]&&ue(x.touches[0].clientX,x.touches[0].clientY)},{passive:!0}),bt.addEventListener("touchmove",x=>{x.touches.length===1&&x.touches[0]&&Vt(x.touches[0].clientX,x.touches[0].clientY)},{passive:!0}),bt.addEventListener("touchend",A),bt.addEventListener("wheel",x=>{this.cameraMode==="free"&&(x.preventDefault(),this.freeCamDist*=x.deltaY>0?1.1:.9,this.freeCamDist=Math.max(.5,Math.min(500,this.freeCamDist)))},{passive:!1}),this.achievements.unlock("first_launch"),xe.show("You are at the launchpad. ↑/↓ throttle, W/S pitch, A/D yaw, Space stage, Esc pause.")}sanitize(t){isFinite(t[0])||(t[0]=0),isFinite(t[1])||(t[1]=0),isFinite(t[2])||(t[2]=0)}countStages(t){let e=0;for(const n of t)n.part.kind==="decoupler"&&e++,e+=this.countStages(n.children);return e}computeStageData(){const t=this.rocket.assembly.roots;if(t.length===0)return[];const e=[];for(let r=0;r<t.length;r++)t[r].part.kind==="decoupler"&&e.push(r);const n=[];let i=0;for(let r=0;r<=e.length;r++){const a=r<e.length?e[r]:t.length,l=[];for(let c=i;c<a;c++)l.push(t[c]);if(l.length>0){const c=this.isChunkSpent(l);n.push({parts:l,active:!c,spent:c})}i=a+1}let s=0;for(let r=0;r<n.length;r++){if(!n[r].spent){s=r;break}s=r}return n.map((r,a)=>{let l=0,c=0;for(const g of r.parts)if(l+=g.part.mass,g.part.fuelCapacity){const y=this.rocket.fuelTanks.find(m=>m.node===g);c+=y?y.remaining:g.part.fuelCapacity}const u=r.parts.filter(g=>g.part.kind==="engine").length,h=r.parts.filter(g=>g.part.fuelCapacity).length,f=u>0?`${u}E ${h}T`:r.parts.length===1?r.parts[0].part.name||"C":`${r.parts.length}P`;return{label:`S${a+1}: ${f}`,fuelMass:c,dryMass:l,active:a===s,spent:r.spent}})}isChunkSpent(t){if(!t.some(n=>n.part.kind==="engine"))return!1;for(const n of t)if(n.part.fuelCapacity){const i=this.rocket.fuelTanks.find(s=>s.node===n);if(i&&i.remaining>.01)return!1}return!0}update(t){try{this.updateInner(t)}catch(e){xe.show(`ERROR: ${e.message||e}`),console.error("FlightScene.update error:",e)}}updateInner(t){const e=t;if(this._spawnProtectionTimer>0&&(this._spawnProtectionTimer-=1),this.controls.consumePauseToggle()&&(this.paused=!this.paused,this.hud.setPaused(this.paused),this.paused&&this.sound.stopEngine()),this.paused){this.system.propagate(0,ga);for(const V of this.system.bodies)V.syncMesh?.();return}if(this.crashed){this.system.propagate(t*this.timeWarp,ga);for(const V of this.system.bodies)V.syncMesh?.();this.updateExplosion(e);return}this.missionTime+=e,this.missionTime=Math.min(this.missionTime,99999),t*=this.timeWarp,(!isFinite(t)||t<=0)&&(t=1/60),this.controls.update(e),this.hud.throttleUpBtn&&(this.state.throttle=Math.min(1,this.state.throttle+e*.5)),this.hud.throttleDownBtn&&(this.state.throttle=Math.max(0,this.state.throttle-e*.3)),this.controls.getZoomIn()&&this.chase.zoom(.92),this.controls.getZoomOut()&&this.chase.zoom(1.08);const n=this.timeWarp>1;n&&(this.state.throttle=0),this.cameraMode==="free"&&(this.state.throttle=0),!n&&this.controls.getStageRequested()&&this.performStage(),!n&&!this.grounded&&this.state.throttle>0&&(!cr(this.state.rocket.assembly.roots)||this.state.rocket.totalFuelMass()<.1)&&this.state.rocket.assembly.roots.some(it=>it.part.kind==="decoupler"||it.children.some(b=>b.part.kind==="decoupler"))&&this.performStage();const i=this.state.throttle>0,s=this.cameraMode==="free",r=n||s?0:this.controls.getPitch(),a=n||s?0:this.controls.getYaw();n||this.controls.getRoll();const l=new P(0,1,0).applyQuaternion(this.rocketQuat);new P(1,0,0).applyQuaternion(this.rocketQuat);const c=Oe(this.state.position,this.system),u=this.state.position[0]-c.position[0],h=this.state.position[1]-c.position[1],d=this.state.position[2]-c.position[2],f=Math.sqrt(u*u+h*h+d*d)||1,g=new P(u/f,h/f,d/f),y=new P().crossVectors(l,g);y.length()<.001?(y.set(-g.z,0,g.x).normalize(),y.length()<.001&&y.set(1,0,0)):y.normalize();const p=this.ANGULAR_ACCEL*e,_=new un().setFromAxisAngle(g,a*p),M=new un().setFromAxisAngle(y,r*p*1.2);if(this.rocketQuat.multiply(_).multiply(M),this.rocketQuat.normalize(),this.sasMode!=="off"&&!n){if(this.sasMode==="prograde"||this.sasMode==="retrograde"){const it=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(it>.1){let b=new P(this.state.velocity[0]/it,this.state.velocity[1]/it,this.state.velocity[2]/it);this.sasMode==="retrograde"&&b.negate(),this.sasTargetQuat.setFromUnitVectors(new P(0,1,0),b)}}const V=new un().copy(this.sasTargetQuat).invert().multiply(this.rocketQuat),tt=2*Math.acos(Math.abs(V.w));if(tt>.001){const it=new P(V.x,V.y,V.z).normalize();this.angularVel.x-=it.x*tt*3*e,this.angularVel.y-=it.y*tt*3*e,this.angularVel.z-=it.z*tt*3*e}this.angularVel.multiplyScalar(Math.exp(-5*e))}this.rocketGroup.quaternion.copy(this.rocketQuat);const S=l,R=S.x,w=S.y,T=S.z;let O=!1;if(this.countdownCooldown>0&&(this.countdownCooldown-=e),i&&this.grounded&&(!this.countdownActive&&!this.launched&&this.countdownCooldown<=0&&(this.countdownActive=!0,this.countdownTimer=0,this.showCountdown("3")),this.countdownActive)){if(this.countdownTimer+=e,this.countdownTimer>=1&&this.countdownTimer<2)this.showCountdown("2");else if(this.countdownTimer>=2&&this.countdownTimer<3)this.showCountdown("1");else if(this.countdownTimer>=3){this.countdownActive=!1,this.launched=!0;const V=cr(this.state.rocket.assembly.roots),tt=Oe(this.state.position,this.system),it=this.state.position[0]-tt.position[0],b=this.state.position[1]-tt.position[1],I=this.state.position[2]-tt.position[2],U=Math.sqrt(it*it+b*b+I*I)||1,N=Gi*tt.mass/(U*U);if(V&&V.thrust&&N>0){const B=V.thrust*1e3*this.state.throttle/(this.state.rocket.totalMass()*N);B>=1?O=!0:(xe.show(`TWR ${B.toFixed(2)} — need more throttle!`),this.launched=!1,this.countdownTimer=0,this.countdownCooldown=5)}O&&(this.showCountdown("LIFTOFF!"),setTimeout(()=>this.hideCountdown(),1500))}}if(i&&(!this.grounded||O)&&(ax(this.state,t,[R,w,T]),this.sanitize(this.state.velocity)),i&&O&&this.grounded&&(this.grounded=!1,this.groundedDir=null,this.liftoffFrames=5,this.launched=!0,this._camSnapped=!1,this.achievements.unlock("reach_space"),this.sound.startEngine(),this.screenShake=.8),i){this.sound.setThrottle(this.state.throttle),this.engineFlame.setThrottle(this.state.throttle),this.engineFlame.start();const V=Oe(this.state.position,this.system),tt=this.state.position[0]-V.position[0],it=this.state.position[1]-V.position[1],b=this.state.position[2]-V.position[2],I=Math.sqrt(tt*tt+it*it+b*b)||1,U=V.getSurfaceRadiusAt?.(this.state.position)??V.radius??6371e3;this.engineFlame.setVacuum(I-U>5e4)}else this.sound.setThrottle(0),this.engineFlame.stop();if(this.engineFlame.update(e),this.exhaustLight){const V=1+(Math.random()-.5)*.08;this.exhaustLight.intensity=this.state.throttle*3*V,this.exhaustLight.color.setHSL(.08-this.state.throttle*.05,1,.5+this.state.throttle*.3)}i&&this.grounded?this.groundSmoke.start():this.groundSmoke.stop(),this.groundSmoke.update(e),this.grounded||(this.state.position[0]+=this.state.velocity[0]*t,this.state.position[1]+=this.state.velocity[1]*t,this.state.position[2]+=this.state.velocity[2]*t);let v=null,E=1/0;const F=Oe(this.state.position,this.system),k=F.name;this.lastRefBody&&this.lastRefBody!==k&&xe.show(`Entering ${k.toUpperCase()} SOI`),this.lastRefBody=k;const q=F.position[0]-this.state.position[0],L=F.position[1]-this.state.position[1],G=F.position[2]-this.state.position[2];E=Math.sqrt(q*q+L*L+G*G),v=F;const W=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(!this.grounded&&!n&&W>5&&v&&v.radius){const V=E-v.radius;if(V>0&&V<7e4){const tt=Math.exp(-V/8500),it=new P(this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]).normalize(),b=new P(0,1,0).applyQuaternion(this.rocketQuat);if(Math.abs(b.dot(it))<.99){const U=new un().setFromUnitVectors(b,it);this.rocketQuat.slerp(U,tt*.1*e),this.rocketQuat.normalize()}}}if(!this.grounded&&v&&v.radius){const V=E-v.radius;if(V>0&&V<12e4&&W>2e3){const tt=Math.max(0,1-V/12e4)*Math.min(1,W/8e3);if(this.reentryGlow){this.reentryGlow.material.color.setHSL(.05,1,.7*tt),this.reentryGlow.material.opacity=.4*tt,this.reentryGlow.scale.setScalar(1+tt*2);const it=this.rocketGroup.getObjectByName("reentry-outer");it&&(it.material.color.setHSL(.03,1,.4*tt),it.material.opacity=.2*tt,it.scale.setScalar(1+tt*4))}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const tt=this.rocketGroup.getObjectByName("reentry-outer");tt&&(tt.material.opacity=0)}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const V=this.rocketGroup.getObjectByName("reentry-outer");V&&(V.material.opacity=0)}if(this.liftoffFrames>0&&this.liftoffFrames--,this.grounded)this.state.velocity=[0,0,0];else{const V=q,tt=L,it=G,b=E,I=b*b;if(b>1&&I>0){const xt=Gi*F.mass/I*t;this.state.velocity[0]+=xt*V/b,this.state.velocity[1]+=xt*tt/b,this.state.velocity[2]+=xt*it/b}this.sanitize(this.state.velocity);const U=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),N=this.state.rocket.totalMass();let B=N*.001+.2;if(this.parachuteDeployed?B=50:this.gearDeployed&&(B*=2.5),v&&v.radius&&U>.05&&U<1e6){const _t=E-v.radius;if(_t>0&&_t<3e5){const xt=1.225*Math.exp(-_t/8500),Se=.5*xt*U*U*B/N*t;if(Se>=U)this.state.velocity[0]=0,this.state.velocity[1]=0,this.state.velocity[2]=0;else{const Re=1-Se/U;this.state.velocity[0]*=Re,this.state.velocity[1]*=Re,this.state.velocity[2]*=Re}this.sanitize(this.state.velocity);const Ae=Math.max(0,U/2e3*(xt/1.225)-.1);if(Ae>.05&&this.reentryGlowMesh){this.reentryGlowMesh.visible=!0;const Re=1+(Math.random()-.5)*.06*Ae;this.reentryGlowMesh.scale.setScalar((1+Ae*2)*Re),this.reentryGlowMesh.material.opacity=Math.min(1,Ae*(.92+Math.random()*.08));const oe=Ae>.8?16777215:Ae>.5?16763972:16746564;this.reentryGlowMesh.material.color.setHex(oe)}else this.reentryGlowMesh&&(this.reentryGlowMesh.visible=!1);if(this.lastReentryIntensity=Ae,Ae>.1)this.rocketGroup.traverse(Re=>{const oe=Re;if(!oe.isMesh)return;const Ft=oe.material;if(!Ft||!Ft.emissive)return;const Xe=Math.min(1,this.heatEnergy/3e5),ge=Xe*.9,Ne=Xe*Xe*.5,mo=Xe*Xe*Xe*.15;Ft.emissive.setRGB(ge,Ne,mo),Ft.emissiveIntensity=Xe*1.5});else if(this.heatEnergy>0){const Re=Math.min(1,this.heatEnergy/3e5);this.rocketGroup.traverse(oe=>{const Ft=oe;if(!Ft.isMesh)return;const Xe=Ft.material;!Xe||!Xe.emissive||(Xe.emissive.setRGB(Re*.4,0,0),Xe.emissiveIntensity=Re*.5)})}else this.heatEnergy<1&&this.rocketGroup.traverse(Re=>{const oe=Re;if(!oe.isMesh)return;const Ft=oe.material;!Ft||!Ft.emissive||Ft.emissiveIntensity>0&&(Ft.emissive.setRGB(0,0,0),Ft.emissiveIntensity=0)});const Ce=.5*xt*U*U*U*1e-6/4;this.heatEnergy+=Ce*e}}this.reentryGlowMesh&&(v&&v.radius&&E-v.radius<3e5||(this.reentryGlowMesh.visible=!1)),this.grounded||(this.heatEnergy>0&&(this.heatEnergy*=this.HEAT_RADIATION_RATE,this.heatEnergy<1&&(this.heatEnergy=0)),this.heatEnergy>this.MAX_HEAT&&(this.crashed=!0,xe.show(`OVERHEATED! Ship disintegrated at ${this.heatEnergy.toFixed(0)}J`)));const mt=v?v.radius??0:0,ft=v?v.getSurfaceRadiusAt?.(this.state.position)??mt:0;if(v&&mt>0&&isFinite(E)&&this._spawnProtectionTimer<=0){const _t=this.state.position[0]-v.position[0],xt=this.state.position[1]-v.position[1],Pt=this.state.position[2]-v.position[2],pt=Math.sqrt(_t*_t+xt*xt+Pt*Pt),Nt=(this.state.velocity[0]*_t+this.state.velocity[1]*xt+this.state.velocity[2]*Pt)/pt;if(pt<ft)this.doCrash(`Impact on ${v.name}`,v,_t,xt,Pt,pt,ft);else if(pt<ft+200&&pt>.001&&this.liftoffFrames<=0){const Se=new P(_t/pt,xt/pt,Pt/pt),Ae=new P(0,1,0).applyQuaternion(this.rocketQuat),Ce=Math.acos(Math.min(1,Math.abs(Ae.dot(Se))))*180/Math.PI,Re=this.hasLandingLegs(),oe=this.parachuteDeployed?15:20,Ft=this.parachuteDeployed?8:5,Xe=Re?60:45;if(isFinite(Nt)&&Math.abs(Nt)>oe)this.doCrash(`Too fast! (${Math.abs(Nt).toFixed(0)} m/s) on ${v.name}`,v,_t,xt,Pt,pt,ft);else if(Ce>Xe)this.doCrash(`Tipped over! (${Ce.toFixed(0)}°) on ${v.name}`,v,_t,xt,Pt,pt,ft);else if(isFinite(Nt)&&Math.abs(Nt)<Ft){this.state.velocity=[0,0,0],this.grounded=!0,this.groundedDir=[_t/pt,xt/pt,Pt/pt];const ge=new P(_t/pt,xt/pt,Pt/pt);if(this.rocketQuat.setFromUnitVectors(new P(0,1,0),ge),this.state.position[0]!==v.position[0]+_t/pt*(ft+50)||this.state.position[1]!==v.position[1]+xt/pt*(ft+50)||this.state.position[2]!==v.position[2]+Pt/pt*(ft+50)){this.state.position=[v.position[0]+_t/pt*(ft+50),v.position[1]+xt/pt*(ft+50),v.position[2]+Pt/pt*(ft+50)],this.sound.playLand(),this.sound.stopEngine();const Ne=v.name;xe.show(`Landed on ${Ne}!`),Ne==="earth"?this.achievements.unlock("land_earth"):Ne==="moon"?this.achievements.unlock("land_moon"):Ne==="mars"?this.achievements.unlock("land_mars"):Ne==="venus"?this.achievements.unlock("land_venus"):Ne==="mercury"&&this.achievements.unlock("land_mercury"),this.missions.recordLanding(Ne)}}else if(isFinite(Nt)){this.state.velocity=[0,0,0],this.state.position=[v.position[0]+_t/pt*(ft+50),v.position[1]+xt/pt*(ft+50),v.position[2]+Pt/pt*(ft+50)],this.grounded=!0,this.groundedDir=[_t/pt,xt/pt,Pt/pt];const ge=new P(_t/pt,xt/pt,Pt/pt);this.rocketQuat.setFromUnitVectors(new P(0,1,0),ge),this.screenShake=Math.abs(Nt)*.05,this.sound.playLand(),this.sound.stopEngine();const Ne=v.name;xe.show(`Rough landing on ${Ne}! (${Math.abs(Nt).toFixed(1)} m/s)`),Ne==="earth"?this.achievements.unlock("land_earth"):Ne==="moon"&&this.achievements.unlock("land_moon")}}else pt<ft+250&&isFinite(Nt)&&Math.abs(Nt)>5e4&&this.doCrash(`High-speed impact! (${Math.abs(Nt).toFixed(0)} m/s) on ${v.name}`,v,_t,xt,Pt,pt,ft)}}if(this.system.propagate(t,ga),this.grounded&&this.groundedDir){const V=Oe(this.state.position,this.system),tt=V.radius??6371e3,it=[V.position[0]+this.groundedDir[0],V.position[1]+this.groundedDir[1],V.position[2]+this.groundedDir[2]],I=(V.getSurfaceRadiusAt?.(it)??tt)+50;this.state.position[0]=V.position[0]+this.groundedDir[0]*I,this.state.position[1]=V.position[1]+this.groundedDir[1]*I,this.state.position[2]=V.position[2]+this.groundedDir[2]*I}if(this.grounded){const V=Oe(this.state.position,this.system),tt=this.state.position[0]-V.position[0],it=this.state.position[1]-V.position[1],b=this.state.position[2]-V.position[2],I=Math.sqrt(tt*tt+it*it+b*b),U=V.radius??6371e3;I>U*1.1&&(this.state.velocity=[0,0,0],this.state.position[0]=V.position[0]+tt/I*(U+50),this.state.position[1]=V.position[1]+it/I*(U+50),this.state.position[2]=V.position[2]+b/I*(U+50))}for(const V of this.system.bodies)V.syncMesh?.();const $=Oe(this.state.position,this.system),j=this.state.position[0]-$.position[0],K=this.state.position[1]-$.position[1],Q=this.state.position[2]-$.position[2],rt=Math.sqrt(j*j+K*K+Q*Q)-($.radius??6371e3),at=Math.max(.05,Math.min(1,rt/5e4));for(const V of this.system.bodies){const tt=V;if(!(!tt.mesh||tt.name==="earth"||tt.name==="sun")&&tt.mesh.material){const it=Array.isArray(tt.mesh.material)?tt.mesh.material:[tt.mesh.material];for(const b of it)b.transparent!==void 0&&(b.transparent=!0,b.opacity=at,b.needsUpdate=!0)}}const X=this.system.bodyByName("sun");if(X&&X.mesh){const V=X.mesh.position;for(const tt of this.system.bodies){const it=tt;it.atmosphereGlow&&it.mesh&&it.atmosphereGlow.setSunDirection(V,it.mesh.position)}}const et=this.system.bodyByName("earth");if(et&&"updateClouds"in et){const V=this.system.bodyByName("sun"),tt=V?V.position:void 0;et.updateClouds(e,tt)}if(this.debris.length>0){const V=Oe(this.state.position,this.system);for(let tt=this.debris.length-1;tt>=0;tt--){const it=this.debris[tt];if(it.life-=e,it.life<=0||it.body.mass<=0){this.sceneMgr.scene.remove(it.mesh),this.debris.splice(tt,1);continue}const b=Rd(it.body,this.system.bodies);it.body.applyForce(b,e),it.mesh.position.set(it.body.position[0]*Lt,it.body.position[1]*Lt,it.body.position[2]*Lt);const I=it.body.position[0]-V.position[0],U=it.body.position[1]-V.position[1],N=it.body.position[2]-V.position[2],B=Math.sqrt(I*I+U*U+N*N),mt=V.getSurfaceRadiusAt?.(it.body.position)??V.radius??6371e3;B<mt&&(this.sceneMgr.scene.remove(it.mesh),this.debris.splice(tt,1))}}this.updateExplosion(e);const gt=Oe(this.state.position,this.system),vt=this.state.position[0]-gt.position[0],Mt=this.state.position[1]-gt.position[1],Ot=this.state.position[2]-gt.position[2],Bt=Math.sqrt(vt*vt+Mt*Mt+Ot*Ot)||1,Et=new P(vt/Bt,Mt/Bt,Ot/Bt);if(this.rocketShadow&&(this.rocketShadow.visible=!1),this._debugMarker&&this._debugMarker.position.copy(this.rocketGroup.position),!this.crashed){const V=-this.rocketBottomY-50*Lt+2,tt=Oe(this.state.position,this.system),it=this.state.position[0]-tt.position[0],b=this.state.position[1]-tt.position[1],I=this.state.position[2]-tt.position[2],U=Math.sqrt(it*it+b*b+I*I)||1;if(!this._debugShown){this._debugShown=!0;const N=document.createElement("div");N.style.cssText="position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:90;font-family:monospace;font-size:10px;color:#c89838;background:rgba(8,10,24,0.6);padding:3px 10px;border-radius:10px;pointer-events:none;letter-spacing:0.1em;border:1px solid rgba(200,152,56,0.2);",N.id="rocket-debug",N.textContent="ELLIPSE  v3.0",document.body.appendChild(N),console.log("ROCKET DEBUG:",{rocketBottomY:this.rocketBottomY,visualOffset:V,VISUAL_SCALE:Lt,ROCKET_VISUAL_SCALE:Hi,earthVisualR:6371e3*Lt,rocketGroupPos:this.rocketGroup.position.toArray(),statePos:this.state.position})}if(this.rocketGroup.position.set(this.state.position[0]*Lt+it/U*V,this.state.position[1]*Lt+b/U*V,this.state.position[2]*Lt+I/U*V),this.stagePulseTimer>0){this.stagePulseTimer-=e;const N=1-Math.max(0,this.stagePulseTimer/.35),B=1.70158,ft=1+((B+1)*Math.pow(N-1,3)+B*Math.pow(N-1,2))*.04;this.rocketGroup.scale.setScalar(Hi*Math.max(1,ft))}else this.rocketGroup.scale.x!==Hi&&this.rocketGroup.scale.setScalar(Hi);if(this.cameraMode==="free"){this.freeCamKeys.left&&(this.freeCamAzimuth+=3*e),this.freeCamKeys.right&&(this.freeCamAzimuth-=3*e),this.freeCamKeys.up&&(this.freeCamPolar=Math.max(.05,this.freeCamPolar-3*.7*e)),this.freeCamKeys.down&&(this.freeCamPolar=Math.min(Math.PI-.05,this.freeCamPolar+3*.7*e));const B=new P(this.state.position[0]*Lt+it/U*V,this.state.position[1]*Lt+b/U*V,this.state.position[2]*Lt+I/U*V),mt=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.cos(this.freeCamAzimuth),ft=this.freeCamDist*Math.cos(this.freeCamPolar),_t=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.sin(this.freeCamAzimuth);this.sceneMgr.camera.position.set(B.x+mt,B.y+ft,B.z+_t);const xt=Math.abs(this.freeCamPolar-Math.PI/2)>Math.PI/2-.15?new P(0,0,Math.sin(this.freeCamPolar)>0?1:-1):new P(0,1,0);this.sceneMgr.camera.up.copy(xt),this.sceneMgr.camera.lookAt(B)}else{const N={x:it/U*V,y:b/U*V,z:I/U*V};this.chase.follow(this.state,e,Et,n||!this._camSnapped,N),this._camSnapped||(this._camSnapped=!0)}if(this.deployedChuteMesh&&(this.deployedChuteMesh.position.set(this.state.position[0]*Lt,this.state.position[1]*Lt+.02,this.state.position[2]*Lt),this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation),this.chuteDeployProgress<1)){this.chuteDeployProgress=Math.min(1,this.chuteDeployProgress+e*.8);const N=this.chuteDeployProgress,B=1.70158,ft=1+(B+1)*Math.pow(N-1,3)+B*Math.pow(N-1,2);this.deployedChuteMesh.scale.setScalar(Math.max(.001,ft))}}const Ut=v&&v.radius?E-v.radius:0;this.countStages(this.rocket.assembly.roots);const z=this.computeStageData();this.stageInfo=z;let Te,At,zt,bt,ue,Vt;const A=Oe(this.state.position,this.system);if(A&&A.mass>0){const V=[(this.state.position[0]-A.position[0])*Lt,(this.state.position[1]-A.position[1])*Lt,(this.state.position[2]-A.position[2])*Lt],tt=to(V,this.state.velocity,A.mass,5e14,360);tt.bound&&(Te=tt.apoapsis,At=tt.periapsis,zt=tt.timeToAp,bt=tt.timeToPe,ue=tt.eccentricity,Vt=tt.timeToAp!==void 0&&tt.timeToPe!==void 0?(tt.timeToAp+tt.timeToPe)*2:void 0)}if(this.impactMarker){const V=Oe(this.state.position,this.system),tt=[this.state.position[0]-V.position[0],this.state.position[1]-V.position[1],this.state.position[2]-V.position[2]],it=to(tt,this.state.velocity,V.mass,5e14,360);if(it.points.length>10&&!it.bound){const b=it.points[it.points.length-1],I=V.getSurfaceRadiusAt?.([b[0],0,b[1]])??V.radius??6371e3;V.position[0]+b[0],V.position[2]+b[1];const U=Math.sqrt(b[0]*b[0]+b[1]*b[1]);if(U>I*.5){const N=V.position[0]+b[0]/U*I,B=V.position[2]+b[1]/U*I;this.impactMarker.position.set(N*Lt,0,B*Lt),this.impactMarker.visible=!0}else this.impactMarker.visible=!1}else this.impactMarker.visible=!1}this.stageInfo.filter(V=>V.active).length>0&&this.stageInfo.findIndex(V=>V.active)+1;let x=0;const H=Oe(this.state.position,this.system);if(H&&H.mass>0){const V=this.state.position[0]-H.position[0],tt=this.state.position[1]-H.position[1],it=this.state.position[2]-H.position[2],b=Math.sqrt(V*V+tt*tt+it*it)||1,I=Gi*H.mass/(b*b),U=cr(this.state.rocket.assembly.roots),N=this.state.rocket.totalMass();U&&U.thrust&&I>0&&N>0&&(x=U.thrust*1e3*this.state.throttle/(N*I))}this.hud.setTwr(x),this.hud.setSasMode(this.sasMode),this.hud.update(this.state,this.system,this.heatEnergy,this.state.throttle),this.hud.setOrbit({apoapsis:Te,periapsis:At,timeToAp:zt,timeToPe:bt,eccentricity:ue,period:Vt,bound:Te!==void 0&&At!==void 0});const Y=Oe(this.state.position,this.system);this.missions.evaluate({launched:this.launched,altitude:Ut,maxAltitude:this.maxAlt,speed:W,maxSpeed:this.maxSpeed,grounded:this.grounded,nearestBody:F.name,refBody:Y.name,bound:Te!==void 0&&At!==void 0,apoapsis:Te??-1,periapsis:At??-1,stageSeparations:0,softLanded:!1});const C=Oe(this.state.position,this.system),J=[(this.state.position[0]-C.position[0])*Lt,(this.state.position[1]-C.position[1])*Lt,(this.state.position[2]-C.position[2])*Lt],ht=to(J,this.state.velocity,C.mass,5e14,90);if(ht.points.length>5){if(!this.orbitLine){const tt=new Fe,it=new Float32Array(ht.points.length*3);tt.setAttribute("position",new De(it,3));const b=new Tr({color:ht.bound?4491468:14527044,transparent:!0,opacity:.3,depthWrite:!1});this.orbitLine=new Er(tt,b),this.sceneMgr.scene.add(this.orbitLine)}const V=this.orbitLine.geometry.attributes.position;for(let tt=0;tt<ht.points.length;tt++)V.array[tt*3]=C.position[0]*Lt+ht.points[tt][0],V.array[tt*3+1]=this.state.position[1]*Lt,V.array[tt*3+2]=C.position[2]*Lt+ht.points[tt][1];V.needsUpdate=!0,this.orbitLine.geometry.setDrawRange(0,ht.points.length),this.orbitLine.material.color.set(ht.bound?4491468:14527044),this.orbitLine.visible=!0}else this.orbitLine&&(this.orbitLine.visible=!1);Ut>this.maxAlt&&(this.maxAlt=Ut),W>this.maxSpeed&&(this.maxSpeed=W);const dt=[100,500,1e3,5e3,1e4,5e4,1e5,5e5,1e6];for(const V of dt)if(Ut>=V&&this.lastAltMilestone<V){this.lastAltMilestone=V,xe.show(`Altitude: ${V>=1e3?V/1e3+"km":V+"m"}`);break}const Rt=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2)/340;this.hud.setMass(this.state.rocket.totalMass()),this.prevMach=Rt;const kt=Oe(this.state.position,this.system);if(kt&&kt.mass>0){const V=this.state.position[0]-kt.position[0],tt=this.state.position[1]-kt.position[1],it=this.state.position[2]-kt.position[2],b=Math.sqrt(V*V+tt*tt+it*it)||1;Gi*kt.mass/(b*b)}this.prevVel=[this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]];const Z=this.state.velocity[0]-this.prevVel[0],Kt=this.state.velocity[1]-this.prevVel[1],Ct=this.state.velocity[2]-this.prevVel[2],It=Math.sqrt(Z*Z+Kt*Kt+Ct*Ct),St=e>0?It/(e*9.80665):1;if(St>2.5?this.screenShake=Math.min(1,(St-2.5)/5):this.screenShake*=Math.exp(-3*e),this.screenShake>.01){const V=(Math.random()-.5)*this.screenShake*.01,tt=(Math.random()-.5)*this.screenShake*.01;this.rocketGroup.position.x+=V,this.rocketGroup.position.z+=tt}const yt=W/1e3,Xt=45+Math.min(8,Math.max(0,yt-3)*.06),ee=this.sceneMgr.camera.fov,he=ee+(Xt-ee)*e*1.2;Math.abs(he-ee)>.01&&(this.sceneMgr.camera.fov=he,this.sceneMgr.camera.updateProjectionMatrix());const nt=Math.min(1,Math.max(0,(Ut??0)/3e4)),D=.02*(1-nt)+0*nt,lt=.05*(1-nt)+0*nt,ct=.15*(1-nt)+.01*nt;this.sceneMgr.scene.background=this.sceneMgr.scene.background.setRGB(D,lt,ct),new P(0,1,0).applyQuaternion(this.rocketQuat);const wt=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),Dt=wt>.01?[this.state.velocity[0]/wt,this.state.velocity[1]/wt,this.state.velocity[2]/wt]:[0,1,0],re=Oe(this.state.position,this.system),ne=this.state.position[0]-re.position[0],ae=this.state.position[1]-re.position[1],le=this.state.position[2]-re.position[2],ce=Math.sqrt(ne*ne+ae*ae+le*le)||1,Ie=this.state.velocity[0],Gt=this.state.velocity[1],Ht=this.state.velocity[2],be=ae*Ht-le*Gt,$t=le*Ie-ne*Ht,Ue=ne*Gt-ae*Ie,cn=Math.sqrt(be*be+$t*$t+Ue*Ue)||1,hn=[],ie={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",pluto:"#ddccbb"};for(const V of this.system.bodies){if(V.mass<=0)continue;const tt=V.position[0]-this.state.position[0],it=V.position[1]-this.state.position[1],b=V.position[2]-this.state.position[2],I=Math.sqrt(tt*tt+it*it+b*b)||1;hn.push({name:V.name,dir:[tt/I,it/I,b/I],color:ie[V.name]||"#888"})}this.hud.setNavballData([l.x,l.y,l.z],Dt,[ne/ce,ae/ce,le/ce],[be/cn,$t/cn,Ue/cn],hn)}performStage(){const t=this.findLowestDecoupler(this.rocket.assembly.roots);if(!t){xe.show("No decouplers to stage.");return}this.sound.playStaging();const e=this.rocketGroup.getObjectByName(t.part.id);if(e){const n=[],i=[];for(let h=0;h<16;h++){const d=.02+Math.random()*.04,f=new pe(d,4,3),g=new Pe({color:h<4?16746564:11184810,transparent:!0,opacity:.9,blending:dn,depthWrite:!1}),y=new ot(f,g),m=h/16*Math.PI*2+Math.random()*.3,p=(Math.random()-.5)*.8;y.position.copy(this.rocketGroup.position),y.position.x+=Math.cos(m)*.15,y.position.y+=p*.1,y.position.z+=Math.sin(m)*.15,this.sceneMgr.scene.add(y),y._life=.6+Math.random()*.4,y._age=0,y._vx=Math.cos(m)*(.8+Math.random()*1.5),y._vy=p*.5,y._vz=Math.sin(m)*(.8+Math.random()*1.5),this.explosionMeshes.push(y)}const s=this.rocket.assembly.roots,r=s.indexOf(t);if(r>=0)for(let h=r;h<s.length;h++){const d=this.rocketGroup.getObjectByName(s[h].part.id);if(d){const f=new P;d.getWorldPosition(f),n.push(f),i.push(d),d.removeFromParent()}}for(;e.children.length>0;){const h=e.children[0],d=new P;h.getWorldPosition(d),n.push(d),i.push(h),h.removeFromParent()}const a=Oe(this.state.position,this.system),l=[...this.state.position],c=[a.position[0]-l[0],a.position[1]-l[1],a.position[2]-l[2]],u=Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2])||1;for(let h=0;h<i.length;h++){const d=i[h],f=new on;f.add(d),d.position.set(0,0,0);const g=this.sceneMgr.scene;f.position.copy(n[h]),f.position.x+=(Math.random()-.5)*.5,f.position.y+=(Math.random()-.5)*.5,f.position.z+=(Math.random()-.5)*.5,f.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),g.add(f);const y=1+Math.random()*2,m=[this.state.velocity[0]-c[0]/u*y+(Math.random()-.5)*.5,this.state.velocity[1]-c[1]/u*y+(Math.random()-.5)*.5,this.state.velocity[2]-c[2]/u*y+(Math.random()-.5)*.5],p=new fl("debris",100,l,m);this.debris.push({mesh:f,body:p,life:60})}}this.rocket.removeStage(t),this.positionFlameAtNozzle(),this.achievements.unlock("stage_separate"),this.missions.recordStageSeparation(),this.triggerStageFlash(),this.stagePulseTimer=.35,xe.show("Stage separated!")}stagePulseTimer=0;triggerStageFlash(){const t=document.createElement("div");t.className="stage-flash",document.body.appendChild(t),setTimeout(()=>t.remove(),240)}findLowestDecoupler(t){let e=null;const n=i=>{for(const s of i)s.part.kind==="decoupler"&&(e=s),n(s.children)};return n(t),e}toggleParachute(){if(this.rocket.assembly.roots.some(e=>e.part.kind==="parachute")||this.rocket.assembly.roots.some(e=>e.children.some(n=>n.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const e={radius:.6*me,height:1*me};this.deployedChuteMesh=$a(e),this.deployedChuteMesh.scale.setScalar(.001),this.chuteDeployProgress=0,this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null,this.chuteDeployProgress=0);xe.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}}cycleSasMode(){const t=["off","hold","prograde","retrograde"],e=t.indexOf(this.sasMode);this.sasMode=t[(e+1)%t.length],this.sasMode==="hold"&&this.sasTargetQuat.copy(this.rocketQuat);const n={off:"SAS: OFF",hold:"SAS: HOLD attitude",prograde:"SAS: PROGRADE",retrograde:"SAS: RETROGRADE"};xe.show(n[this.sasMode]),this.hud.setSasMode(this.sasMode)}toggleGear(){this.gearDeployed=!this.gearDeployed;for(const t of this.gearMeshes)t.visible=this.gearDeployed;xe.show(this.gearDeployed?"Landing gear deployed":"Landing gear retracted")}doCrash(t,e,n,i,s,r,a){this.crashed||this._spawnProtectionTimer>0||(this.crashed=!0,this.achievements.unlock("crash"),this.sound.playCrash(),this.sound.stopEngine(),xe.show(`CRASH! ${t}`),this.rocketGroup.visible=!1,this.engineFlame.stop(),this.screenShake=3,this.state.position=[e.position[0]+n/r*(a+50),e.position[1]+i/r*(a+50),e.position[2]+s/r*(a+50)],this.state.velocity=[0,0,0],this.state.throttle=0,this.spawnExplosion(this.state.position[0]*Lt,this.state.position[1]*Lt,this.state.position[2]*Lt),this.showCrashOverlay(t))}showCrashOverlay(t){const e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999;pointer-events:none;opacity:0;transition:opacity 0.1s;",document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1"}),setTimeout(()=>{e.style.opacity="0"},100),setTimeout(()=>e.remove(),500);const n=document.createElement("div");n.style.cssText=`
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
    `,document.body.appendChild(n),this.crashOverlay=n,requestAnimationFrame(()=>{n.style.opacity="1"}),n.querySelector("#crash-menu").addEventListener("click",()=>{this.onCrashAction?.("menu")}),n.querySelector("#crash-restart").addEventListener("click",()=>{this.onCrashAction?.("restart")})}updateExplosion(t){if(this.explosionMeshes.length>0)for(let e=this.explosionMeshes.length-1;e>=0;e--){const n=this.explosionMeshes[e],i=n._age+t;n._age=i;const s=n._life,r=i/s;if(r>=1){this.sceneMgr.scene.remove(n),n.geometry.dispose(),n.material.dispose(),this.explosionMeshes.splice(e,1);continue}const a=n._shockRing,l=a?1+r*60:1+r*6;n.scale.setScalar(l);const c=s<1?2:1;n.material.opacity=a?Math.max(0,.85*(1-r*1.5)):Math.max(0,.9*(1-r*c)),n.position.x+=n._vx*t,n.position.y+=n._vy*t,n.position.z+=n._vz*t}}explosionMeshes=[];spawnExplosion(t,e,n){const i=[16746496,16729088,16720384,16737792,13386752,16755200],s=new ot(new pe(.8,12,8),new Pe({color:16755200,transparent:!0,opacity:1,blending:dn,depthWrite:!1}));s.position.set(t,e,n),s._life=.8,s._age=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s);for(let r=0;r<8;r++){const a=1+Math.random()*1.5,l=new pe(a,8,6),c=new Pe({color:i[r%i.length],transparent:!0,opacity:.9,blending:dn,depthWrite:!1}),u=new ot(l,c),h=r/8*Math.PI*2,d=Math.random()*Math.PI,f=.3;u.position.set(t+Math.sin(h)*Math.cos(d)*f,e+Math.sin(d)*f,n+Math.cos(h)*Math.cos(d)*f),u._life=1.5+Math.random()*.5,u._age=0,u._vx=Math.sin(h)*Math.cos(d)*(1+Math.random()*3),u._vy=Math.sin(d)*(1+Math.random()*3),u._vz=Math.cos(h)*Math.cos(d)*(1+Math.random()*3),this.sceneMgr.scene.add(u),this.explosionMeshes.push(u)}for(let r=0;r<4;r++){const a=1.5+Math.random()*2,l=new Pe({color:4473924,transparent:!0,opacity:.4,blending:yi,depthWrite:!1}),c=new ot(new pe(a,6,6),l),u=r/4*Math.PI*2+Math.random()*.5;c.position.set(t+Math.cos(u)*.5,e+(Math.random()-.5)*.3,n+Math.sin(u)*.5),c._life=2+Math.random()*.5,c._age=0,c._vx=Math.cos(u)*(.5+Math.random()*1.5),c._vy=(Math.random()-.5)*1,c._vz=Math.sin(u)*(.5+Math.random()*1.5),this.sceneMgr.scene.add(c),this.explosionMeshes.push(c)}}spawnShockRing(t=16777215){const e=new P;this.rocketGroup.getWorldPosition(e),e.x*Lt,e.y*Lt,e.z*Lt;const n=new vi(.1,.2,64),i=new Pe({color:t,transparent:!0,opacity:.85,side:Be,blending:dn,depthWrite:!1}),s=new ot(n,i);s.position.set(this.rocketGroup.position.x,this.rocketGroup.position.y,this.rocketGroup.position.z),s.quaternion.copy(this.rocketQuat),s.scale.setScalar(1),s._life=1.2,s._age=0,s._shockRing=!0,s._vx=0,s._vy=0,s._vz=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s)}hasLandingLegs(){const t=e=>{for(const n of e)if(n.part.kind==="legs"||t(n.children))return!0;return!1};return t(this.rocket.assembly.roots)}positionFlameAtNozzle(){let t=1/0,e=-1/0;this.rocketGroup.traverse(i=>{if(i instanceof ot){if(this.gearMeshes.includes(i)||i===this.rocketShadow||i===this.reentryGlow||i===this.reentryGlowMesh)return;const s=new En().setFromObject(i);s.min.y<t&&(t=s.min.y),s.max.y>e&&(e=s.max.y)}}),this.rocketBottomY=t===1/0?-.1:t;const n=t===1/0?-.1:t-.01;this.engineFlame.getMesh().position.set(0,n,0),this.engineFlame.getMesh().rotation.set(0,0,0)}dispose(){this.crashOverlay&&(this.crashOverlay.remove(),this.crashOverlay=null),this.sceneMgr.scene.remove(this.rocketGroup);for(const t of this.debris)this.sceneMgr.scene.remove(t.mesh);this.debris=[];for(const t of this.explosionMeshes)this.sceneMgr.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.explosionMeshes=[],this.controls.dispose(),this.chase.dispose(),this.engineFlame.dispose(),this.groundSmoke.dispose(),this.hud.unmount(),this.sound.dispose()}}function gx(o,t,e){const n=o.mass,i=[...o.position],s=[...o.velocity],r=He(t(o),1/n),a=s,c=Ma(o,Ke(i,He(r,.5*e)),Ke(s,He(a,.5*e))),u=He(t(c),1/n),h=Ke(s,He(r,.5*e)),f=Ma(o,Ke(i,He(u,.5*e)),Ke(s,He(h,.5*e))),g=He(t(f),1/n),y=Ke(s,He(u,.5*e)),p=Ma(o,Ke(i,He(g,e)),Ke(s,He(y,e))),_=He(t(p),1/n),M=Ke(s,He(g,e)),S=He(Ke(Ke(r,He(u,2)),Ke(He(g,2),_)),e/6),R=He(Ke(Ke(a,He(h,2)),Ke(He(y,2),M)),e/6);o.position=Ke(i,R),o.velocity=Ke(s,S)}function Ma(o,t,e){return{...o,position:t,velocity:e}}function Ke(o,t){return[o[0]+t[0],o[1]+t[1],o[2]+t[2]]}function He(o,t){return[o[0]*t,o[1]*t,o[2]*t]}class yx{bodies=[];add(t){this.bodies.push(t)}bodyByName(t){return this.bodies.find(e=>e.name===t)}propagate(t,e){let n=t;for(;n>0;){const i=Math.min(e,n);this.step(i),n-=i}}step(t){for(const e of this.bodies){if(e.mass<=0)continue;const n=Rd(e,this.bodies);gx(e,()=>n,t)}}}const ai=pn*mn;class zn extends fl{radius;visualRadius;mesh;constructor(t,e,n,i,s){super(t,e,n,i),this.radius=s,this.visualRadius=s*ai;const r=new pe(this.visualRadius,64,32),a=new te({color:8421504});this.mesh=new ot(r,a),this.mesh.position.set(n[0]*ai,n[1]*ai,n[2]*ai)}getTerrainHeightVisual(t,e,n){return 0}syncMesh(){this.mesh.position.set(this.position[0]*ai,this.position[1]*ai,this.position[2]*ai)}getSurfaceRadiusAt(t){const e=t[0]-this.position[0],n=t[1]-this.position[1],i=t[2]-this.position[2],s=Math.sqrt(e*e+n*n+i*i);if(s===0)return this.radius;const r=e/s,a=n/s,l=i/s,u=this.getTerrainHeightVisual(r,a,l)/ai;return this.radius+u}}const ba=pn*mn,ph=64,li=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},_x=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),u=a*a*(3-2*a),h=l*l*(3-2*l),d=li(n,i,s),f=li(n+1,i,s),g=li(n,i+1,s),y=li(n+1,i+1,s),m=li(n,i,s+1),p=li(n+1,i,s+1),_=li(n,i+1,s+1),M=li(n+1,i+1,s+1);return Li(Li(Li(d,f,c),Li(g,y,c),u),Li(Li(m,p,c),Li(_,M,c),u),h)},Qo=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*_x(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Li=(o,t,e)=>o+(t-o)*e;class xx extends zn{getTerrainHeightVisual(t,e,n){const i=Qo(t*10+500,e*10+600,n*10+700,4),s=Qo(t*40+100,e*40+200,n*40+300,3),r=i*.8+s*.2,a=this.visualRadius*.03;return r>.4?((r-.4)/.6)**2*a:-(.4-r)/.4*a*.12}constructor(t,e){super("mercury",1e24,t,e,244e4);const n=this.visualRadius,s=new Bs().load(zs("/textures/mercury.jpg"),h=>{h.colorSpace=Qt,h.anisotropy=4}),r=new pe(n,ph,ph),a=r.attributes.position,l=new P,c=n*.03;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,g=l.z/n,y=Qo(d*10+500,f*10+600,g*10+700,4),m=Qo(d*40+100,f*40+200,g*40+300,3),p=y*.8+m*.2;let _=0;p>.4?_=((p-.4)/.6)**2*c:_=-(.4-p)/.4*c*.12,l.setLength(n+_),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const u=new te({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new ot(r,u),this.mesh.position.set(t[0]*ba,t[1]*ba,t[2]*ba)}}const mh=`
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
`,vx=`
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
`,Mx=`
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
`;class Ji{group=new on;innerMesh;outerMesh;innerMat;outerMat;constructor(t,e=4491519,n=.7,i,s=16737826,r=3){const a=new Tt(e),l=new Tt(s),c=i??t*.08,u=new P(0,0,0),h=t*1.01,d=new pe(h,64,48);this.innerMat=new Dn({vertexShader:mh,fragmentShader:vx,uniforms:{uSunDir:{value:new P(0,1,0)},uPlanetCenter:{value:u},uInnerRadius:{value:t},uAtmHeight:{value:c},uRayleighCol:{value:a},uMieCol:{value:new Tt(.9,.9,1)},uDensity:{value:n},uTerminatorCol:{value:l},uGlowPower:{value:r}},transparent:!0,blending:dn,depthWrite:!1,side:Ln}),this.innerMesh=new ot(d,this.innerMat),this.group.add(this.innerMesh);const f=t*1.06,g=new pe(f,48,32);this.outerMat=new Dn({vertexShader:mh,fragmentShader:Mx,uniforms:{uSunDir:{value:new P(0,1,0)},uPlanetCenter:{value:u},uInnerRadius:{value:t},uDensity:{value:n*.5},uGlowPower:{value:r}},transparent:!0,blending:dn,depthWrite:!1,side:Ln}),this.outerMesh=new ot(g,this.outerMat),this.group.add(this.outerMesh)}setSunDirection(t,e){const n=new P().copy(t).sub(e).normalize();this.innerMat.uniforms.uSunDir.value.copy(n),this.outerMat.uniforms.uSunDir.value.copy(n)}getMesh(){return this.group}dispose(){this.innerMat.dispose(),this.outerMat.dispose(),this.innerMesh.geometry.dispose(),this.outerMesh.geometry.dispose()}}const Sa=pn*mn,gh=64,ci=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},bx=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),u=a*a*(3-2*a),h=l*l*(3-2*l),d=ci(n,i,s),f=ci(n+1,i,s),g=ci(n,i+1,s),y=ci(n+1,i+1,s),m=ci(n,i,s+1),p=ci(n+1,i,s+1),_=ci(n,i+1,s+1),M=ci(n+1,i+1,s+1);return Ii(Ii(Ii(d,f,c),Ii(g,y,c),u),Ii(Ii(m,p,c),Ii(_,M,c),u),h)},tr=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*bx(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Ii=(o,t,e)=>o+(t-o)*e;class Sx extends zn{getTerrainHeightVisual(t,e,n){const i=tr(t*6+50,e*6+100,n*6+150,4),s=tr(t*15+200,e*15+300,n*15+400,3),r=i*.6+s*.4,a=this.visualRadius*.015;return r>.35?((r-.35)/.65)**2*a:-(.35-r)/.35*a*.05}atmosphereGlow;constructor(t,e){super("venus",146e23,t,e,6052e3);const n=this.visualRadius,s=new Bs().load(zs("/textures/venus.jpg"),h=>{h.colorSpace=Qt,h.anisotropy=4}),r=new pe(n,gh,gh),a=r.attributes.position,l=new P,c=n*.015;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,g=l.z/n,y=tr(d*6+50,f*6+100,g*6+150,4),m=tr(d*15+200,f*15+300,g*15+400,3),p=y*.6+m*.4;let _=0;p>.35?_=((p-.35)/.65)**2*c:_=-(.35-p)/.35*c*.05,l.setLength(n+_),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const u=new te({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new ot(r,u),this.mesh.position.set(t[0]*Sa,t[1]*Sa,t[2]*Sa),this.atmosphereGlow=new Ji(n,15247436,.4),this.mesh.add(this.atmosphereGlow.getMesh())}}const Ta=pn*mn;class Tx extends zn{constructor(t,e){super("pluto",44e20,t,e,1188e3);const n=new pe(this.visualRadius,32,16),i=new te({color:14535867,roughness:.9,metalness:0});this.mesh=new ot(n,i),this.mesh.position.set(t[0]*Ta,t[1]*Ta,t[2]*Ta)}}const Ea=pn*mn;function Ex(o){let t=o|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function wx(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=n.createImageData(2048,1024);for(let r=0;r<1024;r++)for(let a=0;a<2048;a++){const l=r/1024,c=a/2048,u=(l-.5)*Math.PI,h=c*Math.PI*2,d=Math.cos(u)*Math.cos(h),f=Math.cos(u)*Math.sin(h),g=Math.sin(u);let y=(Math.sin(d*3+f*1.3+g*.7)*.5+.5)*.4+(Math.sin((d+1.7)*6+g*1.1)*.5+.5)*.3;y*=Math.max(0,1-Math.abs(l-.5)*1.2),y=Math.max(0,Math.min(255,(y-.4)*2.5*255));const m=(r*2048+a)*4;i.data[m]=i.data[m+1]=i.data[m+2]=y,i.data[m+3]=255}n.putImageData(i,0,0);const s=new en(e);return s.wrapS=s.wrapT=ze,s}function Ax(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");n.fillStyle="#000000",n.fillRect(0,0,1024,512);const i=Ex(42),s=[{lat:.7,lon:-1.8,rx:.5,ry:.8},{lat:-.4,lon:-1.3,rx:.6,ry:.35},{lat:.1,lon:.6,rx:.55,ry:.4},{lat:.5,lon:1.5,rx:.6,ry:.4},{lat:.85,lon:.4,rx:.25,ry:.3}];for(const a of s){const l=(a.lon+Math.PI)/(2*Math.PI)*1024,c=(Math.PI/2-a.lat)/Math.PI*512,u=a.rx/(2*Math.PI)*1024,h=a.ry/Math.PI*512;for(let d=0;d<30;d++){const f=(i()-.5)*u*2,g=(i()-.5)*h*2;if((f/u)**2+(g/h)**2>1)continue;const y=120+Math.floor(i()*135);n.fillStyle=`rgb(${y},${Math.floor(y*.85)},${Math.floor(y*.5)})`,n.beginPath(),n.arc(l+f,c+g,1+i()*3,0,Math.PI*2),n.fill()}}const r=new en(e);return r.wrapS=r.wrapT=ze,r.colorSpace=Qt,r}class Rx extends zn{atmosphereGlow;cloudMesh;constructor(t,e){super("earth",E_,t,e,6371e3*2);const n=this.visualRadius,i=320,s=new pe(n,i,i),r=s.attributes.position,a=new P,l=[],c=n*.035,u=n*.007;for(let y=0;y<r.count;y++){a.fromBufferAttribute(r,y);const m=a.x/n,p=a.y/n,_=a.z/n,M=this.terrainAt(m,p,_,c,u);a.setLength(n+M),r.setXYZ(y,a.x,a.y,a.z);const S=Math.max(-1,Math.min(1,M/c));let R,w,T;S<-.6?(R=.005,w=.04,T=.22):S<-.15?(R=.02,w=.1,T=.38):S<.02?(R=.5,w=.46,T=.28):S<.22?(R=.12,w=.35,T=.08):S<.5?(R=.18,w=.25,T=.08):S<.78?(R=.35,w=.3,T=.2):(R=.92,w=.88,T=.85),l.push(R,w,T)}r.needsUpdate=!0,s.setAttribute("color",new Me(l,3)),s.computeVertexNormals();const h=new te({roughness:.85,metalness:.05,vertexColors:!0,emissiveMap:Ax(),emissive:new Tt(16768358),emissiveIntensity:.3});this.mesh=new ot(s,h),this.mesh.position.set(t[0]*Ea,t[1]*Ea,t[2]*Ea),this.loadTexture().catch(()=>{}),this.atmosphereGlow=new Ji(n,4491519,2.5,n*.1),this.mesh.add(this.atmosphereGlow.getMesh());const d=wx(),f=new te({map:d,transparent:!0,opacity:.3,depthWrite:!1,side:Be,roughness:1,metalness:0}),g=new pe(n*1.008,64,32);this.cloudMesh=new ot(g,f),this.cloudMesh.position.copy(this.mesh.position),this.mesh.add(this.cloudMesh)}terrainAt(t,e,n,i,s){const r=Math.sin(t*5+e*3.5)*.5+Math.cos(e*4.5-n*3)*.3,a=Math.sin(n*7+t*3+e*5)*.2+Math.sin(t*13+e*9+n*11)*.12,l=Math.sin(t*20+n*16)*.06+Math.cos(e*18+t*13)*.04,c=Math.sin(t*38+e*33+n*42)*.02,u=((r+a+l+c)*.35+.5)*1.05;if(u>.48){const h=(u-.48)/.52;return h*h*i}return u>.38?(u-.38)/.1*i*.2:-(.38-u)/.38*s}async loadTexture(){try{const t=await new Bs().loadAsync(zs("/textures/earth_daymap.jpg"));t.colorSpace=Qt,this.mesh.material.map=t,this.mesh.material.needsUpdate=!0}catch{}}updateClouds(t,e){if(this.cloudMesh.rotation.y+=t*.01,e){const n=this.mesh.material,i=Math.sqrt(e[0]**2+e[1]**2+e[2]**2)||1;this.mesh.lookAt(this.mesh.position.x+e[0]/i*100,this.mesh.position.y+e[1]/i*100,this.mesh.position.z+e[2]/i*100),n.emissiveIntensity=.15}}}const wa=pn*mn,yh=64,hi=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},Cx=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),u=a*a*(3-2*a),h=l*l*(3-2*l),d=hi(n,i,s),f=hi(n+1,i,s),g=hi(n,i+1,s),y=hi(n+1,i+1,s),m=hi(n,i,s+1),p=hi(n+1,i,s+1),_=hi(n,i+1,s+1),M=hi(n+1,i+1,s+1);return Di(Di(Di(d,f,c),Di(g,y,c),u),Di(Di(m,p,c),Di(_,M,c),u),h)},er=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Cx(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Di=(o,t,e)=>o+(t-o)*e;class Px extends zn{getTerrainHeightVisual(t,e,n){const i=er(t*8+100,e*8+200,n*8+300,4),s=er(t*30+400,e*30+500,n*30+600,3),r=i*.7+s*.3,a=this.visualRadius*.04;return r>.45?((r-.45)/.55)**2*a:-(.45-r)/.45*a*.15}constructor(t,e){super("moon",22e22,t,e,1737e3);const n=this.visualRadius,s=new Bs().load(zs("/textures/moon.jpg"),h=>{h.colorSpace=Qt,h.anisotropy=4}),r=new pe(n,yh,yh),a=r.attributes.position,l=new P,c=n*.04;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,g=l.z/n,y=er(d*8+100,f*8+200,g*8+300,4),m=er(d*30+400,f*30+500,g*30+600,3),p=y*.7+m*.3;let _=0;p>.45?_=((p-.45)/.55)**2*c:_=-(.45-p)/.45*c*.15,l.setLength(n+_),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const u=new te({map:s,roughness:.95,metalness:0,color:16777215});this.mesh=new ot(r,u),this.mesh.position.set(t[0]*wa,t[1]*wa,t[2]*wa)}}const Aa=pn*mn,_h=64,di=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},Lx=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),u=a*a*(3-2*a),h=l*l*(3-2*l),d=di(n,i,s),f=di(n+1,i,s),g=di(n,i+1,s),y=di(n+1,i+1,s),m=di(n,i,s+1),p=di(n+1,i,s+1),_=di(n,i+1,s+1),M=di(n+1,i+1,s+1);return Ui(Ui(Ui(d,f,c),Ui(g,y,c),u),Ui(Ui(m,p,c),Ui(_,M,c),u),h)},nr=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Lx(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Ui=(o,t,e)=>o+(t-o)*e;class Ix extends zn{getTerrainHeightVisual(t,e,n){const i=nr(t*4+10,e*4+20,n*4+30,5),s=nr(t*20+100,e*20+200,n*20+300,3),r=i*.7+s*.3,a=this.visualRadius*.035;return r>.4?((r-.4)/.6)**2*a:-(.4-r)/.4*a*.1}atmosphereGlow;constructor(t,e){super("mars",19e23,t,e,339e4);const n=this.visualRadius,s=new Bs().load(zs("/textures/mars.jpg"),h=>{h.colorSpace=Qt,h.anisotropy=4}),r=new pe(n,_h,_h),a=r.attributes.position,l=new P,c=n*.035;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,g=l.z/n,y=nr(d*4+10,f*4+20,g*4+30,5),m=nr(d*20+100,f*20+200,g*20+300,3),p=y*.7+m*.3;let _=0;p>.4?_=((p-.4)/.6)**2*c:_=-(.4-p)/.4*c*.1,l.setLength(n+_),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const u=new te({map:s,roughness:.85,metalness:0,color:16777215});this.mesh=new ot(r,u),this.mesh.position.set(t[0]*Aa,t[1]*Aa,t[2]*Aa),this.atmosphereGlow=new Ji(n,13920842,.25),this.mesh.add(this.atmosphereGlow.getMesh())}}function ui(o,t,e){const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)}function Dx(o,t,e){const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),u=a*a*(3-2*a),h=l*l*(3-2*l),d=ui(n,i,s),f=ui(n+1,i,s),g=ui(n,i+1,s),y=ui(n+1,i+1,s),m=ui(n,i,s+1),p=ui(n+1,i,s+1),_=ui(n,i+1,s+1),M=ui(n+1,i+1,s+1);return Ni(Ni(Ni(d,f,c),Ni(g,y,c),u),Ni(Ni(m,p,c),Ni(_,M,c),u),h)}function Mi(o,t,e,n){let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Dx(o*l,t*l,e*l),r+=s,s*=.5}return i/r}function Ni(o,t,e){return o+(t-o)*e}const Ra=pn*mn,xh=64;class Ux extends zn{atmosphereGlow;constructor(t,e){super("jupiter",19e26,t,e,69911e3);const n=this.visualRadius,i=U_(),s=new pe(n,xh,xh),r=s.attributes.position,a=new P,l=n*.02;for(let u=0;u<r.count;u++){a.fromBufferAttribute(r,u);const h=a.x/n,d=a.y/n,f=a.z/n,g=Mi(h*8+10,d*8+20,f*8+30,4),y=Mi(h*30+100,d*30+200,f*30+300,3),m=g*.7+y*.3;let p=0;m>.4?p=((m-.4)/.6)**2*l:p=-(.4-m)/.4*l*.1,a.setLength(n+p),r.setXYZ(u,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new te({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ot(s,c),this.mesh.position.set(t[0]*Ra,t[1]*Ra,t[2]*Ra),this.mesh.rotation.z=3.1*Math.PI/180,this.atmosphereGlow=new Ji(n,13935988,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const Ca=pn*mn;function Nx(){const e=document.createElement("canvas");e.width=1024,e.height=64;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,1024,0);i.addColorStop(0,"#8a7a5a"),i.addColorStop(.05,"#b8a888"),i.addColorStop(.12,"#d4c8a8"),i.addColorStop(.2,"#c0b898"),i.addColorStop(.35,"#e8ddd0"),i.addColorStop(.5,"#c0b090"),i.addColorStop(.65,"#d8ccb0"),i.addColorStop(.8,"#a89878"),i.addColorStop(.9,"#786858"),i.addColorStop(1,"#584838"),n.fillStyle=i,n.fillRect(0,0,1024,64);for(let r=0;r<8e3;r++){const a=Math.random()*1024,l=Math.random()*64,c=1+Math.random()*4,u=120+Math.random()*80;n.fillStyle=`rgba(${u},${u-20},${u-40},${.2+Math.random()*.4})`,n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.fill()}n.fillStyle="rgba(0,0,0,0.7)",n.fillRect(1024*.43,0,1024*.04,64),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(1024*.72,0,1024*.015,64),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(1024*.1,0,1024*.02,64),n.fillRect(1024*.17,0,1024*.01,64),n.fillRect(1024*.55,0,1024*.02,64),n.fillStyle="rgba(200,190,170,0.15)";for(let r=0;r<1024;r+=8)n.fillRect(r,0,2,64);const s=new en(e);return s.wrapS=ze,s.wrapT=ze,s.anisotropy=4,s}class Fx extends zn{atmosphereGlow;constructor(t,e){super("saturn",5683e23,t,e,58232e3);const n=this.visualRadius,i=N_(),s=new pe(n,64,32),r=s.attributes.position,a=new P,l=n*.015;for(let p=0;p<r.count;p++){a.fromBufferAttribute(r,p);const _=a.x/n,M=a.y/n,S=a.z/n,R=Mi(_*8+10,M*8+20,S*8+30,4),w=Mi(_*30+100,M*30+200,S*30+300,3),T=R*.7+w*.3;let O=0;T>.4?O=((T-.4)/.6)**2*l:O=-(.4-T)/.4*l*.1,a.setLength(n+O),r.setXYZ(p,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new te({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ot(s,c),this.mesh.position.set(t[0]*Ca,t[1]*Ca,t[2]*Ca),this.mesh.rotation.z=26.7*Math.PI/180,this.atmosphereGlow=new Ji(n,16049313,.1),this.mesh.add(this.atmosphereGlow.getMesh());const u=Nx(),h=new vi(n*1.15,n*2.4,256),d=new Pe({map:u,side:Be,transparent:!0,opacity:.8,depthWrite:!1}),f=new ot(h,d);f.rotation.x=-Math.PI/2,f.rotation.z=26.7*Math.PI/180,this.mesh.add(f);const g=new vi(n*2.4,n*2.8,128),y=new Pe({color:8943720,side:Be,transparent:!0,opacity:.15,depthWrite:!1}),m=new ot(g,y);m.rotation.x=-Math.PI/2,m.rotation.z=26.7*Math.PI/180,this.mesh.add(m)}}const Pa=pn*mn;class kx extends zn{atmosphereGlow;constructor(t,e){super("uranus",8681e22,t,e,25362e3);const n=this.visualRadius,i=F_(),s=new pe(n,64,32),r=s.attributes.position,a=new P,l=n*.015;for(let f=0;f<r.count;f++){a.fromBufferAttribute(r,f);const g=a.x/n,y=a.y/n,m=a.z/n,p=Mi(g*6+10,y*6+20,m*6+30,4),_=Mi(g*25+400,y*25+500,m*25+600,3),M=p*.7+_*.3;let S=0;M>.4?S=((M-.4)/.6)**2*l:S=-(.4-M)/.4*l*.1,a.setLength(n+S),r.setXYZ(f,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new te({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ot(s,c),this.mesh.position.set(t[0]*Pa,t[1]*Pa,t[2]*Pa),this.mesh.rotation.z=-97.8*Math.PI/180,this.atmosphereGlow=new Ji(n,5230824,.1),this.mesh.add(this.atmosphereGlow.getMesh());const u=new vi(n*1.2,n*2.1,64),h=new Pe({color:11184844,side:Be,transparent:!0,opacity:.3}),d=new ot(u,h);d.rotation.x=-Math.PI/2,d.rotation.z=97.8*Math.PI/180,this.mesh.add(d)}}const La=pn*mn;class Ox extends zn{atmosphereGlow;constructor(t,e){super("neptune",1024e23,t,e,24622e3);const n=this.visualRadius,i=k_(),s=new pe(n,64,32),r=s.attributes.position,a=new P,l=n*.015;for(let u=0;u<r.count;u++){a.fromBufferAttribute(r,u);const h=a.x/n,d=a.y/n,f=a.z/n,g=Mi(h*6+10,d*6+20,f*6+30,4),y=Mi(h*25+100,d*25+200,f*25+300,3),m=g*.7+y*.3;let p=0;m>.4?p=((m-.4)/.6)**2*l:p=-(.4-m)/.4*l*.1,a.setLength(n+p),r.setXYZ(u,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new te({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ot(s,c),this.mesh.position.set(t[0]*La,t[1]*La,t[2]*La),this.mesh.rotation.z=28.3*Math.PI/180,this.atmosphereGlow=new Ji(n,4944093,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const bs=pn*mn,Hx=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`,Bx=`
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
`;class zx extends fl{light;visualRadius;mesh;constructor(t,e,n=2e26){super("sun",n,t,e),this.visualRadius=100;const i=new pe(this.visualRadius,32,16),s=new Dn({vertexShader:Hx,fragmentShader:Bx,uniforms:{uTime:{value:0},uColor:{value:new Tt(16763904)},uIntensity:{value:1.5}},transparent:!0,blending:dn,depthWrite:!1,side:Be});this.mesh=new ot(i,s),this.mesh.position.set(t[0]*bs,t[1]*bs,t[2]*bs),this.light=new Ar(16772829,5),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z);const r=Gx(),a=new od({map:r,blending:dn,depthWrite:!1,transparent:!0,opacity:1}),l=new iy(a);l.scale.set(25e4,25e4,1),this.mesh.add(l),this.sunMaterial=s}sunMaterial;update(t){this.sunMaterial.uniforms.uTime.value+=t}syncMesh(){this.mesh.position.set(this.position[0]*bs,this.position[1]*bs,this.position[2]*bs),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z)}}function Gx(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255, 220, 100, 1)"),n.addColorStop(.1,"rgba(255, 200, 80, 0.8)"),n.addColorStop(.3,"rgba(255, 160, 40, 0.4)"),n.addColorStop(.5,"rgba(255, 100, 20, 0.15)"),n.addColorStop(.7,"rgba(255, 60, 10, 0.05)"),n.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=new en(t);return i.needsUpdate=!0,i}class Ia{assembly;fuelTanks;constructor(t){this.assembly=t,this.fuelTanks=[],Cd(t.roots,this.fuelTanks)}dryMass(){return this.assembly.totalMass()}totalFuelMass(){return this.fuelTanks.reduce((t,e)=>t+e.remaining,0)}totalMass(){return this.dryMass()+this.totalFuelMass()}consumeFuel(t,e){let n=0;for(let i=this.fuelTanks.length-1;i>=0;i--){const s=this.fuelTanks[i];if(s.remaining<=0)continue;const r=t*e-n;if(r<=0)break;const a=Math.min(s.remaining,r);s.remaining-=a,n+=a}return n}removeStage(t){const e=this.assembly.roots,n=e.indexOf(t);if(n<0)return;const i=e.length-n,s=new Set,r=a=>{s.add(a),a.children.forEach(r)};r(t);for(let a=1;a<i;a++){const l=e[n+a];l&&r(l)}this.fuelTanks=this.fuelTanks.filter(a=>!s.has(a.node)),e.splice(n,i),t.children=[]}}function Cd(o,t){for(const e of o)e.part.fuelCapacity&&t.push({node:e,remaining:e.part.fuelCapacity,capacity:e.part.fuelCapacity}),Cd(e.children,t)}const vh="ellipse_achievements";class Wx{unlocked=new Set;callbacks=[];constructor(){const t=localStorage.getItem(vh);if(t)try{JSON.parse(t).forEach(e=>this.unlocked.add(e))}catch{}}unlock(t){this.unlocked.has(t)||(this.unlocked.add(t),localStorage.setItem(vh,JSON.stringify([...this.unlocked])),this.callbacks.forEach(e=>e(t)))}isUnlocked(t){return this.unlocked.has(t)}list(){return[...this.unlocked]}onUnlock(t){this.callbacks.push(t)}}const Vx=[{id:"first_launch",name:"First Launch",description:"Successful liftoff from the pad"},{id:"reach_space",name:"Edge of Space",description:"Reach 100 km altitude"},{id:"reach_orbit",name:"Orbital",description:"Achieve a stable orbit"},{id:"first_landing",name:"Soft Touchdown",description:"Land at v < 3 m/s"},{id:"parachute_landing",name:"Parachute Pioneer",description:"Land using only a parachute"},{id:"moon_landing",name:"Moon Walker",description:"Land on the Moon"},{id:"no_damage",name:"Pristine",description:"Complete a flight without damage"},{id:"one_stage",name:"Single Stage",description:"Reach orbit without staging"},{id:"crash",name:"Rapid Unscheduled Disassembly",description:"Crash your rocket"},{id:"land_earth",name:"Home Sweet Home",description:"Land safely on Earth"},{id:"land_moon",name:"Lunar Landing",description:"Land safely on the Moon"},{id:"land_mars",name:"Red Planet Touchdown",description:"Land safely on Mars"},{id:"land_venus",name:"Venusian Visit",description:"Land safely on Venus"},{id:"land_mercury",name:"Mercurial Touch",description:"Land safely on Mercury"},{id:"stage_separate",name:"Stage Separation",description:"Separate a stage in flight"}],Mh="ellipse_missions_completed",bh="ellipse_missions_score";class Xx{completed=new Set;stageCountThisFlight=0;landedThisFrame=!1;score=0;onScoreChange=[];constructor(){const t=localStorage.getItem(Mh);if(t)try{JSON.parse(t).forEach(e=>this.completed.add(e))}catch{}this.score=parseInt(localStorage.getItem(bh)??"0",10)||0}get totalScore(){return this.score}getCompleted(){return[...this.completed]}isCompleted(t){return this.completed.has(t)}onScore(t){this.onScoreChange.push(t)}recordStageSeparation(){this.stageCountThisFlight++,this.tryUnlock("stage_master",this.stageCountThisFlight>=3)}recordLanding(t){this.landedThisFrame=!0,t==="earth"?this.tryUnlock("land_earth",!0):t==="moon"?this.tryUnlock("land_moon",!0):t==="mars"&&this.tryUnlock("land_mars",!0)}resetFlight(){this.stageCountThisFlight=0,this.landedThisFrame=!1}evaluate(t){t.launched&&this.tryUnlock("first_flight",!0),t.maxAltitude>=1e4&&this.tryUnlock("reach_10km",!0),t.maxAltitude>=1e5&&this.tryUnlock("reach_space",!0),t.maxSpeed>=3e3&&this.tryUnlock("speed_demon",!0),t.maxSpeed>=7e3&&this.tryUnlock("ev_astronaut",!0),t.bound&&t.periapsis>8e4&&t.refBody==="earth"&&this.tryUnlock("reach_orbit",!0),t.bound&&t.apoapsis>5e5&&t.refBody==="earth"&&this.tryUnlock("high_orbit",!0),t.bound&&t.periapsis>1e3&&t.refBody==="moon"&&this.tryUnlock("munar_orbit",!0)}tryUnlock(t,e){if(!e||this.completed.has(t))return;this.completed.add(t),localStorage.setItem(Mh,JSON.stringify([...this.completed]));const n=lr.find(i=>i.id===t);n&&(this.score+=n.reward,localStorage.setItem(bh,String(this.score)),this.onScoreChange.forEach(i=>i(this.score)),xe.show(`☑ ${n.name} (+${n.reward})`,3200))}}const Da={units:"metric",autoSave:!0,difficulty:"normal",musicVolume:.7,sfxVolume:.8},Pd="ellipse_settings";function qx(){const o=localStorage.getItem(Pd);if(!o)return{...Da};try{return{...Da,...JSON.parse(o)}}catch{return{...Da}}}function Sh(o){localStorage.setItem(Pd,JSON.stringify(o))}class Yx{root;onClose;current;constructor(t,e){this.current=t,this.onClose=e,this.root=document.createElement("div"),this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(6, 8, 20, 0.88);
      display: flex; align-items: center; justify-content: center;
    `;const n=document.createElement("div");n.className="panel panel--elevated",n.style.cssText="padding: var(--space-6); min-width: 400px;";const i=document.createElement("h2");i.className="text-display-sm",i.textContent="Settings",i.style.cssText="margin: 0 0 var(--space-5);",n.appendChild(i);const s=this.makeRow("Units",["metric","imperial"],t.units,c=>{this.current.units=c});n.appendChild(s);const r=this.makeRow("Difficulty",["easy","normal","hard","realistic"],t.difficulty,c=>{this.current.difficulty=c});n.appendChild(r);const a=this.makeToggle("Auto-save",t.autoSave,c=>{this.current.autoSave=c});n.appendChild(a);const l=document.createElement("button");l.className="btn btn--primary",l.textContent="Save & Close",l.style.cssText="margin-top: var(--space-4); width: 100%; padding: 12px;",l.addEventListener("click",()=>{Sh(this.current),this.onClose()}),n.appendChild(l),this.root.appendChild(n)}makeRow(t,e,n,i){const s=document.createElement("div");s.style.cssText="margin: var(--space-3) 0;";const r=document.createElement("div");r.className="text-caption",r.textContent=t,r.style.cssText="margin-bottom: var(--space-2);",s.appendChild(r);const a=document.createElement("div");a.style.cssText="display:flex;gap:var(--space-2);";for(const l of e){const c=document.createElement("button");c.className=`btn${l===n?" btn--secondary":""}`,c.textContent=l,l===n&&(c.style.borderColor="var(--accent-blue)"),c.addEventListener("click",()=>{i(l),Sh(this.current)}),a.appendChild(c)}return s.appendChild(a),s}makeToggle(t,e,n){const i=document.createElement("div");i.style.cssText="margin: var(--space-3) 0; display: flex; justify-content: space-between; align-items: center;";const s=document.createElement("span");s.className="text-body",s.textContent=t;const r=document.createElement("input");return r.type="checkbox",r.checked=e,r.addEventListener("change",()=>n(r.checked)),i.appendChild(s),i.appendChild(r),i}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove()}}function ir(o){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle=o,e.fillRect(0,0,64,64),e.strokeStyle="#000",e.lineWidth=2,e.strokeRect(0,0,64,64),e.strokeRect(16,16,32,32);const n=new en(t);return n.wrapS=n.wrapT=_n,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}ir("#8899aa"),ir("#808080"),ir("#808080"),ir("#000000");async function Wi(o,t=Qt){const e=await new Promise((i,s)=>{const r=new Image;r.onload=()=>i(r),r.onerror=()=>s(new Error(`Failed: ${o}`)),r.src=o}),n=new Ge(e);return n.colorSpace=t,n.wrapS=n.wrapT=_n,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}async function sr(o){const[t,e,n,i]=await Promise.all([Wi(`/textures/${o}_color.jpg`,Qt),Wi(`/textures/${o}_normal.jpg`,Le),Wi(`/textures/${o}_rough.jpg`,Le),Wi(`/textures/${o}_metal.jpg`,Le)]);return{color:t,normal:e,roughness:n,metalness:i}}let Kx=!1,$x=null,jx=null,Zx=null,Jx=null,Qx=null,or=null;function tv(){return or||(or=(async()=>{try{[$x,jx,Zx,Jx,Qx]=await Promise.all([sr("metal013"),sr("plates"),sr("metal009"),sr("metal021"),(async()=>{const[o,t,e]=await Promise.all([Wi("/textures/fabric_color.jpg",Qt),Wi("/textures/fabric_normal.jpg",Le),Wi("/textures/fabric_rough.jpg",Le)]);return{color:o,normal:t,roughness:e,metalness:e}})()]),Kx=!0}catch(o){console.error("Texture loading failed, using fallback",o)}})(),or)}class ev{renderer;sceneMgr;system;achievements;missions;mainMenu;vab;flight;constructor(){tv(),this.renderer=new By,this.sceneMgr=new Gy,this.achievements=new Wx,this.missions=new Xx,this.system=new yx;const t=2e26;this.system.add(new zx([0,0,0],[0,0,0],t)),this.system.add(new xx([2e8,0,2e7],[0,0,38e3])),this.system.add(new Sx([6e8,0,-6e7],[0,0,21e3]));const e=[1e9,0,0],n=[0,0,17e3];this.system.add(new Rx(e,n));const i=[e[0],0,e[2]+6e7],s=[0,0,n[2]+900];this.system.add(new Px(i,s)),this.system.add(new Ix([15e8,1e9,-4e8],[0,0,13500])),this.system.add(new Ux([3e9,-6e8,2e8],[0,0,9e3])),this.system.add(new Fx([56e8,4e8,-4e8],[0,0,6800])),this.system.add(new kx([11e9,-2e8,6e8],[0,0,4800])),this.system.add(new Ox([17e9,8e8,0],[0,0,3800])),this.system.add(new Tx([23e9,16e8,-1e9],[0,0,2e3])),document.getElementById("app").appendChild(this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.sceneMgr.camera.aspect=window.innerWidth/window.innerHeight,this.sceneMgr.camera.updateProjectionMatrix()}),this.achievements.onUnlock(r=>{const l=Vx.find(u=>u.id===r)?.name??r,c=document.createElement("div");c.className="achievement-pop",c.style.cssText="position:fixed;top:80px;right:16px;z-index:310;background:rgba(8,10,24,0.92);border:1px solid var(--accent-gold);border-radius:8px;padding:10px 14px;box-shadow:var(--shadow-glow-gold);font-family:system-ui,sans-serif;max-width:240px;pointer-events:none;",c.innerHTML=`<div style="color:var(--accent-gold);font-size:9px;letter-spacing:0.15em;margin-bottom:2px;">★ ACHIEVEMENT</div><div style="color:var(--text-primary);font-size:13px;font-weight:600;">${l}</div>`,document.body.appendChild(c),setTimeout(()=>{c.style.transition="opacity 300ms ease-in, transform 300ms ease-in",c.style.opacity="0",c.style.transform="translateX(40px)",setTimeout(()=>c.remove(),320)},3200)})}async start(){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:9998;background:var(--space-deep);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;font-family:system-ui,sans-serif;",t.innerHTML=`
      <div style="width:46px;height:46px;border:2px solid rgba(234,205,158,0.2);border-top-color:var(--accent-gold);border-radius:50%;animation:spin 0.9s linear infinite;"></div>
      <div style="color:var(--accent-gold);font-size:13px;letter-spacing:0.2em;">LOADING</div>
      <div id="load-progress" style="color:rgba(244,245,242,0.4);font-size:10px;letter-spacing:0.1em;">preparing assets</div>
    `;const e=document.createElement("style");e.textContent="@keyframes spin{to{transform:rotate(360deg);}}",document.head.appendChild(e),document.body.appendChild(t);const n=t.querySelector("#load-progress"),i=["/models/agena.glb","/models/saturn_v.glb","/models/apollo_soyuz.glb","/models/ares_1.glb","/models/apollo_lunar_module.glb","/models/atlas_6.glb","/models/atlas_9.glb","/models/crawler.glb"],{loadGLTF:s}=await Th(async()=>{const{loadGLTF:a}=await Promise.resolve().then(()=>Sd);return{loadGLTF:a}},void 0);let r=0;await Promise.allSettled(i.map(async a=>{await s(a,1),r++,n&&(n.textContent=`${r}/${i.length} models`)})),t.style.transition="opacity 320ms ease-out",requestAnimationFrame(()=>{t.style.opacity="0"}),setTimeout(()=>{t.remove(),e.remove()},360),this.showMainMenu(),this.loop()}showMainMenu(){this.transitionTo(()=>{this.unmountCurrent(),this.sceneMgr.scene.background=new Tt(0);const t=tx()?()=>{const e=Q_();if(e){const n=new Ia(e);this.showFlight(n)}else this.showFlight()}:null;this.mainMenu=new Wy(()=>this.showFlight(),()=>this.showVab(),()=>this.showSettings(),t??void 0,this.missions),this.mainMenu.mount()})}showSettings(){const t=new Yx(qx(),()=>t.unmount());t.mount()}showVab(){this.transitionTo(()=>{this.unmountCurrent(),this.vab=new ex(t=>{const e=new Ia(t);this.showFlight(e)},()=>this.showMainMenu()),this.vab.mount(),this.sceneMgr.scene.add(this.vab.scene)})}async showFlight(t){this.transitionTo(()=>{this.unmountCurrent();const e=t?.assembly??new _r;if(!t){const i=me,s=1.1*i,r=.7*i,a=.7*i,l=2.2*i,c=2.2*i,u=.005,h=0,d=h+c/2+u+l/2,f=d+l/2+u+.6*i/2,g=f+.6*i/2+u+a/2,y=g+a/2+u+r/2,m=y+r/2+u+s/2;e.addRoot({part:Oi("capsule_mk1"),position:[0,m,0],rotation:0,children:[]}),e.addRoot({part:Oi("tank_m_lfo"),position:[0,y,0],rotation:0,children:[]}),e.addRoot({part:Oi("engine_vector"),position:[0,g,0],rotation:0,children:[]}),e.addRoot({part:Oi("decoupler_1"),position:[0,f,0],rotation:0,children:[]}),e.addRoot({part:Oi("tank_xl_lfo"),position:[0,d,0],rotation:0,children:[]}),e.addRoot({part:Oi("engine_mammoth"),position:[0,h,0],rotation:0,children:[]})}const n=new Ia(e);this.flight=new mx(this.renderer,this.sceneMgr,this.system,n,this.achievements,this.missions),this.flight.onCrashAction=i=>{i==="menu"?this.showMainMenu():this.showFlight(t)}})}transitionTo(t){const e=document.createElement("div");e.className="scene-fade fade-in",document.body.appendChild(e),setTimeout(()=>{t(),e.classList.remove("fade-in"),e.classList.add("fade-out"),setTimeout(()=>e.remove(),640)},280)}unmountCurrent(){this.mainMenu?.unmount(),this.mainMenu=void 0,this.vab&&(this.vab.unmount(),this.sceneMgr.scene.remove(this.vab.scene),this.vab=void 0),this.flight?.dispose(),this.flight=void 0}loop(){const t=.016666666666666666;this.sceneMgr.update(t),this.flight?.update(t),this.vab?this.renderer.three.render(this.vab.scene,this.vab.camera):this.renderer.three.render(this.sceneMgr.scene,this.sceneMgr.camera),requestAnimationFrame(()=>this.loop())}}function nv(){const o=document.getElementById("loading-screen");o&&o.classList.add("hidden");const t=document.getElementById("loading-label");t&&(t.dataset.done="1")}try{new ev().start()}catch(o){console.error("Failed to start Ellipse:",o),nv(),document.body.innerHTML+=`<div style="position:fixed;inset:0;z-index:950;color:white;padding:32px;font-family:monospace;background:#06080f;">
      <h1>Failed to start</h1>
      <pre>${String(o)}</pre>
    </div>`}
//# sourceMappingURL=index-CtQWDD1w.js.map
