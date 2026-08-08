(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Su="modulepreload",bu=function(o){return"/ellipse/"+o},ul={},xh=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=r?.nonce||r?.getAttribute("nonce");i=Promise.allSettled(e.map(l=>{if(l=bu(l),l in ul)return;ul[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Su,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((u,f)=>{h.addEventListener("load",u),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="160",Tu=0,dl=1,Eu=2,vh=1,wu=2,Kn=3,In=0,ln=1,Be=2,gi=0,_i=1,cn=2,fl=3,pl=4,Au=5,zi=100,Ru=101,Cu=102,ml=103,gl=104,Pu=200,Lu=201,Iu=202,Du=203,Ra=204,Ca=205,Uu=206,Nu=207,Fu=208,Ou=209,ku=210,Hu=211,Bu=212,zu=213,Gu=214,Wu=0,Vu=1,Xu=2,or=3,qu=4,Yu=5,Ku=6,ju=7,Ya=0,$u=1,Zu=2,Jn=0,Ju=1,Qu=2,td=3,ed=4,nd=5,id=6,_l="attached",sd="detached",Mh=300,Es=301,ws=302,Pa=303,La=304,fr=306,dn=1e3,Ne=1001,rr=1002,Ye=1003,Ia=1004,nr=1005,Ue=1006,Sh=1007,vi=1008,yi=1009,od=1010,rd=1011,Ka=1012,bh=1013,pi=1014,$n=1015,io=1016,Th=1017,Eh=1018,Vi=1020,ad=1021,un=1023,ld=1024,cd=1025,Xi=1026,As=1027,hd=1028,wh=1029,ud=1030,Ah=1031,Rh=1033,wr=33776,Ar=33777,Rr=33778,Cr=33779,yl=35840,xl=35841,vl=35842,Ml=35843,Ch=36196,Sl=37492,bl=37496,Tl=37808,El=37809,wl=37810,Al=37811,Rl=37812,Cl=37813,Pl=37814,Ll=37815,Il=37816,Dl=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,Pr=36492,kl=36494,Hl=36495,dd=36283,Bl=36284,zl=36285,Gl=36286,so=2300,Rs=2301,Lr=2302,Wl=2400,Vl=2401,Xl=2402,fd=2500,pd=0,Ph=1,Da=2,Lh=3e3,qi=3001,md=3200,gd=3201,ja=0,_d=1,bn="",ee="srgb",Ce="srgb-linear",$a="display-p3",pr="display-p3-linear",ar="linear",be="srgb",lr="rec709",cr="p3",$i=7680,ql=519,yd=512,xd=513,vd=514,Ih=515,Md=516,Sd=517,bd=518,Td=519,Ua=35044,Yl="300 es",Na=1035,Zn=2e3,hr=2001;class Ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const Qs=Math.PI/180,Cs=180/Math.PI;function Ln(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[o&255]+Je[o>>8&255]+Je[o>>16&255]+Je[o>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function tn(o,t,e){return Math.max(t,Math.min(e,o))}function Za(o,t){return(o%t+t)%t}function Ed(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function wd(o,t,e){return o!==t?(e-o)/(t-o):0}function to(o,t,e){return(1-e)*o+e*t}function Ad(o,t,e,n){return to(o,t,1-Math.exp(-e*n))}function Rd(o,t=1){return t-Math.abs(Za(o,t*2)-t)}function Cd(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Pd(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function Ld(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Id(o,t){return o+Math.random()*(t-o)}function Dd(o){return o*(.5-Math.random())}function Ud(o){o!==void 0&&(Kl=o);let t=Kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(o){return o*Qs}function Fd(o){return o*Cs}function Fa(o){return(o&o-1)===0&&o!==0}function Od(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function ur(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function kd(o,t,e,n,i){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+n)/2),d=r((t+n)/2),h=s((t-n)/2),u=r((t-n)/2),f=s((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":o.set(a*d,l*h,l*u,a*c);break;case"YZY":o.set(l*u,a*d,l*h,a*c);break;case"ZXZ":o.set(l*h,l*u,a*d,a*c);break;case"XZX":o.set(a*d,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*d,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ge(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Hd={DEG2RAD:Qs,RAD2DEG:Cs,generateUUID:Ln,clamp:tn,euclideanModulo:Za,mapLinear:Ed,inverseLerp:wd,lerp:to,damp:Ad,pingpong:Rd,smoothstep:Cd,smootherstep:Pd,randInt:Ld,randFloat:Id,randFloatSpread:Dd,seededRandom:Ud,degToRad:Nd,radToDeg:Fd,isPowerOfTwo:Fa,ceilPowerOfTwo:Od,floorPowerOfTwo:ur,setQuaternionFromProperEuler:kd,normalize:ge,denormalize:On};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,n,i,s,r,a,l,c){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c)}set(t,e,n,i,s,r,a,l,c){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],x=i[4],b=i[7],R=i[2],A=i[5],T=i[8];return s[0]=r*_+a*y+l*R,s[3]=r*m+a*x+l*A,s[6]=r*p+a*b+l*T,s[1]=c*_+d*y+h*R,s[4]=c*m+d*x+h*A,s[7]=c*p+d*b+h*T,s[2]=u*_+f*y+g*R,s[5]=u*m+f*x+g*A,s[8]=u*p+f*b+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*r*d-e*a*c-n*s*d+n*a*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*r-a*c,u=a*l-d*s,f=c*s-r*l,g=e*h+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-d*n)*_,t[2]=(a*n-i*r)*_,t[3]=u*_,t[4]=(d*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ir.makeScale(t,e)),this}rotate(t){return this.premultiply(Ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new oe;function Dh(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function oo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Bd(){const o=oo("canvas");return o.style.display="block",o}const jl={};function eo(o){o in jl||(jl[o]=!0,console.warn(o))}const $l=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zl=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uo={[Ce]:{transfer:ar,primaries:lr,toReference:o=>o,fromReference:o=>o},[ee]:{transfer:be,primaries:lr,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[pr]:{transfer:ar,primaries:cr,toReference:o=>o.applyMatrix3(Zl),fromReference:o=>o.applyMatrix3($l)},[$a]:{transfer:be,primaries:cr,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Zl),fromReference:o=>o.applyMatrix3($l).convertLinearToSRGB()}},zd=new Set([Ce,pr]),he={enabled:!0,_workingColorSpace:Ce,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!zd.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=uo[t].toReference,i=uo[e].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return uo[o].primaries},getTransfer:function(o){return o===bn?ar:uo[o].transfer}};function Ss(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Dr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Zi;class Uh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=oo("canvas")),Zi.width=t.width,Zi.height=t.height;const n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ss(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ss(e[n]/255)*255):e[n]=Ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gd=0;class Nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Ln(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Ur(i[r].image)):s.push(Ur(i[r]))}else s=Ur(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ur(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Uh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wd=0;class Ge extends Ds{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Ne,i=Ne,s=Ue,r=vi,a=un,l=yi,c=Ge.DEFAULT_ANISOTROPY,d=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ln(),this.name="",this.source=new Nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===qi?ee:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dn:t.x=t.x-Math.floor(t.x);break;case Ne:t.x=t.x<0?0:1;break;case rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dn:t.y=t.y-Math.floor(t.y);break;case Ne:t.y=t.y<0?0:1;break;case rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ee?qi:Lh}set encoding(t){eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qi?ee:bn}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Mh;Ge.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,b=(f+1)/2,R=(p+1)/2,A=(d+u)/4,T=(h+_)/4,F=(g+m)/4;return x>b&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=T/n):b>R?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=F/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=F/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(u-d)/y,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vd extends Ds{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(eo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qi?ee:bn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ge(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Vd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fh extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xd extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=s[r+0],f=s[r+1],g=s[r+2],_=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==u||c!==f||d!==g){let m=1-a;const p=l*u+c*f+d*g+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,p*y);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const b=a*y;if(l=l*m+u*b,c=c*m+f*b,d=d*m+g*b,h=h*m+_*b,m===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=s[r],u=s[r+1],f=s[r+2],g=s[r+3];return t[e]=a*g+d*h+l*f-c*u,t[e+1]=l*g+d*u+c*h-a*f,t[e+2]=c*g+d*f+a*u-l*h,t[e+3]=d*g-a*h-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"YZX":this._x=u*d*h+c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h-u*f*g;break;case"XZY":this._x=u*d*h-c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=n+a+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+r*a+i*c-s*l,this._y=i*d+r*l+s*a-n*c,this._z=s*d+r*c+n*l-i*a,this._w=r*d-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),d=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+l*c+r*h-a*d,this.y=n+l*d+a*c-s*h,this.z=i+l*h+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nr.copy(this).projectOnVector(t),this.sub(Nr)}reflect(t){return this.sub(Nr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nr=new C,Jl=new hn;class wn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Rn):Rn.fromBufferAttribute(s,r),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fo.copy(n.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),po.subVectors(this.max,zs),Ji.subVectors(t.a,zs),Qi.subVectors(t.b,zs),ts.subVectors(t.c,zs),ei.subVectors(Qi,Ji),ni.subVectors(ts,Qi),Ri.subVectors(Ji,ts);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Ri.z,Ri.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Ri.z,0,-Ri.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Ri.y,Ri.x,0];return!Fr(e,Ji,Qi,ts,po)||(e=[1,0,0,0,1,0,0,0,1],!Fr(e,Ji,Qi,ts,po))?!1:(mo.crossVectors(ei,ni),e=[mo.x,mo.y,mo.z],Fr(e,Ji,Qi,ts,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new C,new C,new C,new C,new C,new C,new C,new C],Rn=new C,fo=new wn,Ji=new C,Qi=new C,ts=new C,ei=new C,ni=new C,Ri=new C,zs=new C,po=new C,mo=new C,Ci=new C;function Fr(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Ci.fromArray(o,s);const a=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),d=n.dot(Ci);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const qd=new wn,Gs=new C,Or=new C;class kn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Or.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Or)),this.expandByPoint(Gs.copy(t.center).sub(Or))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new C,kr=new C,go=new C,ii=new C,Hr=new C,_o=new C,Br=new C;class mr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){kr.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(kr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(go),a=ii.dot(this.direction),l=-ii.dot(go),c=ii.lengthSq(),d=Math.abs(1-r*r);let h,u,f,g;if(d>0)if(h=r*l-a,u=r*a-l,g=s*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,f=h*(h+r*u+2*a)+u*(r*h+u+2*l)+c}else u=s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-r*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(h=Math.max(0,-(r*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c);else u=r>0?-s:s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(kr).addScaledVector(go,u),f}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,i,s){Hr.subVectors(e,t),_o.subVectors(n,t),Br.crossVectors(Hr,_o);let r=this.direction.dot(Br),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ii.subVectors(this.origin,t);const l=a*this.direction.dot(_o.crossVectors(ii,_o));if(l<0)return null;const c=a*this.direction.dot(Hr.cross(ii));if(c<0||l+c>r)return null;const d=-a*ii.dot(Br);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,s,r,a,l,c,d,h,u,f,g,_,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c,d,h,u,f,g,_,m)}set(t,e,n,i,s,r,a,l,c,d,h,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/es.setFromMatrixColumn(t,0).length(),s=1/es.setFromMatrixColumn(t,1).length(),r=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=r*d,f=r*h,g=a*d,_=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*d,f=l*h,g=c*d,_=c*h;e[0]=u+_*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*h,e[5]=r*d,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*d,f=l*h,g=c*d,_=c*h;e[0]=u-_*a,e[4]=-r*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*d,e[9]=_-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*d,f=r*h,g=a*d,_=a*h;e[0]=l*d,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*h,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,g=a*l,_=a*c;e[0]=l*d,e[4]=_-u*h,e[8]=g*h+f,e[1]=h,e[5]=r*d,e[9]=-a*d,e[2]=-c*d,e[6]=f*h+g,e[10]=u-_*h}else if(t.order==="XZY"){const u=r*l,f=r*c,g=a*l,_=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+_,e[5]=r*d,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*d,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yd,t,Kd)}lookAt(t,e,n){const i=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),si.crossVectors(n,gn),si.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),si.crossVectors(n,gn)),si.normalize(),yo.crossVectors(gn,si),i[0]=si.x,i[4]=yo.x,i[8]=gn.x,i[1]=si.y,i[5]=yo.y,i[9]=gn.y,i[2]=si.z,i[6]=yo.z,i[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],b=n[11],R=n[15],A=i[0],T=i[4],F=i[8],v=i[12],w=i[1],U=i[5],D=i[9],q=i[13],L=i[2],k=i[6],W=i[10],K=i[14],Y=i[3],$=i[7],J=i[11],ct=i[15];return s[0]=r*A+a*w+l*L+c*Y,s[4]=r*T+a*U+l*k+c*$,s[8]=r*F+a*D+l*W+c*J,s[12]=r*v+a*q+l*K+c*ct,s[1]=d*A+h*w+u*L+f*Y,s[5]=d*T+h*U+u*k+f*$,s[9]=d*F+h*D+u*W+f*J,s[13]=d*v+h*q+u*K+f*ct,s[2]=g*A+_*w+m*L+p*Y,s[6]=g*T+_*U+m*k+p*$,s[10]=g*F+_*D+m*W+p*J,s[14]=g*v+_*q+m*K+p*ct,s[3]=y*A+x*w+b*L+R*Y,s[7]=y*T+x*U+b*k+R*$,s[11]=y*F+x*D+b*W+R*J,s[15]=y*v+x*q+b*K+R*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*a*u+n*c*u+i*a*f-n*l*f)+_*(+e*l*f-e*c*u+s*r*u-i*r*f+i*c*d-s*l*d)+m*(+e*c*h-e*a*f-s*r*h+n*r*f+s*a*d-n*c*d)+p*(-i*a*d-e*l*h+e*a*u+i*r*h-n*r*u+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=h*m*c-_*u*c+_*l*f-a*m*f-h*l*p+a*u*p,x=g*u*c-d*m*c-g*l*f+r*m*f+d*l*p-r*u*p,b=d*_*c-g*h*c+g*a*f-r*_*f-d*a*p+r*h*p,R=g*h*l-d*_*l-g*a*u+r*_*u+d*a*m-r*h*m,A=e*y+n*x+i*b+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=y*T,t[1]=(_*u*s-h*m*s-_*i*f+n*m*f+h*i*p-n*u*p)*T,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(h*l*s-a*u*s-h*i*c+n*u*c+a*i*f-n*l*f)*T,t[4]=x*T,t[5]=(d*m*s-g*u*s+g*i*f-e*m*f-d*i*p+e*u*p)*T,t[6]=(g*l*s-r*m*s-g*i*c+e*m*c+r*i*p-e*l*p)*T,t[7]=(r*u*s-d*l*s+d*i*c-e*u*c-r*i*f+e*l*f)*T,t[8]=b*T,t[9]=(g*h*s-d*_*s-g*n*f+e*_*f+d*n*p-e*h*p)*T,t[10]=(r*_*s-g*a*s+g*n*c-e*_*c-r*n*p+e*a*p)*T,t[11]=(d*a*s-r*h*s-d*n*c+e*h*c+r*n*f-e*a*f)*T,t[12]=R*T,t[13]=(d*_*i-g*h*i+g*n*u-e*_*u-d*n*m+e*h*m)*T,t[14]=(g*a*i-r*_*i-g*n*l+e*_*l+r*n*m-e*a*m)*T,t[15]=(r*h*i-d*a*i+d*n*l-e*h*l-r*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,c=s*r,d=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*r,0,c*l-i*a,d*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,d=r+r,h=a+a,u=s*c,f=s*d,g=s*h,_=r*d,m=r*h,p=a*h,y=l*c,x=l*d,b=l*h,R=n.x,A=n.y,T=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+b)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(f-b)*A,i[5]=(1-(u+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+x)*T,i[9]=(m-y)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=es.set(i[0],i[1],i[2]).length();const r=es.set(i[4],i[5],i[6]).length(),a=es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Cn.copy(this);const c=1/s,d=1/r,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=d,Cn.elements[5]*=d,Cn.elements[6]*=d,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,e.setFromRotationMatrix(Cn),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=Zn){const l=this.elements,c=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===Zn)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===hr)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=Zn){const l=this.elements,c=1/(e-t),d=1/(n-i),h=1/(r-s),u=(e+t)*c,f=(n+i)*d;let g,_;if(a===Zn)g=(r+s)*h,_=-2*h;else if(a===hr)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const es=new C,Cn=new ne,Yd=new C(0,0,0),Kd=new C(1,1,1),si=new C,yo=new C,gn=new C,Ql=new ne,tc=new hn;class gr{constructor(t=0,e=0,n=0,i=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jd=0;const ec=new C,ns=new hn,Vn=new ne,xo=new C,Ws=new C,$d=new C,Zd=new hn,nc=new C(1,0,0),ic=new C(0,1,0),sc=new C(0,0,1),Jd={type:"added"},Qd={type:"removed"};class Te extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new C,e=new gr,n=new hn,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new oe}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xo.copy(t):xo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ws,xo,this.up):Vn.lookAt(xo,Ws,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(Vn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Jd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,$d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),h=r(t.shapes),u=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new C(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new C,Xn=new C,zr=new C,qn=new C,is=new C,ss=new C,oc=new C,Gr=new C,Wr=new C,Vr=new C;let vo=!1;class Sn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Pn.subVectors(t,e),i.cross(Pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Pn.subVectors(i,e),Xn.subVectors(n,e),zr.subVectors(t,e);const r=Pn.dot(Pn),a=Pn.dot(Xn),l=Pn.dot(zr),c=Xn.dot(Xn),d=Xn.dot(zr),h=r*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(c*l-a*d)*u,g=(r*d-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(t,e,n,i,s,r,a,l){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),this.getInterpolation(t,e,n,i,s,r,a,l)}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(r,qn.y),l.addScaledVector(a,qn.z),l)}static isFrontFacing(t,e,n,i){return Pn.subVectors(n,e),Xn.subVectors(t,e),Pn.cross(Xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Pn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;is.subVectors(i,n),ss.subVectors(s,n),Gr.subVectors(t,n);const l=is.dot(Gr),c=ss.dot(Gr);if(l<=0&&c<=0)return e.copy(n);Wr.subVectors(t,i);const d=is.dot(Wr),h=ss.dot(Wr);if(d>=0&&h<=d)return e.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),e.copy(n).addScaledVector(is,r);Vr.subVectors(t,s);const f=is.dot(Vr),g=ss.dot(Vr);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ss,a);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return oc.subVectors(s,i),a=(h-d)/(h-d+(f-g)),e.copy(i).addScaledVector(oc,a);const p=1/(m+_+u);return r=_*p,a=u*p,e.copy(n).addScaledVector(is,r).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function Xr(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Za(t,1),e=tn(e,0,1),n=tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Xr(r,s,t+1/3),this.g=Xr(r,s,t),this.b=Xr(r,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=ee){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ee){const n=kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ee){return he.fromWorkingColorSpace(Qe.copy(this),t),Math.round(tn(Qe.r*255,0,255))*65536+Math.round(tn(Qe.g*255,0,255))*256+Math.round(tn(Qe.b*255,0,255))}getHexString(t=ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Qe.copy(this),e);const n=Qe.r,i=Qe.g,s=Qe.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const d=(a+r)/2;if(a===r)l=0,c=0;else{const h=r-a;switch(c=d<=.5?h/(r+a):h/(2-r-a),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=ee){he.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,i=Qe.b;return t!==ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Mo);const n=to(oi.h,Mo.h,e),i=to(oi.s,Mo.s,e),s=to(oi.l,Mo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new Tt;Tt.NAMES=kh;let tf=0;class En extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=_i,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ca,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class we extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new C,So=new Yt;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ua,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ua&&(t.usage=this.usage),t}}class Hh extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bh extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ef=0;const vn=new ne,qr=new Te,os=new C,_n=new wn,Vs=new wn,qe=new C;class Fe extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dh(t)?Bh:Hh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new oe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return qr.lookAt(t),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(_n.min,Vs.min),_n.expandByPoint(qe),qe.addVectors(_n.max,Vs.max),_n.expandByPoint(qe)):(_n.expandByPoint(Vs.min),_n.expandByPoint(Vs.max))}_n.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)qe.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(t,c),qe.add(os)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<a;w++)c[w]=new C,d[w]=new C;const h=new C,u=new C,f=new C,g=new Yt,_=new Yt,m=new Yt,p=new C,y=new C;function x(w,U,D){h.fromArray(i,w*3),u.fromArray(i,U*3),f.fromArray(i,D*3),g.fromArray(r,w*2),_.fromArray(r,U*2),m.fromArray(r,D*2),u.sub(h),f.sub(h),_.sub(g),m.sub(g);const q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(q),y.copy(f).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(q),c[w].add(p),c[U].add(p),c[D].add(p),d[w].add(y),d[U].add(y),d[D].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,U=b.length;w<U;++w){const D=b[w],q=D.start,L=D.count;for(let k=q,W=q+L;k<W;k+=3)x(n[k+0],n[k+1],n[k+2])}const R=new C,A=new C,T=new C,F=new C;function v(w){T.fromArray(s,w*3),F.copy(T);const U=c[w];R.copy(U),R.sub(T.multiplyScalar(T.dot(U))).normalize(),A.crossVectors(F,U);const q=A.dot(d[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=q}for(let w=0,U=b.length;w<U;++w){const D=b[w],q=D.start,L=D.count;for(let k=q,W=q+L;k<W;k+=3)v(n[k+0]),v(n[k+1]),v(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,s=new C,r=new C,a=new C,l=new C,c=new C,d=new C,h=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),d.subVectors(r,s),h.subVectors(i,s),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),d.subVectors(r,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*d;for(let p=0;p<d;p++)u[g++]=c[f++]}return new Ie(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(t.data))}d.length>0&&(i[l]=d,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new ne,Pi=new mr,bo=new kn,ac=new C,rs=new C,as=new C,ls=new C,Yr=new C,To=new C,Eo=new Yt,wo=new Yt,Ao=new Yt,lc=new C,cc=new C,hc=new C,Ro=new C,Co=new C;class ut extends Te{constructor(t=new Fe,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){To.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Yr.fromBufferAttribute(h,t),r?To.addScaledVector(Yr,d):To.addScaledVector(Yr.sub(e),d))}e.add(To)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(s),Pi.copy(t.ray).recast(t.near),!(bo.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(bo,ac)===null||Pi.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(rc.copy(s).invert(),Pi.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,R=x;b<R;b+=3){const A=a.getX(b),T=a.getX(b+1),F=a.getX(b+2);i=Po(this,p,t,n,c,d,h,A,T,F),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);i=Po(this,r,t,n,c,d,h,y,x,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,R=x;b<R;b+=3){const A=b,T=b+1,F=b+2;i=Po(this,p,t,n,c,d,h,A,T,F),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,b=m+2;i=Po(this,r,t,n,c,d,h,y,x,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function nf(o,t,e,n,i,s,r,a){let l;if(t.side===ln?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===In,a),l===null)return null;Co.copy(a),Co.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:o}}function Po(o,t,e,n,i,s,r,a,l,c){o.getVertexPosition(a,rs),o.getVertexPosition(l,as),o.getVertexPosition(c,ls);const d=nf(o,t,e,n,rs,as,ls,Ro);if(d){i&&(Eo.fromBufferAttribute(i,a),wo.fromBufferAttribute(i,l),Ao.fromBufferAttribute(i,c),d.uv=Sn.getInterpolation(Ro,rs,as,ls,Eo,wo,Ao,new Yt)),s&&(Eo.fromBufferAttribute(s,a),wo.fromBufferAttribute(s,l),Ao.fromBufferAttribute(s,c),d.uv1=Sn.getInterpolation(Ro,rs,as,ls,Eo,wo,Ao,new Yt),d.uv2=d.uv1),r&&(lc.fromBufferAttribute(r,a),cc.fromBufferAttribute(r,l),hc.fromBufferAttribute(r,c),d.normal=Sn.getInterpolation(Ro,rs,as,ls,lc,cc,hc,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new C,materialIndex:0};Sn.getNormal(rs,as,ls,h.normal),d.face=h}return d}class bi extends Fe{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(h,2));function g(_,m,p,y,x,b,R,A,T,F,v){const w=b/T,U=R/F,D=b/2,q=R/2,L=A/2,k=T+1,W=F+1;let K=0,Y=0;const $=new C;for(let J=0;J<W;J++){const ct=J*U-q;for(let ht=0;ht<k;ht++){const X=ht*w-D;$[_]=X*y,$[m]=ct*x,$[p]=L,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=A>0?1:-1,d.push($.x,$.y,$.z),h.push(ht/T),h.push(1-J/F),K+=1}}for(let J=0;J<F;J++)for(let ct=0;ct<T;ct++){const ht=u+ct+k*J,X=u+ct+k*(J+1),et=u+(ct+1)+k*(J+1),ft=u+(ct+1)+k*J;l.push(ht,X,ft),l.push(X,et,ft),Y+=6}a.addGroup(f,Y,v),f+=Y,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function on(o){const t={};for(let e=0;e<o.length;e++){const n=Ps(o[e]);for(const i in n)t[i]=n[i]}return t}function sf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function zh(o){return o.getRenderTarget()===null?o.outputColorSpace:he.workingColorSpace}const of={clone:Ps,merge:on};var rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gh extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Gh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const cs=-90,hs=1;class lf extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(cs,hs,t,e);i.layers=this.layers,this.add(i);const s=new en(cs,hs,t,e);s.layers=this.layers,this.add(s);const r=new en(cs,hs,t,e);r.layers=this.layers,this.add(r);const a=new en(cs,hs,t,e);a.layers=this.layers,this.add(a);const l=new en(cs,hs,t,e);l.layers=this.layers,this.add(l);const c=new en(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,l]=e;for(const c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(h,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wh extends Ge{constructor(t,e,n,i,s,r,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Es,super(t,e,n,i,s,r,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cf extends Yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(eo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===qi?ee:bn),this.texture=new Wh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bi(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:gi});s.uniforms.tEquirect.value=e;const r=new ut(i,s),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=Ue),new lf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const Kr=new C,hf=new C,uf=new oe;class Hi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Kr.subVectors(n,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Kr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uf.getNormalMatrix(t),i=this.coplanarPoint(Kr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new kn,Lo=new C;class Ja{constructor(t=new Hi,e=new Hi,n=new Hi,i=new Hi,s=new Hi,r=new Hi){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){const n=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],x=i[14],b=i[15];if(n[0].setComponents(l-s,u-c,m-f,b-p).normalize(),n[1].setComponents(l+s,u+c,m+f,b+p).normalize(),n[2].setComponents(l+r,u+d,m+g,b+y).normalize(),n[3].setComponents(l-r,u-d,m-g,b-y).normalize(),n[4].setComponents(l-a,u-h,m-_,b-x).normalize(),e===Zn)n[5].setComponents(l+a,u+h,m+_,b+x).normalize();else if(e===hr)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Lo.x=i.normal.x>0?t.max.x:t.min.x,Lo.y=i.normal.y>0?t.max.y:t.min.y,Lo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vh(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function df(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,d){const h=c.array,u=c.usage,f=h.byteLength,g=o.createBuffer();o.bindBuffer(d,g),o.bufferData(d,h,u),c.onUploadCallback();let _;if(h instanceof Float32Array)_=o.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=o.SHORT;else if(h instanceof Uint32Array)_=o.UNSIGNED_INT;else if(h instanceof Int32Array)_=o.INT;else if(h instanceof Int8Array)_=o.BYTE;else if(h instanceof Uint8Array)_=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,d,h){const u=d.array,f=d._updateRange,g=d.updateRanges;if(o.bindBuffer(h,c),f.count===-1&&g.length===0&&o.bufferSubData(h,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];e?o.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):o.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}f.count!==-1&&(e?o.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):o.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(o.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:r,remove:a,update:l}}class Qa extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=t/a,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const y=p*u-r;for(let x=0;x<c;x++){const b=x*h-s;g.push(b,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const x=y+c*p,b=y+c*(p+1),R=y+1+c*(p+1),A=y+1+c*p;f.push(x,b,A),f.push(b,R,A)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.width,t.height,t.widthSegments,t.heightSegments)}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ff=`#define PI 3.141592653589793
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
} // validated`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`
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
}`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
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
}`,ep=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
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
#endif`,dp=`struct PhysicalMaterial {
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
}`,fp=`
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,vm=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Em=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Dm=`#define NORMAL
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
}`,Um=`#define PHONG
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
}`,Nm=`#define PHONG
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
}`,km=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:_f,alphatest_pars_fragment:yf,aomap_fragment:xf,aomap_pars_fragment:vf,batching_pars_vertex:Mf,batching_vertex:Sf,begin_vertex:bf,beginnormal_vertex:Tf,bsdfs:Ef,iridescence_fragment:wf,bumpmap_pars_fragment:Af,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Lf,color_fragment:If,color_pars_fragment:Df,color_pars_vertex:Uf,color_vertex:Nf,common:Ff,cube_uv_reflection_fragment:Of,defaultnormal_vertex:kf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Bf,emissivemap_fragment:zf,emissivemap_pars_fragment:Gf,colorspace_fragment:Wf,colorspace_pars_fragment:Vf,envmap_fragment:Xf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:rp,envmap_vertex:jf,fog_vertex:$f,fog_pars_vertex:Zf,fog_fragment:Jf,fog_pars_fragment:Qf,gradientmap_pars_fragment:tp,lightmap_fragment:ep,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:sp,lights_pars_begin:op,lights_toon_fragment:ap,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:hp,lights_physical_fragment:up,lights_physical_pars_fragment:dp,lights_fragment_begin:fp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:xp,map_fragment:vp,map_pars_fragment:Mp,map_particle_fragment:Sp,map_particle_pars_fragment:bp,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Ep,morphcolor_vertex:wp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Pp,normal_fragment_maps:Lp,normal_pars_fragment:Ip,normal_pars_vertex:Dp,normal_vertex:Up,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Hp,opaque_fragment:Bp,packing:zp,premultiplied_alpha_fragment:Gp,project_vertex:Wp,dithering_fragment:Vp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:jp,shadowmap_vertex:$p,shadowmask_pars_fragment:Zp,skinbase_vertex:Jp,skinning_pars_vertex:Qp,skinning_vertex:tm,skinnormal_vertex:em,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:om,transmission_fragment:rm,transmission_pars_fragment:am,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:hm,worldpos_vertex:um,background_vert:dm,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:_m,depth_vert:ym,depth_frag:xm,distanceRGBA_vert:vm,distanceRGBA_frag:Mm,equirect_vert:Sm,equirect_frag:bm,linedashed_vert:Tm,linedashed_frag:Em,meshbasic_vert:wm,meshbasic_frag:Am,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Pm,meshmatcap_frag:Lm,meshnormal_vert:Im,meshnormal_frag:Dm,meshphong_vert:Um,meshphong_frag:Nm,meshphysical_vert:Fm,meshphysical_frag:Om,meshtoon_vert:km,meshtoon_frag:Hm,points_vert:Bm,points_frag:zm,shadow_vert:Gm,shadow_frag:Wm,sprite_vert:Vm,sprite_frag:Xm},mt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Fn={basic:{uniforms:on([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:on([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:on([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:on([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:on([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:on([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:on([mt.points,mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:on([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:on([mt.common,mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:on([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:on([mt.sprite,mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:on([mt.common,mt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:on([mt.lights,mt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Fn.physical={uniforms:on([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Io={r:0,b:0,g:0};function qm(o,t,e,n,i,s,r){const a=new Tt(0);let l=s===!0?0:1,c,d,h=null,u=0,f=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);const b=o.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||y)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===fr)?(d===void 0&&(d=new ut(new bi(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ps(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=he.getTransfer(x.colorSpace)!==be,(h!==x||u!==x.version||f!==o.toneMapping)&&(d.material.needsUpdate=!0,h=x,u=x.version,f=o.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ut(new Qa(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ps(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=he.getTransfer(x.colorSpace)!==be,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Io,zh(o)),n.buffers.color.setClear(Io.r,Io.g,Io.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Ym(o,t,e,n){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function h(L,k,W,K,Y){let $=!1;if(r){const J=_(K,W,k);c!==J&&(c=J,f(c.object)),$=p(L,K,W,Y),$&&y(L,K,W,Y)}else{const J=k.wireframe===!0;(c.geometry!==K.id||c.program!==W.id||c.wireframe!==J)&&(c.geometry=K.id,c.program=W.id,c.wireframe=J,$=!0)}Y!==null&&e.update(Y,o.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,F(L,k,W,K),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function u(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(L){return n.isWebGL2?o.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?o.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,k,W){const K=W.wireframe===!0;let Y=a[L.id];Y===void 0&&(Y={},a[L.id]=Y);let $=Y[k.id];$===void 0&&($={},Y[k.id]=$);let J=$[K];return J===void 0&&(J=m(u()),$[K]=J),J}function m(L){const k=[],W=[],K=[];for(let Y=0;Y<i;Y++)k[Y]=0,W[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:K,object:L,attributes:{},index:null}}function p(L,k,W,K){const Y=c.attributes,$=k.attributes;let J=0;const ct=W.getAttributes();for(const ht in ct)if(ct[ht].location>=0){const et=Y[ht];let ft=$[ht];if(ft===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),et===void 0||et.attribute!==ft||ft&&et.data!==ft.data)return!0;J++}return c.attributesNum!==J||c.index!==K}function y(L,k,W,K){const Y={},$=k.attributes;let J=0;const ct=W.getAttributes();for(const ht in ct)if(ct[ht].location>=0){let et=$[ht];et===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));const ft={};ft.attribute=et,et&&et.data&&(ft.data=et.data),Y[ht]=ft,J++}c.attributes=Y,c.attributesNum=J,c.index=K}function x(){const L=c.newAttributes;for(let k=0,W=L.length;k<W;k++)L[k]=0}function b(L){R(L,0)}function R(L,k){const W=c.newAttributes,K=c.enabledAttributes,Y=c.attributeDivisors;W[L]=1,K[L]===0&&(o.enableVertexAttribArray(L),K[L]=1),Y[L]!==k&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),Y[L]=k)}function A(){const L=c.newAttributes,k=c.enabledAttributes;for(let W=0,K=k.length;W<K;W++)k[W]!==L[W]&&(o.disableVertexAttribArray(W),k[W]=0)}function T(L,k,W,K,Y,$,J){J===!0?o.vertexAttribIPointer(L,k,W,Y,$):o.vertexAttribPointer(L,k,W,K,Y,$)}function F(L,k,W,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const Y=K.attributes,$=W.getAttributes(),J=k.defaultAttributeValues;for(const ct in $){const ht=$[ct];if(ht.location>=0){let X=Y[ct];if(X===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){const et=X.normalized,ft=X.itemSize,vt=e.get(X);if(vt===void 0)continue;const St=vt.buffer,Ot=vt.type,Rt=vt.bytesPerElement,Ct=n.isWebGL2===!0&&(Ot===o.INT||Ot===o.UNSIGNED_INT||X.gpuType===bh);if(X.isInterleavedBufferAttribute){const Lt=X.data,G=Lt.stride,Se=X.offset;if(Lt.isInstancedInterleavedBuffer){for(let Et=0;Et<ht.locationSize;Et++)R(ht.location+Et,Lt.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let Et=0;Et<ht.locationSize;Et++)b(ht.location+Et);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Et=0;Et<ht.locationSize;Et++)T(ht.location+Et,ft/ht.locationSize,Ot,et,G*Rt,(Se+ft/ht.locationSize*Et)*Rt,Ct)}else{if(X.isInstancedBufferAttribute){for(let Lt=0;Lt<ht.locationSize;Lt++)R(ht.location+Lt,X.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Lt=0;Lt<ht.locationSize;Lt++)b(ht.location+Lt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Lt=0;Lt<ht.locationSize;Lt++)T(ht.location+Lt,ft/ht.locationSize,Ot,et,ft*Rt,ft/ht.locationSize*Lt*Rt,Ct)}}else if(J!==void 0){const et=J[ct];if(et!==void 0)switch(et.length){case 2:o.vertexAttrib2fv(ht.location,et);break;case 3:o.vertexAttrib3fv(ht.location,et);break;case 4:o.vertexAttrib4fv(ht.location,et);break;default:o.vertexAttrib1fv(ht.location,et)}}}}A()}function v(){D();for(const L in a){const k=a[L];for(const W in k){const K=k[W];for(const Y in K)g(K[Y].object),delete K[Y];delete k[W]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const k=a[L.id];for(const W in k){const K=k[W];for(const Y in K)g(K[Y].object),delete K[Y];delete k[W]}delete a[L.id]}function U(L){for(const k in a){const W=a[k];if(W[L.id]===void 0)continue;const K=W[L.id];for(const Y in K)g(K[Y].object),delete K[Y];delete W[L.id]}}function D(){q(),d=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:D,resetDefaultState:q,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function Km(o,t,e,n){const i=n.isWebGL2;let s;function r(d){s=d}function a(d,h){o.drawArrays(s,d,h),e.update(h,s,1)}function l(d,h,u){if(u===0)return;let f,g;if(i)f=o,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,d,h,u),e.update(h,s,u)}function c(d,h,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(d[g],h[g]);else{f.multiDrawArraysWEBGL(s,d,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];e.update(g,s,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function jm(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,h=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),u=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),m=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),p=o.getParameter(o.MAX_VARYING_VECTORS),y=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,b=r||t.has("OES_texture_float"),R=x&&b,A=r?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:A}}function $m(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Hi,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=o.get(h);if(!i||g===null||g.length===0||s&&!m)s?d(null):c();else{const y=s?0:n,x=y*4;let b=p.clippingState||null;l.value=b,b=d(g,u,x,f);for(let R=0;R!==x;++R)b[R]=e[R];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=f;x!==_;++x,b+=4)r.copy(h[x]).applyMatrix4(y,a),r.normal.toArray(m,b),m[b+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Zm(o){let t=new WeakMap;function e(r,a){return a===Pa?r.mapping=Es:a===La&&(r.mapping=ws),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Pa||a===La)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new cf(l.height/2);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class tl extends Gh{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vs=4,uc=[.125,.215,.35,.446,.526,.582],Gi=20,jr=new tl,dc=new Tt;let $r=null,Zr=0,Jr=0;const Bi=(1+Math.sqrt(5))/2,us=1/Bi,fc=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Bi,us),new C(0,Bi,-us),new C(us,0,Bi),new C(-us,0,Bi),new C(Bi,us,0),new C(-Bi,us,0)];class pc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){$r=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($r,Zr,Jr),t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$r=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:io,format:un,colorSpace:Ce,depthBuffer:!1},i=mc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(s)),this._blurMaterial=Qm(s,t,e)}return i}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,n,i){const a=new en(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(dc),d.toneMapping=Jn,d.autoClear=!1;const f=new we({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new ut(new bi,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(dc),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Do(i,y*x,p>2?x:0,x,x),d.setRenderTarget(i),_&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Es||t.mapping===ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Do(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=fc[(i-1)%fc.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ut(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),_=s/g,m=isFinite(s)?1+Math.floor(d*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let y=0;for(let T=0;T<Gi;++T){const F=T/_,v=Math.exp(-F*F/2);p.push(v),T===0?y+=v:T<m&&(y+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const b=this._sizeLods[i],R=3*b*(i>x-vs?i-x+vs:0),A=4*(this._cubeSize-b);Do(e,R,A,3*b,2*b),l.setRenderTarget(e),l.render(h,jr)}}function Jm(o){const t=[],e=[],n=[];let i=o;const s=o-vs+1+uc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>o-vs?l=uc[r-o+vs-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,F=A>2?0:-1,v=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];y.set(v,_*g*A),x.set(u,m*g*A);const w=[A,A,A,A,A,A];b.set(w,p*g*A)}const R=new Fe;R.setAttribute("position",new Ie(y,_)),R.setAttribute("uv",new Ie(x,m)),R.setAttribute("faceIndex",new Ie(b,p)),t.push(R),i>vs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mc(o,t,e){const n=new Yi(o,t,e);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Qm(o,t,e){const n=new Float32Array(Gi),i=new C(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:el(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function gc(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function _c(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function t0(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pa||l===La,d=l===Es||l===ws;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new pc(o)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&i(h)){e===null&&(e=new pc(o));const u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function e0(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function n0(o,t,e,n){const i={},s=new WeakMap;function r(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",r),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)t.update(u[g],o.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],o.ARRAY_BUFFER)}}function c(h){const u=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,b=y.length;x<b;x+=3){const R=y[x+0],A=y[x+1],T=y[x+2];u.push(R,A,A,T,T,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const R=x+0,A=x+1,T=x+2;u.push(R,A,A,T,T,R)}}else return;const m=new(Dh(u)?Bh:Hh)(u,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function i0(o,t,e,n){const i=n.isWebGL2;let s;function r(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function d(f,g){o.drawElements(s,g,a,f*l),e.update(g,s,1)}function h(f,g,_){if(_===0)return;let m,p;if(i)m=o,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*l,_),e.update(g,s,_)}function u(f,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];e.update(p,s,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=u}function s0(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function o0(o,t){return o[0]-t[0]}function r0(o,t){return Math.abs(t[1])-Math.abs(o[1])}function a0(o,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new xe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(d);if(m===void 0||m.count!==_){let k=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",k)};var f=k;m!==void 0&&m.texture.dispose();const x=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let v=0;x===!0&&(v=1),b===!0&&(v=2),R===!0&&(v=3);let w=d.attributes.position.count*v,U=1;w>t.maxTextureSize&&(U=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const D=new Float32Array(w*U*4*_),q=new Fh(D,w,U,_);q.type=$n,q.needsUpdate=!0;const L=v*4;for(let W=0;W<_;W++){const K=A[W],Y=T[W],$=F[W],J=w*U*4*W;for(let ct=0;ct<K.count;ct++){const ht=ct*L;x===!0&&(r.fromBufferAttribute(K,ct),D[J+ht+0]=r.x,D[J+ht+1]=r.y,D[J+ht+2]=r.z,D[J+ht+3]=0),b===!0&&(r.fromBufferAttribute(Y,ct),D[J+ht+4]=r.x,D[J+ht+5]=r.y,D[J+ht+6]=r.z,D[J+ht+7]=0),R===!0&&(r.fromBufferAttribute($,ct),D[J+ht+8]=r.x,D[J+ht+9]=r.y,D[J+ht+10]=r.z,D[J+ht+11]=$.itemSize===4?r.w:1)}}m={count:_,texture:q,size:new Yt(w,U)},s.set(d,m),d.addEventListener("dispose",k)}let p=0;for(let x=0;x<u.length;x++)p+=u[x];const y=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(o,"morphTargetBaseInfluence",y),h.getUniforms().setValue(o,"morphTargetInfluences",u),h.getUniforms().setValue(o,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let _=n[d.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[d.id]=_}for(let b=0;b<g;b++){const R=_[b];R[0]=b,R[1]=u[b]}_.sort(r0);for(let b=0;b<8;b++)b<g&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(o0);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const R=a[b],A=R[0],T=R[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&d.getAttribute("morphTarget"+b)!==m[A]&&d.setAttribute("morphTarget"+b,m[A]),p&&d.getAttribute("morphNormal"+b)!==p[A]&&d.setAttribute("morphNormal"+b,p[A]),i[b]=T,y+=T):(m&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),p&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),i[b]=0)}const x=d.morphTargetsRelative?1:1-y;h.getUniforms().setValue(o,"morphTargetBaseInfluence",x),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function l0(o,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class Xh extends Ge{constructor(t,e,n,i,s,r,a,l,c,d){if(d=d!==void 0?d:Xi,d!==Xi&&d!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Xi&&(n=pi),n===void 0&&d===As&&(n=Vi),super(null,i,s,r,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qh=new Ge,Yh=new Xh(1,1);Yh.compareFunction=Ih;const Kh=new Fh,jh=new Xd,$h=new Wh,yc=[],xc=[],vc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function Us(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=yc[i];if(s===void 0&&(s=new Float32Array(i),yc[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function We(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Ve(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function _r(o,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function c0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function h0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;o.uniform2fv(this.addr,t),Ve(e,t)}}function u0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;o.uniform3fv(this.addr,t),Ve(e,t)}}function d0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;o.uniform4fv(this.addr,t),Ve(e,t)}}function f0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(We(e,n))return;Sc.set(n),o.uniformMatrix2fv(this.addr,!1,Sc),Ve(e,n)}}function p0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(We(e,n))return;Mc.set(n),o.uniformMatrix3fv(this.addr,!1,Mc),Ve(e,n)}}function m0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(We(e,n))return;vc.set(n),o.uniformMatrix4fv(this.addr,!1,vc),Ve(e,n)}}function g0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function _0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;o.uniform2iv(this.addr,t),Ve(e,t)}}function y0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;o.uniform3iv(this.addr,t),Ve(e,t)}}function x0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;o.uniform4iv(this.addr,t),Ve(e,t)}}function v0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function M0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;o.uniform2uiv(this.addr,t),Ve(e,t)}}function S0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;o.uniform3uiv(this.addr,t),Ve(e,t)}}function b0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;o.uniform4uiv(this.addr,t),Ve(e,t)}}function T0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?Yh:qh;e.setTexture2D(t||s,i)}function E0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||jh,i)}function w0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$h,i)}function A0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Kh,i)}function R0(o){switch(o){case 5126:return c0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return y0;case 35669:case 35673:return x0;case 5125:return v0;case 36294:return M0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return A0}}function C0(o,t){o.uniform1fv(this.addr,t)}function P0(o,t){const e=Us(t,this.size,2);o.uniform2fv(this.addr,e)}function L0(o,t){const e=Us(t,this.size,3);o.uniform3fv(this.addr,e)}function I0(o,t){const e=Us(t,this.size,4);o.uniform4fv(this.addr,e)}function D0(o,t){const e=Us(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function U0(o,t){const e=Us(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function N0(o,t){const e=Us(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function F0(o,t){o.uniform1iv(this.addr,t)}function O0(o,t){o.uniform2iv(this.addr,t)}function k0(o,t){o.uniform3iv(this.addr,t)}function H0(o,t){o.uniform4iv(this.addr,t)}function B0(o,t){o.uniform1uiv(this.addr,t)}function z0(o,t){o.uniform2uiv(this.addr,t)}function G0(o,t){o.uniform3uiv(this.addr,t)}function W0(o,t){o.uniform4uiv(this.addr,t)}function V0(o,t,e){const n=this.cache,i=t.length,s=_r(e,i);We(n,s)||(o.uniform1iv(this.addr,s),Ve(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||qh,s[r])}function X0(o,t,e){const n=this.cache,i=t.length,s=_r(e,i);We(n,s)||(o.uniform1iv(this.addr,s),Ve(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||jh,s[r])}function q0(o,t,e){const n=this.cache,i=t.length,s=_r(e,i);We(n,s)||(o.uniform1iv(this.addr,s),Ve(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||$h,s[r])}function Y0(o,t,e){const n=this.cache,i=t.length,s=_r(e,i);We(n,s)||(o.uniform1iv(this.addr,s),Ve(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Kh,s[r])}function K0(o){switch(o){case 5126:return C0;case 35664:return P0;case 35665:return L0;case 35666:return I0;case 35674:return D0;case 35675:return U0;case 35676:return N0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return k0;case 35669:case 35673:return H0;case 5125:return B0;case 36294:return z0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}class j0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R0(e.type)}}class $0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=K0(e.type)}}class Z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function bc(o,t){o.seq.push(t),o.map[t.id]=t}function J0(o,t,e){const n=o.name,i=n.length;for(Qr.lastIndex=0;;){const s=Qr.exec(n),r=Qr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){bc(e,c===void 0?new j0(a,o,t):new $0(a,o,t));break}else{let h=e.map[a];h===void 0&&(h=new Z0(a),bc(e,h)),e=h}}}class ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);J0(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Tc(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const Q0=37297;let tg=0;function eg(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function ng(o){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(o);let n;switch(t===e?n="":t===cr&&e===lr?n="LinearDisplayP3ToLinearSRGB":t===lr&&e===cr&&(n="LinearSRGBToLinearDisplayP3"),o){case Ce:case pr:return[n,"LinearTransferOETF"];case ee:case $a:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function Ec(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+eg(o.getShaderSource(t),r)}else return i}function ig(o,t){const e=ng(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function sg(o,t){let e;switch(t){case Ju:e="Linear";break;case Qu:e="Reinhard";break;case td:e="OptimizedCineon";break;case ed:e="ACESFilmic";break;case id:e="AgX";break;case nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function og(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function rg(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ms).join(`
`)}function ag(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lg(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function Ms(o){return o!==""}function wc(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ac(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(o){return o.replace(cg,ug)}const hg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ug(o,t){let e=Qt[t];if(e===void 0){const n=hg.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oa(e)}const dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(o){return o.replace(dg,fg)}function fg(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cc(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function mg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Es:case ws:t="ENVMAP_TYPE_CUBE";break;case fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function _g(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ya:t="ENVMAP_BLENDING_MULTIPLY";break;case $u:t="ENVMAP_BLENDING_MIX";break;case Zu:t="ENVMAP_BLENDING_ADD";break}return t}function yg(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=pg(e),c=mg(e),d=gg(e),h=_g(e),u=yg(e),f=e.isWebGL2?"":og(e),g=rg(e),_=ag(s),m=i.createProgram();let p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ms).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ms).join(`
`),y.length>0&&(y+=`
`)):(p=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),y=[f,Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,ig("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),r=Oa(r),r=wc(r,e),r=Ac(r,e),a=Oa(a),a=wc(a,e),a=Ac(a,e),r=Rc(r),a=Rc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=x+p+r,R=x+y+a,A=Tc(i,i.VERTEX_SHADER,b),T=Tc(i,i.FRAGMENT_SHADER,R);i.attachShader(m,A),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function F(D){if(o.debug.checkShaderErrors){const q=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(T).trim();let W=!0,K=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,m,A,T);else{const Y=Ec(i,A,"vertex"),$=Ec(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+Y+`
`+$)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||k==="")&&(K=!1);K&&(D.diagnostics={runnable:W,programLog:q,vertexShader:{log:L,prefix:p},fragmentShader:{log:k,prefix:y}})}i.deleteShader(A),i.deleteShader(T),v=new ir(i,m),w=lg(i,m)}let v;this.getUniforms=function(){return v===void 0&&F(this),v};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(m,Q0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let vg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sg(t),e.set(t,n)),n}}class Sg{constructor(t){this.id=vg++,this.code=t,this.usedTimes=0}}function bg(o,t,e,n,i,s,r){const a=new Oh,l=new Mg,c=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,w,U,D,q){const L=D.fog,k=q.geometry,W=v.isMeshStandardMaterial?D.environment:null,K=(v.isMeshStandardMaterial?e:t).get(v.envMap||W),Y=K&&K.mapping===fr?K.image.height:null,$=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const J=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ct=J!==void 0?J.length:0;let ht=0;k.morphAttributes.position!==void 0&&(ht=1),k.morphAttributes.normal!==void 0&&(ht=2),k.morphAttributes.color!==void 0&&(ht=3);let X,et,ft,vt;if($){const st=Fn[$];X=st.vertexShader,et=st.fragmentShader}else X=v.vertexShader,et=v.fragmentShader,l.update(v),ft=l.getVertexShaderID(v),vt=l.getFragmentShaderID(v);const St=o.getRenderTarget(),Ot=q.isInstancedMesh===!0,Rt=q.isBatchedMesh===!0,Ct=!!v.map,Lt=!!v.matcap,G=!!K,Se=!!v.aoMap,Et=!!v.lightMap,Ht=!!v.bumpMap,_t=!!v.normalMap,fe=!!v.displacementMap,Kt=!!v.emissiveMap,M=!!v.metalnessMap,S=!!v.roughnessMap,O=v.anisotropy>0,P=v.clearcoat>0,j=v.iridescence>0,Z=v.sheen>0,Mt=v.transmission>0,nt=O&&!!v.anisotropyMap,gt=P&&!!v.clearcoatMap,It=P&&!!v.clearcoatNormalMap,Pt=P&&!!v.clearcoatRoughnessMap,tt=j&&!!v.iridescenceMap,Bt=j&&!!v.iridescenceThicknessMap,zt=Z&&!!v.sheenColorMap,Dt=Z&&!!v.sheenRoughnessMap,xt=!!v.specularMap,yt=!!v.specularColorMap,Gt=!!v.specularIntensityMap,ie=Mt&&!!v.transmissionMap,pe=Mt&&!!v.thicknessMap,kt=!!v.gradientMap,ot=!!v.alphaMap,I=v.alphaTest>0,at=!!v.alphaHash,lt=!!v.extensions,Ft=!!k.attributes.uv1,Ut=!!k.attributes.uv2,ce=!!k.attributes.uv3;let z=Jn;return v.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(z=o.toneMapping),{isWebGL2:d,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:et,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Rt,instancing:Ot,instancingColor:Ot&&q.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ce,map:Ct,matcap:Lt,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:Y,aoMap:Se,lightMap:Et,bumpMap:Ht,normalMap:_t,displacementMap:u&&fe,emissiveMap:Kt,normalMapObjectSpace:_t&&v.normalMapType===_d,normalMapTangentSpace:_t&&v.normalMapType===ja,metalnessMap:M,roughnessMap:S,anisotropy:O,anisotropyMap:nt,clearcoat:P,clearcoatMap:gt,clearcoatNormalMap:It,clearcoatRoughnessMap:Pt,iridescence:j,iridescenceMap:tt,iridescenceThicknessMap:Bt,sheen:Z,sheenColorMap:zt,sheenRoughnessMap:Dt,specularMap:xt,specularColorMap:yt,specularIntensityMap:Gt,transmission:Mt,transmissionMap:ie,thicknessMap:pe,gradientMap:kt,opaque:v.transparent===!1&&v.blending===_i,alphaMap:ot,alphaTest:I,alphaHash:at,combine:v.combine,mapUv:Ct&&_(v.map.channel),aoMapUv:Se&&_(v.aoMap.channel),lightMapUv:Et&&_(v.lightMap.channel),bumpMapUv:Ht&&_(v.bumpMap.channel),normalMapUv:_t&&_(v.normalMap.channel),displacementMapUv:fe&&_(v.displacementMap.channel),emissiveMapUv:Kt&&_(v.emissiveMap.channel),metalnessMapUv:M&&_(v.metalnessMap.channel),roughnessMapUv:S&&_(v.roughnessMap.channel),anisotropyMapUv:nt&&_(v.anisotropyMap.channel),clearcoatMapUv:gt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(v.sheenRoughnessMap.channel),specularMapUv:xt&&_(v.specularMap.channel),specularColorMapUv:yt&&_(v.specularColorMap.channel),specularIntensityMapUv:Gt&&_(v.specularIntensityMap.channel),transmissionMapUv:ie&&_(v.transmissionMap.channel),thicknessMapUv:pe&&_(v.thicknessMap.channel),alphaMapUv:ot&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(_t||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:Ut,vertexUv3s:ce,pointsUvs:q.isPoints===!0&&!!k.attributes.uv&&(Ct||ot),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:ht,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&U.length>0,shadowMapType:o.shadowMap.type,toneMapping:z,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===be,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Be,flipSided:v.side===ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:lt&&v.extensions.derivatives===!0,extensionFragDepth:lt&&v.extensions.fragDepth===!0,extensionDrawBuffers:lt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)w.push(U),w.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(y(w,v),x(w,v),w.push(o.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function b(v){const w=g[v.type];let U;if(w){const D=Fn[w];U=of.clone(D.uniforms)}else U=v.uniforms;return U}function R(v,w){let U;for(let D=0,q=c.length;D<q;D++){const L=c[D];if(L.cacheKey===w){U=L,++U.usedTimes;break}}return U===void 0&&(U=new xg(o,w,v,s),c.push(U)),U}function A(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:F}}function Tg(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Eg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Pc(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Lc(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(h,u,f,g,_,m){let p=o[t];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},o[t]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,u,f,g,_,m){const p=r(h,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,u,f,g,_,m){const p=r(h,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,u){e.length>1&&e.sort(h||Eg),n.length>1&&n.sort(u||Pc),i.length>1&&i.sort(u||Pc)}function d(){for(let h=t,u=o.length;h<u;h++){const f=o[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:d,sort:c}}function wg(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new Lc,o.set(n,[r])):i>=s.length?(r=new Lc,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function Ag(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Tt};break;case"SpotLight":e={position:new C,direction:new C,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new C,halfWidth:new C,halfHeight:new C};break}return o[t.id]=e,e}}}function Rg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Cg=0;function Pg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Lg(o,t){const e=new Ag,n=Rg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new C);const s=new C,r=new ne,a=new ne;function l(d,h){let u=0,f=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,b=0,R=0,A=0,T=0,F=0,v=0;d.sort(Pg);const w=h===!0?Math.PI:1;for(let D=0,q=d.length;D<q;D++){const L=d[D],k=L.color,W=L.intensity,K=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*W*w,f+=k.g*W*w,g+=k.b*W*w;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],W);v++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const J=L.shadow,ct=n.get(L);ct.shadowBias=J.bias,ct.shadowNormalBias=J.normalBias,ct.shadowRadius=J.radius,ct.shadowMapSize=J.mapSize,i.directionalShadow[_]=ct,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=L.shadow.matrix,b++}i.directional[_]=$,_++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(k).multiplyScalar(W*w),$.distance=K,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[p]=$;const J=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,J.updateMatrices(L),L.castShadow&&F++),i.spotLightMatrix[p]=J.matrix,L.castShadow){const ct=n.get(L);ct.shadowBias=J.bias,ct.shadowNormalBias=J.normalBias,ct.shadowRadius=J.radius,ct.shadowMapSize=J.mapSize,i.spotShadow[p]=ct,i.spotShadowMap[p]=Y,A++}p++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(k).multiplyScalar(W),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=$,y++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*w),$.distance=L.distance,$.decay=L.decay,L.castShadow){const J=L.shadow,ct=n.get(L);ct.shadowBias=J.bias,ct.shadowNormalBias=J.normalBias,ct.shadowRadius=J.radius,ct.shadowMapSize=J.mapSize,ct.shadowCameraNear=J.camera.near,ct.shadowCameraFar=J.camera.far,i.pointShadow[m]=ct,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=$,m++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(W*w),$.groundColor.copy(L.groundColor).multiplyScalar(W*w),i.hemi[x]=$,x++}}y>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const U=i.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==x||U.numDirectionalShadows!==b||U.numPointShadows!==R||U.numSpotShadows!==A||U.numSpotMaps!==T||U.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+T-F,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=v,U.directionalLength=_,U.pointLength=m,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=x,U.numDirectionalShadows=b,U.numPointShadows=R,U.numSpotShadows=A,U.numSpotMaps=T,U.numLightProbes=v,i.version=Cg++)}function c(d,h){let u=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let y=0,x=d.length;y<x;y++){const b=d[y];if(b.isDirectionalLight){const R=i.directional[u];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),u++}else if(b.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const R=i.rectArea[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const R=i.point[f];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Ic(o,t){const e=new Lg(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function Ig(o,t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new Ic(o,t),e.set(s,[l])):r>=a.length?(l=new Ic(o,t),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Dg extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ug extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`;function Og(o,t,e){let n=new Ja;const i=new Yt,s=new Yt,r=new xe,a=new Dg({depthPacking:gd}),l=new Ug,c={},d=e.maxTextureSize,h={[In]:ln,[ln]:In,[Be]:Be},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Ng,fragmentShader:Fg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ut(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let p=this.type;this.render=function(A,T,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=o.getRenderTarget(),w=o.getActiveCubeFace(),U=o.getActiveMipmapLevel(),D=o.state;D.setBlending(gi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const q=p!==Kn&&this.type===Kn,L=p===Kn&&this.type!==Kn;for(let k=0,W=A.length;k<W;k++){const K=A[k],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const $=Y.getFrameExtents();if(i.multiply($),s.copy(Y.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/$.x),i.x=s.x*$.x,Y.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/$.y),i.y=s.y*$.y,Y.mapSize.y=s.y)),Y.map===null||q===!0||L===!0){const ct=this.type!==Kn?{minFilter:Ye,magFilter:Ye}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Yi(i.x,i.y,ct),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const J=Y.getViewportCount();for(let ct=0;ct<J;ct++){const ht=Y.getViewport(ct);r.set(s.x*ht.x,s.y*ht.y,s.x*ht.z,s.y*ht.w),D.viewport(r),Y.updateMatrices(K,ct),n=Y.getFrustum(),b(T,F,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Kn&&y(Y,F),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(v,w,U)};function y(A,T){const F=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yi(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,o.setRenderTarget(A.mapPass),o.clear(),o.renderBufferDirect(T,null,F,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,o.setRenderTarget(A.map),o.clear(),o.renderBufferDirect(T,null,F,f,_,null)}function x(A,T,F,v){let w=null;const U=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)w=U;else if(w=F.isPointLight===!0?l:a,o.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=w.uuid,q=T.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let k=L[q];k===void 0&&(k=w.clone(),L[q]=k,T.addEventListener("dispose",R)),w=k}if(w.visible=T.visible,w.wireframe=T.wireframe,v===Kn?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:h[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const D=o.properties.get(w);D.light=F}return w}function b(A,T,F,v,w){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const q=t.update(A),L=A.material;if(Array.isArray(L)){const k=q.groups;for(let W=0,K=k.length;W<K;W++){const Y=k[W],$=L[Y.materialIndex];if($&&$.visible){const J=x(A,$,v,w);A.onBeforeShadow(o,A,T,F,q,J,Y),o.renderBufferDirect(F,null,q,J,A,Y),A.onAfterShadow(o,A,T,F,q,J,Y)}}}else if(L.visible){const k=x(A,L,v,w);A.onBeforeShadow(o,A,T,F,q,k,null),o.renderBufferDirect(F,null,q,k,A,null),A.onAfterShadow(o,A,T,F,q,k,null)}}const D=A.children;for(let q=0,L=D.length;q<L;q++)b(D[q],T,F,v,w)}function R(A){A.target.removeEventListener("dispose",R);for(const F in c){const v=c[F],w=A.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function kg(o,t,e){const n=e.isWebGL2;function i(){let I=!1;const at=new xe;let lt=null;const Ft=new xe(0,0,0,0);return{setMask:function(Ut){lt!==Ut&&!I&&(o.colorMask(Ut,Ut,Ut,Ut),lt=Ut)},setLocked:function(Ut){I=Ut},setClear:function(Ut,ce,z,Q,st){st===!0&&(Ut*=Q,ce*=Q,z*=Q),at.set(Ut,ce,z,Q),Ft.equals(at)===!1&&(o.clearColor(Ut,ce,z,Q),Ft.copy(at))},reset:function(){I=!1,lt=null,Ft.set(-1,0,0,0)}}}function s(){let I=!1,at=null,lt=null,Ft=null;return{setTest:function(Ut){Ut?Rt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(Ut){at!==Ut&&!I&&(o.depthMask(Ut),at=Ut)},setFunc:function(Ut){if(lt!==Ut){switch(Ut){case Wu:o.depthFunc(o.NEVER);break;case Vu:o.depthFunc(o.ALWAYS);break;case Xu:o.depthFunc(o.LESS);break;case or:o.depthFunc(o.LEQUAL);break;case qu:o.depthFunc(o.EQUAL);break;case Yu:o.depthFunc(o.GEQUAL);break;case Ku:o.depthFunc(o.GREATER);break;case ju:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}lt=Ut}},setLocked:function(Ut){I=Ut},setClear:function(Ut){Ft!==Ut&&(o.clearDepth(Ut),Ft=Ut)},reset:function(){I=!1,at=null,lt=null,Ft=null}}}function r(){let I=!1,at=null,lt=null,Ft=null,Ut=null,ce=null,z=null,Q=null,st=null;return{setTest:function(rt){I||(rt?Rt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(rt){at!==rt&&!I&&(o.stencilMask(rt),at=rt)},setFunc:function(rt,dt,it){(lt!==rt||Ft!==dt||Ut!==it)&&(o.stencilFunc(rt,dt,it),lt=rt,Ft=dt,Ut=it)},setOp:function(rt,dt,it){(ce!==rt||z!==dt||Q!==it)&&(o.stencilOp(rt,dt,it),ce=rt,z=dt,Q=it)},setLocked:function(rt){I=rt},setClear:function(rt){st!==rt&&(o.clearStencil(rt),st=rt)},reset:function(){I=!1,at=null,lt=null,Ft=null,Ut=null,ce=null,z=null,Q=null,st=null}}}const a=new i,l=new s,c=new r,d=new WeakMap,h=new WeakMap;let u={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,b=null,R=null,A=null,T=null,F=null,v=new Tt(0,0,0),w=0,U=!1,D=null,q=null,L=null,k=null,W=null;const K=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const J=o.getParameter(o.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=$>=2);let ct=null,ht={};const X=o.getParameter(o.SCISSOR_BOX),et=o.getParameter(o.VIEWPORT),ft=new xe().fromArray(X),vt=new xe().fromArray(et);function St(I,at,lt,Ft){const Ut=new Uint8Array(4),ce=o.createTexture();o.bindTexture(I,ce),o.texParameteri(I,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(I,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let z=0;z<lt;z++)n&&(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)?o.texImage3D(at,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Ut):o.texImage2D(at+z,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ut);return ce}const Ot={};Ot[o.TEXTURE_2D]=St(o.TEXTURE_2D,o.TEXTURE_2D,1),Ot[o.TEXTURE_CUBE_MAP]=St(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ot[o.TEXTURE_2D_ARRAY]=St(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ot[o.TEXTURE_3D]=St(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Rt(o.DEPTH_TEST),l.setFunc(or),Kt(!1),M(dl),Rt(o.CULL_FACE),_t(gi);function Rt(I){u[I]!==!0&&(o.enable(I),u[I]=!0)}function Ct(I){u[I]!==!1&&(o.disable(I),u[I]=!1)}function Lt(I,at){return f[I]!==at?(o.bindFramebuffer(I,at),f[I]=at,n&&(I===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=at),I===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=at)),!0):!1}function G(I,at){let lt=_,Ft=!1;if(I)if(lt=g.get(at),lt===void 0&&(lt=[],g.set(at,lt)),I.isWebGLMultipleRenderTargets){const Ut=I.texture;if(lt.length!==Ut.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let ce=0,z=Ut.length;ce<z;ce++)lt[ce]=o.COLOR_ATTACHMENT0+ce;lt.length=Ut.length,Ft=!0}}else lt[0]!==o.COLOR_ATTACHMENT0&&(lt[0]=o.COLOR_ATTACHMENT0,Ft=!0);else lt[0]!==o.BACK&&(lt[0]=o.BACK,Ft=!0);Ft&&(e.isWebGL2?o.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function Se(I){return m!==I?(o.useProgram(I),m=I,!0):!1}const Et={[zi]:o.FUNC_ADD,[Ru]:o.FUNC_SUBTRACT,[Cu]:o.FUNC_REVERSE_SUBTRACT};if(n)Et[ml]=o.MIN,Et[gl]=o.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(Et[ml]=I.MIN_EXT,Et[gl]=I.MAX_EXT)}const Ht={[Pu]:o.ZERO,[Lu]:o.ONE,[Iu]:o.SRC_COLOR,[Ra]:o.SRC_ALPHA,[ku]:o.SRC_ALPHA_SATURATE,[Fu]:o.DST_COLOR,[Uu]:o.DST_ALPHA,[Du]:o.ONE_MINUS_SRC_COLOR,[Ca]:o.ONE_MINUS_SRC_ALPHA,[Ou]:o.ONE_MINUS_DST_COLOR,[Nu]:o.ONE_MINUS_DST_ALPHA,[Hu]:o.CONSTANT_COLOR,[Bu]:o.ONE_MINUS_CONSTANT_COLOR,[zu]:o.CONSTANT_ALPHA,[Gu]:o.ONE_MINUS_CONSTANT_ALPHA};function _t(I,at,lt,Ft,Ut,ce,z,Q,st,rt){if(I===gi){p===!0&&(Ct(o.BLEND),p=!1);return}if(p===!1&&(Rt(o.BLEND),p=!0),I!==Au){if(I!==y||rt!==U){if((x!==zi||A!==zi)&&(o.blendEquation(o.FUNC_ADD),x=zi,A=zi),rt)switch(I){case _i:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case cn:o.blendFunc(o.ONE,o.ONE);break;case fl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pl:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _i:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case cn:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case fl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pl:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,R=null,T=null,F=null,v.set(0,0,0),w=0,y=I,U=rt}return}Ut=Ut||at,ce=ce||lt,z=z||Ft,(at!==x||Ut!==A)&&(o.blendEquationSeparate(Et[at],Et[Ut]),x=at,A=Ut),(lt!==b||Ft!==R||ce!==T||z!==F)&&(o.blendFuncSeparate(Ht[lt],Ht[Ft],Ht[ce],Ht[z]),b=lt,R=Ft,T=ce,F=z),(Q.equals(v)===!1||st!==w)&&(o.blendColor(Q.r,Q.g,Q.b,st),v.copy(Q),w=st),y=I,U=!1}function fe(I,at){I.side===Be?Ct(o.CULL_FACE):Rt(o.CULL_FACE);let lt=I.side===ln;at&&(lt=!lt),Kt(lt),I.blending===_i&&I.transparent===!1?_t(gi):_t(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ft=I.stencilWrite;c.setTest(Ft),Ft&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),O(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(I){D!==I&&(I?o.frontFace(o.CW):o.frontFace(o.CCW),D=I)}function M(I){I!==Tu?(Rt(o.CULL_FACE),I!==q&&(I===dl?o.cullFace(o.BACK):I===Eu?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),q=I}function S(I){I!==L&&(Y&&o.lineWidth(I),L=I)}function O(I,at,lt){I?(Rt(o.POLYGON_OFFSET_FILL),(k!==at||W!==lt)&&(o.polygonOffset(at,lt),k=at,W=lt)):Ct(o.POLYGON_OFFSET_FILL)}function P(I){I?Rt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function j(I){I===void 0&&(I=o.TEXTURE0+K-1),ct!==I&&(o.activeTexture(I),ct=I)}function Z(I,at,lt){lt===void 0&&(ct===null?lt=o.TEXTURE0+K-1:lt=ct);let Ft=ht[lt];Ft===void 0&&(Ft={type:void 0,texture:void 0},ht[lt]=Ft),(Ft.type!==I||Ft.texture!==at)&&(ct!==lt&&(o.activeTexture(lt),ct=lt),o.bindTexture(I,at||Ot[I]),Ft.type=I,Ft.texture=at)}function Mt(){const I=ht[ct];I!==void 0&&I.type!==void 0&&(o.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function nt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{o.texSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{o.texSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{o.texStorage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{o.texStorage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{o.texImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{o.texImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(I){ft.equals(I)===!1&&(o.scissor(I.x,I.y,I.z,I.w),ft.copy(I))}function ie(I){vt.equals(I)===!1&&(o.viewport(I.x,I.y,I.z,I.w),vt.copy(I))}function pe(I,at){let lt=h.get(at);lt===void 0&&(lt=new WeakMap,h.set(at,lt));let Ft=lt.get(I);Ft===void 0&&(Ft=o.getUniformBlockIndex(at,I.name),lt.set(I,Ft))}function kt(I,at){const Ft=h.get(at).get(I);d.get(at)!==Ft&&(o.uniformBlockBinding(at,Ft,I.__bindingPointIndex),d.set(at,Ft))}function ot(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},ct=null,ht={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,b=null,R=null,A=null,T=null,F=null,v=new Tt(0,0,0),w=0,U=!1,D=null,q=null,L=null,k=null,W=null,ft.set(0,0,o.canvas.width,o.canvas.height),vt.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Rt,disable:Ct,bindFramebuffer:Lt,drawBuffers:G,useProgram:Se,setBlending:_t,setMaterial:fe,setFlipSided:Kt,setCullFace:M,setLineWidth:S,setPolygonOffset:O,setScissorTest:P,activeTexture:j,bindTexture:Z,unbindTexture:Mt,compressedTexImage2D:nt,compressedTexImage3D:gt,texImage2D:xt,texImage3D:yt,updateUBOMapping:pe,uniformBlockBinding:kt,texStorage2D:zt,texStorage3D:Dt,texSubImage2D:It,texSubImage3D:Pt,compressedTexSubImage2D:tt,compressedTexSubImage3D:Bt,scissor:Gt,viewport:ie,reset:ot}}function Hg(o,t,e,n,i,s,r){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,S){return f?new OffscreenCanvas(M,S):oo("canvas")}function _(M,S,O,P){let j=1;if((M.width>P||M.height>P)&&(j=P/Math.max(M.width,M.height)),j<1||S===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const Z=S?ur:Math.floor,Mt=Z(j*M.width),nt=Z(j*M.height);h===void 0&&(h=g(Mt,nt));const gt=O?g(Mt,nt):h;return gt.width=Mt,gt.height=nt,gt.getContext("2d").drawImage(M,0,0,Mt,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Mt+"x"+nt+")."),gt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return Fa(M.width)&&Fa(M.height)}function p(M){return a?!1:M.wrapS!==Ne||M.wrapT!==Ne||M.minFilter!==Ye&&M.minFilter!==Ue}function y(M,S){return M.generateMipmaps&&S&&M.minFilter!==Ye&&M.minFilter!==Ue}function x(M){o.generateMipmap(M)}function b(M,S,O,P,j=!1){if(a===!1)return S;if(M!==null){if(o[M]!==void 0)return o[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=S;if(S===o.RED&&(O===o.FLOAT&&(Z=o.R32F),O===o.HALF_FLOAT&&(Z=o.R16F),O===o.UNSIGNED_BYTE&&(Z=o.R8)),S===o.RED_INTEGER&&(O===o.UNSIGNED_BYTE&&(Z=o.R8UI),O===o.UNSIGNED_SHORT&&(Z=o.R16UI),O===o.UNSIGNED_INT&&(Z=o.R32UI),O===o.BYTE&&(Z=o.R8I),O===o.SHORT&&(Z=o.R16I),O===o.INT&&(Z=o.R32I)),S===o.RG&&(O===o.FLOAT&&(Z=o.RG32F),O===o.HALF_FLOAT&&(Z=o.RG16F),O===o.UNSIGNED_BYTE&&(Z=o.RG8)),S===o.RGBA){const Mt=j?ar:he.getTransfer(P);O===o.FLOAT&&(Z=o.RGBA32F),O===o.HALF_FLOAT&&(Z=o.RGBA16F),O===o.UNSIGNED_BYTE&&(Z=Mt===be?o.SRGB8_ALPHA8:o.RGBA8),O===o.UNSIGNED_SHORT_4_4_4_4&&(Z=o.RGBA4),O===o.UNSIGNED_SHORT_5_5_5_1&&(Z=o.RGB5_A1)}return(Z===o.R16F||Z===o.R32F||Z===o.RG16F||Z===o.RG32F||Z===o.RGBA16F||Z===o.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function R(M,S,O){return y(M,O)===!0||M.isFramebufferTexture&&M.minFilter!==Ye&&M.minFilter!==Ue?Math.log2(Math.max(S.width,S.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?S.mipmaps.length:1}function A(M){return M===Ye||M===Ia||M===nr?o.NEAREST:o.LINEAR}function T(M){const S=M.target;S.removeEventListener("dispose",T),v(S),S.isVideoTexture&&d.delete(S)}function F(M){const S=M.target;S.removeEventListener("dispose",F),U(S)}function v(M){const S=n.get(M);if(S.__webglInit===void 0)return;const O=M.source,P=u.get(O);if(P){const j=P[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(M),Object.keys(P).length===0&&u.delete(O)}n.remove(M)}function w(M){const S=n.get(M);o.deleteTexture(S.__webglTexture);const O=M.source,P=u.get(O);delete P[S.__cacheKey],r.memory.textures--}function U(M){const S=M.texture,O=n.get(M),P=n.get(S);if(P.__webglTexture!==void 0&&(o.deleteTexture(P.__webglTexture),r.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(O.__webglFramebuffer[j]))for(let Z=0;Z<O.__webglFramebuffer[j].length;Z++)o.deleteFramebuffer(O.__webglFramebuffer[j][Z]);else o.deleteFramebuffer(O.__webglFramebuffer[j]);O.__webglDepthbuffer&&o.deleteRenderbuffer(O.__webglDepthbuffer[j])}else{if(Array.isArray(O.__webglFramebuffer))for(let j=0;j<O.__webglFramebuffer.length;j++)o.deleteFramebuffer(O.__webglFramebuffer[j]);else o.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&o.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&o.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let j=0;j<O.__webglColorRenderbuffer.length;j++)O.__webglColorRenderbuffer[j]&&o.deleteRenderbuffer(O.__webglColorRenderbuffer[j]);O.__webglDepthRenderbuffer&&o.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let j=0,Z=S.length;j<Z;j++){const Mt=n.get(S[j]);Mt.__webglTexture&&(o.deleteTexture(Mt.__webglTexture),r.memory.textures--),n.remove(S[j])}n.remove(S),n.remove(M)}let D=0;function q(){D=0}function L(){const M=D;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),D+=1,M}function k(M){const S=[];return S.push(M.wrapS),S.push(M.wrapT),S.push(M.wrapR||0),S.push(M.magFilter),S.push(M.minFilter),S.push(M.anisotropy),S.push(M.internalFormat),S.push(M.format),S.push(M.type),S.push(M.generateMipmaps),S.push(M.premultiplyAlpha),S.push(M.flipY),S.push(M.unpackAlignment),S.push(M.colorSpace),S.join()}function W(M,S){const O=n.get(M);if(M.isVideoTexture&&fe(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const P=M.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(O,M,S);return}}e.bindTexture(o.TEXTURE_2D,O.__webglTexture,o.TEXTURE0+S)}function K(M,S){const O=n.get(M);if(M.version>0&&O.__version!==M.version){ft(O,M,S);return}e.bindTexture(o.TEXTURE_2D_ARRAY,O.__webglTexture,o.TEXTURE0+S)}function Y(M,S){const O=n.get(M);if(M.version>0&&O.__version!==M.version){ft(O,M,S);return}e.bindTexture(o.TEXTURE_3D,O.__webglTexture,o.TEXTURE0+S)}function $(M,S){const O=n.get(M);if(M.version>0&&O.__version!==M.version){vt(O,M,S);return}e.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+S)}const J={[dn]:o.REPEAT,[Ne]:o.CLAMP_TO_EDGE,[rr]:o.MIRRORED_REPEAT},ct={[Ye]:o.NEAREST,[Ia]:o.NEAREST_MIPMAP_NEAREST,[nr]:o.NEAREST_MIPMAP_LINEAR,[Ue]:o.LINEAR,[Sh]:o.LINEAR_MIPMAP_NEAREST,[vi]:o.LINEAR_MIPMAP_LINEAR},ht={[yd]:o.NEVER,[Td]:o.ALWAYS,[xd]:o.LESS,[Ih]:o.LEQUAL,[vd]:o.EQUAL,[bd]:o.GEQUAL,[Md]:o.GREATER,[Sd]:o.NOTEQUAL};function X(M,S,O){if(O?(o.texParameteri(M,o.TEXTURE_WRAP_S,J[S.wrapS]),o.texParameteri(M,o.TEXTURE_WRAP_T,J[S.wrapT]),(M===o.TEXTURE_3D||M===o.TEXTURE_2D_ARRAY)&&o.texParameteri(M,o.TEXTURE_WRAP_R,J[S.wrapR]),o.texParameteri(M,o.TEXTURE_MAG_FILTER,ct[S.magFilter]),o.texParameteri(M,o.TEXTURE_MIN_FILTER,ct[S.minFilter])):(o.texParameteri(M,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(M,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(M===o.TEXTURE_3D||M===o.TEXTURE_2D_ARRAY)&&o.texParameteri(M,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(S.wrapS!==Ne||S.wrapT!==Ne)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(M,o.TEXTURE_MAG_FILTER,A(S.magFilter)),o.texParameteri(M,o.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==Ye&&S.minFilter!==Ue&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(o.texParameteri(M,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(M,o.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ye||S.minFilter!==nr&&S.minFilter!==vi||S.type===$n&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===io&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(M,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function et(M,S){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,S.addEventListener("dispose",T));const P=S.source;let j=u.get(P);j===void 0&&(j={},u.set(P,j));const Z=k(S);if(Z!==M.__cacheKey){j[Z]===void 0&&(j[Z]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,O=!0),j[Z].usedTimes++;const Mt=j[M.__cacheKey];Mt!==void 0&&(j[M.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(S)),M.__cacheKey=Z,M.__webglTexture=j[Z].texture}return O}function ft(M,S,O){let P=o.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(P=o.TEXTURE_2D_ARRAY),S.isData3DTexture&&(P=o.TEXTURE_3D);const j=et(M,S),Z=S.source;e.bindTexture(P,M.__webglTexture,o.TEXTURE0+O);const Mt=n.get(Z);if(Z.version!==Mt.__version||j===!0){e.activeTexture(o.TEXTURE0+O);const nt=he.getPrimaries(he.workingColorSpace),gt=S.colorSpace===bn?null:he.getPrimaries(S.colorSpace),It=S.colorSpace===bn||nt===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Pt=p(S)&&m(S.image)===!1;let tt=_(S.image,Pt,!1,i.maxTextureSize);tt=Kt(S,tt);const Bt=m(tt)||a,zt=s.convert(S.format,S.colorSpace);let Dt=s.convert(S.type),xt=b(S.internalFormat,zt,Dt,S.colorSpace,S.isVideoTexture);X(P,S,Bt);let yt;const Gt=S.mipmaps,ie=a&&S.isVideoTexture!==!0&&xt!==Ch,pe=Mt.__version===void 0||j===!0,kt=R(S,tt,Bt);if(S.isDepthTexture)xt=o.DEPTH_COMPONENT,a?S.type===$n?xt=o.DEPTH_COMPONENT32F:S.type===pi?xt=o.DEPTH_COMPONENT24:S.type===Vi?xt=o.DEPTH24_STENCIL8:xt=o.DEPTH_COMPONENT16:S.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Xi&&xt===o.DEPTH_COMPONENT&&S.type!==Ka&&S.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=pi,Dt=s.convert(S.type)),S.format===As&&xt===o.DEPTH_COMPONENT&&(xt=o.DEPTH_STENCIL,S.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Vi,Dt=s.convert(S.type))),pe&&(ie?e.texStorage2D(o.TEXTURE_2D,1,xt,tt.width,tt.height):e.texImage2D(o.TEXTURE_2D,0,xt,tt.width,tt.height,0,zt,Dt,null));else if(S.isDataTexture)if(Gt.length>0&&Bt){ie&&pe&&e.texStorage2D(o.TEXTURE_2D,kt,xt,Gt[0].width,Gt[0].height);for(let ot=0,I=Gt.length;ot<I;ot++)yt=Gt[ot],ie?e.texSubImage2D(o.TEXTURE_2D,ot,0,0,yt.width,yt.height,zt,Dt,yt.data):e.texImage2D(o.TEXTURE_2D,ot,xt,yt.width,yt.height,0,zt,Dt,yt.data);S.generateMipmaps=!1}else ie?(pe&&e.texStorage2D(o.TEXTURE_2D,kt,xt,tt.width,tt.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,tt.width,tt.height,zt,Dt,tt.data)):e.texImage2D(o.TEXTURE_2D,0,xt,tt.width,tt.height,0,zt,Dt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ie&&pe&&e.texStorage3D(o.TEXTURE_2D_ARRAY,kt,xt,Gt[0].width,Gt[0].height,tt.depth);for(let ot=0,I=Gt.length;ot<I;ot++)yt=Gt[ot],S.format!==un?zt!==null?ie?e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,yt.width,yt.height,tt.depth,zt,yt.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,xt,yt.width,yt.height,tt.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,yt.width,yt.height,tt.depth,zt,Dt,yt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,ot,xt,yt.width,yt.height,tt.depth,0,zt,Dt,yt.data)}else{ie&&pe&&e.texStorage2D(o.TEXTURE_2D,kt,xt,Gt[0].width,Gt[0].height);for(let ot=0,I=Gt.length;ot<I;ot++)yt=Gt[ot],S.format!==un?zt!==null?ie?e.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,yt.width,yt.height,zt,yt.data):e.compressedTexImage2D(o.TEXTURE_2D,ot,xt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage2D(o.TEXTURE_2D,ot,0,0,yt.width,yt.height,zt,Dt,yt.data):e.texImage2D(o.TEXTURE_2D,ot,xt,yt.width,yt.height,0,zt,Dt,yt.data)}else if(S.isDataArrayTexture)ie?(pe&&e.texStorage3D(o.TEXTURE_2D_ARRAY,kt,xt,tt.width,tt.height,tt.depth),e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,zt,Dt,tt.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,xt,tt.width,tt.height,tt.depth,0,zt,Dt,tt.data);else if(S.isData3DTexture)ie?(pe&&e.texStorage3D(o.TEXTURE_3D,kt,xt,tt.width,tt.height,tt.depth),e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,zt,Dt,tt.data)):e.texImage3D(o.TEXTURE_3D,0,xt,tt.width,tt.height,tt.depth,0,zt,Dt,tt.data);else if(S.isFramebufferTexture){if(pe)if(ie)e.texStorage2D(o.TEXTURE_2D,kt,xt,tt.width,tt.height);else{let ot=tt.width,I=tt.height;for(let at=0;at<kt;at++)e.texImage2D(o.TEXTURE_2D,at,xt,ot,I,0,zt,Dt,null),ot>>=1,I>>=1}}else if(Gt.length>0&&Bt){ie&&pe&&e.texStorage2D(o.TEXTURE_2D,kt,xt,Gt[0].width,Gt[0].height);for(let ot=0,I=Gt.length;ot<I;ot++)yt=Gt[ot],ie?e.texSubImage2D(o.TEXTURE_2D,ot,0,0,zt,Dt,yt):e.texImage2D(o.TEXTURE_2D,ot,xt,zt,Dt,yt);S.generateMipmaps=!1}else ie?(pe&&e.texStorage2D(o.TEXTURE_2D,kt,xt,tt.width,tt.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,Dt,tt)):e.texImage2D(o.TEXTURE_2D,0,xt,zt,Dt,tt);y(S,Bt)&&x(P),Mt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}M.__version=S.version}function vt(M,S,O){if(S.image.length!==6)return;const P=et(M,S),j=S.source;e.bindTexture(o.TEXTURE_CUBE_MAP,M.__webglTexture,o.TEXTURE0+O);const Z=n.get(j);if(j.version!==Z.__version||P===!0){e.activeTexture(o.TEXTURE0+O);const Mt=he.getPrimaries(he.workingColorSpace),nt=S.colorSpace===bn?null:he.getPrimaries(S.colorSpace),gt=S.colorSpace===bn||Mt===nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const It=S.isCompressedTexture||S.image[0].isCompressedTexture,Pt=S.image[0]&&S.image[0].isDataTexture,tt=[];for(let ot=0;ot<6;ot++)!It&&!Pt?tt[ot]=_(S.image[ot],!1,!0,i.maxCubemapSize):tt[ot]=Pt?S.image[ot].image:S.image[ot],tt[ot]=Kt(S,tt[ot]);const Bt=tt[0],zt=m(Bt)||a,Dt=s.convert(S.format,S.colorSpace),xt=s.convert(S.type),yt=b(S.internalFormat,Dt,xt,S.colorSpace),Gt=a&&S.isVideoTexture!==!0,ie=Z.__version===void 0||P===!0;let pe=R(S,Bt,zt);X(o.TEXTURE_CUBE_MAP,S,zt);let kt;if(It){Gt&&ie&&e.texStorage2D(o.TEXTURE_CUBE_MAP,pe,yt,Bt.width,Bt.height);for(let ot=0;ot<6;ot++){kt=tt[ot].mipmaps;for(let I=0;I<kt.length;I++){const at=kt[I];S.format!==un?Dt!==null?Gt?e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,0,0,at.width,at.height,Dt,at.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,yt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,0,0,at.width,at.height,Dt,xt,at.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I,yt,at.width,at.height,0,Dt,xt,at.data)}}}else{kt=S.mipmaps,Gt&&ie&&(kt.length>0&&pe++,e.texStorage2D(o.TEXTURE_CUBE_MAP,pe,yt,tt[0].width,tt[0].height));for(let ot=0;ot<6;ot++)if(Pt){Gt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,tt[ot].width,tt[ot].height,Dt,xt,tt[ot].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,yt,tt[ot].width,tt[ot].height,0,Dt,xt,tt[ot].data);for(let I=0;I<kt.length;I++){const lt=kt[I].image[ot].image;Gt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,0,0,lt.width,lt.height,Dt,xt,lt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,yt,lt.width,lt.height,0,Dt,xt,lt.data)}}else{Gt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Dt,xt,tt[ot]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,yt,Dt,xt,tt[ot]);for(let I=0;I<kt.length;I++){const at=kt[I];Gt?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,0,0,Dt,xt,at.image[ot]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,I+1,yt,Dt,xt,at.image[ot])}}}y(S,zt)&&x(o.TEXTURE_CUBE_MAP),Z.__version=j.version,S.onUpdate&&S.onUpdate(S)}M.__version=S.version}function St(M,S,O,P,j,Z){const Mt=s.convert(O.format,O.colorSpace),nt=s.convert(O.type),gt=b(O.internalFormat,Mt,nt,O.colorSpace);if(!n.get(S).__hasExternalTextures){const Pt=Math.max(1,S.width>>Z),tt=Math.max(1,S.height>>Z);j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,gt,Pt,tt,S.depth,0,Mt,nt,null):e.texImage2D(j,Z,gt,Pt,tt,0,Mt,nt,null)}e.bindFramebuffer(o.FRAMEBUFFER,M),_t(S)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,P,j,n.get(O).__webglTexture,0,Ht(S)):(j===o.TEXTURE_2D||j>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,P,j,n.get(O).__webglTexture,Z),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(M,S,O){if(o.bindRenderbuffer(o.RENDERBUFFER,M),S.depthBuffer&&!S.stencilBuffer){let P=a===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(O||_t(S)){const j=S.depthTexture;j&&j.isDepthTexture&&(j.type===$n?P=o.DEPTH_COMPONENT32F:j.type===pi&&(P=o.DEPTH_COMPONENT24));const Z=Ht(S);_t(S)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Z,P,S.width,S.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Z,P,S.width,S.height)}else o.renderbufferStorage(o.RENDERBUFFER,P,S.width,S.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,M)}else if(S.depthBuffer&&S.stencilBuffer){const P=Ht(S);O&&_t(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,P,o.DEPTH24_STENCIL8,S.width,S.height):_t(S)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,P,o.DEPTH24_STENCIL8,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,S.width,S.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,M)}else{const P=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let j=0;j<P.length;j++){const Z=P[j],Mt=s.convert(Z.format,Z.colorSpace),nt=s.convert(Z.type),gt=b(Z.internalFormat,Mt,nt,Z.colorSpace),It=Ht(S);O&&_t(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,It,gt,S.width,S.height):_t(S)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,It,gt,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,gt,S.width,S.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(M,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,M),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const P=n.get(S.depthTexture).__webglTexture,j=Ht(S);if(S.depthTexture.format===Xi)_t(S)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,P,0,j):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,P,0);else if(S.depthTexture.format===As)_t(S)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,P,0,j):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,P,0);else throw new Error("Unknown depthTexture format")}function Ct(M){const S=n.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Rt(S.__webglFramebuffer,M)}else if(O){S.__webglDepthbuffer=[];for(let P=0;P<6;P++)e.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[P]),S.__webglDepthbuffer[P]=o.createRenderbuffer(),Ot(S.__webglDepthbuffer[P],M,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Ot(S.__webglDepthbuffer,M,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function Lt(M,S,O){const P=n.get(M);S!==void 0&&St(P.__webglFramebuffer,M,M.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),O!==void 0&&Ct(M)}function G(M){const S=M.texture,O=n.get(M),P=n.get(S);M.addEventListener("dispose",F),M.isWebGLMultipleRenderTargets!==!0&&(P.__webglTexture===void 0&&(P.__webglTexture=o.createTexture()),P.__version=S.version,r.memory.textures++);const j=M.isWebGLCubeRenderTarget===!0,Z=M.isWebGLMultipleRenderTargets===!0,Mt=m(M)||a;if(j){O.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[nt]=[];for(let gt=0;gt<S.mipmaps.length;gt++)O.__webglFramebuffer[nt][gt]=o.createFramebuffer()}else O.__webglFramebuffer[nt]=o.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let nt=0;nt<S.mipmaps.length;nt++)O.__webglFramebuffer[nt]=o.createFramebuffer()}else O.__webglFramebuffer=o.createFramebuffer();if(Z)if(i.drawBuffers){const nt=M.texture;for(let gt=0,It=nt.length;gt<It;gt++){const Pt=n.get(nt[gt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&_t(M)===!1){const nt=Z?S:[S];O.__webglMultisampledFramebuffer=o.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let gt=0;gt<nt.length;gt++){const It=nt[gt];O.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,O.__webglColorRenderbuffer[gt]);const Pt=s.convert(It.format,It.colorSpace),tt=s.convert(It.type),Bt=b(It.internalFormat,Pt,tt,It.colorSpace,M.isXRRenderTarget===!0),zt=Ht(M);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Bt,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,O.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(O.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(j){e.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture),X(o.TEXTURE_CUBE_MAP,S,Mt);for(let nt=0;nt<6;nt++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)St(O.__webglFramebuffer[nt][gt],M,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt);else St(O.__webglFramebuffer[nt],M,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);y(S,Mt)&&x(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){const nt=M.texture;for(let gt=0,It=nt.length;gt<It;gt++){const Pt=nt[gt],tt=n.get(Pt);e.bindTexture(o.TEXTURE_2D,tt.__webglTexture),X(o.TEXTURE_2D,Pt,Mt),St(O.__webglFramebuffer,M,Pt,o.COLOR_ATTACHMENT0+gt,o.TEXTURE_2D,0),y(Pt,Mt)&&x(o.TEXTURE_2D)}e.unbindTexture()}else{let nt=o.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?nt=M.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(nt,P.__webglTexture),X(nt,S,Mt),a&&S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)St(O.__webglFramebuffer[gt],M,S,o.COLOR_ATTACHMENT0,nt,gt);else St(O.__webglFramebuffer,M,S,o.COLOR_ATTACHMENT0,nt,0);y(S,Mt)&&x(nt),e.unbindTexture()}M.depthBuffer&&Ct(M)}function Se(M){const S=m(M)||a,O=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let P=0,j=O.length;P<j;P++){const Z=O[P];if(y(Z,S)){const Mt=M.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,nt=n.get(Z).__webglTexture;e.bindTexture(Mt,nt),x(Mt),e.unbindTexture()}}}function Et(M){if(a&&M.samples>0&&_t(M)===!1){const S=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],O=M.width,P=M.height;let j=o.COLOR_BUFFER_BIT;const Z=[],Mt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,nt=n.get(M),gt=M.isWebGLMultipleRenderTargets===!0;if(gt)for(let It=0;It<S.length;It++)e.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let It=0;It<S.length;It++){Z.push(o.COLOR_ATTACHMENT0+It),M.depthBuffer&&Z.push(Mt);const Pt=nt.__ignoreDepthValues!==void 0?nt.__ignoreDepthValues:!1;if(Pt===!1&&(M.depthBuffer&&(j|=o.DEPTH_BUFFER_BIT),M.stencilBuffer&&(j|=o.STENCIL_BUFFER_BIT)),gt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,nt.__webglColorRenderbuffer[It]),Pt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Mt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Mt])),gt){const tt=n.get(S[It]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,tt,0)}o.blitFramebuffer(0,0,O,P,0,0,O,P,j,o.NEAREST),c&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Z)}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let It=0;It<S.length;It++){e.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,nt.__webglColorRenderbuffer[It]);const Pt=n.get(S[It]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,Pt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}}function Ht(M){return Math.min(i.maxSamples,M.samples)}function _t(M){const S=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(M){const S=r.render.frame;d.get(M)!==S&&(d.set(M,S),M.update())}function Kt(M,S){const O=M.colorSpace,P=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Na||O!==Ce&&O!==bn&&(he.getTransfer(O)===be?a===!1?t.has("EXT_sRGB")===!0&&P===un?(M.format=Na,M.minFilter=Ue,M.generateMipmaps=!1):S=Uh.sRGBToLinear(S):(P!==un||j!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=Lt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=St,this.useMultisampledRTT=_t}function Bg(o,t,e){const n=e.isWebGL2;function i(s,r=bn){let a;const l=he.getTransfer(r);if(s===yi)return o.UNSIGNED_BYTE;if(s===Th)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Eh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===od)return o.BYTE;if(s===rd)return o.SHORT;if(s===Ka)return o.UNSIGNED_SHORT;if(s===bh)return o.INT;if(s===pi)return o.UNSIGNED_INT;if(s===$n)return o.FLOAT;if(s===io)return n?o.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ad)return o.ALPHA;if(s===un)return o.RGBA;if(s===ld)return o.LUMINANCE;if(s===cd)return o.LUMINANCE_ALPHA;if(s===Xi)return o.DEPTH_COMPONENT;if(s===As)return o.DEPTH_STENCIL;if(s===Na)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===hd)return o.RED;if(s===wh)return o.RED_INTEGER;if(s===ud)return o.RG;if(s===Ah)return o.RG_INTEGER;if(s===Rh)return o.RGBA_INTEGER;if(s===wr||s===Ar||s===Rr||s===Cr)if(l===be)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===wr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===wr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ar)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yl||s===xl||s===vl||s===Ml)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ml)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ch)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sl||s===bl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sl)return l===be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bl)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Tl||s===El||s===wl||s===Al||s===Rl||s===Cl||s===Pl||s===Ll||s===Il||s===Dl||s===Ul||s===Nl||s===Fl||s===Ol)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Tl)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===El)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wl)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Al)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rl)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cl)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pl)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ll)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Il)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dl)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ul)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nl)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fl)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ol)return l===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pr||s===kl||s===Hl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Pr)return l===be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dd||s===Bl||s===zl||s===Gl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Pr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vi?n?o.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class zg extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class an extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gg={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Wg extends Ds{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,g=null;const _=e.getContextAttributes();let m=null,p=null;const y=[],x=[],b=new Yt;let R=null;const A=new en;A.layers.enable(1),A.viewport=new xe;const T=new en;T.layers.enable(2),T.viewport=new xe;const F=[A,T],v=new zg;v.layers.enable(1),v.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=y[X];return et===void 0&&(et=new ta,y[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=y[X];return et===void 0&&(et=new ta,y[X]=et),et.getGripSpace()},this.getHand=function(X){let et=y[X];return et===void 0&&(et=new ta,y[X]=et),et.getHandSpace()};function D(X){const et=x.indexOf(X.inputSource);if(et===-1)return;const ft=y[et];ft!==void 0&&(ft.update(X.inputSource,X.frame,c||r),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",L);for(let X=0;X<y.length;X++){const et=x[X];et!==null&&(x[X]=null,y[X].disconnect(et))}w=null,U=null,t.setRenderTarget(m),f=null,u=null,h=null,i=null,p=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",q),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Yi(f.framebufferWidth,f.framebufferHeight,{format:un,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let et=null,ft=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?As:Xi,ft=_.stencil?Vi:pi);const St={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(St),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),p=new Yi(u.textureWidth,u.textureHeight,{format:un,type:yi,depthTexture:new Xh(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Ot=t.properties.get(p);Ot.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),ht.setContext(i),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(X){for(let et=0;et<X.removed.length;et++){const ft=X.removed[et],vt=x.indexOf(ft);vt>=0&&(x[vt]=null,y[vt].disconnect(ft))}for(let et=0;et<X.added.length;et++){const ft=X.added[et];let vt=x.indexOf(ft);if(vt===-1){for(let Ot=0;Ot<y.length;Ot++)if(Ot>=x.length){x.push(ft),vt=Ot;break}else if(x[Ot]===null){x[Ot]=ft,vt=Ot;break}if(vt===-1)break}const St=y[vt];St&&St.connect(ft)}}const k=new C,W=new C;function K(X,et,ft){k.setFromMatrixPosition(et.matrixWorld),W.setFromMatrixPosition(ft.matrixWorld);const vt=k.distanceTo(W),St=et.projectionMatrix.elements,Ot=ft.projectionMatrix.elements,Rt=St[14]/(St[10]-1),Ct=St[14]/(St[10]+1),Lt=(St[9]+1)/St[5],G=(St[9]-1)/St[5],Se=(St[8]-1)/St[0],Et=(Ot[8]+1)/Ot[0],Ht=Rt*Se,_t=Rt*Et,fe=vt/(-Se+Et),Kt=fe*-Se;et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Kt),X.translateZ(fe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const M=Rt+fe,S=Ct+fe,O=Ht-Kt,P=_t+(vt-Kt),j=Lt*Ct/S*M,Z=G*Ct/S*M;X.projectionMatrix.makePerspective(O,P,j,Z,M,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;v.near=T.near=A.near=X.near,v.far=T.far=A.far=X.far,(w!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,U=v.far);const et=X.parent,ft=v.cameras;Y(v,et);for(let vt=0;vt<ft.length;vt++)Y(ft[vt],et);ft.length===2?K(v,A,T):v.projectionMatrix.copy(A.projectionMatrix),$(X,v,et)};function $(X,et,ft){ft===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Cs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let J=null;function ct(X,et){if(d=et.getViewerPose(c||r),g=et,d!==null){const ft=d.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let vt=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,vt=!0);for(let St=0;St<ft.length;St++){const Ot=ft[St];let Rt=null;if(f!==null)Rt=f.getViewport(Ot);else{const Lt=h.getViewSubImage(u,Ot);Rt=Lt.viewport,St===0&&(t.setRenderTargetTextures(p,Lt.colorTexture,u.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(p))}let Ct=F[St];Ct===void 0&&(Ct=new en,Ct.layers.enable(St),Ct.viewport=new xe,F[St]=Ct),Ct.matrix.fromArray(Ot.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Ot.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),St===0&&(v.matrix.copy(Ct.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),vt===!0&&v.cameras.push(Ct)}}for(let ft=0;ft<y.length;ft++){const vt=x[ft],St=y[ft];vt!==null&&St!==void 0&&St.update(vt,et,c||r)}J&&J(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ht=new Vh;ht.setAnimationLoop(ct),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}}function Vg(o,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zh(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=o._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xg(o,t,e,n){let i={},s={},r=[];const a=e.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const b=x.program;n.uniformBlockBinding(y,b)}function c(y,x){let b=i[y.id];b===void 0&&(g(y),b=d(y),i[y.id]=b,y.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(y,R);const A=t.render.frame;s[y.id]!==A&&(u(y),s[y.id]=A)}function d(y){const x=h();y.__bindingPointIndex=x;const b=o.createBuffer(),R=y.__size,A=y.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,R,A),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,x,b),b}function h(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=i[y.id],b=y.uniforms,R=y.__cache;o.bindBuffer(o.UNIFORM_BUFFER,x);for(let A=0,T=b.length;A<T;A++){const F=Array.isArray(b[A])?b[A]:[b[A]];for(let v=0,w=F.length;v<w;v++){const U=F[v];if(f(U,A,v,R)===!0){const D=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let L=0;for(let k=0;k<q.length;k++){const W=q[k],K=_(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,o.bufferSubData(o.UNIFORM_BUFFER,D+L,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,D,U.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(y,x,b,R){const A=y.value,T=x+"_"+b;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const F=R[T];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return R[T]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(y){const x=y.uniforms;let b=0;const R=16;for(let T=0,F=x.length;T<F;T++){const v=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,U=v.length;w<U;w++){const D=v[w],q=Array.isArray(D.value)?D.value:[D.value];for(let L=0,k=q.length;L<k;L++){const W=q[L],K=_(W),Y=b%R;Y!==0&&R-Y<K.boundary&&(b+=R-Y),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=K.storage}}}const A=b%R;return A>0&&(b+=R-A),y.__size=b,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const b=r.indexOf(x.__bindingPointIndex);r.splice(b,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const y in i)o.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Zh{constructor(t={}){const{canvas:e=Bd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=r;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ee,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;const x=this;let b=!1,R=0,A=0,T=null,F=-1,v=null;const w=new xe,U=new xe;let D=null;const q=new Tt(0);let L=0,k=e.width,W=e.height,K=1,Y=null,$=null;const J=new xe(0,0,k,W),ct=new xe(0,0,k,W);let ht=!1;const X=new Ja;let et=!1,ft=!1,vt=null;const St=new ne,Ot=new Yt,Rt=new C,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return T===null?K:1}let G=n;function Se(E,N){for(let H=0;H<E.length;H++){const V=E[H],B=e.getContext(V,N);if(B!==null)return B}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",at,!1),G===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),G=Se(N,E),G===null)throw Se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Et,Ht,_t,fe,Kt,M,S,O,P,j,Z,Mt,nt,gt,It,Pt,tt,Bt,zt,Dt,xt,yt,Gt,ie;function pe(){Et=new e0(G),Ht=new jm(G,Et,t),Et.init(Ht),yt=new Bg(G,Et,Ht),_t=new kg(G,Et,Ht),fe=new s0(G),Kt=new Tg,M=new Hg(G,Et,_t,Kt,Ht,yt,fe),S=new Zm(x),O=new t0(x),P=new df(G,Ht),Gt=new Ym(G,Et,P,Ht),j=new n0(G,P,fe,Gt),Z=new l0(G,j,P,fe),zt=new a0(G,Ht,M),Pt=new $m(Kt),Mt=new bg(x,S,O,Et,Ht,Gt,Pt),nt=new Vg(x,Kt),gt=new wg,It=new Ig(Et,Ht),Bt=new qm(x,S,O,_t,Z,u,l),tt=new Og(x,Z,Ht),ie=new Xg(G,fe,Ht,_t),Dt=new Km(G,Et,fe,Ht),xt=new i0(G,Et,fe,Ht),fe.programs=Mt.programs,x.capabilities=Ht,x.extensions=Et,x.properties=Kt,x.renderLists=gt,x.shadowMap=tt,x.state=_t,x.info=fe}pe();const kt=new Wg(x,G);this.xr=kt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=Et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(k,W,!1))},this.getSize=function(E){return E.set(k,W)},this.setSize=function(E,N,H=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,W=N,e.width=Math.floor(E*K),e.height=Math.floor(N*K),H===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(k*K,W*K).floor()},this.setDrawingBufferSize=function(E,N,H){k=E,W=N,K=H,e.width=Math.floor(E*H),e.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,N,H,V){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,N,H,V),_t.viewport(w.copy(J).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,N,H,V){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,N,H,V),_t.scissor(U.copy(ct).multiplyScalar(K).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(E){_t.setScissorTest(ht=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(E=!0,N=!0,H=!0){let V=0;if(E){let B=!1;if(T!==null){const pt=T.texture.format;B=pt===Rh||pt===Ah||pt===wh}if(B){const pt=T.texture.type,wt=pt===yi||pt===pi||pt===Ka||pt===Vi||pt===Th||pt===Eh,At=Bt.getClearColor(),Xt=Bt.getClearAlpha(),te=At.r,$t=At.g,Jt=At.b;wt?(f[0]=te,f[1]=$t,f[2]=Jt,f[3]=Xt,G.clearBufferuiv(G.COLOR,0,f)):(g[0]=te,g[1]=$t,g[2]=Jt,g[3]=Xt,G.clearBufferiv(G.COLOR,0,g))}else V|=G.COLOR_BUFFER_BIT}N&&(V|=G.DEPTH_BUFFER_BIT),H&&(V|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",at,!1),gt.dispose(),It.dispose(),Kt.dispose(),S.dispose(),O.dispose(),Z.dispose(),Gt.dispose(),ie.dispose(),Mt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",st),kt.removeEventListener("sessionend",rt),vt&&(vt.dispose(),vt=null),dt.stop()};function ot(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=fe.autoReset,N=tt.enabled,H=tt.autoUpdate,V=tt.needsUpdate,B=tt.type;pe(),fe.autoReset=E,tt.enabled=N,tt.autoUpdate=H,tt.needsUpdate=V,tt.type=B}function at(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function lt(E){const N=E.target;N.removeEventListener("dispose",lt),Ft(N)}function Ft(E){Ut(E),Kt.remove(E)}function Ut(E){const N=Kt.get(E).programs;N!==void 0&&(N.forEach(function(H){Mt.releaseProgram(H)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,V,B,pt){N===null&&(N=Ct);const wt=B.isMesh&&B.matrixWorld.determinant()<0,At=Vt(E,N,H,V,B);_t.setMaterial(V,wt);let Xt=H.index,te=1;if(V.wireframe===!0){if(Xt=j.getWireframeAttribute(H),Xt===void 0)return;te=2}const $t=H.drawRange,Jt=H.attributes.position;let De=$t.start*te,mn=($t.start+$t.count)*te;pt!==null&&(De=Math.max(De,pt.start*te),mn=Math.min(mn,(pt.start+pt.count)*te)),Xt!==null?(De=Math.max(De,0),mn=Math.min(mn,Xt.count)):Jt!=null&&(De=Math.max(De,0),mn=Math.min(mn,Jt.count));const Xe=mn-De;if(Xe<0||Xe===1/0)return;Gt.setup(B,V,At,H,Xt);let zn,Ae=Dt;if(Xt!==null&&(zn=P.get(Xt),Ae=xt,Ae.setIndex(zn)),B.isMesh)V.wireframe===!0?(_t.setLineWidth(V.wireframeLinewidth*Lt()),Ae.setMode(G.LINES)):Ae.setMode(G.TRIANGLES);else if(B.isLine){let se=V.linewidth;se===void 0&&(se=1),_t.setLineWidth(se*Lt()),B.isLineSegments?Ae.setMode(G.LINES):B.isLineLoop?Ae.setMode(G.LINE_LOOP):Ae.setMode(G.LINE_STRIP)}else B.isPoints?Ae.setMode(G.POINTS):B.isSprite&&Ae.setMode(G.TRIANGLES);if(B.isBatchedMesh)Ae.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Ae.renderInstances(De,Xe,B.count);else if(H.isInstancedBufferGeometry){const se=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Sr=Math.min(H.instanceCount,se);Ae.renderInstances(De,Xe,Sr)}else Ae.render(De,Xe)};function ce(E,N,H){E.transparent===!0&&E.side===Be&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,bt(E,N,H),E.side=In,E.needsUpdate=!0,bt(E,N,H),E.side=Be):bt(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),m=It.get(H),m.init(),y.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);const V=new Set;return E.traverse(function(B){const pt=B.material;if(pt)if(Array.isArray(pt))for(let wt=0;wt<pt.length;wt++){const At=pt[wt];ce(At,H,B),V.add(At)}else ce(pt,H,B),V.add(pt)}),y.pop(),m=null,V},this.compileAsync=function(E,N,H=null){const V=this.compile(E,N,H);return new Promise(B=>{function pt(){if(V.forEach(function(wt){Kt.get(wt).currentProgram.isReady()&&V.delete(wt)}),V.size===0){B(E);return}setTimeout(pt,10)}Et.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let z=null;function Q(E){z&&z(E)}function st(){dt.stop()}function rt(){dt.start()}const dt=new Vh;dt.setAnimationLoop(Q),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(E){z=E,kt.setAnimationLoop(E),E===null?dt.stop():dt.start()},kt.addEventListener("sessionstart",st),kt.addEventListener("sessionend",rt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(N),N=kt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,T),m=It.get(E,y.length),m.init(),y.push(m),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(St),ft=this.localClippingEnabled,et=Pt.init(this.clippingPlanes,ft),_=gt.get(E,p.length),_.init(),p.push(_),it(E,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Y,$),this.info.render.frame++,et===!0&&Pt.beginShadows();const H=m.state.shadowsArray;if(tt.render(H,E,N),et===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Bt.render(_,E),m.setupLights(x._useLegacyLights),N.isArrayCamera){const V=N.cameras;for(let B=0,pt=V.length;B<pt;B++){const wt=V[B];jt(_,E,wt,wt.viewport)}}else jt(_,E,N);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,N),Gt.resetDefaultState(),F=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function it(E,N,H,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){V&&Rt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(St);const wt=Z.update(E),At=E.material;At.visible&&_.push(E,wt,At,H,Rt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const wt=Z.update(E),At=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Rt.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Rt.copy(wt.boundingSphere.center)),Rt.applyMatrix4(E.matrixWorld).applyMatrix4(St)),Array.isArray(At)){const Xt=wt.groups;for(let te=0,$t=Xt.length;te<$t;te++){const Jt=Xt[te],De=At[Jt.materialIndex];De&&De.visible&&_.push(E,wt,De,H,Rt.z,Jt)}}else At.visible&&_.push(E,wt,At,H,Rt.z,null)}}const pt=E.children;for(let wt=0,At=pt.length;wt<At;wt++)it(pt[wt],N,H,V)}function jt(E,N,H,V){const B=E.opaque,pt=E.transmissive,wt=E.transparent;m.setupLightsView(H),et===!0&&Pt.setGlobalState(x.clippingPlanes,H),pt.length>0&&Wt(B,pt,N,H),V&&_t.viewport(w.copy(V)),B.length>0&&Ee(B,N,H),pt.length>0&&Ee(pt,N,H),wt.length>0&&Ee(wt,N,H),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Wt(E,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const pt=Ht.isWebGL2;vt===null&&(vt=new Yi(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?io:yi,minFilter:vi,samples:pt?4:0})),x.getDrawingBufferSize(Ot),pt?vt.setSize(Ot.x,Ot.y):vt.setSize(ur(Ot.x),ur(Ot.y));const wt=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(q),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const At=x.toneMapping;x.toneMapping=Jn,Ee(E,H,V),M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt);let Xt=!1;for(let te=0,$t=N.length;te<$t;te++){const Jt=N[te],De=Jt.object,mn=Jt.geometry,Xe=Jt.material,zn=Jt.group;if(Xe.side===Be&&De.layers.test(V.layers)){const Ae=Xe.side;Xe.side=ln,Xe.needsUpdate=!0,ye(De,H,V,mn,Xe,zn),Xe.side=Ae,Xe.needsUpdate=!0,Xt=!0}}Xt===!0&&(M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt)),x.setRenderTarget(wt),x.setClearColor(q,L),x.toneMapping=At}function Ee(E,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let B=0,pt=E.length;B<pt;B++){const wt=E[B],At=wt.object,Xt=wt.geometry,te=V===null?wt.material:V,$t=wt.group;At.layers.test(H.layers)&&ye(At,N,H,Xt,te,$t)}}function ye(E,N,H,V,B,pt){E.onBeforeRender(x,N,H,V,B,pt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,N,H,V,E,pt),B.transparent===!0&&B.side===Be&&B.forceSinglePass===!1?(B.side=ln,B.needsUpdate=!0,x.renderBufferDirect(H,N,V,B,E,pt),B.side=In,B.needsUpdate=!0,x.renderBufferDirect(H,N,V,B,E,pt),B.side=Be):x.renderBufferDirect(H,N,V,B,E,pt),E.onAfterRender(x,N,H,V,B,pt)}function bt(E,N,H){N.isScene!==!0&&(N=Ct);const V=Kt.get(E),B=m.state.lights,pt=m.state.shadowsArray,wt=B.state.version,At=Mt.getParameters(E,B.state,pt,N,H),Xt=Mt.getProgramCacheKey(At);let te=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||V.environment),te===void 0&&(E.addEventListener("dispose",lt),te=new Map,V.programs=te);let $t=te.get(Xt);if($t!==void 0){if(V.currentProgram===$t&&V.lightsStateVersion===wt)return re(E,At),$t}else At.uniforms=Mt.getUniforms(E),E.onBuild(H,At,x),E.onBeforeCompile(At,x),$t=Mt.acquireProgram(At,Xt),te.set(Xt,$t),V.uniforms=At.uniforms;const Jt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Jt.clippingPlanes=Pt.uniform),re(E,At),V.needsLights=Pe(E),V.lightsStateVersion=wt,V.needsLights&&(Jt.ambientLightColor.value=B.state.ambient,Jt.lightProbe.value=B.state.probe,Jt.directionalLights.value=B.state.directional,Jt.directionalLightShadows.value=B.state.directionalShadow,Jt.spotLights.value=B.state.spot,Jt.spotLightShadows.value=B.state.spotShadow,Jt.rectAreaLights.value=B.state.rectArea,Jt.ltc_1.value=B.state.rectAreaLTC1,Jt.ltc_2.value=B.state.rectAreaLTC2,Jt.pointLights.value=B.state.point,Jt.pointLightShadows.value=B.state.pointShadow,Jt.hemisphereLights.value=B.state.hemi,Jt.directionalShadowMap.value=B.state.directionalShadowMap,Jt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Jt.spotShadowMap.value=B.state.spotShadowMap,Jt.spotLightMatrix.value=B.state.spotLightMatrix,Jt.spotLightMap.value=B.state.spotLightMap,Jt.pointShadowMap.value=B.state.pointShadowMap,Jt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=$t,V.uniformsList=null,$t}function qt(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=ir.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function re(E,N){const H=Kt.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Vt(E,N,H,V,B){N.isScene!==!0&&(N=Ct),M.resetTextureUnits();const pt=N.fog,wt=V.isMeshStandardMaterial?N.environment:null,At=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ce,Xt=(V.isMeshStandardMaterial?O:S).get(V.envMap||wt),te=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$t=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Jt=!!H.morphAttributes.position,De=!!H.morphAttributes.normal,mn=!!H.morphAttributes.color;let Xe=Jn;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Xe=x.toneMapping);const zn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ae=zn!==void 0?zn.length:0,se=Kt.get(V),Sr=m.state.lights;if(et===!0&&(ft===!0||E!==v)){const xn=E===v&&V.id===F;Pt.setState(V,E,xn)}let Le=!1;V.version===se.__version?(se.needsLights&&se.lightsStateVersion!==Sr.state.version||se.outputColorSpace!==At||B.isBatchedMesh&&se.batching===!1||!B.isBatchedMesh&&se.batching===!0||B.isInstancedMesh&&se.instancing===!1||!B.isInstancedMesh&&se.instancing===!0||B.isSkinnedMesh&&se.skinning===!1||!B.isSkinnedMesh&&se.skinning===!0||B.isInstancedMesh&&se.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&se.instancingColor===!1&&B.instanceColor!==null||se.envMap!==Xt||V.fog===!0&&se.fog!==pt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Pt.numPlanes||se.numIntersection!==Pt.numIntersection)||se.vertexAlphas!==te||se.vertexTangents!==$t||se.morphTargets!==Jt||se.morphNormals!==De||se.morphColors!==mn||se.toneMapping!==Xe||Ht.isWebGL2===!0&&se.morphTargetsCount!==Ae)&&(Le=!0):(Le=!0,se.__version=V.version);let wi=se.currentProgram;Le===!0&&(wi=bt(V,N,B));let cl=!1,Bs=!1,br=!1;const Ze=wi.getUniforms(),Ai=se.uniforms;if(_t.useProgram(wi.program)&&(cl=!0,Bs=!0,br=!0),V.id!==F&&(F=V.id,Bs=!0),cl||v!==E){Ze.setValue(G,"projectionMatrix",E.projectionMatrix),Ze.setValue(G,"viewMatrix",E.matrixWorldInverse);const xn=Ze.map.cameraPosition;xn!==void 0&&xn.setValue(G,Rt.setFromMatrixPosition(E.matrixWorld)),Ht.logarithmicDepthBuffer&&Ze.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ze.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Bs=!0,br=!0)}if(B.isSkinnedMesh){Ze.setOptional(G,B,"bindMatrix"),Ze.setOptional(G,B,"bindMatrixInverse");const xn=B.skeleton;xn&&(Ht.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),Ze.setValue(G,"boneTexture",xn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ze.setOptional(G,B,"batchingTexture"),Ze.setValue(G,"batchingTexture",B._matricesTexture,M));const Tr=H.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0&&Ht.isWebGL2===!0)&&zt.update(B,H,wi),(Bs||se.receiveShadow!==B.receiveShadow)&&(se.receiveShadow=B.receiveShadow,Ze.setValue(G,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ai.envMap.value=Xt,Ai.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),Bs&&(Ze.setValue(G,"toneMappingExposure",x.toneMappingExposure),se.needsLights&&me(Ai,br),pt&&V.fog===!0&&nt.refreshFogUniforms(Ai,pt),nt.refreshMaterialUniforms(Ai,V,K,W,vt),ir.upload(G,qt(se),Ai,M)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ir.upload(G,qt(se),Ai,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ze.setValue(G,"center",B.center),Ze.setValue(G,"modelViewMatrix",B.modelViewMatrix),Ze.setValue(G,"normalMatrix",B.normalMatrix),Ze.setValue(G,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const xn=V.uniformsGroups;for(let Er=0,Mu=xn.length;Er<Mu;Er++)if(Ht.isWebGL2){const hl=xn[Er];ie.update(hl,wi),ie.bind(hl,wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wi}function me(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Pe(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,H){Kt.get(E.texture).__webglTexture=N,Kt.get(E.depthTexture).__webglTexture=H;const V=Kt.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const H=Kt.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,H=0){T=E,R=N,A=H;let V=!0,B=null,pt=!1,wt=!1;if(E){const Xt=Kt.get(E);Xt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(G.FRAMEBUFFER,null),V=!1):Xt.__webglFramebuffer===void 0?M.setupRenderTarget(E):Xt.__hasExternalTextures&&M.rebindTextures(E,Kt.get(E.texture).__webglTexture,Kt.get(E.depthTexture).__webglTexture);const te=E.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(wt=!0);const $t=Kt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($t[N])?B=$t[N][H]:B=$t[N],pt=!0):Ht.isWebGL2&&E.samples>0&&M.useMultisampledRTT(E)===!1?B=Kt.get(E).__webglMultisampledFramebuffer:Array.isArray($t)?B=$t[H]:B=$t,w.copy(E.viewport),U.copy(E.scissor),D=E.scissorTest}else w.copy(J).multiplyScalar(K).floor(),U.copy(ct).multiplyScalar(K).floor(),D=ht;if(_t.bindFramebuffer(G.FRAMEBUFFER,B)&&Ht.drawBuffers&&V&&_t.drawBuffers(E,B),_t.viewport(w),_t.scissor(U),_t.setScissorTest(D),pt){const Xt=Kt.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+N,Xt.__webglTexture,H)}else if(wt){const Xt=Kt.get(E.texture),te=N||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xt.__webglTexture,H||0,te)}F=-1},this.readRenderTargetPixels=function(E,N,H,V,B,pt,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Kt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){_t.bindFramebuffer(G.FRAMEBUFFER,At);try{const Xt=E.texture,te=Xt.format,$t=Xt.type;if(te!==un&&yt.convert(te)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Jt=$t===io&&(Et.has("EXT_color_buffer_half_float")||Ht.isWebGL2&&Et.has("EXT_color_buffer_float"));if($t!==yi&&yt.convert($t)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!($t===$n&&(Ht.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!Jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&H>=0&&H<=E.height-B&&G.readPixels(N,H,V,B,yt.convert(te),yt.convert($t),pt)}finally{const Xt=T!==null?Kt.get(T).__webglFramebuffer:null;_t.bindFramebuffer(G.FRAMEBUFFER,Xt)}}},this.copyFramebufferToTexture=function(E,N,H=0){const V=Math.pow(2,-H),B=Math.floor(N.image.width*V),pt=Math.floor(N.image.height*V);M.setTexture2D(N,0),G.copyTexSubImage2D(G.TEXTURE_2D,H,0,0,E.x,E.y,B,pt),_t.unbindTexture()},this.copyTextureToTexture=function(E,N,H,V=0){const B=N.image.width,pt=N.image.height,wt=yt.convert(H.format),At=yt.convert(H.type);M.setTexture2D(H,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,V,E.x,E.y,B,pt,wt,At,N.image.data):N.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,V,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,wt,N.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,V,E.x,E.y,wt,At,N.image),V===0&&H.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(E,N,H,V,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pt=E.max.x-E.min.x+1,wt=E.max.y-E.min.y+1,At=E.max.z-E.min.z+1,Xt=yt.convert(V.format),te=yt.convert(V.type);let $t;if(V.isData3DTexture)M.setTexture3D(V,0),$t=G.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)M.setTexture2DArray(V,0),$t=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);const Jt=G.getParameter(G.UNPACK_ROW_LENGTH),De=G.getParameter(G.UNPACK_IMAGE_HEIGHT),mn=G.getParameter(G.UNPACK_SKIP_PIXELS),Xe=G.getParameter(G.UNPACK_SKIP_ROWS),zn=G.getParameter(G.UNPACK_SKIP_IMAGES),Ae=H.isCompressedTexture?H.mipmaps[B]:H.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Ae.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ae.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,E.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,E.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,E.min.z),H.isDataTexture||H.isData3DTexture?G.texSubImage3D($t,B,N.x,N.y,N.z,pt,wt,At,Xt,te,Ae.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D($t,B,N.x,N.y,N.z,pt,wt,At,Xt,Ae.data)):G.texSubImage3D($t,B,N.x,N.y,N.z,pt,wt,At,Xt,te,Ae),G.pixelStorei(G.UNPACK_ROW_LENGTH,Jt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,De),G.pixelStorei(G.UNPACK_SKIP_PIXELS,mn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Xe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,zn),B===0&&V.generateMipmaps&&G.generateMipmap($t),_t.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,_t.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===$a?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===pr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ee?qi:Lh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===qi?ee:Ce}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class qg extends Zh{}qg.prototype.isWebGL1Renderer=!0;class Jh extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Qh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ua,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new C;class ro{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ro(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tu extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ds;const Xs=new C,fs=new C,ps=new C,ms=new Yt,qs=new Yt,eu=new ne,Uo=new C,Ys=new C,No=new C,Dc=new Yt,ea=new Yt,Uc=new Yt;class Yg extends Te{constructor(t=new tu){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qh(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new ro(n,3,0,!1)),ds.setAttribute("uv",new ro(n,2,3,!1))}this.geometry=ds,this.material=t,this.center=new Yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),eu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;Fo(Uo.set(-.5,-.5,0),ps,r,fs,i,s),Fo(Ys.set(.5,-.5,0),ps,r,fs,i,s),Fo(No.set(.5,.5,0),ps,r,fs,i,s),Dc.set(0,0),ea.set(1,0),Uc.set(1,1);let a=t.ray.intersectTriangle(Uo,Ys,No,!1,Xs);if(a===null&&(Fo(Ys.set(-.5,.5,0),ps,r,fs,i,s),ea.set(0,1),a=t.ray.intersectTriangle(Uo,No,Ys,!1,Xs),a===null))return;const l=t.ray.origin.distanceTo(Xs);l<t.near||l>t.far||e.push({distance:l,point:Xs.clone(),uv:Sn.getInterpolation(Xs,Uo,Ys,No,Dc,ea,Uc,new Yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fo(o,t,e,n,i,s){ms.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(qs.x=s*ms.x-i*ms.y,qs.y=i*ms.x+s*ms.y):qs.copy(ms),o.copy(t),o.x+=qs.x,o.y+=qs.y,o.applyMatrix4(eu)}const Nc=new C,Fc=new xe,Oc=new xe,Kg=new C,kc=new ne,Oo=new C,na=new kn,Hc=new ne,ia=new mr;class jg extends ut{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_l,this.bindMatrix=new ne,this.bindMatrixInverse=new ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Oo),this.boundingBox.expandByPoint(Oo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Oo),this.boundingSphere.expandByPoint(Oo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(i),t.ray.intersectsSphere(na)!==!1&&(Hc.copy(i).invert(),ia.copy(t.ray).applyMatrix4(Hc),!(this.boundingBox!==null&&ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ia)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new xe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===_l?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Fc.fromBufferAttribute(i.attributes.skinIndex,t),Oc.fromBufferAttribute(i.attributes.skinWeight,t),Nc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const r=Oc.getComponent(s);if(r!==0){const a=Fc.getComponent(s);kc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Kg.copy(Nc).applyMatrix4(kc),r)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class nu extends Te{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nl extends Ge{constructor(t=null,e=1,n=1,i,s,r,a,l,c=Ye,d=Ye,h,u){super(null,r,a,l,c,d,i,s,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bc=new ne,$g=new ne;class il{constructor(t=[],e=[]){this.uuid=Ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ne)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ne;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=t.length;s<r;s++){const a=t[s]?t[s].matrixWorld:$g;Bc.multiplyMatrices(a,e[s]),Bc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new il(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new nl(e,t,t,un,$n);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let r=e[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new nu),this.bones.push(r),this.boneInverses.push(new ne().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const r=e[i];t.bones.push(r.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class ka extends Ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gs=new ne,zc=new ne,ko=[],Gc=new wn,Zg=new ne,Ks=new ut,js=new kn;class Jg extends ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ka(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Zg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),Gc.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(Gc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),js.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),t.ray.intersectsSphere(js)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gs),zc.multiplyMatrices(n,gs),Ks.matrixWorld=zc,Ks.raycast(t,ko);for(let r=0,a=ko.length;r<a;r++){const l=ko[r];l.instanceId=s,l.object=this,e.push(l)}ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ka(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends En{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wc=new C,Vc=new C,Xc=new ne,sa=new mr,Ho=new kn;class xr extends Te{constructor(t=new Fe,e=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Wc.fromBufferAttribute(e,i-1),Vc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Wc.distanceTo(Vc);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(i),Ho.radius+=s,t.ray.intersectsSphere(Ho)===!1)return;Xc.copy(i).invert(),sa.copy(t.ray).applyMatrix4(Xc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,d=new C,h=new C,u=new C,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,r.start),y=Math.min(g.count,r.start+r.count);for(let x=p,b=y-1;x<b;x+=f){const R=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(m,R),d.fromBufferAttribute(m,A),sa.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(u);F<t.near||F>t.far||e.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),y=Math.min(m.count,r.start+r.count);for(let x=p,b=y-1;x<b;x+=f){if(c.fromBufferAttribute(m,x),d.fromBufferAttribute(m,x+1),sa.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(u);A<t.near||A>t.far||e.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const qc=new C,Yc=new C;class iu extends xr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)qc.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qc.distanceTo(Yc);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qg extends xr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ao extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kc=new ne,Ha=new mr,Bo=new kn,zo=new C;class dr extends Te{constructor(t=new Fe,e=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(i),Bo.radius+=s,t.ray.intersectsSphere(Bo)===!1)return;Kc.copy(i).invert(),Ha.copy(t.ray).applyMatrix4(Kc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);zo.fromBufferAttribute(h,m),jc(zo,m,l,i,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=u,_=f;g<_;g++)zo.fromBufferAttribute(h,g),jc(zo,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jc(o,t,e,n,i,s,r){const a=Ha.distanceSqToPoint(o);if(a<e){const l=new C;Ha.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}class ze extends Ge{constructor(t,e,n,i,s,r,a,l,c){super(t,e,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vr extends Fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],r=[],a=[],l=[],c=new C,d=new Yt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(r[u]/t+1)/2,d.y=(r[u+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ve extends Fe{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],h=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(f,2));function y(){const b=new C,R=new C;let A=0;const T=(e-t)/n;for(let F=0;F<=s;F++){const v=[],w=F/s,U=w*(e-t)+t;for(let D=0;D<=i;D++){const q=D/i,L=q*l+a,k=Math.sin(L),W=Math.cos(L);R.x=U*k,R.y=-w*n+m,R.z=U*W,h.push(R.x,R.y,R.z),b.set(k,T,W).normalize(),u.push(b.x,b.y,b.z),f.push(q,1-w),v.push(g++)}_.push(v)}for(let F=0;F<i;F++)for(let v=0;v<s;v++){const w=_[v][F],U=_[v+1][F],D=_[v+1][F+1],q=_[v][F+1];d.push(w,U,q),d.push(U,D,q),A+=6}c.addGroup(p,A,0),p+=A}function x(b){const R=g,A=new Yt,T=new C;let F=0;const v=b===!0?t:e,w=b===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,m*w,0),u.push(0,w,0),f.push(.5,.5),g++;const U=g;for(let D=0;D<=i;D++){const L=D/i*l+a,k=Math.cos(L),W=Math.sin(L);T.x=v*W,T.y=m*w,T.z=v*k,h.push(T.x,T.y,T.z),u.push(0,w,0),A.x=k*.5+.5,A.y=W*.5*w+.5,f.push(A.x,A.y),g++}for(let D=0;D<i;D++){const q=R+D,L=U+D;b===!0?d.push(L,L+1,q):d.push(L+1,L,q),F+=3}c.addGroup(p,F,b===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sl extends ve{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new sl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mi extends Fe{constructor(t=.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],d=[];let h=t;const u=(e-t)/i,f=new C,g=new Yt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*r;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,d.push(g.x,g.y)}h+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,x=y,b=y+n+1,R=y+n+2,A=y+1;a.push(x,b,A),a.push(b,R,A)}}this.setIndex(a),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class de extends Fe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const d=[],h=new C,u=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let b=0;p===0&&r===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){const A=R/e;h.x=-t*Math.cos(i+A*s)*Math.sin(r+x*a),h.y=t*Math.cos(r+x*a),h.z=t*Math.sin(i+A*s)*Math.sin(r+x*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),m.push(A+b,1-x),y.push(c++)}d.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const x=d[p][y+1],b=d[p][y],R=d[p+1][y],A=d[p+1][y+1];(p!==0||r>0)&&f.push(x,b,A),(p!==n-1||l<Math.PI)&&f.push(b,R,A)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jn extends Fe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],d=new C,h=new C,u=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;r.push(_,m,y),r.push(m,p,y)}this.setIndex(r),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _e extends En{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ti extends _e{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class t_ extends En{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Go(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function e_(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function n_(o){function t(i,s){return o[i]-o[s]}const e=o.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function $c(o,t,e){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[r++]=o[a+l]}return i}function su(o,t,e,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(t.push(s.time),e.push.apply(e,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(t.push(s.time),e.push(r)),s=o[i++];while(s!==void 0)}class lo{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}for(;n<r;){const a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class i_ extends lo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,r=t+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Vl:s=t,a=2*e-n;break;case Xl:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vl:r=t,l=2*n-e;break;case Xl:r=1,l=n+i[1]-i[0];break;default:r=t-1,l=e}const c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=r*d}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,y=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,b=f*m-f*_;for(let R=0;R!==a;++R)s[R]=p*r[d+R]+y*r[c+R]+x*r[l+R]+b*r[h+R];return s}}class s_ extends lo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(n-e)/(i-e),h=1-d;for(let u=0;u!==a;++u)s[u]=r[c+u]*h+r[l+u]*d;return s}}class o_ extends lo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Hn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Go(e,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Go(t.times,Array),values:Go(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new o_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new s_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new i_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case so:e=this.InterpolantFactoryMethodDiscrete;break;case Rs:e=this.InterpolantFactoryMethodLinear;break;case Lr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return Lr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(i!==void 0&&e_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lr,s=t.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,u=h-n,f=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[u+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];const h=a*n,u=r*n;for(let f=0;f!==n;++f)e[u+f]=e[h+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Rs;class Ns extends Hn{}Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=so;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class ou extends Hn{}ou.prototype.ValueTypeName="color";class Ls extends Hn{}Ls.prototype.ValueTypeName="number";class r_ extends lo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let d=c+a;c!==d;c+=4)hn.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Ki extends Hn{InterpolantFactoryMethodLinear(t){return new r_(this.times,this.values,this.getValueSize(),t)}}Ki.prototype.ValueTypeName="quaternion";Ki.prototype.DefaultInterpolation=Rs;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends Hn{}Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=so;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends Hn{}Is.prototype.ValueTypeName="vector";class a_{constructor(t,e=-1,n,i=fd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,a=n.length;r!==a;++r)e.push(c_(n[r]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,r=n.length;s!==r;++s)e.push(Hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=n_(l);l=$c(l,1,d),c=$c(c,1,d),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Ls(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,r)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],d=c.name.match(s);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,g,_){if(f.length!==0){const m=[],p=[];su(f,m,p,g),m.length!==0&&_.push(new h(u,m,p))}},i=[],s=t.name||"default",r=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==u[g].morphTargets.length;++y){const x=u[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Ls(".morphTargetInfluence["+_+"]",m,p))}l=f.length*r}else{const f=".bones["+e[h].name+"]";n(Is,f+".position",u,"pos",i),n(Ki,f+".quaternion",u,"rot",i),n(Is,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function l_(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ls;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return ou;case"quaternion":return Ki;case"bool":case"boolean":return Ns;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function c_(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=l_(o.type);if(o.times===void 0){const e=[],n=[];su(o.keys,e,n,"value"),o.times=e,o.values=n}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const mi={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class h_{constructor(t,e,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,s===!1&&i.onStart!==void 0&&i.onStart(d,r,a),s=!0},this.itemEnd=function(d){r++,i.onProgress!==void 0&&i.onProgress(d,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const u_=new h_;class Os{constructor(t){this.manager=t!==void 0?t:u_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class d_ extends Error{constructor(t,e){super(t),this.response=e}}class ru extends Os{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=mi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Yn[t]!==void 0){Yn[t].push({onLoad:e,onProgress:n,onError:i});return}Yn[t]=[],Yn[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Yn[t],h=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:b})=>{if(x)p.close();else{_+=b.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,T=d.length;A<T;A++){const F=d[A];F.onProgress&&F.onProgress(R)}p.enqueue(b),y()}})}}});return new Response(m)}else throw new d_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{mi.add(t,c);const d=Yn[t];delete Yn[t];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=Yn[t];if(d===void 0)throw this.manager.itemError(t),c;delete Yn[t];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class f_ extends Os{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=mi.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=oo("img");function l(){d(),mi.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){d(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class ks extends Os{constructor(t){super(t)}load(t,e,n,i){const s=new Ge,r=new f_(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class co extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class au extends co{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const oa=new ne,Zc=new C,Jc=new C;class ol{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zc),Jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jc),e.updateMatrixWorld(),oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class p_ extends ol{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Cs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class m_ extends co{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new p_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Qc=new ne,$s=new C,ra=new C;class g_ extends ol{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$s.setFromMatrixPosition(t.matrixWorld),n.position.copy($s),ra.copy(n.position),ra.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ra),n.updateMatrixWorld(),i.makeTranslation(-$s.x,-$s.y,-$s.z),Qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc)}}class Ba extends co{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new g_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class __ extends ol{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mr extends co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new __}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lu extends co{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class no{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class y_ extends Os{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=mi.get(t);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),mi.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});mi.add(t,l),s.manager.itemStart(t)}}class x_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=th();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function th(){return(typeof performance>"u"?Date:performance).now()}const rl="\\[\\]\\.:\\/",v_=new RegExp("["+rl+"]","g"),al="[^"+rl+"]",M_="[^"+rl.replace("\\.","")+"]",S_=/((?:WC+[\/:])*)/.source.replace("WC",al),b_=/(WCOD+)?/.source.replace("WCOD",M_),T_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),E_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),w_=new RegExp("^"+S_+b_+T_+E_+"$"),A_=["material","materials","bones","map"];class R_{constructor(t,e,n){const i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ue{constructor(t,e,n){this.path=e,this.parsedPath=n||ue.parseTrackName(e),this.node=ue.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ue.Composite(t,e,n):new ue(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(v_,"")}static parseTrackName(t){const e=w_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);A_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ue.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const r=t[i];if(r===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ue.Composite=R_;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class C_ extends iu{constructor(t=10,e=10,n=4473924,i=8947848){n=new Tt(n),i=new Tt(i);const s=e/2,r=t/e,a=t/2,l=[],c=[];for(let u=0,f=0,g=-a;u<=e;u++,g+=r){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=u===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const d=new Fe;d.setAttribute("position",new Me(l,3)),d.setAttribute("color",new Me(c,3));const h=new yr({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);class P_{domElement;three;constructor(){this.three=new Zh({antialias:!1,powerPreference:"high-performance"}),this.domElement=this.three.domElement,this.three.setPixelRatio(window.devicePixelRatio),this.three.setClearColor(16,1),this.three.toneMapping=Jn,this.three.outputColorSpace=ee}setSize(t,e){this.three.setSize(t,e,!1),this.domElement.style.width="100vw",this.domElement.style.height="100vh",this.domElement.style.position="fixed",this.domElement.style.top="0",this.domElement.style.left="0"}dispose(){this.three.dispose()}}class L_{group;skyMat;constructor(){this.group=new an;const t=new de(5e4,64,48);t.scale(-1,1,1),this.skyMat=new Dn({vertexShader:`
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

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        float star(vec2 uv, float density) {
          vec2 g = floor(uv * density);
          vec2 f = fract(uv * density) - 0.5;
          float h = hash(g);
          float dist = length(f - vec2(hash(g + 1.7), hash(g + 3.1)) * 0.8 + 0.1);
          float bright = h;
          float size = 0.05 + 0.08 * h;
          return smoothstep(size, 0.0, dist) * bright;
        }

        void main() {
          vec3 dir = normalize(vPos);
          float height = dir.y * 0.5 + 0.5;

          vec3 top = vec3(0.02, 0.03, 0.08);
          vec3 bottom = vec3(0.001, 0.001, 0.03);
          vec3 col = mix(bottom, top, smoothstep(0.0, 1.0, height));

          float neb1 = sin(dir.y * 12.0 + dir.x * 8.0) * 0.5 + 0.5;
          float neb2 = sin(dir.z * 10.0 - dir.x * 6.0) * 0.5 + 0.5;
          col += vec3(0.15, 0.02, 0.08) * neb1 * 0.12;
          col += vec3(0.01, 0.04, 0.12) * neb2 * 0.08;

          // Dense dim stars (background)
          float s1 = star(vUv, 200.0) * 0.6;
          col += vec3(s1);

          // Bright stars (foreground)
          float s2 = star(vUv, 60.0) * 1.5;
          float s3 = star(vUv + vec2(13.7, 7.3), 40.0) * 2.0;
          col += vec3(s2 + s3);

          gl_FragColor = vec4(col, 1.0);
        }
      `,uniforms:{},side:ln,depthWrite:!1}),this.group.add(new ut(t,this.skyMat))}update(t){}getMesh(){return this.group}}class I_{scene;camera;clock=new x_;frames=0;lastFpsUpdate=0;fps=0;stars;constructor(){this.scene=new Jh,this.scene.background=new Tt(0),this.stars=new L_,this.scene.add(this.stars.getMesh()),this.scene.add(new lu(2241365,.1)),this.scene.add(new au(3364215,1122867,.15)),this.camera=new en(45,window.innerWidth/window.innerHeight,1,5e7),this.camera.position.set(0,0,10),this.camera.lookAt(0,0,0)}update(t){const e=this.clock.getElapsedTime();this.frames++,e-this.lastFpsUpdate>=1&&(this.fps=this.frames/(e-this.lastFpsUpdate),this.frames=0,this.lastFpsUpdate=e),this.stars.getMesh().position.copy(this.camera.position),this.stars.update(t)}getFps(){return this.fps}}class D_{constructor(t,e,n){this.onPlay=t,this.onVab=e,this.onSettings=n,this.root=document.createElement("div"),this.root.style.cssText=`
      position:fixed;inset:0;z-index:500;
      background:radial-gradient(ellipse at 60% 40%, #0a0e18 0%, #04060a 70%);
      display:flex;
    `;for(let g=0;g<60;g++){const _=document.createElement("div");_.style.cssText=`position:absolute;width:${1+Math.random()}px;height:${1+Math.random()}px;background:rgba(180,200,220,${.1+Math.random()*.3});border-radius:50%;left:${10+Math.random()*80}%;top:${Math.random()*100}%;animation:drift${2+Math.random()*4}s ease-in-out infinite alternate`,this.root.appendChild(_)}const i=document.createElement("div");i.style.cssText="position:relative;z-index:1;width:50%;display:flex;align-items:center;padding-left:12%;";const s=document.createElement("div"),r=document.createElement("div");r.textContent="EL",r.style.cssText="font:100 96px/0.8 system-ui;color:rgba(200,210,225,0.08);letter-spacing:0.2em;";const a=document.createElement("div");a.textContent="LIP",a.style.cssText="font:100 96px/0.8 system-ui;color:rgba(200,210,225,0.06);letter-spacing:0.2em;margin-top:4px;";const l=document.createElement("div");l.textContent="SE",l.style.cssText="font:100 96px/0.8 system-ui;color:rgba(200,210,225,0.04);letter-spacing:0.2em;margin-top:4px;",s.appendChild(r),s.appendChild(a),s.appendChild(l),i.appendChild(s);const c=document.createElement("div");c.style.cssText="position:relative;z-index:1;width:50%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding-right:12%;";const d=document.createElement("div");d.textContent="SPACE FLIGHT SIMULATOR",d.style.cssText="font:400 9px/1 system-ui;color:rgba(200,210,225,0.15);letter-spacing:0.3em;margin-bottom:40px;",c.appendChild(d);const h=[{label:"FLIGHT",action:this.onPlay},{label:"ASSEMBLY",action:this.onVab},{label:"SETTINGS",action:this.onSettings}];for(const g of h){const _=document.createElement("div");_.style.cssText="display:flex;align-items:center;gap:20px;margin:3px 0;cursor:pointer;padding:10px 0;";const m=document.createElement("div");m.textContent=`0${h.indexOf(g)+1}`,m.style.cssText="font:400 10px/1 system-ui;color:rgba(200,210,225,0.1);width:20px;transition:all 0.4s;";const p=document.createElement("div");p.textContent=g.label,p.style.cssText="font:200 28px/1 system-ui;color:rgba(200,210,225,0.3);letter-spacing:0.15em;transition:all 0.4s;";const y=document.createElement("div");y.style.cssText="height:1px;width:0;background:rgba(200,210,225,0.15);transition:width 0.4s;flex:1;",_.appendChild(m),_.appendChild(p),_.appendChild(y),_.addEventListener("mouseenter",()=>{p.style.color="rgba(220,230,240,0.9)",p.style.letterSpacing="0.25em",m.style.color="rgba(200,210,225,0.5)",y.style.width="80px"}),_.addEventListener("mouseleave",()=>{p.style.color="rgba(200,210,225,0.3)",p.style.letterSpacing="0.15em",m.style.color="rgba(200,210,225,0.1)",y.style.width="0"}),_.addEventListener("click",g.action),c.appendChild(_)}const u=document.createElement("div");u.textContent="controls",u.style.cssText="margin-top:48px;font:400 8px/1 system-ui;color:rgba(200,210,225,0.08);letter-spacing:0.2em;cursor:pointer;transition:color 0.4s;",u.addEventListener("mouseenter",()=>u.style.color="rgba(200,210,225,0.3)"),u.addEventListener("mouseleave",()=>u.style.color="rgba(200,210,225,0.08)"),u.addEventListener("click",()=>this.showHelp()),c.appendChild(u),this.root.appendChild(i),this.root.appendChild(c);const f=document.createElement("style");f.textContent="@keyframes drift{0%{transform:translateY(0)}100%{transform:translateY(-8px)}}",this.root.appendChild(f)}root;helpOverlay=null;mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove(),this.helpOverlay?.remove()}showHelp(){if(this.helpOverlay){this.helpOverlay.remove(),this.helpOverlay=null;return}const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:rgba(4,6,10,0.97);",t.innerHTML=`<div style="max-width:400px;padding:48px;color:rgba(200,210,225,0.5);font:12px/2 system-ui;">
      <div style="font:200 28px/1 system-ui;color:rgba(200,210,225,0.7);margin-bottom:28px;">CONTROLS</div>
      <table style="width:100%;"><tr><td style="color:rgba(200,210,225,0.25);padding:2px 24px 2px 0;">W / S</td><td>Throttle</td></tr>
      <tr><td style="color:rgba(200,210,225,0.25);">↑↓←→</td><td>Pitch / Yaw</td></tr>
      <tr><td style="color:rgba(200,210,225,0.25);">Space</td><td>Stage</td></tr>
      <tr><td style="color:rgba(200,210,225,0.25);">M</td><td>Map</td></tr>
      <tr><td style="color:rgba(200,210,225,0.25);">T</td><td>SAS</td></tr>
      <tr><td style="color:rgba(200,210,225,0.25);">Q/E</td><td>Warp</td></tr></table>
      <div style="margin-top:32px;font:400 10px system-ui;color:rgba(200,210,225,0.15);cursor:pointer;" id="hc">close</div></div>`,t.querySelector("#hc").addEventListener("click",()=>{t.remove(),this.helpOverlay=null}),document.body.appendChild(t),this.helpOverlay=t}}const cu=[{id:"capsule_mk1",name:"MK-1 Capsule",kind:"capsule",size:"M",mass:1200,crewCapacity:1,hasParachute:!0,dragCoeff:.5},{id:"tank_s_lfo",name:"Fuel Tank S (LFO)",kind:"tank",size:"S",mass:200,fuelCapacity:5e3,fuelType:"LFO",dragCoeff:.4},{id:"tank_m_lfo",name:"Fuel Tank M (LFO)",kind:"tank",size:"M",mass:600,fuelCapacity:5e4,fuelType:"LFO",dragCoeff:.4},{id:"tank_l_lfo",name:"Fuel Tank L (LFO)",kind:"tank",size:"L",mass:1200,fuelCapacity:1e5,fuelType:"LFO",dragCoeff:.4},{id:"tank_xl_lfo",name:"Fuel Tank XL (LFO)",kind:"tank",size:"XL",mass:2500,fuelCapacity:25e4,fuelType:"LFO",dragCoeff:.4},{id:"engine_ant",name:'"Ant" Engine',kind:"engine",size:"S",mass:50,thrust:1800,isp:350,fuelType:"LFO"},{id:"engine_vector",name:'"Vector" Engine',kind:"engine",size:"M",mass:400,thrust:3e3,isp:340,fuelType:"LFO"},{id:"engine_mastodon",name:'"Mastodon" Engine',kind:"engine",size:"L",mass:1200,thrust:7500,isp:330,fuelType:"LFO"},{id:"engine_mammoth",name:'"Mammoth" Engine',kind:"engine",size:"XL",mass:3e3,thrust:18e3,isp:310,fuelType:"LFO"},{id:"parachute_mk16",name:"Mk-16 Parachute",kind:"parachute",size:"M",mass:30,dragCoeff:5},{id:"legs_landini",name:'"Landini" Landing Legs',kind:"legs",size:"S",mass:80,dragCoeff:.1},{id:"heatshield_s",name:"Heat Shield S (Ablative)",kind:"heatshield",size:"S",mass:50,heatCapacity:5e4,dragCoeff:1.2},{id:"heatshield_m",name:"Heat Shield M (Ablative)",kind:"heatshield",size:"M",mass:150,heatCapacity:15e4,dragCoeff:1.2},{id:"heatshield_l",name:"Heat Shield L (Ablative)",kind:"heatshield",size:"L",mass:400,heatCapacity:4e5,dragCoeff:1.2},{id:"decoupler_1",name:"TD-1 Decoupler",kind:"decoupler",size:"M",mass:100,dragCoeff:.3},{id:"agena_target",name:"Agena Target Vehicle",kind:"gltf",size:"M",mass:1500,dragCoeff:.3,gltfUrl:"/models/agena.glb",gltfScale:.0015},{id:"apollo_soyuz",name:"Apollo Soyuz",kind:"gltf",size:"L",mass:5e3,dragCoeff:.3,gltfUrl:"/models/apollo_soyuz.glb",gltfScale:.0015},{id:"saturn_v",name:"Saturn V",kind:"gltf",size:"XL",mass:3e4,fuelCapacity:5e5,thrust:6e4,isp:310,dragCoeff:.3,gltfUrl:"/models/saturn_v.glb",gltfScale:.003},{id:"ares_1",name:"Ares I",kind:"gltf",size:"XL",mass:2e4,dragCoeff:.3,gltfUrl:"/models/ares_1.glb",gltfScale:.0015},{id:"apollo_lunar_module",name:"Apollo Lunar Module",kind:"gltf",size:"L",mass:15e3,dragCoeff:.3,gltfUrl:"/models/apollo_lunar_module.glb",gltfScale:.002},{id:"atlas_6",name:"Atlas 6 (Friendship 7)",kind:"gltf",size:"L",mass:12e3,dragCoeff:.3,gltfUrl:"/models/atlas_6.glb",gltfScale:.0015},{id:"atlas_9",name:"Atlas 9 (Faith 7)",kind:"gltf",size:"L",mass:12e3,dragCoeff:.3,gltfUrl:"/models/atlas_9.glb",gltfScale:.0015},{id:"crawler",name:"Crawler Transporter",kind:"gltf",size:"XL",mass:27e3,dragCoeff:.3,gltfUrl:"/models/crawler.glb",gltfScale:.001}];function aa(o){return cu.find(t=>t.id===o)}function eh(o,t){if(t===pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===Da||t===Ph){let e=o.getIndex();if(e===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=e.count-2,i=[];if(t===Da)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class U_ extends Os{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new H_(e)}),this.register(function(e){return new K_(e)}),this.register(function(e){return new j_(e)}),this.register(function(e){return new $_(e)}),this.register(function(e){return new z_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new W_(e)}),this.register(function(e){return new V_(e)}),this.register(function(e){return new k_(e)}),this.register(function(e){return new X_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new Y_(e)}),this.register(function(e){return new q_(e)}),this.register(function(e){return new F_(e)}),this.register(function(e){return new Z_(e)}),this.register(function(e){return new J_(e)})}load(t,e,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=no.extractUrlBase(t);r=no.resolveURL(c,this.path)}else r=no.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new ru(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,r,function(d){e(d),s.manager.itemEnd(t)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===hu){try{r[ae.KHR_BINARY_GLTF]=new Q_(t)}catch(h){i&&i(h);return}s=JSON.parse(r[ae.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new dy(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const h=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(h){case ae.KHR_MATERIALS_UNLIT:r[h]=new O_;break;case ae.KHR_DRACO_MESH_COMPRESSION:r[h]=new ty(s,this.dracoLoader);break;case ae.KHR_TEXTURE_TRANSFORM:r[h]=new ey;break;case ae.KHR_MESH_QUANTIZATION:r[h]=new ny;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function N_(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const ae={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class F_{constructor(t){this.parser=t,this.name=ae.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const d=new Tt(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Ce);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mr(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ba(d),c.distance=h;break;case"spot":c=new m_(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class O_{constructor(){this.name=ae.KHR_MATERIALS_UNLIT}getMaterialType(){return we}extendParams(t,e,n){const i=[];t.color=new Tt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],Ce),t.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,ee))}return Promise.all(i)}}class k_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class H_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Yt(a,a)}return Promise.all(s)}}class B_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class z_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Tt(0,0,0),e.sheenRoughness=0,e.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Ce)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",r.sheenColorTexture,ee)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class G_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class W_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return e.attenuationColor=new Tt().setRGB(a[0],a[1],a[2],Ce),Promise.all(s)}}class V_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class X_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return e.specularColor=new Tt().setRGB(a[0],a[1],a[2],Ce),r.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",r.specularColorTexture,ee)),Promise.all(s)}}class q_{constructor(t){this.parser=t,this.name=ae.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(s)}}class Y_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class K_{constructor(t){this.parser=t,this.name=ae.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,r)}}class j_{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class $_{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Z_{constructor(t){this.name=ae.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(d*h);return r.decodeGltfBuffer(new Uint8Array(f),d,h,u,i.mode,i.filter),f})})}else return null}}class J_{constructor(t){this.name=ae.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,f=[];for(const g of h){const _=new ne,m=new C,p=new hn,y=new C(1,1,1),x=new Jg(g.geometry,g.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),x.setMatrixAt(b,_.compose(m,p,y));for(const b in l)if(b==="_COLOR_0"){const R=l[b];x.instanceColor=new ka(R.array,R.itemSize,R.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);Te.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const hu="glTF",Zs=12,nh={JSON:1313821514,BIN:5130562};class Q_{constructor(t){this.name=ae.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==hu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Zs,s=new DataView(t,Zs);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===nh.JSON){const c=new Uint8Array(t,Zs+r,a);this.content=n.decode(c)}else if(l===nh.BIN){const c=Zs+r;this.body=t.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ty{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ae.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,a={},l={},c={};for(const d in r){const h=za[d]||d.toLowerCase();a[h]=r[d]}for(const d in t.attributes){const h=za[d]||d.toLowerCase();if(r[d]!==void 0){const u=n.accessors[t.attributes[d]],f=bs[u.componentType];c[h]=f.name,l[h]=u.normalized===!0}}return e.getDependency("bufferView",s).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,Ce,u)})})}}class ey{constructor(){this.name=ae.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class ny{constructor(){this.name=ae.KHR_MESH_QUANTIZATION}}class uu extends lo{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let r=0;r!==i;r++)e[r]=n[s+r];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=i-e,h=(n-e)/d,u=h*h,f=u*h,g=t*c,_=g-c,m=-2*f+3*u,p=f-u,y=1-m,x=p-u+h;for(let b=0;b!==a;b++){const R=r[_+b+a],A=r[_+b+l]*d,T=r[g+b+a],F=r[g+b]*d;s[b]=y*R+x*A+m*T+p*F}return s}}const iy=new hn;class sy extends uu{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return iy.fromArray(s).normalize().toArray(s),s}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ih={9728:Ye,9729:Ue,9984:Ia,9985:Sh,9986:nr,9987:vi},sh={33071:Ne,33648:rr,10497:dn},la={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},za={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oy={CUBICSPLINE:void 0,LINEAR:Rs,STEP:so},ca={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ry(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new _e({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:In})),o.DefaultMaterial}function Ii(o,t,e){for(const n in e.extensions)o[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function fi(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ay(o,t,e){let n=!1,i=!1,s=!1;for(let c=0,d=t.length;c<d;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,d=t.length;c<d;c++){const h=t[c];if(n){const u=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):o.attributes.position;r.push(u)}if(i){const u=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(u)}if(s){const u=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(u)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],u=c[2];return n&&(o.morphAttributes.position=d),i&&(o.morphAttributes.normal=h),s&&(o.morphAttributes.color=u),o.morphTargetsRelative=!0,o})}function ly(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)o.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cy(o){let t;const e=o.extensions&&o.extensions[ae.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ha(e.attributes):t=o.indices+":"+ha(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)t+=":"+ha(o.targets[n]);return t}function ha(o){let t="";const e=Object.keys(o).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+o[e[n]]+";";return t}function Ga(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hy(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const uy=new ne;class dy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new N_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new ks(this.options.manager):this.textureLoader=new y_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ru(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Ii(s,a,i),fi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const r=e[i].joints;for(let a=0,l=r.length;a<l;a++)t[r[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const r=t[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,d]of r.children.entries())s(d,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,r){return n.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ae.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(no.resolveURL(e.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const r=la[i.type],a=bs[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new Ie(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=la[i.type],c=bs[i.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(u/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=e.cache.get(y);x||(_=new c(a,p*f,i.count*f/d),x=new Qh(_,f/d),e.cache.add(y,x)),m=new ro(x,l,u%f/d,g)}else a===null?_=new c(i.count*l):_=new c(a,u,i.count*l),m=new Ie(_,l,g);if(i.sparse!==void 0){const p=la.SCALAR,y=bs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,R=new y(r[1],x,i.sparse.count*p),A=new c(r[2],b,i.sparse.count*l);a!==null&&(m=new Ie(m.array.slice(),m.itemSize,m.normalized));for(let T=0,F=R.length;T<F;T++){const v=R[T];if(m.setX(v,A[T*l]),l>=2&&m.setY(v,A[T*l+1]),l>=3&&m.setZ(v,A[T*l+2]),l>=4&&m.setW(v,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,r=e.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,r=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(d){d.flipY=!1,d.name=r.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(s.samplers||{})[r.sampler]||{};return d.magFilter=ih[u.magFilter]||Ue,d.minFilter=ih[u.minFilter]||vi,d.wrapS=sh[u.wrapS]||dn,d.wrapT=sh[u.wrapT]||dn,i.associations.set(d,{textures:t}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const r=i.images[t],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:r.mimeType});return l=a.createObjectURL(u),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(u,f){let g=u;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Ge(_);m.needsUpdate=!0,u(m)}),e.load(no.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=r.mimeType||hy(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=d,d}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[ae.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ae.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[ae.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),t[e]=r,r})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ao,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new yr,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return _e}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let r;const a={},l=s.extensions||{},c=[];if(l[ae.KHR_MATERIALS_UNLIT]){const h=i[ae.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(a,s,e))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Tt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Ce),a.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",h.baseColorTexture,ee)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Be);const d=s.alphaMode||ca.OPAQUE;if(d===ca.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===ca.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==we&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Yt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&r!==we&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==we){const h=s.emissiveFactor;a.emissive=new Tt().setRGB(h[0],h[1],h[2],Ce)}return s.emissiveTexture!==void 0&&r!==we&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,ee)),Promise.all(c).then(function(){const h=new r(a);return s.name&&(h.name=s.name),fi(h,s),e.associations.set(h,{materials:t}),s.extensions&&Ii(i,h,s),h})}createUniqueName(t){const e=ue.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ae.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return oh(l,a,e)})}const r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],d=cy(c),h=i[d];if(h)r.push(h.promise);else{let u;c.extensions&&c.extensions[ae.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=oh(new Fe,c,e),i[d]={primitive:c,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const d=r[l].material===void 0?ry(this.cache):this.getDependency("material",r[l].material);a.push(d)}return a.push(e.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let f=0,g=d.length;f<g;f++){const _=d[f],m=r[f];let p;const y=c[f];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new jg(_,y):new ut(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=eh(p.geometry,Ph):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=eh(p.geometry,Da));else if(m.mode===Mn.LINES)p=new iu(_,y);else if(m.mode===Mn.LINE_STRIP)p=new xr(_,y);else if(m.mode===Mn.LINE_LOOP)p=new Qg(_,y);else if(m.mode===Mn.POINTS)p=new dr(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ly(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),fi(p,s),m.extensions&&Ii(i,p,m),e.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&Ii(i,h[0],s),h[0];const u=new an;s.extensions&&Ii(i,u,s),e.associations.set(u,{meshes:t});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new en(Hd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new tl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),fi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let c=0,d=r.length;c<d;c++){const h=r[c];if(h){a.push(h);const u=new ne;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new il(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,r=[],a=[],l=[],c=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),d.push(_))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,x=u.length;y<x;y++){const b=u[y],R=f[y],A=g[y],T=_[y],F=m[y];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const v=n._createAnimationTracks(b,R,A,T,F);if(v)for(let w=0;w<v.length;w++)p.push(v[w])}return new a_(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),r=[],a=i.children||[];for(let c=0,d=a.length;c<d;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,uy)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let d;if(s.isBone===!0?d=new nu:c.length>1?d=new an:c.length===1?d=c[0]:d=new Te,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(s.name&&(d.userData.name=s.name,d.name=r),fi(d,s),s.extensions&&Ii(n,d,s),s.matrix!==void 0){const h=new ne;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=t,d}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new an;n.name&&(s.name=i.createUniqueName(n.name)),fi(s,n),n.extensions&&Ii(e,s,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let d=0,h=l.length;d<h;d++)s.add(l[d]);const c=d=>{const h=new Map;for(const[u,f]of i.associations)(u instanceof En||u instanceof Ge)&&h.set(u,f);return d.traverse(u=>{const f=i.associations.get(u);f!=null&&h.set(u,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const r=[],a=t.name?t.name:t.uuid,l=[];ri[s.path]===ri.weights?t.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(ri[s.path]){case ri.weights:c=Ls;break;case ri.rotation:c=Ki;break;case ri.position:case ri.scale:c=Is;break;default:switch(n.itemSize){case 1:c=Ls;break;case 2:case 3:default:c=Is;break}break}const d=i.interpolation!==void 0?oy[i.interpolation]:Rs,h=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const g=new c(l[u]+"."+ri[s.path],e.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Ga(e.constructor),i=new Float32Array(e.length);for(let s=0,r=e.length;s<r;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Ki?sy:uu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function fy(o,t,e){const n=t.attributes,i=new wn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const d=Ga(bs[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new C,l=new C;for(let c=0,d=s.length;c<d;c++){const h=s[c];if(h.POSITION!==void 0){const u=e.json.accessors[h.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=Ga(bs[u.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new kn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function oh(o,t,e){const n=t.attributes,i=[];function s(r,a){return e.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=za[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(t.indices!==void 0&&!o.index){const r=e.getDependency("accessor",t.indices).then(function(a){o.setIndex(a)});i.push(r)}return he.workingColorSpace!==Ce&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${he.workingColorSpace}" not supported.`),fi(o,t),fy(o,t,e),Promise.all(i).then(function(){return t.targets!==void 0?ay(o,t.targets,e):o})}const Ts=66743e-15,fn=1e-9,pn=23e4,ua=1/60,py=9.80665,my=892e22*12,le=.05,sr=60;function Hs(o){return("/ellipse/"+o.replace(/^\//,"")).replace(/\/\//g,"/")}class gy{show(t,e=2500){const n=document.createElement("div");n.className="toast",n.textContent=t,n.style.cssText=`
      position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
      z-index: 300;
    `,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),200)},e)}}const ke=new gy;function Zt(o,t){const e=document.createElement("canvas");e.width=o,e.height=t;const n=e.getContext("2d");return[e,n]}function _y(o,t){const e=o*2*Math.PI-Math.PI;return[t*Math.PI-Math.PI/2,e]}const yy=[{lat:.7,lon:-1.8,radiusLat:.5,radiusLon:.8,color:"#4a7c3f"},{lat:-.4,lon:-1.3,radiusLat:.6,radiusLon:.35,color:"#5a8c4a"},{lat:.85,lon:.4,radiusLat:.25,radiusLon:.3,color:"#6a9c5a"},{lat:.1,lon:.6,radiusLat:.55,radiusLon:.4,color:"#8a7c3f"},{lat:.7,lon:1.6,radiusLat:.55,radiusLon:1,color:"#6a8c4a"},{lat:-.6,lon:2.4,radiusLat:.25,radiusLon:.3,color:"#9a8c5a"},{lat:1.1,lon:-.9,radiusLat:.2,radiusLon:.2,color:"#8aac7a"}];function xy(o,t=2){const e=o.width,n=o.height,r=o.getContext("2d").getImageData(0,0,e,n).data,[a,l]=Zt(e,n),c=l.createImageData(e,n),d=c.data,h=(f,g)=>(Math.max(0,Math.min(n-1,g))*e+Math.max(0,Math.min(e-1,f)))*4;for(let f=0;f<n;f++)for(let g=0;g<e;g++){const _=r[h(g-1,f-1)]/255,m=r[h(g,f-1)]/255,p=r[h(g+1,f-1)]/255,y=r[h(g-1,f)]/255,x=r[h(g+1,f)]/255,b=r[h(g-1,f+1)]/255,R=r[h(g,f+1)]/255,A=r[h(g+1,f+1)]/255,T=p+2*x+A-(_+2*y+b),F=b+2*R+A-(_+2*m+p),v=T*t,w=F*t,U=Math.sqrt(v*v+w*w+1),D=(f*e+g)*4;d[D]=Math.round((v/U*.5+.5)*255),d[D+1]=Math.round((w/U*.5+.5)*255),d[D+2]=Math.round(1/U*255),d[D+3]=255}l.putImageData(c,0,0);const u=new ze(a);return u.wrapS=u.wrapT=dn,u.anisotropy=4,u}function Ti(o,t,e,n,i){const s=new ze(o);s.wrapS=s.wrapT=dn,s.colorSpace=ee,s.anisotropy=4;let r;t&&(r=xy(t,2));let a;e&&(a=new ze(e),a.wrapS=a.wrapT=dn,a.anisotropy=4);let l;n&&(l=new ze(n),l.wrapS=l.wrapT=dn,l.anisotropy=4);let c;return i&&(c=new ze(i),c.wrapS=c.wrapT=dn,c.anisotropy=4),{color:s,normal:r,roughness:a,metalness:l,ao:c}}function An(o){let t=o|0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function Ei(o,t,e,n=.02){const i=o.getImageData(0,0,t,e),s=i.data;for(let r=0;r<s.length;r+=4){const a=(Math.random()-.5)*2*n*255;s[r]=Math.min(255,Math.max(0,s[r]+a)),s[r+1]=Math.min(255,Math.max(0,s[r+1]+a)),s[r+2]=Math.min(255,Math.max(0,s[r+2]+a))}o.putImageData(i,0,0)}function vy(){const[e,n]=Zt(1024,512),i=n.createImageData(1024,512),s=i.data,r=new Float32Array(1024*512);for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const d=c/1024,h=l/512,[u,f]=_y(d,h);let g=0;for(const _ of yy){const m=(u-_.lat)/_.radiusLat,p=(f-_.lon)/_.radiusLon;if(m*m+p*p<1){g=1;break}}(h<.07||h>.93)&&(g=.5),r[l*1024+c]=g}for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const d=(l*1024+c)*4,h=r[l*1024+c]??0,u=Math.random()*.15+.85,f=(h*.5+.1*u)*255,g=Math.min(255,Math.max(0,Math.round(f)));s[d]=g,s[d+1]=g,s[d+2]=g,s[d+3]=255}n.putImageData(i,0,0);const a=new ze(e);return a.wrapS=a.wrapT=dn,a}function My(o="M"){const[n,i]=Zt(2048,2048),[s,r]=Zt(2048,2048),[a,l]=Zt(2048,2048),[c,d]=Zt(2048,2048),[h,u]=Zt(2048,2048),f=An(o.charCodeAt(0)*1e3+42),g=o==="S",_=o==="L"||o==="XL";i.fillStyle="#f5f5f0",i.fillRect(0,0,2048,2048);const m=i.createLinearGradient(0,0,0,2048);m&&(m.addColorStop(0,"rgba(0,0,0,0.03)"),m.addColorStop(.3,"rgba(0,0,0,0)"),m.addColorStop(.7,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,0.04)"),i.fillStyle=m,i.fillRect(0,0,2048,2048));const y=2048/(g?4:_?12:8);for(let R=y;R<2048;R+=y)i.strokeStyle="rgba(0,0,0,0.08)",i.lineWidth=2,i.beginPath(),i.moveTo(0,R),i.lineTo(2048,R),i.stroke(),i.strokeStyle="rgba(255,255,255,0.15)",i.lineWidth=1.5,i.beginPath(),i.moveTo(0,R-1.5),i.lineTo(2048,R-1.5),i.stroke();const x=g?8:_?24:14;i.strokeStyle="rgba(80,80,90,0.04)",i.lineWidth=1.5;for(let R=1;R<x;R++){const A=R/x*2048;i.beginPath(),i.moveTo(A,0),i.lineTo(A,2048),i.stroke()}i.fillStyle="#c0c0ba";for(let R=y;R<2048;R+=y)for(let A=30;A<2018;A+=60)i.beginPath(),i.arc(A,R,4,0,Math.PI*2),i.fill(),i.strokeStyle="#a0a09a",i.lineWidth=.5,i.stroke();if(_){i.fillStyle="#002868",i.fillRect(163.84,307.2,245.76*.4,163.84);for(let v=0;v<7;v++)i.fillStyle=v%2===0?"#BF0A30":"#ffffff",i.fillRect(163.84+245.76*.4,307.2+v/7*163.84,245.76*.6,163.84/7);i.fillStyle="#ffffff";for(let v=0;v<5;v++)for(let w=0;w<3;w++)i.beginPath(),i.arc(163.84+(w+.5)*(245.76*.4/3),307.2+(v+.5)*(163.84/5),2,0,Math.PI*2),i.fill()}i.fillStyle="rgba(30,40,80,0.12)",i.font=`bold ${2048*.06}px monospace`,i.textAlign="center",i.fillText("USA",2048/2,2048*.25);const b=g?3:_?12:6;for(let R=0;R<b;R++){const A=f()*2048*.8+204.8,T=f()*2048*.7+2048*.15,F=60+f()*200,v=50+f()*140,w=180+f()*40,U=140+f()*30,D=80+f()*30;i.fillStyle=`rgb(${w}, ${U}, ${D})`,i.globalAlpha=.6+f()*.3,i.fillRect(A,T,F,v),i.fillStyle=`rgb(${w-20}, ${U-15}, ${D-10})`;for(let q=0;q<15;q++)i.beginPath(),i.arc(A+f()*F,T+f()*v,2+f()*6,0,Math.PI*2),i.fill();i.fillStyle="rgba(200, 220, 240, 0.15)";for(let q=0;q<5;q++)i.beginPath(),i.arc(A+f()*F,T+f()*v,5+f()*15,0,Math.PI*2),i.fill();i.globalAlpha=1}i.fillStyle="#606068",i.fillRect(0,0,2048,2048*.012),i.fillRect(0,2048*.988,2048,2048*.012),i.strokeStyle="rgba(80,80,90,0.3)",i.lineWidth=3,i.beginPath(),i.moveTo(2048*.5,0),i.lineTo(2048*.5,2048),i.stroke(),i.strokeStyle="rgba(60,50,40,0.03)",i.lineWidth=1;for(let R=0;R<30;R++){const A=f()*2048,T=f()*2048;i.beginPath(),i.moveTo(A,T),i.lineTo(A+(f()-.5)*20,T+f()*2048*.3),i.stroke()}r.fillStyle="#808080",r.fillRect(0,0,2048,2048),r.strokeStyle="#b0b0b0",r.lineWidth=8;for(let R=y;R<2048;R+=y)r.beginPath(),r.moveTo(0,R),r.lineTo(2048,R),r.stroke();r.strokeStyle="#909090",r.lineWidth=3;for(let R=1;R<x;R++){const A=R/x*2048;r.beginPath(),r.moveTo(A,0),r.lineTo(A,2048),r.stroke()}r.fillStyle="#c8c8c8";for(let R=y;R<2048;R+=y)for(let A=30;A<2018;A+=60)r.beginPath(),r.arc(A,R,5,0,Math.PI*2),r.fill();l.fillStyle="#909090",l.fillRect(0,0,2048,2048),l.strokeStyle="#c0c0c0",l.lineWidth=10;for(let R=y;R<2048;R+=y)l.beginPath(),l.moveTo(0,R),l.lineTo(2048,R),l.stroke();for(let R=0;R<b;R++){const A=f()*2048*.8+204.8,T=f()*2048*.7+2048*.15,F=60+f()*200,v=50+f()*140;l.fillStyle="#e0e0e0",l.fillRect(A,T,F,v)}l.fillStyle="#505050",l.fillRect(0,0,2048,2048*.012),l.fillRect(0,2048*.988,2048,2048*.012),d.fillStyle="#050505",d.fillRect(0,0,2048,2048),d.fillStyle="#c0c0c0",d.fillRect(0,0,2048,2048*.012),d.fillRect(0,2048*.988,2048,2048*.012),d.fillStyle="#606060",d.fillRect(2048*.49,0,2048*.02,2048),u.fillStyle="#ffffff",u.fillRect(0,0,2048,2048),u.strokeStyle="#808080",u.lineWidth=12;for(let R=y;R<2048;R+=y)u.beginPath(),u.moveTo(0,R),u.lineTo(2048,R),u.stroke();u.strokeStyle="#b0b0b0",u.lineWidth=6;for(let R=1;R<x;R++){const A=R/x*2048;u.beginPath(),u.moveTo(A,0),u.lineTo(A,2048),u.stroke()}return Ei(i,2048,2048,.01),Ti(n,s,a,c,h)}function Sy(){const[e,n]=Zt(2048,2048),[i,s]=Zt(2048,2048),[r,a]=Zt(2048,2048),[l,c]=Zt(2048,2048),[d,h]=Zt(2048,2048),u=An(12345);n.fillStyle="#fafaf5",n.fillRect(0,0,2048,2048*.78);const f=n.createLinearGradient(0,0,0,2048*.78);f&&(f.addColorStop(0,"rgba(20,20,25,0.05)"),f.addColorStop(.5,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(20,20,25,0.03)"),n.fillStyle=f,n.fillRect(0,0,2048,2048*.78)),n.strokeStyle="rgba(180,180,180,0.15)",n.lineWidth=2;for(let _=2048*.08;_<2048*.75;_+=2048*.07)n.beginPath(),n.moveTo(0,_),n.lineTo(2048,_),n.stroke();n.fillStyle="#2a2a2e",n.fillRect(0,2048*.78,2048,2048*.22),n.strokeStyle="rgba(40,40,45,0.5)",n.lineWidth=1;for(let _=0;_<2048;_+=32)n.beginPath(),n.moveTo(_,2048*.78),n.lineTo(_,2048),n.stroke();for(let _=2048*.78;_<2048;_+=32)n.beginPath(),n.moveTo(0,_),n.lineTo(2048,_),n.stroke();for(let _=0;_<2e3;_++){const m=u()*2048,p=2048*.78+u()*2048*.22,y=1+u()*3,x=25+u()*50,b=u()*15;n.fillStyle=`rgb(${x+b},${x},${x-b})`,n.beginPath(),n.arc(m,p,y,0,Math.PI*2),n.fill()}for(let _=0;_<60;_++){const m=u()*2048,p=2048*.78+u()*2048*.15,y=30+u()*150,x=(u()-.5)*50;n.strokeStyle=`rgba(20,15,10,${.2+u()*.3})`,n.lineWidth=1+u()*3,n.beginPath(),n.moveTo(m,p),n.lineTo(m+x,p+y),n.stroke(),n.strokeStyle=`rgba(60,40,20,${.05+u()*.1})`,n.lineWidth=3+u()*5,n.beginPath(),n.moveTo(m-x*.1,p+y*.2),n.lineTo(m+x,p+y),n.stroke()}n.fillStyle="#5a5a60",n.fillRect(0,2048*.77,2048,2048*.015),n.fillStyle="#8a8a90",n.fillRect(0,2048*.775,2048,2048*.005),n.fillStyle="#003366",n.fillRect(0,2048*.2,2048,2048*.035),n.fillStyle="#b31b1b",n.fillRect(0,2048*.245,2048,2048*.025),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(0,2048*.27,2048,2048*.003);const g=[[2048*.28,2048*.12],[2048*.55,2048*.14]];for(const[_,m]of g)n.fillStyle="#0a0a15",n.beginPath(),n.ellipse(_,m,2048*.04,2048*.03,0,0,Math.PI*2),n.fill(),n.strokeStyle="#9a9a9e",n.lineWidth=5,n.beginPath(),n.ellipse(_,m,2048*.045,2048*.035,0,0,Math.PI*2),n.stroke(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.beginPath(),n.ellipse(_,m,2048*.05,2048*.04,0,0,Math.PI*2),n.stroke();n.fillStyle="#3a3a3e";for(let _=0;_<4;_++){const m=_/4*Math.PI*2,p=2048*.5+Math.cos(m)*2048*.38,y=2048*.35+Math.sin(m)*2048*.05;n.beginPath(),n.arc(p,y,14,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.stroke()}n.fillStyle="#e0e0d8",n.fillRect(0,0,2048,2048*.04),n.strokeStyle="#a0a0a0",n.lineWidth=2,n.beginPath(),n.moveTo(0,2048*.04),n.lineTo(2048,2048*.04),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,2048,2048),s.strokeStyle="#a8a8a8",s.lineWidth=5;for(let _=2048*.08;_<2048*.75;_+=2048*.07)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#585858",s.lineWidth=3;for(let _=0;_<2048;_+=48)s.beginPath(),s.moveTo(_,2048*.78),s.lineTo(_,2048),s.stroke();for(let _=2048*.8;_<2048;_+=48)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#c0c0c0",s.lineWidth=8,s.beginPath(),s.moveTo(0,2048*.775),s.lineTo(2048,2048*.775),s.stroke();for(const[_,m]of g)s.strokeStyle="#d0d0d0",s.lineWidth=10,s.beginPath(),s.ellipse(_,m,2048*.05,2048*.04,0,0,Math.PI*2),s.stroke();a.fillStyle="#808080",a.fillRect(0,0,2048,2048*.78),a.fillStyle="#e0e0e0",a.fillRect(0,2048*.78,2048,2048*.22),a.fillStyle="#484848",a.fillRect(0,2048*.77,2048,2048*.015);for(const[_,m]of g)a.fillStyle="#181818",a.beginPath(),a.ellipse(_,m,2048*.045,2048*.035,0,0,Math.PI*2),a.fill();c.fillStyle="#080808",c.fillRect(0,0,2048,2048),c.fillStyle="#d0d0d0",c.fillRect(0,2048*.77,2048,2048*.015),c.fillRect(0,0,2048,2048*.04);for(const[_,m]of g)c.fillStyle="#b0b0b0",c.beginPath(),c.ellipse(_,m,2048*.05,2048*.04,0,0,Math.PI*2),c.fill();for(let _=0;_<4;_++){const m=_/4*Math.PI*2,p=2048*.5+Math.cos(m)*2048*.38,y=2048*.35+Math.sin(m)*2048*.05;c.beginPath(),c.arc(p,y,16,0,Math.PI*2),c.fill()}h.fillStyle="#ffffff",h.fillRect(0,0,2048,2048),h.strokeStyle="#808080",h.lineWidth=10;for(let _=2048*.08;_<2048*.75;_+=2048*.07)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#606060",h.lineWidth=6;for(let _=0;_<2048;_+=48)h.beginPath(),h.moveTo(_,2048*.78),h.lineTo(_,2048),h.stroke();for(let _=2048*.8;_<2048;_+=48)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#909090",h.lineWidth=12,h.beginPath(),h.moveTo(0,2048*.775),h.lineTo(2048,2048*.775),h.stroke();for(const[_,m]of g)h.strokeStyle="#707070",h.lineWidth=14,h.beginPath(),h.ellipse(_,m,2048*.05,2048*.04,0,0,Math.PI*2),h.stroke();return Ei(n,2048,2048,.018),Ti(e,i,r,l,d)}function by(){const[e,n]=Zt(1024,1024),[i,s]=Zt(1024,1024),[r,a]=Zt(1024,1024),[l,c]=Zt(1024,1024),[d,h]=Zt(1024,1024),u=An(54321);n.fillStyle="#1a1a20",n.fillRect(0,0,1024,1024*.3);for(let g=0;g<150;g++){const _=u()*1024,m=u()*1024*.3,p=5+u()*25;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(_,m),n.lineTo(_,m+p),n.stroke()}n.fillStyle="#4a4a50",n.fillRect(0,1024*.3,1024,1024*.05),n.fillStyle="#2a2a2e";for(let g=20;g<1024;g+=30)n.beginPath(),n.arc(g,1024*.325,4,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=.5,n.stroke();for(let g=1024*.35;g<1024*.92;g++){const _=(g-358.4)/583.68,m=Math.round(180+60*(1-_)),p=Math.round(100+30*(1-_)),y=Math.round(40+15*(1-_));n.fillStyle=`rgb(${m}, ${p}, ${y})`,n.fillRect(0,g,1024,1)}n.strokeStyle="rgba(100,60,25,0.3)",n.lineWidth=1;for(let g=6;g<1024;g+=12)n.beginPath(),n.moveTo(g,1024*.35),n.lineTo(g,1024*.92),n.stroke();const f=n.createLinearGradient(0,1024*.8,0,1024);f&&(f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(.4,"rgba(0,0,0,0.2)"),f.addColorStop(.8,"rgba(0,0,0,0.5)"),f.addColorStop(1,"rgba(0,0,0,0.7)"),n.fillStyle=f,n.fillRect(0,1024*.8,1024,1024*.2)),n.fillStyle="#6a6a70",n.fillRect(0,1024*.92,1024,1024*.03),n.fillStyle="#8a8a90",n.fillRect(0,1024*.95,1024,1024*.02),n.fillStyle="#2a2a30";for(let g=0;g<4;g++){const _=g/4*Math.PI*2+Math.PI/4,m=1024*.5+Math.cos(_)*1024*.38,p=1024*.15+Math.sin(_)*1024*.04;n.beginPath(),n.arc(m,p,1024*.04,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=1,n.stroke()}n.strokeStyle="#6a6a70",n.lineWidth=3,n.beginPath(),n.arc(1024/2,1024*.12,1024*.3,0,Math.PI*2),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let g=0;g<1024;g+=3)s.beginPath(),s.moveTo(g,0),s.lineTo(g,1024*.3),s.stroke();s.fillStyle="#c0c0c0";for(let g=20;g<1024;g+=30)s.beginPath(),s.arc(g,1024*.325,4,0,Math.PI*2),s.fill();s.strokeStyle="#606060",s.lineWidth=2;for(let g=6;g<1024;g+=12)s.beginPath(),s.moveTo(g,1024*.35),s.lineTo(g,1024*.92),s.stroke();s.strokeStyle="#a0a0a0",s.lineWidth=5,s.beginPath(),s.moveTo(0,1024*.3),s.lineTo(1024,1024*.3),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#404040",a.fillRect(0,0,1024,1024*.3),a.fillStyle="#606060",a.fillRect(0,1024*.3,1024,1024*.05),a.fillStyle="#707070",a.fillRect(0,1024*.35,1024,1024*.57),a.fillStyle="#c0c0c0",a.fillRect(0,1024*.8,1024,1024*.2),a.fillStyle="#303030",a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#e0e0e0",c.fillRect(0,0,1024,1024),c.fillStyle="#606060",c.fillRect(0,1024*.8,1024,1024*.2),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.3),h.lineTo(1024,1024*.3),h.stroke(),h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.strokeStyle="#808080",h.lineWidth=3;for(let g=6;g<1024;g+=12)h.beginPath(),h.moveTo(g,1024*.35),h.lineTo(g,1024*.92),h.stroke();return h.strokeStyle="#707070",h.lineWidth=8,h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),Ei(n,1024,1024,.01),Ti(e,i,r,l,d)}function Ty(){const[e,n]=Zt(1024,1024),[i,s]=Zt(1024,1024),[r,a]=Zt(1024,1024),[l,c]=Zt(1024,1024),[d,h]=Zt(1024,1024),u=An(11111);n.fillStyle="#3a3d30",n.fillRect(0,0,1024,1024);for(let f=0;f<100;f++){const g=u()*1024,_=u()*1024,m=10+u()*50;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(g,_),n.lineTo(g,_+m),n.stroke()}n.fillStyle="#8a8a8e";for(let f=50;f<1024;f+=200)n.fillRect(0,f,1024,15),n.fillStyle="#6a6a6e",n.fillRect(0,f+15,1024,2),n.fillStyle="#8a8a8e";n.fillStyle="#2a2d22",n.fillRect(0,1024*.85,1024,1024*.15),n.strokeStyle="#4a4d42",n.lineWidth=1;for(let f=0;f<1024;f+=32)n.beginPath(),n.moveTo(f,1024*.85),n.lineTo(f,1024),n.stroke();for(let f=1024*.85;f<1024;f+=32)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();n.fillStyle="#222";for(let f=0;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);n.fillStyle="#ffcc00";for(let f=20;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=2;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024*.85),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=6;for(let f=50;f<1024;f+=200)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();s.strokeStyle="#606060",s.lineWidth=3;for(let f=0;f<1024;f+=32)s.beginPath(),s.moveTo(f,1024*.85),s.lineTo(f,1024),s.stroke();for(let f=1024*.85;f<1024;f+=32)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#707070",a.fillRect(0,0,1024,1024*.85),a.fillStyle="#909090";for(let f=50;f<1024;f+=200)a.fillRect(0,f,1024,17);a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),c.fillStyle="#303030",c.fillRect(0,0,1024,1024),c.fillStyle="#e0e0e0";for(let f=50;f<1024;f+=200)c.fillRect(0,f,1024,17);c.fillStyle="#a0a0a0",c.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#808080",h.lineWidth=8;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024*.85),h.stroke();h.strokeStyle="#909090",h.lineWidth=10;for(let f=50;f<1024;f+=200)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Ei(n,1024,1024,.02),Ti(e,i,r,l,d)}function Ey(){const[e,n]=Zt(1024,1024),[i,s]=Zt(1024,1024),[r,a]=Zt(1024,1024),[l,c]=Zt(1024,1024),[d,h]=Zt(1024,1024),u=An(22222);n.fillStyle="#4a4a4e",n.fillRect(0,0,1024,1024);for(let f=0;f<150;f++){const g=u()*1024,_=u()*1024,m=5+u()*30;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(g,_),n.lineTo(g,_+m),n.stroke()}n.fillStyle="#7a7a7e",n.fillRect(0,1024*.35,1024,1024*.3),n.fillStyle="#3a3a3e";for(let f=24;f<1024;f+=48)n.beginPath(),n.arc(f,1024*.5,6,0,Math.PI*2),n.fill(),n.strokeStyle="#6a6a6e",n.lineWidth=1,n.stroke();n.fillStyle="#cc3300";for(let f=0;f<8;f++){const g=f/8*Math.PI*2,_=1024*.5+Math.cos(g)*1024*.35,m=1024*.5+Math.sin(g)*1024*.35;n.beginPath(),n.arc(_,m,8,0,Math.PI*2),n.fill()}n.fillStyle="#5a5a5e",n.fillRect(0,0,1024,1024*.08),n.fillRect(0,1024*.92,1024,1024*.08),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#b0b0b0",s.lineWidth=10,s.beginPath(),s.moveTo(0,1024*.35),s.lineTo(1024,1024*.35),s.stroke(),s.beginPath(),s.moveTo(0,1024*.65),s.lineTo(1024,1024*.65),s.stroke(),s.fillStyle="#c0c0c0";for(let f=24;f<1024;f+=48)s.beginPath(),s.arc(f,1024*.5,6,0,Math.PI*2),s.fill();return s.strokeStyle="#a0a0a0",s.lineWidth=8,s.beginPath(),s.moveTo(0,1024*.08),s.lineTo(1024,1024*.08),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#404040",a.fillRect(0,1024*.35,1024,1024*.3),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.08),a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#d0d0d0",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#707070",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.65),h.lineTo(1024,1024*.65),h.stroke(),h.strokeStyle="#808080",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.08),h.lineTo(1024,1024*.08),h.stroke(),h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),Ei(n,1024,1024,.015),Ti(e,i,r,l,d)}function wy(){const[e,n]=Zt(1024,1024),[i,s]=Zt(1024,1024),[r,a]=Zt(1024,1024),[l,c]=Zt(1024,1024),[d,h]=Zt(1024,1024),u=An(33333);n.fillStyle="#1a1a1c",n.fillRect(0,0,1024,1024);for(let f=0;f<3e3;f++){const g=u()*1024,_=u()*1024,m=1+u()*4,p=20+u()*50,y=u()*20-10;n.fillStyle=`rgb(${p+y},${p},${p-y})`,n.beginPath(),n.arc(g,_,m,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(40,20,10,0.3)",n.lineWidth=1+u()*2;for(let f=0;f<80;f++){const g=u()*1024,_=u()*1024*.3,m=50+u()*200;n.beginPath(),n.moveTo(g,_),n.lineTo(g+(u()-.5)*40,_+m),n.stroke()}n.strokeStyle="#0a0a0c",n.lineWidth=2;for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(f,0),n.lineTo(f,1024),n.stroke();for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024);for(let f=0;f<500;f++){const g=u()*1024,_=u()*1024,m=2+u()*5;s.fillStyle=`rgb(${128+u()*30},${128+u()*30},${128+u()*30})`,s.beginPath(),s.arc(g,_,m,0,Math.PI*2),s.fill()}s.strokeStyle="#404040",s.lineWidth=6;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024),s.stroke();for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#f0f0f0",a.fillRect(0,0,1024,1024),a.fillStyle="#ffffff",a.strokeStyle="#ffffff",a.lineWidth=8;for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f,1024),a.stroke();for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(0,f),a.lineTo(1024,f),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#303030",h.lineWidth=10;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024),h.stroke();for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Ei(n,1024,1024,.03),Ti(e,i,r,l,d)}function ho(){const[e,n]=Zt(1024,1024),[i,s]=Zt(1024,1024),[r,a]=Zt(1024,1024),[l,c]=Zt(1024,1024),[d,h]=Zt(1024,1024),u=An(44444),f=n.createLinearGradient(0,0,0,1024);f&&(f.addColorStop(0,"#b8862e"),f.addColorStop(.08,"#dba44a"),f.addColorStop(.15,"#e8b858"),f.addColorStop(.22,"#cf9a3e"),f.addColorStop(.3,"#b0802e"),f.addColorStop(.38,"#d8a84a"),f.addColorStop(.45,"#eac05e"),f.addColorStop(.52,"#c89838"),f.addColorStop(.6,"#b0802e"),f.addColorStop(.68,"#d8a84a"),f.addColorStop(.75,"#e8b858"),f.addColorStop(.85,"#c89838"),f.addColorStop(1,"#b8862e"),n.fillStyle=f,n.fillRect(0,0,1024,1024));for(let g=0;g<12;g++){const _=50+u()*924,m=50+u()*924,p=80+u()*300,y=80+u()*300;n.strokeStyle=`rgba(80,55,15,${.15+u()*.15})`,n.lineWidth=1+u()*2,n.strokeRect(_,m,p,y);const x=(u()-.5)*.06;n.fillStyle=`rgba(200,160,60,${x>0?x:0})`,n.fillRect(_+2,m+2,p-4,y-4)}n.strokeStyle="rgba(70,50,15,0.12)",n.lineWidth=3+u()*4;for(let g=0;g<60;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,y=40+u()*150;n.beginPath(),n.moveTo(_,m);const x=_+Math.cos(p+.3)*y*.5,b=m+Math.sin(p+.3)*y*.5;n.quadraticCurveTo(x,b,_+Math.cos(p)*y,m+Math.sin(p)*y),n.stroke()}n.strokeStyle="rgba(60,40,10,0.18)",n.lineWidth=1.5;for(let g=0;g<120;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,y=15+u()*60;n.beginPath(),n.moveTo(_,m),n.lineTo(_+Math.cos(p)*y,m+Math.sin(p)*y),n.stroke()}n.strokeStyle="rgba(255,230,160,0.15)",n.lineWidth=.5;for(let g=0;g<250;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,y=3+u()*25;n.beginPath(),n.moveTo(_,m),n.lineTo(_+Math.cos(p)*y,m+Math.sin(p)*y),n.stroke()}n.strokeStyle="rgba(30,20,5,0.1)",n.lineWidth=.5;for(let g=0;g<200;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,y=4+u()*30;n.beginPath(),n.moveTo(_+1,m+1),n.lineTo(_+Math.cos(p)*y+1,m+Math.sin(p)*y+1),n.stroke()}for(let g=0;g<120;g++){const _=u()*1024,m=u()*1024,p=2+u()*18,y=u();y<.33?n.fillStyle=`rgba(80,50,20,${.08+u()*.15})`:y<.66?n.fillStyle=`rgba(30,25,15,${.06+u()*.12})`:n.fillStyle=`rgba(60,80,40,${.04+u()*.08})`,n.beginPath(),n.arc(_,m,p,0,Math.PI*2),n.fill()}for(let g=0;g<50;g++){const _=u()*1024,m=u()*1024,p=1+u()*8,y=240+Math.floor(u()*15);n.fillStyle=`rgba(${y}, ${y-20}, ${y-80}, ${.15+u()*.2})`,n.beginPath(),n.arc(_,m,p,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,240,180,${.03+u()*.05})`,n.beginPath(),n.arc(_,m,p*3,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(160,120,40,0.12)",n.lineWidth=1;for(let g=0;g<1024;g+=15+u()*25){n.beginPath(),n.moveTo(0,g);for(let _=0;_<1024;_+=10)n.lineTo(_+u()*5,g+(u()-.5)*3);n.stroke()}s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#a0a0a0",s.lineWidth=2;for(let g=0;g<120;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,y=20+u()*100;s.beginPath(),s.moveTo(_,m);const x=_+Math.cos(p+.2)*y*.4,b=m+Math.sin(p+.2)*y*.4;s.quadraticCurveTo(x,b,_+Math.cos(p)*y,m+Math.sin(p)*y),s.stroke()}s.strokeStyle="#c0c0c0",s.lineWidth=1;for(let g=0;g<300;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,y=5+u()*40;s.beginPath(),s.moveTo(_,m),s.lineTo(_+Math.cos(p)*y,m+Math.sin(p)*y),s.stroke()}s.fillStyle="#606060";for(let g=0;g<100;g++){const _=u()*1024,m=u()*1024,p=2+u()*16;s.beginPath(),s.arc(_,m,p,0,Math.PI*2),s.fill()}a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#909090";for(let g=0;g<400;g++){const _=u()*1024,m=u()*1024,p=5+u()*50,y=3+u()*20;a.fillRect(_,m,p,y)}a.fillStyle="#c0c0c0";for(let g=0;g<100;g++){const _=u()*1024,m=u()*1024,p=2+u()*16;a.beginPath(),a.arc(_,m,p,0,Math.PI*2),a.fill()}c.fillStyle="#f0f0f0",c.fillRect(0,0,1024,1024),c.fillStyle="#303030";for(let g=0;g<100;g++){const _=u()*1024,m=u()*1024,p=2+u()*16;c.beginPath(),c.arc(_,m,p,0,Math.PI*2),c.fill()}c.strokeStyle="#808080",c.lineWidth=2;for(let g=0;g<12;g++){const _=50+u()*924,m=50+u()*924,p=80+u()*300,y=80+u()*300;c.strokeRect(_,m,p,y)}h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=3;for(let g=0;g<400;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,y=5+u()*50;h.beginPath(),h.moveTo(_,m),h.lineTo(_+Math.cos(p)*y,m+Math.sin(p)*y),h.stroke()}h.strokeStyle="#808080",h.lineWidth=2;for(let g=0;g<200;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,y=10+u()*80;h.beginPath(),h.moveTo(_,m);const x=_+Math.cos(p+.3)*y*.5,b=m+Math.sin(p+.3)*y*.5;h.quadraticCurveTo(x,b,_+Math.cos(p)*y,m+Math.sin(p)*y),h.stroke()}h.fillStyle="#888888";for(let g=0;g<100;g++){const _=u()*1024,m=u()*1024,p=3+u()*18;h.beginPath(),h.arc(_,m,p,0,Math.PI*2),h.fill()}return Ei(n,1024,1024,.02),Ti(e,i,r,l,d)}function du(){const[e,n]=Zt(1024,1024),[i,s]=Zt(1024,1024),[r,a]=Zt(1024,1024),[l,c]=Zt(1024,1024),[d,h]=Zt(1024,1024);n.fillStyle="#f5f5f0",n.fillRect(0,0,1024,1024),n.strokeStyle="rgba(200,200,190,0.15)",n.lineWidth=1;for(let u=0;u<1024;u+=4)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();n.strokeStyle="rgba(200,200,190,0.1)";for(let u=0;u<1024;u+=4)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.strokeStyle="rgba(160,160,150,0.3)",n.lineWidth=2;for(let u=0;u<1024;u+=32)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();for(let u=0;u<1024;u+=32)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.strokeStyle="rgba(120,120,110,0.4)",n.lineWidth=1,n.setLineDash([8,16]);for(let u=16;u<1024;u+=64)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();for(let u=16;u<1024;u+=64)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.setLineDash([]),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let u=0;u<1024;u+=8)s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke();for(let u=0;u<1024;u+=8)s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=4;for(let u=0;u<1024;u+=32)s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke();for(let u=0;u<1024;u+=32)s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke();a.fillStyle="#c0c0c0",a.fillRect(0,0,1024,1024),a.fillStyle="#e0e0e0",a.strokeStyle="#e0e0e0",a.lineWidth=6;for(let u=0;u<1024;u+=32)a.beginPath(),a.moveTo(u,0),a.lineTo(u,1024),a.stroke();for(let u=0;u<1024;u+=32)a.beginPath(),a.moveTo(0,u),a.lineTo(1024,u),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#a0a0a0",h.lineWidth=6;for(let u=0;u<1024;u+=32)h.beginPath(),h.moveTo(u,0),h.lineTo(u,1024),h.stroke();for(let u=0;u<1024;u+=32)h.beginPath(),h.moveTo(0,u),h.lineTo(1024,u),h.stroke();return Ei(n,1024,1024,.02),Ti(e,i,r,l,d)}function fu(o,t,e,n,i,s){const r=document.createElement("canvas");r.width=o,r.height=t;const a=r.getContext("2d"),l=An(s),c=a.createImageData(o,t);for(let h=0;h<t;h++){const u=h/t;let f=0,g=0,_=0,m=0;for(const p of e){const y=Math.abs(u-p.y)/p.width;if(y<1){const x=1-y*y,b=Ay(p.color);f+=b[0]*x,g+=b[1]*x,_+=b[2]*x,m+=x}}m>0&&(f/=m,g/=m,_/=m);for(let p=0;p<o;p++){const y=p/o,x=Math.sin(y*n+u*n*.5+s)*i+Math.sin(y*n*2.3+u*n*.7+s*2)*i*.5;let b=f,R=g,A=_;const T=x*30;b+=T,R+=T*.7,A+=T*.3;const F=(l()-.5)*8,v=(h*o+p)*4;c.data[v]=Qn(b+F),c.data[v+1]=Qn(R+F),c.data[v+2]=Qn(A+F),c.data[v+3]=255}}a.putImageData(c,0,0);const d=new ze(r);return d.wrapS=d.wrapT=Ne,d.colorSpace=ee,d}function Ay(o){const t=parseInt(o.slice(1,3),16),e=parseInt(o.slice(3,5),16),n=parseInt(o.slice(5,7),16);return[t,e,n]}function Qn(o){return Math.min(255,Math.max(0,Math.round(o)))}function Ry(){const n=fu(1024,512,[{y:0,width:.08,color:"#5a4a3a",turbulence:.3},{y:.05,width:.06,color:"#6a4c36",turbulence:.3},{y:.1,width:.04,color:"#8a6a48",turbulence:.4},{y:.18,width:.06,color:"#c4a46a",turbulence:.5},{y:.24,width:.04,color:"#d4b880",turbulence:.5},{y:.3,width:.05,color:"#8a6a3a",turbulence:.6},{y:.38,width:.04,color:"#e4d0a0",turbulence:.7},{y:.42,width:.03,color:"#f0e0b8",turbulence:.8},{y:.46,width:.03,color:"#e8d4a8",turbulence:.7},{y:.5,width:.03,color:"#dcc89c",turbulence:.7},{y:.54,width:.03,color:"#e4d0a0",turbulence:.8},{y:.58,width:.03,color:"#f0e0b8",turbulence:.7},{y:.62,width:.04,color:"#e4d0a0",turbulence:.6},{y:.7,width:.05,color:"#8a6a3a",turbulence:.6},{y:.76,width:.04,color:"#c4a46a",turbulence:.5},{y:.82,width:.06,color:"#d4b880",turbulence:.5},{y:.9,width:.04,color:"#7a5a3a",turbulence:.4},{y:.94,width:.06,color:"#6a4c36",turbulence:.3},{y:1,width:.08,color:"#5a4a3a",turbulence:.3}],40,.015,777),s=n.image.getContext("2d"),r=.33*1024,a=.56*512,l=40+An(888)()*10,c=s.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"#c04830"),c.addColorStop(.3,"#b04028"),c.addColorStop(.6,"#a05030"),c.addColorStop(.8,"#8a4830"),c.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=c,s.beginPath(),s.arc(r,a,l,0,Math.PI*2),s.fill();const d=.55*1024,h=.48*512,u=15+An(889)()*5,f=s.createRadialGradient(d,h,0,d,h,u);return f.addColorStop(0,"#d06040"),f.addColorStop(.5,"#b05038"),f.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=f,s.beginPath(),s.arc(d,h,u,0,Math.PI*2),s.fill(),n.needsUpdate=!0,n}function Cy(){return fu(1024,512,[{y:0,width:.08,color:"#a09070",turbulence:.2},{y:.06,width:.06,color:"#b8a888",turbulence:.2},{y:.12,width:.05,color:"#a89878",turbulence:.3},{y:.18,width:.06,color:"#c8b898",turbulence:.3},{y:.25,width:.05,color:"#b8a888",turbulence:.4},{y:.32,width:.05,color:"#d4c8a8",turbulence:.4},{y:.38,width:.04,color:"#c0b090",turbulence:.5},{y:.42,width:.03,color:"#e8dcc0",turbulence:.5},{y:.46,width:.03,color:"#d4c8a8",turbulence:.5},{y:.5,width:.03,color:"#f0e4d0",turbulence:.5},{y:.54,width:.03,color:"#d4c8a8",turbulence:.5},{y:.58,width:.04,color:"#e8dcc0",turbulence:.5},{y:.64,width:.05,color:"#c0b090",turbulence:.4},{y:.7,width:.05,color:"#b8a888",turbulence:.4},{y:.76,width:.06,color:"#a89878",turbulence:.3},{y:.85,width:.05,color:"#b8a888",turbulence:.2},{y:.92,width:.08,color:"#a09070",turbulence:.2}],30,.01,333)}function Py(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=An(222),s=n.createImageData(1024,512);for(let a=0;a<512;a++){const l=a/512,d=.6+(Math.sin(l*12)*.3+Math.sin(l*24)*.15+Math.sin(l*6)*.4)*.1;for(let h=0;h<1024;h++){const u=h/1024,f=Math.sin(u*8+l*4)*.03,g=(i()-.5)*.04,_=(.48+d*.12+f+g)*255,m=(.7+d*.18+f*.5+g)*255,p=(.75+d*.2+g)*255,y=(a*1024+h)*4;s.data[y]=Qn(_),s.data[y+1]=Qn(m),s.data[y+2]=Qn(p),s.data[y+3]=255}}n.putImageData(s,0,0);const r=new ze(e);return r.wrapS=r.wrapT=Ne,r.colorSpace=ee,r}function Ly(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=An(444),s=n.createImageData(1024,512);for(let _=0;_<512;_++){const m=_/512,y=.5+(Math.sin(m*14)*.5+Math.sin(m*28)*.2+Math.sin(m*7)*.3)*.08;for(let x=0;x<1024;x++){const b=x/1024,R=Math.sin(b*10+m*5)*.04,A=(i()-.5)*.03,T=(.18+y*.08+R+A)*255,F=(.25+y*.12+R*.7+A)*255,v=(.7+y*.2+A)*255,w=(_*1024+x)*4;s.data[w]=Qn(T),s.data[w+1]=Qn(F),s.data[w+2]=Qn(v),s.data[w+3]=255}}n.putImageData(s,0,0);const r=.3*1024,a=.65*512,l=30,c=n.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"#0a0a2a"),c.addColorStop(.3,"#101040"),c.addColorStop(.6,"#1a2050"),c.addColorStop(1,"rgba(30,40,80,0)"),n.fillStyle=c,n.beginPath(),n.arc(r,a,l,0,Math.PI*2),n.fill();const d=.3*1024+35,h=.65*512-15,u=15,f=n.createRadialGradient(d,h,0,d,h,u);f.addColorStop(0,"rgba(200,220,255,0.4)"),f.addColorStop(.5,"rgba(180,200,240,0.2)"),f.addColorStop(1,"rgba(180,200,240,0)"),n.fillStyle=f,n.beginPath(),n.arc(d,h,u,0,Math.PI*2),n.fill(),n.putImageData(s,0,0);const g=new ze(e);return g.wrapS=g.wrapT=Ne,g.colorSpace=ee,g}const rh={S:{radius:.5*le,height:.7*le},M:{radius:.7*le,height:1.1*le},L:{radius:1*le,height:1.6*le},XL:{radius:1.4*le,height:2.2*le}},rn=Math.PI,nn=64;let da=0;function fa(){return da=da*1664525+1013904223>>>0,(da>>>0)/4294967295}function Tn(o,t){const e=o.attributes.position;if(!e)return;const n=e.array;for(let i=0;i<n.length;i+=3){const s=(fa()-.5)*2,r=(fa()-.5)*2,a=(fa()-.5)*2;n[i]=n[i]+s*t,n[i+1]=n[i+1]+r*t,n[i+2]=n[i+2]+a*t}e.needsUpdate=!0,o.computeVertexNormals()}const pu=new U_,xi=new Map;async function Iy(o,t=1){const e=Hs(o);if(xi.has(o))return xi.get(o).clone();const n=[e];e!==o&&n.push(o),o.startsWith("/")&&n.push(o.slice(1));let i;for(const s of n)try{const a=(await pu.loadAsync(s)).scene;if(!a)continue;return a.traverse(l=>{if(l instanceof ut)if(l.castShadow=!0,l.receiveShadow=!0,l.material){const c=Array.isArray(l.material)?l.material:[l.material];for(const d of c)if(d instanceof _e){if(d.roughness=Math.max(.1,d.roughness??.5),d.metalness=Math.max(0,d.metalness??0),d.color){const p={h:0,s:0,l:0};d.color.getHSL(p),p.s<.3&&(p.s=Math.min(1,p.s*1.5+.05),p.l=Math.min(1,Math.max(.1,p.l*1.1)),d.color.setHSL(p.h,p.s,p.l))}const h=l.name.toLowerCase(),u=h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor")||h.includes("bell"),f=h.includes("metal")||h.includes("hull")||h.includes("body")||h.includes("frame")||h.includes("strut"),g=h.includes("glass")||h.includes("window")||h.includes("canopy")||h.includes("cockpit"),_=h.includes("heat")||h.includes("shield")||h.includes("tile"),m=h.includes("solar")||h.includes("panel")||h.includes("array");u?(d.roughness=Math.max(.05,d.roughness),d.metalness=Math.min(1,d.metalness+.3),d.emissive=new Tt(8930338),d.emissiveIntensity=.15):f?(d.roughness=Math.max(.1,d.roughness*.7),d.metalness=Math.min(1,d.metalness+.4)):g?(d.roughness=0,d.metalness=0,d.transparent=!0,d.opacity=.6,d.emissive=new Tt(4491519),d.emissiveIntensity=.08):_?(d.roughness=Math.min(1,d.roughness+.2),d.metalness=0):m&&(d.roughness=.8,d.metalness=0,d.emissive=new Tt(4491519),d.emissiveIntensity=.03),!u&&!g&&!m&&(h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor"))&&(d.emissive=new Tt(4465152),d.emissiveIntensity=.05),d.needsUpdate=!0}else if(d instanceof we||d instanceof t_){const h=new _e({color:d.color??16777215,map:d.map,normalMap:d.normalMap,roughnessMap:d.roughnessMap,metalnessMap:d.metalnessMap,aoMap:d.aoMap,roughness:.5,metalness:.1});l.material=h}}else l.material=new _e({color:13421772,roughness:.5,metalness:.1})}),a.scale.setScalar(t),xi.set(o,a),a.clone()}catch(r){i=r}return console.error("Failed to load GLTF after all attempts:",o,i),ke.show(`Failed to load model: ${o.split("/").pop()}`,3e3),null}const Wo=new Map;function yn(o,t){if(!Wo.has(o))try{const e=t(),n=[e.color,e.normal,e.roughness,e.metalness,e.ao,e.emissive].filter(Boolean);for(const i of n)i.minFilter=Ue,i.magFilter=Ue,i.generateMipmaps=!1,i.needsUpdate=!0;Wo.set(o,e)}catch{console.warn("Texture generation failed for:",o,"using solid fallback");const e={color:Dy(8421504),normal:void 0,roughness:void 0,metalness:void 0,ao:void 0,emissive:void 0};Wo.set(o,e)}return Wo.get(o)}function Dy(o){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.fillStyle="#"+o.toString(16).padStart(6,"0"),e.fillRect(0,0,64,64);const n=new ze(t);return n.colorSpace=ee,n}function Ke(o,t={}){const e={map:o.color,normalMap:o.normal,roughnessMap:o.roughness,metalnessMap:o.metalness,roughness:.5,metalness:.1,color:13426158,...t};return o.ao&&(e.aoMap=o.ao,e.aoMapIntensity=1),o.emissive&&(e.emissiveMap=o.emissive),new _e(e)}function Re(o,t=1){const e=o.attributes.position;if(!e)return;let n=o.attributes.uv;n||(n=new Ie(new Float32Array(e.count*2),2));let i=1/0,s=-1/0;for(let a=0;a<e.count;a++){const l=e.getY(a);l<i&&(i=l),l>s&&(s=l)}const r=s-i||1;for(let a=0;a<e.count;a++){const l=e.getX(a),c=e.getY(a),d=e.getZ(a),u=(Math.atan2(l,d)+Math.PI)/(2*Math.PI),f=(c-i)/r*t;n.setXY(a,u,f)}o.setAttribute("uv",n),n.needsUpdate=!0,o.attributes.uv2||o.setAttribute("uv2",n.clone())}function mu(o){const t=new an;t.name=o.id;const e=rh[o.size];switch(o.kind){case"capsule":Uy(t,e,o.id);break;case"tank":Ny(t,e,o.size);break;case"engine":Fy(t,e,o.size);break;case"parachute":Oy(t,e);break;case"legs":ky(t,e);break;case"decoupler":Hy(t,e);break;case"heatshield":By(t,e);break;case"gltf":{if(o.gltfUrl&&xi.has(o.gltfUrl)){const n=o.gltfScale??1,i=xi.get(o.gltfUrl).clone();i.scale.setScalar(n);const s=new wn().setFromObject(i),r=new C;s.getCenter(r),i.position.sub(r);const a=[],l=[];i.traverse(c=>{if(c instanceof ut){const d=c.name.toLowerCase();if(d.includes("engine")||d.includes("nozzle")||d.includes("thruster")||d.includes("motor")||d.includes("combustion")||c.position.y<-.1){const f=new wn().setFromObject(c),g=new C;f.getCenter(g);const _=g.clone().sub(i.position);a.push(_),l.push(c)}c.castShadow=!0,c.receiveShadow=!0}}),i.userData.nozzlePoints=a,i.userData.engineMeshes=l,t.add(i)}else{const n=rh[o.size],i=new _e({color:8956620,roughness:.4,metalness:.3}),s=new ve(n.radius,n.radius*.8,n.height*.8,16);Re(s);const r=new ut(s,i);r.position.y=-n.height*.1,t.add(r);const a=new sl(n.radius*.6,n.height*.2,16),l=new _e({color:13386820,roughness:.6,metalness:.1}),c=new ut(a,l);c.position.y=n.height*.4,t.add(c);const d=new _e({color:6710920,roughness:.8,metalness:0});for(let h=0;h<4;h++){const u=h/4*Math.PI*2,f=new bi(n.radius*.02,n.height*.15,n.radius*.3),g=new ut(f,d);g.position.set(Math.sin(u)*n.radius*1.05,-n.height*.35,Math.cos(u)*n.radius*1.05),g.rotation.y=-u,t.add(g)}}break}}return t}function Uy(o,t,e){const n=t.radius,i=t.height,s=e.includes("mk1"),r=yn(`capsule_${s?"mk1":"mk2"}`,Sy),a=Ke(r),l=yn("gold",ho),c=Ke(l),d=new ve(n,n,i*.6,nn);Re(d);const h=new ut(d,a);h.position.y=i*.05,o.add(h);const u=new de(n,nn,nn,0,rn*2,0,rn/2);Re(u,.5);const f=new ut(u,a);f.position.y=i*.35,o.add(f);const g=new ut(new de(n*.08,12,8),c);g.position.y=i*.35+n*.5,o.add(g);const _=s?14500932:30673,m=new _e({color:_,roughness:.6,metalness:.1}),p=new ve(n*1.04,n*1.04,i*.05,nn);Re(p),Tn(p,le*.008);const y=new ut(p,m);y.position.y=i*.05,o.add(y);const x=new ve(n*1.04,n*1.04,i*.03,nn);Re(x),Tn(x,le*.008);const b=new ut(x,m);b.position.y=-i*.15,o.add(b);const R=new ve(n*1.3,n*.95,i*.15,nn);Re(R),Tn(R,le*.01);const A=new ut(R,c);A.position.y=-i*.3-i*.075,o.add(A);const T=Ke(r,{color:1726856,roughness:.1,metalness:.8,transparent:!0,opacity:.3}),F=new ut(new vr(n*.2,16),T);F.position.set(n+.001,i*.18,0),F.rotation.y=-rn/2,o.add(F);const v=new we({color:3381759,transparent:!0,opacity:.6}),w=new ut(new Mi(n*.2,n*.24,16),v);w.position.set(n+.001,i*.18,0),w.rotation.y=-rn/2,o.add(w)}function Ny(o,t,e){const n=t.radius,i=t.height,s=yn(`tank_${e}`,()=>My(e)),r=Ke(s),a=yn("gold",ho),l=Ke(a),c=new ve(n,n,i,nn);Re(c);const d=new ut(c,r);o.add(d);const h=i*.03,u=new ve(n*1.03,n*1.03,h,nn);Re(u),Tn(u,le*.006);const f=new ut(u,l);f.position.y=i/2-h/2,o.add(f);const g=new ve(n*1.03,n*1.03,h,nn);Re(g),Tn(g,le*.006);const _=new ut(g,l);_.position.y=-i/2+h/2,o.add(_);for(let y=0;y<3;y++){const x=new jn(n*1.01,h*1.5,6,nn);Re(x),Tn(x,le*.005);const b=new ut(x,l);b.position.y=-i/2+i*.2*(y+1),b.rotation.x=rn/2,o.add(b)}const m=new jn(n*1.02,h*1.2,6,nn);Re(m),Tn(m,le*.005);const p=new ut(m,l);p.position.y=0,p.rotation.x=rn/2,o.add(p)}function Fy(o,t,e){const n=t.radius,i=t.height,s=48,r=yn(`engine_${e}`,by),a=Ke(r),l=new _e({color:2763322,roughness:.25,metalness:.9}),c=yn("gold",ho),d=Ke(c),h=new _e({color:657944,roughness:.95,metalness:.1}),u=new we({color:16729088,transparent:!0,opacity:.3,depthWrite:!1}),f=new ve(n*1.15,n*.75,i*.28,s),g=new ut(f,a);g.position.y=i*.2,o.add(g);const _=new ut(new jn(n*.75,n*.05,8,s),d);_.position.y=i*.33,_.rotation.x=Math.PI/2,o.add(_);const m=new ut(new jn(n*.7,n*.04,8,s),d);m.position.y=i*.12,m.rotation.x=Math.PI/2,o.add(m);const p=new ut(new jn(n*.52,n*.04,8,s),d);p.position.y=-i*.02,p.rotation.x=Math.PI/2,o.add(p);const y=new ve(n*.48,n*.9,i*.5,s),x=new ut(y,l);x.position.y=-i*.18,o.add(x);const b=new ve(n*.3,n*.68,i*.44,s),R=new ut(b,h);R.position.y=-i*.16,o.add(R);const A=new jn(n*.25,n*.06,8,s),T=new ut(A,u);T.position.y=-i*.14-i*.22,T.rotation.x=Math.PI/2,o.add(T);const F=new ut(new jn(n*.83,n*.045,12,s),d);F.position.y=-i*.18-i*.25,F.rotation.x=Math.PI/2,o.add(F)}function Oy(o,t){const e=t.radius,n=t.height,i=yn("fabric",du),s=yn("gold",ho),r=Ke(s),a=Ke(i,{color:8952234,roughness:.5,metalness:.1}),l=new ve(e*.35,e*.35,n*.18,12);Re(l);const c=new ut(l,a);c.position.y=n*.55,o.add(c);const d=Ke(i,{color:6978186,roughness:.4,metalness:.2}),h=new ve(e*.37,e*.37,n*.03,12);Re(h);const u=new ut(h,d);u.position.y=n*.55+n*.09,o.add(u);const f=new ve(e*.37,e*.37,n*.02,12);Re(f);const g=new ut(f,r);g.position.y=n*.55-n*.09,o.add(g)}function Wa(o){const t=new an,e=o.radius,n=o.height,i=24,s=yn("fabric",du),r=Ke(s,{side:Be,transparent:!0,opacity:.95}),a=new de(e*1.8,i,i,0,rn*2,0,rn*.5);Re(a,.5);const l=new ut(a,r);l.position.y=n*.3,l.rotation.x=rn,t.add(l);const c=Ke(s,{color:14500932,side:Be,transparent:!0,opacity:.9});for(let h=0;h<6;h++){const u=h/6*rn*2,f=new bi(e*.03,n*.7,e*.015),g=new ut(f,c);g.position.set(Math.cos(u)*e*.9,n*.4,Math.sin(u)*e*.9),g.rotation.x=rn,g.lookAt(0,n*.8,0),t.add(g)}const d=Ke(s,{color:6978186,roughness:.5,metalness:.4});for(let h=0;h<4;h++){const u=h/4*rn*2+rn/4;for(let f=0;f<3;f++){const g=new ve(.006,.006,n*.15,4);Re(g);const _=new ut(g,d),m=u+(f-1)*.3;_.position.set(Math.cos(m)*e*1.5,n*.15-n*.06*f,Math.sin(m)*e*1.5),t.add(_)}}return t}function ky(o,t){const e=t.radius,n=t.height,i=yn("legs",Ty),s=Ke(i),r=Ke(i,{color:2764066,roughness:.8,metalness:.2});for(let a=0;a<4;a++){const l=a/4*rn*2+rn/4,c=new ve(.01,.007,n*.35,6);Re(c);const d=new ut(c,s),h=Math.cos(l)*e*.65,u=Math.sin(l)*e*.65;d.position.set(h,-n/2-n*.175,u),d.rotation.z=Math.cos(l)*.3,d.rotation.x=Math.sin(l)*.3,o.add(d);const f=new ve(.02,.025,.008,6);Re(f);const g=new ut(f,r);g.position.set(Math.cos(l)*e*.95,-n/2-n*.35,Math.sin(l)*e*.95),o.add(g)}}function Hy(o,t){const e=t.radius,n=t.height,i=yn("decoupler",Ey),s=Ke(i),r=yn("gold",ho),a=Ke(r),l=new ve(e*1.05,e*.92,n*.12,nn);Re(l),Tn(l,le*.008);const c=new ut(l,s);o.add(c);const d=new ve(e*1.08,e*1.08,n*.04,nn);Re(d),Tn(d,le*.005);const h=new ut(d,a);h.position.y=n*.06,o.add(h);const u=new ve(e*.92,e*.92,n*.04,nn);Re(u),Tn(u,le*.008);const f=new ut(u,s);f.position.y=-n*.06,o.add(f)}function By(o,t){const e=t.radius,n=t.height,i=yn("heatshield",wy),s=Ke(i),r=new ve(e*1.2,e*.8,n*.2,nn,1,!0);Re(r,.5),Tn(r,le*.012);const a=new ut(r,s);a.position.y=-n*.1,o.add(a);const l=new ve(e*.8,e*.8,n*.08,nn);Re(l),Tn(l,le*.01);const c=new ut(l,s);c.position.y=-n*.2,o.add(c)}const gu=Object.freeze(Object.defineProperty({__proto__:null,buildDeployedParachute:Wa,buildPartMesh:mu,gltfCache:xi,gltfLoader:pu,loadGLTF:Iy},Symbol.toStringTag,{value:"Module"})),ah={S:{radius:.5*le},M:{radius:.7*le},L:{radius:1*le},XL:{radius:1.4*le}};class Va{roots=[];addRoot(t){this.roots.push(t)}totalFuelCapacity(){let t=0;const e=n=>{n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}totalMass(){let t=0;const e=n=>{t+=n.part.mass,n.children.forEach(e)};return this.roots.forEach(e),t}totalMassWithFuel(){let t=0;const e=n=>{t+=n.part.mass,n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}centerOfMass(){let t=0,e=0,n=0,i=0;const s=r=>{const a=r.part.mass;t+=a,e+=r.position[0]*a,n+=r.position[1]*a,i+=r.position[2]*a,r.children.forEach(s)};return this.roots.forEach(s),t===0?[0,0,0]:[e/t,n/t,i/t]}toMesh(){const t=new an,e=(r,a)=>{const l=mu(r.part);l.position.set(r.position[0],r.position[1],r.position[2]),l.rotation.y=r.rotation,a.add(l),r.children.forEach(c=>e(c,l))};this.roots.forEach(r=>e(r,t));const n=[...this.roots].sort((r,a)=>a.position[1]-r.position[1]);let i=0;for(let r=0;r<n.length-1;r++){const a=n[r],l=n[r+1],c=ah[a.part.size]?.radius??0,d=ah[l.part.size]?.radius??0;if(Math.abs(c-d)>.001&&!a.part.id.includes("decoupler")&&!l.part.id.includes("decoupler")){const h=(a.position[1]+l.position[1])/2,u=Math.abs(a.position[1]-l.position[1])*1.5,f=new ve(d,c,u,32),g=new _e({color:16777215,roughness:.3,metalness:.2,emissive:0,emissiveIntensity:0}),_=new ut(f,g);_.position.y=h,t.add(_),i++}}i>0&&console.log("Smooth adapters created:",i);const s=this.centerOfMass();for(const r of t.children)r.position.x-=s[0],r.position.y-=s[1],r.position.z-=s[2];return t}}const lh={S:.7,M:1.1,L:1.6,XL:2.2};class zy{constructor(t,e){this.ol=t,this.ob=e,this.scene.background=new Tt(527382),this.scene.add(new lu(4478310,.5));const n=new Mr(16777215,2.5);n.position.set(2,5,4),this.scene.add(n),this.scene.add(new au(8952251,3359829,.5));const i=new C_(10,20,1714746,857376);i.position.y=-.3,this.scene.add(i);const s=new ut(new bi(le*4,.001,le*4),new _e({color:1054760,roughness:.9}));s.position.y=-le*.3,this.scene.add(s),this.scene.add(this.rg),this.cam();const r=a=>{a.button===0&&(this.dr=!0,this.pr={x:a.clientX,y:a.clientY})};document.addEventListener("mousedown",r),document.addEventListener("mousemove",a=>{this.dr&&(this.az-=(a.clientX-this.pr.x)*.005,this.po=Math.max(.05,Math.min(Math.PI-.05,this.po+(a.clientY-this.pr.y)*.005)),this.pr={x:a.clientX,y:a.clientY},this.cam())}),document.addEventListener("mouseup",()=>this.dr=!1),document.addEventListener("wheel",a=>{this.dt*=a.deltaY>0?1.1:.9,this.dt=Math.max(.5,Math.min(50,this.dt)),this.cam()},{passive:!0}),this.root=document.createElement("div"),this.root.style.cssText="position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;",this.root.innerHTML=`
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
          <button id="vb" style="width:100%;padding:8px;background:transparent;color:rgba(255,255,255,0.1);border:none;font:400 10px system-ui;cursor:pointer;">BACK</button>
        </div>
      </div>
      <div style="flex:1;"></div>`,this.info=this.root.querySelector("#vi"),this.build(),this.root.querySelector("#vg").addEventListener("click",()=>{this.assembly.roots.length&&this.ol(this.assembly)}),this.root.querySelector("#vu").addEventListener("click",()=>this.undo()),this.root.querySelector("#vc").addEventListener("click",()=>{this.assembly=new Va,this.st=0,this.nm=[],this.rf(),this.up()}),this.root.querySelector("#vb").addEventListener("click",()=>this.ob())}scene=new Jh;camera=new en(50,innerWidth/innerHeight,.01,1e3);assembly=new Va;rg=new an;root;info;st=0;nm=[];az=0;po=Math.PI/2;dt=5;dr=!1;pr={x:0,y:0};tg=new C(0,le,0);build(){const t=this.root.querySelector("#vl"),e=new Map,n={capsule:"#a0b0c0",tank:"#6090c0",engine:"#c08060",decoupler:"#c06070",parachute:"#60a070",legs:"#8090a0",heatshield:"#b08060",gltf:"#b080a0"};for(const i of cu)e.has(i.kind)||e.set(i.kind,{parts:[],color:n[i.kind]||"#888"}),e.get(i.kind).parts.push(i);for(const[i,s]of e){const r=document.createElement("div");r.textContent=i.toUpperCase(),r.style.cssText="font:400 7px/1 system-ui,-apple-system,sans-serif;color:rgba(255,255,255,0.12);letter-spacing:0.15em;padding:10px 16px 4px;",t.appendChild(r);for(const a of s.parts){const l=document.createElement("button"),c=a.kind==="engine"?`${(a.thrust/1e3).toFixed(0)}kN`:a.kind==="tank"?`${(a.fuelCapacity/1e3).toFixed(0)}t`:a.kind==="capsule"?`${(a.mass/1e3).toFixed(1)}t`:"";l.innerHTML=`<span style="width:2px;height:12px;background:${s.color};border-radius:1px;display:inline-block;vertical-align:middle;margin-right:8px;opacity:0.6;"></span><span style="vertical-align:middle;">${a.name}</span><span style="float:right;color:rgba(255,255,255,0.12);font-size:9px;margin-top:1px;">${c}</span>`,l.style.cssText="display:block;width:100%;padding:7px 16px;background:transparent;color:rgba(255,255,255,0.35);border:none;font:400 11px system-ui;cursor:pointer;text-align:left;transition:all 0.15s;",l.addEventListener("mouseenter",()=>{l.style.background="rgba(255,255,255,0.02)",l.style.color="rgba(255,255,255,0.7)"}),l.addEventListener("mouseleave",()=>{l.style.background="transparent",l.style.color="rgba(255,255,255,0.35)"}),l.addEventListener("click",()=>this.add(a)),t.appendChild(l)}}}add(t){const e=lh[t.size]||.6,n=this.st+e/2;this.assembly.addRoot({part:t,position:[0,n*le,0],rotation:0,children:[]}),this.st+=e,this.nm.push(t.name),this.rf(),this.up()}undo(){if(!this.assembly.roots.length)return;const t=this.assembly.roots.pop();this.st-=lh[t.part.size]||.6,this.nm.pop(),this.rf(),this.up()}up(){if(!this.nm.length){this.info.innerHTML='<span style="color:rgba(255,255,255,0.08);">select parts</span>';return}const t=this.assembly.roots.reduce((n,i)=>n+i.part.mass,0),e=this.assembly.roots.reduce((n,i)=>n+(i.part.fuelCapacity||0),0);this.info.innerHTML=this.nm.map((n,i)=>`<span style="color:rgba(255,255,255,0.2);">${n}</span>`).join(' <span style="color:rgba(255,255,255,0.05);">&rarr;</span> ')+`<div style="margin-top:6px;font:400 8px system-ui;color:rgba(255,255,255,0.08);">${this.nm.length}p &middot; ${(t/1e3).toFixed(1)}t${e?" &middot; "+(e/1e3).toFixed(0)+"t fuel":""}</div>`}async rf(){for(;this.rg.children.length;)this.rg.remove(this.rg.children[0]);if(!this.assembly.roots.length)return;if(this.assembly.roots.some(e=>e.part.kind==="gltf"&&e.part.gltfUrl&&!xi.has(e.part.gltfUrl))){const{loadGLTF:e}=await xh(async()=>{const{loadGLTF:n}=await Promise.resolve().then(()=>gu);return{loadGLTF:n}},void 0);for(const n of this.assembly.roots)n.part.kind==="gltf"&&n.part.gltfUrl&&!xi.has(n.part.gltfUrl)&&await e(n.part.gltfUrl,n.part.gltfScale??1)}this.rg.add(this.assembly.toMesh())}cam(){const t=this.dt*Math.sin(this.po)*Math.cos(this.az),e=this.dt*Math.cos(this.po),n=this.dt*Math.sin(this.po)*Math.sin(this.az);this.camera.position.set(this.tg.x+t,this.tg.y+e,this.tg.z+n),this.camera.lookAt(this.tg)}mount(){document.body.appendChild(this.root)}unmount(){this.root.remove()}}class ll{name;mass;position;velocity;constructor(t,e,n,i){this.name=t,this.mass=e,this.position=[...n],this.velocity=[...i]}applyForce(t,e){const n=t[0]/this.mass,i=t[1]/this.mass,s=t[2]/this.mass;this.velocity[0]+=n*e,this.velocity[1]+=i*e,this.velocity[2]+=s*e,this.position[0]+=this.velocity[0]*e,this.position[1]+=this.velocity[1]*e,this.position[2]+=this.velocity[2]*e}kineticEnergy(){const t=this.velocity[0]**2+this.velocity[1]**2+this.velocity[2]**2;return .5*this.mass*t}}class Gy{rocket;system;position;velocity;throttle=0;constructor(t,e,n,i){this.rocket=t,this.system=e,this.position=[...n],this.velocity=[...i]}consumeFuel(t,e){this.rocket.consumeFuel(t,e)}}const _s=fn*pn,pa=.5,ma=500,Vo=25,Xo=3,ch=2,qo=7,Yo=0,Ko=Math.PI/2.5;class Wy{camera;dist=qo;targetDist=qo;azimuth=Yo;targetAzimuth=Yo;polar=Ko;targetPolar=Ko;isDragging=!1;prevMouse={x:0,y:0};canvas=null;smoothPos=new C;initialized=!1;orbitKeys={left:!1,right:!1,up:!1,down:!1};zoomKeys={in:!1,out:!1};inertiaAzimuth=0;inertiaPolar=0;constructor(t){this.camera=t,this.setupKeyboard()}setupKeyboard(){window.addEventListener("keydown",t=>{if(t.shiftKey)switch(t.key){case"ArrowLeft":this.orbitKeys.left=!0,t.preventDefault();break;case"ArrowRight":this.orbitKeys.right=!0,t.preventDefault();break;case"ArrowUp":this.orbitKeys.up=!0,t.preventDefault();break;case"ArrowDown":this.orbitKeys.down=!0,t.preventDefault();break}(t.key==="z"||t.key==="Z")&&(this.zoomKeys.in=!0),(t.key==="x"||t.key==="X")&&(this.zoomKeys.out=!0)}),window.addEventListener("keyup",t=>{switch(t.key){case"ArrowLeft":this.orbitKeys.left=!1;break;case"ArrowRight":this.orbitKeys.right=!1;break;case"ArrowUp":this.orbitKeys.up=!1;break;case"ArrowDown":this.orbitKeys.down=!1;break;case"z":case"Z":this.zoomKeys.in=!1;break;case"x":case"X":this.zoomKeys.out=!1;break}})}initialiseAt(t,e,n,i){const s=t.position[0]*_s+(i?.x??0),r=t.position[1]*_s+(i?.y??0),a=t.position[2]*_s+(i?.z??0),l=new C(s,r,a),c=this.targetDist*Math.sin(this.polar)*Math.cos(this.azimuth),d=this.targetDist*Math.cos(this.polar),h=this.targetDist*Math.sin(this.polar)*Math.sin(this.azimuth);this.camera.position.set(s+c,r+d,a+h),this.camera.up.set(0,1,0),this.camera.lookAt(l)}setAzimuth(t){this.azimuth=t,this.targetAzimuth=t}setPolar(t){this.polar=t,this.targetPolar=t}zoom(t){this.targetDist*=t,this.targetDist=Math.max(pa,Math.min(ma,this.targetDist))}enableOrbit(t){this.canvas=t,t.addEventListener("mousedown",e=>{e.button===0&&(this.isDragging=!0,this.prevMouse={x:e.clientX,y:e.clientY},this.inertiaAzimuth=0,this.inertiaPolar=0)}),window.addEventListener("mousemove",e=>{if(!this.isDragging)return;const n=e.clientX-this.prevMouse.x,i=e.clientY-this.prevMouse.y;this.inertiaAzimuth=-n*.005,this.inertiaPolar=i*.005,this.targetAzimuth+=this.inertiaAzimuth,this.targetPolar=Math.max(.05,Math.min(Math.PI-.05,this.targetPolar+this.inertiaPolar)),this.prevMouse={x:e.clientX,y:e.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.targetDist*=e.deltaY>0?1.1:.9,this.targetDist=Math.max(pa,Math.min(ma,this.targetDist))},{passive:!1})}follow(t,e,n,i=!1,s){const r=t.position[0]*_s+(s?.x??0),a=t.position[1]*_s+(s?.y??0),l=t.position[2]*_s+(s?.z??0),c=new C(r,a,l);this.orbitKeys.left&&(this.targetAzimuth+=e*Xo),this.orbitKeys.right&&(this.targetAzimuth-=e*Xo),this.orbitKeys.up&&(this.targetPolar=Math.max(.05,this.targetPolar-e*Xo*.5)),this.orbitKeys.down&&(this.targetPolar=Math.min(Math.PI-.05,this.targetPolar+e*Xo*.5)),this.zoomKeys.in&&(this.targetDist=Math.max(pa,this.targetDist*(1-e*ch))),this.zoomKeys.out&&(this.targetDist=Math.min(ma,this.targetDist*(1+e*ch))),this.isDragging||(this.targetAzimuth+=this.inertiaAzimuth*e*2,this.targetPolar+=this.inertiaPolar*e*2,this.inertiaAzimuth*=Math.exp(-3*e),this.inertiaPolar*=Math.exp(-3*e)),this.dist+=(this.targetDist-this.dist)*Math.min(1,Vo*e),this.azimuth+=(this.targetAzimuth-this.azimuth)*Math.min(1,Vo*e*.5),this.polar+=(this.targetPolar-this.polar)*Math.min(1,Vo*e*.5);const d=this.dist*Math.sin(this.polar)*Math.cos(this.azimuth),h=this.dist*Math.cos(this.polar),u=this.dist*Math.sin(this.polar)*Math.sin(this.azimuth),f=new C(r+d,a+h,l+u),g=new C(0,1,0);if(this.initialized||(this.smoothPos.copy(f),this.initialized=!0),i)this.smoothPos.copy(f);else{const m=Math.min(1,Vo*e);this.smoothPos.lerp(f,m)}this.camera.position.copy(this.smoothPos);const _=Math.abs(this.polar)<.1?new C(0,0,1):Math.abs(this.polar-Math.PI)<.1?new C(0,0,-1):g;this.camera.up.copy(_),this.camera.lookAt(c)}reset(){this.targetDist=qo,this.dist=qo,this.targetAzimuth=Yo,this.azimuth=Yo,this.targetPolar=Ko,this.polar=Ko}dispose(){this.canvas=null}}class Vy{container;active=!1;keys=new Set;stagePressed=!1;pauseToggle=!1;visible=!1;constructor(){this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,e.appendChild(n);let i=null;const s={x:0,y:0},r={x:0,y:0},a=(U,D)=>{const q=e.getBoundingClientRect();s.x=q.left+q.width/2,s.y=q.top+q.height/2,r.x=U,r.y=D,this.updateStick(n,s,r)},l=(U,D)=>{r.x=U,r.y=D,this.updateStick(n,s,r);const q=(U-s.x)/60,L=(D-s.y)/60,k=Math.max(-1,Math.min(1,q)),W=Math.max(-1,Math.min(1,L));W>.3?(this.keys.add("touch-up"),this.keys.delete("touch-down")):W<-.3?(this.keys.add("touch-down"),this.keys.delete("touch-up")):(this.keys.delete("touch-up"),this.keys.delete("touch-down")),k>.3?(this.keys.add("touch-right"),this.keys.delete("touch-left")):k<-.3?(this.keys.add("touch-left"),this.keys.delete("touch-right")):(this.keys.delete("touch-left"),this.keys.delete("touch-right"))},c=()=>{i=null,n.style.transform="translate(-50%, -50%)",this.keys.delete("touch-up"),this.keys.delete("touch-down"),this.keys.delete("touch-left"),this.keys.delete("touch-right")};e.addEventListener("touchstart",U=>{if(U.preventDefault(),i!==null)return;const D=U.changedTouches[0];i=D.identifier,a(D.clientX,D.clientY)},{passive:!1}),e.addEventListener("touchmove",U=>{U.preventDefault();for(let D=0;D<U.changedTouches.length;D++)U.changedTouches[D].identifier===i&&l(U.changedTouches[D].clientX,U.changedTouches[D].clientY)},{passive:!1}),e.addEventListener("touchend",U=>{for(let D=0;D<U.changedTouches.length;D++)U.changedTouches[D].identifier===i&&c()}),e.addEventListener("touchcancel",c),t.appendChild(e);const d=document.createElement("div");d.style.cssText=`
      position: absolute; bottom: 20px; right: 20px; display: flex;
      flex-direction: column; gap: 8px; align-items: flex-end;
    `;const h=(U,D=70,q=50)=>{const L=document.createElement("div");L.style.cssText="pointer-events: auto; position: relative;";const k=document.createElement("button");return k.textContent=U,k.style.cssText=`
        width: ${D}px; height: ${q}px; border-radius: 12px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: white; font: 600 14px/1 monospace; cursor: pointer;
        touch-action: none; user-select: none;
      `,L.appendChild(k),[k,L]},[u,f]=h("THR+",70,44),[g,_]=h("THR-",70,44),[m,p]=h("STAGE",70,44),[y,x]=h("R-",60,44),[b,R]=h("R+",60,44),A=(U,D)=>{this.keys.add(U),D.style.background="rgba(255,255,255,0.3)"},T=(U,D)=>{this.keys.delete(U),D.style.background="rgba(255,255,255,0.1)"},F=(U,D)=>{U.addEventListener("touchstart",q=>{q.preventDefault(),A(D,U)},{passive:!1}),U.addEventListener("touchend",q=>{q.preventDefault(),T(D,U)},{passive:!1}),U.addEventListener("touchcancel",()=>T(D,U)),U.addEventListener("mousedown",()=>A(D,U)),U.addEventListener("mouseup",()=>T(D,U)),U.addEventListener("mouseleave",()=>T(D,U))};F(u,"w"),F(g,"s"),F(y,"a"),F(b,"d"),m.addEventListener("touchstart",U=>{U.preventDefault(),this.stagePressed=!0},{passive:!1}),m.addEventListener("mousedown",()=>{this.stagePressed=!0});const v=document.createElement("div");v.style.cssText="display:flex; gap:8px;",v.appendChild(f),v.appendChild(p),d.appendChild(v);const w=document.createElement("div");w.style.cssText="display:flex; gap:8px;",w.appendChild(_),w.appendChild(x),w.appendChild(R),d.appendChild(w),t.appendChild(d)}updateStick(t,e,n){const i=n.x-e.x,s=n.y-e.y,r=60,a=Math.sqrt(i*i+s*s),l=Math.min(a,r),c=Math.atan2(s,i),d=Math.cos(c)*l,h=Math.sin(c)*l;t.style.transform=`translate(calc(-50% + ${d}px), calc(-50% + ${h}px))`}show(){this.visible||(this.visible=!0,this.container.style.display="block")}hide(){this.visible=!1,this.container.style.display="none"}isVisible(){return this.visible}getPitch(){let t=0;return this.keys.has("touch-up")&&(t=1),this.keys.has("touch-down")&&(t=-1),t}getYaw(){let t=0;return this.keys.has("touch-right")&&(t=1),this.keys.has("touch-left")&&(t=-1),t}getRoll(){let t=0;return this.keys.has("a")&&(t=1),this.keys.has("d")&&(t=-1),t}getThrottleUp(){return this.keys.has("w")}getThrottleDown(){return this.keys.has("s")}getStageRequested(){const t=this.stagePressed;return this.stagePressed=!1,t}dispose(){document.body.removeChild(this.container)}}class Xy{keys=new Set;stagePressed=!1;pauseToggle=!1;state;touch=null;_onKeyDown;_onKeyUp;constructor(t){this.state=t,this._onKeyDown=e=>{e.repeat||(this.keys.add(e.key.toLowerCase()),e.key===" "&&(this.stagePressed=!0),e.key==="Escape"&&(this.pauseToggle=!0),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(e.key.toLowerCase())&&e.preventDefault())},this._onKeyUp=e=>{this.keys.delete(e.key.toLowerCase())},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}enableTouch(){this.touch||(this.touch=new Vy),this.touch.show()}disableTouch(){this.touch?.hide()}update(t){const e=this.touch?.getThrottleUp()||this.keys.has("w"),n=this.touch?.getThrottleDown()||this.keys.has("s");e&&(this.state.throttle=Math.min(1,this.state.throttle+t*.5)),n&&(this.state.throttle=Math.max(0,this.state.throttle-t*.3))}getPitch(){let t=0;return(this.keys.has("arrowup")||this.touch?.getPitch()===1)&&(t=1),(this.keys.has("arrowdown")||this.touch?.getPitch()===-1)&&(t=-1),t}getYaw(){let t=0;return(this.keys.has("arrowleft")||this.touch?.getYaw()===1)&&(t=1),(this.keys.has("arrowright")||this.touch?.getYaw()===-1)&&(t=-1),t}getRoll(){let t=0;return(this.keys.has("a")||this.touch?.getRoll()===1)&&(t=1),(this.keys.has("d")||this.touch?.getRoll()===-1)&&(t=-1),t}getZoomIn(){return this.keys.has("z")}getZoomOut(){return this.keys.has("x")}getStageRequested(){const t=this.stagePressed||!!this.touch?.getStageRequested();return this.stagePressed=!1,t}consumePauseToggle(){const t=this.pauseToggle;return this.pauseToggle=!1,t}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.touch?.dispose(),this.touch=null}}class qy{root;speedVal;fuelVal;vsVal;altVal;massVal;heatFill;heatPct;throttleFill;throttlePct;warpLabel;_fuelRKg;_fuelRBar;pauseOverlay;navballCanvas;navballCtx;camModeEl;onAction=null;constructor(){this.root=document.createElement("div"),this.root.style.cssText="position:fixed;inset:0;z-index:100;pointer-events:none;",this.pauseOverlay=document.createElement("div"),this.pauseOverlay.style.cssText="position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;",this.pauseOverlay.innerHTML=`
      <div style="width:280px;display:flex;flex-direction:column;gap:8px;align-items:center;">
        <button class="btn btn--primary pause-btn" data-action="resume" style="width:100%;padding:14px;font-size:16px;text-align:center;">▶ RESUME</button>
        <button class="btn btn--secondary pause-btn" data-action="menu" style="width:100%;padding:14px;font-size:16px;text-align:center;">MENU</button>
        <button class="btn btn--danger pause-btn" data-action="restart" style="width:100%;padding:14px;font-size:16px;text-align:center;">🔄 RESTART</button>
      </div>
    `,document.body.appendChild(this.pauseOverlay),this.pauseOverlay.querySelectorAll(".pause-btn").forEach(t=>{t.addEventListener("click",e=>{this.onAction&&this.onAction(e.target.dataset.action)})})}mount(t=document.body){const e=document.createElement("div");e.style.cssText=`
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
      <div style="display:flex;gap:4px;margin-top:4px;">
        <button data-action="stage" style="flex:1;padding:3px 4px;font-size:9px;background:rgba(200,152,56,0.2);color:#c89838;border:1px solid rgba(200,152,56,0.3);border-radius:3px;cursor:pointer;">STAGE</button>
        <button data-action="chute" style="flex:1;padding:3px 4px;font-size:9px;background:rgba(100,120,200,0.2);color:#88aacc;border:1px solid rgba(100,120,200,0.3);border-radius:3px;cursor:pointer;">CHUTE</button>
        <button data-action="map" style="flex:1;padding:3px 4px;font-size:9px;background:rgba(100,200,100,0.2);color:#88cc88;border:1px solid rgba(100,200,100,0.3);border-radius:3px;cursor:pointer;">MAP</button>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:2px;">
        <span style="color:rgba(244,245,242,0.5);">WARP</span>
        <span class="warp-val" style="color:#c89838;font-size:10px;">x1</span>
      </div>
    `,this.root.appendChild(e),this.speedVal=e.querySelector(".speed-val"),this.fuelVal=e.querySelector(".fuel-val"),this.vsVal=e.querySelector(".vs-val"),this.altVal=e.querySelector(".alt-val"),this.massVal=e.querySelector(".mass-val"),this.heatFill=e.querySelector(".heat-fill"),this.heatPct=e.querySelector(".heat-pct"),this.throttleFill=e.querySelector(".throt-fill"),this.throttlePct=e.querySelector(".throt-pct"),this.warpLabel=e.querySelector(".warp-val"),e.addEventListener("click",r=>{const a=r.target.closest("[data-action]");a&&this.onAction&&this.onAction(a.dataset.action)}),this.camModeEl=document.createElement("div"),this.camModeEl.style.cssText="position:fixed;bottom:20px;left:20px;z-index:100;color:rgba(200,152,56,0.5);font-size:9px;font-family:monospace;pointer-events:none;",this.root.appendChild(this.camModeEl);const n=document.createElement("div");n.style.cssText="position:fixed;bottom:20px;right:20px;z-index:100;pointer-events:none;";const i=document.createElement("canvas");i.width=150,i.height=150,i.style.cssText="width:150px;height:150px;border-radius:75px;opacity:0.85;",n.appendChild(i),this.root.appendChild(n),this.navballCanvas=i,this.navballCtx=i.getContext("2d");const s=document.createElement("div");s.style.cssText="position:fixed;top:16px;right:16px;z-index:100;pointer-events:none;font-family:monospace;font-size:12px;background:rgba(8,10,24,0.8);border:1px solid rgba(200,152,56,0.2);border-radius:6px;padding:8px 12px;color:#ffaa44;",s.innerHTML='<span style="color:rgba(244,245,242,0.5);">FUEL</span> <span class="fuel-r-kg">4500 kg</span><br><div style="width:80px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;margin-top:4px;"><div class="fuel-r-bar" style="width:100%;height:100%;background:#ffaa44;border-radius:3px;"></div></div>',this.root.appendChild(s),this._fuelRKg=s.querySelector(".fuel-r-kg"),this._fuelRBar=s.querySelector(".fuel-r-bar"),t.appendChild(this.root)}setVisible(t){this.root.style.display=t?"":"none"}setMass(t){this.massVal&&(this.massVal.textContent=`${(t/1e3).toFixed(1)}`)}setFreeCamera(t){this.camModeEl&&(this.camModeEl.textContent=t?"FREE":"")}setWarp(t){this.warpLabel&&(this.warpLabel.textContent=`x${t}`)}setPaused(t){this.pauseOverlay.style.display=t?"flex":"none"}setThrottle(t){const e=Math.round(t*100);this.throttlePct.textContent=`${e}%`,this.throttleFill.style.width=`${e}%`,this.throttleFill.style.background=e>80?"#ff6644":"#4488ff"}setNavballData(t,e,n,i,s){const r=this.navballCtx,a=140,l=140,c=70,d=70,h=66;r.clearRect(0,0,a,l),r.beginPath(),r.arc(c,d,h+2,0,Math.PI*2),r.fillStyle="#060810",r.fill();const u=[t[0],t[1],t[2]],f=Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2])||1;u[0]/=f,u[1]/=f,u[2]/=f;const g=u[0]*n[0]+u[1]*n[1]+u[2]*n[2];let _=[n[0]-u[0]*g,n[1]-u[1]*g,n[2]-u[2]*g];const m=Math.sqrt(_[0]*_[0]+_[1]*_[1]+_[2]*_[2])||1;_[0]/=m,_[1]/=m,_[2]/=m;const p=[u[1]*_[2]-u[2]*_[1],u[2]*_[0]-u[0]*_[2],u[0]*_[1]-u[1]*_[0]],y=T=>{const F=Math.sqrt(T[0]*T[0]+T[1]*T[1]+T[2]*T[2])||1,v=T[0]/F,w=T[1]/F,U=T[2]/F,D=v*p[0]+w*p[1]+U*p[2],q=v*_[0]+w*_[1]+U*_[2],L=v*u[0]+w*u[1]+U*u[2],k=L>0,W=L>0?h/(1+L):h*.5;return{x:c+D*W,y:d-q*W,inFront:k,lx:D,ly:q,lz:L}},x=h*h;r.save(),r.beginPath(),r.arc(c,d,h,0,Math.PI*2),r.clip(),y(n);const b=y([-n[0],-n[1],-n[2]]),R=r.createRadialGradient(c,d,0,c,d,h);if(R.addColorStop(0,"#0a0a22"),R.addColorStop(.4,"#1a2a4a"),R.addColorStop(1,"#224488"),r.fillStyle=R,r.fillRect(c-h,d-h,h*2,h*2),b.inFront){const T=r.createRadialGradient(b.x,b.y,0,b.x,b.y,h*1.2);T.addColorStop(0,"#6a4a2a"),T.addColorStop(.3,"#5a3a1a"),T.addColorStop(.7,"#3a2a12"),T.addColorStop(1,"rgba(10,10,40,0)"),r.fillStyle=T,r.fillRect(c-h,d-h,h*2,h*2)}for(let T=-80;T<=80;T+=10){const F=T*Math.PI/180,v=Math.cos(F),w=Math.sin(F),U=[u[0]*v+_[0]*w,u[1]*v+_[1]*w,u[2]*v+_[2]*w],D=y(U);if(!D.inFront||(D.x-c)*(D.x-c)+(D.y-d)*(D.y-d)>x)continue;const q=T===0?26:T%20===0?18:10;r.beginPath(),r.moveTo(c-q*(1-Math.abs(w)*.3),D.y),r.lineTo(c+q*(1-Math.abs(w)*.3),D.y),r.strokeStyle=T===0?"#FFCC44":"rgba(255,255,255,0.2)",r.lineWidth=T===0?1.5:.6,r.stroke(),T%20===0&&(r.fillStyle="rgba(255,255,255,0.35)",r.font="7px sans-serif",r.fillText(`${Math.abs(T)}`,c+q+3,D.y+2))}for(let T=0;T<360;T+=45){const F=T*Math.PI/180,v=p[0]*Math.cos(F)+_[0]*Math.sin(F),w=p[1]*Math.cos(F)+_[1]*Math.sin(F),U=p[2]*Math.cos(F)+_[2]*Math.sin(F),D=[v-u[0]*g,w-u[1]*g,U-u[2]*g],q=Math.sqrt(D[0]*D[0]+D[1]*D[1]+D[2]*D[2])||1,L=y([D[0]/q,D[1]/q,D[2]/q]);L.inFront&&(r.fillStyle="rgba(255,255,255,0.2)",r.font="6px sans-serif",r.textAlign="center",r.fillText(`${T}°`,L.x,L.y+2),r.textAlign="start")}const A=(T,F)=>{const v=y(T);v.inFront&&F(v)};A(e,T=>{r.beginPath(),r.arc(T.x,T.y,4,0,Math.PI*2),r.fillStyle="#44FF44",r.fill(),r.beginPath(),r.arc(T.x,T.y,7,0,Math.PI*2),r.strokeStyle="#44FF44",r.lineWidth=1.5,r.stroke()}),A([-e[0],-e[1],-e[2]],T=>{r.beginPath(),r.arc(T.x,T.y,4,0,Math.PI*2),r.fillStyle="rgba(68,255,68,0.5)",r.fill(),r.beginPath(),r.arc(T.x,T.y,7,0,Math.PI*2),r.strokeStyle="#44FF44",r.lineWidth=1,r.stroke(),r.beginPath(),r.moveTo(T.x-3,T.y-3),r.lineTo(T.x+3,T.y+3),r.moveTo(T.x+3,T.y-3),r.lineTo(T.x-3,T.y+3),r.strokeStyle="#44FF44",r.lineWidth=1,r.stroke()}),A(n,T=>{r.beginPath(),r.moveTo(T.x,T.y-6),r.lineTo(T.x-4,T.y+3),r.lineTo(T.x+4,T.y+3),r.closePath(),r.fillStyle="#4488FF",r.fill()}),A([-n[0],-n[1],-n[2]],T=>{r.beginPath(),r.moveTo(T.x,T.y+6),r.lineTo(T.x-4,T.y-3),r.lineTo(T.x+4,T.y-3),r.closePath(),r.fillStyle="#CC8844",r.fill()}),r.beginPath(),r.arc(c,d,3,0,Math.PI*2),r.fillStyle="#FFAA44",r.fill(),r.restore(),r.beginPath(),r.arc(c,d,h+1,0,Math.PI*2),r.strokeStyle="#334466",r.lineWidth=2,r.stroke();for(let T=0;T<360;T+=45){const F=T*Math.PI/180;r.beginPath(),r.moveTo(c+Math.cos(F)*(h-7),d+Math.sin(F)*(h-7)),r.lineTo(c+Math.cos(F)*(h+2),d+Math.sin(F)*(h+2)),r.strokeStyle="#4a6a8a",r.lineWidth=1,r.stroke()}}update(t,e,n=0,i=0){const s=Math.sqrt(t.velocity[0]**2+t.velocity[1]**2+t.velocity[2]**2);let r=1/0;for(const g of e.bodies){if(g.mass<=0)continue;const _=t.position[0]-g.position[0],m=t.position[1]-g.position[1],p=t.position[2]-g.position[2],y=Math.sqrt(_*_+m*m+p*p),x=g.getSurfaceRadiusAt?.(t.position)??g.radius??0,b=y-x;b<r&&(r=b)}const a=Math.min(100,n/3e5*100);this.speedVal.textContent=s>1e3?(s/1e3).toFixed(1)+"k":s.toFixed(1),this.speedVal.style.color=s>3e3?"#ff6644":s>1e3?"#ffaa44":"#ddd";const l=r/1e3;this.altVal.textContent=r>1e4?l.toFixed(1)+"k":r.toFixed(0);const c=t.velocity[1];this.vsVal.textContent=c>0?"+"+c.toFixed(0):c.toFixed(0),this.vsVal.style.color=c>0?"#88ff88":c<0?"#ff6644":"#88ccff";const d=t.rocket.totalFuelMass();d>1e3?(this.fuelVal.textContent=(d/1e3).toFixed(1),this.fuelVal.nextElementSibling.textContent="t"):(this.fuelVal.textContent=d.toFixed(0),this.fuelVal.nextElementSibling.textContent="kg");const h=Math.round(i*100);this.throttlePct.textContent=`${h}%`;const u=t.rocket.totalFuelMass(),f=t.rocket.assembly.totalFuelCapacity();this._fuelRKg&&(this._fuelRKg.textContent=u>1e3?`${(u/1e3).toFixed(1)} t`:`${u.toFixed(0)} kg`),this._fuelRBar&&(this._fuelRBar.style.width=`${f>0?u/f*100:0}%`),this.throttleFill.style.width=`${h}%`,this.throttleFill.style.background=h>80?"#ff4444":h>40?"#ffaa00":"#4488ff",this.heatPct.textContent=`${a.toFixed(0)}%`,this.heatPct.style.color=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44",this.heatFill.style.width=`${a}%`,this.heatFill.style.background=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44"}unmount(){this.root.remove(),this.pauseOverlay.remove()}}function Yy(o,t,e){if(o.throttle<=0)return;const n=Ky(o.rocket.assembly.roots);if(n.length===0)return;let i=0,s=0;for(const h of n){const u=h.thrust*1e3*o.throttle;i+=u,s+=u/(h.isp*py)}const r=e??[0,1,0],a=o.rocket.totalMass(),l=i*r[0]/a,c=i*r[1]/a,d=i*r[2]/a;o.velocity[0]+=l*t,o.velocity[1]+=c*t,o.velocity[2]+=d*t,o.consumeFuel(s,t)}function Xa(o){for(const t of o){if(t.part.thrust&&t.part.isp)return{thrust:t.part.thrust,isp:t.part.isp};if(t.children?.length){const e=Xa(t.children);if(e)return e}}return null}function Ky(o){const t=[],e=n=>{for(const i of n)i.part.thrust&&i.part.isp&&t.push({thrust:i.part.thrust,isp:i.part.isp}),i.children?.length&&e(i.children)};return e(o),t}class jy{ctx=null;engineOsc=null;engineGain=null;engineNoise=null;engineRunning=!1;throttleLevel=0;constructor(){try{this.ctx=new AudioContext}catch{}}ensureCtx(){return this.ctx?(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx):null}startEngine(){if(!this.ensureCtx()||this.engineRunning)return;const t=this.ctx;this.engineRunning=!0,this.engineOsc=t.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=80,this.engineGain=t.createGain(),this.engineGain.gain.value=.02;const e=t.createBuffer(1,t.sampleRate*2,t.sampleRate),n=e.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=(Math.random()*2-1)*.3;this.engineNoise=t.createBufferSource(),this.engineNoise.buffer=e,this.engineNoise.loop=!0;const i=t.createGain();i.gain.value=.01;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=400,this.engineOsc.connect(this.engineGain),this.engineOsc.start(),this.engineNoise.connect(s),s.connect(i);const r=t.createGain();r.gain.value=.4,this.engineGain.connect(r),i.connect(r),r.connect(t.destination)}setThrottle(t){if(this.throttleLevel=t,!this.engineOsc||!this.engineGain)return;const e=60+t*80,n=.01+t*.04;this.engineOsc.frequency.setValueAtTime(e,this.ctx.currentTime+.1),this.engineGain.gain.setValueAtTime(n,this.ctx.currentTime+.05)}stopEngine(){if(this.engineOsc){try{this.engineOsc.stop()}catch{}this.engineOsc=null}if(this.engineNoise){try{this.engineNoise.stop()}catch{}this.engineNoise=null}this.engineGain&&(this.engineGain.disconnect(),this.engineGain=null),this.engineRunning=!1}playStaging(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="square",n.frequency.setValueAtTime(200,e),n.frequency.exponentialRampToValueAtTime(40,e+.3);const i=t.createGain();i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.5),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.5)}playCrash(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(20,e+.8);const i=t.createGain();i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+1.5);const s=t.createBuffer(1,t.sampleRate*1,t.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*(c<r.length*.2?.8:.1*(1-c/r.length));const a=t.createBufferSource();a.buffer=s;const l=t.createGain();l.gain.setValueAtTime(.2,e),l.gain.exponentialRampToValueAtTime(.001,e+1),n.connect(i),a.connect(l),i.connect(t.destination),l.connect(t.destination),n.start(e),n.stop(e+1.5),a.start(e),a.stop(e+1)}playLand(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(300,e),n.frequency.exponentialRampToValueAtTime(60,e+.2);const i=t.createGain();i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.3)}dispose(){this.stopEngine(),this.ctx&&(this.ctx.close(),this.ctx=null)}}function je(o,t){const e=t.bodyByName("sun");let n=e,i=0;for(const s of t.bodies){if(s.name==="sun")continue;const r=s;let a=e,l=e.position;if(r.parentBody)a=r.parentBody,l=a.position;else if(s.name==="moon"){const x=t.bodyByName("earth");x&&(a=x,l=x.position)}const c=s.position[0]-o[0],d=s.position[1]-o[1],h=s.position[2]-o[2],u=c*c+d*d+h*h,f=Math.sqrt(u),g=s.position[0]-l[0],_=s.position[1]-l[1],m=s.position[2]-l[2],y=Math.sqrt(g*g+_*_+m*m)*Math.pow(s.mass/a.mass,.4);if(f<y){const x=Ts*s.mass/u;x>i&&(i=x,n=s)}}return n}function Js(o,t,e,n,i){const s=Ts*e,r=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]),l=(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])/2-s/r,c=-s/(2*l),d=o[1]*t[2]-o[2]*t[1],h=o[2]*t[0]-o[0]*t[2],u=o[0]*t[1]-o[1]*t[0],f=Math.sqrt(d*d+h*h+u*u),g=(t[1]*u-t[2]*h)/s-o[0]/r,_=(t[2]*d-t[0]*u)/s-o[1]/r,m=(t[0]*h-t[1]*d)/s-o[2]/r,p=Math.sqrt(g*g+_*_+m*m),y=p<1&&c>0,x=y?c*(1+p):1/0,b=y?c*(1-p):r,R=p>1e-8?g/p:1,A=p>1e-8?_/p:0,T=p>1e-8?m/p:0,F=[R,A,T],v=[(h*T-u*A)/(f||1),(u*R-d*T)/(f||1),(d*A-h*R)/(f||1)],w=[],U=y?Math.PI:Math.acos(-1/Math.max(p,1.001))*.98;let D,q;if(y){const L=2*Math.PI*Math.sqrt(c*c*c/s),k=(o[0]*t[0]+o[1]*t[1]+o[2]*t[2])/(r||1),W=(c*(1-p*p)/r-1)/p,K=k*Math.sqrt(c*(1-p*p)/s)/(p||1),Y=(p+W)/(1+p*W),$=Math.sqrt(1-p*p)*K/(1+p*W);let J=Math.atan2($,Y);J<0&&(J+=Math.PI*2);const ht=(J-p*$)*L/(2*Math.PI),X=L-ht,et=(X+L/2)%L;q=X,D=et}for(let L=0;L<=i;L++){const k=-U+2*U*L/i,W=1+p*Math.cos(k);if(Math.abs(W)<1e-10)continue;const K=c*(1-p*p)/W;if(isNaN(K)||!isFinite(K)||K<0)continue;const Y=K*(Math.cos(k)*F[0]+Math.sin(k)*v[0]),$=K*(Math.cos(k)*F[2]+Math.sin(k)*v[2]);if(Math.sqrt(Y*Y+$*$)>n*1.5)break;w.push([Y,$])}return{points:w,eccentricity:p,apoapsis:x,periapsis:b,bound:y,timeToAp:D,timeToPe:q}}function $y(o,t){const e=o.position[0]-t.position[0],n=o.position[1]-t.position[1],i=o.position[2]-t.position[2],s=e*e+n*n+i*i,r=Math.sqrt(s);if(r===0)return[0,0,0];const a=Ts*o.mass*t.mass/s;return[a*e/r,a*n/r,a*i/r]}function _u(o,t){let e=0,n=0,i=0;for(const s of t){if(s===o||s.mass<=0)continue;const r=$y(s,o);e+=r[0],n+=r[1],i+=r[2]}return[e,n,i]}const Un=le/.08*1.5,Nn=900;function Zy(){try{const o=document.createElement("canvas");o.width=64,o.height=64;const t=o.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(255,255,240,0.95)"),e.addColorStop(.35,"rgba(255,230,180,0.7)"),e.addColorStop(.55,"rgba(255,180,100,0.35)"),e.addColorStop(.75,"rgba(255,120,50,0.15)"),e.addColorStop(1,"rgba(255,80,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new ze(o);return n.needsUpdate=!0,n}catch{return new nl(new Uint8Array([255,255,255,255]),1,1,un)}}function Jy(){try{const o=document.createElement("canvas");o.width=64,o.height=64;const t=o.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,200,100,0.6)"),e.addColorStop(.3,"rgba(255,150,60,0.3)"),e.addColorStop(.6,"rgba(200,80,30,0.1)"),e.addColorStop(1,"rgba(100,30,10,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new ze(o);return n.needsUpdate=!0,n}catch{return new nl(new Uint8Array([255,255,255,255]),1,1,un)}}class Qy{particles;outerParticles;positions;velocities;lifetimes;ages;colors;sizes;active;nextIndex;coreTex;outerTex;throttleLevel=1;inVacuum=!1;group;constructor(){this.active=!1,this.nextIndex=0,this.positions=new Float32Array(Nn*3),this.velocities=new Float32Array(Nn*3),this.lifetimes=new Float32Array(Nn),this.ages=new Float32Array(Nn),this.colors=new Float32Array(Nn*3),this.sizes=new Float32Array(Nn),this.ages.fill(1/0),this.coreTex=Zy(),this.outerTex=Jy(),this.group=new an;const t=new Fe;t.setAttribute("position",new Ie(this.positions,3)),t.setAttribute("color",new Ie(this.colors,3)),t.setAttribute("size",new Ie(this.sizes,1));const e=new ao({size:Un*.6,map:this.coreTex,vertexColors:!0,sizeAttenuation:!0,blending:cn,depthWrite:!1,transparent:!0,opacity:1});this.particles=new dr(t,e),this.group.add(this.particles);const n=new Fe;n.setAttribute("position",new Ie(this.positions.slice(),3));const i=new ao({size:Un*1.5,map:this.outerTex,color:16755302,sizeAttenuation:!0,blending:cn,depthWrite:!1,transparent:!0,opacity:.6});this.outerParticles=new dr(n,i),this.group.add(this.outerParticles)}setThrottle(t){this.throttleLevel=Math.max(.01,t)}setVacuum(t){this.inVacuum=t}start(){this.active=!0}stop(){this.active=!1;for(let t=0;t<Nn;t++)this.ages[t]=this.lifetimes[t],this.positions[t*3]=0,this.positions[t*3+1]=0,this.positions[t*3+2]=0;this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.outerParticles.geometry.attributes.position.needsUpdate=!0}update(t){const e=this.inVacuum?4.5:1;if(this.active){const i=Math.ceil((5+Math.random()*4)*this.throttleLevel);for(let s=0;s<i;s++){const r=this.nextIndex;this.nextIndex=(this.nextIndex+1)%Nn;const a=(.06+Math.random()*.12)*(this.inVacuum?4:1)/Math.max(.2,this.throttleLevel);this.positions[r*3]=(Math.random()-.5)*a*Un,this.positions[r*3+1]=-(Math.random()*.03)*Un,this.positions[r*3+2]=(Math.random()-.5)*a*Un;const l=(5+Math.random()*8)*this.throttleLevel*e;this.velocities[r*3]=(Math.random()-.5)*.4*Un,this.velocities[r*3+1]=-(l*Un),this.velocities[r*3+2]=(Math.random()-.5)*.4*Un,this.lifetimes[r]=(.2+Math.random()*.3)*e,this.ages[r]=0,this.sizes[r]=.5+Math.random()*.5}}for(let i=0;i<Nn;i++){const s=this.ages[i],r=this.lifetimes[i];if(s>=r)continue;const a=s+t;if(this.ages[i]=a,a>=r)continue;const l=a/r,c=i*3;this.positions[c]=(this.positions[c]??0)+(this.velocities[c]??0)*t,this.positions[c+1]=(this.positions[c+1]??0)+(this.velocities[c+1]??0)*t,this.positions[c+2]=(this.positions[c+2]??0)+(this.velocities[c+2]??0)*t;const d=Math.exp(-2*t);this.velocities[c]=(this.velocities[c]??0)*d,this.velocities[c+2]=(this.velocities[c+2]??0)*d,Math.random()<.05&&(this.velocities[c]=(this.velocities[c]??0)+(Math.random()-.5)*.2*Un,this.velocities[c+2]=(this.velocities[c+2]??0)+(Math.random()-.5)*.2*Un);let h,u,f;if(l<.15)h=1,u=1,f=1;else if(l<.35){const _=(l-.15)/.2;h=1,u=1-_*.3,f=1-_*.8}else if(l<.6){const _=(l-.35)/.25;h=1,u=.7-_*.3,f=.2-_*.15}else{const _=(l-.6)/.4;h=1-_*.7,u=.4-_*.35,f=.05-_*.04}this.inVacuum&&(h=h*.5+.1,u=u*.3+.1,f=f*.1+.5),this.colors[c]=Math.max(0,h),this.colors[c+1]=Math.max(0,u),this.colors[c+2]=Math.max(0,f);const g=l<.3?.6+l/.3*.4:1-(l-.3)/.7*.8;this.sizes[i]=g*(.5+(this.sizes[i]??.5)*.5)}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.particles.geometry.attributes.size.needsUpdate=!0;const n=this.outerParticles.geometry.attributes.position;for(let i=0;i<Nn;i++){const s=i*3;n.array[s]=this.positions[s]??0,n.array[s+1]=this.positions[s+1]??0,n.array[s+2]=this.positions[s+2]??0}n.needsUpdate=!0}getMesh(){return this.group}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.outerParticles.geometry.dispose(),this.outerParticles.material.dispose(),this.coreTex.dispose(),this.outerTex.dispose()}}const Di=100,ys=le*sr;class tx{particles;positions;velocities;lifetimes;ages;active=!1;constructor(){this.positions=new Float32Array(Di*3),this.velocities=new Float32Array(Di*3),this.lifetimes=new Float32Array(Di),this.ages=new Float32Array(Di),this.ages.fill(1/0);const t=new Fe;t.setAttribute("position",new Ie(this.positions,3));const e=new ao({size:.3*ys,color:13421772,transparent:!0,opacity:.5,blending:_i,depthWrite:!1,sizeAttenuation:!0});this.particles=new dr(t,e)}start(){this.active=!0}stop(){this.active=!1}update(t){if(this.active)for(let r=0;r<3;r++){let a=-1,l=-1;for(let c=0;c<Di;c++)this.ages[c]>=this.lifetimes[c]&&this.ages[c]>l&&(l=this.ages[c],a=c);if(a<0)for(let c=0;c<Di;c++)this.ages[c]>l&&(l=this.ages[c],a=c);a>=0&&(this.positions[a*3]=(Math.random()-.5)*.1*ys,this.positions[a*3+1]=0,this.positions[a*3+2]=(Math.random()-.5)*.1*ys,this.velocities[a*3]=(Math.random()-.5)*.5*ys,this.velocities[a*3+1]=(.5+Math.random()*1)*ys,this.velocities[a*3+2]=(Math.random()-.5)*.5*ys,this.lifetimes[a]=1+Math.random()*1.5,this.ages[a]=0)}const e=this.particles.material;let n=!1;const i=this.velocities,s=this.positions;for(let r=0;r<Di;r++){if(this.ages[r]>=this.lifetimes[r])continue;n=!0;const a=this.ages[r]+t;if(this.ages[r]=a,a>=this.lifetimes[r])continue;const l=r*3,c=i[l]??0,d=i[l+1]??0,h=i[l+2]??0;s[l]=(s[l]??0)+c*t,s[l+1]=(s[l+1]??0)+d*t,s[l+2]=(s[l+2]??0)+h*t,i[l]=c*.98,i[l+2]=h*.98}e.opacity=this.active?.5:Math.max(0,e.opacity-t*2),this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.visible=n||this.active}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose()}}const Nt=fn*pn;class ex{renderer;sceneMgr;system;achievements;state;rocket;rocketGroup;chase;controls;hud;sound;launched=!1;grounded=!0;groundedDir=null;liftoffFrames=0;engineFlame;groundSmoke;rocketShadow=null;reentryGlow=null;rocketQuat=new hn;angularVel=new C;ANGULAR_ACCEL=1.5;ANGULAR_DAMPING=3.5;timeWarp=1;parachuteDeployed=!1;deployedChuteMesh=null;crashed=!1;paused=!1;debris=[];warpLevels=[1,3,5,10,100,1e3,1e5,1e6];warpIndex=0;crashOverlay=null;prevVel=[0,0,0];gearDeployed=!1;gearMeshes=[];missionTime=0;sasMode="off";sasTargetQuat=new hn;screenShake=0;heatEnergy=0;MAX_HEAT=9999999999;HEAT_RADIATION_RATE=.999;stageInfo=[];lastReentryIntensity=0;prevMach=0;sonicBoomTriggered=!1;sonicBoomTimer=0;countdownTimer=0;countdownActive=!1;countdownCooldown=0;countdownEl=null;lastRefBody=null;impactMarker=null;maxAlt=0;maxSpeed=0;orbitLine=null;exhaustLight=null;followLight=null;cameraMode="chase";freeCamAzimuth=0;freeCamPolar=Math.PI/2;freeCamDist=4;freeCamKeys={left:!1,right:!1,up:!1,down:!1};freeCamDragging=!1;freeCamPrevMouse={x:0,y:0};hudVisible=!0;lastAltMilestone=0;sonicBoomRing=null;sonicBoomLife=0;reentryGlowMesh=null;rocketBottomY=0;_debugShown=!1;_debugMarker=null;_spawnProtectionTimer=0;_camSnapped=!1;showCountdown(t){this.countdownEl||(this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
        position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);
        font-size:120px;font-weight:bold;color:#ff0;z-index:9999;
        text-shadow:0 0 30px rgba(255,136,0,0.8);
        font-family:system-ui,sans-serif;pointer-events:none;
        transition:opacity 0.2s;
      `,document.body.appendChild(this.countdownEl)),this.countdownEl.textContent=t,this.countdownEl.style.opacity="1",t==="LIFTOFF!"?(this.countdownEl.style.color="#FF8844",this.countdownEl.style.fontSize="48px"):(this.countdownEl.style.color="#FFFFFF",this.countdownEl.style.fontSize="72px")}hideCountdown(){this.countdownEl&&(this.countdownEl.style.opacity="0")}get dragMultiplier(){return this.gearDeployed?2.5:1}onCrashAction=null;constructor(t,e,n,i,s){this.renderer=t,this.sceneMgr=e,this.system=n,this.achievements=s,this.rocket=i;const r=n.bodyByName("earth"),a=r.radius??6371e3,l=28.5*Math.PI/180,c=-80.5*Math.PI/180,d=[Math.cos(l)*Math.cos(c),Math.sin(l),Math.cos(l)*Math.sin(c)],h=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),u=[d[0]/h,d[1]/h,d[2]/h],f=60,g=[r.position[0]+u[0]*a,r.position[1]+u[1]*a,r.position[2]+u[2]*a],_=r.getSurfaceRadiusAt?.(g)??a,m=[r.position[0]+u[0]*(_+f),r.position[1]+u[1]*(_+f),r.position[2]+u[2]*(_+f)];this.state=new Gy(i,n,m,[0,0,0]),this.groundedDir=u;const p=new C(m[0]-r.position[0],m[1]-r.position[1],m[2]-r.position[2]).normalize();this.rocketQuat.setFromUnitVectors(new C(0,1,0),p),this.rocketGroup=i.assembly.toMesh(),this.rocketGroup.scale.setScalar(sr),this.rocketGroup.position.set(this.state.position[0]*Nt,this.state.position[1]*Nt,this.state.position[2]*Nt),e.scene.add(this.rocketGroup);const y=new de(1,8,6),x=new we({color:65280,transparent:!0,opacity:.3,depthTest:!1,depthWrite:!1,visible:!1});this._debugMarker=new ut(y,x),this._debugMarker.visible=!1,this._debugMarker.position.copy(this.rocketGroup.position),e.scene.add(this._debugMarker),this.rocketGroup.traverse(M=>{if(M instanceof ut&&M.material){const S=Array.isArray(M.material)?M.material:[M.material];for(const O of S)O.polygonOffset=!0,O.polygonOffsetFactor=-1,O.polygonOffsetUnits=-1,O instanceof _e&&(O.roughness=.5,O.metalness=.4,O.emissive=new Tt(0),O.emissiveIntensity=0,O.needsUpdate=!0)}});const b=new Mi(.05,.15,16),R=new we({color:16724787,side:Be,transparent:!0,opacity:.6,depthWrite:!1});this.impactMarker=new ut(b,R),this.impactMarker.rotation.x=-Math.PI/2,this.impactMarker.visible=!1,this.sceneMgr.scene.add(this.impactMarker);for(const M of n.bodies){const S=M;S.mesh&&e.scene.add(S.mesh),S.light&&e.scene.add(S.light)}const A=new Mr(8952268,1.5);A.position.set(-50,20,-30),e.scene.add(A),this.followLight=new Ba(16768460,3,15),this.followLight.position.set(0,2,0),this.rocketGroup.add(this.followLight),this.engineFlame=new Qy,this.positionFlameAtNozzle(),this.rocketGroup.add(this.engineFlame.getMesh()),this.exhaustLight=new Ba(16746564,0,20),this.exhaustLight.position.set(0,-1,0),this.rocketGroup.add(this.exhaustLight);const T=new de(2,16,16),F=new we({color:16746564,transparent:!0,opacity:0,depthWrite:!1});this.reentryGlowMesh=new ut(T,F),this.reentryGlowMesh.position.set(0,.5,0),this.reentryGlowMesh.visible=!1,this.rocketGroup.add(this.reentryGlowMesh),this.groundSmoke=new tx,this.rocketGroup.add(this.groundSmoke.getMesh());const v=new vr(.3*sr,32),w=new we({color:0,transparent:!0,opacity:.3,depthWrite:!1});this.rocketShadow=new ut(v,w),this.rocketShadow.rotation.x=-Math.PI/2,this.rocketShadow.position.y=-2,this.rocketGroup.add(this.rocketShadow);const U=new de(.3,16,12),D=new we({color:16737792,transparent:!0,opacity:0,blending:cn,depthWrite:!1});this.reentryGlow=new ut(U,D),this.rocketGroup.add(this.reentryGlow);const q=new de(.5,16,12),L=new we({color:16729088,transparent:!0,opacity:0,blending:cn,depthWrite:!1}),k=new ut(q,L);k.name="reentry-outer",this.rocketGroup.add(k);const W=new C().crossVectors(p,new C(0,1,0)).normalize(),K=Math.atan2(W.z,W.x);this.chase=new Wy(e.camera),this.chase.setAzimuth(K),this.chase.enableOrbit(this.renderer.domElement);const Y=-this.rocketBottomY-50*Nt+2,$=p.x*Y,J=p.y*Y,ct=p.z*Y;this.chase.initialiseAt(this.state,this.rocketQuat,p,{x:$,y:J,z:ct}),this._spawnProtectionTimer=120;const ht=this.state.position[0]*Nt+p.x*Y,X=this.state.position[1]*Nt+p.y*Y,et=this.state.position[2]*Nt+p.z*Y;e.camera.position.set(ht+10,X+3,et+10),e.camera.lookAt(ht,X,et),this.controls=new Xy(this.state),("ontouchstart"in window||navigator.maxTouchPoints>0)&&this.controls.enableTouch(),this.sound=new jy,this.hud=new qy,this.hud.onAction=M=>{M==="stage"?this.performStage():M==="parachute"?this.toggleParachute():M==="map"?(ft=!ft,Ct.style.display=ft?"block":"none",ft&&requestAnimationFrame(Et)):M==="resume"?(this.paused=!1,this.hud.setPaused(!1)):M==="menu"?this.onCrashAction?.("menu"):M==="restart"&&this.onCrashAction?.("restart")},this.hud.mount();let ft=!1,vt=1,St=0,Ot=0,Rt=null;const Ct=document.createElement("div");Ct.style.cssText="position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.95);display:none;";const Lt=document.createElement("canvas");Lt.style.cssText="position:absolute;inset:0;width:100%;height:100%;",Ct.appendChild(Lt),document.body.appendChild(Ct);const G=document.createElement("div");G.style.cssText="position:absolute;top:16px;left:16px;z-index:10;color:#EACD9E;font-family:monospace;font-size:12px;pointer-events:none;",G.innerHTML='<div id="map-zoom">ZOOM: 1x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>',Ct.appendChild(G),Ct.appendChild(Lt),document.body.appendChild(Ct),Lt.addEventListener("wheel",M=>{vt*=M.deltaY>0?.9:1.1,vt=Math.max(.05,Math.min(100,vt))}),Lt.addEventListener("mousedown",M=>{Rt={x:M.clientX,y:M.clientY}}),window.addEventListener("mouseup",()=>{Rt=null}),window.addEventListener("mousemove",M=>{Rt&&(St+=M.clientX-Rt.x,Ot+=M.clientY-Rt.y,Rt={x:M.clientX,y:M.clientY})}),Lt.addEventListener("touchstart",M=>{M.touches.length===1&&(Rt={x:M.touches[0].clientX,y:M.touches[0].clientY})}),Lt.addEventListener("touchmove",M=>{!Rt||M.touches.length!==1||(St+=M.touches[0].clientX-Rt.x,Ot+=M.touches[0].clientY-Rt.y,Rt={x:M.touches[0].clientX,y:M.touches[0].clientY})}),Lt.addEventListener("touchend",()=>{Rt=null}),Lt.addEventListener("dblclick",M=>{M.preventDefault();const S=Lt.getBoundingClientRect(),O=M.clientX-S.left,P=M.clientY-S.top,j=Lt.clientWidth,Z=Lt.clientHeight,Mt=j/2+St,nt=Z/2+Ot;let gt=1;for(const Bt of this.system.bodies){const zt=(Bt.position[0]-this.state.position[0])*Nt,Dt=(Bt.position[2]-this.state.position[2])*Nt,xt=Math.sqrt(zt*zt+Dt*Dt);xt>gt&&(gt=xt)}const It=Math.min(j,Z)*.4/gt*vt;let Pt=null,tt=25;for(const Bt of this.system.bodies){const zt=Mt+(Bt.position[0]-this.state.position[0])*It,Dt=nt-(Bt.position[2]-this.state.position[2])*It,xt=Math.sqrt((O-zt)**2+(P-Dt)**2);xt<tt&&(tt=xt,Pt=Bt.name)}if(Pt){const Bt=this.system.bodyByName(Pt);if(Bt){const zt=Pt==="earth"?20:Pt==="moon"?50:3;St=-(Bt.position[0]-this.state.position[0])*It,Ot=(Bt.position[2]-this.state.position[2])*It,vt=zt,ke.show(`${Pt}: ${(Bt.mass??0).toExponential(2)}kg R=${(Bt.radius??0)/1e3}km`)}}});let Se=0;const Et=()=>{if(!ft)return;if(Se++,Se%5!==0){requestAnimationFrame(Et);return}const M=window.devicePixelRatio||1,S=Lt.clientWidth,O=Lt.clientHeight;Lt.width=S*M,Lt.height=O*M;const P=Lt.getContext("2d");P.setTransform(M,0,0,M,0,0),P.fillStyle="#060814",P.fillRect(0,0,S,O);const j=S/2+St,Z=O/2+Ot;let Mt=1;for(const it of this.system.bodies){const jt=(it.position[0]-this.state.position[0])*Nt,Wt=(it.position[2]-this.state.position[2])*Nt,Ee=Math.sqrt(jt*jt+Wt*Wt);Ee>Mt&&(Mt=Ee)}const nt=Math.min(S,O)*.4/Mt*vt,gt={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",mercury:"#c0c0c0",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",pluto:"#ddccbb",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",phobos:"#bb9988",deimos:"#887766"},It={sun:12,earth:7,moon:3,venus:5,mars:5,mercury:3,jupiter:10,saturn:9,uranus:6,neptune:5,pluto:2},Pt=this.system.bodyByName("sun")?.position;if(Pt)for(const it of this.system.bodies){if(it.name==="sun"||it.name==="moon")continue;const jt=[it.position[0]-Pt[0],it.position[1]-Pt[1],it.position[2]-Pt[2]];if(it.velocity){const Wt=Js(jt,it.velocity,this.system.bodyByName("sun").mass,5e14,180);if(Wt.points.length>10){P.beginPath(),P.strokeStyle=gt[it.name]+"30",P.lineWidth=1,P.setLineDash([3,6]);const Ee=j+(Wt.points[0][0]+Pt[0])*nt,ye=Z-(Wt.points[0][1]+Pt[2])*nt;P.moveTo(Ee,ye);for(let bt=1;bt<Wt.points.length;bt+=2){const qt=j+(Wt.points[bt][0]+Pt[0])*nt,re=Z-(Wt.points[bt][1]+Pt[2])*nt;P.lineTo(qt,re)}P.stroke(),P.setLineDash([])}}}for(const it of this.system.bodies){const jt=j+(it.position[0]-this.state.position[0])*nt,Wt=Z-(it.position[2]-this.state.position[2])*nt,Ee=It[it.name]||3;P.beginPath(),P.arc(jt,Wt,Ee,0,Math.PI*2),P.fillStyle=gt[it.name]||"#888",P.fill(),P.font="bold 10px monospace",P.fillStyle="#F4F5F2",P.fillText(it.name.toUpperCase(),jt+Ee+5,Wt+4)}const tt=this.system.bodyByName("sun");for(const it of this.system.bodies){if(it.name==="sun"||it.mass<=0||!tt||it.name===tt.name)continue;const jt=(it.position[0]-tt.position[0])*Nt,Wt=(it.position[2]-tt.position[2])*Nt,Ee=Math.sqrt(jt*jt+Wt*Wt);if(Ee<1)continue;const ye=Ee*Math.pow(it.mass/tt.mass,.4),bt=j+(it.position[0]-this.state.position[0])*nt,qt=Z-(it.position[2]-this.state.position[2])*nt;P.beginPath(),P.arc(bt,qt,ye*nt,0,Math.PI*2),P.setLineDash([4,4]),P.strokeStyle=(gt[it.name]||"#888")+"44",P.lineWidth=.8,P.stroke(),P.setLineDash([])}const Bt=80,zt=3,Dt=S-Bt-15,xt=O-30,Gt=Mt*2/Math.min(S,O)*vt*Bt,ie=Math.pow(10,Math.floor(Math.log10(Gt))),pe=Bt*(ie/Gt);P.fillStyle="rgba(244,245,242,0.4)",P.fillRect(Dt,xt,pe,zt),P.strokeStyle="rgba(244,245,242,0.5)",P.lineWidth=.5,P.strokeRect(Dt,xt,pe,zt),P.fillStyle="rgba(244,245,242,0.4)",P.font="8px monospace",P.fillText(`${ie>=1e3?(ie/1e3).toFixed(0)+"Mkm":ie.toFixed(0)+"km"}`,Dt,xt-2);const kt=30,ot=O-35,I=12;P.strokeStyle="rgba(244,245,242,0.25)",P.lineWidth=1,P.beginPath(),P.arc(kt,ot,I,0,Math.PI*2),P.stroke(),P.beginPath(),P.moveTo(kt,ot-I-5),P.lineTo(kt,ot+I+5),P.moveTo(kt-I-5,ot),P.lineTo(kt+I+5,ot),P.stroke(),P.fillStyle="rgba(244,245,242,0.4)",P.font="bold 8px monospace",P.fillText("N",kt-3,ot-I-7),P.fillStyle="rgba(244,245,242,0.2)",P.fillText("S",kt-3,ot+I+12),P.fillText("W",kt-I-12,ot+3),P.fillText("E",kt+I+7,ot+3);const at=j,lt=Z,Ft=this.state.velocity[0]||0,Ut=this.state.velocity[2]||0,ce=Math.sqrt(Ft*Ft+Ut*Ut),z=ce>.1?Math.atan2(Ut,Ft):0;if(P.save(),P.translate(at,lt),P.rotate(-z),P.beginPath(),P.moveTo(8,0),P.lineTo(0,-4),P.lineTo(-5,0),P.lineTo(0,4),P.closePath(),P.fillStyle="#EACD9E",P.fill(),P.strokeStyle="#EACD9E",P.lineWidth=1.5,P.stroke(),P.restore(),ce>.1){const it=Math.min(30,10+ce*nt*2);P.beginPath(),P.moveTo(at,lt),P.lineTo(at+Math.cos(z)*it,lt-Math.sin(z)*it),P.strokeStyle="rgba(234,205,158,0.6)",P.lineWidth=1.5,P.stroke(),P.beginPath(),P.moveTo(at+Math.cos(z)*it,lt-Math.sin(z)*it),P.lineTo(at+Math.cos(z+.4)*(it-5),lt-Math.sin(z+.4)*(it-5)),P.lineTo(at+Math.cos(z-.4)*(it-5),lt-Math.sin(z-.4)*(it-5)),P.closePath(),P.fillStyle="rgba(234,205,158,0.6)",P.fill()}const Q=je(this.state.position,this.system),st=[(this.state.position[0]-Q.position[0])*Nt,(this.state.position[1]-Q.position[1])*Nt,(this.state.position[2]-Q.position[2])*Nt],rt=this.system.bodyByName("sun");if(rt){const it=(rt.position[0]-this.state.position[0])*nt,jt=(rt.position[2]-this.state.position[2])*nt,Wt=Math.sqrt(it*it+jt*jt);Wt>1&&(P.beginPath(),P.moveTo(at+it/Wt*12,lt-jt/Wt*12),P.lineTo(at+it/Wt*Math.min(Wt,60),lt-jt/Wt*Math.min(Wt,60)),P.strokeStyle="rgba(255,220,68,0.15)",P.lineWidth=2,P.setLineDash([3,6]),P.stroke(),P.setLineDash([]),P.beginPath(),P.arc(at+it/Wt*Math.min(Wt,60),lt-jt/Wt*Math.min(Wt,60),3,0,Math.PI*2),P.fillStyle="rgba(255,220,68,0.3)",P.fill())}const dt=Js(st,this.state.velocity,Q.mass,5e14,360);if(dt.points.length>1){P.beginPath(),P.strokeStyle=dt.bound?"rgba(68,136,204,0.15)":"rgba(221,170,68,0.15)",P.lineWidth=8;const it=j+dt.points[0][0]*nt,jt=Z-dt.points[0][1]*nt;P.moveTo(it,jt);for(let bt=1;bt<dt.points.length;bt++){const qt=j+dt.points[bt][0]*nt,re=Z-dt.points[bt][1]*nt;P.lineTo(qt,re)}P.stroke();const Wt=P.createLinearGradient(it,jt,j+dt.points[dt.points.length-1][0]*nt,Z-dt.points[dt.points.length-1][1]*nt),Ee=dt.bound?"rgba(68,136,204,0.9)":"rgba(221,170,68,0.9)",ye=dt.bound?"rgba(68,136,204,0.2)":"rgba(221,170,68,0.2)";Wt.addColorStop(0,Ee),Wt.addColorStop(1,ye),P.beginPath(),P.strokeStyle=Wt,P.lineWidth=2.5,P.moveTo(it,jt);for(let bt=1;bt<dt.points.length;bt++){const qt=j+dt.points[bt][0]*nt,re=Z-dt.points[bt][1]*nt;P.lineTo(qt,re)}if(P.stroke(),dt.points.length>4){const bt=dt.points[dt.points.length-1],qt=dt.points[dt.points.length-2],re=bt[0]-qt[0],Vt=bt[1]-qt[1],me=Math.sqrt(re*re+Vt*Vt)||1,Pe=j+bt[0]*nt,E=Z-bt[1]*nt,N=8;P.beginPath(),P.moveTo(Pe,E),P.lineTo(Pe-re/me*N+Vt/me*N*.4,E+Vt/me*N+re/me*N*.4),P.lineTo(Pe-re/me*N-Vt/me*N*.4,E+Vt/me*N-re/me*N*.4),P.closePath(),P.fillStyle=dt.bound?"rgba(68,136,204,0.6)":"rgba(221,170,68,0.6)",P.fill()}if(dt.bound&&isFinite(dt.apoapsis)&&isFinite(dt.periapsis)){const bt=j+dt.apoapsis*nt,qt=j+dt.periapsis*nt;P.beginPath(),P.arc(bt,Z,4,0,Math.PI*2),P.fillStyle="#FF8844",P.fill(),P.font="bold 9px monospace",P.fillStyle="#FF8844",P.fillText("Ap",bt+6,Z+3),P.beginPath(),P.arc(qt,Z,4,0,Math.PI*2),P.fillStyle="#44DD88",P.fill(),P.fillStyle="#44DD88",P.fillText("Pe",qt+6,Z+3)}if(dt.points.length>2){const bt=dt.points[dt.points.length-1],qt=j+bt[0]*nt,re=Z-bt[1]*nt,Vt=Q.position[0]*Nt+bt[0],me=Q.position[2]*Nt+bt[1];let Pe="",E=20;for(const N of this.system.bodies){if(N.name===Q.name||N.mass<=0)continue;const H=Math.sqrt((Vt-N.position[0]*Nt)**2+(me-N.position[2]*Nt)**2);H<E&&(E=H,Pe=N.name)}Pe&&(P.font="bold 10px monospace",P.fillStyle="#EACD9E",P.fillText("→ "+Pe.toUpperCase(),qt+8,re-4))}if(dt.points.length>2){const bt=dt.points[dt.points.length-1],qt=Q.position[0]*Nt+bt[0],re=Q.position[2]*Nt+bt[1];let Vt="",me=30;for(const Pe of this.system.bodies){if(Pe.name===Q.name||Pe.mass<=0)continue;const E=Pe.position[0]*Nt,N=Pe.position[2]*Nt,H=Math.sqrt((qt-E)**2+(re-N)**2);H<me&&(me=H,Vt=Pe.name)}if(Vt){const Pe=j+bt[0]*nt,E=Z-bt[1]*nt;P.font="bold 10px monospace",P.fillStyle="#EACD9E",P.fillText("→ "+Vt.toUpperCase(),Pe+10,E-5)}}}P.fillStyle="rgba(244,245,242,0.3)",P.font="9px sans-serif",P.fillText(`${(Mt/1e3).toFixed(0)} km | Zoom: ${vt.toFixed(1)}x`,10,O-10),requestAnimationFrame(Et)};window.addEventListener("keydown",M=>{(M.key==="m"||M.key==="Tab")&&(ft=!ft,Ct.style.display=ft?"block":"none",ft&&requestAnimationFrame(Et),M.preventDefault())}),window.addEventListener("keydown",M=>{if(M.key==="q"||M.key==="["){if(this.paused)return;this.warpIndex=Math.max(0,this.warpIndex-1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),M.preventDefault()}else if(M.key==="e"||M.key==="]"){if(this.paused)return;this.warpIndex=Math.min(this.warpLevels.length-1,this.warpIndex+1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),M.preventDefault()}else if(M.key==="p"){if(i.assembly.roots.some(O=>O.part.kind==="parachute")||i.assembly.roots.some(O=>O.children.some(P=>P.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const O={radius:.6*le,height:1*le};this.deployedChuteMesh=Wa(O),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);ke.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}M.preventDefault()}else M.key==="g"?(this.toggleGear(),M.preventDefault()):M.key==="f"?(this.chase.reset(),ke.show("Camera view reset"),M.preventDefault()):M.key==="c"&&!M.ctrlKey&&!M.metaKey?(this.cameraMode=this.cameraMode==="chase"?"free":"chase",this.hud.setFreeCamera(this.cameraMode==="free"),ke.show(this.cameraMode==="free"?"Free camera":"Chase camera"),M.preventDefault()):M.key==="F1"&&(M.preventDefault(),this.hudVisible=!this.hudVisible,this.hud.setVisible(this.hudVisible),ke.show(this.hudVisible?"HUD shown":"HUD hidden"));this.cameraMode==="free"&&(M.key==="ArrowUp"&&(this.freeCamKeys.up=!0,M.preventDefault()),M.key==="ArrowDown"&&(this.freeCamKeys.down=!0,M.preventDefault()),M.key==="ArrowLeft"&&(this.freeCamKeys.left=!0,M.preventDefault()),M.key==="ArrowRight"&&(this.freeCamKeys.right=!0,M.preventDefault()))}),window.addEventListener("keyup",M=>{M.key==="ArrowUp"&&(this.freeCamKeys.up=!1),M.key==="ArrowDown"&&(this.freeCamKeys.down=!1),M.key==="ArrowLeft"&&(this.freeCamKeys.left=!1),M.key==="ArrowRight"&&(this.freeCamKeys.right=!1)});const Ht=this.renderer.domElement,_t=(M,S)=>{this.cameraMode==="free"&&(this.freeCamDragging=!0,this.freeCamPrevMouse={x:M,y:S})},fe=(M,S)=>{if(!this.freeCamDragging||this.cameraMode!=="free")return;const O=M-this.freeCamPrevMouse.x,P=S-this.freeCamPrevMouse.y;this.freeCamAzimuth-=O*.005,this.freeCamPolar=Math.max(.05,Math.min(Math.PI-.05,this.freeCamPolar+P*.005)),this.freeCamPrevMouse={x:M,y:S}},Kt=()=>{this.freeCamDragging=!1};Ht.addEventListener("mousedown",M=>_t(M.clientX,M.clientY)),window.addEventListener("mousemove",M=>fe(M.clientX,M.clientY)),window.addEventListener("mouseup",Kt),Ht.addEventListener("touchstart",M=>{M.touches.length===1&&M.touches[0]&&_t(M.touches[0].clientX,M.touches[0].clientY)},{passive:!0}),Ht.addEventListener("touchmove",M=>{M.touches.length===1&&M.touches[0]&&fe(M.touches[0].clientX,M.touches[0].clientY)},{passive:!0}),Ht.addEventListener("touchend",Kt),Ht.addEventListener("wheel",M=>{this.cameraMode==="free"&&(M.preventDefault(),this.freeCamDist*=M.deltaY>0?1.1:.9,this.freeCamDist=Math.max(.5,Math.min(500,this.freeCamDist)))},{passive:!1}),this.achievements.unlock("first_launch"),ke.show("You are at the launchpad. W/S throttle, ↑↓ pitch, ←→ yaw, C camera, T SAS, Esc pause.")}sanitize(t){isFinite(t[0])||(t[0]=0),isFinite(t[1])||(t[1]=0),isFinite(t[2])||(t[2]=0)}countStages(t){let e=0;for(const n of t)n.part.kind==="decoupler"&&e++,e+=this.countStages(n.children);return e}computeStageData(){const t=this.rocket.assembly.roots;if(t.length===0)return[];const e=[];for(let r=0;r<t.length;r++)t[r].part.kind==="decoupler"&&e.push(r);const n=[];let i=0;for(let r=0;r<=e.length;r++){const a=r<e.length?e[r]:t.length,l=[];for(let c=i;c<a;c++)l.push(t[c]);if(l.length>0){const c=this.isChunkSpent(l);n.push({parts:l,active:!c,spent:c})}i=a+1}let s=0;for(let r=0;r<n.length;r++){if(!n[r].spent){s=r;break}s=r}return n.map((r,a)=>{let l=0,c=0;for(const g of r.parts)if(l+=g.part.mass,g.part.fuelCapacity){const _=this.rocket.fuelTanks.find(m=>m.node===g);c+=_?_.remaining:g.part.fuelCapacity}const d=r.parts.filter(g=>g.part.kind==="engine").length,h=r.parts.filter(g=>g.part.fuelCapacity).length,f=d>0?`${d}E ${h}T`:r.parts.length===1?r.parts[0].part.name||"C":`${r.parts.length}P`;return{label:`S${a+1}: ${f}`,fuelMass:c,dryMass:l,active:a===s,spent:r.spent}})}isChunkSpent(t){if(!t.some(n=>n.part.kind==="engine"))return!1;for(const n of t)if(n.part.fuelCapacity){const i=this.rocket.fuelTanks.find(s=>s.node===n);if(i&&i.remaining>.01)return!1}return!0}update(t){try{this.updateInner(t)}catch(e){ke.show(`ERROR: ${e.message||e}`),console.error("FlightScene.update error:",e)}}updateInner(t){const e=t;if(this._spawnProtectionTimer>0&&(this._spawnProtectionTimer-=1),this.controls.consumePauseToggle()&&(this.paused=!this.paused,this.hud.setPaused(this.paused),this.paused&&this.sound.stopEngine()),this.paused){this.system.propagate(0,ua);for(const z of this.system.bodies)z.syncMesh?.();return}if(this.crashed){this.system.propagate(t*this.timeWarp,ua);for(const z of this.system.bodies)z.syncMesh?.();this.updateExplosion(e);return}this.missionTime+=e,this.missionTime=Math.min(this.missionTime,99999),t*=this.timeWarp,(!isFinite(t)||t<=0)&&(t=1/60),this.controls.update(e),this.controls.getZoomIn()&&this.chase.zoom(.92),this.controls.getZoomOut()&&this.chase.zoom(1.08);const n=this.timeWarp>1;n&&(this.state.throttle=0),this.cameraMode==="free"&&(this.state.throttle=0),!n&&this.controls.getStageRequested()&&this.performStage(),!n&&!this.grounded&&this.state.throttle>0&&(!Xa(this.state.rocket.assembly.roots)||this.state.rocket.totalFuelMass()<.1)&&this.state.rocket.assembly.roots.some(st=>st.part.kind==="decoupler"||st.children.some(rt=>rt.part.kind==="decoupler"))&&this.performStage();const i=this.state.throttle>0,s=this.cameraMode==="free",r=n||s?0:this.controls.getPitch(),a=n||s?0:this.controls.getYaw();n||this.controls.getRoll();const l=new C(0,1,0).applyQuaternion(this.rocketQuat);new C(1,0,0).applyQuaternion(this.rocketQuat);const c=je(this.state.position,this.system),d=this.state.position[0]-c.position[0],h=this.state.position[1]-c.position[1],u=this.state.position[2]-c.position[2],f=Math.sqrt(d*d+h*h+u*u)||1,g=new C(d/f,h/f,u/f),_=new C().crossVectors(l,g);_.length()<.001?(_.set(-g.z,0,g.x).normalize(),_.length()<.001&&_.set(1,0,0)):_.normalize();const p=this.ANGULAR_ACCEL*e,y=new hn().setFromAxisAngle(g,a*p),x=new hn().setFromAxisAngle(_,r*p*1.2);if(this.rocketQuat.multiply(y).multiply(x),this.rocketQuat.normalize(),this.sasMode!=="off"&&!n){if(this.sasMode==="prograde"||this.sasMode==="retrograde"){const st=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(st>.1){let rt=new C(this.state.velocity[0]/st,this.state.velocity[1]/st,this.state.velocity[2]/st);this.sasMode==="retrograde"&&rt.negate(),this.sasTargetQuat.setFromUnitVectors(new C(0,1,0),rt)}}const z=new hn().copy(this.sasTargetQuat).invert().multiply(this.rocketQuat),Q=2*Math.acos(Math.abs(z.w));if(Q>.001){const st=new C(z.x,z.y,z.z).normalize();this.angularVel.x-=st.x*Q*3*e,this.angularVel.y-=st.y*Q*3*e,this.angularVel.z-=st.z*Q*3*e}this.angularVel.multiplyScalar(Math.exp(-5*e))}this.rocketGroup.quaternion.copy(this.rocketQuat);const b=l,R=b.x,A=b.y,T=b.z;let F=!1;if(this.countdownCooldown>0&&(this.countdownCooldown-=e),i&&this.grounded&&(!this.countdownActive&&!this.launched&&this.countdownCooldown<=0&&(this.countdownActive=!0,this.countdownTimer=0,this.showCountdown("3")),this.countdownActive)){if(this.countdownTimer+=e,this.countdownTimer>=1&&this.countdownTimer<2)this.showCountdown("2");else if(this.countdownTimer>=2&&this.countdownTimer<3)this.showCountdown("1");else if(this.countdownTimer>=3){this.countdownActive=!1,this.launched=!0;const z=Xa(this.state.rocket.assembly.roots),Q=je(this.state.position,this.system),st=this.state.position[0]-Q.position[0],rt=this.state.position[1]-Q.position[1],dt=this.state.position[2]-Q.position[2],it=Math.sqrt(st*st+rt*rt+dt*dt)||1,jt=Ts*Q.mass/(it*it);if(z&&z.thrust&&jt>0){const Wt=z.thrust*1e3*this.state.throttle/(this.state.rocket.totalMass()*jt);Wt>=1?F=!0:(ke.show(`TWR ${Wt.toFixed(2)} — need more throttle!`),this.launched=!1,this.countdownTimer=0,this.countdownCooldown=5)}F&&(this.showCountdown("LIFTOFF!"),setTimeout(()=>this.hideCountdown(),1500))}}if(i&&(!this.grounded||F)&&(Yy(this.state,t,[R,A,T]),this.sanitize(this.state.velocity)),i&&F&&this.grounded&&(this.grounded=!1,this.groundedDir=null,this.liftoffFrames=5,this.launched=!0,this._camSnapped=!1,this.achievements.unlock("reach_space"),this.sound.startEngine()),i){this.sound.setThrottle(this.state.throttle),this.engineFlame.setThrottle(this.state.throttle),this.engineFlame.start();const z=je(this.state.position,this.system),Q=this.state.position[0]-z.position[0],st=this.state.position[1]-z.position[1],rt=this.state.position[2]-z.position[2],dt=Math.sqrt(Q*Q+st*st+rt*rt)||1,it=z.getSurfaceRadiusAt?.(this.state.position)??z.radius??6371e3;this.engineFlame.setVacuum(dt-it>5e4)}else this.sound.setThrottle(0),this.engineFlame.stop();this.engineFlame.update(e),this.exhaustLight&&(this.exhaustLight.intensity=this.state.throttle*3,this.exhaustLight.color.setHSL(.08-this.state.throttle*.05,1,.5+this.state.throttle*.3)),i&&this.grounded?this.groundSmoke.start():this.groundSmoke.stop(),this.groundSmoke.update(e),this.grounded||(this.state.position[0]+=this.state.velocity[0]*t,this.state.position[1]+=this.state.velocity[1]*t,this.state.position[2]+=this.state.velocity[2]*t);let v=null,w=1/0;const U=je(this.state.position,this.system),D=U.name;this.lastRefBody&&this.lastRefBody!==D&&ke.show(`Entering ${D.toUpperCase()} SOI`),this.lastRefBody=D;const q=U.position[0]-this.state.position[0],L=U.position[1]-this.state.position[1],k=U.position[2]-this.state.position[2];w=Math.sqrt(q*q+L*L+k*k),v=U;const W=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(!this.grounded&&!n&&W>5&&v&&v.radius){const z=w-v.radius;if(z>0&&z<7e4){const Q=Math.exp(-z/8500),st=new C(this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]).normalize(),rt=new C(0,1,0).applyQuaternion(this.rocketQuat);if(Math.abs(rt.dot(st))<.99){const it=new hn().setFromUnitVectors(rt,st);this.rocketQuat.slerp(it,Q*.1*e),this.rocketQuat.normalize()}}}if(!this.grounded&&v&&v.radius){const z=w-v.radius;if(z>0&&z<12e4&&W>2e3){const Q=Math.max(0,1-z/12e4)*Math.min(1,W/8e3);if(this.reentryGlow){this.reentryGlow.material.color.setHSL(.05,1,.7*Q),this.reentryGlow.material.opacity=.4*Q,this.reentryGlow.scale.setScalar(1+Q*2);const st=this.rocketGroup.getObjectByName("reentry-outer");st&&(st.material.color.setHSL(.03,1,.4*Q),st.material.opacity=.2*Q,st.scale.setScalar(1+Q*4))}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const Q=this.rocketGroup.getObjectByName("reentry-outer");Q&&(Q.material.opacity=0)}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const z=this.rocketGroup.getObjectByName("reentry-outer");z&&(z.material.opacity=0)}if(this.liftoffFrames>0&&this.liftoffFrames--,this.grounded)this.state.velocity=[0,0,0];else{const z=q,Q=L,st=k,rt=w,dt=rt*rt;if(rt>1&&dt>0){const qt=Ts*U.mass/dt*t;this.state.velocity[0]+=qt*z/rt,this.state.velocity[1]+=qt*Q/rt,this.state.velocity[2]+=qt*st/rt}this.sanitize(this.state.velocity);const it=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),jt=this.state.rocket.totalMass();let Wt=jt*.001+.2;if(this.parachuteDeployed?Wt=50:this.gearDeployed&&(Wt*=2.5),v&&v.radius&&it>.05&&it<1e6){const bt=w-v.radius;if(bt>0&&bt<3e5){const qt=1.225*Math.exp(-bt/8500),Pe=.5*qt*it*it*Wt/jt*t;if(Pe>=it)this.state.velocity[0]=0,this.state.velocity[1]=0,this.state.velocity[2]=0;else{const H=1-Pe/it;this.state.velocity[0]*=H,this.state.velocity[1]*=H,this.state.velocity[2]*=H}this.sanitize(this.state.velocity);const E=Math.max(0,it/2e3*(qt/1.225)-.1);if(E>.05&&this.reentryGlowMesh){this.reentryGlowMesh.visible=!0,this.reentryGlowMesh.scale.setScalar(1+E*2),this.reentryGlowMesh.material.opacity=Math.min(1,E);const H=E>.8?16777215:E>.5?16763972:16746564;this.reentryGlowMesh.material.color.setHex(H)}else this.reentryGlowMesh&&(this.reentryGlowMesh.visible=!1);if(this.lastReentryIntensity=E,E>.1)this.rocketGroup.traverse(H=>{const V=H;if(!V.isMesh)return;const B=V.material;if(!B||!B.emissive)return;const pt=Math.min(1,this.heatEnergy/3e5),wt=pt*.9,At=pt*pt*.5,Xt=pt*pt*pt*.15;B.emissive.setRGB(wt,At,Xt),B.emissiveIntensity=pt*1.5});else if(this.heatEnergy>0){const H=Math.min(1,this.heatEnergy/3e5);this.rocketGroup.traverse(V=>{const B=V;if(!B.isMesh)return;const pt=B.material;!pt||!pt.emissive||(pt.emissive.setRGB(H*.4,0,0),pt.emissiveIntensity=H*.5)})}else this.heatEnergy<1&&this.rocketGroup.traverse(H=>{const V=H;if(!V.isMesh)return;const B=V.material;!B||!B.emissive||B.emissiveIntensity>0&&(B.emissive.setRGB(0,0,0),B.emissiveIntensity=0)});const N=.5*qt*it*it*it*1e-6/4;this.heatEnergy+=N*e}}this.reentryGlowMesh&&(v&&v.radius&&w-v.radius<3e5||(this.reentryGlowMesh.visible=!1)),this.grounded||(this.heatEnergy>0&&(this.heatEnergy*=this.HEAT_RADIATION_RATE,this.heatEnergy<1&&(this.heatEnergy=0)),this.heatEnergy>this.MAX_HEAT&&(this.crashed=!0,ke.show(`OVERHEATED! Ship disintegrated at ${this.heatEnergy.toFixed(0)}J`)));const Ee=v?v.radius??0:0,ye=v?v.getSurfaceRadiusAt?.(this.state.position)??Ee:0;if(v&&Ee>0&&isFinite(w)&&this._spawnProtectionTimer<=0){const bt=this.state.position[0]-v.position[0],qt=this.state.position[1]-v.position[1],re=this.state.position[2]-v.position[2],Vt=Math.sqrt(bt*bt+qt*qt+re*re),me=(this.state.velocity[0]*bt+this.state.velocity[1]*qt+this.state.velocity[2]*re)/Vt;if(Vt<ye)this.doCrash(`Impact on ${v.name}`,v,bt,qt,re,Vt,ye);else if(Vt<ye+200&&Vt>.001&&this.liftoffFrames<=0){const Pe=new C(bt/Vt,qt/Vt,re/Vt),E=new C(0,1,0).applyQuaternion(this.rocketQuat),N=Math.acos(Math.min(1,Math.abs(E.dot(Pe))))*180/Math.PI,H=this.hasLandingLegs(),V=this.parachuteDeployed?15:20,B=this.parachuteDeployed?8:5,pt=H?60:45;if(isFinite(me)&&Math.abs(me)>V)this.doCrash(`Too fast! (${Math.abs(me).toFixed(0)} m/s) on ${v.name}`,v,bt,qt,re,Vt,ye);else if(N>pt)this.doCrash(`Tipped over! (${N.toFixed(0)}°) on ${v.name}`,v,bt,qt,re,Vt,ye);else if(isFinite(me)&&Math.abs(me)<B){this.state.velocity=[0,0,0],this.grounded=!0,this.groundedDir=[bt/Vt,qt/Vt,re/Vt];const wt=new C(bt/Vt,qt/Vt,re/Vt);if(this.rocketQuat.setFromUnitVectors(new C(0,1,0),wt),this.state.position[0]!==v.position[0]+bt/Vt*(ye+50)||this.state.position[1]!==v.position[1]+qt/Vt*(ye+50)||this.state.position[2]!==v.position[2]+re/Vt*(ye+50)){this.state.position=[v.position[0]+bt/Vt*(ye+50),v.position[1]+qt/Vt*(ye+50),v.position[2]+re/Vt*(ye+50)],this.sound.playLand(),this.sound.stopEngine();const At=v.name;ke.show(`Landed on ${At}!`),At==="earth"?this.achievements.unlock("land_earth"):At==="moon"?this.achievements.unlock("land_moon"):At==="mars"?this.achievements.unlock("land_mars"):At==="venus"?this.achievements.unlock("land_venus"):At==="mercury"&&this.achievements.unlock("land_mercury")}}else if(isFinite(me)){this.state.velocity=[0,0,0],this.state.position=[v.position[0]+bt/Vt*(ye+50),v.position[1]+qt/Vt*(ye+50),v.position[2]+re/Vt*(ye+50)],this.grounded=!0,this.groundedDir=[bt/Vt,qt/Vt,re/Vt];const wt=new C(bt/Vt,qt/Vt,re/Vt);this.rocketQuat.setFromUnitVectors(new C(0,1,0),wt),this.screenShake=Math.abs(me)*.05,this.sound.playLand(),this.sound.stopEngine();const At=v.name;ke.show(`Rough landing on ${At}! (${Math.abs(me).toFixed(1)} m/s)`),At==="earth"?this.achievements.unlock("land_earth"):At==="moon"&&this.achievements.unlock("land_moon")}}else Vt<ye+250&&isFinite(me)&&Math.abs(me)>5e4&&this.doCrash(`High-speed impact! (${Math.abs(me).toFixed(0)} m/s) on ${v.name}`,v,bt,qt,re,Vt,ye)}}if(this.system.propagate(t,ua),this.grounded&&this.groundedDir){const z=je(this.state.position,this.system),Q=z.radius??6371e3,st=[z.position[0]+this.groundedDir[0],z.position[1]+this.groundedDir[1],z.position[2]+this.groundedDir[2]],dt=(z.getSurfaceRadiusAt?.(st)??Q)+50;this.state.position[0]=z.position[0]+this.groundedDir[0]*dt,this.state.position[1]=z.position[1]+this.groundedDir[1]*dt,this.state.position[2]=z.position[2]+this.groundedDir[2]*dt}if(this.grounded){const z=je(this.state.position,this.system),Q=this.state.position[0]-z.position[0],st=this.state.position[1]-z.position[1],rt=this.state.position[2]-z.position[2],dt=Math.sqrt(Q*Q+st*st+rt*rt),it=z.radius??6371e3;dt>it*1.1&&(this.state.velocity=[0,0,0],this.state.position[0]=z.position[0]+Q/dt*(it+50),this.state.position[1]=z.position[1]+st/dt*(it+50),this.state.position[2]=z.position[2]+rt/dt*(it+50))}for(const z of this.system.bodies)z.syncMesh?.();const K=je(this.state.position,this.system),Y=this.state.position[0]-K.position[0],$=this.state.position[1]-K.position[1],J=this.state.position[2]-K.position[2],ct=Math.sqrt(Y*Y+$*$+J*J)-(K.radius??6371e3),ht=Math.max(.05,Math.min(1,ct/5e4));for(const z of this.system.bodies){const Q=z;if(!(!Q.mesh||Q.name==="earth"||Q.name==="sun")&&Q.mesh.material){const st=Array.isArray(Q.mesh.material)?Q.mesh.material:[Q.mesh.material];for(const rt of st)rt.transparent!==void 0&&(rt.transparent=!0,rt.opacity=ht,rt.needsUpdate=!0)}}const X=this.system.bodyByName("sun");if(X&&X.mesh){const z=X.mesh.position;for(const Q of this.system.bodies){const st=Q;st.atmosphereGlow&&st.mesh&&st.atmosphereGlow.setSunDirection(z,st.mesh.position)}}const et=this.system.bodyByName("earth");if(et&&"updateClouds"in et){const z=this.system.bodyByName("sun"),Q=z?z.position:void 0;et.updateClouds(e,Q)}if(this.debris.length>0){const z=je(this.state.position,this.system);for(let Q=this.debris.length-1;Q>=0;Q--){const st=this.debris[Q];if(st.life-=e,st.life<=0||st.body.mass<=0){this.sceneMgr.scene.remove(st.mesh),this.debris.splice(Q,1);continue}const rt=_u(st.body,this.system.bodies);st.body.applyForce(rt,e),st.mesh.position.set(st.body.position[0]*Nt,st.body.position[1]*Nt,st.body.position[2]*Nt);const dt=st.body.position[0]-z.position[0],it=st.body.position[1]-z.position[1],jt=st.body.position[2]-z.position[2],Wt=Math.sqrt(dt*dt+it*it+jt*jt),Ee=z.getSurfaceRadiusAt?.(st.body.position)??z.radius??6371e3;Wt<Ee&&(this.sceneMgr.scene.remove(st.mesh),this.debris.splice(Q,1))}}this.updateExplosion(e);const ft=je(this.state.position,this.system),vt=this.state.position[0]-ft.position[0],St=this.state.position[1]-ft.position[1],Ot=this.state.position[2]-ft.position[2],Rt=Math.sqrt(vt*vt+St*St+Ot*Ot)||1,Ct=new C(vt/Rt,St/Rt,Ot/Rt);if(this.rocketShadow&&(this.rocketShadow.visible=!1),this._debugMarker&&this._debugMarker.position.copy(this.rocketGroup.position),!this.crashed){const z=-this.rocketBottomY-50*Nt+2,Q=je(this.state.position,this.system),st=this.state.position[0]-Q.position[0],rt=this.state.position[1]-Q.position[1],dt=this.state.position[2]-Q.position[2],it=Math.sqrt(st*st+rt*rt+dt*dt)||1;if(!this._debugShown){this._debugShown=!0;const jt=document.createElement("div");jt.style.cssText="position:fixed;top:120px;right:16px;z-index:600;font-family:monospace;font-size:11px;color:#0f0;background:rgba(0,0,0,0.85);padding:8px;border-radius:4px;pointer-events:none;max-width:300px;",jt.id="rocket-debug",jt.innerHTML="v2.3<br>C=freecam F=reset T=SAS W=throttle",document.body.appendChild(jt),console.log("ROCKET DEBUG:",{rocketBottomY:this.rocketBottomY,visualOffset:z,VISUAL_SCALE:Nt,ROCKET_VISUAL_SCALE:sr,earthVisualR:6371e3*Nt,rocketGroupPos:this.rocketGroup.position.toArray(),statePos:this.state.position})}if(this.rocketGroup.position.set(this.state.position[0]*Nt+st/it*z,this.state.position[1]*Nt+rt/it*z,this.state.position[2]*Nt+dt/it*z),this.cameraMode==="free"){this.freeCamKeys.left&&(this.freeCamAzimuth+=3*e),this.freeCamKeys.right&&(this.freeCamAzimuth-=3*e),this.freeCamKeys.up&&(this.freeCamPolar=Math.max(.05,this.freeCamPolar-3*.7*e)),this.freeCamKeys.down&&(this.freeCamPolar=Math.min(Math.PI-.05,this.freeCamPolar+3*.7*e));const Wt=new C(this.state.position[0]*Nt+st/it*z,this.state.position[1]*Nt+rt/it*z,this.state.position[2]*Nt+dt/it*z),Ee=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.cos(this.freeCamAzimuth),ye=this.freeCamDist*Math.cos(this.freeCamPolar),bt=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.sin(this.freeCamAzimuth);this.sceneMgr.camera.position.set(Wt.x+Ee,Wt.y+ye,Wt.z+bt);const qt=Math.abs(this.freeCamPolar-Math.PI/2)>Math.PI/2-.15?new C(0,0,Math.sin(this.freeCamPolar)>0?1:-1):new C(0,1,0);this.sceneMgr.camera.up.copy(qt),this.sceneMgr.camera.lookAt(Wt)}else{const jt={x:st/it*z,y:rt/it*z,z:dt/it*z};this.chase.follow(this.state,e,Ct,n||!this._camSnapped,jt),this._camSnapped||(this._camSnapped=!0)}this.deployedChuteMesh&&(this.deployedChuteMesh.position.set(this.state.position[0]*Nt,this.state.position[1]*Nt+.02,this.state.position[2]*Nt),this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation))}const Lt=v&&v.radius?w-v.radius:0;this.countStages(this.rocket.assembly.roots);const G=this.computeStageData();this.stageInfo=G;const Se=je(this.state.position,this.system);if(Se&&Se.mass>0){const z=[(this.state.position[0]-Se.position[0])*Nt,(this.state.position[1]-Se.position[1])*Nt,(this.state.position[2]-Se.position[2])*Nt];Js(z,this.state.velocity,Se.mass,5e14,360)}if(this.impactMarker){const z=je(this.state.position,this.system),Q=[this.state.position[0]-z.position[0],this.state.position[1]-z.position[1],this.state.position[2]-z.position[2]],st=Js(Q,this.state.velocity,z.mass,5e14,360);if(st.points.length>10&&!st.bound){const rt=st.points[st.points.length-1],dt=z.getSurfaceRadiusAt?.([rt[0],0,rt[1]])??z.radius??6371e3;z.position[0]+rt[0],z.position[2]+rt[1];const it=Math.sqrt(rt[0]*rt[0]+rt[1]*rt[1]);if(it>dt*.5){const jt=z.position[0]+rt[0]/it*dt,Wt=z.position[2]+rt[1]/it*dt;this.impactMarker.position.set(jt*Nt,0,Wt*Nt),this.impactMarker.visible=!0}else this.impactMarker.visible=!1}else this.impactMarker.visible=!1}this.stageInfo.filter(z=>z.active).length>0&&this.stageInfo.findIndex(z=>z.active)+1,this.hud.update(this.state,this.system,this.heatEnergy,this.state.throttle);const Et=je(this.state.position,this.system),Ht=[(this.state.position[0]-Et.position[0])*Nt,(this.state.position[1]-Et.position[1])*Nt,(this.state.position[2]-Et.position[2])*Nt],_t=Js(Ht,this.state.velocity,Et.mass,5e14,90);if(_t.points.length>5){if(!this.orbitLine){const Q=new Fe,st=new Float32Array(_t.points.length*3);Q.setAttribute("position",new Ie(st,3));const rt=new yr({color:_t.bound?4491468:14527044,transparent:!0,opacity:.3,depthWrite:!1});this.orbitLine=new xr(Q,rt),this.sceneMgr.scene.add(this.orbitLine)}const z=this.orbitLine.geometry.attributes.position;for(let Q=0;Q<_t.points.length;Q++)z.array[Q*3]=Et.position[0]*Nt+_t.points[Q][0],z.array[Q*3+1]=this.state.position[1]*Nt,z.array[Q*3+2]=Et.position[2]*Nt+_t.points[Q][1];z.needsUpdate=!0,this.orbitLine.geometry.setDrawRange(0,_t.points.length),this.orbitLine.material.color.set(_t.bound?4491468:14527044),this.orbitLine.visible=!0}else this.orbitLine&&(this.orbitLine.visible=!1);Lt>this.maxAlt&&(this.maxAlt=Lt),W>this.maxSpeed&&(this.maxSpeed=W);const fe=[100,500,1e3,5e3,1e4,5e4,1e5,5e5,1e6];for(const z of fe)if(Lt>=z&&this.lastAltMilestone<z){this.lastAltMilestone=z,ke.show(`Altitude: ${z>=1e3?z/1e3+"km":z+"m"}`);break}const M=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2)/340;this.hud.setMass(this.state.rocket.totalMass()),this.prevMach=M;const S=je(this.state.position,this.system);if(S&&S.mass>0){const z=this.state.position[0]-S.position[0],Q=this.state.position[1]-S.position[1],st=this.state.position[2]-S.position[2],rt=Math.sqrt(z*z+Q*Q+st*st)||1;Ts*S.mass/(rt*rt)}this.prevVel=[this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]];const O=this.state.velocity[0]-this.prevVel[0],P=this.state.velocity[1]-this.prevVel[1],j=this.state.velocity[2]-this.prevVel[2],Z=Math.sqrt(O*O+P*P+j*j),Mt=e>0?Z/(e*9.80665):1;if(Mt>2.5?this.screenShake=Math.min(1,(Mt-2.5)/5):this.screenShake*=Math.exp(-3*e),this.screenShake>.01){const z=(Math.random()-.5)*this.screenShake*.01,Q=(Math.random()-.5)*this.screenShake*.01;this.rocketGroup.position.x+=z,this.rocketGroup.position.z+=Q}this.sceneMgr.camera.updateProjectionMatrix();const gt=Math.min(1,Math.max(0,(Lt??0)/3e4)),It=.02*(1-gt)+0*gt,Pt=.05*(1-gt)+0*gt,tt=.15*(1-gt)+.01*gt;this.sceneMgr.scene.background=this.sceneMgr.scene.background.setRGB(It,Pt,tt),new C(0,1,0).applyQuaternion(this.rocketQuat);const Bt=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),zt=Bt>.01?[this.state.velocity[0]/Bt,this.state.velocity[1]/Bt,this.state.velocity[2]/Bt]:[0,1,0],Dt=je(this.state.position,this.system),xt=this.state.position[0]-Dt.position[0],yt=this.state.position[1]-Dt.position[1],Gt=this.state.position[2]-Dt.position[2],ie=Math.sqrt(xt*xt+yt*yt+Gt*Gt)||1,pe=this.state.velocity[0],kt=this.state.velocity[1],ot=this.state.velocity[2],I=yt*ot-Gt*kt,at=Gt*pe-xt*ot,lt=xt*kt-yt*pe,Ft=Math.sqrt(I*I+at*at+lt*lt)||1,Ut=[],ce={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",pluto:"#ddccbb"};for(const z of this.system.bodies){if(z.mass<=0)continue;const Q=z.position[0]-this.state.position[0],st=z.position[1]-this.state.position[1],rt=z.position[2]-this.state.position[2],dt=Math.sqrt(Q*Q+st*st+rt*rt)||1;Ut.push({name:z.name,dir:[Q/dt,st/dt,rt/dt],color:ce[z.name]||"#888"})}this.hud.setNavballData([l.x,l.y,l.z],zt,[xt/ie,yt/ie,Gt/ie],[I/Ft,at/Ft,lt/Ft],Ut)}performStage(){const t=this.findLowestDecoupler(this.rocket.assembly.roots);if(!t){ke.show("No decouplers to stage.");return}this.sound.playStaging();const e=this.rocketGroup.getObjectByName(t.part.id);if(e){const n=[],i=[];for(let h=0;h<16;h++){const u=.02+Math.random()*.04,f=new de(u,4,3),g=new we({color:h<4?16746564:11184810,transparent:!0,opacity:.9,blending:cn,depthWrite:!1}),_=new ut(f,g),m=h/16*Math.PI*2+Math.random()*.3,p=(Math.random()-.5)*.8;_.position.copy(this.rocketGroup.position),_.position.x+=Math.cos(m)*.15,_.position.y+=p*.1,_.position.z+=Math.sin(m)*.15,this.sceneMgr.scene.add(_),_._life=.6+Math.random()*.4,_._age=0,_._vx=Math.cos(m)*(.8+Math.random()*1.5),_._vy=p*.5,_._vz=Math.sin(m)*(.8+Math.random()*1.5),this.explosionMeshes.push(_)}const s=this.rocket.assembly.roots,r=s.indexOf(t);if(r>=0)for(let h=r;h<s.length;h++){const u=this.rocketGroup.getObjectByName(s[h].part.id);if(u){const f=new C;u.getWorldPosition(f),n.push(f),i.push(u),u.removeFromParent()}}for(;e.children.length>0;){const h=e.children[0],u=new C;h.getWorldPosition(u),n.push(u),i.push(h),h.removeFromParent()}const a=je(this.state.position,this.system),l=[...this.state.position],c=[a.position[0]-l[0],a.position[1]-l[1],a.position[2]-l[2]],d=Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2])||1;for(let h=0;h<i.length;h++){const u=i[h],f=new an;f.add(u),u.position.set(0,0,0);const g=this.sceneMgr.scene;f.position.copy(n[h]),f.position.x+=(Math.random()-.5)*.5,f.position.y+=(Math.random()-.5)*.5,f.position.z+=(Math.random()-.5)*.5,f.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),g.add(f);const _=1+Math.random()*2,m=[this.state.velocity[0]-c[0]/d*_+(Math.random()-.5)*.5,this.state.velocity[1]-c[1]/d*_+(Math.random()-.5)*.5,this.state.velocity[2]-c[2]/d*_+(Math.random()-.5)*.5],p=new ll("debris",100,l,m);this.debris.push({mesh:f,body:p,life:60})}}this.rocket.removeStage(t),this.positionFlameAtNozzle(),this.achievements.unlock("stage_separate"),ke.show("Stage separated!")}findLowestDecoupler(t){let e=null;const n=i=>{for(const s of i)s.part.kind==="decoupler"&&(e=s),n(s.children)};return n(t),e}toggleParachute(){if(this.rocket.assembly.roots.some(e=>e.part.kind==="parachute")||this.rocket.assembly.roots.some(e=>e.children.some(n=>n.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const e={radius:.6*le,height:1*le};this.deployedChuteMesh=Wa(e),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);ke.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}}toggleGear(){this.gearDeployed=!this.gearDeployed;for(const t of this.gearMeshes)t.visible=this.gearDeployed;ke.show(this.gearDeployed?"Landing gear deployed":"Landing gear retracted")}doCrash(t,e,n,i,s,r,a){this.crashed||this._spawnProtectionTimer>0||(this.crashed=!0,this.achievements.unlock("crash"),this.sound.playCrash(),this.sound.stopEngine(),ke.show(`CRASH! ${t}`),this.rocketGroup.visible=!1,this.engineFlame.stop(),this.screenShake=3,this.state.position=[e.position[0]+n/r*(a+50),e.position[1]+i/r*(a+50),e.position[2]+s/r*(a+50)],this.state.velocity=[0,0,0],this.state.throttle=0,this.spawnExplosion(this.state.position[0]*Nt,this.state.position[1]*Nt,this.state.position[2]*Nt),this.showCrashOverlay(t))}showCrashOverlay(t){const e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999;pointer-events:none;opacity:0;transition:opacity 0.1s;",document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1"}),setTimeout(()=>{e.style.opacity="0"},100),setTimeout(()=>e.remove(),500);const n=document.createElement("div");n.style.cssText=`
      position:fixed;top:0;left:0;width:100%;height:100%;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(0,0,0,0.7);z-index:9999;
      font-family:system-ui,sans-serif;color:#ff0;
    `,n.innerHTML=`
      <div style="font-size:48px;font-weight:bold;color:#ff4444;margin-bottom:8px;">CRASH!</div>
      <div style="font-size:16px;color:#ccc;margin-bottom:32px;">${t}</div>
      <div style="display:flex;gap:16px;">
        <button id="crash-menu" style="padding:12px 32px;font-size:18px;border:1px solid #555;border-radius:6px;background:#222;color:#ff0;cursor:pointer;">MENU</button>
        <button id="crash-restart" style="padding:12px 32px;font-size:18px;border:none;border-radius:6px;background:#4488ff;color:#ff0;cursor:pointer;">LAUNCH AGAIN</button>
      </div>
    `,document.body.appendChild(n),this.crashOverlay=n,n.querySelector("#crash-menu").addEventListener("click",()=>{this.onCrashAction?.("menu")}),n.querySelector("#crash-restart").addEventListener("click",()=>{this.onCrashAction?.("restart")})}updateExplosion(t){if(this.explosionMeshes.length>0)for(let e=this.explosionMeshes.length-1;e>=0;e--){const n=this.explosionMeshes[e],i=n._age+t;n._age=i;const s=n._life,r=i/s;if(r>=1){this.sceneMgr.scene.remove(n),n.geometry.dispose(),n.material.dispose(),this.explosionMeshes.splice(e,1);continue}const a=n._shockRing,l=a?1+r*60:1+r*6;n.scale.setScalar(l);const c=s<1?2:1;n.material.opacity=a?Math.max(0,.85*(1-r*1.5)):Math.max(0,.9*(1-r*c)),n.position.x+=n._vx*t,n.position.y+=n._vy*t,n.position.z+=n._vz*t}}explosionMeshes=[];spawnExplosion(t,e,n){const i=[16746496,16729088,16720384,16737792,13386752,16755200],s=new ut(new de(.8,12,8),new we({color:16755200,transparent:!0,opacity:1,blending:cn,depthWrite:!1}));s.position.set(t,e,n),s._life=.8,s._age=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s);for(let r=0;r<8;r++){const a=1+Math.random()*1.5,l=new de(a,8,6),c=new we({color:i[r%i.length],transparent:!0,opacity:.9,blending:cn,depthWrite:!1}),d=new ut(l,c),h=r/8*Math.PI*2,u=Math.random()*Math.PI,f=.3;d.position.set(t+Math.sin(h)*Math.cos(u)*f,e+Math.sin(u)*f,n+Math.cos(h)*Math.cos(u)*f),d._life=1.5+Math.random()*.5,d._age=0,d._vx=Math.sin(h)*Math.cos(u)*(1+Math.random()*3),d._vy=Math.sin(u)*(1+Math.random()*3),d._vz=Math.cos(h)*Math.cos(u)*(1+Math.random()*3),this.sceneMgr.scene.add(d),this.explosionMeshes.push(d)}for(let r=0;r<4;r++){const a=1.5+Math.random()*2,l=new we({color:4473924,transparent:!0,opacity:.4,blending:_i,depthWrite:!1}),c=new ut(new de(a,6,6),l),d=r/4*Math.PI*2+Math.random()*.5;c.position.set(t+Math.cos(d)*.5,e+(Math.random()-.5)*.3,n+Math.sin(d)*.5),c._life=2+Math.random()*.5,c._age=0,c._vx=Math.cos(d)*(.5+Math.random()*1.5),c._vy=(Math.random()-.5)*1,c._vz=Math.sin(d)*(.5+Math.random()*1.5),this.sceneMgr.scene.add(c),this.explosionMeshes.push(c)}}spawnShockRing(t=16777215){const e=new C;this.rocketGroup.getWorldPosition(e),e.x*Nt,e.y*Nt,e.z*Nt;const n=new Mi(.1,.2,64),i=new we({color:t,transparent:!0,opacity:.85,side:Be,blending:cn,depthWrite:!1}),s=new ut(n,i);s.position.set(this.rocketGroup.position.x,this.rocketGroup.position.y,this.rocketGroup.position.z),s.quaternion.copy(this.rocketQuat),s.scale.setScalar(1),s._life=1.2,s._age=0,s._shockRing=!0,s._vx=0,s._vy=0,s._vz=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s)}hasLandingLegs(){const t=e=>{for(const n of e)if(n.part.kind==="legs"||t(n.children))return!0;return!1};return t(this.rocket.assembly.roots)}positionFlameAtNozzle(){let t=1/0,e=-1/0;this.rocketGroup.traverse(i=>{if(i instanceof ut){if(this.gearMeshes.includes(i)||i===this.rocketShadow||i===this.reentryGlow||i===this.reentryGlowMesh)return;const s=new wn().setFromObject(i);s.min.y<t&&(t=s.min.y),s.max.y>e&&(e=s.max.y)}}),this.rocketBottomY=t===1/0?-.1:t;const n=t===1/0?-.1:t-.01;this.engineFlame.getMesh().position.set(0,n,0),this.engineFlame.getMesh().rotation.set(0,0,0)}dispose(){this.crashOverlay&&(this.crashOverlay.remove(),this.crashOverlay=null),this.sceneMgr.scene.remove(this.rocketGroup);for(const t of this.debris)this.sceneMgr.scene.remove(t.mesh);this.debris=[];for(const t of this.explosionMeshes)this.sceneMgr.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.explosionMeshes=[],this.controls.dispose(),this.chase.dispose(),this.engineFlame.dispose(),this.groundSmoke.dispose(),this.hud.unmount(),this.sound.dispose()}}function nx(o,t,e){const n=o.mass,i=[...o.position],s=[...o.velocity],r=He(t(o),1/n),a=s,c=ga(o,$e(i,He(r,.5*e)),$e(s,He(a,.5*e))),d=He(t(c),1/n),h=$e(s,He(r,.5*e)),f=ga(o,$e(i,He(d,.5*e)),$e(s,He(h,.5*e))),g=He(t(f),1/n),_=$e(s,He(d,.5*e)),p=ga(o,$e(i,He(g,e)),$e(s,He(_,e))),y=He(t(p),1/n),x=$e(s,He(g,e)),b=He($e($e(r,He(d,2)),$e(He(g,2),y)),e/6),R=He($e($e(a,He(h,2)),$e(He(_,2),x)),e/6);o.position=$e(i,R),o.velocity=$e(s,b)}function ga(o,t,e){return{...o,position:t,velocity:e}}function $e(o,t){return[o[0]+t[0],o[1]+t[1],o[2]+t[2]]}function He(o,t){return[o[0]*t,o[1]*t,o[2]*t]}class ix{bodies=[];add(t){this.bodies.push(t)}bodyByName(t){return this.bodies.find(e=>e.name===t)}propagate(t,e){let n=t;for(;n>0;){const i=Math.min(e,n);this.step(i),n-=i}}step(t){for(const e of this.bodies){if(e.mass<=0)continue;const n=_u(e,this.bodies);nx(e,()=>n,t)}}}const ai=fn*pn;class Bn extends ll{radius;visualRadius;mesh;constructor(t,e,n,i,s){super(t,e,n,i),this.radius=s,this.visualRadius=s*ai;const r=new de(this.visualRadius,64,32),a=new _e({color:8421504});this.mesh=new ut(r,a),this.mesh.position.set(n[0]*ai,n[1]*ai,n[2]*ai)}getTerrainHeightVisual(t,e,n){return 0}syncMesh(){this.mesh.position.set(this.position[0]*ai,this.position[1]*ai,this.position[2]*ai)}getSurfaceRadiusAt(t){const e=t[0]-this.position[0],n=t[1]-this.position[1],i=t[2]-this.position[2],s=Math.sqrt(e*e+n*n+i*i);if(s===0)return this.radius;const r=e/s,a=n/s,l=i/s,d=this.getTerrainHeightVisual(r,a,l)/ai;return this.radius+d}}const _a=fn*pn,hh=64,li=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},sx=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),d=a*a*(3-2*a),h=l*l*(3-2*l),u=li(n,i,s),f=li(n+1,i,s),g=li(n,i+1,s),_=li(n+1,i+1,s),m=li(n,i,s+1),p=li(n+1,i,s+1),y=li(n,i+1,s+1),x=li(n+1,i+1,s+1);return Ui(Ui(Ui(u,f,c),Ui(g,_,c),d),Ui(Ui(m,p,c),Ui(y,x,c),d),h)},jo=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*sx(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Ui=(o,t,e)=>o+(t-o)*e;class ox extends Bn{getTerrainHeightVisual(t,e,n){const i=jo(t*10+500,e*10+600,n*10+700,4),s=jo(t*40+100,e*40+200,n*40+300,3),r=i*.8+s*.2,a=this.visualRadius*.03;return r>.4?((r-.4)/.6)**2*a:-(.4-r)/.4*a*.12}constructor(t,e){super("mercury",1e24,t,e,244e4);const n=this.visualRadius,s=new ks().load(Hs("/textures/mercury.jpg"),h=>{h.colorSpace=ee,h.anisotropy=4}),r=new de(n,hh,hh),a=r.attributes.position,l=new C,c=n*.03;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,g=l.z/n,_=jo(u*10+500,f*10+600,g*10+700,4),m=jo(u*40+100,f*40+200,g*40+300,3),p=_*.8+m*.2;let y=0;p>.4?y=((p-.4)/.6)**2*c:y=-(.4-p)/.4*c*.12,l.setLength(n+y),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const d=new _e({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(r,d),this.mesh.position.set(t[0]*_a,t[1]*_a,t[2]*_a)}}const uh=`
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
`,rx=`
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
`,ax=`
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
`;class ji{group=new an;innerMesh;outerMesh;innerMat;outerMat;constructor(t,e=4491519,n=.7,i,s=16737826,r=3){const a=new Tt(e),l=new Tt(s),c=i??t*.08,d=new C(0,0,0),h=t*1.01,u=new de(h,64,48);this.innerMat=new Dn({vertexShader:uh,fragmentShader:rx,uniforms:{uSunDir:{value:new C(0,1,0)},uPlanetCenter:{value:d},uInnerRadius:{value:t},uAtmHeight:{value:c},uRayleighCol:{value:a},uMieCol:{value:new Tt(.9,.9,1)},uDensity:{value:n},uTerminatorCol:{value:l},uGlowPower:{value:r}},transparent:!0,blending:cn,depthWrite:!1,side:In}),this.innerMesh=new ut(u,this.innerMat),this.group.add(this.innerMesh);const f=t*1.06,g=new de(f,48,32);this.outerMat=new Dn({vertexShader:uh,fragmentShader:ax,uniforms:{uSunDir:{value:new C(0,1,0)},uPlanetCenter:{value:d},uInnerRadius:{value:t},uDensity:{value:n*.5},uGlowPower:{value:r}},transparent:!0,blending:cn,depthWrite:!1,side:In}),this.outerMesh=new ut(g,this.outerMat),this.group.add(this.outerMesh)}setSunDirection(t,e){const n=new C().copy(t).sub(e).normalize();this.innerMat.uniforms.uSunDir.value.copy(n),this.outerMat.uniforms.uSunDir.value.copy(n)}getMesh(){return this.group}dispose(){this.innerMat.dispose(),this.outerMat.dispose(),this.innerMesh.geometry.dispose(),this.outerMesh.geometry.dispose()}}const ya=fn*pn,dh=64,ci=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},lx=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),d=a*a*(3-2*a),h=l*l*(3-2*l),u=ci(n,i,s),f=ci(n+1,i,s),g=ci(n,i+1,s),_=ci(n+1,i+1,s),m=ci(n,i,s+1),p=ci(n+1,i,s+1),y=ci(n,i+1,s+1),x=ci(n+1,i+1,s+1);return Ni(Ni(Ni(u,f,c),Ni(g,_,c),d),Ni(Ni(m,p,c),Ni(y,x,c),d),h)},$o=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*lx(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Ni=(o,t,e)=>o+(t-o)*e;class cx extends Bn{getTerrainHeightVisual(t,e,n){const i=$o(t*6+50,e*6+100,n*6+150,4),s=$o(t*15+200,e*15+300,n*15+400,3),r=i*.6+s*.4,a=this.visualRadius*.015;return r>.35?((r-.35)/.65)**2*a:-(.35-r)/.35*a*.05}atmosphereGlow;constructor(t,e){super("venus",146e23,t,e,6052e3);const n=this.visualRadius,s=new ks().load(Hs("/textures/venus.jpg"),h=>{h.colorSpace=ee,h.anisotropy=4}),r=new de(n,dh,dh),a=r.attributes.position,l=new C,c=n*.015;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,g=l.z/n,_=$o(u*6+50,f*6+100,g*6+150,4),m=$o(u*15+200,f*15+300,g*15+400,3),p=_*.6+m*.4;let y=0;p>.35?y=((p-.35)/.65)**2*c:y=-(.35-p)/.35*c*.05,l.setLength(n+y),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const d=new _e({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(r,d),this.mesh.position.set(t[0]*ya,t[1]*ya,t[2]*ya),this.atmosphereGlow=new ji(n,15247436,.4),this.mesh.add(this.atmosphereGlow.getMesh())}}const xa=fn*pn;class hx extends Bn{constructor(t,e){super("pluto",44e20,t,e,1188e3);const n=new de(this.visualRadius,32,16),i=new _e({color:14535867,roughness:.9,metalness:0});this.mesh=new ut(n,i),this.mesh.position.set(t[0]*xa,t[1]*xa,t[2]*xa)}}const va=fn*pn;function yu(o){let t=o|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ux(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=n.createImageData(2048,1024),s=3;for(let a=0;a<1024;a++)for(let l=0;l<2048;l++){const c=l/2048,d=a/1024,h=(d-.5)*Math.PI,u=c*Math.PI*2,f=Math.cos(h)*Math.cos(u),g=Math.cos(h)*Math.sin(u),_=Math.sin(h),m=Math.sin(f*s+g*1.3+_*.7)*.5+.5,p=Math.sin((f+1.7)*s*2+_*1.1)*.5+.5,y=Math.cos((g+.5)*s*4-f*2.3)*.5+.5,x=Math.sin(f*s*8+g*6+_*7)*.5+.5;let b=m*.4+p*.3+y*.2+x*.1;const R=1-Math.abs(d-.5)*1.2;b*=Math.max(0,R),b=Math.max(0,(b-.4)*2.5);const A=Math.min(255,Math.max(0,Math.round(b*255))),T=(a*2048+l)*4;i.data[T]=A,i.data[T+1]=A,i.data[T+2]=A,i.data[T+3]=255}n.putImageData(i,0,0);const r=new ze(e);return r.wrapS=r.wrapT=Ne,r}function dx(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d");n.fillStyle="#000000",n.fillRect(0,0,2048,1024);const i=[{lat:.7,lon:-1.8,rx:.5,ry:.8},{lat:-.4,lon:-1.3,rx:.6,ry:.35},{lat:.85,lon:.4,rx:.25,ry:.3},{lat:.1,lon:.6,rx:.55,ry:.4},{lat:.7,lon:1.6,rx:.55,ry:1},{lat:-.6,lon:2.4,rx:.25,ry:.3},{lat:1.1,lon:-.9,rx:.2,ry:.2}],s=yu(42);for(const a of i){const l=(a.lon+Math.PI)/(2*Math.PI)*2048,c=(Math.PI/2-a.lat)/Math.PI*1024,d=a.rx/(2*Math.PI)*2048,h=a.ry/Math.PI*1024,u=20+Math.floor(s()*40);for(let f=0;f<u;f++){const g=(s()-.5)*d*2,_=(s()-.5)*h*2;if((g/d)**2+(_/h)**2>1)continue;const p=l+g,y=c+_,x=1+s()*4,b=100+Math.floor(s()*155);n.fillStyle=`rgb(${b}, ${Math.floor(b*.85)}, ${Math.floor(b*.5)})`,n.beginPath(),n.arc(p,y,x,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255, 220, 100, ${.05+s()*.1})`,n.beginPath(),n.arc(p,y,x*3,0,Math.PI*2),n.fill()}for(let f=0;f<3;f++){const g=(s()-.5)*d*1.5,_=(s()-.5)*h*1.5;if((g/d)**2+(_/h)**2>1)continue;const p=l+g,y=c+_;n.fillStyle="#ffdd66",n.beginPath(),n.arc(p,y,3+s()*5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255, 200, 80, 0.2)",n.beginPath(),n.arc(p,y,8+s()*10,0,Math.PI*2),n.fill()}}for(const a of i){const l=(a.lon+Math.PI)/(2*Math.PI)*2048,c=(Math.PI/2-a.lat)/Math.PI*1024,d=a.rx/(2*Math.PI)*2048,h=a.ry/Math.PI*1024;for(let u=0;u<30;u++){const f=s()*Math.PI*2,g=.85+s()*.2,_=l+Math.cos(f)*d*g,m=c+Math.sin(f)*h*g,p=1+s()*2;n.fillStyle=`rgba(200, 180, 100, ${.1+s()*.15})`,n.beginPath(),n.arc(_,m,p,0,Math.PI*2),n.fill()}}const r=new ze(e);return r.wrapS=r.wrapT=Ne,r.colorSpace=ee,r}function fx(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=n.createImageData(2048,1024),s=i.data,r=[{lat:.7,lon:-1.8,rx:.5,ry:.8},{lat:-.4,lon:-1.3,rx:.6,ry:.35},{lat:.85,lon:.4,rx:.25,ry:.3},{lat:.1,lon:.6,rx:.55,ry:.4},{lat:.7,lon:1.6,rx:.55,ry:1},{lat:-.6,lon:2.4,rx:.25,ry:.3},{lat:1.1,lon:-.9,rx:.2,ry:.2}];for(let l=0;l<1024;l++)for(let c=0;c<2048;c++){const d=c/2048,u=(l/1024-.5)*Math.PI,f=d*Math.PI*2-Math.PI;let g=!1;for(const p of r){const y=(u-p.lat)/p.rx,x=(f-p.lon)/p.ry;if(y*y+x*x<1){g=!0;break}}const _=g?180:40,m=(l*2048+c)*4;s[m]=s[m+1]=s[m+2]=_,s[m+3]=255}n.putImageData(i,0,0);const a=new ze(e);return a.wrapS=a.wrapT=Ne,a}function px(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,1024);i.addColorStop(0,"#2255aa"),i.addColorStop(.5,"#3399ee"),i.addColorStop(1,"#2255aa"),n.fillStyle=i,n.fillRect(0,0,2048,1024);const s=[{lat:.7,lon:-2,rx:.55,ry:.5,color:"#4a8c2a"},{lat:.65,lon:-1.6,rx:.35,ry:.35,color:"#5a9c3a"},{lat:-.35,lon:-1.4,rx:.4,ry:.6,color:"#5a9c3a"},{lat:.85,lon:.4,rx:.2,ry:.22,color:"#6aac4a"},{lat:.1,lon:.6,rx:.45,ry:.5,color:"#7a8c3a"},{lat:.5,lon:1.5,rx:.6,ry:.4,color:"#6a9c3a"},{lat:.3,lon:1.1,rx:.25,ry:.15,color:"#7aac4a"},{lat:-.4,lon:1.7,rx:.15,ry:.35,color:"#5a9c3a"},{lat:1,lon:-2.5,rx:.08,ry:.1,color:"#5a9c3a"},{lat:-.7,lon:-1.1,rx:.08,ry:.08,color:"#6aac4a"}];for(const a of s){n.fillStyle=a.color,n.beginPath();const l=(a.lon+Math.PI)/(2*Math.PI)*2048,c=(Math.PI/2-a.lat)/Math.PI*1024,d=a.rx/(2*Math.PI)*2048,h=a.ry/Math.PI*1024;n.ellipse(l,c,d,h,0,0,Math.PI*2),n.fill();const u=a.lat*1e3+a.lon*100,f=yu(u);for(let g=0;g<80;g++){const _=(f()-.5)*d*1.8,m=(f()-.5)*h*1.8;(_/d)**2+(m/h)**2<1&&(n.fillStyle=f()>.5?"#2a5c1f":"#6a9c4a",n.beginPath(),n.arc(l+_,c+m,1+f()*4,0,Math.PI*2),n.fill())}}n.fillStyle="#c0d8e8",n.fillRect(0,0,2048,1024*.05),n.fillRect(0,1024*.95,2048,1024*.05);const r=new ze(e);return r.wrapS=r.wrapT=Ne,r.colorSpace=ee,r}class mx extends Bn{atmosphereGlow;cloudMesh;cloudTex;constructor(t,e){super("earth",my,t,e,6371e3);const n=this.visualRadius,i=256,s=new de(n,i,i),r=fx(),a=new _e({roughness:.7,roughnessMap:r,metalness:0,bumpMap:vy(),bumpScale:.3,emissiveMap:dx(),emissive:new Tt(16768358),emissiveIntensity:.6,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});this.mesh=new ut(s,a),this.mesh.position.set(t[0]*va,t[1]*va,t[2]*va),this.generateTerrain(n);const l=px();l.minFilter=vi,l.magFilter=Ue,l.generateMipmaps=!1,l.colorSpace=ee,a.map=l,a.needsUpdate=!0;const c=[l,r,a.bumpMap,a.emissiveMap].filter(Boolean);for(const u of c)u.minFilter=Ue,u.magFilter=Ue,u.generateMipmaps=!1,u.needsUpdate=!0;this.loadHighResTexture().catch(()=>{}),this.atmosphereGlow=new ji(n,4491519,2.5,n*.1),this.mesh.add(this.atmosphereGlow.getMesh()),this.cloudTex=ux();const d=new _e({map:this.cloudTex,transparent:!0,opacity:.35,depthWrite:!1,side:Be,roughness:1,metalness:0}),h=new de(n*1.008,i,i);this.cloudMesh=new ut(h,d),this.cloudMesh.position.copy(this.mesh.position),this.mesh.add(this.cloudMesh)}async loadHighResTexture(){try{const e=await new ks().loadAsync(Hs("/textures/earth_daymap.jpg"));e.colorSpace=ee,e.anisotropy=16,e.minFilter=Ue,e.magFilter=Ue,e.generateMipmaps=!1;const n=this.mesh.material;n.map=e,n.needsUpdate=!0,console.log("Earth high-res texture loaded")}catch(t){console.warn("Earth texture load failed, using fallback:",t)}}updateClouds(t,e){if(this.cloudMesh.rotation.y+=t*.012,!e)return;const n=this.mesh.material,i=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])||1,s=e[0]/i,r=e[1]/i,a=e[2]/i;this.mesh.lookAt(this.mesh.position.x+s*100,this.mesh.position.y+r*100,this.mesh.position.z+a*100),this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,n.emissiveIntensity=.15}getTerrainHeightVisual(t,e,n){const i=Math.sin(t*5+e*3)*.5+Math.cos(e*4-n*3)*.3,s=Math.sin(n*6+t*2+e*4)*.15+Math.sin(t*12+e*8+n*10)*.1,r=Math.sin(t*20+n*15)*.05+Math.cos(e*18+t*12)*.04,a=Math.sin(t*40+e*35+n*45)*.02,l=((i+s+r+a)*.35+.5)*1.1,c=this.visualRadius*.025,d=this.visualRadius*.006;if(l>.45){const h=(l-.45)/.55;return(h<.7?h*.5:.35+(h-.7)/.3*.65)*c}if(l>.35){const h=(l-.35)/.1;return h*h*c*.3}return-(.35-l)/.35*d}generateTerrain(t){const e=this.mesh.geometry,n=e.attributes.position,i=new C;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);const r=i.x/t,a=i.y/t,l=i.z/t,c=this.getTerrainHeightVisual(r,a,l);i.setLength(t+c),n.setXYZ(s,i.x,i.y,i.z)}n.needsUpdate=!0,e.computeVertexNormals()}}const Ma=fn*pn,fh=64,hi=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},gx=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),d=a*a*(3-2*a),h=l*l*(3-2*l),u=hi(n,i,s),f=hi(n+1,i,s),g=hi(n,i+1,s),_=hi(n+1,i+1,s),m=hi(n,i,s+1),p=hi(n+1,i,s+1),y=hi(n,i+1,s+1),x=hi(n+1,i+1,s+1);return Fi(Fi(Fi(u,f,c),Fi(g,_,c),d),Fi(Fi(m,p,c),Fi(y,x,c),d),h)},Zo=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*gx(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Fi=(o,t,e)=>o+(t-o)*e;class _x extends Bn{getTerrainHeightVisual(t,e,n){const i=Zo(t*8+100,e*8+200,n*8+300,4),s=Zo(t*30+400,e*30+500,n*30+600,3),r=i*.7+s*.3,a=this.visualRadius*.04;return r>.45?((r-.45)/.55)**2*a:-(.45-r)/.45*a*.15}constructor(t,e){super("moon",22e22,t,e,1737e3);const n=this.visualRadius,s=new ks().load(Hs("/textures/moon.jpg"),h=>{h.colorSpace=ee,h.anisotropy=4}),r=new de(n,fh,fh),a=r.attributes.position,l=new C,c=n*.04;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,g=l.z/n,_=Zo(u*8+100,f*8+200,g*8+300,4),m=Zo(u*30+400,f*30+500,g*30+600,3),p=_*.7+m*.3;let y=0;p>.45?y=((p-.45)/.55)**2*c:y=-(.45-p)/.45*c*.15,l.setLength(n+y),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const d=new _e({map:s,roughness:.95,metalness:0,color:16777215});this.mesh=new ut(r,d),this.mesh.position.set(t[0]*Ma,t[1]*Ma,t[2]*Ma)}}const Sa=fn*pn,ph=64,ui=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},yx=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),d=a*a*(3-2*a),h=l*l*(3-2*l),u=ui(n,i,s),f=ui(n+1,i,s),g=ui(n,i+1,s),_=ui(n+1,i+1,s),m=ui(n,i,s+1),p=ui(n+1,i,s+1),y=ui(n,i+1,s+1),x=ui(n+1,i+1,s+1);return Oi(Oi(Oi(u,f,c),Oi(g,_,c),d),Oi(Oi(m,p,c),Oi(y,x,c),d),h)},Jo=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*yx(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Oi=(o,t,e)=>o+(t-o)*e;class xx extends Bn{getTerrainHeightVisual(t,e,n){const i=Jo(t*4+10,e*4+20,n*4+30,5),s=Jo(t*20+100,e*20+200,n*20+300,3),r=i*.7+s*.3,a=this.visualRadius*.035;return r>.4?((r-.4)/.6)**2*a:-(.4-r)/.4*a*.1}atmosphereGlow;constructor(t,e){super("mars",19e23,t,e,339e4);const n=this.visualRadius,s=new ks().load(Hs("/textures/mars.jpg"),h=>{h.colorSpace=ee,h.anisotropy=4}),r=new de(n,ph,ph),a=r.attributes.position,l=new C,c=n*.035;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,g=l.z/n,_=Jo(u*4+10,f*4+20,g*4+30,5),m=Jo(u*20+100,f*20+200,g*20+300,3),p=_*.7+m*.3;let y=0;p>.4?y=((p-.4)/.6)**2*c:y=-(.4-p)/.4*c*.1,l.setLength(n+y),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const d=new _e({map:s,roughness:.85,metalness:0,color:16777215});this.mesh=new ut(r,d),this.mesh.position.set(t[0]*Sa,t[1]*Sa,t[2]*Sa),this.atmosphereGlow=new ji(n,13920842,.25),this.mesh.add(this.atmosphereGlow.getMesh())}}function di(o,t,e){const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)}function vx(o,t,e){const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),d=a*a*(3-2*a),h=l*l*(3-2*l),u=di(n,i,s),f=di(n+1,i,s),g=di(n,i+1,s),_=di(n+1,i+1,s),m=di(n,i,s+1),p=di(n+1,i,s+1),y=di(n,i+1,s+1),x=di(n+1,i+1,s+1);return ki(ki(ki(u,f,c),ki(g,_,c),d),ki(ki(m,p,c),ki(y,x,c),d),h)}function Si(o,t,e,n){let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*vx(o*l,t*l,e*l),r+=s,s*=.5}return i/r}function ki(o,t,e){return o+(t-o)*e}const ba=fn*pn,mh=64;class Mx extends Bn{atmosphereGlow;constructor(t,e){super("jupiter",19e26,t,e,69911e3);const n=this.visualRadius,i=Ry(),s=new de(n,mh,mh),r=s.attributes.position,a=new C,l=n*.02;for(let d=0;d<r.count;d++){a.fromBufferAttribute(r,d);const h=a.x/n,u=a.y/n,f=a.z/n,g=Si(h*8+10,u*8+20,f*8+30,4),_=Si(h*30+100,u*30+200,f*30+300,3),m=g*.7+_*.3;let p=0;m>.4?p=((m-.4)/.6)**2*l:p=-(.4-m)/.4*l*.1,a.setLength(n+p),r.setXYZ(d,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new _e({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(s,c),this.mesh.position.set(t[0]*ba,t[1]*ba,t[2]*ba),this.mesh.rotation.z=3.1*Math.PI/180,this.atmosphereGlow=new ji(n,13935988,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const Ta=fn*pn;function Sx(){const e=document.createElement("canvas");e.width=1024,e.height=64;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,1024,0);i.addColorStop(0,"#8a7a5a"),i.addColorStop(.05,"#b8a888"),i.addColorStop(.12,"#d4c8a8"),i.addColorStop(.2,"#c0b898"),i.addColorStop(.35,"#e8ddd0"),i.addColorStop(.5,"#c0b090"),i.addColorStop(.65,"#d8ccb0"),i.addColorStop(.8,"#a89878"),i.addColorStop(.9,"#786858"),i.addColorStop(1,"#584838"),n.fillStyle=i,n.fillRect(0,0,1024,64);for(let r=0;r<8e3;r++){const a=Math.random()*1024,l=Math.random()*64,c=1+Math.random()*4,d=120+Math.random()*80;n.fillStyle=`rgba(${d},${d-20},${d-40},${.2+Math.random()*.4})`,n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.fill()}n.fillStyle="rgba(0,0,0,0.7)",n.fillRect(1024*.43,0,1024*.04,64),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(1024*.72,0,1024*.015,64),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(1024*.1,0,1024*.02,64),n.fillRect(1024*.17,0,1024*.01,64),n.fillRect(1024*.55,0,1024*.02,64),n.fillStyle="rgba(200,190,170,0.15)";for(let r=0;r<1024;r+=8)n.fillRect(r,0,2,64);const s=new ze(e);return s.wrapS=Ne,s.wrapT=Ne,s.anisotropy=4,s}class bx extends Bn{atmosphereGlow;constructor(t,e){super("saturn",5683e23,t,e,58232e3);const n=this.visualRadius,i=Cy(),s=new de(n,64,32),r=s.attributes.position,a=new C,l=n*.015;for(let p=0;p<r.count;p++){a.fromBufferAttribute(r,p);const y=a.x/n,x=a.y/n,b=a.z/n,R=Si(y*8+10,x*8+20,b*8+30,4),A=Si(y*30+100,x*30+200,b*30+300,3),T=R*.7+A*.3;let F=0;T>.4?F=((T-.4)/.6)**2*l:F=-(.4-T)/.4*l*.1,a.setLength(n+F),r.setXYZ(p,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new _e({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(s,c),this.mesh.position.set(t[0]*Ta,t[1]*Ta,t[2]*Ta),this.mesh.rotation.z=26.7*Math.PI/180,this.atmosphereGlow=new ji(n,16049313,.1),this.mesh.add(this.atmosphereGlow.getMesh());const d=Sx(),h=new Mi(n*1.15,n*2.4,256),u=new we({map:d,side:Be,transparent:!0,opacity:.8,depthWrite:!1}),f=new ut(h,u);f.rotation.x=-Math.PI/2,f.rotation.z=26.7*Math.PI/180,this.mesh.add(f);const g=new Mi(n*2.4,n*2.8,128),_=new we({color:8943720,side:Be,transparent:!0,opacity:.15,depthWrite:!1}),m=new ut(g,_);m.rotation.x=-Math.PI/2,m.rotation.z=26.7*Math.PI/180,this.mesh.add(m)}}const Ea=fn*pn;class Tx extends Bn{atmosphereGlow;constructor(t,e){super("uranus",8681e22,t,e,25362e3);const n=this.visualRadius,i=Py(),s=new de(n,64,32),r=s.attributes.position,a=new C,l=n*.015;for(let f=0;f<r.count;f++){a.fromBufferAttribute(r,f);const g=a.x/n,_=a.y/n,m=a.z/n,p=Si(g*6+10,_*6+20,m*6+30,4),y=Si(g*25+400,_*25+500,m*25+600,3),x=p*.7+y*.3;let b=0;x>.4?b=((x-.4)/.6)**2*l:b=-(.4-x)/.4*l*.1,a.setLength(n+b),r.setXYZ(f,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new _e({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(s,c),this.mesh.position.set(t[0]*Ea,t[1]*Ea,t[2]*Ea),this.mesh.rotation.z=-97.8*Math.PI/180,this.atmosphereGlow=new ji(n,5230824,.1),this.mesh.add(this.atmosphereGlow.getMesh());const d=new Mi(n*1.2,n*2.1,64),h=new we({color:11184844,side:Be,transparent:!0,opacity:.3}),u=new ut(d,h);u.rotation.x=-Math.PI/2,u.rotation.z=97.8*Math.PI/180,this.mesh.add(u)}}const wa=fn*pn;class Ex extends Bn{atmosphereGlow;constructor(t,e){super("neptune",1024e23,t,e,24622e3);const n=this.visualRadius,i=Ly(),s=new de(n,64,32),r=s.attributes.position,a=new C,l=n*.015;for(let d=0;d<r.count;d++){a.fromBufferAttribute(r,d);const h=a.x/n,u=a.y/n,f=a.z/n,g=Si(h*6+10,u*6+20,f*6+30,4),_=Si(h*25+100,u*25+200,f*25+300,3),m=g*.7+_*.3;let p=0;m>.4?p=((m-.4)/.6)**2*l:p=-(.4-m)/.4*l*.1,a.setLength(n+p),r.setXYZ(d,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new _e({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(s,c),this.mesh.position.set(t[0]*wa,t[1]*wa,t[2]*wa),this.mesh.rotation.z=28.3*Math.PI/180,this.atmosphereGlow=new ji(n,4944093,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const xs=fn*pn,wx=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`,Ax=`
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
`;class Rx extends ll{light;visualRadius;mesh;constructor(t,e,n=2e26){super("sun",n,t,e),this.visualRadius=100;const i=new de(this.visualRadius,32,16),s=new Dn({vertexShader:wx,fragmentShader:Ax,uniforms:{uTime:{value:0},uColor:{value:new Tt(16763904)},uIntensity:{value:1.5}},transparent:!0,blending:cn,depthWrite:!1,side:Be});this.mesh=new ut(i,s),this.mesh.position.set(t[0]*xs,t[1]*xs,t[2]*xs),this.light=new Mr(16772829,5),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z);const r=Cx(),a=new tu({map:r,blending:cn,depthWrite:!1,transparent:!0,opacity:1}),l=new Yg(a);l.scale.set(25e4,25e4,1),this.mesh.add(l),this.sunMaterial=s}sunMaterial;update(t){this.sunMaterial.uniforms.uTime.value+=t}syncMesh(){this.mesh.position.set(this.position[0]*xs,this.position[1]*xs,this.position[2]*xs),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z)}}function Cx(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255, 220, 100, 1)"),n.addColorStop(.1,"rgba(255, 200, 80, 0.8)"),n.addColorStop(.3,"rgba(255, 160, 40, 0.4)"),n.addColorStop(.5,"rgba(255, 100, 20, 0.15)"),n.addColorStop(.7,"rgba(255, 60, 10, 0.05)"),n.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=new ze(t);return i.needsUpdate=!0,i}class gh{assembly;fuelTanks;constructor(t){this.assembly=t,this.fuelTanks=[],xu(t.roots,this.fuelTanks)}dryMass(){return this.assembly.totalMass()}totalFuelMass(){return this.fuelTanks.reduce((t,e)=>t+e.remaining,0)}totalMass(){return this.dryMass()+this.totalFuelMass()}consumeFuel(t,e){let n=0;for(let i=this.fuelTanks.length-1;i>=0;i--){const s=this.fuelTanks[i];if(s.remaining<=0)continue;const r=t*e-n;if(r<=0)break;const a=Math.min(s.remaining,r);s.remaining-=a,n+=a}return n}removeStage(t){const e=this.assembly.roots,n=e.indexOf(t);if(n<0)return;const i=e.length-n,s=new Set,r=a=>{s.add(a),a.children.forEach(r)};r(t);for(let a=1;a<i;a++){const l=e[n+a];l&&r(l)}this.fuelTanks=this.fuelTanks.filter(a=>!s.has(a.node)),e.splice(n,i),t.children=[]}}function xu(o,t){for(const e of o)e.part.fuelCapacity&&t.push({node:e,remaining:e.part.fuelCapacity,capacity:e.part.fuelCapacity}),xu(e.children,t)}const _h="ellipse_achievements";class Px{unlocked=new Set;callbacks=[];constructor(){const t=localStorage.getItem(_h);if(t)try{JSON.parse(t).forEach(e=>this.unlocked.add(e))}catch{}}unlock(t){this.unlocked.has(t)||(this.unlocked.add(t),localStorage.setItem(_h,JSON.stringify([...this.unlocked])),this.callbacks.forEach(e=>e(t)))}isUnlocked(t){return this.unlocked.has(t)}list(){return[...this.unlocked]}onUnlock(t){this.callbacks.push(t)}}const Aa={units:"metric",autoSave:!0,difficulty:"normal",musicVolume:.7,sfxVolume:.8},vu="ellipse_settings";function Lx(){const o=localStorage.getItem(vu);if(!o)return{...Aa};try{return{...Aa,...JSON.parse(o)}}catch{return{...Aa}}}function yh(o){localStorage.setItem(vu,JSON.stringify(o))}class Ix{root;onClose;current;constructor(t,e){this.current=t,this.onClose=e,this.root=document.createElement("div"),this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(6, 8, 20, 0.88);
      display: flex; align-items: center; justify-content: center;
    `;const n=document.createElement("div");n.className="panel panel--elevated",n.style.cssText="padding: var(--space-6); min-width: 400px;";const i=document.createElement("h2");i.className="text-display-sm",i.textContent="Settings",i.style.cssText="margin: 0 0 var(--space-5);",n.appendChild(i);const s=this.makeRow("Units",["metric","imperial"],t.units,c=>{this.current.units=c});n.appendChild(s);const r=this.makeRow("Difficulty",["easy","normal","hard","realistic"],t.difficulty,c=>{this.current.difficulty=c});n.appendChild(r);const a=this.makeToggle("Auto-save",t.autoSave,c=>{this.current.autoSave=c});n.appendChild(a);const l=document.createElement("button");l.className="btn btn--primary",l.textContent="Save & Close",l.style.cssText="margin-top: var(--space-4); width: 100%; padding: 12px;",l.addEventListener("click",()=>{yh(this.current),this.onClose()}),n.appendChild(l),this.root.appendChild(n)}makeRow(t,e,n,i){const s=document.createElement("div");s.style.cssText="margin: var(--space-3) 0;";const r=document.createElement("div");r.className="text-caption",r.textContent=t,r.style.cssText="margin-bottom: var(--space-2);",s.appendChild(r);const a=document.createElement("div");a.style.cssText="display:flex;gap:var(--space-2);";for(const l of e){const c=document.createElement("button");c.className=`btn${l===n?" btn--secondary":""}`,c.textContent=l,l===n&&(c.style.borderColor="var(--accent-blue)"),c.addEventListener("click",()=>{i(l),yh(this.current)}),a.appendChild(c)}return s.appendChild(a),s}makeToggle(t,e,n){const i=document.createElement("div");i.style.cssText="margin: var(--space-3) 0; display: flex; justify-content: space-between; align-items: center;";const s=document.createElement("span");s.className="text-body",s.textContent=t;const r=document.createElement("input");return r.type="checkbox",r.checked=e,r.addEventListener("change",()=>n(r.checked)),i.appendChild(s),i.appendChild(r),i}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove()}}function Qo(o){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle=o,e.fillRect(0,0,64,64),e.strokeStyle="#000",e.lineWidth=2,e.strokeRect(0,0,64,64),e.strokeRect(16,16,32,32);const n=new ze(t);return n.wrapS=n.wrapT=dn,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}Qo("#8899aa"),Qo("#808080"),Qo("#808080"),Qo("#000000");async function Wi(o,t=ee){const e=await new Promise((i,s)=>{const r=new Image;r.onload=()=>i(r),r.onerror=()=>s(new Error(`Failed: ${o}`)),r.src=o}),n=new Ge(e);return n.colorSpace=t,n.wrapS=n.wrapT=dn,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}async function tr(o){const[t,e,n,i]=await Promise.all([Wi(`/textures/${o}_color.jpg`,ee),Wi(`/textures/${o}_normal.jpg`,Ce),Wi(`/textures/${o}_rough.jpg`,Ce),Wi(`/textures/${o}_metal.jpg`,Ce)]);return{color:t,normal:e,roughness:n,metalness:i}}let Dx=!1,Ux=null,Nx=null,Fx=null,Ox=null,kx=null,er=null;function Hx(){return er||(er=(async()=>{try{[Ux,Nx,Fx,Ox,kx]=await Promise.all([tr("metal013"),tr("plates"),tr("metal009"),tr("metal021"),(async()=>{const[o,t,e]=await Promise.all([Wi("/textures/fabric_color.jpg",ee),Wi("/textures/fabric_normal.jpg",Ce),Wi("/textures/fabric_rough.jpg",Ce)]);return{color:o,normal:t,roughness:e,metalness:e}})()]),Dx=!0}catch(o){console.error("Texture loading failed, using fallback",o)}})(),er)}class Bx{renderer;sceneMgr;system;achievements;mainMenu;vab;flight;constructor(){Hx(),this.renderer=new P_,this.sceneMgr=new I_,this.achievements=new Px,this.system=new ix;const t=2e26;this.system.add(new Rx([0,0,0],[0,0,0],t)),this.system.add(new ox([2e8,0,2e7],[0,0,38e3])),this.system.add(new cx([6e8,0,-6e7],[0,0,21e3]));const e=[1e9,0,0],n=[0,0,17e3];this.system.add(new mx(e,n));const i=[e[0],0,e[2]+6e7],s=[0,0,n[2]+900];this.system.add(new _x(i,s)),this.system.add(new xx([15e8,1e9,-4e8],[0,0,13500])),this.system.add(new Mx([3e9,-6e8,2e8],[0,0,9e3])),this.system.add(new bx([56e8,4e8,-4e8],[0,0,6800])),this.system.add(new Tx([11e9,-2e8,6e8],[0,0,4800])),this.system.add(new Ex([17e9,8e8,0],[0,0,3800])),this.system.add(new hx([23e9,16e8,-1e9],[0,0,2e3])),document.getElementById("app").appendChild(this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.sceneMgr.camera.aspect=window.innerWidth/window.innerHeight,this.sceneMgr.camera.updateProjectionMatrix()}),this.achievements.onUnlock(r=>ke.show(`Achievement: ${r}`))}async start(){const t=["/models/agena.glb","/models/saturn_v.glb","/models/apollo_soyuz.glb","/models/ares_1.glb","/models/apollo_lunar_module.glb","/models/atlas_6.glb","/models/atlas_9.glb","/models/crawler.glb"],{loadGLTF:e}=await xh(async()=>{const{loadGLTF:n}=await Promise.resolve().then(()=>gu);return{loadGLTF:n}},void 0);await Promise.allSettled(t.map(n=>e(n,1))),this.showMainMenu(),this.loop()}showMainMenu(){this.unmountCurrent(),this.sceneMgr.scene.background=new Tt(0),this.mainMenu=new D_(()=>this.showFlight(),()=>this.showVab(),()=>this.showSettings()),this.mainMenu.mount()}showSettings(){const t=new Ix(Lx(),()=>t.unmount());t.mount()}showVab(){this.unmountCurrent(),this.vab=new zy(t=>{const e=new gh(t);this.showFlight(e)},()=>this.showMainMenu()),this.vab.mount(),this.sceneMgr.scene.add(this.vab.scene)}async showFlight(t){this.unmountCurrent();const e=t?.assembly??new Va;if(!t){const i=le,s=1.1*i,r=.7*i,a=.7*i,l=.005,c=0,d=c+a/2+l+r/2,h=d+r/2+l+s/2;e.addRoot({part:aa("capsule_mk1"),position:[0,h,0],rotation:0,children:[]}),e.addRoot({part:aa("tank_s_lfo"),position:[0,d,0],rotation:0,children:[]}),e.addRoot({part:aa("engine_ant"),position:[0,c,0],rotation:0,children:[]})}const n=new gh(e);this.flight=new ex(this.renderer,this.sceneMgr,this.system,n,this.achievements),this.flight.onCrashAction=i=>{i==="menu"?this.showMainMenu():this.showFlight(t)}}unmountCurrent(){this.mainMenu?.unmount(),this.mainMenu=void 0,this.vab&&(this.vab.unmount(),this.sceneMgr.scene.remove(this.vab.scene),this.vab=void 0),this.flight?.dispose(),this.flight=void 0}loop(){const t=.016666666666666666;this.sceneMgr.update(t),this.flight?.update(t),this.vab?this.renderer.three.render(this.vab.scene,this.vab.camera):this.renderer.three.render(this.sceneMgr.scene,this.sceneMgr.camera),requestAnimationFrame(()=>this.loop())}}function zx(){const o=document.getElementById("loading-screen");o&&o.classList.add("hidden");const t=document.getElementById("loading-label");t&&(t.dataset.done="1")}try{new Bx().start()}catch(o){console.error("Failed to start Ellipse:",o),zx(),document.body.innerHTML+=`<div style="position:fixed;inset:0;z-index:950;color:white;padding:32px;font-family:monospace;background:#06080f;">
      <h1>Failed to start</h1>
      <pre>${String(o)}</pre>
    </div>`}
//# sourceMappingURL=index-BIr5F5-b.js.map
