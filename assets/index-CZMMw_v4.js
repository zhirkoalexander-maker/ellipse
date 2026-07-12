(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const mu="modulepreload",gu=function(r){return"/ellipse/"+r},il={},hh=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(e.map(l=>{if(l=gu(l),l in il)return;il[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":mu,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,f)=>{h.addEventListener("load",d),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="160",_u=0,sl=1,vu=2,uh=1,xu=2,Vn=3,Ln=0,en=1,Re=2,pi=0,mi=1,En=2,rl=3,ol=4,yu=5,Hi=100,Mu=101,Su=102,al=103,ll=104,bu=200,Tu=201,Eu=202,wu=203,ba=204,Ta=205,Au=206,Ru=207,Cu=208,Pu=209,Lu=210,Iu=211,Du=212,Uu=213,Nu=214,Fu=0,Ou=1,ku=2,io=3,Hu=4,Bu=5,zu=6,Gu=7,Ba=0,Wu=1,Vu=2,gi=0,Xu=1,qu=2,Yu=3,dh=4,ju=5,$u=6,cl="attached",Ku="detached",fh=300,ws=301,As=302,Ea=303,wa=304,fo=306,rn=1e3,tn=1001,so=1002,Be=1003,Aa=1004,Qr=1005,nn=1006,ph=1007,qi=1008,_i=1009,Zu=1010,Ju=1011,za=1012,mh=1013,di=1014,Xn=1015,rr=1016,gh=1017,_h=1018,Wi=1020,Qu=1021,hn=1023,td=1024,ed=1025,Vi=1026,Rs=1027,nd=1028,vh=1029,id=1030,xh=1031,yh=1033,wo=33776,Ao=33777,Ro=33778,Co=33779,hl=35840,ul=35841,dl=35842,fl=35843,Mh=36196,pl=37492,ml=37496,gl=37808,_l=37809,vl=37810,xl=37811,yl=37812,Ml=37813,Sl=37814,bl=37815,Tl=37816,El=37817,wl=37818,Al=37819,Rl=37820,Cl=37821,Po=36492,Pl=36494,Ll=36495,sd=36283,Il=36284,Dl=36285,Ul=36286,or=2300,Cs=2301,Lo=2302,Nl=2400,Fl=2401,Ol=2402,rd=2500,od=0,Sh=1,Ra=2,bh=3e3,Xi=3001,ad=3200,ld=3201,Ga=0,cd=1,vn="",ie="srgb",ye="srgb-linear",Wa="display-p3",po="display-p3-linear",ro="linear",me="srgb",oo="rec709",ao="p3",Zi=7680,kl=519,hd=512,ud=513,dd=514,Th=515,fd=516,pd=517,md=518,gd=519,Ca=35044,Hl="300 es",Pa=1035,qn=2e3,lo=2001;class Ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bl=1234567;const er=Math.PI/180,Ps=180/Math.PI;function An(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[r&255]+Ve[r>>8&255]+Ve[r>>16&255]+Ve[r>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function je(r,t,e){return Math.max(t,Math.min(e,r))}function Va(r,t){return(r%t+t)%t}function _d(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function vd(r,t,e){return r!==t?(e-r)/(t-r):0}function nr(r,t,e){return(1-e)*r+e*t}function xd(r,t,e,n){return nr(r,t,1-Math.exp(-e*n))}function yd(r,t=1){return t-Math.abs(Va(r,t*2)-t)}function Md(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Sd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function bd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Td(r,t){return r+Math.random()*(t-r)}function Ed(r){return r*(.5-Math.random())}function wd(r){r!==void 0&&(Bl=r);let t=Bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ad(r){return r*er}function Rd(r){return r*Ps}function La(r){return(r&r-1)===0&&r!==0}function Cd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function co(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Pd(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function le(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ld={DEG2RAD:er,RAD2DEG:Ps,generateUUID:An,clamp:je,euclideanModulo:Va,mapLinear:_d,inverseLerp:vd,lerp:nr,damp:xd,pingpong:yd,smoothstep:Md,smootherstep:Sd,randInt:bd,randFloat:Td,randFloatSpread:Ed,seededRandom:wd,degToRad:Ad,radToDeg:Rd,isPowerOfTwo:La,ceilPowerOfTwo:Cd,floorPowerOfTwo:co,setQuaternionFromProperEuler:Pd,normalize:le,denormalize:Pn};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,i,s,o,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],x=i[4],S=i[7],b=i[2],w=i[5],R=i[8];return s[0]=o*_+a*v+l*b,s[3]=o*g+a*x+l*w,s[6]=o*p+a*S+l*R,s[1]=c*_+u*v+h*b,s[4]=c*g+u*x+h*w,s[7]=c*p+u*S+h*R,s[2]=d*_+f*v+m*b,s[5]=d*g+f*x+m*w,s[8]=d*p+f*S+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,m=e*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Io.makeScale(t,e)),this}rotate(t){return this.premultiply(Io.makeRotation(-t)),this}translate(t,e){return this.premultiply(Io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new te;function Eh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ar(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Id(){const r=ar("canvas");return r.style.display="block",r}const zl={};function ir(r){r in zl||(zl[r]=!0,console.warn(r))}const Gl=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fr={[ye]:{transfer:ro,primaries:oo,toReference:r=>r,fromReference:r=>r},[ie]:{transfer:me,primaries:oo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[po]:{transfer:ro,primaries:ao,toReference:r=>r.applyMatrix3(Wl),fromReference:r=>r.applyMatrix3(Gl)},[Wa]:{transfer:me,primaries:ao,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Wl),fromReference:r=>r.applyMatrix3(Gl).convertLinearToSRGB()}},Dd=new Set([ye,po]),oe={enabled:!0,_workingColorSpace:ye,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Dd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=fr[t].toReference,i=fr[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return fr[r].primaries},getTransfer:function(r){return r===vn?ro:fr[r].transfer}};function bs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Do(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ji;class wh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=ar("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ar("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=bs(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bs(e[n]/255)*255):e[n]=bs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ud=0;class Ah{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=An(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Uo(i[o].image)):s.push(Uo(i[o]))}else s=Uo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Uo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nd=0;class Ie extends Ns{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=tn,i=tn,s=nn,o=qi,a=hn,l=_i,c=Ie.DEFAULT_ANISOTROPY,u=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=An(),this.name="",this.source=new Ah(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Xi?ie:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rn:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rn:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ie?Xi:bh}set encoding(t){ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Xi?ie:vn}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=fh;Ie.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(f+1)/2,b=(p+1)/2,w=(u+d)/4,R=(h+_)/4,H=(m+g)/4;return x>S&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=R/n):S>b?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=H/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=R/s,i=H/s),this.set(n,i,s,e),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fd extends Ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xi?ie:vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ah(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Fd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rh extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Od extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=1-a;const p=l*d+c*f+u*m+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),w=Math.atan2(b,p*v);g=Math.sin(g*w)/b,a=Math.sin(a*w)/b}const S=a*v;if(l=l*g+d*S,c=c*g+f*S,u=u*g+m*S,h=h*g+_*S,g===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-a*f,t[e+2]=c*m+u*f+a*d-l*h,t[e+3]=u*m-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new C,Vl=new sn;class dn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),mr.subVectors(this.max,Gs),Qi.subVectors(t.a,Gs),ts.subVectors(t.b,Gs),es.subVectors(t.c,Gs),Zn.subVectors(ts,Qi),Jn.subVectors(es,ts),Ti.subVectors(Qi,es);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-Ti.z,Ti.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,Ti.z,0,-Ti.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-Ti.y,Ti.x,0];return!Fo(e,Qi,ts,es,mr)||(e=[1,0,0,0,1,0,0,0,1],!Fo(e,Qi,ts,es,mr))?!1:(gr.crossVectors(Zn,Jn),e=[gr.x,gr.y,gr.z],Fo(e,Qi,ts,es,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new C,new C,new C,new C,new C,new C,new C,new C],Sn=new C,pr=new dn,Qi=new C,ts=new C,es=new C,Zn=new C,Jn=new C,Ti=new C,Gs=new C,mr=new C,gr=new C,Ei=new C;function Fo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ei.fromArray(r,s);const a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kd=new dn,Ws=new C,Oo=new C;class Dn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(Oo)),this.expandByPoint(Ws.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new C,ko=new C,_r=new C,Qn=new C,Ho=new C,vr=new C,Bo=new C;class mo{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ko.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(ko);const s=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=Qn.dot(this.direction),l=-Qn.dot(_r),c=Qn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ko).addScaledVector(_r,d),f}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,i,s){Ho.subVectors(e,t),vr.subVectors(n,t),Bo.crossVectors(Ho,vr);let o=this.direction.dot(Bo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);const l=a*this.direction.dot(vr.crossVectors(Qn,vr));if(l<0)return null;const c=a*this.direction.dot(Ho.cross(Qn));if(c<0||l+c>o)return null;const u=-a*Qn.dot(Bo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,i,s,o,a,l,c,u,h,d,f,m,_,g){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,d,f,m,_,g)}set(t,e,n,i,s,o,a,l,c,u,h,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=m*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hd,t,Bd)}lookAt(t,e,n){const i=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ti.crossVectors(n,ln),ti.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ti.crossVectors(n,ln)),ti.normalize(),xr.crossVectors(ln,ti),i[0]=ti.x,i[4]=xr.x,i[8]=ln.x,i[1]=ti.y,i[5]=xr.y,i[9]=ln.y,i[2]=ti.z,i[6]=xr.z,i[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],x=n[7],S=n[11],b=n[15],w=i[0],R=i[4],H=i[8],y=i[12],E=i[1],D=i[5],N=i[9],K=i[13],I=i[2],U=i[6],k=i[10],Y=i[14],j=i[3],$=i[7],Q=i[11],ot=i[15];return s[0]=o*w+a*E+l*I+c*j,s[4]=o*R+a*D+l*U+c*$,s[8]=o*H+a*N+l*k+c*Q,s[12]=o*y+a*K+l*Y+c*ot,s[1]=u*w+h*E+d*I+f*j,s[5]=u*R+h*D+d*U+f*$,s[9]=u*H+h*N+d*k+f*Q,s[13]=u*y+h*K+d*Y+f*ot,s[2]=m*w+_*E+g*I+p*j,s[6]=m*R+_*D+g*U+p*$,s[10]=m*H+_*N+g*k+p*Q,s[14]=m*y+_*K+g*Y+p*ot,s[3]=v*w+x*E+S*I+b*j,s[7]=v*R+x*D+S*U+b*$,s[11]=v*H+x*N+S*k+b*Q,s[15]=v*y+x*K+S*Y+b*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+e*c*h-e*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=h*g*c-_*d*c+_*l*f-a*g*f-h*l*p+a*d*p,x=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,S=u*_*c-m*h*c+m*a*f-o*_*f-u*a*p+o*h*p,b=m*h*l-u*_*l-m*a*d+o*_*d+u*a*g-o*h*g,w=e*v+n*x+i*S+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=v*R,t[1]=(_*d*s-h*g*s-_*i*f+n*g*f+h*i*p-n*d*p)*R,t[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*R,t[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*R,t[4]=x*R,t[5]=(u*g*s-m*d*s+m*i*f-e*g*f-u*i*p+e*d*p)*R,t[6]=(m*l*s-o*g*s-m*i*c+e*g*c+o*i*p-e*l*p)*R,t[7]=(o*d*s-u*l*s+u*i*c-e*d*c-o*i*f+e*l*f)*R,t[8]=S*R,t[9]=(m*h*s-u*_*s-m*n*f+e*_*f+u*n*p-e*h*p)*R,t[10]=(o*_*s-m*a*s+m*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*f-e*a*f)*R,t[12]=b*R,t[13]=(u*_*i-m*h*i+m*n*d-e*_*d-u*n*g+e*h*g)*R,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*g-e*a*g)*R,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,m=s*h,_=o*u,g=o*h,p=a*h,v=l*c,x=l*u,S=l*h,b=n.x,w=n.y,R=n.z;return i[0]=(1-(_+p))*b,i[1]=(f+S)*b,i[2]=(m-x)*b,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(d+p))*w,i[6]=(g+v)*w,i[7]=0,i[8]=(m+x)*R,i[9]=(g-v)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ns.set(i[0],i[1],i[2]).length();const o=ns.set(i[4],i[5],i[6]).length(),a=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],bn.copy(this);const c=1/s,u=1/o,h=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,e.setFromRotationMatrix(bn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=qn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(a===qn)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===lo)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=qn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-s),d=(e+t)*c,f=(n+i)*u;let m,_;if(a===qn)m=(o+s)*h,_=-2*h;else if(a===lo)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ns=new C,bn=new Zt,Hd=new C(0,0,0),Bd=new C(1,1,1),ti=new C,xr=new C,ln=new C,Xl=new Zt,ql=new sn;class go{constructor(t=0,e=0,n=0,i=go.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}go.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zd=0;const Yl=new C,is=new sn,Bn=new Zt,yr=new C,Vs=new C,Gd=new C,Wd=new sn,jl=new C(1,0,0),$l=new C(0,1,0),Kl=new C(0,0,1),Vd={type:"added"},Xd={type:"removed"};class ge extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new C,e=new go,n=new sn,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new te}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(jl,t)}rotateY(t){return this.rotateOnAxis($l,t)}rotateZ(t){return this.rotateOnAxis(Kl,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jl,t)}translateY(t){return this.translateOnAxis($l,t)}translateZ(t){return this.translateOnAxis(Kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yr.copy(t):yr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Vs,yr,this.up):Bn.lookAt(yr,Vs,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Bn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,Gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new C(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new C,zn=new C,zo=new C,Gn=new C,ss=new C,rs=new C,Zl=new C,Go=new C,Wo=new C,Vo=new C;let Mr=!1;class _n{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Tn.subVectors(i,e),zn.subVectors(n,e),zo.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(zn),l=Tn.dot(zo),c=zn.dot(zn),u=zn.dot(zo),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(t,e,n,i,s,o,a,l){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),zn.subVectors(t,e),Tn.cross(zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Tn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),_n.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ss.subVectors(i,n),rs.subVectors(s,n),Go.subVectors(t,n);const l=ss.dot(Go),c=rs.dot(Go);if(l<=0&&c<=0)return e.copy(n);Wo.subVectors(t,i);const u=ss.dot(Wo),h=rs.dot(Wo);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ss,o);Vo.subVectors(t,s);const f=ss.dot(Vo),m=rs.dot(Vo);if(m>=0&&f<=m)return e.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(rs,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Zl.subVectors(s,i),a=(h-u)/(h-u+(f-m)),e.copy(i).addScaledVector(Zl,a);const p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Xo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Va(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Xo(o,s,t+1/3),this.g=Xo(o,s,t),this.b=Xo(o,s,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=ie){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ie){const n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=Do(t.r),this.g=Do(t.g),this.b=Do(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ie){return oe.fromWorkingColorSpace(Xe.copy(this),t),Math.round(je(Xe.r*255,0,255))*65536+Math.round(je(Xe.g*255,0,255))*256+Math.round(je(Xe.b*255,0,255))}getHexString(t=ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,i=Xe.g,s=Xe.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=ie){oe.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,i=Xe.b;return t!==ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Sr);const n=nr(ei.h,Sr.h,e),i=nr(ei.s,Sr.s,e),s=nr(ei.l,Sr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Dt;Dt.NAMES=Ph;let qd=0;class xn extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=An(),this.name="",this.type="Material",this.blending=mi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Ta,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xe extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new C,br=new Bt;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ca&&(t.usage=this.usage),t}}class Lh extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ih extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yd=0;const mn=new Zt,qo=new ge,os=new C,cn=new dn,Xs=new dn,He=new C;class Pe extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?Ih:Lh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return qo.lookAt(t),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(cn.min,Xs.min),cn.expandByPoint(He),He.addVectors(cn.max,Xs.max),cn.expandByPoint(He)):(cn.expandByPoint(Xs.min),cn.expandByPoint(Xs.max))}cn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)He.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(He));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)He.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(t,c),He.add(os)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new C,u[E]=new C;const h=new C,d=new C,f=new C,m=new Bt,_=new Bt,g=new Bt,p=new C,v=new C;function x(E,D,N){h.fromArray(i,E*3),d.fromArray(i,D*3),f.fromArray(i,N*3),m.fromArray(o,E*2),_.fromArray(o,D*2),g.fromArray(o,N*2),d.sub(h),f.sub(h),_.sub(m),g.sub(m);const K=1/(_.x*g.y-g.x*_.y);isFinite(K)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(K),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-g.x).multiplyScalar(K),c[E].add(p),c[D].add(p),c[N].add(p),u[E].add(v),u[D].add(v),u[N].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,D=S.length;E<D;++E){const N=S[E],K=N.start,I=N.count;for(let U=K,k=K+I;U<k;U+=3)x(n[U+0],n[U+1],n[U+2])}const b=new C,w=new C,R=new C,H=new C;function y(E){R.fromArray(s,E*3),H.copy(R);const D=c[E];b.copy(D),b.sub(R.multiplyScalar(R.dot(D))).normalize(),w.crossVectors(H,D);const K=w.dot(u[E])<0?-1:1;l[E*4]=b.x,l[E*4+1]=b.y,l[E*4+2]=b.z,l[E*4+3]=K}for(let E=0,D=S.length;E<D;++E){const N=S[E],K=N.start,I=N.count;for(let U=K,k=K+I;U<k;U+=3)y(n[U+0]),y(n[U+1]),y(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new Ce(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new Zt,wi=new mo,Tr=new Dn,Ql=new C,as=new C,ls=new C,cs=new C,Yo=new C,Er=new C,wr=new Bt,Ar=new Bt,Rr=new Bt,tc=new C,ec=new C,nc=new C,Cr=new C,Pr=new C;class pt extends ge{constructor(t=new Pe,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Er.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Yo.fromBufferAttribute(h,t),o?Er.addScaledVector(Yo,u):Er.addScaledVector(Yo.sub(e),u))}e.add(Er)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(Tr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Tr,Ql)===null||wi.origin.distanceToSquared(Ql)>(t.far-t.near)**2))&&(Jl.copy(s).invert(),wi.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,b=x;S<b;S+=3){const w=a.getX(S),R=a.getX(S+1),H=a.getX(S+2);i=Lr(this,p,t,n,c,u,h,w,R,H),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),x=a.getX(g+1),S=a.getX(g+2);i=Lr(this,o,t,n,c,u,h,v,x,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,b=x;S<b;S+=3){const w=S,R=S+1,H=S+2;i=Lr(this,p,t,n,c,u,h,w,R,H),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,x=g+1,S=g+2;i=Lr(this,o,t,n,c,u,h,v,x,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function jd(r,t,e,n,i,s,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Ln,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Pr);return c<e.near||c>e.far?null:{distance:c,point:Pr.clone(),object:r}}function Lr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,as),r.getVertexPosition(l,ls),r.getVertexPosition(c,cs);const u=jd(r,t,e,n,as,ls,cs,Cr);if(u){i&&(wr.fromBufferAttribute(i,a),Ar.fromBufferAttribute(i,l),Rr.fromBufferAttribute(i,c),u.uv=_n.getInterpolation(Cr,as,ls,cs,wr,Ar,Rr,new Bt)),s&&(wr.fromBufferAttribute(s,a),Ar.fromBufferAttribute(s,l),Rr.fromBufferAttribute(s,c),u.uv1=_n.getInterpolation(Cr,as,ls,cs,wr,Ar,Rr,new Bt),u.uv2=u.uv1),o&&(tc.fromBufferAttribute(o,a),ec.fromBufferAttribute(o,l),nc.fromBufferAttribute(o,c),u.normal=_n.getInterpolation(Cr,as,ls,cs,tc,ec,nc,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new C,materialIndex:0};_n.getNormal(as,ls,cs,h.normal),u.face=h}return u}class xi extends Pe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(h,2));function m(_,g,p,v,x,S,b,w,R,H,y){const E=S/R,D=b/H,N=S/2,K=b/2,I=w/2,U=R+1,k=H+1;let Y=0,j=0;const $=new C;for(let Q=0;Q<k;Q++){const ot=Q*D-K;for(let z=0;z<U;z++){const O=z*E-N;$[_]=O*v,$[g]=ot*x,$[p]=I,c.push($.x,$.y,$.z),$[_]=0,$[g]=0,$[p]=w>0?1:-1,u.push($.x,$.y,$.z),h.push(z/R),h.push(1-Q/H),Y+=1}}for(let Q=0;Q<H;Q++)for(let ot=0;ot<R;ot++){const z=d+ot+U*Q,O=d+ot+U*(Q+1),Z=d+(ot+1)+U*(Q+1),P=d+(ot+1)+U*Q;l.push(z,O,P),l.push(O,Z,P),j+=6}a.addGroup(f,j,y),f+=j,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qe(r){const t={};for(let e=0;e<r.length;e++){const n=Ls(r[e]);for(const i in n)t[i]=n[i]}return t}function $d(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Dh(r){return r.getRenderTarget()===null?r.outputColorSpace:oe.workingColorSpace}const Kd={clone:Ls,merge:Qe};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Uh extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $e extends Uh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(er*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,us=1;class Qd extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(hs,us,t,e);i.layers=this.layers,this.add(i);const s=new $e(hs,us,t,e);s.layers=this.layers,this.add(s);const o=new $e(hs,us,t,e);o.layers=this.layers,this.add(o);const a=new $e(hs,us,t,e);a.layers=this.layers,this.add(a);const l=new $e(hs,us,t,e);l.layers=this.layers,this.add(l);const c=new $e(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Nh extends Ie{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tf extends Yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Xi?ie:vn),this.texture=new Nh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xi(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:pi});s.uniforms.tEquirect.value=e;const o=new pt(i,s),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=nn),new Qd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const jo=new C,ef=new C,nf=new te;class Oi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=jo.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nf.getNormalMatrix(t),i=this.coplanarPoint(jo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Dn,Ir=new C;class Xa{constructor(t=new Oi,e=new Oi,n=new Oi,i=new Oi,s=new Oi,o=new Oi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],v=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,g-f,S-p).normalize(),n[1].setComponents(l+s,d+c,g+f,S+p).normalize(),n[2].setComponents(l+o,d+u,g+m,S+v).normalize(),n[3].setComponents(l-o,d-u,g-m,S-v).normalize(),n[4].setComponents(l-a,d-h,g-_,S-x).normalize(),e===qn)n[5].setComponents(l+a,d+h,g+_,S+x).normalize();else if(e===lo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ir.x=i.normal.x>0?t.max.x:t.min.x,Ir.y=i.normal.y>0?t.max.y:t.min.y,Ir.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function sf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,m=u.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&m.length===0&&r.bufferSubData(h,0,d),m.length!==0){for(let _=0,g=m.length;_<g;_++){const p=m[_];e?r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class qa extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const v=p*d-o;for(let x=0;x<c;x++){const S=x*h-s;m.push(S,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,S=v+c*(p+1),b=v+1+c*(p+1),w=v+1+c*p;f.push(x,S,w),f.push(S,b,w)}this.setIndex(f),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.width,t.height,t.widthSegments,t.heightSegments)}}var rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
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
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
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
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
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
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vf=`#ifdef USE_IRIDESCENCE
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
#endif`,xf=`#ifdef USE_BUMPMAP
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rf=`#define PI 3.141592653589793
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
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pf=`vec3 transformedNormal = objectNormal;
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
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`
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
}`,Of=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
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
}`,Yf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
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
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
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
#endif`,sp=`struct PhysicalMaterial {
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
}`,rp=`
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mp=`#if defined( USE_POINTS_UV )
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
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
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
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
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
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wp=`float getShadowMask() {
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
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
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
}`,um=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,fm=`#define DISTANCE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,xm=`uniform vec3 diffuse;
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
}`,ym=`#define LAMBERT
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
}`,Mm=`#define LAMBERT
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
}`,Sm=`#define MATCAP
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
}`,bm=`#define MATCAP
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
}`,Tm=`#define NORMAL
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
}`,Em=`#define NORMAL
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
}`,wm=`#define PHONG
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
}`,Am=`#define PHONG
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Nm=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:rf,alphahash_pars_fragment:of,alphamap_fragment:af,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:vf,bumpmap_pars_fragment:xf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:bf,color_fragment:Tf,color_pars_fragment:Ef,color_pars_vertex:wf,color_vertex:Af,common:Rf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Lf,displacementmap_vertex:If,emissivemap_fragment:Df,emissivemap_pars_fragment:Uf,colorspace_fragment:Nf,colorspace_pars_fragment:Ff,envmap_fragment:Of,envmap_common_pars_fragment:kf,envmap_pars_fragment:Hf,envmap_pars_vertex:Bf,envmap_physical_pars_fragment:Jf,envmap_vertex:zf,fog_vertex:Gf,fog_pars_vertex:Wf,fog_fragment:Vf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_fragment:Yf,lightmap_pars_fragment:jf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Kf,lights_pars_begin:Zf,lights_toon_fragment:Qf,lights_toon_pars_fragment:tp,lights_phong_fragment:ep,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:op,lights_fragment_end:ap,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:dp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:_p,morphcolor_vertex:vp,morphnormal_vertex:xp,morphtarget_pars_vertex:yp,morphtarget_vertex:Mp,normal_fragment_begin:Sp,normal_fragment_maps:bp,normal_pars_fragment:Tp,normal_pars_vertex:Ep,normal_vertex:wp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Ip,packing:Dp,premultiplied_alpha_fragment:Up,project_vertex:Np,dithering_fragment:Fp,dithering_pars_fragment:Op,roughnessmap_fragment:kp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:zp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Wp,skinbase_vertex:Vp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:jp,specularmap_pars_fragment:$p,tonemapping_fragment:Kp,tonemapping_pars_fragment:Zp,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:om,backgroundCube_frag:am,cube_vert:lm,cube_frag:cm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:vm,meshbasic_frag:xm,meshlambert_vert:ym,meshlambert_frag:Mm,meshmatcap_vert:Sm,meshmatcap_frag:bm,meshnormal_vert:Tm,meshnormal_frag:Em,meshphong_vert:wm,meshphong_frag:Am,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Im,points_frag:Dm,shadow_vert:Um,shadow_frag:Nm,sprite_vert:Fm,sprite_frag:Om},ft={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Cn={basic:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Dt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Dt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Qe([ft.points,ft.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Qe([ft.common,ft.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Qe([ft.sprite,ft.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Qe([ft.common,ft.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Qe([ft.lights,ft.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Cn.physical={uniforms:Qe([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Dr={r:0,b:0,g:0};function km(r,t,e,n,i,s,o){const a=new Dt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function m(g,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===fo)?(u===void 0&&(u=new pt(new xi(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ls(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,(h!==x||d!==x.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pt(new qa(2,2),new In({name:"BackgroundMaterial",uniforms:Ls(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB(Dr,Dh(r)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:m}}function Hm(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function h(I,U,k,Y,j){let $=!1;if(o){const Q=_(Y,k,U);c!==Q&&(c=Q,f(c.object)),$=p(I,Y,k,j),$&&v(I,Y,k,j)}else{const Q=U.wireframe===!0;(c.geometry!==Y.id||c.program!==k.id||c.wireframe!==Q)&&(c.geometry=Y.id,c.program=k.id,c.wireframe=Q,$=!0)}j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,H(I,U,k,Y),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function m(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,U,k){const Y=k.wireframe===!0;let j=a[I.id];j===void 0&&(j={},a[I.id]=j);let $=j[U.id];$===void 0&&($={},j[U.id]=$);let Q=$[Y];return Q===void 0&&(Q=g(d()),$[Y]=Q),Q}function g(I){const U=[],k=[],Y=[];for(let j=0;j<i;j++)U[j]=0,k[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:Y,object:I,attributes:{},index:null}}function p(I,U,k,Y){const j=c.attributes,$=U.attributes;let Q=0;const ot=k.getAttributes();for(const z in ot)if(ot[z].location>=0){const Z=j[z];let P=$[z];if(P===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(P=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(P=I.instanceColor)),Z===void 0||Z.attribute!==P||P&&Z.data!==P.data)return!0;Q++}return c.attributesNum!==Q||c.index!==Y}function v(I,U,k,Y){const j={},$=U.attributes;let Q=0;const ot=k.getAttributes();for(const z in ot)if(ot[z].location>=0){let Z=$[z];Z===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const P={};P.attribute=Z,Z&&Z.data&&(P.data=Z.data),j[z]=P,Q++}c.attributes=j,c.attributesNum=Q,c.index=Y}function x(){const I=c.newAttributes;for(let U=0,k=I.length;U<k;U++)I[U]=0}function S(I){b(I,0)}function b(I,U){const k=c.newAttributes,Y=c.enabledAttributes,j=c.attributeDivisors;k[I]=1,Y[I]===0&&(r.enableVertexAttribArray(I),Y[I]=1),j[I]!==U&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),j[I]=U)}function w(){const I=c.newAttributes,U=c.enabledAttributes;for(let k=0,Y=U.length;k<Y;k++)U[k]!==I[k]&&(r.disableVertexAttribArray(k),U[k]=0)}function R(I,U,k,Y,j,$,Q){Q===!0?r.vertexAttribIPointer(I,U,k,j,$):r.vertexAttribPointer(I,U,k,Y,j,$)}function H(I,U,k,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const j=Y.attributes,$=k.getAttributes(),Q=U.defaultAttributeValues;for(const ot in $){const z=$[ot];if(z.location>=0){let O=j[ot];if(O===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(O=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(O=I.instanceColor)),O!==void 0){const Z=O.normalized,P=O.itemSize,lt=e.get(O);if(lt===void 0)continue;const mt=lt.buffer,Rt=lt.type,Ut=lt.bytesPerElement,It=n.isWebGL2===!0&&(Rt===r.INT||Rt===r.UNSIGNED_INT||O.gpuType===mh);if(O.isInterleavedBufferAttribute){const Mt=O.data,B=Mt.stride,Ee=O.offset;if(Mt.isInstancedInterleavedBuffer){for(let At=0;At<z.locationSize;At++)b(z.location+At,Mt.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<z.locationSize;At++)S(z.location+At);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let At=0;At<z.locationSize;At++)R(z.location+At,P/z.locationSize,Rt,Z,B*Ut,(Ee+P/z.locationSize*At)*Ut,It)}else{if(O.isInstancedBufferAttribute){for(let Mt=0;Mt<z.locationSize;Mt++)b(z.location+Mt,O.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Mt=0;Mt<z.locationSize;Mt++)S(z.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Mt=0;Mt<z.locationSize;Mt++)R(z.location+Mt,P/z.locationSize,Rt,Z,P*Ut,P/z.locationSize*Mt*Ut,It)}}else if(Q!==void 0){const Z=Q[ot];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(z.location,Z);break;case 3:r.vertexAttrib3fv(z.location,Z);break;case 4:r.vertexAttrib4fv(z.location,Z);break;default:r.vertexAttrib1fv(z.location,Z)}}}}w()}function y(){N();for(const I in a){const U=a[I];for(const k in U){const Y=U[k];for(const j in Y)m(Y[j].object),delete Y[j];delete U[k]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;const U=a[I.id];for(const k in U){const Y=U[k];for(const j in Y)m(Y[j].object),delete Y[j];delete U[k]}delete a[I.id]}function D(I){for(const U in a){const k=a[U];if(k[I.id]===void 0)continue;const Y=k[I.id];for(const j in Y)m(Y[j].object),delete Y[j];delete k[I.id]}}function N(){K(),u=!0,c!==l&&(c=l,f(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:K,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:S,disableUnusedAttributes:w}}function Bm(r,t,e,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),e.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,h,d),e.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(u[m],h[m]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_];e.update(m,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function zm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=o||t.has("OES_texture_float"),b=x&&S,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:w}}function Gm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Oi,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const v=s?0:n,x=v*4;let S=p.clippingState||null;l.value=S,S=u(m,d,x,f);for(let b=0;b!==x;++b)S[b]=e[b];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,S=f;x!==_;++x,S+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Wm(r){let t=new WeakMap;function e(o,a){return a===Ea?o.mapping=ws:a===wa&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ea||a===wa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tf(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ya extends Uh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ms=4,ic=[.125,.215,.35,.446,.526,.582],Bi=20,$o=new Ya,sc=new Dt;let Ko=null,Zo=0,Jo=0;const ki=(1+Math.sqrt(5))/2,ds=1/ki,rc=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,ki,ds),new C(0,ki,-ds),new C(ds,0,ki),new C(-ds,0,ki),new C(ki,ds,0),new C(-ki,ds,0)];class oc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ko,Zo,Jo),t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:rr,format:hn,colorSpace:ye,depthBuffer:!1},i=ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(s)),this._blurMaterial=Xm(s,t,e)}return i}_compileMaterial(t){const e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,i){const a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(sc),u.toneMapping=gi,u.autoClear=!1;const f=new xe({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new pt(new xi,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(sc),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Ur(i,v*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ws||t.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=rc[(i-1)%rc.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):Bi;g>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);const p=[];let v=0;for(let R=0;R<Bi;++R){const H=R/_,y=Math.exp(-H*H/2);p.push(y),R===0?v+=y:R<g&&(v+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const S=this._sizeLods[i],b=3*S*(i>x-Ms?i-x+Ms:0),w=4*(this._cubeSize-S);Ur(e,b,w,3*S,2*S),l.setRenderTarget(e),l.render(h,$o)}}function Vm(r){const t=[],e=[],n=[];let i=r;const s=r-Ms+1+ic.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ms?l=ic[o-r+Ms-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),x=new Float32Array(g*m*f),S=new Float32Array(p*m*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,H=w>2?0:-1,y=[R,H,0,R+2/3,H,0,R+2/3,H+1,0,R,H,0,R+2/3,H+1,0,R,H+1,0];v.set(y,_*m*w),x.set(d,g*m*w);const E=[w,w,w,w,w,w];S.set(E,p*m*w)}const b=new Pe;b.setAttribute("position",new Ce(v,_)),b.setAttribute("uv",new Ce(x,g)),b.setAttribute("faceIndex",new Ce(S,p)),t.push(b),i>Ms&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ac(r,t,e){const n=new Yi(r,t,e);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Xm(r,t,e){const n=new Float32Array(Bi),i=new C(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ja(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function lc(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function cc(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ja(){return`

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
	`}function qm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ea||l===wa,u=l===ws||l===As;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new oc(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new oc(r));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ym(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jm(r,t,e,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)t.update(d[m],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,S=v.length;x<S;x+=3){const b=v[x+0],w=v[x+1],R=v[x+2];d.push(b,w,w,R,R,b)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const b=x+0,w=x+1,R=x+2;d.push(b,w,w,R,R,b)}}else return;const g=new(Eh(d)?Ih:Lh)(d,1);g.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function $m(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,a,f*l),e.update(m,s,1)}function h(f,m,_){if(_===0)return;let g,p;if(i)g=r,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,a,f*l,_),e.update(m,s,_)}function d(f,m,_){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(f[p]/l,m[p]);else{g.multiDrawElementsWEBGL(s,m,0,a,f,0,_);let p=0;for(let v=0;v<_;v++)p+=m[v];e.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Km(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Zm(r,t){return r[0]-t[0]}function Jm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Qm(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new he,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let U=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var f=U;g!==void 0&&g.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],H=u.morphAttributes.color||[];let y=0;x===!0&&(y=1),S===!0&&(y=2),b===!0&&(y=3);let E=u.attributes.position.count*y,D=1;E>t.maxTextureSize&&(D=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const N=new Float32Array(E*D*4*_),K=new Rh(N,E,D,_);K.type=Xn,K.needsUpdate=!0;const I=y*4;for(let k=0;k<_;k++){const Y=w[k],j=R[k],$=H[k],Q=E*D*4*k;for(let ot=0;ot<Y.count;ot++){const z=ot*I;x===!0&&(o.fromBufferAttribute(Y,ot),N[Q+z+0]=o.x,N[Q+z+1]=o.y,N[Q+z+2]=o.z,N[Q+z+3]=0),S===!0&&(o.fromBufferAttribute(j,ot),N[Q+z+4]=o.x,N[Q+z+5]=o.y,N[Q+z+6]=o.z,N[Q+z+7]=0),b===!0&&(o.fromBufferAttribute($,ot),N[Q+z+8]=o.x,N[Q+z+9]=o.y,N[Q+z+10]=o.z,N[Q+z+11]=$.itemSize===4?o.w:1)}}g={count:_,texture:K,size:new Bt(E,D)},s.set(u,g),u.addEventListener("dispose",U)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const m=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==m){_=[];for(let S=0;S<m;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<m;S++){const b=_[S];b[0]=S,b[1]=d[S]}_.sort(Jm);for(let S=0;S<8;S++)S<m&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Zm);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const b=a[S],w=b[0],R=b[1];w!==Number.MAX_SAFE_INTEGER&&R?(g&&u.getAttribute("morphTarget"+S)!==g[w]&&u.setAttribute("morphTarget"+S,g[w]),p&&u.getAttribute("morphNormal"+S)!==p[w]&&u.setAttribute("morphNormal"+S,p[w]),i[S]=R,v+=R):(g&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function t0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Oh extends Ie{constructor(t,e,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Vi,u!==Vi&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vi&&(n=di),n===void 0&&u===Rs&&(n=Wi),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kh=new Ie,Hh=new Oh(1,1);Hh.compareFunction=Th;const Bh=new Rh,zh=new Od,Gh=new Nh,hc=[],uc=[],dc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function Fs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=hc[i];if(s===void 0&&(s=new Float32Array(i),hc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ue(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ne(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function _o(r,t){let e=uc[t];e===void 0&&(e=new Int32Array(t),uc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function e0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function n0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2fv(this.addr,t),Ne(e,t)}}function i0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;r.uniform3fv(this.addr,t),Ne(e,t)}}function s0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4fv(this.addr,t),Ne(e,t)}}function r0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;pc.set(n),r.uniformMatrix2fv(this.addr,!1,pc),Ne(e,n)}}function o0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;fc.set(n),r.uniformMatrix3fv(this.addr,!1,fc),Ne(e,n)}}function a0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;dc.set(n),r.uniformMatrix4fv(this.addr,!1,dc),Ne(e,n)}}function l0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function c0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2iv(this.addr,t),Ne(e,t)}}function h0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;r.uniform3iv(this.addr,t),Ne(e,t)}}function u0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4iv(this.addr,t),Ne(e,t)}}function d0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function f0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;r.uniform2uiv(this.addr,t),Ne(e,t)}}function p0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;r.uniform3uiv(this.addr,t),Ne(e,t)}}function m0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;r.uniform4uiv(this.addr,t),Ne(e,t)}}function g0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Hh:kh;e.setTexture2D(t||s,i)}function _0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zh,i)}function v0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gh,i)}function x0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Bh,i)}function y0(r){switch(r){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return o0;case 35676:return a0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return d0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return x0}}function M0(r,t){r.uniform1fv(this.addr,t)}function S0(r,t){const e=Fs(t,this.size,2);r.uniform2fv(this.addr,e)}function b0(r,t){const e=Fs(t,this.size,3);r.uniform3fv(this.addr,e)}function T0(r,t){const e=Fs(t,this.size,4);r.uniform4fv(this.addr,e)}function E0(r,t){const e=Fs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function w0(r,t){const e=Fs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function A0(r,t){const e=Fs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function R0(r,t){r.uniform1iv(this.addr,t)}function C0(r,t){r.uniform2iv(this.addr,t)}function P0(r,t){r.uniform3iv(this.addr,t)}function L0(r,t){r.uniform4iv(this.addr,t)}function I0(r,t){r.uniform1uiv(this.addr,t)}function D0(r,t){r.uniform2uiv(this.addr,t)}function U0(r,t){r.uniform3uiv(this.addr,t)}function N0(r,t){r.uniform4uiv(this.addr,t)}function F0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||kh,s[o])}function O0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||zh,s[o])}function k0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Gh,s[o])}function H0(r,t,e){const n=this.cache,i=t.length,s=_o(e,i);Ue(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Bh,s[o])}function B0(r){switch(r){case 5126:return M0;case 35664:return S0;case 35665:return b0;case 35666:return T0;case 35674:return E0;case 35675:return w0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return I0;case 36294:return D0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return H0}}class z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=y0(e.type)}}class G0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B0(e.type)}}class W0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function mc(r,t){r.seq.push(t),r.map[t.id]=t}function V0(r,t,e){const n=r.name,i=n.length;for(Qo.lastIndex=0;;){const s=Qo.exec(n),o=Qo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){mc(e,c===void 0?new z0(a,r,t):new G0(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new W0(a),mc(e,h)),e=h}}}class to{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);V0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function gc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const X0=37297;let q0=0;function Y0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function j0(r){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(r);let n;switch(t===e?n="":t===ao&&e===oo?n="LinearDisplayP3ToLinearSRGB":t===oo&&e===ao&&(n="LinearSRGBToLinearDisplayP3"),r){case ye:case po:return[n,"LinearTransferOETF"];case ie:case Wa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function _c(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Y0(r.getShaderSource(t),o)}else return i}function $0(r,t){const e=j0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function K0(r,t){let e;switch(t){case Xu:e="Linear";break;case qu:e="Reinhard";break;case Yu:e="OptimizedCineon";break;case dh:e="ACESFilmic";break;case $u:e="AgX";break;case ju:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Z0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function J0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ss).join(`
`)}function Q0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ss(r){return r!==""}function vc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(r){return r.replace(eg,ig)}const ng=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ig(r,t){let e=$t[t];if(e===void 0){const n=ng.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ia(e)}const sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(r){return r.replace(sg,rg)}function rg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Mc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function og(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===uh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function ag(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ws:case As:t="ENVMAP_TYPE_CUBE";break;case fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function cg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ba:t="ENVMAP_BLENDING_MULTIPLY";break;case Wu:t="ENVMAP_BLENDING_MIX";break;case Vu:t="ENVMAP_BLENDING_ADD";break}return t}function hg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ug(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=og(e),c=ag(e),u=lg(e),h=cg(e),d=hg(e),f=e.isWebGL2?"":Z0(e),m=J0(e),_=Q0(s),g=i.createProgram();let p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ss).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ss).join(`
`),v.length>0&&(v+=`
`)):(p=[Mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),v=[f,Mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?$t.tonemapping_pars_fragment:"",e.toneMapping!==gi?K0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,$0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),o=Ia(o),o=vc(o,e),o=xc(o,e),a=Ia(a),a=vc(a,e),a=xc(a,e),o=yc(o),a=yc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=x+p+o,b=x+v+a,w=gc(i,i.VERTEX_SHADER,S),R=gc(i,i.FRAGMENT_SHADER,b);i.attachShader(g,w),i.attachShader(g,R),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function H(N){if(r.debug.checkShaderErrors){const K=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(w).trim(),U=i.getShaderInfoLog(R).trim();let k=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,R);else{const j=_c(i,w,"vertex"),$=_c(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+j+`
`+$)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(I===""||U==="")&&(Y=!1);Y&&(N.diagnostics={runnable:k,programLog:K,vertexShader:{log:I,prefix:p},fragmentShader:{log:U,prefix:v}})}i.deleteShader(w),i.deleteShader(R),y=new to(i,g),E=tg(i,g)}let y;this.getUniforms=function(){return y===void 0&&H(this),y};let E;this.getAttributes=function(){return E===void 0&&H(this),E};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,X0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let dg=0;class fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pg(t),e.set(t,n)),n}}class pg{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}}function mg(r,t,e,n,i,s,o){const a=new Ch,l=new fg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function g(y,E,D,N,K){const I=N.fog,U=K.geometry,k=y.isMeshStandardMaterial?N.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),j=Y&&Y.mapping===fo?Y.image.height:null,$=m[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ot=Q!==void 0?Q.length:0;let z=0;U.morphAttributes.position!==void 0&&(z=1),U.morphAttributes.normal!==void 0&&(z=2),U.morphAttributes.color!==void 0&&(z=3);let O,Z,P,lt;if($){const dt=Cn[$];O=dt.vertexShader,Z=dt.fragmentShader}else O=y.vertexShader,Z=y.fragmentShader,l.update(y),P=l.getVertexShaderID(y),lt=l.getFragmentShaderID(y);const mt=r.getRenderTarget(),Rt=K.isInstancedMesh===!0,Ut=K.isBatchedMesh===!0,It=!!y.map,Mt=!!y.matcap,B=!!Y,Ee=!!y.aoMap,At=!!y.lightMap,Pt=!!y.bumpMap,Tt=!!y.normalMap,re=!!y.displacementMap,Wt=!!y.emissiveMap,A=!!y.metalnessMap,M=!!y.roughnessMap,G=y.anisotropy>0,rt=y.clearcoat>0,nt=y.iridescence>0,it=y.sheen>0,Et=y.transmission>0,ht=G&&!!y.anisotropyMap,gt=rt&&!!y.clearcoatMap,Nt=rt&&!!y.clearcoatNormalMap,zt=rt&&!!y.clearcoatRoughnessMap,et=nt&&!!y.iridescenceMap,Xt=nt&&!!y.iridescenceThicknessMap,Vt=it&&!!y.sheenColorMap,Ft=it&&!!y.sheenRoughnessMap,bt=!!y.specularMap,at=!!y.specularColorMap,J=!!y.specularIntensityMap,wt=Et&&!!y.transmissionMap,yt=Et&&!!y.thicknessMap,_t=!!y.gradientMap,tt=!!y.alphaMap,L=y.alphaTest>0,ct=!!y.alphaHash,ut=!!y.extensions,Ct=!!U.attributes.uv1,Lt=!!U.attributes.uv2,se=!!U.attributes.uv3;let q=gi;return y.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(q=r.toneMapping),{isWebGL2:u,shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:O,fragmentShader:Z,defines:y.defines,customVertexShaderID:P,customFragmentShaderID:lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ut,instancing:Rt,instancingColor:Rt&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:mt===null?r.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ye,map:It,matcap:Mt,envMap:B,envMapMode:B&&Y.mapping,envMapCubeUVHeight:j,aoMap:Ee,lightMap:At,bumpMap:Pt,normalMap:Tt,displacementMap:d&&re,emissiveMap:Wt,normalMapObjectSpace:Tt&&y.normalMapType===cd,normalMapTangentSpace:Tt&&y.normalMapType===Ga,metalnessMap:A,roughnessMap:M,anisotropy:G,anisotropyMap:ht,clearcoat:rt,clearcoatMap:gt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:zt,iridescence:nt,iridescenceMap:et,iridescenceThicknessMap:Xt,sheen:it,sheenColorMap:Vt,sheenRoughnessMap:Ft,specularMap:bt,specularColorMap:at,specularIntensityMap:J,transmission:Et,transmissionMap:wt,thicknessMap:yt,gradientMap:_t,opaque:y.transparent===!1&&y.blending===mi,alphaMap:tt,alphaTest:L,alphaHash:ct,combine:y.combine,mapUv:It&&_(y.map.channel),aoMapUv:Ee&&_(y.aoMap.channel),lightMapUv:At&&_(y.lightMap.channel),bumpMapUv:Pt&&_(y.bumpMap.channel),normalMapUv:Tt&&_(y.normalMap.channel),displacementMapUv:re&&_(y.displacementMap.channel),emissiveMapUv:Wt&&_(y.emissiveMap.channel),metalnessMapUv:A&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:ht&&_(y.anisotropyMap.channel),clearcoatMapUv:gt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(y.sheenRoughnessMap.channel),specularMapUv:bt&&_(y.specularMap.channel),specularColorMapUv:at&&_(y.specularColorMap.channel),specularIntensityMapUv:J&&_(y.specularIntensityMap.channel),transmissionMapUv:wt&&_(y.transmissionMap.channel),thicknessMapUv:yt&&_(y.thicknessMap.channel),alphaMapUv:tt&&_(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Tt||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Lt,vertexUv3s:se,pointsUvs:K.isPoints===!0&&!!U.attributes.uv&&(It||tt),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:q,useLegacyLights:r._useLegacyLights,decodeVideoTexture:It&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Re,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ut&&y.extensions.derivatives===!0,extensionFragDepth:ut&&y.extensions.fragDepth===!0,extensionDrawBuffers:ut&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)E.push(D),E.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(v(E,y),x(E,y),E.push(r.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const E=m[y.type];let D;if(E){const N=Cn[E];D=Kd.clone(N.uniforms)}else D=y.uniforms;return D}function b(y,E){let D;for(let N=0,K=c.length;N<K;N++){const I=c[N];if(I.cacheKey===E){D=I,++D.usedTimes;break}}return D===void 0&&(D=new ug(r,E,y,s),c.push(D)),D}function w(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function H(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:b,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:H}}function gg(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function _g(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Sc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function bc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,f,m,_,g){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},r[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||_g),n.length>1&&n.sort(d||Sc),i.length>1&&i.sort(d||Sc)}function u(){for(let h=t,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function vg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new bc,r.set(n,[o])):i>=s.length?(o=new bc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function xg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Dt};break;case"SpotLight":e={position:new C,direction:new C,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function yg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Mg=0;function Sg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function bg(r,t){const e=new xg,n=yg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new C);const s=new C,o=new Zt,a=new Zt;function l(u,h){let d=0,f=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,g=0,p=0,v=0,x=0,S=0,b=0,w=0,R=0,H=0,y=0;u.sort(Sg);const E=h===!0?Math.PI:1;for(let N=0,K=u.length;N<K;N++){const I=u[N],U=I.color,k=I.intensity,Y=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=U.r*k*E,f+=U.g*k*E,m+=U.b*k*E;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],k);y++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const Q=I.shadow,ot=n.get(I);ot.shadowBias=Q.bias,ot.shadowNormalBias=Q.normalBias,ot.shadowRadius=Q.radius,ot.shadowMapSize=Q.mapSize,i.directionalShadow[_]=ot,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=I.shadow.matrix,S++}i.directional[_]=$,_++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(U).multiplyScalar(k*E),$.distance=Y,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[p]=$;const Q=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,Q.updateMatrices(I),I.castShadow&&H++),i.spotLightMatrix[p]=Q.matrix,I.castShadow){const ot=n.get(I);ot.shadowBias=Q.bias,ot.shadowNormalBias=Q.normalBias,ot.shadowRadius=Q.radius,ot.shadowMapSize=Q.mapSize,i.spotShadow[p]=ot,i.spotShadowMap[p]=j,w++}p++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(U).multiplyScalar(k),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=$,v++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity*E),$.distance=I.distance,$.decay=I.decay,I.castShadow){const Q=I.shadow,ot=n.get(I);ot.shadowBias=Q.bias,ot.shadowNormalBias=Q.normalBias,ot.shadowRadius=Q.radius,ot.shadowMapSize=Q.mapSize,ot.shadowCameraNear=Q.camera.near,ot.shadowCameraFar=Q.camera.far,i.pointShadow[g]=ot,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=$,g++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(k*E),$.groundColor.copy(I.groundColor).multiplyScalar(k*E),i.hemi[x]=$,x++}}v>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const D=i.hash;(D.directionalLength!==_||D.pointLength!==g||D.spotLength!==p||D.rectAreaLength!==v||D.hemiLength!==x||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==w||D.numSpotMaps!==R||D.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=g,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+R-H,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=H,i.numLightProbes=y,D.directionalLength=_,D.pointLength=g,D.spotLength=p,D.rectAreaLength=v,D.hemiLength=x,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=w,D.numSpotMaps=R,D.numLightProbes=y,i.version=Mg++)}function c(u,h){let d=0,f=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const S=u[v];if(S.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(S.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function Tc(r,t){const e=new bg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Tg(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Tc(r,t),e.set(s,[l])):o>=a.length?(l=new Tc(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Eg extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wg extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
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
}`;function Cg(r,t,e){let n=new Xa;const i=new Bt,s=new Bt,o=new he,a=new Eg({depthPacking:ld}),l=new wg,c={},u=e.maxTextureSize,h={[Ln]:en,[en]:Ln,[Re]:Re},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Ag,fragmentShader:Rg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Pe;m.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let p=this.type;this.render=function(w,R,H){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),E=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),N=r.state;N.setBlending(pi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const K=p!==Vn&&this.type===Vn,I=p===Vn&&this.type!==Vn;for(let U=0,k=w.length;U<k;U++){const Y=w[U],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const $=j.getFrameExtents();if(i.multiply($),s.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,j.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,j.mapSize.y=s.y)),j.map===null||K===!0||I===!0){const ot=this.type!==Vn?{minFilter:Be,magFilter:Be}:{};j.map!==null&&j.map.dispose(),j.map=new Yi(i.x,i.y,ot),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const Q=j.getViewportCount();for(let ot=0;ot<Q;ot++){const z=j.getViewport(ot);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),N.viewport(o),j.updateMatrices(Y,ot),n=j.getFrustum(),S(R,H,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===Vn&&v(j,H),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(y,E,D)};function v(w,R){const H=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yi(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(R,null,H,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(R,null,H,f,_,null)}function x(w,R,H,y){let E=null;const D=H.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)E=D;else if(E=H.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=E.uuid,K=R.uuid;let I=c[N];I===void 0&&(I={},c[N]=I);let U=I[K];U===void 0&&(U=E.clone(),I[K]=U,R.addEventListener("dispose",b)),E=U}if(E.visible=R.visible,E.wireframe=R.wireframe,y===Vn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:h[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,H.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const N=r.properties.get(E);N.light=H}return E}function S(w,R,H,y,E){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Vn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld);const K=t.update(w),I=w.material;if(Array.isArray(I)){const U=K.groups;for(let k=0,Y=U.length;k<Y;k++){const j=U[k],$=I[j.materialIndex];if($&&$.visible){const Q=x(w,$,y,E);w.onBeforeShadow(r,w,R,H,K,Q,j),r.renderBufferDirect(H,null,K,Q,w,j),w.onAfterShadow(r,w,R,H,K,Q,j)}}}else if(I.visible){const U=x(w,I,y,E);w.onBeforeShadow(r,w,R,H,K,U,null),r.renderBufferDirect(H,null,K,U,w,null),w.onAfterShadow(r,w,R,H,K,U,null)}}const N=w.children;for(let K=0,I=N.length;K<I;K++)S(N[K],R,H,y,E)}function b(w){w.target.removeEventListener("dispose",b);for(const H in c){const y=c[H],E=w.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function Pg(r,t,e){const n=e.isWebGL2;function i(){let L=!1;const ct=new he;let ut=null;const Ct=new he(0,0,0,0);return{setMask:function(Lt){ut!==Lt&&!L&&(r.colorMask(Lt,Lt,Lt,Lt),ut=Lt)},setLocked:function(Lt){L=Lt},setClear:function(Lt,se,q,st,dt){dt===!0&&(Lt*=st,se*=st,q*=st),ct.set(Lt,se,q,st),Ct.equals(ct)===!1&&(r.clearColor(Lt,se,q,st),Ct.copy(ct))},reset:function(){L=!1,ut=null,Ct.set(-1,0,0,0)}}}function s(){let L=!1,ct=null,ut=null,Ct=null;return{setTest:function(Lt){Lt?Ut(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(Lt){ct!==Lt&&!L&&(r.depthMask(Lt),ct=Lt)},setFunc:function(Lt){if(ut!==Lt){switch(Lt){case Fu:r.depthFunc(r.NEVER);break;case Ou:r.depthFunc(r.ALWAYS);break;case ku:r.depthFunc(r.LESS);break;case io:r.depthFunc(r.LEQUAL);break;case Hu:r.depthFunc(r.EQUAL);break;case Bu:r.depthFunc(r.GEQUAL);break;case zu:r.depthFunc(r.GREATER);break;case Gu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ut=Lt}},setLocked:function(Lt){L=Lt},setClear:function(Lt){Ct!==Lt&&(r.clearDepth(Lt),Ct=Lt)},reset:function(){L=!1,ct=null,ut=null,Ct=null}}}function o(){let L=!1,ct=null,ut=null,Ct=null,Lt=null,se=null,q=null,st=null,dt=null;return{setTest:function(vt){L||(vt?Ut(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(vt){ct!==vt&&!L&&(r.stencilMask(vt),ct=vt)},setFunc:function(vt,kt,Jt){(ut!==vt||Ct!==kt||Lt!==Jt)&&(r.stencilFunc(vt,kt,Jt),ut=vt,Ct=kt,Lt=Jt)},setOp:function(vt,kt,Jt){(se!==vt||q!==kt||st!==Jt)&&(r.stencilOp(vt,kt,Jt),se=vt,q=kt,st=Jt)},setLocked:function(vt){L=vt},setClear:function(vt){dt!==vt&&(r.clearStencil(vt),dt=vt)},reset:function(){L=!1,ct=null,ut=null,Ct=null,Lt=null,se=null,q=null,st=null,dt=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},m=new WeakMap,_=[],g=null,p=!1,v=null,x=null,S=null,b=null,w=null,R=null,H=null,y=new Dt(0,0,0),E=0,D=!1,N=null,K=null,I=null,U=null,k=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,$=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=$>=2);let ot=null,z={};const O=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),P=new he().fromArray(O),lt=new he().fromArray(Z);function mt(L,ct,ut,Ct){const Lt=new Uint8Array(4),se=r.createTexture();r.bindTexture(L,se),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let q=0;q<ut;q++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(ct,0,r.RGBA,1,1,Ct,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(ct+q,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return se}const Rt={};Rt[r.TEXTURE_2D]=mt(r.TEXTURE_2D,r.TEXTURE_2D,1),Rt[r.TEXTURE_CUBE_MAP]=mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Rt[r.TEXTURE_2D_ARRAY]=mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Rt[r.TEXTURE_3D]=mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ut(r.DEPTH_TEST),l.setFunc(io),Wt(!1),A(sl),Ut(r.CULL_FACE),Tt(pi);function Ut(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function It(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function Mt(L,ct){return f[L]!==ct?(r.bindFramebuffer(L,ct),f[L]=ct,n&&(L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ct),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ct)),!0):!1}function B(L,ct){let ut=_,Ct=!1;if(L)if(ut=m.get(ct),ut===void 0&&(ut=[],m.set(ct,ut)),L.isWebGLMultipleRenderTargets){const Lt=L.texture;if(ut.length!==Lt.length||ut[0]!==r.COLOR_ATTACHMENT0){for(let se=0,q=Lt.length;se<q;se++)ut[se]=r.COLOR_ATTACHMENT0+se;ut.length=Lt.length,Ct=!0}}else ut[0]!==r.COLOR_ATTACHMENT0&&(ut[0]=r.COLOR_ATTACHMENT0,Ct=!0);else ut[0]!==r.BACK&&(ut[0]=r.BACK,Ct=!0);Ct&&(e.isWebGL2?r.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function Ee(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const At={[Hi]:r.FUNC_ADD,[Mu]:r.FUNC_SUBTRACT,[Su]:r.FUNC_REVERSE_SUBTRACT};if(n)At[al]=r.MIN,At[ll]=r.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(At[al]=L.MIN_EXT,At[ll]=L.MAX_EXT)}const Pt={[bu]:r.ZERO,[Tu]:r.ONE,[Eu]:r.SRC_COLOR,[ba]:r.SRC_ALPHA,[Lu]:r.SRC_ALPHA_SATURATE,[Cu]:r.DST_COLOR,[Au]:r.DST_ALPHA,[wu]:r.ONE_MINUS_SRC_COLOR,[Ta]:r.ONE_MINUS_SRC_ALPHA,[Pu]:r.ONE_MINUS_DST_COLOR,[Ru]:r.ONE_MINUS_DST_ALPHA,[Iu]:r.CONSTANT_COLOR,[Du]:r.ONE_MINUS_CONSTANT_COLOR,[Uu]:r.CONSTANT_ALPHA,[Nu]:r.ONE_MINUS_CONSTANT_ALPHA};function Tt(L,ct,ut,Ct,Lt,se,q,st,dt,vt){if(L===pi){p===!0&&(It(r.BLEND),p=!1);return}if(p===!1&&(Ut(r.BLEND),p=!0),L!==yu){if(L!==v||vt!==D){if((x!==Hi||w!==Hi)&&(r.blendEquation(r.FUNC_ADD),x=Hi,w=Hi),vt)switch(L){case mi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case En:r.blendFunc(r.ONE,r.ONE);break;case rl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ol:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case mi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case En:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case rl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ol:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,b=null,R=null,H=null,y.set(0,0,0),E=0,v=L,D=vt}return}Lt=Lt||ct,se=se||ut,q=q||Ct,(ct!==x||Lt!==w)&&(r.blendEquationSeparate(At[ct],At[Lt]),x=ct,w=Lt),(ut!==S||Ct!==b||se!==R||q!==H)&&(r.blendFuncSeparate(Pt[ut],Pt[Ct],Pt[se],Pt[q]),S=ut,b=Ct,R=se,H=q),(st.equals(y)===!1||dt!==E)&&(r.blendColor(st.r,st.g,st.b,dt),y.copy(st),E=dt),v=L,D=!1}function re(L,ct){L.side===Re?It(r.CULL_FACE):Ut(r.CULL_FACE);let ut=L.side===en;ct&&(ut=!ut),Wt(ut),L.blending===mi&&L.transparent===!1?Tt(pi):Tt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ct=L.stencilWrite;c.setTest(Ct),Ct&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ut(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function A(L){L!==_u?(Ut(r.CULL_FACE),L!==K&&(L===sl?r.cullFace(r.BACK):L===vu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),K=L}function M(L){L!==I&&(j&&r.lineWidth(L),I=L)}function G(L,ct,ut){L?(Ut(r.POLYGON_OFFSET_FILL),(U!==ct||k!==ut)&&(r.polygonOffset(ct,ut),U=ct,k=ut)):It(r.POLYGON_OFFSET_FILL)}function rt(L){L?Ut(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function nt(L){L===void 0&&(L=r.TEXTURE0+Y-1),ot!==L&&(r.activeTexture(L),ot=L)}function it(L,ct,ut){ut===void 0&&(ot===null?ut=r.TEXTURE0+Y-1:ut=ot);let Ct=z[ut];Ct===void 0&&(Ct={type:void 0,texture:void 0},z[ut]=Ct),(Ct.type!==L||Ct.texture!==ct)&&(ot!==ut&&(r.activeTexture(ut),ot=ut),r.bindTexture(L,ct||Rt[L]),Ct.type=L,Ct.texture=ct)}function Et(){const L=z[ot];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(L){P.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),P.copy(L))}function wt(L){lt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),lt.copy(L))}function yt(L,ct){let ut=h.get(ct);ut===void 0&&(ut=new WeakMap,h.set(ct,ut));let Ct=ut.get(L);Ct===void 0&&(Ct=r.getUniformBlockIndex(ct,L.name),ut.set(L,Ct))}function _t(L,ct){const Ct=h.get(ct).get(L);u.get(ct)!==Ct&&(r.uniformBlockBinding(ct,Ct,L.__bindingPointIndex),u.set(ct,Ct))}function tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ot=null,z={},f={},m=new WeakMap,_=[],g=null,p=!1,v=null,x=null,S=null,b=null,w=null,R=null,H=null,y=new Dt(0,0,0),E=0,D=!1,N=null,K=null,I=null,U=null,k=null,P.set(0,0,r.canvas.width,r.canvas.height),lt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ut,disable:It,bindFramebuffer:Mt,drawBuffers:B,useProgram:Ee,setBlending:Tt,setMaterial:re,setFlipSided:Wt,setCullFace:A,setLineWidth:M,setPolygonOffset:G,setScissorTest:rt,activeTexture:nt,bindTexture:it,unbindTexture:Et,compressedTexImage2D:ht,compressedTexImage3D:gt,texImage2D:bt,texImage3D:at,updateUBOMapping:yt,uniformBlockBinding:_t,texStorage2D:Vt,texStorage3D:Ft,texSubImage2D:Nt,texSubImage3D:zt,compressedTexSubImage2D:et,compressedTexSubImage3D:Xt,scissor:J,viewport:wt,reset:tt}}function Lg(r,t,e,n,i,s,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return f?new OffscreenCanvas(A,M):ar("canvas")}function _(A,M,G,rt){let nt=1;if((A.width>rt||A.height>rt)&&(nt=rt/Math.max(A.width,A.height)),nt<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const it=M?co:Math.floor,Et=it(nt*A.width),ht=it(nt*A.height);h===void 0&&(h=m(Et,ht));const gt=G?m(Et,ht):h;return gt.width=Et,gt.height=ht,gt.getContext("2d").drawImage(A,0,0,Et,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Et+"x"+ht+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return La(A.width)&&La(A.height)}function p(A){return a?!1:A.wrapS!==tn||A.wrapT!==tn||A.minFilter!==Be&&A.minFilter!==nn}function v(A,M){return A.generateMipmaps&&M&&A.minFilter!==Be&&A.minFilter!==nn}function x(A){r.generateMipmap(A)}function S(A,M,G,rt,nt=!1){if(a===!1)return M;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it=M;if(M===r.RED&&(G===r.FLOAT&&(it=r.R32F),G===r.HALF_FLOAT&&(it=r.R16F),G===r.UNSIGNED_BYTE&&(it=r.R8)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(it=r.R8UI),G===r.UNSIGNED_SHORT&&(it=r.R16UI),G===r.UNSIGNED_INT&&(it=r.R32UI),G===r.BYTE&&(it=r.R8I),G===r.SHORT&&(it=r.R16I),G===r.INT&&(it=r.R32I)),M===r.RG&&(G===r.FLOAT&&(it=r.RG32F),G===r.HALF_FLOAT&&(it=r.RG16F),G===r.UNSIGNED_BYTE&&(it=r.RG8)),M===r.RGBA){const Et=nt?ro:oe.getTransfer(rt);G===r.FLOAT&&(it=r.RGBA32F),G===r.HALF_FLOAT&&(it=r.RGBA16F),G===r.UNSIGNED_BYTE&&(it=Et===me?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(it=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(it=r.RGB5_A1)}return(it===r.R16F||it===r.R32F||it===r.RG16F||it===r.RG32F||it===r.RGBA16F||it===r.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function b(A,M,G){return v(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==nn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){return A===Be||A===Aa||A===Qr?r.NEAREST:r.LINEAR}function R(A){const M=A.target;M.removeEventListener("dispose",R),y(M),M.isVideoTexture&&u.delete(M)}function H(A){const M=A.target;M.removeEventListener("dispose",H),D(M)}function y(A){const M=n.get(A);if(M.__webglInit===void 0)return;const G=A.source,rt=d.get(G);if(rt){const nt=rt[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(A),Object.keys(rt).length===0&&d.delete(G)}n.remove(A)}function E(A){const M=n.get(A);r.deleteTexture(M.__webglTexture);const G=A.source,rt=d.get(G);delete rt[M.__cacheKey],o.memory.textures--}function D(A){const M=A.texture,G=n.get(A),rt=n.get(M);if(rt.__webglTexture!==void 0&&(r.deleteTexture(rt.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(G.__webglFramebuffer[nt]))for(let it=0;it<G.__webglFramebuffer[nt].length;it++)r.deleteFramebuffer(G.__webglFramebuffer[nt][it]);else r.deleteFramebuffer(G.__webglFramebuffer[nt]);G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[nt])}else{if(Array.isArray(G.__webglFramebuffer))for(let nt=0;nt<G.__webglFramebuffer.length;nt++)r.deleteFramebuffer(G.__webglFramebuffer[nt]);else r.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let nt=0;nt<G.__webglColorRenderbuffer.length;nt++)G.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[nt]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let nt=0,it=M.length;nt<it;nt++){const Et=n.get(M[nt]);Et.__webglTexture&&(r.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(M[nt])}n.remove(M),n.remove(A)}let N=0;function K(){N=0}function I(){const A=N;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),N+=1,A}function U(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function k(A,M){const G=n.get(A);if(A.isVideoTexture&&re(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const rt=A.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{P(G,A,M);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function Y(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){P(G,A,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function j(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){P(G,A,M);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function $(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){lt(G,A,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}const Q={[rn]:r.REPEAT,[tn]:r.CLAMP_TO_EDGE,[so]:r.MIRRORED_REPEAT},ot={[Be]:r.NEAREST,[Aa]:r.NEAREST_MIPMAP_NEAREST,[Qr]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[ph]:r.LINEAR_MIPMAP_NEAREST,[qi]:r.LINEAR_MIPMAP_LINEAR},z={[hd]:r.NEVER,[gd]:r.ALWAYS,[ud]:r.LESS,[Th]:r.LEQUAL,[dd]:r.EQUAL,[md]:r.GEQUAL,[fd]:r.GREATER,[pd]:r.NOTEQUAL};function O(A,M,G){if(G?(r.texParameteri(A,r.TEXTURE_WRAP_S,Q[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Q[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Q[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ot[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ot[M.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==tn||M.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,w(M.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Be&&M.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,z[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const rt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Be||M.minFilter!==Qr&&M.minFilter!==qi||M.type===Xn&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===rr&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(A,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Z(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const rt=M.source;let nt=d.get(rt);nt===void 0&&(nt={},d.set(rt,nt));const it=U(M);if(it!==A.__cacheKey){nt[it]===void 0&&(nt[it]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[it].usedTimes++;const Et=nt[A.__cacheKey];Et!==void 0&&(nt[A.__cacheKey].usedTimes--,Et.usedTimes===0&&E(M)),A.__cacheKey=it,A.__webglTexture=nt[it].texture}return G}function P(A,M,G){let rt=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(rt=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(rt=r.TEXTURE_3D);const nt=Z(A,M),it=M.source;e.bindTexture(rt,A.__webglTexture,r.TEXTURE0+G);const Et=n.get(it);if(it.version!==Et.__version||nt===!0){e.activeTexture(r.TEXTURE0+G);const ht=oe.getPrimaries(oe.workingColorSpace),gt=M.colorSpace===vn?null:oe.getPrimaries(M.colorSpace),Nt=M.colorSpace===vn||ht===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const zt=p(M)&&g(M.image)===!1;let et=_(M.image,zt,!1,i.maxTextureSize);et=Wt(M,et);const Xt=g(et)||a,Vt=s.convert(M.format,M.colorSpace);let Ft=s.convert(M.type),bt=S(M.internalFormat,Vt,Ft,M.colorSpace,M.isVideoTexture);O(rt,M,Xt);let at;const J=M.mipmaps,wt=a&&M.isVideoTexture!==!0&&bt!==Mh,yt=Et.__version===void 0||nt===!0,_t=b(M,et,Xt);if(M.isDepthTexture)bt=r.DEPTH_COMPONENT,a?M.type===Xn?bt=r.DEPTH_COMPONENT32F:M.type===di?bt=r.DEPTH_COMPONENT24:M.type===Wi?bt=r.DEPTH24_STENCIL8:bt=r.DEPTH_COMPONENT16:M.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Vi&&bt===r.DEPTH_COMPONENT&&M.type!==za&&M.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=di,Ft=s.convert(M.type)),M.format===Rs&&bt===r.DEPTH_COMPONENT&&(bt=r.DEPTH_STENCIL,M.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Wi,Ft=s.convert(M.type))),yt&&(wt?e.texStorage2D(r.TEXTURE_2D,1,bt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,bt,et.width,et.height,0,Vt,Ft,null));else if(M.isDataTexture)if(J.length>0&&Xt){wt&&yt&&e.texStorage2D(r.TEXTURE_2D,_t,bt,J[0].width,J[0].height);for(let tt=0,L=J.length;tt<L;tt++)at=J[tt],wt?e.texSubImage2D(r.TEXTURE_2D,tt,0,0,at.width,at.height,Vt,Ft,at.data):e.texImage2D(r.TEXTURE_2D,tt,bt,at.width,at.height,0,Vt,Ft,at.data);M.generateMipmaps=!1}else wt?(yt&&e.texStorage2D(r.TEXTURE_2D,_t,bt,et.width,et.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,et.width,et.height,Vt,Ft,et.data)):e.texImage2D(r.TEXTURE_2D,0,bt,et.width,et.height,0,Vt,Ft,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){wt&&yt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,bt,J[0].width,J[0].height,et.depth);for(let tt=0,L=J.length;tt<L;tt++)at=J[tt],M.format!==hn?Vt!==null?wt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,at.width,at.height,et.depth,Vt,at.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,bt,at.width,at.height,et.depth,0,at.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,at.width,at.height,et.depth,Vt,Ft,at.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,bt,at.width,at.height,et.depth,0,Vt,Ft,at.data)}else{wt&&yt&&e.texStorage2D(r.TEXTURE_2D,_t,bt,J[0].width,J[0].height);for(let tt=0,L=J.length;tt<L;tt++)at=J[tt],M.format!==hn?Vt!==null?wt?e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,at.width,at.height,Vt,at.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,bt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?e.texSubImage2D(r.TEXTURE_2D,tt,0,0,at.width,at.height,Vt,Ft,at.data):e.texImage2D(r.TEXTURE_2D,tt,bt,at.width,at.height,0,Vt,Ft,at.data)}else if(M.isDataArrayTexture)wt?(yt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,bt,et.width,et.height,et.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Vt,Ft,et.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,et.width,et.height,et.depth,0,Vt,Ft,et.data);else if(M.isData3DTexture)wt?(yt&&e.texStorage3D(r.TEXTURE_3D,_t,bt,et.width,et.height,et.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Vt,Ft,et.data)):e.texImage3D(r.TEXTURE_3D,0,bt,et.width,et.height,et.depth,0,Vt,Ft,et.data);else if(M.isFramebufferTexture){if(yt)if(wt)e.texStorage2D(r.TEXTURE_2D,_t,bt,et.width,et.height);else{let tt=et.width,L=et.height;for(let ct=0;ct<_t;ct++)e.texImage2D(r.TEXTURE_2D,ct,bt,tt,L,0,Vt,Ft,null),tt>>=1,L>>=1}}else if(J.length>0&&Xt){wt&&yt&&e.texStorage2D(r.TEXTURE_2D,_t,bt,J[0].width,J[0].height);for(let tt=0,L=J.length;tt<L;tt++)at=J[tt],wt?e.texSubImage2D(r.TEXTURE_2D,tt,0,0,Vt,Ft,at):e.texImage2D(r.TEXTURE_2D,tt,bt,Vt,Ft,at);M.generateMipmaps=!1}else wt?(yt&&e.texStorage2D(r.TEXTURE_2D,_t,bt,et.width,et.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Vt,Ft,et)):e.texImage2D(r.TEXTURE_2D,0,bt,Vt,Ft,et);v(M,Xt)&&x(rt),Et.__version=it.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function lt(A,M,G){if(M.image.length!==6)return;const rt=Z(A,M),nt=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+G);const it=n.get(nt);if(nt.version!==it.__version||rt===!0){e.activeTexture(r.TEXTURE0+G);const Et=oe.getPrimaries(oe.workingColorSpace),ht=M.colorSpace===vn?null:oe.getPrimaries(M.colorSpace),gt=M.colorSpace===vn||Et===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Nt=M.isCompressedTexture||M.image[0].isCompressedTexture,zt=M.image[0]&&M.image[0].isDataTexture,et=[];for(let tt=0;tt<6;tt++)!Nt&&!zt?et[tt]=_(M.image[tt],!1,!0,i.maxCubemapSize):et[tt]=zt?M.image[tt].image:M.image[tt],et[tt]=Wt(M,et[tt]);const Xt=et[0],Vt=g(Xt)||a,Ft=s.convert(M.format,M.colorSpace),bt=s.convert(M.type),at=S(M.internalFormat,Ft,bt,M.colorSpace),J=a&&M.isVideoTexture!==!0,wt=it.__version===void 0||rt===!0;let yt=b(M,Xt,Vt);O(r.TEXTURE_CUBE_MAP,M,Vt);let _t;if(Nt){J&&wt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,at,Xt.width,Xt.height);for(let tt=0;tt<6;tt++){_t=et[tt].mipmaps;for(let L=0;L<_t.length;L++){const ct=_t[L];M.format!==hn?Ft!==null?J?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,L,0,0,ct.width,ct.height,Ft,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,L,at,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,L,0,0,ct.width,ct.height,Ft,bt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,L,at,ct.width,ct.height,0,Ft,bt,ct.data)}}}else{_t=M.mipmaps,J&&wt&&(_t.length>0&&yt++,e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,at,et[0].width,et[0].height));for(let tt=0;tt<6;tt++)if(zt){J?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,et[tt].width,et[tt].height,Ft,bt,et[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,at,et[tt].width,et[tt].height,0,Ft,bt,et[tt].data);for(let L=0;L<_t.length;L++){const ut=_t[L].image[tt].image;J?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,L+1,0,0,ut.width,ut.height,Ft,bt,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,L+1,at,ut.width,ut.height,0,Ft,bt,ut.data)}}else{J?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ft,bt,et[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,at,Ft,bt,et[tt]);for(let L=0;L<_t.length;L++){const ct=_t[L];J?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,L+1,0,0,Ft,bt,ct.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,L+1,at,Ft,bt,ct.image[tt])}}}v(M,Vt)&&x(r.TEXTURE_CUBE_MAP),it.__version=nt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function mt(A,M,G,rt,nt,it){const Et=s.convert(G.format,G.colorSpace),ht=s.convert(G.type),gt=S(G.internalFormat,Et,ht,G.colorSpace);if(!n.get(M).__hasExternalTextures){const zt=Math.max(1,M.width>>it),et=Math.max(1,M.height>>it);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,it,gt,zt,et,M.depth,0,Et,ht,null):e.texImage2D(nt,it,gt,zt,et,0,Et,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),Tt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,nt,n.get(G).__webglTexture,0,Pt(M)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,rt,nt,n.get(G).__webglTexture,it),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(A,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let rt=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(G||Tt(M)){const nt=M.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Xn?rt=r.DEPTH_COMPONENT32F:nt.type===di&&(rt=r.DEPTH_COMPONENT24));const it=Pt(M);Tt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,rt,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,it,rt,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,rt,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const rt=Pt(M);G&&Tt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,r.DEPTH24_STENCIL8,M.width,M.height):Tt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const rt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let nt=0;nt<rt.length;nt++){const it=rt[nt],Et=s.convert(it.format,it.colorSpace),ht=s.convert(it.type),gt=S(it.internalFormat,Et,ht,it.colorSpace),Nt=Pt(M);G&&Tt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,gt,M.width,M.height):Tt(M)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt,gt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,gt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ut(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const rt=n.get(M.depthTexture).__webglTexture,nt=Pt(M);if(M.depthTexture.format===Vi)Tt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0);else if(M.depthTexture.format===Rs)Tt(M)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function It(A){const M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ut(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[rt]),M.__webglDepthbuffer[rt]=r.createRenderbuffer(),Rt(M.__webglDepthbuffer[rt],A,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Rt(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(A,M,G){const rt=n.get(A);M!==void 0&&mt(rt.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&It(A)}function B(A){const M=A.texture,G=n.get(A),rt=n.get(M);A.addEventListener("dispose",H),A.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture()),rt.__version=M.version,o.memory.textures++);const nt=A.isWebGLCubeRenderTarget===!0,it=A.isWebGLMultipleRenderTargets===!0,Et=g(A)||a;if(nt){G.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ht]=[];for(let gt=0;gt<M.mipmaps.length;gt++)G.__webglFramebuffer[ht][gt]=r.createFramebuffer()}else G.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)G.__webglFramebuffer[ht]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(it)if(i.drawBuffers){const ht=A.texture;for(let gt=0,Nt=ht.length;gt<Nt;gt++){const zt=n.get(ht[gt]);zt.__webglTexture===void 0&&(zt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Tt(A)===!1){const ht=it?M:[M];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let gt=0;gt<ht.length;gt++){const Nt=ht[gt];G.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[gt]);const zt=s.convert(Nt.format,Nt.colorSpace),et=s.convert(Nt.type),Xt=S(Nt.internalFormat,zt,et,Nt.colorSpace,A.isXRRenderTarget===!0),Vt=Pt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,Xt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,G.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Rt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture),O(r.TEXTURE_CUBE_MAP,M,Et);for(let ht=0;ht<6;ht++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)mt(G.__webglFramebuffer[ht][gt],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else mt(G.__webglFramebuffer[ht],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);v(M,Et)&&x(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const ht=A.texture;for(let gt=0,Nt=ht.length;gt<Nt;gt++){const zt=ht[gt],et=n.get(zt);e.bindTexture(r.TEXTURE_2D,et.__webglTexture),O(r.TEXTURE_2D,zt,Et),mt(G.__webglFramebuffer,A,zt,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,0),v(zt,Et)&&x(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ht=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,rt.__webglTexture),O(ht,M,Et),a&&M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)mt(G.__webglFramebuffer[gt],A,M,r.COLOR_ATTACHMENT0,ht,gt);else mt(G.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,ht,0);v(M,Et)&&x(ht),e.unbindTexture()}A.depthBuffer&&It(A)}function Ee(A){const M=g(A)||a,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let rt=0,nt=G.length;rt<nt;rt++){const it=G[rt];if(v(it,M)){const Et=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ht=n.get(it).__webglTexture;e.bindTexture(Et,ht),x(Et),e.unbindTexture()}}}function At(A){if(a&&A.samples>0&&Tt(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,rt=A.height;let nt=r.COLOR_BUFFER_BIT;const it=[],Et=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(A),gt=A.isWebGLMultipleRenderTargets===!0;if(gt)for(let Nt=0;Nt<M.length;Nt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Nt=0;Nt<M.length;Nt++){it.push(r.COLOR_ATTACHMENT0+Nt),A.depthBuffer&&it.push(Et);const zt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(zt===!1&&(A.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),gt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[Nt]),zt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Et]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Et])),gt){const et=n.get(M[Nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,G,rt,0,0,G,rt,nt,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let Nt=0;Nt<M.length;Nt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[Nt]);const zt=n.get(M[Nt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function Pt(A){return Math.min(i.maxSamples,A.samples)}function Tt(A){const M=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function re(A){const M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Wt(A,M){const G=A.colorSpace,rt=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Pa||G!==ye&&G!==vn&&(oe.getTransfer(G)===me?a===!1?t.has("EXT_sRGB")===!0&&rt===hn?(A.format=Pa,A.minFilter=nn,A.generateMipmaps=!1):M=wh.sRGBToLinear(M):(rt!==hn||nt!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=I,this.resetTextureUnits=K,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=Mt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Tt}function Ig(r,t,e){const n=e.isWebGL2;function i(s,o=vn){let a;const l=oe.getTransfer(o);if(s===_i)return r.UNSIGNED_BYTE;if(s===gh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_h)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Zu)return r.BYTE;if(s===Ju)return r.SHORT;if(s===za)return r.UNSIGNED_SHORT;if(s===mh)return r.INT;if(s===di)return r.UNSIGNED_INT;if(s===Xn)return r.FLOAT;if(s===rr)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Qu)return r.ALPHA;if(s===hn)return r.RGBA;if(s===td)return r.LUMINANCE;if(s===ed)return r.LUMINANCE_ALPHA;if(s===Vi)return r.DEPTH_COMPONENT;if(s===Rs)return r.DEPTH_STENCIL;if(s===Pa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===nd)return r.RED;if(s===vh)return r.RED_INTEGER;if(s===id)return r.RG;if(s===xh)return r.RG_INTEGER;if(s===yh)return r.RGBA_INTEGER;if(s===wo||s===Ao||s===Ro||s===Co)if(l===me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===wo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===wo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ao)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ro)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hl||s===ul||s===dl||s===fl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===hl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ul)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===pl||s===ml)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===pl)return l===me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ml)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gl||s===_l||s===vl||s===xl||s===yl||s===Ml||s===Sl||s===bl||s===Tl||s===El||s===wl||s===Al||s===Rl||s===Cl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===gl)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_l)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vl)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xl)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yl)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ml)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sl)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bl)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tl)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===El)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wl)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Al)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rl)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cl)return l===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Po||s===Pl||s===Ll)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Po)return l===me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ll)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sd||s===Il||s===Dl||s===Ul)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Po)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Il)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ul)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wi?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Dg extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class un extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ug={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ng extends Ns{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const _=e.getContextAttributes();let g=null,p=null;const v=[],x=[],S=new Bt;let b=null;const w=new $e;w.layers.enable(1),w.viewport=new he;const R=new $e;R.layers.enable(2),R.viewport=new he;const H=[w,R],y=new Dg;y.layers.enable(1),y.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Z=v[O];return Z===void 0&&(Z=new ta,v[O]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(O){let Z=v[O];return Z===void 0&&(Z=new ta,v[O]=Z),Z.getGripSpace()},this.getHand=function(O){let Z=v[O];return Z===void 0&&(Z=new ta,v[O]=Z),Z.getHandSpace()};function N(O){const Z=x.indexOf(O.inputSource);if(Z===-1)return;const P=v[Z];P!==void 0&&(P.update(O.inputSource,O.frame,c||o),P.dispatchEvent({type:O.type,data:O.inputSource}))}function K(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",I);for(let O=0;O<v.length;O++){const Z=x[O];Z!==null&&(x[O]=null,v[O].disconnect(Z))}E=null,D=null,t.setRenderTarget(g),f=null,d=null,h=null,i=null,p=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",K),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Yi(f.framebufferWidth,f.framebufferHeight,{format:hn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,P=null,lt=null;_.depth&&(lt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?Rs:Vi,P=_.stencil?Wi:di);const mt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Yi(d.textureWidth,d.textureHeight,{format:hn,type:_i,depthTexture:new Oh(d.textureWidth,d.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Rt=t.properties.get(p);Rt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(O){for(let Z=0;Z<O.removed.length;Z++){const P=O.removed[Z],lt=x.indexOf(P);lt>=0&&(x[lt]=null,v[lt].disconnect(P))}for(let Z=0;Z<O.added.length;Z++){const P=O.added[Z];let lt=x.indexOf(P);if(lt===-1){for(let Rt=0;Rt<v.length;Rt++)if(Rt>=x.length){x.push(P),lt=Rt;break}else if(x[Rt]===null){x[Rt]=P,lt=Rt;break}if(lt===-1)break}const mt=v[lt];mt&&mt.connect(P)}}const U=new C,k=new C;function Y(O,Z,P){U.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(P.matrixWorld);const lt=U.distanceTo(k),mt=Z.projectionMatrix.elements,Rt=P.projectionMatrix.elements,Ut=mt[14]/(mt[10]-1),It=mt[14]/(mt[10]+1),Mt=(mt[9]+1)/mt[5],B=(mt[9]-1)/mt[5],Ee=(mt[8]-1)/mt[0],At=(Rt[8]+1)/Rt[0],Pt=Ut*Ee,Tt=Ut*At,re=lt/(-Ee+At),Wt=re*-Ee;Z.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Wt),O.translateZ(re),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const A=Ut+re,M=It+re,G=Pt-Wt,rt=Tt+(lt-Wt),nt=Mt*It/M*A,it=B*It/M*A;O.projectionMatrix.makePerspective(G,rt,nt,it,A,M),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function j(O,Z){Z===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Z.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;y.near=R.near=w.near=O.near,y.far=R.far=w.far=O.far,(E!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,D=y.far);const Z=O.parent,P=y.cameras;j(y,Z);for(let lt=0;lt<P.length;lt++)j(P[lt],Z);P.length===2?Y(y,w,R):y.projectionMatrix.copy(w.projectionMatrix),$(O,y,Z)};function $(O,Z,P){P===null?O.matrix.copy(Z.matrixWorld):(O.matrix.copy(P.matrixWorld),O.matrix.invert(),O.matrix.multiply(Z.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Z.projectionMatrix),O.projectionMatrixInverse.copy(Z.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Ps*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let Q=null;function ot(O,Z){if(u=Z.getViewerPose(c||o),m=Z,u!==null){const P=u.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let lt=!1;P.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let mt=0;mt<P.length;mt++){const Rt=P[mt];let Ut=null;if(f!==null)Ut=f.getViewport(Rt);else{const Mt=h.getViewSubImage(d,Rt);Ut=Mt.viewport,mt===0&&(t.setRenderTargetTextures(p,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(p))}let It=H[mt];It===void 0&&(It=new $e,It.layers.enable(mt),It.viewport=new he,H[mt]=It),It.matrix.fromArray(Rt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Rt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),mt===0&&(y.matrix.copy(It.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(It)}}for(let P=0;P<v.length;P++){const lt=x[P],mt=v[P];lt!==null&&mt!==void 0&&mt.update(lt,Z,c||o)}Q&&Q(O,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}const z=new Fh;z.setAnimationLoop(ot),this.setAnimationLoop=function(O){Q=O},this.dispose=function(){}}}function Fg(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Dh(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===en&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===en&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Og(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const S=x.program;n.uniformBlockBinding(v,S)}function c(v,x){let S=i[v.id];S===void 0&&(m(v),S=u(v),i[v.id]=S,v.addEventListener("dispose",g));const b=x.program;n.updateUBOMapping(v,b);const w=t.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function u(v){const x=h();v.__bindingPointIndex=x;const S=r.createBuffer(),b=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],S=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,R=S.length;w<R;w++){const H=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,E=H.length;y<E;y++){const D=H[y];if(f(D,w,y,b)===!0){const N=D.__offset,K=Array.isArray(D.value)?D.value:[D.value];let I=0;for(let U=0;U<K.length;U++){const k=K[U],Y=_(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,N+I,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,x,S,b){const w=v.value,R=x+"_"+S;if(b[R]===void 0)return typeof w=="number"||typeof w=="boolean"?b[R]=w:b[R]=w.clone(),!0;{const H=b[R];if(typeof w=="number"||typeof w=="boolean"){if(H!==w)return b[R]=w,!0}else if(H.equals(w)===!1)return H.copy(w),!0}return!1}function m(v){const x=v.uniforms;let S=0;const b=16;for(let R=0,H=x.length;R<H;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,D=y.length;E<D;E++){const N=y[E],K=Array.isArray(N.value)?N.value:[N.value];for(let I=0,U=K.length;I<U;I++){const k=K[I],Y=_(k),j=S%b;j!==0&&b-j<Y.boundary&&(S+=b-j),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=Y.storage}}}const w=S%b;return w>0&&(S+=b-w),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Wh{constructor(t={}){const{canvas:e=Id(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ie,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const x=this;let S=!1,b=0,w=0,R=null,H=-1,y=null;const E=new he,D=new he;let N=null;const K=new Dt(0);let I=0,U=e.width,k=e.height,Y=1,j=null,$=null;const Q=new he(0,0,U,k),ot=new he(0,0,U,k);let z=!1;const O=new Xa;let Z=!1,P=!1,lt=null;const mt=new Zt,Rt=new Bt,Ut=new C,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return R===null?Y:1}let B=n;function Ee(T,F){for(let V=0;V<T.length;V++){const X=T[V],W=e.getContext(X,F);if(W!==null)return W}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ha}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ct,!1),B===null){const F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),B=Ee(F,T),B===null)throw Ee(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let At,Pt,Tt,re,Wt,A,M,G,rt,nt,it,Et,ht,gt,Nt,zt,et,Xt,Vt,Ft,bt,at,J,wt;function yt(){At=new Ym(B),Pt=new zm(B,At,t),At.init(Pt),at=new Ig(B,At,Pt),Tt=new Pg(B,At,Pt),re=new Km(B),Wt=new gg,A=new Lg(B,At,Tt,Wt,Pt,at,re),M=new Wm(x),G=new qm(x),rt=new sf(B,Pt),J=new Hm(B,At,rt,Pt),nt=new jm(B,rt,re,J),it=new t0(B,nt,rt,re),Vt=new Qm(B,Pt,A),zt=new Gm(Wt),Et=new mg(x,M,G,At,Pt,J,zt),ht=new Fg(x,Wt),gt=new vg,Nt=new Tg(At,Pt),Xt=new km(x,M,G,Tt,it,d,l),et=new Cg(x,it,Pt),wt=new Og(B,re,Pt,Tt),Ft=new Bm(B,At,re,Pt),bt=new $m(B,At,re,Pt),re.programs=Et.programs,x.capabilities=Pt,x.extensions=At,x.properties=Wt,x.renderLists=gt,x.shadowMap=et,x.state=Tt,x.info=re}yt();const _t=new Ng(x,B);this.xr=_t,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=At.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=At.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(U,k,!1))},this.getSize=function(T){return T.set(U,k)},this.setSize=function(T,F,V=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,k=F,e.width=Math.floor(T*Y),e.height=Math.floor(F*Y),V===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(U*Y,k*Y).floor()},this.setDrawingBufferSize=function(T,F,V){U=T,k=F,Y=V,e.width=Math.floor(T*V),e.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,F,V,X){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,F,V,X),Tt.viewport(E.copy(Q).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(ot)},this.setScissor=function(T,F,V,X){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,F,V,X),Tt.scissor(D.copy(ot).multiplyScalar(Y).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){Tt.setScissorTest(z=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(T=!0,F=!0,V=!0){let X=0;if(T){let W=!1;if(R!==null){const xt=R.texture.format;W=xt===yh||xt===xh||xt===vh}if(W){const xt=R.texture.type,St=xt===_i||xt===di||xt===za||xt===Wi||xt===gh||xt===_h,Ht=Xt.getClearColor(),Gt=Xt.getClearAlpha(),Kt=Ht.r,qt=Ht.g,jt=Ht.b;St?(f[0]=Kt,f[1]=qt,f[2]=jt,f[3]=Gt,B.clearBufferuiv(B.COLOR,0,f)):(m[0]=Kt,m[1]=qt,m[2]=jt,m[3]=Gt,B.clearBufferiv(B.COLOR,0,m))}else X|=B.COLOR_BUFFER_BIT}F&&(X|=B.DEPTH_BUFFER_BIT),V&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),gt.dispose(),Nt.dispose(),Wt.dispose(),M.dispose(),G.dispose(),it.dispose(),J.dispose(),wt.dispose(),Et.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",dt),_t.removeEventListener("sessionend",vt),lt&&(lt.dispose(),lt=null),kt.stop()};function tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=re.autoReset,F=et.enabled,V=et.autoUpdate,X=et.needsUpdate,W=et.type;yt(),re.autoReset=T,et.enabled=F,et.autoUpdate=V,et.needsUpdate=X,et.type=W}function ct(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ut(T){const F=T.target;F.removeEventListener("dispose",ut),Ct(F)}function Ct(T){Lt(T),Wt.remove(T)}function Lt(T){const F=Wt.get(T).programs;F!==void 0&&(F.forEach(function(V){Et.releaseProgram(V)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,X,W,xt){F===null&&(F=It);const St=W.isMesh&&W.matrixWorld.determinant()<0,Ht=ce(T,F,V,X,W);Tt.setMaterial(X,St);let Gt=V.index,Kt=1;if(X.wireframe===!0){if(Gt=nt.getWireframeAttribute(V),Gt===void 0)return;Kt=2}const qt=V.drawRange,jt=V.attributes.position;let Te=qt.start*Kt,an=(qt.start+qt.count)*Kt;xt!==null&&(Te=Math.max(Te,xt.start*Kt),an=Math.min(an,(xt.start+xt.count)*Kt)),Gt!==null?(Te=Math.max(Te,0),an=Math.min(an,Gt.count)):jt!=null&&(Te=Math.max(Te,0),an=Math.min(an,jt.count));const ke=an-Te;if(ke<0||ke===1/0)return;J.setup(W,X,Ht,V,Gt);let On,ve=Ft;if(Gt!==null&&(On=rt.get(Gt),ve=bt,ve.setIndex(On)),W.isMesh)X.wireframe===!0?(Tt.setLineWidth(X.wireframeLinewidth*Mt()),ve.setMode(B.LINES)):ve.setMode(B.TRIANGLES);else if(W.isLine){let Qt=X.linewidth;Qt===void 0&&(Qt=1),Tt.setLineWidth(Qt*Mt()),W.isLineSegments?ve.setMode(B.LINES):W.isLineLoop?ve.setMode(B.LINE_LOOP):ve.setMode(B.LINE_STRIP)}else W.isPoints?ve.setMode(B.POINTS):W.isSprite&&ve.setMode(B.TRIANGLES);if(W.isBatchedMesh)ve.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ve.renderInstances(Te,ke,W.count);else if(V.isInstancedBufferGeometry){const Qt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,So=Math.min(V.instanceCount,Qt);ve.renderInstances(Te,ke,So)}else ve.render(Te,ke)};function se(T,F,V){T.transparent===!0&&T.side===Re&&T.forceSinglePass===!1?(T.side=en,T.needsUpdate=!0,fe(T,F,V),T.side=Ln,T.needsUpdate=!0,fe(T,F,V),T.side=Re):fe(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),g=Nt.get(V),g.init(),v.push(g),V.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),T!==V&&T.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(x._useLegacyLights);const X=new Set;return T.traverse(function(W){const xt=W.material;if(xt)if(Array.isArray(xt))for(let St=0;St<xt.length;St++){const Ht=xt[St];se(Ht,V,W),X.add(Ht)}else se(xt,V,W),X.add(xt)}),v.pop(),g=null,X},this.compileAsync=function(T,F,V=null){const X=this.compile(T,F,V);return new Promise(W=>{function xt(){if(X.forEach(function(St){Wt.get(St).currentProgram.isReady()&&X.delete(St)}),X.size===0){W(T);return}setTimeout(xt,10)}At.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let q=null;function st(T){q&&q(T)}function dt(){kt.stop()}function vt(){kt.start()}const kt=new Fh;kt.setAnimationLoop(st),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(T){q=T,_t.setAnimationLoop(T),T===null?kt.stop():kt.start()},_t.addEventListener("sessionstart",dt),_t.addEventListener("sessionend",vt),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(F),F=_t.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,F,R),g=Nt.get(T,v.length),g.init(),v.push(g),mt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),O.setFromProjectionMatrix(mt),P=this.localClippingEnabled,Z=zt.init(this.clippingPlanes,P),_=gt.get(T,p.length),_.init(),p.push(_),Jt(T,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(j,$),this.info.render.frame++,Z===!0&&zt.beginShadows();const V=g.state.shadowsArray;if(et.render(V,T,F),Z===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(_,T),g.setupLights(x._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let W=0,xt=X.length;W<xt;W++){const St=X[W];Ze(_,T,St,St.viewport)}}else Ze(_,T,F);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(x,T,F),J.resetDefaultState(),H=-1,y=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Jt(T,F,V,X){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||O.intersectsSprite(T)){X&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(mt);const St=it.update(T),Ht=T.material;Ht.visible&&_.push(T,St,Ht,V,Ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||O.intersectsObject(T))){const St=it.update(T),Ht=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ut.copy(St.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(mt)),Array.isArray(Ht)){const Gt=St.groups;for(let Kt=0,qt=Gt.length;Kt<qt;Kt++){const jt=Gt[Kt],Te=Ht[jt.materialIndex];Te&&Te.visible&&_.push(T,St,Te,V,Ut.z,jt)}}else Ht.visible&&_.push(T,St,Ht,V,Ut.z,null)}}const xt=T.children;for(let St=0,Ht=xt.length;St<Ht;St++)Jt(xt[St],F,V,X)}function Ze(T,F,V,X){const W=T.opaque,xt=T.transmissive,St=T.transparent;g.setupLightsView(V),Z===!0&&zt.setGlobalState(x.clippingPlanes,V),xt.length>0&&on(W,xt,F,V),X&&Tt.viewport(E.copy(X)),W.length>0&&yn(W,F,V),xt.length>0&&yn(xt,F,V),St.length>0&&yn(St,F,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function on(T,F,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const xt=Pt.isWebGL2;lt===null&&(lt=new Yi(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")?rr:_i,minFilter:qi,samples:xt?4:0})),x.getDrawingBufferSize(Rt),xt?lt.setSize(Rt.x,Rt.y):lt.setSize(co(Rt.x),co(Rt.y));const St=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(K),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const Ht=x.toneMapping;x.toneMapping=gi,yn(T,V,X),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt);let Gt=!1;for(let Kt=0,qt=F.length;Kt<qt;Kt++){const jt=F[Kt],Te=jt.object,an=jt.geometry,ke=jt.material,On=jt.group;if(ke.side===Re&&Te.layers.test(X.layers)){const ve=ke.side;ke.side=en,ke.needsUpdate=!0,Ge(Te,V,X,an,ke,On),ke.side=ve,ke.needsUpdate=!0,Gt=!0}}Gt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt)),x.setRenderTarget(St),x.setClearColor(K,I),x.toneMapping=Ht}function yn(T,F,V){const X=F.isScene===!0?F.overrideMaterial:null;for(let W=0,xt=T.length;W<xt;W++){const St=T[W],Ht=St.object,Gt=St.geometry,Kt=X===null?St.material:X,qt=St.group;Ht.layers.test(V.layers)&&Ge(Ht,F,V,Gt,Kt,qt)}}function Ge(T,F,V,X,W,xt){T.onBeforeRender(x,F,V,X,W,xt),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(x,F,V,X,T,xt),W.transparent===!0&&W.side===Re&&W.forceSinglePass===!1?(W.side=en,W.needsUpdate=!0,x.renderBufferDirect(V,F,X,W,T,xt),W.side=Ln,W.needsUpdate=!0,x.renderBufferDirect(V,F,X,W,T,xt),W.side=Re):x.renderBufferDirect(V,F,X,W,T,xt),T.onAfterRender(x,F,V,X,W,xt)}function fe(T,F,V){F.isScene!==!0&&(F=It);const X=Wt.get(T),W=g.state.lights,xt=g.state.shadowsArray,St=W.state.version,Ht=Et.getParameters(T,W.state,xt,F,V),Gt=Et.getProgramCacheKey(Ht);let Kt=X.programs;X.environment=T.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(T.isMeshStandardMaterial?G:M).get(T.envMap||X.environment),Kt===void 0&&(T.addEventListener("dispose",ut),Kt=new Map,X.programs=Kt);let qt=Kt.get(Gt);if(qt!==void 0){if(X.currentProgram===qt&&X.lightsStateVersion===St)return Oe(T,Ht),qt}else Ht.uniforms=Et.getUniforms(T),T.onBuild(V,Ht,x),T.onBeforeCompile(Ht,x),qt=Et.acquireProgram(Ht,Gt),Kt.set(Gt,qt),X.uniforms=Ht.uniforms;const jt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(jt.clippingPlanes=zt.uniform),Oe(T,Ht),X.needsLights=Ki(T),X.lightsStateVersion=St,X.needsLights&&(jt.ambientLightColor.value=W.state.ambient,jt.lightProbe.value=W.state.probe,jt.directionalLights.value=W.state.directional,jt.directionalLightShadows.value=W.state.directionalShadow,jt.spotLights.value=W.state.spot,jt.spotLightShadows.value=W.state.spotShadow,jt.rectAreaLights.value=W.state.rectArea,jt.ltc_1.value=W.state.rectAreaLTC1,jt.ltc_2.value=W.state.rectAreaLTC2,jt.pointLights.value=W.state.point,jt.pointLightShadows.value=W.state.pointShadow,jt.hemisphereLights.value=W.state.hemi,jt.directionalShadowMap.value=W.state.directionalShadowMap,jt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,jt.spotShadowMap.value=W.state.spotShadowMap,jt.spotLightMatrix.value=W.state.spotLightMatrix,jt.spotLightMap.value=W.state.spotLightMap,jt.pointShadowMap.value=W.state.pointShadowMap,jt.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=qt,X.uniformsList=null,qt}function Fe(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=to.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Oe(T,F){const V=Wt.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function ce(T,F,V,X,W){F.isScene!==!0&&(F=It),A.resetTextureUnits();const xt=F.fog,St=X.isMeshStandardMaterial?F.environment:null,Ht=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ye,Gt=(X.isMeshStandardMaterial?G:M).get(X.envMap||St),Kt=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),jt=!!V.morphAttributes.position,Te=!!V.morphAttributes.normal,an=!!V.morphAttributes.color;let ke=gi;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ke=x.toneMapping);const On=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=On!==void 0?On.length:0,Qt=Wt.get(X),So=g.state.lights;if(Z===!0&&(P===!0||T!==y)){const pn=T===y&&X.id===H;zt.setState(X,T,pn)}let Se=!1;X.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==So.state.version||Qt.outputColorSpace!==Ht||W.isBatchedMesh&&Qt.batching===!1||!W.isBatchedMesh&&Qt.batching===!0||W.isInstancedMesh&&Qt.instancing===!1||!W.isInstancedMesh&&Qt.instancing===!0||W.isSkinnedMesh&&Qt.skinning===!1||!W.isSkinnedMesh&&Qt.skinning===!0||W.isInstancedMesh&&Qt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Qt.instancingColor===!1&&W.instanceColor!==null||Qt.envMap!==Gt||X.fog===!0&&Qt.fog!==xt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==zt.numPlanes||Qt.numIntersection!==zt.numIntersection)||Qt.vertexAlphas!==Kt||Qt.vertexTangents!==qt||Qt.morphTargets!==jt||Qt.morphNormals!==Te||Qt.morphColors!==an||Qt.toneMapping!==ke||Pt.isWebGL2===!0&&Qt.morphTargetsCount!==ve)&&(Se=!0):(Se=!0,Qt.__version=X.version);let Si=Qt.currentProgram;Se===!0&&(Si=fe(X,F,W));let el=!1,zs=!1,bo=!1;const We=Si.getUniforms(),bi=Qt.uniforms;if(Tt.useProgram(Si.program)&&(el=!0,zs=!0,bo=!0),X.id!==H&&(H=X.id,zs=!0),el||y!==T){We.setValue(B,"projectionMatrix",T.projectionMatrix),We.setValue(B,"viewMatrix",T.matrixWorldInverse);const pn=We.map.cameraPosition;pn!==void 0&&pn.setValue(B,Ut.setFromMatrixPosition(T.matrixWorld)),Pt.logarithmicDepthBuffer&&We.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&We.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,zs=!0,bo=!0)}if(W.isSkinnedMesh){We.setOptional(B,W,"bindMatrix"),We.setOptional(B,W,"bindMatrixInverse");const pn=W.skeleton;pn&&(Pt.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),We.setValue(B,"boneTexture",pn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(We.setOptional(B,W,"batchingTexture"),We.setValue(B,"batchingTexture",W._matricesTexture,A));const To=V.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0&&Pt.isWebGL2===!0)&&Vt.update(W,V,Si),(zs||Qt.receiveShadow!==W.receiveShadow)&&(Qt.receiveShadow=W.receiveShadow,We.setValue(B,"receiveShadow",W.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(bi.envMap.value=Gt,bi.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),zs&&(We.setValue(B,"toneMappingExposure",x.toneMappingExposure),Qt.needsLights&&Mn(bi,bo),xt&&X.fog===!0&&ht.refreshFogUniforms(bi,xt),ht.refreshMaterialUniforms(bi,X,Y,k,lt),to.upload(B,Fe(Qt),bi,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(to.upload(B,Fe(Qt),bi,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&We.setValue(B,"center",W.center),We.setValue(B,"modelViewMatrix",W.modelViewMatrix),We.setValue(B,"normalMatrix",W.normalMatrix),We.setValue(B,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const pn=X.uniformsGroups;for(let Eo=0,pu=pn.length;Eo<pu;Eo++)if(Pt.isWebGL2){const nl=pn[Eo];wt.update(nl,Si),wt.bind(nl,Si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Si}function Mn(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Ki(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,F,V){Wt.get(T.texture).__webglTexture=F,Wt.get(T.depthTexture).__webglTexture=V;const X=Wt.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const V=Wt.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){R=T,b=F,w=V;let X=!0,W=null,xt=!1,St=!1;if(T){const Gt=Wt.get(T);Gt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(B.FRAMEBUFFER,null),X=!1):Gt.__webglFramebuffer===void 0?A.setupRenderTarget(T):Gt.__hasExternalTextures&&A.rebindTextures(T,Wt.get(T.texture).__webglTexture,Wt.get(T.depthTexture).__webglTexture);const Kt=T.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(St=!0);const qt=Wt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qt[F])?W=qt[F][V]:W=qt[F],xt=!0):Pt.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?W=Wt.get(T).__webglMultisampledFramebuffer:Array.isArray(qt)?W=qt[V]:W=qt,E.copy(T.viewport),D.copy(T.scissor),N=T.scissorTest}else E.copy(Q).multiplyScalar(Y).floor(),D.copy(ot).multiplyScalar(Y).floor(),N=z;if(Tt.bindFramebuffer(B.FRAMEBUFFER,W)&&Pt.drawBuffers&&X&&Tt.drawBuffers(T,W),Tt.viewport(E),Tt.scissor(D),Tt.setScissorTest(N),xt){const Gt=Wt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Gt.__webglTexture,V)}else if(St){const Gt=Wt.get(T.texture),Kt=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gt.__webglTexture,V||0,Kt)}H=-1},this.readRenderTargetPixels=function(T,F,V,X,W,xt,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Ht=Ht[St]),Ht){Tt.bindFramebuffer(B.FRAMEBUFFER,Ht);try{const Gt=T.texture,Kt=Gt.format,qt=Gt.type;if(Kt!==hn&&at.convert(Kt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const jt=qt===rr&&(At.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&At.has("EXT_color_buffer_float"));if(qt!==_i&&at.convert(qt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qt===Xn&&(Pt.isWebGL2||At.has("OES_texture_float")||At.has("WEBGL_color_buffer_float")))&&!jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-X&&V>=0&&V<=T.height-W&&B.readPixels(F,V,X,W,at.convert(Kt),at.convert(qt),xt)}finally{const Gt=R!==null?Wt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(T,F,V=0){const X=Math.pow(2,-V),W=Math.floor(F.image.width*X),xt=Math.floor(F.image.height*X);A.setTexture2D(F,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,T.x,T.y,W,xt),Tt.unbindTexture()},this.copyTextureToTexture=function(T,F,V,X=0){const W=F.image.width,xt=F.image.height,St=at.convert(V.format),Ht=at.convert(V.type);A.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,T.x,T.y,W,xt,St,Ht,F.image.data):F.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,St,F.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,X,T.x,T.y,St,Ht,F.image),X===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V,X,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=T.max.x-T.min.x+1,St=T.max.y-T.min.y+1,Ht=T.max.z-T.min.z+1,Gt=at.convert(X.format),Kt=at.convert(X.type);let qt;if(X.isData3DTexture)A.setTexture3D(X,0),qt=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),qt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const jt=B.getParameter(B.UNPACK_ROW_LENGTH),Te=B.getParameter(B.UNPACK_IMAGE_HEIGHT),an=B.getParameter(B.UNPACK_SKIP_PIXELS),ke=B.getParameter(B.UNPACK_SKIP_ROWS),On=B.getParameter(B.UNPACK_SKIP_IMAGES),ve=V.isCompressedTexture?V.mipmaps[W]:V.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ve.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ve.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,T.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,T.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?B.texSubImage3D(qt,W,F.x,F.y,F.z,xt,St,Ht,Gt,Kt,ve.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(qt,W,F.x,F.y,F.z,xt,St,Ht,Gt,ve.data)):B.texSubImage3D(qt,W,F.x,F.y,F.z,xt,St,Ht,Gt,Kt,ve),B.pixelStorei(B.UNPACK_ROW_LENGTH,jt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Te),B.pixelStorei(B.UNPACK_SKIP_PIXELS,an),B.pixelStorei(B.UNPACK_SKIP_ROWS,ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,On),W===0&&X.generateMipmaps&&B.generateMipmap(qt),Tt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){b=0,w=0,R=null,Tt.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Wa?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===po?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ie?Xi:bh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Xi?ie:ye}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class kg extends Wh{}kg.prototype.isWebGL1Renderer=!0;class Vh extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Xh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new C;class lr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qh extends xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fs;const qs=new C,ps=new C,ms=new C,gs=new Bt,Ys=new Bt,Yh=new Zt,Nr=new C,js=new C,Fr=new C,Ec=new Bt,ea=new Bt,wc=new Bt;class Hg extends ge{constructor(t=new qh){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new Pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xh(e,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new lr(n,3,0,!1)),fs.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=fs,this.material=t,this.center=new Bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),Yh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Or(Nr.set(-.5,-.5,0),ms,o,ps,i,s),Or(js.set(.5,-.5,0),ms,o,ps,i,s),Or(Fr.set(.5,.5,0),ms,o,ps,i,s),Ec.set(0,0),ea.set(1,0),wc.set(1,1);let a=t.ray.intersectTriangle(Nr,js,Fr,!1,qs);if(a===null&&(Or(js.set(-.5,.5,0),ms,o,ps,i,s),ea.set(0,1),a=t.ray.intersectTriangle(Nr,Fr,js,!1,qs),a===null))return;const l=t.ray.origin.distanceTo(qs);l<t.near||l>t.far||e.push({distance:l,point:qs.clone(),uv:_n.getInterpolation(qs,Nr,js,Fr,Ec,ea,wc,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Or(r,t,e,n,i,s){gs.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ys.x=s*gs.x-i*gs.y,Ys.y=i*gs.x+s*gs.y):Ys.copy(gs),r.copy(t),r.x+=Ys.x,r.y+=Ys.y,r.applyMatrix4(Yh)}const Ac=new C,Rc=new he,Cc=new he,Bg=new C,Pc=new Zt,kr=new C,na=new Dn,Lc=new Zt,ia=new mo;class zg extends pt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cl,this.bindMatrix=new Zt,this.bindMatrixInverse=new Zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,kr),this.boundingBox.expandByPoint(kr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,kr),this.boundingSphere.expandByPoint(kr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(i),t.ray.intersectsSphere(na)!==!1&&(Lc.copy(i).invert(),ia.copy(t.ray).applyMatrix4(Lc),!(this.boundingBox!==null&&ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ia)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new he,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ku?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Rc.fromBufferAttribute(i.attributes.skinIndex,t),Cc.fromBufferAttribute(i.attributes.skinWeight,t),Ac.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Cc.getComponent(s);if(o!==0){const a=Rc.getComponent(s);Pc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Bg.copy(Ac).applyMatrix4(Pc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class jh extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $h extends Ie{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Be,u=Be,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ic=new Zt,Gg=new Zt;class $a{constructor(t=[],e=[]){this.uuid=An(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:Gg;Ic.multiplyMatrices(a,e[s]),Ic.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new $a(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new $h(e,t,t,hn,Xn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new jh),this.bones.push(o),this.boneInverses.push(new Zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Da extends Ce{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _s=new Zt,Dc=new Zt,Hr=[],Uc=new dn,Wg=new Zt,$s=new pt,Ks=new Dn;class Vg extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Da(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),Uc.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(Uc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),Ks.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,_s),Dc.multiplyMatrices(n,_s),$s.matrixWorld=Dc,$s.raycast(t,Hr);for(let o=0,a=Hr.length;o<a;o++){const l=Hr[o];l.instanceId=s,l.object=this,e.push(l)}Hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Da(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class vo extends xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nc=new C,Fc=new C,Oc=new Zt,sa=new mo,Br=new Dn;class xo extends ge{constructor(t=new Pe,e=new vo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Nc.fromBufferAttribute(e,i-1),Fc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Nc.distanceTo(Fc);t.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),Br.radius+=s,t.ray.intersectsSphere(Br)===!1)return;Oc.copy(i).invert(),sa.copy(t.ray).applyMatrix4(Oc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,u=new C,h=new C,d=new C,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=p,S=v-1;x<S;x+=f){const b=m.getX(x),w=m.getX(x+1);if(c.fromBufferAttribute(g,b),u.fromBufferAttribute(g,w),sa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const H=t.ray.origin.distanceTo(d);H<t.near||H>t.far||e.push({distance:H,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=p,S=v-1;x<S;x+=f){if(c.fromBufferAttribute(g,x),u.fromBufferAttribute(g,x+1),sa.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const kc=new C,Hc=new C;class Kh extends xo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)kc.fromBufferAttribute(e,i),Hc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kc.distanceTo(Hc);t.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xg extends xo{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class yo extends xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bc=new Zt,Ua=new mo,zr=new Dn,Gr=new C;class Ka extends ge{constructor(t=new Pe,e=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(i),zr.radius+=s,t.ray.intersectsSphere(zr)===!1)return;Bc.copy(i).invert(),Ua.copy(t.ray).applyMatrix4(Bc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);Gr.fromBufferAttribute(h,g),zc(Gr,g,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Gr.fromBufferAttribute(h,m),zc(Gr,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zc(r,t,e,n,i,s,o){const a=Ua.distanceSqToPoint(r);if(a<e){const l=new C;Ua.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class wn extends Ie{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mo extends Pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new C,u=new Bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ue extends Pe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function v(){const S=new C,b=new C;let w=0;const R=(e-t)/n;for(let H=0;H<=s;H++){const y=[],E=H/s,D=E*(e-t)+t;for(let N=0;N<=i;N++){const K=N/i,I=K*l+a,U=Math.sin(I),k=Math.cos(I);b.x=D*U,b.y=-E*n+g,b.z=D*k,h.push(b.x,b.y,b.z),S.set(U,R,k).normalize(),d.push(S.x,S.y,S.z),f.push(K,1-E),y.push(m++)}_.push(y)}for(let H=0;H<i;H++)for(let y=0;y<s;y++){const E=_[y][H],D=_[y+1][H],N=_[y+1][H+1],K=_[y][H+1];u.push(E,D,K),u.push(D,N,K),w+=6}c.addGroup(p,w,0),p+=w}function x(S){const b=m,w=new Bt,R=new C;let H=0;const y=S===!0?t:e,E=S===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),m++;const D=m;for(let N=0;N<=i;N++){const I=N/i*l+a,U=Math.cos(I),k=Math.sin(I);R.x=y*k,R.y=g*E,R.z=y*U,h.push(R.x,R.y,R.z),d.push(0,E,0),w.x=U*.5+.5,w.y=k*.5*E+.5,f.push(w.x,w.y),m++}for(let N=0;N<i;N++){const K=b+N,I=D+N;S===!0?u.push(I,I+1,K):u.push(I+1,I,K),H+=3}c.addGroup(p,H,S===!0?1:2),p+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rn extends Pe{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/i,f=new C,m=new Bt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const v=p+g,x=v,S=v+n+1,b=v+n+2,w=v+1;a.push(x,S,w),a.push(S,b,w)}}this.setIndex(a),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _e extends Pe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new C,d=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let b=0;b<=e;b++){const w=b/e;h.x=-t*Math.cos(i+w*s)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(i+w*s)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(w+S,1-x),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const x=u[p][v+1],S=u[p][v],b=u[p+1][v],w=u[p+1][v+1];(p!==0||o>0)&&f.push(x,S,w),(p!==n-1||l<Math.PI)&&f.push(S,b,w)}this.setIndex(f),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ho extends Pe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*s,g=f/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Me extends xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yn extends Me{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class qg extends xn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Dt(16777215),this.specular=new Dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Wr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Yg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function jg(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Gc(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function Zh(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class hr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $g extends hr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nl,endingEnd:Nl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fl:s=t,a=2*e-n;break;case Ol:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fl:o=t,l=2*n-e;break;case Ol:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*_+.5*m,S=f*g-f*_;for(let b=0;b!==a;++b)s[b]=p*o[u+b]+v*o[c+b]+x*o[l+b]+S*o[h+b];return s}}class Kg extends hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class Zg extends hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Un{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wr(e,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wr(t.times,Array),values:Wr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $g(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case or:e=this.InterpolantFactoryMethodDiscrete;break;case Cs:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Yg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lo,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const _=e[h+m];if(_!==e[d+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Cs;class Os extends Un{}Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=or;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Jh extends Un{}Jh.prototype.ValueTypeName="color";class Is extends Un{}Is.prototype.ValueTypeName="number";class Jg extends hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let u=c+a;c!==u;c+=4)sn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ji extends Un{InterpolantFactoryMethodLinear(t){return new Jg(this.times,this.values,this.getValueSize(),t)}}ji.prototype.ValueTypeName="quaternion";ji.prototype.DefaultInterpolation=Cs;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Un{}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=or;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends Un{}Ds.prototype.ValueTypeName="vector";class Qg{constructor(t,e=-1,n,i=rd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=An(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(e_(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Un.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=jg(l);l=Gc(l,1,u),c=Gc(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Is(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,_){if(f.length!==0){const g=[],p=[];Zh(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const x=d[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Is(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{const f=".bones["+e[h].name+"]";n(Ds,f+".position",d,"pos",i),n(ji,f+".quaternion",d,"rot",i),n(Ds,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function t_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Is;case"vector":case"vector2":case"vector3":case"vector4":return Ds;case"color":return Jh;case"quaternion":return ji;case"bool":case"boolean":return Os;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function e_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=t_(r.type);if(r.times===void 0){const e=[],n=[];Zh(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const fi={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class n_{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const i_=new n_;class Hs{constructor(t){this.manager=t!==void 0?t:i_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Hs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class s_ extends Error{constructor(t,e){super(t),this.response=e}}class Qh extends Hs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=fi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Wn[t]!==void 0){Wn[t].push({onLoad:e,onProgress:n,onError:i});return}Wn[t]=[],Wn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wn[t],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:S})=>{if(x)p.close();else{_+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,R=u.length;w<R;w++){const H=u[w];H.onProgress&&H.onProgress(b)}p.enqueue(S),v()}})}}});return new Response(g)}else throw new s_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{fi.add(t,c);const u=Wn[t];delete Wn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Wn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Wn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class r_ extends Hs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=fi.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ar("img");function l(){u(),fi.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Nn extends Hs{constructor(t){super(t)}load(t,e,n,i){const s=new Ie,o=new r_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class ur extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class tu extends ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ra=new Zt,Wc=new C,Vc=new C;class Za{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wc),Vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vc),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class o_ extends Za{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ps*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class a_ extends ur{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new o_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Xc=new Zt,Zs=new C,oa=new C;class l_ extends Za{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zs),oa.copy(n.position),oa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(oa),n.updateMatrixWorld(),i.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc)}}class eu extends ur{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new l_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class c_ extends Za{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cr extends ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new c_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nu extends ur{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sr{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class h_ extends Hs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=fi.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return fi.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),fi.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});fi.add(t,l),s.manager.itemStart(t)}}class u_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=qc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function qc(){return(typeof performance>"u"?Date:performance).now()}const Ja="\\[\\]\\.:\\/",d_=new RegExp("["+Ja+"]","g"),Qa="[^"+Ja+"]",f_="[^"+Ja.replace("\\.","")+"]",p_=/((?:WC+[\/:])*)/.source.replace("WC",Qa),m_=/(WCOD+)?/.source.replace("WCOD",f_),g_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qa),__=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qa),v_=new RegExp("^"+p_+m_+g_+__+"$"),x_=["material","materials","bones","map"];class y_{constructor(t,e,n){const i=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ae{constructor(t,e,n){this.path=e,this.parsedPath=n||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ae.Composite(t,e,n):new ae(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(d_,"")}static parseTrackName(t){const e=v_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);x_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ae.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=y_;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class M_ extends Kh{constructor(t=10,e=10,n=4473924,i=8947848){n=new Dt(n),i=new Dt(i);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=d===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new Pe;u.setAttribute("position",new pe(l,3)),u.setAttribute("color",new pe(c,3));const h=new vo({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);class S_{domElement;three;constructor(){this.three=new Wh({antialias:!0,powerPreference:"high-performance"}),this.domElement=this.three.domElement,this.three.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.three.setClearColor(0,1),this.three.toneMapping=dh,this.three.toneMappingExposure=.8}setSize(t,e){this.three.setSize(t,e)}dispose(){this.three.dispose()}}class b_{group;skyMat;constructor(){this.group=new un;const t=new _e(5e4,64,48);t.scale(-1,1,1),this.skyMat=new In({vertexShader:`
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
      `,uniforms:{},side:en,depthWrite:!1}),this.group.add(new pt(t,this.skyMat))}update(t){}getMesh(){return this.group}}class T_{scene;camera;clock=new u_;frames=0;lastFpsUpdate=0;fps=0;stars;constructor(){this.scene=new Vh,this.scene.background=new Dt(0),this.stars=new b_,this.scene.add(this.stars.getMesh()),this.scene.add(new nu(4473958,.2)),this.scene.add(new tu(4487082,2241348,.35)),this.camera=new $e(60,window.innerWidth/window.innerHeight,.001,5e7),this.camera.position.set(0,0,10),this.camera.lookAt(0,0,0)}update(t){const e=this.clock.getElapsedTime();this.frames++,e-this.lastFpsUpdate>=1&&(this.fps=this.frames/(e-this.lastFpsUpdate),this.frames=0,this.lastFpsUpdate=e),this.stars.getMesh().position.copy(this.camera.position),this.stars.update(t)}getFps(){return this.fps}}class E_{root;helpOverlay=null;onPlay;onVab;onSettings;constructor(t,e,n){this.onPlay=t,this.onVab=e,this.onSettings=n,this.root=document.createElement("div"),this.root.className="panel",this.root.style.cssText=`
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
    `,t.querySelector("#help-close").addEventListener("click",()=>{t.remove(),this.helpOverlay=null}),document.body.appendChild(t),this.helpOverlay=t}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove(),this.helpOverlay?.remove()}}const iu=[{id:"capsule_mk1",name:"MK-1 Capsule",kind:"capsule",size:"M",mass:1200,crewCapacity:1,hasParachute:!0,dragCoeff:.5},{id:"tank_s_lfo",name:"Fuel Tank S (LFO)",kind:"tank",size:"S",mass:200,fuelCapacity:4500,fuelType:"LFO",dragCoeff:.4},{id:"tank_m_lfo",name:"Fuel Tank M (LFO)",kind:"tank",size:"M",mass:600,fuelCapacity:45e3,fuelType:"LFO",dragCoeff:.4},{id:"tank_l_lfo",name:"Fuel Tank L (LFO)",kind:"tank",size:"L",mass:1200,fuelCapacity:9e4,fuelType:"LFO",dragCoeff:.4},{id:"tank_xl_lfo",name:"Fuel Tank XL (LFO)",kind:"tank",size:"XL",mass:2500,fuelCapacity:225e3,fuelType:"LFO",dragCoeff:.4},{id:"engine_ant",name:'"Ant" Engine',kind:"engine",size:"S",mass:50,thrust:88,isp:350,fuelType:"LFO"},{id:"engine_vector",name:'"Vector" Engine',kind:"engine",size:"M",mass:400,thrust:800,isp:340,fuelType:"LFO"},{id:"engine_mastodon",name:'"Mastodon" Engine',kind:"engine",size:"L",mass:1200,thrust:2e3,isp:330,fuelType:"LFO"},{id:"engine_mammoth",name:'"Mammoth" Engine',kind:"engine",size:"XL",mass:3e3,thrust:5e3,isp:310,fuelType:"LFO"},{id:"parachute_mk16",name:"Mk-16 Parachute",kind:"parachute",size:"M",mass:30,dragCoeff:5},{id:"legs_landini",name:'"Landini" Landing Legs',kind:"legs",size:"S",mass:80,dragCoeff:.1},{id:"heatshield_s",name:"Heat Shield S (Ablative)",kind:"heatshield",size:"S",mass:50,heatCapacity:5e4,dragCoeff:1.2},{id:"heatshield_m",name:"Heat Shield M (Ablative)",kind:"heatshield",size:"M",mass:150,heatCapacity:15e4,dragCoeff:1.2},{id:"heatshield_l",name:"Heat Shield L (Ablative)",kind:"heatshield",size:"L",mass:400,heatCapacity:4e5,dragCoeff:1.2},{id:"decoupler_1",name:"TD-1 Decoupler",kind:"decoupler",size:"M",mass:100,dragCoeff:.3},{id:"agena_target",name:"Agena Target Vehicle",kind:"gltf",size:"M",mass:1500,dragCoeff:.3,gltfUrl:"/models/agena.glb",gltfScale:.0015},{id:"apollo_soyuz",name:"Apollo Soyuz",kind:"gltf",size:"L",mass:5e3,dragCoeff:.3,gltfUrl:"/models/apollo_soyuz.glb",gltfScale:.0015},{id:"saturn_v",name:"Saturn V",kind:"gltf",size:"XL",mass:3e6,dragCoeff:.3,gltfUrl:"/models/saturn_v.glb",gltfScale:.0015},{id:"ares_1",name:"Ares I",kind:"gltf",size:"XL",mass:2e6,dragCoeff:.3,gltfUrl:"/models/ares_1.glb",gltfScale:.0015},{id:"apollo_lunar_module",name:"Apollo Lunar Module",kind:"gltf",size:"L",mass:15e3,dragCoeff:.3,gltfUrl:"/models/apollo_lunar_module.glb",gltfScale:.002},{id:"atlas_6",name:"Atlas 6 (Friendship 7)",kind:"gltf",size:"L",mass:12e4,dragCoeff:.3,gltfUrl:"/models/atlas_6.glb",gltfScale:.0015},{id:"atlas_9",name:"Atlas 9 (Faith 7)",kind:"gltf",size:"L",mass:12e4,dragCoeff:.3,gltfUrl:"/models/atlas_9.glb",gltfScale:.0015},{id:"crawler",name:"Crawler Transporter",kind:"gltf",size:"XL",mass:27e5,dragCoeff:.3,gltfUrl:"/models/crawler.glb",gltfScale:.001}];function eo(r){return iu.find(t=>t.id===r)}function Yc(r,t){if(t===od)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Ra||t===Sh){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===Ra)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class w_ extends Hs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new L_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new z_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new D_(e)}),this.register(function(e){return new U_(e)}),this.register(function(e){return new N_(e)}),this.register(function(e){return new F_(e)}),this.register(function(e){return new P_(e)}),this.register(function(e){return new O_(e)}),this.register(function(e){return new I_(e)}),this.register(function(e){return new H_(e)}),this.register(function(e){return new k_(e)}),this.register(function(e){return new R_(e)}),this.register(function(e){return new W_(e)}),this.register(function(e){return new V_(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=sr.extractUrlBase(t);o=sr.resolveURL(c,this.path)}else o=sr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new Qh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(u){e(u),s.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===su){try{o[ne.KHR_BINARY_GLTF]=new X_(t)}catch(h){i&&i(h);return}s=JSON.parse(o[ne.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sv(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case ne.KHR_MATERIALS_UNLIT:o[h]=new C_;break;case ne.KHR_DRACO_MESH_COMPRESSION:o[h]=new q_(s,this.dracoLoader);break;case ne.KHR_TEXTURE_TRANSFORM:o[h]=new Y_;break;case ne.KHR_MESH_QUANTIZATION:o[h]=new j_;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function A_(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const ne={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class R_{constructor(t){this.parser=t,this.name=ne.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const u=new Dt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ye);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new cr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new eu(u),c.distance=h;break;case"spot":c=new a_(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class C_{constructor(){this.name=ne.KHR_MATERIALS_UNLIT}getMaterialType(){return xe}extendParams(t,e,n){const i=[];t.color=new Dt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],ye),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,ie))}return Promise.all(i)}}class P_{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class L_{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Bt(a,a)}return Promise.all(s)}}class I_{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class D_{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],ye)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,ie)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class U_{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class N_{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Dt().setRGB(a[0],a[1],a[2],ye),Promise.all(s)}}class F_{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class O_{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Dt().setRGB(a[0],a[1],a[2],ye),o.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,ie)),Promise.all(s)}}class k_{constructor(t){this.parser=t,this.name=ne.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class H_{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class B_{constructor(t){this.parser=t,this.name=ne.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class z_{constructor(t){this.parser=t,this.name=ne.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class G_{constructor(t){this.parser=t,this.name=ne.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class W_{constructor(t){this.name=ne.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class V_{constructor(t){this.name=ne.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const m of h){const _=new Zt,g=new C,p=new sn,v=new C(1,1,1),x=new Vg(m.geometry,m.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&v.fromBufferAttribute(l.SCALE,S),x.setMatrixAt(S,_.compose(g,p,v));for(const S in l)if(S==="_COLOR_0"){const b=l[S];x.instanceColor=new Da(b.array,b.itemSize,b.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&m.geometry.setAttribute(S,l[S]);ge.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const su="glTF",Js=12,jc={JSON:1313821514,BIN:5130562};class X_{constructor(t){this.name=ne.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==su)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Js,s=new DataView(t,Js);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===jc.JSON){const c=new Uint8Array(t,Js+o,a);this.content=n.decode(c)}else if(l===jc.BIN){const c=Js+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class q_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ne.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Na[u]||u.toLowerCase();a[h]=o[u]}for(const u in t.attributes){const h=Na[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[t.attributes[u]],f=Ts[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const m in f.attributes){const _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}h(f)},a,c,ye,d)})})}}class Y_{constructor(){this.name=ne.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class j_{constructor(){this.name=ne.KHR_MESH_QUANTIZATION}}class ru extends hr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-e,h=(n-e)/u,d=h*h,f=d*h,m=t*c,_=m-c,g=-2*f+3*d,p=f-d,v=1-g,x=p-d+h;for(let S=0;S!==a;S++){const b=o[_+S+a],w=o[_+S+l]*u,R=o[m+S+a],H=o[m+S]*u;s[S]=v*b+x*w+g*R+p*H}return s}}const $_=new sn;class K_ extends ru{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return $_.fromArray(s).normalize().toArray(s),s}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$c={9728:Be,9729:nn,9984:Aa,9985:ph,9986:Qr,9987:qi},Kc={33071:tn,33648:so,10497:rn},aa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Na={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Z_={CUBICSPLINE:void 0,LINEAR:Cs,STEP:or},la={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function J_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Me({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),r.DefaultMaterial}function Ri(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ui(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Q_(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,u=t.length;c<u;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=t.length;c<u;c++){const h=t[c];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function tv(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ev(r){let t;const e=r.extensions&&r.extensions[ne.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ca(e.attributes):t=r.indices+":"+ca(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+ca(r.targets[n]);return t}function ca(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Fa(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const iv=new Zt;class sv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new A_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Nn(this.options.manager):this.textureLoader=new h_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ri(s,a,i),ui(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ne.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(sr.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=aa[i.type],a=Ts[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ce(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=aa[i.type],c=Ts[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=e.cache.get(v);x||(_=new c(a,p*f,i.count*f/u),x=new Xh(_,f/u),e.cache.add(v,x)),g=new lr(x,l,d%f/u,m)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),g=new Ce(_,l,m);if(i.sparse!==void 0){const p=aa.SCALAR,v=Ts[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,b=new v(o[1],x,i.sparse.count*p),w=new c(o[2],S,i.sparse.count*l);a!==null&&(g=new Ce(g.array.slice(),g.itemSize,g.normalized));for(let R=0,H=b.length;R<H;R++){const y=b[R];if(g.setX(y,w[R*l]),l>=2&&g.setY(y,w[R*l+1]),l>=3&&g.setZ(y,w[R*l+2]),l>=4&&g.setW(y,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=$c[d.magFilter]||nn,u.minFilter=$c[d.minFilter]||qi,u.wrapS=Kc[d.wrapS]||rn,u.wrapT=Kc[d.wrapT]||rn,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(_){const g=new Ie(_);g.needsUpdate=!0,d(g)}),e.load(sr.resolveURL(h,s.path),m,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||nv(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ne.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ne.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ne.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new yo,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new vo,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Me}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},l=s.extensions||{},c=[];if(l[ne.KHR_MATERIALS_UNLIT]){const h=i[ne.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,e))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Dt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ye),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",h.baseColorTexture,ie)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Re);const u=s.alphaMode||la.OPAQUE;if(u===la.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===la.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==xe&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Bt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==xe&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==xe){const h=s.emissiveFactor;a.emissive=new Dt().setRGB(h[0],h[1],h[2],ye)}return s.emissiveTexture!==void 0&&o!==xe&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,ie)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),ui(h,s),e.associations.set(h,{materials:t}),s.extensions&&Ri(i,h,s),h})}createUniqueName(t){const e=ae.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Zc(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],u=ev(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[ne.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Zc(new Pe,c,e),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?J_(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const _=u[f],g=o[f];let p;const v=c[f];if(g.mode===gn.TRIANGLES||g.mode===gn.TRIANGLE_STRIP||g.mode===gn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new zg(_,v):new pt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===gn.TRIANGLE_STRIP?p.geometry=Yc(p.geometry,Sh):g.mode===gn.TRIANGLE_FAN&&(p.geometry=Yc(p.geometry,Ra));else if(g.mode===gn.LINES)p=new Kh(_,v);else if(g.mode===gn.LINE_STRIP)p=new xo(_,v);else if(g.mode===gn.LINE_LOOP)p=new Xg(_,v);else if(g.mode===gn.POINTS)p=new Ka(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&tv(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),ui(p,s),g.extensions&&Ri(i,p,g),e.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&Ri(i,h[0],s),h[0];const d=new un;s.extensions&&Ri(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new $e(Ld.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ya(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ui(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Zt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new $a(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let v=0,x=d.length;v<x;v++){const S=d[v],b=f[v],w=m[v],R=_[v],H=g[v];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const y=n._createAnimationTracks(S,b,w,R,H);if(y)for(let E=0;E<y.length;E++)p.push(y[E])}return new Qg(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,iv)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new jh:c.length>1?u=new un:c.length===1?u=c[0]:u=new ge,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),ui(u,s),s.extensions&&Ri(n,u,s),s.matrix!==void 0){const h=new Zt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new un;n.name&&(s.name=i.createUniqueName(n.name)),ui(s,n),n.extensions&&Ri(e,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof xn||d instanceof Ie)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,l=[];ni[s.path]===ni.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ni[s.path]){case ni.weights:c=Is;break;case ni.rotation:c=ji;break;case ni.position:case ni.scale:c=Ds;break;default:switch(n.itemSize){case 1:c=Is;break;case 2:case 3:default:c=Ds;break}break}const u=i.interpolation!==void 0?Z_[i.interpolation]:Cs,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+ni[s.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Fa(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof ji?K_:ru;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rv(r,t,e){const n=t.attributes,i=new dn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const u=Fa(Ts[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new C,l=new C;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=Fa(Ts[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Dn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Zc(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Na[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return oe.workingColorSpace!==ye&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${oe.workingColorSpace}" not supported.`),ui(r,t),rv(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Q_(r,t.targets,e):r})}const Es=66743e-15,jn=1e-9,$n=562500,ha=1/60,ov=9.80665,av=11944e22,Ot=.05,Oa=5;function Fn(r){return("/ellipse/"+r.replace(/^\//,"")).replace(/\/\//g,"/")}function Yt(r,t){const e=document.createElement("canvas");e.width=r,e.height=t;const n=e.getContext("2d");return[e,n]}function lv(r,t){const e=r*2*Math.PI-Math.PI;return[t*Math.PI-Math.PI/2,e]}const cv=[{lat:.7,lon:-1.8,radiusLat:.5,radiusLon:.8,color:"#4a7c3f"},{lat:-.4,lon:-1.3,radiusLat:.6,radiusLon:.35,color:"#5a8c4a"},{lat:.85,lon:.4,radiusLat:.25,radiusLon:.3,color:"#6a9c5a"},{lat:.1,lon:.6,radiusLat:.55,radiusLon:.4,color:"#8a7c3f"},{lat:.7,lon:1.6,radiusLat:.55,radiusLon:1,color:"#6a8c4a"},{lat:-.6,lon:2.4,radiusLat:.25,radiusLon:.3,color:"#9a8c5a"},{lat:1.1,lon:-.9,radiusLat:.2,radiusLon:.2,color:"#8aac7a"}];function hv(r,t=2){const e=r.width,n=r.height,o=r.getContext("2d").getImageData(0,0,e,n).data,[a,l]=Yt(e,n),c=l.createImageData(e,n),u=c.data,h=(f,m)=>(Math.max(0,Math.min(n-1,m))*e+Math.max(0,Math.min(e-1,f)))*4;for(let f=0;f<n;f++)for(let m=0;m<e;m++){const _=o[h(m-1,f-1)]/255,g=o[h(m,f-1)]/255,p=o[h(m+1,f-1)]/255,v=o[h(m-1,f)]/255,x=o[h(m+1,f)]/255,S=o[h(m-1,f+1)]/255,b=o[h(m,f+1)]/255,w=o[h(m+1,f+1)]/255,R=p+2*x+w-(_+2*v+S),H=S+2*b+w-(_+2*g+p),y=R*t,E=H*t,D=Math.sqrt(y*y+E*E+1),N=(f*e+m)*4;u[N]=Math.round((y/D*.5+.5)*255),u[N+1]=Math.round((E/D*.5+.5)*255),u[N+2]=Math.round(1/D*255),u[N+3]=255}l.putImageData(c,0,0);const d=new wn(a);return d.wrapS=d.wrapT=rn,d.anisotropy=4,d}function yi(r,t,e,n,i){const s=new wn(r);s.wrapS=s.wrapT=rn,s.colorSpace=ie,s.anisotropy=4;let o;t&&(o=hv(t,2));let a;e&&(a=new wn(e),a.wrapS=a.wrapT=rn,a.anisotropy=4);let l;n&&(l=new wn(n),l.wrapS=l.wrapT=rn,l.anisotropy=4);let c;return i&&(c=new wn(i),c.wrapS=c.wrapT=rn,c.anisotropy=4),{color:s,normal:o,roughness:a,metalness:l,ao:c}}function $i(r){let t=r|0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function Mi(r,t,e,n=.02){const i=r.getImageData(0,0,t,e),s=i.data;for(let o=0;o<s.length;o+=4){const a=(Math.random()-.5)*2*n*255;s[o]=Math.min(255,Math.max(0,s[o]+a)),s[o+1]=Math.min(255,Math.max(0,s[o+1]+a)),s[o+2]=Math.min(255,Math.max(0,s[o+2]+a))}r.putImageData(i,0,0)}function uv(){const[e,n]=Yt(1024,512),i=n.createImageData(1024,512),s=i.data,o=new Float32Array(1024*512);for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const u=c/1024,h=l/512,[d,f]=lv(u,h);let m=0;for(const _ of cv){const g=(d-_.lat)/_.radiusLat,p=(f-_.lon)/_.radiusLon;if(g*g+p*p<1){m=1;break}}(h<.07||h>.93)&&(m=.5),o[l*1024+c]=m}for(let l=0;l<512;l++)for(let c=0;c<1024;c++){const u=(l*1024+c)*4,h=o[l*1024+c]??0,d=Math.random()*.15+.85,f=(h*.5+.1*d)*255,m=Math.min(255,Math.max(0,Math.round(f)));s[u]=m,s[u+1]=m,s[u+2]=m,s[u+3]=255}n.putImageData(i,0,0);const a=new wn(e);return a.wrapS=a.wrapT=rn,a}function dv(r="M"){const[n,i]=Yt(2048,2048),[s,o]=Yt(2048,2048),[a,l]=Yt(2048,2048),[c,u]=Yt(2048,2048),[h,d]=Yt(2048,2048),f=$i(r.charCodeAt(0)*1e3+42),m=r==="S",_=r==="L"||r==="XL";i.fillStyle="#ecece8",i.fillRect(0,0,2048,2048);const g=i.createLinearGradient(0,0,0,2048);g&&(g.addColorStop(0,"rgba(0,0,0,0.04)"),g.addColorStop(.5,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(0,0,0,0.03)"),i.fillStyle=g,i.fillRect(0,0,2048,2048));const v=2048/(m?6:_?16:10);i.strokeStyle="#d0d0ca",i.lineWidth=3;for(let b=v;b<2048;b+=v)i.beginPath(),i.moveTo(0,b),i.lineTo(2048,b),i.stroke(),i.strokeStyle="rgba(255,255,255,0.12)",i.lineWidth=1.5,i.beginPath(),i.moveTo(0,b-1.5),i.lineTo(2048,b-1.5),i.stroke(),i.strokeStyle="#d0d0ca",i.lineWidth=3;const x=m?12:_?28:18;i.strokeStyle="rgba(90,90,100,0.06)",i.lineWidth=2;for(let b=1;b<x;b++){const w=b/x*2048;i.beginPath(),i.moveTo(w,0),i.lineTo(w,2048),i.stroke()}i.fillStyle="#c8c8c2";for(let b=v;b<2048;b+=v)for(let w=40;w<2008;w+=80)i.beginPath(),i.arc(w,b,5,0,Math.PI*2),i.fill(),i.strokeStyle="#b0b0aa",i.lineWidth=1,i.stroke();const S=m?4:_?14:8;for(let b=0;b<S;b++){const w=f()*2048*.85+153.6,R=f()*2048*.75+2048*.1,H=50+f()*180,y=40+f()*120;i.fillStyle=`rgb(${200+f()*30}, ${160+f()*20}, ${100+f()*20})`,i.globalAlpha=.7+f()*.25,i.fillRect(w,R,H,y),i.fillStyle=`rgb(${180+f()*20}, ${140+f()*20}, ${80+f()*20})`;for(let E=0;E<20;E++)i.beginPath(),i.arc(w+f()*H,R+f()*y,2+f()*5,0,Math.PI*2),i.fill();i.globalAlpha=1}i.fillStyle="#6a6a70",i.fillRect(0,0,2048,2048*.015),i.fillRect(0,2048*.985,2048,2048*.015),i.strokeStyle="rgba(90,90,100,0.35)",i.lineWidth=4,i.beginPath(),i.moveTo(2048*.5,0),i.lineTo(2048*.5,2048),i.stroke(),o.fillStyle="#808080",o.fillRect(0,0,2048,2048),o.strokeStyle="#b8b8b8",o.lineWidth=10;for(let b=v;b<2048;b+=v)o.beginPath(),o.moveTo(0,b),o.lineTo(2048,b),o.stroke();o.strokeStyle="#989898",o.lineWidth=4;for(let b=1;b<x;b++){const w=b/x*2048;o.beginPath(),o.moveTo(w,0),o.lineTo(w,2048),o.stroke()}o.fillStyle="#d0d0d0";for(let b=v;b<2048;b+=v)for(let w=40;w<2008;w+=80)o.beginPath(),o.arc(w,b,6,0,Math.PI*2),o.fill();l.fillStyle="#a0a0a0",l.fillRect(0,0,2048,2048),l.strokeStyle="#d0d0d0",l.lineWidth=12;for(let b=v;b<2048;b+=v)l.beginPath(),l.moveTo(0,b),l.lineTo(2048,b),l.stroke();for(let b=0;b<S;b++){const w=f()*2048*.85+153.6,R=f()*2048*.75+2048*.1,H=50+f()*180,y=40+f()*120;l.fillStyle="#e0e0e0",l.fillRect(w,R,H,y)}l.fillStyle="#606060",l.fillRect(0,0,2048,2048*.015),l.fillRect(0,2048*.985,2048,2048*.015),u.fillStyle="#080808",u.fillRect(0,0,2048,2048),u.fillStyle="#d0d0d0",u.fillRect(0,0,2048,2048*.015),u.fillRect(0,2048*.985,2048,2048*.015),u.fillStyle="#707070",u.fillRect(2048*.49,0,2048*.02,2048),d.fillStyle="#ffffff",d.fillRect(0,0,2048,2048),d.strokeStyle="#808080",d.lineWidth=14;for(let b=v;b<2048;b+=v)d.beginPath(),d.moveTo(0,b),d.lineTo(2048,b),d.stroke();d.strokeStyle="#b0b0b0",d.lineWidth=8;for(let b=1;b<x;b++){const w=b/x*2048;d.beginPath(),d.moveTo(w,0),d.lineTo(w,2048),d.stroke()}return Mi(i,2048,2048,.012),yi(n,s,a,c,h)}function fv(){const[e,n]=Yt(2048,2048),[i,s]=Yt(2048,2048),[o,a]=Yt(2048,2048),[l,c]=Yt(2048,2048),[u,h]=Yt(2048,2048),d=$i(12345);n.fillStyle="#f5f5ee",n.fillRect(0,0,2048,2048*.78);const f=n.createLinearGradient(0,0,0,2048*.78);f&&(f.addColorStop(0,"rgba(20,20,25,0.05)"),f.addColorStop(.5,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(20,20,25,0.03)"),n.fillStyle=f,n.fillRect(0,0,2048,2048*.78)),n.strokeStyle="rgba(180,180,180,0.15)",n.lineWidth=2;for(let _=2048*.08;_<2048*.75;_+=2048*.07)n.beginPath(),n.moveTo(0,_),n.lineTo(2048,_),n.stroke();n.fillStyle="#2a2a2e",n.fillRect(0,2048*.78,2048,2048*.22);for(let _=0;_<1500;_++){const g=d()*2048,p=2048*.78+d()*2048*.22,v=1+d()*4,x=25+d()*45;n.fillStyle=`rgb(${x},${x},${x+3})`,n.beginPath(),n.arc(g,p,v,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(10,10,12,0.35)",n.lineWidth=1+d()*2;for(let _=0;_<50;_++){const g=d()*2048,p=2048*.78+d()*2048*.18,v=30+d()*120;n.beginPath(),n.moveTo(g,p),n.lineTo(g+(d()-.5)*40,p+v),n.stroke()}n.fillStyle="#5a5a60",n.fillRect(0,2048*.77,2048,2048*.015),n.fillStyle="#8a8a90",n.fillRect(0,2048*.775,2048,2048*.005),n.fillStyle="#003366",n.fillRect(0,2048*.2,2048,2048*.035),n.fillStyle="#b31b1b",n.fillRect(0,2048*.245,2048,2048*.025),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(0,2048*.27,2048,2048*.003);const m=[[2048*.28,2048*.12],[2048*.55,2048*.14]];for(const[_,g]of m)n.fillStyle="#0a0a15",n.beginPath(),n.ellipse(_,g,2048*.04,2048*.03,0,0,Math.PI*2),n.fill(),n.strokeStyle="#9a9a9e",n.lineWidth=5,n.beginPath(),n.ellipse(_,g,2048*.045,2048*.035,0,0,Math.PI*2),n.stroke(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.beginPath(),n.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),n.stroke();n.fillStyle="#3a3a3e";for(let _=0;_<4;_++){const g=_/4*Math.PI*2,p=2048*.5+Math.cos(g)*2048*.38,v=2048*.35+Math.sin(g)*2048*.05;n.beginPath(),n.arc(p,v,14,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a5e",n.lineWidth=2,n.stroke()}n.fillStyle="#e0e0d8",n.fillRect(0,0,2048,2048*.04),n.strokeStyle="#a0a0a0",n.lineWidth=2,n.beginPath(),n.moveTo(0,2048*.04),n.lineTo(2048,2048*.04),n.stroke(),s.fillStyle="#808080",s.fillRect(0,0,2048,2048),s.strokeStyle="#a8a8a8",s.lineWidth=5;for(let _=2048*.08;_<2048*.75;_+=2048*.07)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#585858",s.lineWidth=3;for(let _=0;_<2048;_+=48)s.beginPath(),s.moveTo(_,2048*.78),s.lineTo(_,2048),s.stroke();for(let _=2048*.8;_<2048;_+=48)s.beginPath(),s.moveTo(0,_),s.lineTo(2048,_),s.stroke();s.strokeStyle="#c0c0c0",s.lineWidth=8,s.beginPath(),s.moveTo(0,2048*.775),s.lineTo(2048,2048*.775),s.stroke();for(const[_,g]of m)s.strokeStyle="#d0d0d0",s.lineWidth=10,s.beginPath(),s.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),s.stroke();a.fillStyle="#808080",a.fillRect(0,0,2048,2048*.78),a.fillStyle="#e0e0e0",a.fillRect(0,2048*.78,2048,2048*.22),a.fillStyle="#484848",a.fillRect(0,2048*.77,2048,2048*.015);for(const[_,g]of m)a.fillStyle="#181818",a.beginPath(),a.ellipse(_,g,2048*.045,2048*.035,0,0,Math.PI*2),a.fill();c.fillStyle="#080808",c.fillRect(0,0,2048,2048),c.fillStyle="#d0d0d0",c.fillRect(0,2048*.77,2048,2048*.015),c.fillRect(0,0,2048,2048*.04);for(const[_,g]of m)c.fillStyle="#b0b0b0",c.beginPath(),c.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),c.fill();for(let _=0;_<4;_++){const g=_/4*Math.PI*2,p=2048*.5+Math.cos(g)*2048*.38,v=2048*.35+Math.sin(g)*2048*.05;c.beginPath(),c.arc(p,v,16,0,Math.PI*2),c.fill()}h.fillStyle="#ffffff",h.fillRect(0,0,2048,2048),h.strokeStyle="#808080",h.lineWidth=10;for(let _=2048*.08;_<2048*.75;_+=2048*.07)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#606060",h.lineWidth=6;for(let _=0;_<2048;_+=48)h.beginPath(),h.moveTo(_,2048*.78),h.lineTo(_,2048),h.stroke();for(let _=2048*.8;_<2048;_+=48)h.beginPath(),h.moveTo(0,_),h.lineTo(2048,_),h.stroke();h.strokeStyle="#909090",h.lineWidth=12,h.beginPath(),h.moveTo(0,2048*.775),h.lineTo(2048,2048*.775),h.stroke();for(const[_,g]of m)h.strokeStyle="#707070",h.lineWidth=14,h.beginPath(),h.ellipse(_,g,2048*.05,2048*.04,0,0,Math.PI*2),h.stroke();return Mi(n,2048,2048,.018),yi(e,i,o,l,u)}function pv(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024),d=$i(54321);n.fillStyle="#3a3a40",n.fillRect(0,0,1024,1024*.35);for(let m=0;m<200;m++){const _=d()*1024,g=d()*1024*.35,p=5+d()*30;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(_,g),n.lineTo(_,g+p),n.stroke()}n.fillStyle="#4a4a50",n.fillRect(0,1024*.35,1024,1024*.06),n.fillStyle="#2a2a2e";for(let m=16;m<1024;m+=32)n.beginPath(),n.arc(m,1024*.38,5,0,Math.PI*2),n.fill(),n.strokeStyle="#5a5a60",n.lineWidth=1,n.stroke();for(let m=1024*.41;m<1024*.95;m++){const _=(m-419.84)/552.96,g=Math.round(180+40*(1-_)),p=Math.round(100+20*(1-_)),v=Math.round(40+10*(1-_));n.fillStyle=`rgb(${g}, ${p}, ${v})`,n.fillRect(0,m,1024,1)}n.strokeStyle="rgba(120,70,30,0.4)",n.lineWidth=1;for(let m=8;m<1024;m+=16)n.beginPath(),n.moveTo(m,1024*.41),n.lineTo(m,1024*.95),n.stroke();const f=n.createLinearGradient(0,1024*.85,0,1024);f&&(f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(.5,"rgba(0,0,0,0.3)"),f.addColorStop(1,"rgba(0,0,0,0.6)"),n.fillStyle=f,n.fillRect(0,1024*.85,1024,1024*.15)),n.fillStyle="#5a5a60",n.fillRect(0,1024*.95,1024,1024*.025),n.fillStyle="#7a7a80",n.fillRect(0,1024*.975,1024,1024*.025),n.fillStyle="#4a4a50";for(let m=0;m<4;m++){const _=m/4*Math.PI*2+Math.PI/4,g=1024*.5+Math.cos(_)*1024*.42,p=1024*.25+Math.sin(_)*1024*.05;n.fillRect(g-15,p-15,30,30),n.strokeStyle="#6a6a70",n.lineWidth=2,n.strokeRect(g-15,p-15,30,30)}s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let m=0;m<1024;m+=4)s.beginPath(),s.moveTo(m,0),s.lineTo(m,1024*.35),s.stroke();s.fillStyle="#c0c0c0";for(let m=16;m<1024;m+=32)s.beginPath(),s.arc(m,1024*.38,5,0,Math.PI*2),s.fill();s.strokeStyle="#606060",s.lineWidth=3;for(let m=8;m<1024;m+=16)s.beginPath(),s.moveTo(m,1024*.41),s.lineTo(m,1024*.95),s.stroke();s.strokeStyle="#a0a0a0",s.lineWidth=6,s.beginPath(),s.moveTo(0,1024*.41),s.lineTo(1024,1024*.41),s.stroke(),s.beginPath(),s.moveTo(0,1024*.95),s.lineTo(1024,1024*.95),s.stroke(),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.35),a.fillStyle="#606060",a.fillRect(0,1024*.35,1024,1024*.06),a.fillStyle="#808080",a.fillRect(0,1024*.41,1024,1024*.54),a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),a.fillStyle="#404040",a.fillRect(0,1024*.95,1024,1024*.05),c.fillStyle="#e0e0e0",c.fillRect(0,0,1024,1024),c.fillStyle="#808080",c.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#606060",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.41),h.lineTo(1024,1024*.41),h.stroke(),h.strokeStyle="#808080",h.lineWidth=4;for(let m=8;m<1024;m+=16)h.beginPath(),h.moveTo(m,1024*.41),h.lineTo(m,1024*.95),h.stroke();return h.strokeStyle="#707070",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.95),h.lineTo(1024,1024*.95),h.stroke(),Mi(n,1024,1024,.01),yi(e,i,o,l,u)}function mv(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024),d=$i(11111);n.fillStyle="#3a3d30",n.fillRect(0,0,1024,1024);for(let f=0;f<100;f++){const m=d()*1024,_=d()*1024,g=10+d()*50;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(m,_),n.lineTo(m,_+g),n.stroke()}n.fillStyle="#8a8a8e";for(let f=50;f<1024;f+=200)n.fillRect(0,f,1024,15),n.fillStyle="#6a6a6e",n.fillRect(0,f+15,1024,2),n.fillStyle="#8a8a8e";n.fillStyle="#2a2d22",n.fillRect(0,1024*.85,1024,1024*.15),n.strokeStyle="#4a4d42",n.lineWidth=1;for(let f=0;f<1024;f+=32)n.beginPath(),n.moveTo(f,1024*.85),n.lineTo(f,1024),n.stroke();for(let f=1024*.85;f<1024;f+=32)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();n.fillStyle="#222";for(let f=0;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);n.fillStyle="#ffcc00";for(let f=20;f<1024;f+=40)n.fillRect(f,1024*.85,20,1024*.15);s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=2;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024*.85),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=6;for(let f=50;f<1024;f+=200)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();s.strokeStyle="#606060",s.lineWidth=3;for(let f=0;f<1024;f+=32)s.beginPath(),s.moveTo(f,1024*.85),s.lineTo(f,1024),s.stroke();for(let f=1024*.85;f<1024;f+=32)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#707070",a.fillRect(0,0,1024,1024*.85),a.fillStyle="#909090";for(let f=50;f<1024;f+=200)a.fillRect(0,f,1024,17);a.fillStyle="#b0b0b0",a.fillRect(0,1024*.85,1024,1024*.15),c.fillStyle="#303030",c.fillRect(0,0,1024,1024),c.fillStyle="#e0e0e0";for(let f=50;f<1024;f+=200)c.fillRect(0,f,1024,17);c.fillStyle="#a0a0a0",c.fillRect(0,1024*.85,1024,1024*.15),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#808080",h.lineWidth=8;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024*.85),h.stroke();h.strokeStyle="#909090",h.lineWidth=10;for(let f=50;f<1024;f+=200)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Mi(n,1024,1024,.02),yi(e,i,o,l,u)}function gv(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024),d=$i(22222);n.fillStyle="#4a4a4e",n.fillRect(0,0,1024,1024);for(let f=0;f<150;f++){const m=d()*1024,_=d()*1024,g=5+d()*30;n.strokeStyle=`rgba(255,255,255,${.02+d()*.03})`,n.lineWidth=.5,n.beginPath(),n.moveTo(m,_),n.lineTo(m,_+g),n.stroke()}n.fillStyle="#7a7a7e",n.fillRect(0,1024*.35,1024,1024*.3),n.fillStyle="#3a3a3e";for(let f=24;f<1024;f+=48)n.beginPath(),n.arc(f,1024*.5,6,0,Math.PI*2),n.fill(),n.strokeStyle="#6a6a6e",n.lineWidth=1,n.stroke();n.fillStyle="#cc3300";for(let f=0;f<8;f++){const m=f/8*Math.PI*2,_=1024*.5+Math.cos(m)*1024*.35,g=1024*.5+Math.sin(m)*1024*.35;n.beginPath(),n.arc(_,g,8,0,Math.PI*2),n.fill()}n.fillStyle="#5a5a5e",n.fillRect(0,0,1024,1024*.08),n.fillRect(0,1024*.92,1024,1024*.08),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#b0b0b0",s.lineWidth=10,s.beginPath(),s.moveTo(0,1024*.35),s.lineTo(1024,1024*.35),s.stroke(),s.beginPath(),s.moveTo(0,1024*.65),s.lineTo(1024,1024*.65),s.stroke(),s.fillStyle="#c0c0c0";for(let f=24;f<1024;f+=48)s.beginPath(),s.arc(f,1024*.5,6,0,Math.PI*2),s.fill();return s.strokeStyle="#a0a0a0",s.lineWidth=8,s.beginPath(),s.moveTo(0,1024*.08),s.lineTo(1024,1024*.08),s.stroke(),s.beginPath(),s.moveTo(0,1024*.92),s.lineTo(1024,1024*.92),s.stroke(),a.fillStyle="#606060",a.fillRect(0,0,1024,1024),a.fillStyle="#404040",a.fillRect(0,1024*.35,1024,1024*.3),a.fillStyle="#505050",a.fillRect(0,0,1024,1024*.08),a.fillRect(0,1024*.92,1024,1024*.08),c.fillStyle="#d0d0d0",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#707070",h.lineWidth=12,h.beginPath(),h.moveTo(0,1024*.35),h.lineTo(1024,1024*.35),h.stroke(),h.beginPath(),h.moveTo(0,1024*.65),h.lineTo(1024,1024*.65),h.stroke(),h.strokeStyle="#808080",h.lineWidth=10,h.beginPath(),h.moveTo(0,1024*.08),h.lineTo(1024,1024*.08),h.stroke(),h.beginPath(),h.moveTo(0,1024*.92),h.lineTo(1024,1024*.92),h.stroke(),Mi(n,1024,1024,.015),yi(e,i,o,l,u)}function _v(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024),d=$i(33333);n.fillStyle="#1a1a1c",n.fillRect(0,0,1024,1024);for(let f=0;f<3e3;f++){const m=d()*1024,_=d()*1024,g=1+d()*4,p=20+d()*50,v=d()*20-10;n.fillStyle=`rgb(${p+v},${p},${p-v})`,n.beginPath(),n.arc(m,_,g,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(40,20,10,0.3)",n.lineWidth=1+d()*2;for(let f=0;f<80;f++){const m=d()*1024,_=d()*1024*.3,g=50+d()*200;n.beginPath(),n.moveTo(m,_),n.lineTo(m+(d()-.5)*40,_+g),n.stroke()}n.strokeStyle="#0a0a0c",n.lineWidth=2;for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(f,0),n.lineTo(f,1024),n.stroke();for(let f=0;f<1024;f+=64)n.beginPath(),n.moveTo(0,f),n.lineTo(1024,f),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024);for(let f=0;f<500;f++){const m=d()*1024,_=d()*1024,g=2+d()*5;s.fillStyle=`rgb(${128+d()*30},${128+d()*30},${128+d()*30})`,s.beginPath(),s.arc(m,_,g,0,Math.PI*2),s.fill()}s.strokeStyle="#404040",s.lineWidth=6;for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(f,0),s.lineTo(f,1024),s.stroke();for(let f=0;f<1024;f+=64)s.beginPath(),s.moveTo(0,f),s.lineTo(1024,f),s.stroke();a.fillStyle="#f0f0f0",a.fillRect(0,0,1024,1024),a.fillStyle="#ffffff",a.strokeStyle="#ffffff",a.lineWidth=8;for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(f,0),a.lineTo(f,1024),a.stroke();for(let f=0;f<1024;f+=64)a.beginPath(),a.moveTo(0,f),a.lineTo(1024,f),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#303030",h.lineWidth=10;for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(f,0),h.lineTo(f,1024),h.stroke();for(let f=0;f<1024;f+=64)h.beginPath(),h.moveTo(0,f),h.lineTo(1024,f),h.stroke();return Mi(n,1024,1024,.03),yi(e,i,o,l,u)}function dr(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024),d=$i(44444),f=n.createLinearGradient(0,0,0,1024);f&&(f.addColorStop(0,"#c49a38"),f.addColorStop(.15,"#daad4a"),f.addColorStop(.3,"#b8842a"),f.addColorStop(.5,"#d4a843"),f.addColorStop(.65,"#c49030"),f.addColorStop(.8,"#d8b050"),f.addColorStop(1,"#c49a38"),n.fillStyle=f,n.fillRect(0,0,1024,1024));for(let m=0;m<400;m++){const _=d()*1024,g=d()*1024,p=5+d()*60,v=3+d()*30;d()>.5?n.fillStyle=`rgba(255,225,150,${.05+d()*.1})`:n.fillStyle=`rgba(80,60,20,${.04+d()*.08})`,n.fillRect(_,g,p,v)}n.strokeStyle="rgba(60,40,10,0.3)",n.lineWidth=.5;for(let m=0;m<150;m++){const _=d()*1024,g=d()*1024,p=d()*Math.PI*2,v=5+d()*40;n.beginPath(),n.moveTo(_,g),n.lineTo(_+Math.cos(p)*v,g+Math.sin(p)*v),n.stroke()}for(let m=0;m<80;m++){const _=d()*1024,g=d()*1024,p=3+d()*20,v=60+d()*60,x=50+d()*40;n.fillStyle=`rgba(${v+30}, ${x}, ${v/2}, ${.1+d()*.2})`,n.beginPath(),n.arc(_,g,p,0,Math.PI*2),n.fill()}for(let m=0;m<30;m++){const _=d()*1024,g=d()*1024,p=2+d()*15;n.fillStyle=`rgba(255,240,200,${.1+d()*.15})`,n.beginPath(),n.arc(_,g,p,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(160,120,40,0.2)",n.lineWidth=1+d()*2;for(let m=0;m<1024;m+=20+d()*30)n.beginPath(),n.moveTo(0,m),n.lineTo(1024,m),n.stroke();s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#b0b0b0",s.lineWidth=1+d()*2;for(let m=0;m<500;m++){const _=d()*1024,g=d()*1024,p=d()*Math.PI*2,v=3+d()*40;s.beginPath(),s.moveTo(_,g),s.lineTo(_+Math.cos(p)*v,g+Math.sin(p)*v),s.stroke()}s.fillStyle="#606060";for(let m=0;m<80;m++){const _=d()*1024,g=d()*1024,p=3+d()*20;s.beginPath(),s.arc(_,g,p,0,Math.PI*2),s.fill()}a.fillStyle="#808080",a.fillRect(0,0,1024,1024),a.fillStyle="#b0b0b0";for(let m=0;m<300;m++){const _=d()*1024,g=d()*1024,p=5+d()*60,v=3+d()*30;a.fillRect(_,g,p,v)}a.fillStyle="#d0d0d0";for(let m=0;m<80;m++){const _=d()*1024,g=d()*1024,p=3+d()*20;a.beginPath(),a.arc(_,g,p,0,Math.PI*2),a.fill()}c.fillStyle="#f0f0f0",c.fillRect(0,0,1024,1024),c.fillStyle="#404040";for(let m=0;m<80;m++){const _=d()*1024,g=d()*1024,p=3+d()*20;c.beginPath(),c.arc(_,g,p,0,Math.PI*2),c.fill()}h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#707070",h.lineWidth=3;for(let m=0;m<300;m++){const _=d()*1024,g=d()*1024,p=d()*Math.PI*2,v=5+d()*40;h.beginPath(),h.moveTo(_,g),h.lineTo(_+Math.cos(p)*v,g+Math.sin(p)*v),h.stroke()}h.fillStyle="#808080";for(let m=0;m<80;m++){const _=d()*1024,g=d()*1024,p=5+d()*22;h.beginPath(),h.arc(_,g,p,0,Math.PI*2),h.fill()}return Mi(n,1024,1024,.025),yi(e,i,o,l,u)}function ou(){const[e,n]=Yt(1024,1024),[i,s]=Yt(1024,1024),[o,a]=Yt(1024,1024),[l,c]=Yt(1024,1024),[u,h]=Yt(1024,1024);n.fillStyle="#f5f5f0",n.fillRect(0,0,1024,1024),n.strokeStyle="rgba(200,200,190,0.15)",n.lineWidth=1;for(let d=0;d<1024;d+=4)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();n.strokeStyle="rgba(200,200,190,0.1)";for(let d=0;d<1024;d+=4)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.strokeStyle="rgba(160,160,150,0.3)",n.lineWidth=2;for(let d=0;d<1024;d+=32)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();for(let d=0;d<1024;d+=32)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.strokeStyle="rgba(120,120,110,0.4)",n.lineWidth=1,n.setLineDash([8,16]);for(let d=16;d<1024;d+=64)n.beginPath(),n.moveTo(d,0),n.lineTo(d,1024),n.stroke();for(let d=16;d<1024;d+=64)n.beginPath(),n.moveTo(0,d),n.lineTo(1024,d),n.stroke();n.setLineDash([]),s.fillStyle="#808080",s.fillRect(0,0,1024,1024),s.strokeStyle="#909090",s.lineWidth=1;for(let d=0;d<1024;d+=8)s.beginPath(),s.moveTo(d,0),s.lineTo(d,1024),s.stroke();for(let d=0;d<1024;d+=8)s.beginPath(),s.moveTo(0,d),s.lineTo(1024,d),s.stroke();s.strokeStyle="#b0b0b0",s.lineWidth=4;for(let d=0;d<1024;d+=32)s.beginPath(),s.moveTo(d,0),s.lineTo(d,1024),s.stroke();for(let d=0;d<1024;d+=32)s.beginPath(),s.moveTo(0,d),s.lineTo(1024,d),s.stroke();a.fillStyle="#c0c0c0",a.fillRect(0,0,1024,1024),a.fillStyle="#e0e0e0",a.strokeStyle="#e0e0e0",a.lineWidth=6;for(let d=0;d<1024;d+=32)a.beginPath(),a.moveTo(d,0),a.lineTo(d,1024),a.stroke();for(let d=0;d<1024;d+=32)a.beginPath(),a.moveTo(0,d),a.lineTo(1024,d),a.stroke();c.fillStyle="#000000",c.fillRect(0,0,1024,1024),h.fillStyle="#ffffff",h.fillRect(0,0,1024,1024),h.strokeStyle="#a0a0a0",h.lineWidth=6;for(let d=0;d<1024;d+=32)h.beginPath(),h.moveTo(d,0),h.lineTo(d,1024),h.stroke();for(let d=0;d<1024;d+=32)h.beginPath(),h.moveTo(0,d),h.lineTo(1024,d),h.stroke();return Mi(n,1024,1024,.02),yi(e,i,o,l,u)}const Jc={S:{radius:.5*Ot,height:.7*Ot},M:{radius:.7*Ot,height:1.1*Ot},L:{radius:1*Ot,height:1.6*Ot},XL:{radius:1.4*Ot,height:2.2*Ot}},Ye=Math.PI,be=64;let ua=0;function da(){return ua=ua*1664525+1013904223>>>0,(ua>>>0)/4294967295}function Ke(r,t){const e=r.attributes.position;if(!e)return;const n=e.array;for(let i=0;i<n.length;i+=3){const s=(da()-.5)*2,o=(da()-.5)*2,a=(da()-.5)*2;n[i]=n[i]+s*t,n[i+1]=n[i+1]+o*t,n[i+2]=n[i+2]+a*t}e.needsUpdate=!0,r.computeVertexNormals()}const au=new w_,vi=new Map;async function vv(r,t=1){const e=Fn(r);if(vi.has(r))return vi.get(r).clone();try{const i=(await au.loadAsync(e)).scene;return i.traverse(s=>{if(s instanceof pt)if(s.castShadow=!0,s.receiveShadow=!0,s.material){const o=Array.isArray(s.material)?s.material:[s.material];for(const a of o)if(a instanceof Me){if(a.roughness=Math.max(.1,a.roughness??.5),a.metalness=Math.max(0,a.metalness??0),a.color){const c={h:0,s:0,l:0};a.color.getHSL(c),c.s<.3&&(c.s=Math.min(1,c.s*1.5+.05),c.l=Math.min(1,Math.max(.1,c.l*1.1)),a.color.setHSL(c.h,c.s,c.l))}const l=s.name.toLowerCase();(l.includes("engine")||l.includes("nozzle")||l.includes("thruster")||l.includes("motor"))&&(a.emissive=new Dt(4465152),a.emissiveIntensity=.05),a.needsUpdate=!0}else if(a instanceof xe||a instanceof qg){const l=new Me({color:a.color??16777215,map:a.map,normalMap:a.normalMap,roughnessMap:a.roughnessMap,metalnessMap:a.metalnessMap,aoMap:a.aoMap,roughness:.5,metalness:.1});s.material=l}}else s.material=new Me({color:13421772,roughness:.5,metalness:.1})}),vi.set(r,i),i.clone()}catch(n){return console.error("Failed to load GLTF:",r,n),null}}const fa=new Map;function fn(r,t){return fa.has(r)||fa.set(r,t()),fa.get(r)}function De(r,t={}){const e={map:r.color,normalMap:r.normal,roughnessMap:r.roughness,metalnessMap:r.metalness,roughness:1,metalness:1,...t};return r.ao&&(e.aoMap=r.ao,e.aoMapIntensity=1),r.emissive&&(e.emissiveMap=r.emissive),new Me(e)}function de(r,t=1){const e=r.attributes.position;if(!e)return;let n=r.attributes.uv;n||(n=new Ce(new Float32Array(e.count*2),2));for(let i=0;i<e.count;i++){const s=e.getX(i),o=e.getY(i),a=e.getZ(i),c=(Math.atan2(s,a)+Math.PI)/(2*Math.PI),u=(o+1)*.5*t;n.setXY(i,c,u)}r.setAttribute("uv",n),n.needsUpdate=!0,r.attributes.uv2||r.setAttribute("uv2",n.clone())}function lu(r){const t=new un;t.name=r.id;const e=Jc[r.size];switch(r.kind){case"capsule":xv(t,e,r.id);break;case"tank":yv(t,e,r.size);break;case"engine":Mv(t,e,r.size);break;case"parachute":Sv(t,e);break;case"legs":bv(t,e);break;case"decoupler":Tv(t,e);break;case"heatshield":Ev(t,e);break;case"gltf":{if(r.gltfUrl&&vi.has(r.gltfUrl)){const n=r.gltfScale??1,i=vi.get(r.gltfUrl).clone();i.scale.setScalar(n);const s=new dn().setFromObject(i),o=new C;s.getCenter(o),i.position.sub(o);const a=[],l=[];i.traverse(c=>{if(c instanceof pt){const u=c.name.toLowerCase();if(u.includes("engine")||u.includes("nozzle")||u.includes("thruster")||u.includes("motor")||u.includes("combustion")||c.position.y<-.1){const f=new dn().setFromObject(c),m=new C;f.getCenter(m);const _=m.clone().sub(i.position);a.push(_),l.push(c)}c.castShadow=!0,c.receiveShadow=!0}}),i.userData.nozzlePoints=a,i.userData.engineMeshes=l,t.add(i)}else{const n=Jc[r.size],i=new xi(n.radius*2,n.height*.5,n.radius*2),s=new Me({color:8947882,roughness:.6,metalness:.2,transparent:!0,opacity:.5}),o=new pt(i,s);o.position.y=-n.height*.25,t.add(o)}break}}return t}function xv(r,t,e){const n=t.radius,i=t.height,s=e.includes("mk1"),o=fn(`capsule_${s?"mk1":"mk2"}`,fv),a=De(o),l=fn("gold",dr),c=De(l),u=new ue(n,n,i*.6,be);de(u);const h=new pt(u,a);h.position.y=i*.05,r.add(h);const d=new _e(n,be,be,0,Ye*2,0,Ye/2);de(d,.5);const f=new pt(d,a);f.position.y=i*.35,r.add(f);const m=new pt(new _e(n*.08,12,8),c);m.position.y=i*.35+n*.5,r.add(m);const _=s?14500932:30673,g=new Me({color:_,roughness:.6,metalness:.1}),p=new ue(n*1.04,n*1.04,i*.05,be);de(p),Ke(p,Ot*.008);const v=new pt(p,g);v.position.y=i*.05,r.add(v);const x=new ue(n*1.04,n*1.04,i*.03,be);de(x),Ke(x,Ot*.008);const S=new pt(x,g);S.position.y=-i*.15,r.add(S);const b=new ue(n*1.3,n*.95,i*.15,be);de(b),Ke(b,Ot*.01);const w=new pt(b,c);w.position.y=-i*.3-i*.075,r.add(w);const R=De(o,{color:1726856,roughness:.1,metalness:.8,transparent:!0,opacity:.3}),H=new pt(new Mo(n*.2,16),R);H.position.set(n+.001,i*.18,0),H.rotation.y=-Ye/2,r.add(H);const y=new xe({color:3381759,transparent:!0,opacity:.6}),E=new pt(new Rn(n*.2,n*.24,16),y);E.position.set(n+.001,i*.18,0),E.rotation.y=-Ye/2,r.add(E)}function yv(r,t,e){const n=t.radius,i=t.height,s=fn(`tank_${e}`,()=>dv(e)),o=De(s),a=fn("gold",dr),l=De(a),c=new ue(n,n,i,be);de(c);const u=new pt(c,o);r.add(u);const h=i*.03,d=new ue(n*1.03,n*1.03,h,be);de(d),Ke(d,Ot*.006);const f=new pt(d,l);f.position.y=i/2-h/2,r.add(f);const m=new ue(n*1.03,n*1.03,h,be);de(m),Ke(m,Ot*.006);const _=new pt(m,l);_.position.y=-i/2+h/2,r.add(_);for(let v=0;v<3;v++){const x=new ho(n*1.01,h*1.5,6,be);de(x),Ke(x,Ot*.005);const S=new pt(x,l);S.position.y=-i/2+i*.2*(v+1),S.rotation.x=Ye/2,r.add(S)}const g=new ho(n*1.02,h*1.2,6,be);de(g),Ke(g,Ot*.005);const p=new pt(g,l);p.position.y=0,p.rotation.x=Ye/2,r.add(p)}function Mv(r,t,e){const n=t.radius,i=t.height,s=fn(`engine_${e}`,pv),o=De(s),a=fn("gold",dr),l=De(a),c=new ue(n*1.4,n*.6,i*.25,be);de(c);const u=new pt(c,o);u.position.y=i*.35,r.add(u);const h=new ue(n*.6,n*.5,i*.06,be);de(h),Ke(h,Ot*.015);const d=new pt(h,l);d.position.y=i*.12,r.add(d);const f=new ue(n*.5,n*.85,i*.4,be);de(f,1.5),Ke(f,Ot*.01);const m=new pt(f,o);m.position.y=-i*.12,r.add(m);const _=De(s,{color:1712682,roughness:.7,metalness:.5}),g=new ue(n*.35,n*.7,i*.38,be);de(g,1.5),Ke(g,Ot*.012);const p=new pt(g,_);p.position.y=-i*.12,r.add(p);const v=new ue(n*.88,n*.88,i*.03,be);de(v),Ke(v,Ot*.008);const x=new pt(v,l);x.position.y=-i*.12-i*.2-i*.015,r.add(x);const S=new xe({color:16746496,transparent:!0,opacity:.4}),b=new pt(new Rn(0,n*.3,be),S);b.position.y=-i*.12-i*.2-i*.02,b.rotation.x=-Ye/2,r.add(b)}function Sv(r,t){const e=t.radius,n=t.height,i=fn("fabric",ou),s=fn("gold",dr),o=De(s),a=De(i,{color:8952234,roughness:.5,metalness:.1}),l=new ue(e*.35,e*.35,n*.18,12);de(l);const c=new pt(l,a);c.position.y=n*.55,r.add(c);const u=De(i,{color:6978186,roughness:.4,metalness:.2}),h=new ue(e*.37,e*.37,n*.03,12);de(h);const d=new pt(h,u);d.position.y=n*.55+n*.09,r.add(d);const f=new ue(e*.37,e*.37,n*.02,12);de(f);const m=new pt(f,o);m.position.y=n*.55-n*.09,r.add(m)}function ka(r){const t=new un,e=r.radius,n=r.height,i=24,s=fn("fabric",ou),o=De(s,{side:Re,transparent:!0,opacity:.95}),a=new _e(e*1.8,i,i,0,Ye*2,0,Ye*.5);de(a,.5);const l=new pt(a,o);l.position.y=n*.3,l.rotation.x=Ye,t.add(l);const c=De(s,{color:14500932,side:Re,transparent:!0,opacity:.9});for(let h=0;h<6;h++){const d=h/6*Ye*2,f=new xi(e*.03,n*.7,e*.015),m=new pt(f,c);m.position.set(Math.cos(d)*e*.9,n*.4,Math.sin(d)*e*.9),m.rotation.x=Ye,m.lookAt(0,n*.8,0),t.add(m)}const u=De(s,{color:6978186,roughness:.5,metalness:.4});for(let h=0;h<4;h++){const d=h/4*Ye*2+Ye/4;for(let f=0;f<3;f++){const m=new ue(.006,.006,n*.15,4);de(m);const _=new pt(m,u),g=d+(f-1)*.3;_.position.set(Math.cos(g)*e*1.5,n*.15-n*.06*f,Math.sin(g)*e*1.5),t.add(_)}}return t}function bv(r,t){const e=t.radius,n=t.height,i=fn("legs",mv),s=De(i),o=De(i,{color:2764066,roughness:.8,metalness:.2});for(let a=0;a<4;a++){const l=a/4*Ye*2+Ye/4,c=new ue(.01,.007,n*.35,6);de(c);const u=new pt(c,s),h=Math.cos(l)*e*.65,d=Math.sin(l)*e*.65;u.position.set(h,-n/2-n*.175,d),u.rotation.z=Math.cos(l)*.3,u.rotation.x=Math.sin(l)*.3,r.add(u);const f=new ue(.02,.025,.008,6);de(f);const m=new pt(f,o);m.position.set(Math.cos(l)*e*.95,-n/2-n*.35,Math.sin(l)*e*.95),r.add(m)}}function Tv(r,t){const e=t.radius,n=t.height,i=fn("decoupler",gv),s=De(i),o=fn("gold",dr),a=De(o),l=new ue(e*1.05,e*.92,n*.12,be);de(l),Ke(l,Ot*.008);const c=new pt(l,s);r.add(c);const u=new ue(e*1.08,e*1.08,n*.04,be);de(u),Ke(u,Ot*.005);const h=new pt(u,a);h.position.y=n*.06,r.add(h);const d=new ue(e*.92,e*.92,n*.04,be);de(d),Ke(d,Ot*.008);const f=new pt(d,s);f.position.y=-n*.06,r.add(f)}function Ev(r,t){const e=t.radius,n=t.height,i=fn("heatshield",_v),s=De(i),o=new ue(e*1.2,e*.8,n*.2,be,1,!0);de(o,.5),Ke(o,Ot*.012);const a=new pt(o,s);a.position.y=-n*.1,r.add(a);const l=new ue(e*.8,e*.8,n*.08,be);de(l),Ke(l,Ot*.01);const c=new pt(l,s);c.position.y=-n*.2,r.add(c)}const cu=Object.freeze(Object.defineProperty({__proto__:null,buildDeployedParachute:ka,buildPartMesh:lu,gltfCache:vi,gltfLoader:au,loadGLTF:vv},Symbol.toStringTag,{value:"Module"}));class uo{roots=[];addRoot(t){this.roots.push(t)}totalFuelCapacity(){let t=0;const e=n=>{n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}totalMass(){let t=0;const e=n=>{t+=n.part.mass,n.children.forEach(e)};return this.roots.forEach(e),t}totalMassWithFuel(){let t=0;const e=n=>{t+=n.part.mass,n.part.fuelCapacity&&(t+=n.part.fuelCapacity),n.children.forEach(e)};return this.roots.forEach(e),t}centerOfMass(){let t=0,e=0,n=0,i=0;const s=o=>{const a=o.part.mass;t+=a,e+=o.position[0]*a,n+=o.position[1]*a,i+=o.position[2]*a,o.children.forEach(s)};return this.roots.forEach(s),t===0?[0,0,0]:[e/t,n/t,i/t]}toMesh(){const t=new un,e=(i,s)=>{const o=lu(i.part);o.position.set(i.position[0],i.position[1],i.position[2]),o.rotation.y=i.rotation,s.add(o),i.children.forEach(a=>e(a,o))};this.roots.forEach(i=>e(i,t));const n=this.centerOfMass();for(const i of t.children)i.position.x-=n[0],i.position.y-=n[1],i.position.z-=n[2];return t}}const wv={S:.6*Ot,M:1*Ot,L:1.4*Ot,XL:2*Ot};function no(r,t,e){const n=eo(t);if(!n)return e;const i=wv[n.size]||.6*Ot;return r.addRoot({part:n,position:[0,e+i/2,0],rotation:0,children:[]}),e+i}const Av={tiny:{tank:"tank_s_lfo",engine:"engine_ant"},small:{tank:"tank_m_lfo",engine:"engine_vector"},medium:{tank:"tank_l_lfo",engine:"engine_mastodon"},large:{tank:"tank_xl_lfo",engine:"engine_mammoth"}};function Qc(r,t,e,n=[]){const i=Av[e];if(!i)return t;for(const s of[i.tank,i.engine,...n])t=no(r,s,t);return t}function Rv(r){const t=r.toLowerCase(),e=/sun|солн|heliocentric/.test(t),n=/mars|марс/.test(t),i=/venus|венер/.test(t),s=/mercury|меркур/.test(t),o=/moon|лун/.test(t),a=/orbit|орбит|station|станц|satellite|спутник/.test(t),l=/suborbit|суборбит|test|тест|hop|прыж/.test(t),c=/land|сади|посад|touchdown/.test(t)&&!/flyby|пролет/.test(t),u=/return|back|верн|обратн|round.?trip|there\s+and\s+back/.test(t)||o&&c||n&&c,h=u||/parachute|парашют|chute/.test(t)||!c,d=c||/legs|ноги|landing\s+gear/.test(t);let f=1,m="small";return l?(f=1,m="tiny"):a?(f=1,m="small"):o?(f=u?2:1,m="medium"):n||i?(f=u?3:2,m="large"):s?(f=2,m="medium"):e?(f=3,m="large"):/big|large|тяже|больш|huge|super|giant/.test(t)?(f=2,m="large"):/small|tiny|легк|малень/.test(t)?(f=1,m="tiny"):/safe|50%|half/.test(t)?(f=2,m="medium",f=2):(f=1,m="small"),/heavy|super|giant|тяжел/.test(t)&&m!=="large"&&(m=m==="tiny"?"small":"large"),/safe|50%|half\s+fuel/.test(t)&&(f=2,m="large"),{stages:f,stageSize:m,needsParachute:h,needsLegs:d,needsReturn:u}}function Cv(r){const t=new uo;let e=0;const n=r.stageSize,i=r.needsReturn?Math.max(1,r.stages-1):r.stages;for(let s=0;s<i;s++){const o=s===0?n:n==="large"&&s>0?"medium":n,a=[];s===0&&r.needsLegs&&a.push("legs_landini"),e=Qc(t,e,o,a)}return r.needsReturn&&r.stages>1&&(e=no(t,"decoupler_1",e),e=Qc(t,e,n==="large"?"small":"tiny")),e=no(t,"capsule_mk1",e),r.needsParachute&&(e=no(t,"parachute_mk16",e)),t}function Pv(r){const t=Rv(r);return Cv(t)}const Qs={S:.8*Ot,M:1.2*Ot,L:1.8*Ot,XL:2.5*Ot};class Lv{scene;camera;assembly;rocketGroup;rootEl;partListEl;currentRocketEl;onLaunch;stackHeight=0;addedPartNames=[];vabAzimuth=0;vabPolar=Math.PI/2;vabDist=3;vabIsDragging=!1;vabPrevMouse={x:0,y:0};vabTarget=new C(0,Ot,0);constructor(t){this.onLaunch=t,this.scene=new Vh,this.scene.background=new Dt(658714),this.scene.add(new nu(4473958,.5));const e=new cr(16777215,3);e.position.set(2,4,3),this.scene.add(e);const n=new cr(8947916,1);n.position.set(-2,1,-1),this.scene.add(n);const i=new tu(8947916,4473958,.8);this.scene.add(i);const s=10,o=20,a=new M_(s,o,3359846,2241365);a.position.y=-.3,this.scene.add(a);const l=new Rn(.5,.8,32),c=new Me({color:2241365,metalness:.6,roughness:.4,side:Re}),u=new pt(l,c);u.rotation.x=-Math.PI/2,u.position.y=-.28,this.scene.add(u),this.camera=new $e(50,window.innerWidth/window.innerHeight,.01,1e3),this.updateVabCamera();const h=Ot*4,d=new pt(new xi(h,.02*Ot,h),new Me({color:1843264,roughness:.9}));d.position.y=-Ot*.3,this.scene.add(d),this.assembly=new uo,this.rocketGroup=new un,this.scene.add(this.rocketGroup),this.setupVabOrbit(),this.rootEl=document.createElement("div"),this.rootEl.style.cssText="position:fixed;inset:0;z-index:150;pointer-events:none;display:flex;",this.rootEl.innerHTML=`
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
          <button id="vab-launch" style="width:100%;padding:10px;background:#EACD9E;color:#0A0C18;border:none;border-radius:4px;font-size:13px;cursor:pointer;letter-spacing:0.06em;">LAUNCH</button>
          <button id="vab-remove" style="width:100%;padding:8px;background:transparent;color:#F4F5F2;border:1px solid rgba(244,245,242,0.2);border-radius:4px;font-size:11px;cursor:pointer;margin-top:6px;letter-spacing:0.06em;">REMOVE LAST</button>
          <button id="vab-clear" style="width:100%;padding:8px;background:transparent;color:#F4F5F2;border:1px solid rgba(244,245,242,0.2);border-radius:4px;font-size:11px;cursor:pointer;margin-top:4px;letter-spacing:0.06em;">CLEAR ALL</button>
        </div>
      </div>
      <div style="flex:1;pointer-events:none;"></div>
    `,this.partListEl=this.rootEl.querySelector("#vab-parts"),this.currentRocketEl=this.rootEl.querySelector("#vab-current"),this.buildPartList(),this.buildPresets(),this.updateCurrentList(),this.rootEl.querySelector("#vab-launch").addEventListener("click",()=>{this.assembly.roots.length>0&&this.onLaunch(this.assembly)}),this.rootEl.querySelector("#vab-remove").addEventListener("click",()=>this.removeLast()),this.rootEl.querySelector("#vab-clear").addEventListener("click",()=>this.clearAll())}buildPresets(){const t=[{label:"🚀 Suborbital",desc:"suborbital test",color:"#6688aa"},{label:"🛸 Earth Orbit",desc:"earth orbit",color:"#4488FF"},{label:"🌙 Moon Landing",desc:"land on moon",color:"#88AACC"},{label:"🌙 Moon Return",desc:"land on moon and return",color:"#EACD9E"},{label:"🌙+🛡️ Moon Safe",desc:"safe moon landing and return with 50% fuel",color:"#66DD88"},{label:"🔴 Mars",desc:"mars mission",color:"#d4733a"},{label:"☀️ Solar Orbit",desc:"orbit around the sun",color:"#ffdd44"},{label:"🪐 Heavy Lifter",desc:"heavy interplanetary",color:"#CC88AA"}],e=this.rootEl.querySelector("#vab-presets");for(const n of t){const i=document.createElement("button");i.textContent=n.label,i.title=n.desc,i.style.cssText=`flex:1;min-width:80px;padding:5px 6px;background:rgba(244,245,242,0.06);color:${n.color};border:1px solid rgba(244,245,242,0.1);border-radius:3px;font-size:9px;cursor:pointer;pointer-events:auto;text-align:center;white-space:nowrap;`,i.addEventListener("mouseenter",()=>{i.style.background="rgba(244,245,242,0.12)"}),i.addEventListener("mouseleave",()=>{i.style.background="rgba(244,245,242,0.06)"}),i.addEventListener("click",()=>{this.clearAll(),this.assembly=Pv(n.desc),this.refreshMesh(),this.syncPartsFromAssembly()}),e.appendChild(i)}}buildPartList(){for(const t of iu){const e=document.createElement("button"),n=t.size?` [${t.size}]`:"";let i="";t.kind==="tank"&&t.fuelCapacity&&(i=` — ${(t.fuelCapacity/1e3).toFixed(0)}t`),t.kind==="engine"&&t.thrust&&(i=` — ${t.thrust}kN`),e.textContent=t.name+n+i,e.title=`${t.kind} — mass: ${t.mass}kg${t.fuelCapacity?", fuel: "+t.fuelCapacity+"kg":""}${t.thrust?", thrust: "+t.thrust+"kN":""}`,e.style.cssText="display:block;width:100%;padding:6px 8px;background:transparent;color:#F4F5F2;border:none;border-radius:3px;font-size:11px;text-align:left;cursor:pointer;margin-bottom:2px;",e.addEventListener("mouseenter",()=>{e.style.background="rgba(234,205,158,0.1)"}),e.addEventListener("mouseleave",()=>{e.style.background="transparent"}),e.addEventListener("click",()=>this.addPart(t)),this.partListEl.appendChild(e)}}addPart(t){const e=Qs[t.size]||.6*Ot,n=this.stackHeight+e/2;this.assembly.addRoot({part:t,position:[0,n,0],rotation:0,children:[]}),this.stackHeight+=e,this.addedPartNames.push(t.name),this.refreshMesh(),this.updateCurrentList()}removeLast(){if(this.assembly.roots.length===0)return;const t=this.assembly.roots.pop(),e=Qs[t.part.size]||.6*Ot;this.stackHeight-=e,this.addedPartNames.pop(),this.refreshMesh(),this.updateCurrentList()}clearAll(){this.assembly=new uo,this.stackHeight=0,this.addedPartNames=[],this.refreshMesh(),this.updateCurrentList()}updateCurrentList(){if(this.addedPartNames.length===0){this.currentRocketEl.innerHTML='<div style="color:rgba(244,245,242,0.3);font-size:10px;font-style:italic;">No parts — click from list below</div>';return}const t=this.assembly.roots.reduce((n,i)=>n+i.part.mass+this.childMass(i),0),e=this.assembly.roots.reduce((n,i)=>n+(i.part.fuelCapacity??0)+this.childFuel(i),0);this.currentRocketEl.innerHTML='<div style="color:rgba(244,245,242,0.4);font-size:9px;letter-spacing:0.05em;margin-bottom:4px;">CURRENT ROCKET (top to bottom):</div>'+[...this.addedPartNames].reverse().map((n,i)=>`<div style="color:#F4F5F2;font-size:10px;padding:1px 0;${i===0?"color:#EACD9E;":""}">${i===0?"▲ ":""}${n}</div>`).join("")+`<div style="color:rgba(244,245,242,0.35);font-size:9px;margin-top:6px;border-top:1px solid rgba(244,245,242,0.1);padding-top:4px;">${this.addedPartNames.length} parts | ${t.toFixed(1)}kg | ${e.toFixed(0)}kg fuel</div>`}childMass(t){return t.children.reduce((e,n)=>e+n.part.mass+this.childMass(n),0)}childFuel(t){return t.children.reduce((e,n)=>e+(n.part.fuelCapacity??0)+this.childFuel(n),0)}updateVabCamera(){const t=this.vabDist*Math.sin(this.vabPolar)*Math.cos(this.vabAzimuth),e=this.vabDist*Math.cos(this.vabPolar),n=this.vabDist*Math.sin(this.vabPolar)*Math.sin(this.vabAzimuth);this.camera.position.set(this.vabTarget.x+t,this.vabTarget.y+e,this.vabTarget.z+n),this.camera.lookAt(this.vabTarget)}setupVabOrbit(){const t=e=>{e.button===0&&(this.vabIsDragging=!0,this.vabPrevMouse={x:e.clientX,y:e.clientY})};document.addEventListener("mousedown",t),document.addEventListener("mousemove",e=>{if(!this.vabIsDragging)return;const n=e.clientX-this.vabPrevMouse.x,i=e.clientY-this.vabPrevMouse.y;this.vabAzimuth-=n*.005,this.vabPolar=Math.max(.05,Math.min(Math.PI-.05,this.vabPolar+i*.005)),this.vabPrevMouse={x:e.clientX,y:e.clientY},this.updateVabCamera()}),document.addEventListener("mouseup",()=>{this.vabIsDragging=!1}),document.addEventListener("wheel",e=>{this.vabDist*=e.deltaY>0?1.1:.9,this.vabDist=Math.max(.5,Math.min(50,this.vabDist)),this.updateVabCamera()},{passive:!0})}async refreshMesh(){for(;this.rocketGroup.children.length>0;){const t=this.rocketGroup.children[0];t&&this.rocketGroup.remove(t)}if(this.assembly.roots.length>0){if(!this.rootEl.querySelector(".vab-name-input")){const c=document.createElement("div");c.className="vab-name-row",c.style.cssText="padding:4px 0;margin-bottom:6px;",c.innerHTML=`
          <input type="text" class="vab-name-input" placeholder="Name your rocket..."
            style="width:100%;background:rgba(244,245,242,0.08);border:1px solid rgba(244,245,242,0.15);
            border-radius:4px;padding:6px 8px;color:#F4F5F2;font-size:11px;font-family:system-ui,sans-serif;
            outline:none;box-sizing:border-box;" maxlength="30"
          />
        `,this.currentRocketEl.parentElement?.insertBefore(c,this.currentRocketEl)}if(this.assembly.roots.some(c=>c.part.kind==="gltf"&&c.part.gltfUrl&&!vi.has(c.part.gltfUrl))){const{loadGLTF:c}=await hh(async()=>{const{loadGLTF:u}=await Promise.resolve().then(()=>cu);return{loadGLTF:u}},void 0);for(const u of this.assembly.roots)u.part.kind==="gltf"&&u.part.gltfUrl&&!vi.has(u.part.gltfUrl)&&(await c(u.part.gltfUrl,u.part.gltfScale??1)||console.warn("GLTF load failed, using placeholder for:",u.part.name))}const e=this.assembly.toMesh();e.traverse(c=>{if(c instanceof pt&&c.material){c.visible=!0;const u=c.material;Array.isArray(u)||(u.transparent=!1,u.opacity=1,u.depthWrite=!0,u.depthTest=!0)}}),this.rocketGroup.add(e);let n=0;for(const c of this.assembly.roots){const u=(d,f)=>{if(d.part.kind==="decoupler"){const _=new Rn(.15,.25,16),g=new xe({color:16737860,side:Re,transparent:!0,opacity:.5}),p=new pt(_,g);p.position.set(0,f,0),p.rotation.x=-Math.PI/2,this.rocketGroup.add(p)}const m=Qs[d.part.size]||.6*Ot;for(const _ of d.children)u(_,f-m)},h=Qs[c.part.size]||.6*Ot;u(c,n+h/2),n+=h}const i=new dn().setFromObject(this.rocketGroup),s=i.getSize(new C),o=i.getCenter(new C),a=Math.max(s.x,s.y,s.z,.1),l=a*3.5;this.camera.position.set(o.x,o.y+a*.5,o.z+l),this.camera.lookAt(o.x,o.y,o.z),this.camera.updateProjectionMatrix()}}syncPartsFromAssembly(){this.addedPartNames=[],this.stackHeight=0;const t=(e,n)=>{for(const i of e){this.addedPartNames.push(i.part.name);const s=Qs[i.part.size]||.6*Ot;this.stackHeight+=s,t(i.children)}};t(this.assembly.roots),this.updateCurrentList()}mount(){document.body.appendChild(this.rootEl)}unmount(){this.rootEl.remove()}}class tl{name;mass;position;velocity;constructor(t,e,n,i){this.name=t,this.mass=e,this.position=[...n],this.velocity=[...i]}applyForce(t,e){const n=t[0]/this.mass,i=t[1]/this.mass,s=t[2]/this.mass;this.velocity[0]+=n*e,this.velocity[1]+=i*e,this.velocity[2]+=s*e,this.position[0]+=this.velocity[0]*e,this.position[1]+=this.velocity[1]*e,this.position[2]+=this.velocity[2]*e}kineticEnergy(){const t=this.velocity[0]**2+this.velocity[1]**2+this.velocity[2]**2;return .5*this.mass*t}}class Iv{rocket;system;position;velocity;throttle=0;constructor(t,e,n,i){this.rocket=t,this.system=e,this.position=[...n],this.velocity=[...i]}consumeFuel(t,e){this.rocket.consumeFuel(t,e)}}const vs=jn*$n,pa=.5,ma=200,Vr=4,Xr=3,th=2;class Dv{camera;dist=2.5;targetDist=2.5;azimuth=0;targetAzimuth=0;polar=Math.PI/2;targetPolar=Math.PI/2;isDragging=!1;prevMouse={x:0,y:0};canvas=null;smoothPos=new C;initialized=!1;orbitKeys={left:!1,right:!1,up:!1,down:!1};zoomKeys={in:!1,out:!1};constructor(t){this.camera=t,this.setupKeyboard()}setupKeyboard(){window.addEventListener("keydown",t=>{if(t.shiftKey)switch(t.key){case"ArrowLeft":this.orbitKeys.left=!0,t.preventDefault();break;case"ArrowRight":this.orbitKeys.right=!0,t.preventDefault();break;case"ArrowUp":this.orbitKeys.up=!0,t.preventDefault();break;case"ArrowDown":this.orbitKeys.down=!0,t.preventDefault();break}(t.key==="z"||t.key==="Z")&&(this.zoomKeys.in=!0),(t.key==="x"||t.key==="X")&&(this.zoomKeys.out=!0)}),window.addEventListener("keyup",t=>{switch(t.key){case"ArrowLeft":this.orbitKeys.left=!1;break;case"ArrowRight":this.orbitKeys.right=!1;break;case"ArrowUp":this.orbitKeys.up=!1;break;case"ArrowDown":this.orbitKeys.down=!1;break;case"z":case"Z":this.zoomKeys.in=!1;break;case"x":case"X":this.zoomKeys.out=!1;break}})}initialiseAt(t,e,n){const i=t.position[0]*vs,s=t.position[1]*vs,o=t.position[2]*vs,a=new C(i,s,o),l=this.targetDist*Math.sin(this.polar)*Math.cos(this.azimuth),c=this.targetDist*Math.cos(this.polar),u=this.targetDist*Math.sin(this.polar)*Math.sin(this.azimuth);this.camera.position.set(i+l,s+c,o+u),this.camera.up.set(0,1,0),this.camera.lookAt(a)}setAzimuth(t){this.azimuth=t,this.targetAzimuth=t}setPolar(t){this.polar=t,this.targetPolar=t}zoom(t){this.targetDist*=t,this.targetDist=Math.max(pa,Math.min(ma,this.targetDist))}enableOrbit(t){this.canvas=t,t.addEventListener("mousedown",e=>{e.button===0&&(this.isDragging=!0,this.prevMouse={x:e.clientX,y:e.clientY})}),window.addEventListener("mousemove",e=>{if(!this.isDragging)return;const n=e.clientX-this.prevMouse.x,i=e.clientY-this.prevMouse.y;this.targetAzimuth-=n*.005,this.targetPolar=Math.max(.05,Math.min(Math.PI-.05,this.targetPolar+i*.005)),this.prevMouse={x:e.clientX,y:e.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),t.addEventListener("wheel",e=>{e.preventDefault(),this.targetDist*=e.deltaY>0?1.1:.9,this.targetDist=Math.max(pa,Math.min(ma,this.targetDist))},{passive:!1})}follow(t,e,n,i=!1){const s=t.position[0]*vs,o=t.position[1]*vs,a=t.position[2]*vs,l=new C(s,o,a);this.orbitKeys.left&&(this.targetAzimuth+=e*Xr),this.orbitKeys.right&&(this.targetAzimuth-=e*Xr),this.orbitKeys.up&&(this.targetPolar=Math.max(.05,this.targetPolar-e*Xr*.5)),this.orbitKeys.down&&(this.targetPolar=Math.min(Math.PI-.05,this.targetPolar+e*Xr*.5)),this.zoomKeys.in&&(this.targetDist=Math.max(pa,this.targetDist*(1-e*th))),this.zoomKeys.out&&(this.targetDist=Math.min(ma,this.targetDist*(1+e*th))),this.dist+=(this.targetDist-this.dist)*Math.min(1,Vr*e),this.azimuth+=(this.targetAzimuth-this.azimuth)*Math.min(1,Vr*e*.5),this.polar+=(this.targetPolar-this.polar)*Math.min(1,Vr*e*.5);const c=this.dist*Math.sin(this.polar)*Math.cos(this.azimuth),u=this.dist*Math.cos(this.polar),h=this.dist*Math.sin(this.polar)*Math.sin(this.azimuth),d=new C(s+c,o+u,a+h),f=new C(0,1,0);if(this.initialized||(this.smoothPos.copy(d),this.initialized=!0),i)this.smoothPos.copy(d);else{const _=Math.min(1,Vr*e);this.smoothPos.lerp(d,_)}this.camera.position.copy(this.smoothPos);const m=Math.abs(this.polar)<.1?new C(0,0,1):Math.abs(this.polar-Math.PI)<.1?new C(0,0,-1):f;this.camera.up.copy(m),this.camera.lookAt(l)}reset(){this.targetDist=2.5,this.dist=2.5,this.targetAzimuth=0,this.azimuth=0,this.targetPolar=Math.PI/2,this.polar=Math.PI/2}}class Uv{container;active=!1;keys=new Set;stagePressed=!1;pauseToggle=!1;visible=!1;constructor(){this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,e.appendChild(n);let i=null;const s={x:0,y:0},o={x:0,y:0},a=(D,N)=>{const K=e.getBoundingClientRect();s.x=K.left+K.width/2,s.y=K.top+K.height/2,o.x=D,o.y=N,this.updateStick(n,s,o)},l=(D,N)=>{o.x=D,o.y=N,this.updateStick(n,s,o);const K=(D-s.x)/60,I=(N-s.y)/60,U=Math.max(-1,Math.min(1,K)),k=Math.max(-1,Math.min(1,I));k>.3?(this.keys.add("touch-up"),this.keys.delete("touch-down")):k<-.3?(this.keys.add("touch-down"),this.keys.delete("touch-up")):(this.keys.delete("touch-up"),this.keys.delete("touch-down")),U>.3?(this.keys.add("touch-right"),this.keys.delete("touch-left")):U<-.3?(this.keys.add("touch-left"),this.keys.delete("touch-right")):(this.keys.delete("touch-left"),this.keys.delete("touch-right"))},c=()=>{i=null,n.style.transform="translate(-50%, -50%)",this.keys.delete("touch-up"),this.keys.delete("touch-down"),this.keys.delete("touch-left"),this.keys.delete("touch-right")};e.addEventListener("touchstart",D=>{if(D.preventDefault(),i!==null)return;const N=D.changedTouches[0];i=N.identifier,a(N.clientX,N.clientY)},{passive:!1}),e.addEventListener("touchmove",D=>{D.preventDefault();for(let N=0;N<D.changedTouches.length;N++)D.changedTouches[N].identifier===i&&l(D.changedTouches[N].clientX,D.changedTouches[N].clientY)},{passive:!1}),e.addEventListener("touchend",D=>{for(let N=0;N<D.changedTouches.length;N++)D.changedTouches[N].identifier===i&&c()}),e.addEventListener("touchcancel",c),t.appendChild(e);const u=document.createElement("div");u.style.cssText=`
      position: absolute; bottom: 20px; right: 20px; display: flex;
      flex-direction: column; gap: 8px; align-items: flex-end;
    `;const h=(D,N=70,K=50)=>{const I=document.createElement("div");I.style.cssText="pointer-events: auto; position: relative;";const U=document.createElement("button");return U.textContent=D,U.style.cssText=`
        width: ${N}px; height: ${K}px; border-radius: 12px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: white; font: 600 14px/1 monospace; cursor: pointer;
        touch-action: none; user-select: none;
      `,I.appendChild(U),[U,I]},[d,f]=h("THR+",70,44),[m,_]=h("THR-",70,44),[g,p]=h("STAGE",70,44),[v,x]=h("R-",60,44),[S,b]=h("R+",60,44),w=(D,N)=>{this.keys.add(D),N.style.background="rgba(255,255,255,0.3)"},R=(D,N)=>{this.keys.delete(D),N.style.background="rgba(255,255,255,0.1)"},H=(D,N)=>{D.addEventListener("touchstart",K=>{K.preventDefault(),w(N,D)},{passive:!1}),D.addEventListener("touchend",K=>{K.preventDefault(),R(N,D)},{passive:!1}),D.addEventListener("touchcancel",()=>R(N,D)),D.addEventListener("mousedown",()=>w(N,D)),D.addEventListener("mouseup",()=>R(N,D)),D.addEventListener("mouseleave",()=>R(N,D))};H(d,"w"),H(m,"s"),H(v,"a"),H(S,"d"),g.addEventListener("touchstart",D=>{D.preventDefault(),this.stagePressed=!0},{passive:!1}),g.addEventListener("mousedown",()=>{this.stagePressed=!0});const y=document.createElement("div");y.style.cssText="display:flex; gap:8px;",y.appendChild(f),y.appendChild(p),u.appendChild(y);const E=document.createElement("div");E.style.cssText="display:flex; gap:8px;",E.appendChild(_),E.appendChild(x),E.appendChild(b),u.appendChild(E),t.appendChild(u)}updateStick(t,e,n){const i=n.x-e.x,s=n.y-e.y,o=60,a=Math.sqrt(i*i+s*s),l=Math.min(a,o),c=Math.atan2(s,i),u=Math.cos(c)*l,h=Math.sin(c)*l;t.style.transform=`translate(calc(-50% + ${u}px), calc(-50% + ${h}px))`}show(){this.visible||(this.visible=!0,this.container.style.display="block")}hide(){this.visible=!1,this.container.style.display="none"}isVisible(){return this.visible}getPitch(){let t=0;return this.keys.has("touch-up")&&(t=1),this.keys.has("touch-down")&&(t=-1),t}getYaw(){let t=0;return this.keys.has("touch-right")&&(t=1),this.keys.has("touch-left")&&(t=-1),t}getRoll(){let t=0;return this.keys.has("a")&&(t=1),this.keys.has("d")&&(t=-1),t}getThrottleUp(){return this.keys.has("w")}getThrottleDown(){return this.keys.has("s")}getStageRequested(){const t=this.stagePressed;return this.stagePressed=!1,t}dispose(){document.body.removeChild(this.container)}}class Nv{keys=new Set;stagePressed=!1;pauseToggle=!1;throttleLimiter=1;state;touch=null;constructor(t){this.state=t,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.key.toLowerCase()),e.key===" "&&(this.stagePressed=!0),e.key==="Escape"&&(this.pauseToggle=!0),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(e.key.toLowerCase())&&e.preventDefault())}),window.addEventListener("keyup",e=>{this.keys.delete(e.key.toLowerCase())})}enableTouch(){this.touch||(this.touch=new Uv),this.touch.show()}disableTouch(){this.touch&&this.touch.hide()}update(t){const e=this.touch?.getThrottleUp()||this.keys.has("w"),n=this.touch?.getThrottleDown()||this.keys.has("s");e&&(this.state.throttle=Math.min(1,this.state.throttle+t*.3)),n&&(this.state.throttle=Math.max(0,this.state.throttle-t*.3))}getPitch(){let t=0;return(this.keys.has("arrowup")||this.touch?.getPitch()===1)&&(t=1),(this.keys.has("arrowdown")||this.touch?.getPitch()===-1)&&(t=-1),t}getYaw(){let t=0;return(this.keys.has("arrowleft")||this.touch?.getYaw()===1)&&(t=1),(this.keys.has("arrowright")||this.touch?.getYaw()===-1)&&(t=-1),t}getRoll(){let t=0;return(this.keys.has("a")||this.touch?.getRoll()===1)&&(t=1),(this.keys.has("d")||this.touch?.getRoll()===-1)&&(t=-1),t}getZoomIn(){return this.keys.has("z")}getZoomOut(){return this.keys.has("x")}getStageRequested(){const t=this.stagePressed||!!this.touch?.getStageRequested();return this.stagePressed=!1,t}consumePauseToggle(){const t=this.pauseToggle;return this.pauseToggle=!1,t}dispose(){this.touch?.dispose(),this.touch=null}}function qe(r,t){const e=t.bodyByName("sun");let n=e,i=0;for(const s of t.bodies){if(s.name==="sun")continue;const o=s;let a=e,l=e.position;if(o.parentBody)a=o.parentBody,l=a.position;else if(s.name==="moon"){const x=t.bodyByName("earth");x&&(a=x,l=x.position)}const c=s.position[0]-r[0],u=s.position[1]-r[1],h=s.position[2]-r[2],d=c*c+u*u+h*h,f=Math.sqrt(d),m=s.position[0]-l[0],_=s.position[1]-l[1],g=s.position[2]-l[2],v=Math.sqrt(m*m+_*_+g*g)*Math.pow(s.mass/a.mass,.4);if(f<v){const x=Es*s.mass/d;x>i&&(i=x,n=s)}}return n}function Fv(r,t,e){if(r.throttle<=0)return;const n=zi(r.rocket.assembly.roots);if(!n||!n.thrust||!n.isp)return;const i=n.thrust*1e3*r.throttle,s=i/(n.isp*ov),o=e??[0,1,0],a=i*o[0]/r.rocket.totalMass(),l=i*o[1]/r.rocket.totalMass(),c=i*o[2]/r.rocket.totalMass();r.velocity[0]+=a*t,r.velocity[1]+=l*t,r.velocity[2]+=c*t,r.consumeFuel(s,t)}function zi(r){for(const t of r){if(t.part.kind==="engine"&&t.part.thrust&&t.part.isp)return{thrust:t.part.thrust,isp:t.part.isp};if(t.children?.length){const e=zi(t.children);if(e)return e}}return null}class Ov{root;speedVal;speedUnit;vsVal;altVal;altUnit;angleVal;fuelFill;fuelPct;throtFill;throtPct;heatFill;heatPct;gforceVal;stageVal;apeVal;peVal;twrVal;ttaVal;ttpVal;timeVal;dvVal;ispVal;burnVal;recVal;pauseOverlay;navballCanvas;navballCtx;onAction=null;constructor(){this.root=document.createElement("div"),this.root.className="hud-panel",this.root.style.cssText="position:fixed;top:16px;left:16px;z-index:100;min-width:180px;",this.pauseOverlay=document.createElement("div"),this.pauseOverlay.style.cssText="position:fixed;inset:0;z-index:500;background:rgba(6,8,20,0.85);display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:12px;",this.pauseOverlay.innerHTML=`
      <div style="width:280px;display:flex;flex-direction:column;gap:8px;align-items:center;">
        <button class="btn btn--primary pause-btn" data-action="resume" style="width:100%;padding:14px;font-size:16px;text-align:center;">▶ RESUME</button>
        <button class="btn btn--secondary pause-btn" data-action="menu" style="width:100%;padding:14px;font-size:16px;text-align:center;">MENU</button>
        <button class="btn btn--danger pause-btn" data-action="restart" style="width:100%;padding:14px;font-size:16px;text-align:center;">🔄 RESTART</button>
      </div>
    `,document.body.appendChild(this.pauseOverlay),this.pauseOverlay.querySelectorAll(".pause-btn").forEach(t=>{t.addEventListener("click",e=>{this.onAction&&this.onAction(e.target.dataset.action)})})}mount(t=document.body){this.root.innerHTML=`
      <div class="hud-row"><span class="hud-label">Velocity</span><span class="hud-value"><span class="speed-val">0</span> <span class="speed-unit" style="font-size:11px;color:var(--text-muted);">m/s</span></span></div>
      <div class="hud-row"><span class="hud-label">V/S</span><span class="hud-value"><span class="vs-val" style="color:#44FF44;">0</span> <span style="font-size:11px;color:var(--text-muted);">m/s</span></span></div>
      <div class="hud-row"><span class="hud-label">Altitude</span><span class="hud-value"><span class="alt-val">0</span> <span class="alt-unit" style="font-size:11px;color:var(--text-muted);">m</span></span></div>
      <div class="hud-row"><span class="hud-label">Angle</span><span class="hud-value"><span class="angle-val">0</span><span style="font-size:11px;color:var(--text-muted);">°</span></span></div>
      <div class="hud-row"><span class="hud-label">G-Force</span><span class="hud-value"><span class="gforce-val" style="color:#88CCFF;">1.0</span><span style="font-size:11px;color:var(--text-muted);">G</span></span></div>
      <div class="hud-row"><span class="hud-label">Warp</span><span class="hud-value"><span class="warp-val" style="color:var(--accent-gold);">x1</span></span></div>
      <div class="separator"></div>
      <div style="display:flex;flex-direction:column;gap:var(--space-1);">
        <div class="hud-row"><span class="hud-label">Fuel</span><span class="text-data-sm fuel-pct">0%</span></div>
        <div class="data-bar"><span class="data-bar__track"><span class="data-bar__fill data-bar__fill--fuel fuel-fill" style="width:0%;"></span></span></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-1);">
        <div class="hud-row"><span class="hud-label">Heat</span><span class="text-data-sm heat-pct">0%</span></div>
        <div class="data-bar"><span class="data-bar__track"><span class="data-bar__fill data-bar__fill--heat heat-fill" style="width:0%;"></span></span></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--space-1);">
        <div class="hud-row"><span class="hud-label">Throttle</span><span class="text-data-sm throt-pct">0%</span></div>
        <div class="data-bar"><span class="data-bar__track"><span class="data-bar__fill data-bar__fill--throttle throt-fill" style="width:0%;"></span></span></div>
      </div>
      <div class="separator"></div>
      <div class="hud-row"><span class="hud-label">TWR</span><span class="hud-value twr-val" style="color:#88CCFF;">—</span></div>
      <div class="hud-row"><span class="hud-label">Δv</span><span class="hud-value dv-val" style="font-size:9px;color:#88CCFF;">—</span></div>
      <div class="hud-row"><span class="hud-label">SOI</span><span class="hud-value soi-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row"><span class="hud-label">Isp</span><span class="hud-value isp-val" style="font-size:9px;color:#88CCFF;">—</span></div>
      <div class="hud-row"><span class="hud-label">Burn</span><span class="hud-value burn-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row gforce-row"><span class="hud-label">G</span><span class="hud-value gforce-val" style="color:#88CCFF;">1.00</span></div>
      <div class="hud-row"><span class="hud-label">Stage</span><span class="hud-value stage-val" style="color:var(--accent-gold);">1</span></div>
      <div class="hud-row"><span class="hud-label">Time</span><span class="hud-value time-val" style="font-size:9px;color:#aaaacc;">T+00:00</span></div>
      <div class="hud-row"><span class="hud-label">SAS</span><span class="hud-value sas-val" style="font-size:9px;color:#666688;">OFF</span></div>
      <div class="hud-row"><span class="hud-label">Ap/Pe</span><span class="hud-value" style="font-size:9px;"><span class="ape-val" style="color:#FF8844;">—</span> / <span class="pe-val" style="color:#44DD88;">—</span></span></div>
      <div class="hud-row"><span class="hud-label">Ecc</span><span class="hud-value ecc-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row"><span class="hud-label">Period</span><span class="hud-value period-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row"><span class="hud-label">Record</span><span class="hud-value rec-val" style="font-size:9px;color:#EACD9E;">—</span></div>
      <div class="hud-row"><span class="hud-label">Q</span><span class="hud-value q-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row"><span class="hud-label">Impact</span><span class="hud-value impact-val" style="font-size:9px;color:#CCCC44;">—</span></div>
      <div class="hud-row"><span class="hud-label">Debris</span><span class="hud-value debris-val" style="font-size:9px;color:#FF8844;">0</span></div>
      <div class="hud-row"><span class="hud-label">T to Ap</span><span class="hud-value tta-val" style="font-size:9px;color:#FF8844;">—</span></div>
      <div class="hud-row"><span class="hud-label">T to Pe</span><span class="hud-value ttp-val" style="font-size:9px;color:#44DD88;">—</span></div>
      <div class="hud-row"><span class="hud-label">Heading</span><span class="hud-value hdg-val" style="font-size:9px;color:#88CCFF;">—</span></div>
      <div class="hud-row"><span class="hud-label">AoA</span><span class="hud-value aoa-val" style="font-size:9px;color:#FF8844;">—</span></div>
      <div class="hud-row"><span class="hud-label">Lat</span><span class="hud-value lat-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row"><span class="hud-label">Lon</span><span class="hud-value lon-val" style="font-size:9px;color:#aaaacc;">—</span></div>
      <div class="hud-row"><span class="hud-label">Mach</span><span class="hud-value mach-val" style="font-size:9px;color:#FF8844;">—</span></div>
      <div class="btn-bar">
        <button class="btn btn--action" data-action="stage">STAGE</button>
        <button class="btn btn--action" data-action="parachute">CHUTE</button>
        <button class="btn btn--action" data-action="map">MAP</button>
      </div>
      <div style="color:rgba(244,245,242,0.35);font-size:9px;letter-spacing:0.05em;">W/S Throttle | ↑↓ Pitch | ←→ Yaw | Space Stage | Esc Pause</div>
      <div style="color:rgba(244,245,242,0.2);font-size:8px;letter-spacing:0.03em;margin-top:4px;">🖱 Drag orbit | Shift+←→ orbit | Scroll zoom | M Map</div>
    `,t.appendChild(this.root),this.speedVal=this.root.querySelector(".speed-val"),this.speedUnit=this.root.querySelector(".speed-unit"),this.vsVal=this.root.querySelector(".vs-val"),this.altVal=this.root.querySelector(".alt-val"),this.altUnit=this.root.querySelector(".alt-unit"),this.angleVal=this.root.querySelector(".angle-val"),this.fuelFill=this.root.querySelector(".fuel-fill"),this.fuelPct=this.root.querySelector(".fuel-pct"),this.throtFill=this.root.querySelector(".throt-fill"),this.throtPct=this.root.querySelector(".throt-pct"),this.heatFill=this.root.querySelector(".heat-fill"),this.heatPct=this.root.querySelector(".heat-pct"),this.gforceVal=this.root.querySelector(".gforce-val"),this.stageVal=this.root.querySelector(".stage-val"),this.apeVal=this.root.querySelector(".ape-val"),this.peVal=this.root.querySelector(".pe-val"),this.twrVal=this.root.querySelector(".twr-val"),this.ttaVal=this.root.querySelector(".tta-val"),this.ttpVal=this.root.querySelector(".ttp-val"),this.timeVal=this.root.querySelector(".time-val"),this.dvVal=this.root.querySelector(".dv-val"),this.ispVal=this.root.querySelector(".isp-val"),this.burnVal=this.root.querySelector(".burn-val"),this.recVal=this.root.querySelector(".rec-val"),this.root.addEventListener("click",i=>{const s=i.target.closest("[data-action]");s&&this.onAction&&this.onAction(s.dataset.action)});const e=document.createElement("div");e.className="navball-container",e.style.cssText="position:fixed;bottom:20px;right:20px;z-index:100;";const n=document.createElement("canvas");n.width=160,n.height=160,n.style.cssText="width:160px;height:160px;border-radius:80px;opacity:0.85;",e.appendChild(n),t.appendChild(e),this.navballCanvas=n,this.navballCtx=n.getContext("2d")}setWarpLabel(t){const e=this.root.querySelector(".warp-val");e&&(e.textContent=t)}setDeltaV(t){this.dvVal.textContent=t>=0?`${t.toFixed(0)} m/s`:"—",this.dvVal.style.color=t>500?"#44FF44":t>100?"#FFAA44":"#FF4444"}setIsp(t){this.ispVal.textContent=t>0?`${t.toFixed(0)}s`:"—"}setRecord(t){this.recVal.textContent=t}setSAS(t){const e=this.root.querySelector(".sas-val");e&&(t==="off"?(e.textContent="OFF",e.style.color="#666688"):t==="prograde"?(e.textContent="PRG",e.style.color="#44FF44"):t==="retrograde"?(e.textContent="RET",e.style.color="#FF6644"):(e.textContent="HLD",e.style.color="#44AAFF"))}setVisible(t){this.root.style.display=t?"":"none"}setGForce(t){this.gforceVal.textContent=t.toFixed(2),t>5?this.gforceVal.style.color="#FF4444":t>3?this.gforceVal.style.color="#FFAA44":this.gforceVal.style.color="#88CCFF"}setGForceEnabled(t){this.root.querySelector(".gforce-row")?.style.setProperty("display",t?"":"none")}setDebris(t){const e=this.root.querySelector(".debris-val");e&&(e.textContent=t.toString())}setHeading(t){const e=this.root.querySelector(".hdg-val");e&&(e.textContent=`${t.toFixed(0)}°`)}setAoA(t){const e=this.root.querySelector(".aoa-val");e&&(e.textContent=`${t.toFixed(1)}°`)}setLatLon(t,e){const n=this.root.querySelector(".lat-val"),i=this.root.querySelector(".lon-val");n&&(n.textContent=`${t.toFixed(2)}°${t>=0?"N":"S"}`),i&&(i.textContent=`${e.toFixed(2)}°${e>=0?"E":"W"}`)}setMach(t){const e=this.root.querySelector(".mach-val");e&&(e.textContent=t.toFixed(2))}setTWR(t){this.twrVal.textContent=t.toFixed(2),this.twrVal.style.color=t>1.1?"#44CC88":t>.8?"#FFAA44":"#FF4444"}setPaused(t){this.pauseOverlay.style.display=t?"flex":"none";const e=this.root.querySelector(".warp-val");e&&(e.style.opacity=t?"0.5":"1")}setNavballData(t,e,n,i,s){const o=this.navballCtx,a=160,l=160,c=80,u=80,h=75;o.clearRect(0,0,a,l),o.beginPath(),o.arc(c,u,h+2,0,Math.PI*2),o.fillStyle="#0a0a1a",o.fill();const f=(n[0]*t[0]+n[1]*t[1]+n[2]*t[2])*h;o.save(),o.beginPath(),o.arc(c,u,h,0,Math.PI*2),o.clip(),o.fillStyle="#2244aa",o.fillRect(c-h,u-h-f,h*2,h+f),o.fillStyle="#885522",o.fillRect(c-h,u-f,h*2,h+f);for(let b=-80;b<=80;b+=10){const w=u-Math.sin(b*Math.PI/180)*h;o.beginPath();const R=b===0?30:b%20===0?22:14;o.moveTo(c-R,w),o.lineTo(c+R,w),o.strokeStyle=b===0?"#FFCC44":"rgba(255,255,255,0.3)",o.lineWidth=b===0?1.5:.7,o.stroke(),b%20===0&&(o.fillStyle="rgba(255,255,255,0.5)",o.font="8px sans-serif",o.fillText(`${Math.abs(b)}`,c+R+3,w+3))}o.beginPath(),o.moveTo(c-h,u-f),o.lineTo(c+h,u-f),o.strokeStyle="#ffffff",o.lineWidth=1.5,o.stroke();const m=b=>{const w=Math.sqrt(b[0]**2+b[1]**2+b[2]**2)||1,R=b[0]/w,H=b[1]/w,y=b[2]/w,E=R*t[0]+H*t[1]+y*t[2],D=R-t[0]*E,N=H-t[1]*E,K=Math.sqrt(D*D+N*N)||1;return{x:c+D/K*h*.78,y:u-N/K*h*.78,inFront:E>0}},_=m(e);_.inFront&&(o.beginPath(),o.arc(_.x,_.y,6,0,Math.PI*2),o.fillStyle="#44FF44",o.fill(),o.beginPath(),o.arc(_.x,_.y,9,0,Math.PI*2),o.strokeStyle="#44FF44",o.lineWidth=2,o.stroke(),o.fillStyle="#44FF44",o.font="bold 8px sans-serif",o.fillText("P",_.x+8,_.y+3));const g=[-e[0],-e[1],-e[2]],p=m(g);p.inFront&&(o.beginPath(),o.arc(p.x,p.y,6,0,Math.PI*2),o.fillStyle="rgba(68,255,68,0.6)",o.fill(),o.beginPath(),o.arc(p.x,p.y,9,0,Math.PI*2),o.strokeStyle="#44FF44",o.lineWidth=1.5,o.stroke(),o.beginPath(),o.moveTo(p.x-5,p.y-5),o.lineTo(p.x+5,p.y+5),o.moveTo(p.x+5,p.y-5),o.lineTo(p.x-5,p.y+5),o.strokeStyle="#44FF44",o.lineWidth=1.5,o.stroke());const v=m(n);v.inFront&&(o.beginPath(),o.moveTo(v.x,v.y-8),o.lineTo(v.x-6,v.y+4),o.lineTo(v.x+6,v.y+4),o.closePath(),o.fillStyle="#4488FF",o.fill());const x=[-n[0],-n[1],-n[2]],S=m(x);if(S.inFront&&(o.beginPath(),o.moveTo(S.x,S.y+8),o.lineTo(S.x-6,S.y-4),o.lineTo(S.x+6,S.y-4),o.closePath(),o.fillStyle="#4488FF",o.fill()),o.beginPath(),o.arc(c,u,5,0,Math.PI*2),o.fillStyle="#FFAA44",o.fill(),i){const b=m(i);b.inFront&&(o.beginPath(),o.moveTo(b.x,b.y-7),o.lineTo(b.x-5,b.y+5),o.lineTo(b.x+5,b.y+5),o.closePath(),o.fillStyle="#CC88FF",o.fill())}if(s)for(const b of s){const w=m(b.dir);w.inFront&&(o.beginPath(),o.arc(w.x,w.y,3,0,Math.PI*2),o.fillStyle=b.color+"aa",o.fill())}o.restore(),o.beginPath(),o.arc(c,u,h+1,0,Math.PI*2),o.strokeStyle="#334466",o.lineWidth=2,o.stroke()}update(t,e,n=0,i=1,s,o,a,l,c,u,h){const d=Math.sqrt(t.velocity[0]**2+t.velocity[1]**2+t.velocity[2]**2);let f=1/0,m=0,_=0,g=0;for(const U of e.bodies){if(U.mass<=0)continue;const k=t.position[0]-U.position[0],Y=t.position[1]-U.position[1],j=t.position[2]-U.position[2],$=Math.sqrt(k*k+Y*Y+j*j),Q=U.radius??0,ot=U.getSurfaceRadiusAt?.(t.position)??Q,z=$-ot;z<f&&(f=z,m=k,_=Y,g=j)}const p=Math.sqrt(t.velocity[0]**2+t.velocity[2]**2),v=Math.atan2(p,Math.abs(t.velocity[1]))*180/Math.PI,x=t.rocket.assembly.totalFuelCapacity(),S=x>0?t.rocket.totalFuelMass()/x*100:0,b=Math.min(100,n/1e5*100),w=Math.sqrt(m*m+_*_+g*g)||1,R=m/w,H=_/w,y=g/w,E=t.velocity[0]*R+t.velocity[1]*H+t.velocity[2]*y;if(this.vsVal.textContent=E.toFixed(1),this.vsVal.style.color=E<-5?"#FF4444":E>5?"#44FF44":"#CCCC44",this.speedVal.textContent=d.toFixed(1),f>1e3?(this.altVal.textContent=(f/1e3).toFixed(2),this.altUnit.textContent="km"):(this.altVal.textContent=f.toFixed(0),this.altUnit.textContent="m"),this.angleVal.textContent=v.toFixed(0),this.fuelPct.textContent=`${S.toFixed(0)}%`,this.fuelFill.style.width=`${Math.min(100,S)}%`,this.throtPct.textContent=`${(t.throttle*100).toFixed(0)}%`,this.throtFill.style.width=`${t.throttle*100}%`,this.throtFill.style.background=t.throttle>0&&t.rocket.totalFuelMass()>0?"#FF8844":"#446688",this.heatPct.textContent=`${b.toFixed(0)}%`,this.heatFill.style.width=`${b}%`,this.heatFill.style.background=b>70?"#FF3333":b>40?"#FFCC00":"#44FF44",this.stageVal.textContent=`${i}`,s!==void 0&&isFinite(s)&&(this.apeVal.textContent=s>1e3?`${(s/1e3).toFixed(1)}km`:`${s.toFixed(0)}m`),o!==void 0&&isFinite(o)&&(this.peVal.textContent=o>1e3?`${(o/1e3).toFixed(1)}km`:`${o.toFixed(0)}m`),a!==void 0&&isFinite(a)?this.ttaVal.textContent=a>60?`${(a/60).toFixed(1)}m`:`${a.toFixed(0)}s`:this.ttaVal.textContent="—",l!==void 0&&isFinite(l)?this.ttpVal.textContent=l>60?`${(l/60).toFixed(1)}m`:`${l.toFixed(0)}s`:this.ttpVal.textContent="—",c!==void 0){const U=Math.floor(c/60),k=Math.floor(c%60);this.timeVal.textContent=`T+${U.toString().padStart(2,"0")}:${k.toString().padStart(2,"0")}`}const D=this.root.querySelector(".impact-val");if(D){const U=-E;if(U>1&&f>0&&f<5e5){const k=f/U;k<600?(D.textContent=`Impact T-${k.toFixed(0)}s`,D.style.color=k<30?"#FF4444":k<120?"#FFAA44":"#CCCC44"):D.textContent="—"}else D.textContent="—"}const N=this.root.querySelector(".ecc-val");N&&u!==void 0&&(N.textContent=u.toFixed(3));const K=this.root.querySelector(".period-val");K&&h!==void 0&&isFinite(h)&&(K.textContent=h>3600?`${(h/3600).toFixed(1)}h`:h>60?`${(h/60).toFixed(1)}m`:`${h.toFixed(0)}s`);const I=this.root.querySelector(".soi-val");if(I){const U=qe(t.position,e);I.textContent=U?U.name.toUpperCase():"—"}if(this.burnVal){const U=t.rocket.totalFuelMass(),k=t.throttle;if(U>.1&&k>.01){const Y=zi(t.rocket.assembly.roots);if(Y&&Y.thrust){const $=Y.thrust*1e3*k/(320*9.80665),Q=U/$;this.burnVal.textContent=Q>60?`${(Q/60).toFixed(1)}m`:`${Q.toFixed(0)}s`}}else this.burnVal.textContent="—"}}setQ(t){const e=this.root.querySelector(".q-val");e&&(e.textContent=t>1e3?`${(t/1e3).toFixed(1)} kPa`:`${t.toFixed(0)} Pa`,e.style.color=t>1e4?"#FF4444":t>2e3?"#FFAA44":"#aaaacc")}unmount(){this.root.remove(),this.pauseOverlay.remove()}}class kv{startEngine(){}setThrottle(t){}stopEngine(){}playStaging(){}playCrash(){}playLand(){}dispose(){}}class Hv{show(t,e=2500){const n=document.createElement("div");n.className="toast",n.textContent=t,n.style.cssText=`
      position: fixed; top: 16px; left: 50%; transform: translateX(-50%);
      z-index: 300;
    `,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),200)},e)}}const Ae=new Hv;function tr(r,t,e,n,i){const s=Es*e,o=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]),l=(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])/2-s/o,c=-s/(2*l),u=r[1]*t[2]-r[2]*t[1],h=r[2]*t[0]-r[0]*t[2],d=r[0]*t[1]-r[1]*t[0],f=Math.sqrt(u*u+h*h+d*d),m=(t[1]*d-t[2]*h)/s-r[0]/o,_=(t[2]*u-t[0]*d)/s-r[1]/o,g=(t[0]*h-t[1]*u)/s-r[2]/o,p=Math.sqrt(m*m+_*_+g*g),v=p<1&&c>0,x=v?c*(1+p):1/0,S=v?c*(1-p):o,b=p>1e-8?m/p:1,w=p>1e-8?_/p:0,R=p>1e-8?g/p:0,H=[b,w,R],y=[(h*R-d*w)/(f||1),(d*b-u*R)/(f||1),(u*w-h*b)/(f||1)],E=[],D=v?Math.PI:Math.acos(-1/Math.max(p,1.001))*.98;let N,K;if(v){const I=2*Math.PI*Math.sqrt(c*c*c/s),U=(r[0]*t[0]+r[1]*t[1]+r[2]*t[2])/(o||1),k=(c*(1-p*p)/o-1)/p,Y=U*Math.sqrt(c*(1-p*p)/s)/(p||1),j=(p+k)/(1+p*k),$=Math.sqrt(1-p*p)*Y/(1+p*k);let Q=Math.atan2($,j);Q<0&&(Q+=Math.PI*2);const z=(Q-p*$)*I/(2*Math.PI),O=I-z,Z=(O+I/2)%I;K=O,N=Z}for(let I=0;I<=i;I++){const U=-D+2*D*I/i,k=1+p*Math.cos(U);if(Math.abs(k)<1e-10)continue;const Y=c*(1-p*p)/k;if(isNaN(Y)||!isFinite(Y)||Y<0)continue;const j=Y*(Math.cos(U)*H[0]+Math.sin(U)*y[0]),$=Y*(Math.cos(U)*H[2]+Math.sin(U)*y[2]);if(Math.sqrt(j*j+$*$)>n*1.5)break;E.push([j,$])}return{points:E,eccentricity:p,apoapsis:x,periapsis:S,bound:v,timeToAp:N,timeToPe:K}}function Bv(r,t){const e=r.position[0]-t.position[0],n=r.position[1]-t.position[1],i=r.position[2]-t.position[2],s=e*e+n*n+i*i,o=Math.sqrt(s);if(o===0)return[0,0,0];const a=Es*r.mass*t.mass/s;return[a*e/o,a*n/o,a*i/o]}function hu(r,t){let e=0,n=0,i=0;for(const s of t){if(s===r||s.mass<=0)continue;const o=Bv(s,r);e+=o[0],n+=o[1],i+=o[2]}return[e,n,i]}function zv(){try{const r=document.createElement("canvas");r.width=64,r.height=64;const t=r.getContext("2d");if(!t)throw new Error("no 2d context");const e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,200,0.9)"),e.addColorStop(.7,"rgba(255,200,100,0.5)"),e.addColorStop(1,"rgba(255,150,50,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new wn(r);return n.needsUpdate=!0,n}catch{return new $h(new Uint8Array([255,255,255,255]),1,1,hn)}}const Ci=Ot/.08,ii=300;class Gv{particles;positions;velocities;lifetimes;ages;colors;active;nextIndex;spriteTex;throttleLevel=1;inVacuum=!1;constructor(){this.active=!1,this.nextIndex=0,this.positions=new Float32Array(ii*3),this.velocities=new Float32Array(ii*3),this.lifetimes=new Float32Array(ii),this.ages=new Float32Array(ii),this.colors=new Float32Array(ii*3),this.ages.fill(1/0),this.spriteTex=zv();const t=new Pe;t.setAttribute("position",new Ce(this.positions,3)),t.setAttribute("color",new Ce(this.colors,3));const e=new yo({size:Ci*.8,map:this.spriteTex,vertexColors:!0,sizeAttenuation:!0,blending:En,depthWrite:!1,transparent:!0,opacity:1});this.particles=new Ka(t,e)}setThrottle(t){this.throttleLevel=Math.max(.01,t)}setVacuum(t){this.inVacuum=t}start(){this.active=!0}stop(){this.active=!1;for(let t=0;t<ii;t++)this.ages[t]=this.lifetimes[t],this.positions[t*3]=0,this.positions[t*3+1]=0,this.positions[t*3+2]=0;this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0}update(t){if(this.active){const e=Math.ceil((4+Math.floor(Math.random()*4))*this.throttleLevel),n=this.inVacuum?3:1;for(let i=0;i<e;i++){const s=this.nextIndex;this.nextIndex=(this.nextIndex+1)%ii;const o=(.15+Math.random()*.2)/this.throttleLevel;this.positions[s*3]=(Math.random()-.5)*o*Ci,this.positions[s*3+1]=-(Math.random()*.08)*Ci*n,this.positions[s*3+2]=(Math.random()-.5)*o*Ci;const a=(5+Math.random()*8)*n;this.velocities[s*3]=(Math.random()-.5)*.5*Ci,this.velocities[s*3+1]=-(a*Ci),this.velocities[s*3+2]=(Math.random()-.5)*.5*Ci,this.lifetimes[s]=(.3+Math.random()*.4)*n,this.ages[s]=0}}for(let e=0;e<ii;e++){const n=this.ages[e],i=this.lifetimes[e];if(n>=i)continue;const s=n+t;if(this.ages[e]=s,s>=i)continue;const o=s/i,a=e*3;this.positions[a]=(this.positions[a]??0)+(this.velocities[a]??0)*t,this.positions[a+1]=(this.positions[a+1]??0)+(this.velocities[a+1]??0)*t,this.positions[a+2]=(this.positions[a+2]??0)+(this.velocities[a+2]??0)*t;const l=Math.exp(-1.5*t);this.velocities[a]=(this.velocities[a]??0)*l,this.velocities[a+2]=(this.velocities[a+2]??0)*l;let c,u,h;if(o<.2)c=1,u=1,h=1;else if(o<.5){const d=(o-.2)/.3;c=1,u=1-d*.6,h=1-d*.9}else{const d=(o-.5)/.5;c=1-d*.5,u=.4-d*.4,h=.1-d*.1}this.colors[a]=c,this.colors[a+1]=u,this.colors[a+2]=h}this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose(),this.spriteTex.dispose()}}const Pi=100,xs=Ot*Oa;class Wv{particles;positions;velocities;lifetimes;ages;active=!1;constructor(){this.positions=new Float32Array(Pi*3),this.velocities=new Float32Array(Pi*3),this.lifetimes=new Float32Array(Pi),this.ages=new Float32Array(Pi),this.ages.fill(1/0);const t=new Pe;t.setAttribute("position",new Ce(this.positions,3));const e=new yo({size:.3*xs,color:13421772,transparent:!0,opacity:.5,blending:mi,depthWrite:!1,sizeAttenuation:!0});this.particles=new Ka(t,e)}start(){this.active=!0}stop(){this.active=!1}update(t){if(this.active)for(let o=0;o<3;o++){let a=-1,l=-1;for(let c=0;c<Pi;c++)this.ages[c]>=this.lifetimes[c]&&this.ages[c]>l&&(l=this.ages[c],a=c);if(a<0)for(let c=0;c<Pi;c++)this.ages[c]>l&&(l=this.ages[c],a=c);a>=0&&(this.positions[a*3]=(Math.random()-.5)*.1*xs,this.positions[a*3+1]=0,this.positions[a*3+2]=(Math.random()-.5)*.1*xs,this.velocities[a*3]=(Math.random()-.5)*.5*xs,this.velocities[a*3+1]=(.5+Math.random()*1)*xs,this.velocities[a*3+2]=(Math.random()-.5)*.5*xs,this.lifetimes[a]=1+Math.random()*1.5,this.ages[a]=0)}const e=this.particles.material;let n=!1;const i=this.velocities,s=this.positions;for(let o=0;o<Pi;o++){if(this.ages[o]>=this.lifetimes[o])continue;n=!0;const a=this.ages[o]+t;if(this.ages[o]=a,a>=this.lifetimes[o])continue;const l=o*3,c=i[l]??0,u=i[l+1]??0,h=i[l+2]??0;s[l]=(s[l]??0)+c*t,s[l+1]=(s[l+1]??0)+u*t,s[l+2]=(s[l+2]??0)+h*t,i[l]=c*.98,i[l+2]=h*.98}e.opacity=this.active?.5:Math.max(0,e.opacity-t*2),this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.visible=n||this.active}getMesh(){return this.particles}dispose(){this.particles.geometry.dispose(),this.particles.material.dispose()}}const ee=jn*$n;class Vv{renderer;sceneMgr;system;achievements;state;rocket;rocketGroup;chase;controls;hud;sound;launched=!1;grounded=!0;groundedDir=null;liftoffFrames=0;engineFlame;groundSmoke;rocketShadow=null;reentryGlow=null;rocketQuat=new sn;angularVel=new C;ANGULAR_ACCEL=8;ANGULAR_DAMPING=10;timeWarp=1;parachuteDeployed=!1;deployedChuteMesh=null;crashed=!1;paused=!1;debris=[];warpLevels=[1,3,5,10,100,1e3,1e5,1e6];warpIndex=0;crashOverlay=null;prevVel=[0,0,0];gearDeployed=!1;gearMeshes=[];missionTime=0;sasMode="off";sasTargetQuat=new sn;screenShake=0;countdownTimer=0;countdownActive=!1;countdownEl=null;lastRefBody=null;impactMarker=null;maxAlt=0;maxSpeed=0;orbitLine=null;exhaustLight=null;cameraMode="chase";freeCamPos=new C(0,2,5);freeCamLook=new C(0,0,0);hudVisible=!0;lastAltMilestone=0;sonicBoomRing=null;sonicBoomLife=0;reentryGlowMesh=null;showCountdown(t){this.countdownEl||(this.countdownEl=document.createElement("div"),this.countdownEl.style.cssText=`
        position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);
        font-size:72px;font-weight:bold;color:#fff;z-index:500;
        text-shadow:0 0 30px rgba(68,136,255,0.6);
        font-family:system-ui,sans-serif;pointer-events:none;
        transition:opacity 0.2s;
      `,document.body.appendChild(this.countdownEl)),this.countdownEl.textContent=t,this.countdownEl.style.opacity="1",t==="LIFTOFF!"?(this.countdownEl.style.color="#FF8844",this.countdownEl.style.fontSize="48px"):(this.countdownEl.style.color="#FFFFFF",this.countdownEl.style.fontSize="72px")}hideCountdown(){this.countdownEl&&(this.countdownEl.style.opacity="0")}get dragMultiplier(){return this.gearDeployed?2.5:1}onCrashAction=null;constructor(t,e,n,i,s){this.renderer=t,this.sceneMgr=e,this.system=n,this.achievements=s,this.rocket=i;const o=n.bodyByName("earth"),a=o.radius??6371e3,l=28.5*Math.PI/180,c=-80.5*Math.PI/180,u=[Math.cos(l)*Math.cos(c),Math.sin(l),Math.cos(l)*Math.sin(c)],h=Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2]),d=[u[0]/h,u[1]/h,u[2]/h],f=[o.position[0]+d[0]*a,o.position[1]+d[1]*a,o.position[2]+d[2]*a],m=o.getSurfaceRadiusAt?.(f)??a,_=[o.position[0]+d[0]*(m+10),o.position[1]+d[1]*(m+10),o.position[2]+d[2]*(m+10)];this.state=new Iv(i,n,_,[0,0,0]),this.groundedDir=d;const g=new C(_[0]-o.position[0],_[1]-o.position[1],_[2]-o.position[2]).normalize();this.rocketQuat.setFromUnitVectors(new C(0,1,0),g),this.rocketGroup=i.assembly.toMesh(),this.rocketGroup.scale.setScalar(Oa),this.rocketGroup.position.set(this.state.position[0]*ee,this.state.position[1]*ee,this.state.position[2]*ee),e.scene.add(this.rocketGroup);for(let z=0;z<3;z++){const O=z/3*Math.PI*2,Z=new ue(.015,.04,.3,6),P=new Me({color:5596791,metalness:.8,roughness:.3}),lt=new pt(Z,P);lt.position.set(Math.cos(O)*.15,-.1,Math.sin(O)*.15),lt.rotation.z=Math.cos(O)*.3,lt.rotation.x=Math.sin(O)*.3,lt.visible=!1,this.rocketGroup.add(lt),this.gearMeshes.push(lt);const mt=new ue(.05,.06,.02,6),Rt=new Me({color:4478310,metalness:.5,roughness:.6}),Ut=new pt(mt,Rt);Ut.position.set(Math.cos(O)*.22,-.22,Math.sin(O)*.22),this.rocketGroup.add(Ut),this.gearMeshes.push(Ut)}const p=new Rn(.05,.15,16),v=new xe({color:16724787,side:Re,transparent:!0,opacity:.6,depthWrite:!1});this.impactMarker=new pt(p,v),this.impactMarker.rotation.x=-Math.PI/2,this.impactMarker.visible=!1,this.sceneMgr.scene.add(this.impactMarker);for(const z of n.bodies){const O=z;O.mesh&&e.scene.add(O.mesh),O.light&&e.scene.add(O.light)}const x=new cr(8952268,.5);x.position.set(-50,20,-30),e.scene.add(x),this.engineFlame=new Gv,this.positionFlameAtNozzle(),this.rocketGroup.add(this.engineFlame.getMesh()),this.exhaustLight=new eu(16746564,0,20),this.exhaustLight.position.set(0,-1,0),this.rocketGroup.add(this.exhaustLight),this.groundSmoke=new Wv,this.rocketGroup.add(this.groundSmoke.getMesh());const S=new Mo(.3*Oa,32),b=new xe({color:0,transparent:!0,opacity:.3,depthWrite:!1});this.rocketShadow=new pt(S,b),this.rocketShadow.rotation.x=-Math.PI/2,this.rocketShadow.position.y=-2,this.rocketGroup.add(this.rocketShadow);const w=new _e(.3,16,12),R=new xe({color:16737792,transparent:!0,opacity:0,blending:En,depthWrite:!1});this.reentryGlow=new pt(w,R),this.rocketGroup.add(this.reentryGlow);const H=new _e(.5,16,12),y=new xe({color:16729088,transparent:!0,opacity:0,blending:En,depthWrite:!1}),E=new pt(H,y);E.name="reentry-outer",this.rocketGroup.add(E);const D=new C().crossVectors(g,new C(0,1,0)).normalize(),N=Math.atan2(D.z,D.x);this.chase=new Dv(e.camera),this.chase.setAzimuth(N),this.chase.enableOrbit(this.renderer.domElement),this.chase.initialiseAt(this.state,this.rocketQuat,g),this.controls=new Nv(this.state),("ontouchstart"in window||navigator.maxTouchPoints>0)&&this.controls.enableTouch(),this.sound=new kv,this.hud=new Ov,this.hud.onAction=z=>{z==="stage"?this.performStage():z==="parachute"?this.toggleParachute():z==="map"?(K=!K,j.style.display=K?"block":"none",K&&requestAnimationFrame(ot)):z==="resume"?(this.paused=!1,this.hud.setPaused(!1)):z==="menu"?this.onCrashAction?.("menu"):z==="restart"&&this.onCrashAction?.("restart")},this.hud.mount();let K=!1,I=1,U=0,k=0,Y=null;const j=document.createElement("div");j.style.cssText="position:fixed;inset:0;z-index:300;background:rgba(6,8,20,0.95);display:none;";const $=document.createElement("canvas");$.style.cssText="position:absolute;inset:0;width:100%;height:100%;",j.appendChild($),document.body.appendChild(j);const Q=document.createElement("div");Q.style.cssText="position:absolute;top:16px;left:16px;z-index:10;color:#EACD9E;font-family:monospace;font-size:12px;pointer-events:none;",Q.innerHTML='<div id="map-zoom">ZOOM: 1x</div><div id="map-center">CENTER: ROCKET</div><div id="map-legend" style="margin-top:8px;font-size:10px;opacity:0.7;">SCROLL: zoom | DRAG: pan | M/TAB: close</div>',j.appendChild(Q),j.appendChild($),document.body.appendChild(j),$.addEventListener("wheel",z=>{I*=z.deltaY>0?.9:1.1,I=Math.max(.05,Math.min(100,I))}),$.addEventListener("mousedown",z=>{Y={x:z.clientX,y:z.clientY}}),window.addEventListener("mouseup",()=>{Y=null}),window.addEventListener("mousemove",z=>{Y&&(U+=z.clientX-Y.x,k+=z.clientY-Y.y,Y={x:z.clientX,y:z.clientY})}),$.addEventListener("touchstart",z=>{z.touches.length===1&&(Y={x:z.touches[0].clientX,y:z.touches[0].clientY})}),$.addEventListener("touchmove",z=>{!Y||z.touches.length!==1||(U+=z.touches[0].clientX-Y.x,k+=z.touches[0].clientY-Y.y,Y={x:z.touches[0].clientX,y:z.touches[0].clientY})}),$.addEventListener("touchend",()=>{Y=null});const ot=()=>{if(!K)return;const z=window.devicePixelRatio||1,O=$.clientWidth,Z=$.clientHeight;$.width=O*z,$.height=Z*z;const P=$.getContext("2d");P.setTransform(z,0,0,z,0,0),P.fillStyle="#060814",P.fillRect(0,0,O,Z);const lt=O/2+U,mt=Z/2+k,Rt=P.createRadialGradient(lt,mt,0,lt,mt,Math.max(O,Z)*.6);Rt.addColorStop(0,"rgba(20,30,60,0.3)"),Rt.addColorStop(.5,"rgba(10,15,30,0.15)"),Rt.addColorStop(1,"rgba(6,8,20,0)"),P.fillStyle=Rt,P.fillRect(0,0,O,Z),P.strokeStyle="rgba(100,100,150,0.08)",P.lineWidth=1;const Ut=100*I;for(let J=lt%Ut;J<O;J+=Ut)P.beginPath(),P.moveTo(J,0),P.lineTo(J,Z),P.stroke();for(let J=mt%Ut;J<Z;J+=Ut)P.beginPath(),P.moveTo(0,J),P.lineTo(O,J),P.stroke();P.strokeStyle="rgba(68,136,255,0.06)",P.lineWidth=.5;for(let J=Ut;J<Math.max(O,Z);J+=Ut)P.beginPath(),P.arc(lt,mt,J,0,Math.PI*2),P.stroke();let It=1;for(const J of this.system.bodies){const wt=(J.position[0]-this.state.position[0])*ee,yt=(J.position[2]-this.state.position[2])*ee,_t=Math.sqrt(wt*wt+yt*yt);_t>It&&(It=_t)}const Mt=Math.min(O,Z)*.4/It*I,B={sun:"#ffdd44",earth:"#4fc3f7",moon:"#aaaacc",venus:"#e8a84c",mars:"#d4733a",mercury:"#b0b0b0",jupiter:"#d4a574",saturn:"#f4e4a1",uranus:"#4fd0e8",neptune:"#4b70dd"},Ee={sun:"rgba(255,220,68,0.12)",earth:"rgba(79,195,247,0.08)",mars:"rgba(212,115,58,0.08)",venus:"rgba(232,168,76,0.08)",jupiter:"rgba(212,165,116,0.08)",saturn:"rgba(244,228,161,0.15)"},At={sun:8,earth:5,moon:2,venus:3,mars:3,mercury:2,jupiter:7,saturn:6,uranus:3.5,neptune:3.5},Pt=this.system.bodyByName("sun")?.position;if(Pt)for(const J of this.system.bodies){if(J.name==="sun"||J.name==="moon")continue;const wt=[J.position[0]-Pt[0],J.position[1]-Pt[1],J.position[2]-Pt[2]];if(J.velocity){const yt=tr(wt,J.velocity,this.system.bodyByName("sun").mass,5e14,180);if(yt.points.length>10){P.beginPath(),P.strokeStyle=B[J.name]+"30",P.lineWidth=1,P.setLineDash([3,6]);const _t=lt+(yt.points[0][0]+Pt[0])*Mt,tt=mt-(yt.points[0][1]+Pt[2])*Mt;P.moveTo(_t,tt);for(let L=1;L<yt.points.length;L+=2){const ct=lt+(yt.points[L][0]+Pt[0])*Mt,ut=mt-(yt.points[L][1]+Pt[2])*Mt;P.lineTo(ct,ut)}P.stroke(),P.setLineDash([])}}}const Tt=["earth","venus","mars","jupiter","saturn","uranus","neptune"];for(const J of this.system.bodies)if(Tt.includes(J.name)){const wt=lt+(J.position[0]-this.state.position[0])*Mt,yt=mt-(J.position[2]-this.state.position[2])*Mt,_t=At[J.name]||3,tt=P.createRadialGradient(wt,yt,_t*.5,wt,yt,_t*3),L=B[J.name]||"#888";tt.addColorStop(0,L+"30"),tt.addColorStop(.5,L+"15"),tt.addColorStop(1,L+"00"),P.beginPath(),P.arc(wt,yt,_t*3,0,Math.PI*2),P.fillStyle=tt,P.fill()}for(const J of this.system.bodies)if(Tt.includes(J.name)){const wt=lt+(J.position[0]-this.state.position[0])*Mt,yt=mt-(J.position[2]-this.state.position[2])*Mt,_t=At[J.name]||3,tt=1.2;P.beginPath(),P.arc(wt,yt,_t*tt,0,Math.PI*2),P.setLineDash([2,6]),P.strokeStyle="rgba(100,180,255,0.25)",P.lineWidth=.8,P.stroke(),P.setLineDash([])}for(const J of this.system.bodies){const wt=lt+(J.position[0]-this.state.position[0])*Mt,yt=mt-(J.position[2]-this.state.position[2])*Mt;At[J.name]&&At[J.name]>=5&&(P.beginPath(),P.arc(wt,yt,At[J.name]*3,0,Math.PI*2),P.fillStyle=Ee[J.name]||"rgba(100,100,150,0.05)",P.fill()),P.beginPath(),P.arc(wt,yt,At[J.name]||3,0,Math.PI*2),P.fillStyle=B[J.name]||"#888",P.fill(),P.strokeStyle="rgba(244,245,242,0.3)",P.lineWidth=.5,P.stroke(),P.font="9px monospace",P.fillStyle="#F4F5F2",P.fillText(J.name.toUpperCase(),wt+At[J.name]+6,yt+3)}const re=this.system.bodyByName("sun");for(const J of this.system.bodies){if(J.name==="sun"||J.mass<=0||!re||J.name===re.name)continue;const wt=(J.position[0]-re.position[0])*ee,yt=(J.position[2]-re.position[2])*ee,_t=Math.sqrt(wt*wt+yt*yt);if(_t<1)continue;const tt=_t*Math.pow(J.mass/re.mass,.4),L=lt+(J.position[0]-this.state.position[0])*Mt,ct=mt-(J.position[2]-this.state.position[2])*Mt;P.beginPath(),P.arc(L,ct,tt*Mt,0,Math.PI*2),P.setLineDash([4,4]),P.strokeStyle=(B[J.name]||"#888")+"44",P.lineWidth=.8,P.stroke(),P.setLineDash([])}const Wt=80,A=3,M=O-Wt-15,G=Z-30,nt=It*2/Math.min(O,Z)*I*Wt,it=Math.pow(10,Math.floor(Math.log10(nt))),Et=Wt*(it/nt);P.fillStyle="rgba(244,245,242,0.4)",P.fillRect(M,G,Et,A),P.strokeStyle="rgba(244,245,242,0.5)",P.lineWidth=.5,P.strokeRect(M,G,Et,A),P.fillStyle="rgba(244,245,242,0.4)",P.font="8px monospace",P.fillText(`${it>=1e3?(it/1e3).toFixed(0)+"Mkm":it.toFixed(0)+"km"}`,M,G-2);const ht=lt,gt=mt,Nt=this.state.velocity[0]||0,zt=this.state.velocity[2]||0,et=Math.sqrt(Nt*Nt+zt*zt),Xt=et>.1?Math.atan2(zt,Nt):0;if(P.save(),P.translate(ht,gt),P.rotate(-Xt),P.beginPath(),P.moveTo(8,0),P.lineTo(0,-4),P.lineTo(-5,0),P.lineTo(0,4),P.closePath(),P.fillStyle="#EACD9E",P.fill(),P.strokeStyle="#EACD9E",P.lineWidth=1.5,P.stroke(),P.restore(),et>.1){const J=Math.min(30,10+et*Mt*2);P.beginPath(),P.moveTo(ht,gt),P.lineTo(ht+Math.cos(Xt)*J,gt-Math.sin(Xt)*J),P.strokeStyle="rgba(234,205,158,0.6)",P.lineWidth=1.5,P.stroke(),P.beginPath(),P.moveTo(ht+Math.cos(Xt)*J,gt-Math.sin(Xt)*J),P.lineTo(ht+Math.cos(Xt+.4)*(J-5),gt-Math.sin(Xt+.4)*(J-5)),P.lineTo(ht+Math.cos(Xt-.4)*(J-5),gt-Math.sin(Xt-.4)*(J-5)),P.closePath(),P.fillStyle="rgba(234,205,158,0.6)",P.fill()}const Vt=qe(this.state.position,this.system),Ft=[(this.state.position[0]-Vt.position[0])*ee,(this.state.position[1]-Vt.position[1])*ee,(this.state.position[2]-Vt.position[2])*ee],bt=this.system.bodyByName("sun");if(bt){const J=(bt.position[0]-this.state.position[0])*Mt,wt=(bt.position[2]-this.state.position[2])*Mt,yt=Math.sqrt(J*J+wt*wt);yt>1&&(P.beginPath(),P.moveTo(ht+J/yt*12,gt-wt/yt*12),P.lineTo(ht+J/yt*Math.min(yt,60),gt-wt/yt*Math.min(yt,60)),P.strokeStyle="rgba(255,220,68,0.15)",P.lineWidth=2,P.setLineDash([3,6]),P.stroke(),P.setLineDash([]),P.beginPath(),P.arc(ht+J/yt*Math.min(yt,60),gt-wt/yt*Math.min(yt,60),3,0,Math.PI*2),P.fillStyle="rgba(255,220,68,0.3)",P.fill())}const at=tr(Ft,this.state.velocity,Vt.mass,5e14,360);if(at.points.length>1){P.beginPath(),P.strokeStyle=at.bound?"rgba(68,136,204,0.15)":"rgba(221,170,68,0.15)",P.lineWidth=8;const J=lt+at.points[0][0]*Mt,wt=mt-at.points[0][1]*Mt;P.moveTo(J,wt);for(let _t=1;_t<at.points.length;_t++){const tt=lt+at.points[_t][0]*Mt,L=mt-at.points[_t][1]*Mt;P.lineTo(tt,L)}P.stroke(),P.beginPath(),P.strokeStyle=at.bound?"#4488CC":"#DDAA44",P.lineWidth=2,P.setLineDash(at.bound?[]:[6,4]),P.moveTo(J,wt);for(let _t=1;_t<at.points.length;_t++){const tt=lt+at.points[_t][0]*Mt,L=mt-at.points[_t][1]*Mt;P.lineTo(tt,L)}P.stroke(),P.setLineDash([]);const yt=Math.max(4,Math.floor(at.points.length/6));P.fillStyle=at.bound?"#4488CC":"#DDAA44";for(let _t=yt;_t<at.points.length-yt;_t+=yt){const tt=at.points[_t],L=at.points[Math.min(_t+2,at.points.length-1)],ct=L[0]-tt[0],ut=L[1]-tt[1],Ct=Math.atan2(ut,ct),Lt=lt+tt[0]*Mt,se=mt-tt[1]*Mt;P.beginPath(),P.moveTo(Lt+Math.cos(Ct)*5,se-Math.sin(Ct)*5),P.lineTo(Lt+Math.cos(Ct+1.8)*7,se-Math.sin(Ct+1.8)*7),P.lineTo(Lt+Math.cos(Ct-1.8)*7,se-Math.sin(Ct-1.8)*7),P.closePath(),P.fill()}if(at.bound&&isFinite(at.apoapsis)&&isFinite(at.periapsis)){const _t=lt+at.apoapsis*Mt,tt=lt+at.periapsis*Mt;P.beginPath(),P.arc(_t,mt,4,0,Math.PI*2),P.fillStyle="#FF8844",P.fill(),P.font="bold 9px monospace",P.fillStyle="#FF8844",P.fillText("Ap",_t+6,mt+3),P.beginPath(),P.arc(tt,mt,4,0,Math.PI*2),P.fillStyle="#44DD88",P.fill(),P.fillStyle="#44DD88",P.fillText("Pe",tt+6,mt+3)}}P.fillStyle="rgba(244,245,242,0.3)",P.font="9px sans-serif",P.fillText(`${(It/1e3).toFixed(0)} km | Zoom: ${I.toFixed(1)}x`,10,Z-10),requestAnimationFrame(ot)};window.addEventListener("keydown",z=>{(z.key==="m"||z.key==="Tab")&&(K=!K,j.style.display=K?"block":"none",K&&requestAnimationFrame(ot),z.preventDefault())}),window.addEventListener("keydown",z=>{if(z.key==="q"||z.key==="["){if(this.paused)return;this.warpIndex=Math.max(0,this.warpIndex-1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarpLabel(`x${this.timeWarp}`),z.preventDefault()}else if(z.key==="e"||z.key==="]"){if(this.paused)return;this.warpIndex=Math.min(this.warpLevels.length-1,this.warpIndex+1),this.timeWarp=this.warpLevels[this.warpIndex],this.hud.setWarpLabel(`x${this.timeWarp}`),z.preventDefault()}else if(z.key==="p"){if(i.assembly.roots.some(Z=>Z.part.kind==="parachute")||i.assembly.roots.some(Z=>Z.children.some(P=>P.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const Z={radius:.6*Ot,height:1*Ot};this.deployedChuteMesh=ka(Z),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);Ae.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}z.preventDefault()}else if(z.key==="g")this.toggleGear(),z.preventDefault();else if(z.key==="t"){const O=["off","hold","prograde","retrograde"],Z=O.indexOf(this.sasMode);this.sasMode=O[(Z+1)%O.length],this.sasMode==="off"?Ae.show("SAS disabled"):this.sasMode==="hold"?(this.sasTargetQuat.copy(this.rocketQuat),Ae.show("SAS — attitude hold")):this.sasMode==="prograde"?Ae.show("SAS — prograde"):Ae.show("SAS — retrograde"),z.preventDefault()}else z.key==="f"?(this.chase.reset(),Ae.show("Camera view reset"),z.preventDefault()):z.key==="c"?(this.cameraMode=this.cameraMode==="chase"?"free":"chase",Ae.show(this.cameraMode==="free"?"Free camera":"Chase camera"),z.preventDefault()):z.key==="F1"&&(z.preventDefault(),this.hudVisible=!this.hudVisible,this.hud.setVisible(this.hudVisible),Ae.show(this.hudVisible?"HUD shown":"HUD hidden"))}),this.achievements.unlock("first_launch"),Ae.show("You are at the launchpad. W/S throttle, ↑↓ pitch, ←→ yaw, T SAS, Esc pause.")}sanitize(t){isFinite(t[0])||(t[0]=0),isFinite(t[1])||(t[1]=0),isFinite(t[2])||(t[2]=0)}countStages(t){let e=0;for(const n of t)n.part.kind==="decoupler"&&e++,e+=this.countStages(n.children);return e}update(t){try{this.updateInner(t)}catch(e){Ae.show(`ERROR: ${e.message||e}`),console.error("FlightScene.update error:",e)}}updateInner(t){const e=t;if(this.controls.consumePauseToggle()&&(this.paused=!this.paused,this.hud.setPaused(this.paused),this.paused&&this.sound.stopEngine()),this.paused){this.system.propagate(0,ha);for(const q of this.system.bodies)q.syncMesh?.();return}if(this.crashed){this.system.propagate(t*this.timeWarp,ha);for(const q of this.system.bodies)q.syncMesh?.();this.updateExplosion(e);return}this.missionTime+=e,this.missionTime=Math.min(this.missionTime,99999),t*=this.timeWarp,(!isFinite(t)||t<=0)&&(t=1/60),this.controls.update(e),this.controls.getZoomIn()&&this.chase.zoom(.92),this.controls.getZoomOut()&&this.chase.zoom(1.08);const n=this.timeWarp>1;n&&(this.state.throttle=0),!n&&this.controls.getStageRequested()&&this.performStage(),!n&&!this.grounded&&this.state.throttle>0&&(!zi(this.state.rocket.assembly.roots)||this.state.rocket.totalFuelMass()<.1)&&this.state.rocket.assembly.roots.some(dt=>dt.part.kind==="decoupler"||dt.children.some(vt=>vt.part.kind==="decoupler"))&&this.performStage();const i=()=>new C(0,1,0).applyQuaternion(this.rocketQuat),s=this.state.throttle>0,o=n?0:this.controls.getPitch(),a=n?0:this.controls.getYaw(),l=n?0:this.controls.getRoll();if(this.angularVel.x+=o*this.ANGULAR_ACCEL*e,this.angularVel.y+=a*this.ANGULAR_ACCEL*e,this.angularVel.z+=l*this.ANGULAR_ACCEL*e,s&&!this.grounded&&(this.angularVel.x+=o*this.state.throttle*4*e,this.angularVel.y+=a*this.state.throttle*4*e),this.sasMode!=="off"&&!n){if(this.sasMode==="prograde"||this.sasMode==="retrograde"){const dt=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(dt>.1){let vt=new C(this.state.velocity[0]/dt,this.state.velocity[1]/dt,this.state.velocity[2]/dt);this.sasMode==="retrograde"&&vt.negate(),this.sasTargetQuat.setFromUnitVectors(new C(0,1,0),vt)}}const q=new sn().copy(this.sasTargetQuat).invert().multiply(this.rocketQuat),st=2*Math.acos(Math.abs(q.w));if(st>.001){const dt=new C(q.x,q.y,q.z).normalize();this.angularVel.x-=dt.x*st*3*e,this.angularVel.y-=dt.y*st*3*e,this.angularVel.z-=dt.z*st*3*e}this.angularVel.multiplyScalar(Math.exp(-5*e))}const c=Math.exp(-this.ANGULAR_DAMPING*e);this.angularVel.multiplyScalar(c);const u=new sn().setFromAxisAngle(new C(0,0,1),this.angularVel.y*e),h=new sn().setFromAxisAngle(new C(1,0,0),this.angularVel.x*e),d=new sn().setFromAxisAngle(new C(0,1,0),this.angularVel.z*e);this.rocketQuat.multiply(u).multiply(h).multiply(d),this.rocketQuat.normalize(),this.rocketGroup.quaternion.copy(this.rocketQuat);const f=i(),m=f.x,_=f.y,g=f.z;let p=!1;if(s&&this.grounded){!this.countdownActive&&!this.launched&&(this.countdownActive=!0,this.countdownTimer=0,this.showCountdown("3")),this.countdownActive&&(this.countdownTimer+=e,this.countdownTimer>=1&&this.countdownTimer<2?this.showCountdown("2"):this.countdownTimer>=2&&this.countdownTimer<3?this.showCountdown("1"):this.countdownTimer>=3&&(this.countdownActive=!1,this.countdownTimer=0,this.showCountdown("LIFTOFF!"),setTimeout(()=>this.hideCountdown(),1500)));const q=zi(this.state.rocket.assembly.roots);if(q&&q.thrust){const st=q.thrust*1e3*this.state.throttle,dt=qe(this.state.position,this.system),vt=this.state.position[0]-dt.position[0],kt=this.state.position[1]-dt.position[1],Jt=this.state.position[2]-dt.position[2],Ze=Math.sqrt(vt*vt+kt*kt+Jt*Jt)||1,on=Es*dt.mass/(Ze*Ze),yn=this.state.rocket.totalMass()*on;p=st>yn*.95}}if(s&&(!this.grounded||p)&&(Fv(this.state,t,[m,_,g]),this.sanitize(this.state.velocity)),s&&p&&this.grounded&&(this.grounded=!1,this.groundedDir=null,this.liftoffFrames=5,this.launched=!0,this.achievements.unlock("reach_space"),this.sound.startEngine()),s){this.sound.setThrottle(this.state.throttle),this.engineFlame.setThrottle(this.state.throttle),this.engineFlame.start();const q=qe(this.state.position,this.system),st=this.state.position[0]-q.position[0],dt=this.state.position[1]-q.position[1],vt=this.state.position[2]-q.position[2],kt=Math.sqrt(st*st+dt*dt+vt*vt)||1,Jt=q.getSurfaceRadiusAt?.(this.state.position)??q.radius??6371e3;this.engineFlame.setVacuum(kt-Jt>5e4)}else this.sound.setThrottle(0),this.engineFlame.stop();this.engineFlame.update(e),this.exhaustLight&&(this.exhaustLight.intensity=this.state.throttle*3,this.exhaustLight.color.setHSL(.08-this.state.throttle*.05,1,.5+this.state.throttle*.3)),s&&this.grounded?this.groundSmoke.start():this.groundSmoke.stop(),this.groundSmoke.update(e),this.grounded&&n||(this.state.position[0]+=this.state.velocity[0]*t,this.state.position[1]+=this.state.velocity[1]*t,this.state.position[2]+=this.state.velocity[2]*t);let v=null,x=1/0;const S=qe(this.state.position,this.system),b=S.name;this.lastRefBody&&this.lastRefBody!==b&&Ae.show(`Entering ${b.toUpperCase()} SOI`),this.lastRefBody=b;const w=S.position[0]-this.state.position[0],R=S.position[1]-this.state.position[1],H=S.position[2]-this.state.position[2];x=Math.sqrt(w*w+R*R+H*H),v=S;const y=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2);if(!this.grounded&&v&&v.radius){const q=x-v.radius;if(q>0&&q<12e4&&y>2e3){const st=Math.max(0,1-q/12e4)*Math.min(1,y/8e3);if(this.reentryGlow){this.reentryGlow.material.color.setHSL(.05,1,.7*st),this.reentryGlow.material.opacity=.4*st,this.reentryGlow.scale.setScalar(1+st*2);const dt=this.rocketGroup.getObjectByName("reentry-outer");dt&&(dt.material.color.setHSL(.03,1,.4*st),dt.material.opacity=.2*st,dt.scale.setScalar(1+st*4))}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const st=this.rocketGroup.getObjectByName("reentry-outer");st&&(st.material.opacity=0)}}else{this.reentryGlow&&(this.reentryGlow.material.opacity=0);const q=this.rocketGroup.getObjectByName("reentry-outer");q&&(q.material.opacity=0)}if(this.liftoffFrames>0&&this.liftoffFrames--,this.grounded)this.state.velocity=[0,0,0];else{const q=w,st=R,dt=H,vt=x,kt=vt*vt;if(vt>1&&kt>0){const fe=Es*S.mass/kt;this.state.velocity[0]-=fe*q/vt*e,this.state.velocity[1]-=fe*st/vt*e,this.state.velocity[2]-=fe*dt/vt*e}this.sanitize(this.state.velocity);const Jt=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),Ze=this.state.rocket.totalMass();let on=Ze*.001+.2;if(this.parachuteDeployed?on=50:this.gearDeployed&&(on*=2.5),v&&v.radius&&Jt>.05&&Jt<1e6){const fe=x-v.radius;if(fe>0&&fe<3e5){const Fe=1.225*Math.exp(-fe/8500),Oe=.5*Fe*Jt*Jt;this.hud.setQ(Oe);const Ki=Oe*on/Ze*e;if(Ki>=Jt)this.state.velocity[0]=0,this.state.velocity[1]=0,this.state.velocity[2]=0;else{const F=1-Ki/Jt;this.state.velocity[0]*=F,this.state.velocity[1]*=F,this.state.velocity[2]*=F}this.sanitize(this.state.velocity);const T=Math.max(0,Jt/2e3*(Fe/1.225)-.1);T>.05&&this.reentryGlowMesh?(this.reentryGlowMesh.visible=!0,this.reentryGlowMesh.scale.setScalar(1+T*2),this.reentryGlowMesh.material.opacity=Math.min(1,T)):this.reentryGlowMesh&&(this.reentryGlowMesh.visible=!1)}}this.reentryGlowMesh&&(v&&v.radius&&x-v.radius<3e5||(this.reentryGlowMesh.visible=!1));const yn=v?v.radius??0:0,Ge=v?v.getSurfaceRadiusAt?.(this.state.position)??yn:0;if(v&&yn>0&&isFinite(x)){const fe=this.state.position[0]-v.position[0],Fe=this.state.position[1]-v.position[1],Oe=this.state.position[2]-v.position[2],ce=Math.sqrt(fe*fe+Fe*Fe+Oe*Oe),Mn=(this.state.velocity[0]*fe+this.state.velocity[1]*Fe+this.state.velocity[2]*Oe)/ce;if(ce<Ge-1)this.doCrash(`Impact on ${v.name}`,v,fe,Fe,Oe,ce,Ge);else if(ce<Ge+5&&ce>.001&&this.liftoffFrames<=0){const Ki=new C(fe/ce,Fe/ce,Oe/ce),T=new C(0,1,0).applyQuaternion(this.rocketQuat),F=Math.acos(Math.min(1,Math.abs(T.dot(Ki))))*180/Math.PI,V=this.hasLandingLegs(),X=this.parachuteDeployed?15:10,W=V?30:20;if(isFinite(Mn)&&Math.abs(Mn)>X)this.doCrash(`Too fast! (${Math.abs(Mn).toFixed(0)} m/s) on ${v.name}`,v,fe,Fe,Oe,ce,Ge);else if(F>W)this.doCrash(`Tipped over! (${F.toFixed(0)}°) on ${v.name}`,v,fe,Fe,Oe,ce,Ge);else if(isFinite(Mn)&&Mn<1){this.state.velocity=[0,0,0],this.grounded=!0,this.groundedDir=[fe/ce,Fe/ce,Oe/ce];const xt=new C(fe/ce,Fe/ce,Oe/ce);if(this.rocketQuat.setFromUnitVectors(new C(0,1,0),xt),this.state.position[0]!==v.position[0]+fe/ce*(Ge+.5)||this.state.position[1]!==v.position[1]+Fe/ce*(Ge+.5)||this.state.position[2]!==v.position[2]+Oe/ce*(Ge+.5)){this.state.position=[v.position[0]+fe/ce*(Ge+.5),v.position[1]+Fe/ce*(Ge+.5),v.position[2]+Oe/ce*(Ge+.5)],this.sound.playLand(),this.sound.stopEngine();const St=v.name;Ae.show(`Landed on ${St}!`),St==="earth"?this.achievements.unlock("land_earth"):St==="moon"?this.achievements.unlock("land_moon"):St==="mars"?this.achievements.unlock("land_mars"):St==="venus"?this.achievements.unlock("land_venus"):St==="mercury"&&this.achievements.unlock("land_mercury")}}}else ce<Ge+200&&isFinite(Mn)&&Math.abs(Mn)>50&&this.doCrash(`High-speed impact! (${Math.abs(Mn).toFixed(0)} m/s) on ${v.name}`,v,fe,Fe,Oe,ce,Ge)}}if(this.system.propagate(t,ha),this.grounded&&this.groundedDir){const q=qe(this.state.position,this.system),st=q.radius??6371e3,dt=[q.position[0]+this.groundedDir[0],q.position[1]+this.groundedDir[1],q.position[2]+this.groundedDir[2]],kt=(q.getSurfaceRadiusAt?.(dt)??st)+.5;this.state.position[0]=q.position[0]+this.groundedDir[0]*kt,this.state.position[1]=q.position[1]+this.groundedDir[1]*kt,this.state.position[2]=q.position[2]+this.groundedDir[2]*kt}if(this.grounded){const q=qe(this.state.position,this.system),st=this.state.position[0]-q.position[0],dt=this.state.position[1]-q.position[1],vt=this.state.position[2]-q.position[2],kt=Math.sqrt(st*st+dt*dt+vt*vt),Jt=q.radius??6371e3;kt>Jt*1.1&&(this.state.velocity=[0,0,0],this.state.position[0]=q.position[0]+st/kt*(Jt+10),this.state.position[1]=q.position[1]+dt/kt*(Jt+10),this.state.position[2]=q.position[2]+vt/kt*(Jt+10))}for(const q of this.system.bodies)q.syncMesh?.();if(this.debris.length>0){const q=qe(this.state.position,this.system);for(let st=this.debris.length-1;st>=0;st--){const dt=this.debris[st];if(dt.life-=e,dt.life<=0||dt.body.mass<=0){this.sceneMgr.scene.remove(dt.mesh),this.debris.splice(st,1);continue}const vt=hu(dt.body,this.system.bodies);dt.body.applyForce(vt,e),dt.mesh.position.set(dt.body.position[0]*ee,dt.body.position[1]*ee,dt.body.position[2]*ee);const kt=dt.body.position[0]-q.position[0],Jt=dt.body.position[1]-q.position[1],Ze=dt.body.position[2]-q.position[2],on=Math.sqrt(kt*kt+Jt*Jt+Ze*Ze),yn=q.getSurfaceRadiusAt?.(dt.body.position)??q.radius??6371e3;on<yn&&(this.sceneMgr.scene.remove(dt.mesh),this.debris.splice(st,1))}}this.updateExplosion(e);const E=qe(this.state.position,this.system),D=this.state.position[0]-E.position[0],N=this.state.position[1]-E.position[1],K=this.state.position[2]-E.position[2],I=Math.sqrt(D*D+N*N+K*K)||1,U=new C(D/I,N/I,K/I);if(this.rocketShadow&&(this.rocketShadow.visible=this.grounded&&!this.crashed),!this.crashed){if(this.rocketGroup.position.set(this.state.position[0]*ee,this.state.position[1]*ee,this.state.position[2]*ee),this.cameraMode==="free"){const q=new C(this.state.position[0]*ee,this.state.position[1]*ee,this.state.position[2]*ee);this.freeCamPos.lerp(q.clone().add(new C(0,2,5)),e*2),this.freeCamLook.lerp(q,e*2),this.sceneMgr.camera.position.copy(this.freeCamPos),this.sceneMgr.camera.lookAt(this.freeCamLook)}else this.chase.follow(this.state,e,U,n);this.deployedChuteMesh&&(this.deployedChuteMesh.position.set(this.state.position[0]*ee,this.state.position[1]*ee+.02,this.state.position[2]*ee),this.deployedChuteMesh.rotation.copy(this.rocketGroup.rotation))}const k=v&&v.radius?x-v.radius:0,Y=this.countStages(this.rocket.assembly.roots),j=zi(this.state.rocket.assembly.roots);if(j&&j.thrust){const q=j.thrust*1e3*this.state.throttle,st=qe(this.state.position,this.system),dt=this.state.position[0]-st.position[0],vt=this.state.position[1]-st.position[1],kt=this.state.position[2]-st.position[2],Jt=Math.sqrt(dt*dt+vt*vt+kt*kt)||1,Ze=Es*st.mass/(Jt*Jt),on=this.state.rocket.totalMass()*Ze;this.hud.setTWR(q/(on||1))}else this.hud.setTWR(0);let $,Q,ot,z,O,Z;const P=qe(this.state.position,this.system);if(P&&P.mass>0){const q=[(this.state.position[0]-P.position[0])*ee,(this.state.position[1]-P.position[1])*ee,(this.state.position[2]-P.position[2])*ee],st=tr(q,this.state.velocity,P.mass,5e14,360);st.bound&&($=st.apoapsis,Q=st.periapsis,ot=st.timeToAp,z=st.timeToPe,O=st.eccentricity,Z=st.timeToAp!==void 0&&st.timeToPe!==void 0?(st.timeToAp+st.timeToPe)*2:void 0)}if(this.impactMarker){const q=qe(this.state.position,this.system),st=[this.state.position[0]-q.position[0],this.state.position[1]-q.position[1],this.state.position[2]-q.position[2]],dt=tr(st,this.state.velocity,q.mass,5e14,360);if(dt.points.length>10&&!dt.bound){const vt=dt.points[dt.points.length-1],kt=q.getSurfaceRadiusAt?.([vt[0],0,vt[1]])??q.radius??6371e3;q.position[0]+vt[0],q.position[2]+vt[1];const Jt=Math.sqrt(vt[0]*vt[0]+vt[1]*vt[1]);if(Jt>kt*.5){const Ze=q.position[0]+vt[0]/Jt*kt,on=q.position[2]+vt[1]/Jt*kt;this.impactMarker.position.set(Ze*ee,0,on*ee),this.impactMarker.visible=!0}else this.impactMarker.visible=!1}else this.impactMarker.visible=!1}this.hud.update(this.state,this.system,0,Y,$,Q,ot,z,this.missionTime,O,Z),this.hud.setSAS(this.sasMode);const lt=qe(this.state.position,this.system),mt=[(this.state.position[0]-lt.position[0])*ee,(this.state.position[1]-lt.position[1])*ee,(this.state.position[2]-lt.position[2])*ee],Rt=tr(mt,this.state.velocity,lt.mass,5e14,90);if(Rt.points.length>5){if(!this.orbitLine){const st=new Pe,dt=new Float32Array(Rt.points.length*3);st.setAttribute("position",new Ce(dt,3));const vt=new vo({color:Rt.bound?4491468:14527044,transparent:!0,opacity:.3,depthWrite:!1});this.orbitLine=new xo(st,vt),this.sceneMgr.scene.add(this.orbitLine)}const q=this.orbitLine.geometry.attributes.position;for(let st=0;st<Rt.points.length;st++)q.array[st*3]=lt.position[0]*ee+Rt.points[st][0],q.array[st*3+1]=this.state.position[1]*ee,q.array[st*3+2]=lt.position[2]*ee+Rt.points[st][1];q.needsUpdate=!0,this.orbitLine.geometry.setDrawRange(0,Rt.points.length),this.orbitLine.material.color.set(Rt.bound?4491468:14527044),this.orbitLine.visible=!0}else this.orbitLine&&(this.orbitLine.visible=!1);k>this.maxAlt&&(this.maxAlt=k),y>this.maxSpeed&&(this.maxSpeed=y),this.hud.setRecord(`Alt ${(this.maxAlt/1e3).toFixed(0)}km Spd ${this.maxSpeed.toFixed(0)}m/s`);const Ut=[100,500,1e3,5e3,1e4,5e4,1e5,5e5,1e6];for(const q of Ut)if(k>=q&&this.lastAltMilestone<q){this.lastAltMilestone=q,Ae.show(`Altitude: ${q>=1e3?q/1e3+"km":q+"m"}`);break}const It=zi(this.state.rocket.assembly.roots);if(It&&It.thrust){const q=this.state.rocket.totalMass(),st=q-this.state.rocket.totalFuelMass(),dt=320;if(st>0&&q>st){const kt=dt*9.80665*Math.log(q/st);this.hud.setDeltaV(kt)}else this.hud.setDeltaV(0);this.hud.setIsp(dt)}else this.hud.setDeltaV(-1),this.hud.setIsp(0);const Mt=this.state.velocity[0]-this.prevVel[0],B=this.state.velocity[1]-this.prevVel[1],Ee=this.state.velocity[2]-this.prevVel[2],At=Math.sqrt(Mt*Mt+B*B+Ee*Ee),Pt=e>0?At/(e*9.80665):1;if(this.hud.setGForce(Pt),this.hud.setGForceEnabled(Pt>1.1),this.hud.setDebris(this.debris.length),Math.sqrt(this.state.velocity[0]*this.state.velocity[0]+this.state.velocity[2]*this.state.velocity[2])>.5){const q=(Math.atan2(this.state.velocity[0],this.state.velocity[2])*180/Math.PI+360)%360;this.hud.setHeading(q)}const re=new C(0,1,0).applyQuaternion(this.rocketQuat);if(Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2)>1){const q=new C(this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]).normalize(),st=Math.acos(Math.min(1,Math.max(-1,re.dot(q))))*180/Math.PI;this.hud.setAoA(st)}const A=qe(this.state.position,this.system),M=this.state.position[0]-A.position[0],G=this.state.position[1]-A.position[1],rt=this.state.position[2]-A.position[2],nt=Math.sqrt(M*M+G*G+rt*rt)||1,it=Math.asin(G/nt)*180/Math.PI,Et=Math.atan2(M,rt)*180/Math.PI;this.hud.setLatLon(it,(Et+360)%360);const gt=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2)/340;if(this.hud.setMach(gt),gt>.98&&gt<1.02&&!this.sonicBoomRing&&k<15e3){const q=new Rn(.5,1.5,32),st=new xe({color:16777215,transparent:!0,opacity:.4,side:Re,depthWrite:!1});this.sonicBoomRing=new pt(q,st),this.sonicBoomRing.position.set(0,0,0),this.rocketGroup.add(this.sonicBoomRing),this.sonicBoomLife=0,Ae.show("Sonic boom!")}if(this.sonicBoomRing){this.sonicBoomLife+=e;const q=1+this.sonicBoomLife*40;this.sonicBoomRing.scale.setScalar(q),this.sonicBoomRing.material.opacity=Math.max(0,.4*(1-this.sonicBoomLife)),this.sonicBoomLife>2&&(this.rocketGroup.remove(this.sonicBoomRing),this.sonicBoomRing.geometry.dispose(),this.sonicBoomRing.material.dispose(),this.sonicBoomRing=null)}if(this.prevVel=[this.state.velocity[0],this.state.velocity[1],this.state.velocity[2]],Pt>2.5?this.screenShake=Math.min(1,(Pt-2.5)/5):this.screenShake*=Math.exp(-3*e),this.screenShake>.01){const q=(Math.random()-.5)*this.screenShake*.01,st=(Math.random()-.5)*this.screenShake*.01;this.rocketGroup.position.x+=q,this.rocketGroup.position.z+=st}const Nt=y/1e3,zt=50+Math.min(30,Nt*.1);this.sceneMgr.camera.fov+=(zt-this.sceneMgr.camera.fov)*e*2,this.sceneMgr.camera.updateProjectionMatrix();const et=new C(0,1,0).applyQuaternion(this.rocketQuat),Xt=Math.sqrt(this.state.velocity[0]**2+this.state.velocity[1]**2+this.state.velocity[2]**2),Vt=Xt>.01?[this.state.velocity[0]/Xt,this.state.velocity[1]/Xt,this.state.velocity[2]/Xt]:[0,1,0],Ft=qe(this.state.position,this.system),bt=this.state.position[0]-Ft.position[0],at=this.state.position[1]-Ft.position[1],J=this.state.position[2]-Ft.position[2],wt=Math.sqrt(bt*bt+at*at+J*J)||1,yt=this.state.velocity[0],_t=this.state.velocity[1],tt=this.state.velocity[2],L=at*tt-J*_t,ct=J*yt-bt*tt,ut=bt*_t-at*yt,Ct=Math.sqrt(L*L+ct*ct+ut*ut)||1,Lt=[],se={sun:"#ffdd44",earth:"#4fc3f7",moon:"#aaaacc",venus:"#e8a84c",mars:"#d4733a",jupiter:"#d4a574",saturn:"#f4e4a1",uranus:"#4fd0e8",neptune:"#4b70dd"};for(const q of this.system.bodies){if(q.mass<=0)continue;const st=q.position[0]-this.state.position[0],dt=q.position[1]-this.state.position[1],vt=q.position[2]-this.state.position[2],kt=Math.sqrt(st*st+dt*dt+vt*vt)||1;Lt.push({name:q.name,dir:[st/kt,dt/kt,vt/kt],color:se[q.name]||"#888"})}this.hud.setNavballData([et.x,et.y,et.z],Vt,[bt/wt,at/wt,J/wt],[L/Ct,ct/Ct,ut/Ct],Lt)}performStage(){const t=this.findLowestDecoupler(this.rocket.assembly.roots);if(!t){Ae.show("No decouplers to stage.");return}this.sound.playStaging();const e=this.rocketGroup.getObjectByName(t.part.id);if(e){const n=[],i=[];for(let c=0;c<16;c++){const u=.02+Math.random()*.04,h=new _e(u,4,3),d=new xe({color:c<4?16746564:11184810,transparent:!0,opacity:.9,blending:En,depthWrite:!1}),f=new pt(h,d),m=c/16*Math.PI*2+Math.random()*.3,_=(Math.random()-.5)*.8;f.position.copy(this.rocketGroup.position),f.position.x+=Math.cos(m)*.15,f.position.y+=_*.1,f.position.z+=Math.sin(m)*.15,this.sceneMgr.scene.add(f),f._life=.6+Math.random()*.4,f._age=0,f._vx=Math.cos(m)*(.8+Math.random()*1.5),f._vy=_*.5,f._vz=Math.sin(m)*(.8+Math.random()*1.5),this.explosionMeshes.push(f)}for(;e.children.length>0;){const c=e.children[0],u=new C;c.getWorldPosition(u),n.push(u),i.push(c),c.removeFromParent()}const s=qe(this.state.position,this.system),o=[...this.state.position],a=[s.position[0]-o[0],s.position[1]-o[1],s.position[2]-o[2]],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2])||1;for(let c=0;c<i.length;c++){const u=i[c],h=new un;h.add(u),u.position.set(0,0,0);const d=this.sceneMgr.scene;h.position.copy(n[c]),h.position.x+=(Math.random()-.5)*.5,h.position.y+=(Math.random()-.5)*.5,h.position.z+=(Math.random()-.5)*.5,h.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),d.add(h);const f=1+Math.random()*2,m=[this.state.velocity[0]-a[0]/l*f+(Math.random()-.5)*.5,this.state.velocity[1]-a[1]/l*f+(Math.random()-.5)*.5,this.state.velocity[2]-a[2]/l*f+(Math.random()-.5)*.5],_=new tl("debris",100,o,m);this.debris.push({mesh:h,body:_,life:60})}}this.rocket.removeStage(t),this.achievements.unlock("stage_separate"),Ae.show("Stage separated!")}findLowestDecoupler(t){let e=null;const n=i=>{for(const s of i)s.part.kind==="decoupler"&&(e=s),n(s.children)};return n(t),e}toggleParachute(){if(this.rocket.assembly.roots.some(e=>e.part.kind==="parachute")||this.rocket.assembly.roots.some(e=>e.children.some(n=>n.part.kind==="parachute"))){if(this.parachuteDeployed=!this.parachuteDeployed,this.parachuteDeployed){const e={radius:.6*Ot,height:1*Ot};this.deployedChuteMesh=ka(e),this.sceneMgr.scene.add(this.deployedChuteMesh)}else this.deployedChuteMesh&&(this.sceneMgr.scene.remove(this.deployedChuteMesh),this.deployedChuteMesh=null);Ae.show(this.parachuteDeployed?"Parachute deployed!":"Parachute cut.")}}toggleGear(){this.gearDeployed=!this.gearDeployed;for(const t of this.gearMeshes)t.visible=this.gearDeployed;Ae.show(this.gearDeployed?"Landing gear deployed":"Landing gear retracted")}doCrash(t,e,n,i,s,o,a){this.crashed||(this.crashed=!0,this.achievements.unlock("crash"),this.sound.playCrash(),this.sound.stopEngine(),Ae.show(`CRASH! ${t}`),this.rocketGroup.visible=!1,this.engineFlame.stop(),this.screenShake=3,this.state.position=[e.position[0]+n/o*a,e.position[1]+i/o*a,e.position[2]+s/o*a],this.state.velocity=[0,0,0],this.state.throttle=0,this.spawnExplosion(this.state.position[0]*ee,this.state.position[1]*ee,this.state.position[2]*ee),this.showCrashOverlay(t))}showCrashOverlay(t){const e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999;pointer-events:none;opacity:0;transition:opacity 0.1s;",document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1"}),setTimeout(()=>{e.style.opacity="0"},100),setTimeout(()=>e.remove(),500);const n=document.createElement("div");n.style.cssText=`
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
    `,document.body.appendChild(n),this.crashOverlay=n,n.querySelector("#crash-menu").addEventListener("click",()=>{this.onCrashAction?.("menu")}),n.querySelector("#crash-restart").addEventListener("click",()=>{this.onCrashAction?.("restart")})}updateExplosion(t){if(this.explosionMeshes.length>0)for(let e=this.explosionMeshes.length-1;e>=0;e--){const n=this.explosionMeshes[e],i=n._age+t;n._age=i;const s=n._life,o=i/s;if(o>=1){this.sceneMgr.scene.remove(n),n.geometry.dispose(),n.material.dispose(),this.explosionMeshes.splice(e,1);continue}const a=1+o*6;n.scale.setScalar(a);const l=s<1?2:1;n.material.opacity=Math.max(0,.9*(1-o*l)),n.position.x+=n._vx*t,n.position.y+=n._vy*t,n.position.z+=n._vz*t}}explosionMeshes=[];spawnExplosion(t,e,n){const i=[16746496,16729088,16720384,16737792,13386752,16755200],s=new pt(new _e(.8,12,8),new xe({color:16755200,transparent:!0,opacity:1,blending:En,depthWrite:!1}));s.position.set(t,e,n),s._life=.8,s._age=0,this.sceneMgr.scene.add(s),this.explosionMeshes.push(s);for(let o=0;o<8;o++){const a=1+Math.random()*1.5,l=new _e(a,8,6),c=new xe({color:i[o%i.length],transparent:!0,opacity:.9,blending:En,depthWrite:!1}),u=new pt(l,c),h=o/8*Math.PI*2,d=Math.random()*Math.PI,f=.3;u.position.set(t+Math.sin(h)*Math.cos(d)*f,e+Math.sin(d)*f,n+Math.cos(h)*Math.cos(d)*f),u._life=1.5+Math.random()*.5,u._age=0,u._vx=Math.sin(h)*Math.cos(d)*(1+Math.random()*3),u._vy=Math.sin(d)*(1+Math.random()*3),u._vz=Math.cos(h)*Math.cos(d)*(1+Math.random()*3),this.sceneMgr.scene.add(u),this.explosionMeshes.push(u)}for(let o=0;o<4;o++){const a=1.5+Math.random()*2,l=new xe({color:4473924,transparent:!0,opacity:.4,blending:mi,depthWrite:!1}),c=new pt(new _e(a,6,6),l),u=o/4*Math.PI*2+Math.random()*.5;c.position.set(t+Math.cos(u)*.5,e+(Math.random()-.5)*.3,n+Math.sin(u)*.5),c._life=2+Math.random()*.5,c._age=0,c._vx=Math.cos(u)*(.5+Math.random()*1.5),c._vy=(Math.random()-.5)*1,c._vz=Math.sin(u)*(.5+Math.random()*1.5),this.sceneMgr.scene.add(c),this.explosionMeshes.push(c)}}hasLandingLegs(){const t=e=>{for(const n of e)if(n.part.kind==="legs"||t(n.children))return!0;return!1};return t(this.rocket.assembly.roots)}positionFlameAtNozzle(){let t=1/0;this.rocketGroup.traverse(n=>{if(n instanceof pt){const i=new dn().setFromObject(n);i.min.y<t&&(t=i.min.y)}});const e=t===1/0?-.1:t-.01;this.engineFlame.getMesh().position.set(0,e,0),this.engineFlame.getMesh().rotation.set(0,0,0)}dispose(){this.crashOverlay&&(this.crashOverlay.remove(),this.crashOverlay=null),this.sceneMgr.scene.remove(this.rocketGroup);for(const t of this.debris)this.sceneMgr.scene.remove(t.mesh);this.debris=[];for(const t of this.explosionMeshes)this.sceneMgr.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.explosionMeshes=[],this.controls.dispose(),this.engineFlame.dispose(),this.groundSmoke.dispose(),this.hud.unmount(),this.sound.dispose()}}function Xv(r,t,e){const n=r.mass,i=[...r.position],s=[...r.velocity],o=Le(t(r),1/n),a=s,c=ga(r,ze(i,Le(o,.5*e)),ze(s,Le(a,.5*e))),u=Le(t(c),1/n),h=ze(s,Le(o,.5*e)),f=ga(r,ze(i,Le(u,.5*e)),ze(s,Le(h,.5*e))),m=Le(t(f),1/n),_=ze(s,Le(u,.5*e)),p=ga(r,ze(i,Le(m,e)),ze(s,Le(_,e))),v=Le(t(p),1/n),x=ze(s,Le(m,e)),S=Le(ze(ze(o,Le(u,2)),ze(Le(m,2),v)),e/6),b=Le(ze(ze(a,Le(h,2)),ze(Le(_,2),x)),e/6);r.position=ze(i,b),r.velocity=ze(s,S)}function ga(r,t,e){return{...r,position:t,velocity:e}}function ze(r,t){return[r[0]+t[0],r[1]+t[1],r[2]+t[2]]}function Le(r,t){return[r[0]*t,r[1]*t,r[2]*t]}class qv{bodies=[];add(t){this.bodies.push(t)}bodyByName(t){return this.bodies.find(e=>e.name===t)}propagate(t,e){let n=t;for(;n>0;){const i=Math.min(e,n);this.step(i),n-=i}}step(t){for(const e of this.bodies){if(e.mass<=0)continue;const n=hu(e,this.bodies);Xv(e,()=>n,t)}}}const si=jn*$n;class Kn extends tl{radius;visualRadius;mesh;constructor(t,e,n,i,s){super(t,e,n,i),this.radius=s,this.visualRadius=s*si;const o=new _e(this.visualRadius,64,32),a=new Me({color:8421504});this.mesh=new pt(o,a),this.mesh.position.set(n[0]*si,n[1]*si,n[2]*si)}getTerrainHeightVisual(t,e,n){return 0}syncMesh(){this.mesh.position.set(this.position[0]*si,this.position[1]*si,this.position[2]*si)}getSurfaceRadiusAt(t){const e=t[0]-this.position[0],n=t[1]-this.position[1],i=t[2]-this.position[2],s=Math.sqrt(e*e+n*n+i*i);if(s===0)return this.radius;const o=e/s,a=n/s,l=i/s,u=this.getTerrainHeightVisual(o,a,l)/si;return this.radius+u}}const _a=jn*$n,eh=64,ri=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},Yv=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=ri(n,i,s),f=ri(n+1,i,s),m=ri(n,i+1,s),_=ri(n+1,i+1,s),g=ri(n,i,s+1),p=ri(n+1,i,s+1),v=ri(n,i+1,s+1),x=ri(n+1,i+1,s+1);return Li(Li(Li(d,f,c),Li(m,_,c),u),Li(Li(g,p,c),Li(v,x,c),u),h)},qr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Yv(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Li=(r,t,e)=>r+(t-r)*e;class jv extends Kn{getTerrainHeightVisual(t,e,n){const i=qr(t*10+500,e*10+600,n*10+700,4),s=qr(t*40+100,e*40+200,n*40+300,3),o=i*.8+s*.2,a=this.visualRadius*.03;return o>.4?((o-.4)/.6)**2*a:-(.4-o)/.4*a*.12}constructor(t,e){super("mercury",1e24,t,e,244e4);const n=this.visualRadius,s=new Nn().load(Fn("/textures/mercury.jpg"),h=>{h.colorSpace=ie,h.anisotropy=4}),o=new _e(n,eh,eh),a=o.attributes.position,l=new C,c=n*.03;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,m=l.z/n,_=qr(d*10+500,f*10+600,m*10+700,4),g=qr(d*40+100,f*40+200,m*40+300,3),p=_*.8+g*.2;let v=0;p>.4?v=((p-.4)/.6)**2*c:v=-(.4-p)/.4*c*.12,l.setLength(n+v),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new Me({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new pt(o,u),this.mesh.position.set(t[0]*_a,t[1]*_a,t[2]*_a)}}const $v=`
varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vNormal  = normalize(normalMatrix * normal);
  vViewDir = normalize(cameraPosition - worldPos.xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,Kv=`
uniform vec3  glowColor;
uniform float intensity;

varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  float fresnel = pow(1.0 - abs(dot(vNormal, vViewDir)), 3.0);
  float alpha = fresnel * intensity;
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(glowColor, alpha);
}
`,Zv=1.04;class Bs{mesh;constructor(t,e=4491519,n=.7){const i=t*Zv,s=new _e(i,48,24),o=new In({vertexShader:$v,fragmentShader:Kv,uniforms:{glowColor:{value:new Dt(e)},intensity:{value:n}},transparent:!0,blending:En,depthWrite:!1,side:Ln});this.mesh=new pt(s,o)}getMesh(){return this.mesh}}const va=jn*$n,nh=64,oi=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},Jv=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=oi(n,i,s),f=oi(n+1,i,s),m=oi(n,i+1,s),_=oi(n+1,i+1,s),g=oi(n,i,s+1),p=oi(n+1,i,s+1),v=oi(n,i+1,s+1),x=oi(n+1,i+1,s+1);return Ii(Ii(Ii(d,f,c),Ii(m,_,c),u),Ii(Ii(g,p,c),Ii(v,x,c),u),h)},Yr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*Jv(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Ii=(r,t,e)=>r+(t-r)*e;class Qv extends Kn{getTerrainHeightVisual(t,e,n){const i=Yr(t*6+50,e*6+100,n*6+150,4),s=Yr(t*15+200,e*15+300,n*15+400,3),o=i*.6+s*.4,a=this.visualRadius*.015;return o>.35?((o-.35)/.65)**2*a:-(.35-o)/.35*a*.05}atmosphereGlow;constructor(t,e){super("venus",146e23,t,e,6052e3);const n=this.visualRadius,s=new Nn().load(Fn("/textures/venus.jpg"),h=>{h.colorSpace=ie,h.anisotropy=4}),o=new _e(n,nh,nh),a=o.attributes.position,l=new C,c=n*.015;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,m=l.z/n,_=Yr(d*6+50,f*6+100,m*6+150,4),g=Yr(d*15+200,f*15+300,m*15+400,3),p=_*.6+g*.4;let v=0;p>.35?v=((p-.35)/.65)**2*c:v=-(.35-p)/.35*c*.05,l.setLength(n+v),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new Me({map:s,roughness:.9,metalness:0,color:16777215});this.mesh=new pt(o,u),this.mesh.position.set(t[0]*va,t[1]*va,t[2]*va),this.atmosphereGlow=new Bs(n,15247436,.4),this.mesh.add(this.atmosphereGlow.getMesh())}}const xa=jn*$n;function tx(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#1a3a6a"),i.addColorStop(.5,"#2a6daa"),i.addColorStop(1,"#1a4a8a"),n.fillStyle=i,n.fillRect(0,0,1024,512);const s=[{lat:.7,lon:-2,rx:.55,ry:.5,color:"#5a8c3f"},{lat:.65,lon:-1.6,rx:.35,ry:.35,color:"#6a9c4f"},{lat:-.35,lon:-1.4,rx:.4,ry:.6,color:"#6a9c4f"},{lat:.85,lon:.4,rx:.2,ry:.22,color:"#7aac5a"},{lat:.1,lon:.6,rx:.45,ry:.5,color:"#8a9c4f"},{lat:.5,lon:1.5,rx:.6,ry:.4,color:"#7a9c4a"},{lat:.3,lon:1.1,rx:.25,ry:.15,color:"#8aac5a"},{lat:-.4,lon:1.7,rx:.15,ry:.35,color:"#7a9c4f"},{lat:1,lon:-2.5,rx:.08,ry:.1,color:"#6a9c4f"},{lat:-.7,lon:-1.1,rx:.08,ry:.08,color:"#7aac5a"}];for(const a of s){n.fillStyle=a.color,n.beginPath();const l=(a.lon+Math.PI)/(2*Math.PI)*1024,c=(Math.PI/2-a.lat)/Math.PI*512,u=a.rx/(2*Math.PI)*1024,h=a.ry/Math.PI*512;n.ellipse(l,c,u,h,0,0,Math.PI*2),n.fill();const d=a.lat*1e3+a.lon*100,f=(()=>{let m=d|0;return()=>{m=m+1831565813|0;let _=Math.imul(m^m>>>15,1|m);return _=_+Math.imul(_^_>>>7,61|_)^_,((_^_>>>14)>>>0)/4294967296}})();for(let m=0;m<80;m++){const _=(f()-.5)*u*1.8,g=(f()-.5)*h*1.8;(_/u)**2+(g/h)**2<1&&(n.fillStyle=f()>.5?"#2a5c1f":"#6a9c4a",n.beginPath(),n.arc(l+_,c+g,1+f()*4,0,Math.PI*2),n.fill())}}n.fillStyle="#c0d8e8",n.fillRect(0,0,1024,512*.05),n.fillRect(0,512*.95,1024,512*.05);const o=new wn(e);return o.wrapS=o.wrapT=tn,o.colorSpace=ie,o}class ex extends Kn{constructor(t,e){super("earth",av,t,e,6371e3);const n=this.visualRadius,i=200,s=new _e(n,i,i),o=new Me({roughness:.9,metalness:0,bumpMap:uv(),bumpScale:.5});this.mesh=new pt(s,o),this.mesh.position.set(t[0]*xa,t[1]*xa,t[2]*xa),this.generateTerrain(n);const a=tx();o.map=a,o.needsUpdate=!0,this.loadHighResTexture().catch(()=>{})}async loadHighResTexture(){const e=await new Nn().loadAsync(Fn("/textures/earth_daymap.jpg"));e.colorSpace=ie,e.anisotropy=8;const n=this.mesh.material;n.map=e,n.needsUpdate=!0}getTerrainHeightVisual(t,e,n){const i=Math.sin(t*3+e*1.8)*.5+Math.cos(e*2.5-n*1.3)*.3,s=Math.sin(n*1.8+t*1.2+e*.6)*.2+Math.sin(t*6+e*3+n*4)*.15,o=Math.sin(t*12+n*8)*.1+Math.cos(e*10+t*5)*.08,a=Math.sin(t*25+e*20+n*30)*.05,l=((i+s+o+a)*.3+.5)*1.2,c=this.visualRadius*.025,u=this.visualRadius*.005;if(l>.4){const h=(l-.4)/.6;return h*h*c}return-(.4-l)/.4*u}generateTerrain(t){const e=this.mesh.geometry,n=e.attributes.position,i=new C;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);const o=i.x/t,a=i.y/t,l=i.z/t,c=this.getTerrainHeightVisual(o,a,l);i.setLength(t+c),n.setXYZ(s,i.x,i.y,i.z)}n.needsUpdate=!0,e.computeVertexNormals()}}const ya=jn*$n,ih=64,ai=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},nx=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=ai(n,i,s),f=ai(n+1,i,s),m=ai(n,i+1,s),_=ai(n+1,i+1,s),g=ai(n,i,s+1),p=ai(n+1,i,s+1),v=ai(n,i+1,s+1),x=ai(n+1,i+1,s+1);return Di(Di(Di(d,f,c),Di(m,_,c),u),Di(Di(g,p,c),Di(v,x,c),u),h)},jr=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*nx(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Di=(r,t,e)=>r+(t-r)*e;class ix extends Kn{getTerrainHeightVisual(t,e,n){const i=jr(t*8+100,e*8+200,n*8+300,4),s=jr(t*30+400,e*30+500,n*30+600,3),o=i*.7+s*.3,a=this.visualRadius*.04;return o>.45?((o-.45)/.55)**2*a:-(.45-o)/.45*a*.15}constructor(t,e){super("moon",22e22,t,e,1737e3);const n=this.visualRadius,s=new Nn().load(Fn("/textures/moon.jpg"),h=>{h.colorSpace=ie,h.anisotropy=4}),o=new _e(n,ih,ih),a=o.attributes.position,l=new C,c=n*.04;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,m=l.z/n,_=jr(d*8+100,f*8+200,m*8+300,4),g=jr(d*30+400,f*30+500,m*30+600,3),p=_*.7+g*.3;let v=0;p>.45?v=((p-.45)/.55)**2*c:v=-(.45-p)/.45*c*.15,l.setLength(n+v),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new Me({map:s,roughness:.95,metalness:0,color:16777215});this.mesh=new pt(o,u),this.mesh.position.set(t[0]*ya,t[1]*ya,t[2]*ya)}}const Ma=jn*$n,sh=64,li=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},sx=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=li(n,i,s),f=li(n+1,i,s),m=li(n,i+1,s),_=li(n+1,i+1,s),g=li(n,i,s+1),p=li(n+1,i,s+1),v=li(n,i+1,s+1),x=li(n+1,i+1,s+1);return Ui(Ui(Ui(d,f,c),Ui(m,_,c),u),Ui(Ui(g,p,c),Ui(v,x,c),u),h)},$r=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*sx(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Ui=(r,t,e)=>r+(t-r)*e;class rx extends Kn{getTerrainHeightVisual(t,e,n){const i=$r(t*4+10,e*4+20,n*4+30,5),s=$r(t*20+100,e*20+200,n*20+300,3),o=i*.7+s*.3,a=this.visualRadius*.035;return o>.4?((o-.4)/.6)**2*a:-(.4-o)/.4*a*.1}atmosphereGlow;constructor(t,e){super("mars",19e23,t,e,339e4);const n=this.visualRadius,s=new Nn().load(Fn("/textures/mars.jpg"),h=>{h.colorSpace=ie,h.anisotropy=4}),o=new _e(n,sh,sh),a=o.attributes.position,l=new C,c=n*.035;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,m=l.z/n,_=$r(d*4+10,f*4+20,m*4+30,5),g=$r(d*20+100,f*20+200,m*20+300,3),p=_*.7+g*.3;let v=0;p>.4?v=((p-.4)/.6)**2*c:v=-(.4-p)/.4*c*.1,l.setLength(n+v),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new Me({map:s,roughness:.85,metalness:0,color:16777215});this.mesh=new pt(o,u),this.mesh.position.set(t[0]*Ma,t[1]*Ma,t[2]*Ma),this.atmosphereGlow=new Bs(n,13920842,.25),this.mesh.add(this.atmosphereGlow.getMesh())}}const rh=64,ci=(r,t,e)=>{const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)},ox=(r,t,e)=>{const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=ci(n,i,s),f=ci(n+1,i,s),m=ci(n,i+1,s),_=ci(n+1,i+1,s),g=ci(n,i,s+1),p=ci(n+1,i,s+1),v=ci(n,i+1,s+1),x=ci(n+1,i+1,s+1);return Ni(Ni(Ni(d,f,c),Ni(m,_,c),u),Ni(Ni(g,p,c),Ni(v,x,c),u),h)},oh=(r,t,e,n)=>{let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*ox(r*l,t*l,e*l),o+=s,s*=.5}return i/o},Ni=(r,t,e)=>r+(t-r)*e;class ax extends Kn{atmosphereGlow;constructor(t,e){super("jupiter",19e26,t,e,69911e3);const n=this.visualRadius;new Nn().load(Fn("/textures/jupiter.jpg"),u=>{u.colorSpace=ie,u.anisotropy=4});const s=new _e(n,rh,rh),o=s.attributes.position,a=new C,l=n*.02;for(let u=0;u<o.count;u++){a.fromBufferAttribute(o,u);const h=a.x/n,d=a.y/n,f=a.z/n,m=oh(h*8+10,d*8+20,f*8+30,4),_=oh(h*30+100,d*30+200,f*30+300,3),g=m*.7+_*.3;let p=0;g>.4?p=((g-.4)/.6)**2*l:p=-(.4-g)/.4*l*.1,a.setLength(n+p),o.setXYZ(u,a.x,a.y,a.z)}o.needsUpdate=!0,s.computeVertexNormals();const c=new Me({map:void 0,roughness:.9,metalness:0,color:13935988});this.mesh=new pt(s,c),this.mesh.position.set(0,0,0),this.mesh.rotation.z=3.1*Math.PI/180,this.atmosphereGlow=new Bs(n,13935988,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}function hi(r,t,e){const n=Math.sin(r*127.1+t*311.7+e*74.9)*43758.5453;return n-Math.floor(n)}function lx(r,t,e){const n=Math.floor(r),i=Math.floor(t),s=Math.floor(e),o=r-n,a=t-i,l=e-s,c=o*o*(3-2*o),u=a*a*(3-2*a),h=l*l*(3-2*l),d=hi(n,i,s),f=hi(n+1,i,s),m=hi(n,i+1,s),_=hi(n+1,i+1,s),g=hi(n,i,s+1),p=hi(n+1,i,s+1),v=hi(n,i+1,s+1),x=hi(n+1,i+1,s+1);return Fi(Fi(Fi(d,f,c),Fi(m,_,c),u),Fi(Fi(g,p,c),Fi(v,x,c),u),h)}function Us(r,t,e,n){let i=0,s=1,o=0;for(let a=0;a<n;a++){const l=1<<a;i+=s*lx(r*l,t*l,e*l),o+=s,s*=.5}return i/o}function Fi(r,t,e){return r+(t-r)*e}function cx(){const e=document.createElement("canvas");e.width=1024,e.height=64;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,1024,0);i.addColorStop(0,"#8a7a5a"),i.addColorStop(.05,"#b8a888"),i.addColorStop(.12,"#d4c8a8"),i.addColorStop(.2,"#c0b898"),i.addColorStop(.35,"#e8ddd0"),i.addColorStop(.5,"#c0b090"),i.addColorStop(.65,"#d8ccb0"),i.addColorStop(.8,"#a89878"),i.addColorStop(.9,"#786858"),i.addColorStop(1,"#584838"),n.fillStyle=i,n.fillRect(0,0,1024,64);for(let o=0;o<8e3;o++){const a=Math.random()*1024,l=Math.random()*64,c=1+Math.random()*4,u=120+Math.random()*80;n.fillStyle=`rgba(${u},${u-20},${u-40},${.2+Math.random()*.4})`,n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.fill()}n.fillStyle="rgba(0,0,0,0.7)",n.fillRect(1024*.43,0,1024*.04,64),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(1024*.72,0,1024*.015,64),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(1024*.1,0,1024*.02,64),n.fillRect(1024*.17,0,1024*.01,64),n.fillRect(1024*.55,0,1024*.02,64),n.fillStyle="rgba(200,190,170,0.15)";for(let o=0;o<1024;o+=8)n.fillRect(o,0,2,64);const s=new wn(e);return s.wrapS=tn,s.wrapT=tn,s.anisotropy=4,s}class hx extends Kn{atmosphereGlow;constructor(t,e){super("saturn",5683e23,t,e,58232e3);const n=this.visualRadius,s=new Nn().load(Fn("/textures/saturn.jpg"),v=>{v.colorSpace=ie,v.anisotropy=4}),o=new _e(n,64,32),a=o.attributes.position,l=new C,c=n*.015;for(let v=0;v<a.count;v++){l.fromBufferAttribute(a,v);const x=l.x/n,S=l.y/n,b=l.z/n,w=Us(x*8+10,S*8+20,b*8+30,4),R=Us(x*30+100,S*30+200,b*30+300,3),H=w*.7+R*.3;let y=0;H>.4?y=((H-.4)/.6)**2*c:y=-(.4-H)/.4*c*.1,l.setLength(n+y),a.setXYZ(v,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new Me({map:s,roughness:.9,metalness:0,color:16049313});this.mesh=new pt(o,u),this.mesh.position.set(0,0,0),this.mesh.rotation.z=26.7*Math.PI/180,this.atmosphereGlow=new Bs(n,16049313,.1),this.mesh.add(this.atmosphereGlow.getMesh());const h=cx(),d=new Rn(n*1.15,n*2.4,256),f=new xe({map:h,side:Re,transparent:!0,opacity:.8,depthWrite:!1}),m=new pt(d,f);m.rotation.x=-Math.PI/2,m.rotation.z=26.7*Math.PI/180,this.mesh.add(m);const _=new Rn(n*2.4,n*2.8,128),g=new xe({color:8943720,side:Re,transparent:!0,opacity:.15,depthWrite:!1}),p=new pt(_,g);p.rotation.x=-Math.PI/2,p.rotation.z=26.7*Math.PI/180,this.mesh.add(p)}}class ux extends Kn{atmosphereGlow;constructor(t,e){super("uranus",8681e22,t,e,25362e3);const n=this.visualRadius,s=new Nn().load(Fn("/textures/uranus.jpg"),m=>{m.colorSpace=ie,m.anisotropy=4}),o=new _e(n,64,32),a=o.attributes.position,l=new C,c=n*.015;for(let m=0;m<a.count;m++){l.fromBufferAttribute(a,m);const _=l.x/n,g=l.y/n,p=l.z/n,v=Us(_*6+10,g*6+20,p*6+30,4),x=Us(_*25+400,g*25+500,p*25+600,3),S=v*.7+x*.3;let b=0;S>.4?b=((S-.4)/.6)**2*c:b=-(.4-S)/.4*c*.1,l.setLength(n+b),a.setXYZ(m,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new Me({map:s,roughness:.9,metalness:0,color:5230824});this.mesh=new pt(o,u),this.mesh.position.set(0,0,0),this.mesh.rotation.z=-97.8*Math.PI/180,this.atmosphereGlow=new Bs(n,5230824,.1),this.mesh.add(this.atmosphereGlow.getMesh());const h=new Rn(n*1.2,n*2.1,64),d=new xe({color:11184844,side:Re,transparent:!0,opacity:.3}),f=new pt(h,d);f.rotation.x=-Math.PI/2,f.rotation.z=97.8*Math.PI/180,this.mesh.add(f)}}class dx extends Kn{atmosphereGlow;constructor(t,e){super("neptune",1024e23,t,e,24622e3);const n=this.visualRadius,s=new Nn().load(Fn("/textures/neptune.jpg"),h=>{h.colorSpace=ie,h.anisotropy=4}),o=new _e(n,64,32),a=o.attributes.position,l=new C,c=n*.015;for(let h=0;h<a.count;h++){l.fromBufferAttribute(a,h);const d=l.x/n,f=l.y/n,m=l.z/n,_=Us(d*6+10,f*6+20,m*6+30,4),g=Us(d*25+100,f*25+200,m*25+300,3),p=_*.7+g*.3;let v=0;p>.4?v=((p-.4)/.6)**2*c:v=-(.4-p)/.4*c*.1,l.setLength(n+v),a.setXYZ(h,l.x,l.y,l.z)}a.needsUpdate=!0,o.computeVertexNormals();const u=new Me({map:s,roughness:.9,metalness:0,color:4944093});this.mesh=new pt(o,u),this.mesh.position.set(0,0,0),this.mesh.rotation.z=28.3*Math.PI/180,this.atmosphereGlow=new Bs(n,4944093,.15),this.mesh.add(this.atmosphereGlow.getMesh())}}const ys=jn*$n,fx=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
`,px=`
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
`;class mx extends tl{light;visualRadius;mesh;constructor(t,e,n=2e26){super("sun",n,t,e),this.visualRadius=100;const i=new _e(this.visualRadius,32,16),s=new In({vertexShader:fx,fragmentShader:px,uniforms:{uTime:{value:0},uColor:{value:new Dt(16763904)},uIntensity:{value:1.5}},transparent:!0,blending:En,depthWrite:!1,side:Re});this.mesh=new pt(i,s),this.mesh.position.set(t[0]*ys,t[1]*ys,t[2]*ys),this.light=new cr(16772829,2.5),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z);const o=gx(),a=new qh({map:o,blending:En,depthWrite:!1,transparent:!0,opacity:1}),l=new Hg(a);l.scale.set(25e4,25e4,1),this.mesh.add(l),this.sunMaterial=s}sunMaterial;update(t){this.sunMaterial.uniforms.uTime.value+=t}syncMesh(){this.mesh.position.set(this.position[0]*ys,this.position[1]*ys,this.position[2]*ys),this.light.position.set(this.mesh.position.x+100,this.mesh.position.y+50,this.mesh.position.z)}}function gx(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255, 220, 100, 1)"),n.addColorStop(.1,"rgba(255, 200, 80, 0.8)"),n.addColorStop(.3,"rgba(255, 160, 40, 0.4)"),n.addColorStop(.5,"rgba(255, 100, 20, 0.15)"),n.addColorStop(.7,"rgba(255, 60, 10, 0.05)"),n.addColorStop(1,"rgba(255, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,256,256);const i=new wn(t);return i.needsUpdate=!0,i}class ah{assembly;fuelTanks;constructor(t){this.assembly=t,this.fuelTanks=[],uu(t.roots,this.fuelTanks)}dryMass(){return this.assembly.totalMass()}totalFuelMass(){return this.fuelTanks.reduce((t,e)=>t+e.remaining,0)}totalMass(){return this.dryMass()+this.totalFuelMass()}consumeFuel(t,e){let n=0;for(let i=this.fuelTanks.length-1;i>=0;i--){const s=this.fuelTanks[i];if(s.remaining<=0)continue;const o=t*e-n;if(o<=0)break;const a=Math.min(s.remaining,o);s.remaining-=a,n+=a}return n}removeStage(t){const e=new Set;du(t,e),e.add(t),this.fuelTanks=this.fuelTanks.filter(n=>!e.has(n.node)),t.children=[]}}function uu(r,t){for(const e of r)e.part.fuelCapacity&&t.push({node:e,remaining:e.part.fuelCapacity,capacity:e.part.fuelCapacity}),uu(e.children,t)}function du(r,t){for(const e of r.children)t.add(e),du(e,t)}const lh="ellipse_achievements";class _x{unlocked=new Set;callbacks=[];constructor(){const t=localStorage.getItem(lh);if(t)try{JSON.parse(t).forEach(e=>this.unlocked.add(e))}catch{}}unlock(t){this.unlocked.has(t)||(this.unlocked.add(t),localStorage.setItem(lh,JSON.stringify([...this.unlocked])),this.callbacks.forEach(e=>e(t)))}isUnlocked(t){return this.unlocked.has(t)}list(){return[...this.unlocked]}onUnlock(t){this.callbacks.push(t)}}const Sa={units:"metric",autoSave:!0,difficulty:"normal"},fu="ellipse_settings";function vx(){const r=localStorage.getItem(fu);if(!r)return{...Sa};try{return{...Sa,...JSON.parse(r)}}catch{return{...Sa}}}function ch(r){localStorage.setItem(fu,JSON.stringify(r))}class xx{root;onClose;current;constructor(t,e){this.current=t,this.onClose=e,this.root=document.createElement("div"),this.root.style.cssText=`
      position: fixed; inset: 0; z-index: 250;
      background: rgba(6, 8, 20, 0.88);
      display: flex; align-items: center; justify-content: center;
    `;const n=document.createElement("div");n.className="panel panel--elevated",n.style.cssText="padding: var(--space-6); min-width: 400px;";const i=document.createElement("h2");i.className="text-display-sm",i.textContent="Settings",i.style.cssText="margin: 0 0 var(--space-5);",n.appendChild(i);const s=this.makeRow("Units",["metric","imperial","mixed"],t.units,l=>{this.current.units=l});n.appendChild(s);const o=this.makeToggle("Auto-save",t.autoSave,l=>{this.current.autoSave=l});n.appendChild(o);const a=document.createElement("button");a.className="btn btn--primary",a.textContent="Save & Close",a.style.cssText="margin-top: var(--space-4); width: 100%; padding: 12px;",a.addEventListener("click",()=>{ch(this.current),this.onClose()}),n.appendChild(a),this.root.appendChild(n)}makeRow(t,e,n,i){const s=document.createElement("div");s.style.cssText="margin: var(--space-3) 0;";const o=document.createElement("div");o.className="text-caption",o.textContent=t,o.style.cssText="margin-bottom: var(--space-2);",s.appendChild(o);const a=document.createElement("div");a.style.cssText="display:flex;gap:var(--space-2);";for(const l of e){const c=document.createElement("button");c.className=`btn${l===n?" btn--secondary":""}`,c.textContent=l,l===n&&(c.style.borderColor="var(--accent-blue)"),c.addEventListener("click",()=>{i(l),ch(this.current)}),a.appendChild(c)}return s.appendChild(a),s}makeToggle(t,e,n){const i=document.createElement("div");i.style.cssText="margin: var(--space-3) 0; display: flex; justify-content: space-between; align-items: center;";const s=document.createElement("span");s.className="text-body",s.textContent=t;const o=document.createElement("input");return o.type="checkbox",o.checked=e,o.addEventListener("change",()=>n(o.checked)),i.appendChild(s),i.appendChild(o),i}mount(t=document.body){t.appendChild(this.root)}unmount(){this.root.remove()}}function Kr(r){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle=r,e.fillRect(0,0,64,64),e.strokeStyle="#000",e.lineWidth=2,e.strokeRect(0,0,64,64),e.strokeRect(16,16,32,32);const n=new wn(t);return n.wrapS=n.wrapT=rn,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}Kr("#8899aa"),Kr("#808080"),Kr("#808080"),Kr("#000000");async function Gi(r,t=ie){const e=await new Promise((i,s)=>{const o=new Image;o.onload=()=>i(o),o.onerror=()=>s(new Error(`Failed: ${r}`)),o.src=r}),n=new Ie(e);return n.colorSpace=t,n.wrapS=n.wrapT=rn,n.repeat.set(2,1),n.anisotropy=4,n.needsUpdate=!0,n}async function Zr(r){const[t,e,n,i]=await Promise.all([Gi(`/textures/${r}_color.jpg`,ie),Gi(`/textures/${r}_normal.jpg`,ye),Gi(`/textures/${r}_rough.jpg`,ye),Gi(`/textures/${r}_metal.jpg`,ye)]);return{color:t,normal:e,roughness:n,metalness:i}}let yx=!1,Mx=null,Sx=null,bx=null,Tx=null,Ex=null,Jr=null;function wx(){return Jr||(Jr=(async()=>{try{[Mx,Sx,bx,Tx,Ex]=await Promise.all([Zr("metal013"),Zr("plates"),Zr("metal009"),Zr("metal021"),(async()=>{const[r,t,e]=await Promise.all([Gi("/textures/fabric_color.jpg",ie),Gi("/textures/fabric_normal.jpg",ye),Gi("/textures/fabric_rough.jpg",ye)]);return{color:r,normal:t,roughness:e,metalness:e}})()]),yx=!0}catch(r){console.error("Texture loading failed, using fallback",r)}})(),Jr)}class Ax{renderer;sceneMgr;system;achievements;mainMenu;vab;flight;constructor(){wx(),this.renderer=new S_,this.sceneMgr=new T_,this.achievements=new _x,this.system=new qv;const t=2e26;this.system.add(new mx([0,0,0],[0,0,0],t)),this.system.add(new jv([15e7,0,2e7],[0,0,47400])),this.system.add(new Qv([3e8,0,-3e7],[0,0,3e4]));const e=[5e8,0,0],n=[0,0,24e3];this.system.add(new ex(e,n));const i=[e[0],0,e[2]+3844e5],s=[0,0,n[2]+1020];this.system.add(new ix(i,s)),this.system.add(new rx([75e7,5e8,-2e8],[0,0,19500])),this.system.add(new ax([15e8,-3e8,1e8],[0,0,13e3])),this.system.add(new hx([28e8,2e8,-2e8],[0,0,9700])),this.system.add(new ux([55e8,-1e8,3e8],[0,0,6800])),this.system.add(new dx([85e8,4e8,0],[0,0,5400])),document.getElementById("app").appendChild(this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.sceneMgr.camera.aspect=window.innerWidth/window.innerHeight,this.sceneMgr.camera.updateProjectionMatrix()}),this.achievements.onUnlock(o=>Ae.show(`Achievement: ${o}`)),this.preloadModels()}async preloadModels(){const{loadGLTF:t}=await hh(async()=>{const{loadGLTF:n}=await Promise.resolve().then(()=>cu);return{loadGLTF:n}},void 0),e=["/models/agena.glb","/models/saturn_v.glb","/models/apollo_soyuz.glb","/models/ares_1.glb","/models/apollo_lunar_module.glb","/models/atlas_6.glb","/models/atlas_9.glb","/models/crawler.glb"];await Promise.allSettled(e.map(n=>t(n,1))),console.log("GLTF models preloaded:",e.length)}start(){this.showMainMenu(),this.loop()}showMainMenu(){this.unmountCurrent(),this.mainMenu=new E_(()=>this.showFlight(),()=>this.showVab(),()=>this.showSettings()),this.mainMenu.mount()}showSettings(){const t=new xx(vx(),()=>t.unmount());t.mount()}showVab(){this.unmountCurrent(),this.vab=new Lv(t=>{const e=new ah(t);this.showFlight(e)}),this.vab.mount(),this.sceneMgr.scene.add(this.vab.scene)}async showFlight(t){this.unmountCurrent();const e=t?.assembly??new uo;if(!t){const i=Ot;e.addRoot({part:eo("capsule_mk1"),position:[0,1.6*i,0],rotation:0,children:[]}),e.addRoot({part:eo("tank_s_lfo"),position:[0,.8*i,0],rotation:0,children:[]}),e.addRoot({part:eo("engine_ant"),position:[0,0,0],rotation:0,children:[]})}const n=new ah(e);this.flight=new Vv(this.renderer,this.sceneMgr,this.system,n,this.achievements),this.flight.onCrashAction=i=>{i==="menu"?this.showMainMenu():this.showFlight(t)}}unmountCurrent(){this.mainMenu?.unmount(),this.mainMenu=void 0,this.vab&&(this.vab.unmount(),this.sceneMgr.scene.remove(this.vab.scene),this.vab=void 0),this.flight?.dispose(),this.flight=void 0}loop(){const t=.016666666666666666;this.sceneMgr.update(t),this.flight?.update(t),this.vab?this.renderer.three.render(this.vab.scene,this.vab.camera):this.renderer.three.render(this.sceneMgr.scene,this.sceneMgr.camera),requestAnimationFrame(()=>this.loop())}}try{new Ax().start()}catch(r){console.error("Failed to start StarWeld:",r),document.body.innerHTML=`<div style="color:white;padding:32px;font-family:monospace;">
      <h1>StarWeld failed to start</h1>
      <pre>${String(r)}</pre>
    </div>`}
//# sourceMappingURL=index-CZMMw_v4.js.map
