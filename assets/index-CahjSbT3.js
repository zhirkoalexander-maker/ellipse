(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Mu="modulepreload",Su=function(r){return"/ellipse/"+r},hc={},xh=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(e.map(c=>{if(c=Su(c),c in hc)return;hc[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":Mu,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((u,f)=>{h.addEventListener("load",u),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="160",bu=0,uc=1,Tu=2,yh=1,Eu=2,Vn=3,An=0,sn=1,Oe=2,di=0,fi=1,rn=2,dc=3,fc=4,wu=5,Ui=100,Au=101,Ru=102,pc=103,mc=104,Cu=200,Pu=201,Lu=202,Iu=203,wa=204,Aa=205,Du=206,Uu=207,Nu=208,Fu=209,Ou=210,ku=211,Bu=212,zu=213,Hu=214,Gu=0,Vu=1,Wu=2,so=3,Xu=4,qu=5,Yu=6,Ku=7,Xa=0,ju=1,$u=2,Yn=0,Zu=1,Ju=2,Qu=3,td=4,ed=5,nd=6,gc="attached",id="detached",vh=300,Ss=301,bs=302,Ra=303,Ca=304,fo=306,fn=1e3,ke=1001,ro=1002,We=1003,Pa=1004,eo=1005,$e=1006,Mh=1007,zi=1008,pi=1009,sd=1010,rd=1011,qa=1012,Sh=1013,hi=1014,Xn=1015,nr=1016,bh=1017,Th=1018,Oi=1020,od=1021,an=1023,ad=1024,cd=1025,ki=1026,Ts=1027,ld=1028,Eh=1029,hd=1030,wh=1031,Ah=1033,Eo=33776,wo=33777,Ao=33778,Ro=33779,_c=35840,xc=35841,yc=35842,vc=35843,Rh=36196,Mc=37492,Sc=37496,bc=37808,Tc=37809,Ec=37810,wc=37811,Ac=37812,Rc=37813,Cc=37814,Pc=37815,Lc=37816,Ic=37817,Dc=37818,Uc=37819,Nc=37820,Fc=37821,Co=36492,Oc=36494,kc=36495,ud=36283,Bc=36284,zc=36285,Hc=36286,ir=2300,Es=2301,Po=2302,Gc=2400,Vc=2401,Wc=2402,dd=2500,fd=0,Ch=1,La=2,Ph=3e3,Bi=3001,pd=3200,md=3201,Ya=0,gd=1,yn="",se="srgb",Re="srgb-linear",Ka="display-p3",po="display-p3-linear",oo="linear",Se="srgb",ao="rec709",co="p3",qi=7680,Xc=519,_d=512,xd=513,yd=514,Lh=515,vd=516,Md=517,Sd=518,bd=519,Ia=35044,qc="300 es",Da=1035,qn=2e3,lo=2001;class Ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yc=1234567;const $s=Math.PI/180,ws=180/Math.PI;function En(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[r&255]+Ke[r>>8&255]+Ke[r>>16&255]+Ke[r>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Ze(r,t,e){return Math.max(t,Math.min(e,r))}function ja(r,t){return(r%t+t)%t}function Td(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Ed(r,t,e){return r!==t?(e-r)/(t-r):0}function Zs(r,t,e){return(1-e)*r+e*t}function wd(r,t,e,n){return Zs(r,t,1-Math.exp(-e*n))}function Ad(r,t=1){return t-Math.abs(ja(r,t*2)-t)}function Rd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Cd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Pd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Ld(r,t){return r+Math.random()*(t-r)}function Id(r){return r*(.5-Math.random())}function Dd(r){r!==void 0&&(Yc=r);let t=Yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ud(r){return r*$s}function Nd(r){return r*ws}function Ua(r){return(r&r-1)===0&&r!==0}function Fd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ho(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Od(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),d=o((t+n)/2),h=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*d,c*h,c*u,a*l);break;case"YZY":r.set(c*u,a*d,c*h,a*l);break;case"ZXZ":r.set(c*h,c*u,a*d,a*l);break;case"XZX":r.set(a*d,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*d,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function In(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ge(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const kd={DEG2RAD:$s,RAD2DEG:ws,generateUUID:En,clamp:Ze,euclideanModulo:ja,mapLinear:Td,inverseLerp:Ed,lerp:Zs,damp:wd,pingpong:Ad,smoothstep:Rd,smootherstep:Cd,randInt:Pd,randFloat:Ld,randFloatSpread:Id,seededRandom:Dd,degToRad:Ud,radToDeg:Nd,isPowerOfTwo:Ua,ceilPowerOfTwo:Fd,floorPowerOfTwo:ho,setQuaternionFromProperEuler:Od,normalize:ge,denormalize:In};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,i,s,o,a,c,l){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],M=i[4],b=i[7],P=i[2],A=i[5],T=i[8];return s[0]=o*_+a*x+c*P,s[3]=o*m+a*M+c*A,s[6]=o*p+a*b+c*T,s[1]=l*_+d*x+h*P,s[4]=l*m+d*M+h*A,s[7]=l*p+d*b+h*T,s[2]=u*_+f*x+g*P,s[5]=u*m+f*M+g*A,s[8]=u*p+f*b+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*s*d+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],h=d*o-a*l,u=a*c-d*s,f=l*s-o*c,g=e*h+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*l-d*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(d*e-i*c)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lo.makeScale(t,e)),this}rotate(t){return this.premultiply(Lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new ie;function Ih(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bd(){const r=sr("canvas");return r.style.display="block",r}const Kc={};function Js(r){r in Kc||(Kc[r]=!0,console.warn(r))}const jc=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$c=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ur={[Re]:{transfer:oo,primaries:ao,toReference:r=>r,fromReference:r=>r},[se]:{transfer:Se,primaries:ao,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[po]:{transfer:oo,primaries:co,toReference:r=>r.applyMatrix3($c),fromReference:r=>r.applyMatrix3(jc)},[Ka]:{transfer:Se,primaries:co,toReference:r=>r.convertSRGBToLinear().applyMatrix3($c),fromReference:r=>r.applyMatrix3(jc).convertLinearToSRGB()}},zd=new Set([Re,po]),le={enabled:!0,_workingColorSpace:Re,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!zd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ur[t].toReference,i=ur[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ur[r].primaries},getTransfer:function(r){return r===yn?oo:ur[r].transfer}};function ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Yi;class Dh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=sr("canvas")),Yi.width=t.width,Yi.height=t.height;const n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ys(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hd=0;class Uh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=En(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Do(i[o].image)):s.push(Do(i[o]))}else s=Do(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Do(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Dh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gd=0;class Be extends Ps{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=ke,i=ke,s=$e,o=zi,a=an,c=pi,l=Be.DEFAULT_ANISOTROPY,d=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=En(),this.name="",this.source=new Uh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Bi?se:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fn:t.x=t.x-Math.floor(t.x);break;case ke:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fn:t.y=t.y-Math.floor(t.y);break;case ke:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===se?Bi:Ph}set encoding(t){Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Bi?se:yn}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=vh;Be.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,b=(f+1)/2,P=(p+1)/2,A=(d+u)/4,T=(h+_)/4,O=(g+m)/4;return M>b&&M>P?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=T/n):b>P?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=O/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=T/s,i=O/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(u-d)/x,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vd extends Ps{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Bi?se:yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends Vd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nh extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wd extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],d=n[i+2],h=n[i+3];const u=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==u||l!==f||d!==g){let m=1-a;const p=c*u+l*f+d*g+h*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),A=Math.atan2(P,p*x);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const b=a*x;if(c=c*m+u*b,l=l*m+f*b,d=d*m+g*b,h=h*m+_*b,m===1-a){const P=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=P,l*=P,d*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],d=n[i+3],h=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+d*h+c*f-l*u,t[e+1]=c*g+d*u+l*h-a*f,t[e+2]=l*g+d*f+a*u-c*h,t[e+3]=d*g-a*h-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(i/2),h=a(s/2),u=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"YZX":this._x=u*d*h+l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h-u*f*g;break;case"XZY":this._x=u*d*h-l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],h=e[10],u=n+a+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(d-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+i*l-s*c,this._y=i*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-i*a,this._w=o*d-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),h=Math.sin((1-e)*d)/l,u=Math.sin(e*d)/l;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),d=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+c*l+o*h-a*d,this.y=n+c*d+a*l-s*h,this.z=i+c*h+s*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Uo.copy(this).projectOnVector(t),this.sub(Uo)}reflect(t){return this.sub(Uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new R,Zc=new on;class Mn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),fr.subVectors(this.max,ks),Ki.subVectors(t.a,ks),ji.subVectors(t.b,ks),$i.subVectors(t.c,ks),Zn.subVectors(ji,Ki),Jn.subVectors($i,ji),Mi.subVectors(Ki,$i);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-Mi.z,Mi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,Mi.z,0,-Mi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-Mi.y,Mi.x,0];return!No(e,Ki,ji,$i,fr)||(e=[1,0,0,0,1,0,0,0,1],!No(e,Ki,ji,$i,fr))?!1:(pr.crossVectors(Zn,Jn),e=[pr.x,pr.y,pr.z],No(e,Ki,ji,$i,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new R,new R,new R,new R,new R,new R,new R,new R],Sn=new R,dr=new Mn,Ki=new R,ji=new R,$i=new R,Zn=new R,Jn=new R,Mi=new R,ks=new R,fr=new R,pr=new R,Si=new R;function No(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Si.fromArray(r,s);const a=i.x*Math.abs(Si.x)+i.y*Math.abs(Si.y)+i.z*Math.abs(Si.z),c=t.dot(Si),l=e.dot(Si),d=n.dot(Si);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Xd=new Mn,Bs=new R,Fo=new R;class Dn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Fo)),this.expandByPoint(Bs.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new R,Oo=new R,mr=new R,Qn=new R,ko=new R,gr=new R,Bo=new R;class mo{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Oo.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Oo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(mr),a=Qn.dot(this.direction),c=-Qn.dot(mr),l=Qn.lengthSq(),d=Math.abs(1-o*o);let h,u,f,g;if(d>0)if(h=o*c-a,u=o*a-c,g=s*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,f=h*(h+o*u+2*a)+u*(o*h+u+2*c)+l}else u=s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;else u=-s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+l);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Oo).addScaledVector(mr,u),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),d>=0?(s=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-u.z)*h,c=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,c=(t.min.z-u.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,s){ko.subVectors(e,t),gr.subVectors(n,t),Bo.crossVectors(ko,gr);let o=this.direction.dot(Bo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);const c=a*this.direction.dot(gr.crossVectors(Qn,gr));if(c<0)return null;const l=a*this.direction.dot(ko.cross(Qn));if(l<0||c+l>o)return null;const d=-a*Qn.dot(Bo);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,i,s,o,a,c,l,d,h,u,f,g,_,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,d,h,u,f,g,_,m)}set(t,e,n,i,s,o,a,c,l,d,h,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Zi.setFromMatrixColumn(t,0).length(),s=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=o*d,f=o*h,g=a*d,_=a*h;e[0]=c*d,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*d,f=c*h,g=l*d,_=l*h;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*d,f=c*h,g=l*d,_=l*h;e[0]=u-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*d,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*d,f=o*h,g=a*d,_=a*h;e[0]=c*d,e[4]=g*l-f,e[8]=u*l+_,e[1]=c*h,e[5]=_*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*d,e[4]=_-u*h,e[8]=g*h+f,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=f*h+g,e[10]=u-_*h}else if(t.order==="XZY"){const u=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*d,e[4]=-h,e[8]=l*d,e[1]=u*h+_,e[5]=o*d,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*d,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qd,t,Yd)}lookAt(t,e,n){const i=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ti.crossVectors(n,un),ti.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ti.crossVectors(n,un)),ti.normalize(),_r.crossVectors(un,ti),i[0]=ti.x,i[4]=_r.x,i[8]=un.x,i[1]=ti.y,i[5]=_r.y,i[9]=un.y,i[2]=ti.z,i[6]=_r.z,i[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],M=n[7],b=n[11],P=n[15],A=i[0],T=i[4],O=i[8],v=i[12],w=i[1],U=i[5],D=i[9],q=i[13],L=i[2],k=i[6],V=i[10],K=i[14],Y=i[3],$=i[7],J=i[11],lt=i[15];return s[0]=o*A+a*w+c*L+l*Y,s[4]=o*T+a*U+c*k+l*$,s[8]=o*O+a*D+c*V+l*J,s[12]=o*v+a*q+c*K+l*lt,s[1]=d*A+h*w+u*L+f*Y,s[5]=d*T+h*U+u*k+f*$,s[9]=d*O+h*D+u*V+f*J,s[13]=d*v+h*q+u*K+f*lt,s[2]=g*A+_*w+m*L+p*Y,s[6]=g*T+_*U+m*k+p*$,s[10]=g*O+_*D+m*V+p*J,s[14]=g*v+_*q+m*K+p*lt,s[3]=x*A+M*w+b*L+P*Y,s[7]=x*T+M*U+b*k+P*$,s[11]=x*O+M*D+b*V+P*J,s[15]=x*v+M*q+b*K+P*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],h=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*c*h-i*l*h-s*a*u+n*l*u+i*a*f-n*c*f)+_*(+e*c*f-e*l*u+s*o*u-i*o*f+i*l*d-s*c*d)+m*(+e*l*h-e*a*f-s*o*h+n*o*f+s*a*d-n*l*d)+p*(-i*a*d-e*c*h+e*a*u+i*o*h-n*o*u+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],h=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=h*m*l-_*u*l+_*c*f-a*m*f-h*c*p+a*u*p,M=g*u*l-d*m*l-g*c*f+o*m*f+d*c*p-o*u*p,b=d*_*l-g*h*l+g*a*f-o*_*f-d*a*p+o*h*p,P=g*h*c-d*_*c-g*a*u+o*_*u+d*a*m-o*h*m,A=e*x+n*M+i*b+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=x*T,t[1]=(_*u*s-h*m*s-_*i*f+n*m*f+h*i*p-n*u*p)*T,t[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*T,t[3]=(h*c*s-a*u*s-h*i*l+n*u*l+a*i*f-n*c*f)*T,t[4]=M*T,t[5]=(d*m*s-g*u*s+g*i*f-e*m*f-d*i*p+e*u*p)*T,t[6]=(g*c*s-o*m*s-g*i*l+e*m*l+o*i*p-e*c*p)*T,t[7]=(o*u*s-d*c*s+d*i*l-e*u*l-o*i*f+e*c*f)*T,t[8]=b*T,t[9]=(g*h*s-d*_*s-g*n*f+e*_*f+d*n*p-e*h*p)*T,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*T,t[11]=(d*a*s-o*h*s-d*n*l+e*h*l+o*n*f-e*a*f)*T,t[12]=P*T,t[13]=(d*_*i-g*h*i+g*n*u-e*_*u-d*n*m+e*h*m)*T,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*T,t[15]=(o*h*i-d*a*i+d*n*c-e*h*c-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,d*a+n,d*c-i*o,0,l*c-i*a,d*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,d=o+o,h=a+a,u=s*l,f=s*d,g=s*h,_=o*d,m=o*h,p=a*h,x=c*l,M=c*d,b=c*h,P=n.x,A=n.y,T=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+b)*P,i[2]=(g-M)*P,i[3]=0,i[4]=(f-b)*A,i[5]=(1-(u+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(g+M)*T,i[9]=(m-x)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Zi.set(i[0],i[1],i[2]).length();const o=Zi.set(i[4],i[5],i[6]).length(),a=Zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],bn.copy(this);const l=1/s,d=1/o,h=1/a;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,e.setFromRotationMatrix(bn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=qn){const c=this.elements,l=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===qn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===lo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=qn){const c=this.elements,l=1/(e-t),d=1/(n-i),h=1/(o-s),u=(e+t)*l,f=(n+i)*d;let g,_;if(a===qn)g=(o+s)*h,_=-2*h;else if(a===lo)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new R,bn=new te,qd=new R(0,0,0),Yd=new R(1,1,1),ti=new R,_r=new R,un=new R,Jc=new te,Qc=new on;class go{constructor(t=0,e=0,n=0,i=go.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}go.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kd=0;const tl=new R,Ji=new on,Bn=new te,xr=new R,zs=new R,jd=new R,$d=new on,el=new R(1,0,0),nl=new R(0,1,0),il=new R(0,0,1),Zd={type:"added"},Jd={type:"removed"};class Te extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new R,e=new go,n=new on,i=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new ie}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(nl,t)}rotateZ(t){return this.rotateOnAxis(il,t)}translateOnAxis(t,e){return tl.copy(t).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(nl,t)}translateZ(t){return this.translateOnAxis(il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(zs,xr,this.up):Bn.lookAt(xr,zs,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Zd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,$d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),h=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new R(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new R,zn=new R,zo=new R,Hn=new R,Qi=new R,ts=new R,sl=new R,Ho=new R,Go=new R,Vo=new R;let yr=!1;class xn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Tn.subVectors(i,e),zn.subVectors(n,e),zo.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(zn),c=Tn.dot(zo),l=zn.dot(zn),d=zn.dot(zo),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(l*c-a*d)*u,g=(o*d-a*c)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(t,e,n,i,s,o,a,c){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),this.getInterpolation(t,e,n,i,s,o,a,c)}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),zn.subVectors(t,e),Tn.cross(zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Tn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Qi.subVectors(i,n),ts.subVectors(s,n),Ho.subVectors(t,n);const c=Qi.dot(Ho),l=ts.dot(Ho);if(c<=0&&l<=0)return e.copy(n);Go.subVectors(t,i);const d=Qi.dot(Go),h=ts.dot(Go);if(d>=0&&h<=d)return e.copy(i);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(Qi,o);Vo.subVectors(t,s);const f=Qi.dot(Vo),g=ts.dot(Vo);if(g>=0&&f<=g)return e.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ts,a);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return sl.subVectors(s,i),a=(h-d)/(h-d+(f-g)),e.copy(i).addScaledVector(sl,a);const p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(Qi,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Wo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=ja(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Wo(o,s,t+1/3),this.g=Wo(o,s,t),this.b=Wo(o,s,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=se){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=se){const n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=se){return le.fromWorkingColorSpace(je.copy(this),t),Math.round(Ze(je.r*255,0,255))*65536+Math.round(Ze(je.g*255,0,255))*256+Math.round(Ze(je.b*255,0,255))}getHexString(t=se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(je.copy(this),e);const n=je.r,i=je.g,s=je.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=d<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=se){le.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,i=je.b;return t!==se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(vr);const n=Zs(ei.h,vr.h,e),i=Zs(ei.s,vr.s,e),s=Zs(ei.l,vr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Tt;Tt.NAMES=Oh;let Qd=0;class vn extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=En(),this.name="",this.type="Material",this.blending=fi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Aa,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ae extends vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new R,Mr=new Yt;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ia&&(t.usage=this.usage),t}}class kh extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bh extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tf=0;const gn=new te,Xo=new Te,es=new R,dn=new Mn,Hs=new Mn,Ve=new R;class De extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?Bh:kh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ie().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(dn.min,Hs.min),dn.expandByPoint(Ve),Ve.addVectors(dn.max,Hs.max),dn.expandByPoint(Ve)):(dn.expandByPoint(Hs.min),dn.expandByPoint(Hs.max))}dn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ve.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Ve.fromBufferAttribute(a,l),c&&(es.fromBufferAttribute(t,l),Ve.add(es)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],d=[];for(let w=0;w<a;w++)l[w]=new R,d[w]=new R;const h=new R,u=new R,f=new R,g=new Yt,_=new Yt,m=new Yt,p=new R,x=new R;function M(w,U,D){h.fromArray(i,w*3),u.fromArray(i,U*3),f.fromArray(i,D*3),g.fromArray(o,w*2),_.fromArray(o,U*2),m.fromArray(o,D*2),u.sub(h),f.sub(h),_.sub(g),m.sub(g);const q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(q),x.copy(f).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(q),l[w].add(p),l[U].add(p),l[D].add(p),d[w].add(x),d[U].add(x),d[D].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,U=b.length;w<U;++w){const D=b[w],q=D.start,L=D.count;for(let k=q,V=q+L;k<V;k+=3)M(n[k+0],n[k+1],n[k+2])}const P=new R,A=new R,T=new R,O=new R;function v(w){T.fromArray(s,w*3),O.copy(T);const U=l[w];P.copy(U),P.sub(T.multiplyScalar(T.dot(U))).normalize(),A.crossVectors(O,U);const q=A.dot(d[w])<0?-1:1;c[w*4]=P.x,c[w*4+1]=P.y,c[w*4+2]=P.z,c[w*4+3]=q}for(let w=0,U=b.length;w<U;++w){const D=b[w],q=D.start,L=D.count;for(let k=q,V=q+L;k<V;k+=3)v(n[k+0]),v(n[k+1]),v(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new R,s=new R,o=new R,a=new R,c=new R,l=new R,d=new R,h=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,h=a.normalized,u=new l.constructor(c.length*d);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*d;for(let p=0;p<d;p++)u[g++]=l[f++]}return new Le(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,h=l.length;d<h;d++){const u=l[d],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];d.push(f.toJSON(t.data))}d.length>0&&(i[c]=d,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(e))}const s=t.morphAttributes;for(const l in s){const d=[],h=s[l];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,d=o.length;l<d;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rl=new te,bi=new mo,Sr=new Dn,ol=new R,ns=new R,is=new R,ss=new R,qo=new R,br=new R,Tr=new Yt,Er=new Yt,wr=new Yt,al=new R,cl=new R,ll=new R,Ar=new R,Rr=new R;class pt extends Te{constructor(t=new De,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){br.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],h=s[c];d!==0&&(qo.fromBufferAttribute(h,t),o?br.addScaledVector(qo,d):br.addScaledVector(qo.sub(e),d))}e.add(br)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(Sr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Sr,ol)===null||bi.origin.distanceToSquared(ol)>(t.far-t.near)**2))&&(rl.copy(s).invert(),bi.copy(t.ray).applyMatrix4(rl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,P=M;b<P;b+=3){const A=a.getX(b),T=a.getX(b+1),O=a.getX(b+2);i=Cr(this,p,t,n,l,d,h,A,T,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),b=a.getX(m+2);i=Cr(this,o,t,n,l,d,h,x,M,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,P=M;b<P;b+=3){const A=b,T=b+1,O=b+2;i=Cr(this,p,t,n,l,d,h,A,T,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,b=m+2;i=Cr(this,o,t,n,l,d,h,x,M,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function ef(r,t,e,n,i,s,o,a){let c;if(t.side===sn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===An,a),c===null)return null;Rr.copy(a),Rr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Rr);return l<e.near||l>e.far?null:{distance:l,point:Rr.clone(),object:r}}function Cr(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,ns),r.getVertexPosition(c,is),r.getVertexPosition(l,ss);const d=ef(r,t,e,n,ns,is,ss,Ar);if(d){i&&(Tr.fromBufferAttribute(i,a),Er.fromBufferAttribute(i,c),wr.fromBufferAttribute(i,l),d.uv=xn.getInterpolation(Ar,ns,is,ss,Tr,Er,wr,new Yt)),s&&(Tr.fromBufferAttribute(s,a),Er.fromBufferAttribute(s,c),wr.fromBufferAttribute(s,l),d.uv1=xn.getInterpolation(Ar,ns,is,ss,Tr,Er,wr,new Yt),d.uv2=d.uv1),o&&(al.fromBufferAttribute(o,a),cl.fromBufferAttribute(o,c),ll.fromBufferAttribute(o,l),d.normal=xn.getInterpolation(Ar,ns,is,ss,al,cl,ll,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new R,materialIndex:0};xn.getNormal(ns,is,ss,h.normal),d.face=h}return d}class xi extends De{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(h,2));function g(_,m,p,x,M,b,P,A,T,O,v){const w=b/T,U=P/O,D=b/2,q=P/2,L=A/2,k=T+1,V=O+1;let K=0,Y=0;const $=new R;for(let J=0;J<V;J++){const lt=J*U-q;for(let ht=0;ht<k;ht++){const X=ht*w-D;$[_]=X*x,$[m]=lt*M,$[p]=L,l.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=A>0?1:-1,d.push($.x,$.y,$.z),h.push(ht/T),h.push(1-J/O),K+=1}}for(let J=0;J<O;J++)for(let lt=0;lt<T;lt++){const ht=u+lt+k*J,X=u+lt+k*(J+1),et=u+(lt+1)+k*(J+1),dt=u+(lt+1)+k*J;c.push(ht,X,dt),c.push(X,et,dt),Y+=6}a.addGroup(f,Y,v),f+=Y,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function en(r){const t={};for(let e=0;e<r.length;e++){const n=As(r[e]);for(const i in n)t[i]=n[i]}return t}function nf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function zh(r){return r.getRenderTarget()===null?r.outputColorSpace:le.workingColorSpace}const sf={clone:As,merge:en};var rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hh extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Je extends Hh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($s*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,os=1;class af extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Je(rs,os,t,e);i.layers=this.layers,this.add(i);const s=new Je(rs,os,t,e);s.layers=this.layers,this.add(s);const o=new Je(rs,os,t,e);o.layers=this.layers,this.add(o);const a=new Je(rs,os,t,e);a.layers=this.layers,this.add(a);const c=new Je(rs,os,t,e);c.layers=this.layers,this.add(c);const l=new Je(rs,os,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(h,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gh extends Be{constructor(t,e,n,i,s,o,a,c,l,d){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,i,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cf extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Bi?se:yn),this.texture=new Gh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xi(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:di});s.uniforms.tEquirect.value=e;const o=new pt(i,s),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=$e),new af(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Yo=new R,lf=new R,hf=new ie;class Ii{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Yo.subVectors(n,e).cross(lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hf.getNormalMatrix(t),i=this.coplanarPoint(Yo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Dn,Pr=new R;class $a{constructor(t=new Ii,e=new Ii,n=new Ii,i=new Ii,s=new Ii,o=new Ii){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],d=i[5],h=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],M=i[14],b=i[15];if(n[0].setComponents(c-s,u-l,m-f,b-p).normalize(),n[1].setComponents(c+s,u+l,m+f,b+p).normalize(),n[2].setComponents(c+o,u+d,m+g,b+x).normalize(),n[3].setComponents(c-o,u-d,m-g,b-x).normalize(),n[4].setComponents(c-a,u-h,m-_,b-M).normalize(),e===qn)n[5].setComponents(c+a,u+h,m+_,b+M).normalize();else if(e===lo)n[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Pr.x=i.normal.x>0?t.max.x:t.min.x,Pr.y=i.normal.y>0?t.max.y:t.min.y,Pr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function uf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,d){const h=l.array,u=l.usage,f=h.byteLength,g=r.createBuffer();r.bindBuffer(d,g),r.bufferData(d,h,u),l.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,d,h){const u=d.array,f=d._updateRange,g=d.updateRanges;if(r.bindBuffer(h,l),f.count===-1&&g.length===0&&r.bufferSubData(h,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];e?r.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):r.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d&&(r.deleteBuffer(d.buffer),n.delete(l))}function c(l,d){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,i(l,d));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,d),h.version=l.version}}return{get:o,remove:a,update:c}}class Za extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,d=c+1,h=t/a,u=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const x=p*u-o;for(let M=0;M<l;M++){const b=M*h-s;g.push(b,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const M=x+l*p,b=x+l*(p+1),P=x+1+l*(p+1),A=x+1+l*p;f.push(M,b,A),f.push(b,P,A)}this.setIndex(f),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.width,t.height,t.widthSegments,t.heightSegments)}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_f=`#ifdef USE_ALPHATEST
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
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,wf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`
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
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
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
#endif`,up=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
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
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$p=`float getShadowMask() {
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
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
#endif`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,ym=`#define DISTANCE
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
}`,vm=`#define DISTANCE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,wm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Im=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,km=`#define TOON
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
}`,Hm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:xf,aomap_pars_fragment:yf,batching_pars_vertex:vf,batching_vertex:Mf,begin_vertex:Sf,beginnormal_vertex:bf,bsdfs:Tf,iridescence_fragment:Ef,bumpmap_pars_fragment:wf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:Lf,color_pars_fragment:If,color_pars_vertex:Df,color_vertex:Uf,common:Nf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:kf,displacementmap_vertex:Bf,emissivemap_fragment:zf,emissivemap_pars_fragment:Hf,colorspace_fragment:Gf,colorspace_pars_fragment:Vf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:rp,envmap_vertex:Kf,fog_vertex:jf,fog_pars_vertex:$f,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_fragment:tp,lightmap_pars_fragment:ep,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:sp,lights_toon_fragment:op,lights_toon_pars_fragment:ap,lights_phong_fragment:cp,lights_phong_pars_fragment:lp,lights_physical_fragment:hp,lights_physical_pars_fragment:up,lights_fragment_begin:dp,lights_fragment_maps:fp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:xp,map_fragment:yp,map_pars_fragment:vp,map_particle_fragment:Mp,map_particle_pars_fragment:Sp,metalnessmap_fragment:bp,metalnessmap_pars_fragment:Tp,morphcolor_vertex:Ep,morphnormal_vertex:wp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Pp,normal_pars_fragment:Lp,normal_pars_vertex:Ip,normal_vertex:Dp,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:kp,opaque_fragment:Bp,packing:zp,premultiplied_alpha_fragment:Hp,project_vertex:Gp,dithering_fragment:Vp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:Kp,shadowmap_vertex:jp,shadowmask_pars_fragment:$p,skinbase_vertex:Zp,skinning_pars_vertex:Jp,skinning_vertex:Qp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:om,uv_pars_fragment:am,uv_pars_vertex:cm,uv_vertex:lm,worldpos_vertex:hm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:_m,depth_frag:xm,distanceRGBA_vert:ym,distanceRGBA_frag:vm,equirect_vert:Mm,equirect_frag:Sm,linedashed_vert:bm,linedashed_frag:Tm,meshbasic_vert:Em,meshbasic_frag:wm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Pm,meshnormal_vert:Lm,meshnormal_frag:Im,meshphong_vert:Dm,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:Fm,meshtoon_vert:Om,meshtoon_frag:km,points_vert:Bm,points_frag:zm,shadow_vert:Hm,shadow_frag:Gm,sprite_vert:Vm,sprite_frag:Wm},mt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Ln={basic:{uniforms:en([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:en([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:en([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:en([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:en([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:en([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:en([mt.points,mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:en([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:en([mt.common,mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:en([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:en([mt.sprite,mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:en([mt.common,mt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:en([mt.lights,mt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Ln.physical={uniforms:en([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Lr={r:0,b:0,g:0};function Xm(r,t,e,n,i,s,o){const a=new Tt(0);let c=s===!0?0:1,l,d,h=null,u=0,f=null;function g(m,p){let x=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=(p.backgroundBlurriness>0?e:t).get(M)),M===null?_(a,c):M&&M.isColor&&(_(M,1),x=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===fo)?(d===void 0&&(d=new pt(new xi(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:As(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=le.getTransfer(M.colorSpace)!==Se,(h!==M||u!==M.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,h=M,u=M.version,f=r.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pt(new Za(2,2),new Rn({name:"BackgroundMaterial",uniforms:As(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=le.getTransfer(M.colorSpace)!==Se,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(Lr,zh(r)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function qm(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null);let l=c,d=!1;function h(L,k,V,K,Y){let $=!1;if(o){const J=_(K,V,k);l!==J&&(l=J,f(l.object)),$=p(L,K,V,Y),$&&x(L,K,V,Y)}else{const J=k.wireframe===!0;(l.geometry!==K.id||l.program!==V.id||l.wireframe!==J)&&(l.geometry=K.id,l.program=V.id,l.wireframe=J,$=!0)}Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,O(L,k,V,K),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,k,V){const K=V.wireframe===!0;let Y=a[L.id];Y===void 0&&(Y={},a[L.id]=Y);let $=Y[k.id];$===void 0&&($={},Y[k.id]=$);let J=$[K];return J===void 0&&(J=m(u()),$[K]=J),J}function m(L){const k=[],V=[],K=[];for(let Y=0;Y<i;Y++)k[Y]=0,V[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:K,object:L,attributes:{},index:null}}function p(L,k,V,K){const Y=l.attributes,$=k.attributes;let J=0;const lt=V.getAttributes();for(const ht in lt)if(lt[ht].location>=0){const et=Y[ht];let dt=$[ht];if(dt===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(dt=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(dt=L.instanceColor)),et===void 0||et.attribute!==dt||dt&&et.data!==dt.data)return!0;J++}return l.attributesNum!==J||l.index!==K}function x(L,k,V,K){const Y={},$=k.attributes;let J=0;const lt=V.getAttributes();for(const ht in lt)if(lt[ht].location>=0){let et=$[ht];et===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));const dt={};dt.attribute=et,et&&et.data&&(dt.data=et.data),Y[ht]=dt,J++}l.attributes=Y,l.attributesNum=J,l.index=K}function M(){const L=l.newAttributes;for(let k=0,V=L.length;k<V;k++)L[k]=0}function b(L){P(L,0)}function P(L,k){const V=l.newAttributes,K=l.enabledAttributes,Y=l.attributeDivisors;V[L]=1,K[L]===0&&(r.enableVertexAttribArray(L),K[L]=1),Y[L]!==k&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),Y[L]=k)}function A(){const L=l.newAttributes,k=l.enabledAttributes;for(let V=0,K=k.length;V<K;V++)k[V]!==L[V]&&(r.disableVertexAttribArray(V),k[V]=0)}function T(L,k,V,K,Y,$,J){J===!0?r.vertexAttribIPointer(L,k,V,Y,$):r.vertexAttribPointer(L,k,V,K,Y,$)}function O(L,k,V,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const Y=K.attributes,$=V.getAttributes(),J=k.defaultAttributeValues;for(const lt in $){const ht=$[lt];if(ht.location>=0){let X=Y[lt];if(X===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){const et=X.normalized,dt=X.itemSize,vt=e.get(X);if(vt===void 0)continue;const St=vt.buffer,Ot=vt.type,Rt=vt.bytesPerElement,Ct=n.isWebGL2===!0&&(Ot===r.INT||Ot===r.UNSIGNED_INT||X.gpuType===Sh);if(X.isInterleavedBufferAttribute){const Lt=X.data,G=Lt.stride,Me=X.offset;if(Lt.isInstancedInterleavedBuffer){for(let Et=0;Et<ht.locationSize;Et++)P(ht.location+Et,Lt.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let Et=0;Et<ht.locationSize;Et++)b(ht.location+Et);r.bindBuffer(r.ARRAY_BUFFER,St);for(let Et=0;Et<ht.locationSize;Et++)T(ht.location+Et,dt/ht.locationSize,Ot,et,G*Rt,(Me+dt/ht.locationSize*Et)*Rt,Ct)}else{if(X.isInstancedBufferAttribute){for(let Lt=0;Lt<ht.locationSize;Lt++)P(ht.location+Lt,X.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Lt=0;Lt<ht.locationSize;Lt++)b(ht.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let Lt=0;Lt<ht.locationSize;Lt++)T(ht.location+Lt,dt/ht.locationSize,Ot,et,dt*Rt,dt/ht.locationSize*Lt*Rt,Ct)}}else if(J!==void 0){const et=J[lt];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(ht.location,et);break;case 3:r.vertexAttrib3fv(ht.location,et);break;case 4:r.vertexAttrib4fv(ht.location,et);break;default:r.vertexAttrib1fv(ht.location,et)}}}}A()}function v(){D();for(const L in a){const k=a[L];for(const V in k){const K=k[V];for(const Y in K)g(K[Y].object),delete K[Y];delete k[V]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const k=a[L.id];for(const V in k){const K=k[V];for(const Y in K)g(K[Y].object),delete K[Y];delete k[V]}delete a[L.id]}function U(L){for(const k in a){const V=a[k];if(V[L.id]===void 0)continue;const K=V[L.id];for(const Y in K)g(K[Y].object),delete K[Y];delete V[L.id]}}function D(){q(),d=!0,l!==c&&(l=c,f(l.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:D,resetDefaultState:q,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:b,disableUnusedAttributes:A}}function Ym(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}function a(d,h){r.drawArrays(s,d,h),e.update(h,s,1)}function c(d,h,u){if(u===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,d,h,u),e.update(h,s,u)}function l(d,h,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(d[g],h[g]);else{f.multiDrawArraysWEBGL(s,d,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Km(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=u>0,b=o||t.has("OES_texture_float"),P=M&&b,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:P,maxSamples:A}}function jm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Ii,a=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?d(null):l();else{const x=s?0:n,M=x*4;let b=p.clippingState||null;c.value=b,b=d(g,u,M,f);for(let P=0;P!==M;++P)b[P]=e[P];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=f;M!==_;++M,b+=4)o.copy(h[M]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function $m(r){let t=new WeakMap;function e(o,a){return a===Ra?o.mapping=Ss:a===Ca&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ra||a===Ca)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new cf(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ja extends Hh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _s=4,hl=[.125,.215,.35,.446,.526,.582],Ni=20,Ko=new Ja,ul=new Tt;let jo=null,$o=0,Zo=0;const Di=(1+Math.sqrt(5))/2,as=1/Di,dl=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Di,as),new R(0,Di,-as),new R(as,0,Di),new R(-as,0,Di),new R(Di,as,0),new R(-Di,as,0)];class fl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){jo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jo,$o,Zo),t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:nr,format:an,colorSpace:Re,depthBuffer:!1},i=pl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zm(s)),this._blurMaterial=Jm(s,t,e)}return i}_compileMaterial(t){const e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,Ko)}_sceneToCubeUV(t,e,n,i){const a=new Je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(ul),d.toneMapping=Yn,d.autoClear=!1;const f=new Ae({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new pt(new xi,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(ul),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;Ir(i,x*M,p>2?M:0,M,M),d.setRenderTarget(i),_&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ss||t.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Ir(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ko)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=dl[(i-1)%dl.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new pt(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),_=s/g,m=isFinite(s)?1+Math.floor(d*_):Ni;m>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const p=[];let x=0;for(let T=0;T<Ni;++T){const O=T/_,v=Math.exp(-O*O/2);p.push(v),T===0?x+=v:T<m&&(x+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const b=this._sizeLods[i],P=3*b*(i>M-_s?i-M+_s:0),A=4*(this._cubeSize-b);Ir(e,P,A,3*b,2*b),c.setRenderTarget(e),c.render(h,Ko)}}function Zm(r){const t=[],e=[],n=[];let i=r;const s=r-_s+1+hl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-_s?c=hl[o-r+_s-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),M=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,O=A>2?0:-1,v=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];x.set(v,_*g*A),M.set(u,m*g*A);const w=[A,A,A,A,A,A];b.set(w,p*g*A)}const P=new De;P.setAttribute("position",new Le(x,_)),P.setAttribute("uv",new Le(M,m)),P.setAttribute("faceIndex",new Le(b,p)),t.push(P),i>_s&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pl(r,t,e){const n=new Hi(r,t,e);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Jm(r,t,e){const n=new Float32Array(Ni),i=new R(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ml(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function gl(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Qa(){return`

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
	`}function Qm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ra||c===Ca,d=c===Ss||c===bs;if(l||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new fl(r)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||d&&h&&i(h)){e===null&&(e=new fl(r));const u=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function t0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function e0(r,t,e,n){const i={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(h){const u=h.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function l(h){const u=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,b=x.length;M<b;M+=3){const P=x[M+0],A=x[M+1],T=x[M+2];u.push(P,A,A,T,T,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,b=x.length/3-1;M<b;M+=3){const P=M+0,A=M+1,T=M+2;u.push(P,A,A,T,T,P)}}else return;const m=new(Ih(u)?Bh:kh)(u,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function n0(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function d(f,g){r.drawElements(s,g,a,f*c),e.update(g,s,1)}function h(f,g,_){if(_===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*c,_),e.update(g,s,_)}function u(f,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];e.update(p,s,1)}}this.setMode=o,this.setIndex=l,this.render=d,this.renderInstances=h,this.renderMultiDraw=u}function i0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function s0(r,t){return r[0]-t[0]}function r0(r,t){return Math.abs(t[1])-Math.abs(r[1])}function o0(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new xe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,d,h){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(d);if(m===void 0||m.count!==_){let k=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",k)};var f=k;m!==void 0&&m.texture.dispose();const M=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let v=0;M===!0&&(v=1),b===!0&&(v=2),P===!0&&(v=3);let w=d.attributes.position.count*v,U=1;w>t.maxTextureSize&&(U=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const D=new Float32Array(w*U*4*_),q=new Nh(D,w,U,_);q.type=Xn,q.needsUpdate=!0;const L=v*4;for(let V=0;V<_;V++){const K=A[V],Y=T[V],$=O[V],J=w*U*4*V;for(let lt=0;lt<K.count;lt++){const ht=lt*L;M===!0&&(o.fromBufferAttribute(K,lt),D[J+ht+0]=o.x,D[J+ht+1]=o.y,D[J+ht+2]=o.z,D[J+ht+3]=0),b===!0&&(o.fromBufferAttribute(Y,lt),D[J+ht+4]=o.x,D[J+ht+5]=o.y,D[J+ht+6]=o.z,D[J+ht+7]=0),P===!0&&(o.fromBufferAttribute($,lt),D[J+ht+8]=o.x,D[J+ht+9]=o.y,D[J+ht+10]=o.z,D[J+ht+11]=$.itemSize===4?o.w:1)}}m={count:_,texture:q,size:new Yt(w,U)},s.set(d,m),d.addEventListener("dispose",k)}let p=0;for(let M=0;M<u.length;M++)p+=u[M];const x=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let _=n[d.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[d.id]=_}for(let b=0;b<g;b++){const P=_[b];P[0]=b,P[1]=u[b]}_.sort(r0);for(let b=0;b<8;b++)b<g&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(s0);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const P=a[b],A=P[0],T=P[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&d.getAttribute("morphTarget"+b)!==m[A]&&d.setAttribute("morphTarget"+b,m[A]),p&&d.getAttribute("morphNormal"+b)!==p[A]&&d.setAttribute("morphNormal"+b,p[A]),i[b]=T,x+=T):(m&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),p&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),i[b]=0)}const M=d.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function a0(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,h=t.get(c,d);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Wh extends Be{constructor(t,e,n,i,s,o,a,c,l,d){if(d=d!==void 0?d:ki,d!==ki&&d!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ki&&(n=hi),n===void 0&&d===Ts&&(n=Oi),super(null,i,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=c!==void 0?c:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xh=new Be,qh=new Wh(1,1);qh.compareFunction=Lh;const Yh=new Nh,Kh=new Wd,jh=new Gh,_l=[],xl=[],yl=new Float32Array(16),vl=new Float32Array(9),Ml=new Float32Array(4);function Ls(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=_l[i];if(s===void 0&&(s=new Float32Array(i),_l[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ze(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function He(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function _o(r,t){let e=xl[t];e===void 0&&(e=new Int32Array(t),xl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function c0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function l0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2fv(this.addr,t),He(e,t)}}function h0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;r.uniform3fv(this.addr,t),He(e,t)}}function u0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4fv(this.addr,t),He(e,t)}}function d0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Ml.set(n),r.uniformMatrix2fv(this.addr,!1,Ml),He(e,n)}}function f0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;vl.set(n),r.uniformMatrix3fv(this.addr,!1,vl),He(e,n)}}function p0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;yl.set(n),r.uniformMatrix4fv(this.addr,!1,yl),He(e,n)}}function m0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function g0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2iv(this.addr,t),He(e,t)}}function _0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3iv(this.addr,t),He(e,t)}}function x0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4iv(this.addr,t),He(e,t)}}function y0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function v0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2uiv(this.addr,t),He(e,t)}}function M0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3uiv(this.addr,t),He(e,t)}}function S0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4uiv(this.addr,t),He(e,t)}}function b0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?qh:Xh;e.setTexture2D(t||s,i)}function T0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Kh,i)}function E0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||jh,i)}function w0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Yh,i)}function A0(r){switch(r){case 5126:return c0;case 35664:return l0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return _0;case 35669:case 35673:return x0;case 5125:return y0;case 36294:return v0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return w0}}function R0(r,t){r.uniform1fv(this.addr,t)}function C0(r,t){const e=Ls(t,this.size,2);r.uniform2fv(this.addr,e)}function P0(r,t){const e=Ls(t,this.size,3);r.uniform3fv(this.addr,e)}function L0(r,t){const e=Ls(t,this.size,4);r.uniform4fv(this.addr,e)}function I0(r,t){const e=Ls(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function D0(r,t){const e=Ls(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function U0(r,t){const e=Ls(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function N0(r,t){r.uniform1iv(this.addr,t)}function F0(r,t){r.uniform2iv(this.addr,t)}function O0(r,t){r.uniform3iv(this.addr,t)}function k0(r,t){r.uniform4iv(this.addr,t)}function B0(r,t){r.uniform1uiv(this.addr,t)}function z0(r,t){r.uniform2uiv(this.addr,t)}function H0(r,t){r.uniform3uiv(this.addr,t)}function G0(r,t){r.uniform4uiv(this.addr,t)}function V0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Xh,s[o])}function W0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Kh,s[o])}function X0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||jh,s[o])}function q0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Yh,s[o])}function Y0(r){switch(r){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return L0;case 35674:return I0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return N0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return k0;case 5125:return B0;case 36294:return z0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}class K0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}}class j0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y0(e.type)}}class $0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function Sl(r,t){r.seq.push(t),r.map[t.id]=t}function Z0(r,t,e){const n=r.name,i=n.length;for(Jo.lastIndex=0;;){const s=Jo.exec(n),o=Jo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Sl(e,l===void 0?new K0(a,r,t):new j0(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new $0(a),Sl(e,h)),e=h}}}class no{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Z0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function bl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const J0=37297;let Q0=0;function tg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function eg(r){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(r);let n;switch(t===e?n="":t===co&&e===ao?n="LinearDisplayP3ToLinearSRGB":t===ao&&e===co&&(n="LinearSRGBToLinearDisplayP3"),r){case Re:case po:return[n,"LinearTransferOETF"];case se:case Ka:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Tl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+tg(r.getShaderSource(t),o)}else return i}function ng(r,t){const e=eg(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ig(r,t){let e;switch(t){case Zu:e="Linear";break;case Ju:e="Reinhard";break;case Qu:e="OptimizedCineon";break;case td:e="ACESFilmic";break;case nd:e="AgX";break;case ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function sg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function rg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function og(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ag(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function xs(r){return r!==""}function El(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(r){return r.replace(cg,hg)}const lg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hg(r,t){let e=Jt[t];if(e===void 0){const n=lg.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Na(e)}const ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(r){return r.replace(ug,dg)}function dg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Rl(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Eu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function pg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function gg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xa:t="ENVMAP_BLENDING_MULTIPLY";break;case ju:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function _g(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=fg(e),l=pg(e),d=mg(e),h=gg(e),u=_g(e),f=e.isWebGL2?"":sg(e),g=rg(e),_=og(s),m=i.createProgram();let p,x,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xs).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xs).join(`
`),x.length>0&&(x+=`
`)):(p=[Rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),x=[f,Rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,ng("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),o=Na(o),o=El(o,e),o=wl(o,e),a=Na(a),a=El(a,e),a=wl(a,e),o=Al(o),a=Al(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=M+p+o,P=M+x+a,A=bl(i,i.VERTEX_SHADER,b),T=bl(i,i.FRAGMENT_SHADER,P);i.attachShader(m,A),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(D){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(T).trim();let V=!0,K=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,A,T);else{const Y=Tl(i,A,"vertex"),$=Tl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+Y+`
`+$)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||k==="")&&(K=!1);K&&(D.diagnostics={runnable:V,programLog:q,vertexShader:{log:L,prefix:p},fragmentShader:{log:k,prefix:x}})}i.deleteShader(A),i.deleteShader(T),v=new no(i,m),w=ag(i,m)}let v;this.getUniforms=function(){return v===void 0&&O(this),v};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(m,J0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let yg=0;class vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mg(t),e.set(t,n)),n}}class Mg{constructor(t){this.id=yg++,this.code=t,this.usedTimes=0}}function Sg(r,t,e,n,i,s,o){const a=new Fh,c=new vg,l=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,w,U,D,q){const L=D.fog,k=q.geometry,V=v.isMeshStandardMaterial?D.environment:null,K=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),Y=K&&K.mapping===fo?K.image.height:null,$=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const J=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,lt=J!==void 0?J.length:0;let ht=0;k.morphAttributes.position!==void 0&&(ht=1),k.morphAttributes.normal!==void 0&&(ht=2),k.morphAttributes.color!==void 0&&(ht=3);let X,et,dt,vt;if($){const st=Ln[$];X=st.vertexShader,et=st.fragmentShader}else X=v.vertexShader,et=v.fragmentShader,c.update(v),dt=c.getVertexShaderID(v),vt=c.getFragmentShaderID(v);const St=r.getRenderTarget(),Ot=q.isInstancedMesh===!0,Rt=q.isBatchedMesh===!0,Ct=!!v.map,Lt=!!v.matcap,G=!!K,Me=!!v.aoMap,Et=!!v.lightMap,Bt=!!v.bumpMap,_t=!!v.normalMap,fe=!!v.displacementMap,Kt=!!v.emissiveMap,y=!!v.metalnessMap,S=!!v.roughnessMap,F=v.anisotropy>0,C=v.clearcoat>0,j=v.iridescence>0,Z=v.sheen>0,Mt=v.transmission>0,nt=F&&!!v.anisotropyMap,gt=C&&!!v.clearcoatMap,It=C&&!!v.clearcoatNormalMap,Pt=C&&!!v.clearcoatRoughnessMap,tt=j&&!!v.iridescenceMap,zt=j&&!!v.iridescenceThicknessMap,Ht=Z&&!!v.sheenColorMap,Dt=Z&&!!v.sheenRoughnessMap,yt=!!v.specularMap,xt=!!v.specularColorMap,Gt=!!v.specularIntensityMap,ee=Mt&&!!v.transmissionMap,pe=Mt&&!!v.thicknessMap,kt=!!v.gradientMap,rt=!!v.alphaMap,I=v.alphaTest>0,at=!!v.alphaHash,ct=!!v.extensions,Ft=!!k.attributes.uv1,Ut=!!k.attributes.uv2,ce=!!k.attributes.uv3;let H=Yn;return v.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(H=r.toneMapping),{isWebGL2:d,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:et,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Rt,instancing:Ot,instancingColor:Ot&&q.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:St===null?r.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Re,map:Ct,matcap:Lt,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:Y,aoMap:Me,lightMap:Et,bumpMap:Bt,normalMap:_t,displacementMap:u&&fe,emissiveMap:Kt,normalMapObjectSpace:_t&&v.normalMapType===gd,normalMapTangentSpace:_t&&v.normalMapType===Ya,metalnessMap:y,roughnessMap:S,anisotropy:F,anisotropyMap:nt,clearcoat:C,clearcoatMap:gt,clearcoatNormalMap:It,clearcoatRoughnessMap:Pt,iridescence:j,iridescenceMap:tt,iridescenceThicknessMap:zt,sheen:Z,sheenColorMap:Ht,sheenRoughnessMap:Dt,specularMap:yt,specularColorMap:xt,specularIntensityMap:Gt,transmission:Mt,transmissionMap:ee,thicknessMap:pe,gradientMap:kt,opaque:v.transparent===!1&&v.blending===fi,alphaMap:rt,alphaTest:I,alphaHash:at,combine:v.combine,mapUv:Ct&&_(v.map.channel),aoMapUv:Me&&_(v.aoMap.channel),lightMapUv:Et&&_(v.lightMap.channel),bumpMapUv:Bt&&_(v.bumpMap.channel),normalMapUv:_t&&_(v.normalMap.channel),displacementMapUv:fe&&_(v.displacementMap.channel),emissiveMapUv:Kt&&_(v.emissiveMap.channel),metalnessMapUv:y&&_(v.metalnessMap.channel),roughnessMapUv:S&&_(v.roughnessMap.channel),anisotropyMapUv:nt&&_(v.anisotropyMap.channel),clearcoatMapUv:gt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(v.sheenRoughnessMap.channel),specularMapUv:yt&&_(v.specularMap.channel),specularColorMapUv:xt&&_(v.specularColorMap.channel),specularIntensityMapUv:Gt&&_(v.specularIntensityMap.channel),transmissionMapUv:ee&&_(v.transmissionMap.channel),thicknessMapUv:pe&&_(v.thicknessMap.channel),alphaMapUv:rt&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(_t||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:Ut,vertexUv3s:ce,pointsUvs:q.isPoints===!0&&!!k.attributes.uv&&(Ct||rt),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:ht,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:H,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&le.getTransfer(v.map.colorSpace)===Se,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Oe,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ct&&v.extensions.derivatives===!0,extensionFragDepth:ct&&v.extensions.fragDepth===!0,extensionDrawBuffers:ct&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)w.push(U),w.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(x(w,v),M(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function b(v){const w=g[v.type];let U;if(w){const D=Ln[w];U=sf.clone(D.uniforms)}else U=v.uniforms;return U}function P(v,w){let U;for(let D=0,q=l.length;D<q;D++){const L=l[D];if(L.cacheKey===w){U=L,++U.usedTimes;break}}return U===void 0&&(U=new xg(r,w,v,s),l.push(U)),U}function A(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function T(v){c.remove(v)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:O}}function bg(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Tg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Cl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Pl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,u,f,g,_,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,u,f,g,_,m){const p=o(h,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(h,u,f,g,_,m){const p=o(h,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(h,u){e.length>1&&e.sort(h||Tg),n.length>1&&n.sort(u||Cl),i.length>1&&i.sort(u||Cl)}function d(){for(let h=t,u=r.length;h<u;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:d,sort:l}}function Eg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Pl,r.set(n,[o])):i>=s.length?(o=new Pl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function wg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Tt};break;case"SpotLight":e={position:new R,direction:new R,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function Ag(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Rg=0;function Cg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Pg(r,t){const e=new wg,n=Ag(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new R);const s=new R,o=new te,a=new te;function c(d,h){let u=0,f=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,m=0,p=0,x=0,M=0,b=0,P=0,A=0,T=0,O=0,v=0;d.sort(Cg);const w=h===!0?Math.PI:1;for(let D=0,q=d.length;D<q;D++){const L=d[D],k=L.color,V=L.intensity,K=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*V*w,f+=k.g*V*w,g+=k.b*V*w;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],V);v++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const J=L.shadow,lt=n.get(L);lt.shadowBias=J.bias,lt.shadowNormalBias=J.normalBias,lt.shadowRadius=J.radius,lt.shadowMapSize=J.mapSize,i.directionalShadow[_]=lt,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=L.shadow.matrix,b++}i.directional[_]=$,_++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(k).multiplyScalar(V*w),$.distance=K,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[p]=$;const J=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,J.updateMatrices(L),L.castShadow&&O++),i.spotLightMatrix[p]=J.matrix,L.castShadow){const lt=n.get(L);lt.shadowBias=J.bias,lt.shadowNormalBias=J.normalBias,lt.shadowRadius=J.radius,lt.shadowMapSize=J.mapSize,i.spotShadow[p]=lt,i.spotShadowMap[p]=Y,A++}p++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(k).multiplyScalar(V),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=$,x++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*w),$.distance=L.distance,$.decay=L.decay,L.castShadow){const J=L.shadow,lt=n.get(L);lt.shadowBias=J.bias,lt.shadowNormalBias=J.normalBias,lt.shadowRadius=J.radius,lt.shadowMapSize=J.mapSize,lt.shadowCameraNear=J.camera.near,lt.shadowCameraFar=J.camera.far,i.pointShadow[m]=lt,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=L.shadow.matrix,P++}i.point[m]=$,m++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(V*w),$.groundColor.copy(L.groundColor).multiplyScalar(V*w),i.hemi[M]=$,M++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const U=i.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==x||U.hemiLength!==M||U.numDirectionalShadows!==b||U.numPointShadows!==P||U.numSpotShadows!==A||U.numSpotMaps!==T||U.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=A+T-O,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=v,U.directionalLength=_,U.pointLength=m,U.spotLength=p,U.rectAreaLength=x,U.hemiLength=M,U.numDirectionalShadows=b,U.numPointShadows=P,U.numSpotShadows=A,U.numSpotMaps=T,U.numLightProbes=v,i.version=Rg++)}function l(d,h){let u=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let x=0,M=d.length;x<M;x++){const b=d[x];if(b.isDirectionalLight){const P=i.directional[u];P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),u++}else if(b.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const P=i.point[f];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const P=i.hemi[m];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Ll(r,t){const e=new Pg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Lg(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new Ll(r,t),e.set(s,[c])):o>=a.length?(c=new Ll(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ig extends vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dg extends vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
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
}`;function Fg(r,t,e){let n=new $a;const i=new Yt,s=new Yt,o=new xe,a=new Ig({depthPacking:md}),c=new Dg,l={},d=e.maxTextureSize,h={[An]:sn,[sn]:An,[Oe]:Oe},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Ug,fragmentShader:Ng}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let p=this.type;this.render=function(A,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=r.getRenderTarget(),w=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),D=r.state;D.setBlending(di),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const q=p!==Vn&&this.type===Vn,L=p===Vn&&this.type!==Vn;for(let k=0,V=A.length;k<V;k++){const K=A[k],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const $=Y.getFrameExtents();if(i.multiply($),s.copy(Y.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/$.x),i.x=s.x*$.x,Y.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/$.y),i.y=s.y*$.y,Y.mapSize.y=s.y)),Y.map===null||q===!0||L===!0){const lt=this.type!==Vn?{minFilter:We,magFilter:We}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Hi(i.x,i.y,lt),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const J=Y.getViewportCount();for(let lt=0;lt<J;lt++){const ht=Y.getViewport(lt);o.set(s.x*ht.x,s.y*ht.y,s.x*ht.z,s.y*ht.w),D.viewport(o),Y.updateMatrices(K,lt),n=Y.getFrustum(),b(T,O,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Vn&&x(Y,O),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,w,U)};function x(A,T){const O=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hi(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,O,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,O,f,_,null)}function M(A,T,O,v){let w=null;const U=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)w=U;else if(w=O.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=w.uuid,q=T.uuid;let L=l[D];L===void 0&&(L={},l[D]=L);let k=L[q];k===void 0&&(k=w.clone(),L[q]=k,T.addEventListener("dispose",P)),w=k}if(w.visible=T.visible,w.wireframe=T.wireframe,v===Vn?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:h[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,O.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const D=r.properties.get(w);D.light=O}return w}function b(A,T,O,v,w){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const q=t.update(A),L=A.material;if(Array.isArray(L)){const k=q.groups;for(let V=0,K=k.length;V<K;V++){const Y=k[V],$=L[Y.materialIndex];if($&&$.visible){const J=M(A,$,v,w);A.onBeforeShadow(r,A,T,O,q,J,Y),r.renderBufferDirect(O,null,q,J,A,Y),A.onAfterShadow(r,A,T,O,q,J,Y)}}}else if(L.visible){const k=M(A,L,v,w);A.onBeforeShadow(r,A,T,O,q,k,null),r.renderBufferDirect(O,null,q,k,A,null),A.onAfterShadow(r,A,T,O,q,k,null)}}const D=A.children;for(let q=0,L=D.length;q<L;q++)b(D[q],T,O,v,w)}function P(A){A.target.removeEventListener("dispose",P);for(const O in l){const v=l[O],w=A.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function Og(r,t,e){const n=e.isWebGL2;function i(){let I=!1;const at=new xe;let ct=null;const Ft=new xe(0,0,0,0);return{setMask:function(Ut){ct!==Ut&&!I&&(r.colorMask(Ut,Ut,Ut,Ut),ct=Ut)},setLocked:function(Ut){I=Ut},setClear:function(Ut,ce,H,Q,st){st===!0&&(Ut*=Q,ce*=Q,H*=Q),at.set(Ut,ce,H,Q),Ft.equals(at)===!1&&(r.clearColor(Ut,ce,H,Q),Ft.copy(at))},reset:function(){I=!1,ct=null,Ft.set(-1,0,0,0)}}}function s(){let I=!1,at=null,ct=null,Ft=null;return{setTest:function(Ut){Ut?Rt(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(Ut){at!==Ut&&!I&&(r.depthMask(Ut),at=Ut)},setFunc:function(Ut){if(ct!==Ut){switch(Ut){case Gu:r.depthFunc(r.NEVER);break;case Vu:r.depthFunc(r.ALWAYS);break;case Wu:r.depthFunc(r.LESS);break;case so:r.depthFunc(r.LEQUAL);break;case Xu:r.depthFunc(r.EQUAL);break;case qu:r.depthFunc(r.GEQUAL);break;case Yu:r.depthFunc(r.GREATER);break;case Ku:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ct=Ut}},setLocked:function(Ut){I=Ut},setClear:function(Ut){Ft!==Ut&&(r.clearDepth(Ut),Ft=Ut)},reset:function(){I=!1,at=null,ct=null,Ft=null}}}function o(){let I=!1,at=null,ct=null,Ft=null,Ut=null,ce=null,H=null,Q=null,st=null;return{setTest:function(ot){I||(ot?Rt(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(ot){at!==ot&&!I&&(r.stencilMask(ot),at=ot)},setFunc:function(ot,ut,it){(ct!==ot||Ft!==ut||Ut!==it)&&(r.stencilFunc(ot,ut,it),ct=ot,Ft=ut,Ut=it)},setOp:function(ot,ut,it){(ce!==ot||H!==ut||Q!==it)&&(r.stencilOp(ot,ut,it),ce=ot,H=ut,Q=it)},setLocked:function(ot){I=ot},setClear:function(ot){st!==ot&&(r.clearStencil(ot),st=ot)},reset:function(){I=!1,at=null,ct=null,Ft=null,Ut=null,ce=null,H=null,Q=null,st=null}}}const a=new i,c=new s,l=new o,d=new WeakMap,h=new WeakMap;let u={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,M=null,b=null,P=null,A=null,T=null,O=null,v=new Tt(0,0,0),w=0,U=!1,D=null,q=null,L=null,k=null,V=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=$>=2);let lt=null,ht={};const X=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),dt=new xe().fromArray(X),vt=new xe().fromArray(et);function St(I,at,ct,Ft){const Ut=new Uint8Array(4),ce=r.createTexture();r.bindTexture(I,ce),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let H=0;H<ct;H++)n&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(at,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,Ut):r.texImage2D(at+H,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ut);return ce}const Ot={};Ot[r.TEXTURE_2D]=St(r.TEXTURE_2D,r.TEXTURE_2D,1),Ot[r.TEXTURE_CUBE_MAP]=St(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ot[r.TEXTURE_2D_ARRAY]=St(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ot[r.TEXTURE_3D]=St(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Rt(r.DEPTH_TEST),c.setFunc(so),Kt(!1),y(uc),Rt(r.CULL_FACE),_t(di);function Rt(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Ct(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Lt(I,at){return f[I]!==at?(r.bindFramebuffer(I,at),f[I]=at,n&&(I===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=at),I===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=at)),!0):!1}function G(I,at){let ct=_,Ft=!1;if(I)if(ct=g.get(at),ct===void 0&&(ct=[],g.set(at,ct)),I.isWebGLMultipleRenderTargets){const Ut=I.texture;if(ct.length!==Ut.length||ct[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,H=Ut.length;ce<H;ce++)ct[ce]=r.COLOR_ATTACHMENT0+ce;ct.length=Ut.length,Ft=!0}}else ct[0]!==r.COLOR_ATTACHMENT0&&(ct[0]=r.COLOR_ATTACHMENT0,Ft=!0);else ct[0]!==r.BACK&&(ct[0]=r.BACK,Ft=!0);Ft&&(e.isWebGL2?r.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function Me(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const Et={[Ui]:r.FUNC_ADD,[Au]:r.FUNC_SUBTRACT,[Ru]:r.FUNC_REVERSE_SUBTRACT};if(n)Et[pc]=r.MIN,Et[mc]=r.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(Et[pc]=I.MIN_EXT,Et[mc]=I.MAX_EXT)}const Bt={[Cu]:r.ZERO,[Pu]:r.ONE,[Lu]:r.SRC_COLOR,[wa]:r.SRC_ALPHA,[Ou]:r.SRC_ALPHA_SATURATE,[Nu]:r.DST_COLOR,[Du]:r.DST_ALPHA,[Iu]:r.ONE_MINUS_SRC_COLOR,[Aa]:r.ONE_MINUS_SRC_ALPHA,[Fu]:r.ONE_MINUS_DST_COLOR,[Uu]:r.ONE_MINUS_DST_ALPHA,[ku]:r.CONSTANT_COLOR,[Bu]:r.ONE_MINUS_CONSTANT_COLOR,[zu]:r.CONSTANT_ALPHA,[Hu]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(I,at,ct,Ft,Ut,ce,H,Q,st,ot){if(I===di){p===!0&&(Ct(r.BLEND),p=!1);return}if(p===!1&&(Rt(r.BLEND),p=!0),I!==wu){if(I!==x||ot!==U){if((M!==Ui||A!==Ui)&&(r.blendEquation(r.FUNC_ADD),M=Ui,A=Ui),ot)switch(I){case fi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rn:r.blendFunc(r.ONE,r.ONE);break;case dc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case fi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case dc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,P=null,T=null,O=null,v.set(0,0,0),w=0,x=I,U=ot}return}Ut=Ut||at,ce=ce||ct,H=H||Ft,(at!==M||Ut!==A)&&(r.blendEquationSeparate(Et[at],Et[Ut]),M=at,A=Ut),(ct!==b||Ft!==P||ce!==T||H!==O)&&(r.blendFuncSeparate(Bt[ct],Bt[Ft],Bt[ce],Bt[H]),b=ct,P=Ft,T=ce,O=H),(Q.equals(v)===!1||st!==w)&&(r.blendColor(Q.r,Q.g,Q.b,st),v.copy(Q),w=st),x=I,U=!1}function fe(I,at){I.side===Oe?Ct(r.CULL_FACE):Rt(r.CULL_FACE);let ct=I.side===sn;at&&(ct=!ct),Kt(ct),I.blending===fi&&I.transparent===!1?_t(di):_t(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ft=I.stencilWrite;l.setTest(Ft),Ft&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Rt(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(I){D!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),D=I)}function y(I){I!==bu?(Rt(r.CULL_FACE),I!==q&&(I===uc?r.cullFace(r.BACK):I===Tu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),q=I}function S(I){I!==L&&(Y&&r.lineWidth(I),L=I)}function F(I,at,ct){I?(Rt(r.POLYGON_OFFSET_FILL),(k!==at||V!==ct)&&(r.polygonOffset(at,ct),k=at,V=ct)):Ct(r.POLYGON_OFFSET_FILL)}function C(I){I?Rt(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function j(I){I===void 0&&(I=r.TEXTURE0+K-1),lt!==I&&(r.activeTexture(I),lt=I)}function Z(I,at,ct){ct===void 0&&(lt===null?ct=r.TEXTURE0+K-1:ct=lt);let Ft=ht[ct];Ft===void 0&&(Ft={type:void 0,texture:void 0},ht[ct]=Ft),(Ft.type!==I||Ft.texture!==at)&&(lt!==ct&&(r.activeTexture(ct),lt=ct),r.bindTexture(I,at||Ot[I]),Ft.type=I,Ft.texture=at)}function Mt(){const I=ht[lt];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(I){dt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),dt.copy(I))}function ee(I){vt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),vt.copy(I))}function pe(I,at){let ct=h.get(at);ct===void 0&&(ct=new WeakMap,h.set(at,ct));let Ft=ct.get(I);Ft===void 0&&(Ft=r.getUniformBlockIndex(at,I.name),ct.set(I,Ft))}function kt(I,at){const Ft=h.get(at).get(I);d.get(at)!==Ft&&(r.uniformBlockBinding(at,Ft,I.__bindingPointIndex),d.set(at,Ft))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},lt=null,ht={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,M=null,b=null,P=null,A=null,T=null,O=null,v=new Tt(0,0,0),w=0,U=!1,D=null,q=null,L=null,k=null,V=null,dt.set(0,0,r.canvas.width,r.canvas.height),vt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Rt,disable:Ct,bindFramebuffer:Lt,drawBuffers:G,useProgram:Me,setBlending:_t,setMaterial:fe,setFlipSided:Kt,setCullFace:y,setLineWidth:S,setPolygonOffset:F,setScissorTest:C,activeTexture:j,bindTexture:Z,unbindTexture:Mt,compressedTexImage2D:nt,compressedTexImage3D:gt,texImage2D:yt,texImage3D:xt,updateUBOMapping:pe,uniformBlockBinding:kt,texStorage2D:Ht,texStorage3D:Dt,texSubImage2D:It,texSubImage3D:Pt,compressedTexSubImage2D:tt,compressedTexSubImage3D:zt,scissor:Gt,viewport:ee,reset:rt}}function kg(r,t,e,n,i,s,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,S){return f?new OffscreenCanvas(y,S):sr("canvas")}function _(y,S,F,C){let j=1;if((y.width>C||y.height>C)&&(j=C/Math.max(y.width,y.height)),j<1||S===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const Z=S?ho:Math.floor,Mt=Z(j*y.width),nt=Z(j*y.height);h===void 0&&(h=g(Mt,nt));const gt=F?g(Mt,nt):h;return gt.width=Mt,gt.height=nt,gt.getContext("2d").drawImage(y,0,0,Mt,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+Mt+"x"+nt+")."),gt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function m(y){return Ua(y.width)&&Ua(y.height)}function p(y){return a?!1:y.wrapS!==ke||y.wrapT!==ke||y.minFilter!==We&&y.minFilter!==$e}function x(y,S){return y.generateMipmaps&&S&&y.minFilter!==We&&y.minFilter!==$e}function M(y){r.generateMipmap(y)}function b(y,S,F,C,j=!1){if(a===!1)return S;if(y!==null){if(r[y]!==void 0)return r[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Z=S;if(S===r.RED&&(F===r.FLOAT&&(Z=r.R32F),F===r.HALF_FLOAT&&(Z=r.R16F),F===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(Z=r.R8UI),F===r.UNSIGNED_SHORT&&(Z=r.R16UI),F===r.UNSIGNED_INT&&(Z=r.R32UI),F===r.BYTE&&(Z=r.R8I),F===r.SHORT&&(Z=r.R16I),F===r.INT&&(Z=r.R32I)),S===r.RG&&(F===r.FLOAT&&(Z=r.RG32F),F===r.HALF_FLOAT&&(Z=r.RG16F),F===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RGBA){const Mt=j?oo:le.getTransfer(C);F===r.FLOAT&&(Z=r.RGBA32F),F===r.HALF_FLOAT&&(Z=r.RGBA16F),F===r.UNSIGNED_BYTE&&(Z=Mt===Se?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function P(y,S,F){return x(y,F)===!0||y.isFramebufferTexture&&y.minFilter!==We&&y.minFilter!==$e?Math.log2(Math.max(S.width,S.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?S.mipmaps.length:1}function A(y){return y===We||y===Pa||y===eo?r.NEAREST:r.LINEAR}function T(y){const S=y.target;S.removeEventListener("dispose",T),v(S),S.isVideoTexture&&d.delete(S)}function O(y){const S=y.target;S.removeEventListener("dispose",O),U(S)}function v(y){const S=n.get(y);if(S.__webglInit===void 0)return;const F=y.source,C=u.get(F);if(C){const j=C[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(y),Object.keys(C).length===0&&u.delete(F)}n.remove(y)}function w(y){const S=n.get(y);r.deleteTexture(S.__webglTexture);const F=y.source,C=u.get(F);delete C[S.__cacheKey],o.memory.textures--}function U(y){const S=y.texture,F=n.get(y),C=n.get(S);if(C.__webglTexture!==void 0&&(r.deleteTexture(C.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(F.__webglFramebuffer[j]))for(let Z=0;Z<F.__webglFramebuffer[j].length;Z++)r.deleteFramebuffer(F.__webglFramebuffer[j][Z]);else r.deleteFramebuffer(F.__webglFramebuffer[j]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[j])}else{if(Array.isArray(F.__webglFramebuffer))for(let j=0;j<F.__webglFramebuffer.length;j++)r.deleteFramebuffer(F.__webglFramebuffer[j]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let j=0;j<F.__webglColorRenderbuffer.length;j++)F.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[j]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let j=0,Z=S.length;j<Z;j++){const Mt=n.get(S[j]);Mt.__webglTexture&&(r.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(S[j])}n.remove(S),n.remove(y)}let D=0;function q(){D=0}function L(){const y=D;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),D+=1,y}function k(y){const S=[];return S.push(y.wrapS),S.push(y.wrapT),S.push(y.wrapR||0),S.push(y.magFilter),S.push(y.minFilter),S.push(y.anisotropy),S.push(y.internalFormat),S.push(y.format),S.push(y.type),S.push(y.generateMipmaps),S.push(y.premultiplyAlpha),S.push(y.flipY),S.push(y.unpackAlignment),S.push(y.colorSpace),S.join()}function V(y,S){const F=n.get(y);if(y.isVideoTexture&&fe(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const C=y.image;if(C===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(C.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(F,y,S);return}}e.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+S)}function K(y,S){const F=n.get(y);if(y.version>0&&F.__version!==y.version){dt(F,y,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+S)}function Y(y,S){const F=n.get(y);if(y.version>0&&F.__version!==y.version){dt(F,y,S);return}e.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+S)}function $(y,S){const F=n.get(y);if(y.version>0&&F.__version!==y.version){vt(F,y,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+S)}const J={[fn]:r.REPEAT,[ke]:r.CLAMP_TO_EDGE,[ro]:r.MIRRORED_REPEAT},lt={[We]:r.NEAREST,[Pa]:r.NEAREST_MIPMAP_NEAREST,[eo]:r.NEAREST_MIPMAP_LINEAR,[$e]:r.LINEAR,[Mh]:r.LINEAR_MIPMAP_NEAREST,[zi]:r.LINEAR_MIPMAP_LINEAR},ht={[_d]:r.NEVER,[bd]:r.ALWAYS,[xd]:r.LESS,[Lh]:r.LEQUAL,[yd]:r.EQUAL,[Sd]:r.GEQUAL,[vd]:r.GREATER,[Md]:r.NOTEQUAL};function X(y,S,F){if(F?(r.texParameteri(y,r.TEXTURE_WRAP_S,J[S.wrapS]),r.texParameteri(y,r.TEXTURE_WRAP_T,J[S.wrapT]),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,J[S.wrapR]),r.texParameteri(y,r.TEXTURE_MAG_FILTER,lt[S.magFilter]),r.texParameteri(y,r.TEXTURE_MIN_FILTER,lt[S.minFilter])):(r.texParameteri(y,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(y,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==ke||S.wrapT!==ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(y,r.TEXTURE_MAG_FILTER,A(S.magFilter)),r.texParameteri(y,r.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==We&&S.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(y,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(y,r.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===We||S.minFilter!==eo&&S.minFilter!==zi||S.type===Xn&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===nr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(y,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function et(y,S){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,S.addEventListener("dispose",T));const C=S.source;let j=u.get(C);j===void 0&&(j={},u.set(C,j));const Z=k(S);if(Z!==y.__cacheKey){j[Z]===void 0&&(j[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[Z].usedTimes++;const Mt=j[y.__cacheKey];Mt!==void 0&&(j[y.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(S)),y.__cacheKey=Z,y.__webglTexture=j[Z].texture}return F}function dt(y,S,F){let C=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(C=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(C=r.TEXTURE_3D);const j=et(y,S),Z=S.source;e.bindTexture(C,y.__webglTexture,r.TEXTURE0+F);const Mt=n.get(Z);if(Z.version!==Mt.__version||j===!0){e.activeTexture(r.TEXTURE0+F);const nt=le.getPrimaries(le.workingColorSpace),gt=S.colorSpace===yn?null:le.getPrimaries(S.colorSpace),It=S.colorSpace===yn||nt===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Pt=p(S)&&m(S.image)===!1;let tt=_(S.image,Pt,!1,i.maxTextureSize);tt=Kt(S,tt);const zt=m(tt)||a,Ht=s.convert(S.format,S.colorSpace);let Dt=s.convert(S.type),yt=b(S.internalFormat,Ht,Dt,S.colorSpace,S.isVideoTexture);X(C,S,zt);let xt;const Gt=S.mipmaps,ee=a&&S.isVideoTexture!==!0&&yt!==Rh,pe=Mt.__version===void 0||j===!0,kt=P(S,tt,zt);if(S.isDepthTexture)yt=r.DEPTH_COMPONENT,a?S.type===Xn?yt=r.DEPTH_COMPONENT32F:S.type===hi?yt=r.DEPTH_COMPONENT24:S.type===Oi?yt=r.DEPTH24_STENCIL8:yt=r.DEPTH_COMPONENT16:S.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ki&&yt===r.DEPTH_COMPONENT&&S.type!==qa&&S.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=hi,Dt=s.convert(S.type)),S.format===Ts&&yt===r.DEPTH_COMPONENT&&(yt=r.DEPTH_STENCIL,S.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Oi,Dt=s.convert(S.type))),pe&&(ee?e.texStorage2D(r.TEXTURE_2D,1,yt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,yt,tt.width,tt.height,0,Ht,Dt,null));else if(S.isDataTexture)if(Gt.length>0&&zt){ee&&pe&&e.texStorage2D(r.TEXTURE_2D,kt,yt,Gt[0].width,Gt[0].height);for(let rt=0,I=Gt.length;rt<I;rt++)xt=Gt[rt],ee?e.texSubImage2D(r.TEXTURE_2D,rt,0,0,xt.width,xt.height,Ht,Dt,xt.data):e.texImage2D(r.TEXTURE_2D,rt,yt,xt.width,xt.height,0,Ht,Dt,xt.data);S.generateMipmaps=!1}else ee?(pe&&e.texStorage2D(r.TEXTURE_2D,kt,yt,tt.width,tt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,Ht,Dt,tt.data)):e.texImage2D(r.TEXTURE_2D,0,yt,tt.width,tt.height,0,Ht,Dt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ee&&pe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,kt,yt,Gt[0].width,Gt[0].height,tt.depth);for(let rt=0,I=Gt.length;rt<I;rt++)xt=Gt[rt],S.format!==an?Ht!==null?ee?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,xt.width,xt.height,tt.depth,Ht,xt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,yt,xt.width,xt.height,tt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,xt.width,xt.height,tt.depth,Ht,Dt,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,rt,yt,xt.width,xt.height,tt.depth,0,Ht,Dt,xt.data)}else{ee&&pe&&e.texStorage2D(r.TEXTURE_2D,kt,yt,Gt[0].width,Gt[0].height);for(let rt=0,I=Gt.length;rt<I;rt++)xt=Gt[rt],S.format!==an?Ht!==null?ee?e.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,xt.width,xt.height,Ht,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,rt,yt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage2D(r.TEXTURE_2D,rt,0,0,xt.width,xt.height,Ht,Dt,xt.data):e.texImage2D(r.TEXTURE_2D,rt,yt,xt.width,xt.height,0,Ht,Dt,xt.data)}else if(S.isDataArrayTexture)ee?(pe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,kt,yt,tt.width,tt.height,tt.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Ht,Dt,tt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,yt,tt.width,tt.height,tt.depth,0,Ht,Dt,tt.data);else if(S.isData3DTexture)ee?(pe&&e.texStorage3D(r.TEXTURE_3D,kt,yt,tt.width,tt.height,tt.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Ht,Dt,tt.data)):e.texImage3D(r.TEXTURE_3D,0,yt,tt.width,tt.height,tt.depth,0,Ht,Dt,tt.data);else if(S.isFramebufferTexture){if(pe)if(ee)e.texStorage2D(r.TEXTURE_2D,kt,yt,tt.width,tt.height);else{let rt=tt.width,I=tt.height;for(let at=0;at<kt;at++)e.texImage2D(r.TEXTURE_2D,at,yt,rt,I,0,Ht,Dt,null),rt>>=1,I>>=1}}else if(Gt.length>0&&zt){ee&&pe&&e.texStorage2D(r.TEXTURE_2D,kt,yt,Gt[0].width,Gt[0].height);for(let rt=0,I=Gt.length;rt<I;rt++)xt=Gt[rt],ee?e.texSubImage2D(r.TEXTURE_2D,rt,0,0,Ht,Dt,xt):e.texImage2D(r.TEXTURE_2D,rt,yt,Ht,Dt,xt);S.generateMipmaps=!1}else ee?(pe&&e.texStorage2D(r.TEXTURE_2D,kt,yt,tt.width,tt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Ht,Dt,tt)):e.texImage2D(r.TEXTURE_2D,0,yt,Ht,Dt,tt);x(S,zt)&&M(C),Mt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function vt(y,S,F){if(S.image.length!==6)return;const C=et(y,S),j=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,y.__webglTexture,r.TEXTURE0+F);const Z=n.get(j);if(j.version!==Z.__version||C===!0){e.activeTexture(r.TEXTURE0+F);const Mt=le.getPrimaries(le.workingColorSpace),nt=S.colorSpace===yn?null:le.getPrimaries(S.colorSpace),gt=S.colorSpace===yn||Mt===nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const It=S.isCompressedTexture||S.image[0].isCompressedTexture,Pt=S.image[0]&&S.image[0].isDataTexture,tt=[];for(let rt=0;rt<6;rt++)!It&&!Pt?tt[rt]=_(S.image[rt],!1,!0,i.maxCubemapSize):tt[rt]=Pt?S.image[rt].image:S.image[rt],tt[rt]=Kt(S,tt[rt]);const zt=tt[0],Ht=m(zt)||a,Dt=s.convert(S.format,S.colorSpace),yt=s.convert(S.type),xt=b(S.internalFormat,Dt,yt,S.colorSpace),Gt=a&&S.isVideoTexture!==!0,ee=Z.__version===void 0||C===!0;let pe=P(S,zt,Ht);X(r.TEXTURE_CUBE_MAP,S,Ht);let kt;if(It){Gt&&ee&&e.texStorage2D(r.TEXTURE_CUBE_MAP,pe,xt,zt.width,zt.height);for(let rt=0;rt<6;rt++){kt=tt[rt].mipmaps;for(let I=0;I<kt.length;I++){const at=kt[I];S.format!==an?Dt!==null?Gt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,0,0,at.width,at.height,Dt,at.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,xt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,0,0,at.width,at.height,Dt,yt,at.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,xt,at.width,at.height,0,Dt,yt,at.data)}}}else{kt=S.mipmaps,Gt&&ee&&(kt.length>0&&pe++,e.texStorage2D(r.TEXTURE_CUBE_MAP,pe,xt,tt[0].width,tt[0].height));for(let rt=0;rt<6;rt++)if(Pt){Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,tt[rt].width,tt[rt].height,Dt,yt,tt[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,xt,tt[rt].width,tt[rt].height,0,Dt,yt,tt[rt].data);for(let I=0;I<kt.length;I++){const ct=kt[I].image[rt].image;Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,0,0,ct.width,ct.height,Dt,yt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,xt,ct.width,ct.height,0,Dt,yt,ct.data)}}else{Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Dt,yt,tt[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,xt,Dt,yt,tt[rt]);for(let I=0;I<kt.length;I++){const at=kt[I];Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,0,0,Dt,yt,at.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,xt,Dt,yt,at.image[rt])}}}x(S,Ht)&&M(r.TEXTURE_CUBE_MAP),Z.__version=j.version,S.onUpdate&&S.onUpdate(S)}y.__version=S.version}function St(y,S,F,C,j,Z){const Mt=s.convert(F.format,F.colorSpace),nt=s.convert(F.type),gt=b(F.internalFormat,Mt,nt,F.colorSpace);if(!n.get(S).__hasExternalTextures){const Pt=Math.max(1,S.width>>Z),tt=Math.max(1,S.height>>Z);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,gt,Pt,tt,S.depth,0,Mt,nt,null):e.texImage2D(j,Z,gt,Pt,tt,0,Mt,nt,null)}e.bindFramebuffer(r.FRAMEBUFFER,y),_t(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,C,j,n.get(F).__webglTexture,0,Bt(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,C,j,n.get(F).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(y,S,F){if(r.bindRenderbuffer(r.RENDERBUFFER,y),S.depthBuffer&&!S.stencilBuffer){let C=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||_t(S)){const j=S.depthTexture;j&&j.isDepthTexture&&(j.type===Xn?C=r.DEPTH_COMPONENT32F:j.type===hi&&(C=r.DEPTH_COMPONENT24));const Z=Bt(S);_t(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,C,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,C,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,C,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,y)}else if(S.depthBuffer&&S.stencilBuffer){const C=Bt(S);F&&_t(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,C,r.DEPTH24_STENCIL8,S.width,S.height):_t(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,y)}else{const C=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let j=0;j<C.length;j++){const Z=C[j],Mt=s.convert(Z.format,Z.colorSpace),nt=s.convert(Z.type),gt=b(Z.internalFormat,Mt,nt,Z.colorSpace),It=Bt(S);F&&_t(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,It,gt,S.width,S.height):_t(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,It,gt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,gt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(y,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,y),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const C=n.get(S.depthTexture).__webglTexture,j=Bt(S);if(S.depthTexture.format===ki)_t(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,C,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,C,0);else if(S.depthTexture.format===Ts)_t(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,C,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,C,0);else throw new Error("Unknown depthTexture format")}function Ct(y){const S=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Rt(S.__webglFramebuffer,y)}else if(F){S.__webglDepthbuffer=[];for(let C=0;C<6;C++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[C]),S.__webglDepthbuffer[C]=r.createRenderbuffer(),Ot(S.__webglDepthbuffer[C],y,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Ot(S.__webglDepthbuffer,y,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(y,S,F){const C=n.get(y);S!==void 0&&St(C.__webglFramebuffer,y,y.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Ct(y)}function G(y){const S=y.texture,F=n.get(y),C=n.get(S);y.addEventListener("dispose",O),y.isWebGLMultipleRenderTargets!==!0&&(C.__webglTexture===void 0&&(C.__webglTexture=r.createTexture()),C.__version=S.version,o.memory.textures++);const j=y.isWebGLCubeRenderTarget===!0,Z=y.isWebGLMultipleRenderTargets===!0,Mt=m(y)||a;if(j){F.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[nt]=[];for(let gt=0;gt<S.mipmaps.length;gt++)F.__webglFramebuffer[nt][gt]=r.createFramebuffer()}else F.__webglFramebuffer[nt]=r.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let nt=0;nt<S.mipmaps.length;nt++)F.__webglFramebuffer[nt]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Z)if(i.drawBuffers){const nt=y.texture;for(let gt=0,It=nt.length;gt<It;gt++){const Pt=n.get(nt[gt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&_t(y)===!1){const nt=Z?S:[S];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let gt=0;gt<nt.length;gt++){const It=nt[gt];F.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[gt]);const Pt=s.convert(It.format,It.colorSpace),tt=s.convert(It.type),zt=b(It.internalFormat,Pt,tt,It.colorSpace,y.isXRRenderTarget===!0),Ht=Bt(y);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,zt,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,F.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Ot(F.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture),X(r.TEXTURE_CUBE_MAP,S,Mt);for(let nt=0;nt<6;nt++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)St(F.__webglFramebuffer[nt][gt],y,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt);else St(F.__webglFramebuffer[nt],y,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);x(S,Mt)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){const nt=y.texture;for(let gt=0,It=nt.length;gt<It;gt++){const Pt=nt[gt],tt=n.get(Pt);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),X(r.TEXTURE_2D,Pt,Mt),St(F.__webglFramebuffer,y,Pt,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,0),x(Pt,Mt)&&M(r.TEXTURE_2D)}e.unbindTexture()}else{let nt=r.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?nt=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(nt,C.__webglTexture),X(nt,S,Mt),a&&S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)St(F.__webglFramebuffer[gt],y,S,r.COLOR_ATTACHMENT0,nt,gt);else St(F.__webglFramebuffer,y,S,r.COLOR_ATTACHMENT0,nt,0);x(S,Mt)&&M(nt),e.unbindTexture()}y.depthBuffer&&Ct(y)}function Me(y){const S=m(y)||a,F=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let C=0,j=F.length;C<j;C++){const Z=F[C];if(x(Z,S)){const Mt=y.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,nt=n.get(Z).__webglTexture;e.bindTexture(Mt,nt),M(Mt),e.unbindTexture()}}}function Et(y){if(a&&y.samples>0&&_t(y)===!1){const S=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],F=y.width,C=y.height;let j=r.COLOR_BUFFER_BIT;const Z=[],Mt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=n.get(y),gt=y.isWebGLMultipleRenderTargets===!0;if(gt)for(let It=0;It<S.length;It++)e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let It=0;It<S.length;It++){Z.push(r.COLOR_ATTACHMENT0+It),y.depthBuffer&&Z.push(Mt);const Pt=nt.__ignoreDepthValues!==void 0?nt.__ignoreDepthValues:!1;if(Pt===!1&&(y.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),y.stencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),gt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,nt.__webglColorRenderbuffer[It]),Pt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Mt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Mt])),gt){const tt=n.get(S[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,tt,0)}r.blitFramebuffer(0,0,F,C,0,0,F,C,j,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Z)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let It=0;It<S.length;It++){e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,nt.__webglColorRenderbuffer[It]);const Pt=n.get(S[It]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,Pt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}}function Bt(y){return Math.min(i.maxSamples,y.samples)}function _t(y){const S=n.get(y);return a&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(y){const S=o.render.frame;d.get(y)!==S&&(d.set(y,S),y.update())}function Kt(y,S){const F=y.colorSpace,C=y.format,j=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Da||F!==Re&&F!==yn&&(le.getTransfer(F)===Se?a===!1?t.has("EXT_sRGB")===!0&&C===an?(y.format=Da,y.minFilter=$e,y.generateMipmaps=!1):S=Dh.sRGBToLinear(S):(C!==an||j!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=Lt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=St,this.useMultisampledRTT=_t}function Bg(r,t,e){const n=e.isWebGL2;function i(s,o=yn){let a;const c=le.getTransfer(o);if(s===pi)return r.UNSIGNED_BYTE;if(s===bh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Th)return r.UNSIGNED_SHORT_5_5_5_1;if(s===sd)return r.BYTE;if(s===rd)return r.SHORT;if(s===qa)return r.UNSIGNED_SHORT;if(s===Sh)return r.INT;if(s===hi)return r.UNSIGNED_INT;if(s===Xn)return r.FLOAT;if(s===nr)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===od)return r.ALPHA;if(s===an)return r.RGBA;if(s===ad)return r.LUMINANCE;if(s===cd)return r.LUMINANCE_ALPHA;if(s===ki)return r.DEPTH_COMPONENT;if(s===Ts)return r.DEPTH_STENCIL;if(s===Da)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ld)return r.RED;if(s===Eh)return r.RED_INTEGER;if(s===hd)return r.RG;if(s===wh)return r.RG_INTEGER;if(s===Ah)return r.RGBA_INTEGER;if(s===Eo||s===wo||s===Ao||s===Ro)if(c===Se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Eo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Eo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ao)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ro)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_c||s===xc||s===yc||s===vc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_c)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mc||s===Sc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Mc)return c===Se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Sc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bc||s===Tc||s===Ec||s===wc||s===Ac||s===Rc||s===Cc||s===Pc||s===Lc||s===Ic||s===Dc||s===Uc||s===Nc||s===Fc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===bc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ec)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ac)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ic)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fc)return c===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Co||s===Oc||s===kc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Co)return c===Se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Oc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ud||s===Bc||s===zc||s===Hc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Co)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oi?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class zg extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class nn extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hg={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Gg extends Ps{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,h=null,u=null,f=null,g=null;const _=e.getContextAttributes();let m=null,p=null;const x=[],M=[],b=new Yt;let P=null;const A=new Je;A.layers.enable(1),A.viewport=new xe;const T=new Je;T.layers.enable(2),T.viewport=new xe;const O=[A,T],v=new zg;v.layers.enable(1),v.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=x[X];return et===void 0&&(et=new Qo,x[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=x[X];return et===void 0&&(et=new Qo,x[X]=et),et.getGripSpace()},this.getHand=function(X){let et=x[X];return et===void 0&&(et=new Qo,x[X]=et),et.getHandSpace()};function D(X){const et=M.indexOf(X.inputSource);if(et===-1)return;const dt=x[et];dt!==void 0&&(dt.update(X.inputSource,X.frame,l||o),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",L);for(let X=0;X<x.length;X++){const et=M[X];et!==null&&(M[X]=null,x[X].disconnect(et))}w=null,U=null,t.setRenderTarget(m),f=null,u=null,h=null,i=null,p=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",q),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Hi(f.framebufferWidth,f.framebufferHeight,{format:an,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let et=null,dt=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?Ts:ki,dt=_.stencil?Oi:hi);const St={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(St),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),p=new Hi(u.textureWidth,u.textureHeight,{format:an,type:pi,depthTexture:new Wh(u.textureWidth,u.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Ot=t.properties.get(p);Ot.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ht.setContext(i),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(X){for(let et=0;et<X.removed.length;et++){const dt=X.removed[et],vt=M.indexOf(dt);vt>=0&&(M[vt]=null,x[vt].disconnect(dt))}for(let et=0;et<X.added.length;et++){const dt=X.added[et];let vt=M.indexOf(dt);if(vt===-1){for(let Ot=0;Ot<x.length;Ot++)if(Ot>=M.length){M.push(dt),vt=Ot;break}else if(M[Ot]===null){M[Ot]=dt,vt=Ot;break}if(vt===-1)break}const St=x[vt];St&&St.connect(dt)}}const k=new R,V=new R;function K(X,et,dt){k.setFromMatrixPosition(et.matrixWorld),V.setFromMatrixPosition(dt.matrixWorld);const vt=k.distanceTo(V),St=et.projectionMatrix.elements,Ot=dt.projectionMatrix.elements,Rt=St[14]/(St[10]-1),Ct=St[14]/(St[10]+1),Lt=(St[9]+1)/St[5],G=(St[9]-1)/St[5],Me=(St[8]-1)/St[0],Et=(Ot[8]+1)/Ot[0],Bt=Rt*Me,_t=Rt*Et,fe=vt/(-Me+Et),Kt=fe*-Me;et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Kt),X.translateZ(fe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const y=Rt+fe,S=Ct+fe,F=Bt-Kt,C=_t+(vt-Kt),j=Lt*Ct/S*y,Z=G*Ct/S*y;X.projectionMatrix.makePerspective(F,C,j,Z,y,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;v.near=T.near=A.near=X.near,v.far=T.far=A.far=X.far,(w!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,U=v.far);const et=X.parent,dt=v.cameras;Y(v,et);for(let vt=0;vt<dt.length;vt++)Y(dt[vt],et);dt.length===2?K(v,A,T):v.projectionMatrix.copy(A.projectionMatrix),$(X,v,et)};function $(X,et,dt){dt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ws*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let J=null;function lt(X,et){if(d=et.getViewerPose(l||o),g=et,d!==null){const dt=d.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let vt=!1;dt.length!==v.cameras.length&&(v.cameras.length=0,vt=!0);for(let St=0;St<dt.length;St++){const Ot=dt[St];let Rt=null;if(f!==null)Rt=f.getViewport(Ot);else{const Lt=h.getViewSubImage(u,Ot);Rt=Lt.viewport,St===0&&(t.setRenderTargetTextures(p,Lt.colorTexture,u.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(p))}let Ct=O[St];Ct===void 0&&(Ct=new Je,Ct.layers.enable(St),Ct.viewport=new xe,O[St]=Ct),Ct.matrix.fromArray(Ot.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Ot.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),St===0&&(v.matrix.copy(Ct.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),vt===!0&&v.cameras.push(Ct)}}for(let dt=0;dt<x.length;dt++){const vt=M[dt],St=x[dt];vt!==null&&St!==void 0&&St.update(vt,et,l||o)}J&&J(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ht=new Vh;ht.setAnimationLoop(lt),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}}function Vg(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const M=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*M,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wg(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,M){const b=M.program;n.uniformBlockBinding(x,b)}function l(x,M){let b=i[x.id];b===void 0&&(g(x),b=d(x),i[x.id]=b,x.addEventListener("dispose",m));const P=M.program;n.updateUBOMapping(x,P);const A=t.render.frame;s[x.id]!==A&&(u(x),s[x.id]=A)}function d(x){const M=h();x.__bindingPointIndex=M;const b=r.createBuffer(),P=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,P,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,b),b}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=i[x.id],b=x.uniforms,P=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,T=b.length;A<T;A++){const O=Array.isArray(b[A])?b[A]:[b[A]];for(let v=0,w=O.length;v<w;v++){const U=O[v];if(f(U,A,v,P)===!0){const D=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let L=0;for(let k=0;k<q.length;k++){const V=q[k],K=_(V);typeof V=="number"||typeof V=="boolean"?(U.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,D+L,U.__data)):V.isMatrix3?(U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=0,U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=0,U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=0):(V.toArray(U.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,M,b,P){const A=x.value,T=M+"_"+b;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const O=P[T];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return P[T]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(x){const M=x.uniforms;let b=0;const P=16;for(let T=0,O=M.length;T<O;T++){const v=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,U=v.length;w<U;w++){const D=v[w],q=Array.isArray(D.value)?D.value:[D.value];for(let L=0,k=q.length;L<k;L++){const V=q[L],K=_(V),Y=b%P;Y!==0&&P-Y<K.boundary&&(b+=P-Y),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=K.storage}}}const A=b%P;return A>0&&(b+=P-A),x.__size=b,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class $h{constructor(t={}){const{canvas:e=Bd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=se,this._useLegacyLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;const M=this;let b=!1,P=0,A=0,T=null,O=-1,v=null;const w=new xe,U=new xe;let D=null;const q=new Tt(0);let L=0,k=e.width,V=e.height,K=1,Y=null,$=null;const J=new xe(0,0,k,V),lt=new xe(0,0,k,V);let ht=!1;const X=new $a;let et=!1,dt=!1,vt=null;const St=new te,Ot=new Yt,Rt=new R,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return T===null?K:1}let G=n;function Me(E,N){for(let B=0;B<E.length;B++){const W=E[B],z=e.getContext(W,N);if(z!==null)return z}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wa}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",at,!1),G===null){const N=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&N.shift(),G=Me(N,E),G===null)throw Me(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Et,Bt,_t,fe,Kt,y,S,F,C,j,Z,Mt,nt,gt,It,Pt,tt,zt,Ht,Dt,yt,xt,Gt,ee;function pe(){Et=new t0(G),Bt=new Km(G,Et,t),Et.init(Bt),xt=new Bg(G,Et,Bt),_t=new Og(G,Et,Bt),fe=new i0(G),Kt=new bg,y=new kg(G,Et,_t,Kt,Bt,xt,fe),S=new $m(M),F=new Qm(M),C=new uf(G,Bt),Gt=new qm(G,Et,C,Bt),j=new e0(G,C,fe,Gt),Z=new a0(G,j,C,fe),Ht=new o0(G,Bt,y),Pt=new jm(Kt),Mt=new Sg(M,S,F,Et,Bt,Gt,Pt),nt=new Vg(M,Kt),gt=new Eg,It=new Lg(Et,Bt),zt=new Xm(M,S,F,_t,Z,u,c),tt=new Fg(M,Z,Bt),ee=new Wg(G,fe,Bt,_t),Dt=new Ym(G,Et,fe,Bt),yt=new n0(G,Et,fe,Bt),fe.programs=Mt.programs,M.capabilities=Bt,M.extensions=Et,M.properties=Kt,M.renderLists=gt,M.shadowMap=tt,M.state=_t,M.info=fe}pe();const kt=new Gg(M,G);this.xr=kt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=Et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(k,V,!1))},this.getSize=function(E){return E.set(k,V)},this.setSize=function(E,N,B=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,V=N,e.width=Math.floor(E*K),e.height=Math.floor(N*K),B===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(k*K,V*K).floor()},this.setDrawingBufferSize=function(E,N,B){k=E,V=N,K=B,e.width=Math.floor(E*B),e.height=Math.floor(N*B),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,N,B,W){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,N,B,W),_t.viewport(w.copy(J).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(lt)},this.setScissor=function(E,N,B,W){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,N,B,W),_t.scissor(U.copy(lt).multiplyScalar(K).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(E){_t.setScissorTest(ht=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(E=!0,N=!0,B=!0){let W=0;if(E){let z=!1;if(T!==null){const ft=T.texture.format;z=ft===Ah||ft===wh||ft===Eh}if(z){const ft=T.texture.type,wt=ft===pi||ft===hi||ft===qa||ft===Oi||ft===bh||ft===Th,At=zt.getClearColor(),Xt=zt.getClearAlpha(),Qt=At.r,$t=At.g,Zt=At.b;wt?(f[0]=Qt,f[1]=$t,f[2]=Zt,f[3]=Xt,G.clearBufferuiv(G.COLOR,0,f)):(g[0]=Qt,g[1]=$t,g[2]=Zt,g[3]=Xt,G.clearBufferiv(G.COLOR,0,g))}else W|=G.COLOR_BUFFER_BIT}N&&(W|=G.DEPTH_BUFFER_BIT),B&&(W|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",at,!1),gt.dispose(),It.dispose(),Kt.dispose(),S.dispose(),F.dispose(),Z.dispose(),Gt.dispose(),ee.dispose(),Mt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",st),kt.removeEventListener("sessionend",ot),vt&&(vt.dispose(),vt=null),ut.stop()};function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=fe.autoReset,N=tt.enabled,B=tt.autoUpdate,W=tt.needsUpdate,z=tt.type;pe(),fe.autoReset=E,tt.enabled=N,tt.autoUpdate=B,tt.needsUpdate=W,tt.type=z}function at(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ct(E){const N=E.target;N.removeEventListener("dispose",ct),Ft(N)}function Ft(E){Ut(E),Kt.remove(E)}function Ut(E){const N=Kt.get(E).programs;N!==void 0&&(N.forEach(function(B){Mt.releaseProgram(B)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,B,W,z,ft){N===null&&(N=Ct);const wt=z.isMesh&&z.matrixWorld.determinant()<0,At=Wt(E,N,B,W,z);_t.setMaterial(W,wt);let Xt=B.index,Qt=1;if(W.wireframe===!0){if(Xt=j.getWireframeAttribute(B),Xt===void 0)return;Qt=2}const $t=B.drawRange,Zt=B.attributes.position;let Ie=$t.start*Qt,hn=($t.start+$t.count)*Qt;ft!==null&&(Ie=Math.max(Ie,ft.start*Qt),hn=Math.min(hn,(ft.start+ft.count)*Qt)),Xt!==null?(Ie=Math.max(Ie,0),hn=Math.min(hn,Xt.count)):Zt!=null&&(Ie=Math.max(Ie,0),hn=Math.min(hn,Zt.count));const Ge=hn-Ie;if(Ge<0||Ge===1/0)return;Gt.setup(z,W,At,B,Xt);let Fn,we=Dt;if(Xt!==null&&(Fn=C.get(Xt),we=yt,we.setIndex(Fn)),z.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*Lt()),we.setMode(G.LINES)):we.setMode(G.TRIANGLES);else if(z.isLine){let ne=W.linewidth;ne===void 0&&(ne=1),_t.setLineWidth(ne*Lt()),z.isLineSegments?we.setMode(G.LINES):z.isLineLoop?we.setMode(G.LINE_LOOP):we.setMode(G.LINE_STRIP)}else z.isPoints?we.setMode(G.POINTS):z.isSprite&&we.setMode(G.TRIANGLES);if(z.isBatchedMesh)we.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)we.renderInstances(Ie,Ge,z.count);else if(B.isInstancedBufferGeometry){const ne=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Mo=Math.min(B.instanceCount,ne);we.renderInstances(Ie,Ge,Mo)}else we.render(Ie,Ge)};function ce(E,N,B){E.transparent===!0&&E.side===Oe&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,bt(E,N,B),E.side=An,E.needsUpdate=!0,bt(E,N,B),E.side=Oe):bt(E,N,B)}this.compile=function(E,N,B=null){B===null&&(B=E),m=It.get(B),m.init(),x.push(m),B.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==B&&E.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(M._useLegacyLights);const W=new Set;return E.traverse(function(z){const ft=z.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){const At=ft[wt];ce(At,B,z),W.add(At)}else ce(ft,B,z),W.add(ft)}),x.pop(),m=null,W},this.compileAsync=function(E,N,B=null){const W=this.compile(E,N,B);return new Promise(z=>{function ft(){if(W.forEach(function(wt){Kt.get(wt).currentProgram.isReady()&&W.delete(wt)}),W.size===0){z(E);return}setTimeout(ft,10)}Et.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let H=null;function Q(E){H&&H(E)}function st(){ut.stop()}function ot(){ut.start()}const ut=new Vh;ut.setAnimationLoop(Q),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(E){H=E,kt.setAnimationLoop(E),E===null?ut.stop():ut.start()},kt.addEventListener("sessionstart",st),kt.addEventListener("sessionend",ot),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(N),N=kt.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,N,T),m=It.get(E,x.length),m.init(),x.push(m),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(St),dt=this.localClippingEnabled,et=Pt.init(this.clippingPlanes,dt),_=gt.get(E,p.length),_.init(),p.push(_),it(E,N,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(Y,$),this.info.render.frame++,et===!0&&Pt.beginShadows();const B=m.state.shadowsArray;if(tt.render(B,E,N),et===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),zt.render(_,E),m.setupLights(M._useLegacyLights),N.isArrayCamera){const W=N.cameras;for(let z=0,ft=W.length;z<ft;z++){const wt=W[z];jt(_,E,wt,wt.viewport)}}else jt(_,E,N);T!==null&&(y.updateMultisampleRenderTarget(T),y.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(M,E,N),Gt.resetDefaultState(),O=-1,v=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function it(E,N,B,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){W&&Rt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(St);const wt=Z.update(E),At=E.material;At.visible&&_.push(E,wt,At,B,Rt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const wt=Z.update(E),At=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Rt.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Rt.copy(wt.boundingSphere.center)),Rt.applyMatrix4(E.matrixWorld).applyMatrix4(St)),Array.isArray(At)){const Xt=wt.groups;for(let Qt=0,$t=Xt.length;Qt<$t;Qt++){const Zt=Xt[Qt],Ie=At[Zt.materialIndex];Ie&&Ie.visible&&_.push(E,wt,Ie,B,Rt.z,Zt)}}else At.visible&&_.push(E,wt,At,B,Rt.z,null)}}const ft=E.children;for(let wt=0,At=ft.length;wt<At;wt++)it(ft[wt],N,B,W)}function jt(E,N,B,W){const z=E.opaque,ft=E.transmissive,wt=E.transparent;m.setupLightsView(B),et===!0&&Pt.setGlobalState(M.clippingPlanes,B),ft.length>0&&Vt(z,ft,N,B),W&&_t.viewport(w.copy(W)),z.length>0&&Ee(z,N,B),ft.length>0&&Ee(ft,N,B),wt.length>0&&Ee(wt,N,B),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Vt(E,N,B,W){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const ft=Bt.isWebGL2;vt===null&&(vt=new Hi(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?nr:pi,minFilter:zi,samples:ft?4:0})),M.getDrawingBufferSize(Ot),ft?vt.setSize(Ot.x,Ot.y):vt.setSize(ho(Ot.x),ho(Ot.y));const wt=M.getRenderTarget();M.setRenderTarget(vt),M.getClearColor(q),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const At=M.toneMapping;M.toneMapping=Yn,Ee(E,B,W),y.updateMultisampleRenderTarget(vt),y.updateRenderTargetMipmap(vt);let Xt=!1;for(let Qt=0,$t=N.length;Qt<$t;Qt++){const Zt=N[Qt],Ie=Zt.object,hn=Zt.geometry,Ge=Zt.material,Fn=Zt.group;if(Ge.side===Oe&&Ie.layers.test(W.layers)){const we=Ge.side;Ge.side=sn,Ge.needsUpdate=!0,_e(Ie,B,W,hn,Ge,Fn),Ge.side=we,Ge.needsUpdate=!0,Xt=!0}}Xt===!0&&(y.updateMultisampleRenderTarget(vt),y.updateRenderTargetMipmap(vt)),M.setRenderTarget(wt),M.setClearColor(q,L),M.toneMapping=At}function Ee(E,N,B){const W=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ft=E.length;z<ft;z++){const wt=E[z],At=wt.object,Xt=wt.geometry,Qt=W===null?wt.material:W,$t=wt.group;At.layers.test(B.layers)&&_e(At,N,B,Xt,Qt,$t)}}function _e(E,N,B,W,z,ft){E.onBeforeRender(M,N,B,W,z,ft),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(M,N,B,W,E,ft),z.transparent===!0&&z.side===Oe&&z.forceSinglePass===!1?(z.side=sn,z.needsUpdate=!0,M.renderBufferDirect(B,N,W,z,E,ft),z.side=An,z.needsUpdate=!0,M.renderBufferDirect(B,N,W,z,E,ft),z.side=Oe):M.renderBufferDirect(B,N,W,z,E,ft),E.onAfterRender(M,N,B,W,z,ft)}function bt(E,N,B){N.isScene!==!0&&(N=Ct);const W=Kt.get(E),z=m.state.lights,ft=m.state.shadowsArray,wt=z.state.version,At=Mt.getParameters(E,z.state,ft,N,B),Xt=Mt.getProgramCacheKey(At);let Qt=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?F:S).get(E.envMap||W.environment),Qt===void 0&&(E.addEventListener("dispose",ct),Qt=new Map,W.programs=Qt);let $t=Qt.get(Xt);if($t!==void 0){if(W.currentProgram===$t&&W.lightsStateVersion===wt)return re(E,At),$t}else At.uniforms=Mt.getUniforms(E),E.onBuild(B,At,M),E.onBeforeCompile(At,M),$t=Mt.acquireProgram(At,Xt),Qt.set(Xt,$t),W.uniforms=At.uniforms;const Zt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Zt.clippingPlanes=Pt.uniform),re(E,At),W.needsLights=Ce(E),W.lightsStateVersion=wt,W.needsLights&&(Zt.ambientLightColor.value=z.state.ambient,Zt.lightProbe.value=z.state.probe,Zt.directionalLights.value=z.state.directional,Zt.directionalLightShadows.value=z.state.directionalShadow,Zt.spotLights.value=z.state.spot,Zt.spotLightShadows.value=z.state.spotShadow,Zt.rectAreaLights.value=z.state.rectArea,Zt.ltc_1.value=z.state.rectAreaLTC1,Zt.ltc_2.value=z.state.rectAreaLTC2,Zt.pointLights.value=z.state.point,Zt.pointLightShadows.value=z.state.pointShadow,Zt.hemisphereLights.value=z.state.hemi,Zt.directionalShadowMap.value=z.state.directionalShadowMap,Zt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Zt.spotShadowMap.value=z.state.spotShadowMap,Zt.spotLightMatrix.value=z.state.spotLightMatrix,Zt.spotLightMap.value=z.state.spotLightMap,Zt.pointShadowMap.value=z.state.pointShadowMap,Zt.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=$t,W.uniformsList=null,$t}function qt(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=no.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function re(E,N){const B=Kt.get(E);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Wt(E,N,B,W,z){N.isScene!==!0&&(N=Ct),y.resetTextureUnits();const ft=N.fog,wt=W.isMeshStandardMaterial?N.environment:null,At=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Re,Xt=(W.isMeshStandardMaterial?F:S).get(W.envMap||wt),Qt=W.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,$t=!!B.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Zt=!!B.morphAttributes.position,Ie=!!B.morphAttributes.normal,hn=!!B.morphAttributes.color;let Ge=Yn;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ge=M.toneMapping);const Fn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,we=Fn!==void 0?Fn.length:0,ne=Kt.get(W),Mo=m.state.lights;if(et===!0&&(dt===!0||E!==v)){const mn=E===v&&W.id===O;Pt.setState(W,E,mn)}let Pe=!1;W.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Mo.state.version||ne.outputColorSpace!==At||z.isBatchedMesh&&ne.batching===!1||!z.isBatchedMesh&&ne.batching===!0||z.isInstancedMesh&&ne.instancing===!1||!z.isInstancedMesh&&ne.instancing===!0||z.isSkinnedMesh&&ne.skinning===!1||!z.isSkinnedMesh&&ne.skinning===!0||z.isInstancedMesh&&ne.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ne.instancingColor===!1&&z.instanceColor!==null||ne.envMap!==Xt||W.fog===!0&&ne.fog!==ft||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Pt.numPlanes||ne.numIntersection!==Pt.numIntersection)||ne.vertexAlphas!==Qt||ne.vertexTangents!==$t||ne.morphTargets!==Zt||ne.morphNormals!==Ie||ne.morphColors!==hn||ne.toneMapping!==Ge||Bt.isWebGL2===!0&&ne.morphTargetsCount!==we)&&(Pe=!0):(Pe=!0,ne.__version=W.version);let yi=ne.currentProgram;Pe===!0&&(yi=bt(W,N,z));let cc=!1,Os=!1,So=!1;const Ye=yi.getUniforms(),vi=ne.uniforms;if(_t.useProgram(yi.program)&&(cc=!0,Os=!0,So=!0),W.id!==O&&(O=W.id,Os=!0),cc||v!==E){Ye.setValue(G,"projectionMatrix",E.projectionMatrix),Ye.setValue(G,"viewMatrix",E.matrixWorldInverse);const mn=Ye.map.cameraPosition;mn!==void 0&&mn.setValue(G,Rt.setFromMatrixPosition(E.matrixWorld)),Bt.logarithmicDepthBuffer&&Ye.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ye.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Os=!0,So=!0)}if(z.isSkinnedMesh){Ye.setOptional(G,z,"bindMatrix"),Ye.setOptional(G,z,"bindMatrixInverse");const mn=z.skeleton;mn&&(Bt.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Ye.setValue(G,"boneTexture",mn.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ye.setOptional(G,z,"batchingTexture"),Ye.setValue(G,"batchingTexture",z._matricesTexture,y));const bo=B.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0&&Bt.isWebGL2===!0)&&Ht.update(z,B,yi),(Os||ne.receiveShadow!==z.receiveShadow)&&(ne.receiveShadow=z.receiveShadow,Ye.setValue(G,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(vi.envMap.value=Xt,vi.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),Os&&(Ye.setValue(G,"toneMappingExposure",M.toneMappingExposure),ne.needsLights&&me(vi,So),ft&&W.fog===!0&&nt.refreshFogUniforms(vi,ft),nt.refreshMaterialUniforms(vi,W,K,V,vt),no.upload(G,qt(ne),vi,y)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(no.upload(G,qt(ne),vi,y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ye.setValue(G,"center",z.center),Ye.setValue(G,"modelViewMatrix",z.modelViewMatrix),Ye.setValue(G,"normalMatrix",z.normalMatrix),Ye.setValue(G,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const mn=W.uniformsGroups;for(let To=0,vu=mn.length;To<vu;To++)if(Bt.isWebGL2){const lc=mn[To];ee.update(lc,yi),ee.bind(lc,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function me(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Ce(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,B){Kt.get(E.texture).__webglTexture=N,Kt.get(E.depthTexture).__webglTexture=B;const W=Kt.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=B===void 0,W.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const B=Kt.get(E);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,B=0){T=E,P=N,A=B;let W=!0,z=null,ft=!1,wt=!1;if(E){const Xt=Kt.get(E);Xt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(G.FRAMEBUFFER,null),W=!1):Xt.__webglFramebuffer===void 0?y.setupRenderTarget(E):Xt.__hasExternalTextures&&y.rebindTextures(E,Kt.get(E.texture).__webglTexture,Kt.get(E.depthTexture).__webglTexture);const Qt=E.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(wt=!0);const $t=Kt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($t[N])?z=$t[N][B]:z=$t[N],ft=!0):Bt.isWebGL2&&E.samples>0&&y.useMultisampledRTT(E)===!1?z=Kt.get(E).__webglMultisampledFramebuffer:Array.isArray($t)?z=$t[B]:z=$t,w.copy(E.viewport),U.copy(E.scissor),D=E.scissorTest}else w.copy(J).multiplyScalar(K).floor(),U.copy(lt).multiplyScalar(K).floor(),D=ht;if(_t.bindFramebuffer(G.FRAMEBUFFER,z)&&Bt.drawBuffers&&W&&_t.drawBuffers(E,z),_t.viewport(w),_t.scissor(U),_t.setScissorTest(D),ft){const Xt=Kt.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+N,Xt.__webglTexture,B)}else if(wt){const Xt=Kt.get(E.texture),Qt=N||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xt.__webglTexture,B||0,Qt)}O=-1},this.readRenderTargetPixels=function(E,N,B,W,z,ft,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Kt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){_t.bindFramebuffer(G.FRAMEBUFFER,At);try{const Xt=E.texture,Qt=Xt.format,$t=Xt.type;if(Qt!==an&&xt.convert(Qt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Zt=$t===nr&&(Et.has("EXT_color_buffer_half_float")||Bt.isWebGL2&&Et.has("EXT_color_buffer_float"));if($t!==pi&&xt.convert($t)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!($t===Xn&&(Bt.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!Zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&B>=0&&B<=E.height-z&&G.readPixels(N,B,W,z,xt.convert(Qt),xt.convert($t),ft)}finally{const Xt=T!==null?Kt.get(T).__webglFramebuffer:null;_t.bindFramebuffer(G.FRAMEBUFFER,Xt)}}},this.copyFramebufferToTexture=function(E,N,B=0){const W=Math.pow(2,-B),z=Math.floor(N.image.width*W),ft=Math.floor(N.image.height*W);y.setTexture2D(N,0),G.copyTexSubImage2D(G.TEXTURE_2D,B,0,0,E.x,E.y,z,ft),_t.unbindTexture()},this.copyTextureToTexture=function(E,N,B,W=0){const z=N.image.width,ft=N.image.height,wt=xt.convert(B.format),At=xt.convert(B.type);y.setTexture2D(B,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,W,E.x,E.y,z,ft,wt,At,N.image.data):N.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,W,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,wt,N.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,W,E.x,E.y,wt,At,N.image),W===0&&B.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(E,N,B,W,z=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=E.max.x-E.min.x+1,wt=E.max.y-E.min.y+1,At=E.max.z-E.min.z+1,Xt=xt.convert(W.format),Qt=xt.convert(W.type);let $t;if(W.isData3DTexture)y.setTexture3D(W,0),$t=G.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)y.setTexture2DArray(W,0),$t=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const Zt=G.getParameter(G.UNPACK_ROW_LENGTH),Ie=G.getParameter(G.UNPACK_IMAGE_HEIGHT),hn=G.getParameter(G.UNPACK_SKIP_PIXELS),Ge=G.getParameter(G.UNPACK_SKIP_ROWS),Fn=G.getParameter(G.UNPACK_SKIP_IMAGES),we=B.isCompressedTexture?B.mipmaps[z]:B.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,we.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,we.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,E.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,E.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?G.texSubImage3D($t,z,N.x,N.y,N.z,ft,wt,At,Xt,Qt,we.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D($t,z,N.x,N.y,N.z,ft,wt,At,Xt,we.data)):G.texSubImage3D($t,z,N.x,N.y,N.z,ft,wt,At,Xt,Qt,we),G.pixelStorei(G.UNPACK_ROW_LENGTH,Zt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ie),G.pixelStorei(G.UNPACK_SKIP_PIXELS,hn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ge),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Fn),z===0&&W.generateMipmaps&&G.generateMipmap($t),_t.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?y.setTextureCube(E,0):E.isData3DTexture?y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?y.setTexture2DArray(E,0):y.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,_t.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ka?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===po?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===se?Bi:Ph}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Bi?se:Re}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Xg extends $h{}Xg.prototype.isWebGL1Renderer=!0;class Zh extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Jh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new R;class rr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new rr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qh extends vn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let cs;const Gs=new R,ls=new R,hs=new R,us=new Yt,Vs=new Yt,tu=new te,Dr=new R,Ws=new R,Ur=new R,Il=new Yt,ta=new Yt,Dl=new Yt;class qg extends Te{constructor(t=new Qh){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jh(e,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new rr(n,3,0,!1)),cs.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=cs,this.material=t,this.center=new Yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-hs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Nr(Dr.set(-.5,-.5,0),hs,o,ls,i,s),Nr(Ws.set(.5,-.5,0),hs,o,ls,i,s),Nr(Ur.set(.5,.5,0),hs,o,ls,i,s),Il.set(0,0),ta.set(1,0),Dl.set(1,1);let a=t.ray.intersectTriangle(Dr,Ws,Ur,!1,Gs);if(a===null&&(Nr(Ws.set(-.5,.5,0),hs,o,ls,i,s),ta.set(0,1),a=t.ray.intersectTriangle(Dr,Ur,Ws,!1,Gs),a===null))return;const c=t.ray.origin.distanceTo(Gs);c<t.near||c>t.far||e.push({distance:c,point:Gs.clone(),uv:xn.getInterpolation(Gs,Dr,Ws,Ur,Il,ta,Dl,new Yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Nr(r,t,e,n,i,s){us.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Vs.x=s*us.x-i*us.y,Vs.y=i*us.x+s*us.y):Vs.copy(us),r.copy(t),r.x+=Vs.x,r.y+=Vs.y,r.applyMatrix4(tu)}const Ul=new R,Nl=new xe,Fl=new xe,Yg=new R,Ol=new te,Fr=new R,ea=new Dn,kl=new te,na=new mo;class Kg extends pt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gc,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fr),this.boundingBox.expandByPoint(Fr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fr),this.boundingSphere.expandByPoint(Fr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(i),t.ray.intersectsSphere(ea)!==!1&&(kl.copy(i).invert(),na.copy(t.ray).applyMatrix4(kl),!(this.boundingBox!==null&&na.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,na)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new xe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===id?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Nl.fromBufferAttribute(i.attributes.skinIndex,t),Fl.fromBufferAttribute(i.attributes.skinWeight,t),Ul.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Fl.getComponent(s);if(o!==0){const a=Nl.getComponent(s);Ol.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Yg.copy(Ul).applyMatrix4(Ol),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class eu extends Te{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tc extends Be{constructor(t=null,e=1,n=1,i,s,o,a,c,l=We,d=We,h,u){super(null,o,a,c,l,d,i,s,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bl=new te,jg=new te;class ec{constructor(t=[],e=[]){this.uuid=En(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new te;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:jg;Bl.multiplyMatrices(a,e[s]),Bl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ec(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new tc(e,t,t,an,Xn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new eu),this.bones.push(o),this.boneInverses.push(new te().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Fa extends Le{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ds=new te,zl=new te,Or=[],Hl=new Mn,$g=new te,Xs=new pt,qs=new Dn;class Zg extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$g)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Hl.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(Hl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),qs.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ds),zl.multiplyMatrices(n,ds),Xs.matrixWorld=zl,Xs.raycast(t,Or);for(let o=0,a=Or.length;o<a;o++){const c=Or[o];c.instanceId=s,c.object=this,e.push(c)}Or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fa(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class xo extends vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gl=new R,Vl=new R,Wl=new te,ia=new mo,kr=new Dn;class yo extends Te{constructor(t=new De,e=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Gl.fromBufferAttribute(e,i-1),Vl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Gl.distanceTo(Vl);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=s,t.ray.intersectsSphere(kr)===!1)return;Wl.copy(i).invert(),ia.copy(t.ray).applyMatrix4(Wl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,d=new R,h=new R,u=new R,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let M=p,b=x-1;M<b;M+=f){const P=g.getX(M),A=g.getX(M+1);if(l.fromBufferAttribute(m,P),d.fromBufferAttribute(m,A),ia.distanceSqToSegment(l,d,u,h)>c)continue;u.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(u);O<t.near||O>t.far||e.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let M=p,b=x-1;M<b;M+=f){if(l.fromBufferAttribute(m,M),d.fromBufferAttribute(m,M+1),ia.distanceSqToSegment(l,d,u,h)>c)continue;u.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(u);A<t.near||A>t.far||e.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Xl=new R,ql=new R;class nu extends yo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Xl.fromBufferAttribute(e,i),ql.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xl.distanceTo(ql);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jg extends yo{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class or extends vn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yl=new te,Oa=new mo,Br=new Dn,zr=new R;class uo extends Te{constructor(t=new De,e=new or){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),Br.radius+=s,t.ray.intersectsSphere(Br)===!1)return;Yl.copy(i).invert(),Oa.copy(t.ray).applyMatrix4(Yl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,_=f;g<_;g++){const m=l.getX(g);zr.fromBufferAttribute(h,m),Kl(zr,m,c,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=u,_=f;g<_;g++)zr.fromBufferAttribute(h,g),Kl(zr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kl(r,t,e,n,i,s,o){const a=Oa.distanceSqToPoint(r);if(a<e){const c=new R;Oa.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Qe extends Be{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nc extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new R,d=new Yt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const f=n+h/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/t+1)/2,d.y=(o[u+1]/t+1)/2,c.push(d.x,d.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class be extends De{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const d=[],h=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function x(){const b=new R,P=new R;let A=0;const T=(e-t)/n;for(let O=0;O<=s;O++){const v=[],w=O/s,U=w*(e-t)+t;for(let D=0;D<=i;D++){const q=D/i,L=q*c+a,k=Math.sin(L),V=Math.cos(L);P.x=U*k,P.y=-w*n+m,P.z=U*V,h.push(P.x,P.y,P.z),b.set(k,T,V).normalize(),u.push(b.x,b.y,b.z),f.push(q,1-w),v.push(g++)}_.push(v)}for(let O=0;O<i;O++)for(let v=0;v<s;v++){const w=_[v][O],U=_[v+1][O],D=_[v+1][O+1],q=_[v][O+1];d.push(w,U,q),d.push(U,D,q),A+=6}l.addGroup(p,A,0),p+=A}function M(b){const P=g,A=new Yt,T=new R;let O=0;const v=b===!0?t:e,w=b===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,m*w,0),u.push(0,w,0),f.push(.5,.5),g++;const U=g;for(let D=0;D<=i;D++){const L=D/i*c+a,k=Math.cos(L),V=Math.sin(L);T.x=v*V,T.y=m*w,T.z=v*k,h.push(T.x,T.y,T.z),u.push(0,w,0),A.x=k*.5+.5,A.y=V*.5*w+.5,f.push(A.x,A.y),g++}for(let D=0;D<i;D++){const q=P+D,L=U+D;b===!0?d.push(L,L+1,q):d.push(L+1,L,q),O+=3}l.addGroup(p,O,b===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ic extends be{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ic(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gi extends De{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],d=[];let h=t;const u=(e-t)/i,f=new R,g=new Yt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,d.push(g.x,g.y)}h+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,M=x,b=x+n+1,P=x+n+2,A=x+1;a.push(M,b,A),a.push(b,P,A)}}this.setIndex(a),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ue extends De{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const d=[],h=new R,u=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){const A=P/e;h.x=-t*Math.cos(i+A*s)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(i+A*s)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),m.push(A+b,1-M),x.push(l++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=d[p][x+1],b=d[p][x],P=d[p+1][x],A=d[p+1][x+1];(p!==0||o>0)&&f.push(M,b,A),(p!==n-1||c<Math.PI)&&f.push(b,P,A)}this.setIndex(f),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gi extends De{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],d=new R,h=new R,u=new R;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),u.subVectors(h,d).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ae extends vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $n extends ae{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Qg extends vn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Hr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function t_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function e_(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function jl(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let c=0;c!==t;++c)i[o++]=r[a+c]}return i}function iu(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class ar{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class n_ extends ar{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gc,endingEnd:Gc}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vc:s=t,a=2*e-n;break;case Wc:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vc:o=t,c=2*n-e;break;case Wc:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,d=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,x=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,b=f*m-f*_;for(let P=0;P!==a;++P)s[P]=p*o[d+P]+x*o[l+P]+M*o[c+P]+b*o[h+P];return s}}class i_ extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=(n-e)/(i-e),h=1-d;for(let u=0;u!==a;++u)s[u]=o[l+u]*h+o[c+u]*d;return s}}class s_ extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Un{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hr(e,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hr(t.times,Array),values:Hr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new s_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new i_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new n_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ir:e=this.InterpolantFactoryMethodDiscrete;break;case Es:e=this.InterpolantFactoryMethodLinear;break;case Po:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return Es;case this.InterpolantFactoryMethodSmooth:return Po}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&t_(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Po,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],d=t[a+1];if(l!==d&&(a!==1||l!==t[0]))if(i)c=!0;else{const h=a*n,u=h-n,f=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[u+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const h=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[h+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Es;class Is extends Un{}Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=ir;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class su extends Un{}su.prototype.ValueTypeName="color";class Rs extends Un{}Rs.prototype.ValueTypeName="number";class r_ extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let d=l+a;l!==d;l+=4)on.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Vi extends Un{InterpolantFactoryMethodLinear(t){return new r_(this.times,this.values,this.getValueSize(),t)}}Vi.prototype.ValueTypeName="quaternion";Vi.prototype.DefaultInterpolation=Es;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends Un{}Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ir;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Un{}Cs.prototype.ValueTypeName="vector";class o_{constructor(t,e=-1,n,i=dd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=En(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(c_(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Un.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const d=e_(c);c=jl(c,1,d),l=jl(l,1,d),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Rs(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],d=l.name.match(s);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,g,_){if(f.length!==0){const m=[],p=[];iu(f,m,p,g),m.length!==0&&_.push(new h(u,m,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==u[g].morphTargets.length;++x){const M=u[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new Rs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+e[h].name+"]";n(Cs,f+".position",u,"pos",i),n(Vi,f+".quaternion",u,"rot",i),n(Cs,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function a_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return su;case"quaternion":return Vi;case"bool":case"boolean":return Is;case"string":return Ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function c_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=a_(r.type);if(r.times===void 0){const e=[],n=[];iu(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const ui={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class l_{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,s===!1&&i.onStart!==void 0&&i.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const h_=new l_;class Us{constructor(t){this.manager=t!==void 0?t:h_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class u_ extends Error{constructor(t,e){super(t),this.response=e}}class ru extends Us{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ui.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Gn[t]!==void 0){Gn[t].push({onLoad:e,onProgress:n,onError:i});return}Gn[t]=[],Gn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=Gn[t],h=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:M,value:b})=>{if(M)p.close();else{_+=b.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,T=d.length;A<T;A++){const O=d[A];O.onProgress&&O.onProgress(P)}p.enqueue(b),x()}})}}});return new Response(m)}else throw new u_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ui.add(t,l);const d=Gn[t];delete Gn[t];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const d=Gn[t];if(d===void 0)throw this.manager.itemError(t),l;delete Gn[t];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class d_ extends Us{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ui.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=sr("img");function c(){d(),ui.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(h){d(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Ns extends Us{constructor(t){super(t)}load(t,e,n,i){const s=new Be,o=new d_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class cr extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class ou extends cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const sa=new te,$l=new R,Zl=new R;class sc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$l.setFromMatrixPosition(t.matrixWorld),e.position.copy($l),Zl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zl),e.updateMatrixWorld(),sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class f_ extends sc{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ws*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class p_ extends cr{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new f_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Jl=new te,Ys=new R,ra=new R;class m_ extends sc{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ys),ra.copy(n.position),ra.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ra),n.updateMatrixWorld(),i.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl)}}class ka extends cr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new m_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class g_ extends sc{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vo extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new g_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class au extends cr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qs{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class __ extends Us{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ui.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),s.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ui.add(t,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),ui.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});ui.add(t,c),s.manager.itemStart(t)}}class x_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ql(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ql();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ql(){return(typeof performance>"u"?Date:performance).now()}const rc="\\[\\]\\.:\\/",y_=new RegExp("["+rc+"]","g"),oc="[^"+rc+"]",v_="[^"+rc.replace("\\.","")+"]",M_=/((?:WC+[\/:])*)/.source.replace("WC",oc),S_=/(WCOD+)?/.source.replace("WCOD",v_),b_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),T_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),E_=new RegExp("^"+M_+S_+b_+T_+"$"),w_=["material","materials","bones","map"];class A_{constructor(t,e,n){const i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class he{constructor(t,e,n){this.path=e,this.parsedPath=n||he.parseTrackName(e),this.node=he.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new he.Composite(t,e,n):new he(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(y_,"")}static parseTrackName(t){const e=E_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);w_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=he.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===l){l=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}he.Composite=A_;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class R_ extends nu{constructor(t=10,e=10,n=4473924,i=8947848){n=new Tt(n),i=new Tt(i);const s=e/2,o=t/e,a=t/2,c=[],l=[];for(let u=0,f=0,g=-a;u<=e;u++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=u===s?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const d=new De;d.setAttribute("position",new ye(c,3)),d.setAttribute("color",new ye(l,3));const h=new xo({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);class C_{domElement;three;constructor(){this.three=new $h({antialias:!1,powerPreference:"high-performance"}),this.domElement=this.three.domElement,this.three.setPixelRatio(window.devicePixelRatio),this.three.setClearColor(16,1),this.three.toneMapping=Yn,this.three.outputColorSpace=se}setSize(t,e){this.three.setSize(t,e,!1),this.domElement.style.width="100vw",this.domElement.style.height="100vh",this.domElement.style.position="fixed",this.domElement.style.top="0",this.domElement.style.left="0"}dispose(){this.three.dispose()}}class P_{group;skyMat;constructor(){this.group=new nn;const t=new ue(5e4,64,48);t.scale(-1,1,1),this.skyMat=new Rn({vertexShader:`
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
      `,uniforms:{},side:sn,depthWrite:!1}),this.group.add(new pt(t,this.skyMat))}update(t){}getMesh(){return this.group}}class L_{scene;camera;clock=new x_;frames=0;lastFpsUpdate=0;fps=0;stars;constructor(){this.scene=new Zh,this.scene.background=new Tt(0),this.stars=new P_,this.scene.add(this.stars.getMesh()),this.scene.add(new au(2241365,.1)),this.scene.add(new ou(3364215,1122867,.15)),this.camera=new Je(45,window.innerWidth/window.innerHeight,1,5e7),this.camera.position.set(0,0,10),this.camera.lookAt(0,0,0)}update(t){const e=this.clock.getElapsedTime();this.frames++,e-this.lastFpsUpdate>=1&&(this.fps=this.frames/(e-this.lastFpsUpdate),this.frames=0,this.lastFpsUpdate=e),this.stars.getMesh().position.copy(this.camera.position),this.stars.update(t)}getFps(){return this.fps}}class I_{root;helpOverlay=null;onPlay;onVab;onSettings;constructor(t,e,n){this.onPlay=t,this.onVab=e,this.onSettings=n,this.root=document.createElement("div"),this.root.className="panel",this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 500;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: rgba(6,8,20,0.95);
      border: none; border-radius: 0;
    `;const i=document.createElement("div");i.style.cssText="margin-bottom: var(--space-8); text-align: center;",i.innerHTML=`
      <svg viewBox="0 0 120 40" fill="none" style="width:100px;height:36px;display:block;margin:0 auto var(--space-2);">
        <ellipse cx="60" cy="20" rx="52" ry="16" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="1.2" opacity="0.4"/>
        <ellipse cx="60" cy="20" rx="36" ry="10" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.8" opacity="0.25"/>
        <ellipse cx="60" cy="20" rx="18" ry="5" transform="rotate(-15 60 20)" stroke="var(--accent-gold)" stroke-width="0.6" opacity="0.15"/>
        <circle cx="60" cy="20" r="2.5" fill="var(--accent-gold)"/>
        <line x1="10" y1="20" x2="110" y2="20" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
        <line x1="60" y1="4" x2="60" y2="36" stroke="var(--accent-gold)" stroke-width="0.3" opacity="0.15"/>
      </svg>
      <div class="text-display" style="font-size:52px;letter-spacing:0.1em;color:var(--accent-gold);">ELLIPSE</div>
      <div class="text-caption" style="margin-top:var(--space-2);letter-spacing:0.15em;">SPACE FLIGHT SIMULATOR</div>
    `,this.root.appendChild(i);const s=(o,a,c)=>{const l=document.createElement("button");return l.className=`btn btn--${a}`,l.textContent=o,l.style.cssText="margin: 6px; min-width: 220px; padding: 12px 24px; font-size: 14px;",l.addEventListener("click",c),l};this.root.appendChild(s("FLIGHT","primary",this.onPlay)),this.root.appendChild(s("VEHICLE ASSEMBLY","secondary",this.onVab)),this.root.appendChild(s("SETTINGS","ghost",this.onSettings)),this.root.appendChild(s("GUIDE","ghost",()=>this.toggleHelp()))}toggleHelp(){if(this.helpOverlay){this.helpOverlay.remove(),this.helpOverlay=null;return}const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:600;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,8,20,0.95);",t.innerHTML='<div style="max-width:520px;padding:32px;font-family:sans-serif;line-height:1.6;color:#ddd;"><h2 style="color:#c89838;font-size:20px;margin-bottom:12px;">HOW TO BUILD & LAUNCH</h2><p style="font-size:13px;color:#889;margin-bottom:8px;">1. Click <b>VEHICLE ASSEMBLY</b> to build rocket</p><p style="font-size:13px;color:#889;margin-bottom:8px;">2. Add capsule → tank → engine (bottom to top)</p><p style="font-size:13px;color:#889;margin-bottom:16px;">3. Click <b>FLIGHT</b> — press <b>W</b>, wait countdown</p><h2 style="color:#c89838;font-size:20px;margin-bottom:8px;">CONTROLS</h2><table style="width:100%;font-size:13px;border-collapse:collapse;"><tr><td style="color:#889;padding:3px 12px 3px 0;">W/S</td><td>Throttle</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">↑↓←→</td><td>Pitch / Yaw</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">C</td><td>Free camera</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">F</td><td>Reset camera</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">T</td><td>SAS toggle</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Space</td><td>Stage</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">M/Tab</td><td>Map view</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Q/E</td><td>Time warp</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Mouse</td><td>Orbit / Zoom camera</td></tr></table><button class="btn btn--primary" style="margin-top:20px;width:100%;padding:12px;" id="help-close">CLOSE</button></div>',t.querySelector("#help-close").addEventListener("click",()=>{t.remove(),this.helpOverlay=null}),document.body.appendChild(t),this.helpOverlay=t}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove(),this.helpOverlay?.remove()}}const cu=[{id:"capsule_mk1",name:"MK-1 Capsule",kind:"capsule",size:"M",mass:1200,crewCapacity:1,hasParachute:!0,dragCoeff:.5},{id:"tank_s_lfo",name:"Fuel Tank S (LFO)",kind:"tank",size:"S",mass:200,fuelCapacity:5e3,fuelType:"LFO",dragCoeff:.4},{id:"tank_m_lfo",name:"Fuel Tank M (LFO)",kind:"tank",size:"M",mass:600,fuelCapacity:5e4,fuelType:"LFO",dragCoeff:.4},{id:"tank_l_lfo",name:"Fuel Tank L (LFO)",kind:"tank",size:"L",mass:1200,fuelCapacity:1e5,fuelType:"LFO",dragCoeff:.4},{id:"tank_xl_lfo",name:"Fuel Tank XL (LFO)",kind:"tank",size:"XL",mass:2500,fuelCapacity:25e4,fuelType:"LFO",dragCoeff:.4},{id:"engine_ant",name:'"Ant" Engine',kind:"engine",size:"S",mass:50,thrust:1800,isp:350,fuelType:"LFO"},{id:"engine_vector",name:'"Vector" Engine',kind:"engine",size:"M",mass:400,thrust:3e3,isp:340,fuelType:"LFO"},{id:"engine_mastodon",name:'"Mastodon" Engine',kind:"engine",size:"L",mass:1200,thrust:7500,isp:330,fuelType:"LFO"},{id:"engine_mammoth",name:'"Mammoth" Engine',kind:"engine",size:"XL",mass:3e3,thrust:18e3,isp:310,fuelType:"LFO"},{id:"parachute_mk16",name:"Mk-16 Parachute",kind:"parachute",size:"M",mass:30,dragCoeff:5},{id:"legs_landini",name:'"Landini" Landing Legs',kind:"legs",size:"S",mass:80,dragCoeff:.1},{id:"heatshield_s",name:"Heat Shield S (Ablative)",kind:"heatshield",size:"S",mass:50,heatCapacity:5e4,dragCoeff:1.2},{id:"heatshield_m",name:"Heat Shield M (Ablative)",kind:"heatshield",size:"M",mass:150,heatCapacity:15e4,dragCoeff:1.2},{id:"heatshield_l",name:"Heat Shield L (Ablative)",kind:"heatshield",size:"L",mass:400,heatCapacity:4e5,dragCoeff:1.2},{id:"decoupler_1",name:"TD-1 Decoupler",kind:"decoupler",size:"M",mass:100,dragCoeff:.3},{id:"agena_target",name:"Agena Target Vehicle",kind:"gltf",size:"M",mass:1500,dragCoeff:.3,gltfUrl:"/models/agena.glb",gltfScale:.0015},{id:"apollo_soyuz",name:"Apollo Soyuz",kind:"gltf",size:"L",mass:5e3,dragCoeff:.3,gltfUrl:"/models/apollo_soyuz.glb",gltfScale:.0015},{id:"saturn_v",name:"Saturn V",kind:"gltf",size:"XL",mass:3e4,fuelCapacity:5e5,thrust:6e4,isp:310,dragCoeff:.3,gltfUrl:"/models/saturn_v.glb",gltfScale:.003},{id:"ares_1",name:"Ares I",kind:"gltf",size:"XL",mass:2e4,dragCoeff:.3,gltfUrl:"/models/ares_1.glb",gltfScale:.0015},{id:"apollo_lunar_module",name:"Apollo Lunar Module",kind:"gltf",size:"L",mass:15e3,dragCoeff:.3,gltfUrl:"/models/apollo_lunar_module.glb",gltfScale:.002},{id:"atlas_6",name:"Atlas 6 (Friendship 7)",kind:"gltf",size:"L",mass:12e3,dragCoeff:.3,gltfUrl:"/models/atlas_6.glb",gltfScale:.0015},{id:"atlas_9",name:"Atlas 9 (Faith 7)",kind:"gltf",size:"L",mass:12e3,dragCoeff:.3,gltfUrl:"/models/atlas_9.glb",gltfScale:.0015},{id:"crawler",name:"Crawler Transporter",kind:"gltf",size:"XL",mass:27e3,dragCoeff:.3,gltfUrl:"/models/crawler.glb",gltfScale:.001}];function fs(r){return cu.find(t=>t.id===r)}function th(r,t){if(t===fd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===La||t===Ch){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===La)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class D_ extends Us{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new k_(e)}),this.register(function(e){return new Y_(e)}),this.register(function(e){return new K_(e)}),this.register(function(e){return new j_(e)}),this.register(function(e){return new z_(e)}),this.register(function(e){return new H_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new V_(e)}),this.register(function(e){return new O_(e)}),this.register(function(e){return new W_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new q_(e)}),this.register(function(e){return new X_(e)}),this.register(function(e){return new N_(e)}),this.register(function(e){return new $_(e)}),this.register(function(e){return new Z_(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Qs.extractUrlBase(t);o=Qs.resolveURL(l,this.path)}else o=Qs.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new ru(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,o,function(d){e(d),s.manager.itemEnd(t)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===lu){try{o[oe.KHR_BINARY_GLTF]=new J_(t)}catch(h){i&&i(h);return}s=JSON.parse(o[oe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new ux(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const h=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(h){case oe.KHR_MATERIALS_UNLIT:o[h]=new F_;break;case oe.KHR_DRACO_MESH_COMPRESSION:o[h]=new Q_(s,this.dracoLoader);break;case oe.KHR_TEXTURE_TRANSFORM:o[h]=new tx;break;case oe.KHR_MESH_QUANTIZATION:o[h]=new ex;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function U_(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class N_{constructor(t){this.parser=t,this.name=oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let l;const d=new Tt(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],Re);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vo(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ka(d),l.distance=h;break;case"spot":l=new p_(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,li(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class F_{constructor(){this.name=oe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ae}extendParams(t,e,n){const i=[];t.color=new Tt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Re),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,se))}return Promise.all(i)}}class O_{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class k_{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Yt(a,a)}return Promise.all(s)}}class B_{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class z_{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Tt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Re)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,se)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class H_{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class G_{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Tt().setRGB(a[0],a[1],a[2],Re),Promise.all(s)}}class V_{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class W_{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Tt().setRGB(a[0],a[1],a[2],Re),o.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,se)),Promise.all(s)}}class X_{constructor(t){this.parser=t,this.name=oe.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class q_{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Y_{constructor(t){this.parser=t,this.name=oe.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class K_{constructor(t){this.parser=t,this.name=oe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class j_{constructor(t){this.parser=t,this.name=oe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class $_{constructor(t){this.name=oe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(d*h);return o.decodeGltfBuffer(new Uint8Array(f),d,h,u,i.mode,i.filter),f})})}else return null}}class Z_{constructor(t){this.name=oe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==_n.TRIANGLES&&l.mode!==_n.TRIANGLE_STRIP&&l.mode!==_n.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(d=>(c[l]=d,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],u=l[0].count,f=[];for(const g of h){const _=new te,m=new R,p=new on,x=new R(1,1,1),M=new Zg(g.geometry,g.material,u);for(let b=0;b<u;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&x.fromBufferAttribute(c.SCALE,b),M.setMatrixAt(b,_.compose(m,p,x));for(const b in c)if(b==="_COLOR_0"){const P=c[b];M.instanceColor=new Fa(P.array,P.itemSize,P.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);Te.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const lu="glTF",Ks=12,eh={JSON:1313821514,BIN:5130562};class J_{constructor(t){this.name=oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==lu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ks,s=new DataView(t,Ks);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===eh.JSON){const l=new Uint8Array(t,Ks+o,a);this.content=n.decode(l)}else if(c===eh.BIN){const l=Ks+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Q_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=oe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const d in o){const h=Ba[d]||d.toLowerCase();a[h]=o[d]}for(const d in t.attributes){const h=Ba[d]||d.toLowerCase();if(o[d]!==void 0){const u=n.accessors[t.attributes[d]],f=vs[u.componentType];l[h]=f.name,c[h]=u.normalized===!0}}return e.getDependency("bufferView",s).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,Re,u)})})}}class tx{constructor(){this.name=oe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class ex{constructor(){this.name=oe.KHR_MESH_QUANTIZATION}}class hu extends ar{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,d=i-e,h=(n-e)/d,u=h*h,f=u*h,g=t*l,_=g-l,m=-2*f+3*u,p=f-u,x=1-m,M=p-u+h;for(let b=0;b!==a;b++){const P=o[_+b+a],A=o[_+b+c]*d,T=o[g+b+a],O=o[g+b]*d;s[b]=x*P+M*A+m*T+p*O}return s}}const nx=new on;class ix extends hu{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return nx.fromArray(s).normalize().toArray(s),s}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nh={9728:We,9729:$e,9984:Pa,9985:Mh,9986:eo,9987:zi},ih={33071:ke,33648:ro,10497:fn},oa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ba={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sx={CUBICSPLINE:void 0,LINEAR:Es,STEP:ir},aa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ae({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),r.DefaultMaterial}function Ei(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function li(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ox(r,t,e){let n=!1,i=!1,s=!1;for(let l=0,d=t.length;l<d;l++){const h=t[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,d=t.length;l<d;l++){const h=t[l];if(n){const u=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):r.attributes.position;o.push(u)}if(i){const u=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(u)}if(s){const u=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],u=l[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function ax(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cx(r){let t;const e=r.extensions&&r.extensions[oe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ca(e.attributes):t=r.indices+":"+ca(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+ca(r.targets[n]);return t}function ca(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function za(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const hx=new te;class ux{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new U_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Ns(this.options.manager):this.textureLoader=new __(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ru(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ei(s,a,i),li(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,d]of o.children.entries())s(d,a.children[l])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[oe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Qs.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=oa[i.type],a=vs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Le(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=oa[i.type],l=vs[i.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=e.cache.get(x);M||(_=new l(a,p*f,i.count*f/d),M=new Jh(_,f/d),e.cache.add(x,M)),m=new rr(M,c,u%f/d,g)}else a===null?_=new l(i.count*c):_=new l(a,u,i.count*c),m=new Le(_,c,g);if(i.sparse!==void 0){const p=oa.SCALAR,x=vs[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,P=new x(o[1],M,i.sparse.count*p),A=new l(o[2],b,i.sparse.count*c);a!==null&&(m=new Le(m.array.slice(),m.itemSize,m.normalized));for(let T=0,O=P.length;T<O;T++){const v=P[T];if(m.setX(v,A[T*c]),c>=2&&m.setY(v,A[T*c+1]),c>=3&&m.setZ(v,A[T*c+2]),c>=4&&m.setW(v,A[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return d.magFilter=nh[u.magFilter]||$e,d.minFilter=nh[u.minFilter]||zi,d.wrapS=ih[u.wrapS]||fn,d.wrapT=ih[u.wrapT]||fn,i.associations.set(d,{textures:t}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(u,f){let g=u;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Be(_);m.needsUpdate=!0,u(m)}),e.load(Qs.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||lx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[t]=d,d}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[oe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[oe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[oe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new or,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new xo,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return ae}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},c=s.extensions||{},l=[];if(c[oe.KHR_MATERIALS_UNLIT]){const h=i[oe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,e))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Tt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Re),a.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",h.baseColorTexture,se)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Oe);const d=s.alphaMode||aa.OPAQUE;if(d===aa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===aa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ae&&(l.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Yt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Ae&&(l.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ae){const h=s.emissiveFactor;a.emissive=new Tt().setRGB(h[0],h[1],h[2],Re)}return s.emissiveTexture!==void 0&&o!==Ae&&l.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,se)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),li(h,s),e.associations.set(h,{materials:t}),s.extensions&&Ei(i,h,s),h})}createUniqueName(t){const e=he.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return sh(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],d=cx(l),h=i[d];if(h)o.push(h.promise);else{let u;l.extensions&&l.extensions[oe.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=sh(new De,l,e),i[d]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const d=o[c].material===void 0?rx(this.cache):this.getDependency("material",o[c].material);a.push(d)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let f=0,g=d.length;f<g;f++){const _=d[f],m=o[f];let p;const x=l[f];if(m.mode===_n.TRIANGLES||m.mode===_n.TRIANGLE_STRIP||m.mode===_n.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Kg(_,x):new pt(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===_n.TRIANGLE_STRIP?p.geometry=th(p.geometry,Ch):m.mode===_n.TRIANGLE_FAN&&(p.geometry=th(p.geometry,La));else if(m.mode===_n.LINES)p=new nu(_,x);else if(m.mode===_n.LINE_STRIP)p=new yo(_,x);else if(m.mode===_n.LINE_LOOP)p=new Jg(_,x);else if(m.mode===_n.POINTS)p=new uo(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ax(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),li(p,s),m.extensions&&Ei(i,p,m),e.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&Ei(i,h[0],s),h[0];const u=new nn;s.extensions&&Ei(i,u,s),e.associations.set(u,{meshes:t});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Je(kd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ja(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),li(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,d=o.length;l<d;l++){const h=o[l];if(h){a.push(h);const u=new te;s!==null&&u.fromArray(s.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new ec(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),d.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let x=0,M=u.length;x<M;x++){const b=u[x],P=f[x],A=g[x],T=_[x],O=m[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const v=n._createAnimationTracks(b,P,A,T,O);if(v)for(let w=0;w<v.length;w++)p.push(v[w])}return new o_(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,d=a.length;l<d;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const d=l[0],h=l[1],u=l[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,hx)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let d;if(s.isBone===!0?d=new eu:l.length>1?d=new nn:l.length===1?d=l[0]:d=new Te,d!==l[0])for(let h=0,u=l.length;h<u;h++)d.add(l[h]);if(s.name&&(d.userData.name=s.name,d.name=o),li(d,s),s.extensions&&Ei(n,d,s),s.matrix!==void 0){const h=new te;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=t,d}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new nn;n.name&&(s.name=i.createUniqueName(n.name)),li(s,n),n.extensions&&Ei(e,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let d=0,h=c.length;d<h;d++)s.add(c[d]);const l=d=>{const h=new Map;for(const[u,f]of i.associations)(u instanceof vn||u instanceof Be)&&h.set(u,f);return d.traverse(u=>{const f=i.associations.get(u);f!=null&&h.set(u,f)}),h};return i.associations=l(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,c=[];ni[s.path]===ni.weights?t.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(ni[s.path]){case ni.weights:l=Rs;break;case ni.rotation:l=Vi;break;case ni.position:case ni.scale:l=Cs;break;default:switch(n.itemSize){case 1:l=Rs;break;case 2:case 3:default:l=Cs;break}break}const d=i.interpolation!==void 0?sx[i.interpolation]:Es,h=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){const g=new l(c[u]+"."+ni[s.path],e.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=za(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Vi?ix:hu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dx(r,t,e){const n=t.attributes,i=new Mn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){const d=za(vs[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new R,c=new R;for(let l=0,d=s.length;l<d;l++){const h=s[l];if(h.POSITION!==void 0){const u=e.json.accessors[h.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const _=za(vs[u.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Dn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function sh(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Ba[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return le.workingColorSpace!==Re&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${le.workingColorSpace}" not supported.`),li(r,t),dx(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?ox(r,t.targets,e):r})}const Ms=66743e-15,cn=1e-9,ln=23e4,la=1/60,fx=9.80665,px=892e22*48,de=.05,io=60;function Fs(r){return("/ellipse/"+r.replace(/^\//,"")).replace(/\/\//g,"/")}class mx{show(t,e=2500){const n=document.createElement("div");n.className="toast",n.textContent=t,n.style.cssText=`
      position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
      z-index: 300;
    `,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),200)},e)}}const Ne=new mx;function ve(r,t){const e=document.createElement("canvas");e.width=r,e.height=t;const n=e.getContext("2d");return[e,n]}function gx(r,t=2){const e=r.width,n=r.height,o=r.getContext("2d").getImageData(0,0,e,n).data,[a,c]=ve(e,n),l=c.createImageData(e,n),d=l.data,h=(f,g)=>(Math.max(0,Math.min(n-1,g))*e+Math.max(0,Math.min(e-1,f)))*4;for(let f=0;f<n;f++)for(let g=0;g<e;g++){const _=o[h(g-1,f-1)]/255,m=o[h(g,f-1)]/255,p=o[h(g+1,f-1)]/255,x=o[h(g-1,f)]/255,M=o[h(g+1,f)]/255,b=o[h(g-1,f+1)]/255,P=o[h(g,f+1)]/255,A=o[h(g+1,f+1)]/255,T=p+2*M+A-(_+2*x+b),O=b+2*P+A-(_+2*m+p),v=T*t,w=O*t,U=Math.sqrt(v*v+w*w+1),D=(f*e+g)*4;d[D]=Math.round((v/U*.5+.5)*255),d[D+1]=Math.round((w/U*.5+.5)*255),d[D+2]=Math.round(1/U*255),d[D+3]=255}c.putImageData(l,0,0);const u=new Qe(a);return u.wrapS=u.wrapT=fn,u.anisotropy=4,u}function lr(r,t,e,n,i){const s=new Qe(r);s.wrapS=s.wrapT=fn,s.colorSpace=se,s.anisotropy=4;let o;t&&(o=gx(t,2));let a;e&&(a=new Qe(e),a.wrapS=a.wrapT=fn,a.anisotropy=4);let c;n&&(c=new Qe(n),c.wrapS=c.wrapT=fn,c.anisotropy=4);let l;return i&&(l=new Qe(i),l.wrapS=l.wrapT=fn,l.anisotropy=4),{color:s,normal:o,roughness:a,metalness:c,ao:l}}function jn(r){let t=r|0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function hr(r,t,e,n=.02){const i=r.getImageData(0,0,t,e),s=i.data;for(let o=0;o<s.length;o+=4){const a=(Math.random()-.5)*2*n*255;s[o]=Math.min(255,Math.max(0,s[o]+a)),s[o+1]=Math.min(255,Math.max(0,s[o+1]+a)),s[o+2]=Math.min(255,Math.max(0,s[o+2]+a))}r.putImageData(i,0,0)}function _x(){const[e,n]=ve(1024,1024),[i,s]=ve(1024,1024),[o,a]=ve(1024,1024),[c,l]=ve(1024,1024),[d,h]=ve(1024,1024),u=jn(11111);n.fillStyle="#3a3d30",n.fillRect(0,0,1024,1024);for(let f=0;f<100;f++){const g=u()*1024,_=u()*1024,m=10+u()*50;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(g,_),n.lineTo(g,_+m),n.stroke()}n.fillStyle="#8a8a8e";for(let f=50;f<1024;f+=200)n.fillRect(0,f,1024,15),n.fillStyle="#6a6a6e",n.fillRect(0,f+15,1024,2),n.fillStyle="#8a8a8e";n.fillStyle="#2a2d22",n.fillRect(0,1024*.85,1024,1024*.15),n.strokeStyle="#4a4d42",n.lineWidth=1;for(let f=0;f<1024;f+=32)n.beginPath(),n.moveTo(f,1024*.85),n.lineTo(f,1024),n.stroke();for(let f=1024*.85;f<1024;f+=32)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();n.fillStyle="#222";for(let f=0;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);n.fillStyle="#ffcc00";for(let f=20;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=2;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024*.85),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=6;for(let f=50;f<1024;f+=200)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();s.strokeStyle="#606060",s.lineWidth=3;for(let f=0;f<1024;f+=32)s.beginPath(),s.moveTo(f,1024*.85),s.lineTo(f,1024),s.stroke();for(let f=1024*.85;f<1024;f+=32)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#707070",a.fillRect(0,0,1024,1024*.85),a.fillStyle="#909090";for(let f=50;f<1024;f+=200)a.fillRect(0,f,1024,17);a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),l.fillStyle="#303030",l.fillRect(0,0,1024,1024),l.fillStyle="#e0e0e0";for(let f=50;f<1024;f+=200)l.fillRect(0,f,1024,17);l.fillStyle="#a0a0a0",l.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#808080",h.lineWidth=8;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024*.85),h.stroke();h.strokeStyle="#909090",h.lineWidth=10;for(let f=50;f<1024;f+=200)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return hr(n,1024,1024,.02),lr(e,i,o,c,d)}function xx(){const[e,n]=ve(1024,1024),[i,s]=ve(1024,1024),[o,a]=ve(1024,1024),[c,l]=ve(1024,1024),[d,h]=ve(1024,1024),u=jn(22222);n.fillStyle="#4a4a4e",n.fillRect(0,0,1024,1024);for(let f=0;f<150;f++){const g=u()*1024,_=u()*1024,m=5+u()*30;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(g,_),n.lineTo(g,_+m),n.stroke()}n.fillStyle="#7a7a7e",n.fillRect(0,1024*.35,1024,1024*.3),n.fillStyle="#3a3a3e";for(let f=24;f<1024;f+=48)n.beginPath(),n.arc(f,1024*.5,6,0,Math.PI*2),n.fill(),n.strokeStyle="#6a6a6e",n.lineWidth=1,n.stroke();n.fillStyle="#cc3300";for(let f=0;f<8;f++){const g=f/8*Math.PI*2,_=1024*.5+Math.cos(g)*1024*.35,m=1024*.5+Math.sin(g)*1024*.35;n.beginPath(),n.arc(_,m,8,0,Math.PI*2),n.fill()}n.fillStyle="#5a5a5e",n.fillRect(0,0,1024,1024*.08),n.fillRect(0,1024*.92,1024,1024*.08),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#b0b0b0",s.lineWidth=10,s.beginPath(),s.moveTo(0,1024*.35),s.lineTo(1024,1024*.35),s.stroke(),s.beginPath(),s.moveTo(0,1024*.65),s.lineTo(1024,1024*.65),s.stroke(),s.fillStyle="#c0c0c0";for(let f=24;f<1024;f+=48)s.beginPath(),s.arc(f,1024*.5,6,0,Math.PI*2),s.fill();return s.strokeStyle="#a0a0a0",s.lineWidth=8,s.beginPath(),s.moveTo(0,1024*.08),s.lineTo(1024,1024*.08),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#404040",a.fillRect(0,1024*.35,1024,1024*.3),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.08),a.fillRect(0,1024*.92,1024,1024*.08),l.fillStyle="#d0d0d0",l.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#707070",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.65),h.lineTo(1024,1024*.65),h.stroke(),h.strokeStyle="#808080",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.08),h.lineTo(1024,1024*.08),h.stroke(),h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),hr(n,1024,1024,.015),lr(e,i,o,c,d)}function yx(){const[e,n]=ve(1024,1024),[i,s]=ve(1024,1024),[o,a]=ve(1024,1024),[c,l]=ve(1024,1024),[d,h]=ve(1024,1024),u=jn(33333);n.fillStyle="#1a1a1c",n.fillRect(0,0,1024,1024);for(let f=0;f<3e3;f++){const g=u()*1024,_=u()*1024,m=1+u()*4,p=20+u()*50,x=u()*20-10;n.fillStyle=`rgb(${p+x},${p},${p-x})`,n.beginPath(),n.arc(g,_,m,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(40,20,10,0.3)",n.lineWidth=1+u()*2;for(let f=0;f<80;f++){const g=u()*1024,_=u()*1024*.3,m=50+u()*200;n.beginPath(),n.moveTo(g,_),n.lineTo(g+(u()-.5)*40,_+m),n.stroke()}n.strokeStyle="#0a0a0c",n.lineWidth=2;for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(f,0),n.lineTo(f,1024),n.stroke();for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024);for(let f=0;f<500;f++){const g=u()*1024,_=u()*1024,m=2+u()*5;s.fillStyle=`rgb(${128+u()*30},${128+u()*30},${128+u()*30})`,s.beginPath(),s.arc(g,_,m,0,Math.PI*2),s.fill()}s.strokeStyle="#404040",s.lineWidth=6;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024),s.stroke();for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#f0f0f0",a.fillRect(0,0,1024,1024),a.fillStyle="#ffffff",a.strokeStyle="#ffffff",a.lineWidth=8;for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f,1024),a.stroke();for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(0,f),a.lineTo(1024,f),a.stroke();l.fillStyle="#000000",l.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#303030",h.lineWidth=10;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024),h.stroke();for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return hr(n,1024,1024,.03),lr(e,i,o,c,d)}function uu(){const[e,n]=ve(1024,1024),[i,s]=ve(1024,1024),[o,a]=ve(1024,1024),[c,l]=ve(1024,1024),[d,h]=ve(1024,1024),u=jn(44444),f=n.createLinearGradient(0,0,0,1024);f&&(f.addColorStop(0,"#b8862e"),f.addColorStop(.08,"#dba44a"),f.addColorStop(.15,"#e8b858"),f.addColorStop(.22,"#cf9a3e"),f.addColorStop(.3,"#b0802e"),f.addColorStop(.38,"#d8a84a"),f.addColorStop(.45,"#eac05e"),f.addColorStop(.52,"#c89838"),f.addColorStop(.6,"#b0802e"),f.addColorStop(.68,"#d8a84a"),f.addColorStop(.75,"#e8b858"),f.addColorStop(.85,"#c89838"),f.addColorStop(1,"#b8862e"),n.fillStyle=f,n.fillRect(0,0,1024,1024));for(let g=0;g<12;g++){const _=50+u()*924,m=50+u()*924,p=80+u()*300,x=80+u()*300;n.strokeStyle=`rgba(80,55,15,${.15+u()*.15})`,n.lineWidth=1+u()*2,n.strokeRect(_,m,p,x);const M=(u()-.5)*.06;n.fillStyle=`rgba(200,160,60,${M>0?M:0})`,n.fillRect(_+2,m+2,p-4,x-4)}n.strokeStyle="rgba(70,50,15,0.12)",n.lineWidth=3+u()*4;for(let g=0;g<60;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,x=40+u()*150;n.beginPath(),n.moveTo(_,m);const M=_+Math.cos(p+.3)*x*.5,b=m+Math.sin(p+.3)*x*.5;n.quadraticCurveTo(M,b,_+Math.cos(p)*x,m+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(60,40,10,0.18)",n.lineWidth=1.5;for(let g=0;g<120;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,x=15+u()*60;n.beginPath(),n.moveTo(_,m),n.lineTo(_+Math.cos(p)*x,m+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(255,230,160,0.15)",n.lineWidth=.5;for(let g=0;g<250;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,x=3+u()*25;n.beginPath(),n.moveTo(_,m),n.lineTo(_+Math.cos(p)*x,m+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(30,20,5,0.1)",n.lineWidth=.5;for(let g=0;g<200;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,x=4+u()*30;n.beginPath(),n.moveTo(_+1,m+1),n.lineTo(_+Math.cos(p)*x+1,m+Math.sin(p)*x+1),n.stroke()}for(let g=0;g<120;g++){const _=u()*1024,m=u()*1024,p=2+u()*18,x=u();x<.33?n.fillStyle=`rgba(80,50,20,${.08+u()*.15})`:x<.66?n.fillStyle=`rgba(30,25,15,${.06+u()*.12})`:n.fillStyle=`rgba(60,80,40,${.04+u()*.08})`,n.beginPath(),n.arc(_,m,p,0,Math.PI*2),n.fill()}for(let g=0;g<50;g++){const _=u()*1024,m=u()*1024,p=1+u()*8,x=240+Math.floor(u()*15);n.fillStyle=`rgba(${x}, ${x-20}, ${x-80}, ${.15+u()*.2})`,n.beginPath(),n.arc(_,m,p,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,240,180,${.03+u()*.05})`,n.beginPath(),n.arc(_,m,p*3,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(160,120,40,0.12)",n.lineWidth=1;for(let g=0;g<1024;g+=15+u()*25){n.beginPath(),n.moveTo(0,g);for(let _=0;_<1024;_+=10)n.lineTo(_+u()*5,g+(u()-.5)*3);n.stroke()}s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#a0a0a0",s.lineWidth=2;for(let g=0;g<120;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,x=20+u()*100;s.beginPath(),s.moveTo(_,m);const M=_+Math.cos(p+.2)*x*.4,b=m+Math.sin(p+.2)*x*.4;s.quadraticCurveTo(M,b,_+Math.cos(p)*x,m+Math.sin(p)*x),s.stroke()}s.strokeStyle="#c0c0c0",s.lineWidth=1;for(let g=0;g<300;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,x=5+u()*40;s.beginPath(),s.moveTo(_,m),s.lineTo(_+Math.cos(p)*x,m+Math.sin(p)*x),s.stroke()}s.fillStyle="#606060";for(let g=0;g<100;g++){const _=u()*1024,m=u()*1024,p=2+u()*16;s.beginPath(),s.arc(_,m,p,0,Math.PI*2),s.fill()}a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#909090";for(let g=0;g<400;g++){const _=u()*1024,m=u()*1024,p=5+u()*50,x=3+u()*20;a.fillRect(_,m,p,x)}a.fillStyle="#c0c0c0";for(let g=0;g<100;g++){const _=u()*1024,m=u()*1024,p=2+u()*16;a.beginPath(),a.arc(_,m,p,0,Math.PI*2),a.fill()}l.fillStyle="#f0f0f0",l.fillRect(0,0,1024,1024),l.fillStyle="#303030";for(let g=0;g<100;g++){const _=u()*1024,m=u()*1024,p=2+u()*16;l.beginPath(),l.arc(_,m,p,0,Math.PI*2),l.fill()}l.strokeStyle="#808080",l.lineWidth=2;for(let g=0;g<12;g++){const _=50+u()*924,m=50+u()*924,p=80+u()*300,x=80+u()*300;l.strokeRect(_,m,p,x)}h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=3;for(let g=0;g<400;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,x=5+u()*50;h.beginPath(),h.moveTo(_,m),h.lineTo(_+Math.cos(p)*x,m+Math.sin(p)*x),h.stroke()}h.strokeStyle="#808080",h.lineWidth=2;for(let g=0;g<200;g++){const _=u()*1024,m=u()*1024,p=u()*Math.PI*2,x=10+u()*80;h.beginPath(),h.moveTo(_,m);const M=_+Math.cos(p+.3)*x*.5,b=m+Math.sin(p+.3)*x*.5;h.quadraticCurveTo(M,b,_+Math.cos(p)*x,m+Math.sin(p)*x),h.stroke()}h.fillStyle="#888888";for(let g=0;g<100;g++){const _=u()*1024,m=u()*1024,p=3+u()*18;h.beginPath(),h.arc(_,m,p,0,Math.PI*2),h.fill()}return hr(n,1024,1024,.02),lr(e,i,o,c,d)}function du(){const[e,n]=ve(1024,1024),[i,s]=ve(1024,1024),[o,a]=ve(1024,1024),[c,l]=ve(1024,1024),[d,h]=ve(1024,1024);n.fillStyle="#f5f5f0",n.fillRect(0,0,1024,1024),n.strokeStyle="rgba(200,200,190,0.15)",n.lineWidth=1;for(let u=0;u<1024;u+=4)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();n.strokeStyle="rgba(200,200,190,0.1)";for(let u=0;u<1024;u+=4)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.strokeStyle="rgba(160,160,150,0.3)",n.lineWidth=2;for(let u=0;u<1024;u+=32)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();for(let u=0;u<1024;u+=32)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.strokeStyle="rgba(120,120,110,0.4)",n.lineWidth=1,n.setLineDash([8,16]);for(let u=16;u<1024;u+=64)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();for(let u=16;u<1024;u+=64)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.setLineDash([]),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let u=0;u<1024;u+=8)s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke();for(let u=0;u<1024;u+=8)s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=4;for(let u=0;u<1024;u+=32)s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke();for(let u=0;u<1024;u+=32)s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke();a.fillStyle="#c0c0c0",a.fillRect(0,0,1024,1024),a.fillStyle="#e0e0e0",a.strokeStyle="#e0e0e0",a.lineWidth=6;for(let u=0;u<1024;u+=32)a.beginPath(),a.moveTo(u,0),a.lineTo(u,1024),a.stroke();for(let u=0;u<1024;u+=32)a.beginPath(),a.moveTo(0,u),a.lineTo(1024,u),a.stroke();l.fillStyle="#000000",l.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#a0a0a0",h.lineWidth=6;for(let u=0;u<1024;u+=32)h.beginPath(),h.moveTo(u,0),h.lineTo(u,1024),h.stroke();for(let u=0;u<1024;u+=32)h.beginPath(),h.moveTo(0,u),h.lineTo(1024,u),h.stroke();return hr(n,1024,1024,.02),lr(e,i,o,c,d)}function fu(r,t,e,n,i,s){const o=document.createElement("canvas");o.width=r,o.height=t;const a=o.getContext("2d"),c=jn(s),l=a.createImageData(r,t);for(let h=0;h<t;h++){const u=h/t;let f=0,g=0,_=0,m=0;for(const p of e){const x=Math.abs(u-p.y)/p.width;if(x<1){const M=1-x*x,b=vx(p.color);f+=b[0]*M,g+=b[1]*M,_+=b[2]*M,m+=M}}m>0&&(f/=m,g/=m,_/=m);for(let p=0;p<r;p++){const x=p/r,M=Math.sin(x*n+u*n*.5+s)*i+Math.sin(x*n*2.3+u*n*.7+s*2)*i*.5;let b=f,P=g,A=_;const T=M*30;b+=T,P+=T*.7,A+=T*.3;const O=(c()-.5)*8,v=(h*r+p)*4;l.data[v]=Kn(b+O),l.data[v+1]=Kn(P+O),l.data[v+2]=Kn(A+O),l.data[v+3]=255}}a.putImageData(l,0,0);const d=new Qe(o);return d.wrapS=d.wrapT=ke,d.colorSpace=se,d}function vx(r){const t=parseInt(r.slice(1,3),16),e=parseInt(r.slice(3,5),16),n=parseInt(r.slice(5,7),16);return[t,e,n]}function Kn(r){return Math.min(255,Math.max(0,Math.round(r)))}function Mx(){const n=fu(1024,512,[{y:0,width:.08,color:"#5a4a3a",turbulence:.3},{y:.05,width:.06,color:"#6a4c36",turbulence:.3},{y:.1,width:.04,color:"#8a6a48",turbulence:.4},{y:.18,width:.06,color:"#c4a46a",turbulence:.5},{y:.24,width:.04,color:"#d4b880",turbulence:.5},{y:.3,width:.05,color:"#8a6a3a",turbulence:.6},{y:.38,width:.04,color:"#e4d0a0",turbulence:.7},{y:.42,width:.03,color:"#f0e0b8",turbulence:.8},{y:.46,width:.03,color:"#e8d4a8",turbulence:.7},{y:.5,width:.03,color:"#dcc89c",turbulence:.7},{y:.54,width:.03,color:"#e4d0a0",turbulence:.8},{y:.58,width:.03,color:"#f0e0b8",turbulence:.7},{y:.62,width:.04,color:"#e4d0a0",turbulence:.6},{y:.7,width:.05,color:"#8a6a3a",turbulence:.6},{y:.76,width:.04,color:"#c4a46a",turbulence:.5},{y:.82,width:.06,color:"#d4b880",turbulence:.5},{y:.9,width:.04,color:"#7a5a3a",turbulence:.4},{y:.94,width:.06,color:"#6a4c36",turbulence:.3},{y:1,width:.08,color:"#5a4a3a",turbulence:.3}],40,.015,777),s=n.image.getContext("2d"),o=.33*1024,a=.56*512,c=40+jn(888)()*10,l=s.createRadialGradient(o,a,0,o,a,c);l.addColorStop(0,"#c04830"),l.addColorStop(.3,"#b04028"),l.addColorStop(.6,"#a05030"),l.addColorStop(.8,"#8a4830"),l.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=l,s.beginPath(),s.arc(o,a,c,0,Math.PI*2),s.fill();const d=.55*1024,h=.48*512,u=15+jn(889)()*5,f=s.createRadialGradient(d,h,0,d,h,u);return f.addColorStop(0,"#d06040"),f.addColorStop(.5,"#b05038"),f.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=f,s.beginPath(),s.arc(d,h,u,0,Math.PI*2),s.fill(),n.needsUpdate=!0,n}function Sx(){return fu(1024,512,[{y:0,width:.08,color:"#a09070",turbulence:.2},{y:.06,width:.06,color:"#b8a888",turbulence:.2},{y:.12,width:.05,color:"#a89878",turbulence:.3},{y:.18,width:.06,color:"#c8b898",turbulence:.3},{y:.25,width:.05,color:"#b8a888",turbulence:.4},{y:.32,width:.05,color:"#d4c8a8",turbulence:.4},{y:.38,width:.04,color:"#c0b090",turbulence:.5},{y:.42,width:.03,color:"#e8dcc0",turbulence:.5},{y:.46,width:.03,color:"#d4c8a8",turbulence:.5},{y:.5,width:.03,color:"#f0e4d0",turbulence:.5},{y:.54,width:.03,color:"#d4c8a8",turbulence:.5},{y:.58,width:.04,color:"#e8dcc0",turbulence:.5},{y:.64,width:.05,color:"#c0b090",turbulence:.4},{y:.7,width:.05,color:"#b8a888",turbulence:.4},{y:.76,width:.06,color:"#a89878",turbulence:.3},{y:.85,width:.05,color:"#b8a888",turbulence:.2},{y:.92,width:.08,color:"#a09070",turbulence:.2}],30,.01,333)}function bx(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=jn(222),s=n.createImageData(1024,512);for(let a=0;a<512;a++){const c=a/512,d=.6+(Math.sin(c*12)*.3+Math.sin(c*24)*.15+Math.sin(c*6)*.4)*.1;for(let h=0;h<1024;h++){const u=h/1024,f=Math.sin(u*8+c*4)*.03,g=(i()-.5)*.04,_=(.48+d*.12+f+g)*255,m=(.7+d*.18+f*.5+g)*255,p=(.75+d*.2+g)*255,x=(a*1024+h)*4;s.data[x]=Kn(_),s.data[x+1]=Kn(m),s.data[x+2]=Kn(p),s.data[x+3]=255}}n.putImageData(s,0,0);const o=new Qe(e);return o.wrapS=o.wrapT=ke,o.colorSpace=se,o}function Tx(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=jn(444),s=n.createImageData(1024,512);for(let _=0;_<512;_++){const m=_/512,x=.5+(Math.sin(m*14)*.5+Math.sin(m*28)*.2+Math.sin(m*7)*.3)*.08;for(let M=0;M<1024;M++){const b=M/1024,P=Math.sin(b*10+m*5)*.04,A=(i()-.5)*.03,T=(.18+x*.08+P+A)*255,O=(.25+x*.12+P*.7+A)*255,v=(.7+x*.2+A)*255,w=(_*1024+M)*4;s.data[w]=Kn(T),s.data[w+1]=Kn(O),s.data[w+2]=Kn(v),s.data[w+3]=255}}n.putImageData(s,0,0);const o=.3*1024,a=.65*512,c=30,l=n.createRadialGradient(o,a,0,o,a,c);l.addColorStop(0,"#0a0a2a"),l.addColorStop(.3,"#101040"),l.addColorStop(.6,"#1a2050"),l.addColorStop(1,"rgba(30,40,80,0)"),n.fillStyle=l,n.beginPath(),n.arc(o,a,c,0,Math.PI*2),n.fill();const d=.3*1024+35,h=.65*512-15,u=15,f=n.createRadialGradient(d,h,0,d,h,u);f.addColorStop(0,"rgba(200,220,255,0.4)"),f.addColorStop(.5,"rgba(180,200,240,0.2)"),f.addColorStop(1,"rgba(180,200,240,0)"),n.fillStyle=f,n.beginPath(),n.arc(d,h,u,0,Math.PI*2),n.fill(),n.putImageData(s,0,0);const g=new Qe(e);return g.wrapS=g.wrapT=ke,g.colorSpace=se,g}const rh={S:{radius:.5*de,height:.7*de},M:{radius:.7*de,height:1.1*de},L:{radius:1*de,height:1.6*de},XL:{radius:1.4*de,height:2.2*de}},Wn=Math.PI,tr=128;let ha=0;function ua(){return ha=ha*1664525+1013904223>>>0,(ha>>>0)/4294967295}function er(r,t){const e=r.attributes.position;if(!e)return;const n=e.array;for(let i=0;i<n.length;i+=3){const s=(ua()-.5)*2,o=(ua()-.5)*2,a=(ua()-.5)*2;n[i]=n[i]+s*t,n[i+1]=n[i+1]+o*t,n[i+2]=n[i+2]+a*t}e.needsUpdate=!0,r.computeVertexNormals()}const pu=new D_,mi=new Map;async function Ex(r,t=1){const e=Fs(r);if(mi.has(r))return mi.get(r).clone();const n=[e];e!==r&&n.push(r),r.startsWith("/")&&n.push(r.slice(1));let i;for(const s of n)try{const a=(await pu.loadAsync(s)).scene;if(!a)continue;return a.traverse(c=>{if(c instanceof pt)if(c.castShadow=!0,c.receiveShadow=!0,c.material){const l=Array.isArray(c.material)?c.material:[c.material];for(const d of l)if(d instanceof ae){if(d.roughness=Math.max(.1,d.roughness??.5),d.metalness=Math.max(0,d.metalness??0),d.color){const p={h:0,s:0,l:0};d.color.getHSL(p),p.s<.3&&(p.s=Math.min(1,p.s*1.5+.05),p.l=Math.min(1,Math.max(.1,p.l*1.1)),d.color.setHSL(p.h,p.s,p.l))}const h=c.name.toLowerCase(),u=h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor")||h.includes("bell"),f=h.includes("metal")||h.includes("hull")||h.includes("body")||h.includes("frame")||h.includes("strut"),g=h.includes("glass")||h.includes("window")||h.includes("canopy")||h.includes("cockpit"),_=h.includes("heat")||h.includes("shield")||h.includes("tile"),m=h.includes("solar")||h.includes("panel")||h.includes("array");u?(d.roughness=Math.max(.05,d.roughness),d.metalness=Math.min(1,d.metalness+.3),d.emissive=new Tt(8930338),d.emissiveIntensity=.15):f?(d.roughness=Math.max(.1,d.roughness*.7),d.metalness=Math.min(1,d.metalness+.4)):g?(d.roughness=0,d.metalness=0,d.transparent=!0,d.opacity=.6,d.emissive=new Tt(4491519),d.emissiveIntensity=.08):_?(d.roughness=Math.min(1,d.roughness+.2),d.metalness=0):m&&(d.roughness=.8,d.metalness=0,d.emissive=new Tt(4491519),d.emissiveIntensity=.03),!u&&!g&&!m&&(h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor"))&&(d.emissive=new Tt(4465152),d.emissiveIntensity=.05),d.needsUpdate=!0}else if(d instanceof Ae||d instanceof Qg){const h=new ae({color:d.color??16777215,map:d.map,normalMap:d.normalMap,roughnessMap:d.roughnessMap,metalnessMap:d.metalnessMap,aoMap:d.aoMap,roughness:.5,metalness:.1});c.material=h}}else c.material=new ae({color:13421772,roughness:.5,metalness:.1})}),a.scale.setScalar(t),mi.set(r,a),a.clone()}catch(o){i=o}return console.error("Failed to load GLTF after all attempts:",r,i),Ne.show(`Failed to load model: ${r.split("/").pop()}`,3e3),null}const Gr=new Map;function Wi(r,t){if(!Gr.has(r))try{const e=t(),n=[e.color,e.normal,e.roughness,e.metalness,e.ao,e.emissive].filter(Boolean);for(const i of n)i.minFilter=$e,i.magFilter=$e,i.generateMipmaps=!1,i.needsUpdate=!0;Gr.set(r,e)}catch{console.warn("Texture generation failed for:",r,"using solid fallback");const e={color:wx(8421504),normal:void 0,roughness:void 0,metalness:void 0,ao:void 0,emissive:void 0};Gr.set(r,e)}return Gr.get(r)}function wx(r){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");e.fillStyle="#"+r.toString(16).padStart(6,"0"),e.fillRect(0,0,64,64);const n=new Qe(t);return n.colorSpace=se,n}function wn(r,t={}){const e={map:r.color,normalMap:r.normal,roughnessMap:r.roughness,metalnessMap:r.metalness,roughness:.5,metalness:.1,color:13426158,...t};return r.ao&&(e.aoMap=r.ao,e.aoMapIntensity=1),r.emissive&&(e.emissiveMap=r.emissive),new ae(e)}function pn(r,t=1){const e=r.attributes.position;if(!e)return;let n=r.attributes.uv;n||(n=new Le(new Float32Array(e.count*2),2));let i=1/0,s=-1/0;for(let a=0;a<e.count;a++){const c=e.getY(a);c<i&&(i=c),c>s&&(s=c)}const o=s-i||1;for(let a=0;a<e.count;a++){const c=e.getX(a),l=e.getY(a),d=e.getZ(a),u=(Math.atan2(c,d)+Math.PI)/(2*Math.PI),f=(l-i)/o*t;n.setXY(a,u,f)}r.setAttribute("uv",n),n.needsUpdate=!0,r.attributes.uv2||r.setAttribute("uv2",n.clone())}function mu(r){const t=new nn;t.name=r.id;const e=rh[r.size];switch(r.kind){case"capsule":Ax(t,e,r.id);break;case"tank":Rx(t,e,r.size);break;case"engine":Cx(t,e,r.size);break;case"parachute":Px(t,e);break;case"legs":Lx(t,e);break;case"decoupler":Ix(t,e);break;case"heatshield":Dx(t,e);break;case"gltf":{if(r.gltfUrl&&mi.has(r.gltfUrl)){const n=r.gltfScale??1,i=mi.get(r.gltfUrl).clone();i.scale.setScalar(n);const s=new Mn().setFromObject(i),o=new R;s.getCenter(o),i.position.sub(o);const a=[],c=[];i.traverse(l=>{if(l instanceof pt){const d=l.name.toLowerCase();if(d.includes("engine")||d.includes("nozzle")||d.includes("thruster")||d.includes("motor")||d.includes("combustion")||l.position.y<-.1){const f=new Mn().setFromObject(l),g=new R;f.getCenter(g);const _=g.clone().sub(i.position);a.push(_),c.push(l)}l.castShadow=!0,l.receiveShadow=!0}}),i.userData.nozzlePoints=a,i.userData.engineMeshes=c,t.add(i)}else{const n=rh[r.size],i=new ae({color:8956620,roughness:.4,metalness:.3}),s=new be(n.radius,n.radius*.8,n.height*.8,16);pn(s);const o=new pt(s,i);o.position.y=-n.height*.1,t.add(o);const a=new ic(n.radius*.6,n.height*.2,16),c=new ae({color:13386820,roughness:.6,metalness:.1}),l=new pt(a,c);l.position.y=n.height*.4,t.add(l);const d=new ae({color:6710920,roughness:.8,metalness:0});for(let h=0;h<4;h++){const u=h/4*Math.PI*2,f=new xi(n.radius*.02,n.height*.15,n.radius*.3),g=new pt(f,d);g.position.set(Math.sin(u)*n.radius*1.05,-n.height*.35,Math.cos(u)*n.radius*1.05),g.rotation.y=-u,t.add(g)}}break}}return t}function Ax(r,t,e){const n=t.radius,i=t.height,s=64,o=new ae({color:16053488,roughness:.4,metalness:.15}),a=new ae({color:1710626,roughness:.55,metalness:.45}),c=new ae({color:13146168,roughness:.3,metalness:.7}),l=new ae({color:6724044,roughness:.15,metalness:.4,emissive:1122867,emissiveIntensity:.3}),d=new pt(new ue(n*.88,s,32,0,Math.PI*2,0,Math.PI*.48),o);d.position.y=i*.23,r.add(d);const h=new pt(new be(n*.88,n*.97,i*.45,s),o);h.position.y=-i*.01,r.add(h);const u=new pt(new be(n*.97,n*.82,i*.13,s),a);u.position.y=-i*.26,r.add(u);const f=new pt(new be(n*.22,n*.22,i*.06,16),a);f.position.y=i*.45,r.add(f);const g=new pt(new Gi(n*.93,n*.03,8,s),c);g.position.y=-i*.19,g.rotation.x=Math.PI/2,r.add(g);for(const[_,m]of[[0,i*.1],[0,-i*.08]]){const p=new pt(new ue(n*.12,16,8),l);p.position.set(_,m,n*.66),r.add(p)}}function Rx(r,t,e){const n=t.radius,i=t.height,s=64,o=new ae({color:15790316,roughness:.45,metalness:.1}),a=new ae({color:13395490,roughness:.5,metalness:.05}),c=new ae({color:2763312,roughness:.5,metalness:.35}),l=new ae({color:13146168,roughness:.3,metalness:.7}),d=new pt(new be(n*.97,n*1.01,i,s),o);r.add(d);const h=new pt(new be(n*1.02,n*1.02,i*.28,s),a);h.position.y=-i*.02,r.add(h);for(const u of[i*.44,i*.2,-i*.24,-i*.44]){const f=new pt(new Gi(n*1.03,n*.025,8,s),c);f.position.y=u,f.rotation.x=Math.PI/2,r.add(f)}for(const u of[i*.32,-i*.35]){const f=new pt(new Gi(n*1.01,n*.012,6,s),l);f.position.y=u,f.rotation.x=Math.PI/2,r.add(f)}}function Cx(r,t,e){const n=t.radius,i=t.height,s=48,o=new ae({color:1710628,roughness:.5,metalness:.55}),a=new ae({color:2631736,roughness:.25,metalness:.75}),c=new ae({color:13146168,roughness:.3,metalness:.7}),l=new Ae({color:16733440,transparent:!0,opacity:.5,depthWrite:!1}),d=new pt(new be(n*.88,n*.72,i*.22,s),o);d.position.y=i*.24,r.add(d);const h=new pt(new be(n*.06,n*.06,i*.12,8),c);h.position.set(n*.75,i*.24,0),h.rotation.z=Math.PI/2,r.add(h);const u=new pt(new Gi(n*.7,n*.04,8,s),c);u.position.y=i*.13,u.rotation.x=Math.PI/2,r.add(u);const f=new pt(new be(n*.5,n*.84,i*.38,s),a);f.position.y=-i*.07,r.add(f);const g=new pt(new be(n*.3,n*.55,i*.3,s),o);g.position.y=-i*.05,r.add(g);const _=new pt(new Gi(n*.78,n*.035,6,s),c);_.position.y=-i*.07-i*.19,_.rotation.x=Math.PI/2,r.add(_);const m=new pt(new gi(n*.28,n*.48,s),l);m.position.y=-i*.07-i*.15,m.rotation.x=-Math.PI/2,r.add(m)}function Px(r,t){const e=t.radius,n=t.height,i=Wi("fabric",du),s=Wi("gold",uu),o=wn(s),a=wn(i,{color:8952234,roughness:.5,metalness:.1}),c=new be(e*.35,e*.35,n*.18,12);pn(c);const l=new pt(c,a);l.position.y=n*.55,r.add(l);const d=wn(i,{color:6978186,roughness:.4,metalness:.2}),h=new be(e*.37,e*.37,n*.03,12);pn(h);const u=new pt(h,d);u.position.y=n*.55+n*.09,r.add(u);const f=new be(e*.37,e*.37,n*.02,12);pn(f);const g=new pt(f,o);g.position.y=n*.55-n*.09,r.add(g)}function Ha(r){const t=new nn,e=r.radius,n=r.height,i=24,s=Wi("fabric",du),o=wn(s,{side:Oe,transparent:!0,opacity:.95}),a=new ue(e*1.8,i,i,0,Wn*2,0,Wn*.5);pn(a,.5);const c=new pt(a,o);c.position.y=n*.3,c.rotation.x=Wn,t.add(c);const l=wn(s,{color:14500932,side:Oe,transparent:!0,opacity:.9});for(let h=0;h<6;h++){const u=h/6*Wn*2,f=new xi(e*.03,n*.7,e*.015),g=new pt(f,l);g.position.set(Math.cos(u)*e*.9,n*.4,Math.sin(u)*e*.9),g.rotation.x=Wn,g.lookAt(0,n*.8,0),t.add(g)}const d=wn(s,{color:6978186,roughness:.5,metalness:.4});for(let h=0;h<4;h++){const u=h/4*Wn*2+Wn/4;for(let f=0;f<3;f++){const g=new be(.006,.006,n*.15,4);pn(g);const _=new pt(g,d),m=u+(f-1)*.3;_.position.set(Math.cos(m)*e*1.5,n*.15-n*.06*f,Math.sin(m)*e*1.5),t.add(_)}}return t}function Lx(r,t){const e=t.radius,n=t.height,i=Wi("legs",_x),s=wn(i),o=wn(i,{color:2764066,roughness:.8,metalness:.2});for(let a=0;a<4;a++){const c=a/4*Wn*2+Wn/4,l=new be(.01,.007,n*.35,6);pn(l);const d=new pt(l,s),h=Math.cos(c)*e*.65,u=Math.sin(c)*e*.65;d.position.set(h,-n/2-n*.175,u),d.rotation.z=Math.cos(c)*.3,d.rotation.x=Math.sin(c)*.3,r.add(d);const f=new be(.02,.025,.008,6);pn(f);const g=new pt(f,o);g.position.set(Math.cos(c)*e*.95,-n/2-n*.35,Math.sin(c)*e*.95),r.add(g)}}function Ix(r,t){const e=t.radius,n=t.height,i=Wi("decoupler",xx),s=wn(i),o=Wi("gold",uu),a=wn(o),c=new be(e*1.05,e*.92,n*.12,tr);pn(c),er(c,de*.008);const l=new pt(c,s);r.add(l);const d=new be(e*1.08,e*1.08,n*.04,tr);pn(d),er(d,de*.005);const h=new pt(d,a);h.position.y=n*.06,r.add(h);const u=new be(e*.92,e*.92,n*.04,tr);pn(u),er(u,de*.008);const f=new pt(u,s);f.position.y=-n*.06,r.add(f)}function Dx(r,t){const e=t.radius,n=t.height,i=Wi("heatshield",yx),s=wn(i),o=new be(e*1.2,e*.8,n*.2,tr,1,!0);pn(o,.5),er(o,de*.012);const a=new pt(o,s);a.position.y=-n*.1,r.add(a);const c=new be(e*.8,e*.8,n*.08,tr);pn(c),er(c,de*.01);const l=new pt(c,s);l.position.y=-n*.2,r.add(l)}const gu=Object.freeze(Object.defineProperty({__proto__:null,buildDeployedParachute:Ha,buildPartMesh:mu,gltfCache:mi,gltfLoader:pu,loadGLTF:Ex},Symbol.toStringTag,{value:"Module"})),oh={S:{radius:.5*de},M:{radius:.7*de},L:{radius:1*de},XL:{radius:1.4*de}};class Ga{roots=[];addRoot(t){this.roots.push(t)}totalFuelCapacity(){let t=0;const e=n=>{n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}totalMass(){let t=0;const e=n=>{t+=n.part.mass,n.children.forEach(e)};return this.roots.forEach(e),t}totalMassWithFuel(){let t=0;const e=n=>{t+=n.part.mass,n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}centerOfMass(){let t=0,e=0,n=0,i=0;const s=o=>{const a=o.part.mass;t+=a,e+=o.position[0]*a,n+=o.position[1]*a,i+=o.position[2]*a,o.children.forEach(s)};return this.roots.forEach(s),t===0?[0,0,0]:[e/t,n/t,i/t]}toMesh(){const t=new nn,e=(o,a)=>{const c=mu(o.part);c.position.set(o.position[0],o.position[1],o.position[2]),c.rotation.y=o.rotation,a.add(c),o.children.forEach(l=>e(l,c))};this.roots.forEach(o=>e(o,t));const n=[...this.roots].sort((o,a)=>a.position[1]-o.position[1]);let i=0;for(let o=0;o<n.length-1;o++){const a=n[o],c=n[o+1],l=oh[a.part.size]?.radius??0,d=oh[c.part.size]?.radius??0;if(Math.abs(l-d)>.001&&!a.part.id.includes("decoupler")&&!c.part.id.includes("decoupler")){const h=(a.position[1]+c.position[1])/2,u=Math.abs(a.position[1]-c.position[1])*1.5,f=new be(d,l,u,32),g=new ae({color:16777215,roughness:.3,metalness:.2,emissive:0,emissiveIntensity:0}),_=new pt(f,g);_.position.y=h,t.add(_),i++}}i>0&&console.log("Smooth adapters created:",i);const s=this.centerOfMass();for(const o of t.children)o.position.x-=s[0],o.position.y-=s[1],o.position.z-=s[2];return t}}const ah={S:.7,M:1.1,L:1.6,XL:2.2};class Ux{constructor(t,e){this.ol=t,this.ob=e,this.scene.background=new Tt(527382),this.scene.add(new au(4478310,.5));const n=new vo(16777215,2.5);n.position.set(2,5,4),this.scene.add(n),this.scene.add(new ou(8952251,3359829,.5));const i=new R_(10,20,1714746,857376);i.position.y=-.3,this.scene.add(i);const s=new pt(new xi(de*4,.001,de*4),new ae({color:1054760,roughness:.9}));s.position.y=-de*.3,this.scene.add(s),this.scene.add(this.rg),this.cam();const o=a=>{a.button===0&&(this.dr=!0,this.pr={x:a.clientX,y:a.clientY})};document.addEventListener("mousedown",o),document.addEventListener("mousemove",a=>{this.dr&&(this.az-=(a.clientX-this.pr.x)*.005,this.po=Math.max(.05,Math.min(Math.PI-.05,this.po+(a.clientY-this.pr.y)*.005)),this.pr={x:a.clientX,y:a.clientY},this.cam())}),document.addEventListener("mouseup",()=>this.dr=!1),document.addEventListener("wheel",a=>{this.dt*=a.deltaY>0?1.1:.9,this.dt=Math.max(.5,Math.min(50,this.dt)),this.cam()},{passive:!0}),this.root=document.createElement("div"),this.root.style.cssText="position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;",this.root.innerHTML=`
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
      <div style="flex:1;"></div>`,this.info=this.root.querySelector("#vi"),this.build(),this.root.querySelector("#vg").addEventListener("click",()=>{this.assembly.roots.length&&this.ol(this.assembly)}),this.root.querySelector("#vu").addEventListener("click",()=>this.undo()),this.root.querySelector("#vc").addEventListener("click",()=>{this.assembly=new Ga,this.st=0,this.nm=[],this.rf(),this.up()}),this.root.querySelector("#vb").addEventListener("click",()=>this.ob())}scene=new Zh;camera=new Je(50,innerWidth/innerHeight,.01,1e3);assembly=new Ga;rg=new nn;root;info;st=0;nm=[];az=0;po=Math.PI/2;dt=5;dr=!1;pr={x:0,y:0};tg=new R(0,de,0);build(){const t=this.root.querySelector("#vl"),e=new Map,n={capsule:"#a0b0c0",tank:"#6090c0",engine:"#c08060",decoupler:"#c06070",parachute:"#60a070",legs:"#8090a0",heatshield:"#b08060",gltf:"#b080a0"};for(const i of cu)e.has(i.kind)||e.set(i.kind,{parts:[],color:n[i.kind]||"#888"}),e.get(i.kind).parts.push(i);for(const[i,s]of e){const o=document.createElement("div");o.textContent=i.toUpperCase(),o.style.cssText="font:400 7px/1 system-ui,-apple-system,sans-serif;color:rgba(255,255,255,0.12);letter-spacing:0.15em;padding:10px 16px 4px;",t.appendChild(o);for(const a of s.parts){const c=document.createElement("button"),l=a.kind==="engine"?`${(a.thrust/1e3).toFixed(0)}kN`:a.kind==="tank"?`${(a.fuelCapacity/1e3).toFixed(0)}t`:a.kind==="capsule"?`${(a.mass/1e3).toFixed(1)}t`:"";c.innerHTML=`<span style="width:2px;height:12px;background:${s.color};border-radius:1px;display:inline-block;vertical-align:middle;margin-right:8px;opacity:0.6;"></span><span style="vertical-align:middle;">${a.name}</span><span style="float:right;color:rgba(255,255,255,0.12);font-size:9px;margin-top:1px;">${l}</span>`,c.style.cssText="display:block;width:100%;padding:7px 16px;background:transparent;color:rgba(255,255,255,0.35);border:none;font:400 11px system-ui;cursor:pointer;text-align:left;transition:all 0.15s;",c.addEventListener("mouseenter",()=>{c.style.background="rgba(255,255,255,0.02)",c.style.color="rgba(255,255,255,0.7)"}),c.addEventListener("mouseleave",()=>{c.style.background="transparent",c.style.color="rgba(255,255,255,0.35)"}),c.addEventListener("click",()=>this.add(a)),t.appendChild(c)}}}add(t){const e=ah[t.size]||.6,n=this.st+e/2;this.assembly.addRoot({part:t,position:[0,n*de,0],rotation:0,children:[]}),this.st+=e,this.nm.push(t.name),this.rf(),this.up()}undo(){if(!this.assembly.roots.length)return;const t=this.assembly.roots.pop();this.st-=ah[t.part.size]||.6,this.nm.pop(),this.rf(),this.up()}up(){if(!this.nm.length){this.info.innerHTML='<span style="color:rgba(255,255,255,0.08);">select parts</span>';return}const t=this.assembly.roots.reduce((n,i)=>n+i.part.mass,0),e=this.assembly.roots.reduce((n,i)=>n+(i.part.fuelCapacity||0),0);this.info.innerHTML=this.nm.map((n,i)=>`<span style="color:rgba(255,255,255,0.2);">${n}</span>`).join(' <span style="color:rgba(255,255,255,0.05);">&rarr;</span> ')+`<div style="margin-top:6px;font:400 8px system-ui;color:rgba(255,255,255,0.08);">${this.nm.length}p &middot; ${(t/1e3).toFixed(1)}t${e?" &middot; "+(e/1e3).toFixed(0)+"t fuel":""}</div>`}async rf(){for(;this.rg.children.length;)this.rg.remove(this.rg.children[0]);if(!this.assembly.roots.length)return;if(this.assembly.roots.some(e=>e.part.kind==="gltf"&&e.part.gltfUrl&&!mi.has(e.part.gltfUrl))){const{loadGLTF:e}=await xh(async()=>{const{loadGLTF:n}=await Promise.resolve().then(()=>gu);return{loadGLTF:n}},void 0);for(const n of this.assembly.roots)n.part.kind==="gltf"&&n.part.gltfUrl&&!mi.has(n.part.gltfUrl)&&await e(n.part.gltfUrl,n.part.gltfScale??1)}this.rg.add(this.assembly.toMesh())}cam(){const t=this.dt*Math.sin(this.po)*Math.cos(this.az),e=this.dt*Math.cos(this.po),n=this.dt*Math.sin(this.po)*Math.sin(this.az);this.camera.position.set(this.tg.x+t,this.tg.y+e,this.tg.z+n),this.camera.lookAt(this.tg)}mount(){document.body.appendChild(this.root)}unmount(){this.root.remove()}}class ac{name;mass;position;velocity;constructor(t,e,n,i){this.name=t,this.mass=e,this.position=[...n],this.velocity=[...i]}applyForce(t,e){const n=t[0]/this.mass,i=t[1]/this.mass,s=t[2]/this.mass;this.velocity[0]+=n*e,this.velocity[1]+=i*e,this.velocity[2]+=s*e,this.position[0]+=this.velocity[0]*e,this.position[1]+=this.velocity[1]*e,this.position[2]+=this.velocity[2]*e}kineticEnergy(){const t=this.velocity[0]**2+this.velocity[1]**2+this.velocity[2]**2;return .5*this.mass*t}}class Nx{rocket;system;position;velocity;throttle=0;constructor(t,e,n,i){this.rocket=t,this.system=e,this.position=[...n],this.velocity=[...i]}consumeFuel(t,e){this.rocket.consumeFuel(t,e)}}const ps=cn*ln,da=.5,fa=500,Vr=25,Wr=3,ch=2,Xr=7,qr=0,Yr=Math.PI/2.5;class Fx{camera;dist=Xr;targetDist=Xr;azimuth=qr;targetAzimuth=qr;polar=Yr;targetPolar=Yr;isDragging=!1;prevMouse={x:0,y:0};canvas=null;smoothPos=new R;initialized=!1;orbitKeys={left:!1,right:!1,up:!1,down:!1};zoomKeys={in:!1,out:!1};inertiaAzimuth=0;inertiaPolar=0;constructor(t){this.camera=t,this.setupKeyboard()}setupKeyboard(){window.addEventListener("keydown",t=>{if(t.shiftKey)switch(t.key){case"ArrowLeft":this.orbitKeys.left=!0,t.preventDefault();break;case"ArrowRight":this.orbitKeys.right=!0,t.preventDefault();break;case"ArrowUp":this.orbitKeys.up=!0,t.preventDefault();break;case"ArrowDown":this.orbitKeys.down=!0,t.preventDefault();break}(t.key==="z"||t.key==="Z")&&(this.zoomKeys.in=!0),(t.key==="x"||t.key==="X")&&(this.zoomKeys.out=!0)}),window.addEventListener("keyup",t=>{switch(t.key){case"ArrowLeft":this.orbitKeys.left=!1;break;case"ArrowRight":this.orbitKeys.right=!1;break;case"ArrowUp":this.orbitKeys.up=!1;break;case"ArrowDown":this.orbitKeys.down=!1;break;case"z":case"Z":this.zoomKeys.in=!1;break;case"x":case"X":this.zoomKeys.out=!1;break}})}initialiseAt(t,e,n,i){const s=t.position[0]*ps+(i?.x??0),o=t.position[1]*ps+(i?.y??0),a=t.position[2]*ps+(i?.z??0),c=new R(s,o,a),l=this.targetDist*Math.sin(this.polar)*Math.cos(this.azimuth),d=this.targetDist*Math.cos(this.polar),h=this.targetDist*Math.sin(this.polar)*Math.sin(this.azimuth);this.camera.position.set(s+l,o+d,a+h),this.camera.up.set(0,1,0),this.camera.lookAt(c)}setAzimuth(t){this.azimuth=t,this.targetAzimuth=t}setPolar(t){this.polar=t,this.targetPolar=t}zoom(t){this.targetDist*=t,this.targetDist=Math.max(da,Math.min(fa,this.targetDist))}enableOrbit(t){this.canvas=t,t.addEventListener("mousedown",e=>{e.button===0&&(this.isDragging=!0,this.prevMouse={x:e.clientX,y:e.clientY},this.inertiaAzimuth=0,this.inertiaPolar=0)}),window.addEventListener("mousemove",e=>{if(!this.isDragging)return;const n=e.clientX-this.prevMouse.x,i=e.clientY-this.prevMouse.y;this.inertiaAzimuth=-n*.005,this.inertiaPolar=i*.005,this.targetAzimuth+=this.inertiaAzimuth,this.targetPolar=Math.max(.05,Math.min(Math.PI-.05,this.targetPolar+this.inertiaPolar)),this.prevMouse={x:e.clientX,y:e.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.targetDist*=e.deltaY>0?1.1:.9,this.targetDist=Math.max(da,Math.min(fa,this.targetDist))},{passive:!1})}follow(t,e,n,i=!1,s){const o=t.position[0]*ps+(s?.x??0),a=t.position[1]*ps+(s?.y??0),c=t.position[2]*ps+(s?.z??0),l=new R(o,a,c);this.orbitKeys.left&&(this.targetAzimuth+=e*Wr),this.orbitKeys.right&&(this.targetAzimuth-=e*Wr),this.orbitKeys.up&&(this.targetPolar=Math.max(.05,this.targetPolar-e*Wr*.5)),this.orbitKeys.down&&(this.targetPolar=Math.min(Math.PI-.05,this.targetPolar+e*Wr*.5)),this.zoomKeys.in&&(this.targetDist=Math.max(da,this.targetDist*(1-e*ch))),this.zoomKeys.out&&(this.targetDist=Math.min(fa,this.targetDist*(1+e*ch))),this.isDragging||(this.targetAzimuth+=this.inertiaAzimuth*e*2,this.targetPolar+=this.inertiaPolar*e*2,this.inertiaAzimuth*=Math.exp(-3*e),this.inertiaPolar*=Math.exp(-3*e)),this.dist+=(this.targetDist-this.dist)*Math.min(1,Vr*e),this.azimuth+=(this.targetAzimuth-this.azimuth)*Math.min(1,Vr*e*.5),this.polar+=(this.targetPolar-this.polar)*Math.min(1,Vr*e*.5);const d=this.dist*Math.sin(this.polar)*Math.cos(this.azimuth),h=this.dist*Math.cos(this.polar),u=this.dist*Math.sin(this.polar)*Math.sin(this.azimuth),f=new R(o+d,a+h,c+u),g=new R(0,1,0);if(this.initialized||(this.smoothPos.copy(f),this.initialized=!0),i)this.smoothPos.copy(f);else{const m=Math.min(1,Vr*e);this.smoothPos.lerp(f,m)}this.camera.position.copy(this.smoothPos);const _=Math.abs(this.polar)<.1?new R(0,0,1):Math.abs(this.polar-Math.PI)<.1?new R(0,0,-1):g;this.camera.up.copy(_),this.camera.lookAt(l)}reset(){this.targetDist=Xr,this.dist=Xr,this.targetAzimuth=qr,this.azimuth=qr,this.targetPolar=Yr,this.polar=Yr}dispose(){this.canvas=null}}class Ox{container;active=!1;keys=new Set;stagePressed=!1;pauseToggle=!1;visible=!1;constructor(){this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,e.appendChild(n);let i=null;const s={x:0,y:0},o={x:0,y:0},a=(U,D)=>{const q=e.getBoundingClientRect();s.x=q.left+q.width/2,s.y=q.top+q.height/2,o.x=U,o.y=D,this.updateStick(n,s,o)},c=(U,D)=>{o.x=U,o.y=D,this.updateStick(n,s,o);const q=(U-s.x)/60,L=(D-s.y)/60,k=Math.max(-1,Math.min(1,q)),V=Math.max(-1,Math.min(1,L));V>.3?(this.keys.add("touch-up"),this.keys.delete("touch-down")):V<-.3?(this.keys.add("touch-down"),this.keys.delete("touch-up")):(this.keys.delete("touch-up"),this.keys.delete("touch-down")),k>.3?(this.keys.add("touch-right"),this.keys.delete("touch-left")):k<-.3?(this.keys.add("touch-left"),this.keys.delete("touch-right")):(this.keys.delete("touch-left"),this.keys.delete("touch-right"))},l=()=>{i=null,n.style.transform="translate(-50%, -50%)",this.keys.delete("touch-up"),this.keys.delete("touch-down"),this.keys.delete("touch-left"),this.keys.delete("touch-right")};e.addEventListener("touchstart",U=>{if(U.preventDefault(),i!==null)return;const D=U.changedTouches[0];i=D.identifier,a(D.clientX,D.clientY)},{passive:!1}),e.addEventListener("touchmove",U=>{U.preventDefault();for(let D=0;D<U.changedTouches.length;D++)U.changedTouches[D].identifier===i&&c(U.changedTouches[D].clientX,U.changedTouches[D].clientY)},{passive:!1}),e.addEventListener("touchend",U=>{for(let D=0;D<U.changedTouches.length;D++)U.changedTouches[D].identifier===i&&l()}),e.addEventListener("touchcancel",l),t.appendChild(e);const d=document.createElement("div");d.style.cssText=`
      position: absolute; bottom: 20px; right: 20px; display: flex;
      flex-direction: column; gap: 8px; align-items: flex-end;
    `;const h=(U,D=70,q=50)=>{const L=document.createElement("div");L.style.cssText="pointer-events: auto; position: relative;";const k=document.createElement("button");return k.textContent=U,k.style.cssText=`
        width: ${D}px; height: ${q}px; border-radius: 12px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: white; font: 600 14px/1 monospace; cursor: pointer;
        touch-action: none; user-select: none;
      `,L.appendChild(k),[k,L]},[u,f]=h("THR+",70,44),[g,_]=h("THR-",70,44),[m,p]=h("STAGE",70,44),[x,M]=h("R-",60,44),[b,P]=h("R+",60,44),A=(U,D)=>{this.keys.add(U),D.style.background="rgba(255,255,255,0.3)"},T=(U,D)=>{this.keys.delete(U),D.style.background="rgba(255,255,255,0.1)"},O=(U,D)=>{U.addEventListener("touchstart",q=>{q.preventDefault(),A(D,U)},{passive:!1}),U.addEventListener("touchend",q=>{q.preventDefault(),T(D,U)},{passive:!1}),U.addEventListener("touchcancel",()=>T(D,U)),U.addEventListener("mousedown",()=>A(D,U)),U.addEventListener("mouseup",()=>T(D,U)),U.addEventListener("mouseleave",()=>T(D,U))};O(u,"w"),O(g,"s"),O(x,"a"),O(b,"d"),m.addEventListener("touchstart",U=>{U.preventDefault(),this.stagePressed=!0},{passive:!1}),m.addEventListener("mousedown",()=>{this.stagePressed=!0});const v=document.createElement("div");v.style.cssText="display:flex; gap:8px;",v.appendChild(f),v.appendChild(p),d.appendChild(v);const w=document.createElement("div");w.style.cssText="display:flex; gap:8px;",w.appendChild(_),w.appendChild(M),w.appendChild(P),d.appendChild(w),t.appendChild(d)}updateStick(t,e,n){const i=n.x-e.x,s=n.y-e.y,o=60,a=Math.sqrt(i*i+s*s),c=Math.min(a,o),l=Math.atan2(s,i),d=Math.cos(l)*c,h=Math.sin(l)*c;t.style.transform=`translate(calc(-50% + ${d}px), calc(-50% + ${h}px))`}show(){this.visible||(this.visible=!0,this.container.style.display="block")}hide(){this.visible=!1,this.container.style.display="none"}isVisible(){return this.visible}getPitch(){let t=0;return this.keys.has("touch-up")&&(t=1),this.keys.has("touch-down")&&(t=-1),t}getYaw(){let t=0;return this.keys.has("touch-right")&&(t=1),this.keys.has("touch-left")&&(t=-1),t}getRoll(){let t=0;return this.keys.has("a")&&(t=1),this.keys.has("d")&&(t=-1),t}getThrottleUp(){return this.keys.has("w")}getThrottleDown(){return this.keys.has("s")}getStageRequested(){const t=this.stagePressed;return this.stagePressed=!1,t}dispose(){document.body.removeChild(this.container)}}class kx{keys=new Set;stagePressed=!1;pauseToggle=!1;state;touch=null;_onKeyDown;_onKeyUp;constructor(t){this.state=t,this._onKeyDown=e=>{e.repeat||(this.keys.add(e.key.toLowerCase()),e.key===" "&&(this.stagePressed=!0),e.key==="Escape"&&(this.pauseToggle=!0),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(e.key.toLowerCase())&&e.preventDefault())},this._onKeyUp=e=>{this.keys.delete(e.key.toLowerCase())},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}enableTouch(){this.touch||(this.touch=new Ox),this.touch.show()}disableTouch(){this.touch?.hide()}update(t){const e=this.touch?.getThrottleUp()||this.keys.has("w"),n=this.touch?.getThrottleDown()||this.keys.has("s");e&&(this.state.throttle=Math.min(1,this.state.throttle+t*.5)),n&&(this.state.throttle=Math.max(0,this.state.throttle-t*.3))}getPitch(){let t=0;return(this.keys.has("arrowup")||this.touch?.getPitch()===1)&&(t=1),(this.keys.has("arrowdown")||this.touch?.getPitch()===-1)&&(t=-1),t}getYaw(){let t=0;return(this.keys.has("arrowleft")||this.touch?.getYaw()===1)&&(t=1),(this.keys.has("arrowright")||this.touch?.getYaw()===-1)&&(t=-1),t}getRoll(){let t=0;return(this.keys.has("a")||this.touch?.getRoll()===1)&&(t=1),(this.keys.has("d")||this.touch?.getRoll()===-1)&&(t=-1),t}getZoomIn(){return this.keys.has("z")}getZoomOut(){return this.keys.has("x")}getStageRequested(){const t=this.stagePressed||!!this.touch?.getStageRequested();return this.stagePressed=!1,t}consumePauseToggle(){const t=this.pauseToggle;return this.pauseToggle=!1,t}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.touch?.dispose(),this.touch=null}}class Bx{root;speedVal;fuelVal;vsVal;altVal;massVal;heatFill;heatPct;throttleFill;throttlePct;warpLabel;_fuelRKg;_fuelRBar;pauseOverlay;navballCanvas;navballCtx;camModeEl;onAction=null;constructor(){this.root=document.createElement("div"),this.root.style.cssText="position:fixed;inset:0;z-index:100;pointer-events:none;",this.pauseOverlay=document.createElement("div"),this.pauseOverlay.style.cssText="position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;",this.pauseOverlay.innerHTML=`
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
    `,this.root.appendChild(e),this.speedVal=e.querySelector(".speed-val"),this.fuelVal=e.querySelector(".fuel-val"),this.vsVal=e.querySelector(".vs-val"),this.altVal=e.querySelector(".alt-val"),this.massVal=e.querySelector(".mass-val"),this.heatFill=e.querySelector(".heat-fill"),this.heatPct=e.querySelector(".heat-pct"),this.throttleFill=e.querySelector(".throt-fill"),this.throttlePct=e.querySelector(".throt-pct"),this.warpLabel=e.querySelector(".warp-val"),e.addEventListener("click",o=>{const a=o.target.closest("[data-action]");a&&this.onAction&&this.onAction(a.dataset.action)}),this.camModeEl=document.createElement("div"),this.camModeEl.style.cssText="position:fixed;bottom:20px;left:20px;z-index:100;color:rgba(200,152,56,0.5);font-size:9px;font-family:monospace;pointer-events:none;",this.root.appendChild(this.camModeEl);const n=document.createElement("div");n.style.cssText="position:fixed;bottom:20px;right:20px;z-index:100;pointer-events:none;";const i=document.createElement("canvas");i.width=150,i.height=150,i.style.cssText="width:150px;height:150px;border-radius:75px;opacity:0.85;",n.appendChild(i),this.root.appendChild(n),this.navballCanvas=i,this.navballCtx=i.getContext("2d");const s=document.createElement("div");s.style.cssText="position:fixed;top:16px;right:16px;z-index:100;pointer-events:none;font-family:monospace;font-size:12px;background:rgba(8,10,24,0.8);border:1px solid rgba(200,152,56,0.2);border-radius:6px;padding:8px 12px;color:#ffaa44;",s.innerHTML='<span style="color:rgba(244,245,242,0.5);">FUEL</span> <span class="fuel-r-kg">4500 kg</span><br><div style="width:80px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;margin-top:4px;"><div class="fuel-r-bar" style="width:100%;height:100%;background:#ffaa44;border-radius:3px;"></div></div>',this.root.appendChild(s),this._fuelRKg=s.querySelector(".fuel-r-kg"),this._fuelRBar=s.querySelector(".fuel-r-bar"),t.appendChild(this.root)}setVisible(t){this.root.style.display=t?"":"none"}setMass(t){this.massVal&&(this.massVal.textContent=`${(t/1e3).toFixed(1)}`)}setFreeCamera(t){this.camModeEl&&(this.camModeEl.textContent=t?"FREE":"")}setWarp(t){this.warpLabel&&(this.warpLabel.textContent=`x${t}`)}setPaused(t){this.pauseOverlay.style.display=t?"flex":"none"}setThrottle(t){const e=Math.round(t*100);this.throttlePct.textContent=`${e}%`,this.throttleFill.style.width=`${e}%`,this.throttleFill.style.background=e>80?"#ff6644":"#4488ff"}setNavballData(t,e,n,i,s){const o=this.navballCtx,a=140,c=140,l=70,d=70,h=66;o.clearRect(0,0,a,c),o.beginPath(),o.arc(l,d,h+2,0,Math.PI*2),o.fillStyle="#060810",o.fill();const u=[t[0],t[1],t[2]],f=Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2])||1;u[0]/=f,u[1]/=f,u[2]/=f;const g=u[0]*n[0]+u[1]*n[1]+u[2]*n[2];let _=[n[0]-u[0]*g,n[1]-u[1]*g,n[2]-u[2]*g];const m=Math.sqrt(_[0]*_[0]+_[1]*_[1]+_[2]*_[2])||1;_[0]/=m,_[1]/=m,_[2]/=m;const p=[u[1]*_[2]-u[2]*_[1],u[2]*_[0]-u[0]*_[2],u[0]*_[1]-u[1]*_[0]],x=T=>{const O=Math.sqrt(T[0]*T[0]+T[1]*T[1]+T[2]*T[2])||1,v=T[0]/O,w=T[1]/O,U=T[2]/O,D=v*p[0]+w*p[1]+U*p[2],q=v*_[0]+w*_[1]+U*_[2],L=v*u[0]+w*u[1]+U*u[2],k=L>0,V=L>0?h/(1+L):h*.5;return{x:l+D*V,y:d-q*V,inFront:k,lx:D,ly:q,lz:L}},M=h*h;o.save(),o.beginPath(),o.arc(l,d,h,0,Math.PI*2),o.clip(),x(n);const b=x([-n[0],-n[1],-n[2]]),P=o.createRadialGradient(l,d,0,l,d,h);if(P.addColorStop(0,"#0a0a22"),P.addColorStop(.4,"#1a2a4a"),P.addColorStop(1,"#224488"),o.fillStyle=P,o.fillRect(l-h,d-h,h*2,h*2),b.inFront){const T=o.createRadialGradient(b.x,b.y,0,b.x,b.y,h*1.2);T.addColorStop(0,"#6a4a2a"),T.addColorStop(.3,"#5a3a1a"),T.addColorStop(.7,"#3a2a12"),T.addColorStop(1,"rgba(10,10,40,0)"),o.fillStyle=T,o.fillRect(l-h,d-h,h*2,h*2)}for(let T=-80;T<=80;T+=10){const O=T*Math.PI/180,v=Math.cos(O),w=Math.sin(O),U=[u[0]*v+_[0]*w,u[1]*v+_[1]*w,u[2]*v+_[2]*w],D=x(U);if(!D.inFront||(D.x-l)*(D.x-l)+(D.y-d)*(D.y-d)>M)continue;const q=T===0?26:T%20===0?18:10;o.beginPath(),o.moveTo(l-q*(1-Math.abs(w)*.3),D.y),o.lineTo(l+q*(1-Math.abs(w)*.3),D.y),o.strokeStyle=T===0?"#FFCC44":"rgba(255,255,255,0.2)",o.lineWidth=T===0?1.5:.6,o.stroke(),T%20===0&&(o.fillStyle="rgba(255,255,255,0.35)",o.font="7px sans-serif",o.fillText(`${Math.abs(T)}`,l+q+3,D.y+2))}for(let T=0;T<360;T+=45){const O=T*Math.PI/180,v=p[0]*Math.cos(O)+_[0]*Math.sin(O),w=p[1]*Math.cos(O)+_[1]*Math.sin(O),U=p[2]*Math.cos(O)+_[2]*Math.sin(O),D=[v-u[0]*g,w-u[1]*g,U-u[2]*g],q=Math.sqrt(D[0]*D[0]+D[1]*D[1]+D[2]*D[2])||1,L=x([D[0]/q,D[1]/q,D[2]/q]);L.inFront&&(o.fillStyle="rgba(255,255,255,0.2)",o.font="6px sans-serif",o.textAlign="center",o.fillText(`${T}°`,L.x,L.y+2),o.textAlign="start")}const A=(T,O)=>{const v=x(T);v.inFront&&O(v)};A(e,T=>{o.beginPath(),o.arc(T.x,T.y,4,0,Math.PI*2),o.fillStyle="#44FF44",o.fill(),o.beginPath(),o.arc(T.x,T.y,7,0,Math.PI*2),o.strokeStyle="#44FF44",o.lineWidth=1.5,o.stroke()}),A([-e[0],-e[1],-e[2]],T=>{o.beginPath(),o.arc(T.x,T.y,4,0,Math.PI*2),o.fillStyle="rgba(68,255,68,0.5)",o.fill(),o.beginPath(),o.arc(T.x,T.y,7,0,Math.PI*2),o.strokeStyle="#44FF44",o.lineWidth=1,o.stroke(),o.beginPath(),o.moveTo(T.x-3,T.y-3),o.lineTo(T.x+3,T.y+3),o.moveTo(T.x+3,T.y-3),o.lineTo(T.x-3,T.y+3),o.strokeStyle="#44FF44",o.lineWidth=1,o.stroke()}),A(n,T=>{o.beginPath(),o.moveTo(T.x,T.y-6),o.lineTo(T.x-4,T.y+3),o.lineTo(T.x+4,T.y+3),o.closePath(),o.fillStyle="#4488FF",o.fill()}),A([-n[0],-n[1],-n[2]],T=>{o.beginPath(),o.moveTo(T.x,T.y+6),o.lineTo(T.x-4,T.y-3),o.lineTo(T.x+4,T.y-3),o.closePath(),o.fillStyle="#CC8844",o.fill()}),o.beginPath(),o.arc(l,d,3,0,Math.PI*2),o.fillStyle="#FFAA44",o.fill(),o.restore(),o.beginPath(),o.arc(l,d,h+1,0,Math.PI*2),o.strokeStyle="#334466",o.lineWidth=2,o.stroke();for(let T=0;T<360;T+=45){const O=T*Math.PI/180;o.beginPath(),o.moveTo(l+Math.cos(O)*(h-7),d+Math.sin(O)*(h-7)),o.lineTo(l+Math.cos(O)*(h+2),d+Math.sin(O)*(h+2)),o.strokeStyle="#4a6a8a",o.lineWidth=1,o.stroke()}}update(t,e,n=0,i=0){const s=Math.sqrt(t.velocity[0]**2+t.velocity[1]**2+t.velocity[2]**2);let o=1/0;for(const g of e.bodies){if(g.mass<=0)continue;const _=t.position[0]-g.position[0],m=t.position[1]-g.position[1],p=t.position[2]-g.position[2],x=Math.sqrt(_*_+m*m+p*p),M=g.getSurfaceRadiusAt?.(t.position)??g.radius??0,b=x-M;b<o&&(o=b)}const a=Math.min(100,n/3e5*100);this.speedVal.textContent=s>1e3?(s/1e3).toFixed(1)+"k":s.toFixed(1),this.speedVal.style.color=s>3e3?"#ff6644":s>1e3?"#ffaa44":"#ddd";const c=o/1e3;this.altVal.textContent=o>1e4?c.toFixed(1)+"k":o.toFixed(0);const l=t.velocity[1];this.vsVal.textContent=l>0?"+"+l.toFixed(0):l.toFixed(0),this.vsVal.style.color=l>0?"#88ff88":l<0?"#ff6644":"#88ccff";const d=t.rocket.totalFuelMass();d>1e3?(this.fuelVal.textContent=(d/1e3).toFixed(1),this.fuelVal.nextElementSibling.textContent="t"):(this.fuelVal.textContent=d.toFixed(0),this.fuelVal.nextElementSibling.textContent="kg");const h=Math.round(i*100);this.throttlePct.textContent=`${h}%`;const u=t.rocket.totalFuelMass(),f=t.rocket.assembly.totalFuelCapacity();this._fuelRKg&&(this._fuelRKg.textContent=u>1e3?`${(u/1e3).toFixed(1)} t`:`${u.toFixed(0)} kg`),this._fuelRBar&&(this._fuelRBar.style.width=`${f>0?u/f*100:0}%`),this.throttleFill.style.width=`${h}%`,this.throttleFill.style.background=h>80?"#ff4444":h>40?"#ffaa00":"#4488ff",this.heatPct.textContent=`${a.toFixed(0)}%`,this.heatPct.style.color=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44",this.heatFill.style.width=`${a}%`,this.heatFill.style.background=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44"}unmount(){this.root.remove(),this.pauseOverlay.remove()}}function zx(r,t,e){if(r.throttle<=0)return;const n=Hx(r.rocket.assembly.roots);if(n.length===0)return;let i=0,s=0;for(const h of n){const u=h.thrust*1e3*r.throttle;i+=u,s+=u/(h.isp*fx)}const o=e??[0,1,0],a=r.rocket.totalMass(),c=i*o[0]/a,l=i*o[1]/a,d=i*o[2]/a;r.velocity[0]+=c*t,r.velocity[1]+=l*t,r.velocity[2]+=d*t,r.consumeFuel(s,t)}function Va(r){for(const t of r){if(t.part.thrust&&t.part.isp)return{thrust:t.part.thrust,isp:t.part.isp};if(t.children?.length){const e=Va(t.children);if(e)return e}}return null}function Hx(r){const t=[],e=n=>{for(const i of n)i.part.thrust&&i.part.isp&&t.push({thrust:i.part.thrust,isp:i.part.isp}),i.children?.length&&e(i.children)};return e(r),t}class Gx{ctx=null;engineOsc=null;engineGain=null;engineNoise=null;engineRunning=!1;throttleLevel=0;constructor(){try{this.ctx=new AudioContext}catch{}}ensureCtx(){return this.ctx?(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx):null}startEngine(){if(!this.ensureCtx()||this.engineRunning)return;const t=this.ctx;this.engineRunning=!0,this.engineOsc=t.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=80,this.engineGain=t.createGain(),this.engineGain.gain.value=.02;const e=t.createBuffer(1,t.sampleRate*2,t.sampleRate),n=e.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=(Math.random()*2-1)*.3;this.engineNoise=t.createBufferSource(),this.engineNoise.buffer=e,this.engineNoise.loop=!0;const i=t.createGain();i.gain.value=.01;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=400,this.engineOsc.connect(this.engineGain),this.engineOsc.start(),this.engineNoise.connect(s),s.connect(i);const o=t.createGain();o.gain.value=.4,this.engineGain.connect(o),i.connect(o),o.connect(t.destination)}setThrottle(t){if(this.throttleLevel=t,!this.engineOsc||!this.engineGain)return;const e=60+t*80,n=.01+t*.04;this.engineOsc.frequency.setValueAtTime(e,this.ctx.currentTime+.1),this.engineGain.gain.setValueAtTime(n,this.ctx.currentTime+.05)}stopEngine(){if(this.engineOsc){try{this.engineOsc.stop()}catch{}this.engineOsc=null}if(this.engineNoise){try{this.engineNoise.stop()}catch{}this.engineNoise=null}this.engineGain&&(this.engineGain.disconnect(),this.engineGain=null),this.engineRunning=!1}playStaging(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="square",n.frequency.setValueAtTime(200,e),n.frequency.exponentialRampToValueAtTime(40,e+.3);const i=t.createGain();i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.5),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.5)}playCrash(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(20,e+.8);const i=t.createGain();i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+1.5);const s=t.createBuffer(1,t.sampleRate*1,t.sampleRate),o=s.getChannelData(0);for(let l=0;l<o.length;l++)o[l]=(Math.random()*2-1)*(l<o.length*.2?.8:.1*(1-l/o.length));const a=t.createBufferSource();a.buffer=s;const c=t.createGain();c.gain.setValueAtTime(.2,e),c.gain.exponentialRampToValueAtTime(.001,e+1),n.connect(i),a.connect(c),i.connect(t.destination),c.connect(t.destination),n.start(e),n.stop(e+1.5),a.start(e),a.stop(e+1)}playLand(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(300,e),n.frequency.exponentialRampToValueAtTime(60,e+.2);const i=t.createGain();i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.3)}dispose(){this.stopEngine(),this.ctx&&(this.ctx.close(),this.ctx=null)}}function Xe(r,t){const e=t.bodyByName("sun");let n=e,i=0;for(const s of t.bodies){if(s.name==="sun")continue;const o=s;let a=e,c=e.position;if(o.parentBody)a=o.parentBody,c=a.position;else if(s.name==="moon"){const M=t.bodyByName("earth");M&&(a=M,c=M.position)}const l=s.position[0]-r[0],d=s.position[1]-r[1],h=s.position[2]-r[2],u=l*l+d*d+h*h,f=Math.sqrt(u),g=s.position[0]-c[0],_=s.position[1]-c[1],m=s.position[2]-c[2],x=Math.sqrt(g*g+_*_+m*m)*Math.pow(s.mass/a.mass,.4);if(f<x){const M=Ms*s.mass/u;M>i&&(i=M,n=s)}}return n}function js(r,t,e,n,i){const s=Ms*e,o=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]),c=(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])/2-s/o,l=-s/(2*c),d=r[1]*t[2]-r[2]*t[1],h=r[2]*t[0]-r[0]*t[2],u=r[0]*t[1]-r[1]*t[0],f=Math.sqrt(d*d+h*h+u*u),g=(t[1]*u-t[2]*h)/s-r[0]/o,_=(t[2]*d-t[0]*u)/s-r[1]/o,m=(t[0]*h-t[1]*d)/s-r[2]/o,p=Math.sqrt(g*g+_*_+m*m),x=p<1&&l>0,M=x?l*(1+p):1/0,b=x?l*(1-p):o,P=p>1e-8?g/p:1,A=p>1e-8?_/p:0,T=p>1e-8?m/p:0,O=[P,A,T],v=[(h*T-u*A)/(f||1),(u*P-d*T)/(f||1),(d*A-h*P)/(f||1)],w=[],U=x?Math.PI:Math.acos(-1/Math.max(p,1.001))*.98;let D,q;if(x){const L=2*Math.PI*Math.sqrt(l*l*l/s),k=(r[0]*t[0]+r[1]*t[1]+r[2]*t[2])/(o||1),V=(l*(1-p*p)/o-1)/p,K=k*Math.sqrt(l*(1-p*p)/s)/(p||1),Y=(p+V)/(1+p*V),$=Math.sqrt(1-p*p)*K/(1+p*V);let J=Math.atan2($,Y);J<0&&(J+=Math.PI*2);const ht=(J-p*$)*L/(2*Math.PI),X=L-ht,et=(X+L/2)%L;q=X,D=et}for(let L=0;L<=i;L++){const k=-U+2*U*L/i,V=1+p*Math.cos(k);if(Math.abs(V)<1e-10)continue;const K=l*(1-p*p)/V;if(isNaN(K)||!isFinite(K)||K<0)continue;const Y=K*(Math.cos(k)*O[0]+Math.sin(k)*v[0]),$=K*(Math.cos(k)*O[2]+Math.sin(k)*v[2]);if(Math.sqrt(Y*Y+$*$)>n*1.5)break;w.push([Y,$])}return{points:w,eccentricity:p,apoapsis:M,periapsis:b,bound:x,timeToAp:D,timeToPe:q}}function Vx(r,t){const e=r.position[0]-t.position[0],n=r.position[1]-t.position[1],i=r.position[2]-t.position[2],s=e*e+n*n+i*i,o=Math.sqrt(s);if(o===0)return[0,0,0];const a=Ms*r.mass*t.mass/s;return[a*e/o,a*n/o,a*i/o]}function _u(r,t){let e=0,n=0,i=0;for(const s of t){if(s===r||s.mass<=0)continue;const o=Vx(s,r);e+=o[0],n+=o[1],i+=o[2]}return[e,n,i]}const Cn=de/.08*1.5,Pn=900;function Wx(){try{const r=document.createElement("canvas");r.width=64,r.height=64;const t=r.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(255,255,240,0.95)"),e.addColorStop(.35,"rgba(255,230,180,0.7)"),e.addColorStop(.55,"rgba(255,180,100,0.35)"),e.addColorStop(.75,"rgba(255,120,50,0.15)"),e.addColorStop(1,"rgba(255,80,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Qe(r);return n.needsUpdate=!0,n}catch{return new tc(new Uint8Array([255,255,255,255]),1,1,an)}}function Xx(){try{const r=document.createElement("canvas");r.width=64,r.height=64;const t=r.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,200,100,0.6)"),e.addColorStop(.3,"rgba(255,150,60,0.3)"),e.addColorStop(.6,"rgba(200,80,30,0.1)"),e.addColorStop(1,"rgba(100,30,10,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Qe(r);return n.needsUpdate=!0,n}catch{return new tc(new Uint8Array([255,255,255,255]),1,1,an)}}class qx{particles;outerParticles;positions;velocities;lifetimes;ages;colors;sizes;active;nextIndex;coreTex;outerTex;throttleLevel=1;inVacuum=!1;group;constructor(){this.active=!1,this.nextIndex=0,this.positions=new Float32Array(Pn*3),this.velocities=new Float32Array(Pn*3),this.lifetimes=new Float32Array(Pn),this.ages=new Float32Array(Pn),this.colors=new Float32Array(Pn*3),this.sizes=new Float32Array(Pn),this.ages.fill(1/0),this.coreTex=Wx(),this.outerTex=Xx(),this.group=new nn;const t=new De;t.setAttribute("position",new Le(this.positions,3)),t.setAttribute("color",new Le(this.colors,3)),t.setAttribute("size",new Le(this.sizes,1));const e=new or({size:Cn*.6,map:this.coreTex,vertexColors:!0,sizeAttenuation:!0,blending:rn,depthWrite:!1,transparent:!0,opacity:1});this.particles=new uo(t,e),this.group.add(this.particles);const n=new De;n.setAttribute("position",new Le(this.positions.slice(),3));const i=new or({size:Cn*1.5,map:this.outerTex,color:16755302,sizeAttenuation:!0,blending:rn,depthWrite:!1,transparent:!0,opacity:.6});this.outerParticles=new uo(n,i),this.group.add(this.outerParticles)}setThrottle(t){this.throttleLevel=Math.max(.01,t)}setVacuum(t){this.inVacuum=t}start(){this.active=!0}stop(){this.active=!1;for(let t=0;t<Pn;t++)this.ages[t]=this.lifetimes[t],this.positions[t*3]=0,this.positions[t*3+1]=0,this.positions[t*3+2]=0;this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.outerParticles.geometry.attributes.position.needsUpdate=!0}update(t){const e=this.inVacuum?4.5:1;if(this.active){const i=Math.ceil((5+Math.random()*4)*this.throttleLevel);for(let s=0;s<i;s++){const o=this.nextIndex;this.nextIndex=(this.nextIndex+1)%Pn;const a=(.06+Math.random()*.12)*(this.inVacuum?4:1)/Math.max(.2,this.throttleLevel);this.positions[o*3]=(Math.random()-.5)*a*Cn,this.positions[o*3+1]=-(Math.random()*.03)*Cn,this.positions[o*3+2]=(Math.random()-.5)*a*Cn;const c=(5+Math.random()*8)*this.throttleLevel*e;this.velocities[o*3]=(Math.random()-.5)*.4*Cn,this.velocities[o*3+1]=-(c*Cn),this.velocities[o*3+2]=(Math.random()-.5)*.4*Cn,this.lifetimes[o]=(.2+Math.random()*.3)*e,this.ages[o]=0,this.sizes[o]=.5+Math.random()*.5}}for(let i=0;i<Pn;i++){const s=this.ages[i],o=this.lifetimes[i];if(s>=o)continue;const a=s+t;if(this.ages[i]=a,a>=o)continue;const c=a/o,l=i*3;this.positions[l]=(this.positions[l]??0)+(this.velocities[l]??0)*t,this.positions[l+1]=(this.positions[l+1]??0)+(this.velocities[l+1]??0)*t,this.positions[l+2]=(this.positions[l+2]??0)+(this.velocities[l+2]??0)*t;const d=Math.exp(-2*t);this.velocities[l]=(this.velocities[l]??0)*d,this.velocities[l+2]=(this.velocities[l+2]??0)*d,Math.random()<.05&&(this.velocities[l]=(this.velocities[l]??0)+(Math.random()-.5)*.2*Cn,this.velocities[l+2]=(this.velocities[l+2]??0)+(Math.random()-.5)*.2*Cn);let h,u,f;if(c<.15)h=1,u=1,f=1;else if(c<.35){const _=(c-.15)/.2;h=1,u=1-_*.3,f=1-_*.8}else if(c<.6){const _=(c-.35)/.25;h=1,u=.7-_*.3,f=.2-_*.15}else{const _=(c-.6)/.4;h=1-_*.7,u=.4-_*.35,f=.05-_*.04}this.inVacuum&&(h=h*.5+.1,u=u*.3+.1,f=f*.1+.5),this.colors[l]=Math.max(0,h),this.colors[l+1]=Math.max(0,u),this.colors[l+2]=Math.max(0,f);const g=c<.3?.6+c/.3*.4:1-(c-.3)/.7*.8;this.sizes[i]=g*(.5+(this.sizes[i]??.5)*.5)}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.particles.geometry.attributes.size.needsUpdate=!0;const n=this.outerParticles.geometry.attributes.position;for(let i=0;i<Pn;i++){const s=i*3;n.array[s]=this.positions[s]??0,n.array[s+1]=this.positions[s+1]??0,n.array[s+2]=this.positions[s+2]??0}n.needsUpdate=!0}getMesh(){return this.group}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.outerParticles.geometry.dispose(),this.outerParticles.material.dispose(),this.coreTex.dispose(),this.outerTex.dispose()}}const wi=100,ms=de*io;class Yx{particles;positions;velocities;lifetimes;ages;active=!1;constructor(){this.positions=new Float32Array(wi*3),this.velocities=new Float32Array(wi*3),this.lifetimes=new Float32Array(wi),this.ages=new Float32Array(wi),this.ages.fill(1/0);const t=new De;t.setAttribute("position",new Le(this.positions,3));const e=new or({size:.3*ms,color:13421772,transparent:!0,opacity:.5,blending:fi,depthWrite:!1,sizeAttenuation:!0});this.particles=new uo(t,e)}start(){this.active=!0}stop(){this.active=!1}update(t){if(this.active)for(let o=0;o<3;o++){let a=-1,c=-1;for(let l=0;l<wi;l++)this.ages[l]>=this.lifetimes[l]&&this.ages[l]>c&&(c=this.ages[l],a=l);if(a<0)for(let l=0;l<wi;l++)this.ages[l]>c&&(c=this.ages[l],a=l);a>=0&&(this.positions[a*3]=(Math.random()-.5)*.1*ms,this.positions[a*3+1]=0,this.positions[a*3+2]=(Math.random()-.5)*.1*ms,this.velocities[a*3]=(Math.random()-.5)*.5*ms,this.velocities[a*3+1]=(.5+Math.random()*1)*ms,this.velocities[a*3+2]=(Math.random()-.5)*.5*ms,this.lifetimes[a]=1+Math.random()*1.5,this.ages[a]=0)}const e=this.particles.material;let n=!1;const i=this.velocities,s=this.positions;for(let o=0;o<wi;o++){if(this.ages[o]>=this.lifetimes[o])continue;n=!0;const a=this.ages[o]+t;if(this.ages[o]=a,a>=this.lifetimes[o])continue;const c=o*3,l=i[c]??0,d=i[c+1]??0,h=i[c+2]??0;s[c]=(s[c]??0)+l*t,s[c+1]=(s[c+1]??0)+d*t,s[c+2]=(s[c+2]??0)+h*t,i[c]=l*.98,i[c+2]=h*.98}e.opacity=this.active?.5:Math.max(0,e.opacity-t*2),this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.visible=n||this.active}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose()}}const Nt=cn*ln;class Kx{renderer;sceneMgr;system;achievements;state;rocket;rocketGroup;chase;controls;hud;sound;launched=!1;grounded=!0;groundedDir=null;liftoffFrames=0;engineFlame;groundSmoke;rocketShadow=null;reentryGlow=null;rocketQuat=new on;angularVel=new R;ANGULAR_ACCEL=1.5;ANGULAR_DAMPING=3.5;timeWarp=1;parachuteDeployed=!1;deployedChuteMesh=null;crashed=!1;paused=!1;debris=[];warpLevels=[1,3,5,10,100,1e3,1e5,1e6];warpIndex=0;crashOverlay=null;prevVel=[0,0,0];gearDeployed=!1;gearMeshes=[];missionTime=0;sasMode="off";sasTargetQuat=new on;screenShake=0;heatEnergy=0;MAX_HEAT=9999999999;HEAT_RADIATION_RATE=.999;stageInfo=[];lastReentryIntensity=0;prevMach=0;sonicBoomTriggered=!1;sonicBoomTimer=0;countdownTimer=0;countdownActive=!1;countdownCooldown=0;countdownEl=null;lastRefBody=null;impactMarker=null;maxAlt=0;maxSpeed=0;orbitLine=null;exhaustLight=null;followLight=null;cameraMode="chase";freeCamAzimuth=0;freeCamPolar=Math.PI/2;freeCamDist=4;freeCamKeys={left:!1,right:!1,up:!1,down:!1};freeCamDragging=!1;freeCamPrevMouse={x:0,y:0};hudVisible=!0;lastAltMilestone=0;sonicBoomRing=null;sonicBoomLife=0;reentryGlowMesh=null;rocketBottomY=0;_debugShown=!1;_debugMarker=null;_spawnProtectionTimer=0;_camSnapped=!1;showCountdown(t){this.countdownEl||(this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
        position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);
        font-size:120px;font-weight:bold;color:#ff0;z-index:9999;
        text-shadow:0 0 30px rgba(255,136,0,0.8);
        font-family:system-ui,sans-serif;pointer-events:none;
        transition:opacity 0.2s;
      `,document.body.appendChild(this.countdownEl)),this.countdownEl.textContent=t,this.countdownEl.style.opacity="1",t==="LIFTOFF!"?(this.countdownEl.style.color="#FF8844",this.countdownEl.style.fontSize="48px"):(this.countdownEl.style.color="#FFFFFF",this.countdownEl.style.fontSize="72px")}hideCountdown(){this.countdownEl&&(this.countdownEl.style.opacity="0")}get dragMultiplier(){return this.gearDeployed?2.5:1}onCrashAction=null;constructor(t,e,n,i,s){this.renderer=t,this.sceneMgr=e,this.system=n,this.achievements=s,this.rocket=i;const o=n.bodyByName("earth"),a=o.radius??6371e3,c=28.5*Math.PI/180,l=-80.5*Math.PI/180,d=[Math.cos(c)*Math.cos(l),Math.sin(c),Math.cos(c)*Math.sin(l)],h=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),u=[d[0]/h,d[1]/h,d[2]/h],f=60,g=[o.position[0]+u[0]*a,o.position[1]+u[1]*a,o.position[2]+u[2]*a],_=o.getSurfaceRadiusAt?.(g)??a,m=[o.position[0]+u[0]*(_+f),o.position[1]+u[1]*(_+f),o.position[2]+u[2]*(_+f)];this.state=new Nx(i,n,m,[0,0,0]),this.groundedDir=u;const p=new R(m[0]-o.position[0],m[1]-o.position[1],m[2]-o.position[2]).normalize();this.rocketQuat.setFromUnitVectors(new R(0,1,0),p),this.rocketGroup=i.assembly.toMesh(),this.rocketGroup.scale.setScalar(io),this.rocketGroup.position.set(this.state.position[0]*Nt,this.state.position[1]*Nt,this.state.position[2]*Nt),e.scene.add(this.rocketGroup);const x=new ue(1,8,6),M=new Ae({color:65280,transparent:!0,opacity:.3,depthTest:!1,depthWrite:!1,visible:!1});this._debugMarker=new pt(x,M),this._debugMarker.visible=!1,this._debugMarker.position.copy(this.rocketGroup.position),e.scene.add(this._debugMarker),this.rocketGroup.traverse(y=>{if(y instanceof pt&&y.material){const S=Array.isArray(y.material)?y.material:[y.material];for(const F of S)F.polygonOffset=!0,F.polygonOffsetFactor=-1,F.polygonOffsetUnits=-1,F instanceof ae&&(F.roughness=.45,F.metalness=.5,F.emissive=new Tt(0),F.emissiveIntensity=0,F.needsUpdate=!0)}});const b=new gi(.05,.15,16),P=new Ae({color:16724787,side:Oe,transparent:!0,opacity:.6,depthWrite:!1});this.impactMarker=new pt(b,P),this.impactMarker.rotation.x=-Math.PI/2,this.impactMarker.visible=!1,this.sceneMgr.scene.add(this.impactMarker);for(const y of n.bodies){const S=y;S.mesh&&e.scene.add(S.mesh),S.light&&e.scene.add(S.light)}const A=new vo(8952268,1.5);A.position.set(-50,20,-30),e.scene.add(A),this.followLight=new ka(16768460,3,15),this.followLight.position.set(0,2,0),this.rocketGroup.add(this.followLight),this.engineFlame=new qx,this.positionFlameAtNozzle(),this.rocketGroup.add(this.engineFlame.getMesh()),this.exhaustLight=new ka(16746564,0,20),this.exhaustLight.position.set(0,-1,0),this.rocketGroup.add(this.exhaustLight);const T=new ue(2,16,16),O=new Ae({color:16746564,transparent:!0,opacity:0,depthWrite:!1});this.reentryGlowMesh=new pt(T,O),this.reentryGlowMesh.position.set(0,.5,0),this.reentryGlowMesh.visible=!1,this.rocketGroup.add(this.reentryGlowMesh),this.groundSmoke=new Yx,this.rocketGroup.add(this.groundSmoke.getMesh());const v=new nc(.3*io,32),w=new Ae({color:0,transparent:!0,opacity:.3,depthWrite:!1});this.rocketShadow=new pt(v,w),this.rocketShadow.rotation.x=-Math.PI/2,this.rocketShadow.position.y=-2,this.rocketGroup.add(this.rocketShadow);const U=new ue(.3,16,12),D=new Ae({color:16737792,transparent:!0,opacity:0,blending:rn,depthWrite:!1});this.reentryGlow=new pt(U,D),this.rocketGroup.add(this.reentryGlow);const q=new ue(.5,16,12),L=new Ae({color:16729088,transparent:!0,opacity:0,blending:rn,depthWrite:!1}),k=new pt(q,L);k.name="reentry-outer",this.rocketGroup.add(k);const V=new R().crossVectors(p,new R(0,1,0)).normalize(),K=Math.atan2(V.z,V.x);this.chase=new Fx(e.camera),this.chase.setAzimuth(K),this.chase.enableOrbit(this.renderer.domElement);const Y=-this.rocketBottomY-50*Nt+2,$=p.x*Y,J=p.y*Y,lt=p.z*Y;this.chase.initialiseAt(this.state,this.rocketQuat,p,{x:$,y:J,z:lt}),this._spawnProtectionTimer=120;const ht=this.state.position[0]*Nt+p.x*Y,X=this.state.position[1]*Nt+p.y*Y,et=this.state.position[2]*Nt+p.z*Y;e.camera.position.set(ht+10,X+3,et+10),e.camera.lookAt(ht,X,et),this.controls=new kx(this.state),("ontouchstart"in window||navigator.maxTouchPoints>0)&&this.controls.enableTouch(),this.sound=new Gx,this.hud=new Bx,this.hud.onAction=y=>{y==="stage"?this.performStage():y==="parachute"?this.toggleParachute():y==="map"?(dt=!dt,Ct.style.display=dt?"block":"none",dt&&requestAnimationFrame(Et)):y==="resume"?(this.paused=!1,this.hud.setPaused(!1)):y==="menu"?this.onCrashAction?.("menu"):y==="restart"&&this.onCrashAction?.("restart")},this.hud.mount();let dt=!1,vt=1,St=0,Ot=0,Rt=null;const Ct=document.createElement("div");Ct.style.cssText="position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.95);display:none;";const Lt=document.createElement("canvas");Lt.style.cssText="position:absolute;inset:0;width:100%;height:100%;",Ct.appendChild(Lt),document.body.appendChild(Ct);const G=document.createElement("div");G.style.cssText="position:absolute;top:16px;left:16px;z-index:10;color:#EACD9E;font-family:monospace;font-size:12px;pointer-events:none;",G.innerHTML='<div id="map-zoom">ZOOM: 1x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>',Ct.appendChild(G),Ct.appendChild(Lt),document.body.appendChild(Ct),Lt.addEventListener("wheel",y=>{vt*=y.deltaY>0?.9:1.1,vt=Math.max(.05,Math.min(100,vt))}),Lt.addEventListener("mousedown",y=>{Rt={x:y.clientX,y:y.clientY}}),window.addEventListener("mouseup",()=>{Rt=null}),window.addEventListener("mousemove",y=>{Rt&&(St+=y.clientX-Rt.x,Ot+=y.clientY-Rt.y,Rt={x:y.clientX,y:y.clientY})}),Lt.addEventListener("touchstart",y=>{y.touches.length===1&&(Rt={x:y.touches[0].clientX,y:y.touches[0].clientY})}),Lt.addEventListener("touchmove",y=>{!Rt||y.touches.length!==1||(St+=y.touches[0].clientX-Rt.x,Ot+=y.touches[0].clientY-Rt.y,Rt={x:y.touches[0].clientX,y:y.touches[0].clientY})}),Lt.addEventListener("touchend",()=>{Rt=null}),Lt.addEventListener("dblclick",y=>{y.preventDefault();const S=Lt.getBoundingClientRect(),F=y.clientX-S.left,C=y.clientY-S.top,j=Lt.clientWidth,Z=Lt.clientHeight,Mt=j/2+St,nt=Z/2+Ot;let gt=1;for(const zt of this.system.bodies){const Ht=(zt.position[0]-this.state.position[0])*Nt,Dt=(zt.position[2]-this.state.position[2])*Nt,yt=Math.sqrt(Ht*Ht+Dt*Dt);yt>gt&&(gt=yt)}const It=Math.min(j,Z)*.4/gt*vt;let Pt=null,tt=25;for(const zt of this.system.bodies){const Ht=Mt+(zt.position[0]-this.state.position[0])*It,Dt=nt-(zt.position[2]-this.state.position[2])*It,yt=Math.sqrt((F-Ht)**2+(C-Dt)**2);yt<tt&&(tt=yt,Pt=zt.name)}if(Pt){const zt=this.system.bodyByName(Pt);if(zt){const Ht=Pt==="earth"?20:Pt==="moon"?50:3;St=-(zt.position[0]-this.state.position[0])*It,Ot=(zt.position[2]-this.state.position[2])*It,vt=Ht,Ne.show(`${Pt}: ${(zt.mass??0).toExponential(2)}kg R=${(zt.radius??0)/1e3}km`)}}});let Me=0;const Et=()=>{if(!dt)return;if(Me++,Me%5!==0){requestAnimationFrame(Et);return}const y=window.devicePixelRatio||1,S=Lt.clientWidth,F=Lt.clientHeight;Lt.width=S*y,Lt.height=F*y;const C=Lt.getContext("2d");C.setTransform(y,0,0,y,0,0),C.fillStyle="#060814",C.fillRect(0,0,S,F);const j=S/2+St,Z=F/2+Ot;let Mt=1;for(const it of this.system.bodies){const jt=(it.position[0]-this.state.position[0])*Nt,Vt=(it.position[2]-this.state.position[2])*Nt,Ee=Math.sqrt(jt*jt+Vt*Vt);Ee>Mt&&(Mt=Ee)}const nt=Math.min(S,F)*.4/Mt*vt,gt={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",mercury:"#c0c0c0",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",pluto:"#ddccbb",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",phobos:"#bb9988",deimos:"#887766"},It={sun:12,earth:7,moon:3,venus:5,mars:5,mercury:3,jupiter:10,saturn:9,uranus:6,neptune:5,pluto:2},Pt=this.system.bodyByName("sun")?.position;if(Pt)for(const it of this.system.bodies){if(it.name==="sun"||it.name==="moon")continue;const jt=[it.position[0]-Pt[0],it.position[1]-Pt[1],it.position[2]-Pt[2]];if(it.velocity){const Vt=js(jt,it.velocity,this.system.bodyByName("sun").mass,5e14,180);if(Vt.points.length>10){C.beginPath(),C.strokeStyle=gt[it.name]+"30",C.lineWidth=1,C.setLineDash([3,6]);const Ee=j+(Vt.points[0][0]+Pt[0])*nt,_e=Z-(Vt.points[0][1]+Pt[2])*nt;C.moveTo(Ee,_e);for(let bt=1;bt<Vt.points.length;bt+=2){const qt=j+(Vt.points[bt][0]+Pt[0])*nt,re=Z-(Vt.points[bt][1]+Pt[2])*nt;C.lineTo(qt,re)}C.stroke(),C.setLineDash([])}}}for(const it of this.system.bodies){const jt=j+(it.position[0]-this.state.position[0])*nt,Vt=Z-(it.position[2]-this.state.position[2])*nt,Ee=It[it.name]||3;C.beginPath(),C.arc(jt,Vt,Ee,0,Math.PI*2),C.fillStyle=gt[it.name]||"#888",C.fill(),C.font="bold 10px monospace",C.fillStyle="#F4F5F2",C.fillText(it.name.toUpperCase(),jt+Ee+5,Vt+4)}const tt=this.system.bodyByName("sun");for(const it of this.system.bodies){if(it.name==="sun"||it.mass<=0||!tt||it.name===tt.name)continue;const jt=(it.position[0]-tt.position[0])*Nt,Vt=(it.position[2]-tt.position[2])*Nt,Ee=Math.sqrt(jt*jt+Vt*Vt);if(Ee<1)continue;const _e=Ee*Math.pow(it.mass/tt.mass,.4),bt=j+(it.position[0]-this.state.position[0])*nt,qt=Z-(it.position[2]-this.state.position[2])*nt;C.beginPath(),C.arc(bt,qt,_e*nt,0,Math.PI*2),C.setLineDash([4,4]),C.strokeStyle=(gt[it.name]||"#888")+"44",C.lineWidth=.8,C.stroke(),C.setLineDash([])}const zt=80,Ht=3,Dt=S-zt-15,yt=F-30,Gt=Mt*2/Math.min(S,F)*vt*zt,ee=Math.pow(10,Math.floor(Math.log10(Gt))),pe=zt*(ee/Gt);C.fillStyle="rgba(244,245,242,0.4)",C.fillRect(Dt,yt,pe,Ht),C.strokeStyle="rgba(244,245,242,0.5)",C.lineWidth=.5,C.strokeRect(Dt,yt,pe,Ht),C.fillStyle="rgba(244,245,242,0.4)",C.font="8px monospace",C.fillText(`${ee>=1e3?(ee/1e3).toFixed(0)+"Mkm":ee.toFixed(0)+"km"}`,Dt,yt-2);const kt=30,rt=F-35,I=12;C.strokeStyle="rgba(244,245,242,0.25)",C.lineWidth=1,C.beginPath(),C.arc(kt,rt,I,0,Math.PI*2),C.stroke(),C.beginPath(),C.moveTo(kt,rt-I-5),C.lineTo(kt,rt+I+5),C.moveTo(kt-I-5,rt),C.lineTo(kt+I+5,rt),C.stroke(),C.fillStyle="rgba(244,245,242,0.4)",C.font="bold 8px monospace",C.fillText("N",kt-3,rt-I-7),C.fillStyle="rgba(244,245,242,0.2)",C.fillText("S",kt-3,rt+I+12),C.fillText("W",kt-I-12,rt+3),C.fillText("E",kt+I+7,rt+3);const at=j,ct=Z,Ft=this.state.velocity[0]||0,Ut=this.state.velocity[2]||0,ce=Math.sqrt(Ft*Ft+Ut*Ut),H=ce>.1?Math.atan2(Ut,Ft):0;if(C.save(),C.translate(at,ct),C.rotate(-H),C.beginPath(),C.moveTo(8,0),C.lineTo(0,-4),C.lineTo(-5,0),C.lineTo(0,4),C.closePath(),C.fillStyle="#EACD9E",C.fill(),C.strokeStyle="#EACD9E",C.lineWidth=1.5,C.stroke(),C.restore(),ce>.1){const it=Math.min(30,10+ce*nt*2);C.beginPath(),C.moveTo(at,ct),C.lineTo(at+Math.cos(H)*it,ct-Math.sin(H)*it),C.strokeStyle="rgba(234,205,158,0.6)",C.lineWidth=1.5,C.stroke(),C.beginPath(),C.moveTo(at+Math.cos(H)*it,ct-Math.sin(H)*it),C.lineTo(at+Math.cos(H+.4)*(it-5),ct-Math.sin(H+.4)*(it-5)),C.lineTo(at+Math.cos(H-.4)*(it-5),ct-Math.sin(H-.4)*(it-5)),C.closePath(),C.fillStyle="rgba(234,205,158,0.6)",C.fill()}const Q=Xe(this.state.position,this.system),st=[(this.state.position[0]-Q.position[0])*Nt,(this.state.position[1]-Q.position[1])*Nt,(this.state.position[2]-Q.position[2])*Nt],ot=this.system.bodyByName("sun");if(ot){const it=(ot.position[0]-this.state.position[0])*nt,jt=(ot.position[2]-this.state.position[2])*nt,Vt=Math.sqrt(it*it+jt*jt);Vt>1&&(C.beginPath(),C.moveTo(at+it/Vt*12,ct-jt/Vt*12),C.lineTo(at+it/Vt*Math.min(Vt,60),ct-jt/Vt*Math.min(Vt,60)),C.strokeStyle="rgba(255,220,68,0.15)",C.lineWidth=2,C.setLineDash([3,6]),C.stroke(),C.setLineDash([]),C.beginPath(),C.arc(at+it/Vt*Math.min(Vt,60),ct-jt/Vt*Math.min(Vt,60),3,0,Math.PI*2),C.fillStyle="rgba(255,220,68,0.3)",C.fill())}const ut=js(st,this.state.velocity,Q.mass,5e14,360);if(ut.points.length>1){C.beginPath(),C.strokeStyle=ut.bound?"rgba(68,136,204,0.15)":"rgba(221,170,68,0.15)",C.lineWidth=8;const it=j+ut.points[0][0]*nt,jt=Z-ut.points[0][1]*nt;C.moveTo(it,jt);for(let bt=1;bt<ut.points.length;bt++){const qt=j+ut.points[bt][0]*nt,re=Z-ut.points[bt][1]*nt;C.lineTo(qt,re)}C.stroke();const Vt=C.createLinearGradient(it,jt,j+ut.points[ut.points.length-1][0]*nt,Z-ut.points[ut.points.length-1][1]*nt),Ee=ut.bound?"rgba(68,136,204,0.9)":"rgba(221,170,68,0.9)",_e=ut.bound?"rgba(68,136,204,0.2)":"rgba(221,170,68,0.2)";Vt.addColorStop(0,Ee),Vt.addColorStop(1,_e),C.beginPath(),C.strokeStyle=Vt,C.lineWidth=2.5,C.moveTo(it,jt);for(let bt=1;bt<ut.points.length;bt++){const qt=j+ut.points[bt][0]*nt,re=Z-ut.points[bt][1]*nt;C.lineTo(qt,re)}if(C.stroke(),ut.points.length>4){const bt=ut.points[ut.points.length-1],qt=ut.points[ut.points.length-2],re=bt[0]-qt[0],Wt=bt[1]-qt[1],me=Math.sqrt(re*re+Wt*Wt)||1,Ce=j+bt[0]*nt,E=Z-bt[1]*nt,N=8;C.beginPath(),C.moveTo(Ce,E),C.lineTo(Ce-re/me*N+Wt/me*N*.4,E+Wt/me*N+re/me*N*.4),C.lineTo(Ce-re/me*N-Wt/me*N*.4,E+Wt/me*N-re/me*N*.4),C.closePath(),C.fillStyle=ut.bound?"rgba(68,136,204,0.6)":"rgba(221,170,68,0.6)",C.fill()}if(ut.bound&&isFinite(ut.apoapsis)&&isFinite(ut.periapsis)){const bt=j+ut.apoapsis*nt,qt=j+ut.periapsis*nt;C.beginPath(),C.arc(bt,Z,4,0,Math.PI*2),C.fillStyle="#FF8844",C.fill(),C.font="bold 9px monospace",C.fillStyle="#FF8844",C.fillText("Ap",bt+6,Z+3),C.beginPath(),C.arc(qt,Z,4,0,Math.PI*2),C.fillStyle="#44DD88",C.fill(),C.fillStyle="#44DD88",C.fillText("Pe",qt+6,Z+3)}if(ut.points.length>2){const bt=ut.points[ut.points.length-1],qt=j+bt[0]*nt,re=Z-bt[1]*nt,Wt=Q.position[0]*Nt+bt[0],me=Q.position[2]*Nt+bt[1];let Ce="",E=20;for(const N of this.system.bodies){if(N.name===Q.name||N.mass<=0)continue;const B=Math.sqrt((Wt-N.position[0]*Nt)**2+(me-N.position[2]*Nt)**2);B<E&&(E=B,Ce=N.name)}Ce&&(C.font="bold 10px monospace",C.fillStyle="#EACD9E",C.fillText("→ "+Ce.toUpperCase(),qt+8,re-4))}if(ut.points.length>2){const bt=ut.points[ut.points.length-1],qt=Q.position[0]*Nt+bt[0],re=Q.position[2]*Nt+bt[1];let Wt="",me=30;for(const Ce of this.system.bodies){if(Ce.name===Q.name||Ce.mass<=0)continue;const E=Ce.position[0]*Nt,N=Ce.position[2]*Nt,B=Math.sqrt((qt-E)**2+(re-N)**2);B<me&&(me=B,Wt=Ce.name)}if(Wt){const Ce=j+bt[0]*nt,E=Z-bt[1]*nt;C.font="bold 10px monospace",C.fillStyle="#EACD9E",C.fillText("→ "+Wt.toUpperCase(),Ce+10,E-5)}}}C.fillStyle="rgba(244,245,242,0.3)",C.font="9px sans-serif",C.fillText(`${(Mt/1e3).toFixed(0)} km | Zoom: ${vt.toFixed(1)}x`,10,F-10),requestAnimationFrame(Et)};window.addEventListener("keydown",y=>{(y.key==="m"||y.key==="Tab")&&(dt=!dt,Ct.style.display=dt?"block":"none",dt&&requestAnimationFrame(Et),y.preventDefault())}),window.addEventListener("keydown",y=>{if(y.key==="q"||y.key==="["){if(this.paused)return;this.warpIndex=Math.max(0,this.warpIndex-1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),y.preventDefault()}else if(y.key==="e"||y.key==="]"){if(this.paused)return;this.warpIndex=Math.min(this.warpLevels.length-1,this.warpIndex+1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),y.preventDefault()}else if(y.key==="p"){if(i.assembly.roots.some(F=>F.part.kind==="parachute")||i.assembly.roots.some(F=>F.children.some(C=>C.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const F={radius:.6*de,height:1*de};this.deployedChuteMesh=Ha(F),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);Ne.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}y.preventDefault()}else y.key==="g"?(this.toggleGear(),y.preventDefault()):y.key==="f"?(this.chase.reset(),Ne.show("Camera view reset"),y.preventDefault()):y.key==="c"&&!y.ctrlKey&&!y.metaKey?(this.cameraMode=this.cameraMode==="chase"?"free":"chase",this.hud.setFreeCamera(this.cameraMode==="free"),Ne.show(this.cameraMode==="free"?"Free camera":"Chase camera"),y.preventDefault()):y.key==="F1"&&(y.preventDefault(),this.hudVisible=!this.hudVisible,this.hud.setVisible(this.hudVisible),Ne.show(this.hudVisible?"HUD shown":"HUD hidden"));this.cameraMode==="free"&&(y.key==="ArrowUp"&&(this.freeCamKeys.up=!0,y.preventDefault()),y.key==="ArrowDown"&&(this.freeCamKeys.down=!0,y.preventDefault()),y.key==="ArrowLeft"&&(this.freeCamKeys.left=!0,y.preventDefault()),y.key==="ArrowRight"&&(this.freeCamKeys.right=!0,y.preventDefault()))}),window.addEventListener("keyup",y=>{y.key==="ArrowUp"&&(this.freeCamKeys.up=!1),y.key==="ArrowDown"&&(this.freeCamKeys.down=!1),y.key==="ArrowLeft"&&(this.freeCamKeys.left=!1),y.key==="ArrowRight"&&(this.freeCamKeys.right=!1)});const Bt=this.renderer.domElement,_t=(y,S)=>{this.cameraMode==="free"&&(this.freeCamDragging=!0,this.freeCamPrevMouse={x:y,y:S})},fe=(y,S)=>{if(!this.freeCamDragging||this.cameraMode!=="free")return;const F=y-this.freeCamPrevMouse.x,C=S-this.freeCamPrevMouse.y;this.freeCamAzimuth-=F*.005,this.freeCamPolar=Math.max(.05,Math.min(Math.PI-.05,this.freeCamPolar+C*.005)),this.freeCamPrevMouse={x:y,y:S}},Kt=()=>{this.freeCamDragging=!1};Bt.addEventListener("mousedown",y=>_t(y.clientX,y.clientY)),window.addEventListener("mousemove",y=>fe(y.clientX,y.clientY)),window.addEventListener("mouseup",Kt),Bt.addEventListener("touchstart",y=>{y.touches.length===1&&y.touches[0]&&_t(y.touches[0].clientX,y.touches[0].clientY)},{passive:!0}),Bt.addEventListener("touchmove",y=>{y.touches.length===1&&y.touches[0]&&fe(y.touches[0].clientX,y.touches[0].clientY)},{passive:!0}),Bt.addEventListener("touchend",Kt),Bt.addEventListener("wheel",y=>{this.cameraMode==="free"&&(y.preventDefault(),this.freeCamDist*=y.deltaY>0?1.1:.9,this.freeCamDist=Math.max(.5,Math.min(500,this.freeCamDist)))},{passive:!1}),this.achievements.unlock("first_launch"),Ne.show("You are at the launchpad. W/S throttle, ↑↓ pitch, ←→ yaw, C camera, T SAS, Esc pause.")}sanitize(t){isFinite(t[0])||(t[0]=0),isFinite(t[1])||(t[1]=0),isFinite(t[2])||(t[2]=0)}countStages(t){let e=0;for(const n of t)n.part.kind==="decoupler"&&e++,e+=this.countStages(n.children);return e}computeStageData(){const t=this.rocket.assembly.roots;if(t.length===0)return[];const e=[];for(let o=0;o<t.length;o++)t[o].part.kind==="decoupler"&&e.push(o);const n=[];let i=0;for(let o=0;o<=e.length;o++){const a=o<e.length?e[o]:t.length,c=[];for(let l=i;l<a;l++)c.push(t[l]);if(c.length>0){const l=this.isChunkSpent(c);n.push({parts:c,active:!l,spent:l})}i=a+1}let s=0;for(let o=0;o<n.length;o++){if(!n[o].spent){s=o;break}s=o}return n.map((o,a)=>{let c=0,l=0;for(const g of o.parts)if(c+=g.part.mass,g.part.fuelCapacity){const _=this.rocket.fuelTanks.find(m=>m.node===g);l+=_?_.remaining:g.part.fuelCapacity}const d=o.parts.filter(g=>g.part.kind==="engine").length,h=o.parts.filter(g=>g.part.fuelCapacity).length,f=d>0?`${d}E ${h}T`:o.parts.length===1?o.parts[0].part.name||"C":`${o.parts.length}P`;return{label:`S${a+1}: ${f}`,fuelMass:l,dryMass:c,active:a===s,spent:o.spent}})}isChunkSpent(t){if(!t.some(n=>n.part.kind==="engine"))return!1;for(const n of t)if(n.part.fuelCapacity){const i=this.rocket.fuelTanks.find(s=>s.node===n);if(i&&i.remaining>.01)return!1}return!0}update(t){try{this.updateInner(t)}catch(e){Ne.show(`ERROR: ${e.message||e}`),console.error("FlightScene.update error:",e)}}updateInner(t){const e=t;if(this._spawnProtectionTimer>0&&(this._spawnProtectionTimer-=1),this.controls.consumePauseToggle()&&(this.paused=!this.paused,this.hud.setPaused(this.paused),this.paused&&this.sound.stopEngine()),this.paused){this.system.propagate(0,la);for(const H of this.system.bodies)H.syncMesh?.();return}if(this.crashed){this.system.propagate(t*this.timeWarp,la);for(const H of this.system.bodies)H.syncMesh?.();this.updateExplosion(e);return}this.missionTime+=e,this.missionTime=Math.min(this.missionTime,99999),t*=this.timeWarp,(!isFinite(t)||t<=0)&&(t=1/60),this.controls.update(e),this.controls.getZoomIn()&&this.chase.zoom(.92),this.controls.getZoomOut()&&this.chase.zoom(1.08);const n=this.timeWarp>1;n&&(this.state.throttle=0),this.cameraMode==="free"&&(this.state.throttle=0),!n&&this.controls.getStageRequested()&&this.performStage(),!n&&!this.grounded&&this.state.throttle>0&&(!Va(this.state.rocket.assembly.roots)||this.state.rocket.totalFuelMass()<.1)&&this.state.rocket.assembly.roots.some(st=>st.part.kind==="decoupler"||st.children.some(ot=>ot.part.kind==="decoupler"))&&this.performStage();const i=this.state.throttle>0,s=this.cameraMode==="free",o=n||s?0:this.controls.getPitch(),a=n||s?0:this.controls.getYaw();n||this.controls.getRoll();const c=new R(0,1,0).applyQuaternion(this.rocketQuat);new R(1,0,0).applyQuaternion(this.rocketQuat);const l=Xe(this.state.position,this.system),d=this.state.position[0]-l.position[0],h=this.state.position[1]-l.position[1],u=this.state.position[2]-l.position[2],f=Math.sqrt(d*d+h*h+u*u)||1,g=new R(d/f,h/f,u/f),_=new R().crossVectors(c,g);_.length()<.001?(_.set(-g.z,0,g.x).normalize(),_.length()<.001&&_.set(1,0,0)):_.normalize();const p=this.ANGULAR_ACCEL*e,x=new on().setFromAxisAngle(g,a*p),M=new on().setFromAxisAngle(_,o*p*1.2);if(this.rocketQuat.multiply(x).multiply(M),this.rocketQuat.normalize(),this.sasMode!=="off"&&!n){if(this.sasMode==="prograde"||this.sasMode==="retrograde"){const st=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(st>.1){let ot=new R(this.state.velocity[0]/st,this.state.velocity[1]/st,this.state.velocity[2]/st);this.sasMode==="retrograde"&&ot.negate(),this.sasTargetQuat.setFromUnitVectors(new R(0,1,0),ot)}}const H=new on().copy(this.sasTargetQuat).invert().multiply(this.rocketQuat),Q=2*Math.acos(Math.abs(H.w));if(Q>.001){const st=new R(H.x,H.y,H.z).normalize();this.angularVel.x-=st.x*Q*3*e,this.angularVel.y-=st.y*Q*3*e,this.angularVel.z-=st.z*Q*3*e}this.angularVel.multiplyScalar(Math.exp(-5*e))}this.rocketGroup.quaternion.copy(this.rocketQuat);const b=c,P=b.x,A=b.y,T=b.z;let O=!1;if(this.countdownCooldown>0&&(this.countdownCooldown-=e),i&&this.grounded&&(!this.countdownActive&&!this.launched&&this.countdownCooldown<=0&&(this.countdownActive=!0,this.countdownTimer=0,this.showCountdown("3")),this.countdownActive)){if(this.countdownTimer+=e,this.countdownTimer>=1&&this.countdownTimer<2)this.showCountdown("2");else if(this.countdownTimer>=2&&this.countdownTimer<3)this.showCountdown("1");else if(this.countdownTimer>=3){this.countdownActive=!1,this.launched=!0;const H=Va(this.state.rocket.assembly.roots),Q=Xe(this.state.position,this.system),st=this.state.position[0]-Q.position[0],ot=this.state.position[1]-Q.position[1],ut=this.state.position[2]-Q.position[2],it=Math.sqrt(st*st+ot*ot+ut*ut)||1,jt=Ms*Q.mass/(it*it);if(H&&H.thrust&&jt>0){const Vt=H.thrust*1e3*this.state.throttle/(this.state.rocket.totalMass()*jt);Vt>=1?O=!0:(Ne.show(`TWR ${Vt.toFixed(2)} — need more throttle!`),this.launched=!1,this.countdownTimer=0,this.countdownCooldown=5)}O&&(this.showCountdown("LIFTOFF!"),setTimeout(()=>this.hideCountdown(),1500))}}if(i&&(!this.grounded||O)&&(zx(this.state,t,[P,A,T]),this.sanitize(this.state.velocity)),i&&O&&this.grounded&&(this.grounded=!1,this.groundedDir=null,this.liftoffFrames=5,this.launched=!0,this._camSnapped=!1,this.achievements.unlock("reach_space"),this.sound.startEngine()),i){this.sound.setThrottle(this.state.throttle),this.engineFlame.setThrottle(this.state.throttle),this.engineFlame.start();const H=Xe(this.state.position,this.system),Q=this.state.position[0]-H.position[0],st=this.state.position[1]-H.position[1],ot=this.state.position[2]-H.position[2],ut=Math.sqrt(Q*Q+st*st+ot*ot)||1,it=H.getSurfaceRadiusAt?.(this.state.position)??H.radius??6371e3;this.engineFlame.setVacuum(ut-it>5e4)}else this.sound.setThrottle(0),this.engineFlame.stop();this.engineFlame.update(e),this.exhaustLight&&(this.exhaustLight.intensity=this.state.throttle*3,this.exhaustLight.color.setHSL(.08-this.state.throttle*.05,1,.5+this.state.throttle*.3)),i&&this.grounded?this.groundSmoke.start():this.groundSmoke.stop(),this.groundSmoke.update(e),this.grounded||(this.state.position[0]+=this.state.velocity[0]*t,this.state.position[1]+=this.state.velocity[1]*t,this.state.position[2]+=this.state.velocity[2]*t);let v=null,w=1/0;const U=Xe(this.state.position,this.system),D=U.name;this.lastRefBody&&this.lastRefBody!==D&&Ne.show(`Entering ${D.toUpperCase()} SOI`),this.lastRefBody=D;const q=U.position[0]-this.state.position[0],L=U.position[1]-this.state.position[1],k=U.position[2]-this.state.position[2];w=Math.sqrt(q*q+L*L+k*k),v=U;const V=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(!this.grounded&&!n&&V>5&&v&&v.radius){const H=w-v.radius;if(H>0&&H<7e4){const Q=Math.exp(-H/8500),st=new R(this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]).normalize(),ot=new R(0,1,0).applyQuaternion(this.rocketQuat);if(Math.abs(ot.dot(st))<.99){const it=new on().setFromUnitVectors(ot,st);this.rocketQuat.slerp(it,Q*.1*e),this.rocketQuat.normalize()}}}if(!this.grounded&&v&&v.radius){const H=w-v.radius;if(H>0&&H<12e4&&V>2e3){const Q=Math.max(0,1-H/12e4)*Math.min(1,V/8e3);if(this.reentryGlow){this.reentryGlow.material.color.setHSL(.05,1,.7*Q),this.reentryGlow.material.opacity=.4*Q,this.reentryGlow.scale.setScalar(1+Q*2);const st=this.rocketGroup.getObjectByName("reentry-outer");st&&(st.material.color.setHSL(.03,1,.4*Q),st.material.opacity=.2*Q,st.scale.setScalar(1+Q*4))}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const Q=this.rocketGroup.getObjectByName("reentry-outer");Q&&(Q.material.opacity=0)}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const H=this.rocketGroup.getObjectByName("reentry-outer");H&&(H.material.opacity=0)}if(this.liftoffFrames>0&&this.liftoffFrames--,this.grounded)this.state.velocity=[0,0,0];else{const H=q,Q=L,st=k,ot=w,ut=ot*ot;if(ot>1&&ut>0){const qt=Ms*U.mass/ut*t;this.state.velocity[0]+=qt*H/ot,this.state.velocity[1]+=qt*Q/ot,this.state.velocity[2]+=qt*st/ot}this.sanitize(this.state.velocity);const it=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),jt=this.state.rocket.totalMass();let Vt=jt*.001+.2;if(this.parachuteDeployed?Vt=50:this.gearDeployed&&(Vt*=2.5),v&&v.radius&&it>.05&&it<1e6){const bt=w-v.radius;if(bt>0&&bt<3e5){const qt=1.225*Math.exp(-bt/8500),Ce=.5*qt*it*it*Vt/jt*t;if(Ce>=it)this.state.velocity[0]=0,this.state.velocity[1]=0,this.state.velocity[2]=0;else{const B=1-Ce/it;this.state.velocity[0]*=B,this.state.velocity[1]*=B,this.state.velocity[2]*=B}this.sanitize(this.state.velocity);const E=Math.max(0,it/2e3*(qt/1.225)-.1);if(E>.05&&this.reentryGlowMesh){this.reentryGlowMesh.visible=!0,this.reentryGlowMesh.scale.setScalar(1+E*2),this.reentryGlowMesh.material.opacity=Math.min(1,E);const B=E>.8?16777215:E>.5?16763972:16746564;this.reentryGlowMesh.material.color.setHex(B)}else this.reentryGlowMesh&&(this.reentryGlowMesh.visible=!1);if(this.lastReentryIntensity=E,E>.1)this.rocketGroup.traverse(B=>{const W=B;if(!W.isMesh)return;const z=W.material;if(!z||!z.emissive)return;const ft=Math.min(1,this.heatEnergy/3e5),wt=ft*.9,At=ft*ft*.5,Xt=ft*ft*ft*.15;z.emissive.setRGB(wt,At,Xt),z.emissiveIntensity=ft*1.5});else if(this.heatEnergy>0){const B=Math.min(1,this.heatEnergy/3e5);this.rocketGroup.traverse(W=>{const z=W;if(!z.isMesh)return;const ft=z.material;!ft||!ft.emissive||(ft.emissive.setRGB(B*.4,0,0),ft.emissiveIntensity=B*.5)})}else this.heatEnergy<1&&this.rocketGroup.traverse(B=>{const W=B;if(!W.isMesh)return;const z=W.material;!z||!z.emissive||z.emissiveIntensity>0&&(z.emissive.setRGB(0,0,0),z.emissiveIntensity=0)});const N=.5*qt*it*it*it*1e-6/4;this.heatEnergy+=N*e}}this.reentryGlowMesh&&(v&&v.radius&&w-v.radius<3e5||(this.reentryGlowMesh.visible=!1)),this.grounded||(this.heatEnergy>0&&(this.heatEnergy*=this.HEAT_RADIATION_RATE,this.heatEnergy<1&&(this.heatEnergy=0)),this.heatEnergy>this.MAX_HEAT&&(this.crashed=!0,Ne.show(`OVERHEATED! Ship disintegrated at ${this.heatEnergy.toFixed(0)}J`)));const Ee=v?v.radius??0:0,_e=v?v.getSurfaceRadiusAt?.(this.state.position)??Ee:0;if(v&&Ee>0&&isFinite(w)&&this._spawnProtectionTimer<=0){const bt=this.state.position[0]-v.position[0],qt=this.state.position[1]-v.position[1],re=this.state.position[2]-v.position[2],Wt=Math.sqrt(bt*bt+qt*qt+re*re),me=(this.state.velocity[0]*bt+this.state.velocity[1]*qt+this.state.velocity[2]*re)/Wt;if(Wt<_e)this.doCrash(`Impact on ${v.name}`,v,bt,qt,re,Wt,_e);else if(Wt<_e+200&&Wt>.001&&this.liftoffFrames<=0){const Ce=new R(bt/Wt,qt/Wt,re/Wt),E=new R(0,1,0).applyQuaternion(this.rocketQuat),N=Math.acos(Math.min(1,Math.abs(E.dot(Ce))))*180/Math.PI,B=this.hasLandingLegs(),W=this.parachuteDeployed?15:20,z=this.parachuteDeployed?8:5,ft=B?60:45;if(isFinite(me)&&Math.abs(me)>W)this.doCrash(`Too fast! (${Math.abs(me).toFixed(0)} m/s) on ${v.name}`,v,bt,qt,re,Wt,_e);else if(N>ft)this.doCrash(`Tipped over! (${N.toFixed(0)}°) on ${v.name}`,v,bt,qt,re,Wt,_e);else if(isFinite(me)&&Math.abs(me)<z){this.state.velocity=[0,0,0],this.grounded=!0,this.groundedDir=[bt/Wt,qt/Wt,re/Wt];const wt=new R(bt/Wt,qt/Wt,re/Wt);if(this.rocketQuat.setFromUnitVectors(new R(0,1,0),wt),this.state.position[0]!==v.position[0]+bt/Wt*(_e+50)||this.state.position[1]!==v.position[1]+qt/Wt*(_e+50)||this.state.position[2]!==v.position[2]+re/Wt*(_e+50)){this.state.position=[v.position[0]+bt/Wt*(_e+50),v.position[1]+qt/Wt*(_e+50),v.position[2]+re/Wt*(_e+50)],this.sound.playLand(),this.sound.stopEngine();const At=v.name;Ne.show(`Landed on ${At}!`),At==="earth"?this.achievements.unlock("land_earth"):At==="moon"?this.achievements.unlock("land_moon"):At==="mars"?this.achievements.unlock("land_mars"):At==="venus"?this.achievements.unlock("land_venus"):At==="mercury"&&this.achievements.unlock("land_mercury")}}else if(isFinite(me)){this.state.velocity=[0,0,0],this.state.position=[v.position[0]+bt/Wt*(_e+50),v.position[1]+qt/Wt*(_e+50),v.position[2]+re/Wt*(_e+50)],this.grounded=!0,this.groundedDir=[bt/Wt,qt/Wt,re/Wt];const wt=new R(bt/Wt,qt/Wt,re/Wt);this.rocketQuat.setFromUnitVectors(new R(0,1,0),wt),this.screenShake=Math.abs(me)*.05,this.sound.playLand(),this.sound.stopEngine();const At=v.name;Ne.show(`Rough landing on ${At}! (${Math.abs(me).toFixed(1)} m/s)`),At==="earth"?this.achievements.unlock("land_earth"):At==="moon"&&this.achievements.unlock("land_moon")}}else Wt<_e+250&&isFinite(me)&&Math.abs(me)>5e4&&this.doCrash(`High-speed impact! (${Math.abs(me).toFixed(0)} m/s) on ${v.name}`,v,bt,qt,re,Wt,_e)}}if(this.system.propagate(t,la),this.grounded&&this.groundedDir){const H=Xe(this.state.position,this.system),Q=H.radius??6371e3,st=[H.position[0]+this.groundedDir[0],H.position[1]+this.groundedDir[1],H.position[2]+this.groundedDir[2]],ut=(H.getSurfaceRadiusAt?.(st)??Q)+50;this.state.position[0]=H.position[0]+this.groundedDir[0]*ut,this.state.position[1]=H.position[1]+this.groundedDir[1]*ut,this.state.position[2]=H.position[2]+this.groundedDir[2]*ut}if(this.grounded){const H=Xe(this.state.position,this.system),Q=this.state.position[0]-H.position[0],st=this.state.position[1]-H.position[1],ot=this.state.position[2]-H.position[2],ut=Math.sqrt(Q*Q+st*st+ot*ot),it=H.radius??6371e3;ut>it*1.1&&(this.state.velocity=[0,0,0],this.state.position[0]=H.position[0]+Q/ut*(it+50),this.state.position[1]=H.position[1]+st/ut*(it+50),this.state.position[2]=H.position[2]+ot/ut*(it+50))}for(const H of this.system.bodies)H.syncMesh?.();const K=Xe(this.state.position,this.system),Y=this.state.position[0]-K.position[0],$=this.state.position[1]-K.position[1],J=this.state.position[2]-K.position[2],lt=Math.sqrt(Y*Y+$*$+J*J)-(K.radius??6371e3),ht=Math.max(.05,Math.min(1,lt/5e4));for(const H of this.system.bodies){const Q=H;if(!(!Q.mesh||Q.name==="earth"||Q.name==="sun")&&Q.mesh.material){const st=Array.isArray(Q.mesh.material)?Q.mesh.material:[Q.mesh.material];for(const ot of st)ot.transparent!==void 0&&(ot.transparent=!0,ot.opacity=ht,ot.needsUpdate=!0)}}const X=this.system.bodyByName("sun");if(X&&X.mesh){const H=X.mesh.position;for(const Q of this.system.bodies){const st=Q;st.atmosphereGlow&&st.mesh&&st.atmosphereGlow.setSunDirection(H,st.mesh.position)}}const et=this.system.bodyByName("earth");if(et&&"updateClouds"in et){const H=this.system.bodyByName("sun"),Q=H?H.position:void 0;et.updateClouds(e,Q)}if(this.debris.length>0){const H=Xe(this.state.position,this.system);for(let Q=this.debris.length-1;Q>=0;Q--){const st=this.debris[Q];if(st.life-=e,st.life<=0||st.body.mass<=0){this.sceneMgr.scene.remove(st.mesh),this.debris.splice(Q,1);continue}const ot=_u(st.body,this.system.bodies);st.body.applyForce(ot,e),st.mesh.position.set(st.body.position[0]*Nt,st.body.position[1]*Nt,st.body.position[2]*Nt);const ut=st.body.position[0]-H.position[0],it=st.body.position[1]-H.position[1],jt=st.body.position[2]-H.position[2],Vt=Math.sqrt(ut*ut+it*it+jt*jt),Ee=H.getSurfaceRadiusAt?.(st.body.position)??H.radius??6371e3;Vt<Ee&&(this.sceneMgr.scene.remove(st.mesh),this.debris.splice(Q,1))}}this.updateExplosion(e);const dt=Xe(this.state.position,this.system),vt=this.state.position[0]-dt.position[0],St=this.state.position[1]-dt.position[1],Ot=this.state.position[2]-dt.position[2],Rt=Math.sqrt(vt*vt+St*St+Ot*Ot)||1,Ct=new R(vt/Rt,St/Rt,Ot/Rt);if(this.rocketShadow&&(this.rocketShadow.visible=!1),this._debugMarker&&this._debugMarker.position.copy(this.rocketGroup.position),!this.crashed){const H=-this.rocketBottomY-50*Nt+2,Q=Xe(this.state.position,this.system),st=this.state.position[0]-Q.position[0],ot=this.state.position[1]-Q.position[1],ut=this.state.position[2]-Q.position[2],it=Math.sqrt(st*st+ot*ot+ut*ut)||1;if(!this._debugShown){this._debugShown=!0;const jt=document.createElement("div");jt.style.cssText="position:fixed;top:120px;right:16px;z-index:600;font-family:monospace;font-size:11px;color:#0f0;background:rgba(0,0,0,0.85);padding:8px;border-radius:4px;pointer-events:none;max-width:300px;",jt.id="rocket-debug",jt.innerHTML="v2.6<br>C=freecam F=reset T=SAS W=throttle",document.body.appendChild(jt),console.log("ROCKET DEBUG:",{rocketBottomY:this.rocketBottomY,visualOffset:H,VISUAL_SCALE:Nt,ROCKET_VISUAL_SCALE:io,earthVisualR:6371e3*Nt,rocketGroupPos:this.rocketGroup.position.toArray(),statePos:this.state.position})}if(this.rocketGroup.position.set(this.state.position[0]*Nt+st/it*H,this.state.position[1]*Nt+ot/it*H,this.state.position[2]*Nt+ut/it*H),this.cameraMode==="free"){this.freeCamKeys.left&&(this.freeCamAzimuth+=3*e),this.freeCamKeys.right&&(this.freeCamAzimuth-=3*e),this.freeCamKeys.up&&(this.freeCamPolar=Math.max(.05,this.freeCamPolar-3*.7*e)),this.freeCamKeys.down&&(this.freeCamPolar=Math.min(Math.PI-.05,this.freeCamPolar+3*.7*e));const Vt=new R(this.state.position[0]*Nt+st/it*H,this.state.position[1]*Nt+ot/it*H,this.state.position[2]*Nt+ut/it*H),Ee=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.cos(this.freeCamAzimuth),_e=this.freeCamDist*Math.cos(this.freeCamPolar),bt=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.sin(this.freeCamAzimuth);this.sceneMgr.camera.position.set(Vt.x+Ee,Vt.y+_e,Vt.z+bt);const qt=Math.abs(this.freeCamPolar-Math.PI/2)>Math.PI/2-.15?new R(0,0,Math.sin(this.freeCamPolar)>0?1:-1):new R(0,1,0);this.sceneMgr.camera.up.copy(qt),this.sceneMgr.camera.lookAt(Vt)}else{const jt={x:st/it*H,y:ot/it*H,z:ut/it*H};this.chase.follow(this.state,e,Ct,n||!this._camSnapped,jt),this._camSnapped||(this._camSnapped=!0)}this.deployedChuteMesh&&(this.deployedChuteMesh.position.set(this.state.position[0]*Nt,this.state.position[1]*Nt+.02,this.state.position[2]*Nt),this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation))}const Lt=v&&v.radius?w-v.radius:0;this.countStages(this.rocket.assembly.roots);const G=this.computeStageData();this.stageInfo=G;const Me=Xe(this.state.position,this.system);if(Me&&Me.mass>0){const H=[(this.state.position[0]-Me.position[0])*Nt,(this.state.position[1]-Me.position[1])*Nt,(this.state.position[2]-Me.position[2])*Nt];js(H,this.state.velocity,Me.mass,5e14,360)}if(this.impactMarker){const H=Xe(this.state.position,this.system),Q=[this.state.position[0]-H.position[0],this.state.position[1]-H.position[1],this.state.position[2]-H.position[2]],st=js(Q,this.state.velocity,H.mass,5e14,360);if(st.points.length>10&&!st.bound){const ot=st.points[st.points.length-1],ut=H.getSurfaceRadiusAt?.([ot[0],0,ot[1]])??H.radius??6371e3;H.position[0]+ot[0],H.position[2]+ot[1];const it=Math.sqrt(ot[0]*ot[0]+ot[1]*ot[1]);if(it>ut*.5){const jt=H.position[0]+ot[0]/it*ut,Vt=H.position[2]+ot[1]/it*ut;this.impactMarker.position.set(jt*Nt,0,Vt*Nt),this.impactMarker.visible=!0}else this.impactMarker.visible=!1}else this.impactMarker.visible=!1}this.stageInfo.filter(H=>H.active).length>0&&this.stageInfo.findIndex(H=>H.active)+1,this.hud.update(this.state,this.system,this.heatEnergy,this.state.throttle);const Et=Xe(this.state.position,this.system),Bt=[(this.state.position[0]-Et.position[0])*Nt,(this.state.position[1]-Et.position[1])*Nt,(this.state.position[2]-Et.position[2])*Nt],_t=js(Bt,this.state.velocity,Et.mass,5e14,90);if(_t.points.length>5){if(!this.orbitLine){const Q=new De,st=new Float32Array(_t.points.length*3);Q.setAttribute("position",new Le(st,3));const ot=new xo({color:_t.bound?4491468:14527044,transparent:!0,opacity:.3,depthWrite:!1});this.orbitLine=new yo(Q,ot),this.sceneMgr.scene.add(this.orbitLine)}const H=this.orbitLine.geometry.attributes.position;for(let Q=0;Q<_t.points.length;Q++)H.array[Q*3]=Et.position[0]*Nt+_t.points[Q][0],H.array[Q*3+1]=this.state.position[1]*Nt,H.array[Q*3+2]=Et.position[2]*Nt+_t.points[Q][1];H.needsUpdate=!0,this.orbitLine.geometry.setDrawRange(0,_t.points.length),this.orbitLine.material.color.set(_t.bound?4491468:14527044),this.orbitLine.visible=!0}else this.orbitLine&&(this.orbitLine.visible=!1);Lt>this.maxAlt&&(this.maxAlt=Lt),V>this.maxSpeed&&(this.maxSpeed=V);const fe=[100,500,1e3,5e3,1e4,5e4,1e5,5e5,1e6];for(const H of fe)if(Lt>=H&&this.lastAltMilestone<H){this.lastAltMilestone=H,Ne.show(`Altitude: ${H>=1e3?H/1e3+"km":H+"m"}`);break}const y=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2)/340;this.hud.setMass(this.state.rocket.totalMass()),this.prevMach=y;const S=Xe(this.state.position,this.system);if(S&&S.mass>0){const H=this.state.position[0]-S.position[0],Q=this.state.position[1]-S.position[1],st=this.state.position[2]-S.position[2],ot=Math.sqrt(H*H+Q*Q+st*st)||1;Ms*S.mass/(ot*ot)}this.prevVel=[this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]];const F=this.state.velocity[0]-this.prevVel[0],C=this.state.velocity[1]-this.prevVel[1],j=this.state.velocity[2]-this.prevVel[2],Z=Math.sqrt(F*F+C*C+j*j),Mt=e>0?Z/(e*9.80665):1;if(Mt>2.5?this.screenShake=Math.min(1,(Mt-2.5)/5):this.screenShake*=Math.exp(-3*e),this.screenShake>.01){const H=(Math.random()-.5)*this.screenShake*.01,Q=(Math.random()-.5)*this.screenShake*.01;this.rocketGroup.position.x+=H,this.rocketGroup.position.z+=Q}this.sceneMgr.camera.updateProjectionMatrix();const gt=Math.min(1,Math.max(0,(Lt??0)/3e4)),It=.02*(1-gt)+0*gt,Pt=.05*(1-gt)+0*gt,tt=.15*(1-gt)+.01*gt;this.sceneMgr.scene.background=this.sceneMgr.scene.background.setRGB(It,Pt,tt),new R(0,1,0).applyQuaternion(this.rocketQuat);const zt=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),Ht=zt>.01?[this.state.velocity[0]/zt,this.state.velocity[1]/zt,this.state.velocity[2]/zt]:[0,1,0],Dt=Xe(this.state.position,this.system),yt=this.state.position[0]-Dt.position[0],xt=this.state.position[1]-Dt.position[1],Gt=this.state.position[2]-Dt.position[2],ee=Math.sqrt(yt*yt+xt*xt+Gt*Gt)||1,pe=this.state.velocity[0],kt=this.state.velocity[1],rt=this.state.velocity[2],I=xt*rt-Gt*kt,at=Gt*pe-yt*rt,ct=yt*kt-xt*pe,Ft=Math.sqrt(I*I+at*at+ct*ct)||1,Ut=[],ce={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",pluto:"#ddccbb"};for(const H of this.system.bodies){if(H.mass<=0)continue;const Q=H.position[0]-this.state.position[0],st=H.position[1]-this.state.position[1],ot=H.position[2]-this.state.position[2],ut=Math.sqrt(Q*Q+st*st+ot*ot)||1;Ut.push({name:H.name,dir:[Q/ut,st/ut,ot/ut],color:ce[H.name]||"#888"})}this.hud.setNavballData([c.x,c.y,c.z],Ht,[yt/ee,xt/ee,Gt/ee],[I/Ft,at/Ft,ct/Ft],Ut)}performStage(){const t=this.findLowestDecoupler(this.rocket.assembly.roots);if(!t){Ne.show("No decouplers to stage.");return}this.sound.playStaging();const e=this.rocketGroup.getObjectByName(t.part.id);if(e){const n=[],i=[];for(let h=0;h<16;h++){const u=.02+Math.random()*.04,f=new ue(u,4,3),g=new Ae({color:h<4?16746564:11184810,transparent:!0,opacity:.9,blending:rn,depthWrite:!1}),_=new pt(f,g),m=h/16*Math.PI*2+Math.random()*.3,p=(Math.random()-.5)*.8;_.position.copy(this.rocketGroup.position),_.position.x+=Math.cos(m)*.15,_.position.y+=p*.1,_.position.z+=Math.sin(m)*.15,this.sceneMgr.scene.add(_),_._life=.6+Math.random()*.4,_._age=0,_._vx=Math.cos(m)*(.8+Math.random()*1.5),_._vy=p*.5,_._vz=Math.sin(m)*(.8+Math.random()*1.5),this.explosionMeshes.push(_)}const s=this.rocket.assembly.roots,o=s.indexOf(t);if(o>=0)for(let h=o;h<s.length;h++){const u=this.rocketGroup.getObjectByName(s[h].part.id);if(u){const f=new R;u.getWorldPosition(f),n.push(f),i.push(u),u.removeFromParent()}}for(;e.children.length>0;){const h=e.children[0],u=new R;h.getWorldPosition(u),n.push(u),i.push(h),h.removeFromParent()}const a=Xe(this.state.position,this.system),c=[...this.state.position],l=[a.position[0]-c[0],a.position[1]-c[1],a.position[2]-c[2]],d=Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2])||1;for(let h=0;h<i.length;h++){const u=i[h],f=new nn;f.add(u),u.position.set(0,0,0);const g=this.sceneMgr.scene;f.position.copy(n[h]),f.position.x+=(Math.random()-.5)*.5,f.position.y+=(Math.random()-.5)*.5,f.position.z+=(Math.random()-.5)*.5,f.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),g.add(f);const _=1+Math.random()*2,m=[this.state.velocity[0]-l[0]/d*_+(Math.random()-.5)*.5,this.state.velocity[1]-l[1]/d*_+(Math.random()-.5)*.5,this.state.velocity[2]-l[2]/d*_+(Math.random()-.5)*.5],p=new ac("debris",100,c,m);this.debris.push({mesh:f,body:p,life:60})}}this.rocket.removeStage(t),this.positionFlameAtNozzle(),this.achievements.unlock("stage_separate"),Ne.show("Stage separated!")}findLowestDecoupler(t){let e=null;const n=i=>{for(const s of i)s.part.kind==="decoupler"&&(e=s),n(s.children)};return n(t),e}toggleParachute(){if(this.rocket.assembly.roots.some(e=>e.part.kind==="parachute")||this.rocket.assembly.roots.some(e=>e.children.some(n=>n.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const e={radius:.6*de,height:1*de};this.deployedChuteMesh=Ha(e),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);Ne.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}}toggleGear(){this.gearDeployed=!this.gearDeployed;for(const t of this.gearMeshes)t.visible=this.gearDeployed;Ne.show(this.gearDeployed?"Landing gear deployed":"Landing gear retracted")}doCrash(t,e,n,i,s,o,a){this.crashed||this._spawnProtectionTimer>0||(this.crashed=!0,this.achievements.unlock("crash"),this.sound.playCrash(),this.sound.stopEngine(),Ne.show(`CRASH! ${t}`),this.rocketGroup.visible=!1,this.engineFlame.stop(),this.screenShake=3,this.state.position=[e.position[0]+n/o*(a+50),e.position[1]+i/o*(a+50),e.position[2]+s/o*(a+50)],this.state.velocity=[0,0,0],this.state.throttle=0,this.spawnExplosion(this.state.position[0]*Nt,this.state.position[1]*Nt,this.state.position[2]*Nt),this.showCrashOverlay(t))}showCrashOverlay(t){const e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999;pointer-events:none;opacity:0;transition:opacity 0.1s;",document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1"}),setTimeout(()=>{e.style.opacity="0"},100),setTimeout(()=>e.remove(),500);const n=document.createElement("div");n.style.cssText=`
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
    `,document.body.appendChild(n),this.crashOverlay=n,n.querySelector("#crash-menu").addEventListener("click",()=>{this.onCrashAction?.("menu")}),n.querySelector("#crash-restart").addEventListener("click",()=>{this.onCrashAction?.("restart")})}updateExplosion(t){if(this.explosionMeshes.length>0)for(let e=this.explosionMeshes.length-1;e>=0;e--){const n=this.explosionMeshes[e],i=n._age+t;n._age=i;const s=n._life,o=i/s;if(o>=1){this.sceneMgr.scene.remove(n),n.geometry.dispose(),n.material.dispose(),this.explosionMeshes.splice(e,1);continue}const a=n._shockRing,c=a?1+o*60:1+o*6;n.scale.setScalar(c);const l=s<1?2:1;n.material.opacity=a?Math.max(0,.85*(1-o*1.5)):Math.max(0,.9*(1-o*l)),n.position.x+=n._vx*t,n.position.y+=n._vy*t,n.position.z+=n._vz*t}}explosionMeshes=[];spawnExplosion(t,e,n){const i=[16746496,16729088,16720384,16737792,13386752,16755200],s=new pt(new ue(.8,12,8),new Ae({color:16755200,transparent:!0,opacity:1,blending:rn,depthWrite:!1}));s.position.set(t,e,n),s._life=.8,s._age=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s);for(let o=0;o<8;o++){const a=1+Math.random()*1.5,c=new ue(a,8,6),l=new Ae({color:i[o%i.length],transparent:!0,opacity:.9,blending:rn,depthWrite:!1}),d=new pt(c,l),h=o/8*Math.PI*2,u=Math.random()*Math.PI,f=.3;d.position.set(t+Math.sin(h)*Math.cos(u)*f,e+Math.sin(u)*f,n+Math.cos(h)*Math.cos(u)*f),d._life=1.5+Math.random()*.5,d._age=0,d._vx=Math.sin(h)*Math.cos(u)*(1+Math.random()*3),d._vy=Math.sin(u)*(1+Math.random()*3),d._vz=Math.cos(h)*Math.cos(u)*(1+Math.random()*3),this.sceneMgr.scene.add(d),this.explosionMeshes.push(d)}for(let o=0;o<4;o++){const a=1.5+Math.random()*2,c=new Ae({color:4473924,transparent:!0,opacity:.4,blending:fi,depthWrite:!1}),l=new pt(new ue(a,6,6),c),d=o/4*Math.PI*2+Math.random()*.5;l.position.set(t+Math.cos(d)*.5,e+(Math.random()-.5)*.3,n+Math.sin(d)*.5),l._life=2+Math.random()*.5,l._age=0,l._vx=Math.cos(d)*(.5+Math.random()*1.5),l._vy=(Math.random()-.5)*1,l._vz=Math.sin(d)*(.5+Math.random()*1.5),this.sceneMgr.scene.add(l),this.explosionMeshes.push(l)}}spawnShockRing(t=16777215){const e=new R;this.rocketGroup.getWorldPosition(e),e.x*Nt,e.y*Nt,e.z*Nt;const n=new gi(.1,.2,64),i=new Ae({color:t,transparent:!0,opacity:.85,side:Oe,blending:rn,depthWrite:!1}),s=new pt(n,i);s.position.set(this.rocketGroup.position.x,this.rocketGroup.position.y,this.rocketGroup.position.z),s.quaternion.copy(this.rocketQuat),s.scale.setScalar(1),s._life=1.2,s._age=0,s._shockRing=!0,s._vx=0,s._vy=0,s._vz=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s)}hasLandingLegs(){const t=e=>{for(const n of e)if(n.part.kind==="legs"||t(n.children))return!0;return!1};return t(this.rocket.assembly.roots)}positionFlameAtNozzle(){let t=1/0,e=-1/0;this.rocketGroup.traverse(i=>{if(i instanceof pt){if(this.gearMeshes.includes(i)||i===this.rocketShadow||i===this.reentryGlow||i===this.reentryGlowMesh)return;const s=new Mn().setFromObject(i);s.min.y<t&&(t=s.min.y),s.max.y>e&&(e=s.max.y)}}),this.rocketBottomY=t===1/0?-.1:t;const n=t===1/0?-.1:t-.01;this.engineFlame.getMesh().position.set(0,n,0),this.engineFlame.getMesh().rotation.set(0,0,0)}dispose(){this.crashOverlay&&(this.crashOverlay.remove(),this.crashOverlay=null),this.sceneMgr.scene.remove(this.rocketGroup);for(const t of this.debris)this.sceneMgr.scene.remove(t.mesh);this.debris=[];for(const t of this.explosionMeshes)this.sceneMgr.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.explosionMeshes=[],this.controls.dispose(),this.chase.dispose(),this.engineFlame.dispose(),this.groundSmoke.dispose(),this.hud.unmount(),this.sound.dispose()}}function jx(r,t,e){const n=r.mass,i=[...r.position],s=[...r.velocity],o=Fe(t(r),1/n),a=s,l=pa(r,qe(i,Fe(o,.5*e)),qe(s,Fe(a,.5*e))),d=Fe(t(l),1/n),h=qe(s,Fe(o,.5*e)),f=pa(r,qe(i,Fe(d,.5*e)),qe(s,Fe(h,.5*e))),g=Fe(t(f),1/n),_=qe(s,Fe(d,.5*e)),p=pa(r,qe(i,Fe(g,e)),qe(s,Fe(_,e))),x=Fe(t(p),1/n),M=qe(s,Fe(g,e)),b=Fe(qe(qe(o,Fe(d,2)),qe(Fe(g,2),x)),e/6),P=Fe(qe(qe(a,Fe(h,2)),qe(Fe(_,2),M)),e/6);r.position=qe(i,P),r.velocity=qe(s,b)}function pa(r,t,e){return{...r,position:t,velocity:e}}function qe(r,t){return[r[0]+t[0],r[1]+t[1],r[2]+t[2]]}function Fe(r,t){return[r[0]*t,r[1]*t,r[2]*t]}class $x{bodies=[];add(t){this.bodies.push(t)}bodyByName(t){return this.bodies.find(e=>e.name===t)}propagate(t,e){let n=t;for(;n>0;){const i=Math.min(e,n);this.step(i),n-=i}}step(t){for(const e of this.bodies){if(e.mass<=0)continue;const n=_u(e,this.bodies);jx(e,()=>n,t)}}}const ii=cn*ln;class Nn extends ac{radius;visualRadius;mesh;constructor(t,e,n,i,s){super(t,e,n,i),this.radius=s,this.visualRadius=s*ii;const o=new ue(this.visualRadius,64,32),a=new ae({color:8421504});this.mesh=new pt(o,a),this.mesh.position.set(n[0]*ii,n[1]*ii,n[2]*ii)}getTerrainHeightVisual(t,e,n){return 0}syncMesh(){this.mesh.position.set(this.position[0]*ii,this.position[1]*ii,this.position[2]*ii)}getSurfaceRadiusAt(t){const e=t[0]-this.position[0],n=t[1]-this.position[1],i=t[2]-this.position[2],s=Math.sqrt(e*e+n*n+i*i);if(s===0)return this.radius;const o=e/s,a=n/s,c=i/s,d=this.getTerrainHeightVisual(o,a,c)/ii;return this.radius+d}}const ma=cn*ln,lh=64,si=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},Zx=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,c=e-s,l=o*o*(3-2*o),d=a*a*(3-2*a),h=c*c*(3-2*c),u=si(n,i,s),f=si(n+1,i,s),g=si(n,i+1,s),_=si(n+1,i+1,s),m=si(n,i,s+1),p=si(n+1,i,s+1),x=si(n,i+1,s+1),M=si(n+1,i+1,s+1);return Ai(Ai(Ai(u,f,l),Ai(g,_,l),d),Ai(Ai(m,p,l),Ai(x,M,l),d),h)},Kr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const c=1<<a;i+=s*Zx(r*c,t*c,e*c),o+=s,s*=.5}return i/o},Ai=(r,t,e)=>r+(t-r)*e;class Jx extends Nn{getTerrainHeightVisual(t,e,n){const i=Kr(t*10+500,e*10+600,n*10+700,4),s=Kr(t*40+100,e*40+200,n*40+300,3),o=i*.8+s*.2,a=this.visualRadius*.03;return o>.4?((o-.4)/.6)**2*a:-(.4-o)/.4*a*.12}constructor(t,e){super("mercury",1e24,t,e,244e4);const n=this.visualRadius,s=new Ns().load(Fs("/textures/mercury.jpg"),h=>{h.colorSpace=se,h.anisotropy=4}),o=new ue(n,lh,lh),a=o.attributes.position,c=new R,l=n*.03;for(let h=0;h<a.count;h++){c.fromBufferAttribute(a,h);const u=c.x/n,f=c.y/n,g=c.z/n,_=Kr(u*10+500,f*10+600,g*10+700,4),m=Kr(u*40+100,f*40+200,g*40+300,3),p=_*.8+m*.2;let x=0;p>.4?x=((p-.4)/.6)**2*l:x=-(.4-p)/.4*l*.12,c.setLength(n+x),a.setXYZ(h,c.x,c.y,c.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new ae({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new pt(o,d),this.mesh.position.set(t[0]*ma,t[1]*ma,t[2]*ma)}}const hh=`
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
`,Qx=`
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
`,ty=`
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
`;class Xi{group=new nn;innerMesh;outerMesh;innerMat;outerMat;constructor(t,e=4491519,n=.7,i,s=16737826,o=3){const a=new Tt(e),c=new Tt(s),l=i??t*.08,d=new R(0,0,0),h=t*1.01,u=new ue(h,64,48);this.innerMat=new Rn({vertexShader:hh,fragmentShader:Qx,uniforms:{uSunDir:{value:new R(0,1,0)},uPlanetCenter:{value:d},uInnerRadius:{value:t},uAtmHeight:{value:l},uRayleighCol:{value:a},uMieCol:{value:new Tt(.9,.9,1)},uDensity:{value:n},uTerminatorCol:{value:c},uGlowPower:{value:o}},transparent:!0,blending:rn,depthWrite:!1,side:An}),this.innerMesh=new pt(u,this.innerMat),this.group.add(this.innerMesh);const f=t*1.06,g=new ue(f,48,32);this.outerMat=new Rn({vertexShader:hh,fragmentShader:ty,uniforms:{uSunDir:{value:new R(0,1,0)},uPlanetCenter:{value:d},uInnerRadius:{value:t},uDensity:{value:n*.5},uGlowPower:{value:o}},transparent:!0,blending:rn,depthWrite:!1,side:An}),this.outerMesh=new pt(g,this.outerMat),this.group.add(this.outerMesh)}setSunDirection(t,e){const n=new R().copy(t).sub(e).normalize();this.innerMat.uniforms.uSunDir.value.copy(n),this.outerMat.uniforms.uSunDir.value.copy(n)}getMesh(){return this.group}dispose(){this.innerMat.dispose(),this.outerMat.dispose(),this.innerMesh.geometry.dispose(),this.outerMesh.geometry.dispose()}}const ga=cn*ln,uh=64,ri=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},ey=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,c=e-s,l=o*o*(3-2*o),d=a*a*(3-2*a),h=c*c*(3-2*c),u=ri(n,i,s),f=ri(n+1,i,s),g=ri(n,i+1,s),_=ri(n+1,i+1,s),m=ri(n,i,s+1),p=ri(n+1,i,s+1),x=ri(n,i+1,s+1),M=ri(n+1,i+1,s+1);return Ri(Ri(Ri(u,f,l),Ri(g,_,l),d),Ri(Ri(m,p,l),Ri(x,M,l),d),h)},jr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const c=1<<a;i+=s*ey(r*c,t*c,e*c),o+=s,s*=.5}return i/o},Ri=(r,t,e)=>r+(t-r)*e;class ny extends Nn{getTerrainHeightVisual(t,e,n){const i=jr(t*6+50,e*6+100,n*6+150,4),s=jr(t*15+200,e*15+300,n*15+400,3),o=i*.6+s*.4,a=this.visualRadius*.015;return o>.35?((o-.35)/.65)**2*a:-(.35-o)/.35*a*.05}atmosphereGlow;constructor(t,e){super("venus",146e23,t,e,6052e3);const n=this.visualRadius,s=new Ns().load(Fs("/textures/venus.jpg"),h=>{h.colorSpace=se,h.anisotropy=4}),o=new ue(n,uh,uh),a=o.attributes.position,c=new R,l=n*.015;for(let h=0;h<a.count;h++){c.fromBufferAttribute(a,h);const u=c.x/n,f=c.y/n,g=c.z/n,_=jr(u*6+50,f*6+100,g*6+150,4),m=jr(u*15+200,f*15+300,g*15+400,3),p=_*.6+m*.4;let x=0;p>.35?x=((p-.35)/.65)**2*l:x=-(.35-p)/.35*l*.05,c.setLength(n+x),a.setXYZ(h,c.x,c.y,c.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new ae({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new pt(o,d),this.mesh.position.set(t[0]*ga,t[1]*ga,t[2]*ga),this.atmosphereGlow=new Xi(n,15247436,.4),this.mesh.add(this.atmosphereGlow.getMesh())}}const _a=cn*ln;class iy extends Nn{constructor(t,e){super("pluto",44e20,t,e,1188e3);const n=new ue(this.visualRadius,32,16),i=new ae({color:14535867,roughness:.9,metalness:0});this.mesh=new pt(n,i),this.mesh.position.set(t[0]*_a,t[1]*_a,t[2]*_a)}}const xa=cn*ln;function sy(r){let t=r|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ry(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=n.createImageData(2048,1024);for(let o=0;o<1024;o++)for(let a=0;a<2048;a++){const c=o/1024,l=a/2048,d=(c-.5)*Math.PI,h=l*Math.PI*2,u=Math.cos(d)*Math.cos(h),f=Math.cos(d)*Math.sin(h),g=Math.sin(d);let _=(Math.sin(u*3+f*1.3+g*.7)*.5+.5)*.4+(Math.sin((u+1.7)*6+g*1.1)*.5+.5)*.3;_*=Math.max(0,1-Math.abs(c-.5)*1.2),_=Math.max(0,Math.min(255,(_-.4)*2.5*255));const m=(o*2048+a)*4;i.data[m]=i.data[m+1]=i.data[m+2]=_,i.data[m+3]=255}n.putImageData(i,0,0);const s=new Qe(e);return s.wrapS=s.wrapT=ke,s}function oy(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");n.fillStyle="#000000",n.fillRect(0,0,1024,512);const i=sy(42),s=[{lat:.7,lon:-1.8,rx:.5,ry:.8},{lat:-.4,lon:-1.3,rx:.6,ry:.35},{lat:.1,lon:.6,rx:.55,ry:.4},{lat:.5,lon:1.5,rx:.6,ry:.4},{lat:.85,lon:.4,rx:.25,ry:.3}];for(const a of s){const c=(a.lon+Math.PI)/(2*Math.PI)*1024,l=(Math.PI/2-a.lat)/Math.PI*512,d=a.rx/(2*Math.PI)*1024,h=a.ry/Math.PI*512;for(let u=0;u<30;u++){const f=(i()-.5)*d*2,g=(i()-.5)*h*2;if((f/d)**2+(g/h)**2>1)continue;const _=120+Math.floor(i()*135);n.fillStyle=`rgb(${_},${Math.floor(_*.85)},${Math.floor(_*.5)})`,n.beginPath(),n.arc(c+f,l+g,1+i()*3,0,Math.PI*2),n.fill()}}const o=new Qe(e);return o.wrapS=o.wrapT=ke,o.colorSpace=se,o}class ay extends Nn{atmosphereGlow;cloudMesh;constructor(t,e){super("earth",px,t,e,6371e3*2);const n=this.visualRadius,i=256,s=new ue(n,i,i),o=s.attributes.position,a=new R,c=[],l=n*.025,d=n*.006;for(let _=0;_<o.count;_++){a.fromBufferAttribute(o,_);const m=a.x/n,p=a.y/n,x=a.z/n,M=this.terrainAt(m,p,x,l,d),b=Math.max(-1,Math.min(1,M/l));let P,A,T;b<-.5?(P=.01,A=.06,T=.28):b<-.1?(P=.03,A=.12,T=.42):b<.02?(P=.55,A=.5,T=.32):b<.25?(P=.15,A=.38,T=.1):b<.55?(P=.22,A=.28,T=.1):b<.8?(P=.38,A=.33,T=.22):(P=.88,A=.85,T=.82),c.push(P,A,T)}s.setAttribute("color",new ye(c,3));for(let _=0;_<o.count;_++){a.fromBufferAttribute(o,_);const m=a.x/n,p=a.y/n,x=a.z/n,M=this.terrainAt(m,p,x,l,d);a.setLength(n+M),o.setXYZ(_,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const h=new ae({roughness:.85,metalness:.05,vertexColors:!0,emissiveMap:oy(),emissive:new Tt(16768358),emissiveIntensity:.3});this.mesh=new pt(s,h),this.mesh.position.set(t[0]*xa,t[1]*xa,t[2]*xa),this.loadTexture().catch(()=>{}),this.atmosphereGlow=new Xi(n,4491519,2.5,n*.1),this.mesh.add(this.atmosphereGlow.getMesh());const u=ry(),f=new ae({map:u,transparent:!0,opacity:.3,depthWrite:!1,side:Oe,roughness:1,metalness:0}),g=new ue(n*1.008,64,32);this.cloudMesh=new pt(g,f),this.cloudMesh.position.copy(this.mesh.position),this.mesh.add(this.cloudMesh)}terrainAt(t,e,n,i,s){const o=Math.sin(t*5+e*3.5)*.5+Math.cos(e*4.5-n*3)*.3,a=Math.sin(n*7+t*3+e*5)*.2+Math.sin(t*13+e*9+n*11)*.12,c=Math.sin(t*20+n*16)*.06+Math.cos(e*18+t*13)*.04,l=Math.sin(t*38+e*33+n*42)*.02,d=((o+a+c+l)*.35+.5)*1.05;if(d>.48){const h=(d-.48)/.52;return h*h*i}return d>.38?(d-.38)/.1*i*.2:-(.38-d)/.38*s}async loadTexture(){try{const t=await new Ns().loadAsync(Fs("/textures/earth_daymap.jpg"));t.colorSpace=se,this.mesh.material.map=t,this.mesh.material.needsUpdate=!0}catch{}}updateClouds(t,e){if(this.cloudMesh.rotation.y+=t*.01,e){const n=this.mesh.material,i=Math.sqrt(e[0]**2+e[1]**2+e[2]**2)||1;this.mesh.lookAt(this.mesh.position.x+e[0]/i*100,this.mesh.position.y+e[1]/i*100,this.mesh.position.z+e[2]/i*100),n.emissiveIntensity=.15}}}const ya=cn*ln,dh=64,oi=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},cy=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,c=e-s,l=o*o*(3-2*o),d=a*a*(3-2*a),h=c*c*(3-2*c),u=oi(n,i,s),f=oi(n+1,i,s),g=oi(n,i+1,s),_=oi(n+1,i+1,s),m=oi(n,i,s+1),p=oi(n+1,i,s+1),x=oi(n,i+1,s+1),M=oi(n+1,i+1,s+1);return Ci(Ci(Ci(u,f,l),Ci(g,_,l),d),Ci(Ci(m,p,l),Ci(x,M,l),d),h)},$r=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const c=1<<a;i+=s*cy(r*c,t*c,e*c),o+=s,s*=.5}return i/o},Ci=(r,t,e)=>r+(t-r)*e;class ly extends Nn{getTerrainHeightVisual(t,e,n){const i=$r(t*8+100,e*8+200,n*8+300,4),s=$r(t*30+400,e*30+500,n*30+600,3),o=i*.7+s*.3,a=this.visualRadius*.04;return o>.45?((o-.45)/.55)**2*a:-(.45-o)/.45*a*.15}constructor(t,e){super("moon",22e22,t,e,1737e3);const n=this.visualRadius,s=new Ns().load(Fs("/textures/moon.jpg"),h=>{h.colorSpace=se,h.anisotropy=4}),o=new ue(n,dh,dh),a=o.attributes.position,c=new R,l=n*.04;for(let h=0;h<a.count;h++){c.fromBufferAttribute(a,h);const u=c.x/n,f=c.y/n,g=c.z/n,_=$r(u*8+100,f*8+200,g*8+300,4),m=$r(u*30+400,f*30+500,g*30+600,3),p=_*.7+m*.3;let x=0;p>.45?x=((p-.45)/.55)**2*l:x=-(.45-p)/.45*l*.15,c.setLength(n+x),a.setXYZ(h,c.x,c.y,c.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new ae({map:s,roughness:.95,metalness:0,color:16777215});this.mesh=new pt(o,d),this.mesh.position.set(t[0]*ya,t[1]*ya,t[2]*ya)}}const va=cn*ln,fh=64,ai=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},hy=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,c=e-s,l=o*o*(3-2*o),d=a*a*(3-2*a),h=c*c*(3-2*c),u=ai(n,i,s),f=ai(n+1,i,s),g=ai(n,i+1,s),_=ai(n+1,i+1,s),m=ai(n,i,s+1),p=ai(n+1,i,s+1),x=ai(n,i+1,s+1),M=ai(n+1,i+1,s+1);return Pi(Pi(Pi(u,f,l),Pi(g,_,l),d),Pi(Pi(m,p,l),Pi(x,M,l),d),h)},Zr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const c=1<<a;i+=s*hy(r*c,t*c,e*c),o+=s,s*=.5}return i/o},Pi=(r,t,e)=>r+(t-r)*e;class uy extends Nn{getTerrainHeightVisual(t,e,n){const i=Zr(t*4+10,e*4+20,n*4+30,5),s=Zr(t*20+100,e*20+200,n*20+300,3),o=i*.7+s*.3,a=this.visualRadius*.035;return o>.4?((o-.4)/.6)**2*a:-(.4-o)/.4*a*.1}atmosphereGlow;constructor(t,e){super("mars",19e23,t,e,339e4);const n=this.visualRadius,s=new Ns().load(Fs("/textures/mars.jpg"),h=>{h.colorSpace=se,h.anisotropy=4}),o=new ue(n,fh,fh),a=o.attributes.position,c=new R,l=n*.035;for(let h=0;h<a.count;h++){c.fromBufferAttribute(a,h);const u=c.x/n,f=c.y/n,g=c.z/n,_=Zr(u*4+10,f*4+20,g*4+30,5),m=Zr(u*20+100,f*20+200,g*20+300,3),p=_*.7+m*.3;let x=0;p>.4?x=((p-.4)/.6)**2*l:x=-(.4-p)/.4*l*.1,c.setLength(n+x),a.setXYZ(h,c.x,c.y,c.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new ae({map:s,roughness:.85,metalness:0,color:16777215});this.mesh=new pt(o,d),this.mesh.position.set(t[0]*va,t[1]*va,t[2]*va),this.atmosphereGlow=new Xi(n,13920842,.25),this.mesh.add(this.atmosphereGlow.getMesh())}}function ci(r,t,e){const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)}function dy(r,t,e){const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,c=e-s,l=o*o*(3-2*o),d=a*a*(3-2*a),h=c*c*(3-2*c),u=ci(n,i,s),f=ci(n+1,i,s),g=ci(n,i+1,s),_=ci(n+1,i+1,s),m=ci(n,i,s+1),p=ci(n+1,i,s+1),x=ci(n,i+1,s+1),M=ci(n+1,i+1,s+1);return Li(Li(Li(u,f,l),Li(g,_,l),d),Li(Li(m,p,l),Li(x,M,l),d),h)}function _i(r,t,e,n){let i=0,s=1,o=0;for(let a=0;a<n;a++){const c=1<<a;i+=s*dy(r*c,t*c,e*c),o+=s,s*=.5}return i/o}function Li(r,t,e){return r+(t-r)*e}const Ma=cn*ln,ph=64;class fy extends Nn{atmosphereGlow;constructor(t,e){super("jupiter",19e26,t,e,69911e3);const n=this.visualRadius,i=Mx(),s=new ue(n,ph,ph),o=s.attributes.position,a=new R,c=n*.02;for(let d=0;d<o.count;d++){a.fromBufferAttribute(o,d);const h=a.x/n,u=a.y/n,f=a.z/n,g=_i(h*8+10,u*8+20,f*8+30,4),_=_i(h*30+100,u*30+200,f*30+300,3),m=g*.7+_*.3;let p=0;m>.4?p=((m-.4)/.6)**2*c:p=-(.4-m)/.4*c*.1,a.setLength(n+p),o.setXYZ(d,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const l=new ae({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new pt(s,l),this.mesh.position.set(t[0]*Ma,t[1]*Ma,t[2]*Ma),this.mesh.rotation.z=3.1*Math.PI/180,this.atmosphereGlow=new Xi(n,13935988,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const Sa=cn*ln;function py(){const e=document.createElement("canvas");e.width=1024,e.height=64;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,1024,0);i.addColorStop(0,"#8a7a5a"),i.addColorStop(.05,"#b8a888"),i.addColorStop(.12,"#d4c8a8"),i.addColorStop(.2,"#c0b898"),i.addColorStop(.35,"#e8ddd0"),i.addColorStop(.5,"#c0b090"),i.addColorStop(.65,"#d8ccb0"),i.addColorStop(.8,"#a89878"),i.addColorStop(.9,"#786858"),i.addColorStop(1,"#584838"),n.fillStyle=i,n.fillRect(0,0,1024,64);for(let o=0;o<8e3;o++){const a=Math.random()*1024,c=Math.random()*64,l=1+Math.random()*4,d=120+Math.random()*80;n.fillStyle=`rgba(${d},${d-20},${d-40},${.2+Math.random()*.4})`,n.beginPath(),n.arc(a,c,l,0,Math.PI*2),n.fill()}n.fillStyle="rgba(0,0,0,0.7)",n.fillRect(1024*.43,0,1024*.04,64),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(1024*.72,0,1024*.015,64),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(1024*.1,0,1024*.02,64),n.fillRect(1024*.17,0,1024*.01,64),n.fillRect(1024*.55,0,1024*.02,64),n.fillStyle="rgba(200,190,170,0.15)";for(let o=0;o<1024;o+=8)n.fillRect(o,0,2,64);const s=new Qe(e);return s.wrapS=ke,s.wrapT=ke,s.anisotropy=4,s}class my extends Nn{atmosphereGlow;constructor(t,e){super("saturn",5683e23,t,e,58232e3);const n=this.visualRadius,i=Sx(),s=new ue(n,64,32),o=s.attributes.position,a=new R,c=n*.015;for(let p=0;p<o.count;p++){a.fromBufferAttribute(o,p);const x=a.x/n,M=a.y/n,b=a.z/n,P=_i(x*8+10,M*8+20,b*8+30,4),A=_i(x*30+100,M*30+200,b*30+300,3),T=P*.7+A*.3;let O=0;T>.4?O=((T-.4)/.6)**2*c:O=-(.4-T)/.4*c*.1,a.setLength(n+O),o.setXYZ(p,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const l=new ae({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new pt(s,l),this.mesh.position.set(t[0]*Sa,t[1]*Sa,t[2]*Sa),this.mesh.rotation.z=26.7*Math.PI/180,this.atmosphereGlow=new Xi(n,16049313,.1),this.mesh.add(this.atmosphereGlow.getMesh());const d=py(),h=new gi(n*1.15,n*2.4,256),u=new Ae({map:d,side:Oe,transparent:!0,opacity:.8,depthWrite:!1}),f=new pt(h,u);f.rotation.x=-Math.PI/2,f.rotation.z=26.7*Math.PI/180,this.mesh.add(f);const g=new gi(n*2.4,n*2.8,128),_=new Ae({color:8943720,side:Oe,transparent:!0,opacity:.15,depthWrite:!1}),m=new pt(g,_);m.rotation.x=-Math.PI/2,m.rotation.z=26.7*Math.PI/180,this.mesh.add(m)}}const ba=cn*ln;class gy extends Nn{atmosphereGlow;constructor(t,e){super("uranus",8681e22,t,e,25362e3);const n=this.visualRadius,i=bx(),s=new ue(n,64,32),o=s.attributes.position,a=new R,c=n*.015;for(let f=0;f<o.count;f++){a.fromBufferAttribute(o,f);const g=a.x/n,_=a.y/n,m=a.z/n,p=_i(g*6+10,_*6+20,m*6+30,4),x=_i(g*25+400,_*25+500,m*25+600,3),M=p*.7+x*.3;let b=0;M>.4?b=((M-.4)/.6)**2*c:b=-(.4-M)/.4*c*.1,a.setLength(n+b),o.setXYZ(f,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const l=new ae({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new pt(s,l),this.mesh.position.set(t[0]*ba,t[1]*ba,t[2]*ba),this.mesh.rotation.z=-97.8*Math.PI/180,this.atmosphereGlow=new Xi(n,5230824,.1),this.mesh.add(this.atmosphereGlow.getMesh());const d=new gi(n*1.2,n*2.1,64),h=new Ae({color:11184844,side:Oe,transparent:!0,opacity:.3}),u=new pt(d,h);u.rotation.x=-Math.PI/2,u.rotation.z=97.8*Math.PI/180,this.mesh.add(u)}}const Ta=cn*ln;class _y extends Nn{atmosphereGlow;constructor(t,e){super("neptune",1024e23,t,e,24622e3);const n=this.visualRadius,i=Tx(),s=new ue(n,64,32),o=s.attributes.position,a=new R,c=n*.015;for(let d=0;d<o.count;d++){a.fromBufferAttribute(o,d);const h=a.x/n,u=a.y/n,f=a.z/n,g=_i(h*6+10,u*6+20,f*6+30,4),_=_i(h*25+100,u*25+200,f*25+300,3),m=g*.7+_*.3;let p=0;m>.4?p=((m-.4)/.6)**2*c:p=-(.4-m)/.4*c*.1,a.setLength(n+p),o.setXYZ(d,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const l=new ae({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new pt(s,l),this.mesh.position.set(t[0]*Ta,t[1]*Ta,t[2]*Ta),this.mesh.rotation.z=28.3*Math.PI/180,this.atmosphereGlow=new Xi(n,4944093,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const gs=cn*ln,xy=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`,yy=`
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
`;class vy extends ac{light;visualRadius;mesh;constructor(t,e,n=2e26){super("sun",n,t,e),this.visualRadius=100;const i=new ue(this.visualRadius,32,16),s=new Rn({vertexShader:xy,fragmentShader:yy,uniforms:{uTime:{value:0},uColor:{value:new Tt(16763904)},uIntensity:{value:1.5}},transparent:!0,blending:rn,depthWrite:!1,side:Oe});this.mesh=new pt(i,s),this.mesh.position.set(t[0]*gs,t[1]*gs,t[2]*gs),this.light=new vo(16772829,5),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z);const o=My(),a=new Qh({map:o,blending:rn,depthWrite:!1,transparent:!0,opacity:1}),c=new qg(a);c.scale.set(25e4,25e4,1),this.mesh.add(c),this.sunMaterial=s}sunMaterial;update(t){this.sunMaterial.uniforms.uTime.value+=t}syncMesh(){this.mesh.position.set(this.position[0]*gs,this.position[1]*gs,this.position[2]*gs),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z)}}function My(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255, 220, 100, 1)"),n.addColorStop(.1,"rgba(255, 200, 80, 0.8)"),n.addColorStop(.3,"rgba(255, 160, 40, 0.4)"),n.addColorStop(.5,"rgba(255, 100, 20, 0.15)"),n.addColorStop(.7,"rgba(255, 60, 10, 0.05)"),n.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=new Qe(t);return i.needsUpdate=!0,i}class mh{assembly;fuelTanks;constructor(t){this.assembly=t,this.fuelTanks=[],xu(t.roots,this.fuelTanks)}dryMass(){return this.assembly.totalMass()}totalFuelMass(){return this.fuelTanks.reduce((t,e)=>t+e.remaining,0)}totalMass(){return this.dryMass()+this.totalFuelMass()}consumeFuel(t,e){let n=0;for(let i=this.fuelTanks.length-1;i>=0;i--){const s=this.fuelTanks[i];if(s.remaining<=0)continue;const o=t*e-n;if(o<=0)break;const a=Math.min(s.remaining,o);s.remaining-=a,n+=a}return n}removeStage(t){const e=this.assembly.roots,n=e.indexOf(t);if(n<0)return;const i=e.length-n,s=new Set,o=a=>{s.add(a),a.children.forEach(o)};o(t);for(let a=1;a<i;a++){const c=e[n+a];c&&o(c)}this.fuelTanks=this.fuelTanks.filter(a=>!s.has(a.node)),e.splice(n,i),t.children=[]}}function xu(r,t){for(const e of r)e.part.fuelCapacity&&t.push({node:e,remaining:e.part.fuelCapacity,capacity:e.part.fuelCapacity}),xu(e.children,t)}const gh="ellipse_achievements";class Sy{unlocked=new Set;callbacks=[];constructor(){const t=localStorage.getItem(gh);if(t)try{JSON.parse(t).forEach(e=>this.unlocked.add(e))}catch{}}unlock(t){this.unlocked.has(t)||(this.unlocked.add(t),localStorage.setItem(gh,JSON.stringify([...this.unlocked])),this.callbacks.forEach(e=>e(t)))}isUnlocked(t){return this.unlocked.has(t)}list(){return[...this.unlocked]}onUnlock(t){this.callbacks.push(t)}}const Ea={units:"metric",autoSave:!0,difficulty:"normal",musicVolume:.7,sfxVolume:.8},yu="ellipse_settings";function by(){const r=localStorage.getItem(yu);if(!r)return{...Ea};try{return{...Ea,...JSON.parse(r)}}catch{return{...Ea}}}function _h(r){localStorage.setItem(yu,JSON.stringify(r))}class Ty{root;onClose;current;constructor(t,e){this.current=t,this.onClose=e,this.root=document.createElement("div"),this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(6, 8, 20, 0.88);
      display: flex; align-items: center; justify-content: center;
    `;const n=document.createElement("div");n.className="panel panel--elevated",n.style.cssText="padding: var(--space-6); min-width: 400px;";const i=document.createElement("h2");i.className="text-display-sm",i.textContent="Settings",i.style.cssText="margin: 0 0 var(--space-5);",n.appendChild(i);const s=this.makeRow("Units",["metric","imperial"],t.units,l=>{this.current.units=l});n.appendChild(s);const o=this.makeRow("Difficulty",["easy","normal","hard","realistic"],t.difficulty,l=>{this.current.difficulty=l});n.appendChild(o);const a=this.makeToggle("Auto-save",t.autoSave,l=>{this.current.autoSave=l});n.appendChild(a);const c=document.createElement("button");c.className="btn btn--primary",c.textContent="Save & Close",c.style.cssText="margin-top: var(--space-4); width: 100%; padding: 12px;",c.addEventListener("click",()=>{_h(this.current),this.onClose()}),n.appendChild(c),this.root.appendChild(n)}makeRow(t,e,n,i){const s=document.createElement("div");s.style.cssText="margin: var(--space-3) 0;";const o=document.createElement("div");o.className="text-caption",o.textContent=t,o.style.cssText="margin-bottom: var(--space-2);",s.appendChild(o);const a=document.createElement("div");a.style.cssText="display:flex;gap:var(--space-2);";for(const c of e){const l=document.createElement("button");l.className=`btn${c===n?" btn--secondary":""}`,l.textContent=c,c===n&&(l.style.borderColor="var(--accent-blue)"),l.addEventListener("click",()=>{i(c),_h(this.current)}),a.appendChild(l)}return s.appendChild(a),s}makeToggle(t,e,n){const i=document.createElement("div");i.style.cssText="margin: var(--space-3) 0; display: flex; justify-content: space-between; align-items: center;";const s=document.createElement("span");s.className="text-body",s.textContent=t;const o=document.createElement("input");return o.type="checkbox",o.checked=e,o.addEventListener("change",()=>n(o.checked)),i.appendChild(s),i.appendChild(o),i}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove()}}function Jr(r){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle=r,e.fillRect(0,0,64,64),e.strokeStyle="#000",e.lineWidth=2,e.strokeRect(0,0,64,64),e.strokeRect(16,16,32,32);const n=new Qe(t);return n.wrapS=n.wrapT=fn,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}Jr("#8899aa"),Jr("#808080"),Jr("#808080"),Jr("#000000");async function Fi(r,t=se){const e=await new Promise((i,s)=>{const o=new Image;o.onload=()=>i(o),o.onerror=()=>s(new Error(`Failed: ${r}`)),o.src=r}),n=new Be(e);return n.colorSpace=t,n.wrapS=n.wrapT=fn,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}async function Qr(r){const[t,e,n,i]=await Promise.all([Fi(`/textures/${r}_color.jpg`,se),Fi(`/textures/${r}_normal.jpg`,Re),Fi(`/textures/${r}_rough.jpg`,Re),Fi(`/textures/${r}_metal.jpg`,Re)]);return{color:t,normal:e,roughness:n,metalness:i}}let Ey=!1,wy=null,Ay=null,Ry=null,Cy=null,Py=null,to=null;function Ly(){return to||(to=(async()=>{try{[wy,Ay,Ry,Cy,Py]=await Promise.all([Qr("metal013"),Qr("plates"),Qr("metal009"),Qr("metal021"),(async()=>{const[r,t,e]=await Promise.all([Fi("/textures/fabric_color.jpg",se),Fi("/textures/fabric_normal.jpg",Re),Fi("/textures/fabric_rough.jpg",Re)]);return{color:r,normal:t,roughness:e,metalness:e}})()]),Ey=!0}catch(r){console.error("Texture loading failed, using fallback",r)}})(),to)}class Iy{renderer;sceneMgr;system;achievements;mainMenu;vab;flight;constructor(){Ly(),this.renderer=new C_,this.sceneMgr=new L_,this.achievements=new Sy,this.system=new $x;const t=2e26;this.system.add(new vy([0,0,0],[0,0,0],t)),this.system.add(new Jx([2e8,0,2e7],[0,0,38e3])),this.system.add(new ny([6e8,0,-6e7],[0,0,21e3]));const e=[1e9,0,0],n=[0,0,17e3];this.system.add(new ay(e,n));const i=[e[0],0,e[2]+6e7],s=[0,0,n[2]+900];this.system.add(new ly(i,s)),this.system.add(new uy([15e8,1e9,-4e8],[0,0,13500])),this.system.add(new fy([3e9,-6e8,2e8],[0,0,9e3])),this.system.add(new my([56e8,4e8,-4e8],[0,0,6800])),this.system.add(new gy([11e9,-2e8,6e8],[0,0,4800])),this.system.add(new _y([17e9,8e8,0],[0,0,3800])),this.system.add(new iy([23e9,16e8,-1e9],[0,0,2e3])),document.getElementById("app").appendChild(this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.sceneMgr.camera.aspect=window.innerWidth/window.innerHeight,this.sceneMgr.camera.updateProjectionMatrix()}),this.achievements.onUnlock(o=>Ne.show(`Achievement: ${o}`))}async start(){const t=["/models/agena.glb","/models/saturn_v.glb","/models/apollo_soyuz.glb","/models/ares_1.glb","/models/apollo_lunar_module.glb","/models/atlas_6.glb","/models/atlas_9.glb","/models/crawler.glb"],{loadGLTF:e}=await xh(async()=>{const{loadGLTF:n}=await Promise.resolve().then(()=>gu);return{loadGLTF:n}},void 0);await Promise.allSettled(t.map(n=>e(n,1))),this.showMainMenu(),this.loop()}showMainMenu(){this.unmountCurrent(),this.sceneMgr.scene.background=new Tt(0),this.mainMenu=new I_(()=>this.showFlight(),()=>this.showVab(),()=>this.showSettings()),this.mainMenu.mount()}showSettings(){const t=new Ty(by(),()=>t.unmount());t.mount()}showVab(){this.unmountCurrent(),this.vab=new Ux(t=>{const e=new mh(t);this.showFlight(e)},()=>this.showMainMenu()),this.vab.mount(),this.sceneMgr.scene.add(this.vab.scene)}async showFlight(t){this.unmountCurrent();const e=t?.assembly??new Ga;if(!t){const i=de,s=1.1*i,o=.7*i,a=.7*i,c=2.2*i,l=2.2*i,d=.005,h=0,u=h+l/2+d+c/2,f=u+c/2+d+.6*i/2,g=f+.6*i/2+d+a/2,_=g+a/2+d+o/2,m=_+o/2+d+s/2;e.addRoot({part:fs("capsule_mk1"),position:[0,m,0],rotation:0,children:[]}),e.addRoot({part:fs("tank_m_lfo"),position:[0,_,0],rotation:0,children:[]}),e.addRoot({part:fs("engine_vector"),position:[0,g,0],rotation:0,children:[]}),e.addRoot({part:fs("decoupler_1"),position:[0,f,0],rotation:0,children:[]}),e.addRoot({part:fs("tank_xl_lfo"),position:[0,u,0],rotation:0,children:[]}),e.addRoot({part:fs("engine_mammoth"),position:[0,h,0],rotation:0,children:[]})}const n=new mh(e);this.flight=new Kx(this.renderer,this.sceneMgr,this.system,n,this.achievements),this.flight.onCrashAction=i=>{i==="menu"?this.showMainMenu():this.showFlight(t)}}unmountCurrent(){this.mainMenu?.unmount(),this.mainMenu=void 0,this.vab&&(this.vab.unmount(),this.sceneMgr.scene.remove(this.vab.scene),this.vab=void 0),this.flight?.dispose(),this.flight=void 0}loop(){const t=.016666666666666666;this.sceneMgr.update(t),this.flight?.update(t),this.vab?this.renderer.three.render(this.vab.scene,this.vab.camera):this.renderer.three.render(this.sceneMgr.scene,this.sceneMgr.camera),requestAnimationFrame(()=>this.loop())}}function Dy(){const r=document.getElementById("loading-screen");r&&r.classList.add("hidden");const t=document.getElementById("loading-label");t&&(t.dataset.done="1")}try{new Iy().start()}catch(r){console.error("Failed to start Ellipse:",r),Dy(),document.body.innerHTML+=`<div style="position:fixed;inset:0;z-index:950;color:white;padding:32px;font-family:monospace;background:#06080f;">
      <h1>Failed to start</h1>
      <pre>${String(r)}</pre>
    </div>`}
//# sourceMappingURL=index-CahjSbT3.js.map
