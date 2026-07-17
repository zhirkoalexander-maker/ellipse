(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const wu="modulepreload",Au=function(o){return"/ellipse/"+o},fl={},bh=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=r?.nonce||r?.getAttribute("nonce");i=Promise.allSettled(e.map(l=>{if(l=Au(l),l in fl)return;fl[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":wu,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((u,f)=>{h.addEventListener("load",u),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="160",Ru=0,pl=1,Cu=2,Sh=1,Pu=2,jn=3,In=0,ln=1,Ie=2,gi=0,_i=1,cn=2,ml=3,gl=4,Lu=5,Bi=100,Iu=101,Du=102,_l=103,xl=104,Uu=200,Nu=201,Fu=202,ku=203,Ia=204,Da=205,Ou=206,Hu=207,Bu=208,zu=209,Gu=210,Wu=211,Vu=212,Xu=213,qu=214,Yu=0,Ku=1,ju=2,ar=3,$u=4,Zu=5,Ju=6,Qu=7,ja=0,td=1,ed=2,Jn=0,nd=1,id=2,sd=3,od=4,rd=5,ad=6,yl="attached",ld="detached",Th=300,ws=301,As=302,Ua=303,Na=304,xr=306,dn=1e3,De=1001,lr=1002,qe=1003,Fa=1004,nr=1005,Le=1006,Eh=1007,vi=1008,xi=1009,cd=1010,hd=1011,$a=1012,wh=1013,pi=1014,$n=1015,io=1016,Ah=1017,Rh=1018,Wi=1020,ud=1021,un=1023,dd=1024,fd=1025,Vi=1026,Rs=1027,pd=1028,Ch=1029,md=1030,Ph=1031,Lh=1033,Pr=33776,Lr=33777,Ir=33778,Dr=33779,vl=35840,Ml=35841,bl=35842,Sl=35843,Ih=36196,Tl=37492,El=37496,wl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Ll=37813,Il=37814,Dl=37815,Ul=37816,Nl=37817,Fl=37818,kl=37819,Ol=37820,Hl=37821,Ur=36492,Bl=36494,zl=36495,gd=36283,Gl=36284,Wl=36285,Vl=36286,so=2300,Cs=2301,Nr=2302,Xl=2400,ql=2401,Yl=2402,_d=2500,xd=0,Dh=1,ka=2,Uh=3e3,Xi=3001,yd=3200,vd=3201,Za=0,Md=1,Tn="",oe="srgb",Te="srgb-linear",Ja="display-p3",yr="display-p3-linear",cr="linear",ve="srgb",hr="rec709",ur="p3",Zi=7680,Kl=519,bd=512,Sd=513,Td=514,Nh=515,Ed=516,wd=517,Ad=518,Rd=519,Oa=35044,jl="300 es",Ha=1035,Zn=2e3,dr=2001;class Us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $l=1234567;const Qs=Math.PI/180,Ps=180/Math.PI;function Ln(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[o&255]+Ze[o>>8&255]+Ze[o>>16&255]+Ze[o>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function tn(o,t,e){return Math.max(t,Math.min(e,o))}function Qa(o,t){return(o%t+t)%t}function Cd(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function Pd(o,t,e){return o!==t?(e-o)/(t-o):0}function to(o,t,e){return(1-e)*o+e*t}function Ld(o,t,e,n){return to(o,t,1-Math.exp(-e*n))}function Id(o,t=1){return t-Math.abs(Qa(o,t*2)-t)}function Dd(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Ud(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function Nd(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Fd(o,t){return o+Math.random()*(t-o)}function kd(o){return o*(.5-Math.random())}function Od(o){o!==void 0&&($l=o);let t=$l+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hd(o){return o*Qs}function Bd(o){return o*Ps}function Ba(o){return(o&o-1)===0&&o!==0}function zd(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function fr(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Gd(o,t,e,n,i){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+n)/2),d=r((t+n)/2),h=s((t-n)/2),u=r((t-n)/2),f=s((n-t)/2),m=r((n-t)/2);switch(i){case"XYX":o.set(a*d,l*h,l*u,a*c);break;case"YZY":o.set(l*u,a*d,l*h,a*c);break;case"ZXZ":o.set(l*h,l*u,a*d,a*c);break;case"XZX":o.set(a*d,l*m,l*f,a*c);break;case"YXY":o.set(l*f,a*d,l*m,a*c);break;case"ZYZ":o.set(l*m,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function fe(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Wd={DEG2RAD:Qs,RAD2DEG:Ps,generateUUID:Ln,clamp:tn,euclideanModulo:Qa,mapLinear:Cd,inverseLerp:Pd,lerp:to,damp:Ld,pingpong:Id,smoothstep:Dd,smootherstep:Ud,randInt:Nd,randFloat:Fd,randFloatSpread:kd,seededRandom:Od,degToRad:Hd,radToDeg:Bd,isPowerOfTwo:Ba,ceilPowerOfTwo:zd,floorPowerOfTwo:fr,setQuaternionFromProperEuler:Gd,normalize:fe,denormalize:On};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,n,i,s,r,a,l,c){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c)}set(t,e,n,i,s,r,a,l,c){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],y=i[4],b=i[7],C=i[2],R=i[5],S=i[8];return s[0]=r*_+a*x+l*C,s[3]=r*g+a*y+l*R,s[6]=r*p+a*b+l*S,s[1]=c*_+d*x+h*C,s[4]=c*g+d*y+h*R,s[7]=c*p+d*b+h*S,s[2]=u*_+f*x+m*C,s[5]=u*g+f*y+m*R,s[8]=u*p+f*b+m*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*r*d-e*a*c-n*s*d+n*a*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*r-a*c,u=a*l-d*s,f=c*s-r*l,m=e*h+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(i*c-d*n)*_,t[2]=(a*n-i*r)*_,t[3]=u*_,t[4]=(d*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fr.makeScale(t,e)),this}rotate(t){return this.premultiply(Fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new se;function Fh(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function oo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Vd(){const o=oo("canvas");return o.style.display="block",o}const Zl={};function eo(o){o in Zl||(Zl[o]=!0,console.warn(o))}const Jl=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ql=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fo={[Te]:{transfer:cr,primaries:hr,toReference:o=>o,fromReference:o=>o},[oe]:{transfer:ve,primaries:hr,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[yr]:{transfer:cr,primaries:ur,toReference:o=>o.applyMatrix3(Ql),fromReference:o=>o.applyMatrix3(Jl)},[Ja]:{transfer:ve,primaries:ur,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Ql),fromReference:o=>o.applyMatrix3(Jl).convertLinearToSRGB()}},Xd=new Set([Te,yr]),ce={enabled:!0,_workingColorSpace:Te,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Xd.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=fo[t].toReference,i=fo[e].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return fo[o].primaries},getTransfer:function(o){return o===Tn?cr:fo[o].transfer}};function Ss(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function kr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ji;class kh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=oo("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ss(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ss(e[n]/255)*255):e[n]=Ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qd=0;class Oh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Ln(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Or(i[r].image)):s.push(Or(i[r]))}else s=Or(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Or(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?kh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yd=0;class He extends Us{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=De,i=De,s=Le,r=vi,a=un,l=xi,c=He.DEFAULT_ANISOTROPY,d=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Ln(),this.name="",this.source=new Oh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Xi?oe:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dn:t.x=t.x-Math.floor(t.x);break;case De:t.x=t.x<0?0:1;break;case lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dn:t.y=t.y-Math.floor(t.y);break;case De:t.y=t.y<0?0:1;break;case lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===oe?Xi:Uh}set encoding(t){eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Xi?oe:Tn}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Th;He.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,i=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(f+1)/2,C=(p+1)/2,R=(d+u)/4,S=(h+_)/4,N=(m+g)/4;return y>b&&y>C?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=R/n,s=S/n):b>C?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=R/i,s=N/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=S/s,i=N/s),this.set(n,i,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(u-d)/x,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kd extends Us{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(eo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xi?oe:Tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Oh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Kd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hh extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=De,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jd extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=De,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=s[r+0],f=s[r+1],m=s[r+2],_=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==u||c!==f||d!==m){let g=1-a;const p=l*u+c*f+d*m+h*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),R=Math.atan2(C,p*x);g=Math.sin(g*R)/C,a=Math.sin(a*R)/C}const b=a*x;if(l=l*g+u*b,c=c*g+f*b,d=d*g+m*b,h=h*g+_*b,g===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=s[r],u=s[r+1],f=s[r+2],m=s[r+3];return t[e]=a*m+d*h+l*f-c*u,t[e+1]=l*m+d*u+c*h-a*f,t[e+2]=c*m+d*f+a*u-l*h,t[e+3]=d*m-a*h-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(r){case"XYZ":this._x=u*d*h+c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h-u*f*m;break;case"YXZ":this._x=u*d*h+c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h+u*f*m;break;case"ZXY":this._x=u*d*h-c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h-u*f*m;break;case"ZYX":this._x=u*d*h-c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h+u*f*m;break;case"YZX":this._x=u*d*h+c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h-u*f*m;break;case"XZY":this._x=u*d*h-c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=n+a+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+r*a+i*c-s*l,this._y=i*d+r*l+s*a-n*c,this._z=s*d+r*c+n*l-i*a,this._w=r*d-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),d=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+l*c+r*h-a*d,this.y=n+l*d+a*c-s*h,this.z=i+l*h+s*d-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new L,tc=new hn;class xn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Rn):Rn.fromBufferAttribute(s,r),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),mo.subVectors(this.max,Bs),Qi.subVectors(t.a,Bs),ts.subVectors(t.b,Bs),es.subVectors(t.c,Bs),ei.subVectors(ts,Qi),ni.subVectors(es,ts),Ai.subVectors(Qi,es);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Ai.z,Ai.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Ai.z,0,-Ai.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Ai.y,Ai.x,0];return!Br(e,Qi,ts,es,mo)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,Qi,ts,es,mo))?!1:(go.crossVectors(ei,ni),e=[go.x,go.y,go.z],Br(e,Qi,ts,es,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wn=[new L,new L,new L,new L,new L,new L,new L,new L],Rn=new L,po=new xn,Qi=new L,ts=new L,es=new L,ei=new L,ni=new L,Ai=new L,Bs=new L,mo=new L,go=new L,Ri=new L;function Br(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Ri.fromArray(o,s);const a=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),d=n.dot(Ri);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const $d=new xn,zs=new L,zr=new L;class Hn{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(zr)),this.expandByPoint(zs.copy(t.center).sub(zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new L,Gr=new L,_o=new L,ii=new L,Wr=new L,xo=new L,Vr=new L;class vr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Gr.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Gr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(_o),a=ii.dot(this.direction),l=-ii.dot(_o),c=ii.lengthSq(),d=Math.abs(1-r*r);let h,u,f,m;if(d>0)if(h=r*l-a,u=r*a-l,m=s*d,h>=0)if(u>=-m)if(u<=m){const _=1/d;h*=_,u*=_,f=h*(h+r*u+2*a)+u*(r*h+u+2*l)+c}else u=s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-m?(h=Math.max(0,-(-r*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c):u<=m?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(h=Math.max(0,-(r*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c);else u=r>0?-s:s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Gr).addScaledVector(_o,u),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,r=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,r=(t.min.y-u.y)*d),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,s){Wr.subVectors(e,t),xo.subVectors(n,t),Vr.crossVectors(Wr,xo);let r=this.direction.dot(Vr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ii.subVectors(this.origin,t);const l=a*this.direction.dot(xo.crossVectors(ii,xo));if(l<0)return null;const c=a*this.direction.dot(Wr.cross(ii));if(c<0||l+c>r)return null;const d=-a*ii.dot(Vr);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,s,r,a,l,c,d,h,u,f,m,_,g){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c,d,h,u,f,m,_,g)}set(t,e,n,i,s,r,a,l,c,d,h,u,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),r=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=r*d,f=r*h,m=a*d,_=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*d,f=l*h,m=c*d,_=c*h;e[0]=u+_*a,e[4]=m*a-f,e[8]=r*c,e[1]=r*h,e[5]=r*d,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*d,f=l*h,m=c*d,_=c*h;e[0]=u-_*a,e[4]=-r*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*d,e[9]=_-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*d,f=r*h,m=a*d,_=a*h;e[0]=l*d,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*h,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,m=a*l,_=a*c;e[0]=l*d,e[4]=_-u*h,e[8]=m*h+f,e[1]=h,e[5]=r*d,e[9]=-a*d,e[2]=-c*d,e[6]=f*h+m,e[10]=u-_*h}else if(t.order==="XZY"){const u=r*l,f=r*c,m=a*l,_=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+_,e[5]=r*d,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*d,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,Jd)}lookAt(t,e,n){const i=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),si.crossVectors(n,gn),si.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),si.crossVectors(n,gn)),si.normalize(),yo.crossVectors(gn,si),i[0]=si.x,i[4]=yo.x,i[8]=gn.x,i[1]=si.y,i[5]=yo.y,i[9]=gn.y,i[2]=si.z,i[6]=yo.z,i[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],y=n[7],b=n[11],C=n[15],R=i[0],S=i[4],N=i[8],M=i[12],A=i[1],U=i[5],D=i[9],q=i[13],I=i[2],k=i[6],V=i[10],Q=i[14],K=i[3],J=i[7],et=i[11],ct=i[15];return s[0]=r*R+a*A+l*I+c*K,s[4]=r*S+a*U+l*k+c*J,s[8]=r*N+a*D+l*V+c*et,s[12]=r*M+a*q+l*Q+c*ct,s[1]=d*R+h*A+u*I+f*K,s[5]=d*S+h*U+u*k+f*J,s[9]=d*N+h*D+u*V+f*et,s[13]=d*M+h*q+u*Q+f*ct,s[2]=m*R+_*A+g*I+p*K,s[6]=m*S+_*U+g*k+p*J,s[10]=m*N+_*D+g*V+p*et,s[14]=m*M+_*q+g*Q+p*ct,s[3]=x*R+y*A+b*I+C*K,s[7]=x*S+y*U+b*k+C*J,s[11]=x*N+y*D+b*V+C*et,s[15]=x*M+y*q+b*Q+C*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+s*l*h-i*c*h-s*a*u+n*c*u+i*a*f-n*l*f)+_*(+e*l*f-e*c*u+s*r*u-i*r*f+i*c*d-s*l*d)+g*(+e*c*h-e*a*f-s*r*h+n*r*f+s*a*d-n*c*d)+p*(-i*a*d-e*l*h+e*a*u+i*r*h-n*r*u+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],x=h*g*c-_*u*c+_*l*f-a*g*f-h*l*p+a*u*p,y=m*u*c-d*g*c-m*l*f+r*g*f+d*l*p-r*u*p,b=d*_*c-m*h*c+m*a*f-r*_*f-d*a*p+r*h*p,C=m*h*l-d*_*l-m*a*u+r*_*u+d*a*g-r*h*g,R=e*x+n*y+i*b+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/R;return t[0]=x*S,t[1]=(_*u*s-h*g*s-_*i*f+n*g*f+h*i*p-n*u*p)*S,t[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*S,t[3]=(h*l*s-a*u*s-h*i*c+n*u*c+a*i*f-n*l*f)*S,t[4]=y*S,t[5]=(d*g*s-m*u*s+m*i*f-e*g*f-d*i*p+e*u*p)*S,t[6]=(m*l*s-r*g*s-m*i*c+e*g*c+r*i*p-e*l*p)*S,t[7]=(r*u*s-d*l*s+d*i*c-e*u*c-r*i*f+e*l*f)*S,t[8]=b*S,t[9]=(m*h*s-d*_*s-m*n*f+e*_*f+d*n*p-e*h*p)*S,t[10]=(r*_*s-m*a*s+m*n*c-e*_*c-r*n*p+e*a*p)*S,t[11]=(d*a*s-r*h*s-d*n*c+e*h*c+r*n*f-e*a*f)*S,t[12]=C*S,t[13]=(d*_*i-m*h*i+m*n*u-e*_*u-d*n*g+e*h*g)*S,t[14]=(m*a*i-r*_*i-m*n*l+e*_*l+r*n*g-e*a*g)*S,t[15]=(r*h*i-d*a*i+d*n*l-e*h*l-r*n*u+e*a*u)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,c=s*r,d=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*r,0,c*l-i*a,d*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,d=r+r,h=a+a,u=s*c,f=s*d,m=s*h,_=r*d,g=r*h,p=a*h,x=l*c,y=l*d,b=l*h,C=n.x,R=n.y,S=n.z;return i[0]=(1-(_+p))*C,i[1]=(f+b)*C,i[2]=(m-y)*C,i[3]=0,i[4]=(f-b)*R,i[5]=(1-(u+p))*R,i[6]=(g+x)*R,i[7]=0,i[8]=(m+y)*S,i[9]=(g-x)*S,i[10]=(1-(u+_))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ns.set(i[0],i[1],i[2]).length();const r=ns.set(i[4],i[5],i[6]).length(),a=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Cn.copy(this);const c=1/s,d=1/r,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=d,Cn.elements[5]*=d,Cn.elements[6]*=d,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,e.setFromRotationMatrix(Cn),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=Zn){const l=this.elements,c=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i);let f,m;if(a===Zn)f=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(a===dr)f=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=Zn){const l=this.elements,c=1/(e-t),d=1/(n-i),h=1/(r-s),u=(e+t)*c,f=(n+i)*d;let m,_;if(a===Zn)m=(r+s)*h,_=-2*h;else if(a===dr)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ns=new L,Cn=new ne,Zd=new L(0,0,0),Jd=new L(1,1,1),si=new L,yo=new L,gn=new L,ec=new ne,nc=new hn;class Mr{constructor(t=0,e=0,n=0,i=Mr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nc.setFromEuler(this),this.setFromQuaternion(nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mr.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qd=0;const ic=new L,is=new hn,Xn=new ne,vo=new L,Gs=new L,tf=new L,ef=new hn,sc=new L(1,0,0),oc=new L(0,1,0),rc=new L(0,0,1),nf={type:"added"},sf={type:"removed"};class be extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new L,e=new Mr,n=new hn,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new se}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(sc,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return ic.copy(t).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sc,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vo.copy(t):vo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Gs,vo,this.up):Xn.lookAt(vo,Gs,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Xn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(nf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),d=r(t.images),h=r(t.shapes),u=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}be.DEFAULT_UP=new L(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new L,qn=new L,Xr=new L,Yn=new L,ss=new L,os=new L,ac=new L,qr=new L,Yr=new L,Kr=new L;let Mo=!1;class Sn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Pn.subVectors(t,e),i.cross(Pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Pn.subVectors(i,e),qn.subVectors(n,e),Xr.subVectors(t,e);const r=Pn.dot(Pn),a=Pn.dot(qn),l=Pn.dot(Xr),c=qn.dot(qn),d=qn.dot(Xr),h=r*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(c*l-a*d)*u,m=(r*d-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(t,e,n,i,s,r,a,l){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),this.getInterpolation(t,e,n,i,s,r,a,l)}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(r,Yn.y),l.addScaledVector(a,Yn.z),l)}static isFrontFacing(t,e,n,i){return Pn.subVectors(n,e),qn.subVectors(t,e),Pn.cross(qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Pn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;ss.subVectors(i,n),os.subVectors(s,n),qr.subVectors(t,n);const l=ss.dot(qr),c=os.dot(qr);if(l<=0&&c<=0)return e.copy(n);Yr.subVectors(t,i);const d=ss.dot(Yr),h=os.dot(Yr);if(d>=0&&h<=d)return e.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),e.copy(n).addScaledVector(ss,r);Kr.subVectors(t,s);const f=ss.dot(Kr),m=os.dot(Kr);if(m>=0&&f<=m)return e.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(os,a);const g=d*m-f*h;if(g<=0&&h-d>=0&&f-m>=0)return ac.subVectors(s,i),a=(h-d)/(h-d+(f-m)),e.copy(i).addScaledVector(ac,a);const p=1/(g+_+u);return r=_*p,a=u*p,e.copy(n).addScaledVector(ss,r).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},bo={h:0,s:0,l:0};function jr(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=Qa(t,1),e=tn(e,0,1),n=tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=jr(r,s,t+1/3),this.g=jr(r,s,t),this.b=jr(r,s,t-1/3)}return ce.toWorkingColorSpace(this,i),this}setStyle(t,e=oe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oe){const n=zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oe){return ce.fromWorkingColorSpace(Je.copy(this),t),Math.round(tn(Je.r*255,0,255))*65536+Math.round(tn(Je.g*255,0,255))*256+Math.round(tn(Je.b*255,0,255))}getHexString(t=oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Je.copy(this),e);const n=Je.r,i=Je.g,s=Je.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const d=(a+r)/2;if(a===r)l=0,c=0;else{const h=r-a;switch(c=d<=.5?h/(r+a):h/(2-r-a),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=oe){ce.fromWorkingColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,i=Je.b;return t!==oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(bo);const n=to(oi.h,bo.h,e),i=to(oi.s,bo.s,e),s=to(oi.l,bo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new bt;bt.NAMES=zh;let of=0;class En extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=_i,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Da,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Me extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new L,So=new Yt;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oa&&(t.usage=this.usage),t}}class Gh extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wh extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rf=0;const Mn=new ne,$r=new be,rs=new L,_n=new xn,Ws=new xn,Xe=new L;class Ue extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?Wh:Gh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new se().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(_n.min,Ws.min),_n.expandByPoint(Xe),Xe.addVectors(_n.max,Ws.max),_n.expandByPoint(Xe)):(_n.expandByPoint(Ws.min),_n.expandByPoint(Ws.max))}_n.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Xe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Xe));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Xe.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(t,c),Xe.add(rs)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let A=0;A<a;A++)c[A]=new L,d[A]=new L;const h=new L,u=new L,f=new L,m=new Yt,_=new Yt,g=new Yt,p=new L,x=new L;function y(A,U,D){h.fromArray(i,A*3),u.fromArray(i,U*3),f.fromArray(i,D*3),m.fromArray(r,A*2),_.fromArray(r,U*2),g.fromArray(r,D*2),u.sub(h),f.sub(h),_.sub(m),g.sub(m);const q=1/(_.x*g.y-g.x*_.y);isFinite(q)&&(p.copy(u).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(q),x.copy(f).multiplyScalar(_.x).addScaledVector(u,-g.x).multiplyScalar(q),c[A].add(p),c[U].add(p),c[D].add(p),d[A].add(x),d[U].add(x),d[D].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let A=0,U=b.length;A<U;++A){const D=b[A],q=D.start,I=D.count;for(let k=q,V=q+I;k<V;k+=3)y(n[k+0],n[k+1],n[k+2])}const C=new L,R=new L,S=new L,N=new L;function M(A){S.fromArray(s,A*3),N.copy(S);const U=c[A];C.copy(U),C.sub(S.multiplyScalar(S.dot(U))).normalize(),R.crossVectors(N,U);const q=R.dot(d[A])<0?-1:1;l[A*4]=C.x,l[A*4+1]=C.y,l[A*4+2]=C.z,l[A*4+3]=q}for(let A=0,U=b.length;A<U;++A){const D=b[A],q=D.start,I=D.count;for(let k=q,V=q+I;k<V;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new L,s=new L,r=new L,a=new L,l=new L,c=new L,d=new L,h=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),d.subVectors(r,s),h.subVectors(i,s),d.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),d.subVectors(r,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*d;for(let p=0;p<d;p++)u[m++]=c[f++]}return new Ce(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(t.data))}d.length>0&&(i[l]=d,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,d=r.length;c<d;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new ne,Ci=new vr,To=new Hn,cc=new L,as=new L,ls=new L,cs=new L,Zr=new L,Eo=new L,wo=new Yt,Ao=new Yt,Ro=new Yt,hc=new L,uc=new L,dc=new L,Co=new L,Po=new L;class dt extends be{constructor(t=new Ue,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Zr.fromBufferAttribute(h,t),r?Eo.addScaledVector(Zr,d):Eo.addScaledVector(Zr.sub(e),d))}e.add(Eo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),Ci.copy(t.ray).recast(t.near),!(To.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(To,cc)===null||Ci.origin.distanceToSquared(cc)>(t.far-t.near)**2))&&(lc.copy(s).invert(),Ci.copy(t.ray).applyMatrix4(lc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=x,C=y;b<C;b+=3){const R=a.getX(b),S=a.getX(b+1),N=a.getX(b+2);i=Lo(this,p,t,n,c,d,h,R,S,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);i=Lo(this,r,t,n,c,d,h,x,y,b),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=x,C=y;b<C;b+=3){const R=b,S=b+1,N=b+2;i=Lo(this,p,t,n,c,d,h,R,S,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,y=g+1,b=g+2;i=Lo(this,r,t,n,c,d,h,x,y,b),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function af(o,t,e,n,i,s,r,a){let l;if(t.side===ln?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===In,a),l===null)return null;Po.copy(a),Po.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(Po);return c<e.near||c>e.far?null:{distance:c,point:Po.clone(),object:o}}function Lo(o,t,e,n,i,s,r,a,l,c){o.getVertexPosition(a,as),o.getVertexPosition(l,ls),o.getVertexPosition(c,cs);const d=af(o,t,e,n,as,ls,cs,Co);if(d){i&&(wo.fromBufferAttribute(i,a),Ao.fromBufferAttribute(i,l),Ro.fromBufferAttribute(i,c),d.uv=Sn.getInterpolation(Co,as,ls,cs,wo,Ao,Ro,new Yt)),s&&(wo.fromBufferAttribute(s,a),Ao.fromBufferAttribute(s,l),Ro.fromBufferAttribute(s,c),d.uv1=Sn.getInterpolation(Co,as,ls,cs,wo,Ao,Ro,new Yt),d.uv2=d.uv1),r&&(hc.fromBufferAttribute(r,a),uc.fromBufferAttribute(r,l),dc.fromBufferAttribute(r,c),d.normal=Sn.getInterpolation(Co,as,ls,cs,hc,uc,dc,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};Sn.getNormal(as,ls,cs,h.normal),d.face=h}return d}class bi extends Ue{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],h=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(h,2));function m(_,g,p,x,y,b,C,R,S,N,M){const A=b/S,U=C/N,D=b/2,q=C/2,I=R/2,k=S+1,V=N+1;let Q=0,K=0;const J=new L;for(let et=0;et<V;et++){const ct=et*U-q;for(let ht=0;ht<k;ht++){const X=ht*A-D;J[_]=X*x,J[g]=ct*y,J[p]=I,c.push(J.x,J.y,J.z),J[_]=0,J[g]=0,J[p]=R>0?1:-1,d.push(J.x,J.y,J.z),h.push(ht/S),h.push(1-et/N),Q+=1}}for(let et=0;et<N;et++)for(let ct=0;ct<S;ct++){const ht=u+ct+k*et,X=u+ct+k*(et+1),tt=u+(ct+1)+k*(et+1),pt=u+(ct+1)+k*et;l.push(ht,X,pt),l.push(X,tt,pt),K+=6}a.addGroup(f,K,M),f+=K,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function rn(o){const t={};for(let e=0;e<o.length;e++){const n=Ls(o[e]);for(const i in n)t[i]=n[i]}return t}function lf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Vh(o){return o.getRenderTarget()===null?o.outputColorSpace:ce.workingColorSpace}const cf={clone:Ls,merge:rn};var hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xh extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Xh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,us=1;class df extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(hs,us,t,e);i.layers=this.layers,this.add(i);const s=new en(hs,us,t,e);s.layers=this.layers,this.add(s);const r=new en(hs,us,t,e);r.layers=this.layers,this.add(r);const a=new en(hs,us,t,e);a.layers=this.layers,this.add(a);const l=new en(hs,us,t,e);l.layers=this.layers,this.add(l);const c=new en(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,l]=e;for(const c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(h,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class qh extends He{constructor(t,e,n,i,s,r,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,i,s,r,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ff extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(eo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Xi?oe:Tn),this.texture=new qh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bi(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:gi});s.uniforms.tEquirect.value=e;const r=new dt(i,s),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=Le),new df(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const Jr=new L,pf=new L,mf=new se;class Oi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Jr.subVectors(n,e).cross(pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mf.getNormalMatrix(t),i=this.coplanarPoint(Jr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Hn,Io=new L;class tl{constructor(t=new Oi,e=new Oi,n=new Oi,i=new Oi,s=new Oi,r=new Oi){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){const n=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],y=i[14],b=i[15];if(n[0].setComponents(l-s,u-c,g-f,b-p).normalize(),n[1].setComponents(l+s,u+c,g+f,b+p).normalize(),n[2].setComponents(l+r,u+d,g+m,b+x).normalize(),n[3].setComponents(l-r,u-d,g-m,b-x).normalize(),n[4].setComponents(l-a,u-h,g-_,b-y).normalize(),e===Zn)n[5].setComponents(l+a,u+h,g+_,b+y).normalize();else if(e===dr)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Io.x=i.normal.x>0?t.max.x:t.min.x,Io.y=i.normal.y>0?t.max.y:t.min.y,Io.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yh(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function gf(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,d){const h=c.array,u=c.usage,f=h.byteLength,m=o.createBuffer();o.bindBuffer(d,m),o.bufferData(d,h,u),c.onUploadCallback();let _;if(h instanceof Float32Array)_=o.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=o.SHORT;else if(h instanceof Uint32Array)_=o.UNSIGNED_INT;else if(h instanceof Int32Array)_=o.INT;else if(h instanceof Int8Array)_=o.BYTE;else if(h instanceof Uint8Array)_=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,d,h){const u=d.array,f=d._updateRange,m=d.updateRanges;if(o.bindBuffer(h,c),f.count===-1&&m.length===0&&o.bufferSubData(h,0,u),m.length!==0){for(let _=0,g=m.length;_<g;_++){const p=m[_];e?o.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):o.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}f.count!==-1&&(e?o.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):o.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(o.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:r,remove:a,update:l}}class el extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=t/a,u=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<d;p++){const x=p*u-r;for(let y=0;y<c;y++){const b=y*h-s;m.push(b,-x,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,b=x+c*(p+1),C=x+1+c*(p+1),R=x+1+c*p;f.push(y,b,R),f.push(b,C,R)}this.setIndex(f),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.widthSegments,t.heightSegments)}}var _f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
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
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
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
#endif`,Lf=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bf=`#define PI 3.141592653589793
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
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gf=`vec3 transformedNormal = objectNormal;
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
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`
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
}`,jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
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
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
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
#endif`,gp=`struct PhysicalMaterial {
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
}`,_p=`
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
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
}`,Sm=`#if DEPTH_PACKING == 3200
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
}`,Tm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Dm=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Bm=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,Gm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Vm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:_f,alphahash_pars_fragment:xf,alphamap_fragment:yf,alphamap_pars_fragment:vf,alphatest_fragment:Mf,alphatest_pars_fragment:bf,aomap_fragment:Sf,aomap_pars_fragment:Tf,batching_pars_vertex:Ef,batching_vertex:wf,begin_vertex:Af,beginnormal_vertex:Rf,bsdfs:Cf,iridescence_fragment:Pf,bumpmap_pars_fragment:Lf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:Nf,color_fragment:Ff,color_pars_fragment:kf,color_pars_vertex:Of,color_vertex:Hf,common:Bf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Wf,displacementmap_vertex:Vf,emissivemap_fragment:Xf,emissivemap_pars_fragment:qf,colorspace_fragment:Yf,colorspace_pars_fragment:Kf,envmap_fragment:jf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Zf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:hp,envmap_vertex:Qf,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_fragment:op,lightmap_pars_fragment:rp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:lp,lights_pars_begin:cp,lights_toon_fragment:up,lights_toon_pars_fragment:dp,lights_phong_fragment:fp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:_p,lights_fragment_maps:xp,lights_fragment_end:yp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:Sp,map_fragment:Tp,map_pars_fragment:Ep,map_particle_fragment:wp,map_particle_pars_fragment:Ap,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphcolor_vertex:Pp,morphnormal_vertex:Lp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Dp,normal_fragment_begin:Up,normal_fragment_maps:Np,normal_pars_fragment:Fp,normal_pars_vertex:kp,normal_vertex:Op,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:Gp,iridescence_pars_fragment:Wp,opaque_fragment:Vp,packing:Xp,premultiplied_alpha_fragment:qp,project_vertex:Yp,dithering_fragment:Kp,dithering_pars_fragment:jp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:om,specularmap_fragment:rm,specularmap_pars_fragment:am,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:fm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:_m,backgroundCube_vert:xm,backgroundCube_frag:ym,cube_vert:vm,cube_frag:Mm,depth_vert:bm,depth_frag:Sm,distanceRGBA_vert:Tm,distanceRGBA_frag:Em,equirect_vert:wm,equirect_frag:Am,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Pm,meshbasic_frag:Lm,meshlambert_vert:Im,meshlambert_frag:Dm,meshmatcap_vert:Um,meshmatcap_frag:Nm,meshnormal_vert:Fm,meshnormal_frag:km,meshphong_vert:Om,meshphong_frag:Hm,meshphysical_vert:Bm,meshphysical_frag:zm,meshtoon_vert:Gm,meshtoon_frag:Wm,points_vert:Vm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:Km,sprite_frag:jm},mt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},kn={basic:{uniforms:rn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:rn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new bt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:rn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:rn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:rn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new bt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:rn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:rn([mt.points,mt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:rn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:rn([mt.common,mt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:rn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:rn([mt.sprite,mt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:rn([mt.common,mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:rn([mt.lights,mt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};kn.physical={uniforms:rn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Do={r:0,b:0,g:0};function $m(o,t,e,n,i,s,r){const a=new bt(0);let l=s===!0?0:1,c,d,h=null,u=0,f=null;function m(g,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),x=!0);const b=o.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===xr)?(d===void 0&&(d=new dt(new bi(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ls(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,R,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=ce.getTransfer(y.colorSpace)!==ve,(h!==y||u!==y.version||f!==o.toneMapping)&&(d.material.needsUpdate=!0,h=y,u=y.version,f=o.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new dt(new el(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ls(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ce.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=o.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB(Do,Vh(o)),n.buffers.color.setClear(Do.r,Do.g,Do.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:m}}function Zm(o,t,e,n){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=g(null);let c=l,d=!1;function h(I,k,V,Q,K){let J=!1;if(r){const et=_(Q,V,k);c!==et&&(c=et,f(c.object)),J=p(I,Q,V,K),J&&x(I,Q,V,K)}else{const et=k.wireframe===!0;(c.geometry!==Q.id||c.program!==V.id||c.wireframe!==et)&&(c.geometry=Q.id,c.program=V.id,c.wireframe=et,J=!0)}K!==null&&e.update(K,o.ELEMENT_ARRAY_BUFFER),(J||d)&&(d=!1,N(I,k,V,Q),K!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function u(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?o.bindVertexArray(I):s.bindVertexArrayOES(I)}function m(I){return n.isWebGL2?o.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,k,V){const Q=V.wireframe===!0;let K=a[I.id];K===void 0&&(K={},a[I.id]=K);let J=K[k.id];J===void 0&&(J={},K[k.id]=J);let et=J[Q];return et===void 0&&(et=g(u()),J[Q]=et),et}function g(I){const k=[],V=[],Q=[];for(let K=0;K<i;K++)k[K]=0,V[K]=0,Q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:Q,object:I,attributes:{},index:null}}function p(I,k,V,Q){const K=c.attributes,J=k.attributes;let et=0;const ct=V.getAttributes();for(const ht in ct)if(ct[ht].location>=0){const tt=K[ht];let pt=J[ht];if(pt===void 0&&(ht==="instanceMatrix"&&I.instanceMatrix&&(pt=I.instanceMatrix),ht==="instanceColor"&&I.instanceColor&&(pt=I.instanceColor)),tt===void 0||tt.attribute!==pt||pt&&tt.data!==pt.data)return!0;et++}return c.attributesNum!==et||c.index!==Q}function x(I,k,V,Q){const K={},J=k.attributes;let et=0;const ct=V.getAttributes();for(const ht in ct)if(ct[ht].location>=0){let tt=J[ht];tt===void 0&&(ht==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),ht==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor));const pt={};pt.attribute=tt,tt&&tt.data&&(pt.data=tt.data),K[ht]=pt,et++}c.attributes=K,c.attributesNum=et,c.index=Q}function y(){const I=c.newAttributes;for(let k=0,V=I.length;k<V;k++)I[k]=0}function b(I){C(I,0)}function C(I,k){const V=c.newAttributes,Q=c.enabledAttributes,K=c.attributeDivisors;V[I]=1,Q[I]===0&&(o.enableVertexAttribArray(I),Q[I]=1),K[I]!==k&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),K[I]=k)}function R(){const I=c.newAttributes,k=c.enabledAttributes;for(let V=0,Q=k.length;V<Q;V++)k[V]!==I[V]&&(o.disableVertexAttribArray(V),k[V]=0)}function S(I,k,V,Q,K,J,et){et===!0?o.vertexAttribIPointer(I,k,V,K,J):o.vertexAttribPointer(I,k,V,Q,K,J)}function N(I,k,V,Q){if(n.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const K=Q.attributes,J=V.getAttributes(),et=k.defaultAttributeValues;for(const ct in J){const ht=J[ct];if(ht.location>=0){let X=K[ct];if(X===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const tt=X.normalized,pt=X.itemSize,vt=e.get(X);if(vt===void 0)continue;const St=vt.buffer,Nt=vt.type,Lt=vt.bytesPerElement,Rt=n.isWebGL2===!0&&(Nt===o.INT||Nt===o.UNSIGNED_INT||X.gpuType===wh);if(X.isInterleavedBufferAttribute){const Ft=X.data,z=Ft.stride,Ee=X.offset;if(Ft.isInstancedInterleavedBuffer){for(let It=0;It<ht.locationSize;It++)C(ht.location+It,Ft.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let It=0;It<ht.locationSize;It++)b(ht.location+It);o.bindBuffer(o.ARRAY_BUFFER,St);for(let It=0;It<ht.locationSize;It++)S(ht.location+It,pt/ht.locationSize,Nt,tt,z*Lt,(Ee+pt/ht.locationSize*It)*Lt,Rt)}else{if(X.isInstancedBufferAttribute){for(let Ft=0;Ft<ht.locationSize;Ft++)C(ht.location+Ft,X.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ft=0;Ft<ht.locationSize;Ft++)b(ht.location+Ft);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Ft=0;Ft<ht.locationSize;Ft++)S(ht.location+Ft,pt/ht.locationSize,Nt,tt,pt*Lt,pt/ht.locationSize*Ft*Lt,Rt)}}else if(et!==void 0){const tt=et[ct];if(tt!==void 0)switch(tt.length){case 2:o.vertexAttrib2fv(ht.location,tt);break;case 3:o.vertexAttrib3fv(ht.location,tt);break;case 4:o.vertexAttrib4fv(ht.location,tt);break;default:o.vertexAttrib1fv(ht.location,tt)}}}}R()}function M(){D();for(const I in a){const k=a[I];for(const V in k){const Q=k[V];for(const K in Q)m(Q[K].object),delete Q[K];delete k[V]}delete a[I]}}function A(I){if(a[I.id]===void 0)return;const k=a[I.id];for(const V in k){const Q=k[V];for(const K in Q)m(Q[K].object),delete Q[K];delete k[V]}delete a[I.id]}function U(I){for(const k in a){const V=a[k];if(V[I.id]===void 0)continue;const Q=V[I.id];for(const K in Q)m(Q[K].object),delete Q[K];delete V[I.id]}}function D(){q(),d=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:D,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:b,disableUnusedAttributes:R}}function Jm(o,t,e,n){const i=n.isWebGL2;let s;function r(d){s=d}function a(d,h){o.drawArrays(s,d,h),e.update(h,s,1)}function l(d,h,u){if(u===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,d,h,u),e.update(h,s,u)}function c(d,h,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u;m++)this.render(d[m],h[m]);else{f.multiDrawArraysWEBGL(s,d,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];e.update(m,s,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Qm(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,h=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),u=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),g=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),p=o.getParameter(o.MAX_VARYING_VECTORS),x=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,b=r||t.has("OES_texture_float"),C=y&&b,R=r?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:R}}function t0(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Oi,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=o.get(h);if(!i||m===null||m.length===0||s&&!g)s?d(null):c();else{const x=s?0:n,y=x*4;let b=p.clippingState||null;l.value=b,b=d(m,u,y,f);for(let C=0;C!==y;++C)b[C]=e[C];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,b=f;y!==_;++y,b+=4)r.copy(h[y]).applyMatrix4(x,a),r.normal.toArray(g,b),g[b+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function e0(o){let t=new WeakMap;function e(r,a){return a===Ua?r.mapping=ws:a===Na&&(r.mapping=As),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ua||a===Na)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new ff(l.height/2);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class nl extends Xh{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ms=4,fc=[.125,.215,.35,.446,.526,.582],zi=20,Qr=new nl,pc=new bt;let ta=null,ea=0,na=0;const Hi=(1+Math.sqrt(5))/2,ds=1/Hi,mc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Hi,ds),new L(0,Hi,-ds),new L(ds,0,Hi),new L(-ds,0,Hi),new L(Hi,ds,0),new L(-Hi,ds,0)];class gc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:io,format:un,colorSpace:Te,depthBuffer:!1},i=_c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n0(s)),this._blurMaterial=i0(s,t,e)}return i}_compileMaterial(t){const e=new dt(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,i){const a=new en(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(pc),d.toneMapping=Jn,d.autoClear=!1;const f=new Me({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),m=new dt(new bi,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(pc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Uo(i,x*y,p>2?y:0,y,y),d.setRenderTarget(i),_&&d.render(m,a),d.render(t,a)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ws||t.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Uo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=mc[(i-1)%mc.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new dt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=s/m,g=isFinite(s)?1+Math.floor(d*_):zi;g>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);const p=[];let x=0;for(let S=0;S<zi;++S){const N=S/_,M=Math.exp(-N*N/2);p.push(M),S===0?x+=M:S<g&&(x+=2*M)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;const b=this._sizeLods[i],C=3*b*(i>y-Ms?i-y+Ms:0),R=4*(this._cubeSize-b);Uo(e,C,R,3*b,2*b),l.setRenderTarget(e),l.render(h,Qr)}}function n0(o){const t=[],e=[],n=[];let i=o;const s=o-Ms+1+fc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>o-Ms?l=fc[r-o+Ms-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),y=new Float32Array(g*m*f),b=new Float32Array(p*m*f);for(let R=0;R<f;R++){const S=R%3*2/3-1,N=R>2?0:-1,M=[S,N,0,S+2/3,N,0,S+2/3,N+1,0,S,N,0,S+2/3,N+1,0,S,N+1,0];x.set(M,_*m*R),y.set(u,g*m*R);const A=[R,R,R,R,R,R];b.set(A,p*m*R)}const C=new Ue;C.setAttribute("position",new Ce(x,_)),C.setAttribute("uv",new Ce(y,g)),C.setAttribute("faceIndex",new Ce(b,p)),t.push(C),i>Ms&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _c(o,t,e){const n=new qi(o,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function i0(o,t,e){const n=new Float32Array(zi),i=new L(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:il(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function xc(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function yc(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function s0(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ua||l===Na,d=l===ws||l===As;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new gc(o)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&i(h)){e===null&&(e=new gc(o));const u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function o0(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function r0(o,t,e,n){const i={},s=new WeakMap;function r(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}u.removeEventListener("dispose",r),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)t.update(u[m],o.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],o.ARRAY_BUFFER)}}function c(h){const u=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,b=x.length;y<b;y+=3){const C=x[y+0],R=x[y+1],S=x[y+2];u.push(C,R,R,S,S,C)}}else if(m!==void 0){const x=m.array;_=m.version;for(let y=0,b=x.length/3-1;y<b;y+=3){const C=y+0,R=y+1,S=y+2;u.push(C,R,R,S,S,C)}}else return;const g=new(Fh(u)?Wh:Gh)(u,1);g.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,g)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function a0(o,t,e,n){const i=n.isWebGL2;let s;function r(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function d(f,m){o.drawElements(s,m,a,f*l),e.update(m,s,1)}function h(f,m,_){if(_===0)return;let g,p;if(i)g=o,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,a,f*l,_),e.update(m,s,_)}function u(f,m,_){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(f[p]/l,m[p]);else{g.multiDrawElementsWEBGL(s,m,0,a,f,0,_);let p=0;for(let x=0;x<_;x++)p+=m[x];e.update(p,s,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=u}function l0(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function c0(o,t){return o[0]-t[0]}function h0(o,t){return Math.abs(t[1])-Math.abs(o[1])}function u0(o,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new _e,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=m!==void 0?m.length:0;let g=s.get(d);if(g===void 0||g.count!==_){let k=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",k)};var f=k;g!==void 0&&g.texture.dispose();const y=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let M=0;y===!0&&(M=1),b===!0&&(M=2),C===!0&&(M=3);let A=d.attributes.position.count*M,U=1;A>t.maxTextureSize&&(U=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const D=new Float32Array(A*U*4*_),q=new Hh(D,A,U,_);q.type=$n,q.needsUpdate=!0;const I=M*4;for(let V=0;V<_;V++){const Q=R[V],K=S[V],J=N[V],et=A*U*4*V;for(let ct=0;ct<Q.count;ct++){const ht=ct*I;y===!0&&(r.fromBufferAttribute(Q,ct),D[et+ht+0]=r.x,D[et+ht+1]=r.y,D[et+ht+2]=r.z,D[et+ht+3]=0),b===!0&&(r.fromBufferAttribute(K,ct),D[et+ht+4]=r.x,D[et+ht+5]=r.y,D[et+ht+6]=r.z,D[et+ht+7]=0),C===!0&&(r.fromBufferAttribute(J,ct),D[et+ht+8]=r.x,D[et+ht+9]=r.y,D[et+ht+10]=r.z,D[et+ht+11]=J.itemSize===4?r.w:1)}}g={count:_,texture:q,size:new Yt(A,U)},s.set(d,g),d.addEventListener("dispose",k)}let p=0;for(let y=0;y<u.length;y++)p+=u[y];const x=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(o,"morphTargetBaseInfluence",x),h.getUniforms().setValue(o,"morphTargetInfluences",u),h.getUniforms().setValue(o,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}else{const m=u===void 0?0:u.length;let _=n[d.id];if(_===void 0||_.length!==m){_=[];for(let b=0;b<m;b++)_[b]=[b,0];n[d.id]=_}for(let b=0;b<m;b++){const C=_[b];C[0]=b,C[1]=u[b]}_.sort(h0);for(let b=0;b<8;b++)b<m&&_[b][1]?(a[b][0]=_[b][0],a[b][1]=_[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(c0);const g=d.morphAttributes.position,p=d.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const C=a[b],R=C[0],S=C[1];R!==Number.MAX_SAFE_INTEGER&&S?(g&&d.getAttribute("morphTarget"+b)!==g[R]&&d.setAttribute("morphTarget"+b,g[R]),p&&d.getAttribute("morphNormal"+b)!==p[R]&&d.setAttribute("morphNormal"+b,p[R]),i[b]=S,x+=S):(g&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),p&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),i[b]=0)}const y=d.morphTargetsRelative?1:1-x;h.getUniforms().setValue(o,"morphTargetBaseInfluence",y),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function d0(o,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class Kh extends He{constructor(t,e,n,i,s,r,a,l,c,d){if(d=d!==void 0?d:Vi,d!==Vi&&d!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Vi&&(n=pi),n===void 0&&d===Rs&&(n=Wi),super(null,i,s,r,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const jh=new He,$h=new Kh(1,1);$h.compareFunction=Nh;const Zh=new Hh,Jh=new jd,Qh=new qh,vc=[],Mc=[],bc=new Float32Array(16),Sc=new Float32Array(9),Tc=new Float32Array(4);function Ns(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=vc[i];if(s===void 0&&(s=new Float32Array(i),vc[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function ze(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Ge(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function br(o,t){let e=Mc[t];e===void 0&&(e=new Int32Array(t),Mc[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function f0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function p0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2fv(this.addr,t),Ge(e,t)}}function m0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;o.uniform3fv(this.addr,t),Ge(e,t)}}function g0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4fv(this.addr,t),Ge(e,t)}}function _0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;Tc.set(n),o.uniformMatrix2fv(this.addr,!1,Tc),Ge(e,n)}}function x0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;Sc.set(n),o.uniformMatrix3fv(this.addr,!1,Sc),Ge(e,n)}}function y0(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;bc.set(n),o.uniformMatrix4fv(this.addr,!1,bc),Ge(e,n)}}function v0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function M0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2iv(this.addr,t),Ge(e,t)}}function b0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;o.uniform3iv(this.addr,t),Ge(e,t)}}function S0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4iv(this.addr,t),Ge(e,t)}}function T0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function E0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;o.uniform2uiv(this.addr,t),Ge(e,t)}}function w0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;o.uniform3uiv(this.addr,t),Ge(e,t)}}function A0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;o.uniform4uiv(this.addr,t),Ge(e,t)}}function R0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?$h:jh;e.setTexture2D(t||s,i)}function C0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Jh,i)}function P0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Qh,i)}function L0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Zh,i)}function I0(o){switch(o){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return x0;case 35676:return y0;case 5124:case 35670:return v0;case 35667:case 35671:return M0;case 35668:case 35672:return b0;case 35669:case 35673:return S0;case 5125:return T0;case 36294:return E0;case 36295:return w0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return L0}}function D0(o,t){o.uniform1fv(this.addr,t)}function U0(o,t){const e=Ns(t,this.size,2);o.uniform2fv(this.addr,e)}function N0(o,t){const e=Ns(t,this.size,3);o.uniform3fv(this.addr,e)}function F0(o,t){const e=Ns(t,this.size,4);o.uniform4fv(this.addr,e)}function k0(o,t){const e=Ns(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function O0(o,t){const e=Ns(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function H0(o,t){const e=Ns(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function B0(o,t){o.uniform1iv(this.addr,t)}function z0(o,t){o.uniform2iv(this.addr,t)}function G0(o,t){o.uniform3iv(this.addr,t)}function W0(o,t){o.uniform4iv(this.addr,t)}function V0(o,t){o.uniform1uiv(this.addr,t)}function X0(o,t){o.uniform2uiv(this.addr,t)}function q0(o,t){o.uniform3uiv(this.addr,t)}function Y0(o,t){o.uniform4uiv(this.addr,t)}function K0(o,t,e){const n=this.cache,i=t.length,s=br(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Ge(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||jh,s[r])}function j0(o,t,e){const n=this.cache,i=t.length,s=br(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Ge(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Jh,s[r])}function $0(o,t,e){const n=this.cache,i=t.length,s=br(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Ge(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Qh,s[r])}function Z0(o,t,e){const n=this.cache,i=t.length,s=br(e,i);ze(n,s)||(o.uniform1iv(this.addr,s),Ge(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Zh,s[r])}function J0(o){switch(o){case 5126:return D0;case 35664:return U0;case 35665:return N0;case 35666:return F0;case 35674:return k0;case 35675:return O0;case 35676:return H0;case 5124:case 35670:return B0;case 35667:case 35671:return z0;case 35668:case 35672:return G0;case 35669:case 35673:return W0;case 5125:return V0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return Z0}}class Q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=I0(e.type)}}class tg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J0(e.type)}}class eg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Ec(o,t){o.seq.push(t),o.map[t.id]=t}function ng(o,t,e){const n=o.name,i=n.length;for(ia.lastIndex=0;;){const s=ia.exec(n),r=ia.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Ec(e,c===void 0?new Q0(a,o,t):new tg(a,o,t));break}else{let h=e.map[a];h===void 0&&(h=new eg(a),Ec(e,h)),e=h}}}class ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);ng(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function wc(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const ig=37297;let sg=0;function og(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function rg(o){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(o);let n;switch(t===e?n="":t===ur&&e===hr?n="LinearDisplayP3ToLinearSRGB":t===hr&&e===ur&&(n="LinearSRGBToLinearDisplayP3"),o){case Te:case yr:return[n,"LinearTransferOETF"];case oe:case Ja:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function Ac(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+og(o.getShaderSource(t),r)}else return i}function ag(o,t){const e=rg(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lg(o,t){let e;switch(t){case nd:e="Linear";break;case id:e="Reinhard";break;case sd:e="OptimizedCineon";break;case od:e="ACESFilmic";break;case ad:e="AgX";break;case rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function hg(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function ug(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dg(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function bs(o){return o!==""}function Rc(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cc(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(o){return o.replace(fg,mg)}const pg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mg(o,t){let e=te[t];if(e===void 0){const n=pg.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return za(e)}const gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(o){return o.replace(gg,_g)}function _g(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Lc(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Sh?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Pu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function yg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ws:case As:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function Mg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ja:t="ENVMAP_BLENDING_MULTIPLY";break;case td:t="ENVMAP_BLENDING_MIX";break;case ed:t="ENVMAP_BLENDING_ADD";break}return t}function bg(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sg(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=xg(e),c=yg(e),d=vg(e),h=Mg(e),u=bg(e),f=e.isWebGL2?"":cg(e),m=hg(e),_=ug(s),g=i.createProgram();let p,x,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(bs).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(bs).join(`
`),x.length>0&&(x+=`
`)):(p=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),x=[f,Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?te.tonemapping_pars_fragment:"",e.toneMapping!==Jn?lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,ag("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),r=za(r),r=Rc(r,e),r=Cc(r,e),a=za(a),a=Rc(a,e),a=Cc(a,e),r=Pc(r),a=Pc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=y+p+r,C=y+x+a,R=wc(i,i.VERTEX_SHADER,b),S=wc(i,i.FRAGMENT_SHADER,C);i.attachShader(g,R),i.attachShader(g,S),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function N(D){if(o.debug.checkShaderErrors){const q=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(R).trim(),k=i.getShaderInfoLog(S).trim();let V=!0,Q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,R,S);else{const K=Ac(i,R,"vertex"),J=Ac(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+K+`
`+J)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(I===""||k==="")&&(Q=!1);Q&&(D.diagnostics={runnable:V,programLog:q,vertexShader:{log:I,prefix:p},fragmentShader:{log:k,prefix:x}})}i.deleteShader(R),i.deleteShader(S),M=new ir(i,g),A=dg(i,g)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(g,ig)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=S,this}let Tg=0;class Eg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wg(t),e.set(t,n)),n}}class wg{constructor(t){this.id=Tg++,this.code=t,this.usedTimes=0}}function Ag(o,t,e,n,i,s,r){const a=new Bh,l=new Eg,c=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function g(M,A,U,D,q){const I=D.fog,k=q.geometry,V=M.isMeshStandardMaterial?D.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),K=Q&&Q.mapping===xr?Q.image.height:null,J=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ct=et!==void 0?et.length:0;let ht=0;k.morphAttributes.position!==void 0&&(ht=1),k.morphAttributes.normal!==void 0&&(ht=2),k.morphAttributes.color!==void 0&&(ht=3);let X,tt,pt,vt;if(J){const Kt=kn[J];X=Kt.vertexShader,tt=Kt.fragmentShader}else X=M.vertexShader,tt=M.fragmentShader,l.update(M),pt=l.getVertexShaderID(M),vt=l.getFragmentShaderID(M);const St=o.getRenderTarget(),Nt=q.isInstancedMesh===!0,Lt=q.isBatchedMesh===!0,Rt=!!M.map,Ft=!!M.matcap,z=!!Q,Ee=!!M.aoMap,It=!!M.lightMap,Ot=!!M.bumpMap,Et=!!M.normalMap,de=!!M.displacementMap,G=!!M.emissiveMap,E=!!M.metalnessMap,v=!!M.roughnessMap,T=M.anisotropy>0,$=M.clearcoat>0,Y=M.iridescence>0,nt=M.sheen>0,xt=M.transmission>0,ft=T&&!!M.anisotropyMap,it=$&&!!M.clearcoatMap,Tt=$&&!!M.clearcoatNormalMap,Vt=$&&!!M.clearcoatRoughnessMap,j=Y&&!!M.iridescenceMap,Gt=Y&&!!M.iridescenceThicknessMap,Bt=nt&&!!M.sheenColorMap,At=nt&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,yt=!!M.specularColorMap,H=!!M.specularIntensityMap,ot=xt&&!!M.transmissionMap,at=xt&&!!M.thicknessMap,lt=!!M.gradientMap,Z=!!M.alphaMap,P=M.alphaTest>0,st=!!M.alphaHash,rt=!!M.extensions,Mt=!!k.attributes.uv1,gt=!!k.attributes.uv2,wt=!!k.attributes.uv3;let zt=Jn;return M.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(zt=o.toneMapping),{isWebGL2:d,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:tt,defines:M.defines,customVertexShaderID:pt,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Lt,instancing:Nt,instancingColor:Nt&&q.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Te,map:Rt,matcap:Ft,envMap:z,envMapMode:z&&Q.mapping,envMapCubeUVHeight:K,aoMap:Ee,lightMap:It,bumpMap:Ot,normalMap:Et,displacementMap:u&&de,emissiveMap:G,normalMapObjectSpace:Et&&M.normalMapType===Md,normalMapTangentSpace:Et&&M.normalMapType===Za,metalnessMap:E,roughnessMap:v,anisotropy:T,anisotropyMap:ft,clearcoat:$,clearcoatMap:it,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Vt,iridescence:Y,iridescenceMap:j,iridescenceThicknessMap:Gt,sheen:nt,sheenColorMap:Bt,sheenRoughnessMap:At,specularMap:Ct,specularColorMap:yt,specularIntensityMap:H,transmission:xt,transmissionMap:ot,thicknessMap:at,gradientMap:lt,opaque:M.transparent===!1&&M.blending===_i,alphaMap:Z,alphaTest:P,alphaHash:st,combine:M.combine,mapUv:Rt&&_(M.map.channel),aoMapUv:Ee&&_(M.aoMap.channel),lightMapUv:It&&_(M.lightMap.channel),bumpMapUv:Ot&&_(M.bumpMap.channel),normalMapUv:Et&&_(M.normalMap.channel),displacementMapUv:de&&_(M.displacementMap.channel),emissiveMapUv:G&&_(M.emissiveMap.channel),metalnessMapUv:E&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:ft&&_(M.anisotropyMap.channel),clearcoatMapUv:it&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(M.sheenRoughnessMap.channel),specularMapUv:Ct&&_(M.specularMap.channel),specularColorMapUv:yt&&_(M.specularColorMap.channel),specularIntensityMapUv:H&&_(M.specularIntensityMap.channel),transmissionMapUv:ot&&_(M.transmissionMap.channel),thicknessMapUv:at&&_(M.thicknessMap.channel),alphaMapUv:Z&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Et||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Mt,vertexUv2s:gt,vertexUv3s:wt,pointsUvs:q.isPoints===!0&&!!k.attributes.uv&&(Rt||Z),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:ht,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&U.length>0,shadowMapType:o.shadowMap.type,toneMapping:zt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Rt&&M.map.isVideoTexture===!0&&ce.getTransfer(M.map.colorSpace)===ve,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ie,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:rt&&M.extensions.derivatives===!0,extensionFragDepth:rt&&M.extensions.fragDepth===!0,extensionDrawBuffers:rt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)A.push(U),A.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(x(A,M),y(A,M),A.push(o.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function x(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function y(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const A=m[M.type];let U;if(A){const D=kn[A];U=cf.clone(D.uniforms)}else U=M.uniforms;return U}function C(M,A){let U;for(let D=0,q=c.length;D<q;D++){const I=c[D];if(I.cacheKey===A){U=I,++U.usedTimes;break}}return U===void 0&&(U=new Sg(o,A,M,s),c.push(U)),U}function R(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function S(M){l.remove(M)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:R,releaseShaderCache:S,programs:c,dispose:N}}function Rg(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Cg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ic(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Dc(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(h,u,f,m,_,g){let p=o[t];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},o[t]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,u,f,m,_,g){const p=r(h,u,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,u,f,m,_,g){const p=r(h,u,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,u){e.length>1&&e.sort(h||Cg),n.length>1&&n.sort(u||Ic),i.length>1&&i.sort(u||Ic)}function d(){for(let h=t,u=o.length;h<u;h++){const f=o[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:d,sort:c}}function Pg(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new Dc,o.set(n,[r])):i>=s.length?(r=new Dc,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function Lg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new bt};break;case"SpotLight":e={position:new L,direction:new L,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new L,halfWidth:new L,halfHeight:new L};break}return o[t.id]=e,e}}}function Ig(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Dg=0;function Ug(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Ng(o,t){const e=new Lg,n=Ig(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new L);const s=new L,r=new ne,a=new ne;function l(d,h){let u=0,f=0,m=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,g=0,p=0,x=0,y=0,b=0,C=0,R=0,S=0,N=0,M=0;d.sort(Ug);const A=h===!0?Math.PI:1;for(let D=0,q=d.length;D<q;D++){const I=d[D],k=I.color,V=I.intensity,Q=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=k.r*V*A,f+=k.g*V*A,m+=k.b*V*A;else if(I.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(I.sh.coefficients[J],V);M++}else if(I.isDirectionalLight){const J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity*A),I.castShadow){const et=I.shadow,ct=n.get(I);ct.shadowBias=et.bias,ct.shadowNormalBias=et.normalBias,ct.shadowRadius=et.radius,ct.shadowMapSize=et.mapSize,i.directionalShadow[_]=ct,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=I.shadow.matrix,b++}i.directional[_]=J,_++}else if(I.isSpotLight){const J=e.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(k).multiplyScalar(V*A),J.distance=Q,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,i.spot[p]=J;const et=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,et.updateMatrices(I),I.castShadow&&N++),i.spotLightMatrix[p]=et.matrix,I.castShadow){const ct=n.get(I);ct.shadowBias=et.bias,ct.shadowNormalBias=et.normalBias,ct.shadowRadius=et.radius,ct.shadowMapSize=et.mapSize,i.spotShadow[p]=ct,i.spotShadowMap[p]=K,R++}p++}else if(I.isRectAreaLight){const J=e.get(I);J.color.copy(k).multiplyScalar(V),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),i.rectArea[x]=J,x++}else if(I.isPointLight){const J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity*A),J.distance=I.distance,J.decay=I.decay,I.castShadow){const et=I.shadow,ct=n.get(I);ct.shadowBias=et.bias,ct.shadowNormalBias=et.normalBias,ct.shadowRadius=et.radius,ct.shadowMapSize=et.mapSize,ct.shadowCameraNear=et.camera.near,ct.shadowCameraFar=et.camera.far,i.pointShadow[g]=ct,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=I.shadow.matrix,C++}i.point[g]=J,g++}else if(I.isHemisphereLight){const J=e.get(I);J.skyColor.copy(I.color).multiplyScalar(V*A),J.groundColor.copy(I.groundColor).multiplyScalar(V*A),i.hemi[y]=J,y++}}x>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=m;const U=i.hash;(U.directionalLength!==_||U.pointLength!==g||U.spotLength!==p||U.rectAreaLength!==x||U.hemiLength!==y||U.numDirectionalShadows!==b||U.numPointShadows!==C||U.numSpotShadows!==R||U.numSpotMaps!==S||U.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=R+S-N,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=M,U.directionalLength=_,U.pointLength=g,U.spotLength=p,U.rectAreaLength=x,U.hemiLength=y,U.numDirectionalShadows=b,U.numPointShadows=C,U.numSpotShadows=R,U.numSpotMaps=S,U.numLightProbes=M,i.version=Dg++)}function c(d,h){let u=0,f=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let x=0,y=d.length;x<y;x++){const b=d[x];if(b.isDirectionalLight){const C=i.directional[u];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),u++}else if(b.isSpotLight){const C=i.spot[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const C=i.point[f];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const C=i.hemi[g];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function Uc(o,t){const e=new Ng(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function Fg(o,t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let l;return a===void 0?(l=new Uc(o,t),e.set(s,[l])):r>=a.length?(l=new Uc(o,t),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class kg extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Og extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
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
}`;function zg(o,t,e){let n=new tl;const i=new Yt,s=new Yt,r=new _e,a=new kg({depthPacking:vd}),l=new Og,c={},d=e.maxTextureSize,h={[In]:ln,[ln]:In,[Ie]:Ie},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Hg,fragmentShader:Bg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ue;m.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sh;let p=this.type;this.render=function(R,S,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const M=o.getRenderTarget(),A=o.getActiveCubeFace(),U=o.getActiveMipmapLevel(),D=o.state;D.setBlending(gi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const q=p!==jn&&this.type===jn,I=p===jn&&this.type!==jn;for(let k=0,V=R.length;k<V;k++){const Q=R[k],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const J=K.getFrameExtents();if(i.multiply(J),s.copy(K.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/J.x),i.x=s.x*J.x,K.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/J.y),i.y=s.y*J.y,K.mapSize.y=s.y)),K.map===null||q===!0||I===!0){const ct=this.type!==jn?{minFilter:qe,magFilter:qe}:{};K.map!==null&&K.map.dispose(),K.map=new qi(i.x,i.y,ct),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const et=K.getViewportCount();for(let ct=0;ct<et;ct++){const ht=K.getViewport(ct);r.set(s.x*ht.x,s.y*ht.y,s.x*ht.z,s.y*ht.w),D.viewport(r),K.updateMatrices(Q,ct),n=K.getFrustum(),b(S,N,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===jn&&x(K,N),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,o.setRenderTarget(M,A,U)};function x(R,S){const N=t.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new qi(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,o.setRenderTarget(R.mapPass),o.clear(),o.renderBufferDirect(S,null,N,u,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,o.setRenderTarget(R.map),o.clear(),o.renderBufferDirect(S,null,N,f,_,null)}function y(R,S,N,M){let A=null;const U=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)A=U;else if(A=N.isPointLight===!0?l:a,o.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const D=A.uuid,q=S.uuid;let I=c[D];I===void 0&&(I={},c[D]=I);let k=I[q];k===void 0&&(k=A.clone(),I[q]=k,S.addEventListener("dispose",C)),A=k}if(A.visible=S.visible,A.wireframe=S.wireframe,M===jn?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:h[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,N.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const D=o.properties.get(A);D.light=N}return A}function b(R,S,N,M,A){if(R.visible===!1)return;if(R.layers.test(S.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===jn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const q=t.update(R),I=R.material;if(Array.isArray(I)){const k=q.groups;for(let V=0,Q=k.length;V<Q;V++){const K=k[V],J=I[K.materialIndex];if(J&&J.visible){const et=y(R,J,M,A);R.onBeforeShadow(o,R,S,N,q,et,K),o.renderBufferDirect(N,null,q,et,R,K),R.onAfterShadow(o,R,S,N,q,et,K)}}}else if(I.visible){const k=y(R,I,M,A);R.onBeforeShadow(o,R,S,N,q,k,null),o.renderBufferDirect(N,null,q,k,R,null),R.onAfterShadow(o,R,S,N,q,k,null)}}const D=R.children;for(let q=0,I=D.length;q<I;q++)b(D[q],S,N,M,A)}function C(R){R.target.removeEventListener("dispose",C);for(const N in c){const M=c[N],A=R.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function Gg(o,t,e){const n=e.isWebGL2;function i(){let P=!1;const st=new _e;let rt=null;const Mt=new _e(0,0,0,0);return{setMask:function(gt){rt!==gt&&!P&&(o.colorMask(gt,gt,gt,gt),rt=gt)},setLocked:function(gt){P=gt},setClear:function(gt,wt,zt,re,Kt){Kt===!0&&(gt*=re,wt*=re,zt*=re),st.set(gt,wt,zt,re),Mt.equals(st)===!1&&(o.clearColor(gt,wt,zt,re),Mt.copy(st))},reset:function(){P=!1,rt=null,Mt.set(-1,0,0,0)}}}function s(){let P=!1,st=null,rt=null,Mt=null;return{setTest:function(gt){gt?Lt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(gt){st!==gt&&!P&&(o.depthMask(gt),st=gt)},setFunc:function(gt){if(rt!==gt){switch(gt){case Yu:o.depthFunc(o.NEVER);break;case Ku:o.depthFunc(o.ALWAYS);break;case ju:o.depthFunc(o.LESS);break;case ar:o.depthFunc(o.LEQUAL);break;case $u:o.depthFunc(o.EQUAL);break;case Zu:o.depthFunc(o.GEQUAL);break;case Ju:o.depthFunc(o.GREATER);break;case Qu:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}rt=gt}},setLocked:function(gt){P=gt},setClear:function(gt){Mt!==gt&&(o.clearDepth(gt),Mt=gt)},reset:function(){P=!1,st=null,rt=null,Mt=null}}}function r(){let P=!1,st=null,rt=null,Mt=null,gt=null,wt=null,zt=null,re=null,Kt=null;return{setTest:function(Xt){P||(Xt?Lt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Xt){st!==Xt&&!P&&(o.stencilMask(Xt),st=Xt)},setFunc:function(Xt,le,we){(rt!==Xt||Mt!==le||gt!==we)&&(o.stencilFunc(Xt,le,we),rt=Xt,Mt=le,gt=we)},setOp:function(Xt,le,we){(wt!==Xt||zt!==le||re!==we)&&(o.stencilOp(Xt,le,we),wt=Xt,zt=le,re=we)},setLocked:function(Xt){P=Xt},setClear:function(Xt){Kt!==Xt&&(o.clearStencil(Xt),Kt=Xt)},reset:function(){P=!1,st=null,rt=null,Mt=null,gt=null,wt=null,zt=null,re=null,Kt=null}}}const a=new i,l=new s,c=new r,d=new WeakMap,h=new WeakMap;let u={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,y=null,b=null,C=null,R=null,S=null,N=null,M=new bt(0,0,0),A=0,U=!1,D=null,q=null,I=null,k=null,V=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,J=0;const et=o.getParameter(o.VERSION);et.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(et)[1]),K=J>=1):et.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),K=J>=2);let ct=null,ht={};const X=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),pt=new _e().fromArray(X),vt=new _e().fromArray(tt);function St(P,st,rt,Mt){const gt=new Uint8Array(4),wt=o.createTexture();o.bindTexture(P,wt),o.texParameteri(P,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(P,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<rt;zt++)n&&(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)?o.texImage3D(st,0,o.RGBA,1,1,Mt,0,o.RGBA,o.UNSIGNED_BYTE,gt):o.texImage2D(st+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,gt);return wt}const Nt={};Nt[o.TEXTURE_2D]=St(o.TEXTURE_2D,o.TEXTURE_2D,1),Nt[o.TEXTURE_CUBE_MAP]=St(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Nt[o.TEXTURE_2D_ARRAY]=St(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Nt[o.TEXTURE_3D]=St(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Lt(o.DEPTH_TEST),l.setFunc(ar),G(!1),E(pl),Lt(o.CULL_FACE),Et(gi);function Lt(P){u[P]!==!0&&(o.enable(P),u[P]=!0)}function Rt(P){u[P]!==!1&&(o.disable(P),u[P]=!1)}function Ft(P,st){return f[P]!==st?(o.bindFramebuffer(P,st),f[P]=st,n&&(P===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=st),P===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=st)),!0):!1}function z(P,st){let rt=_,Mt=!1;if(P)if(rt=m.get(st),rt===void 0&&(rt=[],m.set(st,rt)),P.isWebGLMultipleRenderTargets){const gt=P.texture;if(rt.length!==gt.length||rt[0]!==o.COLOR_ATTACHMENT0){for(let wt=0,zt=gt.length;wt<zt;wt++)rt[wt]=o.COLOR_ATTACHMENT0+wt;rt.length=gt.length,Mt=!0}}else rt[0]!==o.COLOR_ATTACHMENT0&&(rt[0]=o.COLOR_ATTACHMENT0,Mt=!0);else rt[0]!==o.BACK&&(rt[0]=o.BACK,Mt=!0);Mt&&(e.isWebGL2?o.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Ee(P){return g!==P?(o.useProgram(P),g=P,!0):!1}const It={[Bi]:o.FUNC_ADD,[Iu]:o.FUNC_SUBTRACT,[Du]:o.FUNC_REVERSE_SUBTRACT};if(n)It[_l]=o.MIN,It[xl]=o.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(It[_l]=P.MIN_EXT,It[xl]=P.MAX_EXT)}const Ot={[Uu]:o.ZERO,[Nu]:o.ONE,[Fu]:o.SRC_COLOR,[Ia]:o.SRC_ALPHA,[Gu]:o.SRC_ALPHA_SATURATE,[Bu]:o.DST_COLOR,[Ou]:o.DST_ALPHA,[ku]:o.ONE_MINUS_SRC_COLOR,[Da]:o.ONE_MINUS_SRC_ALPHA,[zu]:o.ONE_MINUS_DST_COLOR,[Hu]:o.ONE_MINUS_DST_ALPHA,[Wu]:o.CONSTANT_COLOR,[Vu]:o.ONE_MINUS_CONSTANT_COLOR,[Xu]:o.CONSTANT_ALPHA,[qu]:o.ONE_MINUS_CONSTANT_ALPHA};function Et(P,st,rt,Mt,gt,wt,zt,re,Kt,Xt){if(P===gi){p===!0&&(Rt(o.BLEND),p=!1);return}if(p===!1&&(Lt(o.BLEND),p=!0),P!==Lu){if(P!==x||Xt!==U){if((y!==Bi||R!==Bi)&&(o.blendEquation(o.FUNC_ADD),y=Bi,R=Bi),Xt)switch(P){case _i:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case cn:o.blendFunc(o.ONE,o.ONE);break;case ml:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case gl:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case _i:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case cn:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case ml:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case gl:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,C=null,S=null,N=null,M.set(0,0,0),A=0,x=P,U=Xt}return}gt=gt||st,wt=wt||rt,zt=zt||Mt,(st!==y||gt!==R)&&(o.blendEquationSeparate(It[st],It[gt]),y=st,R=gt),(rt!==b||Mt!==C||wt!==S||zt!==N)&&(o.blendFuncSeparate(Ot[rt],Ot[Mt],Ot[wt],Ot[zt]),b=rt,C=Mt,S=wt,N=zt),(re.equals(M)===!1||Kt!==A)&&(o.blendColor(re.r,re.g,re.b,Kt),M.copy(re),A=Kt),x=P,U=!1}function de(P,st){P.side===Ie?Rt(o.CULL_FACE):Lt(o.CULL_FACE);let rt=P.side===ln;st&&(rt=!rt),G(rt),P.blending===_i&&P.transparent===!1?Et(gi):Et(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Mt=P.stencilWrite;c.setTest(Mt),Mt&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),T(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Lt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function G(P){D!==P&&(P?o.frontFace(o.CW):o.frontFace(o.CCW),D=P)}function E(P){P!==Ru?(Lt(o.CULL_FACE),P!==q&&(P===pl?o.cullFace(o.BACK):P===Cu?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),q=P}function v(P){P!==I&&(K&&o.lineWidth(P),I=P)}function T(P,st,rt){P?(Lt(o.POLYGON_OFFSET_FILL),(k!==st||V!==rt)&&(o.polygonOffset(st,rt),k=st,V=rt)):Rt(o.POLYGON_OFFSET_FILL)}function $(P){P?Lt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function Y(P){P===void 0&&(P=o.TEXTURE0+Q-1),ct!==P&&(o.activeTexture(P),ct=P)}function nt(P,st,rt){rt===void 0&&(ct===null?rt=o.TEXTURE0+Q-1:rt=ct);let Mt=ht[rt];Mt===void 0&&(Mt={type:void 0,texture:void 0},ht[rt]=Mt),(Mt.type!==P||Mt.texture!==st)&&(ct!==rt&&(o.activeTexture(rt),ct=rt),o.bindTexture(P,st||Nt[P]),Mt.type=P,Mt.texture=st)}function xt(){const P=ht[ct];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ft(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{o.compressedTexImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Vt(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Bt(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function yt(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(P){pt.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),pt.copy(P))}function ot(P){vt.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),vt.copy(P))}function at(P,st){let rt=h.get(st);rt===void 0&&(rt=new WeakMap,h.set(st,rt));let Mt=rt.get(P);Mt===void 0&&(Mt=o.getUniformBlockIndex(st,P.name),rt.set(P,Mt))}function lt(P,st){const Mt=h.get(st).get(P);d.get(st)!==Mt&&(o.uniformBlockBinding(st,Mt,P.__bindingPointIndex),d.set(st,Mt))}function Z(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},ct=null,ht={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,y=null,b=null,C=null,R=null,S=null,N=null,M=new bt(0,0,0),A=0,U=!1,D=null,q=null,I=null,k=null,V=null,pt.set(0,0,o.canvas.width,o.canvas.height),vt.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Lt,disable:Rt,bindFramebuffer:Ft,drawBuffers:z,useProgram:Ee,setBlending:Et,setMaterial:de,setFlipSided:G,setCullFace:E,setLineWidth:v,setPolygonOffset:T,setScissorTest:$,activeTexture:Y,bindTexture:nt,unbindTexture:xt,compressedTexImage2D:ft,compressedTexImage3D:it,texImage2D:Ct,texImage3D:yt,updateUBOMapping:at,uniformBlockBinding:lt,texStorage2D:Bt,texStorage3D:At,texSubImage2D:Tt,texSubImage3D:Vt,compressedTexSubImage2D:j,compressedTexSubImage3D:Gt,scissor:H,viewport:ot,reset:Z}}function Wg(o,t,e,n,i,s,r){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,v){return f?new OffscreenCanvas(E,v):oo("canvas")}function _(E,v,T,$){let Y=1;if((E.width>$||E.height>$)&&(Y=$/Math.max(E.width,E.height)),Y<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const nt=v?fr:Math.floor,xt=nt(Y*E.width),ft=nt(Y*E.height);h===void 0&&(h=m(xt,ft));const it=T?m(xt,ft):h;return it.width=xt,it.height=ft,it.getContext("2d").drawImage(E,0,0,xt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+xt+"x"+ft+")."),it}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function g(E){return Ba(E.width)&&Ba(E.height)}function p(E){return a?!1:E.wrapS!==De||E.wrapT!==De||E.minFilter!==qe&&E.minFilter!==Le}function x(E,v){return E.generateMipmaps&&v&&E.minFilter!==qe&&E.minFilter!==Le}function y(E){o.generateMipmap(E)}function b(E,v,T,$,Y=!1){if(a===!1)return v;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let nt=v;if(v===o.RED&&(T===o.FLOAT&&(nt=o.R32F),T===o.HALF_FLOAT&&(nt=o.R16F),T===o.UNSIGNED_BYTE&&(nt=o.R8)),v===o.RED_INTEGER&&(T===o.UNSIGNED_BYTE&&(nt=o.R8UI),T===o.UNSIGNED_SHORT&&(nt=o.R16UI),T===o.UNSIGNED_INT&&(nt=o.R32UI),T===o.BYTE&&(nt=o.R8I),T===o.SHORT&&(nt=o.R16I),T===o.INT&&(nt=o.R32I)),v===o.RG&&(T===o.FLOAT&&(nt=o.RG32F),T===o.HALF_FLOAT&&(nt=o.RG16F),T===o.UNSIGNED_BYTE&&(nt=o.RG8)),v===o.RGBA){const xt=Y?cr:ce.getTransfer($);T===o.FLOAT&&(nt=o.RGBA32F),T===o.HALF_FLOAT&&(nt=o.RGBA16F),T===o.UNSIGNED_BYTE&&(nt=xt===ve?o.SRGB8_ALPHA8:o.RGBA8),T===o.UNSIGNED_SHORT_4_4_4_4&&(nt=o.RGBA4),T===o.UNSIGNED_SHORT_5_5_5_1&&(nt=o.RGB5_A1)}return(nt===o.R16F||nt===o.R32F||nt===o.RG16F||nt===o.RG32F||nt===o.RGBA16F||nt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function C(E,v,T){return x(E,T)===!0||E.isFramebufferTexture&&E.minFilter!==qe&&E.minFilter!==Le?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){return E===qe||E===Fa||E===nr?o.NEAREST:o.LINEAR}function S(E){const v=E.target;v.removeEventListener("dispose",S),M(v),v.isVideoTexture&&d.delete(v)}function N(E){const v=E.target;v.removeEventListener("dispose",N),U(v)}function M(E){const v=n.get(E);if(v.__webglInit===void 0)return;const T=E.source,$=u.get(T);if($){const Y=$[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&A(E),Object.keys($).length===0&&u.delete(T)}n.remove(E)}function A(E){const v=n.get(E);o.deleteTexture(v.__webglTexture);const T=E.source,$=u.get(T);delete $[v.__cacheKey],r.memory.textures--}function U(E){const v=E.texture,T=n.get(E),$=n.get(v);if($.__webglTexture!==void 0&&(o.deleteTexture($.__webglTexture),r.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let nt=0;nt<T.__webglFramebuffer[Y].length;nt++)o.deleteFramebuffer(T.__webglFramebuffer[Y][nt]);else o.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)o.deleteFramebuffer(T.__webglFramebuffer[Y]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Y=0,nt=v.length;Y<nt;Y++){const xt=n.get(v[Y]);xt.__webglTexture&&(o.deleteTexture(xt.__webglTexture),r.memory.textures--),n.remove(v[Y])}n.remove(v),n.remove(E)}let D=0;function q(){D=0}function I(){const E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function k(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function V(E,v){const T=n.get(E);if(E.isVideoTexture&&de(E),E.isRenderTargetTexture===!1&&E.version>0&&T.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(T,E,v);return}}e.bindTexture(o.TEXTURE_2D,T.__webglTexture,o.TEXTURE0+v)}function Q(E,v){const T=n.get(E);if(E.version>0&&T.__version!==E.version){pt(T,E,v);return}e.bindTexture(o.TEXTURE_2D_ARRAY,T.__webglTexture,o.TEXTURE0+v)}function K(E,v){const T=n.get(E);if(E.version>0&&T.__version!==E.version){pt(T,E,v);return}e.bindTexture(o.TEXTURE_3D,T.__webglTexture,o.TEXTURE0+v)}function J(E,v){const T=n.get(E);if(E.version>0&&T.__version!==E.version){vt(T,E,v);return}e.bindTexture(o.TEXTURE_CUBE_MAP,T.__webglTexture,o.TEXTURE0+v)}const et={[dn]:o.REPEAT,[De]:o.CLAMP_TO_EDGE,[lr]:o.MIRRORED_REPEAT},ct={[qe]:o.NEAREST,[Fa]:o.NEAREST_MIPMAP_NEAREST,[nr]:o.NEAREST_MIPMAP_LINEAR,[Le]:o.LINEAR,[Eh]:o.LINEAR_MIPMAP_NEAREST,[vi]:o.LINEAR_MIPMAP_LINEAR},ht={[bd]:o.NEVER,[Rd]:o.ALWAYS,[Sd]:o.LESS,[Nh]:o.LEQUAL,[Td]:o.EQUAL,[Ad]:o.GEQUAL,[Ed]:o.GREATER,[wd]:o.NOTEQUAL};function X(E,v,T){if(T?(o.texParameteri(E,o.TEXTURE_WRAP_S,et[v.wrapS]),o.texParameteri(E,o.TEXTURE_WRAP_T,et[v.wrapT]),(E===o.TEXTURE_3D||E===o.TEXTURE_2D_ARRAY)&&o.texParameteri(E,o.TEXTURE_WRAP_R,et[v.wrapR]),o.texParameteri(E,o.TEXTURE_MAG_FILTER,ct[v.magFilter]),o.texParameteri(E,o.TEXTURE_MIN_FILTER,ct[v.minFilter])):(o.texParameteri(E,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(E,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(E===o.TEXTURE_3D||E===o.TEXTURE_2D_ARRAY)&&o.texParameteri(E,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(v.wrapS!==De||v.wrapT!==De)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,o.TEXTURE_MAG_FILTER,R(v.magFilter)),o.texParameteri(E,o.TEXTURE_MIN_FILTER,R(v.minFilter)),v.minFilter!==qe&&v.minFilter!==Le&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(o.texParameteri(E,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(E,o.TEXTURE_COMPARE_FUNC,ht[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const $=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===qe||v.minFilter!==nr&&v.minFilter!==vi||v.type===$n&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===io&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(o.texParameterf(E,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function tt(E,v){let T=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",S));const $=v.source;let Y=u.get($);Y===void 0&&(Y={},u.set($,Y));const nt=k(v);if(nt!==E.__cacheKey){Y[nt]===void 0&&(Y[nt]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,T=!0),Y[nt].usedTimes++;const xt=Y[E.__cacheKey];xt!==void 0&&(Y[E.__cacheKey].usedTimes--,xt.usedTimes===0&&A(v)),E.__cacheKey=nt,E.__webglTexture=Y[nt].texture}return T}function pt(E,v,T){let $=o.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=o.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=o.TEXTURE_3D);const Y=tt(E,v),nt=v.source;e.bindTexture($,E.__webglTexture,o.TEXTURE0+T);const xt=n.get(nt);if(nt.version!==xt.__version||Y===!0){e.activeTexture(o.TEXTURE0+T);const ft=ce.getPrimaries(ce.workingColorSpace),it=v.colorSpace===Tn?null:ce.getPrimaries(v.colorSpace),Tt=v.colorSpace===Tn||ft===it?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,v.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,v.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Vt=p(v)&&g(v.image)===!1;let j=_(v.image,Vt,!1,i.maxTextureSize);j=G(v,j);const Gt=g(j)||a,Bt=s.convert(v.format,v.colorSpace);let At=s.convert(v.type),Ct=b(v.internalFormat,Bt,At,v.colorSpace,v.isVideoTexture);X($,v,Gt);let yt;const H=v.mipmaps,ot=a&&v.isVideoTexture!==!0&&Ct!==Ih,at=xt.__version===void 0||Y===!0,lt=C(v,j,Gt);if(v.isDepthTexture)Ct=o.DEPTH_COMPONENT,a?v.type===$n?Ct=o.DEPTH_COMPONENT32F:v.type===pi?Ct=o.DEPTH_COMPONENT24:v.type===Wi?Ct=o.DEPTH24_STENCIL8:Ct=o.DEPTH_COMPONENT16:v.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Vi&&Ct===o.DEPTH_COMPONENT&&v.type!==$a&&v.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=pi,At=s.convert(v.type)),v.format===Rs&&Ct===o.DEPTH_COMPONENT&&(Ct=o.DEPTH_STENCIL,v.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Wi,At=s.convert(v.type))),at&&(ot?e.texStorage2D(o.TEXTURE_2D,1,Ct,j.width,j.height):e.texImage2D(o.TEXTURE_2D,0,Ct,j.width,j.height,0,Bt,At,null));else if(v.isDataTexture)if(H.length>0&&Gt){ot&&at&&e.texStorage2D(o.TEXTURE_2D,lt,Ct,H[0].width,H[0].height);for(let Z=0,P=H.length;Z<P;Z++)yt=H[Z],ot?e.texSubImage2D(o.TEXTURE_2D,Z,0,0,yt.width,yt.height,Bt,At,yt.data):e.texImage2D(o.TEXTURE_2D,Z,Ct,yt.width,yt.height,0,Bt,At,yt.data);v.generateMipmaps=!1}else ot?(at&&e.texStorage2D(o.TEXTURE_2D,lt,Ct,j.width,j.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,j.width,j.height,Bt,At,j.data)):e.texImage2D(o.TEXTURE_2D,0,Ct,j.width,j.height,0,Bt,At,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ot&&at&&e.texStorage3D(o.TEXTURE_2D_ARRAY,lt,Ct,H[0].width,H[0].height,j.depth);for(let Z=0,P=H.length;Z<P;Z++)yt=H[Z],v.format!==un?Bt!==null?ot?e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,j.depth,Bt,yt.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Z,Ct,yt.width,yt.height,j.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?e.texSubImage3D(o.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,j.depth,Bt,At,yt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,Z,Ct,yt.width,yt.height,j.depth,0,Bt,At,yt.data)}else{ot&&at&&e.texStorage2D(o.TEXTURE_2D,lt,Ct,H[0].width,H[0].height);for(let Z=0,P=H.length;Z<P;Z++)yt=H[Z],v.format!==un?Bt!==null?ot?e.compressedTexSubImage2D(o.TEXTURE_2D,Z,0,0,yt.width,yt.height,Bt,yt.data):e.compressedTexImage2D(o.TEXTURE_2D,Z,Ct,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?e.texSubImage2D(o.TEXTURE_2D,Z,0,0,yt.width,yt.height,Bt,At,yt.data):e.texImage2D(o.TEXTURE_2D,Z,Ct,yt.width,yt.height,0,Bt,At,yt.data)}else if(v.isDataArrayTexture)ot?(at&&e.texStorage3D(o.TEXTURE_2D_ARRAY,lt,Ct,j.width,j.height,j.depth),e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Bt,At,j.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,Ct,j.width,j.height,j.depth,0,Bt,At,j.data);else if(v.isData3DTexture)ot?(at&&e.texStorage3D(o.TEXTURE_3D,lt,Ct,j.width,j.height,j.depth),e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Bt,At,j.data)):e.texImage3D(o.TEXTURE_3D,0,Ct,j.width,j.height,j.depth,0,Bt,At,j.data);else if(v.isFramebufferTexture){if(at)if(ot)e.texStorage2D(o.TEXTURE_2D,lt,Ct,j.width,j.height);else{let Z=j.width,P=j.height;for(let st=0;st<lt;st++)e.texImage2D(o.TEXTURE_2D,st,Ct,Z,P,0,Bt,At,null),Z>>=1,P>>=1}}else if(H.length>0&&Gt){ot&&at&&e.texStorage2D(o.TEXTURE_2D,lt,Ct,H[0].width,H[0].height);for(let Z=0,P=H.length;Z<P;Z++)yt=H[Z],ot?e.texSubImage2D(o.TEXTURE_2D,Z,0,0,Bt,At,yt):e.texImage2D(o.TEXTURE_2D,Z,Ct,Bt,At,yt);v.generateMipmaps=!1}else ot?(at&&e.texStorage2D(o.TEXTURE_2D,lt,Ct,j.width,j.height),e.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,At,j)):e.texImage2D(o.TEXTURE_2D,0,Ct,Bt,At,j);x(v,Gt)&&y($),xt.__version=nt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function vt(E,v,T){if(v.image.length!==6)return;const $=tt(E,v),Y=v.source;e.bindTexture(o.TEXTURE_CUBE_MAP,E.__webglTexture,o.TEXTURE0+T);const nt=n.get(Y);if(Y.version!==nt.__version||$===!0){e.activeTexture(o.TEXTURE0+T);const xt=ce.getPrimaries(ce.workingColorSpace),ft=v.colorSpace===Tn?null:ce.getPrimaries(v.colorSpace),it=v.colorSpace===Tn||xt===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,v.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,v.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,Vt=v.image[0]&&v.image[0].isDataTexture,j=[];for(let Z=0;Z<6;Z++)!Tt&&!Vt?j[Z]=_(v.image[Z],!1,!0,i.maxCubemapSize):j[Z]=Vt?v.image[Z].image:v.image[Z],j[Z]=G(v,j[Z]);const Gt=j[0],Bt=g(Gt)||a,At=s.convert(v.format,v.colorSpace),Ct=s.convert(v.type),yt=b(v.internalFormat,At,Ct,v.colorSpace),H=a&&v.isVideoTexture!==!0,ot=nt.__version===void 0||$===!0;let at=C(v,Gt,Bt);X(o.TEXTURE_CUBE_MAP,v,Bt);let lt;if(Tt){H&&ot&&e.texStorage2D(o.TEXTURE_CUBE_MAP,at,yt,Gt.width,Gt.height);for(let Z=0;Z<6;Z++){lt=j[Z].mipmaps;for(let P=0;P<lt.length;P++){const st=lt[P];v.format!==un?At!==null?H?e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,P,0,0,st.width,st.height,At,st.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,P,yt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,P,0,0,st.width,st.height,At,Ct,st.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,P,yt,st.width,st.height,0,At,Ct,st.data)}}}else{lt=v.mipmaps,H&&ot&&(lt.length>0&&at++,e.texStorage2D(o.TEXTURE_CUBE_MAP,at,yt,j[0].width,j[0].height));for(let Z=0;Z<6;Z++)if(Vt){H?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,j[Z].width,j[Z].height,At,Ct,j[Z].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,yt,j[Z].width,j[Z].height,0,At,Ct,j[Z].data);for(let P=0;P<lt.length;P++){const rt=lt[P].image[Z].image;H?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,P+1,0,0,rt.width,rt.height,At,Ct,rt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,P+1,yt,rt.width,rt.height,0,At,Ct,rt.data)}}else{H?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,Ct,j[Z]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,yt,At,Ct,j[Z]);for(let P=0;P<lt.length;P++){const st=lt[P];H?e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,P+1,0,0,At,Ct,st.image[Z]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Z,P+1,yt,At,Ct,st.image[Z])}}}x(v,Bt)&&y(o.TEXTURE_CUBE_MAP),nt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function St(E,v,T,$,Y,nt){const xt=s.convert(T.format,T.colorSpace),ft=s.convert(T.type),it=b(T.internalFormat,xt,ft,T.colorSpace);if(!n.get(v).__hasExternalTextures){const Vt=Math.max(1,v.width>>nt),j=Math.max(1,v.height>>nt);Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?e.texImage3D(Y,nt,it,Vt,j,v.depth,0,xt,ft,null):e.texImage2D(Y,nt,it,Vt,j,0,xt,ft,null)}e.bindFramebuffer(o.FRAMEBUFFER,E),Et(v)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$,Y,n.get(T).__webglTexture,0,Ot(v)):(Y===o.TEXTURE_2D||Y>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,$,Y,n.get(T).__webglTexture,nt),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(E,v,T){if(o.bindRenderbuffer(o.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let $=a===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(T||Et(v)){const Y=v.depthTexture;Y&&Y.isDepthTexture&&(Y.type===$n?$=o.DEPTH_COMPONENT32F:Y.type===pi&&($=o.DEPTH_COMPONENT24));const nt=Ot(v);Et(v)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,nt,$,v.width,v.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,nt,$,v.width,v.height)}else o.renderbufferStorage(o.RENDERBUFFER,$,v.width,v.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const $=Ot(v);T&&Et(v)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,$,o.DEPTH24_STENCIL8,v.width,v.height):Et(v)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$,o.DEPTH24_STENCIL8,v.width,v.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,v.width,v.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,E)}else{const $=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Y=0;Y<$.length;Y++){const nt=$[Y],xt=s.convert(nt.format,nt.colorSpace),ft=s.convert(nt.type),it=b(nt.internalFormat,xt,ft,nt.colorSpace),Tt=Ot(v);T&&Et(v)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Tt,it,v.width,v.height):Et(v)?l.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Tt,it,v.width,v.height):o.renderbufferStorage(o.RENDERBUFFER,it,v.width,v.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Lt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const $=n.get(v.depthTexture).__webglTexture,Y=Ot(v);if(v.depthTexture.format===Vi)Et(v)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,$,0,Y):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,$,0);else if(v.depthTexture.format===Rs)Et(v)?l.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,$,0,Y):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Rt(E){const v=n.get(E),T=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");Lt(v.__webglFramebuffer,E)}else if(T){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(o.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]=o.createRenderbuffer(),Nt(v.__webglDepthbuffer[$],E,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=o.createRenderbuffer(),Nt(v.__webglDepthbuffer,E,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(E,v,T){const $=n.get(E);v!==void 0&&St($.__webglFramebuffer,E,E.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),T!==void 0&&Rt(E)}function z(E){const v=E.texture,T=n.get(E),$=n.get(v);E.addEventListener("dispose",N),E.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=o.createTexture()),$.__version=v.version,r.memory.textures++);const Y=E.isWebGLCubeRenderTarget===!0,nt=E.isWebGLMultipleRenderTargets===!0,xt=g(E)||a;if(Y){T.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(a&&v.mipmaps&&v.mipmaps.length>0){T.__webglFramebuffer[ft]=[];for(let it=0;it<v.mipmaps.length;it++)T.__webglFramebuffer[ft][it]=o.createFramebuffer()}else T.__webglFramebuffer[ft]=o.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){T.__webglFramebuffer=[];for(let ft=0;ft<v.mipmaps.length;ft++)T.__webglFramebuffer[ft]=o.createFramebuffer()}else T.__webglFramebuffer=o.createFramebuffer();if(nt)if(i.drawBuffers){const ft=E.texture;for(let it=0,Tt=ft.length;it<Tt;it++){const Vt=n.get(ft[it]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Et(E)===!1){const ft=nt?v:[v];T.__webglMultisampledFramebuffer=o.createFramebuffer(),T.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let it=0;it<ft.length;it++){const Tt=ft[it];T.__webglColorRenderbuffer[it]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,T.__webglColorRenderbuffer[it]);const Vt=s.convert(Tt.format,Tt.colorSpace),j=s.convert(Tt.type),Gt=b(Tt.internalFormat,Vt,j,Tt.colorSpace,E.isXRRenderTarget===!0),Bt=Ot(E);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,Gt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.RENDERBUFFER,T.__webglColorRenderbuffer[it])}o.bindRenderbuffer(o.RENDERBUFFER,null),E.depthBuffer&&(T.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(T.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Y){e.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture),X(o.TEXTURE_CUBE_MAP,v,xt);for(let ft=0;ft<6;ft++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let it=0;it<v.mipmaps.length;it++)St(T.__webglFramebuffer[ft][it],E,v,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,it);else St(T.__webglFramebuffer[ft],E,v,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);x(v,xt)&&y(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const ft=E.texture;for(let it=0,Tt=ft.length;it<Tt;it++){const Vt=ft[it],j=n.get(Vt);e.bindTexture(o.TEXTURE_2D,j.__webglTexture),X(o.TEXTURE_2D,Vt,xt),St(T.__webglFramebuffer,E,Vt,o.COLOR_ATTACHMENT0+it,o.TEXTURE_2D,0),x(Vt,xt)&&y(o.TEXTURE_2D)}e.unbindTexture()}else{let ft=o.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ft=E.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,$.__webglTexture),X(ft,v,xt),a&&v.mipmaps&&v.mipmaps.length>0)for(let it=0;it<v.mipmaps.length;it++)St(T.__webglFramebuffer[it],E,v,o.COLOR_ATTACHMENT0,ft,it);else St(T.__webglFramebuffer,E,v,o.COLOR_ATTACHMENT0,ft,0);x(v,xt)&&y(ft),e.unbindTexture()}E.depthBuffer&&Rt(E)}function Ee(E){const v=g(E)||a,T=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let $=0,Y=T.length;$<Y;$++){const nt=T[$];if(x(nt,v)){const xt=E.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,ft=n.get(nt).__webglTexture;e.bindTexture(xt,ft),y(xt),e.unbindTexture()}}}function It(E){if(a&&E.samples>0&&Et(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],T=E.width,$=E.height;let Y=o.COLOR_BUFFER_BIT;const nt=[],xt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=n.get(E),it=E.isWebGLMultipleRenderTargets===!0;if(it)for(let Tt=0;Tt<v.length;Tt++)e.bindFramebuffer(o.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Tt=0;Tt<v.length;Tt++){nt.push(o.COLOR_ATTACHMENT0+Tt),E.depthBuffer&&nt.push(xt);const Vt=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(Vt===!1&&(E.depthBuffer&&(Y|=o.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Y|=o.STENCIL_BUFFER_BIT)),it&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ft.__webglColorRenderbuffer[Tt]),Vt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[xt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[xt])),it){const j=n.get(v[Tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,j,0)}o.blitFramebuffer(0,0,T,$,0,0,T,$,Y,o.NEAREST),c&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),it)for(let Tt=0;Tt<v.length;Tt++){e.bindFramebuffer(o.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.RENDERBUFFER,ft.__webglColorRenderbuffer[Tt]);const Vt=n.get(v[Tt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.TEXTURE_2D,Vt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function Ot(E){return Math.min(i.maxSamples,E.samples)}function Et(E){const v=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function de(E){const v=r.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function G(E,v){const T=E.colorSpace,$=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ha||T!==Te&&T!==Tn&&(ce.getTransfer(T)===ve?a===!1?t.has("EXT_sRGB")===!0&&$===un?(E.format=Ha,E.minFilter=Le,E.generateMipmaps=!1):v=kh.sRGBToLinear(v):($!==un||Y!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),v}this.allocateTextureUnit=I,this.resetTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=Q,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=Ft,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Et}function Vg(o,t,e){const n=e.isWebGL2;function i(s,r=Tn){let a;const l=ce.getTransfer(r);if(s===xi)return o.UNSIGNED_BYTE;if(s===Ah)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Rh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===cd)return o.BYTE;if(s===hd)return o.SHORT;if(s===$a)return o.UNSIGNED_SHORT;if(s===wh)return o.INT;if(s===pi)return o.UNSIGNED_INT;if(s===$n)return o.FLOAT;if(s===io)return n?o.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ud)return o.ALPHA;if(s===un)return o.RGBA;if(s===dd)return o.LUMINANCE;if(s===fd)return o.LUMINANCE_ALPHA;if(s===Vi)return o.DEPTH_COMPONENT;if(s===Rs)return o.DEPTH_STENCIL;if(s===Ha)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===pd)return o.RED;if(s===Ch)return o.RED_INTEGER;if(s===md)return o.RG;if(s===Ph)return o.RG_INTEGER;if(s===Lh)return o.RGBA_INTEGER;if(s===Pr||s===Lr||s===Ir||s===Dr)if(l===ve)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Pr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Pr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ir)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vl||s===Ml||s===bl||s===Sl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===vl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ml)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ih)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Tl||s===El)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Tl)return l===ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===El)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wl||s===Al||s===Rl||s===Cl||s===Pl||s===Ll||s===Il||s===Dl||s===Ul||s===Nl||s===Fl||s===kl||s===Ol||s===Hl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===wl)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Al)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rl)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cl)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pl)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ll)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Il)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dl)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ul)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nl)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fl)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kl)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ol)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hl)return l===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ur||s===Bl||s===zl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ur)return l===ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gd||s===Gl||s===Wl||s===Vl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ur)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Gl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wi?n?o.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class Xg extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class an extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qg={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Yg extends Us{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,m=null;const _=e.getContextAttributes();let g=null,p=null;const x=[],y=[],b=new Yt;let C=null;const R=new en;R.layers.enable(1),R.viewport=new _e;const S=new en;S.layers.enable(2),S.viewport=new _e;const N=[R,S],M=new Xg;M.layers.enable(1),M.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=x[X];return tt===void 0&&(tt=new sa,x[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=x[X];return tt===void 0&&(tt=new sa,x[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=x[X];return tt===void 0&&(tt=new sa,x[X]=tt),tt.getHandSpace()};function D(X){const tt=y.indexOf(X.inputSource);if(tt===-1)return;const pt=x[tt];pt!==void 0&&(pt.update(X.inputSource,X.frame,c||r),pt.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",I);for(let X=0;X<x.length;X++){const tt=y[X];tt!==null&&(y[X]=null,x[X].disconnect(tt))}A=null,U=null,t.setRenderTarget(g),f=null,u=null,h=null,i=null,p=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",q),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new qi(f.framebufferWidth,f.framebufferHeight,{format:un,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let tt=null,pt=null,vt=null;_.depth&&(vt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=_.stencil?Rs:Vi,pt=_.stencil?Wi:pi);const St={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(St),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),p=new qi(u.textureWidth,u.textureHeight,{format:un,type:xi,depthTexture:new Kh(u.textureWidth,u.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Nt=t.properties.get(p);Nt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),ht.setContext(i),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(X){for(let tt=0;tt<X.removed.length;tt++){const pt=X.removed[tt],vt=y.indexOf(pt);vt>=0&&(y[vt]=null,x[vt].disconnect(pt))}for(let tt=0;tt<X.added.length;tt++){const pt=X.added[tt];let vt=y.indexOf(pt);if(vt===-1){for(let Nt=0;Nt<x.length;Nt++)if(Nt>=y.length){y.push(pt),vt=Nt;break}else if(y[Nt]===null){y[Nt]=pt,vt=Nt;break}if(vt===-1)break}const St=x[vt];St&&St.connect(pt)}}const k=new L,V=new L;function Q(X,tt,pt){k.setFromMatrixPosition(tt.matrixWorld),V.setFromMatrixPosition(pt.matrixWorld);const vt=k.distanceTo(V),St=tt.projectionMatrix.elements,Nt=pt.projectionMatrix.elements,Lt=St[14]/(St[10]-1),Rt=St[14]/(St[10]+1),Ft=(St[9]+1)/St[5],z=(St[9]-1)/St[5],Ee=(St[8]-1)/St[0],It=(Nt[8]+1)/Nt[0],Ot=Lt*Ee,Et=Lt*It,de=vt/(-Ee+It),G=de*-Ee;tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(G),X.translateZ(de),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const E=Lt+de,v=Rt+de,T=Ot-G,$=Et+(vt-G),Y=Ft*Rt/v*E,nt=z*Rt/v*E;X.projectionMatrix.makePerspective(T,$,Y,nt,E,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function K(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;M.near=S.near=R.near=X.near,M.far=S.far=R.far=X.far,(A!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,U=M.far);const tt=X.parent,pt=M.cameras;K(M,tt);for(let vt=0;vt<pt.length;vt++)K(pt[vt],tt);pt.length===2?Q(M,R,S):M.projectionMatrix.copy(R.projectionMatrix),J(X,M,tt)};function J(X,tt,pt){pt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(pt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ps*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let et=null;function ct(X,tt){if(d=tt.getViewerPose(c||r),m=tt,d!==null){const pt=d.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let vt=!1;pt.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let St=0;St<pt.length;St++){const Nt=pt[St];let Lt=null;if(f!==null)Lt=f.getViewport(Nt);else{const Ft=h.getViewSubImage(u,Nt);Lt=Ft.viewport,St===0&&(t.setRenderTargetTextures(p,Ft.colorTexture,u.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(p))}let Rt=N[St];Rt===void 0&&(Rt=new en,Rt.layers.enable(St),Rt.viewport=new _e,N[St]=Rt),Rt.matrix.fromArray(Nt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Nt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),St===0&&(M.matrix.copy(Rt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(Rt)}}for(let pt=0;pt<x.length;pt++){const vt=y[pt],St=x[pt];vt!==null&&St!==void 0&&St.update(vt,tt,c||r)}et&&et(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}const ht=new Yh;ht.setAnimationLoop(ct),this.setAnimationLoop=function(X){et=X},this.dispose=function(){}}}function Kg(o,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Vh(o)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ln&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ln&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const y=o._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jg(o,t,e,n){let i={},s={},r=[];const a=e.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,y){const b=y.program;n.uniformBlockBinding(x,b)}function c(x,y){let b=i[x.id];b===void 0&&(m(x),b=d(x),i[x.id]=b,x.addEventListener("dispose",g));const C=y.program;n.updateUBOMapping(x,C);const R=t.render.frame;s[x.id]!==R&&(u(x),s[x.id]=R)}function d(x){const y=h();x.__bindingPointIndex=y;const b=o.createBuffer(),C=x.__size,R=x.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,C,R),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,b),b}function h(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],b=x.uniforms,C=x.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let R=0,S=b.length;R<S;R++){const N=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,A=N.length;M<A;M++){const U=N[M];if(f(U,R,M,C)===!0){const D=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let I=0;for(let k=0;k<q.length;k++){const V=q[k],Q=_(V);typeof V=="number"||typeof V=="boolean"?(U.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,D+I,U.__data)):V.isMatrix3?(U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=0,U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=0,U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=0):(V.toArray(U.__data,I),I+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,D,U.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(x,y,b,C){const R=x.value,S=y+"_"+b;if(C[S]===void 0)return typeof R=="number"||typeof R=="boolean"?C[S]=R:C[S]=R.clone(),!0;{const N=C[S];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return C[S]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function m(x){const y=x.uniforms;let b=0;const C=16;for(let S=0,N=y.length;S<N;S++){const M=Array.isArray(y[S])?y[S]:[y[S]];for(let A=0,U=M.length;A<U;A++){const D=M[A],q=Array.isArray(D.value)?D.value:[D.value];for(let I=0,k=q.length;I<k;I++){const V=q[I],Q=_(V),K=b%C;K!==0&&C-K<Q.boundary&&(b+=C-K),D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=Q.storage}}}const R=b%C;return R>0&&(b+=C-R),x.__size=b,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const b=r.indexOf(y.__bindingPointIndex);r.splice(b,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const x in i)o.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class tu{constructor(t={}){const{canvas:e=Vd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=r;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oe,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;const y=this;let b=!1,C=0,R=0,S=null,N=-1,M=null;const A=new _e,U=new _e;let D=null;const q=new bt(0);let I=0,k=e.width,V=e.height,Q=1,K=null,J=null;const et=new _e(0,0,k,V),ct=new _e(0,0,k,V);let ht=!1;const X=new tl;let tt=!1,pt=!1,vt=null;const St=new ne,Nt=new Yt,Lt=new L,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return S===null?Q:1}let z=n;function Ee(w,F){for(let B=0;B<w.length;B++){const W=w[B],O=e.getContext(W,F);if(O!==null)return O}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ka}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",st,!1),z===null){const F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),z=Ee(F,w),z===null)throw Ee(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let It,Ot,Et,de,G,E,v,T,$,Y,nt,xt,ft,it,Tt,Vt,j,Gt,Bt,At,Ct,yt,H,ot;function at(){It=new o0(z),Ot=new Qm(z,It,t),It.init(Ot),yt=new Vg(z,It,Ot),Et=new Gg(z,It,Ot),de=new l0(z),G=new Rg,E=new Wg(z,It,Et,G,Ot,yt,de),v=new e0(y),T=new s0(y),$=new gf(z,Ot),H=new Zm(z,It,$,Ot),Y=new r0(z,$,de,H),nt=new d0(z,Y,$,de),Bt=new u0(z,Ot,E),Vt=new t0(G),xt=new Ag(y,v,T,It,Ot,H,Vt),ft=new Kg(y,G),it=new Pg,Tt=new Fg(It,Ot),Gt=new $m(y,v,T,Et,nt,u,l),j=new zg(y,nt,Ot),ot=new jg(z,de,Ot,Et),At=new Jm(z,It,de,Ot),Ct=new a0(z,It,de,Ot),de.programs=xt.programs,y.capabilities=Ot,y.extensions=It,y.properties=G,y.renderLists=it,y.shadowMap=j,y.state=Et,y.info=de}at();const lt=new Yg(y,z);this.xr=lt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=It.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=It.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(k,V,!1))},this.getSize=function(w){return w.set(k,V)},this.setSize=function(w,F,B=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,V=F,e.width=Math.floor(w*Q),e.height=Math.floor(F*Q),B===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(k*Q,V*Q).floor()},this.setDrawingBufferSize=function(w,F,B){k=w,V=F,Q=B,e.width=Math.floor(w*B),e.height=Math.floor(F*B),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(et)},this.setViewport=function(w,F,B,W){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,F,B,W),Et.viewport(A.copy(et).multiplyScalar(Q).floor())},this.getScissor=function(w){return w.copy(ct)},this.setScissor=function(w,F,B,W){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,F,B,W),Et.scissor(U.copy(ct).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(w){Et.setScissorTest(ht=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(w=!0,F=!0,B=!0){let W=0;if(w){let O=!1;if(S!==null){const _t=S.texture.format;O=_t===Lh||_t===Ph||_t===Ch}if(O){const _t=S.texture.type,Ut=_t===xi||_t===pi||_t===$a||_t===Wi||_t===Ah||_t===Rh,Wt=Gt.getClearColor(),jt=Gt.getClearAlpha(),ee=Wt.r,Zt=Wt.g,Qt=Wt.b;Ut?(f[0]=ee,f[1]=Zt,f[2]=Qt,f[3]=jt,z.clearBufferuiv(z.COLOR,0,f)):(m[0]=ee,m[1]=Zt,m[2]=Qt,m[3]=jt,z.clearBufferiv(z.COLOR,0,m))}else W|=z.COLOR_BUFFER_BIT}F&&(W|=z.DEPTH_BUFFER_BIT),B&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",st,!1),it.dispose(),Tt.dispose(),G.dispose(),v.dispose(),T.dispose(),nt.dispose(),H.dispose(),ot.dispose(),xt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Kt),lt.removeEventListener("sessionend",Xt),vt&&(vt.dispose(),vt=null),le.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=de.autoReset,F=j.enabled,B=j.autoUpdate,W=j.needsUpdate,O=j.type;at(),de.autoReset=w,j.enabled=F,j.autoUpdate=B,j.needsUpdate=W,j.type=O}function st(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const F=w.target;F.removeEventListener("dispose",rt),Mt(F)}function Mt(w){gt(w),G.remove(w)}function gt(w){const F=G.get(w).programs;F!==void 0&&(F.forEach(function(B){xt.releaseProgram(B)}),w.isShaderMaterial&&xt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,B,W,O,_t){F===null&&(F=Rt);const Ut=O.isMesh&&O.matrixWorld.determinant()<0,Wt=$t(w,F,B,W,O);Et.setMaterial(W,Ut);let jt=B.index,ee=1;if(W.wireframe===!0){if(jt=Y.getWireframeAttribute(B),jt===void 0)return;ee=2}const Zt=B.drawRange,Qt=B.attributes.position;let Pe=Zt.start*ee,mn=(Zt.start+Zt.count)*ee;_t!==null&&(Pe=Math.max(Pe,_t.start*ee),mn=Math.min(mn,(_t.start+_t.count)*ee)),jt!==null?(Pe=Math.max(Pe,0),mn=Math.min(mn,jt.count)):Qt!=null&&(Pe=Math.max(Pe,0),mn=Math.min(mn,Qt.count));const Ve=mn-Pe;if(Ve<0||Ve===1/0)return;H.setup(O,W,Wt,B,jt);let Gn,Se=At;if(jt!==null&&(Gn=$.get(jt),Se=Ct,Se.setIndex(Gn)),O.isMesh)W.wireframe===!0?(Et.setLineWidth(W.wireframeLinewidth*Ft()),Se.setMode(z.LINES)):Se.setMode(z.TRIANGLES);else if(O.isLine){let ie=W.linewidth;ie===void 0&&(ie=1),Et.setLineWidth(ie*Ft()),O.isLineSegments?Se.setMode(z.LINES):O.isLineLoop?Se.setMode(z.LINE_LOOP):Se.setMode(z.LINE_STRIP)}else O.isPoints?Se.setMode(z.POINTS):O.isSprite&&Se.setMode(z.TRIANGLES);if(O.isBatchedMesh)Se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Se.renderInstances(Pe,Ve,O.count);else if(B.isInstancedBufferGeometry){const ie=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,wr=Math.min(B.instanceCount,ie);Se.renderInstances(Pe,Ve,wr)}else Se.render(Pe,Ve)};function wt(w,F,B){w.transparent===!0&&w.side===Ie&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,Pt(w,F,B),w.side=In,w.needsUpdate=!0,Pt(w,F,B),w.side=Ie):Pt(w,F,B)}this.compile=function(w,F,B=null){B===null&&(B=w),g=Tt.get(B),g.init(),x.push(g),B.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),w!==B&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights(y._useLegacyLights);const W=new Set;return w.traverse(function(O){const _t=O.material;if(_t)if(Array.isArray(_t))for(let Ut=0;Ut<_t.length;Ut++){const Wt=_t[Ut];wt(Wt,B,O),W.add(Wt)}else wt(_t,B,O),W.add(_t)}),x.pop(),g=null,W},this.compileAsync=function(w,F,B=null){const W=this.compile(w,F,B);return new Promise(O=>{function _t(){if(W.forEach(function(Ut){G.get(Ut).currentProgram.isReady()&&W.delete(Ut)}),W.size===0){O(w);return}setTimeout(_t,10)}It.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let zt=null;function re(w){zt&&zt(w)}function Kt(){le.stop()}function Xt(){le.start()}const le=new Yh;le.setAnimationLoop(re),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(w){zt=w,lt.setAnimationLoop(w),w===null?le.stop():le.start()},lt.addEventListener("sessionstart",Kt),lt.addEventListener("sessionend",Xt),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(F),F=lt.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,S),g=Tt.get(w,x.length),g.init(),x.push(g),St.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(St),pt=this.localClippingEnabled,tt=Vt.init(this.clippingPlanes,pt),_=it.get(w,p.length),_.init(),p.push(_),we(w,F,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(K,J),this.info.render.frame++,tt===!0&&Vt.beginShadows();const B=g.state.shadowsArray;if(j.render(B,w,F),tt===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Gt.render(_,w),g.setupLights(y._useLegacyLights),F.isArrayCamera){const W=F.cameras;for(let O=0,_t=W.length;O<_t;O++){const Ut=W[O];An(_,w,Ut,Ut.viewport)}}else An(_,w,F);S!==null&&(E.updateMultisampleRenderTarget(S),E.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(y,w,F),H.resetDefaultState(),N=-1,M=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function we(w,F,B,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){W&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(St);const Ut=nt.update(w),Wt=w.material;Wt.visible&&_.push(w,Ut,Wt,B,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const Ut=nt.update(w),Wt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Lt.copy(Ut.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(St)),Array.isArray(Wt)){const jt=Ut.groups;for(let ee=0,Zt=jt.length;ee<Zt;ee++){const Qt=jt[ee],Pe=Wt[Qt.materialIndex];Pe&&Pe.visible&&_.push(w,Ut,Pe,B,Lt.z,Qt)}}else Wt.visible&&_.push(w,Ut,Wt,B,Lt.z,null)}}const _t=w.children;for(let Ut=0,Wt=_t.length;Ut<Wt;Ut++)we(_t[Ut],F,B,W)}function An(w,F,B,W){const O=w.opaque,_t=w.transmissive,Ut=w.transparent;g.setupLightsView(B),tt===!0&&Vt.setGlobalState(y.clippingPlanes,B),_t.length>0&&Ht(O,_t,F,B),W&&Et.viewport(A.copy(W)),O.length>0&&ut(O,F,B),_t.length>0&&ut(_t,F,B),Ut.length>0&&ut(Ut,F,B),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Ht(w,F,B,W){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const _t=Ot.isWebGL2;vt===null&&(vt=new qi(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")?io:xi,minFilter:vi,samples:_t?4:0})),y.getDrawingBufferSize(Nt),_t?vt.setSize(Nt.x,Nt.y):vt.setSize(fr(Nt.x),fr(Nt.y));const Ut=y.getRenderTarget();y.setRenderTarget(vt),y.getClearColor(q),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();const Wt=y.toneMapping;y.toneMapping=Jn,ut(w,B,W),E.updateMultisampleRenderTarget(vt),E.updateRenderTargetMipmap(vt);let jt=!1;for(let ee=0,Zt=F.length;ee<Zt;ee++){const Qt=F[ee],Pe=Qt.object,mn=Qt.geometry,Ve=Qt.material,Gn=Qt.group;if(Ve.side===Ie&&Pe.layers.test(W.layers)){const Se=Ve.side;Ve.side=ln,Ve.needsUpdate=!0,qt(Pe,B,W,mn,Ve,Gn),Ve.side=Se,Ve.needsUpdate=!0,jt=!0}}jt===!0&&(E.updateMultisampleRenderTarget(vt),E.updateRenderTargetMipmap(vt)),y.setRenderTarget(Ut),y.setClearColor(q,I),y.toneMapping=Wt}function ut(w,F,B){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,_t=w.length;O<_t;O++){const Ut=w[O],Wt=Ut.object,jt=Ut.geometry,ee=W===null?Ut.material:W,Zt=Ut.group;Wt.layers.test(B.layers)&&qt(Wt,F,B,jt,ee,Zt)}}function qt(w,F,B,W,O,_t){w.onBeforeRender(y,F,B,W,O,_t),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(y,F,B,W,w,_t),O.transparent===!0&&O.side===Ie&&O.forceSinglePass===!1?(O.side=ln,O.needsUpdate=!0,y.renderBufferDirect(B,F,W,O,w,_t),O.side=In,O.needsUpdate=!0,y.renderBufferDirect(B,F,W,O,w,_t),O.side=Ie):y.renderBufferDirect(B,F,W,O,w,_t),w.onAfterRender(y,F,B,W,O,_t)}function Pt(w,F,B){F.isScene!==!0&&(F=Rt);const W=G.get(w),O=g.state.lights,_t=g.state.shadowsArray,Ut=O.state.version,Wt=xt.getParameters(w,O.state,_t,F,B),jt=xt.getProgramCacheKey(Wt);let ee=W.programs;W.environment=w.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(w.isMeshStandardMaterial?T:v).get(w.envMap||W.environment),ee===void 0&&(w.addEventListener("dispose",rt),ee=new Map,W.programs=ee);let Zt=ee.get(jt);if(Zt!==void 0){if(W.currentProgram===Zt&&W.lightsStateVersion===Ut)return Ke(w,Wt),Zt}else Wt.uniforms=xt.getUniforms(w),w.onBuild(B,Wt,y),w.onBeforeCompile(Wt,y),Zt=xt.acquireProgram(Wt,jt),ee.set(jt,Zt),W.uniforms=Wt.uniforms;const Qt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qt.clippingPlanes=Vt.uniform),Ke(w,Wt),W.needsLights=We(w),W.lightsStateVersion=Ut,W.needsLights&&(Qt.ambientLightColor.value=O.state.ambient,Qt.lightProbe.value=O.state.probe,Qt.directionalLights.value=O.state.directional,Qt.directionalLightShadows.value=O.state.directionalShadow,Qt.spotLights.value=O.state.spot,Qt.spotLightShadows.value=O.state.spotShadow,Qt.rectAreaLights.value=O.state.rectArea,Qt.ltc_1.value=O.state.rectAreaLTC1,Qt.ltc_2.value=O.state.rectAreaLTC2,Qt.pointLights.value=O.state.point,Qt.pointLightShadows.value=O.state.pointShadow,Qt.hemisphereLights.value=O.state.hemi,Qt.directionalShadowMap.value=O.state.directionalShadowMap,Qt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Qt.spotShadowMap.value=O.state.spotShadowMap,Qt.spotLightMatrix.value=O.state.spotLightMatrix,Qt.spotLightMap.value=O.state.spotLightMap,Qt.pointShadowMap.value=O.state.pointShadowMap,Qt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Zt,W.uniformsList=null,Zt}function ge(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=ir.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Ke(w,F){const B=G.get(w);B.outputColorSpace=F.outputColorSpace,B.batching=F.batching,B.instancing=F.instancing,B.instancingColor=F.instancingColor,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function $t(w,F,B,W,O){F.isScene!==!0&&(F=Rt),E.resetTextureUnits();const _t=F.fog,Ut=W.isMeshStandardMaterial?F.environment:null,Wt=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Te,jt=(W.isMeshStandardMaterial?T:v).get(W.envMap||Ut),ee=W.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Zt=!!B.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Qt=!!B.morphAttributes.position,Pe=!!B.morphAttributes.normal,mn=!!B.morphAttributes.color;let Ve=Jn;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ve=y.toneMapping);const Gn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=Gn!==void 0?Gn.length:0,ie=G.get(W),wr=g.state.lights;if(tt===!0&&(pt===!0||w!==M)){const vn=w===M&&W.id===N;Vt.setState(W,w,vn)}let Ae=!1;W.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==wr.state.version||ie.outputColorSpace!==Wt||O.isBatchedMesh&&ie.batching===!1||!O.isBatchedMesh&&ie.batching===!0||O.isInstancedMesh&&ie.instancing===!1||!O.isInstancedMesh&&ie.instancing===!0||O.isSkinnedMesh&&ie.skinning===!1||!O.isSkinnedMesh&&ie.skinning===!0||O.isInstancedMesh&&ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ie.instancingColor===!1&&O.instanceColor!==null||ie.envMap!==jt||W.fog===!0&&ie.fog!==_t||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Vt.numPlanes||ie.numIntersection!==Vt.numIntersection)||ie.vertexAlphas!==ee||ie.vertexTangents!==Zt||ie.morphTargets!==Qt||ie.morphNormals!==Pe||ie.morphColors!==mn||ie.toneMapping!==Ve||Ot.isWebGL2===!0&&ie.morphTargetsCount!==Se)&&(Ae=!0):(Ae=!0,ie.__version=W.version);let Ei=ie.currentProgram;Ae===!0&&(Ei=Pt(W,F,O));let ul=!1,Hs=!1,Ar=!1;const $e=Ei.getUniforms(),wi=ie.uniforms;if(Et.useProgram(Ei.program)&&(ul=!0,Hs=!0,Ar=!0),W.id!==N&&(N=W.id,Hs=!0),ul||M!==w){$e.setValue(z,"projectionMatrix",w.projectionMatrix),$e.setValue(z,"viewMatrix",w.matrixWorldInverse);const vn=$e.map.cameraPosition;vn!==void 0&&vn.setValue(z,Lt.setFromMatrixPosition(w.matrixWorld)),Ot.logarithmicDepthBuffer&&$e.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&$e.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Hs=!0,Ar=!0)}if(O.isSkinnedMesh){$e.setOptional(z,O,"bindMatrix"),$e.setOptional(z,O,"bindMatrixInverse");const vn=O.skeleton;vn&&(Ot.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),$e.setValue(z,"boneTexture",vn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&($e.setOptional(z,O,"batchingTexture"),$e.setValue(z,"batchingTexture",O._matricesTexture,E));const Rr=B.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0&&Ot.isWebGL2===!0)&&Bt.update(O,B,Ei),(Hs||ie.receiveShadow!==O.receiveShadow)&&(ie.receiveShadow=O.receiveShadow,$e.setValue(z,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(wi.envMap.value=jt,wi.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),Hs&&($e.setValue(z,"toneMappingExposure",y.toneMappingExposure),ie.needsLights&&Fe(wi,Ar),_t&&W.fog===!0&&ft.refreshFogUniforms(wi,_t),ft.refreshMaterialUniforms(wi,W,Q,V,vt),ir.upload(z,ge(ie),wi,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ir.upload(z,ge(ie),wi,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&$e.setValue(z,"center",O.center),$e.setValue(z,"modelViewMatrix",O.modelViewMatrix),$e.setValue(z,"normalMatrix",O.normalMatrix),$e.setValue(z,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const vn=W.uniformsGroups;for(let Cr=0,Eu=vn.length;Cr<Eu;Cr++)if(Ot.isWebGL2){const dl=vn[Cr];ot.update(dl,Ei),ot.bind(dl,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function Fe(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function We(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,F,B){G.get(w.texture).__webglTexture=F,G.get(w.depthTexture).__webglTexture=B;const W=G.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=B===void 0,W.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const B=G.get(w);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,B=0){S=w,C=F,R=B;let W=!0,O=null,_t=!1,Ut=!1;if(w){const jt=G.get(w);jt.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):jt.__webglFramebuffer===void 0?E.setupRenderTarget(w):jt.__hasExternalTextures&&E.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);const ee=w.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ut=!0);const Zt=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[F])?O=Zt[F][B]:O=Zt[F],_t=!0):Ot.isWebGL2&&w.samples>0&&E.useMultisampledRTT(w)===!1?O=G.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?O=Zt[B]:O=Zt,A.copy(w.viewport),U.copy(w.scissor),D=w.scissorTest}else A.copy(et).multiplyScalar(Q).floor(),U.copy(ct).multiplyScalar(Q).floor(),D=ht;if(Et.bindFramebuffer(z.FRAMEBUFFER,O)&&Ot.drawBuffers&&W&&Et.drawBuffers(w,O),Et.viewport(A),Et.scissor(U),Et.setScissorTest(D),_t){const jt=G.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,jt.__webglTexture,B)}else if(Ut){const jt=G.get(w.texture),ee=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.__webglTexture,B||0,ee)}N=-1},this.readRenderTargetPixels=function(w,F,B,W,O,_t,Ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Wt=Wt[Ut]),Wt){Et.bindFramebuffer(z.FRAMEBUFFER,Wt);try{const jt=w.texture,ee=jt.format,Zt=jt.type;if(ee!==un&&yt.convert(ee)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qt=Zt===io&&(It.has("EXT_color_buffer_half_float")||Ot.isWebGL2&&It.has("EXT_color_buffer_float"));if(Zt!==xi&&yt.convert(Zt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Zt===$n&&(Ot.isWebGL2||It.has("OES_texture_float")||It.has("WEBGL_color_buffer_float")))&&!Qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&B>=0&&B<=w.height-O&&z.readPixels(F,B,W,O,yt.convert(ee),yt.convert(Zt),_t)}finally{const jt=S!==null?G.get(S).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,jt)}}},this.copyFramebufferToTexture=function(w,F,B=0){const W=Math.pow(2,-B),O=Math.floor(F.image.width*W),_t=Math.floor(F.image.height*W);E.setTexture2D(F,0),z.copyTexSubImage2D(z.TEXTURE_2D,B,0,0,w.x,w.y,O,_t),Et.unbindTexture()},this.copyTextureToTexture=function(w,F,B,W=0){const O=F.image.width,_t=F.image.height,Ut=yt.convert(B.format),Wt=yt.convert(B.type);E.setTexture2D(B,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment),F.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,w.x,w.y,O,_t,Ut,Wt,F.image.data):F.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,Ut,F.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,w.x,w.y,Ut,Wt,F.image),W===0&&B.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(w,F,B,W,O=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=w.max.x-w.min.x+1,Ut=w.max.y-w.min.y+1,Wt=w.max.z-w.min.z+1,jt=yt.convert(W.format),ee=yt.convert(W.type);let Zt;if(W.isData3DTexture)E.setTexture3D(W,0),Zt=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),Zt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const Qt=z.getParameter(z.UNPACK_ROW_LENGTH),Pe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),mn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ve=z.getParameter(z.UNPACK_SKIP_ROWS),Gn=z.getParameter(z.UNPACK_SKIP_IMAGES),Se=B.isCompressedTexture?B.mipmaps[O]:B.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Se.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,w.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,w.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,w.min.z),B.isDataTexture||B.isData3DTexture?z.texSubImage3D(Zt,O,F.x,F.y,F.z,_t,Ut,Wt,jt,ee,Se.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Zt,O,F.x,F.y,F.z,_t,Ut,Wt,jt,Se.data)):z.texSubImage3D(Zt,O,F.x,F.y,F.z,_t,Ut,Wt,jt,ee,Se),z.pixelStorei(z.UNPACK_ROW_LENGTH,Qt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,mn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ve),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Gn),O===0&&W.generateMipmaps&&z.generateMipmap(Zt),Et.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){C=0,R=0,S=null,Et.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ja?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===yr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===oe?Xi:Uh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Xi?oe:Te}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class $g extends tu{}$g.prototype.isWebGL1Renderer=!0;class eu extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class nu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new L;class ro{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ro(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class iu extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fs;const Vs=new L,ps=new L,ms=new L,gs=new Yt,Xs=new Yt,su=new ne,No=new L,qs=new L,Fo=new L,Nc=new Yt,oa=new Yt,Fc=new Yt;class Zg extends be{constructor(t=new iu){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new Ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nu(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new ro(n,3,0,!1)),fs.setAttribute("uv",new ro(n,2,3,!1))}this.geometry=fs,this.material=t,this.center=new Yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),su.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;ko(No.set(-.5,-.5,0),ms,r,ps,i,s),ko(qs.set(.5,-.5,0),ms,r,ps,i,s),ko(Fo.set(.5,.5,0),ms,r,ps,i,s),Nc.set(0,0),oa.set(1,0),Fc.set(1,1);let a=t.ray.intersectTriangle(No,qs,Fo,!1,Vs);if(a===null&&(ko(qs.set(-.5,.5,0),ms,r,ps,i,s),oa.set(0,1),a=t.ray.intersectTriangle(No,Fo,qs,!1,Vs),a===null))return;const l=t.ray.origin.distanceTo(Vs);l<t.near||l>t.far||e.push({distance:l,point:Vs.clone(),uv:Sn.getInterpolation(Vs,No,qs,Fo,Nc,oa,Fc,new Yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ko(o,t,e,n,i,s){gs.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(Xs.x=s*gs.x-i*gs.y,Xs.y=i*gs.x+s*gs.y):Xs.copy(gs),o.copy(t),o.x+=Xs.x,o.y+=Xs.y,o.applyMatrix4(su)}const kc=new L,Oc=new _e,Hc=new _e,Jg=new L,Bc=new ne,Oo=new L,ra=new Hn,zc=new ne,aa=new vr;class Qg extends dt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yl,this.bindMatrix=new ne,this.bindMatrixInverse=new ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Oo),this.boundingBox.expandByPoint(Oo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Oo),this.boundingSphere.expandByPoint(Oo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(i),t.ray.intersectsSphere(ra)!==!1&&(zc.copy(i).invert(),aa.copy(t.ray).applyMatrix4(zc),!(this.boundingBox!==null&&aa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,aa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new _e,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===yl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ld?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Oc.fromBufferAttribute(i.attributes.skinIndex,t),Hc.fromBufferAttribute(i.attributes.skinWeight,t),kc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const r=Hc.getComponent(s);if(r!==0){const a=Oc.getComponent(s);Bc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Jg.copy(kc).applyMatrix4(Bc),r)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class ou extends be{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sl extends He{constructor(t=null,e=1,n=1,i,s,r,a,l,c=qe,d=qe,h,u){super(null,r,a,l,c,d,i,s,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gc=new ne,t_=new ne;class ol{constructor(t=[],e=[]){this.uuid=Ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ne)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ne;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=t.length;s<r;s++){const a=t[s]?t[s].matrixWorld:t_;Gc.multiplyMatrices(a,e[s]),Gc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ol(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new sl(e,t,t,un,$n);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let r=e[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new ou),this.bones.push(r),this.boneInverses.push(new ne().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const r=e[i];t.bones.push(r.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ga extends Ce{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _s=new ne,Wc=new ne,Ho=[],Vc=new xn,e_=new ne,Ys=new dt,Ks=new Hn;class n_ extends dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ga(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,e_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),Vc.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(Vc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),Ks.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,_s),Wc.multiplyMatrices(n,_s),Ys.matrixWorld=Wc,Ys.raycast(t,Ho);for(let r=0,a=Ho.length;r<a;r++){const l=Ho[r];l.instanceId=s,l.object=this,e.push(l)}Ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ga(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends En{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xc=new L,qc=new L,Yc=new ne,la=new vr,Bo=new Hn;class Tr extends be{constructor(t=new Ue,e=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Xc.fromBufferAttribute(e,i-1),qc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Xc.distanceTo(qc);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(i),Bo.radius+=s,t.ray.intersectsSphere(Bo)===!1)return;Yc.copy(i).invert(),la.copy(t.ray).applyMatrix4(Yc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,d=new L,h=new L,u=new L,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,r.start),x=Math.min(m.count,r.start+r.count);for(let y=p,b=x-1;y<b;y+=f){const C=m.getX(y),R=m.getX(y+1);if(c.fromBufferAttribute(g,C),d.fromBufferAttribute(g,R),la.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(u);N<t.near||N>t.far||e.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let y=p,b=x-1;y<b;y+=f){if(c.fromBufferAttribute(g,y),d.fromBufferAttribute(g,y+1),la.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(u);R<t.near||R>t.far||e.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Kc=new L,jc=new L;class ru extends Tr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Kc.fromBufferAttribute(e,i),jc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kc.distanceTo(jc);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class i_ extends Tr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ao extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $c=new ne,Wa=new vr,zo=new Hn,Go=new L;class pr extends be{constructor(t=new Ue,e=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(i),zo.radius+=s,t.ray.intersectsSphere(zo)===!1)return;$c.copy(i).invert(),Wa.copy(t.ray).applyMatrix4($c);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=u,_=f;m<_;m++){const g=c.getX(m);Go.fromBufferAttribute(h,g),Zc(Go,g,l,i,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let m=u,_=f;m<_;m++)Go.fromBufferAttribute(h,m),Zc(Go,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zc(o,t,e,n,i,s,r){const a=Wa.distanceSqToPoint(o);if(a<e){const l=new L;Wa.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}class Ye extends He{constructor(t,e,n,i,s,r,a,l,c){super(t,e,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Er extends Ue{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],r=[],a=[],l=[],c=new L,d=new Yt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(r[u]/t+1)/2,d.y=(r[u+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pe extends Ue{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],h=[],u=[],f=[];let m=0;const _=[],g=n/2;let p=0;x(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function x(){const b=new L,C=new L;let R=0;const S=(e-t)/n;for(let N=0;N<=s;N++){const M=[],A=N/s,U=A*(e-t)+t;for(let D=0;D<=i;D++){const q=D/i,I=q*l+a,k=Math.sin(I),V=Math.cos(I);C.x=U*k,C.y=-A*n+g,C.z=U*V,h.push(C.x,C.y,C.z),b.set(k,S,V).normalize(),u.push(b.x,b.y,b.z),f.push(q,1-A),M.push(m++)}_.push(M)}for(let N=0;N<i;N++)for(let M=0;M<s;M++){const A=_[M][N],U=_[M+1][N],D=_[M+1][N+1],q=_[M][N+1];d.push(A,U,q),d.push(U,D,q),R+=6}c.addGroup(p,R,0),p+=R}function y(b){const C=m,R=new Yt,S=new L;let N=0;const M=b===!0?t:e,A=b===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,g*A,0),u.push(0,A,0),f.push(.5,.5),m++;const U=m;for(let D=0;D<=i;D++){const I=D/i*l+a,k=Math.cos(I),V=Math.sin(I);S.x=M*V,S.y=g*A,S.z=M*k,h.push(S.x,S.y,S.z),u.push(0,A,0),R.x=k*.5+.5,R.y=V*.5*A+.5,f.push(R.x,R.y),m++}for(let D=0;D<i;D++){const q=C+D,I=U+D;b===!0?d.push(I,I+1,q):d.push(I+1,I,q),N+=3}c.addGroup(p,N,b===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rl extends pe{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new rl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Un extends Ue{constructor(t=.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],d=[];let h=t;const u=(e-t)/i,f=new L,m=new Yt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*r;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,d.push(m.x,m.y)}h+=u}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,y=x,b=x+n+1,C=x+n+2,R=x+1;a.push(y,b,R),a.push(b,C,R)}}this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ue extends Ue{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const d=[],h=new L,u=new L,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let b=0;p===0&&r===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let C=0;C<=e;C++){const R=C/e;h.x=-t*Math.cos(i+R*s)*Math.sin(r+y*a),h.y=t*Math.cos(r+y*a),h.z=t*Math.sin(i+R*s)*Math.sin(r+y*a),m.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),g.push(R+b,1-y),x.push(c++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=d[p][x+1],b=d[p][x],C=d[p+1][x],R=d[p+1][x+1];(p!==0||r>0)&&f.push(y,b,R),(p!==n-1||l<Math.PI)&&f.push(b,C,R)}this.setIndex(f),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mr extends Ue{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],d=new L,h=new L,u=new L;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*s,g=f/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;r.push(_,g,x),r.push(g,p,x)}this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xe extends En{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ti extends xe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class s_ extends En{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bt(16777215),this.specular=new bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Wo(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function o_(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function r_(o){function t(i,s){return o[i]-o[s]}const e=o.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Jc(o,t,e){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[r++]=o[a+l]}return i}function au(o,t,e,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(t.push(s.time),e.push.apply(e,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(t.push(s.time),e.push(r)),s=o[i++];while(s!==void 0)}class co{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}for(;n<r;){const a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class a_ extends co{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xl,endingEnd:Xl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,r=t+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case ql:s=t,a=2*e-n;break;case Yl:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ql:r=t,l=2*n-e;break;case Yl:r=1,l=n+i[1]-i[0];break;default:r=t-1,l=e}const c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=r*d}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,x=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,b=f*g-f*_;for(let C=0;C!==a;++C)s[C]=p*r[d+C]+x*r[c+C]+y*r[l+C]+b*r[h+C];return s}}class l_ extends co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(n-e)/(i-e),h=1-d;for(let u=0;u!==a;++u)s[u]=r[c+u]*h+r[l+u]*d;return s}}class c_ extends co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Bn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wo(e,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wo(t.times,Array),values:Wo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new c_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new l_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new a_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case so:e=this.InterpolantFactoryMethodDiscrete;break;case Cs:e=this.InterpolantFactoryMethodLinear;break;case Nr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return Nr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(i!==void 0&&o_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Nr,s=t.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,u=h-n,f=h+n;for(let m=0;m!==n;++m){const _=e[h+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];const h=a*n,u=r*n;for(let f=0;f!==n;++f)e[u+f]=e[h+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Cs;class Fs extends Bn{}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=so;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class lu extends Bn{}lu.prototype.ValueTypeName="color";class Is extends Bn{}Is.prototype.ValueTypeName="number";class h_ extends co{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let d=c+a;c!==d;c+=4)hn.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Yi extends Bn{InterpolantFactoryMethodLinear(t){return new h_(this.times,this.values,this.getValueSize(),t)}}Yi.prototype.ValueTypeName="quaternion";Yi.prototype.DefaultInterpolation=Cs;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Bn{}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=so;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends Bn{}Ds.prototype.ValueTypeName="vector";class u_{constructor(t,e=-1,n,i=_d){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,a=n.length;r!==a;++r)e.push(f_(n[r]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,r=n.length;s!==r;++s)e.push(Bn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=r_(l);l=Jc(l,1,d),c=Jc(c,1,d),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Is(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,r)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],d=c.name.match(s);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,m,_){if(f.length!==0){const g=[],p=[];au(f,g,p,m),g.length!==0&&_.push(new h(u,g,p))}},i=[],s=t.name||"default",r=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)f[u[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==u[m].morphTargets.length;++x){const y=u[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new Is(".morphTargetInfluence["+_+"]",g,p))}l=f.length*r}else{const f=".bones["+e[h].name+"]";n(Ds,f+".position",u,"pos",i),n(Yi,f+".quaternion",u,"rot",i),n(Ds,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function d_(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Is;case"vector":case"vector2":case"vector3":case"vector4":return Ds;case"color":return lu;case"quaternion":return Yi;case"bool":case"boolean":return Fs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function f_(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=d_(o.type);if(o.times===void 0){const e=[],n=[];au(o.keys,e,n,"value"),o.times=e,o.values=n}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const mi={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class p_{constructor(t,e,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,s===!1&&i.onStart!==void 0&&i.onStart(d,r,a),s=!0},this.itemEnd=function(d){r++,i.onProgress!==void 0&&i.onProgress(d,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null}}}const m_=new p_;class Os{constructor(t){this.manager=t!==void 0?t:m_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Os.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class g_ extends Error{constructor(t,e){super(t),this.response=e}}class cu extends Os{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=mi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Kn[t]!==void 0){Kn[t].push({onLoad:e,onProgress:n,onError:i});return}Kn[t]=[],Kn[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Kn[t],h=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:y,value:b})=>{if(y)p.close();else{_+=b.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let R=0,S=d.length;R<S;R++){const N=d[R];N.onProgress&&N.onProgress(C)}p.enqueue(b),x()}})}}});return new Response(g)}else throw new g_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{mi.add(t,c);const d=Kn[t];delete Kn[t];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=Kn[t];if(d===void 0)throw this.manager.itemError(t),c;delete Kn[t];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class __ extends Os{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=mi.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=oo("img");function l(){d(),mi.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){d(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Ki extends Os{constructor(t){super(t)}load(t,e,n,i){const s=new He,r=new __(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class ho extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class hu extends ho{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ca=new ne,Qc=new L,th=new L;class al{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qc),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class x_ extends al{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ps*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class y_ extends ho{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new x_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const eh=new ne,js=new L,ha=new L;class v_ extends al{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),js.setFromMatrixPosition(t.matrixWorld),n.position.copy(js),ha.copy(n.position),ha.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ha),n.updateMatrixWorld(),i.makeTranslation(-js.x,-js.y,-js.z),eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh)}}class Va extends ho{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new v_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class M_ extends al{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lo extends ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new M_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uu extends ho{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class no{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class b_ extends Os{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=mi.get(t);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),mi.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});mi.add(t,l),s.manager.itemStart(t)}}class S_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nh(){return(typeof performance>"u"?Date:performance).now()}const ll="\\[\\]\\.:\\/",T_=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",E_="[^"+ll.replace("\\.","")+"]",w_=/((?:WC+[\/:])*)/.source.replace("WC",cl),A_=/(WCOD+)?/.source.replace("WCOD",E_),R_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),C_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),P_=new RegExp("^"+w_+A_+R_+C_+"$"),L_=["material","materials","bones","map"];class I_{constructor(t,e,n){const i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class he{constructor(t,e,n){this.path=e,this.parsedPath=n||he.parseTrackName(e),this.node=he.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new he.Composite(t,e,n):new he(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(T_,"")}static parseTrackName(t){const e=P_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);L_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=he.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const r=t[i];if(r===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}he.Composite=I_;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class D_ extends ru{constructor(t=10,e=10,n=4473924,i=8947848){n=new bt(n),i=new bt(i);const s=e/2,r=t/e,a=t/2,l=[],c=[];for(let u=0,f=0,m=-a;u<=e;u++,m+=r){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=u===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const d=new Ue;d.setAttribute("position",new ye(l,3)),d.setAttribute("color",new ye(c,3));const h=new Sr({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);class U_{domElement;three;constructor(){this.three=new tu({antialias:!1,powerPreference:"high-performance"}),this.domElement=this.three.domElement,this.three.setPixelRatio(window.devicePixelRatio),this.three.setClearColor(16,1),this.three.toneMapping=Jn,this.three.outputColorSpace=oe}setSize(t,e){this.three.setSize(t,e,!1),this.domElement.style.width="100vw",this.domElement.style.height="100vh",this.domElement.style.position="fixed",this.domElement.style.top="0",this.domElement.style.left="0"}dispose(){this.three.dispose()}}class N_{group;skyMat;constructor(){this.group=new an;const t=new ue(5e4,64,48);t.scale(-1,1,1),this.skyMat=new Dn({vertexShader:`
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
      `,uniforms:{},side:ln,depthWrite:!1}),this.group.add(new dt(t,this.skyMat))}update(t){}getMesh(){return this.group}}class F_{scene;camera;clock=new S_;frames=0;lastFpsUpdate=0;fps=0;stars;constructor(){this.scene=new eu,this.scene.background=new bt(0),this.stars=new N_,this.scene.add(this.stars.getMesh()),this.scene.add(new uu(3359846,.15)),this.scene.add(new hu(4482696,1122867,.2)),this.camera=new en(45,window.innerWidth/window.innerHeight,1,5e7),this.camera.position.set(0,0,10),this.camera.lookAt(0,0,0)}update(t){const e=this.clock.getElapsedTime();this.frames++,e-this.lastFpsUpdate>=1&&(this.fps=this.frames/(e-this.lastFpsUpdate),this.frames=0,this.lastFpsUpdate=e),this.stars.getMesh().position.copy(this.camera.position),this.stars.update(t)}getFps(){return this.fps}}class k_{root;helpOverlay=null;onPlay;onVab;onSettings;constructor(t,e,n){this.onPlay=t,this.onVab=e,this.onSettings=n,this.root=document.createElement("div"),this.root.className="panel",this.root.style.cssText=`
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
    `,this.root.appendChild(i);const s=(r,a,l)=>{const c=document.createElement("button");return c.className=`btn btn--${a}`,c.textContent=r,c.style.cssText="margin: 6px; min-width: 220px; padding: 12px 24px; font-size: 14px;",c.addEventListener("click",l),c};this.root.appendChild(s("FLIGHT","primary",this.onPlay)),this.root.appendChild(s("VEHICLE ASSEMBLY","secondary",this.onVab)),this.root.appendChild(s("SETTINGS","ghost",this.onSettings)),this.root.appendChild(s("GUIDE","ghost",()=>this.toggleHelp()))}toggleHelp(){if(this.helpOverlay){this.helpOverlay.remove(),this.helpOverlay=null;return}const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;z-index:600;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,8,20,0.95);",t.innerHTML='<div style="max-width:520px;padding:32px;font-family:sans-serif;line-height:1.6;color:#ddd;"><h2 style="color:#c89838;font-size:20px;margin-bottom:12px;">HOW TO BUILD & LAUNCH</h2><p style="font-size:13px;color:#889;margin-bottom:8px;">1. Click <b>VEHICLE ASSEMBLY</b> to build rocket</p><p style="font-size:13px;color:#889;margin-bottom:8px;">2. Add capsule → tank → engine (bottom to top)</p><p style="font-size:13px;color:#889;margin-bottom:16px;">3. Click <b>FLIGHT</b> — press <b>W</b>, wait countdown</p><h2 style="color:#c89838;font-size:20px;margin-bottom:8px;">CONTROLS</h2><table style="width:100%;font-size:13px;border-collapse:collapse;"><tr><td style="color:#889;padding:3px 12px 3px 0;">W/S</td><td>Throttle</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">↑↓←→</td><td>Pitch / Yaw</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">C</td><td>Free camera</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">F</td><td>Reset camera</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">T</td><td>SAS toggle</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Space</td><td>Stage</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">M/Tab</td><td>Map view</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Q/E</td><td>Time warp</td></tr><tr><td style="color:#889;padding:3px 12px 3px 0;">Mouse</td><td>Orbit / Zoom camera</td></tr></table><button class="btn btn--primary" style="margin-top:20px;width:100%;padding:12px;" id="help-close">CLOSE</button></div>',t.querySelector("#help-close").addEventListener("click",()=>{t.remove(),this.helpOverlay=null}),document.body.appendChild(t),this.helpOverlay=t}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove(),this.helpOverlay?.remove()}}const du=[{id:"capsule_mk1",name:"MK-1 Capsule",kind:"capsule",size:"M",mass:1200,crewCapacity:1,hasParachute:!0,dragCoeff:.5},{id:"tank_s_lfo",name:"Fuel Tank S (LFO)",kind:"tank",size:"S",mass:200,fuelCapacity:4500,fuelType:"LFO",dragCoeff:.4},{id:"tank_m_lfo",name:"Fuel Tank M (LFO)",kind:"tank",size:"M",mass:600,fuelCapacity:45e3,fuelType:"LFO",dragCoeff:.4},{id:"tank_l_lfo",name:"Fuel Tank L (LFO)",kind:"tank",size:"L",mass:1200,fuelCapacity:9e4,fuelType:"LFO",dragCoeff:.4},{id:"tank_xl_lfo",name:"Fuel Tank XL (LFO)",kind:"tank",size:"XL",mass:2500,fuelCapacity:225e3,fuelType:"LFO",dragCoeff:.4},{id:"engine_ant",name:'"Ant" Engine',kind:"engine",size:"S",mass:50,thrust:684e3,isp:350,fuelType:"LFO"},{id:"engine_vector",name:'"Vector" Engine',kind:"engine",size:"M",mass:400,thrust:62e5,isp:340,fuelType:"LFO"},{id:"engine_mastodon",name:'"Mastodon" Engine',kind:"engine",size:"L",mass:1200,thrust:155e5,isp:330,fuelType:"LFO"},{id:"engine_mammoth",name:'"Mammoth" Engine',kind:"engine",size:"XL",mass:3e3,thrust:39e6,isp:310,fuelType:"LFO"},{id:"parachute_mk16",name:"Mk-16 Parachute",kind:"parachute",size:"M",mass:30,dragCoeff:5},{id:"legs_landini",name:'"Landini" Landing Legs',kind:"legs",size:"S",mass:80,dragCoeff:.1},{id:"heatshield_s",name:"Heat Shield S (Ablative)",kind:"heatshield",size:"S",mass:50,heatCapacity:5e4,dragCoeff:1.2},{id:"heatshield_m",name:"Heat Shield M (Ablative)",kind:"heatshield",size:"M",mass:150,heatCapacity:15e4,dragCoeff:1.2},{id:"heatshield_l",name:"Heat Shield L (Ablative)",kind:"heatshield",size:"L",mass:400,heatCapacity:4e5,dragCoeff:1.2},{id:"decoupler_1",name:"TD-1 Decoupler",kind:"decoupler",size:"M",mass:100,dragCoeff:.3},{id:"agena_target",name:"Agena Target Vehicle",kind:"gltf",size:"M",mass:1500,dragCoeff:.3,gltfUrl:"/models/agena.glb",gltfScale:.0015},{id:"apollo_soyuz",name:"Apollo Soyuz",kind:"gltf",size:"L",mass:5e3,dragCoeff:.3,gltfUrl:"/models/apollo_soyuz.glb",gltfScale:.0015},{id:"saturn_v",name:"Saturn V",kind:"gltf",size:"XL",mass:3e6,dragCoeff:.3,gltfUrl:"/models/saturn_v.glb",gltfScale:.0015},{id:"ares_1",name:"Ares I",kind:"gltf",size:"XL",mass:2e6,dragCoeff:.3,gltfUrl:"/models/ares_1.glb",gltfScale:.0015},{id:"apollo_lunar_module",name:"Apollo Lunar Module",kind:"gltf",size:"L",mass:15e3,dragCoeff:.3,gltfUrl:"/models/apollo_lunar_module.glb",gltfScale:.002},{id:"atlas_6",name:"Atlas 6 (Friendship 7)",kind:"gltf",size:"L",mass:12e4,dragCoeff:.3,gltfUrl:"/models/atlas_6.glb",gltfScale:.0015},{id:"atlas_9",name:"Atlas 9 (Faith 7)",kind:"gltf",size:"L",mass:12e4,dragCoeff:.3,gltfUrl:"/models/atlas_9.glb",gltfScale:.0015},{id:"crawler",name:"Crawler Transporter",kind:"gltf",size:"XL",mass:27e5,dragCoeff:.3,gltfUrl:"/models/crawler.glb",gltfScale:.001}];function sr(o){return du.find(t=>t.id===o)}function ih(o,t){if(t===xd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===ka||t===Dh){let e=o.getIndex();if(e===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=e.count-2,i=[];if(t===ka)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class O_ extends Os{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new W_(e)}),this.register(function(e){return new J_(e)}),this.register(function(e){return new Q_(e)}),this.register(function(e){return new tx(e)}),this.register(function(e){return new X_(e)}),this.register(function(e){return new q_(e)}),this.register(function(e){return new Y_(e)}),this.register(function(e){return new K_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new j_(e)}),this.register(function(e){return new V_(e)}),this.register(function(e){return new Z_(e)}),this.register(function(e){return new $_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new ex(e)}),this.register(function(e){return new nx(e)})}load(t,e,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=no.extractUrlBase(t);r=no.resolveURL(c,this.path)}else r=no.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new cu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,r,function(d){e(d),s.manager.itemEnd(t)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===fu){try{r[ae.KHR_BINARY_GLTF]=new ix(t)}catch(h){i&&i(h);return}s=JSON.parse(r[ae.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new gx(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const h=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(h){case ae.KHR_MATERIALS_UNLIT:r[h]=new z_;break;case ae.KHR_DRACO_MESH_COMPRESSION:r[h]=new sx(s,this.dracoLoader);break;case ae.KHR_TEXTURE_TRANSFORM:r[h]=new ox;break;case ae.KHR_MESH_QUANTIZATION:r[h]=new rx;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function H_(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const ae={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class B_{constructor(t){this.parser=t,this.name=ae.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const d=new bt(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Te);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new lo(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Va(d),c.distance=h;break;case"spot":c=new y_(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class z_{constructor(){this.name=ae.KHR_MATERIALS_UNLIT}getMaterialType(){return Me}extendParams(t,e,n){const i=[];t.color=new bt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],Te),t.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,oe))}return Promise.all(i)}}class G_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class W_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Yt(a,a)}return Promise.all(s)}}class V_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class X_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new bt(0,0,0),e.sheenRoughness=0,e.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Te)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",r.sheenColorTexture,oe)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class q_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Y_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return e.attenuationColor=new bt().setRGB(a[0],a[1],a[2],Te),Promise.all(s)}}class K_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class j_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return e.specularColor=new bt().setRGB(a[0],a[1],a[2],Te),r.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",r.specularColorTexture,oe)),Promise.all(s)}}class $_{constructor(t){this.parser=t,this.name=ae.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(s)}}class Z_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class J_{constructor(t){this.parser=t,this.name=ae.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,r)}}class Q_{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class tx{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class ex{constructor(t){this.name=ae.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(d*h);return r.decodeGltfBuffer(new Uint8Array(f),d,h,u,i.mode,i.filter),f})})}else return null}}class nx{constructor(t){this.name=ae.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==bn.TRIANGLES&&c.mode!==bn.TRIANGLE_STRIP&&c.mode!==bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,f=[];for(const m of h){const _=new ne,g=new L,p=new hn,x=new L(1,1,1),y=new n_(m.geometry,m.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&x.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,_.compose(g,p,x));for(const b in l)if(b==="_COLOR_0"){const C=l[b];y.instanceColor=new Ga(C.array,C.itemSize,C.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&m.geometry.setAttribute(b,l[b]);be.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const fu="glTF",$s=12,sh={JSON:1313821514,BIN:5130562};class ix{constructor(t){this.name=ae.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,$s),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==fu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-$s,s=new DataView(t,$s);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===sh.JSON){const c=new Uint8Array(t,$s+r,a);this.content=n.decode(c)}else if(l===sh.BIN){const c=$s+r;this.body=t.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sx{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ae.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,a={},l={},c={};for(const d in r){const h=Xa[d]||d.toLowerCase();a[h]=r[d]}for(const d in t.attributes){const h=Xa[d]||d.toLowerCase();if(r[d]!==void 0){const u=n.accessors[t.attributes[d]],f=Ts[u.componentType];c[h]=f.name,l[h]=u.normalized===!0}}return e.getDependency("bufferView",s).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(f){for(const m in f.attributes){const _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}h(f)},a,c,Te,u)})})}}class ox{constructor(){this.name=ae.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class rx{constructor(){this.name=ae.KHR_MESH_QUANTIZATION}}class pu extends co{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let r=0;r!==i;r++)e[r]=n[s+r];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=i-e,h=(n-e)/d,u=h*h,f=u*h,m=t*c,_=m-c,g=-2*f+3*u,p=f-u,x=1-g,y=p-u+h;for(let b=0;b!==a;b++){const C=r[_+b+a],R=r[_+b+l]*d,S=r[m+b+a],N=r[m+b]*d;s[b]=x*C+y*R+g*S+p*N}return s}}const ax=new hn;class lx extends pu{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return ax.fromArray(s).normalize().toArray(s),s}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},oh={9728:qe,9729:Le,9984:Fa,9985:Eh,9986:nr,9987:vi},rh={33071:De,33648:lr,10497:dn},ua={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cx={CUBICSPLINE:void 0,LINEAR:Cs,STEP:so},da={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hx(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new xe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:In})),o.DefaultMaterial}function Li(o,t,e){for(const n in e.extensions)o[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function fi(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ux(o,t,e){let n=!1,i=!1,s=!1;for(let c=0,d=t.length;c<d;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,d=t.length;c<d;c++){const h=t[c];if(n){const u=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):o.attributes.position;r.push(u)}if(i){const u=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(u)}if(s){const u=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(u)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],u=c[2];return n&&(o.morphAttributes.position=d),i&&(o.morphAttributes.normal=h),s&&(o.morphAttributes.color=u),o.morphTargetsRelative=!0,o})}function dx(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)o.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fx(o){let t;const e=o.extensions&&o.extensions[ae.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+fa(e.attributes):t=o.indices+":"+fa(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)t+=":"+fa(o.targets[n]);return t}function fa(o){let t="";const e=Object.keys(o).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+o[e[n]]+";";return t}function qa(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function px(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const mx=new ne;class gx{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new H_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Ki(this.options.manager):this.textureLoader=new b_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Li(s,a,i),fi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const r=e[i].joints;for(let a=0,l=r.length;a<l;a++)t[r[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const r=t[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,d]of r.children.entries())s(d,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,r){return n.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ae.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(no.resolveURL(e.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const r=ua[i.type],a=Ts[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new Ce(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=ua[i.type],c=Ts[i.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==h){const p=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=e.cache.get(x);y||(_=new c(a,p*f,i.count*f/d),y=new nu(_,f/d),e.cache.add(x,y)),g=new ro(y,l,u%f/d,m)}else a===null?_=new c(i.count*l):_=new c(a,u,i.count*l),g=new Ce(_,l,m);if(i.sparse!==void 0){const p=ua.SCALAR,x=Ts[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,C=new x(r[1],y,i.sparse.count*p),R=new c(r[2],b,i.sparse.count*l);a!==null&&(g=new Ce(g.array.slice(),g.itemSize,g.normalized));for(let S=0,N=C.length;S<N;S++){const M=C[S];if(g.setX(M,R[S*l]),l>=2&&g.setY(M,R[S*l+1]),l>=3&&g.setZ(M,R[S*l+2]),l>=4&&g.setW(M,R[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,r=e.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,r=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(d){d.flipY=!1,d.name=r.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(s.samplers||{})[r.sampler]||{};return d.magFilter=oh[u.magFilter]||Le,d.minFilter=oh[u.minFilter]||vi,d.wrapS=rh[u.wrapS]||dn,d.wrapT=rh[u.wrapT]||dn,i.associations.set(d,{textures:t}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const r=i.images[t],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:r.mimeType});return l=a.createObjectURL(u),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(u,f){let m=u;e.isImageBitmapLoader===!0&&(m=function(_){const g=new He(_);g.needsUpdate=!0,u(g)}),e.load(no.resolveURL(h,s.path),m,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=r.mimeType||px(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=d,d}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[ae.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ae.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[ae.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),t[e]=r,r})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ao,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Sr,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return xe}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let r;const a={},l=s.extensions||{},c=[];if(l[ae.KHR_MATERIALS_UNLIT]){const h=i[ae.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(a,s,e))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new bt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Te),a.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",h.baseColorTexture,oe)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Ie);const d=s.alphaMode||da.OPAQUE;if(d===da.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===da.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Me&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Yt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&r!==Me&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Me){const h=s.emissiveFactor;a.emissive=new bt().setRGB(h[0],h[1],h[2],Te)}return s.emissiveTexture!==void 0&&r!==Me&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,oe)),Promise.all(c).then(function(){const h=new r(a);return s.name&&(h.name=s.name),fi(h,s),e.associations.set(h,{materials:t}),s.extensions&&Li(i,h,s),h})}createUniqueName(t){const e=he.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ae.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return ah(l,a,e)})}const r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],d=fx(c),h=i[d];if(h)r.push(h.promise);else{let u;c.extensions&&c.extensions[ae.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=ah(new Ue,c,e),i[d]={primitive:c,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const d=r[l].material===void 0?hx(this.cache):this.getDependency("material",r[l].material);a.push(d)}return a.push(e.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let f=0,m=d.length;f<m;f++){const _=d[f],g=r[f];let p;const x=c[f];if(g.mode===bn.TRIANGLES||g.mode===bn.TRIANGLE_STRIP||g.mode===bn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Qg(_,x):new dt(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===bn.TRIANGLE_STRIP?p.geometry=ih(p.geometry,Dh):g.mode===bn.TRIANGLE_FAN&&(p.geometry=ih(p.geometry,ka));else if(g.mode===bn.LINES)p=new ru(_,x);else if(g.mode===bn.LINE_STRIP)p=new Tr(_,x);else if(g.mode===bn.LINE_LOOP)p=new i_(_,x);else if(g.mode===bn.POINTS)p=new pr(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&dx(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),fi(p,s),g.extensions&&Li(i,p,g),e.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&Li(i,h[0],s),h[0];const u=new an;s.extensions&&Li(i,u,s),e.associations.set(u,{meshes:t});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new en(Wd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new nl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),fi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let c=0,d=r.length;c<d;c++){const h=r[c];if(h){a.push(h);const u=new ne;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ol(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,r=[],a=[],l=[],c=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const f=i.channels[h],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(r.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),d.push(_))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let x=0,y=u.length;x<y;x++){const b=u[x],C=f[x],R=m[x],S=_[x],N=g[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const M=n._createAnimationTracks(b,C,R,S,N);if(M)for(let A=0;A<M.length;A++)p.push(M[A])}return new u_(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),r=[],a=i.children||[];for(let c=0,d=a.length;c<d;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,mx)});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let d;if(s.isBone===!0?d=new ou:c.length>1?d=new an:c.length===1?d=c[0]:d=new be,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(s.name&&(d.userData.name=s.name,d.name=r),fi(d,s),s.extensions&&Li(n,d,s),s.matrix!==void 0){const h=new ne;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=t,d}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new an;n.name&&(s.name=i.createUniqueName(n.name)),fi(s,n),n.extensions&&Li(e,s,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let d=0,h=l.length;d<h;d++)s.add(l[d]);const c=d=>{const h=new Map;for(const[u,f]of i.associations)(u instanceof En||u instanceof He)&&h.set(u,f);return d.traverse(u=>{const f=i.associations.get(u);f!=null&&h.set(u,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const r=[],a=t.name?t.name:t.uuid,l=[];ri[s.path]===ri.weights?t.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(ri[s.path]){case ri.weights:c=Is;break;case ri.rotation:c=Yi;break;case ri.position:case ri.scale:c=Ds;break;default:switch(n.itemSize){case 1:c=Is;break;case 2:case 3:default:c=Ds;break}break}const d=i.interpolation!==void 0?cx[i.interpolation]:Cs,h=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const m=new c(l[u]+"."+ri[s.path],e.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),r.push(m)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=qa(e.constructor),i=new Float32Array(e.length);for(let s=0,r=e.length;s<r;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Yi?lx:pu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _x(o,t,e){const n=t.attributes,i=new xn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const d=qa(Ts[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,d=s.length;c<d;c++){const h=s[c];if(h.POSITION!==void 0){const u=e.json.accessors[h.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){const _=qa(Ts[u.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new Hn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function ah(o,t,e){const n=t.attributes,i=[];function s(r,a){return e.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=Xa[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(t.indices!==void 0&&!o.index){const r=e.getDependency("accessor",t.indices).then(function(a){o.setIndex(a)});i.push(r)}return ce.workingColorSpace!==Te&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ce.workingColorSpace}" not supported.`),fi(o,t),_x(o,t,e),Promise.all(i).then(function(){return t.targets!==void 0?ux(o,t.targets,e):o})}const Es=66743e-15,fn=1e-9,pn=25e4,pa=1/50,xx=9.80665,yx=892e23*5*4*1.5*6*2*2*2/15*3,kt=.05,or=28;function ji(o){return("/ellipse/"+o.replace(/^\//,"")).replace(/\/\//g,"/")}class vx{show(t,e=2500){const n=document.createElement("div");n.className="toast",n.textContent=t,n.style.cssText=`
      position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
      z-index: 300;
    `,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),200)},e)}}const Oe=new vx;function Jt(o,t){const e=document.createElement("canvas");e.width=o,e.height=t;const n=e.getContext("2d");return[e,n]}function Mx(o,t){const e=o*2*Math.PI-Math.PI;return[t*Math.PI-Math.PI/2,e]}const bx=[{lat:.7,lon:-1.8,radiusLat:.5,radiusLon:.8,color:"#4a7c3f"},{lat:-.4,lon:-1.3,radiusLat:.6,radiusLon:.35,color:"#5a8c4a"},{lat:.85,lon:.4,radiusLat:.25,radiusLon:.3,color:"#6a9c5a"},{lat:.1,lon:.6,radiusLat:.55,radiusLon:.4,color:"#8a7c3f"},{lat:.7,lon:1.6,radiusLat:.55,radiusLon:1,color:"#6a8c4a"},{lat:-.6,lon:2.4,radiusLat:.25,radiusLon:.3,color:"#9a8c5a"},{lat:1.1,lon:-.9,radiusLat:.2,radiusLon:.2,color:"#8aac7a"}];function Sx(o,t=2){const e=o.width,n=o.height,r=o.getContext("2d").getImageData(0,0,e,n).data,[a,l]=Jt(e,n),c=l.createImageData(e,n),d=c.data,h=(f,m)=>(Math.max(0,Math.min(n-1,m))*e+Math.max(0,Math.min(e-1,f)))*4;for(let f=0;f<n;f++)for(let m=0;m<e;m++){const _=r[h(m-1,f-1)]/255,g=r[h(m,f-1)]/255,p=r[h(m+1,f-1)]/255,x=r[h(m-1,f)]/255,y=r[h(m+1,f)]/255,b=r[h(m-1,f+1)]/255,C=r[h(m,f+1)]/255,R=r[h(m+1,f+1)]/255,S=p+2*y+R-(_+2*x+b),N=b+2*C+R-(_+2*g+p),M=S*t,A=N*t,U=Math.sqrt(M*M+A*A+1),D=(f*e+m)*4;d[D]=Math.round((M/U*.5+.5)*255),d[D+1]=Math.round((A/U*.5+.5)*255),d[D+2]=Math.round(1/U*255),d[D+3]=255}l.putImageData(c,0,0);const u=new Ye(a);return u.wrapS=u.wrapT=dn,u.anisotropy=4,u}function Si(o,t,e,n,i){const s=new Ye(o);s.wrapS=s.wrapT=dn,s.colorSpace=oe,s.anisotropy=4;let r;t&&(r=Sx(t,2));let a;e&&(a=new Ye(e),a.wrapS=a.wrapT=dn,a.anisotropy=4);let l;n&&(l=new Ye(n),l.wrapS=l.wrapT=dn,l.anisotropy=4);let c;return i&&(c=new Ye(i),c.wrapS=c.wrapT=dn,c.anisotropy=4),{color:s,normal:r,roughness:a,metalness:l,ao:c}}function wn(o){let t=o|0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function Ti(o,t,e,n=.02){const i=o.getImageData(0,0,t,e),s=i.data;for(let r=0;r<s.length;r+=4){const a=(Math.random()-.5)*2*n*255;s[r]=Math.min(255,Math.max(0,s[r]+a)),s[r+1]=Math.min(255,Math.max(0,s[r+1]+a)),s[r+2]=Math.min(255,Math.max(0,s[r+2]+a))}o.putImageData(i,0,0)}function Tx(){const[e,n]=Jt(1024,512),i=n.createImageData(1024,512),s=i.data,r=new Float32Array(1024*512);for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const d=c/1024,h=l/512,[u,f]=Mx(d,h);let m=0;for(const _ of bx){const g=(u-_.lat)/_.radiusLat,p=(f-_.lon)/_.radiusLon;if(g*g+p*p<1){m=1;break}}(h<.07||h>.93)&&(m=.5),r[l*1024+c]=m}for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const d=(l*1024+c)*4,h=r[l*1024+c]??0,u=Math.random()*.15+.85,f=(h*.5+.1*u)*255,m=Math.min(255,Math.max(0,Math.round(f)));s[d]=m,s[d+1]=m,s[d+2]=m,s[d+3]=255}n.putImageData(i,0,0);const a=new Ye(e);return a.wrapS=a.wrapT=dn,a}function Ex(o="M"){const[n,i]=Jt(2048,2048),[s,r]=Jt(2048,2048),[a,l]=Jt(2048,2048),[c,d]=Jt(2048,2048),[h,u]=Jt(2048,2048),f=wn(o.charCodeAt(0)*1e3+42),m=o==="S",_=o==="L"||o==="XL";i.fillStyle="#e8e8e4",i.fillRect(0,0,2048,2048);const g=i.createLinearGradient(0,0,0,2048);g&&(g.addColorStop(0,"rgba(0,0,0,0.03)"),g.addColorStop(.3,"rgba(0,0,0,0)"),g.addColorStop(.7,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(0,0,0,0.04)"),i.fillStyle=g,i.fillRect(0,0,2048,2048));const x=2048/(m?4:_?12:8);for(let C=x;C<2048;C+=x)i.strokeStyle="rgba(0,0,0,0.08)",i.lineWidth=2,i.beginPath(),i.moveTo(0,C),i.lineTo(2048,C),i.stroke(),i.strokeStyle="rgba(255,255,255,0.15)",i.lineWidth=1.5,i.beginPath(),i.moveTo(0,C-1.5),i.lineTo(2048,C-1.5),i.stroke();const y=m?8:_?24:14;i.strokeStyle="rgba(80,80,90,0.04)",i.lineWidth=1.5;for(let C=1;C<y;C++){const R=C/y*2048;i.beginPath(),i.moveTo(R,0),i.lineTo(R,2048),i.stroke()}i.fillStyle="#c0c0ba";for(let C=x;C<2048;C+=x)for(let R=30;R<2018;R+=60)i.beginPath(),i.arc(R,C,4,0,Math.PI*2),i.fill(),i.strokeStyle="#a0a09a",i.lineWidth=.5,i.stroke();if(_){i.fillStyle="#002868",i.fillRect(163.84,307.2,245.76*.4,163.84);for(let M=0;M<7;M++)i.fillStyle=M%2===0?"#BF0A30":"#ffffff",i.fillRect(163.84+245.76*.4,307.2+M/7*163.84,245.76*.6,163.84/7);i.fillStyle="#ffffff";for(let M=0;M<5;M++)for(let A=0;A<3;A++)i.beginPath(),i.arc(163.84+(A+.5)*(245.76*.4/3),307.2+(M+.5)*(163.84/5),2,0,Math.PI*2),i.fill()}i.fillStyle="rgba(30,40,80,0.12)",i.font=`bold ${2048*.06}px monospace`,i.textAlign="center",i.fillText("USA",2048/2,2048*.25);const b=m?3:_?12:6;for(let C=0;C<b;C++){const R=f()*2048*.8+204.8,S=f()*2048*.7+2048*.15,N=60+f()*200,M=50+f()*140,A=180+f()*40,U=140+f()*30,D=80+f()*30;i.fillStyle=`rgb(${A}, ${U}, ${D})`,i.globalAlpha=.6+f()*.3,i.fillRect(R,S,N,M),i.fillStyle=`rgb(${A-20}, ${U-15}, ${D-10})`;for(let q=0;q<15;q++)i.beginPath(),i.arc(R+f()*N,S+f()*M,2+f()*6,0,Math.PI*2),i.fill();i.fillStyle="rgba(200, 220, 240, 0.15)";for(let q=0;q<5;q++)i.beginPath(),i.arc(R+f()*N,S+f()*M,5+f()*15,0,Math.PI*2),i.fill();i.globalAlpha=1}i.fillStyle="#606068",i.fillRect(0,0,2048,2048*.012),i.fillRect(0,2048*.988,2048,2048*.012),i.strokeStyle="rgba(80,80,90,0.3)",i.lineWidth=3,i.beginPath(),i.moveTo(2048*.5,0),i.lineTo(2048*.5,2048),i.stroke(),i.strokeStyle="rgba(60,50,40,0.03)",i.lineWidth=1;for(let C=0;C<30;C++){const R=f()*2048,S=f()*2048;i.beginPath(),i.moveTo(R,S),i.lineTo(R+(f()-.5)*20,S+f()*2048*.3),i.stroke()}r.fillStyle="#808080",r.fillRect(0,0,2048,2048),r.strokeStyle="#b0b0b0",r.lineWidth=8;for(let C=x;C<2048;C+=x)r.beginPath(),r.moveTo(0,C),r.lineTo(2048,C),r.stroke();r.strokeStyle="#909090",r.lineWidth=3;for(let C=1;C<y;C++){const R=C/y*2048;r.beginPath(),r.moveTo(R,0),r.lineTo(R,2048),r.stroke()}r.fillStyle="#c8c8c8";for(let C=x;C<2048;C+=x)for(let R=30;R<2018;R+=60)r.beginPath(),r.arc(R,C,5,0,Math.PI*2),r.fill();l.fillStyle="#909090",l.fillRect(0,0,2048,2048),l.strokeStyle="#c0c0c0",l.lineWidth=10;for(let C=x;C<2048;C+=x)l.beginPath(),l.moveTo(0,C),l.lineTo(2048,C),l.stroke();for(let C=0;C<b;C++){const R=f()*2048*.8+204.8,S=f()*2048*.7+2048*.15,N=60+f()*200,M=50+f()*140;l.fillStyle="#e0e0e0",l.fillRect(R,S,N,M)}l.fillStyle="#505050",l.fillRect(0,0,2048,2048*.012),l.fillRect(0,2048*.988,2048,2048*.012),d.fillStyle="#050505",d.fillRect(0,0,2048,2048),d.fillStyle="#c0c0c0",d.fillRect(0,0,2048,2048*.012),d.fillRect(0,2048*.988,2048,2048*.012),d.fillStyle="#606060",d.fillRect(2048*.49,0,2048*.02,2048),u.fillStyle="#ffffff",u.fillRect(0,0,2048,2048),u.strokeStyle="#808080",u.lineWidth=12;for(let C=x;C<2048;C+=x)u.beginPath(),u.moveTo(0,C),u.lineTo(2048,C),u.stroke();u.strokeStyle="#b0b0b0",u.lineWidth=6;for(let C=1;C<y;C++){const R=C/y*2048;u.beginPath(),u.moveTo(R,0),u.lineTo(R,2048),u.stroke()}return Ti(i,2048,2048,.01),Si(n,s,a,c,h)}function wx(){const[e,n]=Jt(2048,2048),[i,s]=Jt(2048,2048),[r,a]=Jt(2048,2048),[l,c]=Jt(2048,2048),[d,h]=Jt(2048,2048),u=wn(12345);n.fillStyle="#f5f5ee",n.fillRect(0,0,2048,2048*.78);const f=n.createLinearGradient(0,0,0,2048*.78);f&&(f.addColorStop(0,"rgba(20,20,25,0.05)"),f.addColorStop(.5,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(20,20,25,0.03)"),n.fillStyle=f,n.fillRect(0,0,2048,2048*.78)),n.strokeStyle="rgba(180,180,180,0.15)",n.lineWidth=2;for(let _=2048*.08;_<2048*.75;_+=2048*.07)n.beginPath(),n.moveTo(0,_),n.lineTo(2048,_),n.stroke();n.fillStyle="#2a2a2e",n.fillRect(0,2048*.78,2048,2048*.22),n.strokeStyle="rgba(40,40,45,0.5)",n.lineWidth=1;for(let _=0;_<2048;_+=32)n.beginPath(),n.moveTo(_,2048*.78),n.lineTo(_,2048),n.stroke();for(let _=2048*.78;_<2048;_+=32)n.beginPath(),n.moveTo(0,_),n.lineTo(2048,_),n.stroke();for(let _=0;_<2e3;_++){const g=u()*2048,p=2048*.78+u()*2048*.22,x=1+u()*3,y=25+u()*50,b=u()*15;n.fillStyle=`rgb(${y+b},${y},${y-b})`,n.beginPath(),n.arc(g,p,x,0,Math.PI*2),n.fill()}for(let _=0;_<60;_++){const g=u()*2048,p=2048*.78+u()*2048*.15,x=30+u()*150,y=(u()-.5)*50;n.strokeStyle=`rgba(20,15,10,${.2+u()*.3})`,n.lineWidth=1+u()*3,n.beginPath(),n.moveTo(g,p),n.lineTo(g+y,p+x),n.stroke(),n.strokeStyle=`rgba(60,40,20,${.05+u()*.1})`,n.lineWidth=3+u()*5,n.beginPath(),n.moveTo(g-y*.1,p+x*.2),n.lineTo(g+y,p+x),n.stroke()}n.fillStyle="#5a5a60",n.fillRect(0,2048*.77,2048,2048*.015),n.fillStyle="#8a8a90",n.fillRect(0,2048*.775,2048,2048*.005),n.fillStyle="#003366",n.fillRect(0,2048*.2,2048,2048*.035),n.fillStyle="#b31b1b",n.fillRect(0,2048*.245,2048,2048*.025),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(0,2048*.27,2048,2048*.003);const m=[[2048*.28,2048*.12],[2048*.55,2048*.14]];for(const[_,g]of m)n.fillStyle="#0a0a15",n.beginPath(),n.ellipse(_,g,2048*.04,2048*.03,0,0,Math.PI*2),n.fill(),n.strokeStyle="#9a9a9e",n.lineWidth=5,n.beginPath(),n.ellipse(_,g,2048*.045,2048*.035,0,0,Math.PI*2),n.stroke(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.beginPath(),n.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),n.stroke();n.fillStyle="#3a3a3e";for(let _=0;_<4;_++){const g=_/4*Math.PI*2,p=2048*.5+Math.cos(g)*2048*.38,x=2048*.35+Math.sin(g)*2048*.05;n.beginPath(),n.arc(p,x,14,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.stroke()}n.fillStyle="#e0e0d8",n.fillRect(0,0,2048,2048*.04),n.strokeStyle="#a0a0a0",n.lineWidth=2,n.beginPath(),n.moveTo(0,2048*.04),n.lineTo(2048,2048*.04),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,2048,2048),s.strokeStyle="#a8a8a8",s.lineWidth=5;for(let _=2048*.08;_<2048*.75;_+=2048*.07)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#585858",s.lineWidth=3;for(let _=0;_<2048;_+=48)s.beginPath(),s.moveTo(_,2048*.78),s.lineTo(_,2048),s.stroke();for(let _=2048*.8;_<2048;_+=48)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#c0c0c0",s.lineWidth=8,s.beginPath(),s.moveTo(0,2048*.775),s.lineTo(2048,2048*.775),s.stroke();for(const[_,g]of m)s.strokeStyle="#d0d0d0",s.lineWidth=10,s.beginPath(),s.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),s.stroke();a.fillStyle="#808080",a.fillRect(0,0,2048,2048*.78),a.fillStyle="#e0e0e0",a.fillRect(0,2048*.78,2048,2048*.22),a.fillStyle="#484848",a.fillRect(0,2048*.77,2048,2048*.015);for(const[_,g]of m)a.fillStyle="#181818",a.beginPath(),a.ellipse(_,g,2048*.045,2048*.035,0,0,Math.PI*2),a.fill();c.fillStyle="#080808",c.fillRect(0,0,2048,2048),c.fillStyle="#d0d0d0",c.fillRect(0,2048*.77,2048,2048*.015),c.fillRect(0,0,2048,2048*.04);for(const[_,g]of m)c.fillStyle="#b0b0b0",c.beginPath(),c.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),c.fill();for(let _=0;_<4;_++){const g=_/4*Math.PI*2,p=2048*.5+Math.cos(g)*2048*.38,x=2048*.35+Math.sin(g)*2048*.05;c.beginPath(),c.arc(p,x,16,0,Math.PI*2),c.fill()}h.fillStyle="#ffffff",h.fillRect(0,0,2048,2048),h.strokeStyle="#808080",h.lineWidth=10;for(let _=2048*.08;_<2048*.75;_+=2048*.07)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#606060",h.lineWidth=6;for(let _=0;_<2048;_+=48)h.beginPath(),h.moveTo(_,2048*.78),h.lineTo(_,2048),h.stroke();for(let _=2048*.8;_<2048;_+=48)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#909090",h.lineWidth=12,h.beginPath(),h.moveTo(0,2048*.775),h.lineTo(2048,2048*.775),h.stroke();for(const[_,g]of m)h.strokeStyle="#707070",h.lineWidth=14,h.beginPath(),h.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),h.stroke();return Ti(n,2048,2048,.018),Si(e,i,r,l,d)}function Ax(){const[e,n]=Jt(1024,1024),[i,s]=Jt(1024,1024),[r,a]=Jt(1024,1024),[l,c]=Jt(1024,1024),[d,h]=Jt(1024,1024),u=wn(54321);n.fillStyle="#3a3a40",n.fillRect(0,0,1024,1024*.3);for(let m=0;m<150;m++){const _=u()*1024,g=u()*1024*.3,p=5+u()*25;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(_,g),n.lineTo(_,g+p),n.stroke()}n.fillStyle="#4a4a50",n.fillRect(0,1024*.3,1024,1024*.05),n.fillStyle="#2a2a2e";for(let m=20;m<1024;m+=30)n.beginPath(),n.arc(m,1024*.325,4,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=.5,n.stroke();for(let m=1024*.35;m<1024*.92;m++){const _=(m-358.4)/583.68,g=Math.round(180+60*(1-_)),p=Math.round(100+30*(1-_)),x=Math.round(40+15*(1-_));n.fillStyle=`rgb(${g}, ${p}, ${x})`,n.fillRect(0,m,1024,1)}n.strokeStyle="rgba(100,60,25,0.3)",n.lineWidth=1;for(let m=6;m<1024;m+=12)n.beginPath(),n.moveTo(m,1024*.35),n.lineTo(m,1024*.92),n.stroke();const f=n.createLinearGradient(0,1024*.8,0,1024);f&&(f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(.4,"rgba(0,0,0,0.2)"),f.addColorStop(.8,"rgba(0,0,0,0.5)"),f.addColorStop(1,"rgba(0,0,0,0.7)"),n.fillStyle=f,n.fillRect(0,1024*.8,1024,1024*.2)),n.fillStyle="#6a6a70",n.fillRect(0,1024*.92,1024,1024*.03),n.fillStyle="#8a8a90",n.fillRect(0,1024*.95,1024,1024*.02),n.fillStyle="#2a2a30";for(let m=0;m<4;m++){const _=m/4*Math.PI*2+Math.PI/4,g=1024*.5+Math.cos(_)*1024*.38,p=1024*.15+Math.sin(_)*1024*.04;n.beginPath(),n.arc(g,p,1024*.04,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=1,n.stroke()}n.strokeStyle="#6a6a70",n.lineWidth=3,n.beginPath(),n.arc(1024/2,1024*.12,1024*.3,0,Math.PI*2),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let m=0;m<1024;m+=3)s.beginPath(),s.moveTo(m,0),s.lineTo(m,1024*.3),s.stroke();s.fillStyle="#c0c0c0";for(let m=20;m<1024;m+=30)s.beginPath(),s.arc(m,1024*.325,4,0,Math.PI*2),s.fill();s.strokeStyle="#606060",s.lineWidth=2;for(let m=6;m<1024;m+=12)s.beginPath(),s.moveTo(m,1024*.35),s.lineTo(m,1024*.92),s.stroke();s.strokeStyle="#a0a0a0",s.lineWidth=5,s.beginPath(),s.moveTo(0,1024*.3),s.lineTo(1024,1024*.3),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#404040",a.fillRect(0,0,1024,1024*.3),a.fillStyle="#606060",a.fillRect(0,1024*.3,1024,1024*.05),a.fillStyle="#707070",a.fillRect(0,1024*.35,1024,1024*.57),a.fillStyle="#c0c0c0",a.fillRect(0,1024*.8,1024,1024*.2),a.fillStyle="#303030",a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#e0e0e0",c.fillRect(0,0,1024,1024),c.fillStyle="#606060",c.fillRect(0,1024*.8,1024,1024*.2),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.3),h.lineTo(1024,1024*.3),h.stroke(),h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.strokeStyle="#808080",h.lineWidth=3;for(let m=6;m<1024;m+=12)h.beginPath(),h.moveTo(m,1024*.35),h.lineTo(m,1024*.92),h.stroke();return h.strokeStyle="#707070",h.lineWidth=8,h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),Ti(n,1024,1024,.01),Si(e,i,r,l,d)}function Rx(){const[e,n]=Jt(1024,1024),[i,s]=Jt(1024,1024),[r,a]=Jt(1024,1024),[l,c]=Jt(1024,1024),[d,h]=Jt(1024,1024),u=wn(11111);n.fillStyle="#3a3d30",n.fillRect(0,0,1024,1024);for(let f=0;f<100;f++){const m=u()*1024,_=u()*1024,g=10+u()*50;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(m,_),n.lineTo(m,_+g),n.stroke()}n.fillStyle="#8a8a8e";for(let f=50;f<1024;f+=200)n.fillRect(0,f,1024,15),n.fillStyle="#6a6a6e",n.fillRect(0,f+15,1024,2),n.fillStyle="#8a8a8e";n.fillStyle="#2a2d22",n.fillRect(0,1024*.85,1024,1024*.15),n.strokeStyle="#4a4d42",n.lineWidth=1;for(let f=0;f<1024;f+=32)n.beginPath(),n.moveTo(f,1024*.85),n.lineTo(f,1024),n.stroke();for(let f=1024*.85;f<1024;f+=32)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();n.fillStyle="#222";for(let f=0;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);n.fillStyle="#ffcc00";for(let f=20;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=2;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024*.85),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=6;for(let f=50;f<1024;f+=200)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();s.strokeStyle="#606060",s.lineWidth=3;for(let f=0;f<1024;f+=32)s.beginPath(),s.moveTo(f,1024*.85),s.lineTo(f,1024),s.stroke();for(let f=1024*.85;f<1024;f+=32)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#707070",a.fillRect(0,0,1024,1024*.85),a.fillStyle="#909090";for(let f=50;f<1024;f+=200)a.fillRect(0,f,1024,17);a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),c.fillStyle="#303030",c.fillRect(0,0,1024,1024),c.fillStyle="#e0e0e0";for(let f=50;f<1024;f+=200)c.fillRect(0,f,1024,17);c.fillStyle="#a0a0a0",c.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#808080",h.lineWidth=8;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024*.85),h.stroke();h.strokeStyle="#909090",h.lineWidth=10;for(let f=50;f<1024;f+=200)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Ti(n,1024,1024,.02),Si(e,i,r,l,d)}function Cx(){const[e,n]=Jt(1024,1024),[i,s]=Jt(1024,1024),[r,a]=Jt(1024,1024),[l,c]=Jt(1024,1024),[d,h]=Jt(1024,1024),u=wn(22222);n.fillStyle="#4a4a4e",n.fillRect(0,0,1024,1024);for(let f=0;f<150;f++){const m=u()*1024,_=u()*1024,g=5+u()*30;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(m,_),n.lineTo(m,_+g),n.stroke()}n.fillStyle="#7a7a7e",n.fillRect(0,1024*.35,1024,1024*.3),n.fillStyle="#3a3a3e";for(let f=24;f<1024;f+=48)n.beginPath(),n.arc(f,1024*.5,6,0,Math.PI*2),n.fill(),n.strokeStyle="#6a6a6e",n.lineWidth=1,n.stroke();n.fillStyle="#cc3300";for(let f=0;f<8;f++){const m=f/8*Math.PI*2,_=1024*.5+Math.cos(m)*1024*.35,g=1024*.5+Math.sin(m)*1024*.35;n.beginPath(),n.arc(_,g,8,0,Math.PI*2),n.fill()}n.fillStyle="#5a5a5e",n.fillRect(0,0,1024,1024*.08),n.fillRect(0,1024*.92,1024,1024*.08),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#b0b0b0",s.lineWidth=10,s.beginPath(),s.moveTo(0,1024*.35),s.lineTo(1024,1024*.35),s.stroke(),s.beginPath(),s.moveTo(0,1024*.65),s.lineTo(1024,1024*.65),s.stroke(),s.fillStyle="#c0c0c0";for(let f=24;f<1024;f+=48)s.beginPath(),s.arc(f,1024*.5,6,0,Math.PI*2),s.fill();return s.strokeStyle="#a0a0a0",s.lineWidth=8,s.beginPath(),s.moveTo(0,1024*.08),s.lineTo(1024,1024*.08),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#404040",a.fillRect(0,1024*.35,1024,1024*.3),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.08),a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#d0d0d0",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#707070",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.65),h.lineTo(1024,1024*.65),h.stroke(),h.strokeStyle="#808080",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.08),h.lineTo(1024,1024*.08),h.stroke(),h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),Ti(n,1024,1024,.015),Si(e,i,r,l,d)}function Px(){const[e,n]=Jt(1024,1024),[i,s]=Jt(1024,1024),[r,a]=Jt(1024,1024),[l,c]=Jt(1024,1024),[d,h]=Jt(1024,1024),u=wn(33333);n.fillStyle="#1a1a1c",n.fillRect(0,0,1024,1024);for(let f=0;f<3e3;f++){const m=u()*1024,_=u()*1024,g=1+u()*4,p=20+u()*50,x=u()*20-10;n.fillStyle=`rgb(${p+x},${p},${p-x})`,n.beginPath(),n.arc(m,_,g,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(40,20,10,0.3)",n.lineWidth=1+u()*2;for(let f=0;f<80;f++){const m=u()*1024,_=u()*1024*.3,g=50+u()*200;n.beginPath(),n.moveTo(m,_),n.lineTo(m+(u()-.5)*40,_+g),n.stroke()}n.strokeStyle="#0a0a0c",n.lineWidth=2;for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(f,0),n.lineTo(f,1024),n.stroke();for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024);for(let f=0;f<500;f++){const m=u()*1024,_=u()*1024,g=2+u()*5;s.fillStyle=`rgb(${128+u()*30},${128+u()*30},${128+u()*30})`,s.beginPath(),s.arc(m,_,g,0,Math.PI*2),s.fill()}s.strokeStyle="#404040",s.lineWidth=6;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024),s.stroke();for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#f0f0f0",a.fillRect(0,0,1024,1024),a.fillStyle="#ffffff",a.strokeStyle="#ffffff",a.lineWidth=8;for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f,1024),a.stroke();for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(0,f),a.lineTo(1024,f),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#303030",h.lineWidth=10;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024),h.stroke();for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Ti(n,1024,1024,.03),Si(e,i,r,l,d)}function uo(){const[e,n]=Jt(1024,1024),[i,s]=Jt(1024,1024),[r,a]=Jt(1024,1024),[l,c]=Jt(1024,1024),[d,h]=Jt(1024,1024),u=wn(44444),f=n.createLinearGradient(0,0,0,1024);f&&(f.addColorStop(0,"#b8862e"),f.addColorStop(.08,"#dba44a"),f.addColorStop(.15,"#e8b858"),f.addColorStop(.22,"#cf9a3e"),f.addColorStop(.3,"#b0802e"),f.addColorStop(.38,"#d8a84a"),f.addColorStop(.45,"#eac05e"),f.addColorStop(.52,"#c89838"),f.addColorStop(.6,"#b0802e"),f.addColorStop(.68,"#d8a84a"),f.addColorStop(.75,"#e8b858"),f.addColorStop(.85,"#c89838"),f.addColorStop(1,"#b8862e"),n.fillStyle=f,n.fillRect(0,0,1024,1024));for(let m=0;m<12;m++){const _=50+u()*924,g=50+u()*924,p=80+u()*300,x=80+u()*300;n.strokeStyle=`rgba(80,55,15,${.15+u()*.15})`,n.lineWidth=1+u()*2,n.strokeRect(_,g,p,x);const y=(u()-.5)*.06;n.fillStyle=`rgba(200,160,60,${y>0?y:0})`,n.fillRect(_+2,g+2,p-4,x-4)}n.strokeStyle="rgba(70,50,15,0.12)",n.lineWidth=3+u()*4;for(let m=0;m<60;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=40+u()*150;n.beginPath(),n.moveTo(_,g);const y=_+Math.cos(p+.3)*x*.5,b=g+Math.sin(p+.3)*x*.5;n.quadraticCurveTo(y,b,_+Math.cos(p)*x,g+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(60,40,10,0.18)",n.lineWidth=1.5;for(let m=0;m<120;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=15+u()*60;n.beginPath(),n.moveTo(_,g),n.lineTo(_+Math.cos(p)*x,g+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(255,230,160,0.15)",n.lineWidth=.5;for(let m=0;m<250;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=3+u()*25;n.beginPath(),n.moveTo(_,g),n.lineTo(_+Math.cos(p)*x,g+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(30,20,5,0.1)",n.lineWidth=.5;for(let m=0;m<200;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=4+u()*30;n.beginPath(),n.moveTo(_+1,g+1),n.lineTo(_+Math.cos(p)*x+1,g+Math.sin(p)*x+1),n.stroke()}for(let m=0;m<120;m++){const _=u()*1024,g=u()*1024,p=2+u()*18,x=u();x<.33?n.fillStyle=`rgba(80,50,20,${.08+u()*.15})`:x<.66?n.fillStyle=`rgba(30,25,15,${.06+u()*.12})`:n.fillStyle=`rgba(60,80,40,${.04+u()*.08})`,n.beginPath(),n.arc(_,g,p,0,Math.PI*2),n.fill()}for(let m=0;m<50;m++){const _=u()*1024,g=u()*1024,p=1+u()*8,x=240+Math.floor(u()*15);n.fillStyle=`rgba(${x}, ${x-20}, ${x-80}, ${.15+u()*.2})`,n.beginPath(),n.arc(_,g,p,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,240,180,${.03+u()*.05})`,n.beginPath(),n.arc(_,g,p*3,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(160,120,40,0.12)",n.lineWidth=1;for(let m=0;m<1024;m+=15+u()*25){n.beginPath(),n.moveTo(0,m);for(let _=0;_<1024;_+=10)n.lineTo(_+u()*5,m+(u()-.5)*3);n.stroke()}s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#a0a0a0",s.lineWidth=2;for(let m=0;m<120;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=20+u()*100;s.beginPath(),s.moveTo(_,g);const y=_+Math.cos(p+.2)*x*.4,b=g+Math.sin(p+.2)*x*.4;s.quadraticCurveTo(y,b,_+Math.cos(p)*x,g+Math.sin(p)*x),s.stroke()}s.strokeStyle="#c0c0c0",s.lineWidth=1;for(let m=0;m<300;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=5+u()*40;s.beginPath(),s.moveTo(_,g),s.lineTo(_+Math.cos(p)*x,g+Math.sin(p)*x),s.stroke()}s.fillStyle="#606060";for(let m=0;m<100;m++){const _=u()*1024,g=u()*1024,p=2+u()*16;s.beginPath(),s.arc(_,g,p,0,Math.PI*2),s.fill()}a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#909090";for(let m=0;m<400;m++){const _=u()*1024,g=u()*1024,p=5+u()*50,x=3+u()*20;a.fillRect(_,g,p,x)}a.fillStyle="#c0c0c0";for(let m=0;m<100;m++){const _=u()*1024,g=u()*1024,p=2+u()*16;a.beginPath(),a.arc(_,g,p,0,Math.PI*2),a.fill()}c.fillStyle="#f0f0f0",c.fillRect(0,0,1024,1024),c.fillStyle="#303030";for(let m=0;m<100;m++){const _=u()*1024,g=u()*1024,p=2+u()*16;c.beginPath(),c.arc(_,g,p,0,Math.PI*2),c.fill()}c.strokeStyle="#808080",c.lineWidth=2;for(let m=0;m<12;m++){const _=50+u()*924,g=50+u()*924,p=80+u()*300,x=80+u()*300;c.strokeRect(_,g,p,x)}h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=3;for(let m=0;m<400;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=5+u()*50;h.beginPath(),h.moveTo(_,g),h.lineTo(_+Math.cos(p)*x,g+Math.sin(p)*x),h.stroke()}h.strokeStyle="#808080",h.lineWidth=2;for(let m=0;m<200;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=10+u()*80;h.beginPath(),h.moveTo(_,g);const y=_+Math.cos(p+.3)*x*.5,b=g+Math.sin(p+.3)*x*.5;h.quadraticCurveTo(y,b,_+Math.cos(p)*x,g+Math.sin(p)*x),h.stroke()}h.fillStyle="#888888";for(let m=0;m<100;m++){const _=u()*1024,g=u()*1024,p=3+u()*18;h.beginPath(),h.arc(_,g,p,0,Math.PI*2),h.fill()}return Ti(n,1024,1024,.02),Si(e,i,r,l,d)}function mu(){const[e,n]=Jt(1024,1024),[i,s]=Jt(1024,1024),[r,a]=Jt(1024,1024),[l,c]=Jt(1024,1024),[d,h]=Jt(1024,1024);n.fillStyle="#f5f5f0",n.fillRect(0,0,1024,1024),n.strokeStyle="rgba(200,200,190,0.15)",n.lineWidth=1;for(let u=0;u<1024;u+=4)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();n.strokeStyle="rgba(200,200,190,0.1)";for(let u=0;u<1024;u+=4)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.strokeStyle="rgba(160,160,150,0.3)",n.lineWidth=2;for(let u=0;u<1024;u+=32)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();for(let u=0;u<1024;u+=32)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.strokeStyle="rgba(120,120,110,0.4)",n.lineWidth=1,n.setLineDash([8,16]);for(let u=16;u<1024;u+=64)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();for(let u=16;u<1024;u+=64)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.setLineDash([]),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let u=0;u<1024;u+=8)s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke();for(let u=0;u<1024;u+=8)s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=4;for(let u=0;u<1024;u+=32)s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke();for(let u=0;u<1024;u+=32)s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke();a.fillStyle="#c0c0c0",a.fillRect(0,0,1024,1024),a.fillStyle="#e0e0e0",a.strokeStyle="#e0e0e0",a.lineWidth=6;for(let u=0;u<1024;u+=32)a.beginPath(),a.moveTo(u,0),a.lineTo(u,1024),a.stroke();for(let u=0;u<1024;u+=32)a.beginPath(),a.moveTo(0,u),a.lineTo(1024,u),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#a0a0a0",h.lineWidth=6;for(let u=0;u<1024;u+=32)h.beginPath(),h.moveTo(u,0),h.lineTo(u,1024),h.stroke();for(let u=0;u<1024;u+=32)h.beginPath(),h.moveTo(0,u),h.lineTo(1024,u),h.stroke();return Ti(n,1024,1024,.02),Si(e,i,r,l,d)}function gu(o,t,e,n,i,s){const r=document.createElement("canvas");r.width=o,r.height=t;const a=r.getContext("2d"),l=wn(s),c=a.createImageData(o,t);for(let h=0;h<t;h++){const u=h/t;let f=0,m=0,_=0,g=0;for(const p of e){const x=Math.abs(u-p.y)/p.width;if(x<1){const y=1-x*x,b=Lx(p.color);f+=b[0]*y,m+=b[1]*y,_+=b[2]*y,g+=y}}g>0&&(f/=g,m/=g,_/=g);for(let p=0;p<o;p++){const x=p/o,y=Math.sin(x*n+u*n*.5+s)*i+Math.sin(x*n*2.3+u*n*.7+s*2)*i*.5;let b=f,C=m,R=_;const S=y*30;b+=S,C+=S*.7,R+=S*.3;const N=(l()-.5)*8,M=(h*o+p)*4;c.data[M]=Qn(b+N),c.data[M+1]=Qn(C+N),c.data[M+2]=Qn(R+N),c.data[M+3]=255}}a.putImageData(c,0,0);const d=new Ye(r);return d.wrapS=d.wrapT=De,d.colorSpace=oe,d}function Lx(o){const t=parseInt(o.slice(1,3),16),e=parseInt(o.slice(3,5),16),n=parseInt(o.slice(5,7),16);return[t,e,n]}function Qn(o){return Math.min(255,Math.max(0,Math.round(o)))}function Ix(){const n=gu(1024,512,[{y:0,width:.08,color:"#5a4a3a",turbulence:.3},{y:.05,width:.06,color:"#6a4c36",turbulence:.3},{y:.1,width:.04,color:"#8a6a48",turbulence:.4},{y:.18,width:.06,color:"#c4a46a",turbulence:.5},{y:.24,width:.04,color:"#d4b880",turbulence:.5},{y:.3,width:.05,color:"#8a6a3a",turbulence:.6},{y:.38,width:.04,color:"#e4d0a0",turbulence:.7},{y:.42,width:.03,color:"#f0e0b8",turbulence:.8},{y:.46,width:.03,color:"#e8d4a8",turbulence:.7},{y:.5,width:.03,color:"#dcc89c",turbulence:.7},{y:.54,width:.03,color:"#e4d0a0",turbulence:.8},{y:.58,width:.03,color:"#f0e0b8",turbulence:.7},{y:.62,width:.04,color:"#e4d0a0",turbulence:.6},{y:.7,width:.05,color:"#8a6a3a",turbulence:.6},{y:.76,width:.04,color:"#c4a46a",turbulence:.5},{y:.82,width:.06,color:"#d4b880",turbulence:.5},{y:.9,width:.04,color:"#7a5a3a",turbulence:.4},{y:.94,width:.06,color:"#6a4c36",turbulence:.3},{y:1,width:.08,color:"#5a4a3a",turbulence:.3}],40,.015,777),s=n.image.getContext("2d"),r=.33*1024,a=.56*512,l=40+wn(888)()*10,c=s.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"#c04830"),c.addColorStop(.3,"#b04028"),c.addColorStop(.6,"#a05030"),c.addColorStop(.8,"#8a4830"),c.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=c,s.beginPath(),s.arc(r,a,l,0,Math.PI*2),s.fill();const d=.55*1024,h=.48*512,u=15+wn(889)()*5,f=s.createRadialGradient(d,h,0,d,h,u);return f.addColorStop(0,"#d06040"),f.addColorStop(.5,"#b05038"),f.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=f,s.beginPath(),s.arc(d,h,u,0,Math.PI*2),s.fill(),n.needsUpdate=!0,n}function Dx(){return gu(1024,512,[{y:0,width:.08,color:"#a09070",turbulence:.2},{y:.06,width:.06,color:"#b8a888",turbulence:.2},{y:.12,width:.05,color:"#a89878",turbulence:.3},{y:.18,width:.06,color:"#c8b898",turbulence:.3},{y:.25,width:.05,color:"#b8a888",turbulence:.4},{y:.32,width:.05,color:"#d4c8a8",turbulence:.4},{y:.38,width:.04,color:"#c0b090",turbulence:.5},{y:.42,width:.03,color:"#e8dcc0",turbulence:.5},{y:.46,width:.03,color:"#d4c8a8",turbulence:.5},{y:.5,width:.03,color:"#f0e4d0",turbulence:.5},{y:.54,width:.03,color:"#d4c8a8",turbulence:.5},{y:.58,width:.04,color:"#e8dcc0",turbulence:.5},{y:.64,width:.05,color:"#c0b090",turbulence:.4},{y:.7,width:.05,color:"#b8a888",turbulence:.4},{y:.76,width:.06,color:"#a89878",turbulence:.3},{y:.85,width:.05,color:"#b8a888",turbulence:.2},{y:.92,width:.08,color:"#a09070",turbulence:.2}],30,.01,333)}function Ux(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=wn(222),s=n.createImageData(1024,512);for(let a=0;a<512;a++){const l=a/512,d=.6+(Math.sin(l*12)*.3+Math.sin(l*24)*.15+Math.sin(l*6)*.4)*.1;for(let h=0;h<1024;h++){const u=h/1024,f=Math.sin(u*8+l*4)*.03,m=(i()-.5)*.04,_=(.48+d*.12+f+m)*255,g=(.7+d*.18+f*.5+m)*255,p=(.75+d*.2+m)*255,x=(a*1024+h)*4;s.data[x]=Qn(_),s.data[x+1]=Qn(g),s.data[x+2]=Qn(p),s.data[x+3]=255}}n.putImageData(s,0,0);const r=new Ye(e);return r.wrapS=r.wrapT=De,r.colorSpace=oe,r}function Nx(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=wn(444),s=n.createImageData(1024,512);for(let _=0;_<512;_++){const g=_/512,x=.5+(Math.sin(g*14)*.5+Math.sin(g*28)*.2+Math.sin(g*7)*.3)*.08;for(let y=0;y<1024;y++){const b=y/1024,C=Math.sin(b*10+g*5)*.04,R=(i()-.5)*.03,S=(.18+x*.08+C+R)*255,N=(.25+x*.12+C*.7+R)*255,M=(.7+x*.2+R)*255,A=(_*1024+y)*4;s.data[A]=Qn(S),s.data[A+1]=Qn(N),s.data[A+2]=Qn(M),s.data[A+3]=255}}n.putImageData(s,0,0);const r=.3*1024,a=.65*512,l=30,c=n.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"#0a0a2a"),c.addColorStop(.3,"#101040"),c.addColorStop(.6,"#1a2050"),c.addColorStop(1,"rgba(30,40,80,0)"),n.fillStyle=c,n.beginPath(),n.arc(r,a,l,0,Math.PI*2),n.fill();const d=.3*1024+35,h=.65*512-15,u=15,f=n.createRadialGradient(d,h,0,d,h,u);f.addColorStop(0,"rgba(200,220,255,0.4)"),f.addColorStop(.5,"rgba(180,200,240,0.2)"),f.addColorStop(1,"rgba(180,200,240,0)"),n.fillStyle=f,n.beginPath(),n.arc(d,h,u,0,Math.PI*2),n.fill(),n.putImageData(s,0,0);const m=new Ye(e);return m.wrapS=m.wrapT=De,m.colorSpace=oe,m}const lh={S:{radius:.5*kt,height:.7*kt},M:{radius:.7*kt,height:1.1*kt},L:{radius:1*kt,height:1.6*kt},XL:{radius:1.4*kt,height:2.2*kt}},Qe=Math.PI,Re=64;let ma=0;function ga(){return ma=ma*1664525+1013904223>>>0,(ma>>>0)/4294967295}function nn(o,t){const e=o.attributes.position;if(!e)return;const n=e.array;for(let i=0;i<n.length;i+=3){const s=(ga()-.5)*2,r=(ga()-.5)*2,a=(ga()-.5)*2;n[i]=n[i]+s*t,n[i+1]=n[i+1]+r*t,n[i+2]=n[i+2]+a*t}e.needsUpdate=!0,o.computeVertexNormals()}const _u=new O_,yi=new Map;async function Fx(o,t=1){const e=ji(o);if(yi.has(o))return yi.get(o).clone();const n=[e];e!==o&&n.push(o),o.startsWith("/")&&n.push(o.slice(1));let i;for(const s of n)try{const a=(await _u.loadAsync(s)).scene;if(!a)continue;return a.traverse(l=>{if(l instanceof dt)if(l.castShadow=!0,l.receiveShadow=!0,l.material){const c=Array.isArray(l.material)?l.material:[l.material];for(const d of c)if(d instanceof xe){if(d.roughness=Math.max(.1,d.roughness??.5),d.metalness=Math.max(0,d.metalness??0),d.color){const p={h:0,s:0,l:0};d.color.getHSL(p),p.s<.3&&(p.s=Math.min(1,p.s*1.5+.05),p.l=Math.min(1,Math.max(.1,p.l*1.1)),d.color.setHSL(p.h,p.s,p.l))}const h=l.name.toLowerCase(),u=h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor")||h.includes("bell"),f=h.includes("metal")||h.includes("hull")||h.includes("body")||h.includes("frame")||h.includes("strut"),m=h.includes("glass")||h.includes("window")||h.includes("canopy")||h.includes("cockpit"),_=h.includes("heat")||h.includes("shield")||h.includes("tile"),g=h.includes("solar")||h.includes("panel")||h.includes("array");u?(d.roughness=Math.max(.05,d.roughness),d.metalness=Math.min(1,d.metalness+.3),d.emissive=new bt(8930338),d.emissiveIntensity=.15):f?(d.roughness=Math.max(.1,d.roughness*.7),d.metalness=Math.min(1,d.metalness+.4)):m?(d.roughness=0,d.metalness=0,d.transparent=!0,d.opacity=.6,d.emissive=new bt(4491519),d.emissiveIntensity=.08):_?(d.roughness=Math.min(1,d.roughness+.2),d.metalness=0):g&&(d.roughness=.8,d.metalness=0,d.emissive=new bt(4491519),d.emissiveIntensity=.03),!u&&!m&&!g&&(h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor"))&&(d.emissive=new bt(4465152),d.emissiveIntensity=.05),d.needsUpdate=!0}else if(d instanceof Me||d instanceof s_){const h=new xe({color:d.color??16777215,map:d.map,normalMap:d.normalMap,roughnessMap:d.roughnessMap,metalnessMap:d.metalnessMap,aoMap:d.aoMap,roughness:.5,metalness:.1});l.material=h}}else l.material=new xe({color:13421772,roughness:.5,metalness:.1})}),a.scale.setScalar(t),yi.set(o,a),a.clone()}catch(r){i=r}return console.error("Failed to load GLTF after all attempts:",o,i),Oe.show(`Failed to load model: ${o.split("/").pop()}`,3e3),null}const _a=new Map;function yn(o,t){if(!_a.has(o)){const e=t(),n=[e.color,e.normal,e.roughness,e.metalness,e.ao,e.emissive].filter(Boolean);for(const i of n)i.minFilter=Le,i.magFilter=Le,i.generateMipmaps=!1,i.needsUpdate=!0;_a.set(o,e)}return _a.get(o)}function Be(o,t={}){const e={map:o.color,normalMap:o.normal,roughnessMap:o.roughness,metalnessMap:o.metalness,roughness:.5,metalness:.1,color:13426158,...t};return o.ao&&(e.aoMap=o.ao,e.aoMapIntensity=1),o.emissive&&(e.emissiveMap=o.emissive),new xe(e)}function me(o,t=1){const e=o.attributes.position;if(!e)return;let n=o.attributes.uv;n||(n=new Ce(new Float32Array(e.count*2),2));let i=1/0,s=-1/0;for(let a=0;a<e.count;a++){const l=e.getY(a);l<i&&(i=l),l>s&&(s=l)}const r=s-i||1;for(let a=0;a<e.count;a++){const l=e.getX(a),c=e.getY(a),d=e.getZ(a),u=(Math.atan2(l,d)+Math.PI)/(2*Math.PI),f=(c-i)/r*t;n.setXY(a,u,f)}o.setAttribute("uv",n),n.needsUpdate=!0,o.attributes.uv2||o.setAttribute("uv2",n.clone())}function xu(o){const t=new an;t.name=o.id;const e=lh[o.size];switch(o.kind){case"capsule":kx(t,e,o.id);break;case"tank":Ox(t,e,o.size);break;case"engine":Hx(t,e,o.size);break;case"parachute":Bx(t,e);break;case"legs":zx(t,e);break;case"decoupler":Gx(t,e);break;case"heatshield":Wx(t,e);break;case"gltf":{if(o.gltfUrl&&yi.has(o.gltfUrl)){const n=o.gltfScale??1,i=yi.get(o.gltfUrl).clone();i.scale.setScalar(n);const s=new xn().setFromObject(i),r=new L;s.getCenter(r),i.position.sub(r);const a=[],l=[];i.traverse(c=>{if(c instanceof dt){const d=c.name.toLowerCase();if(d.includes("engine")||d.includes("nozzle")||d.includes("thruster")||d.includes("motor")||d.includes("combustion")||c.position.y<-.1){const f=new xn().setFromObject(c),m=new L;f.getCenter(m);const _=m.clone().sub(i.position);a.push(_),l.push(c)}c.castShadow=!0,c.receiveShadow=!0}}),i.userData.nozzlePoints=a,i.userData.engineMeshes=l,t.add(i)}else{const n=lh[o.size],i=new xe({color:8956620,roughness:.4,metalness:.3}),s=new pe(n.radius,n.radius*.8,n.height*.8,16);me(s);const r=new dt(s,i);r.position.y=-n.height*.1,t.add(r);const a=new rl(n.radius*.6,n.height*.2,16),l=new xe({color:13386820,roughness:.6,metalness:.1}),c=new dt(a,l);c.position.y=n.height*.4,t.add(c);const d=new xe({color:6710920,roughness:.8,metalness:0});for(let h=0;h<4;h++){const u=h/4*Math.PI*2,f=new bi(n.radius*.02,n.height*.15,n.radius*.3),m=new dt(f,d);m.position.set(Math.sin(u)*n.radius*1.05,-n.height*.35,Math.cos(u)*n.radius*1.05),m.rotation.y=-u,t.add(m)}}break}}return t}function kx(o,t,e){const n=t.radius,i=t.height,s=e.includes("mk1"),r=yn(`capsule_${s?"mk1":"mk2"}`,wx),a=Be(r),l=yn("gold",uo),c=Be(l),d=new pe(n,n,i*.6,Re);me(d);const h=new dt(d,a);h.position.y=i*.05,o.add(h);const u=new ue(n,Re,Re,0,Qe*2,0,Qe/2);me(u,.5);const f=new dt(u,a);f.position.y=i*.35,o.add(f);const m=new dt(new ue(n*.08,12,8),c);m.position.y=i*.35+n*.5,o.add(m);const _=s?14500932:30673,g=new xe({color:_,roughness:.6,metalness:.1}),p=new pe(n*1.04,n*1.04,i*.05,Re);me(p),nn(p,kt*.008);const x=new dt(p,g);x.position.y=i*.05,o.add(x);const y=new pe(n*1.04,n*1.04,i*.03,Re);me(y),nn(y,kt*.008);const b=new dt(y,g);b.position.y=-i*.15,o.add(b);const C=new pe(n*1.3,n*.95,i*.15,Re);me(C),nn(C,kt*.01);const R=new dt(C,c);R.position.y=-i*.3-i*.075,o.add(R);const S=Be(r,{color:1726856,roughness:.1,metalness:.8,transparent:!0,opacity:.3}),N=new dt(new Er(n*.2,16),S);N.position.set(n+.001,i*.18,0),N.rotation.y=-Qe/2,o.add(N);const M=new Me({color:3381759,transparent:!0,opacity:.6}),A=new dt(new Un(n*.2,n*.24,16),M);A.position.set(n+.001,i*.18,0),A.rotation.y=-Qe/2,o.add(A)}function Ox(o,t,e){const n=t.radius,i=t.height,s=yn(`tank_${e}`,()=>Ex(e)),r=Be(s),a=yn("gold",uo),l=Be(a),c=new pe(n,n,i,Re);me(c);const d=new dt(c,r);o.add(d);const h=i*.03,u=new pe(n*1.03,n*1.03,h,Re);me(u),nn(u,kt*.006);const f=new dt(u,l);f.position.y=i/2-h/2,o.add(f);const m=new pe(n*1.03,n*1.03,h,Re);me(m),nn(m,kt*.006);const _=new dt(m,l);_.position.y=-i/2+h/2,o.add(_);for(let x=0;x<3;x++){const y=new mr(n*1.01,h*1.5,6,Re);me(y),nn(y,kt*.005);const b=new dt(y,l);b.position.y=-i/2+i*.2*(x+1),b.rotation.x=Qe/2,o.add(b)}const g=new mr(n*1.02,h*1.2,6,Re);me(g),nn(g,kt*.005);const p=new dt(g,l);p.position.y=0,p.rotation.x=Qe/2,o.add(p)}function Hx(o,t,e){const n=t.radius,i=t.height,s=yn(`engine_${e}`,Ax),r=Be(s),a=yn("gold",uo),l=Be(a),c=new pe(n*1.4,n*.6,i*.25,Re);me(c);const d=new dt(c,r);d.position.y=i*.35,o.add(d);const h=new pe(n*.6,n*.5,i*.06,Re);me(h),nn(h,kt*.015);const u=new dt(h,l);u.position.y=i*.12,o.add(u);const f=new pe(n*.5,n*.85,i*.4,Re);me(f,1.5),nn(f,kt*.01);const m=new dt(f,r);m.position.y=-i*.12,o.add(m);const _=Be(s,{color:1712682,roughness:.7,metalness:.5}),g=new pe(n*.35,n*.7,i*.38,Re);me(g,1.5),nn(g,kt*.012);const p=new dt(g,_);p.position.y=-i*.12,o.add(p);const x=new pe(n*.88,n*.88,i*.03,Re);me(x),nn(x,kt*.008);const y=new dt(x,l);y.position.y=-i*.12-i*.2-i*.015,o.add(y);const b=new Me({color:16746496,transparent:!0,opacity:.4}),C=new dt(new Un(0,n*.3,Re),b);C.position.y=-i*.12-i*.2-i*.02,C.rotation.x=-Qe/2,o.add(C)}function Bx(o,t){const e=t.radius,n=t.height,i=yn("fabric",mu),s=yn("gold",uo),r=Be(s),a=Be(i,{color:8952234,roughness:.5,metalness:.1}),l=new pe(e*.35,e*.35,n*.18,12);me(l);const c=new dt(l,a);c.position.y=n*.55,o.add(c);const d=Be(i,{color:6978186,roughness:.4,metalness:.2}),h=new pe(e*.37,e*.37,n*.03,12);me(h);const u=new dt(h,d);u.position.y=n*.55+n*.09,o.add(u);const f=new pe(e*.37,e*.37,n*.02,12);me(f);const m=new dt(f,r);m.position.y=n*.55-n*.09,o.add(m)}function Ya(o){const t=new an,e=o.radius,n=o.height,i=24,s=yn("fabric",mu),r=Be(s,{side:Ie,transparent:!0,opacity:.95}),a=new ue(e*1.8,i,i,0,Qe*2,0,Qe*.5);me(a,.5);const l=new dt(a,r);l.position.y=n*.3,l.rotation.x=Qe,t.add(l);const c=Be(s,{color:14500932,side:Ie,transparent:!0,opacity:.9});for(let h=0;h<6;h++){const u=h/6*Qe*2,f=new bi(e*.03,n*.7,e*.015),m=new dt(f,c);m.position.set(Math.cos(u)*e*.9,n*.4,Math.sin(u)*e*.9),m.rotation.x=Qe,m.lookAt(0,n*.8,0),t.add(m)}const d=Be(s,{color:6978186,roughness:.5,metalness:.4});for(let h=0;h<4;h++){const u=h/4*Qe*2+Qe/4;for(let f=0;f<3;f++){const m=new pe(.006,.006,n*.15,4);me(m);const _=new dt(m,d),g=u+(f-1)*.3;_.position.set(Math.cos(g)*e*1.5,n*.15-n*.06*f,Math.sin(g)*e*1.5),t.add(_)}}return t}function zx(o,t){const e=t.radius,n=t.height,i=yn("legs",Rx),s=Be(i),r=Be(i,{color:2764066,roughness:.8,metalness:.2});for(let a=0;a<4;a++){const l=a/4*Qe*2+Qe/4,c=new pe(.01,.007,n*.35,6);me(c);const d=new dt(c,s),h=Math.cos(l)*e*.65,u=Math.sin(l)*e*.65;d.position.set(h,-n/2-n*.175,u),d.rotation.z=Math.cos(l)*.3,d.rotation.x=Math.sin(l)*.3,o.add(d);const f=new pe(.02,.025,.008,6);me(f);const m=new dt(f,r);m.position.set(Math.cos(l)*e*.95,-n/2-n*.35,Math.sin(l)*e*.95),o.add(m)}}function Gx(o,t){const e=t.radius,n=t.height,i=yn("decoupler",Cx),s=Be(i),r=yn("gold",uo),a=Be(r),l=new pe(e*1.05,e*.92,n*.12,Re);me(l),nn(l,kt*.008);const c=new dt(l,s);o.add(c);const d=new pe(e*1.08,e*1.08,n*.04,Re);me(d),nn(d,kt*.005);const h=new dt(d,a);h.position.y=n*.06,o.add(h);const u=new pe(e*.92,e*.92,n*.04,Re);me(u),nn(u,kt*.008);const f=new dt(u,s);f.position.y=-n*.06,o.add(f)}function Wx(o,t){const e=t.radius,n=t.height,i=yn("heatshield",Px),s=Be(i),r=new pe(e*1.2,e*.8,n*.2,Re,1,!0);me(r,.5),nn(r,kt*.012);const a=new dt(r,s);a.position.y=-n*.1,o.add(a);const l=new pe(e*.8,e*.8,n*.08,Re);me(l),nn(l,kt*.01);const c=new dt(l,s);c.position.y=-n*.2,o.add(c)}const yu=Object.freeze(Object.defineProperty({__proto__:null,buildDeployedParachute:Ya,buildPartMesh:xu,gltfCache:yi,gltfLoader:_u,loadGLTF:Fx},Symbol.toStringTag,{value:"Module"})),ch={S:{radius:.5*kt},M:{radius:.7*kt},L:{radius:1*kt},XL:{radius:1.4*kt}};class gr{roots=[];addRoot(t){this.roots.push(t)}totalFuelCapacity(){let t=0;const e=n=>{n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}totalMass(){let t=0;const e=n=>{t+=n.part.mass,n.children.forEach(e)};return this.roots.forEach(e),t}totalMassWithFuel(){let t=0;const e=n=>{t+=n.part.mass,n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}centerOfMass(){let t=0,e=0,n=0,i=0;const s=r=>{const a=r.part.mass;t+=a,e+=r.position[0]*a,n+=r.position[1]*a,i+=r.position[2]*a,r.children.forEach(s)};return this.roots.forEach(s),t===0?[0,0,0]:[e/t,n/t,i/t]}toMesh(){const t=new an,e=(s,r)=>{const a=xu(s.part);a.position.set(s.position[0],s.position[1],s.position[2]),a.rotation.y=s.rotation,r.add(a),s.children.forEach(l=>e(l,a))};this.roots.forEach(s=>e(s,t));const n=[...this.roots].sort((s,r)=>r.position[1]-s.position[1]);for(let s=0;s<n.length-1;s++){const r=n[s],a=n[s+1],l=ch[r.part.size]?.radius??0,c=ch[a.part.size]?.radius??0;if(Math.abs(l-c)>.001&&!r.part.id.includes("decoupler")&&!a.part.id.includes("decoupler")){const d=(r.position[1]+a.position[1])/2,h=Math.abs(r.position[1]-a.position[1])*.8,u=new pe(Math.min(l,c),Math.max(l,c),h,32),f=new xe({color:10066329,roughness:.4,metalness:.3}),m=new dt(u,f);m.position.y=d,t.add(m)}}const i=this.centerOfMass();for(const s of t.children)s.position.x-=i[0],s.position.y-=i[1],s.position.z-=i[2];return t}}const Vx={S:.7*kt,M:1.1*kt,L:1.6*kt,XL:2.2*kt};function rr(o,t,e){const n=sr(t);if(!n)return e;const i=Vx[n.size]||.6*kt;return o.addRoot({part:n,position:[0,e+i/2,0],rotation:0,children:[]}),e+i}const Xx={tiny:{tank:"tank_s_lfo",engine:"engine_ant"},small:{tank:"tank_m_lfo",engine:"engine_vector"},medium:{tank:"tank_l_lfo",engine:"engine_mastodon"},large:{tank:"tank_xl_lfo",engine:"engine_mammoth"}};function hh(o,t,e,n=[]){const i=Xx[e];if(!i)return t;for(const s of[i.tank,i.engine,...n])t=rr(o,s,t);return t}function qx(o){const t=o.toLowerCase(),e=/sun|солн|heliocentric/.test(t),n=/mars|марс/.test(t),i=/venus|венер/.test(t),s=/mercury|меркур/.test(t),r=/moon|лун/.test(t),a=/orbit|орбит|station|станц|satellite|спутник/.test(t),l=/suborbit|суборбит|test|тест|hop|прыж/.test(t),c=/land|сади|посад|touchdown/.test(t)&&!/flyby|пролет/.test(t),d=/return|back|верн|обратн|round.?trip|there\s+and\s+back/.test(t)||r&&c||n&&c,h=d||/parachute|парашют|chute/.test(t)||!c,u=c||/legs|ноги|landing\s+gear/.test(t);let f=1,m="small";return l?(f=1,m="tiny"):a?(f=1,m="small"):r?(f=d?2:1,m="medium"):n||i?(f=d?3:2,m="large"):s?(f=2,m="medium"):e?(f=3,m="large"):/big|large|тяже|больш|huge|super|giant/.test(t)?(f=2,m="large"):/small|tiny|легк|малень/.test(t)?(f=1,m="tiny"):/safe|50%|half/.test(t)?(f=2,m="medium",f=2):(f=1,m="small"),/heavy|super|giant|тяжел/.test(t)&&m!=="large"&&(m=m==="tiny"?"small":"large"),/safe|50%|half\s+fuel/.test(t)&&(f=2,m="large"),{stages:f,stageSize:m,needsParachute:h,needsLegs:u,needsReturn:d}}function Yx(o){const t=new gr;let e=0;const n=o.stageSize,i=o.needsReturn?Math.max(1,o.stages-1):o.stages;for(let s=0;s<i;s++){const r=s===0?n:n==="large"&&s>0?"medium":n,a=[];s===0&&o.needsLegs&&a.push("legs_landini"),e=hh(t,e,r,a)}return o.needsReturn&&o.stages>1&&(e=rr(t,"decoupler_1",e),e=hh(t,e,n==="large"?"small":"tiny")),e=rr(t,"capsule_mk1",e),o.needsParachute&&(e=rr(t,"parachute_mk16",e)),t}function Kx(o){const t=qx(o);return Yx(t)}const Zs={S:.7*kt,M:1.1*kt,L:1.6*kt,XL:2.2*kt};class jx{scene;camera;assembly;rocketGroup;rootEl;partListEl;currentRocketEl;onLaunch;stackHeight=0;addedPartNames=[];framed=!1;vabAzimuth=0;vabPolar=Math.PI/2;vabDist=3;vabIsDragging=!1;vabPrevMouse={x:0,y:0};vabTarget=new L(0,kt,0);constructor(t){this.onLaunch=t,this.scene=new eu,this.scene.background=new bt(658714),this.scene.add(new uu(4473958,.5));const e=new lo(16777215,3);e.position.set(2,4,3),this.scene.add(e);const n=new lo(8947916,1);n.position.set(-2,1,-1),this.scene.add(n);const i=new hu(8947916,4473958,.8);this.scene.add(i);const s=10,r=20,a=new D_(s,r,3359846,2241365);a.position.y=-.3,this.scene.add(a);const l=new Un(.5,.8,32),c=new xe({color:2241365,metalness:.6,roughness:.4,side:Ie}),d=new dt(l,c);d.rotation.x=-Math.PI/2,d.position.y=-.28,this.scene.add(d),this.camera=new en(50,window.innerWidth/window.innerHeight,.01,1e3),this.updateVabCamera();const h=kt*4,u=new dt(new bi(h,.02*kt,h),new xe({color:1843264,roughness:.9}));u.position.y=-kt*.3,this.scene.add(u),this.assembly=new gr,this.rocketGroup=new an,this.scene.add(this.rocketGroup),this.setupVabOrbit(),this.rootEl=document.createElement("div"),this.rootEl.style.cssText="position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;",this.rootEl.innerHTML=`
      <div style="width:280px;background:rgba(10,12,24,0.95);border-right:1px solid rgba(234,205,158,0.2);display:flex;flex-direction:column;pointer-events:auto;">
        <div style="padding:16px;border-bottom:1px solid rgba(234,205,158,0.15);">
          <div style="color:#EACD9E;font-size:18px;letter-spacing:0.08em;">VAB</div>
          <div style="color:#F4F5F2;font-size:11px;opacity:0.5;margin-top:4px;">Build your rocket</div>
        </div>
        <div style="padding:8px;border-bottom:1px solid rgba(234,205,158,0.1);">
          <div style="font-size:9px;color:var(--accent-blue-bright);letter-spacing:0.05em;margin-bottom:6px;">QUICK BUILD — pick a mission</div>
          <div id="vab-presets" style="display:flex;flex-wrap:wrap;gap:4px;"></div>
        </div>
        <div style="padding:8px 8px 4px;border-bottom:1px solid rgba(234,205,158,0.1);">
          <div id="vab-current" style="min-height:40px;padding:6px;background:rgba(244,245,242,0.05);border-radius:3px;"></div>
        </div>
        <div id="vab-parts" style="flex:1;overflow-y:auto;padding:8px;"></div>
        <div style="padding:12px;border-top:1px solid rgba(234,205,158,0.15);">
          <div id="vab-status" style="font-size:9px;color:rgba(244,245,242,0.4);text-align:center;margin-bottom:6px;">&nbsp;</div>
          <button id="vab-launch" style="width:100%;padding:10px;background:#EACD9E;color:#0A0C18;border:none;border-radius:4px;font-size:13px;cursor:pointer;letter-spacing:0.06em;">LAUNCH</button>
          <button id="vab-remove" style="width:100%;padding:8px;background:transparent;color:#F4F5F2;border:1px solid rgba(244,245,242,0.2);border-radius:4px;font-size:11px;cursor:pointer;margin-top:6px;letter-spacing:0.06em;">REMOVE LAST</button>
          <button id="vab-clear" style="width:100%;padding:8px;background:transparent;color:#F4F5F2;border:1px solid rgba(244,245,242,0.2);border-radius:4px;font-size:11px;cursor:pointer;margin-top:4px;letter-spacing:0.06em;">CLEAR ALL</button>
        </div>
      </div>
      <div style="flex:1;pointer-events:none;"></div>
    `,this.partListEl=this.rootEl.querySelector("#vab-parts"),this.currentRocketEl=this.rootEl.querySelector("#vab-current"),this.buildPartList(),this.buildPresets(),this.updateCurrentList(),this.rootEl.querySelector("#vab-launch").addEventListener("click",()=>{this.assembly.roots.length>0&&this.onLaunch(this.assembly)}),this.rootEl.querySelector("#vab-remove").addEventListener("click",()=>this.removeLast()),this.rootEl.querySelector("#vab-clear").addEventListener("click",()=>this.clearAll())}buildPresets(){const t=[{label:"🚀 Suborbital",desc:"suborbital test",color:"#6688aa"},{label:"🛸 Earth Orbit",desc:"earth orbit",color:"#4488FF"},{label:"🌙 Moon Landing",desc:"land on moon",color:"#88AACC"},{label:"🌙 Moon Return",desc:"land on moon and return",color:"#EACD9E"},{label:"🌙+🛡️ Moon Safe",desc:"safe moon landing and return with 50% fuel",color:"#66DD88"},{label:"🔴 Mars",desc:"mars mission",color:"#d4733a"},{label:"☀️ Solar Orbit",desc:"orbit around the sun",color:"#ffdd44"},{label:"🪐 Heavy Lifter",desc:"heavy interplanetary",color:"#CC88AA"}],e=this.rootEl.querySelector("#vab-presets");for(const n of t){const i=document.createElement("button");i.textContent=n.label,i.title=n.desc,i.style.cssText=`flex:1;min-width:80px;padding:5px 6px;background:rgba(244,245,242,0.06);color:${n.color};border:1px solid rgba(244,245,242,0.1);border-radius:3px;font-size:9px;cursor:pointer;pointer-events:auto;text-align:center;white-space:nowrap;`,i.addEventListener("mouseenter",()=>{i.style.background="rgba(244,245,242,0.12)"}),i.addEventListener("mouseleave",()=>{i.style.background="rgba(244,245,242,0.06)"}),i.addEventListener("click",()=>{this.clearAll(),this.assembly=Kx(n.desc),this.refreshMesh(),this.syncPartsFromAssembly()}),e.appendChild(i)}}buildPartList(){for(const t of du){const e=document.createElement("button"),n=t.size?` [${t.size}]`:"";let i="";t.kind==="tank"&&t.fuelCapacity&&(i=` — ${(t.fuelCapacity/1e3).toFixed(0)}t`),t.kind==="engine"&&t.thrust&&(i=` — ${t.thrust}kN`),e.textContent=t.name+n+i,e.title=`${t.kind} — mass: ${t.mass}kg${t.fuelCapacity?", fuel: "+t.fuelCapacity+"kg":""}${t.thrust?", thrust: "+t.thrust+"kN":""}`,e.style.cssText="display:block;width:100%;padding:6px 8px;background:transparent;color:#F4F5F2;border:none;border-radius:3px;font-size:11px;text-align:left;cursor:pointer;margin-bottom:2px;",e.addEventListener("mouseenter",()=>{e.style.background="rgba(234,205,158,0.1)"}),e.addEventListener("mouseleave",()=>{e.style.background="transparent"}),e.addEventListener("click",()=>this.addPart(t)),this.partListEl.appendChild(e)}}addPart(t){const e=Zs[t.size]||.6*kt,n=this.stackHeight+e/2;this.assembly.addRoot({part:t,position:[0,n,0],rotation:0,children:[]}),this.stackHeight+=e,this.addedPartNames.push(t.name),this.refreshMesh(),this.updateCurrentList()}removeLast(){if(this.assembly.roots.length===0)return;const t=this.assembly.roots.pop(),e=Zs[t.part.size]||.6*kt;this.stackHeight-=e,this.addedPartNames.pop(),this.refreshMesh(),this.updateCurrentList()}clearAll(){this.assembly=new gr,this.stackHeight=0,this.addedPartNames=[],this.refreshMesh(),this.updateCurrentList()}updateCurrentList(){if(this.addedPartNames.length===0){this.currentRocketEl.innerHTML='<div style="color:rgba(244,245,242,0.3);font-size:10px;font-style:italic;">No parts — click from list below</div>';return}const t=this.assembly.roots.reduce((n,i)=>n+i.part.mass+this.childMass(i),0),e=this.assembly.roots.reduce((n,i)=>n+(i.part.fuelCapacity??0)+this.childFuel(i),0);this.currentRocketEl.innerHTML='<div style="color:rgba(244,245,242,0.4);font-size:9px;letter-spacing:0.05em;margin-bottom:4px;">CURRENT ROCKET (top to bottom):</div>'+[...this.addedPartNames].reverse().map((n,i)=>`<div style="color:#F4F5F2;font-size:10px;padding:1px 0;${i===0?"color:#EACD9E;":""}">${i===0?"▲ ":""}${n}</div>`).join("")+`<div style="color:rgba(244,245,242,0.35);font-size:9px;margin-top:6px;border-top:1px solid rgba(244,245,242,0.1);padding-top:4px;">${this.addedPartNames.length} parts | ${t.toFixed(1)}kg | ${e.toFixed(0)}kg fuel</div>`}childMass(t){return t.children.reduce((e,n)=>e+n.part.mass+this.childMass(n),0)}childFuel(t){return t.children.reduce((e,n)=>e+(n.part.fuelCapacity??0)+this.childFuel(n),0)}updateVabCamera(){const t=this.vabDist*Math.sin(this.vabPolar)*Math.cos(this.vabAzimuth),e=this.vabDist*Math.cos(this.vabPolar),n=this.vabDist*Math.sin(this.vabPolar)*Math.sin(this.vabAzimuth);this.camera.position.set(this.vabTarget.x+t,this.vabTarget.y+e,this.vabTarget.z+n),this.camera.lookAt(this.vabTarget)}setupVabOrbit(){const t=e=>{e.button===0&&(this.vabIsDragging=!0,this.vabPrevMouse={x:e.clientX,y:e.clientY})};document.addEventListener("mousedown",t),document.addEventListener("mousemove",e=>{if(!this.vabIsDragging)return;const n=e.clientX-this.vabPrevMouse.x,i=e.clientY-this.vabPrevMouse.y;this.vabAzimuth-=n*.005,this.vabPolar=Math.max(.05,Math.min(Math.PI-.05,this.vabPolar+i*.005)),this.vabPrevMouse={x:e.clientX,y:e.clientY},this.updateVabCamera()}),document.addEventListener("mouseup",()=>{this.vabIsDragging=!1}),document.addEventListener("wheel",e=>{this.vabDist*=e.deltaY>0?1.1:.9,this.vabDist=Math.max(.5,Math.min(50,this.vabDist)),this.updateVabCamera()},{passive:!0})}async refreshMesh(){for(;this.rocketGroup.children.length>0;){const t=this.rocketGroup.children[0];t&&this.rocketGroup.remove(t)}if(this.assembly.roots.length>0){if(!this.rootEl.querySelector(".vab-name-input")){const i=document.createElement("div");i.className="vab-name-row",i.style.cssText="padding:4px 0;margin-bottom:6px;",i.innerHTML=`
          <input type="text" class="vab-name-input" placeholder="Name your rocket..."
            style="width:100%;background:rgba(244,245,242,0.08);border:1px solid rgba(244,245,242,0.15);
            border-radius:4px;padding:6px 8px;color:#F4F5F2;font-size:11px;font-family:system-ui,sans-serif;
            outline:none;box-sizing:border-box;" maxlength="30"
          />
        `,this.currentRocketEl.parentElement?.insertBefore(i,this.currentRocketEl)}if(this.assembly.roots.some(i=>i.part.kind==="gltf"&&i.part.gltfUrl&&!yi.has(i.part.gltfUrl))){const i=document.getElementById("vab-status");i&&(i.textContent="⏳ Loading 3D models...");const{loadGLTF:s}=await bh(async()=>{const{loadGLTF:l}=await Promise.resolve().then(()=>yu);return{loadGLTF:l}},void 0);let r=0,a=0;for(const l of this.assembly.roots)l.part.kind==="gltf"&&l.part.gltfUrl&&!yi.has(l.part.gltfUrl)&&(await s(l.part.gltfUrl,l.part.gltfScale??1)?r++:a++);i&&(a>0?(i.textContent=`⚠️ ${r} loaded, ${a} failed`,setTimeout(()=>{i&&(i.innerHTML="&nbsp;")},3e3)):(i.textContent="✓ Models loaded",setTimeout(()=>{i&&(i.innerHTML="&nbsp;")},1500)))}const e=this.assembly.toMesh();e.traverse(i=>{if(i instanceof dt&&i.material){i.visible=!0;const s=i.material;Array.isArray(s)||(s.transparent=!1,s.opacity=1,s.depthWrite=!0,s.depthTest=!0)}}),this.rocketGroup.add(e);let n=0;for(const i of this.assembly.roots){const s=(a,l)=>{if(a.part.kind==="decoupler"){const d=new Un(.15,.25,16),h=new Me({color:16737860,side:Ie,transparent:!0,opacity:.5}),u=new dt(d,h);u.position.set(0,l,0),u.rotation.x=-Math.PI/2,this.rocketGroup.add(u)}const c=Zs[a.part.size]||.6*kt;for(const d of a.children)s(d,l-c)},r=Zs[i.part.size]||.6*kt;s(i,n+r/2),n+=r}if(!this.framed){this.framed=!0;const i=new xn().setFromObject(this.rocketGroup),s=i.getSize(new L),r=i.getCenter(new L),a=Math.max(s.x,s.y,s.z,.1),l=a*3.5;this.camera.position.set(r.x,r.y+a*.5,r.z+l),this.camera.lookAt(r.x,r.y,r.z),this.camera.updateProjectionMatrix()}}}syncPartsFromAssembly(){this.addedPartNames=[],this.stackHeight=0;const t=(e,n)=>{for(const i of e){this.addedPartNames.push(i.part.name);const s=Zs[i.part.size]||.6*kt;this.stackHeight+=s,t(i.children)}};t(this.assembly.roots),this.updateCurrentList()}mount(){document.body.appendChild(this.rootEl)}unmount(){this.rootEl.remove()}}class hl{name;mass;position;velocity;constructor(t,e,n,i){this.name=t,this.mass=e,this.position=[...n],this.velocity=[...i]}applyForce(t,e){const n=t[0]/this.mass,i=t[1]/this.mass,s=t[2]/this.mass;this.velocity[0]+=n*e,this.velocity[1]+=i*e,this.velocity[2]+=s*e,this.position[0]+=this.velocity[0]*e,this.position[1]+=this.velocity[1]*e,this.position[2]+=this.velocity[2]*e}kineticEnergy(){const t=this.velocity[0]**2+this.velocity[1]**2+this.velocity[2]**2;return .5*this.mass*t}}class $x{rocket;system;position;velocity;throttle=0;constructor(t,e,n,i){this.rocket=t,this.system=e,this.position=[...n],this.velocity=[...i]}consumeFuel(t,e){this.rocket.consumeFuel(t,e)}}const xs=fn*pn,xa=.5,ya=500,Vo=15,Xo=3,uh=2,qo=7,Yo=0,Ko=Math.PI/2.5;class Zx{camera;dist=qo;targetDist=qo;azimuth=Yo;targetAzimuth=Yo;polar=Ko;targetPolar=Ko;isDragging=!1;prevMouse={x:0,y:0};canvas=null;smoothPos=new L;initialized=!1;orbitKeys={left:!1,right:!1,up:!1,down:!1};zoomKeys={in:!1,out:!1};inertiaAzimuth=0;inertiaPolar=0;constructor(t){this.camera=t,this.setupKeyboard()}setupKeyboard(){window.addEventListener("keydown",t=>{if(t.shiftKey)switch(t.key){case"ArrowLeft":this.orbitKeys.left=!0,t.preventDefault();break;case"ArrowRight":this.orbitKeys.right=!0,t.preventDefault();break;case"ArrowUp":this.orbitKeys.up=!0,t.preventDefault();break;case"ArrowDown":this.orbitKeys.down=!0,t.preventDefault();break}(t.key==="z"||t.key==="Z")&&(this.zoomKeys.in=!0),(t.key==="x"||t.key==="X")&&(this.zoomKeys.out=!0)}),window.addEventListener("keyup",t=>{switch(t.key){case"ArrowLeft":this.orbitKeys.left=!1;break;case"ArrowRight":this.orbitKeys.right=!1;break;case"ArrowUp":this.orbitKeys.up=!1;break;case"ArrowDown":this.orbitKeys.down=!1;break;case"z":case"Z":this.zoomKeys.in=!1;break;case"x":case"X":this.zoomKeys.out=!1;break}})}initialiseAt(t,e,n,i){const s=t.position[0]*xs+(i?.x??0),r=t.position[1]*xs+(i?.y??0),a=t.position[2]*xs+(i?.z??0),l=new L(s,r,a),c=this.targetDist*Math.sin(this.polar)*Math.cos(this.azimuth),d=this.targetDist*Math.cos(this.polar),h=this.targetDist*Math.sin(this.polar)*Math.sin(this.azimuth);this.camera.position.set(s+c,r+d,a+h),this.camera.up.set(0,1,0),this.camera.lookAt(l)}setAzimuth(t){this.azimuth=t,this.targetAzimuth=t}setPolar(t){this.polar=t,this.targetPolar=t}zoom(t){this.targetDist*=t,this.targetDist=Math.max(xa,Math.min(ya,this.targetDist))}enableOrbit(t){this.canvas=t,t.addEventListener("mousedown",e=>{e.button===0&&(this.isDragging=!0,this.prevMouse={x:e.clientX,y:e.clientY},this.inertiaAzimuth=0,this.inertiaPolar=0)}),window.addEventListener("mousemove",e=>{if(!this.isDragging)return;const n=e.clientX-this.prevMouse.x,i=e.clientY-this.prevMouse.y;this.inertiaAzimuth=-n*.005,this.inertiaPolar=i*.005,this.targetAzimuth+=this.inertiaAzimuth,this.targetPolar=Math.max(.05,Math.min(Math.PI-.05,this.targetPolar+this.inertiaPolar)),this.prevMouse={x:e.clientX,y:e.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.targetDist*=e.deltaY>0?1.1:.9,this.targetDist=Math.max(xa,Math.min(ya,this.targetDist))},{passive:!1})}follow(t,e,n,i=!1,s){const r=t.position[0]*xs+(s?.x??0),a=t.position[1]*xs+(s?.y??0),l=t.position[2]*xs+(s?.z??0),c=new L(r,a,l);this.orbitKeys.left&&(this.targetAzimuth+=e*Xo),this.orbitKeys.right&&(this.targetAzimuth-=e*Xo),this.orbitKeys.up&&(this.targetPolar=Math.max(.05,this.targetPolar-e*Xo*.5)),this.orbitKeys.down&&(this.targetPolar=Math.min(Math.PI-.05,this.targetPolar+e*Xo*.5)),this.zoomKeys.in&&(this.targetDist=Math.max(xa,this.targetDist*(1-e*uh))),this.zoomKeys.out&&(this.targetDist=Math.min(ya,this.targetDist*(1+e*uh))),this.isDragging||(this.targetAzimuth+=this.inertiaAzimuth*e*2,this.targetPolar+=this.inertiaPolar*e*2,this.inertiaAzimuth*=Math.exp(-3*e),this.inertiaPolar*=Math.exp(-3*e)),this.dist+=(this.targetDist-this.dist)*Math.min(1,Vo*e),this.azimuth+=(this.targetAzimuth-this.azimuth)*Math.min(1,Vo*e*.5),this.polar+=(this.targetPolar-this.polar)*Math.min(1,Vo*e*.5);const d=this.dist*Math.sin(this.polar)*Math.cos(this.azimuth),h=this.dist*Math.cos(this.polar),u=this.dist*Math.sin(this.polar)*Math.sin(this.azimuth),f=new L(r+d,a+h,l+u),m=new L(0,1,0);if(this.initialized||(this.smoothPos.copy(f),this.initialized=!0),i)this.smoothPos.copy(f);else{const g=Math.min(1,Vo*e);this.smoothPos.lerp(f,g)}this.camera.position.copy(this.smoothPos);const _=Math.abs(this.polar)<.1?new L(0,0,1):Math.abs(this.polar-Math.PI)<.1?new L(0,0,-1):m;this.camera.up.copy(_),this.camera.lookAt(c)}reset(){this.targetDist=qo,this.dist=qo,this.targetAzimuth=Yo,this.azimuth=Yo,this.targetPolar=Ko,this.polar=Ko}}class Jx{container;active=!1;keys=new Set;stagePressed=!1;pauseToggle=!1;visible=!1;constructor(){this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,e.appendChild(n);let i=null;const s={x:0,y:0},r={x:0,y:0},a=(U,D)=>{const q=e.getBoundingClientRect();s.x=q.left+q.width/2,s.y=q.top+q.height/2,r.x=U,r.y=D,this.updateStick(n,s,r)},l=(U,D)=>{r.x=U,r.y=D,this.updateStick(n,s,r);const q=(U-s.x)/60,I=(D-s.y)/60,k=Math.max(-1,Math.min(1,q)),V=Math.max(-1,Math.min(1,I));V>.3?(this.keys.add("touch-up"),this.keys.delete("touch-down")):V<-.3?(this.keys.add("touch-down"),this.keys.delete("touch-up")):(this.keys.delete("touch-up"),this.keys.delete("touch-down")),k>.3?(this.keys.add("touch-right"),this.keys.delete("touch-left")):k<-.3?(this.keys.add("touch-left"),this.keys.delete("touch-right")):(this.keys.delete("touch-left"),this.keys.delete("touch-right"))},c=()=>{i=null,n.style.transform="translate(-50%, -50%)",this.keys.delete("touch-up"),this.keys.delete("touch-down"),this.keys.delete("touch-left"),this.keys.delete("touch-right")};e.addEventListener("touchstart",U=>{if(U.preventDefault(),i!==null)return;const D=U.changedTouches[0];i=D.identifier,a(D.clientX,D.clientY)},{passive:!1}),e.addEventListener("touchmove",U=>{U.preventDefault();for(let D=0;D<U.changedTouches.length;D++)U.changedTouches[D].identifier===i&&l(U.changedTouches[D].clientX,U.changedTouches[D].clientY)},{passive:!1}),e.addEventListener("touchend",U=>{for(let D=0;D<U.changedTouches.length;D++)U.changedTouches[D].identifier===i&&c()}),e.addEventListener("touchcancel",c),t.appendChild(e);const d=document.createElement("div");d.style.cssText=`
      position: absolute; bottom: 20px; right: 20px; display: flex;
      flex-direction: column; gap: 8px; align-items: flex-end;
    `;const h=(U,D=70,q=50)=>{const I=document.createElement("div");I.style.cssText="pointer-events: auto; position: relative;";const k=document.createElement("button");return k.textContent=U,k.style.cssText=`
        width: ${D}px; height: ${q}px; border-radius: 12px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: white; font: 600 14px/1 monospace; cursor: pointer;
        touch-action: none; user-select: none;
      `,I.appendChild(k),[k,I]},[u,f]=h("THR+",70,44),[m,_]=h("THR-",70,44),[g,p]=h("STAGE",70,44),[x,y]=h("R-",60,44),[b,C]=h("R+",60,44),R=(U,D)=>{this.keys.add(U),D.style.background="rgba(255,255,255,0.3)"},S=(U,D)=>{this.keys.delete(U),D.style.background="rgba(255,255,255,0.1)"},N=(U,D)=>{U.addEventListener("touchstart",q=>{q.preventDefault(),R(D,U)},{passive:!1}),U.addEventListener("touchend",q=>{q.preventDefault(),S(D,U)},{passive:!1}),U.addEventListener("touchcancel",()=>S(D,U)),U.addEventListener("mousedown",()=>R(D,U)),U.addEventListener("mouseup",()=>S(D,U)),U.addEventListener("mouseleave",()=>S(D,U))};N(u,"w"),N(m,"s"),N(x,"a"),N(b,"d"),g.addEventListener("touchstart",U=>{U.preventDefault(),this.stagePressed=!0},{passive:!1}),g.addEventListener("mousedown",()=>{this.stagePressed=!0});const M=document.createElement("div");M.style.cssText="display:flex; gap:8px;",M.appendChild(f),M.appendChild(p),d.appendChild(M);const A=document.createElement("div");A.style.cssText="display:flex; gap:8px;",A.appendChild(_),A.appendChild(y),A.appendChild(C),d.appendChild(A),t.appendChild(d)}updateStick(t,e,n){const i=n.x-e.x,s=n.y-e.y,r=60,a=Math.sqrt(i*i+s*s),l=Math.min(a,r),c=Math.atan2(s,i),d=Math.cos(c)*l,h=Math.sin(c)*l;t.style.transform=`translate(calc(-50% + ${d}px), calc(-50% + ${h}px))`}show(){this.visible||(this.visible=!0,this.container.style.display="block")}hide(){this.visible=!1,this.container.style.display="none"}isVisible(){return this.visible}getPitch(){let t=0;return this.keys.has("touch-up")&&(t=1),this.keys.has("touch-down")&&(t=-1),t}getYaw(){let t=0;return this.keys.has("touch-right")&&(t=1),this.keys.has("touch-left")&&(t=-1),t}getRoll(){let t=0;return this.keys.has("a")&&(t=1),this.keys.has("d")&&(t=-1),t}getThrottleUp(){return this.keys.has("w")}getThrottleDown(){return this.keys.has("s")}getStageRequested(){const t=this.stagePressed;return this.stagePressed=!1,t}dispose(){document.body.removeChild(this.container)}}class Qx{keys=new Set;stagePressed=!1;pauseToggle=!1;throttleLimiter=1;state;touch=null;constructor(t){this.state=t,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.key.toLowerCase()),e.key===" "&&(this.stagePressed=!0),e.key==="Escape"&&(this.pauseToggle=!0),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(e.key.toLowerCase())&&e.preventDefault())}),window.addEventListener("keyup",e=>{this.keys.delete(e.key.toLowerCase())})}enableTouch(){this.touch||(this.touch=new Jx),this.touch.show()}disableTouch(){this.touch&&this.touch.hide()}update(t){const e=this.touch?.getThrottleUp()||this.keys.has("w"),n=this.touch?.getThrottleDown()||this.keys.has("s");e&&(this.state.throttle=Math.min(1,this.state.throttle+t*.5)),n&&(this.state.throttle=Math.max(0,this.state.throttle-t*.3))}getPitch(){let t=0;return(this.keys.has("arrowup")||this.touch?.getPitch()===1)&&(t=1),(this.keys.has("arrowdown")||this.touch?.getPitch()===-1)&&(t=-1),t}getYaw(){let t=0;return(this.keys.has("arrowleft")||this.touch?.getYaw()===1)&&(t=1),(this.keys.has("arrowright")||this.touch?.getYaw()===-1)&&(t=-1),t}getRoll(){let t=0;return(this.keys.has("a")||this.touch?.getRoll()===1)&&(t=1),(this.keys.has("d")||this.touch?.getRoll()===-1)&&(t=-1),t}getZoomIn(){return this.keys.has("z")}getZoomOut(){return this.keys.has("x")}getStageRequested(){const t=this.stagePressed||!!this.touch?.getStageRequested();return this.stagePressed=!1,t}consumePauseToggle(){const t=this.pauseToggle;return this.pauseToggle=!1,t}dispose(){this.touch?.dispose(),this.touch=null}}class ty{root;speedVal;fuelVal;vsVal;altVal;massVal;heatFill;heatPct;throttleFill;throttlePct;warpLabel;gfrcVal;_fuelRKg;_fuelRBar;pauseOverlay;navballCanvas;navballCtx;camModeEl;onAction=null;constructor(){this.root=document.createElement("div"),this.root.style.cssText="position:fixed;inset:0;z-index:100;pointer-events:none;",this.pauseOverlay=document.createElement("div"),this.pauseOverlay.style.cssText="position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;",this.pauseOverlay.innerHTML=`
      <div style="width:280px;display:flex;flex-direction:column;gap:8px;align-items:center;">
        <button class="btn btn--primary pause-btn" data-action="resume" style="width:100%;padding:14px;font-size:16px;text-align:center;">▶ RESUME</button>
        <button class="btn btn--secondary pause-btn" data-action="menu" style="width:100%;padding:14px;font-size:16px;text-align:center;">MENU</button>
        <button class="btn btn--danger pause-btn" data-action="restart" style="width:100%;padding:14px;font-size:16px;text-align:center;">🔄 RESTART</button>
      </div>
    `,document.body.appendChild(this.pauseOverlay),this.pauseOverlay.querySelectorAll(".pause-btn").forEach(t=>{t.addEventListener("click",e=>{this.onAction&&this.onAction(e.target.dataset.action)})})}mount(t=document.body){const e=document.createElement("div");e.style.cssText=`
      position:fixed;top:16px;right:16px;z-index:100;pointer-events:auto;
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
        <span style="color:rgba(244,245,242,0.5);">G-FRC</span>
        <span class="gfrc-val" style="color:#cc88ff;">1.0</span>
        <span style="font-size:9px;color:rgba(244,245,242,0.3);">G</span>
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
    `,this.root.appendChild(e),this.speedVal=e.querySelector(".speed-val"),this.fuelVal=e.querySelector(".fuel-val"),this.vsVal=e.querySelector(".vs-val"),this.altVal=e.querySelector(".alt-val"),this.massVal=e.querySelector(".mass-val"),this.heatFill=e.querySelector(".heat-fill"),this.heatPct=e.querySelector(".heat-pct"),this.throttleFill=e.querySelector(".throt-fill"),this.throttlePct=e.querySelector(".throt-pct"),this.warpLabel=e.querySelector(".warp-val"),e.addEventListener("click",r=>{const a=r.target.closest("[data-action]");a&&this.onAction&&this.onAction(a.dataset.action)}),this.camModeEl=document.createElement("div"),this.camModeEl.style.cssText="position:fixed;bottom:20px;left:20px;z-index:100;color:rgba(200,152,56,0.5);font-size:9px;font-family:monospace;pointer-events:none;",this.root.appendChild(this.camModeEl);const n=document.createElement("div");n.style.cssText="position:fixed;bottom:20px;right:20px;z-index:100;pointer-events:none;";const i=document.createElement("canvas");i.width=150,i.height=150,i.style.cssText="width:150px;height:150px;border-radius:75px;opacity:0.85;",n.appendChild(i),this.root.appendChild(n),this.navballCanvas=i,this.navballCtx=i.getContext("2d");const s=document.createElement("div");s.style.cssText="position:fixed;top:16px;left:16px;z-index:100;pointer-events:none;font-family:monospace;font-size:12px;background:rgba(8,10,24,0.8);border:1px solid rgba(200,152,56,0.2);border-radius:6px;padding:8px 12px;color:#ffaa44;",s.innerHTML='<span style="color:rgba(244,245,242,0.5);">FUEL</span> <span class="fuel-r-kg">4500 kg</span><br><div style="width:80px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;margin-top:4px;"><div class="fuel-r-bar" style="width:100%;height:100%;background:#ffaa44;border-radius:3px;"></div></div>',this.root.appendChild(s),this.gfrcVal=e.querySelector(".gfrc-val"),this._fuelRKg=s.querySelector(".fuel-r-kg"),this._fuelRBar=s.querySelector(".fuel-r-bar"),t.appendChild(this.root)}setVisible(t){this.root.style.display=t?"":"none"}setGForce(t){this.gfrcVal.textContent=t.toFixed(1)}setMass(t){this.massVal&&(this.massVal.textContent=`${(t/1e3).toFixed(1)}`)}setFreeCamera(t){this.camModeEl&&(this.camModeEl.textContent=t?"FREE":"")}setWarp(t){this.warpLabel&&(this.warpLabel.textContent=`x${t}`)}setPaused(t){this.pauseOverlay.style.display=t?"flex":"none"}setThrottle(t){const e=Math.round(t*100);this.throttlePct.textContent=`${e}%`,this.throttleFill.style.width=`${e}%`,this.throttleFill.style.background=e>80?"#ff6644":"#4488ff"}setNavballData(t,e,n,i,s){const r=this.navballCtx,a=140,l=140,c=70,d=70,h=66;r.clearRect(0,0,a,l),r.beginPath(),r.arc(c,d,h+2,0,Math.PI*2),r.fillStyle="#060810",r.fill();const u=[t[0],t[1],t[2]],f=Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2])||1;u[0]/=f,u[1]/=f,u[2]/=f;const m=u[0]*n[0]+u[1]*n[1]+u[2]*n[2];let _=[n[0]-u[0]*m,n[1]-u[1]*m,n[2]-u[2]*m];const g=Math.sqrt(_[0]*_[0]+_[1]*_[1]+_[2]*_[2])||1;_[0]/=g,_[1]/=g,_[2]/=g;const p=[u[1]*_[2]-u[2]*_[1],u[2]*_[0]-u[0]*_[2],u[0]*_[1]-u[1]*_[0]],x=S=>{const N=Math.sqrt(S[0]*S[0]+S[1]*S[1]+S[2]*S[2])||1,M=S[0]/N,A=S[1]/N,U=S[2]/N,D=M*p[0]+A*p[1]+U*p[2],q=M*_[0]+A*_[1]+U*_[2],I=M*u[0]+A*u[1]+U*u[2],k=I>0,V=I>0?h/(1+I):h*.5;return{x:c+D*V,y:d-q*V,inFront:k,lx:D,ly:q,lz:I}},y=h*h;r.save(),r.beginPath(),r.arc(c,d,h,0,Math.PI*2),r.clip(),x(n);const b=x([-n[0],-n[1],-n[2]]),C=r.createRadialGradient(c,d,0,c,d,h);if(C.addColorStop(0,"#0a0a22"),C.addColorStop(.4,"#1a2a4a"),C.addColorStop(1,"#224488"),r.fillStyle=C,r.fillRect(c-h,d-h,h*2,h*2),b.inFront){const S=r.createRadialGradient(b.x,b.y,0,b.x,b.y,h*1.2);S.addColorStop(0,"#6a4a2a"),S.addColorStop(.3,"#5a3a1a"),S.addColorStop(.7,"#3a2a12"),S.addColorStop(1,"rgba(10,10,40,0)"),r.fillStyle=S,r.fillRect(c-h,d-h,h*2,h*2)}for(let S=-80;S<=80;S+=10){const N=S*Math.PI/180,M=Math.cos(N),A=Math.sin(N),U=[u[0]*M+_[0]*A,u[1]*M+_[1]*A,u[2]*M+_[2]*A],D=x(U);if(!D.inFront||(D.x-c)*(D.x-c)+(D.y-d)*(D.y-d)>y)continue;const q=S===0?26:S%20===0?18:10;r.beginPath(),r.moveTo(c-q*(1-Math.abs(A)*.3),D.y),r.lineTo(c+q*(1-Math.abs(A)*.3),D.y),r.strokeStyle=S===0?"#FFCC44":"rgba(255,255,255,0.2)",r.lineWidth=S===0?1.5:.6,r.stroke(),S%20===0&&(r.fillStyle="rgba(255,255,255,0.35)",r.font="7px sans-serif",r.fillText(`${Math.abs(S)}`,c+q+3,D.y+2))}for(let S=0;S<360;S+=45){const N=S*Math.PI/180,M=p[0]*Math.cos(N)+_[0]*Math.sin(N),A=p[1]*Math.cos(N)+_[1]*Math.sin(N),U=p[2]*Math.cos(N)+_[2]*Math.sin(N),D=[M-u[0]*m,A-u[1]*m,U-u[2]*m],q=Math.sqrt(D[0]*D[0]+D[1]*D[1]+D[2]*D[2])||1,I=x([D[0]/q,D[1]/q,D[2]/q]);I.inFront&&(r.fillStyle="rgba(255,255,255,0.2)",r.font="6px sans-serif",r.textAlign="center",r.fillText(`${S}°`,I.x,I.y+2),r.textAlign="start")}const R=(S,N)=>{const M=x(S);M.inFront&&N(M)};R(e,S=>{r.beginPath(),r.arc(S.x,S.y,4,0,Math.PI*2),r.fillStyle="#44FF44",r.fill(),r.beginPath(),r.arc(S.x,S.y,7,0,Math.PI*2),r.strokeStyle="#44FF44",r.lineWidth=1.5,r.stroke()}),R([-e[0],-e[1],-e[2]],S=>{r.beginPath(),r.arc(S.x,S.y,4,0,Math.PI*2),r.fillStyle="rgba(68,255,68,0.5)",r.fill(),r.beginPath(),r.arc(S.x,S.y,7,0,Math.PI*2),r.strokeStyle="#44FF44",r.lineWidth=1,r.stroke(),r.beginPath(),r.moveTo(S.x-3,S.y-3),r.lineTo(S.x+3,S.y+3),r.moveTo(S.x+3,S.y-3),r.lineTo(S.x-3,S.y+3),r.strokeStyle="#44FF44",r.lineWidth=1,r.stroke()}),R(n,S=>{r.beginPath(),r.moveTo(S.x,S.y-6),r.lineTo(S.x-4,S.y+3),r.lineTo(S.x+4,S.y+3),r.closePath(),r.fillStyle="#4488FF",r.fill()}),R([-n[0],-n[1],-n[2]],S=>{r.beginPath(),r.moveTo(S.x,S.y+6),r.lineTo(S.x-4,S.y-3),r.lineTo(S.x+4,S.y-3),r.closePath(),r.fillStyle="#CC8844",r.fill()}),r.beginPath(),r.arc(c,d,3,0,Math.PI*2),r.fillStyle="#FFAA44",r.fill(),r.restore(),r.beginPath(),r.arc(c,d,h+1,0,Math.PI*2),r.strokeStyle="#334466",r.lineWidth=2,r.stroke();for(let S=0;S<360;S+=45){const N=S*Math.PI/180;r.beginPath(),r.moveTo(c+Math.cos(N)*(h-7),d+Math.sin(N)*(h-7)),r.lineTo(c+Math.cos(N)*(h+2),d+Math.sin(N)*(h+2)),r.strokeStyle="#4a6a8a",r.lineWidth=1,r.stroke()}}update(t,e,n=0,i=0){const s=Math.sqrt(t.velocity[0]**2+t.velocity[1]**2+t.velocity[2]**2);let r=1/0;for(const m of e.bodies){if(m.mass<=0)continue;const _=t.position[0]-m.position[0],g=t.position[1]-m.position[1],p=t.position[2]-m.position[2],x=Math.sqrt(_*_+g*g+p*p),y=m.getSurfaceRadiusAt?.(t.position)??m.radius??0,b=x-y;b<r&&(r=b)}const a=Math.min(100,n/3e5*100);this.speedVal.textContent=s>1e3?(s/1e3).toFixed(1)+"k":s.toFixed(1),this.speedVal.style.color=s>3e3?"#ff6644":s>1e3?"#ffaa44":"#ddd";const l=r/1e3;this.altVal.textContent=r>1e4?l.toFixed(1)+"k":r.toFixed(0);const c=t.velocity[1];this.vsVal.textContent=c>0?"+"+c.toFixed(0):c.toFixed(0),this.vsVal.style.color=c>0?"#88ff88":c<0?"#ff6644":"#88ccff";const d=t.rocket.totalFuelMass();d>1e3?(this.fuelVal.textContent=(d/1e3).toFixed(1),this.fuelVal.nextElementSibling.textContent="t"):(this.fuelVal.textContent=d.toFixed(0),this.fuelVal.nextElementSibling.textContent="kg");const h=Math.round(i*100);this.throttlePct.textContent=`${h}%`;const u=t.rocket.totalFuelMass(),f=t.rocket.assembly.totalFuelCapacity();this._fuelRKg&&(this._fuelRKg.textContent=u>1e3?`${(u/1e3).toFixed(1)} t`:`${u.toFixed(0)} kg`),this._fuelRBar&&(this._fuelRBar.style.width=`${f>0?u/f*100:0}%`),this.throttleFill.style.width=`${h}%`,this.throttleFill.style.background=h>80?"#ff4444":h>40?"#ffaa00":"#4488ff",this.heatPct.textContent=`${a.toFixed(0)}%`,this.heatPct.style.color=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44",this.heatFill.style.width=`${a}%`,this.heatFill.style.background=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44"}unmount(){this.root.remove(),this.pauseOverlay.remove()}}function ey(o,t,e){if(o.throttle<=0)return;const n=_r(o.rocket.assembly.roots);if(!n||!n.thrust||!n.isp)return;const i=n.thrust*1e3*o.throttle,s=i/(n.isp*xx)/30,r=e??[0,1,0],a=i*r[0]/o.rocket.totalMass(),l=i*r[1]/o.rocket.totalMass(),c=i*r[2]/o.rocket.totalMass();o.velocity[0]+=a*t,o.velocity[1]+=l*t,o.velocity[2]+=c*t,o.consumeFuel(s,t)}function _r(o){for(const t of o){if(t.part.kind==="engine"&&t.part.thrust&&t.part.isp)return{thrust:t.part.thrust,isp:t.part.isp};if(t.children?.length){const e=_r(t.children);if(e)return e}}return null}class ny{ctx=null;engineOsc=null;engineGain=null;engineNoise=null;engineRunning=!1;throttleLevel=0;constructor(){try{this.ctx=new AudioContext}catch{}}ensureCtx(){return this.ctx?(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx):null}startEngine(){if(!this.ensureCtx()||this.engineRunning)return;const t=this.ctx;this.engineRunning=!0,this.engineOsc=t.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=80,this.engineGain=t.createGain(),this.engineGain.gain.value=.02;const e=t.createBuffer(1,t.sampleRate*2,t.sampleRate),n=e.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=(Math.random()*2-1)*.3;this.engineNoise=t.createBufferSource(),this.engineNoise.buffer=e,this.engineNoise.loop=!0;const i=t.createGain();i.gain.value=.01;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=400,this.engineOsc.connect(this.engineGain),this.engineOsc.start(),this.engineNoise.connect(s),s.connect(i);const r=t.createGain();r.gain.value=.4,this.engineGain.connect(r),i.connect(r),r.connect(t.destination)}setThrottle(t){if(this.throttleLevel=t,!this.engineOsc||!this.engineGain)return;const e=60+t*80,n=.01+t*.04;this.engineOsc.frequency.setValueAtTime(e,this.ctx.currentTime+.1),this.engineGain.gain.setValueAtTime(n,this.ctx.currentTime+.05)}stopEngine(){if(this.engineOsc){try{this.engineOsc.stop()}catch{}this.engineOsc=null}if(this.engineNoise){try{this.engineNoise.stop()}catch{}this.engineNoise=null}this.engineGain&&(this.engineGain.disconnect(),this.engineGain=null),this.engineRunning=!1}playStaging(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="square",n.frequency.setValueAtTime(200,e),n.frequency.exponentialRampToValueAtTime(40,e+.3);const i=t.createGain();i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.5),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.5)}playCrash(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(20,e+.8);const i=t.createGain();i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+1.5);const s=t.createBuffer(1,t.sampleRate*1,t.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*(c<r.length*.2?.8:.1*(1-c/r.length));const a=t.createBufferSource();a.buffer=s;const l=t.createGain();l.gain.setValueAtTime(.2,e),l.gain.exponentialRampToValueAtTime(.001,e+1),n.connect(i),a.connect(l),i.connect(t.destination),l.connect(t.destination),n.start(e),n.stop(e+1.5),a.start(e),a.stop(e+1)}playLand(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(300,e),n.frequency.exponentialRampToValueAtTime(60,e+.2);const i=t.createGain();i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.3)}dispose(){this.stopEngine(),this.ctx&&(this.ctx.close(),this.ctx=null)}}function on(o,t){const e=t.bodyByName("sun");let n=e,i=0;for(const s of t.bodies){if(s.name==="sun")continue;const r=s;let a=e,l=e.position;if(r.parentBody)a=r.parentBody,l=a.position;else if(s.name==="moon"){const y=t.bodyByName("earth");y&&(a=y,l=y.position)}const c=s.position[0]-o[0],d=s.position[1]-o[1],h=s.position[2]-o[2],u=c*c+d*d+h*h,f=Math.sqrt(u),m=s.position[0]-l[0],_=s.position[1]-l[1],g=s.position[2]-l[2],x=Math.sqrt(m*m+_*_+g*g)*Math.pow(s.mass/a.mass,.4);if(f<x){const y=Es*s.mass/u;y>i&&(i=y,n=s)}}return n}function Js(o,t,e,n,i){const s=Es*e,r=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]),l=(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])/2-s/r,c=-s/(2*l),d=o[1]*t[2]-o[2]*t[1],h=o[2]*t[0]-o[0]*t[2],u=o[0]*t[1]-o[1]*t[0],f=Math.sqrt(d*d+h*h+u*u),m=(t[1]*u-t[2]*h)/s-o[0]/r,_=(t[2]*d-t[0]*u)/s-o[1]/r,g=(t[0]*h-t[1]*d)/s-o[2]/r,p=Math.sqrt(m*m+_*_+g*g),x=p<1&&c>0,y=x?c*(1+p):1/0,b=x?c*(1-p):r,C=p>1e-8?m/p:1,R=p>1e-8?_/p:0,S=p>1e-8?g/p:0,N=[C,R,S],M=[(h*S-u*R)/(f||1),(u*C-d*S)/(f||1),(d*R-h*C)/(f||1)],A=[],U=x?Math.PI:Math.acos(-1/Math.max(p,1.001))*.98;let D,q;if(x){const I=2*Math.PI*Math.sqrt(c*c*c/s),k=(o[0]*t[0]+o[1]*t[1]+o[2]*t[2])/(r||1),V=(c*(1-p*p)/r-1)/p,Q=k*Math.sqrt(c*(1-p*p)/s)/(p||1),K=(p+V)/(1+p*V),J=Math.sqrt(1-p*p)*Q/(1+p*V);let et=Math.atan2(J,K);et<0&&(et+=Math.PI*2);const ht=(et-p*J)*I/(2*Math.PI),X=I-ht,tt=(X+I/2)%I;q=X,D=tt}for(let I=0;I<=i;I++){const k=-U+2*U*I/i,V=1+p*Math.cos(k);if(Math.abs(V)<1e-10)continue;const Q=c*(1-p*p)/V;if(isNaN(Q)||!isFinite(Q)||Q<0)continue;const K=Q*(Math.cos(k)*N[0]+Math.sin(k)*M[0]),J=Q*(Math.cos(k)*N[2]+Math.sin(k)*M[2]);if(Math.sqrt(K*K+J*J)>n*1.5)break;A.push([K,J])}return{points:A,eccentricity:p,apoapsis:y,periapsis:b,bound:x,timeToAp:D,timeToPe:q}}function iy(o,t){const e=o.position[0]-t.position[0],n=o.position[1]-t.position[1],i=o.position[2]-t.position[2],s=e*e+n*n+i*i,r=Math.sqrt(s);if(r===0)return[0,0,0];const a=Es*o.mass*t.mass/s;return[a*e/r,a*n/r,a*i/r]}function vu(o,t){let e=0,n=0,i=0;for(const s of t){if(s===o||s.mass<=0)continue;const r=iy(s,o);e+=r[0],n+=r[1],i+=r[2]}return[e,n,i]}const Nn=kt/.08,Fn=600;function sy(){try{const o=document.createElement("canvas");o.width=64,o.height=64;const t=o.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(255,255,240,0.95)"),e.addColorStop(.35,"rgba(255,230,180,0.7)"),e.addColorStop(.55,"rgba(255,180,100,0.35)"),e.addColorStop(.75,"rgba(255,120,50,0.15)"),e.addColorStop(1,"rgba(255,80,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Ye(o);return n.needsUpdate=!0,n}catch{return new sl(new Uint8Array([255,255,255,255]),1,1,un)}}function oy(){try{const o=document.createElement("canvas");o.width=64,o.height=64;const t=o.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,200,100,0.6)"),e.addColorStop(.3,"rgba(255,150,60,0.3)"),e.addColorStop(.6,"rgba(200,80,30,0.1)"),e.addColorStop(1,"rgba(100,30,10,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Ye(o);return n.needsUpdate=!0,n}catch{return new sl(new Uint8Array([255,255,255,255]),1,1,un)}}class ry{particles;outerParticles;positions;velocities;lifetimes;ages;colors;sizes;active;nextIndex;coreTex;outerTex;throttleLevel=1;inVacuum=!1;group;constructor(){this.active=!1,this.nextIndex=0,this.positions=new Float32Array(Fn*3),this.velocities=new Float32Array(Fn*3),this.lifetimes=new Float32Array(Fn),this.ages=new Float32Array(Fn),this.colors=new Float32Array(Fn*3),this.sizes=new Float32Array(Fn),this.ages.fill(1/0),this.coreTex=sy(),this.outerTex=oy(),this.group=new an;const t=new Ue;t.setAttribute("position",new Ce(this.positions,3)),t.setAttribute("color",new Ce(this.colors,3)),t.setAttribute("size",new Ce(this.sizes,1));const e=new ao({size:Nn*.6,map:this.coreTex,vertexColors:!0,sizeAttenuation:!0,blending:cn,depthWrite:!1,transparent:!0,opacity:1});this.particles=new pr(t,e),this.group.add(this.particles);const n=new Ue;n.setAttribute("position",new Ce(this.positions.slice(),3));const i=new ao({size:Nn*1.2,map:this.outerTex,color:16746564,sizeAttenuation:!0,blending:cn,depthWrite:!1,transparent:!0,opacity:.5});this.outerParticles=new pr(n,i),this.group.add(this.outerParticles)}setThrottle(t){this.throttleLevel=Math.max(.01,t)}setVacuum(t){this.inVacuum=t}start(){this.active=!0}stop(){this.active=!1;for(let t=0;t<Fn;t++)this.ages[t]=this.lifetimes[t],this.positions[t*3]=0,this.positions[t*3+1]=0,this.positions[t*3+2]=0;this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.outerParticles.geometry.attributes.position.needsUpdate=!0}update(t){const e=this.inVacuum?3.5:1;if(this.active){const i=Math.ceil((3+Math.random()*3)*this.throttleLevel);for(let s=0;s<i;s++){const r=this.nextIndex;this.nextIndex=(this.nextIndex+1)%Fn;const a=(.08+Math.random()*.15)*(this.inVacuum?3:1)/Math.max(.3,this.throttleLevel);this.positions[r*3]=(Math.random()-.5)*a*Nn,this.positions[r*3+1]=-(Math.random()*.04)*Nn,this.positions[r*3+2]=(Math.random()-.5)*a*Nn;const l=(6+Math.random()*10)*this.throttleLevel*e;this.velocities[r*3]=(Math.random()-.5)*.3*Nn,this.velocities[r*3+1]=-(l*Nn),this.velocities[r*3+2]=(Math.random()-.5)*.3*Nn,this.lifetimes[r]=(.25+Math.random()*.35)*e,this.ages[r]=0,this.sizes[r]=.5+Math.random()*.5}}for(let i=0;i<Fn;i++){const s=this.ages[i],r=this.lifetimes[i];if(s>=r)continue;const a=s+t;if(this.ages[i]=a,a>=r)continue;const l=a/r,c=i*3;this.positions[c]=(this.positions[c]??0)+(this.velocities[c]??0)*t,this.positions[c+1]=(this.positions[c+1]??0)+(this.velocities[c+1]??0)*t,this.positions[c+2]=(this.positions[c+2]??0)+(this.velocities[c+2]??0)*t;const d=Math.exp(-2*t);this.velocities[c]=(this.velocities[c]??0)*d,this.velocities[c+2]=(this.velocities[c+2]??0)*d,Math.random()<.05&&(this.velocities[c]=(this.velocities[c]??0)+(Math.random()-.5)*.2*Nn,this.velocities[c+2]=(this.velocities[c+2]??0)+(Math.random()-.5)*.2*Nn);let h,u,f;if(l<.15)h=1,u=1,f=1;else if(l<.35){const _=(l-.15)/.2;h=1,u=1-_*.3,f=1-_*.8}else if(l<.6){const _=(l-.35)/.25;h=1,u=.7-_*.3,f=.2-_*.15}else{const _=(l-.6)/.4;h=1-_*.7,u=.4-_*.35,f=.05-_*.04}this.inVacuum&&(u*=.85,f*=.5),this.colors[c]=Math.max(0,h),this.colors[c+1]=Math.max(0,u),this.colors[c+2]=Math.max(0,f);const m=l<.3?.6+l/.3*.4:1-(l-.3)/.7*.8;this.sizes[i]=m*(.5+(this.sizes[i]??.5)*.5)}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.particles.geometry.attributes.size.needsUpdate=!0;const n=this.outerParticles.geometry.attributes.position;for(let i=0;i<Fn;i++){const s=i*3;n.array[s]=this.positions[s]??0,n.array[s+1]=this.positions[s+1]??0,n.array[s+2]=this.positions[s+2]??0}n.needsUpdate=!0}getMesh(){return this.group}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.outerParticles.geometry.dispose(),this.outerParticles.material.dispose(),this.coreTex.dispose(),this.outerTex.dispose()}}const Ii=100,ys=kt*or;class ay{particles;positions;velocities;lifetimes;ages;active=!1;constructor(){this.positions=new Float32Array(Ii*3),this.velocities=new Float32Array(Ii*3),this.lifetimes=new Float32Array(Ii),this.ages=new Float32Array(Ii),this.ages.fill(1/0);const t=new Ue;t.setAttribute("position",new Ce(this.positions,3));const e=new ao({size:.3*ys,color:13421772,transparent:!0,opacity:.5,blending:_i,depthWrite:!1,sizeAttenuation:!0});this.particles=new pr(t,e)}start(){this.active=!0}stop(){this.active=!1}update(t){if(this.active)for(let r=0;r<3;r++){let a=-1,l=-1;for(let c=0;c<Ii;c++)this.ages[c]>=this.lifetimes[c]&&this.ages[c]>l&&(l=this.ages[c],a=c);if(a<0)for(let c=0;c<Ii;c++)this.ages[c]>l&&(l=this.ages[c],a=c);a>=0&&(this.positions[a*3]=(Math.random()-.5)*.1*ys,this.positions[a*3+1]=0,this.positions[a*3+2]=(Math.random()-.5)*.1*ys,this.velocities[a*3]=(Math.random()-.5)*.5*ys,this.velocities[a*3+1]=(.5+Math.random()*1)*ys,this.velocities[a*3+2]=(Math.random()-.5)*.5*ys,this.lifetimes[a]=1+Math.random()*1.5,this.ages[a]=0)}const e=this.particles.material;let n=!1;const i=this.velocities,s=this.positions;for(let r=0;r<Ii;r++){if(this.ages[r]>=this.lifetimes[r])continue;n=!0;const a=this.ages[r]+t;if(this.ages[r]=a,a>=this.lifetimes[r])continue;const l=r*3,c=i[l]??0,d=i[l+1]??0,h=i[l+2]??0;s[l]=(s[l]??0)+c*t,s[l+1]=(s[l+1]??0)+d*t,s[l+2]=(s[l+2]??0)+h*t,i[l]=c*.98,i[l+2]=h*.98}e.opacity=this.active?.5:Math.max(0,e.opacity-t*2),this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.visible=n||this.active}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose()}}const Dt=fn*pn;class ly{renderer;sceneMgr;system;achievements;state;rocket;rocketGroup;chase;controls;hud;sound;launched=!1;grounded=!0;groundedDir=null;liftoffFrames=0;engineFlame;groundSmoke;rocketShadow=null;reentryGlow=null;rocketQuat=new hn;angularVel=new L;ANGULAR_ACCEL=10;ANGULAR_DAMPING=8;timeWarp=1;parachuteDeployed=!1;deployedChuteMesh=null;crashed=!1;paused=!1;debris=[];warpLevels=[1,3,5,10,100,1e3,1e5,1e6];warpIndex=0;crashOverlay=null;prevVel=[0,0,0];gearDeployed=!1;gearMeshes=[];missionTime=0;sasMode="off";sasTargetQuat=new hn;screenShake=0;heatEnergy=0;MAX_HEAT=999999999;HEAT_RADIATION_RATE=.995;stageInfo=[];lastReentryIntensity=0;prevMach=0;sonicBoomTriggered=!1;sonicBoomTimer=0;countdownTimer=0;countdownActive=!1;countdownEl=null;lastRefBody=null;impactMarker=null;maxAlt=0;maxSpeed=0;orbitLine=null;exhaustLight=null;followLight=null;cameraMode="chase";freeCamAzimuth=0;freeCamPolar=Math.PI/2;freeCamDist=4;freeCamKeys={left:!1,right:!1,up:!1,down:!1};freeCamDragging=!1;freeCamPrevMouse={x:0,y:0};hudVisible=!0;lastAltMilestone=0;sonicBoomRing=null;sonicBoomLife=0;reentryGlowMesh=null;rocketBottomY=0;_debugShown=!1;_debugMarker=null;_spawnProtectionTimer=0;_camSnapped=!1;showCountdown(t){this.countdownEl||(this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
        position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);
        font-size:72px;font-weight:bold;color:#fff;z-index:500;
        text-shadow:0 0 30px rgba(68,136,255,0.6);
        font-family:system-ui,sans-serif;pointer-events:none;
        transition:opacity 0.2s;
      `,document.body.appendChild(this.countdownEl)),this.countdownEl.textContent=t,this.countdownEl.style.opacity="1",t==="LIFTOFF!"?(this.countdownEl.style.color="#FF8844",this.countdownEl.style.fontSize="48px"):(this.countdownEl.style.color="#FFFFFF",this.countdownEl.style.fontSize="72px")}hideCountdown(){this.countdownEl&&(this.countdownEl.style.opacity="0")}get dragMultiplier(){return this.gearDeployed?2.5:1}onCrashAction=null;constructor(t,e,n,i,s){this.renderer=t,this.sceneMgr=e,this.system=n,this.achievements=s,this.rocket=i;const r=n.bodyByName("earth"),a=r.radius??6371e3,l=28.5*Math.PI/180,c=-80.5*Math.PI/180,d=[Math.cos(l)*Math.cos(c),Math.sin(l),Math.cos(l)*Math.sin(c)],h=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),u=[d[0]/h,d[1]/h,d[2]/h],f=60,m=[r.position[0]+u[0]*a,r.position[1]+u[1]*a,r.position[2]+u[2]*a],_=r.getSurfaceRadiusAt?.(m)??a,g=[r.position[0]+u[0]*(_+f),r.position[1]+u[1]*(_+f),r.position[2]+u[2]*(_+f)];this.state=new $x(i,n,g,[0,0,0]),this.groundedDir=u;const p=new L(g[0]-r.position[0],g[1]-r.position[1],g[2]-r.position[2]).normalize();this.rocketQuat.setFromUnitVectors(new L(0,1,0),p),this.rocketGroup=i.assembly.toMesh(),this.rocketGroup.scale.setScalar(or),this.rocketGroup.position.set(this.state.position[0]*Dt,this.state.position[1]*Dt,this.state.position[2]*Dt),e.scene.add(this.rocketGroup);const x=new ue(1,8,6),y=new Me({color:65280,transparent:!0,opacity:.3,depthTest:!1,depthWrite:!1,visible:!1});this._debugMarker=new dt(x,y),this._debugMarker.visible=!1,this._debugMarker.position.copy(this.rocketGroup.position),e.scene.add(this._debugMarker),this.rocketGroup.traverse(G=>{if(G instanceof dt&&G.material){const E=Array.isArray(G.material)?G.material:[G.material];for(const v of E)v.polygonOffset=!0,v.polygonOffsetFactor=-1,v.polygonOffsetUnits=-1,v instanceof xe&&(v.emissive=new bt(1118481),v.emissiveIntensity=.3,v.roughness=Math.min(v.roughness,.6),v.metalness=Math.min(v.metalness,.3),v.needsUpdate=!0)}});const b=new Un(.05,.15,16),C=new Me({color:16724787,side:Ie,transparent:!0,opacity:.6,depthWrite:!1});this.impactMarker=new dt(b,C),this.impactMarker.rotation.x=-Math.PI/2,this.impactMarker.visible=!1,this.sceneMgr.scene.add(this.impactMarker);for(const G of n.bodies){const E=G;E.mesh&&e.scene.add(E.mesh),E.light&&e.scene.add(E.light)}const R=new lo(8952268,1.5);R.position.set(-50,20,-30),e.scene.add(R),this.followLight=new Va(16768460,3,15),this.followLight.position.set(0,2,0),this.rocketGroup.add(this.followLight),this.engineFlame=new ry,this.positionFlameAtNozzle(),this.rocketGroup.add(this.engineFlame.getMesh()),this.exhaustLight=new Va(16746564,0,20),this.exhaustLight.position.set(0,-1,0),this.rocketGroup.add(this.exhaustLight);const S=new ue(2,16,16),N=new Me({color:16746564,transparent:!0,opacity:0,depthWrite:!1});this.reentryGlowMesh=new dt(S,N),this.reentryGlowMesh.position.set(0,.5,0),this.reentryGlowMesh.visible=!1,this.rocketGroup.add(this.reentryGlowMesh),this.groundSmoke=new ay,this.rocketGroup.add(this.groundSmoke.getMesh());const M=new Er(.3*or,32),A=new Me({color:0,transparent:!0,opacity:.3,depthWrite:!1});this.rocketShadow=new dt(M,A),this.rocketShadow.rotation.x=-Math.PI/2,this.rocketShadow.position.y=-2,this.rocketGroup.add(this.rocketShadow);const U=new ue(.3,16,12),D=new Me({color:16737792,transparent:!0,opacity:0,blending:cn,depthWrite:!1});this.reentryGlow=new dt(U,D),this.rocketGroup.add(this.reentryGlow);const q=new ue(.5,16,12),I=new Me({color:16729088,transparent:!0,opacity:0,blending:cn,depthWrite:!1}),k=new dt(q,I);k.name="reentry-outer",this.rocketGroup.add(k);const V=new L().crossVectors(p,new L(0,1,0)).normalize(),Q=Math.atan2(V.z,V.x);this.chase=new Zx(e.camera),this.chase.setAzimuth(Q),this.chase.enableOrbit(this.renderer.domElement);const K=-this.rocketBottomY-50*Dt+2,J=p.x*K,et=p.y*K,ct=p.z*K;this.chase.initialiseAt(this.state,this.rocketQuat,p,{x:J,y:et,z:ct}),this._spawnProtectionTimer=600;const ht=this.state.position[0]*Dt+p.x*K,X=this.state.position[1]*Dt+p.y*K,tt=this.state.position[2]*Dt+p.z*K;e.camera.position.set(ht+10,X+3,tt+10),e.camera.lookAt(ht,X,tt),this.controls=new Qx(this.state),("ontouchstart"in window||navigator.maxTouchPoints>0)&&this.controls.enableTouch(),this.sound=new ny,this.hud=new ty,this.hud.onAction=G=>{G==="stage"?this.performStage():G==="parachute"?this.toggleParachute():G==="map"?(pt=!pt,Rt.style.display=pt?"block":"none",pt&&requestAnimationFrame(Ee)):G==="resume"?(this.paused=!1,this.hud.setPaused(!1)):G==="menu"?this.onCrashAction?.("menu"):G==="restart"&&this.onCrashAction?.("restart")},this.hud.mount();let pt=!1,vt=1,St=0,Nt=0,Lt=null;const Rt=document.createElement("div");Rt.style.cssText="position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.95);display:none;";const Ft=document.createElement("canvas");Ft.style.cssText="position:absolute;inset:0;width:100%;height:100%;",Rt.appendChild(Ft),document.body.appendChild(Rt);const z=document.createElement("div");z.style.cssText="position:absolute;top:16px;left:16px;z-index:10;color:#EACD9E;font-family:monospace;font-size:12px;pointer-events:none;",z.innerHTML='<div id="map-zoom">ZOOM: 1x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>',Rt.appendChild(z),Rt.appendChild(Ft),document.body.appendChild(Rt),Ft.addEventListener("wheel",G=>{vt*=G.deltaY>0?.9:1.1,vt=Math.max(.05,Math.min(100,vt))}),Ft.addEventListener("mousedown",G=>{Lt={x:G.clientX,y:G.clientY}}),window.addEventListener("mouseup",()=>{Lt=null}),window.addEventListener("mousemove",G=>{Lt&&(St+=G.clientX-Lt.x,Nt+=G.clientY-Lt.y,Lt={x:G.clientX,y:G.clientY})}),Ft.addEventListener("touchstart",G=>{G.touches.length===1&&(Lt={x:G.touches[0].clientX,y:G.touches[0].clientY})}),Ft.addEventListener("touchmove",G=>{!Lt||G.touches.length!==1||(St+=G.touches[0].clientX-Lt.x,Nt+=G.touches[0].clientY-Lt.y,Lt={x:G.touches[0].clientX,y:G.touches[0].clientY})}),Ft.addEventListener("touchend",()=>{Lt=null}),Ft.addEventListener("dblclick",G=>{G.preventDefault();const E=Ft.getBoundingClientRect(),v=G.clientX-E.left,T=G.clientY-E.top,$=Ft.clientWidth,Y=Ft.clientHeight,nt=$/2+St,xt=Y/2+Nt;let ft=1;for(const j of this.system.bodies){const Gt=(j.position[0]-this.state.position[0])*Dt,Bt=(j.position[2]-this.state.position[2])*Dt,At=Math.sqrt(Gt*Gt+Bt*Bt);At>ft&&(ft=At)}const it=Math.min($,Y)*.4/ft*vt;let Tt=null,Vt=25;for(const j of this.system.bodies){const Gt=nt+(j.position[0]-this.state.position[0])*it,Bt=xt-(j.position[2]-this.state.position[2])*it,At=Math.sqrt((v-Gt)**2+(T-Bt)**2);At<Vt&&(Vt=At,Tt=j.name)}if(Tt){const j=this.system.bodyByName(Tt);if(j){const Gt=Tt==="earth"?20:Tt==="moon"?50:3;St=-(j.position[0]-this.state.position[0])*it,Nt=(j.position[2]-this.state.position[2])*it,vt=Gt,Oe.show(`${Tt}: ${(j.mass??0).toExponential(2)}kg R=${(j.radius??0)/1e3}km`)}}});const Ee=()=>{if(!pt)return;const G=window.devicePixelRatio||1,E=Ft.clientWidth,v=Ft.clientHeight;Ft.width=E*G,Ft.height=v*G;const T=Ft.getContext("2d");T.setTransform(G,0,0,G,0,0),T.fillStyle="#060814",T.fillRect(0,0,E,v);const $=E/2+St,Y=v/2+Nt,nt=T.createRadialGradient($,Y,0,$,Y,Math.max(E,v)*.6);nt.addColorStop(0,"rgba(20,30,60,0.3)"),nt.addColorStop(.5,"rgba(10,15,30,0.15)"),nt.addColorStop(1,"rgba(6,8,20,0)"),T.fillStyle=nt,T.fillRect(0,0,E,v),T.strokeStyle="rgba(100,100,150,0.08)",T.lineWidth=1;const xt=100*vt;for(let ut=$%xt;ut<E;ut+=xt)T.beginPath(),T.moveTo(ut,0),T.lineTo(ut,v),T.stroke();for(let ut=Y%xt;ut<v;ut+=xt)T.beginPath(),T.moveTo(0,ut),T.lineTo(E,ut),T.stroke();T.strokeStyle="rgba(68,136,255,0.06)",T.lineWidth=.5;for(let ut=xt;ut<Math.max(E,v);ut+=xt)T.beginPath(),T.arc($,Y,ut,0,Math.PI*2),T.stroke();let ft=1;for(const ut of this.system.bodies){const qt=(ut.position[0]-this.state.position[0])*Dt,Pt=(ut.position[2]-this.state.position[2])*Dt,ge=Math.sqrt(qt*qt+Pt*Pt);ge>ft&&(ft=ge)}const it=Math.min(E,v)*.4/ft*vt,Tt={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",mercury:"#c0c0c0",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",pluto:"#ddccbb",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",phobos:"#bb9988",deimos:"#887766"},Vt={sun:"rgba(255,220,68,0.20)",earth:"rgba(79,195,247,0.12)",mars:"rgba(232,120,68,0.12)",venus:"rgba(232,184,76,0.12)",jupiter:"rgba(232,184,124,0.12)",saturn:"rgba(244,232,176,0.20)",uranus:"rgba(95,224,240,0.10)",neptune:"rgba(91,136,238,0.10)",moon:"rgba(204,204,238,0.06)",titan:"rgba(221,170,119,0.08)"},j={sun:8,earth:5,moon:2.5,venus:3.5,mars:3.5,mercury:2.5,jupiter:7,saturn:6,uranus:4,neptune:3.5,pluto:1.5,titan:2,io:1.5,europa:1.5,ganymede:2,phobos:1,deimos:1},Gt=this.system.bodyByName("sun")?.position;if(Gt)for(const ut of this.system.bodies){if(ut.name==="sun"||ut.name==="moon")continue;const qt=[ut.position[0]-Gt[0],ut.position[1]-Gt[1],ut.position[2]-Gt[2]];if(ut.velocity){const Pt=Js(qt,ut.velocity,this.system.bodyByName("sun").mass,5e14,180);if(Pt.points.length>10){T.beginPath(),T.strokeStyle=Tt[ut.name]+"30",T.lineWidth=1,T.setLineDash([3,6]);const ge=$+(Pt.points[0][0]+Gt[0])*it,Ke=Y-(Pt.points[0][1]+Gt[2])*it;T.moveTo(ge,Ke);for(let $t=1;$t<Pt.points.length;$t+=2){const Fe=$+(Pt.points[$t][0]+Gt[0])*it,We=Y-(Pt.points[$t][1]+Gt[2])*it;T.lineTo(Fe,We)}T.stroke(),T.setLineDash([])}}}const Bt=["earth","venus","mars","jupiter","saturn","uranus","neptune"];for(const ut of this.system.bodies)if(Bt.includes(ut.name)){const qt=$+(ut.position[0]-this.state.position[0])*it,Pt=Y-(ut.position[2]-this.state.position[2])*it,ge=j[ut.name]||3,Ke=T.createRadialGradient(qt,Pt,ge*.5,qt,Pt,ge*3),$t=Tt[ut.name]||"#888";Ke.addColorStop(0,$t+"30"),Ke.addColorStop(.5,$t+"15"),Ke.addColorStop(1,$t+"00"),T.beginPath(),T.arc(qt,Pt,ge*3,0,Math.PI*2),T.fillStyle=Ke,T.fill()}for(const ut of this.system.bodies)if(Bt.includes(ut.name)){const qt=$+(ut.position[0]-this.state.position[0])*it,Pt=Y-(ut.position[2]-this.state.position[2])*it,ge=j[ut.name]||3,Ke=1.2;T.beginPath(),T.arc(qt,Pt,ge*Ke,0,Math.PI*2),T.setLineDash([2,6]),T.strokeStyle="rgba(100,180,255,0.25)",T.lineWidth=.8,T.stroke(),T.setLineDash([])}for(const ut of this.system.bodies){const qt=$+(ut.position[0]-this.state.position[0])*it,Pt=Y-(ut.position[2]-this.state.position[2])*it;j[ut.name]&&j[ut.name]>=5&&(T.beginPath(),T.arc(qt,Pt,j[ut.name]*3,0,Math.PI*2),T.fillStyle=Vt[ut.name]||"rgba(100,100,150,0.05)",T.fill()),T.beginPath(),T.arc(qt,Pt,j[ut.name]||3,0,Math.PI*2),T.fillStyle=Tt[ut.name]||"#888",T.fill(),T.strokeStyle="rgba(244,245,242,0.3)",T.lineWidth=.5,T.stroke(),T.font="9px monospace",T.fillStyle="#F4F5F2",T.fillText(ut.name.toUpperCase(),qt+j[ut.name]+6,Pt+3)}const At=this.system.bodyByName("sun");for(const ut of this.system.bodies){if(ut.name==="sun"||ut.mass<=0||!At||ut.name===At.name)continue;const qt=(ut.position[0]-At.position[0])*Dt,Pt=(ut.position[2]-At.position[2])*Dt,ge=Math.sqrt(qt*qt+Pt*Pt);if(ge<1)continue;const Ke=ge*Math.pow(ut.mass/At.mass,.4),$t=$+(ut.position[0]-this.state.position[0])*it,Fe=Y-(ut.position[2]-this.state.position[2])*it;T.beginPath(),T.arc($t,Fe,Ke*it,0,Math.PI*2),T.setLineDash([4,4]),T.strokeStyle=(Tt[ut.name]||"#888")+"44",T.lineWidth=.8,T.stroke(),T.setLineDash([])}const Ct=80,yt=3,H=E-Ct-15,ot=v-30,lt=ft*2/Math.min(E,v)*vt*Ct,Z=Math.pow(10,Math.floor(Math.log10(lt))),P=Ct*(Z/lt);T.fillStyle="rgba(244,245,242,0.4)",T.fillRect(H,ot,P,yt),T.strokeStyle="rgba(244,245,242,0.5)",T.lineWidth=.5,T.strokeRect(H,ot,P,yt),T.fillStyle="rgba(244,245,242,0.4)",T.font="8px monospace",T.fillText(`${Z>=1e3?(Z/1e3).toFixed(0)+"Mkm":Z.toFixed(0)+"km"}`,H,ot-2);const st=30,rt=v-35,Mt=12;T.strokeStyle="rgba(244,245,242,0.25)",T.lineWidth=1,T.beginPath(),T.arc(st,rt,Mt,0,Math.PI*2),T.stroke(),T.beginPath(),T.moveTo(st,rt-Mt-5),T.lineTo(st,rt+Mt+5),T.moveTo(st-Mt-5,rt),T.lineTo(st+Mt+5,rt),T.stroke(),T.fillStyle="rgba(244,245,242,0.4)",T.font="bold 8px monospace",T.fillText("N",st-3,rt-Mt-7),T.fillStyle="rgba(244,245,242,0.2)",T.fillText("S",st-3,rt+Mt+12),T.fillText("W",st-Mt-12,rt+3),T.fillText("E",st+Mt+7,rt+3);const gt=$,wt=Y,zt=this.state.velocity[0]||0,re=this.state.velocity[2]||0,Kt=Math.sqrt(zt*zt+re*re),Xt=Kt>.1?Math.atan2(re,zt):0;if(T.save(),T.translate(gt,wt),T.rotate(-Xt),T.beginPath(),T.moveTo(8,0),T.lineTo(0,-4),T.lineTo(-5,0),T.lineTo(0,4),T.closePath(),T.fillStyle="#EACD9E",T.fill(),T.strokeStyle="#EACD9E",T.lineWidth=1.5,T.stroke(),T.restore(),Kt>.1){const ut=Math.min(30,10+Kt*it*2);T.beginPath(),T.moveTo(gt,wt),T.lineTo(gt+Math.cos(Xt)*ut,wt-Math.sin(Xt)*ut),T.strokeStyle="rgba(234,205,158,0.6)",T.lineWidth=1.5,T.stroke(),T.beginPath(),T.moveTo(gt+Math.cos(Xt)*ut,wt-Math.sin(Xt)*ut),T.lineTo(gt+Math.cos(Xt+.4)*(ut-5),wt-Math.sin(Xt+.4)*(ut-5)),T.lineTo(gt+Math.cos(Xt-.4)*(ut-5),wt-Math.sin(Xt-.4)*(ut-5)),T.closePath(),T.fillStyle="rgba(234,205,158,0.6)",T.fill()}const le=on(this.state.position,this.system),we=[(this.state.position[0]-le.position[0])*Dt,(this.state.position[1]-le.position[1])*Dt,(this.state.position[2]-le.position[2])*Dt],An=this.system.bodyByName("sun");if(An){const ut=(An.position[0]-this.state.position[0])*it,qt=(An.position[2]-this.state.position[2])*it,Pt=Math.sqrt(ut*ut+qt*qt);Pt>1&&(T.beginPath(),T.moveTo(gt+ut/Pt*12,wt-qt/Pt*12),T.lineTo(gt+ut/Pt*Math.min(Pt,60),wt-qt/Pt*Math.min(Pt,60)),T.strokeStyle="rgba(255,220,68,0.15)",T.lineWidth=2,T.setLineDash([3,6]),T.stroke(),T.setLineDash([]),T.beginPath(),T.arc(gt+ut/Pt*Math.min(Pt,60),wt-qt/Pt*Math.min(Pt,60),3,0,Math.PI*2),T.fillStyle="rgba(255,220,68,0.3)",T.fill())}const Ht=Js(we,this.state.velocity,le.mass,5e14,360);if(Ht.points.length>1){T.beginPath(),T.strokeStyle=Ht.bound?"rgba(68,136,204,0.15)":"rgba(221,170,68,0.15)",T.lineWidth=8;const ut=$+Ht.points[0][0]*it,qt=Y-Ht.points[0][1]*it;T.moveTo(ut,qt);for(let $t=1;$t<Ht.points.length;$t++){const Fe=$+Ht.points[$t][0]*it,We=Y-Ht.points[$t][1]*it;T.lineTo(Fe,We)}T.stroke();const Pt=T.createLinearGradient(ut,qt,$+Ht.points[Ht.points.length-1][0]*it,Y-Ht.points[Ht.points.length-1][1]*it),ge=Ht.bound?"rgba(68,136,204,0.9)":"rgba(221,170,68,0.9)",Ke=Ht.bound?"rgba(68,136,204,0.2)":"rgba(221,170,68,0.2)";Pt.addColorStop(0,ge),Pt.addColorStop(1,Ke),T.beginPath(),T.strokeStyle=Pt,T.lineWidth=2.5,T.moveTo(ut,qt);for(let $t=1;$t<Ht.points.length;$t++){const Fe=$+Ht.points[$t][0]*it,We=Y-Ht.points[$t][1]*it;T.lineTo(Fe,We)}if(T.stroke(),Ht.points.length>4){const $t=Ht.points[Ht.points.length-1],Fe=Ht.points[Ht.points.length-2],We=$t[0]-Fe[0],w=$t[1]-Fe[1],F=Math.sqrt(We*We+w*w)||1,B=$+$t[0]*it,W=Y-$t[1]*it,O=8;T.beginPath(),T.moveTo(B,W),T.lineTo(B-We/F*O+w/F*O*.4,W+w/F*O+We/F*O*.4),T.lineTo(B-We/F*O-w/F*O*.4,W+w/F*O-We/F*O*.4),T.closePath(),T.fillStyle=Ht.bound?"rgba(68,136,204,0.6)":"rgba(221,170,68,0.6)",T.fill()}if(Ht.bound&&isFinite(Ht.apoapsis)&&isFinite(Ht.periapsis)){const $t=$+Ht.apoapsis*it,Fe=$+Ht.periapsis*it;T.beginPath(),T.arc($t,Y,4,0,Math.PI*2),T.fillStyle="#FF8844",T.fill(),T.font="bold 9px monospace",T.fillStyle="#FF8844",T.fillText("Ap",$t+6,Y+3),T.beginPath(),T.arc(Fe,Y,4,0,Math.PI*2),T.fillStyle="#44DD88",T.fill(),T.fillStyle="#44DD88",T.fillText("Pe",Fe+6,Y+3)}if(Ht.points.length>2){const $t=Ht.points[Ht.points.length-1],Fe=$+$t[0]*it,We=Y-$t[1]*it,w=le.position[0]*Dt+$t[0],F=le.position[2]*Dt+$t[1];let B="",W=20;for(const O of this.system.bodies){if(O.name===le.name||O.mass<=0)continue;const _t=Math.sqrt((w-O.position[0]*Dt)**2+(F-O.position[2]*Dt)**2);_t<W&&(W=_t,B=O.name)}B&&(T.font="bold 10px monospace",T.fillStyle="#EACD9E",T.fillText("→ "+B.toUpperCase(),Fe+8,We-4))}if(Ht.points.length>2){const $t=Ht.points[Ht.points.length-1],Fe=le.position[0]*Dt+$t[0],We=le.position[2]*Dt+$t[1];let w="",F=30;for(const B of this.system.bodies){if(B.name===le.name||B.mass<=0)continue;const W=B.position[0]*Dt,O=B.position[2]*Dt,_t=Math.sqrt((Fe-W)**2+(We-O)**2);_t<F&&(F=_t,w=B.name)}if(w){const B=$+$t[0]*it,W=Y-$t[1]*it;T.font="bold 10px monospace",T.fillStyle="#EACD9E",T.fillText("→ "+w.toUpperCase(),B+10,W-5)}}}T.fillStyle="rgba(244,245,242,0.3)",T.font="9px sans-serif",T.fillText(`${(ft/1e3).toFixed(0)} km | Zoom: ${vt.toFixed(1)}x`,10,v-10),requestAnimationFrame(Ee)};window.addEventListener("keydown",G=>{(G.key==="m"||G.key==="Tab")&&(pt=!pt,Rt.style.display=pt?"block":"none",pt&&requestAnimationFrame(Ee),G.preventDefault())}),window.addEventListener("keydown",G=>{if(G.key==="q"||G.key==="["){if(this.paused)return;this.warpIndex=Math.max(0,this.warpIndex-1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),G.preventDefault()}else if(G.key==="e"||G.key==="]"){if(this.paused)return;this.warpIndex=Math.min(this.warpLevels.length-1,this.warpIndex+1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),G.preventDefault()}else if(G.key==="p"){if(i.assembly.roots.some(v=>v.part.kind==="parachute")||i.assembly.roots.some(v=>v.children.some(T=>T.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const v={radius:.6*kt,height:1*kt};this.deployedChuteMesh=Ya(v),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);Oe.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}G.preventDefault()}else G.key==="g"?(this.toggleGear(),G.preventDefault()):G.key==="f"?(this.chase.reset(),Oe.show("Camera view reset"),G.preventDefault()):G.key==="c"&&!G.ctrlKey&&!G.metaKey?(this.cameraMode=this.cameraMode==="chase"?"free":"chase",this.hud.setFreeCamera(this.cameraMode==="free"),Oe.show(this.cameraMode==="free"?"Free camera":"Chase camera"),G.preventDefault()):G.key==="F1"&&(G.preventDefault(),this.hudVisible=!this.hudVisible,this.hud.setVisible(this.hudVisible),Oe.show(this.hudVisible?"HUD shown":"HUD hidden"));this.cameraMode==="free"&&(G.key==="ArrowUp"&&(this.freeCamKeys.up=!0,G.preventDefault()),G.key==="ArrowDown"&&(this.freeCamKeys.down=!0,G.preventDefault()),G.key==="ArrowLeft"&&(this.freeCamKeys.left=!0,G.preventDefault()),G.key==="ArrowRight"&&(this.freeCamKeys.right=!0,G.preventDefault()))}),window.addEventListener("keyup",G=>{G.key==="ArrowUp"&&(this.freeCamKeys.up=!1),G.key==="ArrowDown"&&(this.freeCamKeys.down=!1),G.key==="ArrowLeft"&&(this.freeCamKeys.left=!1),G.key==="ArrowRight"&&(this.freeCamKeys.right=!1)});const It=this.renderer.domElement,Ot=(G,E)=>{this.cameraMode==="free"&&(this.freeCamDragging=!0,this.freeCamPrevMouse={x:G,y:E})},Et=(G,E)=>{if(!this.freeCamDragging||this.cameraMode!=="free")return;const v=G-this.freeCamPrevMouse.x,T=E-this.freeCamPrevMouse.y;this.freeCamAzimuth-=v*.005,this.freeCamPolar=Math.max(.05,Math.min(Math.PI-.05,this.freeCamPolar+T*.005)),this.freeCamPrevMouse={x:G,y:E}},de=()=>{this.freeCamDragging=!1};It.addEventListener("mousedown",G=>Ot(G.clientX,G.clientY)),window.addEventListener("mousemove",G=>Et(G.clientX,G.clientY)),window.addEventListener("mouseup",de),It.addEventListener("touchstart",G=>{G.touches.length===1&&G.touches[0]&&Ot(G.touches[0].clientX,G.touches[0].clientY)},{passive:!0}),It.addEventListener("touchmove",G=>{G.touches.length===1&&G.touches[0]&&Et(G.touches[0].clientX,G.touches[0].clientY)},{passive:!0}),It.addEventListener("touchend",de),It.addEventListener("wheel",G=>{this.cameraMode==="free"&&(G.preventDefault(),this.freeCamDist*=G.deltaY>0?1.1:.9,this.freeCamDist=Math.max(.5,Math.min(500,this.freeCamDist)))},{passive:!1}),this.achievements.unlock("first_launch"),Oe.show("You are at the launchpad. W/S throttle, ↑↓ pitch, ←→ yaw, C camera, T SAS, Esc pause.")}sanitize(t){isFinite(t[0])||(t[0]=0),isFinite(t[1])||(t[1]=0),isFinite(t[2])||(t[2]=0)}countStages(t){let e=0;for(const n of t)n.part.kind==="decoupler"&&e++,e+=this.countStages(n.children);return e}computeStageData(){const t=this.rocket.assembly.roots;if(t.length===0)return[];const e=[];for(let r=0;r<t.length;r++)t[r].part.kind==="decoupler"&&e.push(r);const n=[];let i=0;for(let r=0;r<=e.length;r++){const a=r<e.length?e[r]:t.length,l=[];for(let c=i;c<a;c++)l.push(t[c]);if(l.length>0){const c=this.isChunkSpent(l);n.push({parts:l,active:!c,spent:c})}i=a+1}let s=0;for(let r=0;r<n.length;r++){if(!n[r].spent){s=r;break}s=r}return n.map((r,a)=>{let l=0,c=0;for(const m of r.parts)if(l+=m.part.mass,m.part.fuelCapacity){const _=this.rocket.fuelTanks.find(g=>g.node===m);c+=_?_.remaining:m.part.fuelCapacity}const d=r.parts.filter(m=>m.part.kind==="engine").length,h=r.parts.filter(m=>m.part.fuelCapacity).length,f=d>0?`${d}E ${h}T`:r.parts.length===1?r.parts[0].part.name||"C":`${r.parts.length}P`;return{label:`S${a+1}: ${f}`,fuelMass:c,dryMass:l,active:a===s,spent:r.spent}})}isChunkSpent(t){if(!t.some(n=>n.part.kind==="engine"))return!1;for(const n of t)if(n.part.fuelCapacity){const i=this.rocket.fuelTanks.find(s=>s.node===n);if(i&&i.remaining>.01)return!1}return!0}update(t){try{this.updateInner(t)}catch(e){Oe.show(`ERROR: ${e.message||e}`),console.error("FlightScene.update error:",e)}}updateInner(t){const e=t;if(this._spawnProtectionTimer>0&&(this._spawnProtectionTimer-=1),this.controls.consumePauseToggle()&&(this.paused=!this.paused,this.hud.setPaused(this.paused),this.paused&&this.sound.stopEngine()),this.paused){this.system.propagate(0,pa);for(const H of this.system.bodies)H.syncMesh?.();return}if(this.crashed){this.system.propagate(t*this.timeWarp,pa);for(const H of this.system.bodies)H.syncMesh?.();this.updateExplosion(e);return}this.missionTime+=e,this.missionTime=Math.min(this.missionTime,99999),t*=this.timeWarp,(!isFinite(t)||t<=0)&&(t=1/60),this.controls.update(e),this.controls.getZoomIn()&&this.chase.zoom(.92),this.controls.getZoomOut()&&this.chase.zoom(1.08);const n=this.timeWarp>1;n&&(this.state.throttle=0),this.cameraMode==="free"&&(this.state.throttle=0),!n&&this.controls.getStageRequested()&&this.performStage(),!n&&!this.grounded&&this.state.throttle>0&&(!_r(this.state.rocket.assembly.roots)||this.state.rocket.totalFuelMass()<.1)&&this.state.rocket.assembly.roots.some(at=>at.part.kind==="decoupler"||at.children.some(lt=>lt.part.kind==="decoupler"))&&this.performStage();const i=()=>new L(0,1,0).applyQuaternion(this.rocketQuat),s=this.state.throttle>0,r=this.cameraMode==="free",a=n||r?0:this.controls.getPitch(),l=n||r?0:this.controls.getYaw(),c=n?0:this.controls.getRoll();if(this.angularVel.x+=a*this.ANGULAR_ACCEL*e,this.angularVel.y+=l*this.ANGULAR_ACCEL*e,this.angularVel.z+=c*this.ANGULAR_ACCEL*e,s&&!this.grounded&&(this.angularVel.x+=a*this.state.throttle*6*e,this.angularVel.y+=l*this.state.throttle*6*e),this.sasMode!=="off"&&!n){if(this.sasMode==="prograde"||this.sasMode==="retrograde"){const at=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(at>.1){let lt=new L(this.state.velocity[0]/at,this.state.velocity[1]/at,this.state.velocity[2]/at);this.sasMode==="retrograde"&&lt.negate(),this.sasTargetQuat.setFromUnitVectors(new L(0,1,0),lt)}}const H=new hn().copy(this.sasTargetQuat).invert().multiply(this.rocketQuat),ot=2*Math.acos(Math.abs(H.w));if(ot>.001){const at=new L(H.x,H.y,H.z).normalize();this.angularVel.x-=at.x*ot*3*e,this.angularVel.y-=at.y*ot*3*e,this.angularVel.z-=at.z*ot*3*e}this.angularVel.multiplyScalar(Math.exp(-5*e))}const d=Math.exp(-this.ANGULAR_DAMPING*e);this.angularVel.multiplyScalar(d);const h=new hn().setFromAxisAngle(new L(0,0,1),this.angularVel.y*e),u=new hn().setFromAxisAngle(new L(1,0,0),this.angularVel.x*e),f=new hn().setFromAxisAngle(new L(0,1,0),this.angularVel.z*e);this.rocketQuat.multiply(h).multiply(u).multiply(f),this.rocketQuat.normalize(),this.rocketGroup.quaternion.copy(this.rocketQuat);const m=i(),_=m.x,g=m.y,p=m.z;let x=!1;if(s&&this.grounded&&(!this.countdownActive&&!this.launched&&(this.countdownActive=!0,this.countdownTimer=0,this.showCountdown("3")),this.countdownActive)){if(this.countdownTimer+=e,this.countdownTimer>=1&&this.countdownTimer<2)this.showCountdown("2");else if(this.countdownTimer>=2&&this.countdownTimer<3)this.showCountdown("1");else if(this.countdownTimer>=3){this.countdownActive=!1,this.launched=!0;const H=_r(this.state.rocket.assembly.roots),ot=on(this.state.position,this.system),at=this.state.position[0]-ot.position[0],lt=this.state.position[1]-ot.position[1],Z=this.state.position[2]-ot.position[2],P=Math.sqrt(at*at+lt*lt+Z*Z)||1,st=Es*ot.mass/(P*P);if(H&&H.thrust&&st>0){const rt=H.thrust*1e3/(this.state.rocket.totalMass()*st);rt>=1?x=!0:(Oe.show(`TWR ${rt.toFixed(2)} — insufficient for liftoff!`),this.launched=!1,this.countdownTimer=0)}x&&(this.showCountdown("LIFTOFF!"),setTimeout(()=>this.hideCountdown(),1500))}}if(s&&(!this.grounded||x)&&(ey(this.state,t,[_,g,p]),this.sanitize(this.state.velocity)),s&&x&&this.grounded&&(this.grounded=!1,this.groundedDir=null,this.liftoffFrames=5,this.launched=!0,this.achievements.unlock("reach_space"),this.sound.startEngine()),s){this.sound.setThrottle(this.state.throttle),this.engineFlame.setThrottle(this.state.throttle),this.engineFlame.start();const H=on(this.state.position,this.system),ot=this.state.position[0]-H.position[0],at=this.state.position[1]-H.position[1],lt=this.state.position[2]-H.position[2],Z=Math.sqrt(ot*ot+at*at+lt*lt)||1,P=H.getSurfaceRadiusAt?.(this.state.position)??H.radius??6371e3;this.engineFlame.setVacuum(Z-P>5e4)}else this.sound.setThrottle(0),this.engineFlame.stop();this.engineFlame.update(e),this.exhaustLight&&(this.exhaustLight.intensity=this.state.throttle*3,this.exhaustLight.color.setHSL(.08-this.state.throttle*.05,1,.5+this.state.throttle*.3)),s&&this.grounded?this.groundSmoke.start():this.groundSmoke.stop(),this.groundSmoke.update(e),this.grounded&&n||(this.state.position[0]+=this.state.velocity[0]*t,this.state.position[1]+=this.state.velocity[1]*t,this.state.position[2]+=this.state.velocity[2]*t);let y=null,b=1/0;const C=on(this.state.position,this.system),R=C.name;this.lastRefBody&&this.lastRefBody!==R&&Oe.show(`Entering ${R.toUpperCase()} SOI`),this.lastRefBody=R;const S=C.position[0]-this.state.position[0],N=C.position[1]-this.state.position[1],M=C.position[2]-this.state.position[2];b=Math.sqrt(S*S+N*N+M*M),y=C;const A=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(!this.grounded&&y&&y.radius){const H=b-y.radius;if(H>0&&H<12e4&&A>2e3){const ot=Math.max(0,1-H/12e4)*Math.min(1,A/8e3);if(this.reentryGlow){this.reentryGlow.material.color.setHSL(.05,1,.7*ot),this.reentryGlow.material.opacity=.4*ot,this.reentryGlow.scale.setScalar(1+ot*2);const at=this.rocketGroup.getObjectByName("reentry-outer");at&&(at.material.color.setHSL(.03,1,.4*ot),at.material.opacity=.2*ot,at.scale.setScalar(1+ot*4))}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const ot=this.rocketGroup.getObjectByName("reentry-outer");ot&&(ot.material.opacity=0)}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const H=this.rocketGroup.getObjectByName("reentry-outer");H&&(H.material.opacity=0)}if(this.liftoffFrames>0&&this.liftoffFrames--,this.grounded)this.state.velocity=[0,0,0];else{const H=S,ot=N,at=M,lt=b,Z=lt*lt;if(lt>1&&Z>0){const wt=Es*C.mass/Z;this.state.velocity[0]+=wt*H/lt*e,this.state.velocity[1]+=wt*ot/lt*e,this.state.velocity[2]+=wt*at/lt*e}this.sanitize(this.state.velocity);const P=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),st=this.state.rocket.totalMass();let rt=st*.001+.2;if(this.parachuteDeployed?rt=50:this.gearDeployed&&(rt*=2.5),y&&y.radius&&P>.05&&P<1e6){const wt=b-y.radius;if(wt>0&&wt<3e5){const zt=1.225*Math.exp(-wt/8500),le=.5*zt*P*P*rt/st*e;if(le>=P)this.state.velocity[0]=0,this.state.velocity[1]=0,this.state.velocity[2]=0;else{const Ht=1-le/P;this.state.velocity[0]*=Ht,this.state.velocity[1]*=Ht,this.state.velocity[2]*=Ht}this.sanitize(this.state.velocity);const we=Math.max(0,P/2e3*(zt/1.225)-.1);if(we>.05&&this.reentryGlowMesh){this.reentryGlowMesh.visible=!0,this.reentryGlowMesh.scale.setScalar(1+we*2),this.reentryGlowMesh.material.opacity=Math.min(1,we);const Ht=we>.8?16777215:we>.5?16763972:16746564;this.reentryGlowMesh.material.color.setHex(Ht)}else this.reentryGlowMesh&&(this.reentryGlowMesh.visible=!1);if(this.lastReentryIntensity=we,we>.1)this.rocketGroup.traverse(Ht=>{const ut=Ht;if(!ut.isMesh)return;const qt=ut.material;if(!qt||!qt.emissive)return;const Pt=Math.min(1,this.heatEnergy/3e5),ge=Pt*.9,Ke=Pt*Pt*.5,$t=Pt*Pt*Pt*.15;qt.emissive.setRGB(ge,Ke,$t),qt.emissiveIntensity=Pt*1.5});else if(this.heatEnergy>0){const Ht=Math.min(1,this.heatEnergy/3e5);this.rocketGroup.traverse(ut=>{const qt=ut;if(!qt.isMesh)return;const Pt=qt.material;!Pt||!Pt.emissive||(Pt.emissive.setRGB(Ht*.4,0,0),Pt.emissiveIntensity=Ht*.5)})}else this.heatEnergy<1&&this.rocketGroup.traverse(Ht=>{const ut=Ht;if(!ut.isMesh)return;const qt=ut.material;!qt||!qt.emissive||qt.emissiveIntensity>0&&(qt.emissive.setRGB(0,0,0),qt.emissiveIntensity=0)});const An=.5*zt*P*P*P*5e-6;this.heatEnergy+=An*e}}this.reentryGlowMesh&&(y&&y.radius&&b-y.radius<3e5||(this.reentryGlowMesh.visible=!1)),this.grounded||(this.heatEnergy>0&&(this.heatEnergy*=this.HEAT_RADIATION_RATE,this.heatEnergy<1&&(this.heatEnergy=0)),this.heatEnergy>this.MAX_HEAT&&(this.crashed=!0,Oe.show(`OVERHEATED! Ship disintegrated at ${this.heatEnergy.toFixed(0)}J`)));const Mt=y?y.radius??0:0,gt=y?y.getSurfaceRadiusAt?.(this.state.position)??Mt:0;if(y&&Mt>0&&isFinite(b)&&this._spawnProtectionTimer<=0){const wt=this.state.position[0]-y.position[0],zt=this.state.position[1]-y.position[1],re=this.state.position[2]-y.position[2],Kt=Math.sqrt(wt*wt+zt*zt+re*re),Xt=(this.state.velocity[0]*wt+this.state.velocity[1]*zt+this.state.velocity[2]*re)/Kt;if(Kt<gt-1)this.doCrash(`Impact on ${y.name}`,y,wt,zt,re,Kt,gt);else if(Kt<gt+60&&Kt>.001&&this.liftoffFrames<=0){const le=new L(wt/Kt,zt/Kt,re/Kt),we=new L(0,1,0).applyQuaternion(this.rocketQuat),An=Math.acos(Math.min(1,Math.abs(we.dot(le))))*180/Math.PI,Ht=this.hasLandingLegs(),ut=this.parachuteDeployed?50:5e3,qt=Ht?30:20;if(isFinite(Xt)&&Math.abs(Xt)>ut)this.doCrash(`Too fast! (${Math.abs(Xt).toFixed(0)} m/s) on ${y.name}`,y,wt,zt,re,Kt,gt);else if(An>qt)this.doCrash(`Tipped over! (${An.toFixed(0)}°) on ${y.name}`,y,wt,zt,re,Kt,gt);else if(isFinite(Xt)&&Xt<1){this.state.velocity=[0,0,0],this.grounded=!0,this.groundedDir=[wt/Kt,zt/Kt,re/Kt];const Pt=new L(wt/Kt,zt/Kt,re/Kt);if(this.rocketQuat.setFromUnitVectors(new L(0,1,0),Pt),this.state.position[0]!==y.position[0]+wt/Kt*(gt+50)||this.state.position[1]!==y.position[1]+zt/Kt*(gt+50)||this.state.position[2]!==y.position[2]+re/Kt*(gt+50)){this.state.position=[y.position[0]+wt/Kt*(gt+50),y.position[1]+zt/Kt*(gt+50),y.position[2]+re/Kt*(gt+50)],this.sound.playLand(),this.sound.stopEngine();const ge=y.name;Oe.show(`Landed on ${ge}!`),ge==="earth"?this.achievements.unlock("land_earth"):ge==="moon"?this.achievements.unlock("land_moon"):ge==="mars"?this.achievements.unlock("land_mars"):ge==="venus"?this.achievements.unlock("land_venus"):ge==="mercury"&&this.achievements.unlock("land_mercury")}}}else Kt<gt+250&&isFinite(Xt)&&Math.abs(Xt)>1e4&&this.doCrash(`High-speed impact! (${Math.abs(Xt).toFixed(0)} m/s) on ${y.name}`,y,wt,zt,re,Kt,gt)}}if(this.system.propagate(t,pa),this.grounded&&this.groundedDir){const H=on(this.state.position,this.system),ot=H.radius??6371e3,at=[H.position[0]+this.groundedDir[0],H.position[1]+this.groundedDir[1],H.position[2]+this.groundedDir[2]],Z=(H.getSurfaceRadiusAt?.(at)??ot)+50;this.state.position[0]=H.position[0]+this.groundedDir[0]*Z,this.state.position[1]=H.position[1]+this.groundedDir[1]*Z,this.state.position[2]=H.position[2]+this.groundedDir[2]*Z}if(this.grounded){const H=on(this.state.position,this.system),ot=this.state.position[0]-H.position[0],at=this.state.position[1]-H.position[1],lt=this.state.position[2]-H.position[2],Z=Math.sqrt(ot*ot+at*at+lt*lt),P=H.radius??6371e3;Z>P*1.1&&(this.state.velocity=[0,0,0],this.state.position[0]=H.position[0]+ot/Z*(P+50),this.state.position[1]=H.position[1]+at/Z*(P+50),this.state.position[2]=H.position[2]+lt/Z*(P+50))}for(const H of this.system.bodies)H.syncMesh?.();const U=this.system.bodyByName("sun");if(U&&U.mesh){const H=U.mesh.position;for(const ot of this.system.bodies){const at=ot;at.atmosphereGlow&&at.mesh&&at.atmosphereGlow.setSunDirection(H,at.mesh.position)}}const D=this.system.bodyByName("earth");if(D&&"updateClouds"in D){const H=this.system.bodyByName("sun"),ot=H?H.position:void 0;D.updateClouds(e,ot)}if(this.debris.length>0){const H=on(this.state.position,this.system);for(let ot=this.debris.length-1;ot>=0;ot--){const at=this.debris[ot];if(at.life-=e,at.life<=0||at.body.mass<=0){this.sceneMgr.scene.remove(at.mesh),this.debris.splice(ot,1);continue}const lt=vu(at.body,this.system.bodies);at.body.applyForce(lt,e),at.mesh.position.set(at.body.position[0]*Dt,at.body.position[1]*Dt,at.body.position[2]*Dt);const Z=at.body.position[0]-H.position[0],P=at.body.position[1]-H.position[1],st=at.body.position[2]-H.position[2],rt=Math.sqrt(Z*Z+P*P+st*st),Mt=H.getSurfaceRadiusAt?.(at.body.position)??H.radius??6371e3;rt<Mt&&(this.sceneMgr.scene.remove(at.mesh),this.debris.splice(ot,1))}}this.updateExplosion(e);const q=on(this.state.position,this.system),I=this.state.position[0]-q.position[0],k=this.state.position[1]-q.position[1],V=this.state.position[2]-q.position[2],Q=Math.sqrt(I*I+k*k+V*V)||1,K=new L(I/Q,k/Q,V/Q);if(this.rocketShadow&&(this.rocketShadow.visible=this.grounded&&!this.crashed,this.rocketShadow.visible&&(this.rocketShadow.position.y=this.rocketBottomY-.02)),this._debugMarker&&this._debugMarker.position.copy(this.rocketGroup.position),!this.crashed){const H=-this.rocketBottomY-50*Dt+2,ot=on(this.state.position,this.system),at=this.state.position[0]-ot.position[0],lt=this.state.position[1]-ot.position[1],Z=this.state.position[2]-ot.position[2],P=Math.sqrt(at*at+lt*lt+Z*Z)||1;if(!this._debugShown){this._debugShown=!0;const st=document.createElement("div");st.style.cssText="position:fixed;top:120px;right:16px;z-index:600;font-family:monospace;font-size:11px;color:#0f0;background:rgba(0,0,0,0.85);padding:8px;border-radius:4px;pointer-events:none;max-width:300px;",st.id="rocket-debug",st.innerHTML="v0.90<br>C=freecam F=reset T=SAS W=throttle",document.body.appendChild(st),console.log("ROCKET DEBUG:",{rocketBottomY:this.rocketBottomY,visualOffset:H,VISUAL_SCALE:Dt,ROCKET_VISUAL_SCALE:or,earthVisualR:6371e3*Dt,rocketGroupPos:this.rocketGroup.position.toArray(),statePos:this.state.position})}if(this.rocketGroup.position.set(this.state.position[0]*Dt+at/P*H,this.state.position[1]*Dt+lt/P*H,this.state.position[2]*Dt+Z/P*H),this.cameraMode==="free"){this.freeCamKeys.left&&(this.freeCamAzimuth+=3*e),this.freeCamKeys.right&&(this.freeCamAzimuth-=3*e),this.freeCamKeys.up&&(this.freeCamPolar=Math.max(.05,this.freeCamPolar-3*.7*e)),this.freeCamKeys.down&&(this.freeCamPolar=Math.min(Math.PI-.05,this.freeCamPolar+3*.7*e));const rt=new L(this.state.position[0]*Dt+at/P*H,this.state.position[1]*Dt+lt/P*H,this.state.position[2]*Dt+Z/P*H),Mt=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.cos(this.freeCamAzimuth),gt=this.freeCamDist*Math.cos(this.freeCamPolar),wt=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.sin(this.freeCamAzimuth);this.sceneMgr.camera.position.set(rt.x+Mt,rt.y+gt,rt.z+wt);const zt=Math.abs(this.freeCamPolar-Math.PI/2)>Math.PI/2-.15?new L(0,0,Math.sin(this.freeCamPolar)>0?1:-1):new L(0,1,0);this.sceneMgr.camera.up.copy(zt),this.sceneMgr.camera.lookAt(rt)}else{const st={x:at/P*H,y:lt/P*H,z:Z/P*H};this.chase.follow(this.state,e,K,n||!this._camSnapped,st),this._camSnapped||(this._camSnapped=!0)}this.deployedChuteMesh&&(this.deployedChuteMesh.position.set(this.state.position[0]*Dt,this.state.position[1]*Dt+.02,this.state.position[2]*Dt),this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation))}const J=y&&y.radius?b-y.radius:0;this.countStages(this.rocket.assembly.roots);const et=this.computeStageData();this.stageInfo=et;const ct=on(this.state.position,this.system);if(ct&&ct.mass>0){const H=[(this.state.position[0]-ct.position[0])*Dt,(this.state.position[1]-ct.position[1])*Dt,(this.state.position[2]-ct.position[2])*Dt];Js(H,this.state.velocity,ct.mass,5e14,360)}if(this.impactMarker){const H=on(this.state.position,this.system),ot=[this.state.position[0]-H.position[0],this.state.position[1]-H.position[1],this.state.position[2]-H.position[2]],at=Js(ot,this.state.velocity,H.mass,5e14,360);if(at.points.length>10&&!at.bound){const lt=at.points[at.points.length-1],Z=H.getSurfaceRadiusAt?.([lt[0],0,lt[1]])??H.radius??6371e3;H.position[0]+lt[0],H.position[2]+lt[1];const P=Math.sqrt(lt[0]*lt[0]+lt[1]*lt[1]);if(P>Z*.5){const st=H.position[0]+lt[0]/P*Z,rt=H.position[2]+lt[1]/P*Z;this.impactMarker.position.set(st*Dt,0,rt*Dt),this.impactMarker.visible=!0}else this.impactMarker.visible=!1}else this.impactMarker.visible=!1}this.stageInfo.filter(H=>H.active).length>0&&this.stageInfo.findIndex(H=>H.active)+1,this.hud.update(this.state,this.system,this.heatEnergy,this.state.throttle);const ht=on(this.state.position,this.system),X=[(this.state.position[0]-ht.position[0])*Dt,(this.state.position[1]-ht.position[1])*Dt,(this.state.position[2]-ht.position[2])*Dt],tt=Js(X,this.state.velocity,ht.mass,5e14,90);if(tt.points.length>5){if(!this.orbitLine){const ot=new Ue,at=new Float32Array(tt.points.length*3);ot.setAttribute("position",new Ce(at,3));const lt=new Sr({color:tt.bound?4491468:14527044,transparent:!0,opacity:.3,depthWrite:!1});this.orbitLine=new Tr(ot,lt),this.sceneMgr.scene.add(this.orbitLine)}const H=this.orbitLine.geometry.attributes.position;for(let ot=0;ot<tt.points.length;ot++)H.array[ot*3]=ht.position[0]*Dt+tt.points[ot][0],H.array[ot*3+1]=this.state.position[1]*Dt,H.array[ot*3+2]=ht.position[2]*Dt+tt.points[ot][1];H.needsUpdate=!0,this.orbitLine.geometry.setDrawRange(0,tt.points.length),this.orbitLine.material.color.set(tt.bound?4491468:14527044),this.orbitLine.visible=!0}else this.orbitLine&&(this.orbitLine.visible=!1);J>this.maxAlt&&(this.maxAlt=J),A>this.maxSpeed&&(this.maxSpeed=A);const pt=[100,500,1e3,5e3,1e4,5e4,1e5,5e5,1e6];for(const H of pt)if(J>=H&&this.lastAltMilestone<H){this.lastAltMilestone=H,Oe.show(`Altitude: ${H>=1e3?H/1e3+"km":H+"m"}`);break}const St=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2)/340;this.hud.setMass(this.state.rocket.totalMass()),this.prevMach=St;const Nt=on(this.state.position,this.system);if(Nt&&Nt.mass>0){const H=this.state.position[0]-Nt.position[0],ot=this.state.position[1]-Nt.position[1],at=this.state.position[2]-Nt.position[2],lt=Math.sqrt(H*H+ot*ot+at*at)||1;Es*Nt.mass/(lt*lt)}this.prevVel=[this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]];const Lt=this.state.velocity[0]-this.prevVel[0],Rt=this.state.velocity[1]-this.prevVel[1],Ft=this.state.velocity[2]-this.prevVel[2],z=Math.sqrt(Lt*Lt+Rt*Rt+Ft*Ft),Ee=e>0?z/(e*9.80665):1;if(Ee>2.5?this.screenShake=Math.min(1,(Ee-2.5)/5):this.screenShake*=Math.exp(-3*e),this.screenShake>.01){const H=(Math.random()-.5)*this.screenShake*.01,ot=(Math.random()-.5)*this.screenShake*.01;this.rocketGroup.position.x+=H,this.rocketGroup.position.z+=ot}this.sceneMgr.camera.updateProjectionMatrix();const Ot=Math.min(1,Math.max(0,(J??0)/1e5)),Et=.45*(1-Ot)+.01*Ot,de=.65*(1-Ot)+.01*Ot,G=.95*(1-Ot)+.02*Ot;this.sceneMgr.scene.background=new bt(Et,de,G);const E=new L(0,1,0).applyQuaternion(this.rocketQuat),v=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),T=v>.01?[this.state.velocity[0]/v,this.state.velocity[1]/v,this.state.velocity[2]/v]:[0,1,0],$=on(this.state.position,this.system),Y=this.state.position[0]-$.position[0],nt=this.state.position[1]-$.position[1],xt=this.state.position[2]-$.position[2],ft=Math.sqrt(Y*Y+nt*nt+xt*xt)||1,it=this.state.velocity[0],Tt=this.state.velocity[1],Vt=this.state.velocity[2],j=nt*Vt-xt*Tt,Gt=xt*it-Y*Vt,Bt=Y*Tt-nt*it,At=Math.sqrt(j*j+Gt*Gt+Bt*Bt)||1,Ct=[],yt={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",pluto:"#ddccbb"};for(const H of this.system.bodies){if(H.mass<=0)continue;const ot=H.position[0]-this.state.position[0],at=H.position[1]-this.state.position[1],lt=H.position[2]-this.state.position[2],Z=Math.sqrt(ot*ot+at*at+lt*lt)||1;Ct.push({name:H.name,dir:[ot/Z,at/Z,lt/Z],color:yt[H.name]||"#888"})}this.hud.setNavballData([E.x,E.y,E.z],T,[Y/ft,nt/ft,xt/ft],[j/At,Gt/At,Bt/At],Ct)}performStage(){const t=this.findLowestDecoupler(this.rocket.assembly.roots);if(!t){Oe.show("No decouplers to stage.");return}this.sound.playStaging();const e=this.rocketGroup.getObjectByName(t.part.id);if(e){const n=[],i=[];for(let c=0;c<16;c++){const d=.02+Math.random()*.04,h=new ue(d,4,3),u=new Me({color:c<4?16746564:11184810,transparent:!0,opacity:.9,blending:cn,depthWrite:!1}),f=new dt(h,u),m=c/16*Math.PI*2+Math.random()*.3,_=(Math.random()-.5)*.8;f.position.copy(this.rocketGroup.position),f.position.x+=Math.cos(m)*.15,f.position.y+=_*.1,f.position.z+=Math.sin(m)*.15,this.sceneMgr.scene.add(f),f._life=.6+Math.random()*.4,f._age=0,f._vx=Math.cos(m)*(.8+Math.random()*1.5),f._vy=_*.5,f._vz=Math.sin(m)*(.8+Math.random()*1.5),this.explosionMeshes.push(f)}for(;e.children.length>0;){const c=e.children[0],d=new L;c.getWorldPosition(d),n.push(d),i.push(c),c.removeFromParent()}const s=on(this.state.position,this.system),r=[...this.state.position],a=[s.position[0]-r[0],s.position[1]-r[1],s.position[2]-r[2]],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])||1;for(let c=0;c<i.length;c++){const d=i[c],h=new an;h.add(d),d.position.set(0,0,0);const u=this.sceneMgr.scene;h.position.copy(n[c]),h.position.x+=(Math.random()-.5)*.5,h.position.y+=(Math.random()-.5)*.5,h.position.z+=(Math.random()-.5)*.5,h.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),u.add(h);const f=1+Math.random()*2,m=[this.state.velocity[0]-a[0]/l*f+(Math.random()-.5)*.5,this.state.velocity[1]-a[1]/l*f+(Math.random()-.5)*.5,this.state.velocity[2]-a[2]/l*f+(Math.random()-.5)*.5],_=new hl("debris",100,r,m);this.debris.push({mesh:h,body:_,life:60})}}this.rocket.removeStage(t),this.achievements.unlock("stage_separate"),Oe.show("Stage separated!")}findLowestDecoupler(t){let e=null;const n=i=>{for(const s of i)s.part.kind==="decoupler"&&(e=s),n(s.children)};return n(t),e}toggleParachute(){if(this.rocket.assembly.roots.some(e=>e.part.kind==="parachute")||this.rocket.assembly.roots.some(e=>e.children.some(n=>n.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const e={radius:.6*kt,height:1*kt};this.deployedChuteMesh=Ya(e),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);Oe.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}}toggleGear(){this.gearDeployed=!this.gearDeployed;for(const t of this.gearMeshes)t.visible=this.gearDeployed;Oe.show(this.gearDeployed?"Landing gear deployed":"Landing gear retracted")}doCrash(t,e,n,i,s,r,a){this.crashed||this._spawnProtectionTimer>0||(this.crashed=!0,this.achievements.unlock("crash"),this.sound.playCrash(),this.sound.stopEngine(),Oe.show(`CRASH! ${t}`),this.rocketGroup.visible=!1,this.engineFlame.stop(),this.screenShake=3,this.state.position=[e.position[0]+n/r*(a+50),e.position[1]+i/r*(a+50),e.position[2]+s/r*(a+50)],this.state.velocity=[0,0,0],this.state.throttle=0,this.spawnExplosion(this.state.position[0]*Dt,this.state.position[1]*Dt,this.state.position[2]*Dt),this.showCrashOverlay(t))}showCrashOverlay(t){const e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999;pointer-events:none;opacity:0;transition:opacity 0.1s;",document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1"}),setTimeout(()=>{e.style.opacity="0"},100),setTimeout(()=>e.remove(),500);const n=document.createElement("div");n.style.cssText=`
      position:fixed;top:0;left:0;width:100%;height:100%;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(0,0,0,0.7);z-index:1000;
      font-family:system-ui,sans-serif;color:#fff;
    `,n.innerHTML=`
      <div style="font-size:48px;font-weight:bold;color:#ff4444;margin-bottom:8px;">CRASH!</div>
      <div style="font-size:16px;color:#ccc;margin-bottom:32px;">${t}</div>
      <div style="display:flex;gap:16px;">
        <button id="crash-menu" style="padding:12px 32px;font-size:18px;border:1px solid #555;border-radius:6px;background:#222;color:#fff;cursor:pointer;">MENU</button>
        <button id="crash-restart" style="padding:12px 32px;font-size:18px;border:none;border-radius:6px;background:#4488ff;color:#fff;cursor:pointer;">LAUNCH AGAIN</button>
      </div>
    `,document.body.appendChild(n),this.crashOverlay=n,n.querySelector("#crash-menu").addEventListener("click",()=>{this.onCrashAction?.("menu")}),n.querySelector("#crash-restart").addEventListener("click",()=>{this.onCrashAction?.("restart")})}updateExplosion(t){if(this.explosionMeshes.length>0)for(let e=this.explosionMeshes.length-1;e>=0;e--){const n=this.explosionMeshes[e],i=n._age+t;n._age=i;const s=n._life,r=i/s;if(r>=1){this.sceneMgr.scene.remove(n),n.geometry.dispose(),n.material.dispose(),this.explosionMeshes.splice(e,1);continue}const a=n._shockRing,l=a?1+r*60:1+r*6;n.scale.setScalar(l);const c=s<1?2:1;n.material.opacity=a?Math.max(0,.85*(1-r*1.5)):Math.max(0,.9*(1-r*c)),n.position.x+=n._vx*t,n.position.y+=n._vy*t,n.position.z+=n._vz*t}}explosionMeshes=[];spawnExplosion(t,e,n){const i=[16746496,16729088,16720384,16737792,13386752,16755200],s=new dt(new ue(.8,12,8),new Me({color:16755200,transparent:!0,opacity:1,blending:cn,depthWrite:!1}));s.position.set(t,e,n),s._life=.8,s._age=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s);for(let r=0;r<8;r++){const a=1+Math.random()*1.5,l=new ue(a,8,6),c=new Me({color:i[r%i.length],transparent:!0,opacity:.9,blending:cn,depthWrite:!1}),d=new dt(l,c),h=r/8*Math.PI*2,u=Math.random()*Math.PI,f=.3;d.position.set(t+Math.sin(h)*Math.cos(u)*f,e+Math.sin(u)*f,n+Math.cos(h)*Math.cos(u)*f),d._life=1.5+Math.random()*.5,d._age=0,d._vx=Math.sin(h)*Math.cos(u)*(1+Math.random()*3),d._vy=Math.sin(u)*(1+Math.random()*3),d._vz=Math.cos(h)*Math.cos(u)*(1+Math.random()*3),this.sceneMgr.scene.add(d),this.explosionMeshes.push(d)}for(let r=0;r<4;r++){const a=1.5+Math.random()*2,l=new Me({color:4473924,transparent:!0,opacity:.4,blending:_i,depthWrite:!1}),c=new dt(new ue(a,6,6),l),d=r/4*Math.PI*2+Math.random()*.5;c.position.set(t+Math.cos(d)*.5,e+(Math.random()-.5)*.3,n+Math.sin(d)*.5),c._life=2+Math.random()*.5,c._age=0,c._vx=Math.cos(d)*(.5+Math.random()*1.5),c._vy=(Math.random()-.5)*1,c._vz=Math.sin(d)*(.5+Math.random()*1.5),this.sceneMgr.scene.add(c),this.explosionMeshes.push(c)}}spawnShockRing(t=16777215){const e=new L;this.rocketGroup.getWorldPosition(e),e.x*Dt,e.y*Dt,e.z*Dt;const n=new Un(.1,.2,64),i=new Me({color:t,transparent:!0,opacity:.85,side:Ie,blending:cn,depthWrite:!1}),s=new dt(n,i);s.position.set(this.rocketGroup.position.x,this.rocketGroup.position.y,this.rocketGroup.position.z),s.quaternion.copy(this.rocketQuat),s.scale.setScalar(1),s._life=1.2,s._age=0,s._shockRing=!0,s._vx=0,s._vy=0,s._vz=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s)}hasLandingLegs(){const t=e=>{for(const n of e)if(n.part.kind==="legs"||t(n.children))return!0;return!1};return t(this.rocket.assembly.roots)}positionFlameAtNozzle(){let t=1/0,e=-1/0;this.rocketGroup.traverse(i=>{if(i instanceof dt){if(this.gearMeshes.includes(i)||i===this.rocketShadow||i===this.reentryGlow||i===this.reentryGlowMesh)return;const s=new xn().setFromObject(i);s.min.y<t&&(t=s.min.y),s.max.y>e&&(e=s.max.y)}}),this.rocketBottomY=t===1/0?-.1:t;const n=t===1/0?-.1:t-.01;this.engineFlame.getMesh().position.set(0,n,0),this.engineFlame.getMesh().rotation.set(0,0,0)}dispose(){this.crashOverlay&&(this.crashOverlay.remove(),this.crashOverlay=null),this.sceneMgr.scene.remove(this.rocketGroup);for(const t of this.debris)this.sceneMgr.scene.remove(t.mesh);this.debris=[];for(const t of this.explosionMeshes)this.sceneMgr.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.explosionMeshes=[],this.controls.dispose(),this.engineFlame.dispose(),this.groundSmoke.dispose(),this.hud.unmount(),this.sound.dispose()}}function cy(o,t,e){const n=o.mass,i=[...o.position],s=[...o.velocity],r=ke(t(o),1/n),a=s,c=va(o,je(i,ke(r,.5*e)),je(s,ke(a,.5*e))),d=ke(t(c),1/n),h=je(s,ke(r,.5*e)),f=va(o,je(i,ke(d,.5*e)),je(s,ke(h,.5*e))),m=ke(t(f),1/n),_=je(s,ke(d,.5*e)),p=va(o,je(i,ke(m,e)),je(s,ke(_,e))),x=ke(t(p),1/n),y=je(s,ke(m,e)),b=ke(je(je(r,ke(d,2)),je(ke(m,2),x)),e/6),C=ke(je(je(a,ke(h,2)),je(ke(_,2),y)),e/6);o.position=je(i,C),o.velocity=je(s,b)}function va(o,t,e){return{...o,position:t,velocity:e}}function je(o,t){return[o[0]+t[0],o[1]+t[1],o[2]+t[2]]}function ke(o,t){return[o[0]*t,o[1]*t,o[2]*t]}class hy{bodies=[];add(t){this.bodies.push(t)}bodyByName(t){return this.bodies.find(e=>e.name===t)}propagate(t,e){let n=t;for(;n>0;){const i=Math.min(e,n);this.step(i),n-=i}}step(t){for(const e of this.bodies){if(e.mass<=0)continue;const n=vu(e,this.bodies);cy(e,()=>n,t)}}}const ai=fn*pn;class zn extends hl{radius;visualRadius;mesh;constructor(t,e,n,i,s){super(t,e,n,i),this.radius=s,this.visualRadius=s*ai;const r=new ue(this.visualRadius,64,32),a=new xe({color:8421504});this.mesh=new dt(r,a),this.mesh.position.set(n[0]*ai,n[1]*ai,n[2]*ai)}getTerrainHeightVisual(t,e,n){return 0}syncMesh(){this.mesh.position.set(this.position[0]*ai,this.position[1]*ai,this.position[2]*ai)}getSurfaceRadiusAt(t){const e=t[0]-this.position[0],n=t[1]-this.position[1],i=t[2]-this.position[2],s=Math.sqrt(e*e+n*n+i*i);if(s===0)return this.radius;const r=e/s,a=n/s,l=i/s,d=this.getTerrainHeightVisual(r,a,l)/ai;return this.radius+d}}const Ma=fn*pn,dh=64,li=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},uy=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),d=a*a*(3-2*a),h=l*l*(3-2*l),u=li(n,i,s),f=li(n+1,i,s),m=li(n,i+1,s),_=li(n+1,i+1,s),g=li(n,i,s+1),p=li(n+1,i,s+1),x=li(n,i+1,s+1),y=li(n+1,i+1,s+1);return Di(Di(Di(u,f,c),Di(m,_,c),d),Di(Di(g,p,c),Di(x,y,c),d),h)},jo=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*uy(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Di=(o,t,e)=>o+(t-o)*e;class dy extends zn{getTerrainHeightVisual(t,e,n){const i=jo(t*10+500,e*10+600,n*10+700,4),s=jo(t*40+100,e*40+200,n*40+300,3),r=i*.8+s*.2,a=this.visualRadius*.03;return r>.4?((r-.4)/.6)**2*a:-(.4-r)/.4*a*.12}constructor(t,e){super("mercury",1e25*5*4*1.5*6*2*2*2/15*3,t,e,244e4);const n=this.visualRadius,s=new Ki().load(ji("/textures/mercury.jpg"),h=>{h.colorSpace=oe,h.anisotropy=4}),r=new ue(n,dh,dh),a=r.attributes.position,l=new L,c=n*.03;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,m=l.z/n,_=jo(u*10+500,f*10+600,m*10+700,4),g=jo(u*40+100,f*40+200,m*40+300,3),p=_*.8+g*.2;let x=0;p>.4?x=((p-.4)/.6)**2*c:x=-(.4-p)/.4*c*.12,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const d=new xe({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new dt(r,d),this.mesh.position.set(t[0]*Ma,t[1]*Ma,t[2]*Ma)}}const fh=`
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
`,fy=`
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
`,py=`
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
`;class $i{group=new an;innerMesh;outerMesh;innerMat;outerMat;constructor(t,e=4491519,n=.7,i,s=16737826,r=3){const a=new bt(e),l=new bt(s),c=i??t*.08,d=new L(0,0,0),h=t*1.01,u=new ue(h,64,48);this.innerMat=new Dn({vertexShader:fh,fragmentShader:fy,uniforms:{uSunDir:{value:new L(0,1,0)},uPlanetCenter:{value:d},uInnerRadius:{value:t},uAtmHeight:{value:c},uRayleighCol:{value:a},uMieCol:{value:new bt(.9,.9,1)},uDensity:{value:n},uTerminatorCol:{value:l},uGlowPower:{value:r}},transparent:!0,blending:cn,depthWrite:!1,side:In}),this.innerMesh=new dt(u,this.innerMat),this.group.add(this.innerMesh);const f=t*1.06,m=new ue(f,48,32);this.outerMat=new Dn({vertexShader:fh,fragmentShader:py,uniforms:{uSunDir:{value:new L(0,1,0)},uPlanetCenter:{value:d},uInnerRadius:{value:t},uDensity:{value:n*.5},uGlowPower:{value:r}},transparent:!0,blending:cn,depthWrite:!1,side:In}),this.outerMesh=new dt(m,this.outerMat),this.group.add(this.outerMesh)}setSunDirection(t,e){const n=new L().copy(t).sub(e).normalize();this.innerMat.uniforms.uSunDir.value.copy(n),this.outerMat.uniforms.uSunDir.value.copy(n)}getMesh(){return this.group}dispose(){this.innerMat.dispose(),this.outerMat.dispose(),this.innerMesh.geometry.dispose(),this.outerMesh.geometry.dispose()}}const ba=fn*pn,ph=64,ci=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},my=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),d=a*a*(3-2*a),h=l*l*(3-2*l),u=ci(n,i,s),f=ci(n+1,i,s),m=ci(n,i+1,s),_=ci(n+1,i+1,s),g=ci(n,i,s+1),p=ci(n+1,i,s+1),x=ci(n,i+1,s+1),y=ci(n+1,i+1,s+1);return Ui(Ui(Ui(u,f,c),Ui(m,_,c),d),Ui(Ui(g,p,c),Ui(x,y,c),d),h)},$o=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*my(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Ui=(o,t,e)=>o+(t-o)*e;class gy extends zn{getTerrainHeightVisual(t,e,n){const i=$o(t*6+50,e*6+100,n*6+150,4),s=$o(t*15+200,e*15+300,n*15+400,3),r=i*.6+s*.4,a=this.visualRadius*.015;return r>.35?((r-.35)/.65)**2*a:-(.35-r)/.35*a*.05}atmosphereGlow;constructor(t,e){super("venus",146e24*5*4*1.5*6*2*2*2/15*3,t,e,6052e3);const n=this.visualRadius,s=new Ki().load(ji("/textures/venus.jpg"),h=>{h.colorSpace=oe,h.anisotropy=4}),r=new ue(n,ph,ph),a=r.attributes.position,l=new L,c=n*.015;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,m=l.z/n,_=$o(u*6+50,f*6+100,m*6+150,4),g=$o(u*15+200,f*15+300,m*15+400,3),p=_*.6+g*.4;let x=0;p>.35?x=((p-.35)/.65)**2*c:x=-(.35-p)/.35*c*.05,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const d=new xe({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new dt(r,d),this.mesh.position.set(t[0]*ba,t[1]*ba,t[2]*ba),this.atmosphereGlow=new $i(n,15247436,.4),this.mesh.add(this.atmosphereGlow.getMesh())}}const Sa=fn*pn;class _y extends zn{constructor(t,e){super("pluto",44e20*5*4*1.5*6*2*2*2/15*3,t,e,1188e3);const n=new ue(this.visualRadius,32,16),i=new xe({color:14535867,roughness:.9,metalness:0});this.mesh=new dt(n,i),this.mesh.position.set(t[0]*Sa,t[1]*Sa,t[2]*Sa)}}const Ta=fn*pn;function Mu(o){let t=o|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function xy(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=n.createImageData(1024,512),s=3;for(let a=0;a<512;a++)for(let l=0;l<1024;l++){const c=l/1024,d=a/512,h=(d-.5)*Math.PI,u=c*Math.PI*2,f=Math.cos(h)*Math.cos(u),m=Math.cos(h)*Math.sin(u),_=Math.sin(h),g=Math.sin(f*s+m*1.3+_*.7)*.5+.5,p=Math.sin((f+1.7)*s*2+_*1.1)*.5+.5,x=Math.cos((m+.5)*s*4-f*2.3)*.5+.5,y=Math.sin(f*s*8+m*6+_*7)*.5+.5;let b=g*.4+p*.3+x*.2+y*.1;const C=1-Math.abs(d-.5)*1.2;b*=Math.max(0,C),b=Math.max(0,(b-.4)*2.5);const R=Math.min(255,Math.max(0,Math.round(b*255))),S=(a*1024+l)*4;i.data[S]=R,i.data[S+1]=R,i.data[S+2]=R,i.data[S+3]=255}n.putImageData(i,0,0);const r=new Ye(e);return r.wrapS=r.wrapT=De,r}function yy(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");n.fillStyle="#000000",n.fillRect(0,0,1024,512);const i=[{lat:.7,lon:-1.8,rx:.5,ry:.8},{lat:-.4,lon:-1.3,rx:.6,ry:.35},{lat:.85,lon:.4,rx:.25,ry:.3},{lat:.1,lon:.6,rx:.55,ry:.4},{lat:.7,lon:1.6,rx:.55,ry:1},{lat:-.6,lon:2.4,rx:.25,ry:.3},{lat:1.1,lon:-.9,rx:.2,ry:.2}],s=Mu(42);for(const a of i){const l=(a.lon+Math.PI)/(2*Math.PI)*1024,c=(Math.PI/2-a.lat)/Math.PI*512,d=a.rx/(2*Math.PI)*1024,h=a.ry/Math.PI*512,u=20+Math.floor(s()*40);for(let f=0;f<u;f++){const m=(s()-.5)*d*2,_=(s()-.5)*h*2;if((m/d)**2+(_/h)**2>1)continue;const p=l+m,x=c+_,y=1+s()*4,b=100+Math.floor(s()*155);n.fillStyle=`rgb(${b}, ${Math.floor(b*.85)}, ${Math.floor(b*.5)})`,n.beginPath(),n.arc(p,x,y,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255, 220, 100, ${.05+s()*.1})`,n.beginPath(),n.arc(p,x,y*3,0,Math.PI*2),n.fill()}for(let f=0;f<3;f++){const m=(s()-.5)*d*1.5,_=(s()-.5)*h*1.5;if((m/d)**2+(_/h)**2>1)continue;const p=l+m,x=c+_;n.fillStyle="#ffdd66",n.beginPath(),n.arc(p,x,3+s()*5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255, 200, 80, 0.2)",n.beginPath(),n.arc(p,x,8+s()*10,0,Math.PI*2),n.fill()}}for(const a of i){const l=(a.lon+Math.PI)/(2*Math.PI)*1024,c=(Math.PI/2-a.lat)/Math.PI*512,d=a.rx/(2*Math.PI)*1024,h=a.ry/Math.PI*512;for(let u=0;u<30;u++){const f=s()*Math.PI*2,m=.85+s()*.2,_=l+Math.cos(f)*d*m,g=c+Math.sin(f)*h*m,p=1+s()*2;n.fillStyle=`rgba(200, 180, 100, ${.1+s()*.15})`,n.beginPath(),n.arc(_,g,p,0,Math.PI*2),n.fill()}}const r=new Ye(e);return r.wrapS=r.wrapT=De,r.colorSpace=oe,r}function vy(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=n.createImageData(1024,512),s=i.data,r=[{lat:.7,lon:-1.8,rx:.5,ry:.8},{lat:-.4,lon:-1.3,rx:.6,ry:.35},{lat:.85,lon:.4,rx:.25,ry:.3},{lat:.1,lon:.6,rx:.55,ry:.4},{lat:.7,lon:1.6,rx:.55,ry:1},{lat:-.6,lon:2.4,rx:.25,ry:.3},{lat:1.1,lon:-.9,rx:.2,ry:.2}];for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const d=c/1024,u=(l/512-.5)*Math.PI,f=d*Math.PI*2-Math.PI;let m=!1;for(const p of r){const x=(u-p.lat)/p.rx,y=(f-p.lon)/p.ry;if(x*x+y*y<1){m=!0;break}}const _=m?180:40,g=(l*1024+c)*4;s[g]=s[g+1]=s[g+2]=_,s[g+3]=255}n.putImageData(i,0,0);const a=new Ye(e);return a.wrapS=a.wrapT=De,a}function My(){const e=document.createElement("canvas");e.width=6144,e.height=3072;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,3072);i.addColorStop(0,"#2255aa"),i.addColorStop(.5,"#3399ee"),i.addColorStop(1,"#2255aa"),n.fillStyle=i,n.fillRect(0,0,6144,3072);const s=[{lat:.7,lon:-2,rx:.55,ry:.5,color:"#5a8c3f"},{lat:.65,lon:-1.6,rx:.35,ry:.35,color:"#6a9c4f"},{lat:-.35,lon:-1.4,rx:.4,ry:.6,color:"#6a9c4f"},{lat:.85,lon:.4,rx:.2,ry:.22,color:"#7aac5a"},{lat:.1,lon:.6,rx:.45,ry:.5,color:"#8a9c4f"},{lat:.5,lon:1.5,rx:.6,ry:.4,color:"#7a9c4a"},{lat:.3,lon:1.1,rx:.25,ry:.15,color:"#8aac5a"},{lat:-.4,lon:1.7,rx:.15,ry:.35,color:"#7a9c4f"},{lat:1,lon:-2.5,rx:.08,ry:.1,color:"#6a9c4f"},{lat:-.7,lon:-1.1,rx:.08,ry:.08,color:"#7aac5a"}];for(const a of s){n.fillStyle=a.color,n.beginPath();const l=(a.lon+Math.PI)/(2*Math.PI)*6144,c=(Math.PI/2-a.lat)/Math.PI*3072,d=a.rx/(2*Math.PI)*6144,h=a.ry/Math.PI*3072;n.ellipse(l,c,d,h,0,0,Math.PI*2),n.fill();const u=a.lat*1e3+a.lon*100,f=Mu(u);for(let m=0;m<80;m++){const _=(f()-.5)*d*1.8,g=(f()-.5)*h*1.8;(_/d)**2+(g/h)**2<1&&(n.fillStyle=f()>.5?"#2a5c1f":"#6a9c4a",n.beginPath(),n.arc(l+_,c+g,1+f()*4,0,Math.PI*2),n.fill())}}n.fillStyle="#c0d8e8",n.fillRect(0,0,6144,3072*.05),n.fillRect(0,3072*.95,6144,3072*.05);const r=new Ye(e);return r.wrapS=r.wrapT=De,r.colorSpace=oe,r}class by extends zn{atmosphereGlow;cloudMesh;cloudTex;constructor(t,e){super("earth",yx,t,e,6371e3);const n=this.visualRadius,i=200,s=new ue(n,i,i),r=vy(),a=new xe({roughness:.7,roughnessMap:r,metalness:0,bumpMap:Tx(),bumpScale:.3,emissiveMap:yy(),emissive:new bt(16768358),emissiveIntensity:.6,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});this.mesh=new dt(s,a),this.mesh.position.set(t[0]*Ta,t[1]*Ta,t[2]*Ta),this.generateTerrain(n);const l=My();l.minFilter=vi,l.magFilter=Le,l.generateMipmaps=!1,l.colorSpace=oe,a.map=l,a.needsUpdate=!0;const c=[l,r,a.bumpMap,a.emissiveMap].filter(Boolean);for(const u of c)u.minFilter=Le,u.magFilter=Le,u.generateMipmaps=!1,u.needsUpdate=!0;this.loadHighResTexture().catch(()=>{}),this.atmosphereGlow=new $i(n,4491519,2,n*.12),this.mesh.add(this.atmosphereGlow.getMesh()),this.cloudTex=xy();const d=new xe({map:this.cloudTex,transparent:!0,opacity:.35,depthWrite:!1,side:Ie,roughness:1,metalness:0}),h=new ue(n*1.008,i,i);this.cloudMesh=new dt(h,d),this.cloudMesh.position.copy(this.mesh.position),this.mesh.add(this.cloudMesh)}async loadHighResTexture(){try{const e=await new Ki().loadAsync(ji("/textures/earth_daymap.jpg"));e.colorSpace=oe,e.anisotropy=16,e.minFilter=Le,e.magFilter=Le,e.generateMipmaps=!1;const n=this.mesh.material;n.map=e,n.needsUpdate=!0,console.log("Earth high-res texture loaded")}catch(t){console.warn("Earth texture load failed, using fallback:",t)}}updateClouds(t,e){if(this.cloudMesh.rotation.y+=t*.012,!e)return;const n=this.mesh.material,i=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])||1,s=e[0]/i,r=e[1]/i,a=e[2]/i;this.mesh.lookAt(this.mesh.position.x+s*100,this.mesh.position.y+r*100,this.mesh.position.z+a*100),this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,n.emissiveIntensity=.15}getTerrainHeightVisual(t,e,n){const i=Math.sin(t*3+e*1.8)*.5+Math.cos(e*2.5-n*1.3)*.3,s=Math.sin(n*1.8+t*1.2+e*.6)*.2+Math.sin(t*6+e*3+n*4)*.15,r=Math.sin(t*12+n*8)*.1+Math.cos(e*10+t*5)*.08,a=Math.sin(t*25+e*20+n*30)*.05,l=((i+s+r+a)*.3+.5)*1.2,c=this.visualRadius*.005,d=this.visualRadius*2e-4;if(l>.4){const h=(l-.4)/.6;return h*h*c}return-(.4-l)/.4*d}generateTerrain(t){const e=this.mesh.geometry,n=e.attributes.position,i=new L;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);const r=i.x/t,a=i.y/t,l=i.z/t,c=this.getTerrainHeightVisual(r,a,l);i.setLength(t+c),n.setXYZ(s,i.x,i.y,i.z)}n.needsUpdate=!0,e.computeVertexNormals()}}const Ea=fn*pn,mh=64,hi=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},Sy=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),d=a*a*(3-2*a),h=l*l*(3-2*l),u=hi(n,i,s),f=hi(n+1,i,s),m=hi(n,i+1,s),_=hi(n+1,i+1,s),g=hi(n,i,s+1),p=hi(n+1,i,s+1),x=hi(n,i+1,s+1),y=hi(n+1,i+1,s+1);return Ni(Ni(Ni(u,f,c),Ni(m,_,c),d),Ni(Ni(g,p,c),Ni(x,y,c),d),h)},Zo=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Sy(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Ni=(o,t,e)=>o+(t-o)*e;class Ty extends zn{getTerrainHeightVisual(t,e,n){const i=Zo(t*8+100,e*8+200,n*8+300,4),s=Zo(t*30+400,e*30+500,n*30+600,3),r=i*.7+s*.3,a=this.visualRadius*.04;return r>.45?((r-.45)/.55)**2*a:-(.45-r)/.45*a*.15}constructor(t,e){super("moon",22e23*5*4*1.5*6*2*2*2/15*3,t,e,1737e3);const n=this.visualRadius,s=new Ki().load(ji("/textures/moon.jpg"),h=>{h.colorSpace=oe,h.anisotropy=4}),r=new ue(n,mh,mh),a=r.attributes.position,l=new L,c=n*.04;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,m=l.z/n,_=Zo(u*8+100,f*8+200,m*8+300,4),g=Zo(u*30+400,f*30+500,m*30+600,3),p=_*.7+g*.3;let x=0;p>.45?x=((p-.45)/.55)**2*c:x=-(.45-p)/.45*c*.15,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const d=new xe({map:s,roughness:.95,metalness:0,color:16777215});this.mesh=new dt(r,d),this.mesh.position.set(t[0]*Ea,t[1]*Ea,t[2]*Ea)}}const wa=fn*pn,gh=64,ui=(o,t,e)=>{const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},Ey=(o,t,e)=>{const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),d=a*a*(3-2*a),h=l*l*(3-2*l),u=ui(n,i,s),f=ui(n+1,i,s),m=ui(n,i+1,s),_=ui(n+1,i+1,s),g=ui(n,i,s+1),p=ui(n+1,i,s+1),x=ui(n,i+1,s+1),y=ui(n+1,i+1,s+1);return Fi(Fi(Fi(u,f,c),Fi(m,_,c),d),Fi(Fi(g,p,c),Fi(x,y,c),d),h)},Jo=(o,t,e,n)=>{let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Ey(o*l,t*l,e*l),r+=s,s*=.5}return i/r},Fi=(o,t,e)=>o+(t-o)*e;class wy extends zn{getTerrainHeightVisual(t,e,n){const i=Jo(t*4+10,e*4+20,n*4+30,5),s=Jo(t*20+100,e*20+200,n*20+300,3),r=i*.7+s*.3,a=this.visualRadius*.035;return r>.4?((r-.4)/.6)**2*a:-(.4-r)/.4*a*.1}atmosphereGlow;constructor(t,e){super("mars",19e24*5*4*1.5*6*2*2*2/15*3,t,e,339e4);const n=this.visualRadius,s=new Ki().load(ji("/textures/mars.jpg"),h=>{h.colorSpace=oe,h.anisotropy=4}),r=new ue(n,gh,gh),a=r.attributes.position,l=new L,c=n*.035;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,m=l.z/n,_=Jo(u*4+10,f*4+20,m*4+30,5),g=Jo(u*20+100,f*20+200,m*20+300,3),p=_*.7+g*.3;let x=0;p>.4?x=((p-.4)/.6)**2*c:x=-(.4-p)/.4*c*.1,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,r.computeVertexNormals();const d=new xe({map:s,roughness:.85,metalness:0,color:16777215});this.mesh=new dt(r,d),this.mesh.position.set(t[0]*wa,t[1]*wa,t[2]*wa),this.atmosphereGlow=new $i(n,13920842,.25),this.mesh.add(this.atmosphereGlow.getMesh())}}function di(o,t,e){const n=Math.sin(o*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)}function Ay(o,t,e){const n=Math.floor(o),i=Math.floor(t),s=Math.floor(e),r=o-n,a=t-i,l=e-s,c=r*r*(3-2*r),d=a*a*(3-2*a),h=l*l*(3-2*l),u=di(n,i,s),f=di(n+1,i,s),m=di(n,i+1,s),_=di(n+1,i+1,s),g=di(n,i,s+1),p=di(n+1,i,s+1),x=di(n,i+1,s+1),y=di(n+1,i+1,s+1);return ki(ki(ki(u,f,c),ki(m,_,c),d),ki(ki(g,p,c),ki(x,y,c),d),h)}function Mi(o,t,e,n){let i=0,s=1,r=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Ay(o*l,t*l,e*l),r+=s,s*=.5}return i/r}function ki(o,t,e){return o+(t-o)*e}const Aa=fn*pn,_h=64;class Ry extends zn{atmosphereGlow;constructor(t,e){super("jupiter",19e27*5*4*1.5*6*2*2*2/15*3,t,e,69911e3);const n=this.visualRadius,i=Ix(),s=new ue(n,_h,_h),r=s.attributes.position,a=new L,l=n*.02;for(let d=0;d<r.count;d++){a.fromBufferAttribute(r,d);const h=a.x/n,u=a.y/n,f=a.z/n,m=Mi(h*8+10,u*8+20,f*8+30,4),_=Mi(h*30+100,u*30+200,f*30+300,3),g=m*.7+_*.3;let p=0;g>.4?p=((g-.4)/.6)**2*l:p=-(.4-g)/.4*l*.1,a.setLength(n+p),r.setXYZ(d,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new xe({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new dt(s,c),this.mesh.position.set(t[0]*Aa,t[1]*Aa,t[2]*Aa),this.mesh.rotation.z=3.1*Math.PI/180,this.atmosphereGlow=new $i(n,13935988,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const Ra=fn*pn;function Cy(){const e=document.createElement("canvas");e.width=1024,e.height=64;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,1024,0);i.addColorStop(0,"#8a7a5a"),i.addColorStop(.05,"#b8a888"),i.addColorStop(.12,"#d4c8a8"),i.addColorStop(.2,"#c0b898"),i.addColorStop(.35,"#e8ddd0"),i.addColorStop(.5,"#c0b090"),i.addColorStop(.65,"#d8ccb0"),i.addColorStop(.8,"#a89878"),i.addColorStop(.9,"#786858"),i.addColorStop(1,"#584838"),n.fillStyle=i,n.fillRect(0,0,1024,64);for(let r=0;r<8e3;r++){const a=Math.random()*1024,l=Math.random()*64,c=1+Math.random()*4,d=120+Math.random()*80;n.fillStyle=`rgba(${d},${d-20},${d-40},${.2+Math.random()*.4})`,n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.fill()}n.fillStyle="rgba(0,0,0,0.7)",n.fillRect(1024*.43,0,1024*.04,64),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(1024*.72,0,1024*.015,64),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(1024*.1,0,1024*.02,64),n.fillRect(1024*.17,0,1024*.01,64),n.fillRect(1024*.55,0,1024*.02,64),n.fillStyle="rgba(200,190,170,0.15)";for(let r=0;r<1024;r+=8)n.fillRect(r,0,2,64);const s=new Ye(e);return s.wrapS=De,s.wrapT=De,s.anisotropy=4,s}class Py extends zn{atmosphereGlow;constructor(t,e){super("saturn",5683e24*5*4*1.5*6*2*2*2/15*3,t,e,58232e3);const n=this.visualRadius,i=Dx(),s=new ue(n,64,32),r=s.attributes.position,a=new L,l=n*.015;for(let p=0;p<r.count;p++){a.fromBufferAttribute(r,p);const x=a.x/n,y=a.y/n,b=a.z/n,C=Mi(x*8+10,y*8+20,b*8+30,4),R=Mi(x*30+100,y*30+200,b*30+300,3),S=C*.7+R*.3;let N=0;S>.4?N=((S-.4)/.6)**2*l:N=-(.4-S)/.4*l*.1,a.setLength(n+N),r.setXYZ(p,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new xe({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new dt(s,c),this.mesh.position.set(t[0]*Ra,t[1]*Ra,t[2]*Ra),this.mesh.rotation.z=26.7*Math.PI/180,this.atmosphereGlow=new $i(n,16049313,.1),this.mesh.add(this.atmosphereGlow.getMesh());const d=Cy(),h=new Un(n*1.15,n*2.4,256),u=new Me({map:d,side:Ie,transparent:!0,opacity:.8,depthWrite:!1}),f=new dt(h,u);f.rotation.x=-Math.PI/2,f.rotation.z=26.7*Math.PI/180,this.mesh.add(f);const m=new Un(n*2.4,n*2.8,128),_=new Me({color:8943720,side:Ie,transparent:!0,opacity:.15,depthWrite:!1}),g=new dt(m,_);g.rotation.x=-Math.PI/2,g.rotation.z=26.7*Math.PI/180,this.mesh.add(g)}}const Ca=fn*pn;class Ly extends zn{atmosphereGlow;constructor(t,e){super("uranus",8681e23*5*4*1.5*6*2*2*2/15*3,t,e,25362e3);const n=this.visualRadius,i=Ux(),s=new ue(n,64,32),r=s.attributes.position,a=new L,l=n*.015;for(let f=0;f<r.count;f++){a.fromBufferAttribute(r,f);const m=a.x/n,_=a.y/n,g=a.z/n,p=Mi(m*6+10,_*6+20,g*6+30,4),x=Mi(m*25+400,_*25+500,g*25+600,3),y=p*.7+x*.3;let b=0;y>.4?b=((y-.4)/.6)**2*l:b=-(.4-y)/.4*l*.1,a.setLength(n+b),r.setXYZ(f,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new xe({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new dt(s,c),this.mesh.position.set(t[0]*Ca,t[1]*Ca,t[2]*Ca),this.mesh.rotation.z=-97.8*Math.PI/180,this.atmosphereGlow=new $i(n,5230824,.1),this.mesh.add(this.atmosphereGlow.getMesh());const d=new Un(n*1.2,n*2.1,64),h=new Me({color:11184844,side:Ie,transparent:!0,opacity:.3}),u=new dt(d,h);u.rotation.x=-Math.PI/2,u.rotation.z=97.8*Math.PI/180,this.mesh.add(u)}}const Pa=fn*pn;class Iy extends zn{atmosphereGlow;constructor(t,e){super("neptune",1024e24*5*4*1.5*6*2*2*2/15*3,t,e,24622e3);const n=this.visualRadius,i=Nx(),s=new ue(n,64,32),r=s.attributes.position,a=new L,l=n*.015;for(let d=0;d<r.count;d++){a.fromBufferAttribute(r,d);const h=a.x/n,u=a.y/n,f=a.z/n,m=Mi(h*6+10,u*6+20,f*6+30,4),_=Mi(h*25+100,u*25+200,f*25+300,3),g=m*.7+_*.3;let p=0;g>.4?p=((g-.4)/.6)**2*l:p=-(.4-g)/.4*l*.1,a.setLength(n+p),r.setXYZ(d,a.x,a.y,a.z)}r.needsUpdate=!0,s.computeVertexNormals();const c=new xe({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new dt(s,c),this.mesh.position.set(t[0]*Pa,t[1]*Pa,t[2]*Pa),this.mesh.rotation.z=28.3*Math.PI/180,this.atmosphereGlow=new $i(n,4944093,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const vs=fn*pn,Dy=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`,Uy=`
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
`;class Ny extends hl{light;visualRadius;mesh;constructor(t,e,n=2e26){super("sun",n,t,e),this.visualRadius=100;const i=new ue(this.visualRadius,32,16),s=new Dn({vertexShader:Dy,fragmentShader:Uy,uniforms:{uTime:{value:0},uColor:{value:new bt(16763904)},uIntensity:{value:1.5}},transparent:!0,blending:cn,depthWrite:!1,side:Ie});this.mesh=new dt(i,s),this.mesh.position.set(t[0]*vs,t[1]*vs,t[2]*vs),this.light=new lo(16772829,2.5),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z);const r=Fy(),a=new iu({map:r,blending:cn,depthWrite:!1,transparent:!0,opacity:1}),l=new Zg(a);l.scale.set(25e4,25e4,1),this.mesh.add(l),this.sunMaterial=s}sunMaterial;update(t){this.sunMaterial.uniforms.uTime.value+=t}syncMesh(){this.mesh.position.set(this.position[0]*vs,this.position[1]*vs,this.position[2]*vs),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z)}}function Fy(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255, 220, 100, 1)"),n.addColorStop(.1,"rgba(255, 200, 80, 0.8)"),n.addColorStop(.3,"rgba(255, 160, 40, 0.4)"),n.addColorStop(.5,"rgba(255, 100, 20, 0.15)"),n.addColorStop(.7,"rgba(255, 60, 10, 0.05)"),n.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=new Ye(t);return i.needsUpdate=!0,i}class xh{assembly;fuelTanks;constructor(t){this.assembly=t,this.fuelTanks=[],bu(t.roots,this.fuelTanks)}dryMass(){return this.assembly.totalMass()}totalFuelMass(){return this.fuelTanks.reduce((t,e)=>t+e.remaining,0)}totalMass(){return this.dryMass()+this.totalFuelMass()}consumeFuel(t,e){let n=0;for(let i=this.fuelTanks.length-1;i>=0;i--){const s=this.fuelTanks[i];if(s.remaining<=0)continue;const r=t*e-n;if(r<=0)break;const a=Math.min(s.remaining,r);s.remaining-=a,n+=a}return n}removeStage(t){const e=new Set;Su(t,e),e.add(t),this.fuelTanks=this.fuelTanks.filter(n=>!e.has(n.node)),t.children=[]}}function bu(o,t){for(const e of o)e.part.fuelCapacity&&t.push({node:e,remaining:e.part.fuelCapacity,capacity:e.part.fuelCapacity}),bu(e.children,t)}function Su(o,t){for(const e of o.children)t.add(e),Su(e,t)}const yh="ellipse_achievements";class ky{unlocked=new Set;callbacks=[];constructor(){const t=localStorage.getItem(yh);if(t)try{JSON.parse(t).forEach(e=>this.unlocked.add(e))}catch{}}unlock(t){this.unlocked.has(t)||(this.unlocked.add(t),localStorage.setItem(yh,JSON.stringify([...this.unlocked])),this.callbacks.forEach(e=>e(t)))}isUnlocked(t){return this.unlocked.has(t)}list(){return[...this.unlocked]}onUnlock(t){this.callbacks.push(t)}}const La={units:"metric",autoSave:!0,difficulty:"normal"},Tu="ellipse_settings";function Oy(){const o=localStorage.getItem(Tu);if(!o)return{...La};try{return{...La,...JSON.parse(o)}}catch{return{...La}}}function vh(o){localStorage.setItem(Tu,JSON.stringify(o))}class Hy{root;onClose;current;constructor(t,e){this.current=t,this.onClose=e,this.root=document.createElement("div"),this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 250;
      background: rgba(6, 8, 20, 0.88);
      display: flex; align-items: center; justify-content: center;
    `;const n=document.createElement("div");n.className="panel panel--elevated",n.style.cssText="padding: var(--space-6); min-width: 400px;";const i=document.createElement("h2");i.className="text-display-sm",i.textContent="Settings",i.style.cssText="margin: 0 0 var(--space-5);",n.appendChild(i);const s=this.makeRow("Units",["metric","imperial","mixed"],t.units,l=>{this.current.units=l});n.appendChild(s);const r=this.makeToggle("Auto-save",t.autoSave,l=>{this.current.autoSave=l});n.appendChild(r);const a=document.createElement("button");a.className="btn btn--primary",a.textContent="Save & Close",a.style.cssText="margin-top: var(--space-4); width: 100%; padding: 12px;",a.addEventListener("click",()=>{vh(this.current),this.onClose()}),n.appendChild(a),this.root.appendChild(n)}makeRow(t,e,n,i){const s=document.createElement("div");s.style.cssText="margin: var(--space-3) 0;";const r=document.createElement("div");r.className="text-caption",r.textContent=t,r.style.cssText="margin-bottom: var(--space-2);",s.appendChild(r);const a=document.createElement("div");a.style.cssText="display:flex;gap:var(--space-2);";for(const l of e){const c=document.createElement("button");c.className=`btn${l===n?" btn--secondary":""}`,c.textContent=l,l===n&&(c.style.borderColor="var(--accent-blue)"),c.addEventListener("click",()=>{i(l),vh(this.current)}),a.appendChild(c)}return s.appendChild(a),s}makeToggle(t,e,n){const i=document.createElement("div");i.style.cssText="margin: var(--space-3) 0; display: flex; justify-content: space-between; align-items: center;";const s=document.createElement("span");s.className="text-body",s.textContent=t;const r=document.createElement("input");return r.type="checkbox",r.checked=e,r.addEventListener("change",()=>n(r.checked)),i.appendChild(s),i.appendChild(r),i}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove()}}function Qo(o){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle=o,e.fillRect(0,0,64,64),e.strokeStyle="#000",e.lineWidth=2,e.strokeRect(0,0,64,64),e.strokeRect(16,16,32,32);const n=new Ye(t);return n.wrapS=n.wrapT=dn,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}Qo("#8899aa"),Qo("#808080"),Qo("#808080"),Qo("#000000");async function Gi(o,t=oe){const e=await new Promise((i,s)=>{const r=new Image;r.onload=()=>i(r),r.onerror=()=>s(new Error(`Failed: ${o}`)),r.src=o}),n=new He(e);return n.colorSpace=t,n.wrapS=n.wrapT=dn,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}async function tr(o){const[t,e,n,i]=await Promise.all([Gi(`/textures/${o}_color.jpg`,oe),Gi(`/textures/${o}_normal.jpg`,Te),Gi(`/textures/${o}_rough.jpg`,Te),Gi(`/textures/${o}_metal.jpg`,Te)]);return{color:t,normal:e,roughness:n,metalness:i}}let By=!1,zy=null,Gy=null,Wy=null,Vy=null,Xy=null,er=null;function qy(){return er||(er=(async()=>{try{[zy,Gy,Wy,Vy,Xy]=await Promise.all([tr("metal013"),tr("plates"),tr("metal009"),tr("metal021"),(async()=>{const[o,t,e]=await Promise.all([Gi("/textures/fabric_color.jpg",oe),Gi("/textures/fabric_normal.jpg",Te),Gi("/textures/fabric_rough.jpg",Te)]);return{color:o,normal:t,roughness:e,metalness:e}})()]),By=!0}catch(o){console.error("Texture loading failed, using fallback",o)}})(),er)}class Yy{renderer;sceneMgr;system;achievements;mainMenu;vab;flight;constructor(){qy(),this.renderer=new U_,this.sceneMgr=new F_,this.achievements=new ky,this.system=new hy;const t=2e27*5*4*1.5*6*2*2*2/15*3;this.system.add(new Ny([0,0,0],[0,0,0],t)),this.system.add(new dy([2e8,0,2e7],[0,0,38e3])),this.system.add(new gy([6e8,0,-6e7],[0,0,21e3]));const e=[1e9,0,0],n=[0,0,17e3];this.system.add(new by(e,n));const i=[e[0],0,e[2]+6e7],s=[0,0,n[2]+900];this.system.add(new Ty(i,s)),this.system.add(new wy([15e8,1e9,-4e8],[0,0,13500])),this.system.add(new Ry([3e9,-6e8,2e8],[0,0,9e3])),this.system.add(new Py([56e8,4e8,-4e8],[0,0,6800])),this.system.add(new Ly([11e9,-2e8,6e8],[0,0,4800])),this.system.add(new Iy([17e9,8e8,0],[0,0,3800])),this.system.add(new _y([23e9,16e8,-1e9],[0,0,2e3])),document.getElementById("app").appendChild(this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.sceneMgr.camera.aspect=window.innerWidth/window.innerHeight,this.sceneMgr.camera.updateProjectionMatrix()}),this.achievements.onUnlock(r=>Oe.show(`Achievement: ${r}`))}async preloadModels(){const{loadGLTF:t}=await bh(async()=>{const{loadGLTF:i}=await Promise.resolve().then(()=>yu);return{loadGLTF:i}},void 0),e=["/models/agena.glb","/models/saturn_v.glb","/models/apollo_soyuz.glb","/models/ares_1.glb","/models/apollo_lunar_module.glb","/models/atlas_6.glb","/models/atlas_9.glb","/models/crawler.glb"];await Promise.allSettled(e.map(i=>t(i,1))),new Ki().load(ji("/textures/earth_daymap.jpg"),()=>{},void 0,()=>{})}start(){this.preloadModels().then(()=>{this.showMainMenu(),this.loop()})}showMainMenu(){this.unmountCurrent(),this.mainMenu=new k_(()=>this.showFlight(),()=>this.showVab(),()=>this.showSettings()),this.mainMenu.mount()}showSettings(){const t=new Hy(Oy(),()=>t.unmount());t.mount()}showVab(){this.unmountCurrent(),this.vab=new jx(t=>{const e=new xh(t);this.showFlight(e)}),this.vab.mount(),this.sceneMgr.scene.add(this.vab.scene)}async showFlight(t){this.unmountCurrent();const e=t?.assembly??new gr;if(!t){const i=kt;e.addRoot({part:sr("capsule_mk1"),position:[0,1.6*i,0],rotation:0,children:[]}),e.addRoot({part:sr("tank_s_lfo"),position:[0,.8*i,0],rotation:0,children:[]}),e.addRoot({part:sr("engine_ant"),position:[0,0,0],rotation:0,children:[]})}const n=new xh(e);this.flight=new ly(this.renderer,this.sceneMgr,this.system,n,this.achievements),this.flight.onCrashAction=i=>{i==="menu"?this.showMainMenu():this.showFlight(t)}}unmountCurrent(){this.mainMenu?.unmount(),this.mainMenu=void 0,this.vab&&(this.vab.unmount(),this.sceneMgr.scene.remove(this.vab.scene),this.vab=void 0),this.flight?.dispose(),this.flight=void 0}loop(){const t=.016666666666666666;this.sceneMgr.update(t),this.flight?.update(t),this.vab?this.renderer.three.render(this.vab.scene,this.vab.camera):this.renderer.three.render(this.sceneMgr.scene,this.sceneMgr.camera),requestAnimationFrame(()=>this.loop())}}function Mh(){const o=document.getElementById("loading-screen");o&&o.classList.add("hidden");const t=document.getElementById("loading-label");t&&(t.dataset.done="1")}try{const o=new Yy;Mh(),o.start()}catch(o){console.error("Failed to start Ellipse:",o),Mh(),document.body.innerHTML+=`<div style="position:fixed;inset:0;z-index:950;color:white;padding:32px;font-family:monospace;background:#06080f;">
      <h1>Failed to start</h1>
      <pre>${String(o)}</pre>
    </div>`}
//# sourceMappingURL=index-C_TJW7re.js.map
