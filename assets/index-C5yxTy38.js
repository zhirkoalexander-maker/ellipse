(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Eu="modulepreload",wu=function(r){return"/ellipse/"+r},ul={},yh=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(e.map(l=>{if(l=wu(l),l in ul)return;ul[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Eu,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((u,f)=>{h.addEventListener("load",u),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="160",Au=0,dl=1,Ru=2,vh=1,Cu=2,qn=3,Pn=0,rn=1,De=2,fi=0,pi=1,an=2,fl=3,pl=4,Pu=5,ki=100,Lu=101,Iu=102,ml=103,gl=104,Du=200,Uu=201,Nu=202,Fu=203,La=204,Ia=205,ku=206,Ou=207,Hu=208,Bu=209,zu=210,Gu=211,Wu=212,Vu=213,Xu=214,qu=0,Yu=1,Ku=2,so=3,ju=4,$u=5,Zu=6,Ju=7,Ya=0,Qu=1,td=2,mi=0,Mh=1,ed=2,nd=3,id=4,sd=5,rd=6,_l="attached",od="detached",Sh=300,Ms=301,Ss=302,Da=303,Ua=304,go=306,un=1e3,Ue=1001,ro=1002,Xe=1003,Na=1004,Qr=1005,ln=1006,bh=1007,Wi=1008,gi=1009,ad=1010,ld=1011,Ka=1012,Th=1013,ui=1014,Yn=1015,tr=1016,Eh=1017,wh=1018,Bi=1020,cd=1021,hn=1023,hd=1024,ud=1025,zi=1026,bs=1027,dd=1028,Ah=1029,fd=1030,Rh=1031,Ch=1033,Po=33776,Lo=33777,Io=33778,Do=33779,xl=35840,yl=35841,vl=35842,Ml=35843,Ph=36196,Sl=37492,bl=37496,Tl=37808,El=37809,wl=37810,Al=37811,Rl=37812,Cl=37813,Pl=37814,Ll=37815,Il=37816,Dl=37817,Ul=37818,Nl=37819,Fl=37820,kl=37821,Uo=36492,Ol=36494,Hl=36495,pd=36283,Bl=36284,zl=36285,Gl=36286,er=2300,Ts=2301,No=2302,Wl=2400,Vl=2401,Xl=2402,md=2500,gd=0,Lh=1,Fa=2,Ih=3e3,Gi=3001,_d=3200,xd=3201,ja=0,yd=1,bn="",re="srgb",Ee="srgb-linear",$a="display-p3",_o="display-p3-linear",oo="linear",xe="srgb",ao="rec709",lo="p3",Yi=7680,ql=519,vd=512,Md=513,Sd=514,Dh=515,bd=516,Td=517,Ed=518,wd=519,ka=35044,Yl="300 es",Oa=1035,Kn=2e3,co=2001;class Cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const $s=Math.PI/180,Es=180/Math.PI;function Cn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[r&255]+je[r>>8&255]+je[r>>16&255]+je[r>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Je(r,t,e){return Math.max(t,Math.min(e,r))}function Za(r,t){return(r%t+t)%t}function Ad(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Rd(r,t,e){return r!==t?(e-r)/(t-r):0}function Zs(r,t,e){return(1-e)*r+e*t}function Cd(r,t,e,n){return Zs(r,t,1-Math.exp(-e*n))}function Pd(r,t=1){return t-Math.abs(Za(r,t*2)-t)}function Ld(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Id(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Dd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Ud(r,t){return r+Math.random()*(t-r)}function Nd(r){return r*(.5-Math.random())}function Fd(r){r!==void 0&&(Kl=r);let t=Kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kd(r){return r*$s}function Od(r){return r*Es}function Ha(r){return(r&r-1)===0&&r!==0}function Hd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ho(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bd(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),d=o((t+n)/2),h=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*d,l*h,l*u,a*c);break;case"YZY":r.set(l*u,a*d,l*h,a*c);break;case"ZXZ":r.set(l*h,l*u,a*d,a*c);break;case"XZX":r.set(a*d,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*d,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ue(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zd={DEG2RAD:$s,RAD2DEG:Es,generateUUID:Cn,clamp:Je,euclideanModulo:Za,mapLinear:Ad,inverseLerp:Rd,lerp:Zs,damp:Cd,pingpong:Pd,smoothstep:Ld,smootherstep:Id,randInt:Dd,randFloat:Ud,randFloatSpread:Nd,seededRandom:Fd,degToRad:kd,radToDeg:Od,isPowerOfTwo:Ha,ceilPowerOfTwo:Hd,floorPowerOfTwo:ho,setQuaternionFromProperEuler:Bd,normalize:ue,denormalize:Fn};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,i,s,o,a,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],y=i[4],S=i[7],A=i[2],w=i[5],b=i[8];return s[0]=o*_+a*x+l*A,s[3]=o*g+a*y+l*w,s[6]=o*p+a*S+l*b,s[1]=c*_+d*x+h*A,s[4]=c*g+d*y+h*w,s[7]=c*p+d*S+h*b,s[2]=u*_+f*x+m*A,s[5]=u*g+f*y+m*w,s[8]=u*p+f*S+m*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*s*d+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*o-a*c,u=a*l-d*s,f=c*s-o*l,m=e*h+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(i*c-d*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(d*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new ee;function Uh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function nr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gd(){const r=nr("canvas");return r.style.display="block",r}const jl={};function Js(r){r in jl||(jl[r]=!0,console.warn(r))}const $l=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zl=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hr={[Ee]:{transfer:oo,primaries:ao,toReference:r=>r,fromReference:r=>r},[re]:{transfer:xe,primaries:ao,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[_o]:{transfer:oo,primaries:lo,toReference:r=>r.applyMatrix3(Zl),fromReference:r=>r.applyMatrix3($l)},[$a]:{transfer:xe,primaries:lo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Zl),fromReference:r=>r.applyMatrix3($l).convertLinearToSRGB()}},Wd=new Set([Ee,_o]),le={enabled:!0,_workingColorSpace:Ee,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Wd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=hr[t].toReference,i=hr[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return hr[r].primaries},getTransfer:function(r){return r===bn?oo:hr[r].transfer}};function ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ko(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ki;class Nh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=nr("canvas")),Ki.width=t.width,Ki.height=t.height;const n=Ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ys(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vd=0;class Fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Cn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Oo(i[o].image)):s.push(Oo(i[o]))}else s=Oo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Oo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xd=0;class He extends Cs{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Ue,i=Ue,s=ln,o=Wi,a=hn,l=gi,c=He.DEFAULT_ANISOTROPY,d=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Cn(),this.name="",this.source=new Fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Gi?re:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case un:t.x=t.x-Math.floor(t.x);break;case Ue:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case un:t.y=t.y-Math.floor(t.y);break;case Ue:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===re?Gi:Ih}set encoding(t){Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Gi?re:bn}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Sh;He.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,S=(f+1)/2,A=(p+1)/2,w=(d+u)/4,b=(h+_)/4,F=(m+g)/4;return y>S&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=b/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=F/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=F/s),this.set(n,i,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(u-d)/x,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qd extends Cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gi?re:bn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends qd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kh extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yd extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==u||c!==f||d!==m){let g=1-a;const p=l*u+c*f+d*m+h*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,p*x);g=Math.sin(g*w)/A,a=Math.sin(a*w)/A}const S=a*x;if(l=l*g+u*S,c=c*g+f*S,d=d*g+m*S,h=h*g+_*S,g===1-a){const A=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=A,c*=A,d*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+d*h+l*f-c*u,t[e+1]=l*m+d*u+c*h-a*f,t[e+2]=c*m+d*f+a*u-l*h,t[e+3]=d*m-a*h-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=u*d*h+c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h-u*f*m;break;case"YXZ":this._x=u*d*h+c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h+u*f*m;break;case"ZXY":this._x=u*d*h-c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h-u*f*m;break;case"ZYX":this._x=u*d*h-c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h+u*f*m;break;case"YZX":this._x=u*d*h+c*f*m,this._y=c*f*h+u*d*m,this._z=c*d*m-u*f*h,this._w=c*d*h-u*f*m;break;case"XZY":this._x=u*d*h-c*f*m,this._y=c*f*h-u*d*m,this._z=c*d*m+u*f*h,this._w=c*d*h+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=n+a+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+i*c-s*l,this._y=i*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),d=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*d,this.y=n+l*d+a*c-s*h,this.z=i+l*h+s*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ho.copy(this).projectOnVector(t),this.sub(Ho)}reflect(t){return this.sub(Ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new P,Jl=new cn;class mn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),dr.subVectors(this.max,ks),ji.subVectors(t.a,ks),$i.subVectors(t.b,ks),Zi.subVectors(t.c,ks),Jn.subVectors($i,ji),Qn.subVectors(Zi,$i),Ti.subVectors(ji,Zi);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-Ti.z,Ti.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,Ti.z,0,-Ti.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-Ti.y,Ti.x,0];return!Bo(e,ji,$i,Zi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Bo(e,ji,$i,Zi,dr))?!1:(fr.crossVectors(Jn,Qn),e=[fr.x,fr.y,fr.z],Bo(e,ji,$i,Zi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new P,new P,new P,new P,new P,new P,new P,new P],wn=new P,ur=new mn,ji=new P,$i=new P,Zi=new P,Jn=new P,Qn=new P,Ti=new P,ks=new P,dr=new P,fr=new P,Ei=new P;function Bo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ei.fromArray(r,s);const a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),d=n.dot(Ei);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Kd=new mn,Os=new P,zo=new P;class kn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const e=Os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Os,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(zo)),this.expandByPoint(Os.copy(t.center).sub(zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new P,Go=new P,pr=new P,ti=new P,Wo=new P,mr=new P,Vo=new P;class xo{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Go.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Go);const s=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=ti.dot(this.direction),l=-ti.dot(pr),c=ti.lengthSq(),d=Math.abs(1-o*o);let h,u,f,m;if(d>0)if(h=o*l-a,u=o*a-l,m=s*d,h>=0)if(u>=-m)if(u<=m){const _=1/d;h*=_,u*=_,f=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-m?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c):u<=m?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Go).addScaledVector(pr,u),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),d>=0?(s=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(s=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,i,s){Wo.subVectors(e,t),mr.subVectors(n,t),Vo.crossVectors(Wo,mr);let o=this.direction.dot(Vo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,t);const l=a*this.direction.dot(mr.crossVectors(ti,mr));if(l<0)return null;const c=a*this.direction.dot(Wo.cross(ti));if(c<0||l+c>o)return null;const d=-a*ti.dot(Vo);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,i,s,o,a,l,c,d,h,u,f,m,_,g){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,d,h,u,f,m,_,g)}set(t,e,n,i,s,o,a,l,c,d,h,u,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ji.setFromMatrixColumn(t,0).length(),s=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=o*d,f=o*h,m=a*d,_=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*d,f=l*h,m=c*d,_=c*h;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*d,f=l*h,m=c*d,_=c*h;e[0]=u-_*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*d,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*d,f=o*h,m=a*d,_=a*h;e[0]=l*d,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*h,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*d,e[4]=_-u*h,e[8]=m*h+f,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=f*h+m,e[10]=u-_*h}else if(t.order==="XZY"){const u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+_,e[5]=o*d,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*d,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jd,t,$d)}lookAt(t,e,n){const i=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ei.crossVectors(n,fn),ei.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ei.crossVectors(n,fn)),ei.normalize(),gr.crossVectors(fn,ei),i[0]=ei.x,i[4]=gr.x,i[8]=fn.x,i[1]=ei.y,i[5]=gr.y,i[9]=fn.y,i[2]=ei.z,i[6]=gr.z,i[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],y=n[7],S=n[11],A=n[15],w=i[0],b=i[4],F=i[8],M=i[12],T=i[1],U=i[5],D=i[9],K=i[13],I=i[2],k=i[6],z=i[10],it=i[14],$=i[3],Z=i[7],st=i[11],ct=i[15];return s[0]=o*w+a*T+l*I+c*$,s[4]=o*b+a*U+l*k+c*Z,s[8]=o*F+a*D+l*z+c*st,s[12]=o*M+a*K+l*it+c*ct,s[1]=d*w+h*T+u*I+f*$,s[5]=d*b+h*U+u*k+f*Z,s[9]=d*F+h*D+u*z+f*st,s[13]=d*M+h*K+u*it+f*ct,s[2]=m*w+_*T+g*I+p*$,s[6]=m*b+_*U+g*k+p*Z,s[10]=m*F+_*D+g*z+p*st,s[14]=m*M+_*K+g*it+p*ct,s[3]=x*w+y*T+S*I+A*$,s[7]=x*b+y*U+S*k+A*Z,s[11]=x*F+y*D+S*z+A*st,s[15]=x*M+y*K+S*it+A*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+s*l*h-i*c*h-s*a*u+n*c*u+i*a*f-n*l*f)+_*(+e*l*f-e*c*u+s*o*u-i*o*f+i*c*d-s*l*d)+g*(+e*c*h-e*a*f-s*o*h+n*o*f+s*a*d-n*c*d)+p*(-i*a*d-e*l*h+e*a*u+i*o*h-n*o*u+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],x=h*g*c-_*u*c+_*l*f-a*g*f-h*l*p+a*u*p,y=m*u*c-d*g*c-m*l*f+o*g*f+d*l*p-o*u*p,S=d*_*c-m*h*c+m*a*f-o*_*f-d*a*p+o*h*p,A=m*h*l-d*_*l-m*a*u+o*_*u+d*a*g-o*h*g,w=e*x+n*y+i*S+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=x*b,t[1]=(_*u*s-h*g*s-_*i*f+n*g*f+h*i*p-n*u*p)*b,t[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*b,t[3]=(h*l*s-a*u*s-h*i*c+n*u*c+a*i*f-n*l*f)*b,t[4]=y*b,t[5]=(d*g*s-m*u*s+m*i*f-e*g*f-d*i*p+e*u*p)*b,t[6]=(m*l*s-o*g*s-m*i*c+e*g*c+o*i*p-e*l*p)*b,t[7]=(o*u*s-d*l*s+d*i*c-e*u*c-o*i*f+e*l*f)*b,t[8]=S*b,t[9]=(m*h*s-d*_*s-m*n*f+e*_*f+d*n*p-e*h*p)*b,t[10]=(o*_*s-m*a*s+m*n*c-e*_*c-o*n*p+e*a*p)*b,t[11]=(d*a*s-o*h*s-d*n*c+e*h*c+o*n*f-e*a*f)*b,t[12]=A*b,t[13]=(d*_*i-m*h*i+m*n*u-e*_*u-d*n*g+e*h*g)*b,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*g-e*a*g)*b,t[15]=(o*h*i-d*a*i+d*n*l-e*h*l-o*n*u+e*a*u)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,d=o+o,h=a+a,u=s*c,f=s*d,m=s*h,_=o*d,g=o*h,p=a*h,x=l*c,y=l*d,S=l*h,A=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+S)*A,i[2]=(m-y)*A,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(u+p))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(m+y)*b,i[9]=(g-x)*b,i[10]=(1-(u+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],An.copy(this);const c=1/s,d=1/o,h=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=d,An.elements[5]*=d,An.elements[6]*=d,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,e.setFromRotationMatrix(An),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Kn){const l=this.elements,c=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i);let f,m;if(a===Kn)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===co)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Kn){const l=this.elements,c=1/(e-t),d=1/(n-i),h=1/(o-s),u=(e+t)*c,f=(n+i)*d;let m,_;if(a===Kn)m=(o+s)*h,_=-2*h;else if(a===co)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new P,An=new Qt,jd=new P(0,0,0),$d=new P(1,1,1),ei=new P,gr=new P,fn=new P,Ql=new Qt,tc=new cn;class yo{constructor(t=0,e=0,n=0,i=yo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yo.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zd=0;const ec=new P,Qi=new cn,Gn=new Qt,_r=new P,Hs=new P,Jd=new P,Qd=new cn,nc=new P(1,0,0),ic=new P(0,1,0),sc=new P(0,0,1),tf={type:"added"},ef={type:"removed"};class ye extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new P,e=new yo,n=new cn,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ee}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Hs,_r,this.up):Gn.lookAt(_r,Hs,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(tf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ef)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),h=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new P(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new P,Wn=new P,Xo=new P,Vn=new P,ts=new P,es=new P,rc=new P,qo=new P,Yo=new P,Ko=new P;let xr=!1;class Sn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Rn.subVectors(t,e),i.cross(Rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Rn.subVectors(i,e),Wn.subVectors(n,e),Xo.subVectors(t,e);const o=Rn.dot(Rn),a=Rn.dot(Wn),l=Rn.dot(Xo),c=Wn.dot(Wn),d=Wn.dot(Xo),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,f=(c*l-a*d)*u,m=(o*d-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(t,e,n,i,s,o,a,l){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static isFrontFacing(t,e,n,i){return Rn.subVectors(n,e),Wn.subVectors(t,e),Rn.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Rn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ts.subVectors(i,n),es.subVectors(s,n),qo.subVectors(t,n);const l=ts.dot(qo),c=es.dot(qo);if(l<=0&&c<=0)return e.copy(n);Yo.subVectors(t,i);const d=ts.dot(Yo),h=es.dot(Yo);if(d>=0&&h<=d)return e.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(ts,o);Ko.subVectors(t,s);const f=ts.dot(Ko),m=es.dot(Ko);if(m>=0&&f<=m)return e.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(es,a);const g=d*m-f*h;if(g<=0&&h-d>=0&&f-m>=0)return rc.subVectors(s,i),a=(h-d)/(h-d+(f-m)),e.copy(i).addScaledVector(rc,a);const p=1/(g+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},yr={h:0,s:0,l:0};function jo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=Za(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=jo(o,s,t+1/3),this.g=jo(o,s,t),this.b=jo(o,s,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=re){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=re){const n=Hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=ko(t.r),this.g=ko(t.g),this.b=ko(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=re){return le.fromWorkingColorSpace($e.copy(this),t),Math.round(Je($e.r*255,0,255))*65536+Math.round(Je($e.g*255,0,255))*256+Math.round(Je($e.b*255,0,255))}getHexString(t=re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,i=$e.g,s=$e.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=re){le.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,i=$e.b;return t!==re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(yr);const n=Zs(ni.h,yr.h,e),i=Zs(ni.s,yr.s,e),s=Zs(ni.l,yr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new wt;wt.NAMES=Hh;let nf=0;class Tn extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=pi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Me extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new P,vr=new Wt;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ka,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ka&&(t.usage=this.usage),t}}class Bh extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zh extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sf=0;const vn=new Qt,$o=new ye,ns=new P,pn=new mn,Bs=new mn,Ve=new P;class Ne extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uh(t)?zh:Bh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(pn.min,Bs.min),pn.expandByPoint(Ve),Ve.addVectors(pn.max,Bs.max),pn.expandByPoint(Ve)):(pn.expandByPoint(Bs.min),pn.expandByPoint(Bs.max))}pn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ve.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ve.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(t,c),Ve.add(ns)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<a;T++)c[T]=new P,d[T]=new P;const h=new P,u=new P,f=new P,m=new Wt,_=new Wt,g=new Wt,p=new P,x=new P;function y(T,U,D){h.fromArray(i,T*3),u.fromArray(i,U*3),f.fromArray(i,D*3),m.fromArray(o,T*2),_.fromArray(o,U*2),g.fromArray(o,D*2),u.sub(h),f.sub(h),_.sub(m),g.sub(m);const K=1/(_.x*g.y-g.x*_.y);isFinite(K)&&(p.copy(u).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(K),x.copy(f).multiplyScalar(_.x).addScaledVector(u,-g.x).multiplyScalar(K),c[T].add(p),c[U].add(p),c[D].add(p),d[T].add(x),d[U].add(x),d[D].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,U=S.length;T<U;++T){const D=S[T],K=D.start,I=D.count;for(let k=K,z=K+I;k<z;k+=3)y(n[k+0],n[k+1],n[k+2])}const A=new P,w=new P,b=new P,F=new P;function M(T){b.fromArray(s,T*3),F.copy(b);const U=c[T];A.copy(U),A.sub(b.multiplyScalar(b.dot(U))).normalize(),w.crossVectors(F,U);const K=w.dot(d[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=K}for(let T=0,U=S.length;T<U;++T){const D=S[T],K=D.start,I=D.count;for(let k=K,z=K+I;k<z;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,d=new P,h=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*d;for(let p=0;p<d;p++)u[m++]=c[f++]}return new Pe(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(t.data))}d.length>0&&(i[l]=d,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new Qt,wi=new xo,Mr=new kn,ac=new P,is=new P,ss=new P,rs=new P,Zo=new P,Sr=new P,br=new Wt,Tr=new Wt,Er=new Wt,lc=new P,cc=new P,hc=new P,wr=new P,Ar=new P;class ut extends ye{constructor(t=new Ne,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Sr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Zo.fromBufferAttribute(h,t),o?Sr.addScaledVector(Zo,d):Sr.addScaledVector(Zo.sub(e),d))}e.add(Sr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(Mr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Mr,ac)===null||wi.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(oc.copy(s).invert(),wi.copy(t.ray).applyMatrix4(oc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let S=x,A=y;S<A;S+=3){const w=a.getX(S),b=a.getX(S+1),F=a.getX(S+2);i=Rr(this,p,t,n,c,d,h,w,b,F),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),y=a.getX(g+1),S=a.getX(g+2);i=Rr(this,o,t,n,c,d,h,x,y,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=x,A=y;S<A;S+=3){const w=S,b=S+1,F=S+2;i=Rr(this,p,t,n,c,d,h,w,b,F),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,y=g+1,S=g+2;i=Rr(this,o,t,n,c,d,h,x,y,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function rf(r,t,e,n,i,s,o,a){let l;if(t.side===rn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Pn,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:r}}function Rr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,is),r.getVertexPosition(l,ss),r.getVertexPosition(c,rs);const d=rf(r,t,e,n,is,ss,rs,wr);if(d){i&&(br.fromBufferAttribute(i,a),Tr.fromBufferAttribute(i,l),Er.fromBufferAttribute(i,c),d.uv=Sn.getInterpolation(wr,is,ss,rs,br,Tr,Er,new Wt)),s&&(br.fromBufferAttribute(s,a),Tr.fromBufferAttribute(s,l),Er.fromBufferAttribute(s,c),d.uv1=Sn.getInterpolation(wr,is,ss,rs,br,Tr,Er,new Wt),d.uv2=d.uv1),o&&(lc.fromBufferAttribute(o,a),cc.fromBufferAttribute(o,l),hc.fromBufferAttribute(o,c),d.normal=Sn.getInterpolation(wr,is,ss,rs,lc,cc,hc,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};Sn.getNormal(is,ss,rs,h.normal),d.face=h}return d}class yi extends Ne{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(h,2));function m(_,g,p,x,y,S,A,w,b,F,M){const T=S/b,U=A/F,D=S/2,K=A/2,I=w/2,k=b+1,z=F+1;let it=0,$=0;const Z=new P;for(let st=0;st<z;st++){const ct=st*U-K;for(let ot=0;ot<k;ot++){const X=ot*T-D;Z[_]=X*x,Z[g]=ct*y,Z[p]=I,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[p]=w>0?1:-1,d.push(Z.x,Z.y,Z.z),h.push(ot/b),h.push(1-st/F),it+=1}}for(let st=0;st<F;st++)for(let ct=0;ct<b;ct++){const ot=u+ct+k*st,X=u+ct+k*(st+1),j=u+(ct+1)+k*(st+1),gt=u+(ct+1)+k*st;l.push(ot,X,gt),l.push(X,j,gt),$+=6}a.addGroup(f,$,M),f+=$,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function nn(r){const t={};for(let e=0;e<r.length;e++){const n=ws(r[e]);for(const i in n)t[i]=n[i]}return t}function of(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Gh(r){return r.getRenderTarget()===null?r.outputColorSpace:le.workingColorSpace}const af={clone:ws,merge:nn};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qe extends Wh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($s*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,as=1;class hf extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qe(os,as,t,e);i.layers=this.layers,this.add(i);const s=new Qe(os,as,t,e);s.layers=this.layers,this.add(s);const o=new Qe(os,as,t,e);o.layers=this.layers,this.add(o);const a=new Qe(os,as,t,e);a.layers=this.layers,this.add(a);const l=new Qe(os,as,t,e);l.layers=this.layers,this.add(l);const c=new Qe(os,as,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(h,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Vh extends He{constructor(t,e,n,i,s,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,i,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uf extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Gi?re:bn),this.texture=new Vh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yi(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:fi});s.uniforms.tEquirect.value=e;const o=new ut(i,s),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=ln),new hf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Jo=new P,df=new P,ff=new ee;class Ni{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Jo.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ff.getNormalMatrix(t),i=this.coplanarPoint(Jo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new kn,Cr=new P;class Ja{constructor(t=new Ni,e=new Ni,n=new Ni,i=new Ni,s=new Ni,o=new Ni){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],y=i[14],S=i[15];if(n[0].setComponents(l-s,u-c,g-f,S-p).normalize(),n[1].setComponents(l+s,u+c,g+f,S+p).normalize(),n[2].setComponents(l+o,u+d,g+m,S+x).normalize(),n[3].setComponents(l-o,u-d,g-m,S-x).normalize(),n[4].setComponents(l-a,u-h,g-_,S-y).normalize(),e===Kn)n[5].setComponents(l+a,u+h,g+_,S+y).normalize();else if(e===co)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Cr.x=i.normal.x>0?t.max.x:t.min.x,Cr.y=i.normal.y>0?t.max.y:t.min.y,Cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function pf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,d){const h=c.array,u=c.usage,f=h.byteLength,m=r.createBuffer();r.bindBuffer(d,m),r.bufferData(d,h,u),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,d,h){const u=d.array,f=d._updateRange,m=d.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&m.length===0&&r.bufferSubData(h,0,u),m.length!==0){for(let _=0,g=m.length;_<g;_++){const p=m[_];e?r.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):r.bufferSubData(h,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(r.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Qa extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=t/a,u=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<d;p++){const x=p*u-o;for(let y=0;y<c;y++){const S=y*h-s;m.push(S,-x,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,S=x+c*(p+1),A=x+1+c*(p+1),w=x+1+c*p;f.push(y,S,w),f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.width,t.height,t.widthSegments,t.heightSegments)}}var mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bf=`#ifdef USE_BATCHING
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
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bf=`vec3 transformedNormal = objectNormal;
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
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`
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
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,pp=`struct PhysicalMaterial {
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
}`,mp=`
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ep=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,Mm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#define LAMBERT
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
}`,Lm=`#define LAMBERT
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
}`,Im=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,Fm=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Om=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,zm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:_f,alphamap_pars_fragment:xf,alphatest_fragment:yf,alphatest_pars_fragment:vf,aomap_fragment:Mf,aomap_pars_fragment:Sf,batching_pars_vertex:bf,batching_vertex:Tf,begin_vertex:Ef,beginnormal_vertex:wf,bsdfs:Af,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Df,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Ff,color_vertex:kf,common:Of,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Bf,displacementmap_pars_vertex:zf,displacementmap_vertex:Gf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Vf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:lp,envmap_vertex:Zf,fog_vertex:Jf,fog_pars_vertex:Qf,fog_fragment:tp,fog_pars_fragment:ep,gradientmap_pars_fragment:np,lightmap_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:op,lights_pars_begin:ap,lights_toon_fragment:cp,lights_toon_pars_fragment:hp,lights_phong_fragment:up,lights_phong_pars_fragment:dp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:_p,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:Mp,map_fragment:Sp,map_pars_fragment:bp,map_particle_fragment:Tp,map_particle_pars_fragment:Ep,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Ap,morphcolor_vertex:Rp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Lp,normal_fragment_begin:Ip,normal_fragment_maps:Dp,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Fp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:zp,opaque_fragment:Gp,packing:Wp,premultiplied_alpha_fragment:Vp,project_vertex:Xp,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Zp,shadowmap_vertex:Jp,shadowmask_pars_fragment:Qp,skinbase_vertex:tm,skinning_pars_vertex:em,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:om,tonemapping_pars_fragment:am,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:hm,uv_pars_vertex:um,uv_vertex:dm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:_m,cube_vert:xm,cube_frag:ym,depth_vert:vm,depth_frag:Mm,distanceRGBA_vert:Sm,distanceRGBA_frag:bm,equirect_vert:Tm,equirect_frag:Em,linedashed_vert:wm,linedashed_frag:Am,meshbasic_vert:Rm,meshbasic_frag:Cm,meshlambert_vert:Pm,meshlambert_frag:Lm,meshmatcap_vert:Im,meshmatcap_frag:Dm,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:Fm,meshphong_frag:km,meshphysical_vert:Om,meshphysical_frag:Hm,meshtoon_vert:Bm,meshtoon_frag:zm,points_vert:Gm,points_frag:Wm,shadow_vert:Vm,shadow_frag:Xm,sprite_vert:qm,sprite_frag:Ym},pt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Nn={basic:{uniforms:nn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:nn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new wt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:nn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:nn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:nn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new wt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:nn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:nn([pt.points,pt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:nn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:nn([pt.common,pt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:nn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:nn([pt.sprite,pt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:nn([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:nn([pt.lights,pt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Nn.physical={uniforms:nn([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Pr={r:0,b:0,g:0};function Km(r,t,e,n,i,s,o){const a=new wt(0);let l=s===!0?0:1,c,d,h=null,u=0,f=null;function m(g,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),x=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===go)?(d===void 0&&(d=new ut(new yi(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:ws(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=le.getTransfer(y.colorSpace)!==xe,(h!==y||u!==y.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,h=y,u=y.version,f=r.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ut(new Qa(2,2),new Ln({name:"BackgroundMaterial",uniforms:ws(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=le.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB(Pr,Gh(r)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:m}}function jm(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null);let c=l,d=!1;function h(I,k,z,it,$){let Z=!1;if(o){const st=_(it,z,k);c!==st&&(c=st,f(c.object)),Z=p(I,it,z,$),Z&&x(I,it,z,$)}else{const st=k.wireframe===!0;(c.geometry!==it.id||c.program!==z.id||c.wireframe!==st)&&(c.geometry=it.id,c.program=z.id,c.wireframe=st,Z=!0)}$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,F(I,k,z,it),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function m(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,k,z){const it=z.wireframe===!0;let $=a[I.id];$===void 0&&($={},a[I.id]=$);let Z=$[k.id];Z===void 0&&(Z={},$[k.id]=Z);let st=Z[it];return st===void 0&&(st=g(u()),Z[it]=st),st}function g(I){const k=[],z=[],it=[];for(let $=0;$<i;$++)k[$]=0,z[$]=0,it[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:it,object:I,attributes:{},index:null}}function p(I,k,z,it){const $=c.attributes,Z=k.attributes;let st=0;const ct=z.getAttributes();for(const ot in ct)if(ct[ot].location>=0){const j=$[ot];let gt=Z[ot];if(gt===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(gt=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(gt=I.instanceColor)),j===void 0||j.attribute!==gt||gt&&j.data!==gt.data)return!0;st++}return c.attributesNum!==st||c.index!==it}function x(I,k,z,it){const $={},Z=k.attributes;let st=0;const ct=z.getAttributes();for(const ot in ct)if(ct[ot].location>=0){let j=Z[ot];j===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const gt={};gt.attribute=j,j&&j.data&&(gt.data=j.data),$[ot]=gt,st++}c.attributes=$,c.attributesNum=st,c.index=it}function y(){const I=c.newAttributes;for(let k=0,z=I.length;k<z;k++)I[k]=0}function S(I){A(I,0)}function A(I,k){const z=c.newAttributes,it=c.enabledAttributes,$=c.attributeDivisors;z[I]=1,it[I]===0&&(r.enableVertexAttribArray(I),it[I]=1),$[I]!==k&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),$[I]=k)}function w(){const I=c.newAttributes,k=c.enabledAttributes;for(let z=0,it=k.length;z<it;z++)k[z]!==I[z]&&(r.disableVertexAttribArray(z),k[z]=0)}function b(I,k,z,it,$,Z,st){st===!0?r.vertexAttribIPointer(I,k,z,$,Z):r.vertexAttribPointer(I,k,z,it,$,Z)}function F(I,k,z,it){if(n.isWebGL2===!1&&(I.isInstancedMesh||it.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const $=it.attributes,Z=z.getAttributes(),st=k.defaultAttributeValues;for(const ct in Z){const ot=Z[ct];if(ot.location>=0){let X=$[ct];if(X===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const j=X.normalized,gt=X.itemSize,At=e.get(X);if(At===void 0)continue;const Tt=At.buffer,Ft=At.type,Ht=At.bytesPerElement,Ut=n.isWebGL2===!0&&(Ft===r.INT||Ft===r.UNSIGNED_INT||X.gpuType===Th);if(X.isInterleavedBufferAttribute){const W=X.data,N=W.stride,Bt=X.offset;if(W.isInstancedInterleavedBuffer){for(let L=0;L<ot.locationSize;L++)A(ot.location+L,W.meshPerAttribute);I.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let L=0;L<ot.locationSize;L++)S(ot.location+L);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let L=0;L<ot.locationSize;L++)b(ot.location+L,gt/ot.locationSize,Ft,j,N*Ht,(Bt+gt/ot.locationSize*L)*Ht,Ut)}else{if(X.isInstancedBufferAttribute){for(let W=0;W<ot.locationSize;W++)A(ot.location+W,X.meshPerAttribute);I.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let W=0;W<ot.locationSize;W++)S(ot.location+W);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let W=0;W<ot.locationSize;W++)b(ot.location+W,gt/ot.locationSize,Ft,j,gt*Ht,gt/ot.locationSize*W*Ht,Ut)}}else if(st!==void 0){const j=st[ct];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(ot.location,j);break;case 3:r.vertexAttrib3fv(ot.location,j);break;case 4:r.vertexAttrib4fv(ot.location,j);break;default:r.vertexAttrib1fv(ot.location,j)}}}}w()}function M(){D();for(const I in a){const k=a[I];for(const z in k){const it=k[z];for(const $ in it)m(it[$].object),delete it[$];delete k[z]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const k=a[I.id];for(const z in k){const it=k[z];for(const $ in it)m(it[$].object),delete it[$];delete k[z]}delete a[I.id]}function U(I){for(const k in a){const z=a[k];if(z[I.id]===void 0)continue;const it=z[I.id];for(const $ in it)m(it[$].object),delete it[$];delete z[I.id]}}function D(){K(),d=!0,c!==l&&(c=l,f(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:D,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:S,disableUnusedAttributes:w}}function $m(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}function a(d,h){r.drawArrays(s,d,h),e.update(h,s,1)}function l(d,h,u){if(u===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,d,h,u),e.update(h,s,u)}function c(d,h,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u;m++)this.render(d[m],h[m]);else{f.multiDrawArraysWEBGL(s,d,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];e.update(m,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Zm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,S=o||t.has("OES_texture_float"),A=y&&S,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:w}}function Jm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Ni,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?d(null):c();else{const x=s?0:n,y=x*4;let S=p.clippingState||null;l.value=S,S=d(m,u,y,f);for(let A=0;A!==y;++A)S[A]=e[A];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,S=f;y!==_;++y,S+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Qm(r){let t=new WeakMap;function e(o,a){return a===Da?o.mapping=Ms:a===Ua&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Da||a===Ua)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uf(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class tl extends Wh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _s=4,uc=[.125,.215,.35,.446,.526,.582],Oi=20,Qo=new tl,dc=new wt;let ta=null,ea=0,na=0;const Fi=(1+Math.sqrt(5))/2,ls=1/Fi,fc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Fi,ls),new P(0,Fi,-ls),new P(ls,0,Fi),new P(-ls,0,Fi),new P(Fi,ls,0),new P(-Fi,ls,0)];class pc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:tr,format:hn,colorSpace:Ee,depthBuffer:!1},i=mc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t0(s)),this._blurMaterial=e0(s,t,e)}return i}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Qo)}_sceneToCubeUV(t,e,n,i){const a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(dc),d.toneMapping=mi,d.autoClear=!1;const f=new Me({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),m=new ut(new yi,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(dc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Lr(i,x*y,p>2?y:0,y,y),d.setRenderTarget(i),_&&d.render(m,a),d.render(t,a)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ms||t.mapping===Ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Qo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=fc[(i-1)%fc.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ut(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),_=s/m,g=isFinite(s)?1+Math.floor(d*_):Oi;g>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Oi}`);const p=[];let x=0;for(let b=0;b<Oi;++b){const F=b/_,M=Math.exp(-F*F/2);p.push(M),b===0?x+=M:b<g&&(x+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;const S=this._sizeLods[i],A=3*S*(i>y-_s?i-y+_s:0),w=4*(this._cubeSize-S);Lr(e,A,w,3*S,2*S),l.setRenderTarget(e),l.render(h,Qo)}}function t0(r){const t=[],e=[],n=[];let i=r;const s=r-_s+1+uc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-_s?l=uc[o-r+_s-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),y=new Float32Array(g*m*f),S=new Float32Array(p*m*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,F=w>2?0:-1,M=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];x.set(M,_*m*w),y.set(u,g*m*w);const T=[w,w,w,w,w,w];S.set(T,p*m*w)}const A=new Ne;A.setAttribute("position",new Pe(x,_)),A.setAttribute("uv",new Pe(y,g)),A.setAttribute("faceIndex",new Pe(S,p)),t.push(A),i>_s&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mc(r,t,e){const n=new Vi(r,t,e);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function e0(r,t,e){const n=new Float32Array(Oi),i=new P(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:el(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function gc(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function _c(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function n0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Da||l===Ua,d=l===Ms||l===Ss;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new pc(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&i(h)){e===null&&(e=new pc(r));const u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function i0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function s0(r,t,e,n){const i={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)t.update(u[m],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],r.ARRAY_BUFFER)}}function c(h){const u=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,S=x.length;y<S;y+=3){const A=x[y+0],w=x[y+1],b=x[y+2];u.push(A,w,w,b,b,A)}}else if(m!==void 0){const x=m.array;_=m.version;for(let y=0,S=x.length/3-1;y<S;y+=3){const A=y+0,w=y+1,b=y+2;u.push(A,w,w,b,b,A)}}else return;const g=new(Uh(u)?zh:Bh)(u,1);g.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,g)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function r0(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function d(f,m){r.drawElements(s,m,a,f*l),e.update(m,s,1)}function h(f,m,_){if(_===0)return;let g,p;if(i)g=r,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,a,f*l,_),e.update(m,s,_)}function u(f,m,_){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(f[p]/l,m[p]);else{g.multiDrawElementsWEBGL(s,m,0,a,f,0,_);let p=0;for(let x=0;x<_;x++)p+=m[x];e.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=u}function o0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function a0(r,t){return r[0]-t[0]}function l0(r,t){return Math.abs(t[1])-Math.abs(r[1])}function c0(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new pe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=m!==void 0?m.length:0;let g=s.get(d);if(g===void 0||g.count!==_){let k=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",k)};var f=k;g!==void 0&&g.texture.dispose();const y=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let M=0;y===!0&&(M=1),S===!0&&(M=2),A===!0&&(M=3);let T=d.attributes.position.count*M,U=1;T>t.maxTextureSize&&(U=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const D=new Float32Array(T*U*4*_),K=new kh(D,T,U,_);K.type=Yn,K.needsUpdate=!0;const I=M*4;for(let z=0;z<_;z++){const it=w[z],$=b[z],Z=F[z],st=T*U*4*z;for(let ct=0;ct<it.count;ct++){const ot=ct*I;y===!0&&(o.fromBufferAttribute(it,ct),D[st+ot+0]=o.x,D[st+ot+1]=o.y,D[st+ot+2]=o.z,D[st+ot+3]=0),S===!0&&(o.fromBufferAttribute($,ct),D[st+ot+4]=o.x,D[st+ot+5]=o.y,D[st+ot+6]=o.z,D[st+ot+7]=0),A===!0&&(o.fromBufferAttribute(Z,ct),D[st+ot+8]=o.x,D[st+ot+9]=o.y,D[st+ot+10]=o.z,D[st+ot+11]=Z.itemSize===4?o.w:1)}}g={count:_,texture:K,size:new Wt(T,U)},s.set(d,g),d.addEventListener("dispose",k)}let p=0;for(let y=0;y<u.length;y++)p+=u[y];const x=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const m=u===void 0?0:u.length;let _=n[d.id];if(_===void 0||_.length!==m){_=[];for(let S=0;S<m;S++)_[S]=[S,0];n[d.id]=_}for(let S=0;S<m;S++){const A=_[S];A[0]=S,A[1]=u[S]}_.sort(l0);for(let S=0;S<8;S++)S<m&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(a0);const g=d.morphAttributes.position,p=d.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const A=a[S],w=A[0],b=A[1];w!==Number.MAX_SAFE_INTEGER&&b?(g&&d.getAttribute("morphTarget"+S)!==g[w]&&d.setAttribute("morphTarget"+S,g[w]),p&&d.getAttribute("morphNormal"+S)!==p[w]&&d.setAttribute("morphNormal"+S,p[w]),i[S]=b,x+=b):(g&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),p&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),i[S]=0)}const y=d.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function h0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class qh extends He{constructor(t,e,n,i,s,o,a,l,c,d){if(d=d!==void 0?d:zi,d!==zi&&d!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===zi&&(n=ui),n===void 0&&d===bs&&(n=Bi),super(null,i,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yh=new He,Kh=new qh(1,1);Kh.compareFunction=Dh;const jh=new kh,$h=new Yd,Zh=new Vh,xc=[],yc=[],vc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function Ps(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=xc[i];if(s===void 0&&(s=new Float32Array(i),xc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ze(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ge(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function vo(r,t){let e=yc[t];e===void 0&&(e=new Int32Array(t),yc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function u0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function d0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2fv(this.addr,t),Ge(e,t)}}function f0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;r.uniform3fv(this.addr,t),Ge(e,t)}}function p0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4fv(this.addr,t),Ge(e,t)}}function m0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;Sc.set(n),r.uniformMatrix2fv(this.addr,!1,Sc),Ge(e,n)}}function g0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;Mc.set(n),r.uniformMatrix3fv(this.addr,!1,Mc),Ge(e,n)}}function _0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,n))return;vc.set(n),r.uniformMatrix4fv(this.addr,!1,vc),Ge(e,n)}}function x0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2iv(this.addr,t),Ge(e,t)}}function v0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3iv(this.addr,t),Ge(e,t)}}function M0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4iv(this.addr,t),Ge(e,t)}}function S0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function b0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2uiv(this.addr,t),Ge(e,t)}}function T0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3uiv(this.addr,t),Ge(e,t)}}function E0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4uiv(this.addr,t),Ge(e,t)}}function w0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Kh:Yh;e.setTexture2D(t||s,i)}function A0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||$h,i)}function R0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Zh,i)}function C0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jh,i)}function P0(r){switch(r){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return v0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return b0;case 36295:return T0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function L0(r,t){r.uniform1fv(this.addr,t)}function I0(r,t){const e=Ps(t,this.size,2);r.uniform2fv(this.addr,e)}function D0(r,t){const e=Ps(t,this.size,3);r.uniform3fv(this.addr,e)}function U0(r,t){const e=Ps(t,this.size,4);r.uniform4fv(this.addr,e)}function N0(r,t){const e=Ps(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function F0(r,t){const e=Ps(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function k0(r,t){const e=Ps(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function O0(r,t){r.uniform1iv(this.addr,t)}function H0(r,t){r.uniform2iv(this.addr,t)}function B0(r,t){r.uniform3iv(this.addr,t)}function z0(r,t){r.uniform4iv(this.addr,t)}function G0(r,t){r.uniform1uiv(this.addr,t)}function W0(r,t){r.uniform2uiv(this.addr,t)}function V0(r,t){r.uniform3uiv(this.addr,t)}function X0(r,t){r.uniform4uiv(this.addr,t)}function q0(r,t,e){const n=this.cache,i=t.length,s=vo(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Yh,s[o])}function Y0(r,t,e){const n=this.cache,i=t.length,s=vo(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||$h,s[o])}function K0(r,t,e){const n=this.cache,i=t.length,s=vo(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Zh,s[o])}function j0(r,t,e){const n=this.cache,i=t.length,s=vo(e,i);ze(n,s)||(r.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||jh,s[o])}function $0(r){switch(r){case 5126:return L0;case 35664:return I0;case 35665:return D0;case 35666:return U0;case 35674:return N0;case 35675:return F0;case 35676:return k0;case 5124:case 35670:return O0;case 35667:case 35671:return H0;case 35668:case 35672:return B0;case 35669:case 35673:return z0;case 5125:return G0;case 36294:return W0;case 36295:return V0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return j0}}class Z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}}class J0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$0(e.type)}}class Q0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function bc(r,t){r.seq.push(t),r.map[t.id]=t}function tg(r,t,e){const n=r.name,i=n.length;for(ia.lastIndex=0;;){const s=ia.exec(n),o=ia.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){bc(e,c===void 0?new Z0(a,r,t):new J0(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new Q0(a),bc(e,h)),e=h}}}class to{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);tg(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Tc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const eg=37297;let ng=0;function ig(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function sg(r){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(r);let n;switch(t===e?n="":t===lo&&e===ao?n="LinearDisplayP3ToLinearSRGB":t===ao&&e===lo&&(n="LinearSRGBToLinearDisplayP3"),r){case Ee:case _o:return[n,"LinearTransferOETF"];case re:case $a:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ec(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ig(r.getShaderSource(t),o)}else return i}function rg(r,t){const e=sg(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function og(r,t){let e;switch(t){case Mh:e="Linear";break;case ed:e="Reinhard";break;case nd:e="OptimizedCineon";break;case id:e="ACESFilmic";break;case rd:e="AgX";break;case sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ag(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function lg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function cg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function xs(r){return r!==""}function wc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ac(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(r){return r.replace(ug,fg)}const dg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fg(r,t){let e=$t[t];if(e===void 0){const n=dg.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(r){return r.replace(pg,mg)}function mg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Cu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function _g(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ms:case Ss:t="ENVMAP_TYPE_CUBE";break;case go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function yg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ya:t="ENVMAP_BLENDING_MULTIPLY";break;case Qu:t="ENVMAP_BLENDING_MIX";break;case td:t="ENVMAP_BLENDING_ADD";break}return t}function vg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Mg(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gg(e),c=_g(e),d=xg(e),h=yg(e),u=vg(e),f=e.isWebGL2?"":ag(e),m=lg(e),_=cg(s),g=i.createProgram();let p,x,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xs).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xs).join(`
`),x.length>0&&(x+=`
`)):(p=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),x=[f,Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?$t.tonemapping_pars_fragment:"",e.toneMapping!==mi?og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,rg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),o=Ba(o),o=wc(o,e),o=Ac(o,e),a=Ba(a),a=wc(a,e),a=Ac(a,e),o=Rc(o),a=Rc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=y+p+o,A=y+x+a,w=Tc(i,i.VERTEX_SHADER,S),b=Tc(i,i.FRAGMENT_SHADER,A);i.attachShader(g,w),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function F(D){if(r.debug.checkShaderErrors){const K=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(w).trim(),k=i.getShaderInfoLog(b).trim();let z=!0,it=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,b);else{const $=Ec(i,w,"vertex"),Z=Ec(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+$+`
`+Z)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(I===""||k==="")&&(it=!1);it&&(D.diagnostics={runnable:z,programLog:K,vertexShader:{log:I,prefix:p},fragmentShader:{log:k,prefix:x}})}i.deleteShader(w),i.deleteShader(b),M=new to(i,g),T=hg(i,g)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(g,eg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ng++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=b,this}let Sg=0;class bg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tg(t),e.set(t,n)),n}}class Tg{constructor(t){this.id=Sg++,this.code=t,this.usedTimes=0}}function Eg(r,t,e,n,i,s,o){const a=new Oh,l=new bg,c=[],d=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function g(M,T,U,D,K){const I=D.fog,k=K.geometry,z=M.isMeshStandardMaterial?D.environment:null,it=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),$=it&&it.mapping===go?it.image.height:null,Z=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ct=st!==void 0?st.length:0;let ot=0;k.morphAttributes.position!==void 0&&(ot=1),k.morphAttributes.normal!==void 0&&(ot=2),k.morphAttributes.color!==void 0&&(ot=3);let X,j,gt,At;if(Z){const Et=Nn[Z];X=Et.vertexShader,j=Et.fragmentShader}else X=M.vertexShader,j=M.fragmentShader,l.update(M),gt=l.getVertexShaderID(M),At=l.getFragmentShaderID(M);const Tt=r.getRenderTarget(),Ft=K.isInstancedMesh===!0,Ht=K.isBatchedMesh===!0,Ut=!!M.map,W=!!M.matcap,N=!!it,Bt=!!M.aoMap,L=!!M.lightMap,_t=!!M.bumpMap,dt=!!M.normalMap,Zt=!!M.displacementMap,Lt=!!M.emissiveMap,R=!!M.metalnessMap,v=!!M.roughnessMap,H=M.anisotropy>0,lt=M.clearcoat>0,et=M.iridescence>0,rt=M.sheen>0,vt=M.transmission>0,ht=H&&!!M.anisotropyMap,xt=lt&&!!M.clearcoatMap,It=lt&&!!M.clearcoatNormalMap,zt=lt&&!!M.clearcoatRoughnessMap,at=et&&!!M.iridescenceMap,ae=et&&!!M.iridescenceThicknessMap,Xt=rt&&!!M.sheenColorMap,Nt=rt&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,mt=!!M.specularColorMap,Dt=!!M.specularIntensityMap,Kt=vt&&!!M.transmissionMap,q=vt&&!!M.thicknessMap,tt=!!M.gradientMap,B=!!M.alphaMap,C=M.alphaTest>0,nt=!!M.alphaHash,J=!!M.extensions,Mt=!!k.attributes.uv1,bt=!!k.attributes.uv2,ne=!!k.attributes.uv3;let yt=mi;return M.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(yt=r.toneMapping),{isWebGL2:d,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:j,defines:M.defines,customVertexShaderID:gt,customFragmentShaderID:At,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ht,instancing:Ft,instancingColor:Ft&&K.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Tt===null?r.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ee,map:Ut,matcap:W,envMap:N,envMapMode:N&&it.mapping,envMapCubeUVHeight:$,aoMap:Bt,lightMap:L,bumpMap:_t,normalMap:dt,displacementMap:u&&Zt,emissiveMap:Lt,normalMapObjectSpace:dt&&M.normalMapType===yd,normalMapTangentSpace:dt&&M.normalMapType===ja,metalnessMap:R,roughnessMap:v,anisotropy:H,anisotropyMap:ht,clearcoat:lt,clearcoatMap:xt,clearcoatNormalMap:It,clearcoatRoughnessMap:zt,iridescence:et,iridescenceMap:at,iridescenceThicknessMap:ae,sheen:rt,sheenColorMap:Xt,sheenRoughnessMap:Nt,specularMap:Rt,specularColorMap:mt,specularIntensityMap:Dt,transmission:vt,transmissionMap:Kt,thicknessMap:q,gradientMap:tt,opaque:M.transparent===!1&&M.blending===pi,alphaMap:B,alphaTest:C,alphaHash:nt,combine:M.combine,mapUv:Ut&&_(M.map.channel),aoMapUv:Bt&&_(M.aoMap.channel),lightMapUv:L&&_(M.lightMap.channel),bumpMapUv:_t&&_(M.bumpMap.channel),normalMapUv:dt&&_(M.normalMap.channel),displacementMapUv:Zt&&_(M.displacementMap.channel),emissiveMapUv:Lt&&_(M.emissiveMap.channel),metalnessMapUv:R&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:ht&&_(M.anisotropyMap.channel),clearcoatMapUv:xt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(M.sheenRoughnessMap.channel),specularMapUv:Rt&&_(M.specularMap.channel),specularColorMapUv:mt&&_(M.specularColorMap.channel),specularIntensityMapUv:Dt&&_(M.specularIntensityMap.channel),transmissionMapUv:Kt&&_(M.transmissionMap.channel),thicknessMapUv:q&&_(M.thicknessMap.channel),alphaMapUv:B&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(dt||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Mt,vertexUv2s:bt,vertexUv3s:ne,pointsUvs:K.isPoints===!0&&!!k.attributes.uv&&(Ut||B),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:ot,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:yt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ut&&M.map.isVideoTexture===!0&&le.getTransfer(M.map.colorSpace)===xe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===De,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:J&&M.extensions.derivatives===!0,extensionFragDepth:J&&M.extensions.fragDepth===!0,extensionDrawBuffers:J&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:J&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:J&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)T.push(U),T.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(x(T,M),y(T,M),T.push(r.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const T=m[M.type];let U;if(T){const D=Nn[T];U=af.clone(D.uniforms)}else U=M.uniforms;return U}function A(M,T){let U;for(let D=0,K=c.length;D<K;D++){const I=c[D];if(I.cacheKey===T){U=I,++U.usedTimes;break}}return U===void 0&&(U=new Mg(r,T,M,s),c.push(U)),U}function w(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:F}}function wg(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Ag(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Pc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,u,f,m,_,g){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},r[t]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,u,f,m,_,g){const p=o(h,u,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,u,f,m,_,g){const p=o(h,u,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,u){e.length>1&&e.sort(h||Ag),n.length>1&&n.sort(u||Pc),i.length>1&&i.sort(u||Pc)}function d(){for(let h=t,u=r.length;h<u;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:d,sort:c}}function Rg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Lc,r.set(n,[o])):i>=s.length?(o=new Lc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Cg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new wt};break;case"SpotLight":e={position:new P,direction:new P,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function Pg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Lg=0;function Ig(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Dg(r,t){const e=new Cg,n=Pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new P);const s=new P,o=new Qt,a=new Qt;function l(d,h){let u=0,f=0,m=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,g=0,p=0,x=0,y=0,S=0,A=0,w=0,b=0,F=0,M=0;d.sort(Ig);const T=h===!0?Math.PI:1;for(let D=0,K=d.length;D<K;D++){const I=d[D],k=I.color,z=I.intensity,it=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=k.r*z*T,f+=k.g*z*T,m+=k.b*z*T;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],z);M++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const st=I.shadow,ct=n.get(I);ct.shadowBias=st.bias,ct.shadowNormalBias=st.normalBias,ct.shadowRadius=st.radius,ct.shadowMapSize=st.mapSize,i.directionalShadow[_]=ct,i.directionalShadowMap[_]=$,i.directionalShadowMatrix[_]=I.shadow.matrix,S++}i.directional[_]=Z,_++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(k).multiplyScalar(z*T),Z.distance=it,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[p]=Z;const st=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,st.updateMatrices(I),I.castShadow&&F++),i.spotLightMatrix[p]=st.matrix,I.castShadow){const ct=n.get(I);ct.shadowBias=st.bias,ct.shadowNormalBias=st.normalBias,ct.shadowRadius=st.radius,ct.shadowMapSize=st.mapSize,i.spotShadow[p]=ct,i.spotShadowMap[p]=$,w++}p++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(k).multiplyScalar(z),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[x]=Z,x++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*T),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const st=I.shadow,ct=n.get(I);ct.shadowBias=st.bias,ct.shadowNormalBias=st.normalBias,ct.shadowRadius=st.radius,ct.shadowMapSize=st.mapSize,ct.shadowCameraNear=st.camera.near,ct.shadowCameraFar=st.camera.far,i.pointShadow[g]=ct,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=I.shadow.matrix,A++}i.point[g]=Z,g++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(z*T),Z.groundColor.copy(I.groundColor).multiplyScalar(z*T),i.hemi[y]=Z,y++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=m;const U=i.hash;(U.directionalLength!==_||U.pointLength!==g||U.spotLength!==p||U.rectAreaLength!==x||U.hemiLength!==y||U.numDirectionalShadows!==S||U.numPointShadows!==A||U.numSpotShadows!==w||U.numSpotMaps!==b||U.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=w+b-F,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=M,U.directionalLength=_,U.pointLength=g,U.spotLength=p,U.rectAreaLength=x,U.hemiLength=y,U.numDirectionalShadows=S,U.numPointShadows=A,U.numSpotShadows=w,U.numSpotMaps=b,U.numLightProbes=M,i.version=Lg++)}function c(d,h){let u=0,f=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let x=0,y=d.length;x<y;x++){const S=d[x];if(S.isDirectionalLight){const A=i.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(S.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const A=i.hemi[g];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function Ic(r,t){const e=new Dg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ug(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Ic(r,t),e.set(s,[l])):o>=a.length?(l=new Ic(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ng extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fg extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
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
}`;function Hg(r,t,e){let n=new Ja;const i=new Wt,s=new Wt,o=new pe,a=new Ng({depthPacking:xd}),l=new Fg,c={},d=e.maxTextureSize,h={[Pn]:rn,[rn]:Pn,[De]:De},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:kg,fragmentShader:Og}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ne;m.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ut(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let p=this.type;this.render=function(w,b,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),T=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),D=r.state;D.setBlending(fi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const K=p!==qn&&this.type===qn,I=p===qn&&this.type!==qn;for(let k=0,z=w.length;k<z;k++){const it=w[k],$=it.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const Z=$.getFrameExtents();if(i.multiply(Z),s.copy($.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/Z.x),i.x=s.x*Z.x,$.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/Z.y),i.y=s.y*Z.y,$.mapSize.y=s.y)),$.map===null||K===!0||I===!0){const ct=this.type!==qn?{minFilter:Xe,magFilter:Xe}:{};$.map!==null&&$.map.dispose(),$.map=new Vi(i.x,i.y,ct),$.map.texture.name=it.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();const st=$.getViewportCount();for(let ct=0;ct<st;ct++){const ot=$.getViewport(ct);o.set(s.x*ot.x,s.y*ot.y,s.x*ot.z,s.y*ot.w),D.viewport(o),$.updateMatrices(it,ct),n=$.getFrustum(),S(b,F,$.camera,it,this.type)}$.isPointLightShadow!==!0&&this.type===qn&&x($,F),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,T,U)};function x(w,b){const F=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vi(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,F,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,F,f,_,null)}function y(w,b,F,M){let T=null;const U=F.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)T=U;else if(T=F.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=T.uuid,K=b.uuid;let I=c[D];I===void 0&&(I={},c[D]=I);let k=I[K];k===void 0&&(k=T.clone(),I[K]=k,b.addEventListener("dispose",A)),T=k}if(T.visible=b.visible,T.wireframe=b.wireframe,M===qn?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:h[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const D=r.properties.get(T);D.light=F}return T}function S(w,b,F,M,T){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===qn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);const K=t.update(w),I=w.material;if(Array.isArray(I)){const k=K.groups;for(let z=0,it=k.length;z<it;z++){const $=k[z],Z=I[$.materialIndex];if(Z&&Z.visible){const st=y(w,Z,M,T);w.onBeforeShadow(r,w,b,F,K,st,$),r.renderBufferDirect(F,null,K,st,w,$),w.onAfterShadow(r,w,b,F,K,st,$)}}}else if(I.visible){const k=y(w,I,M,T);w.onBeforeShadow(r,w,b,F,K,k,null),r.renderBufferDirect(F,null,K,k,w,null),w.onAfterShadow(r,w,b,F,K,k,null)}}const D=w.children;for(let K=0,I=D.length;K<I;K++)S(D[K],b,F,M,T)}function A(w){w.target.removeEventListener("dispose",A);for(const F in c){const M=c[F],T=w.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Bg(r,t,e){const n=e.isWebGL2;function i(){let C=!1;const nt=new pe;let J=null;const Mt=new pe(0,0,0,0);return{setMask:function(bt){J!==bt&&!C&&(r.colorMask(bt,bt,bt,bt),J=bt)},setLocked:function(bt){C=bt},setClear:function(bt,ne,yt,Q,Et){Et===!0&&(bt*=Q,ne*=Q,yt*=Q),nt.set(bt,ne,yt,Q),Mt.equals(nt)===!1&&(r.clearColor(bt,ne,yt,Q),Mt.copy(nt))},reset:function(){C=!1,J=null,Mt.set(-1,0,0,0)}}}function s(){let C=!1,nt=null,J=null,Mt=null;return{setTest:function(bt){bt?Ht(r.DEPTH_TEST):Ut(r.DEPTH_TEST)},setMask:function(bt){nt!==bt&&!C&&(r.depthMask(bt),nt=bt)},setFunc:function(bt){if(J!==bt){switch(bt){case qu:r.depthFunc(r.NEVER);break;case Yu:r.depthFunc(r.ALWAYS);break;case Ku:r.depthFunc(r.LESS);break;case so:r.depthFunc(r.LEQUAL);break;case ju:r.depthFunc(r.EQUAL);break;case $u:r.depthFunc(r.GEQUAL);break;case Zu:r.depthFunc(r.GREATER);break;case Ju:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=bt}},setLocked:function(bt){C=bt},setClear:function(bt){Mt!==bt&&(r.clearDepth(bt),Mt=bt)},reset:function(){C=!1,nt=null,J=null,Mt=null}}}function o(){let C=!1,nt=null,J=null,Mt=null,bt=null,ne=null,yt=null,Q=null,Et=null;return{setTest:function(ft){C||(ft?Ht(r.STENCIL_TEST):Ut(r.STENCIL_TEST))},setMask:function(ft){nt!==ft&&!C&&(r.stencilMask(ft),nt=ft)},setFunc:function(ft,Ct,oe){(J!==ft||Mt!==Ct||bt!==oe)&&(r.stencilFunc(ft,Ct,oe),J=ft,Mt=Ct,bt=oe)},setOp:function(ft,Ct,oe){(ne!==ft||yt!==Ct||Q!==oe)&&(r.stencilOp(ft,Ct,oe),ne=ft,yt=Ct,Q=oe)},setLocked:function(ft){C=ft},setClear:function(ft){Et!==ft&&(r.clearStencil(ft),Et=ft)},reset:function(){C=!1,nt=null,J=null,Mt=null,bt=null,ne=null,yt=null,Q=null,Et=null}}}const a=new i,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let u={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,y=null,S=null,A=null,w=null,b=null,F=null,M=new wt(0,0,0),T=0,U=!1,D=null,K=null,I=null,k=null,z=null;const it=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const st=r.getParameter(r.VERSION);st.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(st)[1]),$=Z>=1):st.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),$=Z>=2);let ct=null,ot={};const X=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),gt=new pe().fromArray(X),At=new pe().fromArray(j);function Tt(C,nt,J,Mt){const bt=new Uint8Array(4),ne=r.createTexture();r.bindTexture(C,ne),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<J;yt++)n&&(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)?r.texImage3D(nt,0,r.RGBA,1,1,Mt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(nt+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return ne}const Ft={};Ft[r.TEXTURE_2D]=Tt(r.TEXTURE_2D,r.TEXTURE_2D,1),Ft[r.TEXTURE_CUBE_MAP]=Tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ft[r.TEXTURE_2D_ARRAY]=Tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ft[r.TEXTURE_3D]=Tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ht(r.DEPTH_TEST),l.setFunc(so),Lt(!1),R(dl),Ht(r.CULL_FACE),dt(fi);function Ht(C){u[C]!==!0&&(r.enable(C),u[C]=!0)}function Ut(C){u[C]!==!1&&(r.disable(C),u[C]=!1)}function W(C,nt){return f[C]!==nt?(r.bindFramebuffer(C,nt),f[C]=nt,n&&(C===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=nt),C===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=nt)),!0):!1}function N(C,nt){let J=_,Mt=!1;if(C)if(J=m.get(nt),J===void 0&&(J=[],m.set(nt,J)),C.isWebGLMultipleRenderTargets){const bt=C.texture;if(J.length!==bt.length||J[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,yt=bt.length;ne<yt;ne++)J[ne]=r.COLOR_ATTACHMENT0+ne;J.length=bt.length,Mt=!0}}else J[0]!==r.COLOR_ATTACHMENT0&&(J[0]=r.COLOR_ATTACHMENT0,Mt=!0);else J[0]!==r.BACK&&(J[0]=r.BACK,Mt=!0);Mt&&(e.isWebGL2?r.drawBuffers(J):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Bt(C){return g!==C?(r.useProgram(C),g=C,!0):!1}const L={[ki]:r.FUNC_ADD,[Lu]:r.FUNC_SUBTRACT,[Iu]:r.FUNC_REVERSE_SUBTRACT};if(n)L[ml]=r.MIN,L[gl]=r.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(L[ml]=C.MIN_EXT,L[gl]=C.MAX_EXT)}const _t={[Du]:r.ZERO,[Uu]:r.ONE,[Nu]:r.SRC_COLOR,[La]:r.SRC_ALPHA,[zu]:r.SRC_ALPHA_SATURATE,[Hu]:r.DST_COLOR,[ku]:r.DST_ALPHA,[Fu]:r.ONE_MINUS_SRC_COLOR,[Ia]:r.ONE_MINUS_SRC_ALPHA,[Bu]:r.ONE_MINUS_DST_COLOR,[Ou]:r.ONE_MINUS_DST_ALPHA,[Gu]:r.CONSTANT_COLOR,[Wu]:r.ONE_MINUS_CONSTANT_COLOR,[Vu]:r.CONSTANT_ALPHA,[Xu]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(C,nt,J,Mt,bt,ne,yt,Q,Et,ft){if(C===fi){p===!0&&(Ut(r.BLEND),p=!1);return}if(p===!1&&(Ht(r.BLEND),p=!0),C!==Pu){if(C!==x||ft!==U){if((y!==ki||w!==ki)&&(r.blendEquation(r.FUNC_ADD),y=ki,w=ki),ft)switch(C){case pi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case an:r.blendFunc(r.ONE,r.ONE);break;case fl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case pi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case an:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case fl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,A=null,b=null,F=null,M.set(0,0,0),T=0,x=C,U=ft}return}bt=bt||nt,ne=ne||J,yt=yt||Mt,(nt!==y||bt!==w)&&(r.blendEquationSeparate(L[nt],L[bt]),y=nt,w=bt),(J!==S||Mt!==A||ne!==b||yt!==F)&&(r.blendFuncSeparate(_t[J],_t[Mt],_t[ne],_t[yt]),S=J,A=Mt,b=ne,F=yt),(Q.equals(M)===!1||Et!==T)&&(r.blendColor(Q.r,Q.g,Q.b,Et),M.copy(Q),T=Et),x=C,U=!1}function Zt(C,nt){C.side===De?Ut(r.CULL_FACE):Ht(r.CULL_FACE);let J=C.side===rn;nt&&(J=!J),Lt(J),C.blending===pi&&C.transparent===!1?dt(fi):dt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const Mt=C.stencilWrite;c.setTest(Mt),Mt&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),H(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ht(r.SAMPLE_ALPHA_TO_COVERAGE):Ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(C){D!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),D=C)}function R(C){C!==Au?(Ht(r.CULL_FACE),C!==K&&(C===dl?r.cullFace(r.BACK):C===Ru?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ut(r.CULL_FACE),K=C}function v(C){C!==I&&($&&r.lineWidth(C),I=C)}function H(C,nt,J){C?(Ht(r.POLYGON_OFFSET_FILL),(k!==nt||z!==J)&&(r.polygonOffset(nt,J),k=nt,z=J)):Ut(r.POLYGON_OFFSET_FILL)}function lt(C){C?Ht(r.SCISSOR_TEST):Ut(r.SCISSOR_TEST)}function et(C){C===void 0&&(C=r.TEXTURE0+it-1),ct!==C&&(r.activeTexture(C),ct=C)}function rt(C,nt,J){J===void 0&&(ct===null?J=r.TEXTURE0+it-1:J=ct);let Mt=ot[J];Mt===void 0&&(Mt={type:void 0,texture:void 0},ot[J]=Mt),(Mt.type!==C||Mt.texture!==nt)&&(ct!==J&&(r.activeTexture(J),ct=J),r.bindTexture(C,nt||Ft[C]),Mt.type=C,Mt.texture=nt)}function vt(){const C=ot[ct];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ht(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function zt(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Nt(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Rt(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(C){gt.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),gt.copy(C))}function Kt(C){At.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),At.copy(C))}function q(C,nt){let J=h.get(nt);J===void 0&&(J=new WeakMap,h.set(nt,J));let Mt=J.get(C);Mt===void 0&&(Mt=r.getUniformBlockIndex(nt,C.name),J.set(C,Mt))}function tt(C,nt){const Mt=h.get(nt).get(C);d.get(nt)!==Mt&&(r.uniformBlockBinding(nt,Mt,C.__bindingPointIndex),d.set(nt,Mt))}function B(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ct=null,ot={},f={},m=new WeakMap,_=[],g=null,p=!1,x=null,y=null,S=null,A=null,w=null,b=null,F=null,M=new wt(0,0,0),T=0,U=!1,D=null,K=null,I=null,k=null,z=null,gt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ht,disable:Ut,bindFramebuffer:W,drawBuffers:N,useProgram:Bt,setBlending:dt,setMaterial:Zt,setFlipSided:Lt,setCullFace:R,setLineWidth:v,setPolygonOffset:H,setScissorTest:lt,activeTexture:et,bindTexture:rt,unbindTexture:vt,compressedTexImage2D:ht,compressedTexImage3D:xt,texImage2D:Rt,texImage3D:mt,updateUBOMapping:q,uniformBlockBinding:tt,texStorage2D:Xt,texStorage3D:Nt,texSubImage2D:It,texSubImage3D:zt,compressedTexSubImage2D:at,compressedTexSubImage3D:ae,scissor:Dt,viewport:Kt,reset:B}}function zg(r,t,e,n,i,s,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,v){return f?new OffscreenCanvas(R,v):nr("canvas")}function _(R,v,H,lt){let et=1;if((R.width>lt||R.height>lt)&&(et=lt/Math.max(R.width,R.height)),et<1||v===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const rt=v?ho:Math.floor,vt=rt(et*R.width),ht=rt(et*R.height);h===void 0&&(h=m(vt,ht));const xt=H?m(vt,ht):h;return xt.width=vt,xt.height=ht,xt.getContext("2d").drawImage(R,0,0,vt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+vt+"x"+ht+")."),xt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return Ha(R.width)&&Ha(R.height)}function p(R){return a?!1:R.wrapS!==Ue||R.wrapT!==Ue||R.minFilter!==Xe&&R.minFilter!==ln}function x(R,v){return R.generateMipmaps&&v&&R.minFilter!==Xe&&R.minFilter!==ln}function y(R){r.generateMipmap(R)}function S(R,v,H,lt,et=!1){if(a===!1)return v;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt=v;if(v===r.RED&&(H===r.FLOAT&&(rt=r.R32F),H===r.HALF_FLOAT&&(rt=r.R16F),H===r.UNSIGNED_BYTE&&(rt=r.R8)),v===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(rt=r.R8UI),H===r.UNSIGNED_SHORT&&(rt=r.R16UI),H===r.UNSIGNED_INT&&(rt=r.R32UI),H===r.BYTE&&(rt=r.R8I),H===r.SHORT&&(rt=r.R16I),H===r.INT&&(rt=r.R32I)),v===r.RG&&(H===r.FLOAT&&(rt=r.RG32F),H===r.HALF_FLOAT&&(rt=r.RG16F),H===r.UNSIGNED_BYTE&&(rt=r.RG8)),v===r.RGBA){const vt=et?oo:le.getTransfer(lt);H===r.FLOAT&&(rt=r.RGBA32F),H===r.HALF_FLOAT&&(rt=r.RGBA16F),H===r.UNSIGNED_BYTE&&(rt=vt===xe?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(rt=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(rt=r.RGB5_A1)}return(rt===r.R16F||rt===r.R32F||rt===r.RG16F||rt===r.RG32F||rt===r.RGBA16F||rt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function A(R,v,H){return x(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==Xe&&R.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function w(R){return R===Xe||R===Na||R===Qr?r.NEAREST:r.LINEAR}function b(R){const v=R.target;v.removeEventListener("dispose",b),M(v),v.isVideoTexture&&d.delete(v)}function F(R){const v=R.target;v.removeEventListener("dispose",F),U(v)}function M(R){const v=n.get(R);if(v.__webglInit===void 0)return;const H=R.source,lt=u.get(H);if(lt){const et=lt[v.__cacheKey];et.usedTimes--,et.usedTimes===0&&T(R),Object.keys(lt).length===0&&u.delete(H)}n.remove(R)}function T(R){const v=n.get(R);r.deleteTexture(v.__webglTexture);const H=R.source,lt=u.get(H);delete lt[v.__cacheKey],o.memory.textures--}function U(R){const v=R.texture,H=n.get(R),lt=n.get(v);if(lt.__webglTexture!==void 0&&(r.deleteTexture(lt.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(H.__webglFramebuffer[et]))for(let rt=0;rt<H.__webglFramebuffer[et].length;rt++)r.deleteFramebuffer(H.__webglFramebuffer[et][rt]);else r.deleteFramebuffer(H.__webglFramebuffer[et]);H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[et])}else{if(Array.isArray(H.__webglFramebuffer))for(let et=0;et<H.__webglFramebuffer.length;et++)r.deleteFramebuffer(H.__webglFramebuffer[et]);else r.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let et=0;et<H.__webglColorRenderbuffer.length;et++)H.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[et]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let et=0,rt=v.length;et<rt;et++){const vt=n.get(v[et]);vt.__webglTexture&&(r.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(v[et])}n.remove(v),n.remove(R)}let D=0;function K(){D=0}function I(){const R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function k(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function z(R,v){const H=n.get(R);if(R.isVideoTexture&&Zt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const lt=R.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(H,R,v);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+v)}function it(R,v){const H=n.get(R);if(R.version>0&&H.__version!==R.version){gt(H,R,v);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+v)}function $(R,v){const H=n.get(R);if(R.version>0&&H.__version!==R.version){gt(H,R,v);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+v)}function Z(R,v){const H=n.get(R);if(R.version>0&&H.__version!==R.version){At(H,R,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+v)}const st={[un]:r.REPEAT,[Ue]:r.CLAMP_TO_EDGE,[ro]:r.MIRRORED_REPEAT},ct={[Xe]:r.NEAREST,[Na]:r.NEAREST_MIPMAP_NEAREST,[Qr]:r.NEAREST_MIPMAP_LINEAR,[ln]:r.LINEAR,[bh]:r.LINEAR_MIPMAP_NEAREST,[Wi]:r.LINEAR_MIPMAP_LINEAR},ot={[vd]:r.NEVER,[wd]:r.ALWAYS,[Md]:r.LESS,[Dh]:r.LEQUAL,[Sd]:r.EQUAL,[Ed]:r.GEQUAL,[bd]:r.GREATER,[Td]:r.NOTEQUAL};function X(R,v,H){if(H?(r.texParameteri(R,r.TEXTURE_WRAP_S,st[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,st[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,st[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ct[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ct[v.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(v.wrapS!==Ue||v.wrapT!==Ue)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,w(v.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Xe&&v.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ot[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const lt=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Xe||v.minFilter!==Qr&&v.minFilter!==Wi||v.type===Yn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===tr&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(R,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function j(R,v){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",b));const lt=v.source;let et=u.get(lt);et===void 0&&(et={},u.set(lt,et));const rt=k(v);if(rt!==R.__cacheKey){et[rt]===void 0&&(et[rt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),et[rt].usedTimes++;const vt=et[R.__cacheKey];vt!==void 0&&(et[R.__cacheKey].usedTimes--,vt.usedTimes===0&&T(v)),R.__cacheKey=rt,R.__webglTexture=et[rt].texture}return H}function gt(R,v,H){let lt=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(lt=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(lt=r.TEXTURE_3D);const et=j(R,v),rt=v.source;e.bindTexture(lt,R.__webglTexture,r.TEXTURE0+H);const vt=n.get(rt);if(rt.version!==vt.__version||et===!0){e.activeTexture(r.TEXTURE0+H);const ht=le.getPrimaries(le.workingColorSpace),xt=v.colorSpace===bn?null:le.getPrimaries(v.colorSpace),It=v.colorSpace===bn||ht===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const zt=p(v)&&g(v.image)===!1;let at=_(v.image,zt,!1,i.maxTextureSize);at=Lt(v,at);const ae=g(at)||a,Xt=s.convert(v.format,v.colorSpace);let Nt=s.convert(v.type),Rt=S(v.internalFormat,Xt,Nt,v.colorSpace,v.isVideoTexture);X(lt,v,ae);let mt;const Dt=v.mipmaps,Kt=a&&v.isVideoTexture!==!0&&Rt!==Ph,q=vt.__version===void 0||et===!0,tt=A(v,at,ae);if(v.isDepthTexture)Rt=r.DEPTH_COMPONENT,a?v.type===Yn?Rt=r.DEPTH_COMPONENT32F:v.type===ui?Rt=r.DEPTH_COMPONENT24:v.type===Bi?Rt=r.DEPTH24_STENCIL8:Rt=r.DEPTH_COMPONENT16:v.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===zi&&Rt===r.DEPTH_COMPONENT&&v.type!==Ka&&v.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ui,Nt=s.convert(v.type)),v.format===bs&&Rt===r.DEPTH_COMPONENT&&(Rt=r.DEPTH_STENCIL,v.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Bi,Nt=s.convert(v.type))),q&&(Kt?e.texStorage2D(r.TEXTURE_2D,1,Rt,at.width,at.height):e.texImage2D(r.TEXTURE_2D,0,Rt,at.width,at.height,0,Xt,Nt,null));else if(v.isDataTexture)if(Dt.length>0&&ae){Kt&&q&&e.texStorage2D(r.TEXTURE_2D,tt,Rt,Dt[0].width,Dt[0].height);for(let B=0,C=Dt.length;B<C;B++)mt=Dt[B],Kt?e.texSubImage2D(r.TEXTURE_2D,B,0,0,mt.width,mt.height,Xt,Nt,mt.data):e.texImage2D(r.TEXTURE_2D,B,Rt,mt.width,mt.height,0,Xt,Nt,mt.data);v.generateMipmaps=!1}else Kt?(q&&e.texStorage2D(r.TEXTURE_2D,tt,Rt,at.width,at.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,at.width,at.height,Xt,Nt,at.data)):e.texImage2D(r.TEXTURE_2D,0,Rt,at.width,at.height,0,Xt,Nt,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Kt&&q&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,Rt,Dt[0].width,Dt[0].height,at.depth);for(let B=0,C=Dt.length;B<C;B++)mt=Dt[B],v.format!==hn?Xt!==null?Kt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,B,0,0,0,mt.width,mt.height,at.depth,Xt,mt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,B,Rt,mt.width,mt.height,at.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,B,0,0,0,mt.width,mt.height,at.depth,Xt,Nt,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,B,Rt,mt.width,mt.height,at.depth,0,Xt,Nt,mt.data)}else{Kt&&q&&e.texStorage2D(r.TEXTURE_2D,tt,Rt,Dt[0].width,Dt[0].height);for(let B=0,C=Dt.length;B<C;B++)mt=Dt[B],v.format!==hn?Xt!==null?Kt?e.compressedTexSubImage2D(r.TEXTURE_2D,B,0,0,mt.width,mt.height,Xt,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,B,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(r.TEXTURE_2D,B,0,0,mt.width,mt.height,Xt,Nt,mt.data):e.texImage2D(r.TEXTURE_2D,B,Rt,mt.width,mt.height,0,Xt,Nt,mt.data)}else if(v.isDataArrayTexture)Kt?(q&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,Rt,at.width,at.height,at.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Xt,Nt,at.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Rt,at.width,at.height,at.depth,0,Xt,Nt,at.data);else if(v.isData3DTexture)Kt?(q&&e.texStorage3D(r.TEXTURE_3D,tt,Rt,at.width,at.height,at.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Xt,Nt,at.data)):e.texImage3D(r.TEXTURE_3D,0,Rt,at.width,at.height,at.depth,0,Xt,Nt,at.data);else if(v.isFramebufferTexture){if(q)if(Kt)e.texStorage2D(r.TEXTURE_2D,tt,Rt,at.width,at.height);else{let B=at.width,C=at.height;for(let nt=0;nt<tt;nt++)e.texImage2D(r.TEXTURE_2D,nt,Rt,B,C,0,Xt,Nt,null),B>>=1,C>>=1}}else if(Dt.length>0&&ae){Kt&&q&&e.texStorage2D(r.TEXTURE_2D,tt,Rt,Dt[0].width,Dt[0].height);for(let B=0,C=Dt.length;B<C;B++)mt=Dt[B],Kt?e.texSubImage2D(r.TEXTURE_2D,B,0,0,Xt,Nt,mt):e.texImage2D(r.TEXTURE_2D,B,Rt,Xt,Nt,mt);v.generateMipmaps=!1}else Kt?(q&&e.texStorage2D(r.TEXTURE_2D,tt,Rt,at.width,at.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Xt,Nt,at)):e.texImage2D(r.TEXTURE_2D,0,Rt,Xt,Nt,at);x(v,ae)&&y(lt),vt.__version=rt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function At(R,v,H){if(v.image.length!==6)return;const lt=j(R,v),et=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+H);const rt=n.get(et);if(et.version!==rt.__version||lt===!0){e.activeTexture(r.TEXTURE0+H);const vt=le.getPrimaries(le.workingColorSpace),ht=v.colorSpace===bn?null:le.getPrimaries(v.colorSpace),xt=v.colorSpace===bn||vt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const It=v.isCompressedTexture||v.image[0].isCompressedTexture,zt=v.image[0]&&v.image[0].isDataTexture,at=[];for(let B=0;B<6;B++)!It&&!zt?at[B]=_(v.image[B],!1,!0,i.maxCubemapSize):at[B]=zt?v.image[B].image:v.image[B],at[B]=Lt(v,at[B]);const ae=at[0],Xt=g(ae)||a,Nt=s.convert(v.format,v.colorSpace),Rt=s.convert(v.type),mt=S(v.internalFormat,Nt,Rt,v.colorSpace),Dt=a&&v.isVideoTexture!==!0,Kt=rt.__version===void 0||lt===!0;let q=A(v,ae,Xt);X(r.TEXTURE_CUBE_MAP,v,Xt);let tt;if(It){Dt&&Kt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,q,mt,ae.width,ae.height);for(let B=0;B<6;B++){tt=at[B].mipmaps;for(let C=0;C<tt.length;C++){const nt=tt[C];v.format!==hn?Nt!==null?Dt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,C,0,0,nt.width,nt.height,Nt,nt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,C,mt,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,C,0,0,nt.width,nt.height,Nt,Rt,nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,C,mt,nt.width,nt.height,0,Nt,Rt,nt.data)}}}else{tt=v.mipmaps,Dt&&Kt&&(tt.length>0&&q++,e.texStorage2D(r.TEXTURE_CUBE_MAP,q,mt,at[0].width,at[0].height));for(let B=0;B<6;B++)if(zt){Dt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,at[B].width,at[B].height,Nt,Rt,at[B].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,mt,at[B].width,at[B].height,0,Nt,Rt,at[B].data);for(let C=0;C<tt.length;C++){const J=tt[C].image[B].image;Dt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,C+1,0,0,J.width,J.height,Nt,Rt,J.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,C+1,mt,J.width,J.height,0,Nt,Rt,J.data)}}else{Dt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Nt,Rt,at[B]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,mt,Nt,Rt,at[B]);for(let C=0;C<tt.length;C++){const nt=tt[C];Dt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,C+1,0,0,Nt,Rt,nt.image[B]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,C+1,mt,Nt,Rt,nt.image[B])}}}x(v,Xt)&&y(r.TEXTURE_CUBE_MAP),rt.__version=et.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Tt(R,v,H,lt,et,rt){const vt=s.convert(H.format,H.colorSpace),ht=s.convert(H.type),xt=S(H.internalFormat,vt,ht,H.colorSpace);if(!n.get(v).__hasExternalTextures){const zt=Math.max(1,v.width>>rt),at=Math.max(1,v.height>>rt);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,rt,xt,zt,at,v.depth,0,vt,ht,null):e.texImage2D(et,rt,xt,zt,at,0,vt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),dt(v)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,et,n.get(H).__webglTexture,0,_t(v)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,lt,et,n.get(H).__webglTexture,rt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(R,v,H){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer&&!v.stencilBuffer){let lt=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(H||dt(v)){const et=v.depthTexture;et&&et.isDepthTexture&&(et.type===Yn?lt=r.DEPTH_COMPONENT32F:et.type===ui&&(lt=r.DEPTH_COMPONENT24));const rt=_t(v);dt(v)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,lt,v.width,v.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,lt,v.width,v.height)}else r.renderbufferStorage(r.RENDERBUFFER,lt,v.width,v.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(v.depthBuffer&&v.stencilBuffer){const lt=_t(v);H&&dt(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,r.DEPTH24_STENCIL8,v.width,v.height):dt(v)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,r.DEPTH24_STENCIL8,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const lt=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let et=0;et<lt.length;et++){const rt=lt[et],vt=s.convert(rt.format,rt.colorSpace),ht=s.convert(rt.type),xt=S(rt.internalFormat,vt,ht,rt.colorSpace),It=_t(v);H&&dt(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,It,xt,v.width,v.height):dt(v)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,It,xt,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,xt,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);const lt=n.get(v.depthTexture).__webglTexture,et=_t(v);if(v.depthTexture.format===zi)dt(v)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,lt,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,lt,0);else if(v.depthTexture.format===bs)dt(v)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,lt,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Ut(R){const v=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ht(v.__webglFramebuffer,R)}else if(H){v.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[lt]),v.__webglDepthbuffer[lt]=r.createRenderbuffer(),Ft(v.__webglDepthbuffer[lt],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Ft(v.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function W(R,v,H){const lt=n.get(R);v!==void 0&&Tt(lt.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Ut(R)}function N(R){const v=R.texture,H=n.get(R),lt=n.get(v);R.addEventListener("dispose",F),R.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture()),lt.__version=v.version,o.memory.textures++);const et=R.isWebGLCubeRenderTarget===!0,rt=R.isWebGLMultipleRenderTargets===!0,vt=g(R)||a;if(et){H.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[ht]=[];for(let xt=0;xt<v.mipmaps.length;xt++)H.__webglFramebuffer[ht][xt]=r.createFramebuffer()}else H.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)H.__webglFramebuffer[ht]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(rt)if(i.drawBuffers){const ht=R.texture;for(let xt=0,It=ht.length;xt<It;xt++){const zt=n.get(ht[xt]);zt.__webglTexture===void 0&&(zt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&dt(R)===!1){const ht=rt?v:[v];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xt=0;xt<ht.length;xt++){const It=ht[xt];H.__webglColorRenderbuffer[xt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[xt]);const zt=s.convert(It.format,It.colorSpace),at=s.convert(It.type),ae=S(It.internalFormat,zt,at,It.colorSpace,R.isXRRenderTarget===!0),Xt=_t(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,ae,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,H.__webglColorRenderbuffer[xt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Ft(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),X(r.TEXTURE_CUBE_MAP,v,vt);for(let ht=0;ht<6;ht++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)Tt(H.__webglFramebuffer[ht][xt],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,xt);else Tt(H.__webglFramebuffer[ht],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(v,vt)&&y(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const ht=R.texture;for(let xt=0,It=ht.length;xt<It;xt++){const zt=ht[xt],at=n.get(zt);e.bindTexture(r.TEXTURE_2D,at.__webglTexture),X(r.TEXTURE_2D,zt,vt),Tt(H.__webglFramebuffer,R,zt,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,0),x(zt,vt)&&y(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ht=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,lt.__webglTexture),X(ht,v,vt),a&&v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)Tt(H.__webglFramebuffer[xt],R,v,r.COLOR_ATTACHMENT0,ht,xt);else Tt(H.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,ht,0);x(v,vt)&&y(ht),e.unbindTexture()}R.depthBuffer&&Ut(R)}function Bt(R){const v=g(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let lt=0,et=H.length;lt<et;lt++){const rt=H[lt];if(x(rt,v)){const vt=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ht=n.get(rt).__webglTexture;e.bindTexture(vt,ht),y(vt),e.unbindTexture()}}}function L(R){if(a&&R.samples>0&&dt(R)===!1){const v=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,lt=R.height;let et=r.COLOR_BUFFER_BIT;const rt=[],vt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(R),xt=R.isWebGLMultipleRenderTargets===!0;if(xt)for(let It=0;It<v.length;It++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let It=0;It<v.length;It++){rt.push(r.COLOR_ATTACHMENT0+It),R.depthBuffer&&rt.push(vt);const zt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(zt===!1&&(R.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),xt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[It]),zt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[vt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[vt])),xt){const at=n.get(v[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,at,0)}r.blitFramebuffer(0,0,H,lt,0,0,H,lt,et,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xt)for(let It=0;It<v.length;It++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,ht.__webglColorRenderbuffer[It]);const zt=n.get(v[It]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function _t(R){return Math.min(i.maxSamples,R.samples)}function dt(R){const v=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Zt(R){const v=o.render.frame;d.get(R)!==v&&(d.set(R,v),R.update())}function Lt(R,v){const H=R.colorSpace,lt=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Oa||H!==Ee&&H!==bn&&(le.getTransfer(H)===xe?a===!1?t.has("EXT_sRGB")===!0&&lt===hn?(R.format=Oa,R.minFilter=ln,R.generateMipmaps=!1):v=Nh.sRGBToLinear(v):(lt!==hn||et!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}this.allocateTextureUnit=I,this.resetTextureUnits=K,this.setTexture2D=z,this.setTexture2DArray=it,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=W,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=dt}function Gg(r,t,e){const n=e.isWebGL2;function i(s,o=bn){let a;const l=le.getTransfer(o);if(s===gi)return r.UNSIGNED_BYTE;if(s===Eh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===wh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ad)return r.BYTE;if(s===ld)return r.SHORT;if(s===Ka)return r.UNSIGNED_SHORT;if(s===Th)return r.INT;if(s===ui)return r.UNSIGNED_INT;if(s===Yn)return r.FLOAT;if(s===tr)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cd)return r.ALPHA;if(s===hn)return r.RGBA;if(s===hd)return r.LUMINANCE;if(s===ud)return r.LUMINANCE_ALPHA;if(s===zi)return r.DEPTH_COMPONENT;if(s===bs)return r.DEPTH_STENCIL;if(s===Oa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dd)return r.RED;if(s===Ah)return r.RED_INTEGER;if(s===fd)return r.RG;if(s===Rh)return r.RG_INTEGER;if(s===Ch)return r.RGBA_INTEGER;if(s===Po||s===Lo||s===Io||s===Do)if(l===xe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Po)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Do)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Po)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Io)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Do)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xl||s===yl||s===vl||s===Ml)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===xl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ml)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ph)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sl||s===bl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sl)return l===xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bl)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Tl||s===El||s===wl||s===Al||s===Rl||s===Cl||s===Pl||s===Ll||s===Il||s===Dl||s===Ul||s===Nl||s===Fl||s===kl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Tl)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===El)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wl)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Al)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rl)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cl)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pl)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ll)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Il)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dl)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ul)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nl)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fl)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kl)return l===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uo||s===Ol||s===Hl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Uo)return l===xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ol)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pd||s===Bl||s===zl||s===Gl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Uo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bi?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Wg extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class sn extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vg={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Xg extends Cs{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,m=null;const _=e.getContextAttributes();let g=null,p=null;const x=[],y=[],S=new Wt;let A=null;const w=new Qe;w.layers.enable(1),w.viewport=new pe;const b=new Qe;b.layers.enable(2),b.viewport=new pe;const F=[w,b],M=new Wg;M.layers.enable(1),M.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=x[X];return j===void 0&&(j=new sa,x[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=x[X];return j===void 0&&(j=new sa,x[X]=j),j.getGripSpace()},this.getHand=function(X){let j=x[X];return j===void 0&&(j=new sa,x[X]=j),j.getHandSpace()};function D(X){const j=y.indexOf(X.inputSource);if(j===-1)return;const gt=x[j];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||o),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",I);for(let X=0;X<x.length;X++){const j=y[X];j!==null&&(y[X]=null,x[X].disconnect(j))}T=null,U=null,t.setRenderTarget(g),f=null,u=null,h=null,i=null,p=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",K),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Vi(f.framebufferWidth,f.framebufferHeight,{format:hn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,gt=null,At=null;_.depth&&(At=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?bs:zi,gt=_.stencil?Bi:ui);const Tt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(Tt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),p=new Vi(u.textureWidth,u.textureHeight,{format:hn,type:gi,depthTexture:new qh(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Ft=t.properties.get(p);Ft.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(X){for(let j=0;j<X.removed.length;j++){const gt=X.removed[j],At=y.indexOf(gt);At>=0&&(y[At]=null,x[At].disconnect(gt))}for(let j=0;j<X.added.length;j++){const gt=X.added[j];let At=y.indexOf(gt);if(At===-1){for(let Ft=0;Ft<x.length;Ft++)if(Ft>=y.length){y.push(gt),At=Ft;break}else if(y[Ft]===null){y[Ft]=gt,At=Ft;break}if(At===-1)break}const Tt=x[At];Tt&&Tt.connect(gt)}}const k=new P,z=new P;function it(X,j,gt){k.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(gt.matrixWorld);const At=k.distanceTo(z),Tt=j.projectionMatrix.elements,Ft=gt.projectionMatrix.elements,Ht=Tt[14]/(Tt[10]-1),Ut=Tt[14]/(Tt[10]+1),W=(Tt[9]+1)/Tt[5],N=(Tt[9]-1)/Tt[5],Bt=(Tt[8]-1)/Tt[0],L=(Ft[8]+1)/Ft[0],_t=Ht*Bt,dt=Ht*L,Zt=At/(-Bt+L),Lt=Zt*-Bt;j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Lt),X.translateZ(Zt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Ht+Zt,v=Ut+Zt,H=_t-Lt,lt=dt+(At-Lt),et=W*Ut/v*R,rt=N*Ut/v*R;X.projectionMatrix.makePerspective(H,lt,et,rt,R,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function $(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;M.near=b.near=w.near=X.near,M.far=b.far=w.far=X.far,(T!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,U=M.far);const j=X.parent,gt=M.cameras;$(M,j);for(let At=0;At<gt.length;At++)$(gt[At],j);gt.length===2?it(M,w,b):M.projectionMatrix.copy(w.projectionMatrix),Z(X,M,j)};function Z(X,j,gt){gt===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Es*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let st=null;function ct(X,j){if(d=j.getViewerPose(c||o),m=j,d!==null){const gt=d.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let At=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,At=!0);for(let Tt=0;Tt<gt.length;Tt++){const Ft=gt[Tt];let Ht=null;if(f!==null)Ht=f.getViewport(Ft);else{const W=h.getViewSubImage(u,Ft);Ht=W.viewport,Tt===0&&(t.setRenderTargetTextures(p,W.colorTexture,u.ignoreDepthValues?void 0:W.depthStencilTexture),t.setRenderTarget(p))}let Ut=F[Tt];Ut===void 0&&(Ut=new Qe,Ut.layers.enable(Tt),Ut.viewport=new pe,F[Tt]=Ut),Ut.matrix.fromArray(Ft.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Ft.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Tt===0&&(M.matrix.copy(Ut.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),At===!0&&M.cameras.push(Ut)}}for(let gt=0;gt<x.length;gt++){const At=y[gt],Tt=x[gt];At!==null&&Tt!==void 0&&Tt.update(At,j,c||o)}st&&st(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}const ot=new Xh;ot.setAnimationLoop(ct),this.setAnimationLoop=function(X){st=X},this.dispose=function(){}}}function qg(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gh(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const y=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yg(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,y){const S=y.program;n.uniformBlockBinding(x,S)}function c(x,y){let S=i[x.id];S===void 0&&(m(x),S=d(x),i[x.id]=S,x.addEventListener("dispose",g));const A=y.program;n.updateUBOMapping(x,A);const w=t.render.frame;s[x.id]!==w&&(u(x),s[x.id]=w)}function d(x){const y=h();x.__bindingPointIndex=y;const S=r.createBuffer(),A=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,S),S}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],S=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,b=S.length;w<b;w++){const F=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,T=F.length;M<T;M++){const U=F[M];if(f(U,w,M,A)===!0){const D=U.__offset,K=Array.isArray(U.value)?U.value:[U.value];let I=0;for(let k=0;k<K.length;k++){const z=K[k],it=_(z);typeof z=="number"||typeof z=="boolean"?(U.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,D+I,U.__data)):z.isMatrix3?(U.__data[0]=z.elements[0],U.__data[1]=z.elements[1],U.__data[2]=z.elements[2],U.__data[3]=0,U.__data[4]=z.elements[3],U.__data[5]=z.elements[4],U.__data[6]=z.elements[5],U.__data[7]=0,U.__data[8]=z.elements[6],U.__data[9]=z.elements[7],U.__data[10]=z.elements[8],U.__data[11]=0):(z.toArray(U.__data,I),I+=it.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,y,S,A){const w=x.value,b=y+"_"+S;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const F=A[b];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return A[b]=w,!0}else if(F.equals(w)===!1)return F.copy(w),!0}return!1}function m(x){const y=x.uniforms;let S=0;const A=16;for(let b=0,F=y.length;b<F;b++){const M=Array.isArray(y[b])?y[b]:[y[b]];for(let T=0,U=M.length;T<U;T++){const D=M[T],K=Array.isArray(D.value)?D.value:[D.value];for(let I=0,k=K.length;I<k;I++){const z=K[I],it=_(z),$=S%A;$!==0&&A-$<it.boundary&&(S+=A-$),D.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=it.storage}}}const w=S%A;return w>0&&(S+=A-w),x.__size=S,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Jh{constructor(t={}){const{canvas:e=Gd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=re,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const y=this;let S=!1,A=0,w=0,b=null,F=-1,M=null;const T=new pe,U=new pe;let D=null;const K=new wt(0);let I=0,k=e.width,z=e.height,it=1,$=null,Z=null;const st=new pe(0,0,k,z),ct=new pe(0,0,k,z);let ot=!1;const X=new Ja;let j=!1,gt=!1,At=null;const Tt=new Qt,Ft=new Wt,Ht=new P,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function W(){return b===null?it:1}let N=n;function Bt(E,O){for(let V=0;V<E.length;V++){const Y=E[V],G=e.getContext(Y,O);if(G!==null)return G}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",B,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",nt,!1),N===null){const O=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&O.shift(),N=Bt(O,E),N===null)throw Bt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let L,_t,dt,Zt,Lt,R,v,H,lt,et,rt,vt,ht,xt,It,zt,at,ae,Xt,Nt,Rt,mt,Dt,Kt;function q(){L=new i0(N),_t=new Zm(N,L,t),L.init(_t),mt=new Gg(N,L,_t),dt=new Bg(N,L,_t),Zt=new o0(N),Lt=new wg,R=new zg(N,L,dt,Lt,_t,mt,Zt),v=new Qm(y),H=new n0(y),lt=new pf(N,_t),Dt=new jm(N,L,lt,_t),et=new s0(N,lt,Zt,Dt),rt=new h0(N,et,lt,Zt),Xt=new c0(N,_t,R),zt=new Jm(Lt),vt=new Eg(y,v,H,L,_t,Dt,zt),ht=new qg(y,Lt),xt=new Rg,It=new Ug(L,_t),ae=new Km(y,v,H,dt,rt,u,l),at=new Hg(y,rt,_t),Kt=new Yg(N,Zt,_t,dt),Nt=new $m(N,L,Zt,_t),Rt=new r0(N,L,Zt,_t),Zt.programs=vt.programs,y.capabilities=_t,y.extensions=L,y.properties=Lt,y.renderLists=xt,y.shadowMap=at,y.state=dt,y.info=Zt}q();const tt=new Xg(y,N);this.xr=tt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=L.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=L.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(k,z,!1))},this.getSize=function(E){return E.set(k,z)},this.setSize=function(E,O,V=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,z=O,e.width=Math.floor(E*it),e.height=Math.floor(O*it),V===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(k*it,z*it).floor()},this.setDrawingBufferSize=function(E,O,V){k=E,z=O,it=V,e.width=Math.floor(E*V),e.height=Math.floor(O*V),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(st)},this.setViewport=function(E,O,V,Y){E.isVector4?st.set(E.x,E.y,E.z,E.w):st.set(E,O,V,Y),dt.viewport(T.copy(st).multiplyScalar(it).floor())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,O,V,Y){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,O,V,Y),dt.scissor(U.copy(ct).multiplyScalar(it).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){dt.setScissorTest(ot=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(E=!0,O=!0,V=!0){let Y=0;if(E){let G=!1;if(b!==null){const St=b.texture.format;G=St===Ch||St===Rh||St===Ah}if(G){const St=b.texture.type,Pt=St===gi||St===ui||St===Ka||St===Bi||St===Eh||St===wh,Ot=ae.getClearColor(),Vt=ae.getClearAlpha(),Jt=Ot.r,qt=Ot.g,jt=Ot.b;Pt?(f[0]=Jt,f[1]=qt,f[2]=jt,f[3]=Vt,N.clearBufferuiv(N.COLOR,0,f)):(m[0]=Jt,m[1]=qt,m[2]=jt,m[3]=Vt,N.clearBufferiv(N.COLOR,0,m))}else Y|=N.COLOR_BUFFER_BIT}O&&(Y|=N.DEPTH_BUFFER_BIT),V&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",B,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),xt.dispose(),It.dispose(),Lt.dispose(),v.dispose(),H.dispose(),rt.dispose(),Dt.dispose(),Kt.dispose(),vt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Et),tt.removeEventListener("sessionend",ft),At&&(At.dispose(),At=null),Ct.stop()};function B(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Zt.autoReset,O=at.enabled,V=at.autoUpdate,Y=at.needsUpdate,G=at.type;q(),Zt.autoReset=E,at.enabled=O,at.autoUpdate=V,at.needsUpdate=Y,at.type=G}function nt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function J(E){const O=E.target;O.removeEventListener("dispose",J),Mt(O)}function Mt(E){bt(E),Lt.remove(E)}function bt(E){const O=Lt.get(E).programs;O!==void 0&&(O.forEach(function(V){vt.releaseProgram(V)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,V,Y,G,St){O===null&&(O=Ut);const Pt=G.isMesh&&G.matrixWorld.determinant()<0,Ot=ke(E,O,V,Y,G);dt.setMaterial(Y,Pt);let Vt=V.index,Jt=1;if(Y.wireframe===!0){if(Vt=et.getWireframeAttribute(V),Vt===void 0)return;Jt=2}const qt=V.drawRange,jt=V.attributes.position;let Ie=qt.start*Jt,dn=(qt.start+qt.count)*Jt;St!==null&&(Ie=Math.max(Ie,St.start*Jt),dn=Math.min(dn,(St.start+St.count)*Jt)),Vt!==null?(Ie=Math.max(Ie,0),dn=Math.min(dn,Vt.count)):jt!=null&&(Ie=Math.max(Ie,0),dn=Math.min(dn,jt.count));const We=dn-Ie;if(We<0||We===1/0)return;Dt.setup(G,Y,Ot,V,Vt);let Hn,be=Nt;if(Vt!==null&&(Hn=lt.get(Vt),be=Rt,be.setIndex(Hn)),G.isMesh)Y.wireframe===!0?(dt.setLineWidth(Y.wireframeLinewidth*W()),be.setMode(N.LINES)):be.setMode(N.TRIANGLES);else if(G.isLine){let te=Y.linewidth;te===void 0&&(te=1),dt.setLineWidth(te*W()),G.isLineSegments?be.setMode(N.LINES):G.isLineLoop?be.setMode(N.LINE_LOOP):be.setMode(N.LINE_STRIP)}else G.isPoints?be.setMode(N.POINTS):G.isSprite&&be.setMode(N.TRIANGLES);if(G.isBatchedMesh)be.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)be.renderInstances(Ie,We,G.count);else if(V.isInstancedBufferGeometry){const te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,wo=Math.min(V.instanceCount,te);be.renderInstances(Ie,We,wo)}else be.render(Ie,We)};function ne(E,O,V){E.transparent===!0&&E.side===De&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,Se(E,O,V),E.side=Pn,E.needsUpdate=!0,Se(E,O,V),E.side=De):Se(E,O,V)}this.compile=function(E,O,V=null){V===null&&(V=E),g=It.get(V),g.init(),x.push(g),V.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),E!==V&&E.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights(y._useLegacyLights);const Y=new Set;return E.traverse(function(G){const St=G.material;if(St)if(Array.isArray(St))for(let Pt=0;Pt<St.length;Pt++){const Ot=St[Pt];ne(Ot,V,G),Y.add(Ot)}else ne(St,V,G),Y.add(St)}),x.pop(),g=null,Y},this.compileAsync=function(E,O,V=null){const Y=this.compile(E,O,V);return new Promise(G=>{function St(){if(Y.forEach(function(Pt){Lt.get(Pt).currentProgram.isReady()&&Y.delete(Pt)}),Y.size===0){G(E);return}setTimeout(St,10)}L.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let yt=null;function Q(E){yt&&yt(E)}function Et(){Ct.stop()}function ft(){Ct.start()}const Ct=new Xh;Ct.setAnimationLoop(Q),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(E){yt=E,tt.setAnimationLoop(E),E===null?Ct.stop():Ct.start()},tt.addEventListener("sessionstart",Et),tt.addEventListener("sessionend",ft),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(O),O=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,O,b),g=It.get(E,x.length),g.init(),x.push(g),Tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(Tt),gt=this.localClippingEnabled,j=zt.init(this.clippingPlanes,gt),_=xt.get(E,p.length),_.init(),p.push(_),oe(E,O,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort($,Z),this.info.render.frame++,j===!0&&zt.beginShadows();const V=g.state.shadowsArray;if(at.render(V,E,O),j===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(_,E),g.setupLights(y._useLegacyLights),O.isArrayCamera){const Y=O.cameras;for(let G=0,St=Y.length;G<St;G++){const Pt=Y[G];ie(_,E,Pt,Pt.viewport)}}else ie(_,E,O);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(y,E,O),Dt.resetDefaultState(),F=-1,M=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function oe(E,O,V,Y){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){Y&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);const Pt=rt.update(E),Ot=E.material;Ot.visible&&_.push(E,Pt,Ot,V,Ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const Pt=rt.update(E),Ot=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ht.copy(Pt.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray(Ot)){const Vt=Pt.groups;for(let Jt=0,qt=Vt.length;Jt<qt;Jt++){const jt=Vt[Jt],Ie=Ot[jt.materialIndex];Ie&&Ie.visible&&_.push(E,Pt,Ie,V,Ht.z,jt)}}else Ot.visible&&_.push(E,Pt,Ot,V,Ht.z,null)}}const St=E.children;for(let Pt=0,Ot=St.length;Pt<Ot;Pt++)oe(St[Pt],O,V,Y)}function ie(E,O,V,Y){const G=E.opaque,St=E.transmissive,Pt=E.transparent;g.setupLightsView(V),j===!0&&zt.setGlobalState(y.clippingPlanes,V),St.length>0&&_e(G,St,O,V),Y&&dt.viewport(T.copy(Y)),G.length>0&&we(G,O,V),St.length>0&&we(St,O,V),Pt.length>0&&we(Pt,O,V),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function _e(E,O,V,Y){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const St=_t.isWebGL2;At===null&&(At=new Vi(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?tr:gi,minFilter:Wi,samples:St?4:0})),y.getDrawingBufferSize(Ft),St?At.setSize(Ft.x,Ft.y):At.setSize(ho(Ft.x),ho(Ft.y));const Pt=y.getRenderTarget();y.setRenderTarget(At),y.getClearColor(K),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();const Ot=y.toneMapping;y.toneMapping=mi,we(E,V,Y),R.updateMultisampleRenderTarget(At),R.updateRenderTargetMipmap(At);let Vt=!1;for(let Jt=0,qt=O.length;Jt<qt;Jt++){const jt=O[Jt],Ie=jt.object,dn=jt.geometry,We=jt.material,Hn=jt.group;if(We.side===De&&Ie.layers.test(Y.layers)){const be=We.side;We.side=rn,We.needsUpdate=!0,ve(Ie,V,Y,dn,We,Hn),We.side=be,We.needsUpdate=!0,Vt=!0}}Vt===!0&&(R.updateMultisampleRenderTarget(At),R.updateRenderTargetMipmap(At)),y.setRenderTarget(Pt),y.setClearColor(K,I),y.toneMapping=Ot}function we(E,O,V){const Y=O.isScene===!0?O.overrideMaterial:null;for(let G=0,St=E.length;G<St;G++){const Pt=E[G],Ot=Pt.object,Vt=Pt.geometry,Jt=Y===null?Pt.material:Y,qt=Pt.group;Ot.layers.test(V.layers)&&ve(Ot,O,V,Vt,Jt,qt)}}function ve(E,O,V,Y,G,St){E.onBeforeRender(y,O,V,Y,G,St),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(y,O,V,Y,E,St),G.transparent===!0&&G.side===De&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,y.renderBufferDirect(V,O,Y,G,E,St),G.side=Pn,G.needsUpdate=!0,y.renderBufferDirect(V,O,Y,G,E,St),G.side=De):y.renderBufferDirect(V,O,Y,G,E,St),E.onAfterRender(y,O,V,Y,G,St)}function Se(E,O,V){O.isScene!==!0&&(O=Ut);const Y=Lt.get(E),G=g.state.lights,St=g.state.shadowsArray,Pt=G.state.version,Ot=vt.getParameters(E,G.state,St,O,V),Vt=vt.getProgramCacheKey(Ot);let Jt=Y.programs;Y.environment=E.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(E.isMeshStandardMaterial?H:v).get(E.envMap||Y.environment),Jt===void 0&&(E.addEventListener("dispose",J),Jt=new Map,Y.programs=Jt);let qt=Jt.get(Vt);if(qt!==void 0){if(Y.currentProgram===qt&&Y.lightsStateVersion===Pt)return Le(E,Ot),qt}else Ot.uniforms=vt.getUniforms(E),E.onBuild(V,Ot,y),E.onBeforeCompile(Ot,y),qt=vt.acquireProgram(Ot,Vt),Jt.set(Vt,qt),Y.uniforms=Ot.uniforms;const jt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(jt.clippingPlanes=zt.uniform),Le(E,Ot),Y.needsLights=Eo(E),Y.lightsStateVersion=Pt,Y.needsLights&&(jt.ambientLightColor.value=G.state.ambient,jt.lightProbe.value=G.state.probe,jt.directionalLights.value=G.state.directional,jt.directionalLightShadows.value=G.state.directionalShadow,jt.spotLights.value=G.state.spot,jt.spotLightShadows.value=G.state.spotShadow,jt.rectAreaLights.value=G.state.rectArea,jt.ltc_1.value=G.state.rectAreaLTC1,jt.ltc_2.value=G.state.rectAreaLTC2,jt.pointLights.value=G.state.point,jt.pointLightShadows.value=G.state.pointShadow,jt.hemisphereLights.value=G.state.hemi,jt.directionalShadowMap.value=G.state.directionalShadowMap,jt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,jt.spotShadowMap.value=G.state.spotShadowMap,jt.spotLightMatrix.value=G.state.spotLightMatrix,jt.spotLightMap.value=G.state.spotLightMap,jt.pointShadowMap.value=G.state.pointShadowMap,jt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=qt,Y.uniformsList=null,qt}function Ae(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=to.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Le(E,O){const V=Lt.get(E);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function ke(E,O,V,Y,G){O.isScene!==!0&&(O=Ut),R.resetTextureUnits();const St=O.fog,Pt=Y.isMeshStandardMaterial?O.environment:null,Ot=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ee,Vt=(Y.isMeshStandardMaterial?H:v).get(Y.envMap||Pt),Jt=Y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qt=!!V.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),jt=!!V.morphAttributes.position,Ie=!!V.morphAttributes.normal,dn=!!V.morphAttributes.color;let We=mi;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(We=y.toneMapping);const Hn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,be=Hn!==void 0?Hn.length:0,te=Lt.get(Y),wo=g.state.lights;if(j===!0&&(gt===!0||E!==M)){const yn=E===M&&Y.id===F;zt.setState(Y,E,yn)}let Re=!1;Y.version===te.__version?(te.needsLights&&te.lightsStateVersion!==wo.state.version||te.outputColorSpace!==Ot||G.isBatchedMesh&&te.batching===!1||!G.isBatchedMesh&&te.batching===!0||G.isInstancedMesh&&te.instancing===!1||!G.isInstancedMesh&&te.instancing===!0||G.isSkinnedMesh&&te.skinning===!1||!G.isSkinnedMesh&&te.skinning===!0||G.isInstancedMesh&&te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&te.instancingColor===!1&&G.instanceColor!==null||te.envMap!==Vt||Y.fog===!0&&te.fog!==St||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==zt.numPlanes||te.numIntersection!==zt.numIntersection)||te.vertexAlphas!==Jt||te.vertexTangents!==qt||te.morphTargets!==jt||te.morphNormals!==Ie||te.morphColors!==dn||te.toneMapping!==We||_t.isWebGL2===!0&&te.morphTargetsCount!==be)&&(Re=!0):(Re=!0,te.__version=Y.version);let Si=te.currentProgram;Re===!0&&(Si=Se(Y,O,G));let cl=!1,Fs=!1,Ao=!1;const Ke=Si.getUniforms(),bi=te.uniforms;if(dt.useProgram(Si.program)&&(cl=!0,Fs=!0,Ao=!0),Y.id!==F&&(F=Y.id,Fs=!0),cl||M!==E){Ke.setValue(N,"projectionMatrix",E.projectionMatrix),Ke.setValue(N,"viewMatrix",E.matrixWorldInverse);const yn=Ke.map.cameraPosition;yn!==void 0&&yn.setValue(N,Ht.setFromMatrixPosition(E.matrixWorld)),_t.logarithmicDepthBuffer&&Ke.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ke.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Fs=!0,Ao=!0)}if(G.isSkinnedMesh){Ke.setOptional(N,G,"bindMatrix"),Ke.setOptional(N,G,"bindMatrixInverse");const yn=G.skeleton;yn&&(_t.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),Ke.setValue(N,"boneTexture",yn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Ke.setOptional(N,G,"batchingTexture"),Ke.setValue(N,"batchingTexture",G._matricesTexture,R));const Ro=V.morphAttributes;if((Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0&&_t.isWebGL2===!0)&&Xt.update(G,V,Si),(Fs||te.receiveShadow!==G.receiveShadow)&&(te.receiveShadow=G.receiveShadow,Ke.setValue(N,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(bi.envMap.value=Vt,bi.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),Fs&&(Ke.setValue(N,"toneMappingExposure",y.toneMappingExposure),te.needsLights&&To(bi,Ao),St&&Y.fog===!0&&ht.refreshFogUniforms(bi,St),ht.refreshMaterialUniforms(bi,Y,it,z,At),to.upload(N,Ae(te),bi,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(to.upload(N,Ae(te),bi,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ke.setValue(N,"center",G.center),Ke.setValue(N,"modelViewMatrix",G.modelViewMatrix),Ke.setValue(N,"normalMatrix",G.normalMatrix),Ke.setValue(N,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const yn=Y.uniformsGroups;for(let Co=0,Tu=yn.length;Co<Tu;Co++)if(_t.isWebGL2){const hl=yn[Co];Kt.update(hl,Si),Kt.bind(hl,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function To(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Eo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,O,V){Lt.get(E.texture).__webglTexture=O,Lt.get(E.depthTexture).__webglTexture=V;const Y=Lt.get(E);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=V===void 0,Y.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const V=Lt.get(E);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,V=0){b=E,A=O,w=V;let Y=!0,G=null,St=!1,Pt=!1;if(E){const Vt=Lt.get(E);Vt.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1):Vt.__webglFramebuffer===void 0?R.setupRenderTarget(E):Vt.__hasExternalTextures&&R.rebindTextures(E,Lt.get(E.texture).__webglTexture,Lt.get(E.depthTexture).__webglTexture);const Jt=E.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Pt=!0);const qt=Lt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[O])?G=qt[O][V]:G=qt[O],St=!0):_t.isWebGL2&&E.samples>0&&R.useMultisampledRTT(E)===!1?G=Lt.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?G=qt[V]:G=qt,T.copy(E.viewport),U.copy(E.scissor),D=E.scissorTest}else T.copy(st).multiplyScalar(it).floor(),U.copy(ct).multiplyScalar(it).floor(),D=ot;if(dt.bindFramebuffer(N.FRAMEBUFFER,G)&&_t.drawBuffers&&Y&&dt.drawBuffers(E,G),dt.viewport(T),dt.scissor(U),dt.setScissorTest(D),St){const Vt=Lt.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Vt.__webglTexture,V)}else if(Pt){const Vt=Lt.get(E.texture),Jt=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vt.__webglTexture,V||0,Jt)}F=-1},this.readRenderTargetPixels=function(E,O,V,Y,G,St,Pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Lt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){dt.bindFramebuffer(N.FRAMEBUFFER,Ot);try{const Vt=E.texture,Jt=Vt.format,qt=Vt.type;if(Jt!==hn&&mt.convert(Jt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const jt=qt===tr&&(L.has("EXT_color_buffer_half_float")||_t.isWebGL2&&L.has("EXT_color_buffer_float"));if(qt!==gi&&mt.convert(qt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qt===Yn&&(_t.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float")))&&!jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-Y&&V>=0&&V<=E.height-G&&N.readPixels(O,V,Y,G,mt.convert(Jt),mt.convert(qt),St)}finally{const Vt=b!==null?Lt.get(b).__webglFramebuffer:null;dt.bindFramebuffer(N.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(E,O,V=0){const Y=Math.pow(2,-V),G=Math.floor(O.image.width*Y),St=Math.floor(O.image.height*Y);R.setTexture2D(O,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,E.x,E.y,G,St),dt.unbindTexture()},this.copyTextureToTexture=function(E,O,V,Y=0){const G=O.image.width,St=O.image.height,Pt=mt.convert(V.format),Ot=mt.convert(V.type);R.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Y,E.x,E.y,G,St,Pt,Ot,O.image.data):O.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Y,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Pt,O.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,Y,E.x,E.y,Pt,Ot,O.image),Y===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,V,Y,G=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=E.max.x-E.min.x+1,Pt=E.max.y-E.min.y+1,Ot=E.max.z-E.min.z+1,Vt=mt.convert(Y.format),Jt=mt.convert(Y.type);let qt;if(Y.isData3DTexture)R.setTexture3D(Y,0),qt=N.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),qt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment);const jt=N.getParameter(N.UNPACK_ROW_LENGTH),Ie=N.getParameter(N.UNPACK_IMAGE_HEIGHT),dn=N.getParameter(N.UNPACK_SKIP_PIXELS),We=N.getParameter(N.UNPACK_SKIP_ROWS),Hn=N.getParameter(N.UNPACK_SKIP_IMAGES),be=V.isCompressedTexture?V.mipmaps[G]:V.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,be.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,E.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,E.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(qt,G,O.x,O.y,O.z,St,Pt,Ot,Vt,Jt,be.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(qt,G,O.x,O.y,O.z,St,Pt,Ot,Vt,be.data)):N.texSubImage3D(qt,G,O.x,O.y,O.z,St,Pt,Ot,Vt,Jt,be),N.pixelStorei(N.UNPACK_ROW_LENGTH,jt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ie),N.pixelStorei(N.UNPACK_SKIP_PIXELS,dn),N.pixelStorei(N.UNPACK_SKIP_ROWS,We),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Hn),G===0&&Y.generateMipmaps&&N.generateMipmap(qt),dt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),dt.unbindTexture()},this.resetState=function(){A=0,w=0,b=null,dt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===$a?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===_o?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===re?Gi:Ih}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Gi?re:Ee}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Kg extends Jh{}Kg.prototype.isWebGL1Renderer=!0;class Qh extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class tu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ka,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new P;class ir{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ir(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class eu extends Tn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let cs;const zs=new P,hs=new P,us=new P,ds=new Wt,Gs=new Wt,nu=new Qt,Ir=new P,Ws=new P,Dr=new P,Dc=new Wt,ra=new Wt,Uc=new Wt;class jg extends ye{constructor(t=new eu){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tu(e,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new ir(n,3,0,!1)),cs.setAttribute("uv",new ir(n,2,3,!1))}this.geometry=cs,this.material=t,this.center=new Wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),nu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-us.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Ur(Ir.set(-.5,-.5,0),us,o,hs,i,s),Ur(Ws.set(.5,-.5,0),us,o,hs,i,s),Ur(Dr.set(.5,.5,0),us,o,hs,i,s),Dc.set(0,0),ra.set(1,0),Uc.set(1,1);let a=t.ray.intersectTriangle(Ir,Ws,Dr,!1,zs);if(a===null&&(Ur(Ws.set(-.5,.5,0),us,o,hs,i,s),ra.set(0,1),a=t.ray.intersectTriangle(Ir,Dr,Ws,!1,zs),a===null))return;const l=t.ray.origin.distanceTo(zs);l<t.near||l>t.far||e.push({distance:l,point:zs.clone(),uv:Sn.getInterpolation(zs,Ir,Ws,Dr,Dc,ra,Uc,new Wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ur(r,t,e,n,i,s){ds.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Gs.x=s*ds.x-i*ds.y,Gs.y=i*ds.x+s*ds.y):Gs.copy(ds),r.copy(t),r.x+=Gs.x,r.y+=Gs.y,r.applyMatrix4(nu)}const Nc=new P,Fc=new pe,kc=new pe,$g=new P,Oc=new Qt,Nr=new P,oa=new kn,Hc=new Qt,aa=new xo;class Zg extends ut{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_l,this.bindMatrix=new Qt,this.bindMatrixInverse=new Qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Nr),this.boundingBox.expandByPoint(Nr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Nr),this.boundingSphere.expandByPoint(Nr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),t.ray.intersectsSphere(oa)!==!1&&(Hc.copy(i).invert(),aa.copy(t.ray).applyMatrix4(Hc),!(this.boundingBox!==null&&aa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,aa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new pe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===_l?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===od?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Fc.fromBufferAttribute(i.attributes.skinIndex,t),kc.fromBufferAttribute(i.attributes.skinWeight,t),Nc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=kc.getComponent(s);if(o!==0){const a=Fc.getComponent(s);Oc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector($g.copy(Nc).applyMatrix4(Oc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class iu extends ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nl extends He{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Xe,d=Xe,h,u){super(null,o,a,l,c,d,i,s,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bc=new Qt,Jg=new Qt;class il{constructor(t=[],e=[]){this.uuid=Cn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Qt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:Jg;Bc.multiplyMatrices(a,e[s]),Bc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new il(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new nl(e,t,t,hn,Yn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new iu),this.bones.push(o),this.boneInverses.push(new Qt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class za extends Pe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fs=new Qt,zc=new Qt,Fr=[],Gc=new mn,Qg=new Qt,Vs=new ut,Xs=new kn;class t_ extends ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new za(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),Gc.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(Gc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),Xs.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),t.ray.intersectsSphere(Xs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fs),zc.multiplyMatrices(n,fs),Vs.matrixWorld=zc,Vs.raycast(t,Fr);for(let o=0,a=Fr.length;o<a;o++){const l=Fr[o];l.instanceId=s,l.object=this,e.push(l)}Fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new za(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Mo extends Tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wc=new P,Vc=new P,Xc=new Qt,la=new xo,kr=new kn;class So extends ye{constructor(t=new Ne,e=new Mo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Wc.fromBufferAttribute(e,i-1),Vc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Wc.distanceTo(Vc);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=s,t.ray.intersectsSphere(kr)===!1)return;Xc.copy(i).invert(),la.copy(t.ray).applyMatrix4(Xc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,d=new P,h=new P,u=new P,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let y=p,S=x-1;y<S;y+=f){const A=m.getX(y),w=m.getX(y+1);if(c.fromBufferAttribute(g,A),d.fromBufferAttribute(g,w),la.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(u);F<t.near||F>t.far||e.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let y=p,S=x-1;y<S;y+=f){if(c.fromBufferAttribute(g,y),d.fromBufferAttribute(g,y+1),la.distanceSqToSegment(c,d,u,h)>l)continue;u.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(u);w<t.near||w>t.far||e.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const qc=new P,Yc=new P;class su extends So{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)qc.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qc.distanceTo(Yc);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class e_ extends So{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class sr extends Tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kc=new Qt,Ga=new xo,Or=new kn,Hr=new P;class uo extends ye{constructor(t=new Ne,e=new sr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=s,t.ray.intersectsSphere(Or)===!1)return;Kc.copy(i).invert(),Ga.copy(t.ray).applyMatrix4(Kc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,_=f;m<_;m++){const g=c.getX(m);Hr.fromBufferAttribute(h,g),jc(Hr,g,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=u,_=f;m<_;m++)Hr.fromBufferAttribute(h,m),jc(Hr,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jc(r,t,e,n,i,s,o){const a=Ga.distanceSqToPoint(r);if(a<e){const l=new P;Ga.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class qe extends He{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bo extends Ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new P,d=new Wt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/t+1)/2,d.y=(o[u+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class he extends Ne{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],h=[],u=[],f=[];let m=0;const _=[],g=n/2;let p=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function x(){const S=new P,A=new P;let w=0;const b=(e-t)/n;for(let F=0;F<=s;F++){const M=[],T=F/s,U=T*(e-t)+t;for(let D=0;D<=i;D++){const K=D/i,I=K*l+a,k=Math.sin(I),z=Math.cos(I);A.x=U*k,A.y=-T*n+g,A.z=U*z,h.push(A.x,A.y,A.z),S.set(k,b,z).normalize(),u.push(S.x,S.y,S.z),f.push(K,1-T),M.push(m++)}_.push(M)}for(let F=0;F<i;F++)for(let M=0;M<s;M++){const T=_[M][F],U=_[M+1][F],D=_[M+1][F+1],K=_[M][F+1];d.push(T,U,K),d.push(U,D,K),w+=6}c.addGroup(p,w,0),p+=w}function y(S){const A=m,w=new Wt,b=new P;let F=0;const M=S===!0?t:e,T=S===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,g*T,0),u.push(0,T,0),f.push(.5,.5),m++;const U=m;for(let D=0;D<=i;D++){const I=D/i*l+a,k=Math.cos(I),z=Math.sin(I);b.x=M*z,b.y=g*T,b.z=M*k,h.push(b.x,b.y,b.z),u.push(0,T,0),w.x=k*.5+.5,w.y=z*.5*T+.5,f.push(w.x,w.y),m++}for(let D=0;D<i;D++){const K=A+D,I=U+D;S===!0?d.push(I,I+1,K):d.push(I+1,I,K),F+=3}c.addGroup(p,F,S===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sl extends he{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new sl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class In extends Ne{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],d=[];let h=t;const u=(e-t)/i,f=new P,m=new Wt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,d.push(m.x,m.y)}h+=u}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,y=x,S=x+n+1,A=x+n+2,w=x+1;a.push(y,S,w),a.push(S,A,w)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fe extends Ne{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new P,u=new P,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){const w=A/e;h.x=-t*Math.cos(i+w*s)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(i+w*s)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),g.push(w+S,1-y),x.push(c++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=d[p][x+1],S=d[p][x],A=d[p+1][x],w=d[p+1][x+1];(p!==0||o>0)&&f.push(y,S,w),(p!==n-1||l<Math.PI)&&f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fo extends Ne{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],d=new P,h=new P,u=new P;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*s,g=f/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;o.push(_,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ge extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $n extends ge{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class n_ extends Tn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Br(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function i_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function s_(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function $c(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function ru(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class ar{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class r_ extends ar{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vl:s=t,a=2*e-n;break;case Xl:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vl:o=t,l=2*n-e;break;case Xl:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,x=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,S=f*g-f*_;for(let A=0;A!==a;++A)s[A]=p*o[d+A]+x*o[c+A]+y*o[l+A]+S*o[h+A];return s}}class o_ extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(n-e)/(i-e),h=1-d;for(let u=0;u!==a;++u)s[u]=o[c+u]*h+o[l+u]*d;return s}}class a_ extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class On{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Br(e,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Br(t.times,Array),values:Br(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new a_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new o_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new r_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case er:e=this.InterpolantFactoryMethodDiscrete;break;case Ts:e=this.InterpolantFactoryMethodLinear;break;case No:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&i_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===No,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,u=h-n,f=h+n;for(let m=0;m!==n;++m){const _=e[h+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const h=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[h+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Ts;class Ls extends On{}Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=er;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class ou extends On{}ou.prototype.ValueTypeName="color";class As extends On{}As.prototype.ValueTypeName="number";class l_ extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let d=c+a;c!==d;c+=4)cn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Xi extends On{InterpolantFactoryMethodLinear(t){return new l_(this.times,this.values,this.getValueSize(),t)}}Xi.prototype.ValueTypeName="quaternion";Xi.prototype.DefaultInterpolation=Ts;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends On{}Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=er;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends On{}Rs.prototype.ValueTypeName="vector";class c_{constructor(t,e=-1,n,i=md){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(u_(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(On.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=s_(l);l=$c(l,1,d),c=$c(c,1,d),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new As(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],d=c.name.match(s);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,m,_){if(f.length!==0){const g=[],p=[];ru(f,g,p,m),g.length!==0&&_.push(new h(u,g,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)f[u[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==u[m].morphTargets.length;++x){const y=u[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new As(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{const f=".bones["+e[h].name+"]";n(Rs,f+".position",u,"pos",i),n(Xi,f+".quaternion",u,"rot",i),n(Rs,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function h_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return ou;case"quaternion":return Xi;case"bool":case"boolean":return Ls;case"string":return Is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function u_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=h_(r.type);if(r.times===void 0){const e=[],n=[];ru(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const di={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class d_{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,s===!1&&i.onStart!==void 0&&i.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null}}}const f_=new d_;class Ds{constructor(t){this.manager=t!==void 0?t:f_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class p_ extends Error{constructor(t,e){super(t),this.response=e}}class au extends Ds{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=di.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Xn[t]!==void 0){Xn[t].push({onLoad:e,onProgress:n,onError:i});return}Xn[t]=[],Xn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Xn[t],h=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:y,value:S})=>{if(y)p.close();else{_+=S.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,b=d.length;w<b;w++){const F=d[w];F.onProgress&&F.onProgress(A)}p.enqueue(S),x()}})}}});return new Response(g)}else throw new p_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{di.add(t,c);const d=Xn[t];delete Xn[t];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=Xn[t];if(d===void 0)throw this.manager.itemError(t),c;delete Xn[t];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class m_ extends Ds{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=di.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=nr("img");function l(){d(),di.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){d(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Us extends Ds{constructor(t){super(t)}load(t,e,n,i){const s=new He,o=new m_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class lr extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class lu extends lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ca=new Qt,Zc=new P,Jc=new P;class rl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zc),Jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jc),e.updateMatrixWorld(),ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class g_ extends rl{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Es*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class __ extends lr{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new g_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Qc=new Qt,qs=new P,ha=new P;class x_ extends rl{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Wt(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(qs),ha.copy(n.position),ha.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ha),n.updateMatrixWorld(),i.makeTranslation(-qs.x,-qs.y,-qs.z),Qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc)}}class cu extends lr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new x_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class y_ extends rl{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rr extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new y_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hu extends lr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qs{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class v_ extends Ds{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=di.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return di.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),di.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});di.add(t,l),s.manager.itemStart(t)}}class M_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=th();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function th(){return(typeof performance>"u"?Date:performance).now()}const ol="\\[\\]\\.:\\/",S_=new RegExp("["+ol+"]","g"),al="[^"+ol+"]",b_="[^"+ol.replace("\\.","")+"]",T_=/((?:WC+[\/:])*)/.source.replace("WC",al),E_=/(WCOD+)?/.source.replace("WCOD",b_),w_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),A_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),R_=new RegExp("^"+T_+E_+w_+A_+"$"),C_=["material","materials","bones","map"];class P_{constructor(t,e,n){const i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ce{constructor(t,e,n){this.path=e,this.parsedPath=n||ce.parseTrackName(e),this.node=ce.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ce.Composite(t,e,n):new ce(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(S_,"")}static parseTrackName(t){const e=R_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);C_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ce.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ce.Composite=P_;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class L_ extends su{constructor(t=10,e=10,n=4473924,i=8947848){n=new wt(n),i=new wt(i);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,f=0,m=-a;u<=e;u++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=u===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const d=new Ne;d.setAttribute("position",new me(l,3)),d.setAttribute("color",new me(c,3));const h=new Mo({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);class I_{domElement;three;constructor(){this.three=new Jh({antialias:!1,powerPreference:"high-performance",logarithmicDepthBuffer:!0}),this.domElement=this.three.domElement,this.three.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.three.setClearColor(16,1),this.three.toneMapping=Mh,this.three.toneMappingExposure=1.2}setSize(t,e){this.three.setSize(t,e)}dispose(){this.three.dispose()}}class D_{group;skyMat;constructor(){this.group=new sn;const t=new fe(5e4,64,48);t.scale(-1,1,1),this.skyMat=new Ln({vertexShader:`
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
      `,uniforms:{},side:rn,depthWrite:!1}),this.group.add(new ut(t,this.skyMat))}update(t){}getMesh(){return this.group}}class U_{scene;camera;clock=new M_;frames=0;lastFpsUpdate=0;fps=0;stars;constructor(){this.scene=new Qh,this.scene.background=new wt(0),this.stars=new D_,this.scene.add(this.stars.getMesh()),this.scene.add(new hu(4473958,.2)),this.scene.add(new lu(4487082,2241348,.35)),this.camera=new Qe(60,window.innerWidth/window.innerHeight,.5,5e7),this.camera.position.set(0,0,10),this.camera.lookAt(0,0,0)}update(t){const e=this.clock.getElapsedTime();this.frames++,e-this.lastFpsUpdate>=1&&(this.fps=this.frames/(e-this.lastFpsUpdate),this.frames=0,this.lastFpsUpdate=e),this.stars.getMesh().position.copy(this.camera.position),this.stars.update(t)}getFps(){return this.fps}}class N_{root;helpOverlay=null;onPlay;onVab;onSettings;constructor(t,e,n){this.onPlay=t,this.onVab=e,this.onSettings=n,this.root=document.createElement("div"),this.root.className="panel",this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 200;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: transparent;
      backdrop-filter: blur(2px);
      border: none;
      border-radius: 0;
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
    `,this.root.appendChild(i);const s=(o,a,l)=>{const c=document.createElement("button");return c.className=`btn btn--${a}`,c.textContent=o,c.style.cssText="margin: 6px; min-width: 220px; padding: 12px 24px; font-size: 14px;",c.addEventListener("click",l),c};this.root.appendChild(s("FLIGHT","primary",this.onPlay)),this.root.appendChild(s("VEHICLE ASSEMBLY","secondary",this.onVab)),this.root.appendChild(s("SETTINGS","ghost",this.onSettings)),this.root.appendChild(s("HELP","ghost",()=>this.toggleHelp()))}toggleHelp(){if(this.helpOverlay){this.helpOverlay.remove(),this.helpOverlay=null;return}const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;z-index:300;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(6,8,20,0.92);
    `,t.innerHTML=`
      <div style="max-width:480px;padding:32px;font-family:'Inter',sans-serif;line-height:1.6;">
        <h2 style="color:var(--accent-gold);font-size:20px;letter-spacing:0.05em;margin-bottom:16px;">CONTROLS</h2>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">W / S</td><td>Throttle up / down</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">↑ / ↓</td><td>Pitch (nose up / down)</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">← / →</td><td>Yaw (turn left / right)</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">Space</td><td>Stage (separate decoupler)</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">Q / E</td><td>Time warp slower / faster</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">P</td><td>Toggle parachute</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">M / Tab</td><td>Map view</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">Esc</td><td>Pause</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">Mouse drag</td><td>Orbit camera (on 3D view)</td></tr>
          <tr><td style="color:var(--text-muted);padding:4px 16px 4px 0;">Scroll</td><td>Zoom camera</td></tr>
        </table>
        <button class="btn btn--primary" style="margin-top:24px;width:100%;padding:10px;" id="help-close">CLOSE</button>
      </div>
    `,t.querySelector("#help-close").addEventListener("click",()=>{t.remove(),this.helpOverlay=null}),document.body.appendChild(t),this.helpOverlay=t}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove(),this.helpOverlay?.remove()}}const uu=[{id:"capsule_mk1",name:"MK-1 Capsule",kind:"capsule",size:"M",mass:1200,crewCapacity:1,hasParachute:!0,dragCoeff:.5},{id:"tank_s_lfo",name:"Fuel Tank S (LFO)",kind:"tank",size:"S",mass:200,fuelCapacity:4500,fuelType:"LFO",dragCoeff:.4},{id:"tank_m_lfo",name:"Fuel Tank M (LFO)",kind:"tank",size:"M",mass:600,fuelCapacity:45e3,fuelType:"LFO",dragCoeff:.4},{id:"tank_l_lfo",name:"Fuel Tank L (LFO)",kind:"tank",size:"L",mass:1200,fuelCapacity:9e4,fuelType:"LFO",dragCoeff:.4},{id:"tank_xl_lfo",name:"Fuel Tank XL (LFO)",kind:"tank",size:"XL",mass:2500,fuelCapacity:225e3,fuelType:"LFO",dragCoeff:.4},{id:"engine_ant",name:'"Ant" Engine',kind:"engine",size:"S",mass:50,thrust:88,isp:350,fuelType:"LFO"},{id:"engine_vector",name:'"Vector" Engine',kind:"engine",size:"M",mass:400,thrust:800,isp:340,fuelType:"LFO"},{id:"engine_mastodon",name:'"Mastodon" Engine',kind:"engine",size:"L",mass:1200,thrust:2e3,isp:330,fuelType:"LFO"},{id:"engine_mammoth",name:'"Mammoth" Engine',kind:"engine",size:"XL",mass:3e3,thrust:5e3,isp:310,fuelType:"LFO"},{id:"parachute_mk16",name:"Mk-16 Parachute",kind:"parachute",size:"M",mass:30,dragCoeff:5},{id:"legs_landini",name:'"Landini" Landing Legs',kind:"legs",size:"S",mass:80,dragCoeff:.1},{id:"heatshield_s",name:"Heat Shield S (Ablative)",kind:"heatshield",size:"S",mass:50,heatCapacity:5e4,dragCoeff:1.2},{id:"heatshield_m",name:"Heat Shield M (Ablative)",kind:"heatshield",size:"M",mass:150,heatCapacity:15e4,dragCoeff:1.2},{id:"heatshield_l",name:"Heat Shield L (Ablative)",kind:"heatshield",size:"L",mass:400,heatCapacity:4e5,dragCoeff:1.2},{id:"decoupler_1",name:"TD-1 Decoupler",kind:"decoupler",size:"M",mass:100,dragCoeff:.3},{id:"agena_target",name:"Agena Target Vehicle",kind:"gltf",size:"M",mass:1500,dragCoeff:.3,gltfUrl:"/models/agena.glb",gltfScale:.0015},{id:"apollo_soyuz",name:"Apollo Soyuz",kind:"gltf",size:"L",mass:5e3,dragCoeff:.3,gltfUrl:"/models/apollo_soyuz.glb",gltfScale:.0015},{id:"saturn_v",name:"Saturn V",kind:"gltf",size:"XL",mass:3e6,dragCoeff:.3,gltfUrl:"/models/saturn_v.glb",gltfScale:.0015},{id:"ares_1",name:"Ares I",kind:"gltf",size:"XL",mass:2e6,dragCoeff:.3,gltfUrl:"/models/ares_1.glb",gltfScale:.0015},{id:"apollo_lunar_module",name:"Apollo Lunar Module",kind:"gltf",size:"L",mass:15e3,dragCoeff:.3,gltfUrl:"/models/apollo_lunar_module.glb",gltfScale:.002},{id:"atlas_6",name:"Atlas 6 (Friendship 7)",kind:"gltf",size:"L",mass:12e4,dragCoeff:.3,gltfUrl:"/models/atlas_6.glb",gltfScale:.0015},{id:"atlas_9",name:"Atlas 9 (Faith 7)",kind:"gltf",size:"L",mass:12e4,dragCoeff:.3,gltfUrl:"/models/atlas_9.glb",gltfScale:.0015},{id:"crawler",name:"Crawler Transporter",kind:"gltf",size:"XL",mass:27e5,dragCoeff:.3,gltfUrl:"/models/crawler.glb",gltfScale:.001}];function eo(r){return uu.find(t=>t.id===r)}function eh(r,t){if(t===gd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Fa||t===Lh){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===Fa)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class F_ extends Ds{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new z_(e)}),this.register(function(e){return new $_(e)}),this.register(function(e){return new Z_(e)}),this.register(function(e){return new J_(e)}),this.register(function(e){return new W_(e)}),this.register(function(e){return new V_(e)}),this.register(function(e){return new X_(e)}),this.register(function(e){return new q_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new Y_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new j_(e)}),this.register(function(e){return new K_(e)}),this.register(function(e){return new O_(e)}),this.register(function(e){return new Q_(e)}),this.register(function(e){return new tx(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Qs.extractUrlBase(t);o=Qs.resolveURL(c,this.path)}else o=Qs.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new au(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(d){e(d),s.manager.itemEnd(t)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===du){try{o[se.KHR_BINARY_GLTF]=new ex(t)}catch(h){i&&i(h);return}s=JSON.parse(o[se.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new px(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const h=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(h){case se.KHR_MATERIALS_UNLIT:o[h]=new H_;break;case se.KHR_DRACO_MESH_COMPRESSION:o[h]=new nx(s,this.dracoLoader);break;case se.KHR_TEXTURE_TRANSFORM:o[h]=new ix;break;case se.KHR_MESH_QUANTIZATION:o[h]=new sx;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function k_(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const se={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class O_{constructor(t){this.parser=t,this.name=se.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const d=new wt(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Ee);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new rr(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new cu(d),c.distance=h;break;case"spot":c=new __(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class H_{constructor(){this.name=se.KHR_MATERIALS_UNLIT}getMaterialType(){return Me}extendParams(t,e,n){const i=[];t.color=new wt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Ee),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,re))}return Promise.all(i)}}class B_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class z_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Wt(a,a)}return Promise.all(s)}}class G_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class W_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new wt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Ee)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,re)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class V_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class X_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new wt().setRGB(a[0],a[1],a[2],Ee),Promise.all(s)}}class q_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Y_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new wt().setRGB(a[0],a[1],a[2],Ee),o.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,re)),Promise.all(s)}}class K_{constructor(t){this.parser=t,this.name=se.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class j_{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class $_{constructor(t){this.parser=t,this.name=se.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class Z_{constructor(t){this.parser=t,this.name=se.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class J_{constructor(t){this.parser=t,this.name=se.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Q_{constructor(t){this.name=se.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(d*h);return o.decodeGltfBuffer(new Uint8Array(f),d,h,u,i.mode,i.filter),f})})}else return null}}class tx{constructor(t){this.name=se.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,f=[];for(const m of h){const _=new Qt,g=new P,p=new cn,x=new P(1,1,1),y=new t_(m.geometry,m.material,u);for(let S=0;S<u;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&x.fromBufferAttribute(l.SCALE,S),y.setMatrixAt(S,_.compose(g,p,x));for(const S in l)if(S==="_COLOR_0"){const A=l[S];y.instanceColor=new za(A.array,A.itemSize,A.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&m.geometry.setAttribute(S,l[S]);ye.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const du="glTF",Ys=12,nh={JSON:1313821514,BIN:5130562};class ex{constructor(t){this.name=se.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==du)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ys,s=new DataView(t,Ys);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===nh.JSON){const c=new Uint8Array(t,Ys+o,a);this.content=n.decode(c)}else if(l===nh.BIN){const c=Ys+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class nx{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=se.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const h=Wa[d]||d.toLowerCase();a[h]=o[d]}for(const d in t.attributes){const h=Wa[d]||d.toLowerCase();if(o[d]!==void 0){const u=n.accessors[t.attributes[d]],f=vs[u.componentType];c[h]=f.name,l[h]=u.normalized===!0}}return e.getDependency("bufferView",s).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(f){for(const m in f.attributes){const _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}h(f)},a,c,Ee,u)})})}}class ix{constructor(){this.name=se.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class sx{constructor(){this.name=se.KHR_MESH_QUANTIZATION}}class fu extends ar{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=i-e,h=(n-e)/d,u=h*h,f=u*h,m=t*c,_=m-c,g=-2*f+3*u,p=f-u,x=1-g,y=p-u+h;for(let S=0;S!==a;S++){const A=o[_+S+a],w=o[_+S+l]*d,b=o[m+S+a],F=o[m+S]*d;s[S]=x*A+y*w+g*b+p*F}return s}}const rx=new cn;class ox extends fu{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return rx.fromArray(s).normalize().toArray(s),s}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ih={9728:Xe,9729:ln,9984:Na,9985:bh,9986:Qr,9987:Wi},sh={33071:Ue,33648:ro,10497:un},ua={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ax={CUBICSPLINE:void 0,LINEAR:Ts,STEP:er},da={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ge({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pn})),r.DefaultMaterial}function Ri(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function hi(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function cx(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,d=t.length;c<d;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,d=t.length;c<d;c++){const h=t[c];if(n){const u=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):r.attributes.position;o.push(u)}if(i){const u=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(u)}if(s){const u=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],u=c[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function hx(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ux(r){let t;const e=r.extensions&&r.extensions[se.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+fa(e.attributes):t=r.indices+":"+fa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+fa(r.targets[n]);return t}function fa(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Va(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const fx=new Qt;class px{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new k_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Us(this.options.manager):this.textureLoader=new v_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new au(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ri(s,a,i),hi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())s(d,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[se.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Qs.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=ua[i.type],a=vs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Pe(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=ua[i.type],c=vs[i.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==h){const p=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=e.cache.get(x);y||(_=new c(a,p*f,i.count*f/d),y=new tu(_,f/d),e.cache.add(x,y)),g=new ir(y,l,u%f/d,m)}else a===null?_=new c(i.count*l):_=new c(a,u,i.count*l),g=new Pe(_,l,m);if(i.sparse!==void 0){const p=ua.SCALAR,x=vs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,A=new x(o[1],y,i.sparse.count*p),w=new c(o[2],S,i.sparse.count*l);a!==null&&(g=new Pe(g.array.slice(),g.itemSize,g.normalized));for(let b=0,F=A.length;b<F;b++){const M=A[b];if(g.setX(M,w[b*l]),l>=2&&g.setY(M,w[b*l+1]),l>=3&&g.setZ(M,w[b*l+2]),l>=4&&g.setW(M,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return d.magFilter=ih[u.magFilter]||ln,d.minFilter=ih[u.minFilter]||Wi,d.wrapS=sh[u.wrapS]||un,d.wrapT=sh[u.wrapT]||un,i.associations.set(d,{textures:t}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(u,f){let m=u;e.isImageBitmapLoader===!0&&(m=function(_){const g=new He(_);g.needsUpdate=!0,u(g)}),e.load(Qs.resolveURL(h,s.path),m,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||dx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=d,d}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[se.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[se.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[se.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new sr,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Mo,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return ge}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},l=s.extensions||{},c=[];if(l[se.KHR_MATERIALS_UNLIT]){const h=i[se.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,e))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new wt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Ee),a.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",h.baseColorTexture,re)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=De);const d=s.alphaMode||da.OPAQUE;if(d===da.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===da.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Me&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Wt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Me&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Me){const h=s.emissiveFactor;a.emissive=new wt().setRGB(h[0],h[1],h[2],Ee)}return s.emissiveTexture!==void 0&&o!==Me&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,re)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),hi(h,s),e.associations.set(h,{materials:t}),s.extensions&&Ri(i,h,s),h})}createUniqueName(t){const e=ce.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[se.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return rh(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],d=ux(c),h=i[d];if(h)o.push(h.promise);else{let u;c.extensions&&c.extensions[se.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=rh(new Ne,c,e),i[d]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?lx(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let f=0,m=d.length;f<m;f++){const _=d[f],g=o[f];let p;const x=c[f];if(g.mode===Mn.TRIANGLES||g.mode===Mn.TRIANGLE_STRIP||g.mode===Mn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Zg(_,x):new ut(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Mn.TRIANGLE_STRIP?p.geometry=eh(p.geometry,Lh):g.mode===Mn.TRIANGLE_FAN&&(p.geometry=eh(p.geometry,Fa));else if(g.mode===Mn.LINES)p=new su(_,x);else if(g.mode===Mn.LINE_STRIP)p=new So(_,x);else if(g.mode===Mn.LINE_LOOP)p=new e_(_,x);else if(g.mode===Mn.POINTS)p=new uo(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&hx(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),hi(p,s),g.extensions&&Ri(i,p,g),e.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&Ri(i,h[0],s),h[0];const u=new sn;s.extensions&&Ri(i,u,s),e.associations.set(u,{meshes:t});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Qe(zd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new tl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),hi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const h=o[c];if(h){a.push(h);const u=new Qt;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new il(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const f=i.channels[h],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),d.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let x=0,y=u.length;x<y;x++){const S=u[x],A=f[x],w=m[x],b=_[x],F=g[x];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const M=n._createAnimationTracks(S,A,w,b,F);if(M)for(let T=0;T<M.length;T++)p.push(M[T])}return new c_(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,d=a.length;c<d;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,fx)});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let d;if(s.isBone===!0?d=new iu:c.length>1?d=new sn:c.length===1?d=c[0]:d=new ye,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(s.name&&(d.userData.name=s.name,d.name=o),hi(d,s),s.extensions&&Ri(n,d,s),s.matrix!==void 0){const h=new Qt;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=t,d}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new sn;n.name&&(s.name=i.createUniqueName(n.name)),hi(s,n),n.extensions&&Ri(e,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,h=l.length;d<h;d++)s.add(l[d]);const c=d=>{const h=new Map;for(const[u,f]of i.associations)(u instanceof Tn||u instanceof He)&&h.set(u,f);return d.traverse(u=>{const f=i.associations.get(u);f!=null&&h.set(u,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,l=[];ii[s.path]===ii.weights?t.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(ii[s.path]){case ii.weights:c=As;break;case ii.rotation:c=Xi;break;case ii.position:case ii.scale:c=Rs;break;default:switch(n.itemSize){case 1:c=As;break;case 2:case 3:default:c=Rs;break}break}const d=i.interpolation!==void 0?ax[i.interpolation]:Ts,h=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const m=new c(l[u]+"."+ii[s.path],e.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Va(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Xi?ox:fu;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mx(r,t,e){const n=t.attributes,i=new mn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const d=Va(vs[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new P,l=new P;for(let c=0,d=s.length;c<d;c++){const h=s[c];if(h.POSITION!==void 0){const u=e.json.accessors[h.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){const _=Va(vs[u.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new kn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function rh(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Wa[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return le.workingColorSpace!==Ee&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${le.workingColorSpace}" not supported.`),hi(r,t),mx(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?cx(r,t.targets,e):r})}const or=66743e-15,_n=1e-9,xn=562500,pa=1/60,gx=9.80665,_x=11944e22,kt=.05,no=5;function Ns(r){return("/ellipse/"+r.replace(/^\//,"")).replace(/\/\//g,"/")}class xx{show(t,e=2500){const n=document.createElement("div");n.className="toast",n.textContent=t,n.style.cssText=`
      position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
      z-index: 300;
    `,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),200)},e)}}const Te=new xx;function Yt(r,t){const e=document.createElement("canvas");e.width=r,e.height=t;const n=e.getContext("2d");return[e,n]}function yx(r,t){const e=r*2*Math.PI-Math.PI;return[t*Math.PI-Math.PI/2,e]}const vx=[{lat:.7,lon:-1.8,radiusLat:.5,radiusLon:.8,color:"#4a7c3f"},{lat:-.4,lon:-1.3,radiusLat:.6,radiusLon:.35,color:"#5a8c4a"},{lat:.85,lon:.4,radiusLat:.25,radiusLon:.3,color:"#6a9c5a"},{lat:.1,lon:.6,radiusLat:.55,radiusLon:.4,color:"#8a7c3f"},{lat:.7,lon:1.6,radiusLat:.55,radiusLon:1,color:"#6a8c4a"},{lat:-.6,lon:2.4,radiusLat:.25,radiusLon:.3,color:"#9a8c5a"},{lat:1.1,lon:-.9,radiusLat:.2,radiusLon:.2,color:"#8aac7a"}];function Mx(r,t=2){const e=r.width,n=r.height,o=r.getContext("2d").getImageData(0,0,e,n).data,[a,l]=Yt(e,n),c=l.createImageData(e,n),d=c.data,h=(f,m)=>(Math.max(0,Math.min(n-1,m))*e+Math.max(0,Math.min(e-1,f)))*4;for(let f=0;f<n;f++)for(let m=0;m<e;m++){const _=o[h(m-1,f-1)]/255,g=o[h(m,f-1)]/255,p=o[h(m+1,f-1)]/255,x=o[h(m-1,f)]/255,y=o[h(m+1,f)]/255,S=o[h(m-1,f+1)]/255,A=o[h(m,f+1)]/255,w=o[h(m+1,f+1)]/255,b=p+2*y+w-(_+2*x+S),F=S+2*A+w-(_+2*g+p),M=b*t,T=F*t,U=Math.sqrt(M*M+T*T+1),D=(f*e+m)*4;d[D]=Math.round((M/U*.5+.5)*255),d[D+1]=Math.round((T/U*.5+.5)*255),d[D+2]=Math.round(1/U*255),d[D+3]=255}l.putImageData(c,0,0);const u=new qe(a);return u.wrapS=u.wrapT=un,u.anisotropy=4,u}function vi(r,t,e,n,i){const s=new qe(r);s.wrapS=s.wrapT=un,s.colorSpace=re,s.anisotropy=4;let o;t&&(o=Mx(t,2));let a;e&&(a=new qe(e),a.wrapS=a.wrapT=un,a.anisotropy=4);let l;n&&(l=new qe(n),l.wrapS=l.wrapT=un,l.anisotropy=4);let c;return i&&(c=new qe(i),c.wrapS=c.wrapT=un,c.anisotropy=4),{color:s,normal:o,roughness:a,metalness:l,ao:c}}function En(r){let t=r|0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function Mi(r,t,e,n=.02){const i=r.getImageData(0,0,t,e),s=i.data;for(let o=0;o<s.length;o+=4){const a=(Math.random()-.5)*2*n*255;s[o]=Math.min(255,Math.max(0,s[o]+a)),s[o+1]=Math.min(255,Math.max(0,s[o+1]+a)),s[o+2]=Math.min(255,Math.max(0,s[o+2]+a))}r.putImageData(i,0,0)}function Sx(){const[e,n]=Yt(1024,512),i=n.createImageData(1024,512),s=i.data,o=new Float32Array(1024*512);for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const d=c/1024,h=l/512,[u,f]=yx(d,h);let m=0;for(const _ of vx){const g=(u-_.lat)/_.radiusLat,p=(f-_.lon)/_.radiusLon;if(g*g+p*p<1){m=1;break}}(h<.07||h>.93)&&(m=.5),o[l*1024+c]=m}for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const d=(l*1024+c)*4,h=o[l*1024+c]??0,u=Math.random()*.15+.85,f=(h*.5+.1*u)*255,m=Math.min(255,Math.max(0,Math.round(f)));s[d]=m,s[d+1]=m,s[d+2]=m,s[d+3]=255}n.putImageData(i,0,0);const a=new qe(e);return a.wrapS=a.wrapT=un,a}function bx(r="M"){const[n,i]=Yt(2048,2048),[s,o]=Yt(2048,2048),[a,l]=Yt(2048,2048),[c,d]=Yt(2048,2048),[h,u]=Yt(2048,2048),f=En(r.charCodeAt(0)*1e3+42),m=r==="S",_=r==="L"||r==="XL";i.fillStyle="#e8e8e4",i.fillRect(0,0,2048,2048);const g=i.createLinearGradient(0,0,0,2048);g&&(g.addColorStop(0,"rgba(0,0,0,0.03)"),g.addColorStop(.3,"rgba(0,0,0,0)"),g.addColorStop(.7,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(0,0,0,0.04)"),i.fillStyle=g,i.fillRect(0,0,2048,2048));const x=2048/(m?4:_?12:8);for(let A=x;A<2048;A+=x)i.strokeStyle="rgba(0,0,0,0.08)",i.lineWidth=2,i.beginPath(),i.moveTo(0,A),i.lineTo(2048,A),i.stroke(),i.strokeStyle="rgba(255,255,255,0.15)",i.lineWidth=1.5,i.beginPath(),i.moveTo(0,A-1.5),i.lineTo(2048,A-1.5),i.stroke();const y=m?8:_?24:14;i.strokeStyle="rgba(80,80,90,0.04)",i.lineWidth=1.5;for(let A=1;A<y;A++){const w=A/y*2048;i.beginPath(),i.moveTo(w,0),i.lineTo(w,2048),i.stroke()}i.fillStyle="#c0c0ba";for(let A=x;A<2048;A+=x)for(let w=30;w<2018;w+=60)i.beginPath(),i.arc(w,A,4,0,Math.PI*2),i.fill(),i.strokeStyle="#a0a09a",i.lineWidth=.5,i.stroke();if(_){i.fillStyle="#002868",i.fillRect(163.84,307.2,245.76*.4,163.84);for(let M=0;M<7;M++)i.fillStyle=M%2===0?"#BF0A30":"#ffffff",i.fillRect(163.84+245.76*.4,307.2+M/7*163.84,245.76*.6,163.84/7);i.fillStyle="#ffffff";for(let M=0;M<5;M++)for(let T=0;T<3;T++)i.beginPath(),i.arc(163.84+(T+.5)*(245.76*.4/3),307.2+(M+.5)*(163.84/5),2,0,Math.PI*2),i.fill()}i.fillStyle="rgba(30,40,80,0.12)",i.font=`bold ${2048*.06}px monospace`,i.textAlign="center",i.fillText("USA",2048/2,2048*.25);const S=m?3:_?12:6;for(let A=0;A<S;A++){const w=f()*2048*.8+204.8,b=f()*2048*.7+2048*.15,F=60+f()*200,M=50+f()*140,T=180+f()*40,U=140+f()*30,D=80+f()*30;i.fillStyle=`rgb(${T}, ${U}, ${D})`,i.globalAlpha=.6+f()*.3,i.fillRect(w,b,F,M),i.fillStyle=`rgb(${T-20}, ${U-15}, ${D-10})`;for(let K=0;K<15;K++)i.beginPath(),i.arc(w+f()*F,b+f()*M,2+f()*6,0,Math.PI*2),i.fill();i.fillStyle="rgba(200, 220, 240, 0.15)";for(let K=0;K<5;K++)i.beginPath(),i.arc(w+f()*F,b+f()*M,5+f()*15,0,Math.PI*2),i.fill();i.globalAlpha=1}i.fillStyle="#606068",i.fillRect(0,0,2048,2048*.012),i.fillRect(0,2048*.988,2048,2048*.012),i.strokeStyle="rgba(80,80,90,0.3)",i.lineWidth=3,i.beginPath(),i.moveTo(2048*.5,0),i.lineTo(2048*.5,2048),i.stroke(),i.strokeStyle="rgba(60,50,40,0.03)",i.lineWidth=1;for(let A=0;A<30;A++){const w=f()*2048,b=f()*2048;i.beginPath(),i.moveTo(w,b),i.lineTo(w+(f()-.5)*20,b+f()*2048*.3),i.stroke()}o.fillStyle="#808080",o.fillRect(0,0,2048,2048),o.strokeStyle="#b0b0b0",o.lineWidth=8;for(let A=x;A<2048;A+=x)o.beginPath(),o.moveTo(0,A),o.lineTo(2048,A),o.stroke();o.strokeStyle="#909090",o.lineWidth=3;for(let A=1;A<y;A++){const w=A/y*2048;o.beginPath(),o.moveTo(w,0),o.lineTo(w,2048),o.stroke()}o.fillStyle="#c8c8c8";for(let A=x;A<2048;A+=x)for(let w=30;w<2018;w+=60)o.beginPath(),o.arc(w,A,5,0,Math.PI*2),o.fill();l.fillStyle="#909090",l.fillRect(0,0,2048,2048),l.strokeStyle="#c0c0c0",l.lineWidth=10;for(let A=x;A<2048;A+=x)l.beginPath(),l.moveTo(0,A),l.lineTo(2048,A),l.stroke();for(let A=0;A<S;A++){const w=f()*2048*.8+204.8,b=f()*2048*.7+2048*.15,F=60+f()*200,M=50+f()*140;l.fillStyle="#e0e0e0",l.fillRect(w,b,F,M)}l.fillStyle="#505050",l.fillRect(0,0,2048,2048*.012),l.fillRect(0,2048*.988,2048,2048*.012),d.fillStyle="#050505",d.fillRect(0,0,2048,2048),d.fillStyle="#c0c0c0",d.fillRect(0,0,2048,2048*.012),d.fillRect(0,2048*.988,2048,2048*.012),d.fillStyle="#606060",d.fillRect(2048*.49,0,2048*.02,2048),u.fillStyle="#ffffff",u.fillRect(0,0,2048,2048),u.strokeStyle="#808080",u.lineWidth=12;for(let A=x;A<2048;A+=x)u.beginPath(),u.moveTo(0,A),u.lineTo(2048,A),u.stroke();u.strokeStyle="#b0b0b0",u.lineWidth=6;for(let A=1;A<y;A++){const w=A/y*2048;u.beginPath(),u.moveTo(w,0),u.lineTo(w,2048),u.stroke()}return Mi(i,2048,2048,.01),vi(n,s,a,c,h)}function Tx(){const[e,n]=Yt(2048,2048),[i,s]=Yt(2048,2048),[o,a]=Yt(2048,2048),[l,c]=Yt(2048,2048),[d,h]=Yt(2048,2048),u=En(12345);n.fillStyle="#f5f5ee",n.fillRect(0,0,2048,2048*.78);const f=n.createLinearGradient(0,0,0,2048*.78);f&&(f.addColorStop(0,"rgba(20,20,25,0.05)"),f.addColorStop(.5,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(20,20,25,0.03)"),n.fillStyle=f,n.fillRect(0,0,2048,2048*.78)),n.strokeStyle="rgba(180,180,180,0.15)",n.lineWidth=2;for(let _=2048*.08;_<2048*.75;_+=2048*.07)n.beginPath(),n.moveTo(0,_),n.lineTo(2048,_),n.stroke();n.fillStyle="#2a2a2e",n.fillRect(0,2048*.78,2048,2048*.22),n.strokeStyle="rgba(40,40,45,0.5)",n.lineWidth=1;for(let _=0;_<2048;_+=32)n.beginPath(),n.moveTo(_,2048*.78),n.lineTo(_,2048),n.stroke();for(let _=2048*.78;_<2048;_+=32)n.beginPath(),n.moveTo(0,_),n.lineTo(2048,_),n.stroke();for(let _=0;_<2e3;_++){const g=u()*2048,p=2048*.78+u()*2048*.22,x=1+u()*3,y=25+u()*50,S=u()*15;n.fillStyle=`rgb(${y+S},${y},${y-S})`,n.beginPath(),n.arc(g,p,x,0,Math.PI*2),n.fill()}for(let _=0;_<60;_++){const g=u()*2048,p=2048*.78+u()*2048*.15,x=30+u()*150,y=(u()-.5)*50;n.strokeStyle=`rgba(20,15,10,${.2+u()*.3})`,n.lineWidth=1+u()*3,n.beginPath(),n.moveTo(g,p),n.lineTo(g+y,p+x),n.stroke(),n.strokeStyle=`rgba(60,40,20,${.05+u()*.1})`,n.lineWidth=3+u()*5,n.beginPath(),n.moveTo(g-y*.1,p+x*.2),n.lineTo(g+y,p+x),n.stroke()}n.fillStyle="#5a5a60",n.fillRect(0,2048*.77,2048,2048*.015),n.fillStyle="#8a8a90",n.fillRect(0,2048*.775,2048,2048*.005),n.fillStyle="#003366",n.fillRect(0,2048*.2,2048,2048*.035),n.fillStyle="#b31b1b",n.fillRect(0,2048*.245,2048,2048*.025),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(0,2048*.27,2048,2048*.003);const m=[[2048*.28,2048*.12],[2048*.55,2048*.14]];for(const[_,g]of m)n.fillStyle="#0a0a15",n.beginPath(),n.ellipse(_,g,2048*.04,2048*.03,0,0,Math.PI*2),n.fill(),n.strokeStyle="#9a9a9e",n.lineWidth=5,n.beginPath(),n.ellipse(_,g,2048*.045,2048*.035,0,0,Math.PI*2),n.stroke(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.beginPath(),n.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),n.stroke();n.fillStyle="#3a3a3e";for(let _=0;_<4;_++){const g=_/4*Math.PI*2,p=2048*.5+Math.cos(g)*2048*.38,x=2048*.35+Math.sin(g)*2048*.05;n.beginPath(),n.arc(p,x,14,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.stroke()}n.fillStyle="#e0e0d8",n.fillRect(0,0,2048,2048*.04),n.strokeStyle="#a0a0a0",n.lineWidth=2,n.beginPath(),n.moveTo(0,2048*.04),n.lineTo(2048,2048*.04),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,2048,2048),s.strokeStyle="#a8a8a8",s.lineWidth=5;for(let _=2048*.08;_<2048*.75;_+=2048*.07)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#585858",s.lineWidth=3;for(let _=0;_<2048;_+=48)s.beginPath(),s.moveTo(_,2048*.78),s.lineTo(_,2048),s.stroke();for(let _=2048*.8;_<2048;_+=48)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#c0c0c0",s.lineWidth=8,s.beginPath(),s.moveTo(0,2048*.775),s.lineTo(2048,2048*.775),s.stroke();for(const[_,g]of m)s.strokeStyle="#d0d0d0",s.lineWidth=10,s.beginPath(),s.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),s.stroke();a.fillStyle="#808080",a.fillRect(0,0,2048,2048*.78),a.fillStyle="#e0e0e0",a.fillRect(0,2048*.78,2048,2048*.22),a.fillStyle="#484848",a.fillRect(0,2048*.77,2048,2048*.015);for(const[_,g]of m)a.fillStyle="#181818",a.beginPath(),a.ellipse(_,g,2048*.045,2048*.035,0,0,Math.PI*2),a.fill();c.fillStyle="#080808",c.fillRect(0,0,2048,2048),c.fillStyle="#d0d0d0",c.fillRect(0,2048*.77,2048,2048*.015),c.fillRect(0,0,2048,2048*.04);for(const[_,g]of m)c.fillStyle="#b0b0b0",c.beginPath(),c.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),c.fill();for(let _=0;_<4;_++){const g=_/4*Math.PI*2,p=2048*.5+Math.cos(g)*2048*.38,x=2048*.35+Math.sin(g)*2048*.05;c.beginPath(),c.arc(p,x,16,0,Math.PI*2),c.fill()}h.fillStyle="#ffffff",h.fillRect(0,0,2048,2048),h.strokeStyle="#808080",h.lineWidth=10;for(let _=2048*.08;_<2048*.75;_+=2048*.07)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#606060",h.lineWidth=6;for(let _=0;_<2048;_+=48)h.beginPath(),h.moveTo(_,2048*.78),h.lineTo(_,2048),h.stroke();for(let _=2048*.8;_<2048;_+=48)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#909090",h.lineWidth=12,h.beginPath(),h.moveTo(0,2048*.775),h.lineTo(2048,2048*.775),h.stroke();for(const[_,g]of m)h.strokeStyle="#707070",h.lineWidth=14,h.beginPath(),h.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),h.stroke();return Mi(n,2048,2048,.018),vi(e,i,o,l,d)}function Ex(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[d,h]=Yt(1024,1024),u=En(54321);n.fillStyle="#3a3a40",n.fillRect(0,0,1024,1024*.3);for(let m=0;m<150;m++){const _=u()*1024,g=u()*1024*.3,p=5+u()*25;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(_,g),n.lineTo(_,g+p),n.stroke()}n.fillStyle="#4a4a50",n.fillRect(0,1024*.3,1024,1024*.05),n.fillStyle="#2a2a2e";for(let m=20;m<1024;m+=30)n.beginPath(),n.arc(m,1024*.325,4,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=.5,n.stroke();for(let m=1024*.35;m<1024*.92;m++){const _=(m-358.4)/583.68,g=Math.round(180+60*(1-_)),p=Math.round(100+30*(1-_)),x=Math.round(40+15*(1-_));n.fillStyle=`rgb(${g}, ${p}, ${x})`,n.fillRect(0,m,1024,1)}n.strokeStyle="rgba(100,60,25,0.3)",n.lineWidth=1;for(let m=6;m<1024;m+=12)n.beginPath(),n.moveTo(m,1024*.35),n.lineTo(m,1024*.92),n.stroke();const f=n.createLinearGradient(0,1024*.8,0,1024);f&&(f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(.4,"rgba(0,0,0,0.2)"),f.addColorStop(.8,"rgba(0,0,0,0.5)"),f.addColorStop(1,"rgba(0,0,0,0.7)"),n.fillStyle=f,n.fillRect(0,1024*.8,1024,1024*.2)),n.fillStyle="#6a6a70",n.fillRect(0,1024*.92,1024,1024*.03),n.fillStyle="#8a8a90",n.fillRect(0,1024*.95,1024,1024*.02),n.fillStyle="#2a2a30";for(let m=0;m<4;m++){const _=m/4*Math.PI*2+Math.PI/4,g=1024*.5+Math.cos(_)*1024*.38,p=1024*.15+Math.sin(_)*1024*.04;n.beginPath(),n.arc(g,p,1024*.04,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=1,n.stroke()}n.strokeStyle="#6a6a70",n.lineWidth=3,n.beginPath(),n.arc(1024/2,1024*.12,1024*.3,0,Math.PI*2),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let m=0;m<1024;m+=3)s.beginPath(),s.moveTo(m,0),s.lineTo(m,1024*.3),s.stroke();s.fillStyle="#c0c0c0";for(let m=20;m<1024;m+=30)s.beginPath(),s.arc(m,1024*.325,4,0,Math.PI*2),s.fill();s.strokeStyle="#606060",s.lineWidth=2;for(let m=6;m<1024;m+=12)s.beginPath(),s.moveTo(m,1024*.35),s.lineTo(m,1024*.92),s.stroke();s.strokeStyle="#a0a0a0",s.lineWidth=5,s.beginPath(),s.moveTo(0,1024*.3),s.lineTo(1024,1024*.3),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#404040",a.fillRect(0,0,1024,1024*.3),a.fillStyle="#606060",a.fillRect(0,1024*.3,1024,1024*.05),a.fillStyle="#707070",a.fillRect(0,1024*.35,1024,1024*.57),a.fillStyle="#c0c0c0",a.fillRect(0,1024*.8,1024,1024*.2),a.fillStyle="#303030",a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#e0e0e0",c.fillRect(0,0,1024,1024),c.fillStyle="#606060",c.fillRect(0,1024*.8,1024,1024*.2),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.3),h.lineTo(1024,1024*.3),h.stroke(),h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.strokeStyle="#808080",h.lineWidth=3;for(let m=6;m<1024;m+=12)h.beginPath(),h.moveTo(m,1024*.35),h.lineTo(m,1024*.92),h.stroke();return h.strokeStyle="#707070",h.lineWidth=8,h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),Mi(n,1024,1024,.01),vi(e,i,o,l,d)}function wx(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[d,h]=Yt(1024,1024),u=En(11111);n.fillStyle="#3a3d30",n.fillRect(0,0,1024,1024);for(let f=0;f<100;f++){const m=u()*1024,_=u()*1024,g=10+u()*50;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(m,_),n.lineTo(m,_+g),n.stroke()}n.fillStyle="#8a8a8e";for(let f=50;f<1024;f+=200)n.fillRect(0,f,1024,15),n.fillStyle="#6a6a6e",n.fillRect(0,f+15,1024,2),n.fillStyle="#8a8a8e";n.fillStyle="#2a2d22",n.fillRect(0,1024*.85,1024,1024*.15),n.strokeStyle="#4a4d42",n.lineWidth=1;for(let f=0;f<1024;f+=32)n.beginPath(),n.moveTo(f,1024*.85),n.lineTo(f,1024),n.stroke();for(let f=1024*.85;f<1024;f+=32)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();n.fillStyle="#222";for(let f=0;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);n.fillStyle="#ffcc00";for(let f=20;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=2;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024*.85),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=6;for(let f=50;f<1024;f+=200)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();s.strokeStyle="#606060",s.lineWidth=3;for(let f=0;f<1024;f+=32)s.beginPath(),s.moveTo(f,1024*.85),s.lineTo(f,1024),s.stroke();for(let f=1024*.85;f<1024;f+=32)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#707070",a.fillRect(0,0,1024,1024*.85),a.fillStyle="#909090";for(let f=50;f<1024;f+=200)a.fillRect(0,f,1024,17);a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),c.fillStyle="#303030",c.fillRect(0,0,1024,1024),c.fillStyle="#e0e0e0";for(let f=50;f<1024;f+=200)c.fillRect(0,f,1024,17);c.fillStyle="#a0a0a0",c.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#808080",h.lineWidth=8;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024*.85),h.stroke();h.strokeStyle="#909090",h.lineWidth=10;for(let f=50;f<1024;f+=200)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Mi(n,1024,1024,.02),vi(e,i,o,l,d)}function Ax(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[d,h]=Yt(1024,1024),u=En(22222);n.fillStyle="#4a4a4e",n.fillRect(0,0,1024,1024);for(let f=0;f<150;f++){const m=u()*1024,_=u()*1024,g=5+u()*30;n.strokeStyle=`rgba(255,255,255,${.02+u()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(m,_),n.lineTo(m,_+g),n.stroke()}n.fillStyle="#7a7a7e",n.fillRect(0,1024*.35,1024,1024*.3),n.fillStyle="#3a3a3e";for(let f=24;f<1024;f+=48)n.beginPath(),n.arc(f,1024*.5,6,0,Math.PI*2),n.fill(),n.strokeStyle="#6a6a6e",n.lineWidth=1,n.stroke();n.fillStyle="#cc3300";for(let f=0;f<8;f++){const m=f/8*Math.PI*2,_=1024*.5+Math.cos(m)*1024*.35,g=1024*.5+Math.sin(m)*1024*.35;n.beginPath(),n.arc(_,g,8,0,Math.PI*2),n.fill()}n.fillStyle="#5a5a5e",n.fillRect(0,0,1024,1024*.08),n.fillRect(0,1024*.92,1024,1024*.08),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#b0b0b0",s.lineWidth=10,s.beginPath(),s.moveTo(0,1024*.35),s.lineTo(1024,1024*.35),s.stroke(),s.beginPath(),s.moveTo(0,1024*.65),s.lineTo(1024,1024*.65),s.stroke(),s.fillStyle="#c0c0c0";for(let f=24;f<1024;f+=48)s.beginPath(),s.arc(f,1024*.5,6,0,Math.PI*2),s.fill();return s.strokeStyle="#a0a0a0",s.lineWidth=8,s.beginPath(),s.moveTo(0,1024*.08),s.lineTo(1024,1024*.08),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#404040",a.fillRect(0,1024*.35,1024,1024*.3),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.08),a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#d0d0d0",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#707070",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.65),h.lineTo(1024,1024*.65),h.stroke(),h.strokeStyle="#808080",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.08),h.lineTo(1024,1024*.08),h.stroke(),h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),Mi(n,1024,1024,.015),vi(e,i,o,l,d)}function Rx(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[d,h]=Yt(1024,1024),u=En(33333);n.fillStyle="#1a1a1c",n.fillRect(0,0,1024,1024);for(let f=0;f<3e3;f++){const m=u()*1024,_=u()*1024,g=1+u()*4,p=20+u()*50,x=u()*20-10;n.fillStyle=`rgb(${p+x},${p},${p-x})`,n.beginPath(),n.arc(m,_,g,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(40,20,10,0.3)",n.lineWidth=1+u()*2;for(let f=0;f<80;f++){const m=u()*1024,_=u()*1024*.3,g=50+u()*200;n.beginPath(),n.moveTo(m,_),n.lineTo(m+(u()-.5)*40,_+g),n.stroke()}n.strokeStyle="#0a0a0c",n.lineWidth=2;for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(f,0),n.lineTo(f,1024),n.stroke();for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024);for(let f=0;f<500;f++){const m=u()*1024,_=u()*1024,g=2+u()*5;s.fillStyle=`rgb(${128+u()*30},${128+u()*30},${128+u()*30})`,s.beginPath(),s.arc(m,_,g,0,Math.PI*2),s.fill()}s.strokeStyle="#404040",s.lineWidth=6;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024),s.stroke();for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#f0f0f0",a.fillRect(0,0,1024,1024),a.fillStyle="#ffffff",a.strokeStyle="#ffffff",a.lineWidth=8;for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f,1024),a.stroke();for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(0,f),a.lineTo(1024,f),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#303030",h.lineWidth=10;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024),h.stroke();for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Mi(n,1024,1024,.03),vi(e,i,o,l,d)}function cr(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[d,h]=Yt(1024,1024),u=En(44444),f=n.createLinearGradient(0,0,0,1024);f&&(f.addColorStop(0,"#b8862e"),f.addColorStop(.08,"#dba44a"),f.addColorStop(.15,"#e8b858"),f.addColorStop(.22,"#cf9a3e"),f.addColorStop(.3,"#b0802e"),f.addColorStop(.38,"#d8a84a"),f.addColorStop(.45,"#eac05e"),f.addColorStop(.52,"#c89838"),f.addColorStop(.6,"#b0802e"),f.addColorStop(.68,"#d8a84a"),f.addColorStop(.75,"#e8b858"),f.addColorStop(.85,"#c89838"),f.addColorStop(1,"#b8862e"),n.fillStyle=f,n.fillRect(0,0,1024,1024));for(let m=0;m<12;m++){const _=50+u()*924,g=50+u()*924,p=80+u()*300,x=80+u()*300;n.strokeStyle=`rgba(80,55,15,${.15+u()*.15})`,n.lineWidth=1+u()*2,n.strokeRect(_,g,p,x);const y=(u()-.5)*.06;n.fillStyle=`rgba(200,160,60,${y>0?y:0})`,n.fillRect(_+2,g+2,p-4,x-4)}n.strokeStyle="rgba(70,50,15,0.12)",n.lineWidth=3+u()*4;for(let m=0;m<60;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=40+u()*150;n.beginPath(),n.moveTo(_,g);const y=_+Math.cos(p+.3)*x*.5,S=g+Math.sin(p+.3)*x*.5;n.quadraticCurveTo(y,S,_+Math.cos(p)*x,g+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(60,40,10,0.18)",n.lineWidth=1.5;for(let m=0;m<120;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=15+u()*60;n.beginPath(),n.moveTo(_,g),n.lineTo(_+Math.cos(p)*x,g+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(255,230,160,0.15)",n.lineWidth=.5;for(let m=0;m<250;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=3+u()*25;n.beginPath(),n.moveTo(_,g),n.lineTo(_+Math.cos(p)*x,g+Math.sin(p)*x),n.stroke()}n.strokeStyle="rgba(30,20,5,0.1)",n.lineWidth=.5;for(let m=0;m<200;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=4+u()*30;n.beginPath(),n.moveTo(_+1,g+1),n.lineTo(_+Math.cos(p)*x+1,g+Math.sin(p)*x+1),n.stroke()}for(let m=0;m<120;m++){const _=u()*1024,g=u()*1024,p=2+u()*18,x=u();x<.33?n.fillStyle=`rgba(80,50,20,${.08+u()*.15})`:x<.66?n.fillStyle=`rgba(30,25,15,${.06+u()*.12})`:n.fillStyle=`rgba(60,80,40,${.04+u()*.08})`,n.beginPath(),n.arc(_,g,p,0,Math.PI*2),n.fill()}for(let m=0;m<50;m++){const _=u()*1024,g=u()*1024,p=1+u()*8,x=240+Math.floor(u()*15);n.fillStyle=`rgba(${x}, ${x-20}, ${x-80}, ${.15+u()*.2})`,n.beginPath(),n.arc(_,g,p,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,240,180,${.03+u()*.05})`,n.beginPath(),n.arc(_,g,p*3,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(160,120,40,0.12)",n.lineWidth=1;for(let m=0;m<1024;m+=15+u()*25){n.beginPath(),n.moveTo(0,m);for(let _=0;_<1024;_+=10)n.lineTo(_+u()*5,m+(u()-.5)*3);n.stroke()}s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#a0a0a0",s.lineWidth=2;for(let m=0;m<120;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=20+u()*100;s.beginPath(),s.moveTo(_,g);const y=_+Math.cos(p+.2)*x*.4,S=g+Math.sin(p+.2)*x*.4;s.quadraticCurveTo(y,S,_+Math.cos(p)*x,g+Math.sin(p)*x),s.stroke()}s.strokeStyle="#c0c0c0",s.lineWidth=1;for(let m=0;m<300;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=5+u()*40;s.beginPath(),s.moveTo(_,g),s.lineTo(_+Math.cos(p)*x,g+Math.sin(p)*x),s.stroke()}s.fillStyle="#606060";for(let m=0;m<100;m++){const _=u()*1024,g=u()*1024,p=2+u()*16;s.beginPath(),s.arc(_,g,p,0,Math.PI*2),s.fill()}a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#909090";for(let m=0;m<400;m++){const _=u()*1024,g=u()*1024,p=5+u()*50,x=3+u()*20;a.fillRect(_,g,p,x)}a.fillStyle="#c0c0c0";for(let m=0;m<100;m++){const _=u()*1024,g=u()*1024,p=2+u()*16;a.beginPath(),a.arc(_,g,p,0,Math.PI*2),a.fill()}c.fillStyle="#f0f0f0",c.fillRect(0,0,1024,1024),c.fillStyle="#303030";for(let m=0;m<100;m++){const _=u()*1024,g=u()*1024,p=2+u()*16;c.beginPath(),c.arc(_,g,p,0,Math.PI*2),c.fill()}c.strokeStyle="#808080",c.lineWidth=2;for(let m=0;m<12;m++){const _=50+u()*924,g=50+u()*924,p=80+u()*300,x=80+u()*300;c.strokeRect(_,g,p,x)}h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=3;for(let m=0;m<400;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=5+u()*50;h.beginPath(),h.moveTo(_,g),h.lineTo(_+Math.cos(p)*x,g+Math.sin(p)*x),h.stroke()}h.strokeStyle="#808080",h.lineWidth=2;for(let m=0;m<200;m++){const _=u()*1024,g=u()*1024,p=u()*Math.PI*2,x=10+u()*80;h.beginPath(),h.moveTo(_,g);const y=_+Math.cos(p+.3)*x*.5,S=g+Math.sin(p+.3)*x*.5;h.quadraticCurveTo(y,S,_+Math.cos(p)*x,g+Math.sin(p)*x),h.stroke()}h.fillStyle="#888888";for(let m=0;m<100;m++){const _=u()*1024,g=u()*1024,p=3+u()*18;h.beginPath(),h.arc(_,g,p,0,Math.PI*2),h.fill()}return Mi(n,1024,1024,.02),vi(e,i,o,l,d)}function pu(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[d,h]=Yt(1024,1024);n.fillStyle="#f5f5f0",n.fillRect(0,0,1024,1024),n.strokeStyle="rgba(200,200,190,0.15)",n.lineWidth=1;for(let u=0;u<1024;u+=4)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();n.strokeStyle="rgba(200,200,190,0.1)";for(let u=0;u<1024;u+=4)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.strokeStyle="rgba(160,160,150,0.3)",n.lineWidth=2;for(let u=0;u<1024;u+=32)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();for(let u=0;u<1024;u+=32)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.strokeStyle="rgba(120,120,110,0.4)",n.lineWidth=1,n.setLineDash([8,16]);for(let u=16;u<1024;u+=64)n.beginPath(),n.moveTo(u,0),n.lineTo(u,1024),n.stroke();for(let u=16;u<1024;u+=64)n.beginPath(),n.moveTo(0,u),n.lineTo(1024,u),n.stroke();n.setLineDash([]),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let u=0;u<1024;u+=8)s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke();for(let u=0;u<1024;u+=8)s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=4;for(let u=0;u<1024;u+=32)s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke();for(let u=0;u<1024;u+=32)s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke();a.fillStyle="#c0c0c0",a.fillRect(0,0,1024,1024),a.fillStyle="#e0e0e0",a.strokeStyle="#e0e0e0",a.lineWidth=6;for(let u=0;u<1024;u+=32)a.beginPath(),a.moveTo(u,0),a.lineTo(u,1024),a.stroke();for(let u=0;u<1024;u+=32)a.beginPath(),a.moveTo(0,u),a.lineTo(1024,u),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#a0a0a0",h.lineWidth=6;for(let u=0;u<1024;u+=32)h.beginPath(),h.moveTo(u,0),h.lineTo(u,1024),h.stroke();for(let u=0;u<1024;u+=32)h.beginPath(),h.moveTo(0,u),h.lineTo(1024,u),h.stroke();return Mi(n,1024,1024,.02),vi(e,i,o,l,d)}function mu(r,t,e,n,i,s){const o=document.createElement("canvas");o.width=r,o.height=t;const a=o.getContext("2d"),l=En(s),c=a.createImageData(r,t);for(let h=0;h<t;h++){const u=h/t;let f=0,m=0,_=0,g=0;for(const p of e){const x=Math.abs(u-p.y)/p.width;if(x<1){const y=1-x*x,S=Cx(p.color);f+=S[0]*y,m+=S[1]*y,_+=S[2]*y,g+=y}}g>0&&(f/=g,m/=g,_/=g);for(let p=0;p<r;p++){const x=p/r,y=Math.sin(x*n+u*n*.5+s)*i+Math.sin(x*n*2.3+u*n*.7+s*2)*i*.5;let S=f,A=m,w=_;const b=y*30;S+=b,A+=b*.7,w+=b*.3;const F=(l()-.5)*8,M=(h*r+p)*4;c.data[M]=jn(S+F),c.data[M+1]=jn(A+F),c.data[M+2]=jn(w+F),c.data[M+3]=255}}a.putImageData(c,0,0);const d=new qe(o);return d.wrapS=d.wrapT=Ue,d.colorSpace=re,d}function Cx(r){const t=parseInt(r.slice(1,3),16),e=parseInt(r.slice(3,5),16),n=parseInt(r.slice(5,7),16);return[t,e,n]}function jn(r){return Math.min(255,Math.max(0,Math.round(r)))}function Px(){const n=mu(1024,512,[{y:0,width:.08,color:"#5a4a3a",turbulence:.3},{y:.05,width:.06,color:"#6a4c36",turbulence:.3},{y:.1,width:.04,color:"#8a6a48",turbulence:.4},{y:.18,width:.06,color:"#c4a46a",turbulence:.5},{y:.24,width:.04,color:"#d4b880",turbulence:.5},{y:.3,width:.05,color:"#8a6a3a",turbulence:.6},{y:.38,width:.04,color:"#e4d0a0",turbulence:.7},{y:.42,width:.03,color:"#f0e0b8",turbulence:.8},{y:.46,width:.03,color:"#e8d4a8",turbulence:.7},{y:.5,width:.03,color:"#dcc89c",turbulence:.7},{y:.54,width:.03,color:"#e4d0a0",turbulence:.8},{y:.58,width:.03,color:"#f0e0b8",turbulence:.7},{y:.62,width:.04,color:"#e4d0a0",turbulence:.6},{y:.7,width:.05,color:"#8a6a3a",turbulence:.6},{y:.76,width:.04,color:"#c4a46a",turbulence:.5},{y:.82,width:.06,color:"#d4b880",turbulence:.5},{y:.9,width:.04,color:"#7a5a3a",turbulence:.4},{y:.94,width:.06,color:"#6a4c36",turbulence:.3},{y:1,width:.08,color:"#5a4a3a",turbulence:.3}],40,.015,777),s=n.image.getContext("2d"),o=.33*1024,a=.56*512,l=40+En(888)()*10,c=s.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,"#c04830"),c.addColorStop(.3,"#b04028"),c.addColorStop(.6,"#a05030"),c.addColorStop(.8,"#8a4830"),c.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=c,s.beginPath(),s.arc(o,a,l,0,Math.PI*2),s.fill();const d=.55*1024,h=.48*512,u=15+En(889)()*5,f=s.createRadialGradient(d,h,0,d,h,u);return f.addColorStop(0,"#d06040"),f.addColorStop(.5,"#b05038"),f.addColorStop(1,"rgba(120,60,40,0)"),s.fillStyle=f,s.beginPath(),s.arc(d,h,u,0,Math.PI*2),s.fill(),n.needsUpdate=!0,n}function Lx(){return mu(1024,512,[{y:0,width:.08,color:"#a09070",turbulence:.2},{y:.06,width:.06,color:"#b8a888",turbulence:.2},{y:.12,width:.05,color:"#a89878",turbulence:.3},{y:.18,width:.06,color:"#c8b898",turbulence:.3},{y:.25,width:.05,color:"#b8a888",turbulence:.4},{y:.32,width:.05,color:"#d4c8a8",turbulence:.4},{y:.38,width:.04,color:"#c0b090",turbulence:.5},{y:.42,width:.03,color:"#e8dcc0",turbulence:.5},{y:.46,width:.03,color:"#d4c8a8",turbulence:.5},{y:.5,width:.03,color:"#f0e4d0",turbulence:.5},{y:.54,width:.03,color:"#d4c8a8",turbulence:.5},{y:.58,width:.04,color:"#e8dcc0",turbulence:.5},{y:.64,width:.05,color:"#c0b090",turbulence:.4},{y:.7,width:.05,color:"#b8a888",turbulence:.4},{y:.76,width:.06,color:"#a89878",turbulence:.3},{y:.85,width:.05,color:"#b8a888",turbulence:.2},{y:.92,width:.08,color:"#a09070",turbulence:.2}],30,.01,333)}function Ix(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=En(222),s=n.createImageData(1024,512);for(let a=0;a<512;a++){const l=a/512,d=.6+(Math.sin(l*12)*.3+Math.sin(l*24)*.15+Math.sin(l*6)*.4)*.1;for(let h=0;h<1024;h++){const u=h/1024,f=Math.sin(u*8+l*4)*.03,m=(i()-.5)*.04,_=(.48+d*.12+f+m)*255,g=(.7+d*.18+f*.5+m)*255,p=(.75+d*.2+m)*255,x=(a*1024+h)*4;s.data[x]=jn(_),s.data[x+1]=jn(g),s.data[x+2]=jn(p),s.data[x+3]=255}}n.putImageData(s,0,0);const o=new qe(e);return o.wrapS=o.wrapT=Ue,o.colorSpace=re,o}function Dx(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=En(444),s=n.createImageData(1024,512);for(let _=0;_<512;_++){const g=_/512,x=.5+(Math.sin(g*14)*.5+Math.sin(g*28)*.2+Math.sin(g*7)*.3)*.08;for(let y=0;y<1024;y++){const S=y/1024,A=Math.sin(S*10+g*5)*.04,w=(i()-.5)*.03,b=(.18+x*.08+A+w)*255,F=(.25+x*.12+A*.7+w)*255,M=(.7+x*.2+w)*255,T=(_*1024+y)*4;s.data[T]=jn(b),s.data[T+1]=jn(F),s.data[T+2]=jn(M),s.data[T+3]=255}}n.putImageData(s,0,0);const o=.3*1024,a=.65*512,l=30,c=n.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,"#0a0a2a"),c.addColorStop(.3,"#101040"),c.addColorStop(.6,"#1a2050"),c.addColorStop(1,"rgba(30,40,80,0)"),n.fillStyle=c,n.beginPath(),n.arc(o,a,l,0,Math.PI*2),n.fill();const d=.3*1024+35,h=.65*512-15,u=15,f=n.createRadialGradient(d,h,0,d,h,u);f.addColorStop(0,"rgba(200,220,255,0.4)"),f.addColorStop(.5,"rgba(180,200,240,0.2)"),f.addColorStop(1,"rgba(180,200,240,0)"),n.fillStyle=f,n.beginPath(),n.arc(d,h,u,0,Math.PI*2),n.fill(),n.putImageData(s,0,0);const m=new qe(e);return m.wrapS=m.wrapT=Ue,m.colorSpace=re,m}const oh={S:{radius:.5*kt,height:.7*kt},M:{radius:.7*kt,height:1.1*kt},L:{radius:1*kt,height:1.6*kt},XL:{radius:1.4*kt,height:2.2*kt}},Ze=Math.PI,Ce=64;let ma=0;function ga(){return ma=ma*1664525+1013904223>>>0,(ma>>>0)/4294967295}function tn(r,t){const e=r.attributes.position;if(!e)return;const n=e.array;for(let i=0;i<n.length;i+=3){const s=(ga()-.5)*2,o=(ga()-.5)*2,a=(ga()-.5)*2;n[i]=n[i]+s*t,n[i+1]=n[i+1]+o*t,n[i+2]=n[i+2]+a*t}e.needsUpdate=!0,r.computeVertexNormals()}const gu=new F_,_i=new Map;async function Ux(r,t=1){const e=Ns(r);if(_i.has(r))return _i.get(r).clone();const n=[e];e!==r&&n.push(r),r.startsWith("/")&&n.push(r.slice(1));let i;for(const s of n)try{const a=(await gu.loadAsync(s)).scene;if(!a)continue;return a.traverse(l=>{if(l instanceof ut)if(l.castShadow=!0,l.receiveShadow=!0,l.material){const c=Array.isArray(l.material)?l.material:[l.material];for(const d of c)if(d instanceof ge){if(d.roughness=Math.max(.1,d.roughness??.5),d.metalness=Math.max(0,d.metalness??0),d.color){const p={h:0,s:0,l:0};d.color.getHSL(p),p.s<.3&&(p.s=Math.min(1,p.s*1.5+.05),p.l=Math.min(1,Math.max(.1,p.l*1.1)),d.color.setHSL(p.h,p.s,p.l))}const h=l.name.toLowerCase(),u=h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor")||h.includes("bell"),f=h.includes("metal")||h.includes("hull")||h.includes("body")||h.includes("frame")||h.includes("strut"),m=h.includes("glass")||h.includes("window")||h.includes("canopy")||h.includes("cockpit"),_=h.includes("heat")||h.includes("shield")||h.includes("tile"),g=h.includes("solar")||h.includes("panel")||h.includes("array");u?(d.roughness=Math.max(.05,d.roughness),d.metalness=Math.min(1,d.metalness+.3),d.emissive=new wt(8930338),d.emissiveIntensity=.15):f?(d.roughness=Math.max(.1,d.roughness*.7),d.metalness=Math.min(1,d.metalness+.4)):m?(d.roughness=0,d.metalness=0,d.transparent=!0,d.opacity=.6,d.emissive=new wt(4491519),d.emissiveIntensity=.08):_?(d.roughness=Math.min(1,d.roughness+.2),d.metalness=0):g&&(d.roughness=.8,d.metalness=0,d.emissive=new wt(4491519),d.emissiveIntensity=.03),!u&&!m&&!g&&(h.includes("engine")||h.includes("nozzle")||h.includes("thruster")||h.includes("motor"))&&(d.emissive=new wt(4465152),d.emissiveIntensity=.05),d.needsUpdate=!0}else if(d instanceof Me||d instanceof n_){const h=new ge({color:d.color??16777215,map:d.map,normalMap:d.normalMap,roughnessMap:d.roughnessMap,metalnessMap:d.metalnessMap,aoMap:d.aoMap,roughness:.5,metalness:.1});l.material=h}}else l.material=new ge({color:13421772,roughness:.5,metalness:.1})}),a.scale.setScalar(t),_i.set(r,a),a.clone()}catch(o){i=o}return console.error("Failed to load GLTF after all attempts:",r,i),Te.show(`Failed to load model: ${r.split("/").pop()}`,3e3),null}const _a=new Map;function gn(r,t){return _a.has(r)||_a.set(r,t()),_a.get(r)}function Be(r,t={}){const e={map:r.color,normalMap:r.normal,roughnessMap:r.roughness,metalnessMap:r.metalness,roughness:1,metalness:1,...t};return r.ao&&(e.aoMap=r.ao,e.aoMapIntensity=1),r.emissive&&(e.emissiveMap=r.emissive),new ge(e)}function de(r,t=1){const e=r.attributes.position;if(!e)return;let n=r.attributes.uv;n||(n=new Pe(new Float32Array(e.count*2),2));let i=1/0,s=-1/0;for(let a=0;a<e.count;a++){const l=e.getY(a);l<i&&(i=l),l>s&&(s=l)}const o=s-i||1;for(let a=0;a<e.count;a++){const l=e.getX(a),c=e.getY(a),d=e.getZ(a),u=(Math.atan2(l,d)+Math.PI)/(2*Math.PI),f=(c-i)/o*t;n.setXY(a,u,f)}r.setAttribute("uv",n),n.needsUpdate=!0,r.attributes.uv2||r.setAttribute("uv2",n.clone())}function _u(r){const t=new sn;t.name=r.id;const e=oh[r.size];switch(r.kind){case"capsule":Nx(t,e,r.id);break;case"tank":Fx(t,e,r.size);break;case"engine":kx(t,e,r.size);break;case"parachute":Ox(t,e);break;case"legs":Hx(t,e);break;case"decoupler":Bx(t,e);break;case"heatshield":zx(t,e);break;case"gltf":{if(r.gltfUrl&&_i.has(r.gltfUrl)){const n=r.gltfScale??1,i=_i.get(r.gltfUrl).clone();i.scale.setScalar(n);const s=new mn().setFromObject(i),o=new P;s.getCenter(o),i.position.sub(o);const a=[],l=[];i.traverse(c=>{if(c instanceof ut){const d=c.name.toLowerCase();if(d.includes("engine")||d.includes("nozzle")||d.includes("thruster")||d.includes("motor")||d.includes("combustion")||c.position.y<-.1){const f=new mn().setFromObject(c),m=new P;f.getCenter(m);const _=m.clone().sub(i.position);a.push(_),l.push(c)}c.castShadow=!0,c.receiveShadow=!0}}),i.userData.nozzlePoints=a,i.userData.engineMeshes=l,t.add(i)}else{const n=oh[r.size],i=new ge({color:8956620,roughness:.4,metalness:.3}),s=new he(n.radius,n.radius*.8,n.height*.8,16);de(s);const o=new ut(s,i);o.position.y=-n.height*.1,t.add(o);const a=new sl(n.radius*.6,n.height*.2,16),l=new ge({color:13386820,roughness:.6,metalness:.1}),c=new ut(a,l);c.position.y=n.height*.4,t.add(c);const d=new ge({color:6710920,roughness:.8,metalness:0});for(let h=0;h<4;h++){const u=h/4*Math.PI*2,f=new yi(n.radius*.02,n.height*.15,n.radius*.3),m=new ut(f,d);m.position.set(Math.sin(u)*n.radius*1.05,-n.height*.35,Math.cos(u)*n.radius*1.05),m.rotation.y=-u,t.add(m)}}break}}return t}function Nx(r,t,e){const n=t.radius,i=t.height,s=e.includes("mk1"),o=gn(`capsule_${s?"mk1":"mk2"}`,Tx),a=Be(o),l=gn("gold",cr),c=Be(l),d=new he(n,n,i*.6,Ce);de(d);const h=new ut(d,a);h.position.y=i*.05,r.add(h);const u=new fe(n,Ce,Ce,0,Ze*2,0,Ze/2);de(u,.5);const f=new ut(u,a);f.position.y=i*.35,r.add(f);const m=new ut(new fe(n*.08,12,8),c);m.position.y=i*.35+n*.5,r.add(m);const _=s?14500932:30673,g=new ge({color:_,roughness:.6,metalness:.1}),p=new he(n*1.04,n*1.04,i*.05,Ce);de(p),tn(p,kt*.008);const x=new ut(p,g);x.position.y=i*.05,r.add(x);const y=new he(n*1.04,n*1.04,i*.03,Ce);de(y),tn(y,kt*.008);const S=new ut(y,g);S.position.y=-i*.15,r.add(S);const A=new he(n*1.3,n*.95,i*.15,Ce);de(A),tn(A,kt*.01);const w=new ut(A,c);w.position.y=-i*.3-i*.075,r.add(w);const b=Be(o,{color:1726856,roughness:.1,metalness:.8,transparent:!0,opacity:.3}),F=new ut(new bo(n*.2,16),b);F.position.set(n+.001,i*.18,0),F.rotation.y=-Ze/2,r.add(F);const M=new Me({color:3381759,transparent:!0,opacity:.6}),T=new ut(new In(n*.2,n*.24,16),M);T.position.set(n+.001,i*.18,0),T.rotation.y=-Ze/2,r.add(T)}function Fx(r,t,e){const n=t.radius,i=t.height,s=gn(`tank_${e}`,()=>bx(e)),o=Be(s),a=gn("gold",cr),l=Be(a),c=new he(n,n,i,Ce);de(c);const d=new ut(c,o);r.add(d);const h=i*.03,u=new he(n*1.03,n*1.03,h,Ce);de(u),tn(u,kt*.006);const f=new ut(u,l);f.position.y=i/2-h/2,r.add(f);const m=new he(n*1.03,n*1.03,h,Ce);de(m),tn(m,kt*.006);const _=new ut(m,l);_.position.y=-i/2+h/2,r.add(_);for(let x=0;x<3;x++){const y=new fo(n*1.01,h*1.5,6,Ce);de(y),tn(y,kt*.005);const S=new ut(y,l);S.position.y=-i/2+i*.2*(x+1),S.rotation.x=Ze/2,r.add(S)}const g=new fo(n*1.02,h*1.2,6,Ce);de(g),tn(g,kt*.005);const p=new ut(g,l);p.position.y=0,p.rotation.x=Ze/2,r.add(p)}function kx(r,t,e){const n=t.radius,i=t.height,s=gn(`engine_${e}`,Ex),o=Be(s),a=gn("gold",cr),l=Be(a),c=new he(n*1.4,n*.6,i*.25,Ce);de(c);const d=new ut(c,o);d.position.y=i*.35,r.add(d);const h=new he(n*.6,n*.5,i*.06,Ce);de(h),tn(h,kt*.015);const u=new ut(h,l);u.position.y=i*.12,r.add(u);const f=new he(n*.5,n*.85,i*.4,Ce);de(f,1.5),tn(f,kt*.01);const m=new ut(f,o);m.position.y=-i*.12,r.add(m);const _=Be(s,{color:1712682,roughness:.7,metalness:.5}),g=new he(n*.35,n*.7,i*.38,Ce);de(g,1.5),tn(g,kt*.012);const p=new ut(g,_);p.position.y=-i*.12,r.add(p);const x=new he(n*.88,n*.88,i*.03,Ce);de(x),tn(x,kt*.008);const y=new ut(x,l);y.position.y=-i*.12-i*.2-i*.015,r.add(y);const S=new Me({color:16746496,transparent:!0,opacity:.4}),A=new ut(new In(0,n*.3,Ce),S);A.position.y=-i*.12-i*.2-i*.02,A.rotation.x=-Ze/2,r.add(A)}function Ox(r,t){const e=t.radius,n=t.height,i=gn("fabric",pu),s=gn("gold",cr),o=Be(s),a=Be(i,{color:8952234,roughness:.5,metalness:.1}),l=new he(e*.35,e*.35,n*.18,12);de(l);const c=new ut(l,a);c.position.y=n*.55,r.add(c);const d=Be(i,{color:6978186,roughness:.4,metalness:.2}),h=new he(e*.37,e*.37,n*.03,12);de(h);const u=new ut(h,d);u.position.y=n*.55+n*.09,r.add(u);const f=new he(e*.37,e*.37,n*.02,12);de(f);const m=new ut(f,o);m.position.y=n*.55-n*.09,r.add(m)}function Xa(r){const t=new sn,e=r.radius,n=r.height,i=24,s=gn("fabric",pu),o=Be(s,{side:De,transparent:!0,opacity:.95}),a=new fe(e*1.8,i,i,0,Ze*2,0,Ze*.5);de(a,.5);const l=new ut(a,o);l.position.y=n*.3,l.rotation.x=Ze,t.add(l);const c=Be(s,{color:14500932,side:De,transparent:!0,opacity:.9});for(let h=0;h<6;h++){const u=h/6*Ze*2,f=new yi(e*.03,n*.7,e*.015),m=new ut(f,c);m.position.set(Math.cos(u)*e*.9,n*.4,Math.sin(u)*e*.9),m.rotation.x=Ze,m.lookAt(0,n*.8,0),t.add(m)}const d=Be(s,{color:6978186,roughness:.5,metalness:.4});for(let h=0;h<4;h++){const u=h/4*Ze*2+Ze/4;for(let f=0;f<3;f++){const m=new he(.006,.006,n*.15,4);de(m);const _=new ut(m,d),g=u+(f-1)*.3;_.position.set(Math.cos(g)*e*1.5,n*.15-n*.06*f,Math.sin(g)*e*1.5),t.add(_)}}return t}function Hx(r,t){const e=t.radius,n=t.height,i=gn("legs",wx),s=Be(i),o=Be(i,{color:2764066,roughness:.8,metalness:.2});for(let a=0;a<4;a++){const l=a/4*Ze*2+Ze/4,c=new he(.01,.007,n*.35,6);de(c);const d=new ut(c,s),h=Math.cos(l)*e*.65,u=Math.sin(l)*e*.65;d.position.set(h,-n/2-n*.175,u),d.rotation.z=Math.cos(l)*.3,d.rotation.x=Math.sin(l)*.3,r.add(d);const f=new he(.02,.025,.008,6);de(f);const m=new ut(f,o);m.position.set(Math.cos(l)*e*.95,-n/2-n*.35,Math.sin(l)*e*.95),r.add(m)}}function Bx(r,t){const e=t.radius,n=t.height,i=gn("decoupler",Ax),s=Be(i),o=gn("gold",cr),a=Be(o),l=new he(e*1.05,e*.92,n*.12,Ce);de(l),tn(l,kt*.008);const c=new ut(l,s);r.add(c);const d=new he(e*1.08,e*1.08,n*.04,Ce);de(d),tn(d,kt*.005);const h=new ut(d,a);h.position.y=n*.06,r.add(h);const u=new he(e*.92,e*.92,n*.04,Ce);de(u),tn(u,kt*.008);const f=new ut(u,s);f.position.y=-n*.06,r.add(f)}function zx(r,t){const e=t.radius,n=t.height,i=gn("heatshield",Rx),s=Be(i),o=new he(e*1.2,e*.8,n*.2,Ce,1,!0);de(o,.5),tn(o,kt*.012);const a=new ut(o,s);a.position.y=-n*.1,r.add(a);const l=new he(e*.8,e*.8,n*.08,Ce);de(l),tn(l,kt*.01);const c=new ut(l,s);c.position.y=-n*.2,r.add(c)}const xu=Object.freeze(Object.defineProperty({__proto__:null,buildDeployedParachute:Xa,buildPartMesh:_u,gltfCache:_i,gltfLoader:gu,loadGLTF:Ux},Symbol.toStringTag,{value:"Module"}));class po{roots=[];addRoot(t){this.roots.push(t)}totalFuelCapacity(){let t=0;const e=n=>{n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}totalMass(){let t=0;const e=n=>{t+=n.part.mass,n.children.forEach(e)};return this.roots.forEach(e),t}totalMassWithFuel(){let t=0;const e=n=>{t+=n.part.mass,n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}centerOfMass(){let t=0,e=0,n=0,i=0;const s=o=>{const a=o.part.mass;t+=a,e+=o.position[0]*a,n+=o.position[1]*a,i+=o.position[2]*a,o.children.forEach(s)};return this.roots.forEach(s),t===0?[0,0,0]:[e/t,n/t,i/t]}toMesh(){const t=new sn,e=(i,s)=>{const o=_u(i.part);o.position.set(i.position[0],i.position[1],i.position[2]),o.rotation.y=i.rotation,s.add(o),i.children.forEach(a=>e(a,o))};this.roots.forEach(i=>e(i,t));const n=this.centerOfMass();for(const i of t.children)i.position.x-=n[0],i.position.y-=n[1],i.position.z-=n[2];return t}}const Gx={S:.7*kt,M:1.1*kt,L:1.6*kt,XL:2.2*kt};function io(r,t,e){const n=eo(t);if(!n)return e;const i=Gx[n.size]||.6*kt;return r.addRoot({part:n,position:[0,e+i/2,0],rotation:0,children:[]}),e+i}const Wx={tiny:{tank:"tank_s_lfo",engine:"engine_ant"},small:{tank:"tank_m_lfo",engine:"engine_vector"},medium:{tank:"tank_l_lfo",engine:"engine_mastodon"},large:{tank:"tank_xl_lfo",engine:"engine_mammoth"}};function ah(r,t,e,n=[]){const i=Wx[e];if(!i)return t;for(const s of[i.tank,i.engine,...n])t=io(r,s,t);return t}function Vx(r){const t=r.toLowerCase(),e=/sun|солн|heliocentric/.test(t),n=/mars|марс/.test(t),i=/venus|венер/.test(t),s=/mercury|меркур/.test(t),o=/moon|лун/.test(t),a=/orbit|орбит|station|станц|satellite|спутник/.test(t),l=/suborbit|суборбит|test|тест|hop|прыж/.test(t),c=/land|сади|посад|touchdown/.test(t)&&!/flyby|пролет/.test(t),d=/return|back|верн|обратн|round.?trip|there\s+and\s+back/.test(t)||o&&c||n&&c,h=d||/parachute|парашют|chute/.test(t)||!c,u=c||/legs|ноги|landing\s+gear/.test(t);let f=1,m="small";return l?(f=1,m="tiny"):a?(f=1,m="small"):o?(f=d?2:1,m="medium"):n||i?(f=d?3:2,m="large"):s?(f=2,m="medium"):e?(f=3,m="large"):/big|large|тяже|больш|huge|super|giant/.test(t)?(f=2,m="large"):/small|tiny|легк|малень/.test(t)?(f=1,m="tiny"):/safe|50%|half/.test(t)?(f=2,m="medium",f=2):(f=1,m="small"),/heavy|super|giant|тяжел/.test(t)&&m!=="large"&&(m=m==="tiny"?"small":"large"),/safe|50%|half\s+fuel/.test(t)&&(f=2,m="large"),{stages:f,stageSize:m,needsParachute:h,needsLegs:u,needsReturn:d}}function Xx(r){const t=new po;let e=0;const n=r.stageSize,i=r.needsReturn?Math.max(1,r.stages-1):r.stages;for(let s=0;s<i;s++){const o=s===0?n:n==="large"&&s>0?"medium":n,a=[];s===0&&r.needsLegs&&a.push("legs_landini"),e=ah(t,e,o,a)}return r.needsReturn&&r.stages>1&&(e=io(t,"decoupler_1",e),e=ah(t,e,n==="large"?"small":"tiny")),e=io(t,"capsule_mk1",e),r.needsParachute&&(e=io(t,"parachute_mk16",e)),t}function qx(r){const t=Vx(r);return Xx(t)}const Ks={S:.7*kt,M:1.1*kt,L:1.6*kt,XL:2.2*kt};class Yx{scene;camera;assembly;rocketGroup;rootEl;partListEl;currentRocketEl;onLaunch;stackHeight=0;addedPartNames=[];framed=!1;vabAzimuth=0;vabPolar=Math.PI/2;vabDist=3;vabIsDragging=!1;vabPrevMouse={x:0,y:0};vabTarget=new P(0,kt,0);constructor(t){this.onLaunch=t,this.scene=new Qh,this.scene.background=new wt(658714),this.scene.add(new hu(4473958,.5));const e=new rr(16777215,3);e.position.set(2,4,3),this.scene.add(e);const n=new rr(8947916,1);n.position.set(-2,1,-1),this.scene.add(n);const i=new lu(8947916,4473958,.8);this.scene.add(i);const s=10,o=20,a=new L_(s,o,3359846,2241365);a.position.y=-.3,this.scene.add(a);const l=new In(.5,.8,32),c=new ge({color:2241365,metalness:.6,roughness:.4,side:De}),d=new ut(l,c);d.rotation.x=-Math.PI/2,d.position.y=-.28,this.scene.add(d),this.camera=new Qe(50,window.innerWidth/window.innerHeight,.01,1e3),this.updateVabCamera();const h=kt*4,u=new ut(new yi(h,.02*kt,h),new ge({color:1843264,roughness:.9}));u.position.y=-kt*.3,this.scene.add(u),this.assembly=new po,this.rocketGroup=new sn,this.scene.add(this.rocketGroup),this.setupVabOrbit(),this.rootEl=document.createElement("div"),this.rootEl.style.cssText="position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;",this.rootEl.innerHTML=`
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
    `,this.partListEl=this.rootEl.querySelector("#vab-parts"),this.currentRocketEl=this.rootEl.querySelector("#vab-current"),this.buildPartList(),this.buildPresets(),this.updateCurrentList(),this.rootEl.querySelector("#vab-launch").addEventListener("click",()=>{this.assembly.roots.length>0&&this.onLaunch(this.assembly)}),this.rootEl.querySelector("#vab-remove").addEventListener("click",()=>this.removeLast()),this.rootEl.querySelector("#vab-clear").addEventListener("click",()=>this.clearAll())}buildPresets(){const t=[{label:"🚀 Suborbital",desc:"suborbital test",color:"#6688aa"},{label:"🛸 Earth Orbit",desc:"earth orbit",color:"#4488FF"},{label:"🌙 Moon Landing",desc:"land on moon",color:"#88AACC"},{label:"🌙 Moon Return",desc:"land on moon and return",color:"#EACD9E"},{label:"🌙+🛡️ Moon Safe",desc:"safe moon landing and return with 50% fuel",color:"#66DD88"},{label:"🔴 Mars",desc:"mars mission",color:"#d4733a"},{label:"☀️ Solar Orbit",desc:"orbit around the sun",color:"#ffdd44"},{label:"🪐 Heavy Lifter",desc:"heavy interplanetary",color:"#CC88AA"}],e=this.rootEl.querySelector("#vab-presets");for(const n of t){const i=document.createElement("button");i.textContent=n.label,i.title=n.desc,i.style.cssText=`flex:1;min-width:80px;padding:5px 6px;background:rgba(244,245,242,0.06);color:${n.color};border:1px solid rgba(244,245,242,0.1);border-radius:3px;font-size:9px;cursor:pointer;pointer-events:auto;text-align:center;white-space:nowrap;`,i.addEventListener("mouseenter",()=>{i.style.background="rgba(244,245,242,0.12)"}),i.addEventListener("mouseleave",()=>{i.style.background="rgba(244,245,242,0.06)"}),i.addEventListener("click",()=>{this.clearAll(),this.assembly=qx(n.desc),this.refreshMesh(),this.syncPartsFromAssembly()}),e.appendChild(i)}}buildPartList(){for(const t of uu){const e=document.createElement("button"),n=t.size?` [${t.size}]`:"";let i="";t.kind==="tank"&&t.fuelCapacity&&(i=` — ${(t.fuelCapacity/1e3).toFixed(0)}t`),t.kind==="engine"&&t.thrust&&(i=` — ${t.thrust}kN`),e.textContent=t.name+n+i,e.title=`${t.kind} — mass: ${t.mass}kg${t.fuelCapacity?", fuel: "+t.fuelCapacity+"kg":""}${t.thrust?", thrust: "+t.thrust+"kN":""}`,e.style.cssText="display:block;width:100%;padding:6px 8px;background:transparent;color:#F4F5F2;border:none;border-radius:3px;font-size:11px;text-align:left;cursor:pointer;margin-bottom:2px;",e.addEventListener("mouseenter",()=>{e.style.background="rgba(234,205,158,0.1)"}),e.addEventListener("mouseleave",()=>{e.style.background="transparent"}),e.addEventListener("click",()=>this.addPart(t)),this.partListEl.appendChild(e)}}addPart(t){const e=Ks[t.size]||.6*kt,n=this.stackHeight+e/2;this.assembly.addRoot({part:t,position:[0,n,0],rotation:0,children:[]}),this.stackHeight+=e,this.addedPartNames.push(t.name),this.refreshMesh(),this.updateCurrentList()}removeLast(){if(this.assembly.roots.length===0)return;const t=this.assembly.roots.pop(),e=Ks[t.part.size]||.6*kt;this.stackHeight-=e,this.addedPartNames.pop(),this.refreshMesh(),this.updateCurrentList()}clearAll(){this.assembly=new po,this.stackHeight=0,this.addedPartNames=[],this.refreshMesh(),this.updateCurrentList()}updateCurrentList(){if(this.addedPartNames.length===0){this.currentRocketEl.innerHTML='<div style="color:rgba(244,245,242,0.3);font-size:10px;font-style:italic;">No parts — click from list below</div>';return}const t=this.assembly.roots.reduce((n,i)=>n+i.part.mass+this.childMass(i),0),e=this.assembly.roots.reduce((n,i)=>n+(i.part.fuelCapacity??0)+this.childFuel(i),0);this.currentRocketEl.innerHTML='<div style="color:rgba(244,245,242,0.4);font-size:9px;letter-spacing:0.05em;margin-bottom:4px;">CURRENT ROCKET (top to bottom):</div>'+[...this.addedPartNames].reverse().map((n,i)=>`<div style="color:#F4F5F2;font-size:10px;padding:1px 0;${i===0?"color:#EACD9E;":""}">${i===0?"▲ ":""}${n}</div>`).join("")+`<div style="color:rgba(244,245,242,0.35);font-size:9px;margin-top:6px;border-top:1px solid rgba(244,245,242,0.1);padding-top:4px;">${this.addedPartNames.length} parts | ${t.toFixed(1)}kg | ${e.toFixed(0)}kg fuel</div>`}childMass(t){return t.children.reduce((e,n)=>e+n.part.mass+this.childMass(n),0)}childFuel(t){return t.children.reduce((e,n)=>e+(n.part.fuelCapacity??0)+this.childFuel(n),0)}updateVabCamera(){const t=this.vabDist*Math.sin(this.vabPolar)*Math.cos(this.vabAzimuth),e=this.vabDist*Math.cos(this.vabPolar),n=this.vabDist*Math.sin(this.vabPolar)*Math.sin(this.vabAzimuth);this.camera.position.set(this.vabTarget.x+t,this.vabTarget.y+e,this.vabTarget.z+n),this.camera.lookAt(this.vabTarget)}setupVabOrbit(){const t=e=>{e.button===0&&(this.vabIsDragging=!0,this.vabPrevMouse={x:e.clientX,y:e.clientY})};document.addEventListener("mousedown",t),document.addEventListener("mousemove",e=>{if(!this.vabIsDragging)return;const n=e.clientX-this.vabPrevMouse.x,i=e.clientY-this.vabPrevMouse.y;this.vabAzimuth-=n*.005,this.vabPolar=Math.max(.05,Math.min(Math.PI-.05,this.vabPolar+i*.005)),this.vabPrevMouse={x:e.clientX,y:e.clientY},this.updateVabCamera()}),document.addEventListener("mouseup",()=>{this.vabIsDragging=!1}),document.addEventListener("wheel",e=>{this.vabDist*=e.deltaY>0?1.1:.9,this.vabDist=Math.max(.5,Math.min(50,this.vabDist)),this.updateVabCamera()},{passive:!0})}async refreshMesh(){for(;this.rocketGroup.children.length>0;){const t=this.rocketGroup.children[0];t&&this.rocketGroup.remove(t)}if(this.assembly.roots.length>0){if(!this.rootEl.querySelector(".vab-name-input")){const i=document.createElement("div");i.className="vab-name-row",i.style.cssText="padding:4px 0;margin-bottom:6px;",i.innerHTML=`
          <input type="text" class="vab-name-input" placeholder="Name your rocket..."
            style="width:100%;background:rgba(244,245,242,0.08);border:1px solid rgba(244,245,242,0.15);
            border-radius:4px;padding:6px 8px;color:#F4F5F2;font-size:11px;font-family:system-ui,sans-serif;
            outline:none;box-sizing:border-box;" maxlength="30"
          />
        `,this.currentRocketEl.parentElement?.insertBefore(i,this.currentRocketEl)}if(this.assembly.roots.some(i=>i.part.kind==="gltf"&&i.part.gltfUrl&&!_i.has(i.part.gltfUrl))){const i=document.getElementById("vab-status");i&&(i.textContent="⏳ Loading 3D models...");const{loadGLTF:s}=await yh(async()=>{const{loadGLTF:l}=await Promise.resolve().then(()=>xu);return{loadGLTF:l}},void 0);let o=0,a=0;for(const l of this.assembly.roots)l.part.kind==="gltf"&&l.part.gltfUrl&&!_i.has(l.part.gltfUrl)&&(await s(l.part.gltfUrl,l.part.gltfScale??1)?o++:a++);i&&(a>0?(i.textContent=`⚠️ ${o} loaded, ${a} failed`,setTimeout(()=>{i&&(i.innerHTML="&nbsp;")},3e3)):(i.textContent="✓ Models loaded",setTimeout(()=>{i&&(i.innerHTML="&nbsp;")},1500)))}const e=this.assembly.toMesh();e.traverse(i=>{if(i instanceof ut&&i.material){i.visible=!0;const s=i.material;Array.isArray(s)||(s.transparent=!1,s.opacity=1,s.depthWrite=!0,s.depthTest=!0)}}),this.rocketGroup.add(e);let n=0;for(const i of this.assembly.roots){const s=(a,l)=>{if(a.part.kind==="decoupler"){const d=new In(.15,.25,16),h=new Me({color:16737860,side:De,transparent:!0,opacity:.5}),u=new ut(d,h);u.position.set(0,l,0),u.rotation.x=-Math.PI/2,this.rocketGroup.add(u)}const c=Ks[a.part.size]||.6*kt;for(const d of a.children)s(d,l-c)},o=Ks[i.part.size]||.6*kt;s(i,n+o/2),n+=o}if(!this.framed){this.framed=!0;const i=new mn().setFromObject(this.rocketGroup),s=i.getSize(new P),o=i.getCenter(new P),a=Math.max(s.x,s.y,s.z,.1),l=a*3.5;this.camera.position.set(o.x,o.y+a*.5,o.z+l),this.camera.lookAt(o.x,o.y,o.z),this.camera.updateProjectionMatrix()}}}syncPartsFromAssembly(){this.addedPartNames=[],this.stackHeight=0;const t=(e,n)=>{for(const i of e){this.addedPartNames.push(i.part.name);const s=Ks[i.part.size]||.6*kt;this.stackHeight+=s,t(i.children)}};t(this.assembly.roots),this.updateCurrentList()}mount(){document.body.appendChild(this.rootEl)}unmount(){this.rootEl.remove()}}class ll{name;mass;position;velocity;constructor(t,e,n,i){this.name=t,this.mass=e,this.position=[...n],this.velocity=[...i]}applyForce(t,e){const n=t[0]/this.mass,i=t[1]/this.mass,s=t[2]/this.mass;this.velocity[0]+=n*e,this.velocity[1]+=i*e,this.velocity[2]+=s*e,this.position[0]+=this.velocity[0]*e,this.position[1]+=this.velocity[1]*e,this.position[2]+=this.velocity[2]*e}kineticEnergy(){const t=this.velocity[0]**2+this.velocity[1]**2+this.velocity[2]**2;return .5*this.mass*t}}class Kx{rocket;system;position;velocity;throttle=0;constructor(t,e,n,i){this.rocket=t,this.system=e,this.position=[...n],this.velocity=[...i]}consumeFuel(t,e){this.rocket.consumeFuel(t,e)}}const ps=_n*xn,xa=.5,ya=200,zr=4,Gr=3,lh=2,Wr=5,Vr=0,Xr=Math.PI/2;class jx{camera;dist=Wr;targetDist=Wr;azimuth=Vr;targetAzimuth=Vr;polar=Xr;targetPolar=Xr;isDragging=!1;prevMouse={x:0,y:0};canvas=null;smoothPos=new P;initialized=!1;orbitKeys={left:!1,right:!1,up:!1,down:!1};zoomKeys={in:!1,out:!1};inertiaAzimuth=0;inertiaPolar=0;constructor(t){this.camera=t,this.setupKeyboard()}setupKeyboard(){window.addEventListener("keydown",t=>{if(t.shiftKey)switch(t.key){case"ArrowLeft":this.orbitKeys.left=!0,t.preventDefault();break;case"ArrowRight":this.orbitKeys.right=!0,t.preventDefault();break;case"ArrowUp":this.orbitKeys.up=!0,t.preventDefault();break;case"ArrowDown":this.orbitKeys.down=!0,t.preventDefault();break}(t.key==="z"||t.key==="Z")&&(this.zoomKeys.in=!0),(t.key==="x"||t.key==="X")&&(this.zoomKeys.out=!0)}),window.addEventListener("keyup",t=>{switch(t.key){case"ArrowLeft":this.orbitKeys.left=!1;break;case"ArrowRight":this.orbitKeys.right=!1;break;case"ArrowUp":this.orbitKeys.up=!1;break;case"ArrowDown":this.orbitKeys.down=!1;break;case"z":case"Z":this.zoomKeys.in=!1;break;case"x":case"X":this.zoomKeys.out=!1;break}})}initialiseAt(t,e,n,i){const s=t.position[0]*ps+(i?.x??0),o=t.position[1]*ps+(i?.y??0),a=t.position[2]*ps+(i?.z??0),l=new P(s,o,a),c=this.targetDist*Math.sin(this.polar)*Math.cos(this.azimuth),d=this.targetDist*Math.cos(this.polar),h=this.targetDist*Math.sin(this.polar)*Math.sin(this.azimuth);this.camera.position.set(s+c,o+d,a+h),this.camera.up.set(0,1,0),this.camera.lookAt(l)}setAzimuth(t){this.azimuth=t,this.targetAzimuth=t}setPolar(t){this.polar=t,this.targetPolar=t}zoom(t){this.targetDist*=t,this.targetDist=Math.max(xa,Math.min(ya,this.targetDist))}enableOrbit(t){this.canvas=t,t.addEventListener("mousedown",e=>{e.button===0&&(this.isDragging=!0,this.prevMouse={x:e.clientX,y:e.clientY},this.inertiaAzimuth=0,this.inertiaPolar=0)}),window.addEventListener("mousemove",e=>{if(!this.isDragging)return;const n=e.clientX-this.prevMouse.x,i=e.clientY-this.prevMouse.y;this.inertiaAzimuth=-n*.005,this.inertiaPolar=i*.005,this.targetAzimuth+=this.inertiaAzimuth,this.targetPolar=Math.max(.05,Math.min(Math.PI-.05,this.targetPolar+this.inertiaPolar)),this.prevMouse={x:e.clientX,y:e.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.targetDist*=e.deltaY>0?1.1:.9,this.targetDist=Math.max(xa,Math.min(ya,this.targetDist))},{passive:!1})}follow(t,e,n,i=!1,s){const o=t.position[0]*ps+(s?.x??0),a=t.position[1]*ps+(s?.y??0),l=t.position[2]*ps+(s?.z??0),c=new P(o,a,l);this.orbitKeys.left&&(this.targetAzimuth+=e*Gr),this.orbitKeys.right&&(this.targetAzimuth-=e*Gr),this.orbitKeys.up&&(this.targetPolar=Math.max(.05,this.targetPolar-e*Gr*.5)),this.orbitKeys.down&&(this.targetPolar=Math.min(Math.PI-.05,this.targetPolar+e*Gr*.5)),this.zoomKeys.in&&(this.targetDist=Math.max(xa,this.targetDist*(1-e*lh))),this.zoomKeys.out&&(this.targetDist=Math.min(ya,this.targetDist*(1+e*lh))),this.isDragging||(this.targetAzimuth+=this.inertiaAzimuth*e*2,this.targetPolar+=this.inertiaPolar*e*2,this.inertiaAzimuth*=Math.exp(-3*e),this.inertiaPolar*=Math.exp(-3*e)),this.dist+=(this.targetDist-this.dist)*Math.min(1,zr*e),this.azimuth+=(this.targetAzimuth-this.azimuth)*Math.min(1,zr*e*.5),this.polar+=(this.targetPolar-this.polar)*Math.min(1,zr*e*.5);const d=this.dist*Math.sin(this.polar)*Math.cos(this.azimuth),h=this.dist*Math.cos(this.polar),u=this.dist*Math.sin(this.polar)*Math.sin(this.azimuth),f=new P(o+d,a+h,l+u),m=new P(0,1,0);if(this.initialized||(this.smoothPos.copy(f),this.initialized=!0),i)this.smoothPos.copy(f);else{const g=Math.min(1,zr*e);this.smoothPos.lerp(f,g)}this.camera.position.copy(this.smoothPos);const _=Math.abs(this.polar)<.1?new P(0,0,1):Math.abs(this.polar-Math.PI)<.1?new P(0,0,-1):m;this.camera.up.copy(_),this.camera.lookAt(c)}reset(){this.targetDist=Wr,this.dist=Wr,this.targetAzimuth=Vr,this.azimuth=Vr,this.targetPolar=Xr,this.polar=Xr}}class $x{container;active=!1;keys=new Set;stagePressed=!1;pauseToggle=!1;visible=!1;constructor(){this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,e.appendChild(n);let i=null;const s={x:0,y:0},o={x:0,y:0},a=(U,D)=>{const K=e.getBoundingClientRect();s.x=K.left+K.width/2,s.y=K.top+K.height/2,o.x=U,o.y=D,this.updateStick(n,s,o)},l=(U,D)=>{o.x=U,o.y=D,this.updateStick(n,s,o);const K=(U-s.x)/60,I=(D-s.y)/60,k=Math.max(-1,Math.min(1,K)),z=Math.max(-1,Math.min(1,I));z>.3?(this.keys.add("touch-up"),this.keys.delete("touch-down")):z<-.3?(this.keys.add("touch-down"),this.keys.delete("touch-up")):(this.keys.delete("touch-up"),this.keys.delete("touch-down")),k>.3?(this.keys.add("touch-right"),this.keys.delete("touch-left")):k<-.3?(this.keys.add("touch-left"),this.keys.delete("touch-right")):(this.keys.delete("touch-left"),this.keys.delete("touch-right"))},c=()=>{i=null,n.style.transform="translate(-50%, -50%)",this.keys.delete("touch-up"),this.keys.delete("touch-down"),this.keys.delete("touch-left"),this.keys.delete("touch-right")};e.addEventListener("touchstart",U=>{if(U.preventDefault(),i!==null)return;const D=U.changedTouches[0];i=D.identifier,a(D.clientX,D.clientY)},{passive:!1}),e.addEventListener("touchmove",U=>{U.preventDefault();for(let D=0;D<U.changedTouches.length;D++)U.changedTouches[D].identifier===i&&l(U.changedTouches[D].clientX,U.changedTouches[D].clientY)},{passive:!1}),e.addEventListener("touchend",U=>{for(let D=0;D<U.changedTouches.length;D++)U.changedTouches[D].identifier===i&&c()}),e.addEventListener("touchcancel",c),t.appendChild(e);const d=document.createElement("div");d.style.cssText=`
      position: absolute; bottom: 20px; right: 20px; display: flex;
      flex-direction: column; gap: 8px; align-items: flex-end;
    `;const h=(U,D=70,K=50)=>{const I=document.createElement("div");I.style.cssText="pointer-events: auto; position: relative;";const k=document.createElement("button");return k.textContent=U,k.style.cssText=`
        width: ${D}px; height: ${K}px; border-radius: 12px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: white; font: 600 14px/1 monospace; cursor: pointer;
        touch-action: none; user-select: none;
      `,I.appendChild(k),[k,I]},[u,f]=h("THR+",70,44),[m,_]=h("THR-",70,44),[g,p]=h("STAGE",70,44),[x,y]=h("R-",60,44),[S,A]=h("R+",60,44),w=(U,D)=>{this.keys.add(U),D.style.background="rgba(255,255,255,0.3)"},b=(U,D)=>{this.keys.delete(U),D.style.background="rgba(255,255,255,0.1)"},F=(U,D)=>{U.addEventListener("touchstart",K=>{K.preventDefault(),w(D,U)},{passive:!1}),U.addEventListener("touchend",K=>{K.preventDefault(),b(D,U)},{passive:!1}),U.addEventListener("touchcancel",()=>b(D,U)),U.addEventListener("mousedown",()=>w(D,U)),U.addEventListener("mouseup",()=>b(D,U)),U.addEventListener("mouseleave",()=>b(D,U))};F(u,"w"),F(m,"s"),F(x,"a"),F(S,"d"),g.addEventListener("touchstart",U=>{U.preventDefault(),this.stagePressed=!0},{passive:!1}),g.addEventListener("mousedown",()=>{this.stagePressed=!0});const M=document.createElement("div");M.style.cssText="display:flex; gap:8px;",M.appendChild(f),M.appendChild(p),d.appendChild(M);const T=document.createElement("div");T.style.cssText="display:flex; gap:8px;",T.appendChild(_),T.appendChild(y),T.appendChild(A),d.appendChild(T),t.appendChild(d)}updateStick(t,e,n){const i=n.x-e.x,s=n.y-e.y,o=60,a=Math.sqrt(i*i+s*s),l=Math.min(a,o),c=Math.atan2(s,i),d=Math.cos(c)*l,h=Math.sin(c)*l;t.style.transform=`translate(calc(-50% + ${d}px), calc(-50% + ${h}px))`}show(){this.visible||(this.visible=!0,this.container.style.display="block")}hide(){this.visible=!1,this.container.style.display="none"}isVisible(){return this.visible}getPitch(){let t=0;return this.keys.has("touch-up")&&(t=1),this.keys.has("touch-down")&&(t=-1),t}getYaw(){let t=0;return this.keys.has("touch-right")&&(t=1),this.keys.has("touch-left")&&(t=-1),t}getRoll(){let t=0;return this.keys.has("a")&&(t=1),this.keys.has("d")&&(t=-1),t}getThrottleUp(){return this.keys.has("w")}getThrottleDown(){return this.keys.has("s")}getStageRequested(){const t=this.stagePressed;return this.stagePressed=!1,t}dispose(){document.body.removeChild(this.container)}}class Zx{keys=new Set;stagePressed=!1;pauseToggle=!1;throttleLimiter=1;state;touch=null;constructor(t){this.state=t,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.key.toLowerCase()),e.key===" "&&(this.stagePressed=!0),e.key==="Escape"&&(this.pauseToggle=!0),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(e.key.toLowerCase())&&e.preventDefault())}),window.addEventListener("keyup",e=>{this.keys.delete(e.key.toLowerCase())})}enableTouch(){this.touch||(this.touch=new $x),this.touch.show()}disableTouch(){this.touch&&this.touch.hide()}update(t){const e=this.touch?.getThrottleUp()||this.keys.has("w"),n=this.touch?.getThrottleDown()||this.keys.has("s");e&&(this.state.throttle=Math.min(1,this.state.throttle+t*.3)),n&&(this.state.throttle=Math.max(0,this.state.throttle-t*.3))}getPitch(){let t=0;return(this.keys.has("arrowup")||this.touch?.getPitch()===1)&&(t=1),(this.keys.has("arrowdown")||this.touch?.getPitch()===-1)&&(t=-1),t}getYaw(){let t=0;return(this.keys.has("arrowleft")||this.touch?.getYaw()===1)&&(t=1),(this.keys.has("arrowright")||this.touch?.getYaw()===-1)&&(t=-1),t}getRoll(){let t=0;return(this.keys.has("a")||this.touch?.getRoll()===1)&&(t=1),(this.keys.has("d")||this.touch?.getRoll()===-1)&&(t=-1),t}getZoomIn(){return this.keys.has("z")}getZoomOut(){return this.keys.has("x")}getStageRequested(){const t=this.stagePressed||!!this.touch?.getStageRequested();return this.stagePressed=!1,t}consumePauseToggle(){const t=this.pauseToggle;return this.pauseToggle=!1,t}dispose(){this.touch?.dispose(),this.touch=null}}class Jx{root;speedVal;altVal;massVal;heatFill;heatPct;throttleFill;throttlePct;warpLabel;pauseOverlay;navballCanvas;navballCtx;camModeEl;onAction=null;constructor(){this.root=document.createElement("div"),this.root.className="hud-panel",this.root.style.cssText="position:fixed;inset:0;z-index:100;pointer-events:none;",this.pauseOverlay=document.createElement("div"),this.pauseOverlay.style.cssText="position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;",this.pauseOverlay.innerHTML=`
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
    `,this.root.appendChild(e),this.speedVal=e.querySelector(".speed-val"),this.altVal=e.querySelector(".alt-val"),this.massVal=e.querySelector(".mass-val"),this.heatFill=e.querySelector(".heat-fill"),this.heatPct=e.querySelector(".heat-pct"),this.throttleFill=e.querySelector(".throt-fill"),this.throttlePct=e.querySelector(".throt-pct"),this.warpLabel=e.querySelector(".warp-val"),e.addEventListener("click",s=>{const o=s.target.closest("[data-action]");o&&this.onAction&&this.onAction(o.dataset.action)}),this.camModeEl=document.createElement("div"),this.camModeEl.style.cssText="position:fixed;bottom:20px;left:20px;z-index:100;color:rgba(200,152,56,0.5);font-size:9px;font-family:monospace;pointer-events:none;",this.root.appendChild(this.camModeEl);const n=document.createElement("div");n.style.cssText="position:fixed;bottom:20px;right:20px;z-index:100;pointer-events:none;";const i=document.createElement("canvas");i.width=140,i.height=140,i.style.cssText="width:140px;height:140px;border-radius:70px;opacity:0.85;",n.appendChild(i),this.root.appendChild(n),this.navballCanvas=i,this.navballCtx=i.getContext("2d"),t.appendChild(this.root)}setVisible(t){this.root.style.display=t?"":"none"}setMass(t){this.massVal&&(this.massVal.textContent=`${(t/1e3).toFixed(1)}`)}setFreeCamera(t){this.camModeEl&&(this.camModeEl.textContent=t?"FREE CAM":"")}setWarp(t){this.warpLabel&&(this.warpLabel.textContent=`x${t}`)}setPaused(t){this.pauseOverlay.style.display=t?"flex":"none"}setThrottle(t){const e=Math.round(t*100);this.throttlePct.textContent=`${e}%`,this.throttleFill.style.width=`${e}%`,this.throttleFill.style.background=e>80?"#ff6644":"#4488ff"}setNavballData(t,e,n,i,s){const o=this.navballCtx,a=140,l=140,c=70,d=70,h=66;o.clearRect(0,0,a,l),o.beginPath(),o.arc(c,d,h+2,0,Math.PI*2),o.fillStyle="#060810",o.fill();const u=[t[0],t[1],t[2]],f=Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2])||1;u[0]/=f,u[1]/=f,u[2]/=f;const m=u[0]*n[0]+u[1]*n[1]+u[2]*n[2];let _=[n[0]-u[0]*m,n[1]-u[1]*m,n[2]-u[2]*m];const g=Math.sqrt(_[0]*_[0]+_[1]*_[1]+_[2]*_[2])||1;_[0]/=g,_[1]/=g,_[2]/=g;const p=[u[1]*_[2]-u[2]*_[1],u[2]*_[0]-u[0]*_[2],u[0]*_[1]-u[1]*_[0]],x=b=>{const F=Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2])||1,M=b[0]/F,T=b[1]/F,U=b[2]/F,D=M*p[0]+T*p[1]+U*p[2],K=M*_[0]+T*_[1]+U*_[2],I=M*u[0]+T*u[1]+U*u[2],k=I>0,z=I>0?h/(1+I):h*.5;return{x:c+D*z,y:d-K*z,inFront:k,lx:D,ly:K,lz:I}},y=h*h;o.save(),o.beginPath(),o.arc(c,d,h,0,Math.PI*2),o.clip(),x(n);const S=x([-n[0],-n[1],-n[2]]),A=o.createRadialGradient(c,d,0,c,d,h);if(A.addColorStop(0,"#0a0a22"),A.addColorStop(.4,"#1a2a4a"),A.addColorStop(1,"#224488"),o.fillStyle=A,o.fillRect(c-h,d-h,h*2,h*2),S.inFront){const b=o.createRadialGradient(S.x,S.y,0,S.x,S.y,h*1.2);b.addColorStop(0,"#6a4a2a"),b.addColorStop(.3,"#5a3a1a"),b.addColorStop(.7,"#3a2a12"),b.addColorStop(1,"rgba(10,10,40,0)"),o.fillStyle=b,o.fillRect(c-h,d-h,h*2,h*2)}for(let b=-80;b<=80;b+=10){const F=b*Math.PI/180,M=Math.cos(F),T=Math.sin(F),U=[u[0]*M+_[0]*T,u[1]*M+_[1]*T,u[2]*M+_[2]*T],D=x(U);if(!D.inFront||(D.x-c)*(D.x-c)+(D.y-d)*(D.y-d)>y)continue;const K=b===0?26:b%20===0?18:10;o.beginPath(),o.moveTo(c-K*(1-Math.abs(T)*.3),D.y),o.lineTo(c+K*(1-Math.abs(T)*.3),D.y),o.strokeStyle=b===0?"#FFCC44":"rgba(255,255,255,0.2)",o.lineWidth=b===0?1.5:.6,o.stroke(),b%20===0&&(o.fillStyle="rgba(255,255,255,0.35)",o.font="7px sans-serif",o.fillText(`${Math.abs(b)}`,c+K+3,D.y+2))}for(let b=0;b<360;b+=45){const F=b*Math.PI/180,M=p[0]*Math.cos(F)+_[0]*Math.sin(F),T=p[1]*Math.cos(F)+_[1]*Math.sin(F),U=p[2]*Math.cos(F)+_[2]*Math.sin(F),D=[M-u[0]*m,T-u[1]*m,U-u[2]*m],K=Math.sqrt(D[0]*D[0]+D[1]*D[1]+D[2]*D[2])||1,I=x([D[0]/K,D[1]/K,D[2]/K]);I.inFront&&(o.fillStyle="rgba(255,255,255,0.2)",o.font="6px sans-serif",o.textAlign="center",o.fillText(`${b}°`,I.x,I.y+2),o.textAlign="start")}const w=(b,F)=>{const M=x(b);M.inFront&&F(M)};w(e,b=>{o.beginPath(),o.arc(b.x,b.y,4,0,Math.PI*2),o.fillStyle="#44FF44",o.fill(),o.beginPath(),o.arc(b.x,b.y,7,0,Math.PI*2),o.strokeStyle="#44FF44",o.lineWidth=1.5,o.stroke()}),w([-e[0],-e[1],-e[2]],b=>{o.beginPath(),o.arc(b.x,b.y,4,0,Math.PI*2),o.fillStyle="rgba(68,255,68,0.5)",o.fill(),o.beginPath(),o.arc(b.x,b.y,7,0,Math.PI*2),o.strokeStyle="#44FF44",o.lineWidth=1,o.stroke(),o.beginPath(),o.moveTo(b.x-3,b.y-3),o.lineTo(b.x+3,b.y+3),o.moveTo(b.x+3,b.y-3),o.lineTo(b.x-3,b.y+3),o.strokeStyle="#44FF44",o.lineWidth=1,o.stroke()}),w(n,b=>{o.beginPath(),o.moveTo(b.x,b.y-6),o.lineTo(b.x-4,b.y+3),o.lineTo(b.x+4,b.y+3),o.closePath(),o.fillStyle="#4488FF",o.fill()}),w([-n[0],-n[1],-n[2]],b=>{o.beginPath(),o.moveTo(b.x,b.y+6),o.lineTo(b.x-4,b.y-3),o.lineTo(b.x+4,b.y-3),o.closePath(),o.fillStyle="#CC8844",o.fill()}),o.beginPath(),o.arc(c,d,3,0,Math.PI*2),o.fillStyle="#FFAA44",o.fill(),o.restore(),o.beginPath(),o.arc(c,d,h+1,0,Math.PI*2),o.strokeStyle="#334466",o.lineWidth=2,o.stroke();for(let b=0;b<360;b+=45){const F=b*Math.PI/180;o.beginPath(),o.moveTo(c+Math.cos(F)*(h-7),d+Math.sin(F)*(h-7)),o.lineTo(c+Math.cos(F)*(h+2),d+Math.sin(F)*(h+2)),o.strokeStyle="#4a6a8a",o.lineWidth=1,o.stroke()}}update(t,e,n=0,i=0){const s=Math.sqrt(t.velocity[0]**2+t.velocity[1]**2+t.velocity[2]**2);let o=1/0;for(const c of e.bodies){if(c.mass<=0)continue;const d=t.position[0]-c.position[0],h=t.position[1]-c.position[1],u=t.position[2]-c.position[2],f=Math.sqrt(d*d+h*h+u*u),m=c.radius??0,_=f-m;_<o&&(o=_)}const a=Math.min(100,n/3e5*100);this.speedVal.textContent=s.toFixed(1),this.speedVal.style.color=s>1e3?"#ffaa44":"#ddd",o>1e3?this.altVal.textContent=(o/1e3).toFixed(2):this.altVal.textContent=o.toFixed(0);const l=Math.round(i*100);this.throttlePct.textContent=`${l}%`,this.throttleFill.style.width=`${l}%`,this.throttleFill.style.background=l>80?"#ff6644":"#4488ff",this.heatPct.textContent=`${a.toFixed(0)}%`,this.heatPct.style.color=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44",this.heatFill.style.width=`${a}%`,this.heatFill.style.background=a>70?"#FF3333":a>40?"#FFCC00":"#44FF44"}unmount(){this.root.remove(),this.pauseOverlay.remove()}}function Qx(r,t,e){if(r.throttle<=0)return;const n=mo(r.rocket.assembly.roots);if(!n||!n.thrust||!n.isp)return;const i=n.thrust*1e3*r.throttle,s=i/(n.isp*gx),o=e??[0,1,0],a=i*o[0]/r.rocket.totalMass(),l=i*o[1]/r.rocket.totalMass(),c=i*o[2]/r.rocket.totalMass();r.velocity[0]+=a*t,r.velocity[1]+=l*t,r.velocity[2]+=c*t,r.consumeFuel(s,t)}function mo(r){for(const t of r){if(t.part.kind==="engine"&&t.part.thrust&&t.part.isp)return{thrust:t.part.thrust,isp:t.part.isp};if(t.children?.length){const e=mo(t.children);if(e)return e}}return null}class ty{ctx=null;engineOsc=null;engineGain=null;engineNoise=null;engineRunning=!1;throttleLevel=0;constructor(){try{this.ctx=new AudioContext}catch{}}ensureCtx(){return this.ctx?(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx):null}startEngine(){if(!this.ensureCtx()||this.engineRunning)return;const t=this.ctx;this.engineRunning=!0,this.engineOsc=t.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=80,this.engineGain=t.createGain(),this.engineGain.gain.value=.02;const e=t.createBuffer(1,t.sampleRate*2,t.sampleRate),n=e.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=(Math.random()*2-1)*.3;this.engineNoise=t.createBufferSource(),this.engineNoise.buffer=e,this.engineNoise.loop=!0;const i=t.createGain();i.gain.value=.01;const s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=400,this.engineOsc.connect(this.engineGain),this.engineOsc.start(),this.engineNoise.connect(s),s.connect(i);const o=t.createGain();o.gain.value=.4,this.engineGain.connect(o),i.connect(o),o.connect(t.destination)}setThrottle(t){if(this.throttleLevel=t,!this.engineOsc||!this.engineGain)return;const e=60+t*80,n=.01+t*.04;this.engineOsc.frequency.setValueAtTime(e,this.ctx.currentTime+.1),this.engineGain.gain.setValueAtTime(n,this.ctx.currentTime+.05)}stopEngine(){if(this.engineOsc){try{this.engineOsc.stop()}catch{}this.engineOsc=null}if(this.engineNoise){try{this.engineNoise.stop()}catch{}this.engineNoise=null}this.engineGain&&(this.engineGain.disconnect(),this.engineGain=null),this.engineRunning=!1}playStaging(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="square",n.frequency.setValueAtTime(200,e),n.frequency.exponentialRampToValueAtTime(40,e+.3);const i=t.createGain();i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.5),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.5)}playCrash(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(20,e+.8);const i=t.createGain();i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+1.5);const s=t.createBuffer(1,t.sampleRate*1,t.sampleRate),o=s.getChannelData(0);for(let c=0;c<o.length;c++)o[c]=(Math.random()*2-1)*(c<o.length*.2?.8:.1*(1-c/o.length));const a=t.createBufferSource();a.buffer=s;const l=t.createGain();l.gain.setValueAtTime(.2,e),l.gain.exponentialRampToValueAtTime(.001,e+1),n.connect(i),a.connect(l),i.connect(t.destination),l.connect(t.destination),n.start(e),n.stop(e+1.5),a.start(e),a.stop(e+1)}playLand(){const t=this.ensureCtx();if(!t)return;const e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(300,e),n.frequency.exponentialRampToValueAtTime(60,e+.2);const i=t.createGain();i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(i),i.connect(t.destination),n.start(e),n.stop(e+.3)}dispose(){this.stopEngine(),this.ctx&&(this.ctx.close(),this.ctx=null)}}function on(r,t){const e=t.bodyByName("sun");let n=e,i=0;for(const s of t.bodies){if(s.name==="sun")continue;const o=s;let a=e,l=e.position;if(o.parentBody)a=o.parentBody,l=a.position;else if(s.name==="moon"){const y=t.bodyByName("earth");y&&(a=y,l=y.position)}const c=s.position[0]-r[0],d=s.position[1]-r[1],h=s.position[2]-r[2],u=c*c+d*d+h*h,f=Math.sqrt(u),m=s.position[0]-l[0],_=s.position[1]-l[1],g=s.position[2]-l[2],x=Math.sqrt(m*m+_*_+g*g)*Math.pow(s.mass/a.mass,.4);if(f<x){const y=or*s.mass/u;y>i&&(i=y,n=s)}}return n}function js(r,t,e,n,i){const s=or*e,o=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]),l=(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])/2-s/o,c=-s/(2*l),d=r[1]*t[2]-r[2]*t[1],h=r[2]*t[0]-r[0]*t[2],u=r[0]*t[1]-r[1]*t[0],f=Math.sqrt(d*d+h*h+u*u),m=(t[1]*u-t[2]*h)/s-r[0]/o,_=(t[2]*d-t[0]*u)/s-r[1]/o,g=(t[0]*h-t[1]*d)/s-r[2]/o,p=Math.sqrt(m*m+_*_+g*g),x=p<1&&c>0,y=x?c*(1+p):1/0,S=x?c*(1-p):o,A=p>1e-8?m/p:1,w=p>1e-8?_/p:0,b=p>1e-8?g/p:0,F=[A,w,b],M=[(h*b-u*w)/(f||1),(u*A-d*b)/(f||1),(d*w-h*A)/(f||1)],T=[],U=x?Math.PI:Math.acos(-1/Math.max(p,1.001))*.98;let D,K;if(x){const I=2*Math.PI*Math.sqrt(c*c*c/s),k=(r[0]*t[0]+r[1]*t[1]+r[2]*t[2])/(o||1),z=(c*(1-p*p)/o-1)/p,it=k*Math.sqrt(c*(1-p*p)/s)/(p||1),$=(p+z)/(1+p*z),Z=Math.sqrt(1-p*p)*it/(1+p*z);let st=Math.atan2(Z,$);st<0&&(st+=Math.PI*2);const ot=(st-p*Z)*I/(2*Math.PI),X=I-ot,j=(X+I/2)%I;K=X,D=j}for(let I=0;I<=i;I++){const k=-U+2*U*I/i,z=1+p*Math.cos(k);if(Math.abs(z)<1e-10)continue;const it=c*(1-p*p)/z;if(isNaN(it)||!isFinite(it)||it<0)continue;const $=it*(Math.cos(k)*F[0]+Math.sin(k)*M[0]),Z=it*(Math.cos(k)*F[2]+Math.sin(k)*M[2]);if(Math.sqrt($*$+Z*Z)>n*1.5)break;T.push([$,Z])}return{points:T,eccentricity:p,apoapsis:y,periapsis:S,bound:x,timeToAp:D,timeToPe:K}}function ey(r,t){const e=r.position[0]-t.position[0],n=r.position[1]-t.position[1],i=r.position[2]-t.position[2],s=e*e+n*n+i*i,o=Math.sqrt(s);if(o===0)return[0,0,0];const a=or*r.mass*t.mass/s;return[a*e/o,a*n/o,a*i/o]}function yu(r,t){let e=0,n=0,i=0;for(const s of t){if(s===r||s.mass<=0)continue;const o=ey(s,r);e+=o[0],n+=o[1],i+=o[2]}return[e,n,i]}const Dn=kt/.08,Un=600;function ny(){try{const r=document.createElement("canvas");r.width=64,r.height=64;const t=r.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.15,"rgba(255,255,240,0.95)"),e.addColorStop(.35,"rgba(255,230,180,0.7)"),e.addColorStop(.55,"rgba(255,180,100,0.35)"),e.addColorStop(.75,"rgba(255,120,50,0.15)"),e.addColorStop(1,"rgba(255,80,20,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new qe(r);return n.needsUpdate=!0,n}catch{return new nl(new Uint8Array([255,255,255,255]),1,1,hn)}}function iy(){try{const r=document.createElement("canvas");r.width=64,r.height=64;const t=r.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,200,100,0.6)"),e.addColorStop(.3,"rgba(255,150,60,0.3)"),e.addColorStop(.6,"rgba(200,80,30,0.1)"),e.addColorStop(1,"rgba(100,30,10,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new qe(r);return n.needsUpdate=!0,n}catch{return new nl(new Uint8Array([255,255,255,255]),1,1,hn)}}class sy{particles;outerParticles;positions;velocities;lifetimes;ages;colors;sizes;active;nextIndex;coreTex;outerTex;throttleLevel=1;inVacuum=!1;group;constructor(){this.active=!1,this.nextIndex=0,this.positions=new Float32Array(Un*3),this.velocities=new Float32Array(Un*3),this.lifetimes=new Float32Array(Un),this.ages=new Float32Array(Un),this.colors=new Float32Array(Un*3),this.sizes=new Float32Array(Un),this.ages.fill(1/0),this.coreTex=ny(),this.outerTex=iy(),this.group=new sn;const t=new Ne;t.setAttribute("position",new Pe(this.positions,3)),t.setAttribute("color",new Pe(this.colors,3)),t.setAttribute("size",new Pe(this.sizes,1));const e=new sr({size:Dn*.6,map:this.coreTex,vertexColors:!0,sizeAttenuation:!0,blending:an,depthWrite:!1,transparent:!0,opacity:1});this.particles=new uo(t,e),this.group.add(this.particles);const n=new Ne;n.setAttribute("position",new Pe(this.positions.slice(),3));const i=new sr({size:Dn*1.2,map:this.outerTex,color:16746564,sizeAttenuation:!0,blending:an,depthWrite:!1,transparent:!0,opacity:.5});this.outerParticles=new uo(n,i),this.group.add(this.outerParticles)}setThrottle(t){this.throttleLevel=Math.max(.01,t)}setVacuum(t){this.inVacuum=t}start(){this.active=!0}stop(){this.active=!1;for(let t=0;t<Un;t++)this.ages[t]=this.lifetimes[t],this.positions[t*3]=0,this.positions[t*3+1]=0,this.positions[t*3+2]=0;this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.outerParticles.geometry.attributes.position.needsUpdate=!0}update(t){const e=this.inVacuum?3.5:1;if(this.active){const i=Math.ceil((3+Math.random()*3)*this.throttleLevel);for(let s=0;s<i;s++){const o=this.nextIndex;this.nextIndex=(this.nextIndex+1)%Un;const a=(.08+Math.random()*.15)*(this.inVacuum?3:1)/Math.max(.3,this.throttleLevel);this.positions[o*3]=(Math.random()-.5)*a*Dn,this.positions[o*3+1]=-(Math.random()*.04)*Dn,this.positions[o*3+2]=(Math.random()-.5)*a*Dn;const l=(6+Math.random()*10)*this.throttleLevel*e;this.velocities[o*3]=(Math.random()-.5)*.3*Dn,this.velocities[o*3+1]=-(l*Dn),this.velocities[o*3+2]=(Math.random()-.5)*.3*Dn,this.lifetimes[o]=(.25+Math.random()*.35)*e,this.ages[o]=0,this.sizes[o]=.5+Math.random()*.5}}for(let i=0;i<Un;i++){const s=this.ages[i],o=this.lifetimes[i];if(s>=o)continue;const a=s+t;if(this.ages[i]=a,a>=o)continue;const l=a/o,c=i*3;this.positions[c]=(this.positions[c]??0)+(this.velocities[c]??0)*t,this.positions[c+1]=(this.positions[c+1]??0)+(this.velocities[c+1]??0)*t,this.positions[c+2]=(this.positions[c+2]??0)+(this.velocities[c+2]??0)*t;const d=Math.exp(-2*t);this.velocities[c]=(this.velocities[c]??0)*d,this.velocities[c+2]=(this.velocities[c+2]??0)*d,Math.random()<.05&&(this.velocities[c]=(this.velocities[c]??0)+(Math.random()-.5)*.2*Dn,this.velocities[c+2]=(this.velocities[c+2]??0)+(Math.random()-.5)*.2*Dn);let h,u,f;if(l<.15)h=1,u=1,f=1;else if(l<.35){const _=(l-.15)/.2;h=1,u=1-_*.3,f=1-_*.8}else if(l<.6){const _=(l-.35)/.25;h=1,u=.7-_*.3,f=.2-_*.15}else{const _=(l-.6)/.4;h=1-_*.7,u=.4-_*.35,f=.05-_*.04}this.inVacuum&&(u*=.85,f*=.5),this.colors[c]=Math.max(0,h),this.colors[c+1]=Math.max(0,u),this.colors[c+2]=Math.max(0,f);const m=l<.3?.6+l/.3*.4:1-(l-.3)/.7*.8;this.sizes[i]=m*(.5+(this.sizes[i]??.5)*.5)}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this.particles.geometry.attributes.size.needsUpdate=!0;const n=this.outerParticles.geometry.attributes.position;for(let i=0;i<Un;i++){const s=i*3;n.array[s]=this.positions[s]??0,n.array[s+1]=this.positions[s+1]??0,n.array[s+2]=this.positions[s+2]??0}n.needsUpdate=!0}getMesh(){return this.group}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.outerParticles.geometry.dispose(),this.outerParticles.material.dispose(),this.coreTex.dispose(),this.outerTex.dispose()}}const Ci=100,ms=kt*no;class ry{particles;positions;velocities;lifetimes;ages;active=!1;constructor(){this.positions=new Float32Array(Ci*3),this.velocities=new Float32Array(Ci*3),this.lifetimes=new Float32Array(Ci),this.ages=new Float32Array(Ci),this.ages.fill(1/0);const t=new Ne;t.setAttribute("position",new Pe(this.positions,3));const e=new sr({size:.3*ms,color:13421772,transparent:!0,opacity:.5,blending:pi,depthWrite:!1,sizeAttenuation:!0});this.particles=new uo(t,e)}start(){this.active=!0}stop(){this.active=!1}update(t){if(this.active)for(let o=0;o<3;o++){let a=-1,l=-1;for(let c=0;c<Ci;c++)this.ages[c]>=this.lifetimes[c]&&this.ages[c]>l&&(l=this.ages[c],a=c);if(a<0)for(let c=0;c<Ci;c++)this.ages[c]>l&&(l=this.ages[c],a=c);a>=0&&(this.positions[a*3]=(Math.random()-.5)*.1*ms,this.positions[a*3+1]=0,this.positions[a*3+2]=(Math.random()-.5)*.1*ms,this.velocities[a*3]=(Math.random()-.5)*.5*ms,this.velocities[a*3+1]=(.5+Math.random()*1)*ms,this.velocities[a*3+2]=(Math.random()-.5)*.5*ms,this.lifetimes[a]=1+Math.random()*1.5,this.ages[a]=0)}const e=this.particles.material;let n=!1;const i=this.velocities,s=this.positions;for(let o=0;o<Ci;o++){if(this.ages[o]>=this.lifetimes[o])continue;n=!0;const a=this.ages[o]+t;if(this.ages[o]=a,a>=this.lifetimes[o])continue;const l=o*3,c=i[l]??0,d=i[l+1]??0,h=i[l+2]??0;s[l]=(s[l]??0)+c*t,s[l+1]=(s[l+1]??0)+d*t,s[l+2]=(s[l+2]??0)+h*t,i[l]=c*.98,i[l+2]=h*.98}e.opacity=this.active?.5:Math.max(0,e.opacity-t*2),this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.visible=n||this.active}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose()}}const Gt=_n*xn;class oy{renderer;sceneMgr;system;achievements;state;rocket;rocketGroup;chase;controls;hud;sound;launched=!1;grounded=!0;groundedDir=null;liftoffFrames=0;engineFlame;groundSmoke;rocketShadow=null;reentryGlow=null;rocketQuat=new cn;angularVel=new P;ANGULAR_ACCEL=8;ANGULAR_DAMPING=10;timeWarp=1;parachuteDeployed=!1;deployedChuteMesh=null;crashed=!1;paused=!1;debris=[];warpLevels=[1,3,5,10,100,1e3,1e5,1e6];warpIndex=0;crashOverlay=null;prevVel=[0,0,0];gearDeployed=!1;gearMeshes=[];missionTime=0;sasMode="off";sasTargetQuat=new cn;screenShake=0;heatEnergy=0;MAX_HEAT=3e5;HEAT_RADIATION_RATE=.98;stageInfo=[];lastReentryIntensity=0;prevMach=0;sonicBoomTriggered=!1;sonicBoomTimer=0;countdownTimer=0;countdownActive=!1;countdownEl=null;lastRefBody=null;impactMarker=null;maxAlt=0;maxSpeed=0;orbitLine=null;exhaustLight=null;cameraMode="chase";freeCamAzimuth=0;freeCamPolar=Math.PI/2;freeCamDist=5;freeCamKeys={left:!1,right:!1,up:!1,down:!1};freeCamDragging=!1;freeCamPrevMouse={x:0,y:0};hudVisible=!0;lastAltMilestone=0;sonicBoomRing=null;sonicBoomLife=0;reentryGlowMesh=null;rocketBottomY=0;_debugShown=!1;showCountdown(t){this.countdownEl||(this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
        position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);
        font-size:72px;font-weight:bold;color:#fff;z-index:500;
        text-shadow:0 0 30px rgba(68,136,255,0.6);
        font-family:system-ui,sans-serif;pointer-events:none;
        transition:opacity 0.2s;
      `,document.body.appendChild(this.countdownEl)),this.countdownEl.textContent=t,this.countdownEl.style.opacity="1",t==="LIFTOFF!"?(this.countdownEl.style.color="#FF8844",this.countdownEl.style.fontSize="48px"):(this.countdownEl.style.color="#FFFFFF",this.countdownEl.style.fontSize="72px")}hideCountdown(){this.countdownEl&&(this.countdownEl.style.opacity="0")}get dragMultiplier(){return this.gearDeployed?2.5:1}onCrashAction=null;constructor(t,e,n,i,s){this.renderer=t,this.sceneMgr=e,this.system=n,this.achievements=s,this.rocket=i;const o=n.bodyByName("earth"),a=o.radius??6371e3,l=28.5*Math.PI/180,c=-80.5*Math.PI/180,d=[Math.cos(l)*Math.cos(c),Math.sin(l),Math.cos(l)*Math.sin(c)],h=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),u=[d[0]/h,d[1]/h,d[2]/h],f=50;o.position[0]+u[0]*a,o.position[1]+u[1]*a,o.position[2]+u[2]*a;const m=[o.position[0]+u[0]*(a+f),o.position[1]+u[1]*(a+f),o.position[2]+u[2]*(a+f)];this.state=new Kx(i,n,m,[0,0,0]),this.groundedDir=u;const _=new P(m[0]-o.position[0],m[1]-o.position[1],m[2]-o.position[2]).normalize();this.rocketQuat.setFromUnitVectors(new P(0,1,0),_),this.rocketGroup=i.assembly.toMesh(),this.rocketGroup.scale.setScalar(no),this.rocketGroup.position.set(this.state.position[0]*Gt,this.state.position[1]*Gt,this.state.position[2]*Gt),e.scene.add(this.rocketGroup);for(let W=0;W<3;W++){const N=W/3*Math.PI*2,Bt=new he(.015,.04,.3,6),L=new ge({color:5596791,metalness:.8,roughness:.3}),_t=new ut(Bt,L);_t.position.set(Math.cos(N)*.15,-.1,Math.sin(N)*.15),_t.rotation.z=Math.cos(N)*.3,_t.rotation.x=Math.sin(N)*.3,_t.visible=!1,this.rocketGroup.add(_t),this.gearMeshes.push(_t);const dt=new he(.05,.06,.02,6),Zt=new ge({color:4478310,metalness:.5,roughness:.6}),Lt=new ut(dt,Zt);Lt.position.set(Math.cos(N)*.22,-.22,Math.sin(N)*.22),this.rocketGroup.add(Lt),this.gearMeshes.push(Lt)}const g=new In(.05,.15,16),p=new Me({color:16724787,side:De,transparent:!0,opacity:.6,depthWrite:!1});this.impactMarker=new ut(g,p),this.impactMarker.rotation.x=-Math.PI/2,this.impactMarker.visible=!1,this.sceneMgr.scene.add(this.impactMarker);for(const W of n.bodies){const N=W;N.mesh&&e.scene.add(N.mesh),N.light&&e.scene.add(N.light)}const x=new rr(8952268,.5);x.position.set(-50,20,-30),e.scene.add(x),this.engineFlame=new sy,this.positionFlameAtNozzle(),this.rocketGroup.add(this.engineFlame.getMesh()),this.exhaustLight=new cu(16746564,0,20),this.exhaustLight.position.set(0,-1,0),this.rocketGroup.add(this.exhaustLight);const y=new fe(2,16,16),S=new Me({color:16746564,transparent:!0,opacity:0,depthWrite:!1});this.reentryGlowMesh=new ut(y,S),this.reentryGlowMesh.position.set(0,.5,0),this.reentryGlowMesh.visible=!1,this.rocketGroup.add(this.reentryGlowMesh),this.groundSmoke=new ry,this.rocketGroup.add(this.groundSmoke.getMesh());const A=new bo(.3*no,32),w=new Me({color:0,transparent:!0,opacity:.3,depthWrite:!1});this.rocketShadow=new ut(A,w),this.rocketShadow.rotation.x=-Math.PI/2,this.rocketShadow.position.y=-2,this.rocketGroup.add(this.rocketShadow);const b=new fe(.3,16,12),F=new Me({color:16737792,transparent:!0,opacity:0,blending:an,depthWrite:!1});this.reentryGlow=new ut(b,F),this.rocketGroup.add(this.reentryGlow);const M=new fe(.5,16,12),T=new Me({color:16729088,transparent:!0,opacity:0,blending:an,depthWrite:!1}),U=new ut(M,T);U.name="reentry-outer",this.rocketGroup.add(U);const D=new P().crossVectors(_,new P(0,1,0)).normalize(),K=Math.atan2(D.z,D.x);this.chase=new jx(e.camera),this.chase.setAzimuth(K),this.chase.enableOrbit(this.renderer.domElement);const I=-this.rocketBottomY-50*Gt,k=_.x*I,z=_.y*I,it=_.z*I;this.chase.initialiseAt(this.state,this.rocketQuat,_,{x:k,y:z,z:it}),this.controls=new Zx(this.state),("ontouchstart"in window||navigator.maxTouchPoints>0)&&this.controls.enableTouch(),this.sound=new ty,this.hud=new Jx,this.hud.onAction=W=>{W==="stage"?this.performStage():W==="parachute"?this.toggleParachute():W==="map"?($=!$,X.style.display=$?"block":"none",$&&requestAnimationFrame(At)):W==="resume"?(this.paused=!1,this.hud.setPaused(!1)):W==="menu"?this.onCrashAction?.("menu"):W==="restart"&&this.onCrashAction?.("restart")},this.hud.mount();let $=!1,Z=1,st=0,ct=0,ot=null;const X=document.createElement("div");X.style.cssText="position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.95);display:none;";const j=document.createElement("canvas");j.style.cssText="position:absolute;inset:0;width:100%;height:100%;",X.appendChild(j),document.body.appendChild(X);const gt=document.createElement("div");gt.style.cssText="position:absolute;top:16px;left:16px;z-index:10;color:#EACD9E;font-family:monospace;font-size:12px;pointer-events:none;",gt.innerHTML='<div id="map-zoom">ZOOM: 1x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>',X.appendChild(gt),X.appendChild(j),document.body.appendChild(X),j.addEventListener("wheel",W=>{Z*=W.deltaY>0?.9:1.1,Z=Math.max(.05,Math.min(100,Z))}),j.addEventListener("mousedown",W=>{ot={x:W.clientX,y:W.clientY}}),window.addEventListener("mouseup",()=>{ot=null}),window.addEventListener("mousemove",W=>{ot&&(st+=W.clientX-ot.x,ct+=W.clientY-ot.y,ot={x:W.clientX,y:W.clientY})}),j.addEventListener("touchstart",W=>{W.touches.length===1&&(ot={x:W.touches[0].clientX,y:W.touches[0].clientY})}),j.addEventListener("touchmove",W=>{!ot||W.touches.length!==1||(st+=W.touches[0].clientX-ot.x,ct+=W.touches[0].clientY-ot.y,ot={x:W.touches[0].clientX,y:W.touches[0].clientY})}),j.addEventListener("touchend",()=>{ot=null}),j.addEventListener("dblclick",W=>{W.preventDefault();const N=j.getBoundingClientRect(),Bt=W.clientX-N.left,L=W.clientY-N.top,_t=j.clientWidth,dt=j.clientHeight,Zt=_t/2+st,Lt=dt/2+ct;let R=1;for(const et of this.system.bodies){const rt=(et.position[0]-this.state.position[0])*Gt,vt=(et.position[2]-this.state.position[2])*Gt,ht=Math.sqrt(rt*rt+vt*vt);ht>R&&(R=ht)}const v=Math.min(_t,dt)*.4/R*Z;let H=null,lt=25;for(const et of this.system.bodies){const rt=Zt+(et.position[0]-this.state.position[0])*v,vt=Lt-(et.position[2]-this.state.position[2])*v,ht=Math.sqrt((Bt-rt)**2+(L-vt)**2);ht<lt&&(lt=ht,H=et.name)}if(H){const et=this.system.bodyByName(H);if(et){const rt=H==="earth"?20:H==="moon"?50:3;st=-(et.position[0]-this.state.position[0])*v,ct=(et.position[2]-this.state.position[2])*v,Z=rt,Te.show(`${H}: ${(et.mass??0).toExponential(2)}kg R=${(et.radius??0)/1e3}km`)}}});const At=()=>{if(!$)return;const W=window.devicePixelRatio||1,N=j.clientWidth,Bt=j.clientHeight;j.width=N*W,j.height=Bt*W;const L=j.getContext("2d");L.setTransform(W,0,0,W,0,0),L.fillStyle="#060814",L.fillRect(0,0,N,Bt);const _t=N/2+st,dt=Bt/2+ct,Zt=L.createRadialGradient(_t,dt,0,_t,dt,Math.max(N,Bt)*.6);Zt.addColorStop(0,"rgba(20,30,60,0.3)"),Zt.addColorStop(.5,"rgba(10,15,30,0.15)"),Zt.addColorStop(1,"rgba(6,8,20,0)"),L.fillStyle=Zt,L.fillRect(0,0,N,Bt),L.strokeStyle="rgba(100,100,150,0.08)",L.lineWidth=1;const Lt=100*Z;for(let Q=_t%Lt;Q<N;Q+=Lt)L.beginPath(),L.moveTo(Q,0),L.lineTo(Q,Bt),L.stroke();for(let Q=dt%Lt;Q<Bt;Q+=Lt)L.beginPath(),L.moveTo(0,Q),L.lineTo(N,Q),L.stroke();L.strokeStyle="rgba(68,136,255,0.06)",L.lineWidth=.5;for(let Q=Lt;Q<Math.max(N,Bt);Q+=Lt)L.beginPath(),L.arc(_t,dt,Q,0,Math.PI*2),L.stroke();let R=1;for(const Q of this.system.bodies){const Et=(Q.position[0]-this.state.position[0])*Gt,ft=(Q.position[2]-this.state.position[2])*Gt,Ct=Math.sqrt(Et*Et+ft*ft);Ct>R&&(R=Ct)}const v=Math.min(N,Bt)*.4/R*Z,H={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",mercury:"#c0c0c0",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",pluto:"#ddccbb",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",phobos:"#bb9988",deimos:"#887766"},lt={sun:"rgba(255,220,68,0.20)",earth:"rgba(79,195,247,0.12)",mars:"rgba(232,120,68,0.12)",venus:"rgba(232,184,76,0.12)",jupiter:"rgba(232,184,124,0.12)",saturn:"rgba(244,232,176,0.20)",uranus:"rgba(95,224,240,0.10)",neptune:"rgba(91,136,238,0.10)",moon:"rgba(204,204,238,0.06)",titan:"rgba(221,170,119,0.08)"},et={sun:8,earth:5,moon:2.5,venus:3.5,mars:3.5,mercury:2.5,jupiter:7,saturn:6,uranus:4,neptune:3.5,pluto:1.5,titan:2,io:1.5,europa:1.5,ganymede:2,phobos:1,deimos:1},rt=this.system.bodyByName("sun")?.position;if(rt)for(const Q of this.system.bodies){if(Q.name==="sun"||Q.name==="moon")continue;const Et=[Q.position[0]-rt[0],Q.position[1]-rt[1],Q.position[2]-rt[2]];if(Q.velocity){const ft=js(Et,Q.velocity,this.system.bodyByName("sun").mass,5e14,180);if(ft.points.length>10){L.beginPath(),L.strokeStyle=H[Q.name]+"30",L.lineWidth=1,L.setLineDash([3,6]);const Ct=_t+(ft.points[0][0]+rt[0])*v,oe=dt-(ft.points[0][1]+rt[2])*v;L.moveTo(Ct,oe);for(let ie=1;ie<ft.points.length;ie+=2){const _e=_t+(ft.points[ie][0]+rt[0])*v,we=dt-(ft.points[ie][1]+rt[2])*v;L.lineTo(_e,we)}L.stroke(),L.setLineDash([])}}}const vt=["earth","venus","mars","jupiter","saturn","uranus","neptune"];for(const Q of this.system.bodies)if(vt.includes(Q.name)){const Et=_t+(Q.position[0]-this.state.position[0])*v,ft=dt-(Q.position[2]-this.state.position[2])*v,Ct=et[Q.name]||3,oe=L.createRadialGradient(Et,ft,Ct*.5,Et,ft,Ct*3),ie=H[Q.name]||"#888";oe.addColorStop(0,ie+"30"),oe.addColorStop(.5,ie+"15"),oe.addColorStop(1,ie+"00"),L.beginPath(),L.arc(Et,ft,Ct*3,0,Math.PI*2),L.fillStyle=oe,L.fill()}for(const Q of this.system.bodies)if(vt.includes(Q.name)){const Et=_t+(Q.position[0]-this.state.position[0])*v,ft=dt-(Q.position[2]-this.state.position[2])*v,Ct=et[Q.name]||3,oe=1.2;L.beginPath(),L.arc(Et,ft,Ct*oe,0,Math.PI*2),L.setLineDash([2,6]),L.strokeStyle="rgba(100,180,255,0.25)",L.lineWidth=.8,L.stroke(),L.setLineDash([])}for(const Q of this.system.bodies){const Et=_t+(Q.position[0]-this.state.position[0])*v,ft=dt-(Q.position[2]-this.state.position[2])*v;et[Q.name]&&et[Q.name]>=5&&(L.beginPath(),L.arc(Et,ft,et[Q.name]*3,0,Math.PI*2),L.fillStyle=lt[Q.name]||"rgba(100,100,150,0.05)",L.fill()),L.beginPath(),L.arc(Et,ft,et[Q.name]||3,0,Math.PI*2),L.fillStyle=H[Q.name]||"#888",L.fill(),L.strokeStyle="rgba(244,245,242,0.3)",L.lineWidth=.5,L.stroke(),L.font="9px monospace",L.fillStyle="#F4F5F2",L.fillText(Q.name.toUpperCase(),Et+et[Q.name]+6,ft+3)}const ht=this.system.bodyByName("sun");for(const Q of this.system.bodies){if(Q.name==="sun"||Q.mass<=0||!ht||Q.name===ht.name)continue;const Et=(Q.position[0]-ht.position[0])*Gt,ft=(Q.position[2]-ht.position[2])*Gt,Ct=Math.sqrt(Et*Et+ft*ft);if(Ct<1)continue;const oe=Ct*Math.pow(Q.mass/ht.mass,.4),ie=_t+(Q.position[0]-this.state.position[0])*v,_e=dt-(Q.position[2]-this.state.position[2])*v;L.beginPath(),L.arc(ie,_e,oe*v,0,Math.PI*2),L.setLineDash([4,4]),L.strokeStyle=(H[Q.name]||"#888")+"44",L.lineWidth=.8,L.stroke(),L.setLineDash([])}const xt=80,It=3,zt=N-xt-15,at=Bt-30,Xt=R*2/Math.min(N,Bt)*Z*xt,Nt=Math.pow(10,Math.floor(Math.log10(Xt))),Rt=xt*(Nt/Xt);L.fillStyle="rgba(244,245,242,0.4)",L.fillRect(zt,at,Rt,It),L.strokeStyle="rgba(244,245,242,0.5)",L.lineWidth=.5,L.strokeRect(zt,at,Rt,It),L.fillStyle="rgba(244,245,242,0.4)",L.font="8px monospace",L.fillText(`${Nt>=1e3?(Nt/1e3).toFixed(0)+"Mkm":Nt.toFixed(0)+"km"}`,zt,at-2);const mt=30,Dt=Bt-35,Kt=12;L.strokeStyle="rgba(244,245,242,0.25)",L.lineWidth=1,L.beginPath(),L.arc(mt,Dt,Kt,0,Math.PI*2),L.stroke(),L.beginPath(),L.moveTo(mt,Dt-Kt-5),L.lineTo(mt,Dt+Kt+5),L.moveTo(mt-Kt-5,Dt),L.lineTo(mt+Kt+5,Dt),L.stroke(),L.fillStyle="rgba(244,245,242,0.4)",L.font="bold 8px monospace",L.fillText("N",mt-3,Dt-Kt-7),L.fillStyle="rgba(244,245,242,0.2)",L.fillText("S",mt-3,Dt+Kt+12),L.fillText("W",mt-Kt-12,Dt+3),L.fillText("E",mt+Kt+7,Dt+3);const q=_t,tt=dt,B=this.state.velocity[0]||0,C=this.state.velocity[2]||0,nt=Math.sqrt(B*B+C*C),J=nt>.1?Math.atan2(C,B):0;if(L.save(),L.translate(q,tt),L.rotate(-J),L.beginPath(),L.moveTo(8,0),L.lineTo(0,-4),L.lineTo(-5,0),L.lineTo(0,4),L.closePath(),L.fillStyle="#EACD9E",L.fill(),L.strokeStyle="#EACD9E",L.lineWidth=1.5,L.stroke(),L.restore(),nt>.1){const Q=Math.min(30,10+nt*v*2);L.beginPath(),L.moveTo(q,tt),L.lineTo(q+Math.cos(J)*Q,tt-Math.sin(J)*Q),L.strokeStyle="rgba(234,205,158,0.6)",L.lineWidth=1.5,L.stroke(),L.beginPath(),L.moveTo(q+Math.cos(J)*Q,tt-Math.sin(J)*Q),L.lineTo(q+Math.cos(J+.4)*(Q-5),tt-Math.sin(J+.4)*(Q-5)),L.lineTo(q+Math.cos(J-.4)*(Q-5),tt-Math.sin(J-.4)*(Q-5)),L.closePath(),L.fillStyle="rgba(234,205,158,0.6)",L.fill()}const Mt=on(this.state.position,this.system),bt=[(this.state.position[0]-Mt.position[0])*Gt,(this.state.position[1]-Mt.position[1])*Gt,(this.state.position[2]-Mt.position[2])*Gt],ne=this.system.bodyByName("sun");if(ne){const Q=(ne.position[0]-this.state.position[0])*v,Et=(ne.position[2]-this.state.position[2])*v,ft=Math.sqrt(Q*Q+Et*Et);ft>1&&(L.beginPath(),L.moveTo(q+Q/ft*12,tt-Et/ft*12),L.lineTo(q+Q/ft*Math.min(ft,60),tt-Et/ft*Math.min(ft,60)),L.strokeStyle="rgba(255,220,68,0.15)",L.lineWidth=2,L.setLineDash([3,6]),L.stroke(),L.setLineDash([]),L.beginPath(),L.arc(q+Q/ft*Math.min(ft,60),tt-Et/ft*Math.min(ft,60),3,0,Math.PI*2),L.fillStyle="rgba(255,220,68,0.3)",L.fill())}const yt=js(bt,this.state.velocity,Mt.mass,5e14,360);if(yt.points.length>1){L.beginPath(),L.strokeStyle=yt.bound?"rgba(68,136,204,0.15)":"rgba(221,170,68,0.15)",L.lineWidth=8;const Q=_t+yt.points[0][0]*v,Et=dt-yt.points[0][1]*v;L.moveTo(Q,Et);for(let ie=1;ie<yt.points.length;ie++){const _e=_t+yt.points[ie][0]*v,we=dt-yt.points[ie][1]*v;L.lineTo(_e,we)}L.stroke();const ft=L.createLinearGradient(Q,Et,_t+yt.points[yt.points.length-1][0]*v,dt-yt.points[yt.points.length-1][1]*v),Ct=yt.bound?"rgba(68,136,204,0.9)":"rgba(221,170,68,0.9)",oe=yt.bound?"rgba(68,136,204,0.2)":"rgba(221,170,68,0.2)";ft.addColorStop(0,Ct),ft.addColorStop(1,oe),L.beginPath(),L.strokeStyle=ft,L.lineWidth=2.5,L.moveTo(Q,Et);for(let ie=1;ie<yt.points.length;ie++){const _e=_t+yt.points[ie][0]*v,we=dt-yt.points[ie][1]*v;L.lineTo(_e,we)}if(L.stroke(),yt.points.length>4){const ie=yt.points[yt.points.length-1],_e=yt.points[yt.points.length-2],we=ie[0]-_e[0],ve=ie[1]-_e[1],Se=Math.sqrt(we*we+ve*ve)||1,Ae=_t+ie[0]*v,Le=dt-ie[1]*v,ke=8;L.beginPath(),L.moveTo(Ae,Le),L.lineTo(Ae-we/Se*ke+ve/Se*ke*.4,Le+ve/Se*ke+we/Se*ke*.4),L.lineTo(Ae-we/Se*ke-ve/Se*ke*.4,Le+ve/Se*ke-we/Se*ke*.4),L.closePath(),L.fillStyle=yt.bound?"rgba(68,136,204,0.6)":"rgba(221,170,68,0.6)",L.fill()}if(yt.bound&&isFinite(yt.apoapsis)&&isFinite(yt.periapsis)){const ie=_t+yt.apoapsis*v,_e=_t+yt.periapsis*v;L.beginPath(),L.arc(ie,dt,4,0,Math.PI*2),L.fillStyle="#FF8844",L.fill(),L.font="bold 9px monospace",L.fillStyle="#FF8844",L.fillText("Ap",ie+6,dt+3),L.beginPath(),L.arc(_e,dt,4,0,Math.PI*2),L.fillStyle="#44DD88",L.fill(),L.fillStyle="#44DD88",L.fillText("Pe",_e+6,dt+3)}}L.fillStyle="rgba(244,245,242,0.3)",L.font="9px sans-serif",L.fillText(`${(R/1e3).toFixed(0)} km | Zoom: ${Z.toFixed(1)}x`,10,Bt-10),requestAnimationFrame(At)};window.addEventListener("keydown",W=>{(W.key==="m"||W.key==="Tab")&&($=!$,X.style.display=$?"block":"none",$&&requestAnimationFrame(At),W.preventDefault())}),window.addEventListener("keydown",W=>{if(W.key==="q"||W.key==="["){if(this.paused)return;this.warpIndex=Math.max(0,this.warpIndex-1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),W.preventDefault()}else if(W.key==="e"||W.key==="]"){if(this.paused)return;this.warpIndex=Math.min(this.warpLevels.length-1,this.warpIndex+1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarp(this.timeWarp),W.preventDefault()}else if(W.key==="p"){if(i.assembly.roots.some(Bt=>Bt.part.kind==="parachute")||i.assembly.roots.some(Bt=>Bt.children.some(L=>L.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const Bt={radius:.6*kt,height:1*kt};this.deployedChuteMesh=Xa(Bt),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);Te.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}W.preventDefault()}else if(W.key==="g")this.toggleGear(),W.preventDefault();else if(W.key==="t"){const N=["off","hold","prograde","retrograde"],Bt=N.indexOf(this.sasMode);this.sasMode=N[(Bt+1)%N.length],this.sasMode==="off"?Te.show("SAS disabled"):this.sasMode==="hold"?(this.sasTargetQuat.copy(this.rocketQuat),Te.show("SAS — attitude hold")):this.sasMode==="prograde"?Te.show("SAS — prograde"):Te.show("SAS — retrograde"),W.preventDefault()}else W.key==="f"?(this.chase.reset(),Te.show("Camera view reset"),W.preventDefault()):W.key==="c"&&!W.ctrlKey&&!W.metaKey?(this.cameraMode=this.cameraMode==="chase"?"free":"chase",this.hud.setFreeCamera(this.cameraMode==="free"),Te.show(this.cameraMode==="free"?"Free camera":"Chase camera"),W.preventDefault()):W.key==="F1"&&(W.preventDefault(),this.hudVisible=!this.hudVisible,this.hud.setVisible(this.hudVisible),Te.show(this.hudVisible?"HUD shown":"HUD hidden"));this.cameraMode==="free"&&(W.key==="ArrowUp"&&(this.freeCamKeys.up=!0,W.preventDefault()),W.key==="ArrowDown"&&(this.freeCamKeys.down=!0,W.preventDefault()),W.key==="ArrowLeft"&&(this.freeCamKeys.left=!0,W.preventDefault()),W.key==="ArrowRight"&&(this.freeCamKeys.right=!0,W.preventDefault()))}),window.addEventListener("keyup",W=>{W.key==="ArrowUp"&&(this.freeCamKeys.up=!1),W.key==="ArrowDown"&&(this.freeCamKeys.down=!1),W.key==="ArrowLeft"&&(this.freeCamKeys.left=!1),W.key==="ArrowRight"&&(this.freeCamKeys.right=!1)});const Tt=this.renderer.domElement,Ft=(W,N)=>{this.cameraMode==="free"&&(this.freeCamDragging=!0,this.freeCamPrevMouse={x:W,y:N})},Ht=(W,N)=>{if(!this.freeCamDragging||this.cameraMode!=="free")return;const Bt=W-this.freeCamPrevMouse.x,L=N-this.freeCamPrevMouse.y;this.freeCamAzimuth-=Bt*.005,this.freeCamPolar=Math.max(.05,Math.min(Math.PI-.05,this.freeCamPolar+L*.005)),this.freeCamPrevMouse={x:W,y:N}},Ut=()=>{this.freeCamDragging=!1};Tt.addEventListener("mousedown",W=>Ft(W.clientX,W.clientY)),window.addEventListener("mousemove",W=>Ht(W.clientX,W.clientY)),window.addEventListener("mouseup",Ut),Tt.addEventListener("touchstart",W=>{W.touches.length===1&&W.touches[0]&&Ft(W.touches[0].clientX,W.touches[0].clientY)},{passive:!0}),Tt.addEventListener("touchmove",W=>{W.touches.length===1&&W.touches[0]&&Ht(W.touches[0].clientX,W.touches[0].clientY)},{passive:!0}),Tt.addEventListener("touchend",Ut),Tt.addEventListener("wheel",W=>{this.cameraMode==="free"&&(W.preventDefault(),this.freeCamDist*=W.deltaY>0?1.1:.9,this.freeCamDist=Math.max(.5,Math.min(200,this.freeCamDist)))},{passive:!1}),this.achievements.unlock("first_launch"),Te.show("You are at the launchpad. W/S throttle, ↑↓ pitch, ←→ yaw, C camera, T SAS, Esc pause.")}sanitize(t){isFinite(t[0])||(t[0]=0),isFinite(t[1])||(t[1]=0),isFinite(t[2])||(t[2]=0)}countStages(t){let e=0;for(const n of t)n.part.kind==="decoupler"&&e++,e+=this.countStages(n.children);return e}computeStageData(){const t=this.rocket.assembly.roots;if(t.length===0)return[];const e=[];for(let o=0;o<t.length;o++)t[o].part.kind==="decoupler"&&e.push(o);const n=[];let i=0;for(let o=0;o<=e.length;o++){const a=o<e.length?e[o]:t.length,l=[];for(let c=i;c<a;c++)l.push(t[c]);if(l.length>0){const c=this.isChunkSpent(l);n.push({parts:l,active:!c,spent:c})}i=a+1}let s=0;for(let o=0;o<n.length;o++){if(!n[o].spent){s=o;break}s=o}return n.map((o,a)=>{let l=0,c=0;for(const m of o.parts)if(l+=m.part.mass,m.part.fuelCapacity){const _=this.rocket.fuelTanks.find(g=>g.node===m);c+=_?_.remaining:m.part.fuelCapacity}const d=o.parts.filter(m=>m.part.kind==="engine").length,h=o.parts.filter(m=>m.part.fuelCapacity).length,f=d>0?`${d}E ${h}T`:o.parts.length===1?o.parts[0].part.name||"C":`${o.parts.length}P`;return{label:`S${a+1}: ${f}`,fuelMass:c,dryMass:l,active:a===s,spent:o.spent}})}isChunkSpent(t){if(!t.some(n=>n.part.kind==="engine"))return!1;for(const n of t)if(n.part.fuelCapacity){const i=this.rocket.fuelTanks.find(s=>s.node===n);if(i&&i.remaining>.01)return!1}return!0}update(t){try{this.updateInner(t)}catch(e){Te.show(`ERROR: ${e.message||e}`),console.error("FlightScene.update error:",e)}}updateInner(t){const e=t;if(this.controls.consumePauseToggle()&&(this.paused=!this.paused,this.hud.setPaused(this.paused),this.paused&&this.sound.stopEngine()),this.paused){this.system.propagate(0,pa);for(const q of this.system.bodies)q.syncMesh?.();return}if(this.crashed){this.system.propagate(t*this.timeWarp,pa);for(const q of this.system.bodies)q.syncMesh?.();this.updateExplosion(e);return}this.missionTime+=e,this.missionTime=Math.min(this.missionTime,99999),t*=this.timeWarp,(!isFinite(t)||t<=0)&&(t=1/60),this.controls.update(e),this.controls.getZoomIn()&&this.chase.zoom(.92),this.controls.getZoomOut()&&this.chase.zoom(1.08);const n=this.timeWarp>1;n&&(this.state.throttle=0),!n&&this.controls.getStageRequested()&&this.performStage(),!n&&!this.grounded&&this.state.throttle>0&&(!mo(this.state.rocket.assembly.roots)||this.state.rocket.totalFuelMass()<.1)&&this.state.rocket.assembly.roots.some(B=>B.part.kind==="decoupler"||B.children.some(C=>C.part.kind==="decoupler"))&&this.performStage();const i=()=>new P(0,1,0).applyQuaternion(this.rocketQuat),s=this.state.throttle>0,o=this.cameraMode==="free",a=n||o?0:this.controls.getPitch(),l=n||o?0:this.controls.getYaw(),c=n?0:this.controls.getRoll();if(this.angularVel.x+=a*this.ANGULAR_ACCEL*e,this.angularVel.y+=l*this.ANGULAR_ACCEL*e,this.angularVel.z+=c*this.ANGULAR_ACCEL*e,s&&!this.grounded&&(this.angularVel.x+=a*this.state.throttle*4*e,this.angularVel.y+=l*this.state.throttle*4*e),this.sasMode!=="off"&&!n){if(this.sasMode==="prograde"||this.sasMode==="retrograde"){const B=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(B>.1){let C=new P(this.state.velocity[0]/B,this.state.velocity[1]/B,this.state.velocity[2]/B);this.sasMode==="retrograde"&&C.negate(),this.sasTargetQuat.setFromUnitVectors(new P(0,1,0),C)}}const q=new cn().copy(this.sasTargetQuat).invert().multiply(this.rocketQuat),tt=2*Math.acos(Math.abs(q.w));if(tt>.001){const B=new P(q.x,q.y,q.z).normalize();this.angularVel.x-=B.x*tt*3*e,this.angularVel.y-=B.y*tt*3*e,this.angularVel.z-=B.z*tt*3*e}this.angularVel.multiplyScalar(Math.exp(-5*e))}const d=Math.exp(-this.ANGULAR_DAMPING*e);this.angularVel.multiplyScalar(d);const h=new cn().setFromAxisAngle(new P(0,0,1),this.angularVel.y*e),u=new cn().setFromAxisAngle(new P(1,0,0),this.angularVel.x*e),f=new cn().setFromAxisAngle(new P(0,1,0),this.angularVel.z*e);this.rocketQuat.multiply(h).multiply(u).multiply(f),this.rocketQuat.normalize(),this.rocketGroup.quaternion.copy(this.rocketQuat);const m=i(),_=m.x,g=m.y,p=m.z;let x=!1;if(s&&this.grounded&&(!this.countdownActive&&!this.launched&&(this.countdownActive=!0,this.countdownTimer=0,this.showCountdown("3")),this.countdownActive)){if(this.countdownTimer+=e,this.countdownTimer>=1&&this.countdownTimer<2)this.showCountdown("2");else if(this.countdownTimer>=2&&this.countdownTimer<3)this.showCountdown("1");else if(this.countdownTimer>=3){this.countdownActive=!1,this.launched=!0,x=!0;const q=mo(this.state.rocket.assembly.roots);if(q&&q.thrust){const tt=q.thrust*1e3/(this.state.rocket.totalMass()*9.81);tt<.5&&Te.show(`TWR low: ${tt.toFixed(1)} — slow ascent`)}this.showCountdown("LIFTOFF!"),setTimeout(()=>this.hideCountdown(),1500)}}if(s&&(!this.grounded||x)&&(Qx(this.state,t,[_,g,p]),this.sanitize(this.state.velocity)),s&&x&&this.grounded&&(this.grounded=!1,this.groundedDir=null,this.liftoffFrames=5,this.launched=!0,this.achievements.unlock("reach_space"),this.sound.startEngine()),s){this.sound.setThrottle(this.state.throttle),this.engineFlame.setThrottle(this.state.throttle),this.engineFlame.start();const q=on(this.state.position,this.system),tt=this.state.position[0]-q.position[0],B=this.state.position[1]-q.position[1],C=this.state.position[2]-q.position[2],nt=Math.sqrt(tt*tt+B*B+C*C)||1,J=q.getSurfaceRadiusAt?.(this.state.position)??q.radius??6371e3;this.engineFlame.setVacuum(nt-J>5e4)}else this.sound.setThrottle(0),this.engineFlame.stop();this.engineFlame.update(e),this.exhaustLight&&(this.exhaustLight.intensity=this.state.throttle*3,this.exhaustLight.color.setHSL(.08-this.state.throttle*.05,1,.5+this.state.throttle*.3)),s&&this.grounded?this.groundSmoke.start():this.groundSmoke.stop(),this.groundSmoke.update(e),this.grounded&&n||(this.state.position[0]+=this.state.velocity[0]*t,this.state.position[1]+=this.state.velocity[1]*t,this.state.position[2]+=this.state.velocity[2]*t);let y=null,S=1/0;const A=on(this.state.position,this.system),w=A.name;this.lastRefBody&&this.lastRefBody!==w&&Te.show(`Entering ${w.toUpperCase()} SOI`),this.lastRefBody=w;const b=A.position[0]-this.state.position[0],F=A.position[1]-this.state.position[1],M=A.position[2]-this.state.position[2];S=Math.sqrt(b*b+F*F+M*M),y=A;const T=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(!this.grounded&&y&&y.radius){const q=S-y.radius;if(q>0&&q<12e4&&T>2e3){const tt=Math.max(0,1-q/12e4)*Math.min(1,T/8e3);if(this.reentryGlow){this.reentryGlow.material.color.setHSL(.05,1,.7*tt),this.reentryGlow.material.opacity=.4*tt,this.reentryGlow.scale.setScalar(1+tt*2);const B=this.rocketGroup.getObjectByName("reentry-outer");B&&(B.material.color.setHSL(.03,1,.4*tt),B.material.opacity=.2*tt,B.scale.setScalar(1+tt*4))}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const tt=this.rocketGroup.getObjectByName("reentry-outer");tt&&(tt.material.opacity=0)}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const q=this.rocketGroup.getObjectByName("reentry-outer");q&&(q.material.opacity=0)}if(this.liftoffFrames>0&&this.liftoffFrames--,this.grounded)this.state.velocity=[0,0,0];else{const q=b,tt=F,B=M,C=S,nt=C*C;if(C>1&&nt>0){const Q=or*A.mass/nt;this.state.velocity[0]-=Q*q/C*e,this.state.velocity[1]-=Q*tt/C*e,this.state.velocity[2]-=Q*B/C*e}this.sanitize(this.state.velocity);const J=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),Mt=this.state.rocket.totalMass();let bt=Mt*.001+.2;if(this.parachuteDeployed?bt=50:this.gearDeployed&&(bt*=2.5),y&&y.radius&&J>.05&&J<1e6){const Q=S-y.radius;if(Q>0&&Q<3e5){const Et=1.225*Math.exp(-Q/8500),ie=.5*Et*J*J*bt/Mt*e;if(ie>=J)this.state.velocity[0]=0,this.state.velocity[1]=0,this.state.velocity[2]=0;else{const ve=1-ie/J;this.state.velocity[0]*=ve,this.state.velocity[1]*=ve,this.state.velocity[2]*=ve}this.sanitize(this.state.velocity);const _e=Math.max(0,J/2e3*(Et/1.225)-.1);if(_e>.05&&this.reentryGlowMesh){this.reentryGlowMesh.visible=!0,this.reentryGlowMesh.scale.setScalar(1+_e*2),this.reentryGlowMesh.material.opacity=Math.min(1,_e);const ve=_e>.8?16777215:_e>.5?16763972:16746564;this.reentryGlowMesh.material.color.setHex(ve)}else this.reentryGlowMesh&&(this.reentryGlowMesh.visible=!1);if(this.lastReentryIntensity=_e,_e>.1)this.rocketGroup.traverse(ve=>{const Se=ve;if(!Se.isMesh)return;const Ae=Se.material;if(!Ae||!Ae.emissive)return;const Le=Math.min(1,this.heatEnergy/3e5),ke=Le*.9,To=Le*Le*.5,Eo=Le*Le*Le*.15;Ae.emissive.setRGB(ke,To,Eo),Ae.emissiveIntensity=Le*1.5});else if(this.heatEnergy>0){const ve=Math.min(1,this.heatEnergy/3e5);this.rocketGroup.traverse(Se=>{const Ae=Se;if(!Ae.isMesh)return;const Le=Ae.material;!Le||!Le.emissive||(Le.emissive.setRGB(ve*.4,0,0),Le.emissiveIntensity=ve*.5)})}else this.heatEnergy<1&&this.rocketGroup.traverse(ve=>{const Se=ve;if(!Se.isMesh)return;const Ae=Se.material;!Ae||!Ae.emissive||Ae.emissiveIntensity>0&&(Ae.emissive.setRGB(0,0,0),Ae.emissiveIntensity=0)});const we=.5*Et*J*J*J*5e-6;this.heatEnergy+=we*e}}this.reentryGlowMesh&&(y&&y.radius&&S-y.radius<3e5||(this.reentryGlowMesh.visible=!1)),this.grounded||(this.heatEnergy>0&&(this.heatEnergy*=this.HEAT_RADIATION_RATE,this.heatEnergy<1&&(this.heatEnergy=0)),this.heatEnergy>this.MAX_HEAT&&(this.crashed=!0,Te.show(`OVERHEATED! Ship disintegrated at ${this.heatEnergy.toFixed(0)}J`)));const ne=y?y.radius??0:0,yt=y?y.getSurfaceRadiusAt?.(this.state.position)??ne:0;if(y&&ne>0&&isFinite(S)){const Q=this.state.position[0]-y.position[0],Et=this.state.position[1]-y.position[1],ft=this.state.position[2]-y.position[2],Ct=Math.sqrt(Q*Q+Et*Et+ft*ft),oe=(this.state.velocity[0]*Q+this.state.velocity[1]*Et+this.state.velocity[2]*ft)/Ct;if(Ct<yt-1)this.doCrash(`Impact on ${y.name}`,y,Q,Et,ft,Ct,yt);else if(Ct<yt+60&&Ct>.001&&this.liftoffFrames<=0){const ie=new P(Q/Ct,Et/Ct,ft/Ct),_e=new P(0,1,0).applyQuaternion(this.rocketQuat),we=Math.acos(Math.min(1,Math.abs(_e.dot(ie))))*180/Math.PI,ve=this.hasLandingLegs(),Se=this.parachuteDeployed?15:10,Ae=ve?30:20;if(isFinite(oe)&&Math.abs(oe)>Se)this.doCrash(`Too fast! (${Math.abs(oe).toFixed(0)} m/s) on ${y.name}`,y,Q,Et,ft,Ct,yt);else if(we>Ae)this.doCrash(`Tipped over! (${we.toFixed(0)}°) on ${y.name}`,y,Q,Et,ft,Ct,yt);else if(isFinite(oe)&&oe<1){this.state.velocity=[0,0,0],this.grounded=!0,this.groundedDir=[Q/Ct,Et/Ct,ft/Ct];const Le=new P(Q/Ct,Et/Ct,ft/Ct);if(this.rocketQuat.setFromUnitVectors(new P(0,1,0),Le),this.state.position[0]!==y.position[0]+Q/Ct*(yt+50)||this.state.position[1]!==y.position[1]+Et/Ct*(yt+50)||this.state.position[2]!==y.position[2]+ft/Ct*(yt+50)){this.state.position=[y.position[0]+Q/Ct*(yt+50),y.position[1]+Et/Ct*(yt+50),y.position[2]+ft/Ct*(yt+50)],this.sound.playLand(),this.sound.stopEngine();const ke=y.name;Te.show(`Landed on ${ke}!`),ke==="earth"?this.achievements.unlock("land_earth"):ke==="moon"?this.achievements.unlock("land_moon"):ke==="mars"?this.achievements.unlock("land_mars"):ke==="venus"?this.achievements.unlock("land_venus"):ke==="mercury"&&this.achievements.unlock("land_mercury")}}}else Ct<yt+250&&isFinite(oe)&&Math.abs(oe)>50&&this.doCrash(`High-speed impact! (${Math.abs(oe).toFixed(0)} m/s) on ${y.name}`,y,Q,Et,ft,Ct,yt)}}if(this.system.propagate(t,pa),this.grounded&&this.groundedDir){const q=on(this.state.position,this.system),tt=q.radius??6371e3,B=[q.position[0]+this.groundedDir[0],q.position[1]+this.groundedDir[1],q.position[2]+this.groundedDir[2]],nt=(q.getSurfaceRadiusAt?.(B)??tt)+50;this.state.position[0]=q.position[0]+this.groundedDir[0]*nt,this.state.position[1]=q.position[1]+this.groundedDir[1]*nt,this.state.position[2]=q.position[2]+this.groundedDir[2]*nt}if(this.grounded){const q=on(this.state.position,this.system),tt=this.state.position[0]-q.position[0],B=this.state.position[1]-q.position[1],C=this.state.position[2]-q.position[2],nt=Math.sqrt(tt*tt+B*B+C*C),J=q.radius??6371e3;nt>J*1.1&&(this.state.velocity=[0,0,0],this.state.position[0]=q.position[0]+tt/nt*(J+50),this.state.position[1]=q.position[1]+B/nt*(J+50),this.state.position[2]=q.position[2]+C/nt*(J+50))}for(const q of this.system.bodies)q.syncMesh?.();const U=this.system.bodyByName("sun");if(U&&U.mesh){const q=U.mesh.position;for(const tt of this.system.bodies){const B=tt;B.atmosphereGlow&&B.mesh&&B.atmosphereGlow.setSunDirection(q,B.mesh.position)}}const D=this.system.bodyByName("earth");if(D&&"updateClouds"in D){const q=this.system.bodyByName("sun"),tt=q?q.position:void 0;D.updateClouds(e,tt)}if(this.debris.length>0){const q=on(this.state.position,this.system);for(let tt=this.debris.length-1;tt>=0;tt--){const B=this.debris[tt];if(B.life-=e,B.life<=0||B.body.mass<=0){this.sceneMgr.scene.remove(B.mesh),this.debris.splice(tt,1);continue}const C=yu(B.body,this.system.bodies);B.body.applyForce(C,e),B.mesh.position.set(B.body.position[0]*Gt,B.body.position[1]*Gt,B.body.position[2]*Gt);const nt=B.body.position[0]-q.position[0],J=B.body.position[1]-q.position[1],Mt=B.body.position[2]-q.position[2],bt=Math.sqrt(nt*nt+J*J+Mt*Mt),ne=q.getSurfaceRadiusAt?.(B.body.position)??q.radius??6371e3;bt<ne&&(this.sceneMgr.scene.remove(B.mesh),this.debris.splice(tt,1))}}this.updateExplosion(e);const K=on(this.state.position,this.system),I=this.state.position[0]-K.position[0],k=this.state.position[1]-K.position[1],z=this.state.position[2]-K.position[2],it=Math.sqrt(I*I+k*k+z*z)||1,$=new P(I/it,k/it,z/it);if(this.rocketShadow&&(this.rocketShadow.visible=this.grounded&&!this.crashed),!this.crashed){const q=on(this.state.position,this.system),tt=this.state.position[0]-q.position[0],B=this.state.position[1]-q.position[1],C=this.state.position[2]-q.position[2],nt=Math.sqrt(tt*tt+B*B+C*C)||1,J=-this.rocketBottomY-50*Gt;if(!this._debugShown){this._debugShown=!0;const Mt=document.createElement("div");Mt.style.cssText="position:fixed;top:120px;right:16px;z-index:600;font-family:monospace;font-size:11px;color:#ff0;background:rgba(0,0,0,0.7);padding:8px;border-radius:4px;pointer-events:none;",Mt.innerHTML=`rocketBottomY=${this.rocketBottomY.toFixed(4)}<br>visualOffset=${J.toFixed(4)}<br>VISUAL_SCALE=${Gt}<br>VISUAL_SCALE=ORBIT_SCALE*VISUAL_PLANET_MULT=${1e-9}*562500<br>earthVisualR=${(6371e3*Gt).toFixed(2)}<br>rocketGroup.scale=${no}<br>physicsY=${this.state.position[1].toFixed(0)}<br>visualY=${(this.state.position[1]*Gt).toFixed(4)}<br>upDir=(${(tt/nt).toFixed(3)},${(B/nt).toFixed(3)},${(C/nt).toFixed(3)})`,document.body.appendChild(Mt),setTimeout(()=>{Mt.style.transition="opacity 2s",Mt.style.opacity="0",setTimeout(()=>Mt.remove(),2e3)},8e3)}if(this.rocketGroup.position.set(this.state.position[0]*Gt+tt/nt*J,this.state.position[1]*Gt+B/nt*J,this.state.position[2]*Gt+C/nt*J),this.cameraMode==="free"){this.freeCamKeys.left&&(this.freeCamAzimuth+=3*e),this.freeCamKeys.right&&(this.freeCamAzimuth-=3*e),this.freeCamKeys.up&&(this.freeCamPolar=Math.max(.05,this.freeCamPolar-3*.7*e)),this.freeCamKeys.down&&(this.freeCamPolar=Math.min(Math.PI-.05,this.freeCamPolar+3*.7*e));const bt=new P(this.state.position[0]*Gt+tt/nt*J,this.state.position[1]*Gt+B/nt*J,this.state.position[2]*Gt+C/nt*J),ne=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.cos(this.freeCamAzimuth),yt=this.freeCamDist*Math.cos(this.freeCamPolar),Q=this.freeCamDist*Math.sin(this.freeCamPolar)*Math.sin(this.freeCamAzimuth);this.sceneMgr.camera.position.set(bt.x+ne,bt.y+yt,bt.z+Q);const Et=Math.abs(this.freeCamPolar-Math.PI/2)>Math.PI/2-.15?new P(0,0,Math.sin(this.freeCamPolar)>0?1:-1):new P(0,1,0);this.sceneMgr.camera.up.copy(Et),this.sceneMgr.camera.lookAt(bt)}else{const Mt={x:tt/nt*J,y:B/nt*J,z:C/nt*J};this.chase.follow(this.state,e,$,n,Mt)}this.deployedChuteMesh&&(this.deployedChuteMesh.position.set(this.state.position[0]*Gt,this.state.position[1]*Gt+.02,this.state.position[2]*Gt),this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation))}const Z=y&&y.radius?S-y.radius:0;this.countStages(this.rocket.assembly.roots);const st=this.computeStageData();this.stageInfo=st;const ct=on(this.state.position,this.system);if(ct&&ct.mass>0){const q=[(this.state.position[0]-ct.position[0])*Gt,(this.state.position[1]-ct.position[1])*Gt,(this.state.position[2]-ct.position[2])*Gt];js(q,this.state.velocity,ct.mass,5e14,360)}if(this.impactMarker){const q=on(this.state.position,this.system),tt=[this.state.position[0]-q.position[0],this.state.position[1]-q.position[1],this.state.position[2]-q.position[2]],B=js(tt,this.state.velocity,q.mass,5e14,360);if(B.points.length>10&&!B.bound){const C=B.points[B.points.length-1],nt=q.getSurfaceRadiusAt?.([C[0],0,C[1]])??q.radius??6371e3;q.position[0]+C[0],q.position[2]+C[1];const J=Math.sqrt(C[0]*C[0]+C[1]*C[1]);if(J>nt*.5){const Mt=q.position[0]+C[0]/J*nt,bt=q.position[2]+C[1]/J*nt;this.impactMarker.position.set(Mt*Gt,0,bt*Gt),this.impactMarker.visible=!0}else this.impactMarker.visible=!1}else this.impactMarker.visible=!1}this.stageInfo.filter(q=>q.active).length>0&&this.stageInfo.findIndex(q=>q.active)+1,this.hud.update(this.state,this.system,this.heatEnergy,this.state.throttle);const ot=on(this.state.position,this.system),X=[(this.state.position[0]-ot.position[0])*Gt,(this.state.position[1]-ot.position[1])*Gt,(this.state.position[2]-ot.position[2])*Gt],j=js(X,this.state.velocity,ot.mass,5e14,90);if(j.points.length>5){if(!this.orbitLine){const tt=new Ne,B=new Float32Array(j.points.length*3);tt.setAttribute("position",new Pe(B,3));const C=new Mo({color:j.bound?4491468:14527044,transparent:!0,opacity:.3,depthWrite:!1});this.orbitLine=new So(tt,C),this.sceneMgr.scene.add(this.orbitLine)}const q=this.orbitLine.geometry.attributes.position;for(let tt=0;tt<j.points.length;tt++)q.array[tt*3]=ot.position[0]*Gt+j.points[tt][0],q.array[tt*3+1]=this.state.position[1]*Gt,q.array[tt*3+2]=ot.position[2]*Gt+j.points[tt][1];q.needsUpdate=!0,this.orbitLine.geometry.setDrawRange(0,j.points.length),this.orbitLine.material.color.set(j.bound?4491468:14527044),this.orbitLine.visible=!0}else this.orbitLine&&(this.orbitLine.visible=!1);Z>this.maxAlt&&(this.maxAlt=Z),T>this.maxSpeed&&(this.maxSpeed=T);const gt=[100,500,1e3,5e3,1e4,5e4,1e5,5e5,1e6];for(const q of gt)if(Z>=q&&this.lastAltMilestone<q){this.lastAltMilestone=q,Te.show(`Altitude: ${q>=1e3?q/1e3+"km":q+"m"}`);break}const Tt=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2)/340;this.hud.setMass(this.state.rocket.totalMass()),this.prevMach=Tt;const Ft=on(this.state.position,this.system);if(Ft&&Ft.mass>0){const q=this.state.position[0]-Ft.position[0],tt=this.state.position[1]-Ft.position[1],B=this.state.position[2]-Ft.position[2],C=Math.sqrt(q*q+tt*tt+B*B)||1;or*Ft.mass/(C*C)}this.prevVel=[this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]];const Ht=this.state.velocity[0]-this.prevVel[0],Ut=this.state.velocity[1]-this.prevVel[1],W=this.state.velocity[2]-this.prevVel[2],N=Math.sqrt(Ht*Ht+Ut*Ut+W*W),Bt=e>0?N/(e*9.80665):1;if(Bt>2.5?this.screenShake=Math.min(1,(Bt-2.5)/5):this.screenShake*=Math.exp(-3*e),this.screenShake>.01){const q=(Math.random()-.5)*this.screenShake*.01,tt=(Math.random()-.5)*this.screenShake*.01;this.rocketGroup.position.x+=q,this.rocketGroup.position.z+=tt}const L=T/1e3,_t=50+Math.min(30,L*.1);this.sceneMgr.camera.fov+=(_t-this.sceneMgr.camera.fov)*e*2,this.sceneMgr.camera.updateProjectionMatrix();const Zt=Math.min(1,Math.max(0,(Z??0)/1e5)),Lt=.35*(1-Zt)+.01*Zt,R=.55*(1-Zt)+.01*Zt,v=.85*(1-Zt)+.02*Zt;this.sceneMgr.scene.background=new wt(Lt,R,v);const H=new P(0,1,0).applyQuaternion(this.rocketQuat),lt=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),et=lt>.01?[this.state.velocity[0]/lt,this.state.velocity[1]/lt,this.state.velocity[2]/lt]:[0,1,0],rt=on(this.state.position,this.system),vt=this.state.position[0]-rt.position[0],ht=this.state.position[1]-rt.position[1],xt=this.state.position[2]-rt.position[2],It=Math.sqrt(vt*vt+ht*ht+xt*xt)||1,zt=this.state.velocity[0],at=this.state.velocity[1],ae=this.state.velocity[2],Xt=ht*ae-xt*at,Nt=xt*zt-vt*ae,Rt=vt*at-ht*zt,mt=Math.sqrt(Xt*Xt+Nt*Nt+Rt*Rt)||1,Dt=[],Kt={sun:"#ffdd44",earth:"#4fc3f7",moon:"#ccccee",venus:"#e8b84c",mars:"#e88444",jupiter:"#e8b87c",saturn:"#f4e8b0",uranus:"#5fe0f0",neptune:"#5b88ee",titan:"#ddaa77",io:"#eeddaa",europa:"#aaccdd",ganymede:"#bbccaa",pluto:"#ddccbb"};for(const q of this.system.bodies){if(q.mass<=0)continue;const tt=q.position[0]-this.state.position[0],B=q.position[1]-this.state.position[1],C=q.position[2]-this.state.position[2],nt=Math.sqrt(tt*tt+B*B+C*C)||1;Dt.push({name:q.name,dir:[tt/nt,B/nt,C/nt],color:Kt[q.name]||"#888"})}this.hud.setNavballData([H.x,H.y,H.z],et,[vt/It,ht/It,xt/It],[Xt/mt,Nt/mt,Rt/mt],Dt)}performStage(){const t=this.findLowestDecoupler(this.rocket.assembly.roots);if(!t){Te.show("No decouplers to stage.");return}this.sound.playStaging();const e=this.rocketGroup.getObjectByName(t.part.id);if(e){const n=[],i=[];for(let c=0;c<16;c++){const d=.02+Math.random()*.04,h=new fe(d,4,3),u=new Me({color:c<4?16746564:11184810,transparent:!0,opacity:.9,blending:an,depthWrite:!1}),f=new ut(h,u),m=c/16*Math.PI*2+Math.random()*.3,_=(Math.random()-.5)*.8;f.position.copy(this.rocketGroup.position),f.position.x+=Math.cos(m)*.15,f.position.y+=_*.1,f.position.z+=Math.sin(m)*.15,this.sceneMgr.scene.add(f),f._life=.6+Math.random()*.4,f._age=0,f._vx=Math.cos(m)*(.8+Math.random()*1.5),f._vy=_*.5,f._vz=Math.sin(m)*(.8+Math.random()*1.5),this.explosionMeshes.push(f)}for(;e.children.length>0;){const c=e.children[0],d=new P;c.getWorldPosition(d),n.push(d),i.push(c),c.removeFromParent()}const s=on(this.state.position,this.system),o=[...this.state.position],a=[s.position[0]-o[0],s.position[1]-o[1],s.position[2]-o[2]],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])||1;for(let c=0;c<i.length;c++){const d=i[c],h=new sn;h.add(d),d.position.set(0,0,0);const u=this.sceneMgr.scene;h.position.copy(n[c]),h.position.x+=(Math.random()-.5)*.5,h.position.y+=(Math.random()-.5)*.5,h.position.z+=(Math.random()-.5)*.5,h.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),u.add(h);const f=1+Math.random()*2,m=[this.state.velocity[0]-a[0]/l*f+(Math.random()-.5)*.5,this.state.velocity[1]-a[1]/l*f+(Math.random()-.5)*.5,this.state.velocity[2]-a[2]/l*f+(Math.random()-.5)*.5],_=new ll("debris",100,o,m);this.debris.push({mesh:h,body:_,life:60})}}this.rocket.removeStage(t),this.achievements.unlock("stage_separate"),Te.show("Stage separated!")}findLowestDecoupler(t){let e=null;const n=i=>{for(const s of i)s.part.kind==="decoupler"&&(e=s),n(s.children)};return n(t),e}toggleParachute(){if(this.rocket.assembly.roots.some(e=>e.part.kind==="parachute")||this.rocket.assembly.roots.some(e=>e.children.some(n=>n.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const e={radius:.6*kt,height:1*kt};this.deployedChuteMesh=Xa(e),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);Te.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}}toggleGear(){this.gearDeployed=!this.gearDeployed;for(const t of this.gearMeshes)t.visible=this.gearDeployed;Te.show(this.gearDeployed?"Landing gear deployed":"Landing gear retracted")}doCrash(t,e,n,i,s,o,a){this.crashed||(this.crashed=!0,this.achievements.unlock("crash"),this.sound.playCrash(),this.sound.stopEngine(),Te.show(`CRASH! ${t}`),this.rocketGroup.visible=!1,this.engineFlame.stop(),this.screenShake=3,this.state.position=[e.position[0]+n/o*(a+50),e.position[1]+i/o*(a+50),e.position[2]+s/o*(a+50)],this.state.velocity=[0,0,0],this.state.throttle=0,this.spawnExplosion(this.state.position[0]*Gt,this.state.position[1]*Gt,this.state.position[2]*Gt),this.showCrashOverlay(t))}showCrashOverlay(t){const e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999;pointer-events:none;opacity:0;transition:opacity 0.1s;",document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1"}),setTimeout(()=>{e.style.opacity="0"},100),setTimeout(()=>e.remove(),500);const n=document.createElement("div");n.style.cssText=`
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
    `,document.body.appendChild(n),this.crashOverlay=n,n.querySelector("#crash-menu").addEventListener("click",()=>{this.onCrashAction?.("menu")}),n.querySelector("#crash-restart").addEventListener("click",()=>{this.onCrashAction?.("restart")})}updateExplosion(t){if(this.explosionMeshes.length>0)for(let e=this.explosionMeshes.length-1;e>=0;e--){const n=this.explosionMeshes[e],i=n._age+t;n._age=i;const s=n._life,o=i/s;if(o>=1){this.sceneMgr.scene.remove(n),n.geometry.dispose(),n.material.dispose(),this.explosionMeshes.splice(e,1);continue}const a=n._shockRing,l=a?1+o*60:1+o*6;n.scale.setScalar(l);const c=s<1?2:1;n.material.opacity=a?Math.max(0,.85*(1-o*1.5)):Math.max(0,.9*(1-o*c)),n.position.x+=n._vx*t,n.position.y+=n._vy*t,n.position.z+=n._vz*t}}explosionMeshes=[];spawnExplosion(t,e,n){const i=[16746496,16729088,16720384,16737792,13386752,16755200],s=new ut(new fe(.8,12,8),new Me({color:16755200,transparent:!0,opacity:1,blending:an,depthWrite:!1}));s.position.set(t,e,n),s._life=.8,s._age=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s);for(let o=0;o<8;o++){const a=1+Math.random()*1.5,l=new fe(a,8,6),c=new Me({color:i[o%i.length],transparent:!0,opacity:.9,blending:an,depthWrite:!1}),d=new ut(l,c),h=o/8*Math.PI*2,u=Math.random()*Math.PI,f=.3;d.position.set(t+Math.sin(h)*Math.cos(u)*f,e+Math.sin(u)*f,n+Math.cos(h)*Math.cos(u)*f),d._life=1.5+Math.random()*.5,d._age=0,d._vx=Math.sin(h)*Math.cos(u)*(1+Math.random()*3),d._vy=Math.sin(u)*(1+Math.random()*3),d._vz=Math.cos(h)*Math.cos(u)*(1+Math.random()*3),this.sceneMgr.scene.add(d),this.explosionMeshes.push(d)}for(let o=0;o<4;o++){const a=1.5+Math.random()*2,l=new Me({color:4473924,transparent:!0,opacity:.4,blending:pi,depthWrite:!1}),c=new ut(new fe(a,6,6),l),d=o/4*Math.PI*2+Math.random()*.5;c.position.set(t+Math.cos(d)*.5,e+(Math.random()-.5)*.3,n+Math.sin(d)*.5),c._life=2+Math.random()*.5,c._age=0,c._vx=Math.cos(d)*(.5+Math.random()*1.5),c._vy=(Math.random()-.5)*1,c._vz=Math.sin(d)*(.5+Math.random()*1.5),this.sceneMgr.scene.add(c),this.explosionMeshes.push(c)}}spawnShockRing(t=16777215){const e=new P;this.rocketGroup.getWorldPosition(e),e.x*Gt,e.y*Gt,e.z*Gt;const n=new In(.1,.2,64),i=new Me({color:t,transparent:!0,opacity:.85,side:De,blending:an,depthWrite:!1}),s=new ut(n,i);s.position.set(this.rocketGroup.position.x,this.rocketGroup.position.y,this.rocketGroup.position.z),s.quaternion.copy(this.rocketQuat),s.scale.setScalar(1),s._life=1.2,s._age=0,s._shockRing=!0,s._vx=0,s._vy=0,s._vz=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s)}hasLandingLegs(){const t=e=>{for(const n of e)if(n.part.kind==="legs"||t(n.children))return!0;return!1};return t(this.rocket.assembly.roots)}positionFlameAtNozzle(){let t=1/0,e=-1/0;this.rocketGroup.traverse(i=>{if(i instanceof ut){if(this.gearMeshes.includes(i)||i===this.rocketShadow||i===this.reentryGlow||i===this.reentryGlowMesh)return;const s=new mn().setFromObject(i);s.min.y<t&&(t=s.min.y),s.max.y>e&&(e=s.max.y)}}),this.rocketBottomY=t===1/0?-.1:t;const n=t===1/0?-.1:t-.01;this.engineFlame.getMesh().position.set(0,n,0),this.engineFlame.getMesh().rotation.set(0,0,0)}dispose(){this.crashOverlay&&(this.crashOverlay.remove(),this.crashOverlay=null),this.sceneMgr.scene.remove(this.rocketGroup);for(const t of this.debris)this.sceneMgr.scene.remove(t.mesh);this.debris=[];for(const t of this.explosionMeshes)this.sceneMgr.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.explosionMeshes=[],this.controls.dispose(),this.engineFlame.dispose(),this.groundSmoke.dispose(),this.hud.unmount(),this.sound.dispose()}}function ay(r,t,e){const n=r.mass,i=[...r.position],s=[...r.velocity],o=Oe(t(r),1/n),a=s,c=va(r,Ye(i,Oe(o,.5*e)),Ye(s,Oe(a,.5*e))),d=Oe(t(c),1/n),h=Ye(s,Oe(o,.5*e)),f=va(r,Ye(i,Oe(d,.5*e)),Ye(s,Oe(h,.5*e))),m=Oe(t(f),1/n),_=Ye(s,Oe(d,.5*e)),p=va(r,Ye(i,Oe(m,e)),Ye(s,Oe(_,e))),x=Oe(t(p),1/n),y=Ye(s,Oe(m,e)),S=Oe(Ye(Ye(o,Oe(d,2)),Ye(Oe(m,2),x)),e/6),A=Oe(Ye(Ye(a,Oe(h,2)),Ye(Oe(_,2),y)),e/6);r.position=Ye(i,A),r.velocity=Ye(s,S)}function va(r,t,e){return{...r,position:t,velocity:e}}function Ye(r,t){return[r[0]+t[0],r[1]+t[1],r[2]+t[2]]}function Oe(r,t){return[r[0]*t,r[1]*t,r[2]*t]}class ly{bodies=[];add(t){this.bodies.push(t)}bodyByName(t){return this.bodies.find(e=>e.name===t)}propagate(t,e){let n=t;for(;n>0;){const i=Math.min(e,n);this.step(i),n-=i}}step(t){for(const e of this.bodies){if(e.mass<=0)continue;const n=yu(e,this.bodies);ay(e,()=>n,t)}}}const si=_n*xn;class Zn extends ll{radius;visualRadius;mesh;constructor(t,e,n,i,s){super(t,e,n,i),this.radius=s,this.visualRadius=s*si;const o=new fe(this.visualRadius,64,32),a=new ge({color:8421504});this.mesh=new ut(o,a),this.mesh.position.set(n[0]*si,n[1]*si,n[2]*si)}getTerrainHeightVisual(t,e,n){return 0}syncMesh(){this.mesh.position.set(this.position[0]*si,this.position[1]*si,this.position[2]*si)}getSurfaceRadiusAt(t){const e=t[0]-this.position[0],n=t[1]-this.position[1],i=t[2]-this.position[2],s=Math.sqrt(e*e+n*n+i*i);if(s===0)return this.radius;const o=e/s,a=n/s,l=i/s,d=this.getTerrainHeightVisual(o,a,l)/si;return this.radius+d}}const Ma=_n*xn,ch=64,ri=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},cy=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),u=ri(n,i,s),f=ri(n+1,i,s),m=ri(n,i+1,s),_=ri(n+1,i+1,s),g=ri(n,i,s+1),p=ri(n+1,i,s+1),x=ri(n,i+1,s+1),y=ri(n+1,i+1,s+1);return Pi(Pi(Pi(u,f,c),Pi(m,_,c),d),Pi(Pi(g,p,c),Pi(x,y,c),d),h)},qr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*cy(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Pi=(r,t,e)=>r+(t-r)*e;class hy extends Zn{getTerrainHeightVisual(t,e,n){const i=qr(t*10+500,e*10+600,n*10+700,4),s=qr(t*40+100,e*40+200,n*40+300,3),o=i*.8+s*.2,a=this.visualRadius*.03;return o>.4?((o-.4)/.6)**2*a:-(.4-o)/.4*a*.12}constructor(t,e){super("mercury",1e24,t,e,244e4);const n=this.visualRadius,s=new Us().load(Ns("/textures/mercury.jpg"),h=>{h.colorSpace=re,h.anisotropy=4}),o=new fe(n,ch,ch),a=o.attributes.position,l=new P,c=n*.03;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,m=l.z/n,_=qr(u*10+500,f*10+600,m*10+700,4),g=qr(u*40+100,f*40+200,m*40+300,3),p=_*.8+g*.2;let x=0;p>.4?x=((p-.4)/.6)**2*c:x=-(.4-p)/.4*c*.12,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new ge({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(o,d),this.mesh.position.set(t[0]*Ma,t[1]*Ma,t[2]*Ma)}}const hh=`
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
`,uy=`
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
`,dy=`
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
`;class qi{group=new sn;innerMesh;outerMesh;innerMat;outerMat;constructor(t,e=4491519,n=.7,i,s=16737826,o=3){const a=new wt(e),l=new wt(s),c=i??t*.08,d=new P(0,0,0),h=t*1.01,u=new fe(h,64,48);this.innerMat=new Ln({vertexShader:hh,fragmentShader:uy,uniforms:{uSunDir:{value:new P(0,1,0)},uPlanetCenter:{value:d},uInnerRadius:{value:t},uAtmHeight:{value:c},uRayleighCol:{value:a},uMieCol:{value:new wt(.9,.9,1)},uDensity:{value:n},uTerminatorCol:{value:l},uGlowPower:{value:o}},transparent:!0,blending:an,depthWrite:!1,side:Pn}),this.innerMesh=new ut(u,this.innerMat),this.group.add(this.innerMesh);const f=t*1.06,m=new fe(f,48,32);this.outerMat=new Ln({vertexShader:hh,fragmentShader:dy,uniforms:{uSunDir:{value:new P(0,1,0)},uPlanetCenter:{value:d},uInnerRadius:{value:t},uDensity:{value:n*.5},uGlowPower:{value:o}},transparent:!0,blending:an,depthWrite:!1,side:Pn}),this.outerMesh=new ut(m,this.outerMat),this.group.add(this.outerMesh)}setSunDirection(t,e){const n=new P().copy(t).sub(e).normalize();this.innerMat.uniforms.uSunDir.value.copy(n),this.outerMat.uniforms.uSunDir.value.copy(n)}getMesh(){return this.group}dispose(){this.innerMat.dispose(),this.outerMat.dispose(),this.innerMesh.geometry.dispose(),this.outerMesh.geometry.dispose()}}const Sa=_n*xn,uh=64,oi=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},fy=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),u=oi(n,i,s),f=oi(n+1,i,s),m=oi(n,i+1,s),_=oi(n+1,i+1,s),g=oi(n,i,s+1),p=oi(n+1,i,s+1),x=oi(n,i+1,s+1),y=oi(n+1,i+1,s+1);return Li(Li(Li(u,f,c),Li(m,_,c),d),Li(Li(g,p,c),Li(x,y,c),d),h)},Yr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*fy(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Li=(r,t,e)=>r+(t-r)*e;class py extends Zn{getTerrainHeightVisual(t,e,n){const i=Yr(t*6+50,e*6+100,n*6+150,4),s=Yr(t*15+200,e*15+300,n*15+400,3),o=i*.6+s*.4,a=this.visualRadius*.015;return o>.35?((o-.35)/.65)**2*a:-(.35-o)/.35*a*.05}atmosphereGlow;constructor(t,e){super("venus",146e23,t,e,6052e3);const n=this.visualRadius,s=new Us().load(Ns("/textures/venus.jpg"),h=>{h.colorSpace=re,h.anisotropy=4}),o=new fe(n,uh,uh),a=o.attributes.position,l=new P,c=n*.015;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,m=l.z/n,_=Yr(u*6+50,f*6+100,m*6+150,4),g=Yr(u*15+200,f*15+300,m*15+400,3),p=_*.6+g*.4;let x=0;p>.35?x=((p-.35)/.65)**2*c:x=-(.35-p)/.35*c*.05,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new ge({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(o,d),this.mesh.position.set(t[0]*Sa,t[1]*Sa,t[2]*Sa),this.atmosphereGlow=new qi(n,15247436,.4),this.mesh.add(this.atmosphereGlow.getMesh())}}const ba=_n*xn;function vu(r){let t=r|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function my(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=n.createImageData(1024,512),s=3;for(let a=0;a<512;a++)for(let l=0;l<1024;l++){const c=l/1024,d=a/512,h=(d-.5)*Math.PI,u=c*Math.PI*2,f=Math.cos(h)*Math.cos(u),m=Math.cos(h)*Math.sin(u),_=Math.sin(h),g=Math.sin(f*s+m*1.3+_*.7)*.5+.5,p=Math.sin((f+1.7)*s*2+_*1.1)*.5+.5,x=Math.cos((m+.5)*s*4-f*2.3)*.5+.5,y=Math.sin(f*s*8+m*6+_*7)*.5+.5;let S=g*.4+p*.3+x*.2+y*.1;const A=1-Math.abs(d-.5)*1.2;S*=Math.max(0,A),S=Math.max(0,(S-.4)*2.5);const w=Math.min(255,Math.max(0,Math.round(S*255))),b=(a*1024+l)*4;i.data[b]=w,i.data[b+1]=w,i.data[b+2]=w,i.data[b+3]=255}n.putImageData(i,0,0);const o=new qe(e);return o.wrapS=o.wrapT=Ue,o}function gy(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");n.fillStyle="#000000",n.fillRect(0,0,1024,512);const i=[{lat:.7,lon:-1.8,rx:.5,ry:.8},{lat:-.4,lon:-1.3,rx:.6,ry:.35},{lat:.85,lon:.4,rx:.25,ry:.3},{lat:.1,lon:.6,rx:.55,ry:.4},{lat:.7,lon:1.6,rx:.55,ry:1},{lat:-.6,lon:2.4,rx:.25,ry:.3},{lat:1.1,lon:-.9,rx:.2,ry:.2}],s=vu(42);for(const a of i){const l=(a.lon+Math.PI)/(2*Math.PI)*1024,c=(Math.PI/2-a.lat)/Math.PI*512,d=a.rx/(2*Math.PI)*1024,h=a.ry/Math.PI*512,u=20+Math.floor(s()*40);for(let f=0;f<u;f++){const m=(s()-.5)*d*2,_=(s()-.5)*h*2;if((m/d)**2+(_/h)**2>1)continue;const p=l+m,x=c+_,y=1+s()*4,S=100+Math.floor(s()*155);n.fillStyle=`rgb(${S}, ${Math.floor(S*.85)}, ${Math.floor(S*.5)})`,n.beginPath(),n.arc(p,x,y,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255, 220, 100, ${.05+s()*.1})`,n.beginPath(),n.arc(p,x,y*3,0,Math.PI*2),n.fill()}for(let f=0;f<3;f++){const m=(s()-.5)*d*1.5,_=(s()-.5)*h*1.5;if((m/d)**2+(_/h)**2>1)continue;const p=l+m,x=c+_;n.fillStyle="#ffdd66",n.beginPath(),n.arc(p,x,3+s()*5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255, 200, 80, 0.2)",n.beginPath(),n.arc(p,x,8+s()*10,0,Math.PI*2),n.fill()}}for(const a of i){const l=(a.lon+Math.PI)/(2*Math.PI)*1024,c=(Math.PI/2-a.lat)/Math.PI*512,d=a.rx/(2*Math.PI)*1024,h=a.ry/Math.PI*512;for(let u=0;u<30;u++){const f=s()*Math.PI*2,m=.85+s()*.2,_=l+Math.cos(f)*d*m,g=c+Math.sin(f)*h*m,p=1+s()*2;n.fillStyle=`rgba(200, 180, 100, ${.1+s()*.15})`,n.beginPath(),n.arc(_,g,p,0,Math.PI*2),n.fill()}}const o=new qe(e);return o.wrapS=o.wrapT=Ue,o.colorSpace=re,o}function _y(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=n.createImageData(1024,512),s=i.data,o=[{lat:.7,lon:-1.8,rx:.5,ry:.8},{lat:-.4,lon:-1.3,rx:.6,ry:.35},{lat:.85,lon:.4,rx:.25,ry:.3},{lat:.1,lon:.6,rx:.55,ry:.4},{lat:.7,lon:1.6,rx:.55,ry:1},{lat:-.6,lon:2.4,rx:.25,ry:.3},{lat:1.1,lon:-.9,rx:.2,ry:.2}];for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const d=c/1024,u=(l/512-.5)*Math.PI,f=d*Math.PI*2-Math.PI;let m=!1;for(const p of o){const x=(u-p.lat)/p.rx,y=(f-p.lon)/p.ry;if(x*x+y*y<1){m=!0;break}}const _=m?180:40,g=(l*1024+c)*4;s[g]=s[g+1]=s[g+2]=_,s[g+3]=255}n.putImageData(i,0,0);const a=new qe(e);return a.wrapS=a.wrapT=Ue,a}function xy(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#1a3a8c"),i.addColorStop(.5,"#2266cc"),i.addColorStop(1,"#1a4a9a"),n.fillStyle=i,n.fillRect(0,0,1024,512);const s=[{lat:.7,lon:-2,rx:.55,ry:.5,color:"#5a8c3f"},{lat:.65,lon:-1.6,rx:.35,ry:.35,color:"#6a9c4f"},{lat:-.35,lon:-1.4,rx:.4,ry:.6,color:"#6a9c4f"},{lat:.85,lon:.4,rx:.2,ry:.22,color:"#7aac5a"},{lat:.1,lon:.6,rx:.45,ry:.5,color:"#8a9c4f"},{lat:.5,lon:1.5,rx:.6,ry:.4,color:"#7a9c4a"},{lat:.3,lon:1.1,rx:.25,ry:.15,color:"#8aac5a"},{lat:-.4,lon:1.7,rx:.15,ry:.35,color:"#7a9c4f"},{lat:1,lon:-2.5,rx:.08,ry:.1,color:"#6a9c4f"},{lat:-.7,lon:-1.1,rx:.08,ry:.08,color:"#7aac5a"}];for(const a of s){n.fillStyle=a.color,n.beginPath();const l=(a.lon+Math.PI)/(2*Math.PI)*1024,c=(Math.PI/2-a.lat)/Math.PI*512,d=a.rx/(2*Math.PI)*1024,h=a.ry/Math.PI*512;n.ellipse(l,c,d,h,0,0,Math.PI*2),n.fill();const u=a.lat*1e3+a.lon*100,f=vu(u);for(let m=0;m<80;m++){const _=(f()-.5)*d*1.8,g=(f()-.5)*h*1.8;(_/d)**2+(g/h)**2<1&&(n.fillStyle=f()>.5?"#2a5c1f":"#6a9c4a",n.beginPath(),n.arc(l+_,c+g,1+f()*4,0,Math.PI*2),n.fill())}}n.fillStyle="#c0d8e8",n.fillRect(0,0,1024,512*.05),n.fillRect(0,512*.95,1024,512*.05);const o=new qe(e);return o.wrapS=o.wrapT=Ue,o.colorSpace=re,o}class yy extends Zn{atmosphereGlow;cloudMesh;cloudTex;constructor(t,e){super("earth",_x,t,e,6371e3);const n=this.visualRadius,i=200,s=new fe(n,i,i),o=_y(),a=new ge({roughness:.9,roughnessMap:o,metalness:0,bumpMap:Sx(),bumpScale:.5,emissiveMap:gy(),emissive:new wt(16768358),emissiveIntensity:.15});this.mesh=new ut(s,a),this.mesh.position.set(t[0]*ba,t[1]*ba,t[2]*ba),this.generateTerrain(n);const l=xy();a.map=l,a.needsUpdate=!0,this.loadHighResTexture().catch(()=>{}),this.atmosphereGlow=new qi(n,4491519,.6),this.mesh.add(this.atmosphereGlow.getMesh()),this.cloudTex=my();const c=new ge({map:this.cloudTex,transparent:!0,opacity:.35,depthWrite:!1,side:De,roughness:1,metalness:0}),d=new fe(n*1.008,i,i);this.cloudMesh=new ut(d,c),this.cloudMesh.position.copy(this.mesh.position),this.mesh.add(this.cloudMesh)}async loadHighResTexture(){const e=await new Us().loadAsync(Ns("/textures/earth_daymap.jpg"));e.colorSpace=re,e.anisotropy=8;const n=this.mesh.material;n.map=e,n.needsUpdate=!0}updateClouds(t,e){if(this.cloudMesh.rotation.y+=t*.008,!e)return;const n=this.mesh.material,i=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])||1,s=e[0]/i,o=e[1]/i,a=e[2]/i;this.mesh.lookAt(this.mesh.position.x+s*100,this.mesh.position.y+o*100,this.mesh.position.z+a*100),this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,n.emissiveIntensity=.08}getTerrainHeightVisual(t,e,n){const i=Math.sin(t*3+e*1.8)*.5+Math.cos(e*2.5-n*1.3)*.3,s=Math.sin(n*1.8+t*1.2+e*.6)*.2+Math.sin(t*6+e*3+n*4)*.15,o=Math.sin(t*12+n*8)*.1+Math.cos(e*10+t*5)*.08,a=Math.sin(t*25+e*20+n*30)*.05,l=((i+s+o+a)*.3+.5)*1.2,c=this.visualRadius*.08,d=this.visualRadius*.012;if(l>.4){const h=(l-.4)/.6;return h*h*c}return-(.4-l)/.4*d}generateTerrain(t){const e=this.mesh.geometry,n=e.attributes.position,i=new P;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);const o=i.x/t,a=i.y/t,l=i.z/t,c=this.getTerrainHeightVisual(o,a,l);i.setLength(t+c),n.setXYZ(s,i.x,i.y,i.z)}n.needsUpdate=!0,e.computeVertexNormals()}}const Ta=_n*xn,dh=64,ai=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},vy=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),u=ai(n,i,s),f=ai(n+1,i,s),m=ai(n,i+1,s),_=ai(n+1,i+1,s),g=ai(n,i,s+1),p=ai(n+1,i,s+1),x=ai(n,i+1,s+1),y=ai(n+1,i+1,s+1);return Ii(Ii(Ii(u,f,c),Ii(m,_,c),d),Ii(Ii(g,p,c),Ii(x,y,c),d),h)},Kr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*vy(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Ii=(r,t,e)=>r+(t-r)*e;class My extends Zn{getTerrainHeightVisual(t,e,n){const i=Kr(t*8+100,e*8+200,n*8+300,4),s=Kr(t*30+400,e*30+500,n*30+600,3),o=i*.7+s*.3,a=this.visualRadius*.04;return o>.45?((o-.45)/.55)**2*a:-(.45-o)/.45*a*.15}constructor(t,e){super("moon",22e22,t,e,1737e3);const n=this.visualRadius,s=new Us().load(Ns("/textures/moon.jpg"),h=>{h.colorSpace=re,h.anisotropy=4}),o=new fe(n,dh,dh),a=o.attributes.position,l=new P,c=n*.04;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,m=l.z/n,_=Kr(u*8+100,f*8+200,m*8+300,4),g=Kr(u*30+400,f*30+500,m*30+600,3),p=_*.7+g*.3;let x=0;p>.45?x=((p-.45)/.55)**2*c:x=-(.45-p)/.45*c*.15,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new ge({map:s,roughness:.95,metalness:0,color:16777215});this.mesh=new ut(o,d),this.mesh.position.set(t[0]*Ta,t[1]*Ta,t[2]*Ta)}}const Ea=_n*xn,fh=64,li=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},Sy=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),u=li(n,i,s),f=li(n+1,i,s),m=li(n,i+1,s),_=li(n+1,i+1,s),g=li(n,i,s+1),p=li(n+1,i,s+1),x=li(n,i+1,s+1),y=li(n+1,i+1,s+1);return Di(Di(Di(u,f,c),Di(m,_,c),d),Di(Di(g,p,c),Di(x,y,c),d),h)},jr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Sy(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Di=(r,t,e)=>r+(t-r)*e;class by extends Zn{getTerrainHeightVisual(t,e,n){const i=jr(t*4+10,e*4+20,n*4+30,5),s=jr(t*20+100,e*20+200,n*20+300,3),o=i*.7+s*.3,a=this.visualRadius*.035;return o>.4?((o-.4)/.6)**2*a:-(.4-o)/.4*a*.1}atmosphereGlow;constructor(t,e){super("mars",19e23,t,e,339e4);const n=this.visualRadius,s=new Us().load(Ns("/textures/mars.jpg"),h=>{h.colorSpace=re,h.anisotropy=4}),o=new fe(n,fh,fh),a=o.attributes.position,l=new P,c=n*.035;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const u=l.x/n,f=l.y/n,m=l.z/n,_=jr(u*4+10,f*4+20,m*4+30,5),g=jr(u*20+100,f*20+200,m*20+300,3),p=_*.7+g*.3;let x=0;p>.4?x=((p-.4)/.6)**2*c:x=-(.4-p)/.4*c*.1,l.setLength(n+x),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const d=new ge({map:s,roughness:.85,metalness:0,color:16777215});this.mesh=new ut(o,d),this.mesh.position.set(t[0]*Ea,t[1]*Ea,t[2]*Ea),this.atmosphereGlow=new qi(n,13920842,.25),this.mesh.add(this.atmosphereGlow.getMesh())}}function ci(r,t,e){const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)}function Ty(r,t,e){const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),u=ci(n,i,s),f=ci(n+1,i,s),m=ci(n,i+1,s),_=ci(n+1,i+1,s),g=ci(n,i,s+1),p=ci(n+1,i,s+1),x=ci(n,i+1,s+1),y=ci(n+1,i+1,s+1);return Ui(Ui(Ui(u,f,c),Ui(m,_,c),d),Ui(Ui(g,p,c),Ui(x,y,c),d),h)}function xi(r,t,e,n){let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Ty(r*l,t*l,e*l),o+=s,s*=.5}return i/o}function Ui(r,t,e){return r+(t-r)*e}const wa=_n*xn,ph=64;class Ey extends Zn{atmosphereGlow;constructor(t,e){super("jupiter",19e26,t,e,69911e3);const n=this.visualRadius,i=Px(),s=new fe(n,ph,ph),o=s.attributes.position,a=new P,l=n*.02;for(let d=0;d<o.count;d++){a.fromBufferAttribute(o,d);const h=a.x/n,u=a.y/n,f=a.z/n,m=xi(h*8+10,u*8+20,f*8+30,4),_=xi(h*30+100,u*30+200,f*30+300,3),g=m*.7+_*.3;let p=0;g>.4?p=((g-.4)/.6)**2*l:p=-(.4-g)/.4*l*.1,a.setLength(n+p),o.setXYZ(d,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const c=new ge({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(s,c),this.mesh.position.set(t[0]*wa,t[1]*wa,t[2]*wa),this.mesh.rotation.z=3.1*Math.PI/180,this.atmosphereGlow=new qi(n,13935988,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const Aa=_n*xn;function wy(){const e=document.createElement("canvas");e.width=1024,e.height=64;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,1024,0);i.addColorStop(0,"#8a7a5a"),i.addColorStop(.05,"#b8a888"),i.addColorStop(.12,"#d4c8a8"),i.addColorStop(.2,"#c0b898"),i.addColorStop(.35,"#e8ddd0"),i.addColorStop(.5,"#c0b090"),i.addColorStop(.65,"#d8ccb0"),i.addColorStop(.8,"#a89878"),i.addColorStop(.9,"#786858"),i.addColorStop(1,"#584838"),n.fillStyle=i,n.fillRect(0,0,1024,64);for(let o=0;o<8e3;o++){const a=Math.random()*1024,l=Math.random()*64,c=1+Math.random()*4,d=120+Math.random()*80;n.fillStyle=`rgba(${d},${d-20},${d-40},${.2+Math.random()*.4})`,n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.fill()}n.fillStyle="rgba(0,0,0,0.7)",n.fillRect(1024*.43,0,1024*.04,64),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(1024*.72,0,1024*.015,64),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(1024*.1,0,1024*.02,64),n.fillRect(1024*.17,0,1024*.01,64),n.fillRect(1024*.55,0,1024*.02,64),n.fillStyle="rgba(200,190,170,0.15)";for(let o=0;o<1024;o+=8)n.fillRect(o,0,2,64);const s=new qe(e);return s.wrapS=Ue,s.wrapT=Ue,s.anisotropy=4,s}class Ay extends Zn{atmosphereGlow;constructor(t,e){super("saturn",5683e23,t,e,58232e3);const n=this.visualRadius,i=Lx(),s=new fe(n,64,32),o=s.attributes.position,a=new P,l=n*.015;for(let p=0;p<o.count;p++){a.fromBufferAttribute(o,p);const x=a.x/n,y=a.y/n,S=a.z/n,A=xi(x*8+10,y*8+20,S*8+30,4),w=xi(x*30+100,y*30+200,S*30+300,3),b=A*.7+w*.3;let F=0;b>.4?F=((b-.4)/.6)**2*l:F=-(.4-b)/.4*l*.1,a.setLength(n+F),o.setXYZ(p,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const c=new ge({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(s,c),this.mesh.position.set(t[0]*Aa,t[1]*Aa,t[2]*Aa),this.mesh.rotation.z=26.7*Math.PI/180,this.atmosphereGlow=new qi(n,16049313,.1),this.mesh.add(this.atmosphereGlow.getMesh());const d=wy(),h=new In(n*1.15,n*2.4,256),u=new Me({map:d,side:De,transparent:!0,opacity:.8,depthWrite:!1}),f=new ut(h,u);f.rotation.x=-Math.PI/2,f.rotation.z=26.7*Math.PI/180,this.mesh.add(f);const m=new In(n*2.4,n*2.8,128),_=new Me({color:8943720,side:De,transparent:!0,opacity:.15,depthWrite:!1}),g=new ut(m,_);g.rotation.x=-Math.PI/2,g.rotation.z=26.7*Math.PI/180,this.mesh.add(g)}}const Ra=_n*xn;class Ry extends Zn{atmosphereGlow;constructor(t,e){super("uranus",8681e22,t,e,25362e3);const n=this.visualRadius,i=Ix(),s=new fe(n,64,32),o=s.attributes.position,a=new P,l=n*.015;for(let f=0;f<o.count;f++){a.fromBufferAttribute(o,f);const m=a.x/n,_=a.y/n,g=a.z/n,p=xi(m*6+10,_*6+20,g*6+30,4),x=xi(m*25+400,_*25+500,g*25+600,3),y=p*.7+x*.3;let S=0;y>.4?S=((y-.4)/.6)**2*l:S=-(.4-y)/.4*l*.1,a.setLength(n+S),o.setXYZ(f,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const c=new ge({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(s,c),this.mesh.position.set(t[0]*Ra,t[1]*Ra,t[2]*Ra),this.mesh.rotation.z=-97.8*Math.PI/180,this.atmosphereGlow=new qi(n,5230824,.1),this.mesh.add(this.atmosphereGlow.getMesh());const d=new In(n*1.2,n*2.1,64),h=new Me({color:11184844,side:De,transparent:!0,opacity:.3}),u=new ut(d,h);u.rotation.x=-Math.PI/2,u.rotation.z=97.8*Math.PI/180,this.mesh.add(u)}}const Ca=_n*xn;class Cy extends Zn{atmosphereGlow;constructor(t,e){super("neptune",1024e23,t,e,24622e3);const n=this.visualRadius,i=Dx(),s=new fe(n,64,32),o=s.attributes.position,a=new P,l=n*.015;for(let d=0;d<o.count;d++){a.fromBufferAttribute(o,d);const h=a.x/n,u=a.y/n,f=a.z/n,m=xi(h*6+10,u*6+20,f*6+30,4),_=xi(h*25+100,u*25+200,f*25+300,3),g=m*.7+_*.3;let p=0;g>.4?p=((g-.4)/.6)**2*l:p=-(.4-g)/.4*l*.1,a.setLength(n+p),o.setXYZ(d,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const c=new ge({map:i,roughness:.9,metalness:0,color:16777215});this.mesh=new ut(s,c),this.mesh.position.set(t[0]*Ca,t[1]*Ca,t[2]*Ca),this.mesh.rotation.z=28.3*Math.PI/180,this.atmosphereGlow=new qi(n,4944093,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const gs=_n*xn,Py=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`,Ly=`
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
`;class Iy extends ll{light;visualRadius;mesh;constructor(t,e,n=2e26){super("sun",n,t,e),this.visualRadius=100;const i=new fe(this.visualRadius,32,16),s=new Ln({vertexShader:Py,fragmentShader:Ly,uniforms:{uTime:{value:0},uColor:{value:new wt(16763904)},uIntensity:{value:1.5}},transparent:!0,blending:an,depthWrite:!1,side:De});this.mesh=new ut(i,s),this.mesh.position.set(t[0]*gs,t[1]*gs,t[2]*gs),this.light=new rr(16772829,2.5),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z);const o=Dy(),a=new eu({map:o,blending:an,depthWrite:!1,transparent:!0,opacity:1}),l=new jg(a);l.scale.set(25e4,25e4,1),this.mesh.add(l),this.sunMaterial=s}sunMaterial;update(t){this.sunMaterial.uniforms.uTime.value+=t}syncMesh(){this.mesh.position.set(this.position[0]*gs,this.position[1]*gs,this.position[2]*gs),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z)}}function Dy(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255, 220, 100, 1)"),n.addColorStop(.1,"rgba(255, 200, 80, 0.8)"),n.addColorStop(.3,"rgba(255, 160, 40, 0.4)"),n.addColorStop(.5,"rgba(255, 100, 20, 0.15)"),n.addColorStop(.7,"rgba(255, 60, 10, 0.05)"),n.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=new qe(t);return i.needsUpdate=!0,i}class mh{assembly;fuelTanks;constructor(t){this.assembly=t,this.fuelTanks=[],Mu(t.roots,this.fuelTanks)}dryMass(){return this.assembly.totalMass()}totalFuelMass(){return this.fuelTanks.reduce((t,e)=>t+e.remaining,0)}totalMass(){return this.dryMass()+this.totalFuelMass()}consumeFuel(t,e){let n=0;for(let i=this.fuelTanks.length-1;i>=0;i--){const s=this.fuelTanks[i];if(s.remaining<=0)continue;const o=t*e-n;if(o<=0)break;const a=Math.min(s.remaining,o);s.remaining-=a,n+=a}return n}removeStage(t){const e=new Set;Su(t,e),e.add(t),this.fuelTanks=this.fuelTanks.filter(n=>!e.has(n.node)),t.children=[]}}function Mu(r,t){for(const e of r)e.part.fuelCapacity&&t.push({node:e,remaining:e.part.fuelCapacity,capacity:e.part.fuelCapacity}),Mu(e.children,t)}function Su(r,t){for(const e of r.children)t.add(e),Su(e,t)}const gh="ellipse_achievements";class Uy{unlocked=new Set;callbacks=[];constructor(){const t=localStorage.getItem(gh);if(t)try{JSON.parse(t).forEach(e=>this.unlocked.add(e))}catch{}}unlock(t){this.unlocked.has(t)||(this.unlocked.add(t),localStorage.setItem(gh,JSON.stringify([...this.unlocked])),this.callbacks.forEach(e=>e(t)))}isUnlocked(t){return this.unlocked.has(t)}list(){return[...this.unlocked]}onUnlock(t){this.callbacks.push(t)}}const Pa={units:"metric",autoSave:!0,difficulty:"normal"},bu="ellipse_settings";function Ny(){const r=localStorage.getItem(bu);if(!r)return{...Pa};try{return{...Pa,...JSON.parse(r)}}catch{return{...Pa}}}function _h(r){localStorage.setItem(bu,JSON.stringify(r))}class Fy{root;onClose;current;constructor(t,e){this.current=t,this.onClose=e,this.root=document.createElement("div"),this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 250;
      background: rgba(6, 8, 20, 0.88);
      display: flex; align-items: center; justify-content: center;
    `;const n=document.createElement("div");n.className="panel panel--elevated",n.style.cssText="padding: var(--space-6); min-width: 400px;";const i=document.createElement("h2");i.className="text-display-sm",i.textContent="Settings",i.style.cssText="margin: 0 0 var(--space-5);",n.appendChild(i);const s=this.makeRow("Units",["metric","imperial","mixed"],t.units,l=>{this.current.units=l});n.appendChild(s);const o=this.makeToggle("Auto-save",t.autoSave,l=>{this.current.autoSave=l});n.appendChild(o);const a=document.createElement("button");a.className="btn btn--primary",a.textContent="Save & Close",a.style.cssText="margin-top: var(--space-4); width: 100%; padding: 12px;",a.addEventListener("click",()=>{_h(this.current),this.onClose()}),n.appendChild(a),this.root.appendChild(n)}makeRow(t,e,n,i){const s=document.createElement("div");s.style.cssText="margin: var(--space-3) 0;";const o=document.createElement("div");o.className="text-caption",o.textContent=t,o.style.cssText="margin-bottom: var(--space-2);",s.appendChild(o);const a=document.createElement("div");a.style.cssText="display:flex;gap:var(--space-2);";for(const l of e){const c=document.createElement("button");c.className=`btn${l===n?" btn--secondary":""}`,c.textContent=l,l===n&&(c.style.borderColor="var(--accent-blue)"),c.addEventListener("click",()=>{i(l),_h(this.current)}),a.appendChild(c)}return s.appendChild(a),s}makeToggle(t,e,n){const i=document.createElement("div");i.style.cssText="margin: var(--space-3) 0; display: flex; justify-content: space-between; align-items: center;";const s=document.createElement("span");s.className="text-body",s.textContent=t;const o=document.createElement("input");return o.type="checkbox",o.checked=e,o.addEventListener("change",()=>n(o.checked)),i.appendChild(s),i.appendChild(o),i}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove()}}function $r(r){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle=r,e.fillRect(0,0,64,64),e.strokeStyle="#000",e.lineWidth=2,e.strokeRect(0,0,64,64),e.strokeRect(16,16,32,32);const n=new qe(t);return n.wrapS=n.wrapT=un,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}$r("#8899aa"),$r("#808080"),$r("#808080"),$r("#000000");async function Hi(r,t=re){const e=await new Promise((i,s)=>{const o=new Image;o.onload=()=>i(o),o.onerror=()=>s(new Error(`Failed: ${r}`)),o.src=r}),n=new He(e);return n.colorSpace=t,n.wrapS=n.wrapT=un,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}async function Zr(r){const[t,e,n,i]=await Promise.all([Hi(`/textures/${r}_color.jpg`,re),Hi(`/textures/${r}_normal.jpg`,Ee),Hi(`/textures/${r}_rough.jpg`,Ee),Hi(`/textures/${r}_metal.jpg`,Ee)]);return{color:t,normal:e,roughness:n,metalness:i}}let ky=!1,Oy=null,Hy=null,By=null,zy=null,Gy=null,Jr=null;function Wy(){return Jr||(Jr=(async()=>{try{[Oy,Hy,By,zy,Gy]=await Promise.all([Zr("metal013"),Zr("plates"),Zr("metal009"),Zr("metal021"),(async()=>{const[r,t,e]=await Promise.all([Hi("/textures/fabric_color.jpg",re),Hi("/textures/fabric_normal.jpg",Ee),Hi("/textures/fabric_rough.jpg",Ee)]);return{color:r,normal:t,roughness:e,metalness:e}})()]),ky=!0}catch(r){console.error("Texture loading failed, using fallback",r)}})(),Jr)}class Vy{renderer;sceneMgr;system;achievements;mainMenu;vab;flight;constructor(){Wy(),this.renderer=new I_,this.sceneMgr=new U_,this.achievements=new Uy,this.system=new ly;const t=2e26;this.system.add(new Iy([0,0,0],[0,0,0],t)),this.system.add(new hy([15e7,0,2e7],[0,0,47400])),this.system.add(new py([3e8,0,-3e7],[0,0,3e4]));const e=[5e8,0,0],n=[0,0,24e3];this.system.add(new yy(e,n));const i=[e[0],0,e[2]+3844e5],s=[0,0,n[2]+1020];this.system.add(new My(i,s)),this.system.add(new by([75e7,5e8,-2e8],[0,0,19500])),this.system.add(new Ey([15e8,-3e8,1e8],[0,0,13e3])),this.system.add(new Ay([28e8,2e8,-2e8],[0,0,9700])),this.system.add(new Ry([55e8,-1e8,3e8],[0,0,6800])),this.system.add(new Cy([85e8,4e8,0],[0,0,5400])),document.getElementById("app").appendChild(this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.sceneMgr.camera.aspect=window.innerWidth/window.innerHeight,this.sceneMgr.camera.updateProjectionMatrix()}),this.achievements.onUnlock(o=>Te.show(`Achievement: ${o}`)),this.preloadModels()}async preloadModels(){const{loadGLTF:t}=await yh(async()=>{const{loadGLTF:n}=await Promise.resolve().then(()=>xu);return{loadGLTF:n}},void 0),e=["/models/agena.glb","/models/saturn_v.glb","/models/apollo_soyuz.glb","/models/ares_1.glb","/models/apollo_lunar_module.glb","/models/atlas_6.glb","/models/atlas_9.glb","/models/crawler.glb"];await Promise.allSettled(e.map(n=>t(n,1))),console.log("GLTF models preloaded:",e.length)}start(){this.showMainMenu(),this.loop()}showMainMenu(){this.unmountCurrent(),this.mainMenu=new N_(()=>this.showFlight(),()=>this.showVab(),()=>this.showSettings()),this.mainMenu.mount()}showSettings(){const t=new Fy(Ny(),()=>t.unmount());t.mount()}showVab(){this.unmountCurrent(),this.vab=new Yx(t=>{const e=new mh(t);this.showFlight(e)}),this.vab.mount(),this.sceneMgr.scene.add(this.vab.scene)}async showFlight(t){this.unmountCurrent();const e=t?.assembly??new po;if(!t){const i=kt;e.addRoot({part:eo("capsule_mk1"),position:[0,1.6*i,0],rotation:0,children:[]}),e.addRoot({part:eo("tank_s_lfo"),position:[0,.8*i,0],rotation:0,children:[]}),e.addRoot({part:eo("engine_ant"),position:[0,0,0],rotation:0,children:[]})}const n=new mh(e);this.flight=new oy(this.renderer,this.sceneMgr,this.system,n,this.achievements),this.flight.onCrashAction=i=>{i==="menu"?this.showMainMenu():this.showFlight(t)}}unmountCurrent(){this.mainMenu?.unmount(),this.mainMenu=void 0,this.vab&&(this.vab.unmount(),this.sceneMgr.scene.remove(this.vab.scene),this.vab=void 0),this.flight?.dispose(),this.flight=void 0}loop(){const t=.016666666666666666;this.sceneMgr.update(t),this.flight?.update(t),this.vab?this.renderer.three.render(this.vab.scene,this.vab.camera):this.renderer.three.render(this.sceneMgr.scene,this.sceneMgr.camera),requestAnimationFrame(()=>this.loop())}}function xh(){const r=document.getElementById("loading-screen");r&&r.classList.add("hidden");const t=document.getElementById("loading-label");t&&(t.dataset.done="1")}try{const r=new Vy;xh(),r.start()}catch(r){console.error("Failed to start Ellipse:",r),xh(),document.body.innerHTML+=`<div style="position:fixed;inset:0;z-index:950;color:white;padding:32px;font-family:monospace;background:#06080f;">
      <h1>Failed to start</h1>
      <pre>${String(r)}</pre>
    </div>`}
//# sourceMappingURL=index-C5yxTy38.js.map
